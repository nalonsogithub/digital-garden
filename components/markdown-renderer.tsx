import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { WIKI_LINK_RE, type WikiTarget } from "@/lib/wiki";
import { WikiLink } from "@/components/wiki-link";
import styles from "./markdown-renderer.module.css";

export interface MarkdownViewerProps {
  /** Raw markdown string to render. */
  content: string;
  /** Optional class name for the wrapper (e.g. for compact or large variants). */
  className?: string;
  /**
   * Map of slug -> target for resolving `[[slug]]` wiki links. When omitted,
   * wiki links are rendered as plain text labels.
   */
  wikiIndex?: Record<string, WikiTarget>;
}

const WIKI_TITLE_PREFIX = "wiki:";
const WIKI_MISSING_PREFIX = "wiki-missing:";

/**
 * Rewrites `[[slug]]` / `[[slug|label]]` into standard markdown links whose
 * title attribute carries the wiki marker. react-markdown strips unknown URL
 * schemes, so the marker lives in the title rather than the href.
 */
function preprocessWikiLinks(content: string, index?: Record<string, WikiTarget>): string {
  return content.replace(WIKI_LINK_RE, (_m, slug: string, label?: string) => {
    const target = index?.[slug];
    const text = (label ?? target?.title ?? slug).replace(/[[\]]/g, "");
    if (!index) return text;
    if (!target) return `[${text}](/notes/${slug} "${WIKI_MISSING_PREFIX}${slug}")`;
    return `[${text}](${target.href} "${WIKI_TITLE_PREFIX}${slug}")`;
  });
}

function buildComponents(index?: Record<string, WikiTarget>): Components {
  return {
    a: ({ href, title, children }) => {
      if (title?.startsWith(WIKI_TITLE_PREFIX) && index) {
        const slug = title.slice(WIKI_TITLE_PREFIX.length);
        const target = index[slug];
        if (target) return <WikiLink target={target}>{children}</WikiLink>;
      }
      if (title?.startsWith(WIKI_MISSING_PREFIX)) {
        return <WikiLink missingSlug={title.slice(WIKI_MISSING_PREFIX.length)}>{children}</WikiLink>;
      }
      return (
        <a href={href} title={title}>
          {children}
        </a>
      );
    },
  };
}

/**
 * Site-wide markdown viewer. Use anywhere you need to render markdown text:
 * detail pages, inline summaries, or custom content blocks.
 * Supports standard markdown + GFM (tables, strikethrough, autolinks, task lists)
 * and `[[wiki-links]]` when a `wikiIndex` is supplied.
 */
export function MarkdownViewer({ content, className, wikiIndex }: MarkdownViewerProps) {
  const processed = preprocessWikiLinks(content, wikiIndex);
  return (
    <div className={`${styles.markdown} ${className ?? ""}`.trim()}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={buildComponents(wikiIndex)}>
        {processed}
      </ReactMarkdown>
    </div>
  );
}

/** @deprecated Use MarkdownViewer instead. Kept for backward compatibility. */
export function MarkdownRenderer({ content }: { content: string }) {
  return <MarkdownViewer content={content} />;
}
