---
title: "World models: two meanings of one term"
summary: "The phrase 'world model' now covers two different research programs: a learned dynamics model an agent plans inside, and a generative model of visual or 3D space. This note separates them and explains why the distinction matters."
note_type: "concept"
status: "seed"
tags: ["ai", "world-models", "reinforcement-learning", "generative-models"]
related: ["atlas-world-labs", "google-deepmind-gemini", "frontier-lab-landscape", "reflexivity"]
last_reviewed: "2026-09-08"
confidence: "medium"
sources:
  - title: "World Models (Ha and Schmidhuber, 2018)"
    url: "https://arxiv.org/abs/1803.10122"
    accessed: "2026-09-08"
  - title: "Training Agents Inside of Scalable World Models (Dreamer 4)"
    url: "https://www.arxiv.org/pdf/2509.24527"
    accessed: "2026-09-08"
  - title: "A Path Towards Autonomous Machine Intelligence (LeCun, 2022)"
    url: "https://openreview.net/forum?id=BZ5a1r-kVsf"
    accessed: "2026-09-08"
  - title: "Genie 3: A new frontier for world models (Google DeepMind)"
    url: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/"
    accessed: "2026-09-08"
  - title: "Video generation models as world simulators (OpenAI, 2024)"
    url: "https://openai.com/index/video-generation-models-as-world-simulators/"
    accessed: "2026-09-08"
  - title: "OpenAI is scrapping the Sora app to chase bigger AI goals (Business Insider)"
    url: "https://www.businessinsider.com/openai-discontinues-sora-video-app-amid-robotics-shift-compute-limitations-2026-3"
    accessed: "2026-09-08"
  - title: "Atlas: A World Model for Spatial Intelligence (World Labs)"
    url: "https://www.worldlabs.ai/blog/atlas"
    accessed: "2026-09-08"
---

## The term does two jobs

"World model" is used for two things that share a name and little else.

The first is the reinforcement-learning sense: a learned model of environment dynamics that an agent uses to predict the consequences of its actions and to plan or train without touching the real environment. The second is the generative spatial sense: a model that produces images, video, or 3D scenes that stay consistent as a camera moves through them. Both predict what comes next; they differ in what the prediction is for.

## Sense A: the model an agent plans inside

Ha and Schmidhuber's 2018 paper set the template: a vision component compresses observations to a latent code, a memory component predicts the next latent given the action, and a small controller is trained entirely inside the learned model's "dream." The Dreamer line extended this to harder control problems. Dreamer 4 (Hafner et al., 2025) trains an agent inside a world model learned from Minecraft video and evaluates the model by having humans play inside it.

LeCun's 2022 position paper puts the same component at the center of autonomous intelligence, with a twist: the Joint Embedding Predictive Architecture (JEPA) predicts in abstract representation space and refuses to reconstruct pixels, on the view that pixel-level prediction wastes capacity on unpredictable detail. In this sense, a world model is judged by whether the agent using it acts better.

## Sense B: the model that renders a world

Genie 3 (Google DeepMind, 2025) generates interactive environments frame by frame from a text description and user actions, in real time. OpenAI's 2024 Sora report framed video generation as "world simulation." World Labs' [[atlas-world-labs|Atlas]] extends this to explicit 3D outputs (point clouds and Gaussian splats) with camera pose as a native input.

Here the model is judged by visual and geometric consistency: does the scene hold together when you turn around? Agents training inside such models is a hope, not the current evaluation.

## Why the distinction matters

The two senses fail differently. Dreamer 4's authors note that controllable video models "still struggle to learn the precise physics of object interactions and game mechanics," which limits their use for training agents. A model can look right and be useless for planning; a latent model can support planning while rendering nothing recognizable.

The distinction also predicts corporate behavior. OpenAI shut down the Sora consumer app in 2026 and, per Business Insider, redirected the team toward "world simulation research to advance robotics": a move from sense B toward sense A. World Labs is moving the other way, from rendering toward robot simulation.

## Markets are not physical space

A third case sits outside both senses. A "world model" of a market must handle [[reflexivity]]: participants observe the model's outputs and change their behavior, so the thing being modeled reacts to the model. Physical space does not. A room does not rearrange itself because Atlas predicted it. That is why a world model of a market is a different object from a world model of a kitchen, and why techniques built for one do not transfer cleanly.

## Open questions

- Will generative spatial models get good enough at contact physics to serve as training environments, closing the gap between the two senses?
- Does JEPA-style latent prediction scale to the diversity pixel-space models handle? No public results answer this yet.

## Review log

- 2026-09-08: created; sources checked on this date.
