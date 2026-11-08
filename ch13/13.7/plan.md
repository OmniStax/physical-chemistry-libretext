# Plan: 13.7 The Franck-Condon Principle (LibreTexts 13670)

Source: `source.md`; draft from `python3 tools/md2html.py 13.7` (deleted after the build).
Status: built 2026-11-08 in the Chapter 13 job, without a review stop (config agreed).

Two objectives (no lead-in), eight figures (13.7.1–13.7.8), five numbered equations (13.7.1–13.7.5), three notes, a reference list. Licence CC BY-NC-SA 4.0; credit "lowers".

## Sub-concepts (page headers)

1. `franck-condon` **The Franck-Condon principle** (ours): the principle, Figure 13.7.1, the three points, the Condon note. Introduces `franck-condon-principle`, `condon-approximation`.
2. `vertical-transitions` **Vertical transitions** (ours): the vertical transition (linked to 10.4's `sim-franck`), the overlap-weighted probability, the quantum note with (13.7.1). Introduces `vertical-transition`, `franck-condon-factor`.
3. `s00` **S₀₀ Transition Evaluated within Harmonic Oscillator Model** (book's): the two zero-point functions, derivation `s00`. Introduces `displaced-oscillator-overlaps`, `gaussian-integral`.
4. `s01` **S₀₁ Transition …** (book's): (13.7.5), the functions, derivation `s01`, the progression. Introduces `franck-condon-progression`.
5. `franck-condon-progressions` **Franck-Condon Progressions** (book's): the book's 8000/1000 cm⁻¹ model, Figures 13.7.2–13.7.8, broadening, bond length. Introduces `line-broadening`, `excited-state-bond-length`.

## Figures

- `sim-vertical` · Figure 13.7.1 · franck-condon-principle, vertical-transition, condon-approximation · flow by animation: the v = 0 packet rides the photon straight up at fixed R, then swings between the new turning points (a displaced Gaussian, exact in a harmonic well), the time order the still drawing cannot show · arrows: kinematic (the photon lifting the packet) · moving: rest 0.8 s, jump 0.8 s, swing with a 1.6 s period, 6.4 s loop · choice absorption / emission; slider √α(Qₑ − Rₑ) 0–2.5 (untyped), special at 0 · headline: the vertical wavenumber and what the nuclei do after · graph alone (wells, faint levels, packet) · 2D. Book's model: 8000 cm⁻¹ gap, 1000 cm⁻¹ mode; opens on displacement 2 (S = 2, the drawing that favours v′ = 2). Original kept with its credit.
- `sim-progression` · Figure 13.7.2 + … + 13.7.8 · franck-condon-progression, displaced-oscillator-overlaps, line-broadening · variation by slider: S moves the upper well and the stick spectrum reshapes with its area fixed, one scene the book draws seven times · arrows: none · still: S is variation · slider S 0.05–3 (untyped), detents at the book's 0.1, ½, 1, 2 · headline: the strongest band and the 0 → 0 share · wells beside the spectrum (sticks e^(−S)S^v′/v′!, Gaussian dressing σ = 200 cm⁻¹) · 2D. Opens on S = 1.

Extra simulations: none.

## Exercises

The book sets none. AI exercise (config): `ai1` S₀₀ = 0.368, |S₀₀|² = 0.135, |S₀₁|² = 0.271 for α = 100 Å⁻², Qₑ − Rₑ = 0.20 Å (computed); 0 → 1 the stronger. Tests `displaced-oscillator-overlaps`, `franck-condon-progression`.

## Derivations

- `s00` · "the overlap S₀₀" · printed (13.7.2)–(13.7.4): three nodes (the product of the two Gaussians completed to a square; the Gaussian over R by z-substitution and ∫e^(−z²) = √π; S₀₀). Notes: the lower limit ∞ (−∞), −RRₑ (−2RRₑ), ∫e^(z²) (e^(−z²)). Replaces the printed block; the wavefunction definitions stay in the text.
- `s01` · "the overlap S₀₁" · printed, with a hidden run of 3 (shift, odd part vanishes, Gaussian): one node whose facts link `s00` and 5.7's `symmetric-integrals` (`drv`). Note: the prefactor is √(α/2), printed √(α²/2); the square misplaced in the brace; dR dropped. (13.7.5) stays printed.

## Corrections

Footnotes: v′/v labels reversed (`c-vlabels`); the turning point (`c-turning`); the lost P of P_{i→f} (`c-pif`); S never defined, S = α(Rₑ − Qₑ)²/2 (`c-s`); S is I₁/I₀, and v′ = 2 is S/2 of v′ = 1 (`c-ratio`); the three bullets raise the bond order (`c-bullets`). "see here for a review" links 5.6's `sim-hermite`. Left as printed: "a give region", "vierical", "spectroscoy", "In this first place", "is much large", "Samoza".

## Wanted at chapter level

None.
