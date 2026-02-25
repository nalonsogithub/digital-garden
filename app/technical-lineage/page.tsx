import { getAllContent } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";

export default function TechnicalLineagePage() {
  const items = getAllContent("technical-lineage");

  return (
    <main>
      <PageHeader
        title="Technical lineage"
        description="Early systems architecture and continuity of systems thinking."
      />
      {items.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>No entries yet.</p>
      ) : (
        items.map((item) => (
          <ContentCard
            key={item.slug}
            section="technical-lineage"
            slug={item.slug}
            frontmatter={item.frontmatter}
          />
        ))
      )}
    </main>
  );
}
