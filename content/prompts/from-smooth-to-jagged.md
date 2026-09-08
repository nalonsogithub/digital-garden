---
title: "Prompt: From Smooth to Jagged"
summary: "A reverse-engineered prompt that, given the linked notes, would produce an essay close to From Smooth to Jagged. Published as an example of writing from the knowledge base."
---

As with the companion prompt, this is a reconstruction. The essay came first. The value of writing the prompt afterwards is that it separates what the notes contain (the mathematics, the history, the figures) from what the author added (the spine, the personal story, the closing sentence), and it makes the first kind reusable.

## The prompt

```text
You are writing an essay on how mathematics developed new tools to describe an
increasingly rough reality. The author is a portfolio manager writing under his own name
for a general, intelligent reader. The piece will sit beside a primer on quantum computing
in the same library.

INPUTS. Read these notes first and use only what they support:
- taylor-series (the claim, symmetry and cancellation, jerk and snap, Clairaut 1758,
  the e^(-1/x^2) counterexample)
- fourier-transform (time vs frequency domain, the cochlea, Fourier 1807/1822,
  Lagrange's rejection and Laplace's skepticism, the heat equation)
- brownian-motion-and-ito-calculus (Brown 1827, Einstein 1905, why calculus breaks,
  Itô's lemma and the half-sigma-squared term, Bachelier 1900 and the grade
  "honorable", Savage's postcards, Black-Scholes)
- mandelbrot-set (z -> z^2 + c, the boundary as where prediction fails, IBM and
  telephone-line noise)
- hurst-exponent-and-fractal-dimension (coast of Britain 1.25, lungs near 3, D = 2 - H,
  random walk at H = 0.5)
- rough-paths (why Itô fails for H != 0.5, Young for H > 0.5, Lyons 1998, iterated
  integrals and the signature, universal limit theorem)
- rough-volatility (Gatheral, Jaisson, Rosenbaum 2018, H near 0.1)
- shor-and-the-quantum-fourier-transform (for one bridge sentence only)

SPINE. Every major tool in analysis was invented because reality posed a differential
equation the existing mathematics could not solve. Follow five tools in the order reality
demanded them, and for each one name the differential equation underneath:
  I.   Introduction: state the thesis; promise a personal story at the end
  II.  Taylor series: the smooth world, prediction from a point, where it fails
  III. Fourier transform: un-blending; the heat equation; one bridge sentence to Shor
  IV.  Stochastic calculus: the path that broke calculus; Itô; Bachelier before Einstein
  V.   Fractals: the geometry of roughness; fractional dimension; the boundary where
       prediction fails, closing the loop with Section II
  VI.  Markets and a letter: the personal story; Hurst; D = 2 - H; rough paths as the
       next tool the pattern predicts; rough volatility as Mandelbrot measured; a plain
       statement of how this differs from the quantum essay (no physical substrate for
       markets, so the mathematics keeps growing)

ONE GOVERNING IMAGE. Mathematics "grew a limb" to reach each new kind of reality. Use
it in the introduction and at most three more times. Everything else is stated plainly.

VOICE. Direct, structured, medium sentences. Bold lead-in phrases at the start of
paragraphs ("The equation.", "The man nobody believed.") are the house style for this
essay; use them consistently. No em dashes. No hedge words ("honestly", "frankly"). Hedge
claims about what people believed; do not hedge data. Declarative section titles, never
questions.

CLAIMS TO GET RIGHT.
- Bachelier's thesis received "honorable", not "très honorable"; do not say it was
  failed or rejected.
- Lagrange rejected Fourier's memoir; Laplace was skeptical and later came around.
- Itô's extra term is 1/2 sigma^2 second derivative, and it exists because (dW)^2 ~ dt.
- D = 2 - H for a self-affine path; random walk has H = 0.5 and D = 1.5.
- For H != 0.5 the path is not a semimartingale; Itô does not apply. Young integration
  covers H > 0.5. Rough paths cover the rest.
- Gatheral, Jaisson, Rosenbaum 2018 found H near 0.1 for volatility, not for prices.

FIGURES. Five, each captioned "Figure N. Claim in one sentence.": Taylor approximations
peeling away from sin(x); a signal decomposed into three waves and its spectrum;
magnifying a smooth curve vs a Brownian path; the Mandelbrot set (interactive if the
medium allows); three simulated paths at different Hurst exponents. Equations set inline
in plain text with Unicode symbols, not LaTeX.

LENGTH. 2,800 to 3,400 words plus numbered references (Taylor 1715, Clairaut 1759,
Fourier 1822, Brown 1828, Einstein 1905, Bachelier 1900, Itô 1944, Black-Scholes 1973,
Mandelbrot 1967/1982/1997/2004, Hurst 1951, Lyons 1998, Gatheral et al. 2018).

THE PERSONAL STORY. The author wrote to Mandelbrot at Yale; Mandelbrot replied that he
lived in Cambridge and proposed coffee; he died before it happened; the reading done in
preparation changed how the author reads markets. Tell it in Section VI in six to eight
sentences, without embellishment, and let the last sentence of the essay refer to it.
```

## What the prompt cannot supply

The Einstein and Mandelbrot epigraphs, the elevator as "a Taylor series you can ride", and the closing line were not in any note. The prompt records them now so the essay can be regenerated, but it is a record of choices, not a source of them.
