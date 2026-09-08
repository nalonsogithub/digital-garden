import Link from "next/link";
import { NOTE_STATUS_LABELS } from "@/lib/taxonomy";
import type { WikiTarget } from "@/lib/wiki";
import styles from "./link-panel.module.css";

interface LinkPanelProps {
  title: string;
  description?: string;
  items: WikiTarget[];
  /** Render as an ordered list (tracks). */
  ordered?: boolean;
  emptyText?: string;
}

/** Compact list of wiki targets used for "Built from", "Referenced by", "Appears in", and track sequences. */
export function LinkPanel({ title, description, items, ordered, emptyText }: LinkPanelProps) {
  if (items.length === 0 && !emptyText) return null;
  const ListTag = ordered ? "ol" : "ul";
  return (
    <section className={styles.panel} aria-label={title}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
      {items.length === 0 ? (
        <p className={styles.empty}>{emptyText}</p>
      ) : (
        <ListTag className={ordered ? styles.orderedList : styles.list}>
          {items.map((t) => (
            <li key={`${t.kind}-${t.slug}`} className={styles.item}>
              {t.href ? (
                <Link href={t.href} className={styles.link}>
                  {t.title}
                </Link>
              ) : (
                <span className={styles.missing}>{t.title}</span>
              )}
              <span className={styles.meta}>
                <span className={styles.kind}>{t.kind}</span>
                {t.status && (
                  <span className={`${styles.status} ${styles[t.status]}`}>
                    {NOTE_STATUS_LABELS[t.status].label}
                  </span>
                )}
              </span>
              {t.summary && <span className={styles.summary}>{t.summary}</span>}
            </li>
          ))}
        </ListTag>
      )}
    </section>
  );
}
