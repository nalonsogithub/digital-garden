---
title: "Rough Path Theory"
summary: "Lyons (1998): a rough path alone does not determine the integrals along it, so enrich the path with its iterated integrals. Once you do, differential equations driven by paths of any roughness become well defined, with no probability required."
note_type: "concept"
status: "seed"
tags: ["mathematics", "stochastic calculus", "machine learning"]
related: ["brownian-motion-and-ito-calculus", "hurst-exponent-and-fractal-dimension", "rough-volatility", "taylor-series"]
---

## The problem it solves

[[brownian-motion-and-ito-calculus|Itô's calculus]] works for Brownian motion because (dW)² scales like dt and because Brownian motion is a semimartingale, which lets the integral be defined through probability. For a path with Hurst exponent H ≠ 0.5, both props fall away:

- H > 0.5: (dW_H)² scales like dt^2H with 2H > 1, so the correction term vanishes. Young (1936) showed such paths can be integrated almost classically.
- H < 0.5: the squared increment diverges relative to dt, and the path is not a semimartingale. Neither Young nor Itô applies. The path is too rough for one and the wrong kind of random for the other.

Rough volatility, with H near 0.1, is squarely in the second case. See [[rough-volatility]].

## Lyons's observation

When a path is rough, knowing where it went is not enough to know the integrals along it. Two paths that agree at every point can produce different solutions to the same differential equation, because what matters is also how the path wound around between the points. So the path has to be supplied with more information: its iterated integrals. For roughness between H = 1/3 and 1/2, the second-order iterated integrals suffice (these encode the signed area the path sweeps out, the Lévy area). Rougher paths need third order, fourth order, and so on. The enriched object is a rough path; the full infinite tower of iterated integrals is the path's signature.

## The theorem

Lyons's universal limit theorem: once the path is enriched to the order its roughness demands, the map from driving signal to solution of the differential equation is continuous and deterministic. Itô's calculus becomes the special case where martingale structure supplies the second-order data and one extra term is enough.

## The Taylor connection

The [[taylor-series]] reconstructs a smooth function from its derivatives at a point. Rough path theory reconstructs what can be done with a jagged path from its iterated integrals. Same idea, rebuilt for a world without derivatives.

## Where it has gone

- Hairer's regularity structures (Fields Medal, 2014) extend the idea to stochastic partial differential equations.
- Path signatures are used as feature sets for time-series machine learning, and neural rough differential equations use the same machinery in models.
- Rough volatility models in quantitative finance require it.

## What this note does not yet cover

- A worked example of two paths with equal increments but different Lévy area.
- The algebra of the signature (Chen's identity, the shuffle product).
- How signature features are computed in practice.

## Review log

- 2026-09-08: seeded as the "fifth limb" of From Smooth to Jagged.
