---
title: "The Hybrid Architecture: QPU as Accelerator"
summary: "Quantum processors will be called by classical systems for the specific subproblems they are native to, the way a CPU offloads to a GPU. The classical side keeps control, logic, and storage."
note_type: "concept"
status: "seed"
tags: ["quantum", "architecture"]
related: ["qubit-hardware", "structure-gradient", "quantum-algorithms"]
---

## The model

The goal of quantum computing is not to replace classical computers but to complete them. In the emerging model a quantum processing unit (QPU) sits beside the CPU as a specialized accelerator. The classical machine runs the operating system, logic, and data storage, and dispatches to the QPU only when it reaches a subproblem of the right shape: factoring a large number, simulating a molecule, sampling from a distribution that is hard to prepare classically.

![The hybrid architecture](/images/the-resolution-of-reality/figure-7-hybrid-architecture.png)

## Why the analogy to GPUs is accurate and where it fails

It is accurate about the division of labor: general-purpose control stays classical, and the accelerator handles what it does best. It fails on the nature of the result. A GPU returns deterministic output. A QPU returns a sample from a probability distribution shaped by interference, so a hybrid workflow usually includes repetition and classical post-processing (as in Shor's continued-fraction step).

## What decides which problems go to the QPU

The [[structure-gradient]]. Problems isomorphic to quantum physics, or with hidden mathematical structure, are candidates. Generic search is usually not worth the round trip.

## What this note does not yet cover

- Current cloud access models (IBM, Google, IonQ, Quantinuum) and what "hybrid" means in practice today.
- Variational loops where the classical optimizer and QPU alternate.

## Review log

- 2026-09-08: seeded from Section IX of The Resolution of Reality.
