import Link from "next/link";
import type { ContentFrontmatter } from "@/lib/content";
import { ExternalIcon } from "@/components/icons";
import styles from "./content-card.module.css";

interface ContentCardProps {
  section: "systems" | "research" | "writing" | "technical-lineage";
  slug: string;
  frontmatter: ContentFrontmatter;
}

export function ContentCard({ section, slug, frontmatter }: ContentCardProps) {
  const href = `/${section}/${slug}`;
  return (
    <article className={styles.card}>
      <h2 className={styles.cardTitle}>
        <Link href={href}>{frontmatter.title}</Link>
      </h2>
      {frontmatter.date && (
        <time className={styles.date} dateTime={frontmatter.date}>
          {frontmatter.date}
        </time>
      )}
      <p className={styles.summary}>{frontmatter.summary}</p>
      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <ul className={styles.tags} aria-label="Tags">
          {frontmatter.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.links}>
        <Link href={href} className={styles.detailLink}>
          view details
        </Link>
        {frontmatter.external_url && (
          <a
            href={frontmatter.external_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
            aria-label="Open external link"
          >
            <ExternalIcon size={16} className={styles.externalIcon} />
            external link
          </a>
        )}
      </div>
    </article>
  );
}
