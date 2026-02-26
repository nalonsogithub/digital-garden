import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { DocumentIcon, FolderIcon, PenIcon } from "@/components/icons";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <PageHeader
        title="Director | Global Strategist"
        byline="Institutional Client Engagement | Quantitative Research & Portfolio Management | AI Systems Architect"
        variant="hero"
      />
      <p className={styles.intro}>
        Global Strategist bridging investment and distribution, integrating quantitative research, portfolio expertise, and cross-platform systems architecture to elevate institutional commercial effectiveness.
      </p>
      <p className={styles.intro}>
        I translate investment insight into scalable client engagement, lead prospect and consultant dialogues across the firm's product platform, and design technology-enabled systems that increase communication velocity and institutional leverage.
      </p>
      <nav className={styles.structuralNav} aria-label="Primary areas">
        <Link href="/research">Investment Depth</Link>
        <Link href="/systems">Cross-Platform Systems</Link>
        <Link href="/resume">Commercial Strategy</Link>
      </nav>
      <nav className={styles.ctas} aria-label="Primary sections">
        <Link href="/resume" className={styles.cta}>
          <DocumentIcon size={18} className={styles.ctaIcon} />
          View Resume
        </Link>
        <Link href="/systems" className={styles.cta}>
          <FolderIcon size={18} className={styles.ctaIcon} />
          View Systems
        </Link>
        <Link href="/writing" className={styles.cta}>
          <PenIcon size={18} className={styles.ctaIcon} />
          View Writing
        </Link>
      </nav>
    </main>
  );
}
