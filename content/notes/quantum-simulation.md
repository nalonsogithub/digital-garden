---
title: "Quantum Simulation"
summary: "Feynman's 1982 proposal and Lloyd's 1996 proof: a quantum computer can efficiently simulate any local quantum system. The case where the machine and the problem share the same physics."
note_type: "concept"
status: "seed"
tags: ["quantum", "chemistry", "simulation"]
related: ["analog-computation", "structure-gradient", "quantum-algorithms"]
---

## The argument

Feynman's 1982 paper "Simulating Physics with Computers" made a simple observation. Classical computers approximate quantum systems with effort that grows exponentially in the number of particles, because the state space does. A computer built from quantum components would not have that problem: its state space grows the same way the system's does. Lloyd (1996) turned the observation into a theorem. Any quantum system whose interactions are local can be simulated on a quantum computer with resources that scale polynomially in system size and simulation time.

## Why this is the strongest case for quantum advantage

Shor's algorithm depends on a specific mathematical structure. Grover's gives only a square-root gain. Simulation rests on a structural match between the machine and the problem: the equations governing the qubits and the equations governing the molecule have the same form. The precise term is isomorphism; the older term is analog. See [[analog-computation]]. On the [[structure-gradient]] this is the isomorphic end, where the exponential claims are best supported.

## What "the computer becomes the molecule" leaves out

The Hamiltonian of the molecule still has to be written down, mapped onto qubits (Jordan-Wigner or similar encodings), decomposed into gate sequences (Trotterization or newer methods), and run on error-corrected hardware. The modeling step does not disappear; it becomes a translation between two systems that speak the same language. The gap between model and reality closes to engineering overhead rather than to zero.

## Applications

Drug discovery, catalysts, battery materials, superconductors. The common feature is that the classical approximations (density functional theory and its relatives) break down exactly where the chemistry is interesting, in strongly correlated electrons.

## What this note does not yet cover

- Variational methods (VQE) versus phase estimation.
- Current resource estimates for a chemically interesting molecule (e.g. FeMoco).
- Evidence to date of simulation beyond classical reach.

## Review log

- 2026-09-08: seeded from Section VIII of The Resolution of Reality.
