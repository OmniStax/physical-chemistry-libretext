# Plan: 1.6 Matter Has Wavelike Properties (LibreTexts 13386)

Source: `source.md` (`python3 tools/convert.py 1.6`); draft from `python3 tools/md2html.py 1.6`.
Status: built 2026-11-08 in the Chapter 1 job, without a review stop (the user
approved the chapter config and asked for the chapter to be built).

Three objectives, no figures, three labelled equations (1.6.1–1.6.3), one
worked example, two inline exercises (keyed), one note (the derivation), one
blockquote. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book prints no `<h2>`; root rule 3 gives four blocks:

1. `de-broglie-hypothesis` **Particles that behave as waves**: de Broglie's proposal, Equation 1.6.1, the note "Deriving the de Broglie Wavelength" (its equations are the derivation). Introduces `de-broglie-wavelength`, `wave-particle-duality`.
2. `short-wavelengths` **Short wavelengths and high energies**: the paragraph after the note and the blockquote. Reinforces `de-broglie-wavelength`.
3. `electron-waves` **Why electron waves went unnoticed**: the electron's wave too short to notice, Thomson, Davisson and Germer; the Sim; Example 1.6.1.
4. `de-broglie-thesis` **A first feeble ray of light**: the thesis and Einstein's reply.

## Figures

- `sim-de-broglie` · Sim · de-broglie-wavelength · variation by slider: the reader picks an electron, proton, neutron or baseball and moves its speed over many decades, seeing the matter wave drawn to scale over a row of atoms 0.1 nm apart, which no figure of the book shows · arrows: none · still: λ = h/mv has no time in it · particle choice (electron, proton, neutron, baseball); speed slider (velocity) over the power of ten, its value shown as the speed in m/s, range per particle, defaults the book's: electron at 1000 eV (Example 1.6.1), proton at the same speed (Exercise 1.6.2), neutron at Example 1.7.1's 0.18 nm, baseball at 44.7 m/s (Exercise 1.6.1) · headline: the wave against the atoms, biggest and central ("an electron at v has λ = 3.88 × 10⁻¹¹ m, 0.39 times the gap between atoms") · a slim log ruler below places λ among nucleus, atom, light and baseball · 2D. Atoms, ruler marks and the wave carry hover names; a wavelength under 4 pm is shaded as a band with its count of waves per 0.1 nm.

Extra simulations: none proposed.

## Rework (rule 14, 2026-11-08)

- `sim-de-broglie` before: a four-sentence caption, a particle dot and its label off to the left, a full-weight ruler with a footnote title competing with the wave, and a slider reading log₁₀(v/m s⁻¹) = 7.27 that the reader must decode. After: the wave over the atoms fills the frame, the ruler is a thin strip with four landmarks, the speed reads in m/s, the caption is two sentences.

## Exercises

- Exercise 1.6.1 (keyed: 1.3 × 10⁻³⁴ m), `number`, tests `de-broglie-wavelength`.
- Exercise 1.6.2 (keyed: the electron), `choice`, tests `de-broglie-wavelength`.

Both at the end. No AI exercises in this section (config).

## Derivations

- `de-broglie-wavelength`, the note's chain E = √(p²c² + m²c⁴) → E = pc → hν = hc/λ = pc → λ = h/p = h/mv: printed as equations with words between them, so it qualifies (rule 29.1) and replaces the note's equation block; the note's opening and closing sentences stay. Three nodes (the photon's energy, Planck's quantum equated to it, solved for λ and carried to a particle), facts: relativity's energy (1.6.2), photons massless, E = hν (1.2), ν = c/λ, p = mv, de Broglie's argument. The book's numbers stay on (1.6.2), (1.6.3), (1.6.1).

## Corrections

- Example 1.6.1 prints √(2.9 × 10⁻⁴⁰ kg² m²/s²); the product is 2.9 × 10⁻⁴⁶ (footnote `c-momentum-exponent`).

## Wanted at chapter level

None.
