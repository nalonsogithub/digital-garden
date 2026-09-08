---
title: "OpenAI and the GPT lineage"
summary: "OpenAI's current flagship is GPT-6 Astra (released 2026-09-03), the first model it has rated Critical for cybersecurity. The o-series reasoning line has been folded into the GPT numbering, and the product emphasis has shifted to computer use and the Codex agent harness."
note_type: "lab"
status: "seed"
tags: ["ai", "frontier-labs", "openai", "reasoning-models"]
related: ["frontier-lab-landscape", "anthropic-claude-models", "google-deepmind-gemini", "xai-grok"]
last_reviewed: "2026-09-08"
confidence: "medium"
sources:
  - title: "GPT-6 Astra: A new generation of intelligence (OpenAI)"
    url: "https://openai.com/index/gpt-6-astra/"
    accessed: "2026-09-08"
  - title: "Safety overview: GPT-6 Astra (OpenAI)"
    url: "https://openai.com/index/safety-overview-gpt-6-astra/"
    accessed: "2026-09-08"
  - title: "ChatGPT Release Notes (OpenAI Help Center)"
    url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
    accessed: "2026-09-08"
  - title: "Introducing GPT-5 (OpenAI, 2025)"
    url: "https://openai.com/index/introducing-gpt-5/"
    accessed: "2026-09-08"
  - title: "Introducing GPT-5 for developers (OpenAI, 2025)"
    url: "https://openai.com/index/introducing-gpt-5-for-developers/"
    accessed: "2026-09-08"
  - title: "Learning to reason with LLMs (OpenAI, 2024)"
    url: "https://openai.com/index/learning-to-reason-with-llms/"
    accessed: "2026-09-08"
  - title: "Training language models to follow instructions with human feedback (Ouyang et al., 2022)"
    url: "https://arxiv.org/abs/2203.02155"
    accessed: "2026-09-08"
  - title: "OpenAI Retires DALL-E GPT, o3 (Shattered)"
    url: "https://shattered.io/openai-dalle-gpt-o3-retirement-2026/"
    accessed: "2026-09-08"
---

## What the lab is

OpenAI is a closed-weights lab that sells through ChatGPT, its own API, Microsoft Azure, and AWS Bedrock. Its models are the reference point most competitors benchmark against, and its 2022 InstructGPT paper is the origin of the RLHF recipe (supervised fine-tuning, a human-preference reward model, then PPO) that the industry adopted.

## Current flagship models

| Model | Release | Notable | Source |
|---|---|---|---|
| GPT-6 Astra | 2026-09-03 | Flagship; first model rated Critical for cyber under the Preparedness Framework; $10/$50 per million tokens | OpenAI announcement; safety overview |
| GPT-6 Astra Pro | 2026-09-03 | Higher-compute variant for Pro, Business, Enterprise | OpenAI announcement |
| GPT-5.6 Sol | 2026 | Prior frontier model in API, Codex, and ChatGPT | Help Center; Astra announcement |
| GPT-5.6 Luna | 2026 | Default for Free and Go users from August 2026 | Help Center |

Astra rolled out first to a limited set of organizations; enterprise access is off by default. OpenAI reports 64.6% on Terminal-Bench Science and 57.9% on Terminal-Bench 4.0, both company-run. It also reports that Astra, tested without production safeguards, achieved code execution in hardened browsers using previously unknown vulnerabilities.

## How the training approach differs

**RLHF origin.** The 2022 recipe remains the base of post-training, but OpenAI's public emphasis has moved to RL on verifiable and agentic tasks.

**Reasoning as a separate line, then merged.** The o1 announcement (September 2024) described RL that teaches the model to produce a long private chain of thought before answering, with accuracy improving in both train-time and test-time compute. GPT-5 (August 2025) folded this into a single system: a fast model, a reasoning model, and a router that decides which to use, with a `reasoning_effort` parameter (minimal to high) in the API. GPT-5 Pro used parallel test-time compute for the hardest tasks. OpenAI said at the time it planned to integrate these into one model. Secondary trackers report o3 was removed from ChatGPT on August 26, 2026; OpenAI has not published a retirement statement I could find, so treat the date as reported rather than confirmed.

**Agents and computer use.** Astra is positioned primarily as a computer-use and professional-work model: form filling, CRM updates, spreadsheets, PCB layout in KiCad. The Codex harness gained a mechanism to keep searchable notes across context windows instead of compacting to a summary. OpenAI also runs production misalignment monitoring for Astra-class models, a classifier system that inspects reasoning and actions and can halt tasks.

**What is not disclosed.** Parameter counts, pretraining token counts, and compute are not published. OpenAI states Astra "brings together years of research and big bets across pre-training, reinforcement learning, and alignment" and nothing more specific.

## Open questions

- OpenAI reports Astra's written reasoning is harder to monitor than Sol's when the model is asked to evade monitoring. How that interacts with the Critical cyber rating is an open policy question.
- The safety overview references a "Hugging Face incident" as the reason for new scope-boundary evaluations. I have not verified what happened; omitted.
- Whether the "Pro" variants still use parallel sampling or a different test-time method is not stated for Astra.

## Review log

- 2026-09-08: created; sources checked on this date.
