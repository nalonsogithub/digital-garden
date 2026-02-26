import { getAllContent } from "@/lib/content";
import type { WritingCategory } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";

const CATEGORY_LABELS: Record<WritingCategory, string> = {
  professional: "Professional",
  personal: "Personal",
};

export default function WritingPage() {
  const items = getAllContent("writing");
  const professional = items.filter((item) => (item.frontmatter.category ?? "professional") === "professional");
  const personal = items.filter((item) => item.frontmatter.category === "personal");

  return (
    <main>
      <PageHeader
        title="Writing"
        description="Publications and essays — professional finance work and personal interests."
      />
      {items.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>No writing yet.</p>
      ) : (
        <>
          {professional.length > 0 && (
            <section aria-labelledby="professional-heading">
              <h2 id="professional-heading" style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text)" }}>
                {CATEGORY_LABELS.professional}
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
                Enlisted publications and research narratives.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {professional.map((item) => (
                  <li key={item.slug} style={{ marginBottom: "1rem" }}>
                    <ContentCard
                      section="writing"
                      slug={item.slug}
                      frontmatter={item.frontmatter}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
          {personal.length > 0 && (
            <section aria-labelledby="personal-heading" style={{ marginTop: "2rem" }}>
              <h2 id="personal-heading" style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text)" }}>
                {CATEGORY_LABELS.personal}
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
                Essays and papers outside core finance.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {personal.map((item) => (
                  <li key={item.slug} style={{ marginBottom: "1rem" }}>
                    <ContentCard
                      section="writing"
                      slug={item.slug}
                      frontmatter={item.frontmatter}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </main>
  );
}
