---
title: "Rough Volatility"
summary: "Gatheral, Jaisson, and Rosenbaum (2018) measured the Hurst exponent of realized volatility across many markets and found values near 0.1. Volatility is far rougher than a Brownian path, and the standard models are the wrong calculus for it."
note_type: "concept"
status: "seed"
tags: ["finance", "mathematics", "volatility"]
related: ["hurst-exponent-and-fractal-dimension", "rough-paths", "brownian-motion-and-ito-calculus"]
last_reviewed: "2026-09-08"
confidence: "high"
---

## The finding

Mandelbrot argued from the 1960s that price series have a roughness the random-walk toolkit does not capture. The claim was eventually tested on volatility rather than prices. Gatheral, Jaisson, and Rosenbaum's "Volatility is rough" (Quantitative Finance, 2018) estimated the Hurst exponent of log realized volatility for a range of equity indices and found H of roughly 0.1, consistent across assets and time periods. A Brownian path has H = 0.5; volatility is much rougher.

## Why it matters for models

- Classical stochastic-volatility models (Heston and relatives) drive volatility with a Brownian motion and so assume H = 0.5. They struggle to fit the steep short-maturity skew observed in option markets.
- Rough volatility models (rough Bergomi, rough Heston) replace that driver with fractional Brownian motion at H ≈ 0.1 and fit the term structure of implied volatility with few parameters.
- At H ≈ 0.1 the driving path is not a semimartingale, so the mathematics needed is that of [[rough-paths]], not Itô.

## Why it belongs in the essay

It is the measured confirmation of the intuition Mandelbrot gave the author: markets are measurable, but not with integer tools. See [[hurst-exponent-and-fractal-dimension]] for the roughness measure and [[from-smooth-to-jagged]] for the argument.

## What this note does not yet cover

- The microstructural explanation (Hawkes processes, order-flow clustering) for why volatility should be rough.
- Estimation pitfalls: H estimates depend on the realized-volatility proxy and sampling frequency.
- Practical adoption in trading desks versus academic literature.

## Sources

- Gatheral, J., Jaisson, T., & Rosenbaum, M. (2018). "Volatility is rough." Quantitative Finance, 18(6), 933-949.

## Review log

- 2026-09-08: seeded.
