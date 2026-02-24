import { getAllContent } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";

export default function ProjectsPage() {
  const items = getAllContent("projects");

  return (
    <main>
      <PageHeader
        title="Projects"
        description="Selected projects with details and links."
      />
      {items.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>No projects yet.</p>
      ) : (
        items.map((item) => (
          <ContentCard
            key={item.slug}
            section="projects"
            slug={item.slug}
            frontmatter={item.frontmatter}
          />
        ))
      )}
    </main>
  );
}
