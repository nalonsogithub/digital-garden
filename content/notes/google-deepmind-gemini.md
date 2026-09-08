---
title: "Google DeepMind and the Gemini family"
summary: "Google DeepMind's newest release is Gemini 3.8 Flash (2026-09-02); its top reasoning model is still Gemini 3.1 Pro from February 2026, with Gemini 3.5 Pro unreleased and Gemini 4 in pretraining. Distinctive features are native multimodality, a 1M-token context as standard, and a vertically owned TPU stack."
note_type: "lab"
status: "seed"
tags: ["ai", "frontier-labs", "google-deepmind", "gemini"]
related: ["frontier-lab-landscape", "openai-models", "anthropic-claude-models", "world-models"]
last_reviewed: "2026-09-08"
confidence: "medium"
sources:
  - title: "Introducing Gemini 3.8 Flash and 3.8 Flash Cyber (Google)"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
    accessed: "2026-09-08"
  - title: "Gemini 3.8 Flash Model Card (Google DeepMind)"
    url: "https://deepmind.google/models/model-cards/gemini-3-8-flash/"
    accessed: "2026-09-08"
  - title: "Gemini 3.8 Flash (Google Cloud documentation)"
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash"
    accessed: "2026-09-08"
  - title: "Gemini 3.1 Pro Model Card (Google DeepMind)"
    url: "https://deepmind.google/models/model-cards/gemini-3-1-pro/"
    accessed: "2026-09-08"
  - title: "Gemini 3.1 Pro: A smarter model for your most complex tasks (Google)"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/"
    accessed: "2026-09-08"
  - title: "A new era of intelligence with Gemini 3 (Google, 2025)"
    url: "https://blog.google/products-and-platforms/products/gemini/gemini-3/"
    accessed: "2026-09-08"
  - title: "Gemini: A Family of Highly Capable Multimodal Models (arXiv, 2023)"
    url: "https://arxiv.org/abs/2312.11805"
    accessed: "2026-09-08"
  - title: "What Google has teased about Gemini 4 (9to5Google)"
    url: "https://9to5google.com/2026/07/26/google-gemini-4-teases/"
    accessed: "2026-09-08"
  - title: "Google DeepMind company profile (Venture Atlas)"
    url: "https://www.ventureatlas.org/company/google-deepmind"
    accessed: "2026-09-08"
---

## What the lab is

Google DeepMind is the only frontier lab that designs its own accelerators, runs its own cloud, and owns distribution surfaces (Search, Android, Workspace, YouTube) at consumer scale. Its models are closed-weight; the smaller Gemma line is open but is not covered here.

## Current flagship models

| Model | Release | Notable | Source |
|---|---|---|---|
| Gemini 3.8 Flash | 2026-09-02 (GA) | Newest model; 1M context, 64K output; thinking levels low/medium/high; $0.75/$3.75 intro pricing to end-2026 | Google blog; model card; Cloud docs |
| Gemini 3.8 Flash Cyber | 2026-09-02 | Cyber-tuned variant, gated via the Fairwind Program | Google blog |
| Gemini 3.1 Pro | 2026-02-19 (preview) | Top reasoning model; Deep Think mode; 77.1% ARC-AGI-2 | Model card; Google blog |
| Gemini 3 Pro | 2025-11-18 | Start of the Gemini 3 series | Google blog |

The odd shape of this table is the story. Google is shipping Flash-tier models roughly monthly (3.8 is the third Flash in six weeks) while the Pro tier has not moved since February. Secondary reporting says Gemini 3.5 Pro missed a mid-2026 target and remains undated; I could not find a Google statement on it. Sundar Pichai said on the Q2 2026 earnings call that Gemini 4 is in "our most ambitious pre-training run yet" and needs "a larger base model to compete at the frontier."

## How the training approach differs

**Multimodal from pretraining.** Since the 2023 technical report, Gemini has been described as trained jointly on text, images, audio, and video rather than bolting encoders onto a text model. Gemini 3 Pro's launch materials continue this framing and lead with multimodal benchmarks (MMMU-Pro, Video-MMMU). Flash models accept text, image, audio, and video input and emit text.

**Long context as default.** Every current Gemini model ships with a 1,048,576-token context window. Competitors offer 1M on flagships; Google offers it on the cheap tier.

**Thinking as a dial.** The API replaced integer thinking budgets with a `thinking_level` enum (low, medium, high). Deep Think is a separate, heavier mode on Pro. The 3.1 Pro model card reports that, accounting for inference cost, Deep Think did not add cyber capability over the base model, an unusual admission that more test-time compute does not always buy more.

**TPU stack.** The 2023 report states Gemini was trained on TPUv4 and TPUv5e. Pichai said in July 2026 that internal frontier training is the first priority for TPU allocation, ahead of external customers. Ironwood is the current seventh-generation TPU. Which TPU generation trained Gemini 3.x is not disclosed in the model cards.

**Iterative releases.** The 3.8 Flash card says the model "is based on Gemini 3.7 Flash" and that Google skipped a full Frontier Safety Framework evaluation because capabilities did not materially change. The Flash line is post-training iteration on a fixed base, which explains the cadence.

## Adjacent work

Google's world-model research (Genie 3, Gemini Omni) is covered in [[world-models]].

## Open questions

- Is the Pro delay a capability problem or a compute-allocation choice? Reporting suggests reliability issues; Google has not said.
- Will Gemini 4 arrive before year-end? No date has been given.

## Review log

- 2026-09-08: created; sources checked on this date.
