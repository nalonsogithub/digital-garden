import { notFound } from "next/navigation";
import { getPageContent } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { MarkdownRenderer } from "@/components/markdown-renderer";

export default function OperatingModelPage() {
  const item = getPageContent("operating-model");
  if (!item) notFound();

  return (
    <main>
      <PageHeader
        title={item.frontmatter.title}
        description={item.frontmatter.summary}
      />
      <MarkdownRenderer content={item.body} />
    </main>
  );
}
