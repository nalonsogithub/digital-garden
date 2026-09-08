---
title: "The frontier lab landscape, September 2026"
summary: "A map of who is shipping frontier-class models as of 2026-09-08: four US closed-weight labs, Meta re-entering with a closed model, and a group of Chinese labs shipping open weights a few months behind. Links out to one note per lab."
note_type: "hub"
status: "seed"
tags: ["ai", "frontier-labs", "hub"]
related: ["anthropic-claude-models", "openai-models", "google-deepmind-gemini", "xai-grok", "chinese-frontier-labs", "world-models", "atlas-world-labs"]
last_reviewed: "2026-09-08"
confidence: "medium"
sources:
  - title: "Introducing Claude Fable 5.1 and Claude Mythos 5.1 (Anthropic)"
    url: "https://www.anthropic.com/claude-fable-and-mythos-5-1"
    accessed: "2026-09-08"
  - title: "GPT-6 Astra: A new generation of intelligence (OpenAI)"
    url: "https://openai.com/index/gpt-6-astra/"
    accessed: "2026-09-08"
  - title: "Introducing Gemini 3.8 Flash and 3.8 Flash Cyber (Google)"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
    accessed: "2026-09-08"
  - title: "Introducing Grok 4.6 (SpaceXAI)"
    url: "https://x.ai/news/grok-4-6"
    accessed: "2026-09-08"
  - title: "Muse Spark 1.3: Meta reaches the frontier (Artificial Analysis)"
    url: "https://artificialanalysis.ai/articles/muse-spark-1-3"
    accessed: "2026-09-08"
  - title: "Muse Spark 1.3: Meta catches up to top models (heise online)"
    url: "https://www.heise.de/en/news/Muse-Spark-1-3-Meta-catches-up-to-top-models-11440367.html"
    accessed: "2026-09-08"
  - title: "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence (arXiv)"
    url: "https://arxiv.org/html/2606.19348"
    accessed: "2026-09-08"
  - title: "Atlas: A World Model for Spatial Intelligence (World Labs)"
    url: "https://www.worldlabs.ai/blog/atlas"
    accessed: "2026-09-08"
---

## The week that reset the table

The first week of September 2026 saw four flagship-class releases in five days: Claude Fable 5.1 (September 1), Gemini 3.8 Flash and Meta's Muse Spark 1.3 (September 2), and GPT-6 Astra (September 3). World Labs announced Atlas the same week. Any ranking written before that week is stale, and any written this week will be stale soon. This hub records who is at the frontier and what each lab's distinguishing bet is, not who is ahead by two benchmark points.

## The labs

| Lab | Flagship (date) | Weights | Distinguishing bet | Note |
|---|---|---|---|---|
| Anthropic | Claude Fable 5.1 / Mythos 5.1 (2026-09-01) | Closed | One model, two safeguard tiers; constitution-driven post-training; interpretability in the release loop | [[anthropic-claude-models]] |
| OpenAI | GPT-6 Astra (2026-09-03) | Closed | Computer use and agent harness; first self-rated Critical cyber model | [[openai-models]] |
| Google DeepMind | Gemini 3.8 Flash (2026-09-02); 3.1 Pro (Feb 2026) | Closed | Native multimodality; 1M context everywhere; owned TPU stack | [[google-deepmind-gemini]] |
| xAI / SpaceXAI | Grok 4.6 (2026-08-12) | Closed | Owned gigawatt-scale cluster; Cursor, X, and SpaceX data | [[xai-grok]] |
| Meta Superintelligence Labs | Muse Spark 1.3 (2026-09-02) | Closed (open release promised, undated) | Cost per task at frontier-adjacent quality | this note |
| DeepSeek, Moonshot, Alibaba, Zhipu, MiniMax | DeepSeek V4, Kimi K3, Qwen3.8, GLM-5.3, MiniMax M3 | Open | Sparse MoE, long-context efficiency, published architecture details | [[chinese-frontier-labs]] |
| World Labs | Atlas (2026-09-01, early access) | Closed | Spatial world models, not language | [[atlas-world-labs]] |

## One paragraph per lab

**Anthropic** ships the model that independent aggregators currently rank highest (Artificial Analysis puts Fable 5.1 at 66 on its index), and it does so with a release pattern no one else uses: identical weights sold as a general product and as a gated product for vetted cyber and life-science users. See [[anthropic-claude-models]].

**OpenAI** answered two days later with GPT-6 Astra, positioned less as a chat model than as a computer-use agent. Its own safety overview rates it Critical for cybersecurity under the Preparedness Framework, the first time OpenAI has applied that label. See [[openai-models]].

**Google DeepMind** is in an unusual position: shipping the cheapest competitive models on a monthly cadence while its Pro tier has not moved since February and Gemini 4 is still in pretraining. Its structural advantages (TPUs, distribution) have not yet converted into the top benchmark position. See [[google-deepmind-gemini]].

**xAI**, now inside SpaceX, competes on owned compute and owned data. Its documentation is more specific than most about the mid-training and agentic RL stages. Several headline claims about the next model are founder statements without a model card. See [[xai-grok]].

**Meta** has moved from open Llama to closed Muse Spark. Artificial Analysis scores the available xhigh variant at 61, tied with GPT-5.6 Sol and Grok 4.6, at the lowest cost per task of any model at that level. A max variant is in limited preview. Meta says open weights are coming but has given no version, date, or license; treat that as intent, not a release.

**Chinese labs** publish what the US labs withhold: parameter counts, active-parameter counts, token counts, optimizer choices, attention designs. DeepSeek's own paper places V4-Pro three to six months behind the closed frontier. That gap, and the open weights, define the segment. See [[chinese-frontier-labs]].

**World Labs** is on this map because "frontier" is no longer only about language. Atlas is a different kind of model with a different evaluation problem, discussed in [[world-models]].

## What this map does not settle

- Benchmarks are mostly vendor-run. Cross-lab numbers in launch posts use different harnesses and effort settings.
- Parameter counts for every closed model are undisclosed; any figure in circulation is an estimate.
- Access tiers now vary by domain (cyber, biology), so "available" needs a qualifier.

## Review log

- 2026-09-08: created; sources checked on this date.
