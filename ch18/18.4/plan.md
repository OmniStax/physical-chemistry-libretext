# Plan: 18.4 Most Molecules are in the Ground Vibrational State (LibreTexts 13694)

Source: `source.md`; draft from `python3 tools/md2html.py 18.4` (deleted once built).
Status: built 2026-11-08 in the Chapter 18 job, without a review stop.

Book headers "Vibrational Heat Capacity" and "Vibrational Populations"; six numbered equations
(18.4.1)–(18.4.6); Table 18.4.1; Example 18.4.1; Figure 18.4.1 and an unnumbered Cl₂ population
chart. Credit: Tembe's notes.

## Sub-concepts (page headers)

1. `vibrational-ladder` **The sum over the vibrational ladder** (ours): E_v, the derivation of (18.4.1)–(18.4.3), Θ_vib, Table 18.4.1, Example 18.4.1. Introduces `geometric-series`, `vibrational-partition-function`, `vibrational-temperature`.
2. `vibrational-heat-capacity` **Vibrational Heat Capacity** (book's): C̄_V, the derivation of (18.4.4)–(18.4.5), the limits, Figure 18.4.1, what sets Θ_vib. Introduces `molar-heat-capacity`, `temperature-derivative-beta`, `vibrational-heat-capacity`, `vibrational-temperature-trends`.
3. `vibrational-populations` **Vibrational Populations** (book's): (18.4.6), the Cl₂ chart's paragraph. Introduces `vibrational-populations`, `ground-vibrational-state-dominates`.

## Figures

- `sim-vibrational-freeze` · Figure 18.4.1 (folds the unnumbered Cl₂ chart; orchestrator's decision: eyebrow "Figure 18.4.1", both images in `originals`) · vibrational-heat-capacity, vibrational-populations, vibrational-temperature, ground-vibrational-state-dominates · variation by slider and choice: the reader warms one molecule of Table 18.4.1 and sees its ladder stay empty above v = 0 until kT nears Θ_vib while the state point climbs the one universal C̄_V/R curve, which the book's schematic curve and single bar chart cannot show together · arrows: none · still: no clock in a temperature · select molecule (11, a dropdown), slider T (log 10–10 000 K, opening 300 K, a dashed circle at T = Θ_vib that moves with the molecule) · headline: f₀ and C̄_V/R at T · ladder beside the graph; the graph's x axis is T/Θ_vib on a log scale 0.05–5 (the book's reduced temperature, so one curve serves every molecule) · 2D. Opens on Cl₂ at 300 K: f₀ = 0.932, q_vib = 1.073, C̄_V = 0.567R. Labels: v = 0–5 and each f_v (six, fixed positions); hover names on levels and the state point.

## Exercises

None printed. Two AI exercises (config): Cl₂ at 300 K (q_vib 1.073, f₀ 0.932, f₁ 0.0637, C̄_V,vib 4.71 J K⁻¹ mol⁻¹) and N₂ at 1000 K (q_vib 1.035, f₀ 0.966), computed.

## Derivations

- `vibrational-q` · Derivation · the vibrational partition function · printed block · replaces the series through (18.4.3); three nodes (18.4.1), (18.4.2), (18.4.3). Facts: E_v, q as a sum (17.2), x, the geometric series, the zero of energy. Note: "hν/2kT".
- `vibrational-cv` · Derivation · the vibrational heat capacity · printed block, one line inserted (ε_vib = −∂ln q_vib/∂β, 17.8) · replaces "We have:" through (18.4.5); three nodes (18.4.4), ε_vib, (18.4.5). Note: the first line's q_vib label and "hcν", "hvν̃".
- (18.4.6): two moves, stays.

## Corrections

Footnotes: `c-bond-unit` (Å, not pm), `c-force-unit` (10⁵ dyn/cm), `c-no-omega` (≈ 1890 cm⁻¹), `c-n2-rot` (2.88 K), `c-hi-rot` (9.29 K), `c-kt-hc` (208.5 cm⁻¹, q_vib = 1.556), `c-molar` (k per molecule, R per mole), `c-cl2-chart` (figure: f₀ ≈ 0.98 in the chart against 0.932). As printed: Figure 18.4.1's T axis against the text's T/Θ (the figure plots T/Θ_vib), "of of", "your are".

## Wanted at chapter level

None.
