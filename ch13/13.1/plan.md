# Plan: 13.1 The Electromagnetic Spectrum (LibreTexts 2398)

Source: `source.md`; draft from `python3 tools/md2html.py 13.1` (deleted once built).
Status: built 2026-11-08 in the Chapter 13 job, without a review stop (config: the chapter in one go).

Text from Harvey's Analytical Chemistry, curated by Larsen, CC BY 4.0. Two figures, one table, one
worked example, one inline exercise (unkeyed), seven unnumbered displays. No objectives, no summary.

## Sub-concepts (page headers)

1. `opening` **Spectroscopy and molecules** (ours): the opening paragraph. Uses `electromagnetic-spectrum`.
2. `electromagnetic-radiation` **Electromagnetic Radiation** (book's): wave and particle, the fields, A_t = A_e sin(2πνt + φ), the spectrum; Figures 13.1.1, 13.1.2. Introduces `electromagnetic-radiation`, `plane-polarized-radiation`, `oscillating-electric-field`, `electromagnetic-spectrum`.
3. `other-units` **Other Units** (book's): λ = c/ν, ν̃ = 1/λ, Example 13.1.1, the two classes of spectroscopy, Table 13.1.1. Introduces `wavelength-frequency-relation`, `spectroscopic-energy-exchange`.
4. `regions-and-motions` **Regions and molecular motions** (ours, the exploration's "Regions and Molecular Motions"): what each region drives, ΔE = E_u − E_l = hν, the frequency bullets. Introduces `bohr-frequency-condition`, `spectral-regions-molecular-motions`.

## Figures

- `sim-em-wave` · Figure 13.1.1 · electromagnetic-radiation, oscillating-electric-field, plane-polarized-radiation, wavelength-frequency-relation · 3D and flow by animation: the two fields travel along the axis at right angles to each other, which the still has to ask the reader to imagine · arrows: none (the field stems are values, the probe arrow is the field at one point) · moving: the wave travels steadily (endless cycle, no scrubber), one optical period per 2 s of drawing, t in fs in the readout · sliders λ (wavelength, 380–750 nm, detent Na D 589 nm), A_e (electric-field, 0.5–1.4 V/m), φ (untyped, ±π) · headline: crests λ apart pass the probe ν times a second · no graph · mathematical 3D (`F.space3d`), yaw within ±66° and pitch within ±57° of the side view so the propagation axis is never end on; no spin, no zoom; flat fallback is the library's painted view. The magnetic field is drawn as tall as the electric (directions, not sizes). Opens on 589 nm.
- `sim-em-spectrum` · Figure 13.1.2 · electromagnetic-spectrum, wavelength-frequency-relation, bohr-frequency-condition, spectral-regions-molecular-motions · variation by slider: one photon moved along a log scale, read as λ, ν, ν̃ and E at once · arrows: none · still: a spectrum has no time · slider λ (wavelength, log, 0.03 pm to 3 km, detents 589 nm and 656.3 nm) · headline: which region and which transition · strip with both scales, the regions' transitions named under them (Harvey's figure's list) · 2D. Facts: the visible band and the photon's colour (`spectrum`).
- Table 13.1.1 kept as `div.book-table`.

## Exercises

Exercise 13.1.1 (656.3 nm; unkeyed) with an AI solution: ν = 4.57 × 10¹⁴ s⁻¹, ν̃ = 1.524 × 10⁴ cm⁻¹ (computed). AI exercise `a1` (config): a 2000 cm⁻¹ photon's λ = 5.00 μm, ν = 6.00 × 10¹³ s⁻¹, E = 3.98 × 10⁻²⁰ J, infrared, vibrations (computed). Both at the end.

## Derivations

None qualify (λ = c/ν and ν̃ = 1/λ are definitions; the example substitutes numbers).

## Corrections

The stray reference mark "²" (no note printed) and the unitless frequency bullets (Hz). Typos kept without notes.

## Wanted at chapter level

None.
