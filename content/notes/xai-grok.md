---
title: "xAI (SpaceXAI) and the Grok models"
summary: "xAI, now a SpaceX unit branded SpaceXAI, ships Grok 4.6 (released 2026-08-12) as its flagship. Its documented differences are a very large owned GPU cluster, heavy use of agentic RL and model-generated SFT data, and privileged access to Cursor, X, and SpaceX data. Several widely repeated claims are founder statements, not documentation."
note_type: "lab"
status: "seed"
tags: ["ai", "frontier-labs", "xai", "grok"]
related: ["frontier-lab-landscape", "openai-models", "anthropic-claude-models"]
last_reviewed: "2026-09-08"
confidence: "medium"
sources:
  - title: "Introducing Grok 4.6 (SpaceXAI)"
    url: "https://x.ai/news/grok-4-6"
    accessed: "2026-09-08"
  - title: "Model Card: Grok 4.6 (SpaceXAI, revision 2026-08-17)"
    url: "https://media.x.ai/v1/website/card-4p6-4cd2dc57.pdf"
    accessed: "2026-09-08"
  - title: "Introducing Grok 4.5 (SpaceXAI)"
    url: "https://x.ai/news/grok-4-5"
    accessed: "2026-09-08"
  - title: "Elon Musk's SpaceX acquires xAI (CNN Business)"
    url: "https://www.cnn.com/2026/02/02/tech/spacex-acquires-xai-elon-musk"
    accessed: "2026-09-08"
  - title: "SpaceX locks in $60 billion Cursor deal (Reuters)"
    url: "https://www.reuters.com/legal/transactional/spacex-buy-anysphere-60-billion-2026-06-16/"
    accessed: "2026-09-08"
  - title: "SpaceX 8-K on completion of Cursor merger, 2026-08-14"
    url: "https://app.edgar.tools/filing/1181412/0001628280-26-056945"
    accessed: "2026-09-08"
  - title: "Colossus (data center) (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Colossus_(data_center)"
    accessed: "2026-09-08"
  - title: "SpaceXAI: A Vertically Integrated AI Concentration-Risk Case Study (Cloud Security Alliance)"
    url: "https://labs.cloudsecurityalliance.org/wp-content/uploads/2026/07/CSA_research_note_spacex_xai_ai_concentration_risk_20260710-csa-styled.pdf"
    accessed: "2026-09-08"
  - title: "xAI by Elon Musk: Grok, Funding, and the xAI vs OpenAI Story (Turing Post)"
    url: "https://www.turingpost.com/p/xai"
    accessed: "2026-09-08"
  - title: "Grok 4.7 Release Date: What Elon Musk Announced and What Is Still Unconfirmed (atoms.dev)"
    url: "https://atoms.dev/blog/grok-4-7-release-date"
    accessed: "2026-09-08"
---

## What the lab is

xAI was founded in 2023, acquired X in March 2025, and was itself acquired by SpaceX on February 2, 2026. Its products now carry the SpaceXAI brand. SpaceX then bought Anysphere (Cursor) for $60 billion in stock; the merger closed August 14, 2026 per SpaceX's 8-K. One company now owns a frontier lab, a social network, a widely used coding tool, and a rocket manufacturer.

## Current flagship models

| Model | Release | Notable | Source |
|---|---|---|---|
| Grok 4.6 | 2026-08-12 | 1.5T-scale; 500K context; $2/$6 per million tokens; effort levels low to xhigh | Grok 4.6 post and model card |
| Grok 4.5 | July 2026 | First model "trained alongside Cursor"; same 1.5T foundation | Grok 4.5 post |
| Grok 4.7 | Announced for ~2026-09-12 | Not released; see below | atoms.dev |

Sources disagree on the Grok 4.5 date: the x.ai post is dated July 16, 2026, while several secondary write-ups say July 8. I have left it at "July 2026."

## How the training approach differs

**Compute the lab owns.** Grok is trained on the Colossus cluster in Memphis. Grok 4.5 was trained "across tens of thousands of NVIDIA GB300 GPUs" per xAI. Site-wide GPU counts conflict: Wikipedia puts Colossus 2 at 300,000 to 350,000+ GPUs and the combined site near 1 GW by mid-2026; the CSA note reports 555,000; Turing Post repeats an xAI claim of over one million H100-equivalents at end-2025. None is a primary figure with a stated date. What is documented is that Anthropic leased Colossus 1 capacity in May 2026 and Google agreed to rent roughly 110,000 GPUs from SpaceX, so a competitor lab is now also a compute landlord.

**Pretraining and supplemental training.** The Grok 4.6 model card says the model was pretrained on public, internally generated, and licensed data, with a cutoff of January 2026. It then received a "supplemental training" stage, longer than for 4.5, mixing model-generated reasoning data, engineering corpora, and an improved optimizer, with data as late as June 2026. Few labs describe a mid-training stage this explicitly.

**Model-generated SFT.** Grok 4.5 regenerated the SFT trajectories for 4.6 across reasoning efforts, agent harnesses, and domains, with model-based checks filtering bad traces. The SFT set is documented as largely synthetic.

**Agentic RL.** Grok 4.5's post describes RL over "hundreds of thousands of tasks, centered on multi-step software engineering," graded automatically or by models, with asynchronous rollouts that run for hours while training continues. Grok 4.6 adds environments for kernel optimization, web development, and CAD.

**Proprietary data.** The model card confirms supplemental training on "anonymized Cursor workflow data." On X: xAI's Grok-1 documentation said the model was not pretrained on X posts but had real-time access to them, and the current API exposes an X search tool. The current card does not say whether X posts are in the pretraining mix. The CSA note reports Starlink changed its privacy policy in January 2026 to allow training on subscriber data; I have not verified that against the policy itself.

## Grok 4.7: founder claims, not documentation

Musk has said Grok 4.7 will have 2.1 trillion parameters, be trained on SpaceX engineering data, and target September 12. There is no model card, API ID, price, or benchmark table. Treat all of it as speculative until xAI publishes.

## Open questions

- Is the 1.5T figure total or active parameters? The model card says "1.5T-scale" without specifying.
- What share of pretraining data is X-derived? Undocumented.

## Review log

- 2026-09-08: created; sources checked on this date.
