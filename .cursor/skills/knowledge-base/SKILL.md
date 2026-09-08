---
name: knowledge-base
version: 1.0.0
description: >-
  Maintain the digital garden's knowledge base (content/notes, content/tracks,
  content/prompts). Use whenever Nick hands over raw notes, reading, a link, or a
  half-formed idea ("here are my notes on X", "add this to the wiki", "file this",
  "ingest inbox"), asks to back-propagate a finished essay into the notes, or asks
  to review, promote, or prune notes. Routes material to a new note or an existing
  one, proposes the change as a reviewable diff, keeps links bidirectional, and
  never writes to the knowledge base without review.
---

# knowledge-base

Turn raw material into linked, staged notes, and keep essays and notes in sync.
Read `.cursor/skills/writing-style/STYLE.md` before writing any prose.

## The two directions

1. **Ingest** (raw material -> notes). Nick drops text, a file, or a link; I decide
   whether it becomes a new note or enriches an existing one, then propose a diff.
2. **Back-propagate** (finished essay -> notes). After an essay is published, I find
   the concepts it used without a note, promote the notes it leaned on, and add
   links in both directions.

Both end in a diff Nick reviews. Nothing lands in `content/notes` unreviewed.

## Where raw material lives

`inbox/` at the repo root (git-ignored, never deployed). One file per drop, any
format. After a drop is processed and its diff accepted, delete the inbox file
or move it to `inbox/processed/`. If Nick pastes material in chat instead, treat
the message as the inbox file.

## Ingest procedure

1. **Read the drop in full.** Identify each distinct claim or idea; a drop often
   contains two or three.
2. **Search the existing notes** (`content/notes/*.md`, titles, summaries, bodies)
   for each idea. Use `rg -i` on key terms and synonyms, not just the exact word.
3. **Route each idea** with this test:
   - *Enrich an existing note* if the idea is about a concept that already has a
     note, even if it adds a new angle. Add a section or extend one; update the
     Review log with the date and one line on what changed.
   - *Create a new note* only if (a) no existing note is about this concept, AND
     (b) the idea can stand as a page a reader would land on directly, AND
     (c) at least one other note or essay would plausibly link to it. If (c) fails,
     it is a paragraph in an existing note, not a note.
   - *Create a question note* (`note_type: question`) if the material is a
     genuine open question rather than a concept. Questions are first-class.
   - *Discard with a reason* if the material is a duplicate or too thin. Say so.
4. **Draft the change.** New notes use the schema below. Enrichments preserve the
   existing voice and structure. Add `[[wiki-links]]` to every existing note the
   text mentions, and add a reciprocal link or `related:` entry on the other side.
5. **Set stage and confidence honestly.** New notes start as `seed`. Perishable
   subjects (labs, models, hardware vendors, benchmarks) get `last_reviewed` and
   `confidence`, and every dated claim gets a `sources` entry.
6. **Present the diff.** For each file: path, new/modified, and a one-line reason
   for the routing decision. Ask for review. Apply only on approval.

## Back-propagation procedure (after an essay is published)

1. Parse the essay's `[[links]]`. For each target with no file, propose a `seed`
   note built from what the essay says plus what the notes around it say.
2. For each linked note currently at `seed`, propose promotion to `growing` with a
   Review-log line naming the essay.
3. Scan the essay for concepts named without a link (capitalized terms, named
   theorems, people, algorithms) that have a matching note; propose adding links.
4. Where the essay states something a note contradicts or extends, propose the
   note edit, not the essay edit, unless the essay is wrong.
5. If the essay has no `prompt:` entry, draft `content/prompts/<slug>.md` as a
   reverse-engineered prompt (inputs, spine, governing image, voice, claims to get
   right, figures, length) and add `prompt: "<slug>"` to the essay frontmatter.
6. If the essay belongs to a track, add it and any new notes to the track's
   `sequence` at the right position.
7. Present as one diff.

## Note schema

```yaml
---
title: "Title Case"
summary: "One or two sentences. State what the note covers and, for perishable notes, the current state."
note_type: "concept"      # concept | lab | model | hub | question
status: "seed"            # seed | growing | evergreen
tags: ["lowercase", "few"]
related: ["other-note-slug"]        # optional; links in the body are also picked up
last_reviewed: "YYYY-MM-DD"         # perishable notes only
confidence: "medium"                # high | medium | speculative; perishable notes only
sources:                            # required for any dated or attributable claim
  - title: "Source title"
    url: "https://..."
    accessed: "YYYY-MM-DD"
---
```

Body: H2 headings; short paragraphs; `[[slug]]` or `[[slug|label]]` links; a final
`## Review log` with dated one-line entries, newest last. Include a "What this note
does not yet cover" section when the gaps are known; it is a to-do list a reader can
see. Filenames are kebab-case slugs matching `[a-z0-9-]+`.

## Stage rules

- `seed` -> `growing`: cited by a published essay, or substantially extended twice.
- `growing` -> `evergreen`: Nick's call only. Propose it; do not apply it.
- Any note with `last_reviewed` older than 120 days is flagged on the site. When
  asked to "review stale notes", re-check each against current sources, update
  facts, bump `last_reviewed`, and log the review.

## Voice

Notes follow STYLE.md: direct, structured, no em dashes, no hype, declarative
headings, hedge beliefs not data. Notes are drier than essays. One governing
metaphor per essay is the rule for essays; notes should carry none.

## Site wiring (do not skip)

- New notes appear automatically under `/notes` and in the graph; no code change.
- Links to slugs that do not exist render as dashed "not yet written" markers.
  That is acceptable in essays as a visible gap; in notes, prefer creating the seed.
- Tracks live in `content/tracks/*.md` with a `sequence` of `section:slug` entries.
- Prompts live in `content/prompts/*.md` and are linked from essays via `prompt:`.
- After changes, run `npm run build` to confirm the site compiles before proposing
  a commit. Add a `CHANGELOG.md` entry describing what changed and why.
