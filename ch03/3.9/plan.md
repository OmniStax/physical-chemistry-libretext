# Plan: 3.9 A Particle in a Three-Dimensional Box (LibreTexts 13401)

Source: `source.md` (`python3 tools/convert.py 3.9`); draft from `python3 tools/md2html.py 3.9`.
Status: built 2026-11-08 in the Chapter 3 job, without a review stop (config: the chapter in one go).

Two objectives, one numbered figure (replaced), one table (kept), twelve numbered equations
(3.9.1–3.9.12, one per display, as the draft numbers them), one worked example, one inline exercise
(keyed), the References list kept as the closing block. No notes, no summary. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `separating-the-dimensions` **Separating the three dimensions** (ours, the exploration's proposal in
   sentence case): the opening, the potential, (3.9.1)–(3.9.3), the derivation, the closing sentence on the
   1D box, Figure 3.9.1. Introduces `particle-in-a-3d-box`; uses `particle-in-a-box`,
   `separation-of-variables`, `time-independent-schrodinger-equation`, `pib-energy-levels`, `pib-wavefunctions`.
2. `degeneracy-in-a-3d-cube` **Degeneracy in a 3D Cube** (book's): E₁₁₁, non-degenerate and degenerate,
   the triply degenerate first excited level, Table 3.9.1, Example 3.9.1, the level Sim. Introduces
   `degeneracy`, `degree-of-degeneracy`, `cube-degeneracy`, `accidental-degeneracy`.
3. `references` **References** (book's): five references, kept.

## Figures

- `sim-box3d` · Figure 3.9.1 · particle-in-a-3d-box, cube-degeneracy · depth and variation: the density
  fills the volume and is cut by flat nodal planes, one set per axis; the reader turns the box and sees
  that (2,1,1), (1,2,1), (1,1,2) are one cloud turned, which the book's perspective box with a ball in it
  cannot show · arrows: none · still: a stationary state's density has no time in it; a change of n morphs
  the cloud (each point slides from its old quantile to its new one along that axis) · choices nₓ, n_y,
  n_z ∈ {1, 2, 3}; sliders L_y/Lₓ and L_z/Lₓ, 0.5–2, untyped, dashed circle at 1 (the cube) · no headline
  (the readout carries E and the degeneracy) · graph none; legend of ψ > 0, ψ < 0, nodal plane beneath ·
  mathematical 3D: 3500 points sampled from |ψ|² (each axis by the inverse of the 1D box's cumulative
  probability), coloured by the sign of ψ, nodal planes faint ink, box edges ink with Lₓ, L_y, L_z;
  azimuth free, elevation −80° to +80° (no ground; z stays upright, the view never flips), no spin (the
  reader's own turn shows the trio), no zoom (no fine parts), no snap; opens at the book's viewpoint about
  20° above, on (1,1,1) in a cube, the book's E₁₁₁ = 3h²/8mL². Without WebGL: three slices through the
  first lobe as heatmaps on one diverging scale. The box keeps its volume L³ as it stretches (both
  figures), so energies read in the book's units h²/8mL². Facts: the sign of ψ as one diverging scale,
  #c2413a above zero and #2f6ab3 below (2.5's drum colours). Points are drawn with `F.space.points`, one
  instanced cloud per sign; the layer is rebuilt only when the state, shape or colours change.
- `sim-split` · Sim · degeneracy, cube-degeneracy, accidental-degeneracy · variation by slider: the
  degenerate rungs of Table 3.9.1 come apart as the box stops being a cube and meet again at the cube or
  by accident at L_y = 2Lₓ (Example 3.9.1), which the table, printed for the cube only, cannot show ·
  arrows: none · still: nothing in the idea has a time; landing on a special slides merging rungs side by
  side (a 0.6 s tween) · sliders L_y/Lₓ (circles at 1 and 2) and L_z/Lₓ (circle at 1), untyped · headline:
  how many levels hold the states below 21.5 h²/8mL² · graph alone: every state a rung at its energy, in
  a fixed slot (its place in its cube level), degree written beside each shared level; hover names give
  the state and its energy · 2D.

The book's Table 3.9.1 is kept as a `div.book-table`.

## Exercises

Exercise 3.9.1 (keyed: 17h²/8mL², three-fold), kind `exercise`, multi answer, at the end, tests
`cube-degeneracy` and `degree-of-degeneracy`. No AI exercises in this section (config).

## Derivations

- `box3d` · Derivations · the particle in a three-dimensional box · printed block, score 3 (3.5's
  solution and energies imported, separation of variables) · replaces the block from "Now substitute
  Equation 3.9.3 …" to (3.9.12); eleven nodes ending in (3.9.11) ψ and (3.9.12) E. Notes: the division
  by XYZ (the book says "the xyz product"); the book's (3.9.6), an ≈ between the X equation and the wave
  equation, kept as a note on the X node; "the de Broglie Energy equation" for the 1D box's energy.
- Example 3.9.1: kept as printed (score 0).

## Corrections

The impossible range Lₓ < x < 0 (and y, z); r⃗ = Lₓx̂ + … for the position; "Lₓ = L_y = L" for a cube
(here and in Table 3.9.1's caption, one note); "(Equation 3.9.11)" for the energy, 3.9.12. Not marked:
"higher dimensions", "Schrondinger", "MAY has", "called as", the key's unclosed parenthesis (typos).

## Wanted at chapter level

- A variables row for the box's volume, which the text, the derivation and (3.9.11) write as a plain V
  because the section's `V` row is the potential energy:
  `{"section": "3.9", "sym": "V_box", "meaning": "the volume of the box, LₓL_yL_z", "concept": null, "redefines": true}`
  with symbol `V_box` (latex `V`, no macro, untyped).
