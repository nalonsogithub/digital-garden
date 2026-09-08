---
title: "Superposition and Interference"
summary: "A qubit before measurement holds amplitudes for both outcomes; computation is the controlled interference of those amplitudes. The double slit is the physical demonstration."
note_type: "concept"
status: "seed"
tags: ["quantum", "physics"]
related: ["entanglement-and-bells-theorem", "coherence-and-error-correction", "shor-and-the-quantum-fourier-transform"]
---

## The claim

Before measurement, a quantum system does not hold one value. It holds an amplitude for each possible outcome, and amplitudes, unlike probabilities, can be negative or complex. When two paths lead to the same outcome their amplitudes add. If they have opposite sign they cancel. That cancellation is interference, and it is the mechanism every quantum algorithm uses.

## The demonstration

Young's double-slit experiment shows it directly. Fire particles one at a time through two slits and the detector wall records an interference pattern of bright and dark bands, the signature of a wave passing through both slits. Place a detector at the slits to record which one each particle used and the pattern disappears, leaving two plain piles. Measurement forces the superposition to resolve.

## The connection to computing

A classical bit takes one path. A qubit takes both. n entangled qubits take 2^n paths at once, and a quantum algorithm is a sequence of operations (gates) that adjusts the phases along those paths so the wrong answers cancel and the right one reinforces. The essay [[the-resolution-of-reality]] uses the image of lenses placed between the slits and the wall; the lenses are the gates.

## What this note does not yet cover

- The mathematics of amplitudes (the Born rule, why probabilities are squared amplitudes).
- Why negative amplitudes are the resource classical probability lacks.
- The Hadamard gate as the simplest "open both slits" operation.

## Review log

- 2026-09-08: seeded from Section IV of The Resolution of Reality.
