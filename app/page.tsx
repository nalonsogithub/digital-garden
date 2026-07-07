import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { DocumentIcon, FolderIcon, PenIcon } from "@/components/icons";
import { SITE_TITLE, SITE_BYLINE } from "@/lib/site";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <PageHeader title={SITE_TITLE} byline={SITE_BYLINE} variant="hero" />
      <p className={styles.intro}>
        I manage institutional portfolios and lead the firm&apos;s research-to-revenue translation layer:
        turning quantitative work into client-ready artifacts, consultant dialogue, and systems that
        scale both.
      </p>
      <p className={styles.intro}>
        The constraint in institutional distribution is not idea generation. It is converting analysis
        into materials that matter in a live pipeline. My work spans portfolio construction, authored
        research, and the architecture behind a data-driven sales process.
      </p>
      <nav className={styles.structuralNav} aria-label="Audience paths">
        <Link href="/resume">For allocators &amp; CIOs</Link>
        <Link href="/systems">For distribution &amp; sales leadership</Link>
        <Link href="/systems/technology-platform-architecture">For technology leadership</Link>
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
