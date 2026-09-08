---
title: "Analog Computation and Isomorphism"
summary: "An analog computer is one that is analogous to the problem: the wind tunnel to flight, the tide machine to the sea. When the analogy is exact the word is isomorphism, and a quantum simulator is the deepest example."
note_type: "concept"
status: "seed"
tags: ["computation", "quantum", "history"]
related: ["quantum-simulation", "structure-gradient", "world-models"]
---

## The original meaning of "analog"

Before "analog" meant "not digital", it meant "by analogy". An analog computer is a physical system arranged so that its behavior mirrors the behavior of the system you want to understand. You then read the answer off the mirror.

Examples:

- **Tide-predicting machines** (Kelvin, 1870s): gears and pulleys whose motion summed harmonic components of the tide.
- **Wind tunnels**: a scaled airflow that is analogous to flight, used because the equations of turbulence could not be solved.
- **The MONIAC** (1949): water flowing through tanks and valves as an analog of the British economy.
- **The Chladni plate**: sand on a vibrating plate settles into the nodal lines of the plate's modes; the plate computes its own eigenfunctions. The quantum primer uses this image.

Analog computers fell out of use because digital machines were more general and more precise. They did not stop being a valid idea.

## Isomorphism

When the analogy is not approximate but exact, so that the equations governing the model and the equations governing the system have the same form, the precise term is isomorphism. Two isomorphic systems can stand in for one another without loss.

## Why quantum simulation is the deepest analog computer

A quantum simulator is isomorphic to the molecule it simulates at the level of the physics itself. The qubits obey the Schrödinger equation; so do the electrons. Nothing is approximated in the mapping, though a great deal is engineered around it. See [[quantum-simulation]]. On the [[structure-gradient]] this is the leftmost point, and it is why "the computer becomes the molecule" is a fair sentence with one caveat: the model still has to be compiled.

## Where the idea reaches its limit

For an analog computer to exist there must be a physical system that behaves like the target. Molecules have one (other quantum systems). Markets do not: there is no physical substrate that behaves like a market and can be run forward. Whether populations of language-model agents could serve as that substrate is an open question, and it is the subject of [[world-models]] and [[reflexivity]].

## Review log

- 2026-09-08: seeded to hold the analog/isomorphism vocabulary shared by both essays.
