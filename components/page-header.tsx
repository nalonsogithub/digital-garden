import styles from "./page-header.module.css";

interface PageHeaderProps {
  title: string;
  byline?: string;
  description?: string;
  /** When "hero", title is visually dominant (homepage). */
  variant?: "hero";
}

export function PageHeader({ title, byline, description, variant }: PageHeaderProps) {
  const bylineSegments = byline?.split(" | ").map((s) => s.trim()).filter(Boolean);
  const titleClass = variant === "hero" ? `${styles.title} ${styles.titleHero}` : styles.title;
  return (
    <header className={styles.header}>
      <h1 className={titleClass}>{title}</h1>
      {bylineSegments && bylineSegments.length > 0 && (
        <p className={variant === "hero" ? styles.bylineSecondary : styles.byline}>
          {bylineSegments.map((seg, i) => (
            <span key={i}>
              {i > 0 && " | "}
              {seg}
            </span>
          ))}
        </p>
      )}
      {description && (
        <p className={styles.description}>{description}</p>
      )}
    </header>
  );
}
