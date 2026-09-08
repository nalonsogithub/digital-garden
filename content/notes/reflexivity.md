---
title: "Reflexivity"
summary: "A model of a market changes the market. Soros's reflexivity, the Lucas critique, and Goodhart's law are three statements of the same limit, and it is the one way markets are permanently harder than chemistry: molecules do not read the paper."
note_type: "concept"
status: "seed"
tags: ["finance", "economics", "ai", "epistemology"]
related: ["structure-gradient", "world-models", "mandelbrot-set", "analog-computation"]
---

## The claim

In physics the observer can be made irrelevant in the limit: measuring a molecule carefully enough does not change how molecules behave in general. In markets this is false in principle, not just in practice. A market is made of participants who form expectations, and a sufficiently good model of the market becomes one of the things participants form expectations about. The model changes what it models.

## Three statements of the limit

- **Soros's reflexivity.** Participants' views influence the events they are trying to predict, and the events influence the views. Prices are not passive reflections of fundamentals; they feed back into them (through financing conditions, confidence, collateral values).
- **The Lucas critique (1976).** Relationships estimated under one policy regime do not survive a change in regime, because agents re-optimize when the rules change. A model that ignores this will be wrong exactly when it is used to change policy.
- **Goodhart's law.** When a measure becomes a target, it ceases to be a good measure. Any regularity that becomes the basis for action is degraded by the action.

## Why it bounds the analogy to quantum simulation

The quantum primer's strongest case is [[quantum-simulation]]: the computer and the molecule obey the same physics, so the model can be exact. The natural question is whether populations of language-model agents could play the same role for markets, since markets are made of human decisions and the models are getting better at reproducing human decisions. Reflexivity is the reason the analogy has a ceiling. Even a perfect simulator of a market, if it were used at scale, would alter the market it simulated. Molecules do not respond to being simulated. Traders do.

## What it does not rule out

Reflexivity does not make market models useless. It makes them provisional, and it means their value decays with adoption. Two consequences for how the models on this site should be read:

- A model of a market is a model of the market as it was, including the models that were then in use.
- Any structure a model finds is partly a structure of other models. This is one reason [[rough-volatility]] and other statistical regularities need re-estimation rather than one-time discovery.

## Connection to sensitivity

Reflexivity is a second reason, beyond sensitivity to initial conditions (see [[mandelbrot-set]]), why a market model would deliver distributions rather than forecasts. Sensitivity is shared with physical systems; reflexivity is not.

## What this note does not yet cover

- Documented cases of forecasts or trading models altering what they forecast (index-inclusion effects, factor crowding, the decay of published anomalies).
- Whether agent-based simulations can be designed to include their own influence.

## Review log

- 2026-09-08: seeded as the closing argument of [[from-prediction-to-agency]] and the boundary of the analog-computer analogy.
