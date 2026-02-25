import styles from "./page-header.module.css";

interface PageHeaderProps {
  title: string;
  byline?: string;
  description?: string;
}

export function PageHeader({ title, byline, description }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {byline && (
        <p className={styles.byline}>{byline}</p>
      )}
      {description && (
        <p className={styles.description}>{description}</p>
      )}
    </header>
  );
}
