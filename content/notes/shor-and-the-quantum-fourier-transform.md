---
title: "Shor's Algorithm and the Quantum Fourier Transform"
summary: "Shor's algorithm is period finding: prepare a superposition, apply the periodic function, and read off the period with a Fourier transform. It is the bridge between the quantum primer and the mathematics essay."
note_type: "concept"
status: "seed"
tags: ["quantum", "algorithms", "fourier"]
related: ["rsa-and-factoring", "fourier-transform", "quantum-algorithms", "superposition-and-interference"]
---

## The reduction

Factoring N reduces to finding the period r of f(x) = a^x mod N for a random a. Once r is known, gcd(a^(r/2) ± 1, N) yields a factor with good probability. The number theory is classical and cheap. The hard step is finding r. See [[rsa-and-factoring]].

## The quantum step

1. Prepare a register in a uniform superposition over inputs x from 0 to some Q ≫ N².
2. Compute f(x) into a second register, so the state is a superposition of pairs (x, a^x mod N).
3. Apply the Quantum Fourier Transform to the first register.
4. Measure. The outcome is, with high probability, close to a multiple of Q/r. A few repetitions and a continued-fraction step recover r.

The reason step 3 works is exactly the reason the classical [[fourier-transform]] works: a periodic signal has a spectrum concentrated at multiples of its fundamental frequency. Amplitudes at other frequencies cancel. Quantum interference performs the whole transform in one pass over 2^n amplitudes, which no classical machine can do.

## Why this note is the bridge

The mathematics essay [[from-smooth-to-jagged]] presents the Fourier transform as the tool Joseph Fourier built to solve the heat equation. The quantum primer [[the-resolution-of-reality]] presents Shor's algorithm as the lens that focuses a superposition onto the correct period. They are the same operation. A reader who understands one has most of the other.

## What this note does not yet cover

- The circuit for the QFT and why it costs O(n²) gates rather than the classical O(n 2^n).
- Why Q must be much larger than N² (resolution of the period).
- The continued-fraction post-processing.

## Review log

- 2026-09-08: seeded to fix an ambiguity in Section VII of the primer, where the RSA lens and the molecule lens were described with one mechanism.
