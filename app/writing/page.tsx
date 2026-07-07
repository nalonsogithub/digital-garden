import { getAllContent } from "@/lib/content";
import type { WritingCategory } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";

const CATEGORY_ORDER: WritingCategory[] = [
  "institutional-research",
  "professional",
  "personal",
];

const CATEGORY_LABELS: Record<WritingCategory, string> = {
  "institutional-research": "Institutional Research (2025–2026)",
  professional: "Professional",
  personal: "Personal",
};

const CATEGORY_DESCRIPTIONS: Record<WritingCategory, string> = {
  "institutional-research":
    "Recent research program on market structure, active management, and allocator-relevant market mechanics.",
  professional: "Peer-reviewed publications and long-form capability narratives.",
  personal: "Essays and papers outside core finance.",
};

export default function WritingPage() {
  const items = getAllContent("writing");
  const byCategory = CATEGORY_ORDER.map((category) => ({
    category,
    items: items.filter((item) => (item.frontmatter.category ?? "professional") === category),
  })).filter((group) => group.items.length > 0);

  return (
    <main>
      <PageHeader
        title="Writing"
        description="Publications and essays — institutional research, professional finance work, and personal interests."
      />
      {items.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>No writing yet.</p>
      ) : (
        <>
          {byCategory.map(({ category, items: groupItems }) => (
            <section
              key={category}
              aria-labelledby={`${category}-heading`}
              style={{ marginBottom: category === "personal" ? 0 : "2rem" }}
            >
              <h2
                id={`${category}-heading`}
                style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text)" }}
              >
                {CATEGORY_LABELS[category]}
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
                {CATEGORY_DESCRIPTIONS[category]}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {groupItems.map((item) => (
                  <li key={item.slug} style={{ marginBottom: "1rem" }}>
                    <ContentCard section="writing" slug={item.slug} frontmatter={item.frontmatter} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      )}
    </main>
  );
}
