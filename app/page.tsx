import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { DocumentIcon, FolderIcon, SearchIcon, PenIcon } from "@/components/icons";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <p className={styles.workInProgress} aria-live="polite">
        Currently working on this site — content and structure are being updated.
      </p>
      <PageHeader
        title="Quantitative Investor & Systems Architect"
        byline="Global Strategist | Quantitative Portfolio Manager | AI Systems Architect"
        description="Operating at the intersection of portfolio management, software engineering, and applied artificial intelligence."
      />
      <p className={styles.intro}>
        I work in investment research and portfolio construction, with a focus on quantitative approaches. I design and build software and AI-enabled systems that extend that domain expertise across research, product, and operations. The aim is operational leverage and commercial impact: higher research throughput, scalable product, and more effective sales enablement—not AI for its own sake.
      </p>
      <nav className={styles.ctas} aria-label="Primary sections">
        <Link href="/resume" className={styles.cta}>
          <DocumentIcon size={18} className={styles.ctaIcon} />
          View Resume
        </Link>
        <Link href="/systems" className={styles.cta}>
          <FolderIcon size={18} className={styles.ctaIcon} />
          View Systems
        </Link>
        <Link href="/research" className={styles.cta}>
          <SearchIcon size={18} className={styles.ctaIcon} />
          View Research
        </Link>
        <Link href="/writing" className={styles.cta}>
          <PenIcon size={18} className={styles.ctaIcon} />
          View Publications
        </Link>
      </nav>
    </main>
  );
}
