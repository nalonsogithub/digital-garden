---
title: "The Alpha Supply"
date: "2025-12-01"
summary: "Optimizer-based measurement of how much active risk the S&P 500 can support, what a perfect-foresight allocator would use, and how constraint types change the character of active risk."
category: "research"
tags: ["active management", "optimization", "tracking error", "S&P 500"]
research_group: "recent"
content_type: "white-paper"
---

## Core claim

Tracking-error budgeting should be reframed around the market's supply of idiosyncratic opportunity: how much active risk the benchmark can actually support, and how different constraint types change the character, not just the amount, of active risk.

## Framework

Built on a full covariance-cached optimization engine with return-based attribution follow-up. Compares stock caps versus style and sector bands as constraint architectures.

## Why this matters

The question is not only how much tracking error a manager runs. It is whether the benchmark can supply enough independent opportunity to justify that risk budget.

## Implication

Constraint design is a first-order decision. Two portfolios with similar tracking error can carry very different economic meaning depending on whether caps or style bands bind the optimizer.

## Technical infrastructure

Reproducible from versioned pipelines. Shared foundation with the manager-universe dataset and anomaly-discovery workflow.
