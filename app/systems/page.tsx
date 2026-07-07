import { getAllContent, SYSTEMS_GROUP_LABELS, type SystemsGroup } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";
import styles from "./systems.module.css";

const GROUP_ORDER: SystemsGroup[] = [
  "client-distribution",
  "research-infrastructure",
  "platform",
];

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
        GROUP_ORDER.map((group) => {
          const groupItems = items.filter(
            (item) => (item.frontmatter.systems_group ?? "platform") === group
          );
          if (groupItems.length === 0) return null;
          const meta = SYSTEMS_GROUP_LABELS[group];
          return (
            <section key={group} className={styles.block} aria-labelledby={`${group}-heading`}>
              <h2 id={`${group}-heading`} className={styles.blockTitle}>
                {meta.title}
              </h2>
              <p className={styles.blockDesc}>{meta.description}</p>
              <ul className={styles.list}>
                {groupItems.map((item) => (
                  <li key={item.slug}>
                    <ContentCard
                      section="systems"
                      slug={item.slug}
                      frontmatter={item.frontmatter}
                      linkLabel="View system"
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })
      )}
    </main>
  );
}
