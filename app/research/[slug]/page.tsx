import { notFound } from "next/navigation";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { ContentDetail } from "@/components/content-detail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getContentSlugs("research");
  return slugs.map((slug) => ({ slug }));
}

export default async function ResearchDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentBySlug("research", slug);
  if (!item) notFound();
  return <ContentDetail section="research" slug={slug} item={item} />;
}
