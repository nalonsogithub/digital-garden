"use client";

import { useMemo, useState } from "react";
import { ContentCard } from "@/components/content-card";
import type { ContentItem, SystemsGroup } from "@/lib/content";
import styles from "./systems-explorer.module.css";

type FilterKey = "all" | SystemsGroup;

interface SectionConfig {
  key: SystemsGroup;
  title: string;
  description: string;
}

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "core-platforms", label: "Core platforms" },
  { key: "distribution-intelligence", label: "Distribution" },
  { key: "research-infrastructure", label: "Research infrastructure" },
];

const SECTIONS: SectionConfig[] = [
  {
    key: "core-platforms",
    title: "Core platforms",
    description:
      "Production systems used to manage portfolios, run backtests and optimizations, monitor restrictions, and answer portfolio questions.",
  },
  {
    key: "distribution-intelligence",
    title: "Distribution intelligence",
    description:
      "Systems that prepare consultant, prospect, and client conversations with better targeting, context, and competitive intelligence.",
  },
  {
    key: "research-infrastructure",
    title: "Research infrastructure",
    description:
      "Repeatable infrastructure for compliance, manager-universe research, and evidence-backed portfolio work.",
  },
];

const SYSTEM_ORDER = [
  "defensive-growth-platform",
  "defensive-equity-platform",
  "portfolio-attribution-library",
  "investment-process-demo",
  "sales-ai-platform",
  "consultant-intelligence-vault",
  "meeting-preparation-playbooks",
  "restriction-intelligence",
  "anomaly-discovery-pipeline",
];

function itemGroup(item: ContentItem): SystemsGroup {
  return item.frontmatter.systems_group ?? "core-platforms";
}

function matchesSearch(item: ContentItem, query: string): boolean {
  if (!query) return true;
  const haystack = [
    item.frontmatter.title,
    item.frontmatter.summary,
    ...(item.frontmatter.tags ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function sortItems(items: ContentItem[]): ContentItem[] {
  return [...items].sort((a, b) => {
    const aIndex = SYSTEM_ORDER.indexOf(a.slug);
    const bIndex = SYSTEM_ORDER.indexOf(b.slug);
    if (aIndex !== -1 || bIndex !== -1) {
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    }
    return (b.frontmatter.date ?? "").localeCompare(a.frontmatter.date ?? "");
  });
}

export function SystemsExplorer({ items }: { items: ContentItem[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredSections = useMemo(
    () =>
      SECTIONS.map((section) => {
        const sectionItems = sortItems(
          items.filter(
            (item) =>
              itemGroup(item) === section.key &&
              (activeFilter === "all" || activeFilter === section.key) &&
              matchesSearch(item, normalizedQuery)
          )
        );
        return { ...section, items: sectionItems };
      }).filter((section) => section.items.length > 0),
    [activeFilter, items, normalizedQuery]
  );

  return (
    <section className={styles.explorer} aria-label="Platform explorer">
      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <label className={styles.searchLabel} htmlFor="systems-search">
            Search
          </label>
          <input
            id="systems-search"
            className={styles.searchInput}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search platforms, meeting prep, attribution..."
          />
        </div>
        <div className={styles.filters} aria-label="Filter platform sections">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={filter.key === activeFilter ? styles.filterActive : styles.filter}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {filteredSections.length > 0 ? (
        filteredSections.map((section) => (
          <section
            key={section.key}
            className={`${styles.block} ${styles[section.key]}`}
            aria-labelledby={`${section.key}-heading`}
          >
            <div className={styles.sectionHeader}>
              <h2 id={`${section.key}-heading`} className={styles.blockTitle}>
                {section.title}
              </h2>
              <p className={styles.blockDesc}>{section.description}</p>
            </div>
            <ul className={styles.list}>
              {section.items.map((item) => (
                <li key={item.slug}>
                  <ContentCard
                    section="systems"
                    slug={item.slug}
                    frontmatter={item.frontmatter}
                    linkLabel="See description"
                  />
                </li>
              ))}
            </ul>
          </section>
        ))
      ) : (
        <p className={styles.empty}>No matches found.</p>
      )}
    </section>
  );
}
