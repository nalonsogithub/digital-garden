import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type ContentSection = "systems" | "research" | "writing" | "technical-lineage";

/** Primary bucket on the Research index. */
export type WritingCategory = "research" | "capabilities" | "essays";

/** Subgroup within Research. */
export type ResearchGroup = "recent" | "peer-reviewed";

/** Short label on index cards. */
export type ContentType =
  | "white-paper"
  | "peer-reviewed"
  | "case-study"
  | "strategy-brief"
  | "essay"
  | "lecture";

export type SystemsGroup = "client-distribution" | "research-infrastructure" | "platform";

export interface ContentFrontmatter {
  title: string;
  summary: string;
  date?: string;
  pdf?: string;
  external_url?: string;
  tags?: string[];
  category?: WritingCategory;
  /** Research only: recent institutional work vs peer-reviewed publications. */
  research_group?: ResearchGroup;
  /** Card badge, e.g. "JPM 2023". */
  content_type?: ContentType;
  publication?: string;
  /** Systems index grouping. */
  systems_group?: SystemsGroup;
  /** When false, omit from index pages (detail URL still works). Default true. */
  listed?: boolean;
}

export interface ContentItem {
  slug: string;
  frontmatter: ContentFrontmatter;
  body: string;
}

function resolveSectionDir(section: ContentSection): string {
  if (section === "research" || section === "writing") {
    return path.join(contentDir, "writing");
  }
  return path.join(contentDir, section);
}

/** URL segment for a content section (writing files live under /research). */
export function contentSectionPath(section: ContentSection): string {
  if (section === "writing") return "research";
  return section;
}

export function getContentSlugs(section: ContentSection): string[] {
  const sectionPath = resolveSectionDir(section);
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
  const filePath = path.join(resolveSectionDir(section), `${slug}.md`);
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
    if (!item) continue;
    if (item.frontmatter.listed === false) continue;
    items.push(item);
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
  companyDates?: string;
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

export const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
  "white-paper": "White paper",
  "peer-reviewed": "Peer-reviewed",
  "case-study": "Case study",
  "strategy-brief": "Strategy brief",
  essay: "Essay",
  lecture: "Lecture",
};

export const SYSTEMS_GROUP_LABELS: Record<SystemsGroup, { title: string; description: string }> = {
  "client-distribution": {
    title: "Client & distribution",
    description: "What prospects and clients see in meetings and follow-up.",
  },
  "research-infrastructure": {
    title: "Research infrastructure",
    description: "What makes institutional research and reviews repeatable.",
  },
  platform: {
    title: "Platform architecture",
    description: "How the pieces connect across research and distribution.",
  },
};
