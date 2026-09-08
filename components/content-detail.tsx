import Link from "next/link";
import type { ComponentType } from "react";
import type { ContentItem, ContentSection } from "@/lib/content";
import { getNotesFor, getTracksContaining, getWikiIndex } from "@/lib/wiki";
import { MarkdownViewer } from "@/components/markdown-renderer";
import { LinkPanel } from "@/components/link-panel";
import { DownloadIcon, ExternalIcon, NetworkIcon } from "@/components/icons";
import { MandelbrotExplorer } from "@/components/interactive/mandelbrot-explorer";
import styles from "@/app/content-detail.module.css";

interface ContentDetailProps {
  section: ContentSection;
  slug: string;
  item: ContentItem;
}

/** Registry of interactive widgets a content body can embed via `<!-- interactive:name -->`. */
const INTERACTIVE_COMPONENTS: Record<string, ComponentType> = {
  mandelbrot: MandelbrotExplorer,
};

const INTERACTIVE_MARKER = /<!--\s*interactive:(\w+)\s*-->/g;

/** Splits markdown on interactive markers and interleaves the matching widgets. */
function renderBody(body: string, wikiIndex: ReturnType<typeof getWikiIndex>) {
  const segments = body.split(INTERACTIVE_MARKER);
  return segments.map((segment, i) => {
    if (i % 2 === 1) {
      const Widget = INTERACTIVE_COMPONENTS[segment];
      return Widget ? <Widget key={`interactive-${i}`} /> : null;
    }
    return segment.trim() ? (
      <MarkdownViewer key={`md-${i}`} content={segment} wikiIndex={wikiIndex} />
    ) : null;
  });
}

export function ContentDetail({ item, slug }: ContentDetailProps) {
  const { frontmatter, body } = item;
  const wikiIndex = getWikiIndex();
  const notes = getNotesFor(body);
  const tracks = getTracksContaining(slug);
  const requestHref = frontmatter.request_email
    ? `mailto:${frontmatter.request_email}?subject=${encodeURIComponent(
        `Paper request: ${frontmatter.title}`
      )}`
    : null;
  return (
    <main>
      <article>
        <header className={styles.header}>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <div className={styles.meta}>
            {frontmatter.publication && (
              <span className={styles.publication}>{frontmatter.publication}</span>
            )}
            {frontmatter.date && (
              <time dateTime={frontmatter.date}>{frontmatter.date}</time>
            )}
            {frontmatter.updated && frontmatter.updated !== frontmatter.date && (
              <span className={styles.updated}>
                revised <time dateTime={frontmatter.updated}>{frontmatter.updated}</time>
              </span>
            )}
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <ul className={styles.tags} aria-label="Tags">
                {frontmatter.tags.map((t) => (
                  <li key={t} className={styles.tag}>{t}</li>
                ))}
              </ul>
            )}
          </div>
          {tracks.length > 0 && (
            <p className={styles.trackLine}>
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
        <div className={styles.actions}>
          {frontmatter.pdf && (
            <span className={styles.actionBlock}>
              <Link href={frontmatter.pdf} className={styles.primaryButton} download>
                <DownloadIcon size={16} className={styles.buttonIcon} />
                {frontmatter.pdf.toLowerCase().endsWith(".pdf")
                  ? "download pdf"
                  : "download paper"}
              </Link>
            </span>
          )}
          {frontmatter.external_url && (
            <a
              href={frontmatter.external_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              <ExternalIcon size={16} className={styles.buttonIcon} />
              view published version
            </a>
          )}
          {requestHref && (
            <a href={requestHref} className={styles.secondaryButton}>
              <ExternalIcon size={16} className={styles.buttonIcon} />
              request a copy
            </a>
          )}
          {frontmatter.prompt && (
            <Link href={`/prompts/${frontmatter.prompt}`} className={styles.secondaryButton}>
              <NetworkIcon size={16} className={styles.buttonIcon} />
              how this was written
            </Link>
          )}
        </div>
        <div className="prose">{renderBody(body, wikiIndex)}</div>
        <LinkPanel
          title="Built from"
          description="Notes in the knowledge base that this essay draws on. The essay is one path through them."
          items={notes}
        />
      </article>
    </main>
  );
}
