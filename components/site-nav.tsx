import Link from "next/link";
import styles from "./site-nav.module.css";

export function SiteNav() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <Link href="/" className={styles.home}>
        home
      </Link>
      <Link href="/resume" className={styles.link}>
        resume
      </Link>
      <Link href="/projects" className={styles.link}>
        projects
      </Link>
      <Link href="/research" className={styles.link}>
        research
      </Link>
      <Link href="/writing" className={styles.link}>
        writing
      </Link>
    </nav>
  );
}
