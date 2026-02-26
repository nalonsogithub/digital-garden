import Link from "next/link";
import {
  getResumeExperience,
  getResumeEducation,
  getResumeIntro,
  getResumeContact,
  getResumeTechnologyLeverage,
} from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ResumePrintButton } from "@/components/resume-print-button";
import styles from "./resume.module.css";

export default function ResumePage() {
  const intro = getResumeIntro();
  const experience = getResumeExperience();
  const technologyLeverage = getResumeTechnologyLeverage();
  const education = getResumeEducation();
  const contact = getResumeContact();

  return (
    <main>
      <PageHeader
        title="Director | Global Strategist"
        byline="Institutional Client Engagement | Quantitative Research & Portfolio Management | AI Systems Architect"
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
              {entry.sectionTitle && !entry.continueCompany && (
                <h2 className={i === 0 ? styles.sectionTitlePrimary : styles.sectionTitle}>{entry.sectionTitle}</h2>
              )}
              {entry.companyDates && (
                <p className={styles.companyDates}>{entry.companyDates}</p>
              )}
              <div className={styles.entryHeader}>
                <h3 className={styles.role}>{entry.role}</h3>
                {!entry.continueCompany && entry.company && (
                  <span className={styles.company}>{entry.company}</span>
                )}
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

      {/* Section 3: Technology & Systems Leverage */}
      {technologyLeverage.length > 0 && (
        <section className={styles.section} aria-label="Technology and systems leverage">
          <h2 className={styles.sectionTitle}>Technology & Systems Leverage</h2>
          <ul className={styles.bullets}>
            {technologyLeverage.map((item, j) => (
              <li key={j} className={styles.bullet}>{item}</li>
            ))}
          </ul>
          <p className={styles.paragraph}>
            <Link href="/systems/technology-platform-architecture" className={styles.sectionLink}>
              Technology platform architecture
            </Link>
          </p>
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

      {/* Section 7: Contact */}
      {contact && (
        <section className={styles.section} aria-label="Contact">
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.contactLine}>
            {contact.name}
            {" · "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            {" · "}
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {" · "}
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>{contact.phone}</a>
          </p>
        </section>
      )}
    </main>
  );
}
