# Plan: 15.3 A Two-Level System Cannot Achieve a Population Inversion (LibreTexts 13649)

Source: `source.md`; draft from `python3 tools/md2html.py 15.3`. Built 2026-11-08 in the Chapter 15 job, no review stop (config).
One book header, one figure, one numbered display (15.3.1). Credits Newman, Maleki, Neils; CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `lasing-in-two-level-systems` **Lasing in Two-Level Systems** (book's): the conditions on laser light, the metastable upper state, (15.3.1), the waterfall, Figure 15.3.1. Introduces `laser-light-properties`, `laser-efficiency`, `metastable-state`, `lasing-condition`, `pumping`, `two-level-no-inversion`; reinforces `population-inversion`.

## Figures

- `sim-two-level` · Figure 15.3.1 · two-level-no-inversion, lasing-condition, pumping · flow by animation, variation by slider: a strip of 20 two-level atoms run by (15.2.2)'s rates with g₁ = g₂ (seeded, so the scrubber reaches exact states), pump photons falling in, pairs of photons leaving after stimulated emission, single ones after spontaneous; below, N₁/N and N₂/N against time from n₂ = W/(2W + 1)(1 − e^{−(2W+1)t}), the line N₂ = N₁ dashed · arrows: kinematic (the photons) · moving: the populations relax in time · slider B₁₂ρ_ν, log, 0.01–100 A₂₁ (formatter) · headline: the share the upper level heads for, short of half · graph below · 2D. Readout: (15.3.1)'s two rates live and the steady N₂/N₁. Photons in the frequency colour (an idealized atom has no real line). Original kept.

## Exercises

a1 (AI, new; config's one for 15.3): steady N₂/N₁ for B₁₂ρ_ν = 4A₂₁ and 40A₂₁ (0.80, 0.976). Tests `two-level-no-inversion`, `two-level-rate-equation`.

## Derivations

- "why two levels never invert": hidden, 5 moves, score 8 (exploration) · built after the waterfall paragraph; B₂₁ = B₁₂ links `15.2/einstein-relations`.
- (15.3.1) → N₂ > N₁: one cancellation, stays.

## Corrections

B₂₁ = B₁₂ only for g₁ = g₂; "It can be done but is very energy costly" (steady pumping never inverts).

## Wanted at chapter level

None.
