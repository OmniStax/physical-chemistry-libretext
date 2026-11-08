# Plan: 18.6 Rotational Partition Functions of Diatomic Gases Contain a Symmetry Number (LibreTexts 13696)

Source: `source.md`; draft from `python3 tools/md2html.py 18.6` (deleted after the build).
Status: built 2026-11-08 in the Chapter 18 job, without a review stop. Tembe's IIT Bombay notes; CC BY-NC-SA 4.0.

Six numbered equations (18.6.1)–(18.6.6), Table 1 (kept as printed), Example 18.6.1, no figure, no header.

## Sub-concepts (page headers)

1. `summing-rotational-levels` **Summing the rotational levels** (agent's): (18.6.1)–(18.6.3), Table 1, the derivation ending at (18.6.4). Introduces `rotational-q-high-temperature`.
2. `symmetry-correction` **Correcting for symmetry** (agent's): σ, (18.6.5), (18.6.6), Example 18.6.1. Introduces `symmetry-number`.

## Figures

None. `sim-rotational-sum` was offered and not taken (config: only 18.1's extra sim).

## Exercises

`a1` AI (multi): q_rot at 300 K of N₂ (σ = 2, Θ = 2.88 K) 52.1 and of HCl (Θ = 15.2 K) 19.7 from Table 1; checked.

## Derivations

- `rotational-q` · *Derivation · the rotational partition function* · printed block with words: replaces the integral display and (18.6.4) and the substitution sentence (into a cap); result (18.6.4). Facts (18.6.3), (18.6.1) in energy units, the sum as an integral (18.1). One result, not the two the exploration named: (18.6.5) and (18.6.6) stay printed after the symmetry paragraph, because moving them into the derivation would leave the paragraph's colons with nothing after them or show the lines twice. Node note: the book's R^… and kT/B̃ with kT in wavenumbers.

## Corrections

`c-ej` (8πI → 8π²I), `c-theta` ((18.6.2)'s r² → h²), `c-kt` (209.7 → 208.5 cm⁻¹, q_rot 1.713). "j=0" and the lowercase θ_rot as printed.

## Wanted at chapter level

None.
