# Plan: 24.9 Gibbs Energy of Mixing of Binary Solutions in Terms of the Activity Coefficient (LibreTexts 14511)

Source: `source.md`; draft from `python3 tools/md2html.py 24.9`. Status: built 2026-11-09. No author, CC BY-NC-SA 4.0. No numbered equations or figures.

## Sub-concepts (page headers)

The page opens with `###` headers before its first `<h2>`; they become blocks of their own (22.7 precedent):

1. `activity-coefficients` **Activity and activity coefficients** (book's `###`): introduces `margules-activity-coefficient`; reinforces `activity`, `activity-coefficient` (24.7); uses `margules-function` (24.6).
2. `regular-solutions` **Regular solutions** (book's `###`), with the bare "Gibbs free energy of regular solutions" and the `####` "Partial molar volumes" as `<h3>`: introduces `regular-solution-activities`, `gibbs-energy-of-mixing-activity`, `regular-gibbs-energy-of-mixing`, `regular-interaction-energy`, `consolute-point`, `regular-volume-of-mixing`; uses `gibbs-duhem-binary`, `entropy-of-mixing`, `ideal-volume-of-mixing`.
3. `real-solutions` **Real solutions** (book's): reinforces `margules-function`.
4. `boiling-non-ideal-solutions` **Boiling non-ideal solutions** (book's, `###` Azeotropes and Eutectics kept): introduces `boiling-gap-meets-solubility-gap`; reinforces `azeotrope`, `consolute-point`.

## Figures

- `sim-mixing-gibbs` · Sim · regular-gibbs-energy-of-mixing, consolute-point, regular-interaction-energy · variation by slider: as RT/W falls the single minimum of Δ_mix G/W flattens and splits in two, which the text states and no figure draws; the right panel traces the coexisting compositions into the miscibility dome · arrows: none · still: a curve at one RT/W has no time in it · sliders RT/W (untyped, 0.15–1.00, default 0.40, special 0.5 = consolute point) and x₁ (untyped, default 0.30) · headline: one minimum or two, and the split compositions · graph left (Δ_mix G/W against x₁: the sum heavy in energy, the interaction term x₁x₂ and the entropy term thin and dashed, the horizontal common tangent with its two touching points, the mixture's point and, inside the gap, its split state on the tangent), dome beside it (RT/W against x₁, regions "one liquid" and "two liquids", the consolute point) · 2D. The book's form divided by W keeps the interaction term fixed, so the competition reads directly; the model is the book's regular solution, no data.

Not built (orchestrator): `sim-gap-meets-dome` (24.9's lost "see animation" is footnoted instead).

## Exercises

One AI exercise (config): `a1` (Analyze, multi): the curvature of Δ_mix G/RT at x = 0.5 is 4 − 2a, two minima above a = 2; with W = 5.0 kJ/mol the consolute temperature W/2R = 300.7 K (checked by computation). Tests `regular-gibbs-energy-of-mixing`, `consolute-point`, `regular-interaction-energy`.

## Derivations

- `regular-second-activity` (hidden in prose: "We can use Gibbs-Duhem to show that this *implies*"; 6+ moves, imports 24.2's binary Gibbs-Duhem and the Raoult limit, unprinted run 8, 1 join; score 9): **built**, after the paragraph, every line inserted. Node 1 from a₁ = x₁e^{ax₂²} to d ln a₁; node 2 from Gibbs-Duhem through d ln a₂ to a₂ = x₂e^{ax₁²}.
- `regular-mixing-gibbs` (printed block, ΔG_mix through x₁ + x₂ = 1): **built**, replacing the displays; node 1 ends on Δ_mix G/RT in activity coefficients, node 2 on the regular form. The book's "Dividing by the total number of moles" is the first step's reason.
- P_i = x_iP°f_Mar → a_i = x_if_Mar, the Δ_mix G/W rearrangement, ∂ΔH_mix/∂P = ΔV_mix: one or two moves each, stay printed.

## Corrections (footnotes)

`c-mu2` (μ°₂ for μ°_i), `c-example` (no example 24-7; the β-term is in 24.6), `c-animation` (no animation printed; Figure 24.6.3 shows it). As printed: "a₂" for a_i, "x₁ ln X₁", "In general.", "lense", "As such a point".

## Wanted at chapter level

None. (The `drv` link from the second-activity derivation's Gibbs-Duhem fact to 24.2's binary derivation is left out: that page was not built when this one was; the orchestrator can add `"drv": "24.2/<id>"` on node 2's first fact.)
