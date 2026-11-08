# Plan: 13.6 Electronic Spectra Contain Electronic, Vibrational, and Rotational Information (LibreTexts 2399)

Source: `source.md`; draft from `python3 tools/md2html.py 13.6` (deleted after the build).
Status: built 2026-11-08 in the Chapter 13 job, without a review stop (config agreed).

Two numbered figures and one unnumbered spectrum (in the note), four numbered equations (13.6.1–13.6.4), one note ("Iodine"). Licence CC BY 4.0 at the source, shared CC BY-NC-SA 4.0; no author credited.

## Sub-concepts (page headers)

1. `opening` **Electronic bands** (ours): electronic transitions in the visible and UV. Uses `vibronic-transition`.
2. `not-purely-electronic` **Electron Transitions are not Purely Electronic** (book's): Figure 13.6.1 + 13.6.2, (13.6.1)–(13.6.4), ν̃₀₀, the derivation, the Iodine note with its spectrum. Introduces `vibronic-transition`, `electronic-term-energy`, `vibronic-energy`, `vibronic-band-wavenumber`, `zero-zero-transition`, `vibronic-band-structure`, `convergence-limit`.

## Figures

- `sim-vibronic` · Figure 13.6.1 + 13.6.2 · vibronic-transition, vibronic-band-wavenumber, zero-zero-transition, convergence-limit, vibronic-band-structure, hot-band · variation by slider: v′ climbs the upper well's ladder and its band walks along the spectrum strip, the bands crowding to the convergence limit with the continuum beyond, which the two book diagrams (three kinds of level; two wells) never connect to a spectrum · arrows: symbolic (the transition) · still: no clock · slider v′ 0–81 (untyped), detent at the note's (26,0); choice v″ = 0, 1, 2 (hot bands) · headline: the band's wavenumber, wavelength and gap to its neighbour · wells on a broken energy axis (B above, the bottom of X below), a magnifier with the rotational levels of the chosen v′ (13.6.1's third scale), the spectrum strip under it over the real visible colours · 2D. Numbers: I₂ from Huber and Herzberg, from memory and unchecked (X: ν̃″ₑ 214.5, χ̃″ₑν̃″ₑ 0.614 cm⁻¹, Rₑ 2.666 Å; B: T̃ₑₗ 15 769, ν̃′ₑ 125.7, χ̃′ₑν̃′ₑ 0.764 cm⁻¹, Rₑ 3.024 Å, B̃ 0.029 cm⁻¹), Morse wells of those constants; (26,0) lands at 541.8 nm, inside the note's 500–650 nm. Facts: `spectrum`.
- `fig-iodine` · unnumbered spectrum in the note · kept (`figure`): the text reads it ("the (26,0) band labelled", "shown very approximately"); uncredited, the page's licence.

Extra simulations: none.

## Exercises

The book sets none. AI exercise (config): `ai1` ν̃₀₀ from T̃ₑₗ = 20 000, ν̃′ₑ = 1500, χ̃′ₑν̃′ₑ = 15, ν̃″ₑ = 2000, χ̃″ₑν̃″ₑ = 20 cm⁻¹: 19 751.25 cm⁻¹ (computed). Tests `zero-zero-transition`.

## Derivations

`band` · "the wavenumber of a vibronic band" · (13.6.3) with the two states' levels from (13.6.2) → (13.6.4) → ν̃₀₀; hidden in prose ("can be used with … to get"), 6 moves, score 6 (facts imported 1, unprinted run 4, joins 1): built, standing after the paragraph that completes it. The node note gives v′ for the printed v″ in (13.6.4).

## Corrections

Footnotes: electronic transitions "during microwave and infrared absorptions" (`c-microwave`); "transitional" for translational (`c-translational`); the lower minus the upper in ν̃_obs = Ẽ″ − Ẽ′ (`c-order`); "v′ = 0" for the lower state's v″ = 0 (`c-vzero`); (13.6.4)'s last terms in v′ (`c-vprime`). Left as printed: "cure", "G(n)", "vibratonal", 13.6.1's n and l (OpenStax's letters), X¹Σ⁺ and B³Π.

## Wanted at chapter level

None. LOG.md should flag the I₂ constants as unchecked literature values (orchestrator's decision).
