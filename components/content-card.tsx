import Link from "next/link";
import {
  getContentBySlug,
  contentSectionPath,
  CONTENT_TYPE_LABELS,
  type ContentFrontmatter,
  type ContentSection,
} from "@/lib/content";
import { ExternalIcon } from "@/components/icons";
import styles from "./content-card.module.css";

interface ContentCardProps {
  section: ContentSection;
  slug: string;
  frontmatter: ContentFrontmatter;
  linkLabel?: string;
}

function badgeLabel(frontmatter: ContentFrontmatter): string | null {
  if (frontmatter.publication) return frontmatter.publication;
  if (frontmatter.content_type) return CONTENT_TYPE_LABELS[frontmatter.content_type];
  return null;
}

export function ContentCard({ section, slug, frontmatter, linkLabel = "Read" }: ContentCardProps) {
  const href = `/${contentSectionPath(section)}/${slug}`;
  const badge = badgeLabel(frontmatter);
  const requestHref = frontmatter.request_email
    ? `mailto:${frontmatter.request_email}?subject=${encodeURIComponent(
        `Paper request: ${frontmatter.title}`
      )}`
    : null;

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>
          <Link href={href}>{frontmatter.title}</Link>
        </h2>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      {frontmatter.date && (
        <time className={styles.date} dateTime={frontmatter.date}>
          {frontmatter.date}
        </time>
      )}
      <p className={styles.summary}>{frontmatter.summary}</p>
      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <ul className={styles.tags} aria-label="Tags">
          {frontmatter.tags.slice(0, 4).map((t) => (
            <li key={t} className={styles.tag}>
              {t}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.links}>
        <Link href={href} className={styles.detailLink}>
          {linkLabel}
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
            published version
          </a>
        )}
        {requestHref && (
          <a href={requestHref} className={styles.externalLink}>
            <ExternalIcon size={16} className={styles.externalIcon} />
            request copy
          </a>
        )}
      </div>
    </article>
  );
}

interface FeaturedCardProps {
  section: ContentSection;
  slug: string;
  linkLabel: string;
}

export function FeaturedCard({ section, slug, linkLabel }: FeaturedCardProps) {
  const item = getContentBySlug(section, slug);
  if (!item) return null;
  return (
    <ContentCard
      section={section}
      slug={slug}
      frontmatter={item.frontmatter}
      linkLabel={linkLabel}
    />
  );
}
