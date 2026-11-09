# Plan: 25.4 Osmotic Pressure can Determine Molecular Masses (LibreTexts 14516)

Source: `source.md` (`python3 tools/convert.py 25.4`); draft from `python3 tools/md2html.py 25.4`.
Status: built 2026-11-09 in the Chapter 25 job, without a review stop (config agreed).

Winter's CH431 notes: eleven unnumbered displays, Figure 25.4.1 (uncredited, page licence), one note
("Purity analysis"). No objectives, no summary, no credits. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `osmotic-pressure` **Osmotic pressure** (the config's header): membranes, Figure 25.4.1, osmosis, the derivation, reverse osmosis. Introduces `semipermeable-membrane`, `osmosis`, `osmotic-pressure`, `osmotic-equilibrium`, `osmotic-pressure-dilute`, `reverse-osmosis`; uses `gibbs-first-derivatives`, `phase-equilibrium-chemical-potential`, `activity`.
2. `determining-molar-masses` **Determining Molar Masses** (book's), with the "Purity analysis" note. Introduces `osmometry`, `polymer-molar-mass-distribution`, `melting-purity-analysis`; reinforces `freezing-point-depression`, `colligative-property`; uses `differential-scanning-calorimetry`.

"its melting point in depressed" and "The polymers is dissolved" kept as printed.

## Figures

- `sim-osmosis` · Figure 25.4.1 (replaced; original and caption kept) · osmosis, osmotic-pressure, osmotic-pressure-dilute, reverse-osmosis · flow by animation and variation by slider: the book's three panels are one U-tube in time; the reader sees the right column climb until its head balances Π = cRT, and a piston pushed past Π drive water back out, which three stills only imply · arrows: kinematic (the two flows of water across the membrane, drawn as their rates, equal at equilibrium) and symbolic (the piston's push, in the pressure colour) · moving: water dots crossing both ways with the share set by the rates, the levels relaxing to h_eq over a 5 s run, then a 1.2 s hold; each slider change restarts from equal levels (panel a) · sliders: glucose concentration c 0.2–4 mmol/L (untyped; default 1.00, detents 1, 2, 3; the figure's own setting, as the config says), applied pressure P_ext 0–12 kPa (pressure) with a dashed-circle special at Π: there the levels stay equal (panel c), above it reverse osmosis · headline: the live equilibrium head, or the balance, or reverse osmosis · scene alone, no graph; vertical bracket for the live head h in cm · 2D. Labels: "pure water", "glucose solution", "membrane" under the tube, P_ext on the piston, h on the bracket; glucose dots (`F.cat(0)`) and the arrows carry hover names. Readout Π = RTc with numbers, and h_eq = (Π − P_ext)/ρg. T = 298.15 K, ρg = 9.78 kPa/m (water at 298 K). The book's ≈ 30 bar for sea water is not a slider stop: it is 300 m of head and would flatten the millimolar scene (dropped from the exploration's sketch). Scale fixed at 2.8 px/cm from the extreme |h_eq| = 117 cm.

Extra simulations: none (exploration: a DSC purity curve has no printed equation).

## Exercises

The book sets none. One AI exercise (config), checked by computation: `a1`, 2.00 g of protein in 100 mL, Π = 7.4 Torr at 298.15 K → c = 0.398 mol/m³, M ≈ 5.0 × 10⁴ g/mol, and the melting point lowering it would give, 7.4 × 10⁻⁴ K (the section's point that osmometry reaches what freezing cannot). Tests `osmometry`, `osmotic-pressure-dilute`.

## Derivations

- `osmotic-pressure` · "Derivation · the osmotic pressure of a dilute solution" · printed block of eleven displays with words: **built**, replacing the block from μ*(T,P) = μ^sln(T,P+Π,a₁) to Π = RTc; the text resumes at "Where c is the molar concentration". Three nodes: μ*(T,P+Π) = μ*(T,P) + ΠV̄₁* from 22.4's (∂G/∂P)_T = V and an incompressible solvent (inserted given); the osmotic balance ΠV̄₁* = −RT ln a₁ (23.3's equal chemical potentials, drv; 24.7's μ = μ* + RT ln a; the subtraction line inserted); Π = RTc (ln a₁ ≈ −x₂ from 24.7, x₂ ≈ n₂/n₁, V ≈ n₁V̄₁* inserted, c = n₂/V). Notes: "Taking the partial versus x₁" (with respect to n₁) and the lost "=" in "ln a₁ ln x₁ ≈ −x₂". Not linked to 25.3's derivation: ln x₁ ≈ −x₂ is a fact there too, not a result.

## Wanted at chapter level

- Macros for the typed symbols written plain: `n_1` and `n_2` (amount; symbol rows have no macro) in the derivation, e.g. `{"sym": "n_1", "latex": "n_1", "macro": "\\knone"}`, `{"sym": "n_2", "latex": "n_2", "macro": "\\kntwo"}`; then `n_1`, `n_2` → the macros in 25.4's derivation.
- Optional variables rows for the sim's own symbols, written plain: `P_ext` (pressure, "the pressure applied to the solution", kPa) and `h` (length, "the difference in height of the two columns", cm).
