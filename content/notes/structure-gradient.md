---
title: "The Structure Gradient"
summary: "Computational advantage depends on how much structure a problem has and where the structure comes from: isomorphic (the problem is physics), structural (hidden mathematical regularity), or generic (nothing to exploit). Derived, borrowed, or learned."
note_type: "hub"
status: "seed"
tags: ["computation", "quantum", "mathematics", "ai"]
related: ["analog-computation", "quantum-algorithms", "quantum-simulation", "reflexivity", "world-models"]
---

## The claim

The advantage any computational method offers is proportional to how much structure the problem has and how directly the method can read it. This note holds the vocabulary used across the essays on this site.

## The gradient for quantum computing

![How native is the problem to the machine?](/images/the-resolution-of-reality/figure-6-fit-gradient.png)

| Zone | What the structure is | Example | Advantage |
|---|---|---|---|
| Isomorphic | The problem is itself quantum physics | Molecular simulation | Exponential, best supported |
| Structural | A hidden mathematical regularity (a period, a symmetry) | Factoring via Shor | Exponential, problem-specific |
| Generic | None the machine can exploit | Unstructured search, Monte Carlo pricing | Quadratic, may not survive error-correction overhead |

Most finance applications proposed so far sit in the generic zone. See [[quantum-algorithms]] and [[analog-computation]].

## The wider version: derived, borrowed, learned

Across the three essays on this site the same gradient appears as three ways of getting structure into a computation:

- **Derived.** Mathematics derives structure from first principles: a differential equation, a Fourier basis, a stochastic calculus. This is the story of [[from-smooth-to-jagged]].
- **Borrowed.** Quantum simulation borrows structure from physics, when the problem is isomorphic to a physical system. This is the ending of [[the-resolution-of-reality]].
- **Learned.** Machine learning learns structure from data, when nobody can derive it and nothing in nature happens to compute it. This is the subject of [[from-prediction-to-agency]].

Markets are the case where only the third route has been open. There is no substrate to borrow from, and derivation has so far produced better approximations rather than a solution. Whether learned models of human behavior could eventually become a borrowed substrate for markets is an open question, bounded by [[reflexivity]].

## Review log

- 2026-09-08: seeded as the library-level framing note.
