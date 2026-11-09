# Plan: 19.12 Heats of Reactions Can Be Calculated from Tabulated Heats of Formation (LibreTexts 13710)

Source: `source.md` (`python3 tools/convert.py 19.12`); draft from `python3 tools/md2html.py 19.12`.
Status: built 2026-11-08 in the Chapter 19 job, without a review stop (config agreed).

No objectives, one unnumbered image (the ethanol combustion scheme), two numbered equations
(19.12.1, 19.12.2), one worked example (19.12.1), one note ("Definition: the Standard State"), one
table (bond energies). Licence CC BY-NC-SA 4.0; no credits printed.

## Sub-concepts (page headers)

1. `adding-reactions` **Adding reactions** (ours; the opening has no header): Hess' law applied by
   cancelling species, Example 19.12.1. Reinforces `hess-law`.
2. `standard-enthalpy-of-formation` **Standard Enthalpy of Formation** (book's): the zero of the
   scale, the standard-state note, formation reactions, methane by formation, the ΣνΔH_f° relation
   (19.12.1), the note on units. Introduces `standard-state`, `standard-formation-reaction`,
   `standard-enthalpy-of-formation`, `reaction-enthalpy-from-formation`.
3. `ionization-reactions` **Ionization Reactions** (book's): ionization potentials (7.1's
   `ionization-energy`, reinforced), electron affinities. Introduces `electron-affinity`.
4. `average-bond-enthalpies` **Average Bond Enthalpies** (book's): D(X–Y), broken minus formed,
   the ethanol scheme, the bond table, (19.12.2), the ±5–10% caveat. Introduces
   `average-bond-enthalpy`, `bond-enthalpy-estimate`.

## Figures

- `fig-ethanol-combustion` · unnumbered image · kept as the book prints it: a drawn equation, with
  nothing that varies (exploration). Eyebrow "Figure", no caption (the book prints none).

Extra simulations: `sim-enthalpy-ladder` was offered, not recommended; not built (orchestrator).

## Exercises

`a1` (AI, compute): combustion of propane from the section's ΔH_f° values, −2219.9 kJ (checked).
`a2` (AI, compute): CH₄ + 2O₂ → CO₂ + 2H₂O(g) from the bond table, −808 kJ (checked).

## Derivations

None: Example 19.12.1, methane by formation and ethanol by bonds are combinations of data or
substitutions (score 0; stay as printed, slips footnoted).

## Corrections

`occur` ("°Ccur"); `data-reactions` (the two bracketed reactions in Example 19.12.1 are not the
data reactions doubled); `swapped-labels` (2ΔH₁ and 2ΔH₂ swapped; total right, checked);
`ethanol-balance` (unbalanced scheme and the O–H count; balanced −1255 kJ/mol, checked).
Cosmetic slips left as printed: "ΔH_{f^o}", "CO2_(g)", "Δ_rxn".

## Wanted at chapter level

None.
