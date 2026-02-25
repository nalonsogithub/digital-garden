import { getAllContent } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";

export default function SystemsPage() {
  const items = getAllContent("systems");

  return (
    <main>
      <PageHeader
        title="Systems"
        description="AI-enabled systems for investment research, portfolio management, and commercial execution."
      />
      {items.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>No systems yet.</p>
      ) : (
        items.map((item) => (
          <ContentCard
            key={item.slug}
            section="systems"
            slug={item.slug}
            frontmatter={item.frontmatter}
          />
        ))
      )}
    </main>
  );
}
