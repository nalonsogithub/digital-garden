import Link from "next/link";
import type { ContentItem, ContentSection } from "@/lib/content";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import styles from "@/app/content-detail.module.css";

interface ContentDetailProps {
  section: ContentSection;
  slug: string;
  item: ContentItem;
}

export function ContentDetail({ section, slug, item }: ContentDetailProps) {
  const { frontmatter, body } = item;
  return (
    <main>
      <article>
        <header className={styles.header}>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <div className={styles.meta}>
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
                download pdf
              </Link>
              <span className={styles.note}>
                (File may be a placeholder; add the PDF to <code>public/papers/</code> when ready.)
              </span>
            </span>
          )}
          {frontmatter.external_url && (
            <a
              href={frontmatter.external_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              view published version ↗
            </a>
          )}
        </div>
        <MarkdownRenderer content={body} />
      </article>
    </main>
  );
}
