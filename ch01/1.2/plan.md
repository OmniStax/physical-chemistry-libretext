# Plan: 1.2 Quantum Hypothesis Used for Blackbody Radiation Law (LibreTexts 13382)

Source: `source.md` (`python3 tools/convert.py 1.2`); draft from `python3 tools/md2html.py 1.2`.
Status: built 2026-11-08 in the Chapter 1 job, without a review stop (the user
approved the chapter config and asked for the chapter to be built).

One objective, two numbered figures and three unnumbered images, four
numbered equations (1.2.1–1.2.4; 1.2.4 is MathJax's number for the B_λ line,
`n=4` in source.md), one inline exercise (unkeyed), three notes, a closing
Summary. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's one `<h2>` (Quantizing Electrons in the Radiator) is kept whole; the
opening, which has none, is a block of its own:

1. `classical-failure` **Phenomena classical physics could not explain**: the orderly classical universe, the blackbody spectrum and the ultraviolet catastrophe (Figure 1.2.1 cited). Uses `blackbody`, `rayleigh-jeans-law`; reinforces `ultraviolet-catastrophe`.
2. `quantizing-electrons` **Quantizing Electrons in the Radiator** (book's): quantization and its note, E = hν (1.2.1), Planck's constant, Planck's law (1.2.2–1.2.4), the Planck note, E = nhν. Introduces `energy-quantization`, `plancks-quantum-hypothesis`, `plancks-constant`, `plancks-distribution-law`.

## Figures

- `sim-ladder` · Sim (replaces the note's unnumbered ramp-and-stairs image, kept as its original) · energy-quantization, plancks-quantum-hypothesis · flow by animation and variation by slider: energy is fed to both balls at one steady rate; the ramp ball rolls up with the rising energy line while the stair ball waits on its tread and hops one step each time the energy reaches the next whole hν, so the gap and the jumps show quantization; lowering ν turns the hops into a near-smooth climb (the book's "illusion of continuity") · arrows: none (the balls move themselves) · moving: the energy given rises 0 to E over 4.5 s, then holds; cycle and transport · E slider 0–30 × 10⁻²⁰ J, ν slider 1–10 × 10¹³ Hz, both restart the run · headline: the live energy on the ramp and nhν on the stairs; the point is the stair ball below the energy line · scene alone, one energy axis shared; the n label on the moving ball cut (in headline and readout, hover name) · 2D.
- `sim-planck` · Figure 1.2.1 + 1.2.2 · plancks-distribution-law, plancks-quantum-hypothesis, ultraviolet-catastrophe · variation by slider: the reader moves T and at 5777 K Planck's curve lands on the Sun's measured spectrum (ASTM G173-03 AM0, 20 nm bins, scaled to the Sun's surface as ρ = 4E_λ/c · (AU/R☉)²); a scale along the top gives one quantum hc/λ in units of k_BT, and the peak's drop line always meets it near 5, Planck's argument made visible without a probe · arrows: none · still: a spectrum at one temperature has no time in it · T slider 3000–6000 K with a dashed circle at 5777 K (the probe λ slider is cut) · headline: T and λmax, and "on top of the Sun's measured spectrum" at 5777 K · graph alone, y 0–16; Rayleigh–Jeans thin, dashed, muted · 2D. Facts: the visible band (`spectrum`). Figure 1.2.1 is the image of Figure 1.1.5 and is folded here so that the 1.2 citations land on this page.
- `fig-planck-portrait` · unnumbered photograph in the Planck note · kept: the note is about Planck; caption keeps the portrait's half of the book's combined caption.
- Max Planck Society logo · dropped: decoration (config), named in `notes`.

Extra simulations: none proposed.

## Rework (rule 14, 2026-11-08)

- `sim-ladder` critique: the balls never moved, so "only whole steps" was told by a dashed line and an n label instead of shown; the caption was four sentences.
- `sim-planck` critique: two sliders and a two-line headline split the eye between the Sun fit and the probe; the dashed Rayleigh–Jeans curve was as loud as Planck's; the caption was six sentences.

## Exercises

- Exercise 1.2.1 (unkeyed, units argument), kind `exercise`, AI solution (`open`), tests `plancks-distribution-law`.
- `a1` (new, AI): λmax of a 5777 K blackbody from λmax = hc/4.965kT, 502 nm.
- `a2` (new, AI): the factor by which ρ(400 nm) grows from 3000 K to 6000 K, 405, against Rayleigh–Jeans' 2.

## Derivations

None: Planck's distribution is stated, not derived (its derivation is Appendix 33.1).

## Corrections

- `c-radiance`: the printed dB_ν = ρ_ν dν should be (c/4π)ρ_ν dν.
- `c-figure-number`: "Figure 1.2.3" does not exist; Figure 1.2.2 is meant. (The check warns that 1.2.3 stays plain text; that is the book's citation as printed.)

## Wanted at chapter level

None.
