---
title: "Entanglement and Bell's Theorem"
summary: "Why entangled particles are correlated more strongly than any pre-written script allows, shown through the CHSH game, the three-polarizer experiment, and the 2√2 bound. Originally Appendix B of The Resolution of Reality."
note_type: "concept"
status: "growing"
tags: ["quantum", "physics", "entanglement"]
related: ["superposition-and-interference", "coherence-and-error-correction"]
---

Quantum mechanics predicts that entangled particles share correlations mathematically stronger than any two independent classical objects could achieve. The test that makes this precise is Bell's theorem (1964). This note gives the logic of the test, the experimental result, and an intuitive mechanism.

## The classical limit: a logic trap

Consider two separated partners, Alice and Bob, in a game designed to test their coordination.

**Setup.** In each round the host separates them. He holds two cards, A and B, and flips coins to decide which card to show each partner.

**Rules.** Four combinations are possible:

- Host shows (A) to Alice and (A) to Bob: they must give the same answer.
- (A) and (B): same answer.
- (B) and (A): same answer.
- (B) and (B): different answers.

**The trap.** Since they cannot communicate during the game, their only strategy is a script agreed in advance ("always say yes", "if you see A say yes"). Logic guarantees at least one loss. If Alice(A) matches Bob(A), and Bob(A) matches Alice(B), and Alice(B) matches Bob(B), then Alice(A) must match Bob(B). But rule four requires them to disagree. Winning the first three forces a loss on the fourth.

**The result.** The best any classical strategy can achieve is 3 out of 4, a 75% win rate.

## The quantum violation

When the game is played with entangled photons, the win rate is about 85%. Physicists express this as a correlation score: classical strategies cap at 2; entangled photons reach approximately 2.83, the quantum maximum of 2√2.

![Bell correlation: classical limit versus quantum prediction](/images/notes/entanglement/bell-correlation.png)

*The straight line is the strongest correlation any pre-written script can produce. The curve is the quantum prediction, which bends away at intermediate angles. Experiments follow the curve.*

The number rules out pre-written scripts. If the particles carried hidden instructions, they would be trapped by the logic above. Since they beat the limit, their outcomes are generated at measurement in a coordinated way. (This coordination cannot carry a message. It shows up only in the correlations, never in either partner's results alone, so faster-than-light signalling is not possible.)

## An intuitive mechanism: the state reset

How can a physical object escape the logic? The three-polarizer experiment shows the mechanism.

**The block.** Send light through a vertical filter and then a horizontal filter. Vertical and horizontal are orthogonal: vertical light contains no horizontal component. All light is blocked.

**The bridge.** Insert a third filter at 45 degrees between them. Light now passes to the end, roughly 25% of it.

![Three polarizers: the classical block and the quantum bridge](/images/notes/entanglement/three-polarizers.png)

*Left: vertical light has no horizontal component, so the second filter blocks everything. Right: the diagonal filter resets the state. Half the light survives each step, where classical logic predicted zero.*

**Why.** Vertical light has no horizontal component, but it is a superposition of the two diagonal states. The middle filter measures it and forces it into the diagonal state; the light has no memory of having been vertical. Diagonal light is in turn a superposition of vertical and horizontal, so it has a horizontal component and passes the final filter. Adding an obstacle let more light through, because the obstacle was a measurement and the measurement changed the state.

Entangled particles use the same geometry to produce their correlations. Quantum objects do not carry fixed properties waiting to be revealed; the properties are settled by measurement.

## Why this matters for computing

Entanglement is what lets n qubits represent 2^n amplitudes as a single system rather than n separate two-state objects. Without it, a quantum computer would be a collection of coins. The same fragility that makes entanglement hard to maintain is the subject of [[coherence-and-error-correction]].

## Review log

- 2026-09-08: created from Appendix B of the original paper; figures moved here from the appendix; no-signalling clarification added.
