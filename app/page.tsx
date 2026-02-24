import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <PageHeader
        title="Digital Garden"
        description="A living resume and collection of projects, research, and writing."
      />
      <p className={styles.intro}>
        Welcome. This site is a central place for my professional work—resume, projects, research, and writing—with deep links from resume bullets to detailed pages.
      </p>
      <nav className={styles.ctas} aria-label="Primary sections">
        <Link href="/resume" className={styles.cta}>
          Resume
        </Link>
        <Link href="/projects" className={styles.cta}>
          Projects
        </Link>
        <Link href="/research" className={styles.cta}>
          Research
        </Link>
        <Link href="/writing" className={styles.cta}>
          Writing
        </Link>
      </nav>
    </main>
  );
}
