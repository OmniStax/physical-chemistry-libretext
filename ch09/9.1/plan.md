# Plan: 9.1 The Born-Oppenheimer Approximation Simplifies the Schrödinger Equation for Molecules (LibreTexts 13451)

Source: `source.md` (`python3 tools/convert.py 9.1`); draft from `python3 tools/md2html.py 9.1`.
Status: built 2026-11-08 in the Chapter 9 job, without a review stop (config: the chapter in one go).

Two objectives (no lead-in), seven numbered displays (9.1.1–9.1.7), two numbered figures and one unnumbered
image (in Example 9.1.1), one example (an illustration with no question), four inline exercises (two keyed),
a closing Summary (to `summary_html`). Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `opening` **Quantum chemistry** (ours; the exploration's "Molecules by Quantum Mechanics" put through the
   humanizer, which asks a header to name the thing): the field, DFT and the 1998 prize, nuclei as classical
   particles. Introduces `quantum-chemistry`.
2. `the-born-oppenheimer-approximation` **The Born-Oppenheimer Approximation** (book's): the mass argument,
   Example 9.1.1 (its closing paragraph stays after the box, as printed), (9.1.1)–(9.1.7). Introduces
   `born-oppenheimer-approximation`, `molecular-hamiltonian`, `electronic-hamiltonian`,
   `electronic-schrodinger-equation`, `internuclear-distance`, `born-oppenheimer-wavefunction`,
   `crude-born-oppenheimer-approximation`, `equilibrium-bond-length`, `potential-energy-curve`,
   `nuclear-schrodinger-equation`. Reinforces `multi-electron-hamiltonian`; uses `kinetic-energy-operator`.
3. `potential-energy-curves-and-surfaces` **Potential Energy Curves and Surfaces** (book's): Figure 9.1.1, R₀,
   3N − 6, Figure 9.1.2, reaction coordinate diagrams. Introduces `potential-energy-surface`,
   `reaction-coordinate-diagram`; reinforces `potential-energy-curve`, `equilibrium-bond-length`,
   `crude-born-oppenheimer-approximation`, `harmonic-oscillator`, `morse-potential`.

## Figures

- `sim-coupled` · Figure (Example 9.1.1's image, unnumbered; original shipped with its CC BY-SA 3.0 credit) · born-oppenheimer-approximation · variation by slider and motion: the light block is seen to follow the heavy one and shiver quickly about it, which the still drawing cannot show · arrows: none · moving: the two blocks oscillate from rest (m₁ pulled out 1, m₂ 1.35), one loop 1.5 slow periods in 7 s · sliders m₁/m₂ (log, 1 to 2000, detents at equal and 1836, proton/electron) and k₂/k₁ (0.5–2, detent 1) · headline: how many times the light block swings per swing of the heavy one · scene above, both displacements against time below · 2D.
- `sim-h2-potential` · Figure 9.1.1 · potential-energy-curve, equilibrium-bond-length · variation by slider: Vₑ is drawn with its two parts, Eₑ and the nuclear repulsion, two large terms that nearly cancel into the well, which the book's single curve hides · arrows: none · still: no time in it · slider R (40–300 pm, detent at R₀ = 74 pm) · headline: Vₑ at R · graph alone, y −40 to 30 eV fixed · 2D. Data: Morse fit to H₂ (Dₑ 4.75 eV, Rₑ 74.1 pm, a from ωₑ = 4401 cm⁻¹; Huber–Herzberg via NIST), Eₑ = Vₑ − repulsion.
- `sim-water-pes` · Figure 9.1.2 (original shipped, width 447) · potential-energy-surface, reaction-coordinate-diagram · depth by orbit and variation: the surface turns, a point moves over it, and the slice through the point is drawn flat as a 1D curve, the reaction-coordinate idea · arrows: none · still · choice: slice along r or along θ; sliders r (0.08–0.155 nm, detent 0.0958) and θ (65–145°, detent 104.5°) · headline: how far the point sits above the bottom · 3D mathematical, free orbit bounded above the floor (pitch 0.12 rad to straight down: nothing to see from beneath), no buttons; the flat slice below. Model: 2Dₑ(1 − e^{−a(r − rₑ)})² + ½k_θ(θ − θ_e)² with water's constants (Dₑ 5.1 eV, a 22 nm⁻¹, k_θ 4.36 eV/rad²), capped at 6 eV.

Extra simulations: none.

## Exercises

Exercise 9.1.1 (keyed; key corrected: the minus sign of T̂_nuc's first term, m_b, R_Bi), 9.1.2 (keyed),
9.1.3 and 9.1.4 (unkeyed, AI solutions); all `place: end`. No AI exercise (config).

## Derivations

None qualify (exploration: (9.1.1)–(9.1.7) are statements, under four moves).

## Corrections

"the previous lecture" (DFT not discussed before); Exercise 9.1.1's key. The figure 9.1.1 alt text (shear
stress) goes with the replaced image. Typos left as printed.

## Wanted at chapter level

None.
