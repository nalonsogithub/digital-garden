import { ContentCard } from "@/components/content-card";
import { getContentBySlug, type ContentSection } from "@/lib/content";

interface FeaturedCardProps {
  section: ContentSection;
  slug: string;
  linkLabel: string;
}

export function FeaturedCard({ section, slug, linkLabel }: FeaturedCardProps) {
  const item = getContentBySlug(section, slug);
  if (!item) return null;
  return (
    <ContentCard
      section={section}
      slug={slug}
      frontmatter={item.frontmatter}
      linkLabel={linkLabel}
    />
  );
}
