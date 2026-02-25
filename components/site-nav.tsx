"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, DocumentIcon, FolderIcon, SearchIcon, PenIcon } from "@/components/icons";
import styles from "./site-nav.module.css";

const navItems = [
  { href: "/", label: "home", Icon: HomeIcon, exact: true },
  { href: "/resume", label: "resume", Icon: DocumentIcon, exact: false },
  { href: "/systems", label: "systems", Icon: FolderIcon, exact: false },
  { href: "/research", label: "research", Icon: SearchIcon, exact: false },
  { href: "/writing", label: "writing", Icon: PenIcon, exact: false },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Main">
      {navItems.map(({ href, label, Icon, exact }) => {
        const isActive = exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
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
