import Link from "next/link";
import type { ReactNode } from "react";
import { NOTE_STATUS_LABELS } from "@/lib/taxonomy";
import type { WikiTarget } from "@/lib/wiki";
import styles from "./wiki-link.module.css";

interface WikiLinkProps {
  target?: WikiTarget;
  /** Set when the slug does not resolve to any note or essay yet. */
  missingSlug?: string;
  children: ReactNode;
}

const KIND_LABEL: Record<WikiTarget["kind"], string> = {
  note: "Note",
  essay: "Essay",
  system: "Platform",
  track: "Track",
};

/**
 * Inline wiki link with a CSS-only hover/focus preview card. Server-renderable;
 * no client JavaScript.
 */
export function WikiLink({ target, missingSlug, children }: WikiLinkProps) {
  if (!target) {
    return (
      <span className={styles.wrap}>
        <span className={styles.missing} title={`Not yet written: ${missingSlug ?? ""}`}>
          {children}
        </span>
        <span className={styles.preview} role="tooltip">
          <span className={styles.previewKind}>Note</span>
          <span className={styles.previewTitle}>{missingSlug}</span>
          <span className={styles.previewSummary}>Not yet written. This link marks a gap in the knowledge base.</span>
        </span>
      </span>
    );
  }
  const status = target.status ? NOTE_STATUS_LABELS[target.status] : null;
  return (
    <span className={styles.wrap}>
      <Link href={target.href} className={styles.link}>
        {children}
      </Link>
      <span className={styles.preview} role="tooltip">
        <span className={styles.previewMeta}>
          <span className={styles.previewKind}>{KIND_LABEL[target.kind]}</span>
          {status && (
            <span className={`${styles.status} ${styles[target.status ?? "seed"]}`}>{status.label}</span>
          )}
        </span>
        <span className={styles.previewTitle}>{target.title}</span>
        <span className={styles.previewSummary}>{target.summary}</span>
      </span>
    </span>
  );
}
