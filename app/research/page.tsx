import { getAllContent } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";

export default function ResearchPage() {
  const items = getAllContent("research");

  return (
    <main>
      <PageHeader
        title="Research"
        description="Research notes and papers."
      />
      {items.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>No research items yet.</p>
      ) : (
        items.map((item) => (
          <ContentCard
            key={item.slug}
            section="research"
            slug={item.slug}
            frontmatter={item.frontmatter}
          />
        ))
      )}
    </main>
  );
}
