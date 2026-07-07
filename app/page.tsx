import Image from "next/image";
import Link from "next/link";
import { FeaturedCard } from "@/components/featured-card";
import { SITE_TITLE, SITE_BYLINE } from "@/lib/site";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-label="Introduction">
        <div className={styles.photoWrap}>
          <Image
            src="/images/nick-alonso.png"
            alt="Nicholas Alonso"
            width={160}
            height={160}
            className={styles.photo}
            priority
          />
        </div>
        <div className={styles.heroText}>
          <p className={styles.name}>Nicholas Alonso, CFA</p>
          <h1 className={styles.title}>{SITE_TITLE}</h1>
          <p className={styles.byline}>{SITE_BYLINE}</p>
        </div>
      </section>

      <div className={styles.prose}>
        <p className={styles.lead}>
          I manage institutional portfolios and write the research behind them: papers,
          client-ready responses, and the systems that turn analysis into material a team
          can use.
        </p>
        <p className={styles.lead}>
          The constraint in distribution is not idea generation. It is getting analysis into
          materials that matter while a pipeline is live. That is the problem I have been building
          toward, in portfolios and in platforms.
        </p>
      </div>

      <nav className={styles.doors} aria-label="Start here">
        <Link href="/resume" className={styles.door}>
          <span className={styles.doorTitle}>Resume</span>
          <span className={styles.doorDesc}>
            Mandates raised, portfolios managed, full career arc.
          </span>
        </Link>
        <Link href="/research" className={styles.door}>
          <span className={styles.doorTitle}>Research</span>
          <span className={styles.doorDesc}>
            Peer-reviewed work, recent papers, strategy briefs.
          </span>
        </Link>
        <Link href="/systems" className={styles.door}>
          <span className={styles.doorTitle}>Platforms</span>
          <span className={styles.doorDesc}>
            Systems for attribution, distribution, and research at scale.
          </span>
        </Link>
      </nav>

      <section className={styles.featured} aria-labelledby="featured-heading">
        <h2 id="featured-heading" className={styles.sectionTitle}>
          Selected work
        </h2>
        <div className={styles.featuredGrid}>
          <FeaturedCard section="research" slug="the-alpha-supply" linkLabel="Read summary" />
          <FeaturedCard
            section="systems"
            slug="data-driven-sales-architecture"
            linkLabel="View architecture"
          />
          <FeaturedCard
            section="research"
            slug="defensive-growth-architecture"
            linkLabel="Read brief"
          />
        </div>
      </section>

      <nav className={styles.strategyLinks} aria-label="Strategy and operating model">
        <span className={styles.strategyLabel}>How it all fits together</span>
        <div className={styles.strategyRow}>
          <Link href="/operating-model" className={styles.strategyLink}>
            Operating model
          </Link>
          <Link href="/cross-vertical-strategy" className={styles.strategyLink}>
            Cross-vertical strategy
          </Link>
          <Link href="/product-lifecycle" className={styles.strategyLink}>
            Product lifecycle
          </Link>
        </div>
      </nav>
    </main>
  );
}
