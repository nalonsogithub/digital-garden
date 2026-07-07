"use client";

import { useMemo, useState } from "react";
import { ContentCard } from "@/components/content-card";
import type { ContentItem } from "@/lib/content";
import styles from "./research-explorer.module.css";

type FilterKey = "all" | "recent" | "peer-reviewed" | "capabilities" | "essays" | "presentations";

interface SectionConfig {
  key: Exclude<FilterKey, "all">;
  title: string;
  description: string;
  linkLabel: string;
}

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "recent", label: "Recent research" },
  { key: "peer-reviewed", label: "Peer-reviewed" },
  { key: "capabilities", label: "Career platforms" },
  { key: "essays", label: "Essays" },
  { key: "presentations", label: "Presentations" },
];

const SECTIONS: SectionConfig[] = [
  {
    key: "recent",
    title: "Recent institutional research",
    description: "Papers and studies from recent institutional research work.",
    linkLabel: "Read summary",
  },
  {
    key: "peer-reviewed",
    title: "Peer-reviewed publications",
    description: "Journal articles on portfolio construction, risk, and active management.",
    linkLabel: "Read summary",
  },
  {
    key: "capabilities",
    title: "Career platforms and capabilities",
    description:
      "Major portfolio-construction platforms, strategy architectures, and enabling systems built across the investment career.",
    linkLabel: "Read brief",
  },
  {
    key: "essays",
    title: "Essays",
    description: "Longer-form writing outside day-to-day finance work.",
    linkLabel: "Read",
  },
  {
    key: "presentations",
    title: "Presentations",
    description: "Talks and conference material on asset management, research, and technology.",
    linkLabel: "View notes",
  },
];

const CAPABILITY_ORDER = [
  "mellon-capital-long-short-architecture",
  "stock-level-risk-parity-architecture",
  "defensive-equity-platform",
  "defensive-growth-architecture",
  "ai-in-asset-management",
];

function itemFilterKey(item: ContentItem): Exclude<FilterKey, "all"> {
  const category = item.frontmatter.category ?? "research";
  if (category === "research") return item.frontmatter.research_group ?? "recent";
  return category;
}

function matchesSearch(item: ContentItem, query: string): boolean {
  if (!query) return true;
  const haystack = [
    item.frontmatter.title,
    item.frontmatter.summary,
    item.frontmatter.publication,
    ...(item.frontmatter.tags ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function sortSectionItems(items: ContentItem[], sectionKey: FilterKey): ContentItem[] {
  if (sectionKey !== "capabilities") return items;
  return [...items].sort((a, b) => {
    const aIndex = CAPABILITY_ORDER.indexOf(a.slug);
    const bIndex = CAPABILITY_ORDER.indexOf(b.slug);
    if (aIndex !== -1 || bIndex !== -1) {
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    }
    return (b.frontmatter.date ?? "").localeCompare(a.frontmatter.date ?? "");
  });
}

export function ResearchExplorer({ items }: { items: ContentItem[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredSections = useMemo(
    () =>
      SECTIONS.map((section) => {
        const sectionItems = sortSectionItems(
          items.filter(
            (item) =>
              itemFilterKey(item) === section.key &&
              (activeFilter === "all" || activeFilter === section.key) &&
              matchesSearch(item, normalizedQuery)
          ),
          section.key
        );
        return { ...section, items: sectionItems };
      }).filter((section) => section.items.length > 0),
    [activeFilter, items, normalizedQuery]
  );

  return (
    <section className={styles.explorer} aria-label="Research explorer">
      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <label className={styles.searchLabel} htmlFor="research-search">
            Search
          </label>
          <input
            id="research-search"
            className={styles.searchInput}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search research, platforms, essays..."
          />
        </div>
        <div className={styles.filters} aria-label="Filter sections">
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
              <p className={styles.subDesc}>{section.description}</p>
            </div>
            <ul className={styles.list}>
              {section.items.map((item) => (
                <li key={item.slug}>
                  <ContentCard
                    section="research"
                    slug={item.slug}
                    frontmatter={item.frontmatter}
                    linkLabel={section.linkLabel}
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
