# Plan: 12.13 Symmetry of Vibrations Describes their Spectroscopic Behavior (LibreTexts 433991)

Source: `source.md`; draft from `python3 tools/md2html.py 12.13`.
Status: built 2026-11-08 in the Chapter 12 job, without a review stop.

No objectives, four unnumbered images, four displays, one of them Vallance's `\tag{27.5}`,
renumbered (12.13.1) (orchestrator); the other three are unnumbered as printed. Vallance, Larsen,
LaRue; no licence tag (the book's).

## Sub-concepts (page headers)

1. `vibrational-transitions-in-molecules` **Vibrational transitions in molecules** (book's): the Morse image, the transition moment integral, the totally-symmetric rule. Introduces `symmetry-selection-rule`.
2. `infrared-spectroscopy` **Infrared Spectroscopy** (book's): μ = αE, (dμ/dq) ≠ 0, the level diagram, polarized light on water. Introduces `polarizability`, `ir-active-symmetry`.
3. `raman-scattering` **Raman Scattering** (book's): virtual states, Cartesian products, (12.13.1). Introduces `raman-scattering`, `raman-active-symmetry`.

## Figures

- `fig-morse` · Figure (unnumbered, kept) · the text points at it ("the Morse diagram above"); 5.3 builds the Morse figure, which "Morse potential" in the first sentence links to (exploration). Wikipedia, CC BY-SA 3.0, credited in notes.
- `fig-levels` · Figure (unnumbered, faithful copy, still) · the level diagram the text points at by letter (B here, C in 12.15): two electronic states, V₀ and V₁ in each, R₁–R₃ above each, transitions A, B, C, braces; no sliders, hover names for A, B, C. Original shipped.
- `sim-polarized` · Figure (unnumbered; 61177 in `originals`) · ir-active-symmetry, symmetry-selection-rule · variation by choice and flow by animation: the reader picks the polarization and sees which of water's three vibrations take up the light and which stay still, y exciting none · arrows: the light wave is kinematic (it travels in), the field arrow at the molecule oscillates; the axis gizmo is symbolic · moving: the wave arrives (1.5 s), the matching modes grow from rest (3 s), hold · choice polarization (x, y, z), opening on z (the book's first case) · headline: the polarization's species and what it excites · readout Γ(pol) and, per mode, A₁ ⊗ Γ(pol) ⊗ Γ(mode) with its product · 2D with an oblique y axis into the page; light travels along x for y and z, down along z for x · the 12.13 molecule is 12.10's (xz plane). Conventions O, H. NH₃ (12.15's 61175) is not folded in: 12.15's builder decides.
- `sim-raman` · Figure (unnumbered; 436254 in `originals`) · raman-scattering · flow by animation and variation: the photon in rises to the virtual state and the one out falls to v = 1, in their real colours, so the reader sees the colour shift equal the vibrational quantum and the virtual state follow the laser · arrows: kinematic (photons absorbed and emitted) · moving: up 1.5 s, pause, down 1.5 s, hold · slider λ_in 450–650 nm (wavelength), detents 488, 532, 633, default 532; choice vibration (water's three, NIST frequencies) · headline: λ in, the energy left, λ out · readout ν̃_out = ν̃_in − ν̃_vib with numbers, small λ_out · 2D, energy axis 0–25000 cm⁻¹. No anti-Stokes (orchestrator). Facts: spectrum.

Extra simulations: none (config).

## Exercises

One AI exercise (config): ammonia's E vibrations, IR polarization and Raman activity, a choice. Tests `ir-active-symmetry`, `raman-active-symmetry`.

## Derivations

None.

## Footnotes (corrections)

The electron "excited … within the electronic state" (a vibrational transition leaves the electrons in place); "time independent" is time-dependent; μ = αE is the induced dipole (Raman's), not IR's; E is the field, not the electronegativity; note 3 is not printed; (12.13.1)'s "sy" is xy.

## Wanted at chapter level

None.
