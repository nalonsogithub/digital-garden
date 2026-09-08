---
title: "Hurst Exponent and Fractal Dimension"
summary: "Two measurements of roughness that are one measurement: for a self-affine path, D = 2 − H. A random walk has H = 0.5 and D = 1.5; anything else is a path of another roughness."
note_type: "concept"
status: "seed"
tags: ["mathematics", "fractals", "finance"]
related: ["brownian-motion-and-ito-calculus", "mandelbrot-set", "rough-volatility", "rough-paths"]
---

## Fractal dimension

Halve your ruler and the measured length of a smooth line doubles; the area of a filled region quadruples. Measure the coast of Britain with an ever-shorter ruler and its length grows by roughly 2^1.25. The coastline is a 1.25-dimensional object: too wrinkled to be a line, too empty to fill a plane. Mandelbrot's 1967 paper made this measurable rather than metaphorical. The surface of the lungs runs the same trick from the other side, folding a tennis court of area into a chest, with a dimension approaching 3.

## Hurst exponent

Harold Hurst studied Nile flood records in the 1950s and found that the range of cumulative deviations grew like n^H with H ≈ 0.7 rather than the n^0.5 a random process would give. H measures persistence:

- H = 0.5: increments independent; the random walk.
- H > 0.5: persistent; trends continue.
- H < 0.5: anti-persistent; reversals dominate.

## The identity

For a self-affine path (one whose statistics are the same under rescaling), fractal dimension and Hurst exponent are linked by D = 2 − H. The pure random walk's H of 0.5 is its dimension of 1.5. This is why Mandelbrot could move between coastlines and cotton prices with the same tools: both are questions about roughness.

![Simulated price paths at three Hurst exponents](/images/from-smooth-to-jagged/figure-5-hurst-exponent.png)

## Markets

Bachelier, Black-Scholes, and most of the standard toolkit assume H = 0.5 and thin tails. Mandelbrot's claim was that real price series live at some other roughness: volatility clusters, and the pattern is self-similar across time scales. The claim was eventually measured for volatility itself, with H near 0.1. See [[rough-volatility]]. The consequence for the calculus is in [[rough-paths]].

## Review log

- 2026-09-08: seeded from Sections V and VI of From Smooth to Jagged.
