import { getAllContent } from "@/lib/content";
import type { WritingCategory, ResearchGroup } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";
import styles from "./research.module.css";

const RESEARCH_GROUPS: { key: ResearchGroup; title: string; description: string }[] = [
  {
    key: "recent",
    title: "Recent institutional research",
    description: "Papers and studies from the last year, most taken through compliance for external use.",
  },
  {
    key: "peer-reviewed",
    title: "Peer-reviewed publications",
    description: "Journal articles on portfolio construction, risk, and active management.",
  },
];

const TOP_LEVEL: {
  category: WritingCategory;
  title: string;
  description: string;
  linkLabel: string;
}[] = [
  {
    category: "capabilities",
    title: "Capabilities",
    description:
      "How strategies were designed, built, and explained to clients. Product architecture and proof points, not journal articles.",
    linkLabel: "Read brief",
  },
  {
    category: "essays",
    title: "Essays",
    description: "Longer-form writing outside day-to-day finance work.",
    linkLabel: "Read",
  },
];

export default function ResearchPage() {
  const items = getAllContent("research");

  return (
    <main>
      <PageHeader
        title="Research"
        description="Papers, strategy briefs, and essays. Grouped by what the piece is, not when it was filed."
      />

      <section className={styles.block} aria-labelledby="research-heading">
        <h2 id="research-heading" className={styles.blockTitle}>
          Research
        </h2>
        {RESEARCH_GROUPS.map(({ key, title, description }) => {
          const groupItems = items.filter(
            (item) =>
              (item.frontmatter.category ?? "research") === "research" &&
              (item.frontmatter.research_group ?? "recent") === key
          );
          if (groupItems.length === 0) return null;
          return (
            <div key={key} className={styles.subsection}>
              <h3 className={styles.subTitle}>{title}</h3>
              <p className={styles.subDesc}>{description}</p>
              <ul className={styles.list}>
                {groupItems.map((item) => (
                  <li key={item.slug}>
                    <ContentCard
                      section="research"
                      slug={item.slug}
                      frontmatter={item.frontmatter}
                      linkLabel="Read summary"
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      {TOP_LEVEL.map(({ category, title, description, linkLabel }) => {
        const groupItems = items.filter(
          (item) => (item.frontmatter.category ?? "research") === category
        );
        if (groupItems.length === 0) return null;
        return (
          <section key={category} className={styles.block} aria-labelledby={`${category}-heading`}>
            <h2 id={`${category}-heading`} className={styles.blockTitle}>
              {title}
            </h2>
            <p className={styles.subDesc}>{description}</p>
            <ul className={styles.list}>
              {groupItems.map((item) => (
                <li key={item.slug}>
                  <ContentCard
                    section="research"
                    slug={item.slug}
                    frontmatter={item.frontmatter}
                    linkLabel={linkLabel}
                  />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
