---
title: "Atlas: World Labs' spatial world model"
summary: "World Labs announced Atlas on 2026-09-01 as a single multimodal model for camera-controlled video, 3D reconstruction, and simulation. It is in early access only; no paper, weights, or pricing have been published."
note_type: "model"
status: "seed"
tags: ["ai", "world-models", "spatial-intelligence", "3d"]
related: ["world-models", "frontier-lab-landscape", "google-deepmind-gemini"]
last_reviewed: "2026-09-08"
confidence: "high"
sources:
  - title: "Atlas: A World Model for Spatial Intelligence (World Labs blog)"
    url: "https://www.worldlabs.ai/blog/atlas"
    accessed: "2026-09-08"
  - title: "World Labs debuts Atlas, an omni world model, in early access (AI Weekly)"
    url: "https://aiweekly.co/alerts/world-labs-debuts-atlas-an-omni-world-model-in-early-access"
    accessed: "2026-09-08"
  - title: "World Labs introduces Atlas world model (DataNorth)"
    url: "https://datanorth.ai/news/world-labs-introduces-atlas-world-model"
    accessed: "2026-09-08"
  - title: "World Labs' Atlas Model and Sparse-Photo Reconstruction (IBTimes)"
    url: "https://hk.ibtimes.com/world-labs-atlas-3d-reconstruction-robotics-training-1812568"
    accessed: "2026-09-08"
---

## What Atlas is

World Labs announced Atlas on September 1, 2026 as its next-generation world model. The company describes it as an "omni model" pretrained from scratch to operate on text, images, video, and 3D, with all inputs combined into a shared spatial context. This is the generative spatial sense of "world model" described in [[world-models]], not the RL planning sense.

The announcement completes a sequence: Marble (November 2025), a World API (January 2026), the SceniX acquisition (July 2026), and now Atlas. World Labs says Atlas will power future versions of Marble.

## Documented capabilities

The blog post lists four task families. Each claim below is World Labs' own.

| Capability | What the post claims | Source |
|---|---|---|
| Camera-controlled generation | Video from one or more images with explicit camera poses as input; up to 1 minute at 1440p | World Labs blog |
| Spatial reconstruction | Novel views and explicit 3D (point clouds, Gaussian splats) from one to over a hundred images | World Labs blog |
| Space-time simulation | Reframing multi-camera video; real-to-sim for robot navigation and manipulation | World Labs blog |
| Image generation | Text-to-image and 360 panoramas as a secondary capability | World Labs blog |

The distinctive design choice is that camera geometry is a native input type rather than something inferred from a text prompt. Each image or depth map is conditioned on an explicit camera pose.

## Architecture

World Labs describes Atlas as a multimodal autoregressive diffusion transformer. It generates sequence elements one at a time (autoregressive), each element produced by rectified-flow denoising (diffusion), with a transformer backbone. Videos are represented as sequences of images. The company says this hybrid lets it borrow serving techniques from LLMs (KV caching, disaggregated serving) and from video models (distillation, classifier-free guidance).

The post also reports that performance improved across a series of models of increasing compute, and states the company expects that trend to continue. That is a scaling claim, not a published scaling law.

## What is not yet established

- **No technical report or paper.** The blog post is the only primary source. It gives no parameter count, training compute, dataset composition, or context length.
- **No independent benchmarks.** The reported wins over specialized 3D reconstruction models and over video models on camera following are company-run. Human-rater comparisons used text prompts for competitor camera control, which the post itself flags as a possible disadvantage for those models. Independent write-ups note the lack of third-party validation.
- **No weights, pricing, latency figures, or partner names.** Access is by request to "select partners." Secondary coverage confirms no public release date.
- **Robotics utility is asserted, not demonstrated at scale.** The real-to-sim examples are demos.

## Why it matters

Atlas collapses two workflows that have been separate: generative video (which looks right but has no geometry) and 3D reconstruction (which has geometry but needs dense capture). If the sparse-view reconstruction claims hold up independently, the practical implication is that phone footage becomes a usable input for simulation. That is the claim to watch, more than the video quality.

## Open questions

- Will a technical report follow, and will it include held-out benchmarks run by third parties?
- What is the compute cost per generated minute? The post says nothing about inference cost.
- How does Atlas compare to Google's Genie line and Gemini Omni on the same tasks? No shared evaluation exists yet.

## Review log

- 2026-09-08: created; sources checked on this date.
