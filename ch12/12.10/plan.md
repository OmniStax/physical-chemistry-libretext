# Plan: 12.10 Molecular Motions of a Molecule can be Represented by a Reducible Reperesentation (LibreTexts 433871)

Source: `source.md` (`python3 tools/convert.py 12.10`); draft from `python3 tools/md2html.py 12.10`.
Status: built 2026-11-08 in the Chapter 12 job, without a review stop (config: the chapter in one go).

No objectives, two unnumbered images, five displays carrying Vallance's `\tag{24.1}`–`\tag{24.5}`,
renumbered (12.10.1)–(12.10.5) (orchestrator). No licence tag: the book's CC BY-NC-SA 4.0; the
text is Vallance's.

## Sub-concepts (page headers)

1. `determining-the-symmetries-of-molecular` **Determining the Symmetries of Molecular Motions** (book's, the only header): the 3N basis, its characters by three methods, the C₂ᵥ table, χ_Vib, 2A₁ + B₁. Introduces `degrees-of-freedom`, `cartesian-3n-basis`, `vibrational-representation`.

## Figures

- `sim-water-modes` · Figure (unnumbered; the 3N-basis image 61173 and the modes image 61174 folded, both in `originals`) · cartesian-3n-basis, vibrational-representation · variation by choice and flow by animation: the reader sees which atoms each operation leaves in place and, for a vibration, whether its image moves in step or against it, which the two stills only label · arrows: the x, y, z basis vectors are symbolic; the vibrations' motion is drawn as motion, no arrows · moving: the molecule oscillates (drawn frequency in proportion to the measured one); the 3N basis state is still · choice motion (3N basis, symmetric stretch, bend, asymmetric stretch), opening on the 3N basis (the book's first image and (12.10.1)) · headline: χ₃N = 9, −1, 3, 1, or which images move against the molecule and the species · the molecule above, a strip of its four images under E, C₂, σᵥ(xz), σᵥ′(yz) below, each element faint (C₂ dashed, σᵥ(xz) the page tinted, σᵥ′ edge-on), the count or character under each · 2D: every motion is in the molecular plane (rule 28.5). Mode shapes from a valence force field (f_r 8.45, f_rr −0.1 mdyn/Å, f_θ 0.76 mdyn·Å/rad²), frequencies NIST (3657, 1595, 3756 cm⁻¹), drawn 3 to 4 times the zero-point amplitude, said in the readout. Labels: operations and characters; atoms by hover. Placed where the first image stood; the second image's place keeps its sentence. Conventions O, H.

Extra simulations: none (config).

## Exercises

One AI exercise (config): CO₂'s Γ_vib through D₂ₕ, a choice (A_g + B₁u + B₂u + B₃u), checked by the reduction formula. Tests `vibrational-representation`, `cartesian-3n-basis`.

## Derivations

None: (12.10.1)–(12.10.5) are table arithmetic (exploration).

## Footnotes (corrections)

"We mentioned above" (Vallance's notes, not this book); "each atom as 3"; "Equation (15.20)" is (12.8.19); the closing "We will do this now for H₂O", which nothing follows.

## Wanted at chapter level

None.
