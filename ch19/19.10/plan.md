# Plan: 19.10 Relative Enthalpies Can Be Determined from Heat Capacity Data and Heats of Transition (LibreTexts 13708)

Source: `source.md`; draft from `python3 tools/md2html.py 19.10` (deleted once built).
Status: built 2026-11-09 in the Chapter 19 job, without a review stop.

No header; Figure 19.10.1 and an unnumbered DSC image; two notes.

## Sub-concepts (page headers)

1. `heating-ice` **Heating ice through its melting point** (ours): the three processes, the sum, Figure 19.10.1, the slopes. Introduces `enthalpy-of-a-process`.
2. `singular-heat-capacity` **A singular heat capacity** (ours): the singularity and the DSC note. Introduces `differential-scanning-calorimetry`.

## Figures

- `sim-enthalpy-melting` · Figure 19.10.1 (folds the unnumbered DSC image; both in `originals`) · enthalpy-of-a-process, heat-capacity-at-transition, differential-scanning-calorimetry · variation by slider: the state point rides H(T) and C_p(T) together, and broadening the DSC peak keeps its area at Δ_fus H, which neither still image shows · arrows: the upward arrow at 273 K is a symbol for an infinite C_p · still: no clock · T 253–293 K (opens at 293, detent 273), σ 2–5 K (opens at 3) · headline: H(T) − H(253 K) at T · H on top, C_p below on the same x · 2D. Numbers: water 75.29 J mol⁻¹ K⁻¹ (Table 19.13.1); ice 38 J mol⁻¹ K⁻¹ and 6.01 kJ/mol are handbook values named in the caption (orchestrator: allowed, flagged unchecked). Readout ΔH = ΔH₁ + Δ_fus H + ΔH₃ with live numbers (760 + 6010 + 1506 = 8276 J/mol on load) and the peak's area.

## Exercises

`a1` (AI, compute): ice at −20 °C to water at +20 °C with the given values: 8.27 kJ/mol (checked).

## Derivations

None (the sum is one move).

## Corrections

`c-more-transitions` (the figure shows one transition). As printed: "-0 °C", "C_P,ice. dT", "infinitly", "enthlapy".

## Wanted at chapter level

None. LOG.md: flag ice's C_p (38) and Δ_fus H (6.01 kJ/mol) as unchecked literature.
