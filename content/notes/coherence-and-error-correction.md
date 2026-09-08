---
title: "Coherence, Decoherence, and Error Correction"
summary: "Why the environment acts as an unwanted measurement, why that forces thousands of physical qubits per logical qubit, and why the physical-to-logical ratio is the number to watch."
note_type: "concept"
status: "seed"
tags: ["quantum", "hardware", "error correction"]
related: ["qubit-hardware", "superposition-and-interference", "entanglement-and-bells-theorem"]
---

## Coherence

For superposition and entanglement to do work, the qubits must stay in a state where their phases are defined relative to one another. That condition is coherence. Any interaction with the outside world (a stray photon, a vibrating atom, a cosmic ray) acts like a measurement and destroys it. The information is not deleted so much as leaked into the environment, where it cannot be recovered.

## Decoherence as the engineering problem

Decoherence times for today's hardware range from microseconds (superconducting circuits) to seconds or longer (trapped ions). A computation must finish, or be corrected, before the phases drift. Every [[qubit-hardware|hardware platform]] is a different bet about how to buy more coherence time or faster gates.

## Logical versus physical qubits

Physical qubits fail. A logical qubit is an encoded object spread across many physical qubits so that errors can be detected and undone without measuring the encoded value. The overhead depends on the physical error rate: the lower the error rate, the fewer physical qubits per logical qubit. Estimates in the literature have ranged from about a thousand physical qubits per logical qubit down to far fewer as error rates fall and codes improve. The 4,000 or so logical qubits Shor needs for RSA-2048 therefore translate into a physical machine one to three orders of magnitude larger.

## What to watch

The headline number in hardware announcements is usually the physical qubit count. The number that matters is the two-qubit gate error rate, because it sets the physical-to-logical ratio and therefore the size of machine needed for any useful algorithm.

## What this note does not yet cover

- The threshold theorem and why it makes error correction possible at all.
- Surface codes versus newer low-overhead codes.
- Current best published resource estimates for RSA-2048.

## Review log

- 2026-09-08: seeded from Sections V and VI of The Resolution of Reality. Resource-estimate figures deliberately left qualitative until sourced.
