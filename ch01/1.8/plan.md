# Plan: 1.8 The Bohr Theory of the Hydrogen Atom (LibreTexts 13388)

Source: `source.md` (`python3 tools/convert.py 1.8`); draft from `python3 tools/md2html.py 1.8`.
Status: built 2026-11-08 in the Chapter 1 job, without a review stop (the user
approved the chapter config and asked for the chapter to be built).

One objective, seven numbered figures and one unnumbered image (in an
exercise answer), twelve labelled equations (1.8.1–1.8.12) among 39
displays, no worked examples, three inline exercises (keyed), one note.
Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's four `<h2>` headers are kept:

1. `planetary-atom` **Rutherford's Failed Planetary Atom**: Equations 1.8.1–1.8.4, Figures 1.8.1–1.8.2, the conservative-force note. Introduces `planetary-atom-instability`, `coulomb-potential`.
2. `bohr-model` **The Bohr Model**: Equation 1.8.5, the force-balance and orbit derivations (1.8.6–1.8.10), 1.8.11, Figures 1.8.3–1.8.4. Introduces `bohr-model`, `angular-momentum-quantization`, `bohr-radius`, `bohr-energy-levels`.
3. `wave-argument` **The Wave Argument for Quantization**: Figure 1.8.5. Introduces `standing-wave-quantization`.
4. `rydberg-from-bohr` **Derivation of the Rydberg Equation from Bohr Model**: the Rydberg derivation (1.8.12), the absorption equations. Introduces `bohr-rydberg-derivation`.

## Figures

- `sim-death-spiral` · Figure 1.8.1 · planetary-atom-instability · flow by animation: the electron falls as it radiates (Larmor, r³ = r₀³(1 − t/T)) while its frequency climbs on the graph beside, which the still spiral cannot show · arrows: kinematic (the electron's path) · moving: the electron spirals in over one loop · r₀ slider 40–85 pm, detent at a₀ = 52.9 pm · headline: t, r, ν and the collapse time · graph beside · 2D. The real ~2 × 10⁵ turns are drawn as six, stated in the caption and readout (rule 28.4).
- `sim-coulomb` · Figure 1.8.2 · coulomb-potential · variation: one choice (same sign / opposite signs) morphs the curve through zero, the r slider moves the second charge on the graph's own axis with the force arrows and the tangent of slope −F · arrows: symbolic (forces) · still · choice + r slider 30–400 pm, default 100 · headline: V and F · scene above graph · 2D. Conventions p⁺, e⁻.
- `sim-bohr-atom` · Figure 1.8.3 · bohr-model, bohr-radius, bohr-energy-levels · variation: n (1–5) and nucleus (H, He⁺, Li²⁺) choices; the orbits to one scale (10 units per a₀), velocity and force on the electron, bars splitting Eₙ into kinetic and potential parts · arrows: symbolic (v, F) · still · headline: rₙ, vₙ, Eₙ · bars beside · 2D. Arrows drawn at one length, values in labels.
- `sim-hydrogen-ladder` · Figure 1.8.4 + 1.8.6 + 1.8.7 · bohr-energy-levels, bohr-rydberg-derivation, hydrogen-spectral-series · flow by animation: the electron leaps down to n_f from each level up to 8 in turn and each photon flies to a logarithmic spectrum strip and lands as its line, in its real colour where visible · arrows: kinematic (photons), symbolic (transition arrows, still) · moving · choice n_f = Lyman … Pfund, default Lyman (the text's n_f = 1; Exercise 1.8.3's 4 → 1 is one of its leaps) · headline: the leap and the photon's wavelength · strip below · 2D. Facts: `spectrum`. Mentions the series of 1.4's figure in words; 1.4.4 is not folded (carried by 1.4).
- `sim-orbit-wave` · Figure 1.8.5 · standing-wave-quantization · variation: λ slider on hydrogen's n = 3 orbit (2πr = 2992.6 pm), dashed specials at 2πr/n for n = 1…8; six laps drawn faint and their sum bold, which survives only at whole n; the orbit unrolled beside · arrows: none · still · headline: wavelengths per orbit and the surviving fraction · beside · 2D.
- Exercise 1.8.2's r-vs-n plot · unnumbered image · kept as the book prints it inside the exercise's answer (it is the answer's graph), alt text rewritten.

Extra simulations: none proposed.

## Exercises

Exercise 1.8.1 (keyed: 52.9 pm, 17.6 pm; correction on the unit of e), 1.8.2 (keyed: 4.234 × 10⁻⁶ m), 1.8.3 (keyed: 2.04 × 10⁻¹⁸ J, → 2.18 × 10⁻¹⁸ J; correction on the sign of E_photon). All kind `exercise`, at the end. No AI exercises (config).

## Derivations

- `force-balance` (1.8.6): printed as a block of equations with words between; qualifies (rule 29.1). Replaces "The force on the electron is" … Equation 1.8.6.
- `bohr-orbits` (1.8.8, 1.8.9, momenta, 1.8.10): printed as equations; qualifies. Replaces the run from "Substituting Equation 1.8.7" to Equation 1.8.10. The postulate paragraph (1.8.7) stands between the two, as the book has it, which is why the config's one Bohr derivation is two graphs. The a₀ and Rydberg definitions and Equation 1.8.11 stay as text after it.
- `rydberg-from-bohr` (1.8.12 and R_H): printed as equations; qualifies. Its last node follows the correct mathematics (R_H in cm⁻¹ carries 1/c) with a `note` on the book's frequency-unit identification.

## Corrections

The text's "Figure 1.8.1A/B" means Figure 1.8.5 (A)/(B); e printed in C² (Exercise 1.8.1); E_photon = E_nf − E_ni (Exercise 1.8.3).

## Wanted at chapter level

- variables row: `{"sym": "p", "type": "momentum", "meaning": "the momentum of the electron in its orbit", "unit": "kg·m/s", "section": "1.8"}`
- variables row: `{"sym": "E", "type": "energy", "meaning": "the total energy of the electron, kinetic plus potential", "unit": "J", "section": "1.8"}`
