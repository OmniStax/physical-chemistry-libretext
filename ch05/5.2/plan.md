# Plan: 5.2 The Equation for a Harmonic-Oscillator Model of a Diatomic Molecule Contains the Reduced Mass of the Molecule (LibreTexts 13414)

Source: `source.md`; draft from `python3 tools/md2html.py 5.2` (deleted after the build).
Status: built 2026-11-08 in the Chapter 5 job, without a review stop.

No objectives, one figure, four numbered equations (5.2.1–5.2.4) and one unnumbered display (the
Schrödinger equation), two examples both printed "Example 5.2.1", one keyed exercise, two notes, Table
5.2.1. Licence CC BY-NC-SA 4.0; author Eugene Lee (page tag).

## Sub-concepts (page headers)

1. `opening` **Two bodies as one** (ours): μ_AB (5.2.1). Introduces `reduced-mass`.
2. `reduced-mass` **Reduced Mass** (book's): separation of the motion, Figure 5.2.1, Example 5.2.1 (proton and electron). Reinforces `reduced-mass`.
3. `the-quantum-harmonic-oscillator` **The Quantum Harmonic Oscillator** (book's): (5.2.2), the Schrödinger equation, E_v (5.2.3), ν (5.2.4), the two notes and Table 5.2.1, the second Example 5.2.1 (isotope effect). Introduces `harmonic-oscillator-schrodinger-equation`, `vibrational-quantum-number`, `oscillator-energy-levels`, `isotope-effect`.

## Figures

- `sim-two-body` · Figure 5.2.1 · reduced-mass, isotope-effect · flow by animation and variation by slider: the pair vibrates about its fixed center of mass while one particle of mass μ vibrates against a wall with the same r(t), so "two bodies move as one" is seen rather than read off three vector panels · arrows: none · moving: a whole number of vibrations per 6 s loop, about four for HCl and fewer as μ grows (in proportion to the true frequency); the swing exaggerated · sliders m₁, m₂ 1–40 amu (mass), detents at Table 5.2.1's ¹H, ²H, ³⁵Cl, ³⁷Cl, opening on the isotope example's 1.0078 and 34.9688 · headline: μ against the lighter atom · scene alone, two strips; `F.cat` colours and a three-entry legend · readout μ and ν at the book's k = 478 N/m · 2D (rule 28.1).

## Exercises

- `e1` Exercise 5.2.1 (keyed, open): the key answers H³⁵Cl and D³⁵Cl in cm⁻¹; a correction note gives the pair asked (8.628 and 8.621 × 10¹³ s⁻¹; 2878 and 2876 cm⁻¹; D³⁵Cl 2064 cm⁻¹ with the same k).

## Derivations

None qualify: the reduced mass is stated (its separation facts are never given) and E_v is "outside the scope of this text".

## Corrections

Footnotes: Table 5.2.1's ³⁵Cl mass; the second example printed under the same number; μ(H³⁵Cl) = 1.627 × 10⁻²⁷ kg and ν = 8.628 × 10¹³ s⁻¹ (the book's 1.629 and 8.6394); "0.29% bigger" (0.15%); Exercise 5.2.1's key. Left as printed: "1.0078 + 34.9688)", "the the", "dictated primary", "This require".

## Wanted at chapter level

None.
