import { getResumeContact } from "@/lib/content";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const contact = getResumeContact();
  if (!contact) return null;

  return (
    <footer className={styles.footer}>
      <p className={styles.line}>
        {contact.name}
        {" · "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        {" · "}
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
