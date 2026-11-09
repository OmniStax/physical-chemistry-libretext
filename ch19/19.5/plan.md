# Plan: 19.5 An Adiabatic Process is a Process in which No Energy as Heat is Transferred (LibreTexts 13703)

Built 2026-11-09. CC BY-NC-SA 4.0. Four equation images (CH431_Image61–64) are dead at the source: per the orchestrator, 61, 62 and 64 are reconstructed displays in the text with correction footnotes, 63 a derivation line with a note; all inferred, unchecked (for `LOG.md`).

## Sub-concepts

1. `isothermal` **Isothermal expansion of an ideal gas** (book's). Introduces `isothermal-ideal-gas-energy`, `reversible-isothermal-heat`.
2. `adiabatic` **Adiabatic expansion of an ideal gas** (book's): the etymology quote kept as a quote, dU = δw_rev, C_v, the paths A and B + C. Introduces `adiabatic-process`, `adiabatic-energy-change`, `ideal-gas-energy-heat-capacity`, `isotherm-and-adiabat-paths`.

## Figures

- `sim-isotherm-adiabat` · Sim (replaces the unnumbered paths image, kept as original; 19.6 links it) · isotherm-and-adiabat-paths, adiabatic-energy-change · variation: the reader stretches the expansion or changes the gas and sees the heat and work bars trade while ΔU stays 0 both ways, w_B = −q_C, w_A ≠ w_B · arrows: none · still: paths are states · choice gas (monatomic γ = 5/3 / diatomic 7/5); slider V₂/V₁ (untyped, 1.2–4, default 2) · headline: T₂ on the adiabat and the two works · PV plane beside the bars (heat and work colours) · 2D. Numbers: 1.00 mol, 10.0 L, 300 K (the book prints none). Route choice from the exploration dropped: both routes are always drawn, so the choice would change nothing. Paths labelled A, B, C on the curves rather than as referents.

## Exercises

`ai1` (AI, compute): 1.00 mol at 298 K doubling reversibly and isothermally: q = +1.72 kJ, w = −1.72 kJ. Tests `reversible-isothermal-heat`, `isothermal-ideal-gas-energy`.

## Derivations

- `isothermal-heat` · Derivation · the heat of a reversible isothermal expansion · replaces the four printed lines from ΔU_isothermal = 0 to q_rev; facts U = 3/2 nRT (17.1), T constant, the first law (19.1), w_rev (19.3, `drv` 19.3/reversible-isothermal-work).
- `adiabat-and-isochore` · Derivation · the work along the adiabat against the heat along the isochore · replaces ΔU_tot = 0 through w_B = −q_C (the lost Image63 restored as node 1's line with a note); four nodes, ending w_B = −∫_{T₂}^{T₁} C_v dT.

## Corrections

`c-image61`, `c-image62`, `c-image64` (lost displays, reconstructed), `c-wa-sign` (w_A's ln(V₁/V₂)). As printed: the header "Isothermal expansion" over a compression, "\w_A\)", "As the and points", "q_c".

## Wanted at chapter level

- `reversible-isothermal-heat` concept: `type` should be `heat`, not `energy` (it is q_rev).
- 19.5 variables rows for `w_A`, `q_A`, `w_B`, `q_B`, `w_C`, `q_C` if they should be typed rows of their own; the text writes them as `\kw_B`, `\kq_C` (main letter typed, subscript plain), which needs no new row.
