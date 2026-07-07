import { getAllContent } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ResearchExplorer } from "@/components/research-explorer";

export default function ResearchPage() {
  const items = getAllContent("research");

  return (
    <main>
      <PageHeader
        title="Research"
        description="Papers, strategy briefs, and essays. Grouped by what the piece is, not when it was filed."
      />
      <ResearchExplorer items={items} />
    </main>
  );
}
