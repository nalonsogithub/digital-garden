---
title: "Prompt: From Prediction to Agency"
summary: "The prompt that produced the draft of From Prediction to Agency from a research brief and the linked notes. Unlike the other two prompts, this one came before the essay."
---

This essay was written from the notes rather than before them, so the prompt below is close to the one actually used. The research step matters as much as the writing step: for a subject that changes monthly, the brief has to be built from current primary sources with every claim carrying a URL, and the writer has to refuse claims marked unverified.

## Step 1: the research brief

```text
Produce a research brief (not an essay) on the development of frontier language models
as of today's date. Verify the following candidate spine and correct it where wrong:
prediction and scaling laws; instruction following and preference training; reasoning
and test-time compute; tool use and agency; whatever the current frontier is. For each
stage give (a) the technical change, (b) two to four landmark papers or releases with
dates and URLs, (c) the limit that stage hit, with a citable source, and (d) one or two
quantitative facts with sources. Add sections on: the data wall and synthetic data;
evaluation and benchmark saturation; LLM agents as simulators of humans (Park 2023,
Park 2024, Binz/Centaur 2025, and any LLM agent-based market simulations, each with
"shown" and "not shown"); reflexivity (Soros, Lucas, Goodhart, performative prediction,
documented cases); a current-state table of frontier models; and open questions.
Every factual claim gets a URL. Prefer primary sources. Mark anything you cannot verify
UNVERIFIED rather than dropping it.
```

## Step 2: the essay

```text
You are writing the third essay in a library of three. The first (From Smooth to Jagged)
is about mathematics deriving structure from first principles. The second (The Resolution
of Reality) is about quantum computing borrowing structure from physics. This one is
about machine learning learning structure from data, and it is written by a portfolio
manager whose working problem, markets, is the case where only the third route has been
open.

INPUTS. The research brief above, and these notes: frontier-lab-landscape,
openai-models, anthropic-claude-models, google-deepmind-gemini, xai-grok,
chinese-frontier-labs, world-models, atlas-world-labs, reflexivity, structure-gradient,
analog-computation, quantum-simulation, rough-volatility.

SPINE. Each stage answered a limit hit by the previous one, and each answer changed what
"a model" is. Sections:
  I.    Introduction: the third route; why this essay separates durable argument from
        perishable facts (the notes carry the facts, with dates)
  II.   Prediction: scaling laws; two limits, usefulness and data, kept separate
  III.  Instruction: RLHF and Constitutional AI; the 1.3B-beats-175B result; the
        reliability limit (GPT-4o at 12% on AIME)
  IV.   Reasoning: test-time compute; o1 and DeepSeek-R1; two documented limits
        (collapse with complexity; unfaithful traces)
  V.    Agency: tools, computer use, MCP; time horizons as the measurement; three
        limits stated exactly (50% vs 80% horizon; the productivity RCT; benchmark rot)
  VI.   The frontier now: NOT one paradigm. Five concurrent moves: safeguard tiers,
        cost compression, open weights at scale, world models as a parallel track,
        continual learning outside the weights. Atlas is spatial, not an LLM successor.
  VII.  Learned structure and markets: the possibility that a population of learned
        agents becomes a substrate; the evidence at individual and aggregate level,
        each with what was shown and what was not
  VIII. Reflexivity: the ceiling. Soros, Lucas, Goodhart, performative prediction; the
        FSB systemic point; "the system reads the paper." End with the practical stance:
        learned market models are provisional and decay with adoption, and that is a
        property of the object, not of current technology.

VOICE. Direct, structured, practitioner. No em dashes. No hype, no superlatives. Hedge
claims about intentions; do not hedge data. Declarative headings. Use "not X, but Y" only
where it carries weight. Do not introduce metaphors; the essay's structure is the
repeated pattern "limit, then response," and that is enough.

CLAIMS TO GET RIGHT. Use only claims the brief marks verified. Keep the two scaling
limits separate. Do not quote the DeepSeek-R1 $294K figure as a total training cost.
State the METR 50%/80% distinction and METR's own caution. Treat the productivity RCT
as one study. Name the benchmark-rot finding with its date. Describe Atlas accurately
(multimodal autoregressive diffusion transformer, early access, no paper or weights).
In Section VII, for every study, say what it did not show.

LENGTH. 3,000 to 3,600 words plus numbered references with identifiers (arXiv, journal,
or lab post and date). Mark the essay as a draft in its header and say why.
```

## What the prompt cannot supply

The decision to end on a constraint rather than a tool, in deliberate contrast to the other two essays, and the sentence "the system reads the paper" are editorial choices. The prompt now records them.
