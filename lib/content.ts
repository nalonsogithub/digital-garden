import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type ContentSection = "systems" | "research" | "writing" | "technical-lineage";

/** For writing items: "professional" = finance publications & capability narratives; "personal" = quantum primer, essays, etc. */
export type WritingCategory = "professional" | "personal";

export interface ContentFrontmatter {
  title: string;
  summary: string;
  date?: string;
  pdf?: string;
  external_url?: string;
  tags?: string[];
  /** Writing only: show under Professional vs Personal on the Writing index. Default "professional". */
  category?: WritingCategory;
}

export interface ContentItem {
  slug: string;
  frontmatter: ContentFrontmatter;
  body: string;
}

export function getContentSlugs(section: ContentSection): string[] {
  const sectionPath = path.join(contentDir, section);
  if (!fs.existsSync(sectionPath)) return [];
  const files = fs.readdirSync(sectionPath);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .filter((s) => /^[a-z0-9-]+$/.test(s));
}

export function getContentBySlug(
  section: ContentSection,
  slug: string
): ContentItem | null {
  const filePath = path.join(contentDir, section, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as ContentFrontmatter;
  if (!frontmatter.title || !frontmatter.summary) return null;
  return { slug, frontmatter, body: content };
}

export function getAllContent(section: ContentSection): ContentItem[] {
  const slugs = getContentSlugs(section);
  const items: ContentItem[] = [];
  for (const slug of slugs) {
    const item = getContentBySlug(section, slug);
    if (item) items.push(item);
  }
  return items.sort((a, b) => {
    const dateA = a.frontmatter.date ?? "";
    const dateB = b.frontmatter.date ?? "";
    return dateB.localeCompare(dateA);
  });
}

export interface ResumeBulletLink {
  section: "systems" | "research" | "writing" | "technical-lineage";
  slug: string;
  label: string;
}

export interface ResumeBullet {
  text: string;
  link?: ResumeBulletLink;
}

export interface ResumeSubsection {
  title: string;
  bullets: ResumeBullet[];
}

export interface ResumeEntry {
  sectionTitle?: string;
  /** When set, show company-level date range (e.g. "2010 — present") for first role at company. */
  companyDates?: string;
  /** When true, do not show section title; render as nested role under previous company. */
  continueCompany?: boolean;
  role: string;
  company: string;
  start: string;
  end: string;
  bullets: ResumeBullet[];
  subsections?: ResumeSubsection[];
}

export function getResumeExperience(): ResumeEntry[] {
  const filePath = path.join(contentDir, "resume", "experience.json");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw) as ResumeEntry[];
  return Array.isArray(data) ? data : [];
}

export interface EducationItem {
  line: string;
  link?: ResumeBulletLink;
}

export function getResumeEducation(): EducationItem[] {
  const filePath = path.join(contentDir, "resume", "education.json");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw) as EducationItem[];
  return Array.isArray(data) ? data : [];
}

export function getResumeIntro(): string | null {
  const filePath = path.join(contentDir, "resume", "intro.txt");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8").trim();
  return raw.length > 0 ? raw : null;
}

/** Executive summary bullets (6–8). One bullet per line. No detailed metrics. */
export function getResumeExecutiveSummary(): string[] {
  const filePath = path.join(contentDir, "resume", "executive-summary.txt");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

export interface ResumeContact {
  name: string;
  email: string;
  linkedin: string;
  phone: string;
}

export function getResumeContact(): ResumeContact | null {
  const filePath = path.join(contentDir, "resume", "contact.json");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw) as ResumeContact;
  return data.name && data.email ? data : null;
}

export function getResumePortfolioExperience(): string | null {
  const filePath = path.join(contentDir, "resume", "portfolio-experience.txt");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8").trim();
  return raw.length > 0 ? raw : null;
}

/** Technology & Systems Leverage bullets (architectural breadth). */
export function getResumeTechnologyLeverage(): string[] {
  const filePath = path.join(contentDir, "resume", "technology-systems-leverage.json");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw) as string[];
  return Array.isArray(data) ? data : [];
}

const pagesDir = path.join(process.cwd(), "content", "pages");

export function getPageContent(slug: string): ContentItem | null {
  const filePath = path.join(pagesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as ContentFrontmatter;
  if (!frontmatter.title || !frontmatter.summary) return null;
  return { slug, frontmatter, body: content };
}
