import Link from "next/link";
import { getResumeExperience } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import styles from "./resume.module.css";

export default function ResumePage() {
  const experience = getResumeExperience();

  return (
    <main>
      <PageHeader
        title="Resume"
        description="Professional experience with links to detailed work."
      />
      <section className={styles.resume} aria-label="Experience">
        {experience.map((entry, i) => (
          <div key={i} className={styles.entry}>
            <div className={styles.entryHeader}>
              <h2 className={styles.role}>{entry.role}</h2>
              <span className={styles.company}>{entry.company}</span>
              <span className={styles.dates}>
                {entry.start} — {entry.end}
              </span>
            </div>
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
          </div>
        ))}
      </section>
    </main>
  );
}
