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

- `sim-death-spiral` · Figure 1.8.1 · planetary-atom-instability · flow by animation: the electron falls as it radiates (Larmor, r³ = r₀³(1 − t/T)) while the frequency it radiates at is traced beside it, which the still spiral cannot show · arrows: kinematic (the electron's path) · moving: the electron spirals in over one loop and the frequency curve draws as it goes · r₀ slider 40–70 pm, detent at a₀ = 52.9 pm · headline: the spiral itself, biggest and left; text gives t, r, ν, then the collapse time · graph beside · 2D. The real ~2 × 10⁵ turns are drawn as six, stated in the readout (rule 28.4).
- `sim-coulomb` · Figure 1.8.2 · coulomb-potential · flow by animation and variation: the second charge is let go and slides down the curve (outward on the repulsive curve, inward on the attractive one), so force = −slope is seen without a tangent; the choice morphs the curve through zero · arrows: kinematic (the moving charge), symbolic (the force) · moving: the charge from rest at r₀ until it leaves the graph or reaches 30 pm, with Coulomb's shape of motion in model time · choice same/opposite signs + r₀ slider 40–360 pm, default 100 · headline: the dot riding the curve above or below zero; text gives V at the live r and push apart or pull together · scene above graph · 2D. Conventions p⁺, e⁻.
- `sim-bohr-atom` · Figure 1.8.3 · bohr-model, bohr-radius · variation: n (1–5) choice; orbits n = 1–5 of hydrogen to one scale, zoomed so the picked orbit is always the same size, so picking n visibly grows or shrinks every orbit as n²; a scale bar carries the zoom; v drawn in proportion (1/n), F as notation · arrows: symbolic (v, F) · still (the zoom is the choice's morph) · headline: the picked orbit in the length hue with its electron; text gives rₙ and vₙ · none (Eₙ in the readout) · 2D. The nucleus choice (He⁺, Li²⁺) and the energy bars are cut: n is the idea, and the bars were a second figure.
- `sim-hydrogen-ladder` · Figure 1.8.4 + 1.8.6 + 1.8.7 · bohr-energy-levels, bohr-rydberg-derivation, hydrogen-spectral-series · flow by animation: the electron leaps down to n_f from each level up to 8 in turn and each photon flies to a logarithmic spectrum strip and lands as its line, in its real colour where visible · arrows: kinematic (photons), symbolic (transition arrows, still) · moving · choice n_f = Lyman … Pfund, default Lyman (Exercise 1.8.3's 4 → 1 is one of its leaps) · headline: the photon landing on the strip; text gives the leap, wavelength and region · strip below, wide · 2D. Rungs named only where they have room (1, 2, 3, ∞; the rest hover); energies only at n = 1 and the limit; the strip shows only the chosen series. Facts: `spectrum`.
- `sim-orbit-wave` · Figure 1.8.5 · standing-wave-quantization · flow by animation (accumulation) and variation: the wave goes round hydrogen's n = 3 orbit (2πr = 2992.6 pm) six laps per loop, and the bold ring is the mean of the laps that have passed each point, so it keeps its height at whole n and flattens lap by lap between; λ slider with dashed specials at 2πr/n, n = 1…8, which does not restart the loop · arrows: none (the wave's front is a dot) · moving · headline: the bold ring keeping or losing its height; text gives wavelengths per orbit and the fraction left · none (the unrolled panel is cut) · 2D.
- Exercise 1.8.2's r-vs-n plot · unnumbered image · kept as the book prints it inside the exercise's answer (it is the answer's graph), alt text rewritten.

Extra simulations: none proposed.

## Rework (rule 14, 2026-11-08)

- `sim-death-spiral`: the spiral was small beside an equal-sized graph whose curve filled a fifth of its width, with a faint preview curve, a dashed trail and a six-sentence caption.
- `sim-coulomb`: the dashed tangent was louder than the point on the curve, nothing moved although the idea is that charges move to lower V, and the caption narrated both cases.
- `sim-bohr-atom`: the n = 1 orbit was a speck at the centre with arrows piled on it, labels scattered to the corners, and the energy bars made a second figure beside it.
- `sim-hydrogen-ladder`: a column of eight labelled energies with fanned leaders dominated, the strip was thin and full of faint lines of every series, and the caption was six sentences.
- `sim-orbit-wave`: the unrolled panel repeated the ring, the faint laps read as noise, and the laps were shown all at once, so the building up and cancelling was told rather than seen.

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
