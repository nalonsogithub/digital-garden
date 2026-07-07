---
name: writing-style
version: 1.1.4
description: >-
  Apply Nick Alonso's writing voice when drafting or editing ANY prose
  deliverable (research papers, memos, client notes, executive summaries,
  emails, slide narratives, READMEs, talking points): practitioner-led and
  structured, "not X, but Y" reframing, evidence-as-support (claim ->
  evidence -> interpretation -> implication), grounded "operational reality"
  language, commercially aware but never promotional, and NO em dashes. Also
  records new, durable style preferences back into STYLE.md
  (proactive-but-confirm) so the voice profile keeps improving. Use whenever
  the user asks to write, draft, edit, reword, tighten, "make this sound like
  me / like Nick", or produces a paper/memo/summary/email.
---

# writing-style

Write and edit prose in Nick Alonso's voice, and keep the voice profile learning.

## When this skill applies

Trigger on any of:

- "Write / draft / reword / tighten / edit this ..." (any prose)
- "Make this sound like me" / "in my voice" / "Nick-style this"
- Producing a research paper, memo, client note, executive summary, email,
  slide narrative, talking points, or a substantive README intro.
- The `analysis-deliverables` workflow, when authoring the `.md` prose.

It does **not** apply to code, code comments, or pure data/config files.

## How to apply the voice

1. **Read `STYLE.md`** in this skill folder first. It is the canonical voice
   profile. Honor the curated core (§1–22) and anything in §23 Learned Preferences.
2. Highest-leverage rules to never miss:
   - **Shape:** name the real problem → show why the usual framing is incomplete
     → introduce a cleaner framework → support it → state a usable implication.
   - **Signature move:** "The issue is not X. The issue is Y."
   - **Evidence:** claim → evidence → interpretation → implication. Don't let the
     table write the paragraph; say what the data *means*.
   - **Operational reality:** ground abstractions ("In practice, this means…",
     "The real constraint is…", "The failure mode is…").
   - **Commercially aware, not promotional.** No hype, no unsupported superlatives,
     no generic consultant/thought-leadership filler.
   - **NO em dashes.** Split into two sentences, or use a colon, semicolon, commas,
     or parentheses. When editing, scan specifically for em dashes and remove them.
   - **Concision (Strunk and White, §21):** omit needless words, prefer the active
     voice, be specific and concrete. Cut filler, not nuance or the "not X, but Y" move.
   - Avoid: "Furthermore", "Moreover", "It is important to note", "In conclusion",
     "In today's rapidly changing environment".
3. Match tone to audience (internal / sales / consultant / leadership — see §5).
4. Run the §22 checklist before declaring a draft done.

## The memory loop (proactive, but confirm)

The point of this skill is that the voice profile improves as I learn more about
Nick. Mode: **proactive-but-confirm.**

1. **Detect.** During a writing/editing session, watch for a *durable* style
   signal: an explicit instruction ("stop hedging", "lead with the number",
   "I never want bullet lists in client notes"), or a repeated manual correction
   of my drafts in the same direction.
2. **Confirm.** Before changing the guide, ask once, concretely:
   > "Want me to add this to your style guide: '<one-line preference>'?"
   Only proceed on a yes. Never write speculative or one-off preferences.
3. **Record.** On yes, prepend a dated bullet to the `<!-- BEGIN LEARNED -->`
   block in `STYLE.md` §23:
   `- YYYY-MM-DD — <preference>. (source: <what was said / which doc>)`
4. **Version.** Bump `version` in this file's frontmatter and `STYLE_VERSION`
   in `STYLE.md`'s header (patch bump for a learned bullet), and add a one-line
   `CHANGELOG.md` entry.
5. **Curate (periodically / on request).** When the user says "curate / review my
   style guide", or when §23 has several related bullets, promote the recurring
   ones into the curated core (§1–22), remove duplicates from §23, minor-bump the
   version, and note it in the changelog.
6. **Persist.** Recommend committing (and re-publishing) so the update can't be
   lost. STYLE.md is durable only once it's in git + on the shares.

Do not store anything sensitive (deal names, client PII, credentials) in the guide.

## Publish (keep copies in sync)

Canonical lives here in the repo. To use the voice in every project and share it
with the team, publish copies after meaningful changes:

```powershell
# user-level (applies in all of Nick's Cursor projects)
robocopy "C:\Users\nalonso\source\SnM\.cursor\skills\writing-style" `
         "C:\Users\nalonso\.cursor\skills\writing-style" /E /NFL /NDL /NJH /NJS

# team skills share
robocopy "C:\Users\nalonso\source\SnM\.cursor\skills\writing-style" `
         "Y:\Webapps\sales-ai\skills\writing-style" /E /NFL /NDL /NJH /NJS
```

Edit the canonical copy only; treat the published copies as read-only mirrors.

## Files

- `STYLE.md` — the canonical voice profile (curated core + learned log).
- `CHANGELOG.md` — dated change history; one line per update.

## How Nick uses it day to day

- Just write. When drafting prose I read `STYLE.md` and match the voice.
- To teach it: correct my draft, or say "remember this for my style: …". I'll
  confirm, then log + version it.
- To clean it up: "curate my style guide" — I summarize what it has learned and
  promote/prune.
