# Research section: findings and a plan to close the gaps

Written after an audit prompted by Nick's feedback (2026-07-07): the Research
section is hard to navigate, the peer-reviewed papers are incomplete, and the
strategy pages (operating model, cross-vertical strategy, product lifecycle)
were too hard to find. This doc records what's already fixed, what's still
open, and gives self-contained task specs for the open items so they can be
handed to a cheaper/faster model without re-deriving this context.

## Already fixed (2026-07-07)

- Homepage now surfaces all three strategy pages as visible pill links
  ("How it all fits together": Operating model, Cross-vertical strategy,
  Product lifecycle) instead of one muted link to just the operating model.
  `cross-vertical-strategy` previously had **zero** inbound links anywhere on
  the site.
- Added a new "How this evolves" section to
  [content/pages/operating-model.md](../content/pages/operating-model.md)
  capturing the three-phase maturity idea Nick dictated: (1) make existing
  workflows faster first, (2) systems retain real outcomes and start looking
  like they're learning, (3) once retained history reaches critical density
  in an area, the system gets proactive rather than just faster.

## Finding: the 9 peer-reviewed papers are empty stubs

Every file in `content/writing/` with `research_group: "peer-reviewed"` is
**13 lines total: frontmatter only, no body, no external_url.** The `summary`
field is a placeholder like `"Journal of Portfolio Management. Active versus
passive investing."`, not an actual executive summary. This is the single
biggest gap behind Nick's "hard to navigate and incomplete" comment.

Affected files (all in `content/writing/`):

- `active-versus-passive-old-wine-new-wine-skins.md` — J. Portfolio Mgmt. 2016
- `resale-value-risk-parity-equity-portfolios.md` — J. Portfolio Mgmt. 2017
- `efficient-smart-beta.md` — J. Investing 2018
- `not-all-factor-exposures-created-equal.md` — J. Portfolio Mgmt. 2019
- `risk-parity-equity-strategy-flexible-risk-targets.md` — J. Investing 2021
- `missing-in-minimum-volatility-currency-risk.md` — J. Index Investing 2020
- `triumph-of-mediocrity-naive-beta.md` — J. Portfolio Mgmt. 2022
- `devil-in-details-risks-low-volatility-investing.md` — J. Portfolio Mgmt. 2023
- `use-and-misuse-of-tracking-error.md` — J. Portfolio Mgmt. 2023

**This cannot be fixed by any model without source material.** An executive
summary of a real published paper has to come from the real paper, not be
invented. Nick needs to either point to the source document for each (same
workflow already used for the quantum computing primer and the "From Smooth
to Jagged" essay: drop a `.docx`/`.pdf` in a folder and name the path), or
paste in the abstract/summary text directly.

### Task A1 — find real external links (good for a cheap/fast model)

This is bounded, mechanical, and low-judgment-per-item: a web search plus a
strict title match, not creative work. Self-contained prompt:

> For each of these 9 papers by Nick Alonso, search the web (Google Scholar,
> SSRN, the journal's own site) for the real published URL or DOI:
>
> 1. "Active versus Passive: Old Wine in New Wine Skins" — Journal of
>    Portfolio Management, ~2016
> 2. "The Resale Value of Risk-Parity Equity Portfolios" — Journal of
>    Portfolio Management, ~2017
> 3. "Efficient Smart Beta" — Journal of Investing, ~2018
> 4. "Not All Factor Exposures Are Created Equal" — Journal of Portfolio
>    Management, ~2019
> 5. "Risk Parity Equity Strategy with Flexible Risk Targets" — Journal of
>    Investing, ~2021
> 6. "What Is Missing in Common Minimum Volatility Strategies? The Ignored
>    Impact of Currency Risk" — Journal of Index Investing, ~2020
> 7. "The Triumph of Mediocrity: A Case Study of Naïve Beta" — Journal of
>    Portfolio Management, ~2022
> 8. "The Devil Is in the Details: The Risks Often Ignored in Low-Volatility
>    Investing" — Journal of Portfolio Management, ~2023
> 9. "The Use and Misuse of Tracking Error" — Journal of Portfolio
>    Management, ~2023
>
> Rules: only accept a match if the title matches exactly or near-exactly
> AND the journal matches AND the year is within one year of the estimate.
> If you cannot confirm a match with that confidence, report it as "not
> found" rather than guessing or returning an unrelated result. For each
> paper, report: title, confirmed URL (or "not found"), and the confidence
> basis (e.g. "matched on SSRN, exact title and journal"). Do not edit any
> files yet, just report findings in a table.

Once Nick confirms the findings, apply them: the `external_url` field
already exists in frontmatter (`content/writing/<slug>.md`), matching the
pattern already used elsewhere in the site (e.g. `the-resolution-of-reality.md`
uses `pdf:`; peer-reviewed items should use `external_url:` instead, since
that's the field `content-detail.tsx` renders as "view published version").

### Task A2 — build the full pages (once Nick supplies source material)

Self-contained prompt, once a source file exists for a given paper:

> Read the source document at `<path Nick provides>`. Extract the full text
> preserving section headings. Follow the exact pattern used in
> `content/writing/from-smooth-to-jagged.md` and `content/writing/
> the-resolution-of-reality.md` in this repo: frontmatter with `title`,
> `date`, `summary` (a real 1-2 sentence description of the paper's actual
> finding, not a restatement of the journal name), `tags`, `category:
> "research"`, `research_group: "peer-reviewed"`, `content_type:
> "peer-reviewed"`, `publication` (already set, don't change), and
> `external_url` (from Task A1's confirmed findings, or leave empty if not
> found). Body: convert the paper's actual sections into markdown, keep
> Nick's original wording verbatim, don't rewrite or summarize his prose. If
> the source has figures/images, follow the image-extraction process
> documented in this repo's session history (unzip the .docx, pull files
> from word/media/, match each to its paragraph position via
> word/document.xml, copy into `public/images/<slug>/`). Do not fabricate
> any content not present in the source document.

## Finding: "personal" essays are buried

The Essays section (`from-smooth-to-jagged`, `the-resolution-of-reality`,
`ai-in-asset-management`) sits at the bottom of `/research`, below two
Research subsections and the full Capabilities list. A visitor has to scroll
past ~15 institutional research cards to find them.

### Task B — add filtering to the research page (good for a cheap/fast model, but review the UX choice first)

This is well-specified frontend work: mechanical once the behavior is
decided, no new npm dependencies needed, matches the existing CSS-variable
design system. Self-contained prompt:

> In this Next.js 16 (App Router) repo, `app/research/page.tsx` is currently
> a server component that calls `getAllContent("research")` and renders
> every item in static sections (Recent institutional research,
> Peer-reviewed publications, Capabilities, Essays), see the file for the
> exact grouping logic.
>
> Task: add a filter/search control at the top of the page, above the first
> section, that lets a visitor narrow the list without a page reload.
>
> - Keep `app/research/page.tsx` as a server component (it must keep calling
>   `getAllContent` server-side, this repo has no client-side data fetching).
>   Pass the fetched `items` array (already typed as `ContentItem[]` from
>   `lib/content.ts`) into a new client component,
>   `components/research-explorer.tsx` (add `"use client"` at the top).
> - `ResearchExplorer` renders: (1) a text input that filters by title, tag,
>   and summary substring match (case-insensitive), and (2) a row of filter
>   pills: "All", "Recent research", "Peer-reviewed", "Capabilities",
>   "Essays", mapped to the existing `category` / `research_group`
>   frontmatter fields (see `lib/content.ts` for the exact type definitions:
>   `WritingCategory`, `ResearchGroup`). Selecting a pill and/or typing in
>   the search box filters the existing section-grouped rendering in place;
>   don't flatten the sections, just hide non-matching items and hide empty
>   sections.
> - Reuse the existing `ContentCard` component
>   (`components/content-card.tsx`) for rendering, don't build new card
>   markup.
> - Style using the existing CSS variables in `styles/globals.css`
>   (`--theme-primary`, `--border`, `--muted`, etc.) and match the visual
>   language already used for pills in `components/site-nav.module.css` and
>   `app/home.module.css` (`.strategyLink`) rather than inventing a new
>   style. Add a new `components/research-explorer.module.css`.
> - No new npm dependencies. No search index/library, plain JS `.filter()`
>   on the already-fetched array is sufficient at this content volume (~26
>   items).
> - After implementing, start the dev server and verify: typing in the
>   search box narrows results, each filter pill works, combining search +
>   pill works, and clearing both restores the full original grouped view.

**Before handing this off**, Nick should confirm this is the UX he wants
(search box + filter pills) rather than, say, a dedicated `/research/essays`
route or a top-level nav item. The task spec above assumes filter pills;
swap that paragraph out if a different direction is preferred.

## Lower priority: thin "capabilities" stub pages

Several `content/writing/*.md` files under `category: "capabilities"` are
short, self-flagged placeholders (they literally end with a sentence like
"This brief can be expanded with implementation and performance detail over
time"): `performance-attribution-case-study.md`, `defensive-growth-
evolution.md`, and similarly-sized files. These aren't broken like the
peer-reviewed stubs, they're intentionally minimal. Not urgent. If Nick wants
these expanded, same rule as the papers: needs his input for the real detail
first, since fabricating specifics about strategy performance isn't safe to
delegate to any model, cheap or expensive.
