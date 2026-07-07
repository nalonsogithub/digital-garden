"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, DocumentIcon, FolderIcon, PenIcon } from "@/components/icons";
import styles from "./site-nav.module.css";

const navItems = [
  { href: "/", label: "about", Icon: HomeIcon, exact: true },
  { href: "/resume", label: "resume", Icon: DocumentIcon, exact: false },
  { href: "/research", label: "research", Icon: PenIcon, exact: false },
  { href: "/systems", label: "platforms", Icon: FolderIcon, exact: false },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Main">
      {navItems.map(({ href, label, Icon, exact }) => {
        const isActive = exact
          ? pathname === href
          : pathname === href || pathname.startsWith(`${href}/`);
        const linkClass = href === "/" ? styles.home : styles.link;
        const activeClass = isActive ? styles.active : "";
        return (
          <Link
            key={href}
            href={href}
            className={`${linkClass} ${activeClass}`.trim()}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon size={18} className={styles.icon} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
