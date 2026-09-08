---
title: "Chinese frontier labs: DeepSeek, Moonshot, Alibaba, and others"
summary: "As of September 2026, at least five Chinese labs ship open-weight models within a few months of the closed frontier. The shared pattern is sparse mixture-of-experts at trillion-parameter scale, aggressive long-context efficiency work, and permissive licenses. Cost claims need care."
note_type: "hub"
status: "seed"
tags: ["ai", "frontier-labs", "china", "open-weights", "mixture-of-experts"]
related: ["frontier-lab-landscape", "openai-models", "anthropic-claude-models", "google-deepmind-gemini"]
last_reviewed: "2026-09-08"
confidence: "medium"
sources:
  - title: "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence (arXiv)"
    url: "https://arxiv.org/html/2606.19348"
    accessed: "2026-09-08"
  - title: "DeepSeek-V4: a million-token context that agents can actually use (Hugging Face)"
    url: "https://huggingface.co/blog/deepseekv4"
    accessed: "2026-09-08"
  - title: "DeepSeek-V3 Technical Report (arXiv, 2024)"
    url: "https://arxiv.org/abs/2412.19437"
    accessed: "2026-09-08"
  - title: "MoonshotAI/Kimi-K3 (GitHub)"
    url: "https://github.com/MoonshotAI/Kimi-K3"
    accessed: "2026-09-08"
  - title: "kimi-k3 model card (NVIDIA NIM)"
    url: "https://build.nvidia.com/moonshotai/kimi-k3/modelcard"
    accessed: "2026-09-08"
  - title: "Qwen3.8-Flash-Next: A New Architecture, Towards Ultimate Cost-Efficiency (Alibaba Cloud)"
    url: "https://www.alibabacloud.com/blog/qwen-3-8-flash-next-a-new-architecture-towards-ultimate-cost-efficiency_603501"
    accessed: "2026-09-08"
  - title: "Qwen 4: Release Date, Leaks, and the Architecture Alibaba Already Shipped (CellCog)"
    url: "https://cellcog.ai/blog/qwen-4-release-date/"
    accessed: "2026-09-08"
  - title: "GLM-5.3-Flash: Frontier Intelligence, Flash Cost (Z.ai)"
    url: "https://z.ai/blog/glm-5.3-flash"
    accessed: "2026-09-08"
  - title: "GLM-5.3-Flash vs MiniMax-M3 (Artificial Analysis)"
    url: "https://artificialanalysis.ai/models/comparisons/glm-5-3-flash-vs-minimax-m3"
    accessed: "2026-09-08"
  - title: "China dropped 3 frontier coding models in one week (Towards AI)"
    url: "https://pub.towardsai.net/china-dropped-3-frontier-coding-models-in-one-week-and-not-one-published-a-real-benchmark-1776398ddbe9"
    accessed: "2026-09-08"
---

## The shared pattern

The labs below differ in ownership and scale, but their 2026 releases converge on one recipe: very sparse mixture-of-experts (MoE) with a small fraction of parameters active per token, architectural work to make 1M-token context cheap, low-precision training (FP4 or FP8), and open weights under MIT or similar licenses. The closed US labs publish none of these details. That asymmetry, not any single benchmark, is why these releases matter to anyone studying training methods.

| Lab | Model | Release | Total / active params | License | Source |
|---|---|---|---|---|---|
| DeepSeek | V4-Pro (preview) | 2026-04-24 | 1.6T / 49B | MIT | arXiv; Hugging Face |
| Moonshot AI | Kimi K3 | July 2026 | 2.8T / 104B | Kimi K3 License | GitHub |
| Alibaba | Qwen3.8-Flash-Next | 2026-08-26 | 125B (+51B n-gram table) / 6B | qwen-community-1.0 | Alibaba Cloud |
| Zhipu (Z.ai) | GLM-5.3-Flash | 2026-08-26 | 320B / 18B | MIT | Z.ai blog |
| MiniMax | M3 | June 2026 | 428B / 23B | MiniMax Community | Artificial Analysis |

## DeepSeek

The V4 paper is the most detailed. Both V4 models were pretrained on more than 32T tokens. The architectural claims are a hybrid attention scheme (Compressed Sparse Attention plus Heavily Compressed Attention) that cuts per-token inference FLOPs at 1M context to 27% of V3.2 and KV cache to 10%, "Manifold-Constrained Hyper-Connections" in place of standard residuals, the Muon optimizer, and FP4 quantization-aware training for expert weights. DeepSeek also reports validating its fused MoE kernel on Huawei Ascend NPUs as well as NVIDIA GPUs.

On cost: the widely cited "$5.6 million" figure comes from the December 2024 V3 report, which counted 2.788M H800 GPU-hours for the final pretraining run and excluded research, ablations, and data. Several 2026 write-ups attach the same number to V4. No dollar figure appears in the V4 paper sections I reviewed, so treat any V4 cost claim as unsourced. The paper itself says V4-Pro trails the closed frontier by roughly three to six months on reasoning.

## Moonshot AI (Kimi)

Kimi K3 is the largest open-weight model by disclosed parameter count: 2.8T total, 104B active, 896 routed experts with 16 selected per token plus two shared. It uses Kimi Delta Attention (a linear-attention variant) in 69 of 93 layers and gated latent attention in the rest, a 401M-parameter vision encoder, and MXFP4 quantization-aware training from the SFT stage onward. Training data composition is undisclosed, so "open" here means weights and code, not a reproducible pipeline.

## Alibaba (Qwen)

Alibaba runs a two-track strategy. Secondary reporting says the hosted flagship Qwen3.8-Max shipped August 3 and its base was opened as Qwen3.8-2.4T-A95B on August 12; I could not locate a primary post for those two. The primary source I did verify is Qwen3.8-Flash-Next, which Alibaba frames as an early preview of the Qwen4 architecture: Gated DeltaNet plus Qwen Sparse Attention, a gated residual stream, a 51B-parameter n-gram embedding table that sits outside per-token compute, and the Muon optimizer, with 6B active parameters.

## Zhipu (Z.ai) and MiniMax

GLM-5.3-Flash is a 320B / 18B-active multimodal MoE under MIT. Z.ai's distinctive claim is that it served the model at scale on Chinese AI chips at per-token cost comparable to NVIDIA hardware. The larger GLM-5.3 is API-only. MiniMax M3 (428B / 23B active) uses its own sparse-attention scheme and 1M context; coverage notes all three June releases launched with vendor-run numbers only.

## Open questions

- Muon appears in DeepSeek, Qwen, and (per Kimi's earlier releases) Moonshot. Whether it is a durable advantage or a fashion is not yet clear.
- Independent replication of Chinese-chip serving efficiency does not exist.

## Review log

- 2026-09-08: created; sources checked on this date.
