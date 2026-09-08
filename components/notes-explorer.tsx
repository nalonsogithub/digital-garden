"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { NOTE_STATUS_LABELS, NOTE_TYPE_LABELS, type NoteStatus, type NoteType } from "@/lib/taxonomy";
import type { SearchDoc } from "@/lib/wiki";
import styles from "./notes-explorer.module.css";

type KindFilter = "all" | "note" | "essay" | "track";
type TypeFilter = "all" | NoteType;
type StatusFilter = "all" | NoteStatus;

const KIND_FILTERS: { key: KindFilter; label: string }[] = [
  { key: "all", label: "Everything" },
  { key: "note", label: "Notes" },
  { key: "essay", label: "Essays" },
  { key: "track", label: "Tracks" },
];

const TYPE_FILTERS: { key: TypeFilter; label: string }[] = [
  { key: "all", label: "Any type" },
  { key: "concept", label: NOTE_TYPE_LABELS.concept },
  { key: "hub", label: NOTE_TYPE_LABELS.hub },
  { key: "lab", label: NOTE_TYPE_LABELS.lab },
  { key: "model", label: NOTE_TYPE_LABELS.model },
  { key: "question", label: NOTE_TYPE_LABELS.question },
];

const STATUS_FILTERS: { key: StatusFilter; label: string }[] = [
  { key: "all", label: "Any stage" },
  { key: "seed", label: NOTE_STATUS_LABELS.seed.label },
  { key: "growing", label: NOTE_STATUS_LABELS.growing.label },
  { key: "evergreen", label: NOTE_STATUS_LABELS.evergreen.label },
];

/** Return a short snippet of `text` around the first occurrence of `query`. */
function snippet(text: string, query: string): string | null {
  if (!query) return null;
  const i = text.toLowerCase().indexOf(query);
  if (i < 0) return null;
  const start = Math.max(0, i - 70);
  const end = Math.min(text.length, i + query.length + 90);
  return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
}

function matches(doc: SearchDoc, q: string): boolean {
  if (!q) return true;
  const head = [doc.title, doc.summary, ...doc.tags].join(" ").toLowerCase();
  return head.includes(q) || doc.text.toLowerCase().includes(q);
}

export function NotesExplorer({ docs }: { docs: SearchDoc[] }) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<KindFilter>("all");
  const [type, setType] = useState<TypeFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    const filtered = docs.filter(
      (d) =>
        (kind === "all" || d.kind === kind) &&
        (type === "all" || d.noteType === type) &&
        (status === "all" || d.status === status) &&
        matches(d, q)
    );
    return filtered.sort((a, b) => {
      if (q) {
        const at = a.title.toLowerCase().includes(q) ? 0 : 1;
        const bt = b.title.toLowerCase().includes(q) ? 0 : 1;
        if (at !== bt) return at - bt;
      }
      const kindOrder = { track: 0, essay: 1, note: 2, system: 3 } as const;
      if (kindOrder[a.kind] !== kindOrder[b.kind]) return kindOrder[a.kind] - kindOrder[b.kind];
      return a.title.localeCompare(b.title);
    });
  }, [docs, kind, type, status, q]);

  const counts = useMemo(() => {
    const c = { note: 0, essay: 0, track: 0 };
    for (const d of docs) if (d.kind in c) c[d.kind as keyof typeof c]++;
    return c;
  }, [docs]);

  return (
    <section className={styles.explorer} aria-label="Knowledge base explorer">
      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <label className={styles.searchLabel} htmlFor="notes-search">
            Search titles, tags, and full text
          </label>
          <input
            id="notes-search"
            className={styles.searchInput}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="entanglement, Hurst exponent, reflexivity, Kimi..."
          />
        </div>
        <div className={styles.filterRows}>
          <div className={styles.filters} aria-label="Filter by kind">
            {KIND_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={kind === f.key ? styles.filterActive : styles.filter}
                onClick={() => setKind(f.key)}
              >
                {f.label}
                {f.key !== "all" && <span className={styles.count}>{counts[f.key]}</span>}
              </button>
            ))}
          </div>
          <div className={styles.filters} aria-label="Filter by note type">
            {TYPE_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={type === f.key ? styles.filterActive : styles.filter}
                onClick={() => setType(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className={styles.filters} aria-label="Filter by growth stage">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={status === f.key ? styles.filterActive : styles.filter}
                onClick={() => setStatus(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {results.length === 0 ? (
        <p className={styles.empty}>No matches. Try a different word, or clear a filter.</p>
      ) : (
        <ul className={styles.list}>
          {results.map((d) => {
            const snip = snippet(d.text, q);
            return (
              <li key={`${d.kind}-${d.slug}`} className={`${styles.item} ${styles[d.kind]}`}>
                <div className={styles.itemHead}>
                  <Link href={d.href} className={styles.itemTitle}>
                    {d.title}
                  </Link>
                  <span className={styles.badges}>
                    <span className={styles.kind}>{d.kind}</span>
                    {d.noteType && <span className={styles.type}>{NOTE_TYPE_LABELS[d.noteType]}</span>}
                    {d.status && (
                      <span className={`${styles.status} ${styles[`status_${d.status}`]}`}>
                        {NOTE_STATUS_LABELS[d.status].label}
                      </span>
                    )}
                  </span>
                </div>
                <p className={styles.summary}>{d.summary}</p>
                {snip && !d.title.toLowerCase().includes(q) && (
                  <p className={styles.snippet}>{snip}</p>
                )}
                <div className={styles.metaRow}>
                  {d.lastReviewed && <span>reviewed {d.lastReviewed}</span>}
                  {d.confidence && <span>confidence: {d.confidence}</span>}
                  {!d.lastReviewed && d.date && <span>{d.date}</span>}
                  {d.tags.slice(0, 4).map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
