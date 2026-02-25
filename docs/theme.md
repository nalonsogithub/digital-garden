# Digital Garden — Theme

Use this as the single source of truth for visual consistency.

## Color palette

**Primary blue (mid tone)**  
- Not too dark, not too light; should not distract from content.  
- Used for: links, primary buttons, icons, focus states.

| Role              | Light mode | Dark mode |
|------------------|------------|-----------|
| Primary          | `#2563eb`  | `#60a5fa` |
| Primary hover    | `#1d4ed8`  | `#93c5fd` |
| Primary subtle   | `#eff6ff`  | `#1e3a5f` (optional backgrounds) |
| Primary muted    | `#3b82f6`  | `#38bdf8` (secondary emphasis) |

**CSS variables (use these in components):**

- `--theme-primary` — Main blue for links and primary actions.
- `--theme-primary-hover` — Hover state.
- `--theme-primary-subtle` — Very light blue for non-distracting backgrounds (e.g. highlighted sections).
- `--theme-primary-muted` — Slightly lighter blue for secondary emphasis.
- `--link` / `--link-hover` — Alias to theme primary (used by global `a` styles).

**Base (unchanged):**  
`--background`, `--foreground`, `--muted`, `--border` control page background, text, secondary text, and borders. Do not introduce new accent colors; keep blue as the only accent.

## Icons

- **Format:** SVG only (inline React components in `components/icons/`).
- **Usage:** Import from `@/components/icons`. Icons take optional `size` (px) and `className`; they use `currentColor`. Available: `HomeIcon`, `DocumentIcon`, `FolderIcon`, `SearchIcon`, `PenIcon`, `ExternalIcon`, `DownloadIcon`. Add new icons in `components/icons/` and export from `index.ts`.
- **Placement:** Prefer icon + text for clarity (e.g. external link icon + “View published version”).

## Consistency checklist

- [ ] Links and buttons use `var(--theme-primary)` or `var(--link)`.
- [ ] Hover states use `var(--theme-primary-hover)` or `var(--link-hover)`.
- [ ] No new accent colors; blue only.
- [ ] Icons are SVG (from `components/icons/`), not icon fonts or image sprites.
