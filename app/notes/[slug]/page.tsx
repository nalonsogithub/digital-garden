import Link from "next/link";
import { notFound } from "next/navigation";
import {
  NOTE_STATUS_LABELS,
  NOTE_TYPE_LABELS,
  getContentBySlug,
  getContentSlugs,
} from "@/lib/content";
import {
  getBacklinks,
  getOutboundLinks,
  getTracksContaining,
  getWikiIndex,
  resolveWikiSlug,
} from "@/lib/wiki";
import { MarkdownViewer } from "@/components/markdown-renderer";
import { LinkPanel } from "@/components/link-panel";
import detailStyles from "@/app/content-detail.module.css";
import styles from "../notes.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("notes").map((slug) => ({ slug }));
}

const STALE_AFTER_DAYS = 120;

function daysSince(date: string): number | null {
  const t = Date.parse(date);
  if (Number.isNaN(t)) return null;
  return Math.floor((Date.now() - t) / 86_400_000);
}

export default async function NoteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentBySlug("notes", slug);
  if (!item) notFound();

  const { frontmatter: fm, body } = item;
  const wikiIndex = getWikiIndex();
  const outbound = getOutboundLinks(body, wikiIndex);
  const backlinks = getBacklinks(slug, wikiIndex);
  const essays = backlinks.filter((t) => t.kind === "essay");
  const referencedBy = backlinks.filter((t) => t.kind !== "essay");
  const tracks = getTracksContaining(slug);
  const related = (fm.related ?? [])
    .filter((s) => s !== slug && !outbound.some((o) => o.slug === s))
    .map((s) => resolveWikiSlug(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const status = fm.status ? NOTE_STATUS_LABELS[fm.status] : null;
  const age = fm.last_reviewed ? daysSince(fm.last_reviewed) : null;
  const stale = age !== null && age > STALE_AFTER_DAYS;

  return (
    <main>
      <article>
        <header className={detailStyles.header}>
          <h1 className={detailStyles.title}>{fm.title}</h1>
          <div className={styles.detailMeta}>
            {fm.note_type && <span className={styles.typeLabel}>{NOTE_TYPE_LABELS[fm.note_type]}</span>}
            {status && fm.status && (
              <span className={`${styles.statusPill} ${styles[`status_${fm.status}`] ?? ""}`}>
                {status.label}
              </span>
            )}
            {fm.last_reviewed && (
              <span className={stale ? styles.stale : undefined}>
                last reviewed {fm.last_reviewed}
                {stale && ` (${age} days ago; may be out of date)`}
              </span>
            )}
            {fm.confidence && <span>confidence: {fm.confidence}</span>}
            {fm.tags && fm.tags.length > 0 && (
              <ul className={detailStyles.tags} aria-label="Tags">
                {fm.tags.map((t) => (
                  <li key={t} className={detailStyles.tag}>
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {status && <p className={styles.statusNote}>{status.description}</p>}
          {tracks.length > 0 && (
            <p className={detailStyles.trackLine}>
              Part of the track{" "}
              {tracks.map((t, i) => (
                <span key={t.slug}>
                  {i > 0 && ", "}
                  <Link href={t.href}>{t.title}</Link>
                </span>
              ))}
            </p>
          )}
        </header>

        <div className="prose">
          <MarkdownViewer content={body} wikiIndex={wikiIndex} />
        </div>

        {fm.sources && fm.sources.length > 0 && (
          <section className={styles.sourcesSection} aria-label="Sources">
            <h2 className={styles.sourcesTitle}>Sources</h2>
            <ol className={styles.sources}>
              {fm.sources.map((s, i) => (
                <li key={`${s.url ?? s.title}-${i}`}>
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.title}
                    </a>
                  ) : (
                    s.title
                  )}
                  {s.accessed && <span className={styles.sourceAccessed}> (accessed {s.accessed})</span>}
                </li>
              ))}
            </ol>
          </section>
        )}

        <LinkPanel
          title="Appears in"
          description="Essays that draw on this note."
          items={essays}
        />
        <LinkPanel
          title="Links out"
          items={outbound}
        />
        <LinkPanel
          title="Referenced by"
          description="Other notes and pages that link here."
          items={referencedBy}
        />
        <LinkPanel title="Related" items={related} />
      </article>
    </main>
  );
}
