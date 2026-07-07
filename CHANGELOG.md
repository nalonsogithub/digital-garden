# Changelog

Tracks meaningful changes to this site's content, layout, and systems. Newest first.

Entries from 2026-07-07 onward were made with Claude Code and are described in
detail below. Earlier entries predate that workflow and are summarized from
git history only.

## 2026-07-07 — Fix client-facing framing on the Live Attribution System page (`ad04dc7`)

- The system is internal (portfolio managers and analysts use it); it was never client-facing itself. Renamed the section from "Client-facing use" to "Internal use, client-facing output" and reworded to make clear clients never touch the tool directly, its speed is what lets a PM answer a client question live during a call.

## 2026-07-07 — Tighten resume executive summary: fix current scope, cut redundancy, sync links (`ed0f08a`)

- Corrected the opening line: the current role manages equity portfolios only; commodities/multi-asset is background, not current scope.
- Reworded the research-to-client-material phrasing to align with the homepage's Distribution 2.0 framing instead of echoing the phrase retired there.
- Removed the closing portfolio-experience paragraph, which repeated the commodities/multi-asset/equity list a third time with no new information.
- Split the distribution-architecture bullet into two, separating the system description from the meeting-cadence proof point.
- Synced the resume's strategy-page links with the homepage's pill labels and added the missing link to `cross-vertical-strategy`.

## 2026-07-07 — Rewrite homepage intro around the Distribution 2.0 vision (`2c49b9a`)

- Replaced the portfolio-manager/researcher framing on the homepage with a single strategist throughline: three backgrounds (quantitative research, systems architecture, client-facing communication) applied to modernizing institutional distribution, framed as leading into the AI era rather than catching up.
- Second paragraph now describes the inference-layer design goal across the full opportunity-to-service life cycle (targeting, meeting prep, follow-up, client service), written in design-intent tense since it hasn't been built yet.

## 2026-07-07 - Split strategy architectures from production platforms

- Renamed the Research page's platform bucket to "Architectures" and retitled the Defensive Equity and Defensive Growth entries as architecture/platform briefs.
- Added separate Defensive Equity Platform and Defensive Growth Platform entries to the Platforms page for the production systems used to manage portfolios, backtests, optimizations, restrictions, and monitoring.
- Moved Investment Process Demo and Sales AI Platform under Distribution intelligence.

## 2026-07-07 - Reorganize Platforms page into navigable system groups

- Replaced the static Platforms page with searchable filters for core platforms, distribution intelligence, and research infrastructure.
- Reframed links from "View system" to "See description" so cards set the right expectation.
- Hid non-platform architecture stubs, renamed Consultant Intelligence Vault to Consultant Intelligence Map, reframed Portfolio Attribution Library as a Live Attribution System, and added Meeting Preparation Playbooks.

## 2026-07-07 - Add research filters and reorganize career platform work

- Replaced the static Research index with a searchable, filterable explorer for recent research, peer-reviewed publications, career platforms, essays, and presentations.
- Distinguished Research sections with separate visual section treatments so peer-reviewed papers, institutional research, platforms, essays, and presentations are easier to scan.
- Tightened the career platform set to the major platform/capability items and moved AI in Asset Management out of Essays into Presentations, anchored to the J.P. Morgan Quantitative Asset Management Conference 2023 talk.

## 2026-07-07 - Add peer-reviewed publication summaries and request-copy links

- Expanded all nine peer-reviewed research pages from placeholder stubs into publication pages with real executive summaries drawn from the local publication summary file.
- Added a `request_email` frontmatter field and rendered "request a copy" links on research cards and detail pages, so the site can offer one-on-one email requests without making PDFs downloadable.
- Corrected several publication badges/years to match the supplied publication metadata.

## 2026-07-07 — Surface strategy pages on homepage, add operating-model maturity section, plan research-section cleanup (`cd0ebf0`)

- Homepage now links to all three strategy pages (operating model, cross-vertical strategy, product lifecycle) as visible pills instead of one muted link to just the operating model. `cross-vertical-strategy` previously had zero inbound links anywhere on the site.
- Added a "How this evolves" section to [content/pages/operating-model.md](content/pages/operating-model.md): the three-phase maturity idea (make existing workflows faster first, let systems retain real outcomes and start looking like they're learning, then get proactive once retained history reaches critical density).
- Added [docs/research-section-plan.md](docs/research-section-plan.md): audit findings (the 9 peer-reviewed papers are empty frontmatter-only stubs with no external links or real summaries) plus self-contained task specs for a cheaper/faster model to pick up once source material or UX direction is confirmed.

## 2026-07-07 — Add "From Smooth to Jagged" essay, interactive Mandelbrot explorer, sales-cadence resume stat (`157142f`)

- Added [content/writing/from-smooth-to-jagged.md](content/writing/from-smooth-to-jagged.md), a new essay on the history of the Taylor series, the Fourier transform, stochastic calculus, and fractal geometry, ending with a personal Mandelbrot story tied to reading markets.
- Pulled the essay's five figures out of the source `.docx`, matched each to its exact caption and position, and embedded four of them as real images.
- Replaced the fifth figure (the Mandelbrot set) with a live, in-browser interactive explorer: click to zoom in on the boundary, shift-click to zoom out, reset button. Built as a canvas-based escape-time renderer (`components/interactive/mandelbrot-explorer.tsx`).
- Added a generic `<!-- interactive:name -->` marker mechanism to `components/content-detail.tsx` so future essays can embed interactive widgets the same way.
- Added a generalized sales-meeting cadence data point ("roughly tripled to quadrupled since mid-2025") to the resume executive summary and experience entries, without exposing underlying specific counts.

## 2026-07-07 — Clean up AI-sounding copy, normalize titles, fix AUM figure, homepage grid (`b0eb6a2`)

- Removed self-narrating "Demonstrates X" lines and vague thought-leadership language from the operating-model, cross-vertical-strategy, product-lifecycle, and early-systems-architecture pages.
- Cut prose em dashes flagged by the writing-style guide.
- Normalized 18 inconsistently-cased content titles to Title Case.
- Corrected multi-asset platform peak AUM from $40B–$60B to $20B.
- Renamed the homepage "Track record" card to "Resume."
- Fixed the homepage's 3-card featured grid so it no longer orphans the third card into its own row at mid-width viewports.

## 2026-07-07 — Redesign site layout, research taxonomy, and voice across copy (`4e30fe7`)

- Pre-existing commit, not made in this session. Summarized from commit message only.

## 2026-07-07 — Reposition portfolio site around dual PM/strategist mandate and recent work (`17d3a50`)

- Pre-existing commit, not made in this session. Summarized from commit message only.

## 2026-02-26 — Resume structure: PanAgora first, Mellon, EN Tech 2000–2005 (`856c93e`)

## 2026-02-25 — Capitalize Global Strategist, add work-in-progress notice, resume print/PDF button, deploy (`8ee8ee1`)

## 2026-02-24 — Add quantum computing primer PDF and update research page copy (`9da9c45`)

## 2026-02-24 — Add content-driven living resume structure (`1401375`)

## 2026-02-24 — Initialize clean Next.js foundation (`7bf94ba`)
