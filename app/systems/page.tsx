import { getAllContent } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { SystemsExplorer } from "@/components/systems-explorer";

export default function SystemsPage() {
  const items = getAllContent("systems");

  return (
    <main>
      <PageHeader
        title="Platforms"
        description="Systems built to close the gap between analysis and use. Some face clients; most make research and reviews repeatable."
      />
      {items.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>No platforms yet.</p>
      ) : (
        <SystemsExplorer items={items} />
      )}
    </main>
  );
}
