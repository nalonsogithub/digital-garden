---
title: "Taylor Series"
summary: "Reconstruct a smooth function from its derivatives at one point. The first tool mathematics built for prediction, and the one that assumes the world is smooth."
note_type: "concept"
status: "seed"
tags: ["mathematics", "calculus"]
related: ["fourier-transform", "brownian-motion-and-ito-calculus", "rough-paths"]
---

## The claim

If you know every derivative of a well-behaved function at a single point a, you can reconstruct the function everywhere within its radius of convergence:

f(x) = Σ [ f⁽ⁿ⁾(a) / n! ] (x − a)ⁿ, summed from n = 0 to ∞

Local information determines global behavior. That is the strongest form of the smooth-world assumption.

![Taylor series approximations to sin(x)](/images/from-smooth-to-jagged/figure-1-taylor-series.png)

## Why it works so often: symmetry

At a stable equilibrium the first derivative is zero, so the leading surviving term is quadratic. A pendulum near rest, a spring, a chemical bond, and a bridge deck all obey the same quadratic law near equilibrium for that reason. Even and odd symmetry kill further terms: the cosine expansion has no odd powers before anyone does any algebra.

## The derivatives as physical layers

Position, velocity, acceleration, jerk (third derivative), snap (fourth). Elevator and roller-coaster designers limit jerk and snap explicitly, because the inner ear feels those layers rather than speed.

## Where it fails

- **Non-analytic functions.** e^(−1/x²) is smooth at zero and every derivative there is zero, so the series predicts nothing.
- **Non-differentiable paths.** A Brownian path has no derivative anywhere, so there is no expansion to write. This is the failure that motivates [[brownian-motion-and-ito-calculus]] and, further out, [[rough-paths]], which reconstructs what can be done with a jagged path from its iterated integrals instead of its derivatives.

## History

Brook Taylor published the series in 1715. Its public triumph was Clairaut's 1758 prediction of Halley's comet, computed by perturbation series and correct to within about a month.

## Review log

- 2026-09-08: seeded from Section II of From Smooth to Jagged.
