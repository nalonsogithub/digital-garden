import { PageHeader } from "@/components/page-header";
import { WikiGraphView } from "@/components/wiki-graph";
import { getWikiGraph } from "@/lib/wiki";
import styles from "../notes.module.css";

export default function NotesGraphPage() {
  const graph = getWikiGraph();
  return (
    <main>
      <PageHeader title="Knowledge graph" />
      <p className={styles.graphIntro}>
        Every node is a note or an essay; every line is a link written in the text. Essays sit where
        several notes meet, which is the point: an essay is a path through the notes, not a separate
        body of knowledge.
      </p>
      <WikiGraphView graph={graph} />
    </main>
  );
}
