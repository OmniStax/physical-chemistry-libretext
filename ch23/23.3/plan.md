# Plan: 23.3 The Chemical Potentials of a Pure Substance in Two Phases in Equilibrium (LibreTexts 14499)

Source: `source.md`; draft from `python3 tools/md2html.py 23.3`. Status: built 2026-11-08 in the Chapter 23 job (config agreed, no review stop). CC BY-NC-SA 4.0; no credit printed. No numbered equations, no figures, no exercise of its own.

## Sub-concepts (page headers)

The book's two headers kept.

1. `two-phases` **Chemical Potential of Two Phases in Equilibrium** (book's): introduces `phase-equilibrium-chemical-potential`; uses 22.5's `fundamental-equations-composition`, 23.1's `phase-transfer-mole-balance`.
2. `clapeyron` **The Clapeyron Equation** (book's): introduces `chemical-potential-differential`, `clapeyron-equation` (bold "Clapeyron."); uses `chemical-potential-pure-substance`, `gibbs-first-derivatives`, `entropy-of-transition`. "The almost vertical line in the diagram" links to 23.1's `sim-phase-diagram` (`figref`).

## Figures

None (exploration: the Clapeyron slope is read on 23.1's phase-diagram Sim; `sim-mu-surfaces` not built, orchestrator).

## Exercises

- Exercise 22.5.5 (routed from 22.5, `source_section` 22.5): key "See the third outside link" with no link printed, so unkeyed; AI solution (open, prove); correction footnote `c-outside-link` under the card.
- AI exercise `a1` (multi, compute): Clapeyron slope of ice's melting line from Δ_fus H = 6006 J/mol and densities 0.9167 / 0.9998 g/cm³ (from memory, unchecked; stated in the prompt): ΔV̄ = −1.633 cm³/mol, dP/dT = −134.6 bar/K, 100 bar lowers T_m by 0.743 K (checked by computation).

## Derivations

- `equal-chemical-potentials` (printed, 3 displays): "Derivation · equal chemical potentials in two phases"; facts 22.5's dG with Σμ dn, constant T and P, dG = 0 at equilibrium (22.2), 23.1's dn_ice = −dn_water. Replaces the three displays and their connecting words; the prose after ("As dn_water is not zero …") stays.
- `clapeyron` (printed, 7 displays): "Derivation · the Clapeyron equation", three nodes (dμ = V̄dP − S̄dT; dP/dT = ΔS̄/ΔV̄; dP/dT = ΔH̄/(TΔV̄)); facts μ = Ḡ (23.1), (∂Ḡ/∂P)_T = V̄ (23.2.4), (∂Ḡ/∂T)_P = −S̄ (21.3), Δμ = 0 (`drv` to the one above), ΔS̄ = ΔH̄/T_m (`drv` 21.3/entropy-of-transition). The book's swapped dμ (and its repeat when equating) follows the correct mathematics with a node `note` (rule 29.3; no text footnote, since the line lives in the derivation). The book's ΔḠ = ΔH̄ − TΔS̄ = 0 is carried by 21.3's derivation.

## Corrections

Node note on the swapped dμ; footnote `c-outside-link` on 22.5.5's key. "denser that ice", "tells use", "equilbrium" kept as printed.

## Wanted at chapter level

None.
