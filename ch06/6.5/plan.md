# Plan: 6.5 s-orbitals are Spherically Symmetric (LibreTexts 13430)

Source: `source.md` (`python3 tools/convert.py 6.5`); draft from `python3 tools/md2html.py 6.5`.
Status: built 2026-11-08 in the Chapter 6 job, without a review stop (config: the chapter in one go).

No objectives, six numbered figures and one unnumbered image (in the shell note), five unnumbered
displays, one worked example, four exercise boxes, one note, one pulled quote, a closing Summary (to
`summary_html`). Licence CC BY-NC-SA 4.0; credit Bader and Hanson et al.

## Sub-concepts (page headers)

1. `ground-state-density` **The ground state's electron density** (ours, the exploration's proposal in
   sentence case): atomic orbitals again, ψ₁ and P₁, the two interpretations, the contour map, electron
   density distributions, the atomic unit, n² and the one spherical orbital; the detections figure.
   Introduces `electron-density-distribution`, `s-orbital-spherical`; reinforces `atomic-orbital`,
   `hydrogen-degeneracy`, `orbital-density-plots`.
2. `radial-functions` **Radial functions of the 1s and 2s orbitals** (ours): R(r) for 1s and 2s, the radial
   node, the s functions at r = 0, the radial densities. Reinforces `radial-function`, `radial-node`,
   `s-orbital-at-nucleus`, `radial-probability-density` (all 6.2's).
3. `radial-distribution-functions` **Radial Distribution Functions** (book's): the shell, the note and its
   figure, the 1s maximum at a₀, r̄, the quote, Example 6.5.1. Introduces `spherical-shell-volume`,
   `ground-state-radial-maximum`; reinforces `radial-distribution-function`.

## Figures

- `sim-1s-detections` · Figure 6.5.1 + 6.5.2 + 6.5.5 · electron-density-distribution, ground-state-radial-maximum,
  spherical-shell-volume · flow by animation and standardisation: the book's experiment "repeated a large
  number of times" is run, the detections pile up as dots that crowd the nucleus while the counts per
  shell peak at a₀, which three separate scanned graphs only assert · arrows: none · moving: 6000
  detections arrive over 6 s and the two histograms fill toward their exact curves (the experiment has a
  time in it) · slider R 0.5–4 a₀ (length), detents at the contours' 1, 2, 3, 4 au, opening on the book's
  2a₀ · headline: detections so far and the share inside R, counted and exact · graph beside: density per
  volume (P₁, 0.318 at the nucleus, the contour map's 0.32) above, charge per shell (4πr²P₁, r_max = a₀
  and r̄ = 1.5a₀ marked) below, both on one r axis, legend detections / from ψ₁² · 2D: a slice 0.5 a₀
  thick seen from above, since a sphere looks the same from every side. Conventions e⁻ (dots) and p⁺
  (nucleus). Originals withheld (Bader's greyscale scans, the precedent); the caption's 74% corrected
  through the row (76%).
- `sim-shell` · Figure (the note's unnumbered OpenStax image, kept as its original) · spherical-shell-volume ·
  variation by slider: the shell's exact volume and 4πr²Δr compared as Δr shrinks, which the book's
  volume element of a box in spherical coordinates does not show (it draws a different solid) · arrows:
  none · still · sliders r 0.5–1.5 a₀ and Δr 0.02–1 a₀ (length) · headline: the ratio of the two volumes ·
  graph beside: the ratio 1 + Δr/r + Δr²/3r² against Δr, falling to 1 · locked perspective (rule 28.2)
  painted with `F.revolve` on the canvas: two spheres with a quarter cut away toward the reader, r and Δr
  marked on the cut face.
- Figures 6.5.3, 6.5.4, 6.5.6 repeat 6.2's radial plots (orchestrator): not built; their six citations
  link by hand to 6.2's folded radial figure; `notes` says the book prints them in both sections.

## Exercises

Exercises 6.5.1–6.5.4 print Exercises 6.2.5–6.2.8 again: they are cards in 6.2 (another builder; 6.2.8's
card names 6.5.4's larger key) and are left out here; `notes` and `exercise_notes` say so. Two AI
exercises (config): `a1` r²R₁₀² is greatest at r = a₀ (number 1), tests `ground-state-radial-maximum`,
`radial-distribution-function`; `a2` the charge within a₀, 1 − 5e⁻² = 0.323, against Figure 6.5.2's 32%,
tests `electron-density-distribution`, `spherical-shell-volume`. All `place: end`.

## Derivations

- `example-6-5-1` · Example 6.5.1 · score 6 (ψ₁₀₀, the volume element, two angular integrals; integration
  by parts twice; one join) · replaces the solution from "Note the wavefunction" through the last line; the
  closing sentence (76.2%) stays printed. Note: "∫₀^2a₀" and the exponent's sign in the sixth line.

## Corrections

"ls orbital"; "the electron confined to move on a plane (Figure 6.5.2)"; the cube of side a₀ holding 6.7
charges; "4πr²Dr"; the quote's 4πr²R*R (4π too large); Figure 6.5.2's 74% (through the row); the
Summary's y_n. Not marked: "a_o".

## Wanted at chapter level

None. Library: nothing missing (the slice is painted with arcs on the canvas; the shell with `F.revolve`).
