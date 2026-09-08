---
title: "Prompt: The Resolution of Reality"
summary: "A reverse-engineered prompt that, given the linked notes, would produce an essay close to The Resolution of Reality. Published as an example of writing from the knowledge base."
---

This is not the prompt that produced the essay; the essay came first. It is a reconstruction of what a prompt would have to contain to produce something close to it from the notes, written so that the method can be reused. The parts that carry the most weight are the spine, the one governing image, and the constraints on what not to claim.

## How to use it

Give a capable model read access to the notes listed under "Inputs" (on this site they are the essay's "Built from" panel), paste the prompt, and expect a first draft that needs one editing pass for voice. Where the draft invents a metaphor not in the prompt, cut it.

## The prompt

```text
You are writing a primer on quantum computing for an intelligent reader with no physics
background. The author is a portfolio manager and strategist writing under his own name;
the piece will sit in a personal library beside an essay on the history of mathematics.

INPUTS. Before writing, read these notes and use only what they support:
- rsa-and-factoring (the lock, the hidden period, the worked example)
- superposition-and-interference (double slit, measurement)
- entanglement-and-bells-theorem (why n qubits are one system, the 2√2 bound)
- coherence-and-error-correction (decoherence, logical vs physical qubits)
- shor-and-the-quantum-fourier-transform (period finding is a Fourier transform)
- quantum-simulation (Feynman 1982, Lloyd 1996, "the computer becomes the molecule")
- quantum-algorithms (Shor, Grover, simulation; speedups; Babbush 2021 caveat)
- qubit-hardware (five platforms, trade-offs)
- hybrid-quantum-architecture (QPU as accelerator)
- analog-computation (analog vs isomorphic)
- structure-gradient (isomorphic / structural / generic)

SPINE. The essay makes one claim and builds to it: a quantum computer does not escape the
limits of classical computation by counting faster. It escapes them, when it can, by
exploiting structure the problem already has, and the advantage is proportional to how
native the problem is to the machine. Sections, in order:
  I.   The problem of scale (RSA; 10^80 atoms vs 10^617 candidates; state the spine)
  II.  Why classical machines fail (sequence, not speed; the Bitcoin aside as a preview
       of "no structure to exploit")
  III. The quantum shift (physics solving physics; introduce the qubit)
  IV.  Superposition (double slit; measurement destroys the pattern)
  V.   Entanglement (adding slits; 2,000 qubits = 10^617 paths; logical qubits note)
  VI.  Coherence (the environment is a detector)
  VII. Shaping probabilities (the algorithm as a lens; gates as the lens material;
       TWO sources of structure: mathematical for RSA via the Fourier transform,
       physical for a molecule via energy minimization. Keep these distinct.)
  VIII. Limits and opportunities (structured vs unstructured; chemistry as home court;
       logistics/finance as unproven; the gradient with analog and isomorphic named)
  IX.  Conclusion (hybrid architecture; the scoped claim that for physical problems the
       mathematics becomes a description rather than an approximation; pointer to the
       mathematics essay; markets do not get that exit)

ONE GOVERNING IMAGE. The double slit, extended: slits are qubits, the back wall is the
space of answers, lenses between them are the algorithm. Introduce it once in Section IV
and refer back to it. Do not introduce other extended metaphors. The Chladni plate may
appear once, in Section III, as a physical example of a system computing its own answer.

VOICE. Direct, structured, practitioner tone. Medium sentences, occasional short ones.
No em dashes anywhere. No "furthermore", "moreover", "it is important to note". State
claims plainly and let the evidence carry them. Do not hype: no "revolutionary",
"unprecedented", "game-changing". Concede limits before a reader can raise them.

CLAIMS TO GET RIGHT.
- Exponents: 10^80, 10^617, 10^308. Never write these as 1080 or 10617.
- Shor is period finding via the QFT. It is not energy minimization.
- Grover is quadratic, and quadratic gains may not survive error-correction overhead
  (Babbush et al., PRX Quantum 2021). Say so where finance applications come up.
- "The computer becomes the molecule" is fair, with the caveat that the Hamiltonian
  still has to be written and compiled into gates.
- Entanglement cannot send messages faster than light.
- Logical vs physical qubits: state the distinction once and use it consistently.

FIGURES. Seven, captioned "Figure N. Claim in one sentence." Scale gap (I); double slit
with and without detector (IV); N-slit patterns sharpening (V); coherent vs decoherent
pattern (VI); two lenses, period spectrum and energy landscape (VII); the fit gradient
(VIII); hybrid architecture (IX).

LENGTH. 3,000 to 3,800 words plus references. Numbered references to primary sources
(Rivest-Shamir-Adleman 1978, Feynman 1982, Shor 1994, Grover 1996, Lloyd 1996,
Bell 1964, Zurek 2003, Babbush 2021).

END with one paragraph that connects to the mathematics essay in the same library:
quantum simulation is where the modeling gap closes for physical systems; markets have
no such substrate, so their mathematics keeps growing.
```

## What the prompt cannot supply

The Borges epigraph, the decision to open with a credit-card transaction, and the sentence about markets occupying the author's working days are choices, not consequences of the notes. A prompt can hold them once they exist; it would not have found them.
