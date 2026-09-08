---
title: "Key Quantum Algorithms: Shor, Grover, and Simulation"
summary: "The three algorithm families that define what quantum computers are for, the speedup each delivers, and why the speedups differ. Originally Appendix D of The Resolution of Reality."
note_type: "concept"
status: "growing"
tags: ["quantum", "algorithms"]
related: ["shor-and-the-quantum-fourier-transform", "quantum-simulation", "structure-gradient", "rsa-and-factoring"]
---

A GPU is good at graphics and poor at spreadsheets. Quantum computers are likewise not faster at everything. They are faster only when running algorithms designed to exploit interference, and the size of the gain depends on how much structure the problem offers. The three families below span that range, and they are the concrete cases behind the [[structure-gradient]].

## Shor's algorithm (1994): exponential speedup

**Problem.** Factoring large integers, and therefore breaking RSA. See [[rsa-and-factoring]].

**Speedup.** Exponential. A problem that would take a classical machine longer than the age of the universe becomes, in principle, hours.

**Why it works.** It exploits a hidden structure: modular exponentiation is periodic. Shor's algorithm uses the Quantum Fourier Transform to find the frequency of that repetition. The detail is in [[shor-and-the-quantum-fourier-transform]].

**Resources.** To factor an n-bit number the algorithm needs roughly 2n logical qubits to hold the superposition, so a 2048-bit key requires on the order of 4,100 logical qubits. The doubling is a sampling requirement: to pin down the frequency of a wave you need a window wide enough to see it repeat many times, and the extra register provides that resolution. The physical-qubit count is far higher; see [[coherence-and-error-correction]].

## Grover's algorithm (1996): quadratic speedup

**Problem.** Unstructured search: finding one marked item in a list with no ordering to exploit.

**Speedup.** Quadratic. A classical search checks N/2 items on average; Grover needs about √N steps.

**Why it works.** Amplitude amplification. Each iteration rotates the state a little further toward the marked item, so the probability of measuring the right answer grows with every step. The answer is not found in one shot; it is made progressively more likely.

**Limits.** The gain is a square root, not an exponential, and it applies to brute-force search inside optimization problems too (routing, scheduling, portfolio enumeration) with the same ceiling. Babbush and colleagues argued in 2021 that quadratic speedups are unlikely to beat classical hardware once error-correction overhead is counted, which puts most proposed finance applications in doubt.

## Quantum simulation: the natural fit

**Problem.** Simulating quantum systems: molecules, materials, chemical reactions.

**Speedup.** Often exponential, and on the firmest theoretical ground of the three.

**Why it works.** Instead of using mathematics to approximate physics, the computer's own physics stands in for the system's. The electrons of a drug molecule are mapped onto qubits and the machine evolves as the molecule would. Feynman proposed this in 1982; Lloyd proved in 1996 that a quantum computer can simulate any local quantum system efficiently. See [[quantum-simulation]] and [[analog-computation]].

## Summary

| Algorithm | Best for | Advantage | Position on the gradient |
|---|---|---|---|
| Shor | Breaking RSA | Exponential | Structural |
| Grover | Unstructured search | Quadratic | Generic |
| Simulation | Chemistry, materials | Exponential | Isomorphic |

## Review log

- 2026-09-08: created from Appendix D of the original paper; Babbush et al. caveat and gradient column added.
