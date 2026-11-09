# Plan: 23.4 The Clausius-Clapeyron Equation (LibreTexts 14500)

Source: `source.md`; draft from `python3 tools/md2html.py 23.4`. Status: built 2026-11-08 in the Chapter 23 job (config agreed, no review stop). CC BY 4.0 at the source, shared BY-NC-SA. Equations (23.4.1)–(23.4.20); four examples (two printed "Example 23.4.1"); one exercise (23.4.2, unkeyed); two notes; Figure 23.4.1.

## Sub-concepts (page headers)

1. `evaporation` **Evaporation** (book's): introduces `clausius-clapeyron-equation` (bold, Equation 23.4.1), `integrated-clausius-clapeyron` (the unnumbered integrated display), `enthalpy-of-vaporization` ("molar enthalpy of vaporization"); uses `clapeyron-equation`, `ideal-gas-law`. "Section 23.3" is an `xref`.
2. `the-clapeyron-equation` **The Clapeyron Equation** (book's, Tuckerman): (23.4.2)–(23.4.13) stay printed (repeated material) and cite 23.3: "We have just seen that" links to 23.3's `drv-equal-chemical-potentials`, "Clapeyron equation" to 23.3's `drv-clapeyron`, "Clausius-Clapeyron equation" to this page's `drv-clausius-clapeyron`. Introduces `clausius-clapeyron-estimates` ("determine the vapor pressure at any temperature …"); reinforces the rest. Example 23.4.1 (16 bar) kept whole.
3. `vapor-pressure-curves` **Vapor pressure curves** (ours, config's proposal in sentence case): introduces `vapor-pressure-curve`, `sublimation-enthalpy-sum`; Figure 23.4.1, (23.4.18)–(23.4.20), the "Alternative Formulation" note, Examples 23.4.1 (second), 23.4.2, 23.4.3, the "Advanced Note".

Objectives (two) to the table.

## Figures

- `sim-vapor-pressure` · Figure 23.4.1 · vapor-pressure-curve, integrated-clausius-clapeyron, enthalpy-of-vaporization · variation by slider and choice: the reader sees the seven printed curves straighten into lines on ln P against 1000/T, and that the steeper line has the larger ΔH_vap, which the still P(T) cannot show · arrows: none · still: no time in it · liquid (select, 7: a dropdown since a row would wrap), T slider 200–650 K (a new liquid jumps to its book temperature, or Tb − 20 K) · headline: the live vapor pressure and the line's slope −ΔH_vap/R · two graphs side by side, P(T) with the 1 atm line as the book draws it, ln P against 1000/T · 2D. Data: water 373 K / 40.65 kJ/mol and ethanol 351 K / 39.0 kJ/mol (the book's); ether 308 K / 28.2, bromine 332 K / 28.3, n-octane 399 K / 35.7, ethylene glycol 470 K / 56.4, mercury 631 K / 58.3 kJ/mol fitted from the book's own figure (pixel trace of each curve, ln P against 1/T between 80 and 1000 mmHg), per the orchestrator's data decision. Opens on Example 23.4.1's water at 363 K: 530 mmHg = 0.697 atm. Only the chosen liquid is coloured and named (seven names would exceed six; hover names carry the others). Original kept under its printed licence.

Extra simulations: none.

## Exercises

Exercise 23.4.2 (unkeyed): AI solution (open, compute): from the triple point 273.16 K, 4.58 Torr (23.1) with 45 051 and 51 057 J/mol, P_water = 4.867 Torr and P_ice = 4.907 Torr at 274 K, ratio 1.008 (checked by computation); footnote `c-curve-name` on "the curve of vaporization is also called the curve of vaporization". No AI exercises (config).

## Derivations

- `clausius-clapeyron` (printed, 6 displays): "Derivation · the Clausius–Clapeyron equation"; facts Clapeyron (`drv` 23.3/clapeyron), vaporization's ΔH and ΔV, V_gas ≫ V_liq, V_gas = RT/P (16.1); result (23.4.1). The printed bracket (multiplying) follows the correct mathematics with a node note. The page's first display (the Clapeyron equation restated) becomes the first fact; the "However …" paragraph stays above the derivation.
- `integrated-clausius-clapeyron` (printed): "Derivations ·" (two ends): ln P = −ΔH/RT + C and P = C′e^(−ΔH/RT); (23.4.14) with the (T₁ − T₁) note; (23.4.15); (23.4.16). Fact (23.4.13) with `drv` to the derivation above. The prose that carries content stays after it ("which actually has the wrong curvature …", "assuming that … Here P₁ …", "so that we can determine …"), as in earlier lowercase-after-derivation precedents.
- Tuckerman's (23.4.2)–(23.4.13): stay printed (repeat), linked as above. The four examples: substitutions, stay.

## Corrections

Footnotes `c-p1-p2` (P₁ and P₂ are both vapor pressures), `c-second-example` (duplicate Example 23.4.1, orchestrator), `c-ethanol-rounding` (0.0004 would give 33.7 kJ/mol; 39.0 comes from 3.459 × 10⁻⁴ K⁻¹), `c-curve-name` (exercise). Node notes for the bracket and (T₁ − T₁). "condenses phases", "work our", "40 ^o^C", the "CC BY-SA-NC" credit kept as printed.

## Wanted at chapter level

None.
