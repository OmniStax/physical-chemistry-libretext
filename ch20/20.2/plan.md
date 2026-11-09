# Plan: 20.2 Nonequilibrium Isolated Systems Evolve in a Direction That Increases Their Energy Dispersal (LibreTexts 13715)

Source: `source.md`; draft from `python3 tools/md2html.py 20.2`. Built 2026-11-08. No header, objectives, figures, numbered equations or credits printed.

## Sub-concepts (page headers, both ours)

1. `heat-not-state-function` **Reversible heat is not a state function**: energy dispersal; δq_rev = C_v dT + P dV and the cross-derivative test. Introduces `energy-dispersal`, `reversible-heat-inexact`; uses `exact-and-inexact-differentials` (19.4).
2. `dividing-by-t` **Dividing by the temperature**: 1/T as integrating factor; dS = δq_rev/T. Introduces `integrating-factor-1-over-t`, `entropy`.

## Figures

None: the page is an algebraic argument with no figure, and a sim would only replay the derivation.

## Exercises

None printed. One AI exercise (config): `a1`, 1 mol monatomic gas (300 K, 10 L) → (600 K, 20 L) by two paths: q_rev 7199 J and 5470 J, ΔS 14.41 J/K both ways; tests `reversible-heat-inexact`, `entropy`.

## Derivations

The book's printed block (14 displays with words) is split at the header into two records, since the block runs across the two sub-concepts; the words between the displays become facts and reasons (rule 29.2):
- `heat-inexact` · *Derivation · reversible heat is not an exact differential* (printed): facts the first law, dU = C_v dT, δw_rev = −P dV (Chapter 19), the exactness test (19.4), C_v independent of V, PV = nRT (16.1); results δq_rev = C_v dT + P dV and (∂C_v/∂V)_T = 0 ≠ nR/V = (∂P/∂T)_V. Note: the book's ∂q/dT, ∂q/dV and ∂nRT/∂T.
- `entropy-exact` · *Derivation · the entropy as an exact differential* (printed): fact the first record's result (`drv`), PV = nRT; results δq_rev/T = (C_v/T)dT + (nR/V)dV and equal cross derivatives (both 0).
No `drv` to Chapter 19 (19.1–19.4 not built at writing).

## Corrections

In the derivation note only (the lines live in the derivation): (∂q/dT)_V, (∂q/dV)_T for ∂T, ∂V; ∂nRT/∂T for ∂(nRT/V)/∂T.

## Wanted at chapter level

- `drv` links from `heat-inexact`'s first-law, dU = C_v dT and δw_rev = −P dV facts to Chapter 19's derivations once they are built.
