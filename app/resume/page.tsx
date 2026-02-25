import Link from "next/link";
import {
  getResumeExperience,
  getResumeEducation,
  getResumeIntro,
  getResumePortfolioExperience,
} from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ResumePrintButton } from "@/components/resume-print-button";
import styles from "./resume.module.css";

export default function ResumePage() {
  const intro = getResumeIntro();
  const experience = getResumeExperience();
  const portfolioExperience = getResumePortfolioExperience();
  const education = getResumeEducation();

  return (
    <main>
      <PageHeader
        title="Resume"
        byline="Global Strategist | Quantitative Portfolio Manager | AI Systems Architect"
        description="Professional experience with links to detailed work."
      />
      <p className={styles.printHint}>
        <ResumePrintButton />
      </p>

      {/* Section 1: Executive Summary */}
      {intro && (
        <section className={styles.section} aria-label="Executive summary">
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <p className={styles.summaryParagraph}>{intro}</p>
          <p className={styles.introLinks}>
            <Link href="/operating-model">Integrated capability model</Link>
            {" · "}
            <Link href="/product-lifecycle">Product lifecycle architecture</Link>
          </p>
        </section>
      )}

      {/* Section 2: Current Role — Global Strategist */}
      {experience.length > 0 && (
        <section className={styles.resume} aria-label="Current role">
          {experience.map((entry, i) => (
            <div key={i} className={styles.entry}>
              {entry.sectionTitle && (
                <h2 className={styles.sectionTitle}>{entry.sectionTitle}</h2>
              )}
              <div className={styles.entryHeader}>
                <h3 className={styles.role}>{entry.role}</h3>
                <span className={styles.company}>{entry.company}</span>
                <span className={styles.dates}>
                  {entry.start} — {entry.end}
                </span>
              </div>
              {entry.subsections && entry.subsections.length > 0 ? (
                <div className={styles.subsections}>
                  {entry.subsections.map((sub, k) => (
                    <div key={k} className={styles.subsection}>
                      <h4 className={styles.subsectionTitle}>{sub.title}</h4>
                      <ul className={styles.bullets}>
                        {sub.bullets.map((bullet, j) => (
                          <li key={j} className={styles.bullet}>
                            <span>{bullet.text}</span>
                            {bullet.link && (
                              <>
                                {" "}
                                <Link
                                  href={`/${bullet.link.section}/${bullet.link.slug}`}
                                  className={styles.detailLink}
                                >
                                  {bullet.link.label}
                                </Link>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className={styles.bullets}>
                  {entry.bullets.map((bullet, j) => (
                    <li key={j} className={styles.bullet}>
                      <span>{bullet.text}</span>
                      {bullet.link && (
                        <>
                          {" "}
                          <Link
                            href={`/${bullet.link.section}/${bullet.link.slug}`}
                            className={styles.detailLink}
                          >
                            {bullet.link.label}
                          </Link>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Section 3: Portfolio Management & Research Experience */}
      {portfolioExperience && (
        <section className={styles.section} aria-label="Portfolio management and research experience">
          <h2 className={styles.sectionTitle}>Portfolio Management & Research Experience</h2>
          <p className={styles.paragraph}>{portfolioExperience}</p>
        </section>
      )}

      {/* Section 4: Early Technical Foundations */}
      <section className={styles.section} aria-label="Early technical foundations">
        <h2 className={styles.sectionTitle}>Early Technical Foundations</h2>
        <p className={styles.paragraph}>
          <Link href="/technical-lineage/early-systems-architecture" className={styles.sectionLink}>
            View technical lineage
          </Link>
        </p>
      </section>

      {/* Section 5: Education */}
      {education.length > 0 && (
        <section className={styles.section} aria-label="Education">
          <h2 className={styles.sectionTitle}>Education</h2>
          <ul className={styles.educationList}>
            {education.map((item, i) => (
              <li key={i} className={styles.educationItem}>
                {item.link ? (
                  <Link
                    href={`/${item.link.section}/${item.link.slug}`}
                    className={styles.educationLink}
                  >
                    {item.link.label}
                  </Link>
                ) : (
                  <span>{item.line}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Section 6: Publications */}
      <section className={styles.section} aria-label="Publications">
        <h2 className={styles.sectionTitle}>Publications</h2>
        <p className={styles.paragraph}>
          <Link href="/writing" className={styles.sectionLink}>
            View publications
          </Link>
        </p>
      </section>
    </main>
  );
}
