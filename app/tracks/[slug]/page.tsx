import { notFound } from "next/navigation";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { getWikiIndex, resolveSequence } from "@/lib/wiki";
import { MarkdownViewer } from "@/components/markdown-renderer";
import { LinkPanel } from "@/components/link-panel";
import detailStyles from "@/app/content-detail.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("tracks").map((slug) => ({ slug }));
}

export default async function TrackDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentBySlug("tracks", slug);
  if (!item) notFound();
  const wikiIndex = getWikiIndex();
  const stops = resolveSequence(item.frontmatter.sequence);

  return (
    <main>
      <article>
        <header className={detailStyles.header}>
          <h1 className={detailStyles.title}>{item.frontmatter.title}</h1>
          <div className={detailStyles.meta}>
            <span>Track</span>
            {item.frontmatter.updated && <span>revised {item.frontmatter.updated}</span>}
          </div>
        </header>
        <div className="prose">
          <MarkdownViewer content={item.body} wikiIndex={wikiIndex} />
        </div>
        <LinkPanel
          title="Reading order"
          description="Essays are the long-form stops; notes fill in the concepts between them."
          items={stops}
          ordered
          emptyText="No stops yet."
        />
      </article>
    </main>
  );
}
