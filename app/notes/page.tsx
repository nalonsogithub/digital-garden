import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { NotesExplorer } from "@/components/notes-explorer";
import { getSearchIndex } from "@/lib/wiki";
import { getAllContent } from "@/lib/content";
import { NetworkIcon } from "@/components/icons";
import styles from "./notes.module.css";

export default function NotesPage() {
  const docs = getSearchIndex();
  const tracks = getAllContent("tracks");

  return (
    <main>
      <PageHeader
        title="Notes"
        description="A knowledge base that grows with what I learn. Notes are short, linked, and honest about their stage: a seed is a first pass, a growing note is load-bearing in at least one essay, an evergreen note is stable. The essays on this site are paths through these notes."
      />
      <nav className={styles.toolbar} aria-label="Knowledge base views">
        <Link href="/notes/graph" className={styles.toolLink}>
          <NetworkIcon size={16} />
          graph view
        </Link>
        {tracks.map((t) => (
          <Link key={t.slug} href={`/tracks/${t.slug}`} className={styles.toolLink}>
            track: {t.frontmatter.title}
          </Link>
        ))}
        <Link href="/notes/how-this-works" className={styles.toolLinkQuiet}>
          how this knowledge base works
        </Link>
      </nav>
      <NotesExplorer docs={docs} />
    </main>
  );
}
