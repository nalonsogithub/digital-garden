---
title: "Brownian Motion and Itô Calculus"
summary: "A path continuous everywhere and differentiable nowhere broke ordinary calculus. Itô's lemma repaired it with one extra term, tuned exactly to Brownian roughness."
note_type: "concept"
status: "seed"
tags: ["mathematics", "stochastic calculus", "finance"]
related: ["hurst-exponent-and-fractal-dimension", "rough-paths", "taylor-series"]
---

## The object

Robert Brown watched pollen jitter in water in 1827. Einstein explained the jitter in 1905 as the statistical signature of molecular collisions, an argument quantitative enough to settle the existence of atoms. The mathematical model is the Wiener process W(t): continuous, with independent Gaussian increments whose variance grows linearly in time.

![Magnifying a smooth curve versus a Brownian path](/images/from-smooth-to-jagged/figure-3-stochastic-calculus.png)

## Why calculus breaks

Zoom into a smooth curve and it flattens into a line; that line's slope is the derivative. Zoom into a Brownian path and it stays exactly as jagged at every scale. There is no line and no derivative, so dx/dt has no meaning and ordinary differential equations cannot be written.

## Itô's repair

Itô (1944) added a third infinitesimal, dW, alongside dx and dt, and worked out its rules. The key one is that (dW)² behaves like dt, not like dt². Squared random steps do not vanish. The result is Itô's lemma, the stochastic chain rule:

df = ( ∂f/∂t + μ ∂f/∂x + ½σ² ∂²f/∂x² ) dt + σ (∂f/∂x) dW

The ½σ² term exists only because randomness accumulates at the square-root rate. It is not an adjustment bolted onto the model; it is what the calculus of jagged paths looks like.

## Finance

Bachelier wrote down the random-walk model of prices in his 1900 thesis, five years before Einstein's paper. It received the grade *honorable* rather than *très honorable* and was largely ignored until Savage and Samuelson revived it in the 1950s. Itô's calculus applied to Bachelier's idea yields Black-Scholes (1973), which is itself a stochastic differential equation.

## Where Itô's calculus fails

The one extra term is tuned to a path whose squared increment scales like dt, which means Hurst exponent H = 0.5. For any other H, (dW_H)² scales like dt^2H: the term vanishes for H > 0.5 and diverges for H < 0.5, and the path is no longer a semimartingale, so the Itô integral is not defined. See [[hurst-exponent-and-fractal-dimension]] for the measurement and [[rough-paths]] for the repair.

## Review log

- 2026-09-08: seeded from Section IV of From Smooth to Jagged.
