# Plan: 21.5 Practical Absolute Entropies Can Be Determined Calorimetrically (LibreTexts 14482)

Source: `source.md`; draft from `python3 tools/md2html.py 21.5` (deleted once built).
Status: built 2026-11-08 in the Chapter 21 job, without a review stop (config: the chapter in one go).

Three numbered displays (21.5.1)–(21.5.3), Example 21.5.1 with Figure 21.5.1. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers, ours)

1. `calorimetric-entropy` **Absolute entropy from heat capacities**: (21.5.1)–(21.5.3), links to 21.1 and 21.3 as
   `xref`s. Introduces `calorimetric-absolute-entropy`; reinforces `entropy-change-constant-pressure`,
   `entropy-of-transition`.
2. `carbon-dioxide` **Carbon dioxide at 300 K**: Example 21.5.1 and its figure. Introduces
   `absolute-entropy-heating-path`.

## Figures

- `sim-calorimetric-entropy` · Figure 21.5.1 · calorimetric-absolute-entropy, absolute-entropy-heating-path ·
  variation by slider: the area under C_P/T fills as T rises, the S(T) trace follows, and a column stacks the solid's
  area (69.4), the sublimation jump Δ_sub H/T_sub (130.4) and the gas's sliver (15.0), so at 300 K the jump is seen
  to be 61% of 214.8 J/(mol K) · arrows: none · still · slider T 0–300 K, opening at 300 K (the example's), detent at
  194.7 K · headline: S and the jump's share · two graphs (C_P/T above, S below) with the column beside · 2D. Data:
  the book's curve, digitized from the image (pixel-calibrated on its ticks) and fitted: the solid's C_P/T as a
  Debye curve (1.65 × 3R, Θ = 167.5 K) plus 4.0 × 10⁻⁴ T (rms 0.19 J/(mol K) against the digitized S), the gas at
  constant C_P^g = 34.67 J/(mol K); Δ_sub H = 25.4 kJ/mol follows from the jump. Original kept.

## Exercises

`ai1` (AI, Apply): Δ_sub H from the figure's jump (about 69 to 200 J/(mol K) at 194.7 K): 25.5 kJ/mol, tol 3%.

## Derivations

None: (21.5.3) is three moves of prose (score 2); the example is a substitution.

## Corrections

None.

## Wanted at chapter level

None.
