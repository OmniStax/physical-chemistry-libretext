# Plan: 22.8 Fugacity Measures Nonideality of a Gas (LibreTexts 14495)

Source: `source.md`; draft from `python3 tools/md2html.py 22.8`. Status: built 2026-11-09. Jerry LaRue and Michael Adewumi (tags); CC BY-NC-SA 4.0. One numbered equation (22.8.1).

## Sub-concepts (page headers)

The page has no header; two blocks of ours:

1. `defining-fugacity` **The fugacity of a gas** (to "In the zero-pressure limit …"): introduces `fugacity`, `fugacity-coefficient`, `fugacity-zero-pressure-limit`; `sim-fugacity-coefficient` at its end.
2. `mixtures` **Fugacity in mixtures and at equilibrium** (from "For mixtures"): introduces `component-fugacity`, `chemical-potential-fugacity`.

## Figures

- `sim-fugacity-coefficient` · Sim · fugacity, fugacity-coefficient, fugacity-zero-pressure-limit · variation by slider and choice: the reader sees φ start at 1 as P → 0, sag below 1 where attractions win and climb past 1 where the molecules' own volume wins, and stay nearer 1 when the gas is hot; the page gives only the definition · arrows: none · still: no clock in a pressure or a temperature · choice gas (N₂, CH₄, C₂H₆ from Table 16.2.1, CO₂ from Figure 16.3.2), slider T (150–1000 K, detent 298.15 K), slider P (1–500 bar) for the point that reads f = φP · headline: the gas, T, P, φ and f; below T_c (8a/27Rb) the curve stops at the condensation pressure from Maxwell's construction (a dot), and the headline says so when P is above it · graph alone: φ against P (0–500 bar, φ 0.4–1.2 fixed), ideal φ = 1 dashed, legend of two entries · 2D. Readout: φ = f/P and ln φ = ∫₀^P (Z − 1)/P′ dP′ with the live numbers. Opens on N₂ at 298.15 K and 100 bar: φ = 0.940, f = 94.0 bar. The φ curve is in ink (φ is untyped); the point and the P axis wear pressure. Labels: none on the curve; hover names on the point and the condensation dot.

## Exercises

One AI exercise (config): `a1` (Apply, multi): from Z = 1 + B₂P/RT, ln φ = B₂P/RT; N₂ at 298.15 K and 100 bar with B₂ = b − a/RT: φ = 0.928, f = 92.8 bar (the full van der Waals equation gives 0.940, said in the solution). Tests `fugacity-coefficient`, `fugacity-zero-pressure-limit`.

## Derivations

None qualify (each step is two moves: dG = VdP → RT d ln P → fugacity; the integration to μ̄ = μ̄° + RT ln(f/P°)).

## Corrections

- "At equilibrium: 0 = μ̄° + RT ln(f/P°)": footnote `c-equilibrium-zero`.
- "Lewis, in 1905": no footnote (orchestrator: the date cannot be checked here).

## Wanted at chapter level

None.
