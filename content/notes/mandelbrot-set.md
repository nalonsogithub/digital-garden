---
title: "The Mandelbrot Set"
summary: "Iterate z → z² + c and ask whether the orbit stays bounded. The boundary between staying and escaping is infinitely intricate, and it is a picture of where prediction fails."
note_type: "concept"
status: "seed"
tags: ["mathematics", "fractals", "dynamical systems"]
related: ["hurst-exponent-and-fractal-dimension", "taylor-series", "reflexivity"]
---

## The rule

For each complex number c, start at z = 0 and iterate z_(n+1) = z_n² + c. Either the sequence stays bounded forever (settling, cycling, or wandering without escape) or it flies off to infinity. The Mandelbrot set is the set of c for which it stays bounded.

## The boundary

The interior is unremarkable. The boundary is where the set earns its reputation: two starting points closer together than any measurement can distinguish can have opposite fates. Zooming in reveals structure at every scale, including small copies of the whole set. The interactive explorer in [[from-smooth-to-jagged]] lets you zoom without limit.

## Why it belongs in an essay about prediction

An iterated map is the discrete cousin of a differential equation: a dynamical system stepped forward in time. The [[taylor-series]] opens the mathematics essay with the promise that knowing a point means knowing the future. The Mandelbrot boundary draws, in infinite detail, exactly where that promise breaks: the set of initial conditions where the system's future is infinitely sensitive to its present.

## Connection to markets

Sensitivity to initial conditions is one reason a faithful model of a market would still deliver distributions rather than forecasts. The other reason, which physical systems do not share, is [[reflexivity]].

## Mandelbrot's path to it

He did the defining work at IBM, studying clustered error bursts on data lines, and found the same self-similar structure in a century of cotton prices. The coastline paper (1967) and *The Fractal Geometry of Nature* (1982) followed.

## Review log

- 2026-09-08: seeded from Section V of From Smooth to Jagged.
