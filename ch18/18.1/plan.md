# Plan: 18.1 Translational Partition Functions of Monotonic Gases (LibreTexts 13691)

Source: `source.md`; draft from `python3 tools/md2html.py 18.1` (deleted once built).
Status: built 2026-11-08 in the Chapter 18 job, without a review stop (config: the chapter in one go).

No objectives, no headers, three numbered equations (18.1.1)–(18.1.3), one unnumbered worked example
(I₂), no figures. Credit: Tembe's IIT Bombay notes. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The page has no `<h2>`; two blocks of ours:

1. `box-states` **The sum over the states of a box**: the levels of a particle in a cube, q_trans as a sum and as the product (18.1.1), the sum replaced by an integral, then the derivation (18.1.2)–(18.1.3). Introduces `translational-levels-cubic-box`, `translational-q-product`, `sum-to-integral`, `translational-q-1d`, `thermal-wavelength`, `translational-q-volume`; reinforces 17.5's `translational-partition-function`.
2. `many-states` **Many accessible states**: "This is usually a very large number", U = (3/2)nRT, the postulate, the Sim, the I₂ example. Introduces `many-translational-states`.

(The exploration proposed "The Thermal Wavelength" for the second block; the derivation now holds Λ, so the block is named for what it keeps.)

## Figures

- `sim-thermal-wavelength` · Sim (extra simulation, config: picked) · thermal-wavelength, translational-q-volume, many-translational-states · variation by slider and choice: the reader sees Λ shrink to a speck beside the spacing d = (kT/p)^{1/3} at 1 bar, and the two lengths cross only at a few kelvin for He and H₂, which the numbers 10²⁰–10³⁰ alone do not show · arrows: none · still: a temperature has no clock · choice gas (He, H₂, N₂, Ar, I₂), slider T (log, 1–3000 K, detent 300 K), opening on the book's example (I₂, 300 K: Λ = 6.32 pm, q_trans = 3.95 × 10³⁰ in 1 L) · headline: Λ, d and their ratio · scene (nine molecules on the lattice of spacing d, each with a blur of diameter Λ, atoms not to scale, said in the hover name) beside a log-log graph of Λ and d against T · 2D. Pressure is fixed at 1 bar (a pressure slider was judged to add a knob without a new idea). Conventions: F.el He, H, N, Ar, I.

## Exercises

None printed. One AI exercise (config): argon at 298.15 K in 1 L, Λ = 16.0 pm, q_trans = 2.44 × 10²⁹, q_trans/N = 1.01 × 10⁷ at 1 bar (multi, computed).

## Derivations

- `translational-q` · Derivation · the translational partition function · printed block with words (about 10 lines) · replaces the passage from "For example:" through (18.1.3); three nodes: (18.1.2), q_x = L/Λ, (18.1.3). Facts: (18.1.1) twice, the sum as an integral, ε_x (3.9, `drv` 3.9/box3d), the lower limit, the Gaussian integral (13.7), the definition of Λ, V = L³. Notes: the missing dn_x, Λ's stray 8, q_trans's printed form.
- The I₂ example: substitution, stays.

## Corrections

Footnote `c-ten-twenty` (10²⁰ per cm³: 2.8 × 10²⁴ for H₂, 1.4 × 10²⁶ for N₂). In the derivation's notes: Λ = h/√(2π8mkT), (√(2π8mkT)/h)^{3/2}V, the integrals without dn_x. As printed: "Monotonic", "∫_o", "The via Equation"; the example's 1.0969 × 10⁻⁴⁴ is 1.0977 × 10⁻⁴⁴ by its own factors (0.07%, not footnoted).

## Wanted at chapter level

None.
