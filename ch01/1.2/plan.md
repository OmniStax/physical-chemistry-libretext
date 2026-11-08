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

- `sim-ladder` · Sim (replaces the note's unnumbered ramp-and-stairs image, kept as its original) · energy-quantization, plancks-quantum-hypothesis · variation by slider: the reader gives both balls the same energy and sees the ramp ball take it exactly while the stair ball stops at the highest whole step, and lowering ν shrinks the steps hν until the staircase passes for the ramp (the book's "illusion of continuity"), which the still image cannot show · arrows: none · still: an energy level has no time in it · E slider 0–30 × 10⁻²⁰ J, ν slider 1–10 × 10¹³ Hz · headline: E on the ramp, hν, and nhν on the stairs · scene alone, one energy axis shared by both · 2D.
- `sim-planck` · Figure 1.2.1 + 1.2.2 · plancks-distribution-law, plancks-quantum-hypothesis, ultraviolet-catastrophe · variation by slider: the reader moves T and sees Planck's curve rise and its peak move against the Rayleigh–Jeans line, which runs away at short λ; at 5777 K it lies on the Sun's measured spectrum (ASTM G173-03 AM0, 20 nm bins, scaled to the Sun's surface as ρ = 4E_λ/c · (AU/R☉)²); a probe λ reads the quantum energy hc/λ in units of k_BT, Planck's qualitative argument made visible · arrows: none · still: a spectrum at one temperature has no time in it · T slider 3000–6000 K with a dashed circle at 5777 K, λ slider 200–2500 nm with a dashed circle at λmax · headline: T, λmax, the quantum at the probe in k_BT · graph alone · 2D. Facts: the visible band (`spectrum`). Figure 1.2.1 is the image of Figure 1.1.5 and is folded here so that the 1.2 citations land on this page.
- `fig-planck-portrait` · unnumbered photograph in the Planck note · kept: the note is about Planck; caption keeps the portrait's half of the book's combined caption.
- Max Planck Society logo · dropped: decoration (config), named in `notes`.

Extra simulations: none proposed.

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
