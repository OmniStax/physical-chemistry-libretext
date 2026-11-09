# Plan: 25.3 Colligative Properties Depend only on Number Density (LibreTexts 14515)

Source: `source.md` (`python3 tools/convert.py 25.3`); draft from `python3 tools/md2html.py 25.3`.
Status: built 2026-11-09 in the Chapter 25 job, without a review stop (config agreed).

Winter's CH431 notes: nine unnumbered displays, no figure, no objectives, no summary, no credits.
Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `counting-particles` **Counting particles** (the config's header): the definition and the list of three. Introduces `colligative-property`.
2. `melting-point-depression` **Melting Point Depression** (book's): the two assumptions, the derivation, K_f, molar mass, the sim. Introduces `solvent-activity-at-freezing`, `freezing-point-depression`, `freezing-point-constant`, `molar-mass-from-freezing-point`, `boiling-point-elevation`; uses `raoults-law`, `gibbs-helmholtz-equation`, `phase-equilibrium-chemical-potential`, `enthalpy-of-fusion`, `activity`.

"osmotic pressure" in the list is left unmarked: its concept is 25.4's.

## Figures

- `sim-colligative-mu` · Sim (the config's recommended extra; no book figure) · colligative-property, freezing-point-depression, boiling-point-elevation, freezing-point-constant · variation by slider: the reader adds solute and sees one line (the solution's μ) sink and its crossings with the solid and the vapor lines move apart, the melting one 3.6 times as far as the boiling one, which the book states in words only · arrows: none · still: a set of equilibrium states, no time · slider molality m 0–2 mol/kg, default 1.00, detents 0.5, 1, 1.5 (untyped, ink) · headline: the live melting point lowering and boiling point rise in K · two graphs side by side, each 8 K wide around 273.15 K and 373.15 K, y μ − μ* fixed −150 to 100 J/mol; pure liquid dashed at 0, solid or vapor in ink, solution in the energy colour; the crossings dotted in the temperature colour with a bracket giving the shift; a three-entry legend in one row; labels "solid" and "vapor" on their lines, hover names on the four transitions · 2D. The solution line is drawn −RT*M₁m, the book's own approximations (ln x₁ ≈ −x₂, x₂ ≈ M₁m, T_mT_m* ≈ T_m*²), so its crossings fall exactly on K_f m and K_b m. Water's data from Chapter 23 (6006 J/mol, 40.65 kJ/mol). No facts, no conventions.

## Exercises

The book sets none. Two AI exercises (config), checked by computation:
- `a1`: K_f = 1.86 and K_b = 0.513 K kg/mol for water from the heats; tests `freezing-point-constant`, `boiling-point-elevation`.
- `a2`: 1.00 g in 50.0 g water, ΔT = 0.207 K → m = 0.111 mol/kg, M = 180 g/mol; tests `molar-mass-from-freezing-point`, `freezing-point-depression`.

## Derivations

- `freezing-point-depression` · "Derivation · the melting point depression" · printed block of nine displays with words: **built**, replacing the block from μ₁ˢ = μ₁^sln to ΔT = K_f.m (the words between become its facts and reasons). Facts: 23.3's equal chemical potentials (drv), 24.7's μ = μ* + RT ln a, the Δμ₁ definition, 22.7's Gibbs–Helmholtz (drv), the two assumptions, ln x₁ ≈ −x₂ (24.7), constant Δ_fus H (inserted, a given the integration needs), T_m T_m* ≈ T_m*², and x₂ ≈ M₁m (inserted: the book skips the step to molality). Four nodes. The lost "=" in "ln a₁ ln x₁ ≈ −x₂" is the node's note (the line lives in the derivation, so no text footnote); "∂ [ln a₁" is markup, followed silently.

## Wanted at chapter level

- A symbol and variables row for the solvent's molar mass, written plain `M_1` in the derivation and exercise a1: `{"sym": "M_1", "latex": "M_1"}` and in `ch25/chapter.json` variables `{"sym": "M_1", "meaning": "the molar mass of the solvent", "unit": "kg/mol", "section": "25.3"}`.
- A symbol for K_b (the boiling point elevation constant), written plain `K_b` in the sim readout and exercise a1, if the orchestrator wants it a row: `{"sym": "K_b", "latex": "K_b"}`, variables `{"sym": "K_b", "concept": "boiling-point-elevation", "meaning": "the solvent's boiling point elevation constant", "unit": "K kg/mol", "section": "25.3"}`.
