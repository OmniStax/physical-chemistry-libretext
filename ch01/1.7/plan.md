# Plan: 1.7 de Broglie Waves can be Experimentally Observed (LibreTexts 13387)

Source: `source.md` (`python3 tools/convert.py 1.7`); draft from `python3 tools/md2html.py 1.7`.
Status: built 2026-11-08 in the Chapter 1 job, without a review stop (the user
approved the chapter config and asked for the chapter to be built).

One objective, four numbered figures, no labelled equations, one worked
example, one note, two blockquotes, no exercises in the book. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's three `<h2>` headers are kept; the opening, which has none, is a block of its own:

1. `matter-diffraction` **Diffraction as the evidence of waves**: Thomson, Davisson and Germer; diffraction needs a wavelength comparable to the spacing. Introduces `matter-wave-diffraction`, `interference-and-diffraction`.
2. `light-diffraction` **Diffraction of Light (Light as a Wave)** (book's): Young's double slit, Figures 1.7.1 and 1.7.2. Reinforces `interference-and-diffraction`.
3. `electron-diffraction` **Diffraction of Electrons (Electrons as Waves)** (book's): Figure 1.7.3, the electron microscope, Figure 1.7.4, the note. Reinforces `matter-wave-diffraction`, `wave-particle-duality`.
4. `neutron-diffraction` **Neutron Diffraction (Neutrons as Waves)** (book's): Example 1.7.1.

## Figures

- `sim-double-slit` · Figure 1.7.1 + 1.7.2 + 1.7.3 · interference-and-diffraction, matter-wave-diffraction, de-broglie-wavelength · flow by animation and variation by choice and slider: the book's three panels become one view with a choice, waves (1.7.1, 1.7.2c's oscillating curve, 1.7.3 right) or classical particles (1.7.3 left), for light, electrons or neutrons · arrows: kinematic in 1.7.1 (the waves travel) · moving: the waves, or the particles in straight lines, travel and the hits pile up over a 6 s loop · beam select (light, electrons, neutrons; a dropdown because the row wrapped); choice as (waves, classical particles); λ slider (light, 380–700 nm) or speed slider over the power of ten shown in m/s (particles); d fixed at the book's value per beam (the picture depends on λ/d alone) · headline: the hits on the screen, biggest and coloured, piling into bright bands as waves or into one band behind each slit as particles; the line states λ, d, λ/d and the band count · intensity curve beside the screen · 2D. Drawn to scale with d = 120 units. Defaults: light 550 nm, d 2.00 μm; electrons of Example 1.6.1 (38.8 pm), d 0.150 nm; neutrons of Example 1.7.1 (181 pm), d 0.600 nm. Facts: the light's spectral colour; conventions `e-`, `n0` for the hits and particles. Slits, hits, beam and curve carry hover names.
- `fig-1-7-4` · Figure 1.7.4 · photo, kept: the text points at it ("(Figure 1.7.4)").

Extra simulations: none proposed.

## Rework (rule 14, 2026-11-08)

- `sim-double-slit` before: a six-sentence caption; dense circular waves, the hits, a two-curve intensity graph with its own labels and a d slider all at one weight, so the bands on the screen did not lead; the dashed classical sum barely read. After: the classical case is a choice that redraws the beam as particles in straight lines and the hits as two bands; one solid intensity curve; the waves are fainter so the hits lead; d is fixed per beam; the caption is two sentences.

## Exercises

None in the book. Two AI exercises (config), both `generated_by: "ai"`, at the end:

- `a1` (source_id "Davisson and L. H. Germer in 1927"): the de Broglie wavelength of 54 eV electrons, 167 pm, against nickel's 215 pm spacing. Tests `de-broglie-wavelength`, `matter-wave-diffraction`.
- `a2` (source_id "selected properly by their speed"): the speed (1582 m/s) and kinetic energy (2.10 × 10⁻²¹ J) of neutrons of wavelength 0.25 nm. Tests the same two.

Both checked by computation (h = 6.626 × 10⁻³⁴ J s, mₑ = 9.109 × 10⁻³¹ kg, mₙ = 1.6749 × 10⁻²⁷ kg).

## Derivations

None qualify: Example 1.7.1 substitutes numbers into λ = h/p and KE = p²/2m.

## Corrections

- The book cites "Figure 1.7.0c" for the interference bands; it means Figure 1.7.2c (footnote `c-figure-number`). The check's warning that Figure 1.7.0 matches no row is this slip, kept as printed.

## Wanted at chapter level

None.
