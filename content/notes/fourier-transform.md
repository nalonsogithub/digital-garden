---
title: "Fourier Transform"
summary: "Any physically realistic signal is a sum of sines and cosines; the transform recovers which ones and how strongly. Built to solve the heat equation, it is also the engine of Shor's algorithm."
note_type: "concept"
status: "seed"
tags: ["mathematics", "signal processing", "fourier"]
related: ["shor-and-the-quantum-fourier-transform", "taylor-series", "rough-paths"]
---

## The claim

A signal in the time domain, however irregular, can be rebuilt from pure oscillations. The transform is the resonance probe that finds them:

X(f) = ∫ x(t) e^(−i2πft) dt, over all t

The time domain records when things happened; the frequency domain records which pure notes are present and at what strength. Same information, two descriptions.

![The Fourier transform: time domain, components, frequency domain](/images/from-smooth-to-jagged/figure-2-fourier-transform.png)

## A physical instance

The cochlea is a mechanical Fourier transform. Each position along the coiled membrane resonates with one frequency, so a chord arriving as a single pressure wave is separated into notes before the brain is involved. Noise-cancelling headphones and song-recognition software run the same decomposition in silicon.

## History

Fourier presented the idea in 1807 to solve the heat equation. Lagrange rejected it; Laplace was skeptical and later came around. The full theory appeared in 1822. The Gibbs phenomenon (overshoot at sharp edges) and the conditions for convergence took decades more to settle.

## The connection to quantum computing

Shor's algorithm is period finding, and period finding is a Fourier transform: a periodic function has a spectrum concentrated at multiples of its fundamental frequency. The Quantum Fourier Transform performs the decomposition over 2^n amplitudes in one interference step. See [[shor-and-the-quantum-fourier-transform]]. This is the tightest link between the two essays on this site.

## Where it fails

The transform assumes stationarity: the frequency content does not change over the window. For signals whose character shifts in time (speech, prices), windowed and wavelet transforms take over. For paths too rough to have a useful spectrum at all, see [[rough-paths]].

## Review log

- 2026-09-08: seeded from Section III of From Smooth to Jagged.
