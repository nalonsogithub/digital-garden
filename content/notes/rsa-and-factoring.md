---
title: "RSA and the Factoring Problem"
summary: "How RSA turns the difficulty of factoring into a lock, why the lock has a hidden period, and a worked example with small numbers. Originally Appendix A of The Resolution of Reality."
note_type: "concept"
status: "growing"
tags: ["quantum", "cryptography", "number theory"]
related: ["shor-and-the-quantum-fourier-transform", "quantum-algorithms", "structure-gradient"]
---

RSA security relies on the difficulty of factoring large integers. The public key is built with a single multiplication. Reversing it, to recover the private key, requires solving what mathematicians call a hidden subgroup problem: specifically, finding the period of a modular function. That hidden period is the structure [[shor-and-the-quantum-fourier-transform|Shor's algorithm]] exploits, and it is the reason factoring sits in the "structural" zone of the [[structure-gradient]].

## Key generation

RSA begins with two large prime numbers, p and q.

- **The modulus (N):** N = p × q.
- **Euler's totient (φ):** the count of integers less than N that share no factor with N. For two primes, φ(N) = (p − 1)(q − 1).
- **Public key (e):** chosen so that it shares no factor with φ(N).
- **Private key (d):** chosen so that d × e ≡ 1 (mod φ(N)).

## The one-way function: modular exponentiation

Encryption and decryption both use modular exponentiation, which wraps numbers around a circle of size N.

- Encryption: C = M^e (mod N)
- Decryption: M = C^d (mod N)

For a classical computer, finding d without knowing φ(N), which requires knowing p and q, is intractable. The wrapping obscures the original values.

## The hidden structure: periodicity

The weakness of RSA is that modular exponentiation is periodic. Take a number a and repeatedly multiply it by itself modulo N. The sequence eventually repeats:

f(x) = a^x (mod N), giving a^1, a^2, a^3, ..., a^r ≡ 1 (mod N)

The number of steps it takes to return to 1 is the period, r. If you can find r, a short classical calculation recovers p and q.

## Why the period is hard classically and easy quantumly

The period r is typically comparable in size to N itself, hundreds of digits long for a 2048-bit key. A classical computer has to walk the sequence step by step to find where it repeats, which takes exponential time.

A quantum computer does not walk the sequence. It prepares a [[superposition-and-interference|superposition]] of all inputs x, applies f(x) = a^x (mod N) to all of them at once, and then applies a Quantum Fourier Transform. Because the function is periodic, wrong candidate periods interfere destructively and the true period reinforces. Measuring the result yields r with high probability. Shor's algorithm is, in short, a method for finding this loop length.

## A worked example: encrypting "A"

Small numbers make the mechanism visible.

1. **Create the lock.** Pick p = 3 and q = 11. Then N = 33 and φ(N) = 2 × 10 = 20.
2. **Create the keys.** Choose e = 7. Find d such that 7 × d leaves remainder 1 when divided by 20: d = 3 works, since 7 × 3 = 21.
3. **Encrypt.** Let "A" be the number 2 (avoiding the trivial case of 1). 2^7 = 128, and 128 mod 33 = 29. Send 29.
4. **Decrypt.** 29^3 = 24,389, and 24,389 mod 33 = 2. The original message returns.

## Open questions for this note

- Post-quantum cryptography (lattice-based schemes standardized by NIST in 2024) is the practical response to Shor. A note on what those schemes assume, and why lattices are believed to lack the periodic structure RSA has, would complete this picture.

## Review log

- 2026-09-08: created from Appendix A of the original paper; exponents and encoding repaired; framing sentence added to connect to the structure gradient.
