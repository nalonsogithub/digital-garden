import Link from "next/link";
import type { ComponentType } from "react";
import type { ContentItem, ContentSection } from "@/lib/content";
import { MarkdownViewer } from "@/components/markdown-renderer";
import { DownloadIcon, ExternalIcon } from "@/components/icons";
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
function renderBody(body: string) {
  const segments = body.split(INTERACTIVE_MARKER);
  return segments.map((segment, i) => {
    if (i % 2 === 1) {
      const Widget = INTERACTIVE_COMPONENTS[segment];
      return Widget ? <Widget key={`interactive-${i}`} /> : null;
    }
    return segment.trim() ? <MarkdownViewer key={`md-${i}`} content={segment} /> : null;
  });
}

export function ContentDetail({ section, slug, item }: ContentDetailProps) {
  const { frontmatter, body } = item;
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
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <ul className={styles.tags} aria-label="Tags">
                {frontmatter.tags.map((t) => (
                  <li key={t} className={styles.tag}>{t}</li>
                ))}
              </ul>
            )}
          </div>
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
        </div>
        <div className="prose">{renderBody(body)}</div>
      </article>
    </main>
  );
}
