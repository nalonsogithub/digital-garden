import Link from "next/link";
import {
  getResumeExperience,
  getResumeEducation,
  getResumeIntro,
  getResumeContact,
  getResumeTechnologyLeverage,
  getResumeExecutiveSummary,
  getResumePortfolioExperience,
  contentSectionPath,
} from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { ResumePrintButton } from "@/components/resume-print-button";
import { SITE_TITLE, SITE_BYLINE } from "@/lib/site";
import styles from "./resume.module.css";

export default function ResumePage() {
  const intro = getResumeIntro();
  const executiveSummary = getResumeExecutiveSummary();
  const portfolioExperience = getResumePortfolioExperience();
  const experience = getResumeExperience();
  const technologyLeverage = getResumeTechnologyLeverage();
  const education = getResumeEducation();
  const contact = getResumeContact();

  return (
    <main>
      <PageHeader
        title={SITE_TITLE}
        byline={SITE_BYLINE}
        description="Professional experience with links to detailed work."
      />
      <p className={styles.printHint}>
        <ResumePrintButton />
      </p>

      {intro && (
        <section className={styles.section} aria-label="Executive summary">
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <p className={styles.summaryParagraph}>{intro}</p>
          {executiveSummary.length > 0 && (
            <ul className={styles.bullets}>
              {executiveSummary.map((line, i) => (
                <li key={i} className={styles.bullet}>{line}</li>
              ))}
            </ul>
          )}
          {portfolioExperience && (
            <p className={styles.paragraph}>{portfolioExperience}</p>
          )}
          <p className={styles.introLinks}>
            <Link href="/operating-model">Operating model</Link>
            {" · "}
            <Link href="/cross-vertical-strategy">Cross-vertical strategy</Link>
            {" · "}
            <Link href="/product-lifecycle">Product lifecycle</Link>
            {" · "}
            <Link href="/systems/data-driven-sales-architecture">Data-driven sales architecture</Link>
          </p>
        </section>
      )}

      {experience.length > 0 && (
        <section className={styles.resume} aria-label="Experience">
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
                                  href={`/${contentSectionPath(bullet.link.section)}/${bullet.link.slug}`}
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
                            href={`/${contentSectionPath(bullet.link.section)}/${bullet.link.slug}`}
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

      <section className={styles.section} aria-label="Early technical foundations">
        <h2 className={styles.sectionTitle}>Early Technical Foundations</h2>
        <p className={styles.paragraph}>
          <Link href="/technical-lineage/early-systems-architecture" className={styles.sectionLink}>
            View technical lineage
          </Link>
        </p>
      </section>

      {education.length > 0 && (
        <section className={styles.section} aria-label="Education">
          <h2 className={styles.sectionTitle}>Education</h2>
          <ul className={styles.educationList}>
            {education.map((item, i) => (
              <li key={i} className={styles.educationItem}>
                {item.link ? (
                  <Link
                    href={`/${contentSectionPath(item.link.section)}/${item.link.slug}`}
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

      <section className={styles.section} aria-label="Publications">
        <h2 className={styles.sectionTitle}>Publications</h2>
        <p className={styles.paragraph}>
          <Link href="/research" className={styles.sectionLink}>
            View research &amp; work
          </Link>
        </p>
      </section>

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
