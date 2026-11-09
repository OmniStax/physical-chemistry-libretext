# Plan: 24.1 A Mixture is a Combination of Two or More Substances (LibreTexts 14503)

Source: `source.md`; draft from `python3 tools/md2html.py 24.1` (deleted).
Status: built 2026-11-09 in the Chapter 24 job (config agreed, no review stop).

No objectives, no summary, no credits printed. Six labelled equations (24.1.1)–(24.1.6), two
figures both printed "Figure 24.1.1", one dead image (the NCSU lever-rule T–x diagram), one
unnumbered inline exercise (unkeyed), two notes, Table 24.1.1. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's `<h2>` headers kept; the untitled opening gets its own.

1. `mixtures-of-two-components` **Mixtures of two components** (ours): the opening.
2. `partial-quantities-and-scaling` (book's): the scaling derivation, V = V̄₁n₁ + V̄₂n₂. Introduces `partial-molar-additivity`.
3. `gaseous-mixtures` (book's): (24.1.1). Introduces `daltons-law`.
4. `liquid-mixtures` (book's): Table 24.1.1. Introduces `ideal-solution`, `regular-solution`.
5. `solid-mixtures` (book's): the coin, the note. Introduces `solid-solution`.
6. `ideal-liquid-ideal-gas-phase-diagrams` (book's): (24.1.2), (24.1.3), applicability note. Introduces `raoults-law`.
7. `the-pressure-phase-diagram` (book's): (24.1.4)–(24.1.6), `sim-pxy`. Introduces `ideal-bubble-line`, `ideal-vapor-composition`, `pressure-composition-diagram`.
8. `the-temperature-phase-diagram` (book's, with ### The Lever Rule and ### Distillation): `sim-txy-lever`. Introduces `temperature-composition-diagram`, `lever-rule`, `distillation`.

## Figures

- `fig-24-1-1` · Figure 24.1.1 · photo, kept: the text names electrum as the miscible but non-ideal solid and the coin is that alloy; credit CC BY-SA 3.0, Classical Numismatic Group; alt text rewritten to describe the coin.
- `sim-pxy` · Sim (replaces the book's second "Figure 24.1.1", original kept; unnumbered by the orchestrator, footnote on the duplicate number) · raoults-law, ideal-bubble-line, ideal-vapor-composition, pressure-composition-diagram, lever-rule · variation by slider: inside the gap the state splits along the tie-line into a liquid and a vapor whose compositions are (24.1.4) and (24.1.5) at that pressure, which the still diagram leaves to the reader · arrows: none · still: an isothermal diagram has no time · pair choice (benzene and toluene 0.66/0.24 bar, opening; the text's 50/25 Torr; 24.4's water and ethanol 384/945 Torr), overall x₁ slider (untyped), P slider (pressure, range per pair) · headline: the liquid's χ₁ and the vapor's y₁ at P, or "one liquid" / "all vapor" · graph alone: liquid line solid, vapor line dashed (as the book), gap shaded, tie-line with its ends labelled, legend · 2D. Readout (24.1.4) with numbers, y₁, and n_liq/n_gas by the lever rule.
- `sim-txy-lever` · Sim (restores the dead lever-rule image) · temperature-composition-diagram, lever-rule, distillation · variation by slider: the two arms of the tie-line, liquid against the left arm and vapor against the right, and the boil–condense staircase walking to the volatile end · arrows: none (the book's arrows were lengths, drawn as brackets) · still: the staircase answers a slider · x_all slider (untyped), T slider (temperature), stages 0–5 (detents) · headline: x₂, y₂ and n_liq/n_gas at T · graph alone, legend top left · 2D. Model: ideal pair at 1 bar, each vapor pressure from 23.4's integrated Clausius–Clapeyron with illustrative T_b and Δ_vap H (353 K, 30.8 kJ/mol; 384 K, 33.2 kJ/mol), named in the figure's comment, no literature claim. Opens at x_all = 0.50, 370 K, inside the lens (365.1–371.7 K).

Extra simulations: `sim-pTx` offered in the config, not built (orchestrator).

## Exercises

The unnumbered "Exercise" (`exr:?`, id `e1`), unkeyed, AI solution: P_total = 40 Torr, y₁ = 0.75 (checked by computation); kind `exercise`, at the end; tests ideal-vapor-composition, raoults-law, ideal-bubble-line. No AI exercises (config).

## Derivations

- `scaling` · G = μ₁n₁ + μ₂n₂ by scaling · printed block, replaced · built.
- `liquid-line` · the liquid line, (24.1.4) · printed align, replaced · built.
- `vapor-line` · (24.1.5) and (24.1.6) · prose, score 6 (0 imported, unprinted run 5, 1 join) · built after the paragraph that completes it; the book's displays stay.
- `lever-rule` · printed block, replaced; node note on the `x_2^*n` asterisks · built.

## Corrections

Footnotes: `c-second-figure` (duplicate "Figure 24.1.1"), `c-torr` ("the same 25 and 50 Torr" against the plotted benzene–toluene figure), `c-arrows` (the arrows' diagram missing at the source). As printed, no marker: "points in inside", "done one a fractionation column", "asterisk $^\circ$".

## Wanted at chapter level

None.
