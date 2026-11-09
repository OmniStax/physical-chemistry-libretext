# Plan: 24.4 Ideal Solutions obey Raoult's Law (LibreTexts 14506)

Source: `source.md`; draft from `python3 tools/md2html.py 24.4` (deleted). Status: built 2026-11-08 in the Chapter 24 job (config agreed, orchestrator's decisions of 2026-11-09 applied). CC BY-NC-SA 4.0. No numbered equations; two figures; no exercise printed; no objectives or summary.

## Sub-concepts (page headers)

1. `raoults-law-volatile` **Raoult's law for two volatile liquids** (ours, config's proposal in sentence case): Raoult's law for volatile liquids, Figure 24.4.1 (water–ethanol P–x), the T–x diagram (Figure 24.4.2), the lever rule (xref to 24.1's `drv-lever-rule`), distillation. Introduces nothing; reinforces `raoults-law`, `pressure-composition-diagram`, `temperature-composition-diagram`, `distillation`; uses `ideal-solution`, `lever-rule`.
2. `gibbs-energy-of-mixing` **The Gibbs energy of mixing is always negative** (book's): introduces `ideal-gibbs-energy-of-mixing`, `ideal-enthalpy-of-mixing`; uses `ideal-solution-chemical-potential`, `entropy-of-mixing`, `gibbs-energy`.
3. `volumes-additive` **In the ideal case, volumes are additive** (book's): introduces `ideal-volume-of-mixing`; uses `gibbs-first-derivatives`.

## Figures

- `fig-24-4-1` · Figure 24.4.1 · kept as printed (orchestrator: no second `sim-pxy`); the caption names ethanol's mole fraction as the axis (the image's X_H₂O contradicts its end points), corrected with no marker; true alt text written.
- `fig-24-4-2` · Figure 24.4.2 · kept: the text reads its lettered points step by step; 24.1's Sim gives the variation.
- Media: the image was renamed to `423013-Raoults_Law_-_P_versus_X.png` (the apostrophe broke the offline build; orchestrator's request).

Extra simulations: none.

## Exercises

No printed exercise. Two AI exercises (config): a1 equimolar ideal solution, 1.00 mol at 298.15 K: Δmix G = −1.72 kJ, Δmix S = +5.76 J/K, Δmix H = 0 (checked by computation); a2 water–ethanol at the book's 384/945 Torr, equimolar: P = 664.5 Torr, y_ethanol = 0.711 (checked).

## Derivations

- `ideal-mixing` (printed block): "Derivations · the Gibbs energy and enthalpy of ideal mixing", two results (Δmix G = nRTΣx ln x; Δmix H = 0). The printed "μ_i^sln ≡ μ_i* + nRTx_i ln x_i" is followed by the correct μ_i* + RT ln x_i with a node note (no footnote, rule 29.3). Lead-ins absorbed; content prose stays after it. Facts 24.2 (μ in an ideal solution), 20.6 (mole fraction, Δmix S), 22.2 (G = H − TS). No `drv` to 24.2's ideal-case derivation: its id was not known when this was built (see Wanted).
- `additive-volumes` (printed, 4 displays): "Derivation · volumes are additive in an ideal solution"; fact 22.4's (∂G/∂P)_T = V; `drv` to `ideal-mixing`.

## Corrections

Footnote `c-water-ethanol` (not ideal; minimum-boiling azeotrope near 89 mol % ethanol, 78.2 °C; orchestrator: the only memory-based footnote). The 75 °C vapor pressures: no footnote (orchestrator). "his expression", "which exists at higher temperatures)" as printed.

## Wanted at chapter level

- Variables row `{"sym": "x_1", "concept": "mole-fraction", "meaning": "the mole fraction of component 1", "section": "24.4"}` and the same for `x_2` (24.4 writes them plain, as `x_1`, `x_2`, in its derivations), so the derivations can use `\kxone`, `\kxtwo`.
- When 24.2 is built: a `drv` on the `ideal-mixing` fact μ_i^sln = μ_i* + RT ln x_i to 24.2's derivation of the ideal-solution chemical potential (`"drv": "24.2/<its id>"`).
