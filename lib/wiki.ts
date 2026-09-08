import {
  getAllContent,
  getContentBySlug,
  type ContentItem,
  type ContentSection,
  type NoteStatus,
  type NoteType,
} from "./content";

/**
 * Wiki layer: `[[slug]]` / `[[slug|label]]` links between notes and essays,
 * backlinks, a build-time graph, and a search index. Everything here runs on
 * the server at build time; client components receive plain serialisable data.
 */

export const WIKI_LINK_RE = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;

/** Where a wiki slug may live, in resolution order. */
const RESOLUTION_ORDER: ContentSection[] = ["notes", "research", "systems", "tracks"];

export type WikiNodeKind = "note" | "essay" | "system" | "track";

export interface WikiTarget {
  slug: string;
  kind: WikiNodeKind;
  href: string;
  title: string;
  summary: string;
  status?: NoteStatus;
  noteType?: NoteType;
}

export interface WikiLinkRef {
  slug: string;
  label?: string;
}

export interface GraphNode {
  id: string;
  kind: WikiNodeKind;
  title: string;
  href: string;
  status?: NoteStatus;
  noteType?: NoteType;
  /** Inbound link count, used for node sizing. */
  inbound: number;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export interface WikiGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface SearchDoc {
  slug: string;
  kind: WikiNodeKind;
  href: string;
  title: string;
  summary: string;
  tags: string[];
  status?: NoteStatus;
  noteType?: NoteType;
  lastReviewed?: string;
  confidence?: string;
  date?: string;
  /** Plain-text body, truncated, for substring search. */
  text: string;
}

function kindForSection(section: ContentSection): WikiNodeKind {
  if (section === "notes") return "note";
  if (section === "systems") return "system";
  if (section === "tracks") return "track";
  return "essay";
}

function hrefFor(section: ContentSection, slug: string): string {
  const seg = section === "writing" ? "research" : section;
  return `/${seg}/${slug}`;
}

/** Extract every wiki link in a markdown body (deduplicated by slug, first label wins). */
export function parseWikiLinks(body: string): WikiLinkRef[] {
  const seen = new Map<string, WikiLinkRef>();
  for (const m of body.matchAll(WIKI_LINK_RE)) {
    const slug = m[1];
    if (!seen.has(slug)) seen.set(slug, { slug, label: m[2]?.trim() });
  }
  return [...seen.values()];
}

/** Resolve a slug to its target across sections. */
export function resolveWikiSlug(slug: string): WikiTarget | null {
  for (const section of RESOLUTION_ORDER) {
    const item = getContentBySlug(section, slug);
    if (item) return toTarget(section, item);
  }
  return null;
}

function toTarget(section: ContentSection, item: ContentItem): WikiTarget {
  return {
    slug: item.slug,
    kind: kindForSection(section),
    href: hrefFor(section, item.slug),
    title: item.frontmatter.title,
    summary: item.frontmatter.summary,
    status: item.frontmatter.status,
    noteType: item.frontmatter.note_type,
  };
}

/** All items that participate in the wiki graph: notes, plus any research/system item that links or is linked. */
function allLinkable(): { section: ContentSection; item: ContentItem }[] {
  const out: { section: ContentSection; item: ContentItem }[] = [];
  for (const section of RESOLUTION_ORDER) {
    for (const item of getAllContent(section)) out.push({ section, item });
  }
  return out;
}

/** Map of every resolvable slug to its target. Pass to the markdown viewer for link rendering and previews. */
export function getWikiIndex(): Record<string, WikiTarget> {
  const index: Record<string, WikiTarget> = {};
  for (const { section, item } of allLinkable()) {
    if (!index[item.slug]) index[item.slug] = toTarget(section, item);
  }
  return index;
}

/** Outbound wiki targets from a body, resolved (unresolved slugs are returned with kind "note" and no href). */
export function getOutboundLinks(body: string, index = getWikiIndex()): WikiTarget[] {
  return parseWikiLinks(body).map(
    (ref) =>
      index[ref.slug] ?? {
        slug: ref.slug,
        kind: "note" as const,
        href: "",
        title: ref.label ?? ref.slug,
        summary: "Not yet written.",
      }
  );
}

/** Everything that links to `slug`. */
export function getBacklinks(slug: string, index = getWikiIndex()): WikiTarget[] {
  const result: WikiTarget[] = [];
  for (const { item } of allLinkable()) {
    if (item.slug === slug) continue;
    if (parseWikiLinks(item.body).some((ref) => ref.slug === slug)) {
      const t = index[item.slug];
      if (t) result.push(t);
    }
  }
  return result.sort((a, b) => a.title.localeCompare(b.title));
}

/** Build the full graph. Nodes: all notes, plus essays/systems/tracks that have at least one edge. */
export function getWikiGraph(): WikiGraph {
  const index = getWikiIndex();
  const edges: GraphEdge[] = [];
  const inbound = new Map<string, number>();
  const touched = new Set<string>();

  for (const { item } of allLinkable()) {
    for (const ref of parseWikiLinks(item.body)) {
      if (!index[ref.slug] || ref.slug === item.slug) continue;
      edges.push({ source: item.slug, target: ref.slug });
      inbound.set(ref.slug, (inbound.get(ref.slug) ?? 0) + 1);
      touched.add(item.slug);
      touched.add(ref.slug);
    }
  }

  const nodes: GraphNode[] = [];
  for (const target of Object.values(index)) {
    if (target.kind !== "note" && !touched.has(target.slug)) continue;
    nodes.push({
      id: target.slug,
      kind: target.kind,
      title: target.title,
      href: target.href,
      status: target.status,
      noteType: target.noteType,
      inbound: inbound.get(target.slug) ?? 0,
    });
  }
  return { nodes, edges };
}

const MAX_SEARCH_TEXT = 4000;

/** Strip markdown syntax to plain text for substring search. */
export function markdownToText(body: string): string {
  return body
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(WIKI_LINK_RE, (_m, slug: string, label?: string) => label ?? slug)
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~|-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Search index over notes and essays. */
export function getSearchIndex(): SearchDoc[] {
  const docs: SearchDoc[] = [];
  const sections: ContentSection[] = ["notes", "research", "tracks"];
  for (const section of sections) {
    for (const item of getAllContent(section)) {
      const fm = item.frontmatter;
      if (section === "research" && fm.category !== "essays") continue;
      docs.push({
        slug: item.slug,
        kind: kindForSection(section),
        href: hrefFor(section, item.slug),
        title: fm.title,
        summary: fm.summary,
        tags: fm.tags ?? [],
        status: fm.status,
        noteType: fm.note_type,
        lastReviewed: fm.last_reviewed,
        confidence: fm.confidence,
        date: fm.updated ?? fm.date,
        text: markdownToText(item.body).slice(0, MAX_SEARCH_TEXT),
      });
    }
  }
  return docs;
}

/** Essays that link to this note ("Appears in"). */
export function getEssaysReferencing(slug: string): WikiTarget[] {
  return getBacklinks(slug).filter((t) => t.kind === "essay");
}

/** Notes an essay draws on ("Built from"). */
export function getNotesFor(body: string): WikiTarget[] {
  return getOutboundLinks(body).filter((t) => t.kind === "note");
}

/** Parse a track's `sequence` entries into resolved targets. */
export function resolveSequence(sequence: string[] | undefined): WikiTarget[] {
  if (!sequence) return [];
  const out: WikiTarget[] = [];
  for (const entry of sequence) {
    const [sectionRaw, slug] = entry.split(":");
    const section = (sectionRaw === "writing" ? "research" : sectionRaw) as ContentSection;
    const item = getContentBySlug(section, slug);
    if (item) out.push(toTarget(section, item));
  }
  return out;
}

/** Tracks whose sequence includes the given slug. */
export function getTracksContaining(slug: string): WikiTarget[] {
  return getAllContent("tracks")
    .filter((t) => (t.frontmatter.sequence ?? []).some((e) => e.endsWith(`:${slug}`)))
    .map((t) => toTarget("tracks", t));
}
