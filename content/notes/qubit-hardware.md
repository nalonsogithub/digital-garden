---
title: "Qubit Hardware: The Five Leading Approaches"
summary: "Superconducting circuits, trapped ions, photons, silicon spins, and topological qubits: what each is, the trade-off each makes, and who is building it. Originally Appendix C of The Resolution of Reality."
note_type: "concept"
status: "growing"
tags: ["quantum", "hardware"]
related: ["coherence-and-error-correction", "hybrid-quantum-architecture"]
last_reviewed: "2026-07-06"
confidence: "medium"
---

In classical computing the bit has been standardized for fifty years: it is a silicon transistor. In quantum computing there is no standard yet. A qubit is a concept, any two-state quantum system, and engineers are betting on very different physical objects to play the role. The company names below reflect the state of the field when the original paper was written and should be re-checked; the physics does not change.

## 1. Superconducting qubits

**What it is.** A loop of superconducting wire (usually aluminum) interrupted by a non-conducting gap called a Josephson junction. It behaves like an artificial atom.

**How it works.** Cooled to near absolute zero, current flows without resistance. It can circulate clockwise (0), counter-clockwise (1), or in a superposition of both.

**Trade-off.** Fast gate speeds and compatibility with existing chip fabrication, against extreme fragility, short coherence times, and the need for large dilution refrigerators.

**Builders.** IBM, Google, Rigetti.

## 2. Trapped ions

**What it is.** Individual atoms (typically ytterbium or calcium) with one electron removed.

**How it works.** The ions are suspended in a vacuum by electromagnetic fields and manipulated with lasers that switch their electron states between 0 and 1.

**Trade-off.** Long coherence times and qubits that are identical by nature, against slower gates and difficulty scaling to large numbers of ions in one trap.

**Builders.** IonQ, Quantinuum.

## 3. Photonic qubits

**What it is.** Particles of light.

**How it works.** Information is encoded in polarization or arrival time and routed through mirrors and beam splitters on a chip.

**Trade-off.** Room-temperature operation (mostly), speed, and easy networking over fiber, against the difficulty of storing light and the fact that a lost photon is lost information.

**Builders.** PsiQuantum, Xanadu.

## 4. Silicon spin qubits

**What it is.** A single electron confined in a standard silicon semiconductor.

**How it works.** The electron's spin (up or down) encodes 0 and 1.

**Trade-off.** Very small footprint and manufacturability in existing fabs, against sensitivity to material defects and, so far, lower qubit counts.

**Builders.** Intel.

## 5. Topological qubits

**What it is.** A proposed quasiparticle (a Majorana mode) whose quantum information is stored in the braiding relationship between particles rather than in any one particle.

**How it works.** Information lives in a topological property of the system, which small disturbances cannot change.

**Trade-off.** In theory, built-in immunity to noise that would remove most of the error-correction burden. In practice, the physics is still being demonstrated.

**Builders.** Microsoft.

## Summary

| Approach | The object | The trade-off | Key players |
|---|---|---|---|
| Superconducting | Circuits | Fast but fragile | IBM, Google |
| Trapped ions | Atoms | Stable but slow | IonQ, Quantinuum |
| Photonic | Light | Room temperature but lossy | PsiQuantum |
| Silicon spin | Electrons | Tiny but sensitive | Intel |
| Topological | Braids | Robust but unproven | Microsoft |

## What to watch

The number that matters is not physical qubit count but the ratio of physical to logical qubits each platform needs, which depends on gate error rates. See [[coherence-and-error-correction]].

## Review log

- 2026-09-08: created from Appendix C of the original paper. Company list dated to July 2026 and marked for re-check.
