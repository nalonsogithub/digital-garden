# Digital Garden — Site Structure Overview

This document describes the structure of the **digital-garden** site: a Next.js (App Router) living-resume site deployed on Vercel. Use it to understand how content is organized, how URLs and pages work, and how to add or change content. Another system (e.g., an LLM) may use this to generate or recommend content and to suggest structural improvements.

---

## 1. High-level architecture

- **Framework**: Next.js 16 with App Router.
- **Content**: Driven by Markdown files and one JSON file under `/content`. No content is hardcoded in React for individual pieces.
- **Styling**: CSS modules and one global stylesheet. No Tailwind or heavy UI libraries.
- **Naming**: All repository, folder, and URL segment names use **lowercase with hyphens (kebab-case)**.

---

## 2. URL / route map

| URL | Purpose |
|-----|--------|
| `/` | Home: short intro and links to main sections |
| `/resume` | Resume page (centerpiece): experience from JSON with optional deep links to detail pages |
| `/systems` | Index of all systems (from Markdown in `content/systems/`) |
| `/systems/[slug]` | Single system detail page (e.g. `/systems/investment-process-demo`) |
| `/writing` | Index of all writing (from Markdown in `content/writing/`), with **Professional** and **Personal** subsections |
| `/writing/[slug]` | Single writing detail page (e.g. `/writing/quantum-computing-primer`) |
| `/cross-vertical-strategy` | Meta-identity page: cross-vertical leverage, integrator model (from `content/pages/cross-vertical-strategy.md`) |

**Redirects:** `/research` and `/research/[slug]` permanently redirect to `/writing` and `/writing/[slug]`.

The **slug** in `[slug]` is the Markdown filename without the `.md` extension. Slugs must be **lowercase letters, numbers, and hyphens only** (e.g. `quantum-computing-primer`). The site only discovers files whose base name matches that pattern.

---

## 3. Repository layout (source)

```
digital-garden/
├── app/                          # Next.js App Router pages and layout
│   ├── layout.tsx                 # Root layout: nav + global styles, max-width wrapper
│   ├── page.tsx                  # Home (/)
│   ├── home.module.css
│   ├── content-detail.module.css # Shared styles for section detail pages
│   ├── resume/
│   │   ├── page.tsx              # /resume
│   │   └── resume.module.css
│   ├── systems/
│   │   ├── page.tsx              # /systems index
│   │   └── [slug]/
│   │       └── page.tsx         # /systems/[slug]
│   └── writing/
│       ├── page.tsx              # /writing index
│       └── [slug]/
│           └── page.tsx         # /writing/[slug]
│
├── components/
│   ├── site-nav.tsx              # Top nav: home, resume, systems, writing (with active-state highlighting)
│   ├── site-nav.module.css
│   ├── page-header.tsx           # Section title + optional description
│   ├── page-header.module.css
│   ├── content-card.tsx          # Card for index pages: title, summary, tags, links
│   ├── content-card.module.css
│   ├── content-detail.tsx        # Shared detail layout: title, meta, PDF/external links, body
│   ├── markdown-renderer.tsx     # Renders markdown body (react-markdown)
│   └── markdown-renderer.module.css
│
├── content/                      # All authored content (markdown + one JSON)
│   ├── resume/
│   │   └── experience.json       # Resume entries and bullets (see below)
│   ├── systems/                  # One .md file per system
│   │   └── *.md
│   └── writing/                  # One .md file per writing item (professional + personal)
│       └── *.md
│
├── lib/
│   └── content.ts                # Content helpers: read markdown, parse frontmatter, list by section, get by slug, resume JSON
│
├── styles/
│   └── globals.css               # Global CSS variables and base styles
│
├── public/
│   ├── papers/                   # PDFs for download (linked from content via /papers/...)
│   └── images/                   # Optional images
│
└── docs/                         # Documentation (e.g. this file)
    └── site-structure-overview.md
```

---

## 4. Content formats

### 4.1 Markdown content (systems, writing)

Each item is a single **Markdown file** in the right section folder. The **slug** is the filename without `.md` (e.g. `quantum-computing-primer.md` → slug `quantum-computing-primer`). Only filenames that are valid slugs (lowercase, digits, hyphens) are picked up.

**Required frontmatter (YAML at top of file):**

- `title` (string) — Display title.
- `summary` (string) — Short summary used on index/card views.

**Optional frontmatter:**

- `date` (string) — Used for sorting on index pages (newest first). Any string format; comparison is string-based.
- `pdf` (string) — Path to a downloadable PDF, e.g. `"/papers/quantum_computing_primer.pdf"`. Files live in `public/papers/`; the detail page shows a “download pdf” button.
- `external_url` (string) — URL of a published version elsewhere; the detail page shows a “view published version” link.
- `tags` (array of strings) — Shown on cards and on the detail page.
- **Writing only:** `category` (string) — `"professional"` or `"personal"`. Controls whether the item appears under **Professional** (enlisted publications and research narratives) or **Personal** (e.g. quantum primer, other essays) on the Writing index. Defaults to `professional` if omitted.

**Example:**

```yaml
---
title: "quantum computing primer"
date: "2025-01-01"
summary: "Short summary for list views: introduction to quantum computing concepts."
pdf: "/papers/quantum_computing_primer.pdf"
external_url: ""
tags: ["quantum", "research"]
---

Body text in Markdown. Shown below the title, date, tags, and action buttons on the detail page.
```

- The **body** (everything after the frontmatter) is rendered as Markdown on the detail page.
- If `pdf` is set, the detail page shows a prominent “download pdf” button and a small note that the file may be a placeholder until added under `public/papers/`.
- If `external_url` is set, the detail page shows a “view published version” link.

### 4.2 Resume content (JSON)

The resume is built from a single file: **`content/resume/experience.json`**.

**Shape:** Array of experience entries. Each entry has:

- `role` (string)
- `company` (string)
- `start` (string, e.g. `"2025"`)
- `end` (string, e.g. `"present"`)
- `bullets` (array of bullet objects)

Each **bullet** has:

- `text` (string) — The bullet text.
- `link` (optional object) — Deep link to a detail page:
  - `section`: `"systems"` | `"writing"` | `"technical-lineage"`
  - `slug`: slug of the target item (must match a `.md` filename in that section)
  - `label`: link text (e.g. `"view details"`)

**Example:**

```json
[
  {
    "role": "global strategist",
    "company": "example firm",
    "start": "2025",
    "end": "present",
    "bullets": [
      {
        "text": "built an ai driven investment process demo for sales enablement",
        "link": {
          "section": "systems",
          "slug": "investment-process-demo",
          "label": "view details"
        }
      },
      {
        "text": "published research on quantum computing applications in finance"
      }
    ]
  }
]
```

Resume bullets that have a `link` show the text plus a small link to `/{section}/{slug}`. The `slug` must match an existing Markdown file in that section (e.g. `content/systems/investment-process-demo.md`).

---

## 5. How pages use content

- **Home (`/`)**: Static intro and links to `/resume`, `/systems`, `/writing`.
- **Resume (`/resume`)**: Reads `content/resume/experience.json` via `getResumeExperience()`; renders each entry and bullet; bullets with `link` get a link to `/{section}/{slug}`.
- **Index pages (`/systems`, `/writing`)**: Systems calls `getAllContent("systems")`. Writing calls `getAllContent("writing")` and groups items by `category` into **Professional** and **Personal** subsections. Each item is rendered as a **content card** (title, summary, date, tags, “view details” link, and optional “external link” if `external_url` is set).
- **Detail pages (`/systems/[slug]`, `/writing/[slug]`, etc.)**: Call `getContentBySlug(section, slug)`. They render:
  - Title (from frontmatter)
  - Date and tags
  - “Download PDF” button if `pdf` is set (and a note about placeholder)
  - “View published version” link if `external_url` is set
  - Markdown body via `MarkdownRenderer` (react-markdown).

Static params for detail pages are generated from `getContentSlugs(section)` so each Markdown file gets a static route at build time.

---

## 6. Content loading (lib/content.ts)

All content is read from disk at **build time** (and in dev, on request). The helpers use Node `fs` and `path` with `process.cwd()`; they run only on the server.

- **`getContentSlugs(section)`** — Returns array of slugs for a section (from `.md` filenames that match `[a-z0-9-]+`).
- **`getContentBySlug(section, slug)`** — Returns one `ContentItem` (frontmatter + body) or `null` if missing/invalid.
- **`getAllContent(section)`** — Returns all `ContentItem`s for a section, sorted by `date` descending (empty date sorts first in string compare).
- **`getResumeExperience()`** — Returns the parsed array from `content/resume/experience.json`.

Frontmatter is parsed with **gray-matter**. A file is considered invalid for listing if it lacks `title` or `summary`.

---

## 7. Static assets

- **PDFs**: Place files in `public/papers/`. Reference them in frontmatter as `pdf: "/papers/filename.pdf"`. The site does not check whether the file exists; it just links to it.
- **Images**: Optional; can live in `public/images/` and be linked from Markdown or frontmatter as needed.

---

## 8. Conventions and constraints

- **Kebab-case**: All URLs, folder names, and content slugs use lowercase with hyphens (e.g. `ai-in-asset-management`, not `ai_in_asset_management` for the slug). PDF filenames in `public/papers/` can use underscores if desired (e.g. `quantum_computing_primer.pdf`); the frontmatter `pdf` value must match the path.
- **No proprietary/confidential content**: Use placeholder or safe content only.
- **One piece of content per file**: One project/research/writing item per Markdown file; the slug is the filename stem.
- **Deep links**: Resume bullets can link only to existing slugs under `systems`, `writing`, or `technical-lineage`. Broken links will 404.

---

## 9. For content generation and structural recommendations

When generating or recommending content:

1. **New system item**: Add a new `.md` file in `content/systems/` with a kebab-case filename. Include required frontmatter (`title`, `summary`) and optional fields (`date`, `pdf`, `external_url`, `tags`) and a Markdown body.
2. **New writing item**: Add a new `.md` file in `content/writing/` with a kebab-case filename. Include required frontmatter (`title`, `summary`) and optional fields (`date`, `pdf`, `external_url`, `tags`, `category`). Use `category: professional` for finance publications and research narratives, `category: personal` for other essays (e.g. quantum primer).
3. **Resume update**: Edit `content/resume/experience.json`. Use `link.section` `"writing"` (or `"systems"`, `"technical-lineage"`) and `link.slug` values that match existing Markdown filenames (without `.md`) in that section.
4. **New PDF**: Add the file to `public/papers/` and set `pdf: "/papers/your-file.pdf"` in the relevant Markdown frontmatter.

If you suggest **structural changes** (e.g. new sections, different frontmatter fields, different URL patterns, or new content types), please describe them in terms of:

- New or changed routes under `app/`.
- New or changed content under `content/` (including file format and required/optional fields).
- Any changes to `lib/content.ts` (new helpers or data shapes).
- Any new or changed components and how they consume content.

This document can be updated to reflect agreed structural changes so that both the site implementation and the content-generation side stay in sync.
