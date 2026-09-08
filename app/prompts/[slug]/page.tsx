import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllContent, getContentBySlug, getContentSlugs } from "@/lib/content";
import { getNotesFor, getWikiIndex } from "@/lib/wiki";
import { MarkdownViewer } from "@/components/markdown-renderer";
import { LinkPanel } from "@/components/link-panel";
import detailStyles from "@/app/content-detail.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("prompts").map((slug) => ({ slug }));
}

export default async function PromptDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentBySlug("prompts", slug);
  if (!item) notFound();
  const wikiIndex = getWikiIndex();
  const essay = getAllContent("research").find((e) => e.frontmatter.prompt === slug);
  const notes = essay ? getNotesFor(essay.body) : [];

  return (
    <main>
      <article>
        <header className={detailStyles.header}>
          <h1 className={detailStyles.title}>{item.frontmatter.title}</h1>
          <div className={detailStyles.meta}>
            <span>Prompt</span>
            {essay && (
              <span>
                reconstructs{" "}
                <Link href={`/research/${essay.slug}`}>{essay.frontmatter.title}</Link>
              </span>
            )}
          </div>
        </header>
        <div className="prose">
          <MarkdownViewer content={item.body} wikiIndex={wikiIndex} />
        </div>
        <LinkPanel
          title="Notes this prompt draws on"
          description="The knowledge-base entries the prompt asks the model to read before writing."
          items={notes}
        />
      </article>
    </main>
  );
}
