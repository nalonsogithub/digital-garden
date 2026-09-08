import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getAllContent } from "@/lib/content";
import { resolveSequence } from "@/lib/wiki";
import styles from "./tracks.module.css";

export default function TracksPage() {
  const tracks = getAllContent("tracks");
  return (
    <main>
      <PageHeader
        title="Tracks"
        description="Ordered reading paths through the essays and notes. Each track states where the sequence is heading and where it currently stops."
      />
      <ul className={styles.list}>
        {tracks.map((t) => {
          const items = resolveSequence(t.frontmatter.sequence);
          return (
            <li key={t.slug} className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Link href={`/tracks/${t.slug}`}>{t.frontmatter.title}</Link>
              </h2>
              <p className={styles.summary}>{t.frontmatter.summary}</p>
              <p className={styles.count}>
                {items.length} stops: {items.filter((i) => i.kind === "essay").length} essays,{" "}
                {items.filter((i) => i.kind === "note").length} notes
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
