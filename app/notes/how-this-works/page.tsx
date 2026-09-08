import { notFound } from "next/navigation";
import { getPageContent } from "@/lib/content";
import { getWikiIndex } from "@/lib/wiki";
import { MarkdownViewer } from "@/components/markdown-renderer";
import { PageHeader } from "@/components/page-header";

export default function HowThisWorksPage() {
  const page = getPageContent("how-the-knowledge-base-works");
  if (!page) notFound();
  return (
    <main>
      <PageHeader title={page.frontmatter.title} description={page.frontmatter.summary} />
      <div className="prose">
        <MarkdownViewer content={page.body} wikiIndex={getWikiIndex()} />
      </div>
    </main>
  );
}
