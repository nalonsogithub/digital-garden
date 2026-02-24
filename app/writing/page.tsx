import { getAllContent } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";

export default function WritingPage() {
  const items = getAllContent("writing");

  return (
    <main>
      <PageHeader
        title="Writing"
        description="Essays and articles."
      />
      {items.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>No writing yet.</p>
      ) : (
        items.map((item) => (
          <ContentCard
            key={item.slug}
            section="writing"
            slug={item.slug}
            frontmatter={item.frontmatter}
          />
        ))
      )}
    </main>
  );
}
