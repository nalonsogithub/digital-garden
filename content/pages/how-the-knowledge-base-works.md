---
title: "How this knowledge base works"
summary: "Notes, essays, tracks, and prompts: what each layer is for, how they link, and how new material gets in."
---

## Four layers

**Notes** are short, linked pages, one per concept, lab, model, or open question. They are allowed to be incomplete and they say so. Each carries a growth stage:

- *Seed*: a first pass, often written to fill a gap an essay exposed.
- *Growing*: load-bearing in at least one published essay and still being extended.
- *Evergreen*: stable; revised only for corrections.

Notes about fast-moving subjects (frontier AI labs, hardware) also carry a `last reviewed` date and a `confidence` level. A note that has not been reviewed in four months is flagged on its page.

**Essays** are finished, dated pieces. They do not change after publication except for corrections and marked revisions. Every essay's page ends with a "Built from" panel listing the notes it draws on. The essay is one path through the notes, not a separate body of knowledge.

**Tracks** are ordered reading paths that alternate essays and notes. Each track says where it is heading and where it currently stops.

**Prompts** are reverse-engineered instructions that, given the linked notes, would produce something close to a given essay. They are published so the method is inspectable: what the notes contain versus what the author added.

## Links

Links between notes and essays are written in the text as double-bracket wiki links. The site resolves them at build time, computes backlinks ("Referenced by", "Appears in"), and draws the [graph view](/notes/graph) from them. A link to a note that does not exist yet renders as a dashed underline. That is deliberate: it marks a gap.

## How new material gets in

Raw notes, reading, and half-formed ideas are handed to a language model with one job: decide whether the material is substantial enough to be its own note or should enrich an existing one, then propose the change as a diff for review. Nothing is written to the knowledge base without a human reading the diff. After an essay is published, the same process runs in reverse: concepts the essay used without a note become seeds, notes the essay leaned on are promoted from seed to growing, and links are added in both directions.

## Why it is built this way

A digital garden's failure mode is a pile of notes no one can navigate and no one trusts. The stage labels handle trust. The links, backlinks, and tracks handle navigation. The essays give the notes a reason to exist. The prompts make the whole thing reproducible.
