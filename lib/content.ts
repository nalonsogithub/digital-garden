import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type ContentSection = "projects" | "research" | "writing";

export interface ContentFrontmatter {
  title: string;
  summary: string;
  date?: string;
  pdf?: string;
  external_url?: string;
  tags?: string[];
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
  section: "projects" | "research" | "writing";
  slug: string;
  label: string;
}

export interface ResumeBullet {
  text: string;
  link?: ResumeBulletLink;
}

export interface ResumeEntry {
  role: string;
  company: string;
  start: string;
  end: string;
  bullets: ResumeBullet[];
}

export function getResumeExperience(): ResumeEntry[] {
  const filePath = path.join(contentDir, "resume", "experience.json");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw) as ResumeEntry[];
  return Array.isArray(data) ? data : [];
}
