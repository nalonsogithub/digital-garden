import { notFound } from "next/navigation";
import { getPageContent } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { MarkdownRenderer } from "@/components/markdown-renderer";

export default function CrossVerticalStrategyPage() {
  const item = getPageContent("cross-vertical-strategy");
  if (!item) notFound();

  return (
    <main>
      <PageHeader
        title={item.frontmatter.title}
        byline="Global Strategist | Institutional Client Engagement | Quantitative Research & Portfolio Management | AI Systems Architect"
        description={item.frontmatter.summary}
      />
      <MarkdownRenderer content={item.body} />
    </main>
  );
}
