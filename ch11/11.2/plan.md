# Plan: 11.2 Gaussian Basis Sets (LibreTexts 13476)

Source: `source.md` (`python3 tools/convert.py 11.2`); draft from `python3 tools/md2html.py 11.2` (deleted once built).
Status: built 2026-11-08 in the Chapter 11 job, without a review stop (config: the chapter in one go).

No objectives, three numbered figures (11.2.1 in two panels), two numbered displays, one table, Example 11.2.2 (no
solution, set as an exercise), one note, a "## Summary" (to `summary_html`). LibreTexts, CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `opening` **Integrals over Slater-type orbitals** (ours; the exploration's "Why Gaussians" renamed through the
   humanizer, since a header names the thing): STOs integrate badly, GTOs well. Introduces `gaussian-integral-efficiency`.
2. `gaussian-type-orbitals-gto` **Gaussian Type Orbitals (GTO)** (book's, with its `<h3>`s Multiple Gaussian
   Representation and Basis Notation): (11.2.1), the note, the cusp, Figure 11.2.1 + 11.2.2 + 11.2.3, (11.2.2), the
   cost argument, Basis Set Exchange, the notation, Table 11.2.1, the fit Sim where Example 11.2.2 stood. Introduces
   `cartesian-gaussian-orbital`, `cartesian-function-count`, `gaussian-nuclear-cusp`, `primitive-gaussian`,
   `contracted-gaussian-function`, `sto-ng-basis`, `fitting-sto-with-gaussians`, `pople-basis-notation`.

## Figures

- `sim-sto-ng` · Figure 11.2.1 + 11.2.2 + 11.2.3 · gaussian-nuclear-cusp, sto-ng-basis, primitive-gaussian,
  contracted-gaussian-function · variation by choice: the book draws one scene three times (one Gaussian, the
  three-Gaussian sum, 1G/2G/3G against the STO); one graph shows each Gaussian added closing in on the cusp and the
  tail · arrows: none · still: a fit has no time in it · choice STO-1G, -2G, -3G (default, the book's 11.2.2), -6G ·
  headline: φ(0) of the fit against the cusp's 0.779 · H 1s STO (ζ = 1.24) in ink, the contraction in the
  wavefunction colour, its primitives dashed, a strip below of STO − fit; axes 0–4 a₀ and 0–0.8 (11.2.3's) · readout
  (11.2.2) with live d and α (rows of two terms) and the overlap · legend (3 kinds) · hover names on the primitives
  and the two values at r = 0 · 2D. Data: Hehre, Stewart and Pople (1969), exponents scaled by ζ². Originals: the
  three Kaya SVGs; 11.2.3 is a scan and is `withheld`.
- `sim-fit` · Sim (extra, config: "fit it yourself" for Example 11.2.2) · fitting-sto-with-gaussians · variation by
  slider: the reader trades the middle against the cusp · arrows: none · still · sliders C₁, C₂, C₃ (untyped, 0–2,
  opening on the example's 0.4, 0.7, 1.3), each with a dashed special at the least-squares coefficients (0.296, 0.950,
  0.981, STO-3G's own, solved in the figure) · headline: S_G(0) against S₁(0) = 2.76 · S₁ = 2ζ^{3/2}e^{−ζr} (the
  corrected form) in ink, S_G and its three terms, a miss strip · readout S_G(r) with live numbers and the normalized
  overlap · 2D.

Kept: Table 11.2.1 as printed. Not shipped: 11.2.3's scan.

## Exercises

`e1` Example 11.2.2 (source_id `ex:11.2.2`): unkeyed, AI solution (open: the values compared, the least-squares
refit, a comment), its S₁ corrected by a footnote in the prompt; tests `fitting-sto-with-gaussians`,
`gaussian-nuclear-cusp`, `contracted-gaussian-function`. AI exercises (config): `a1` Cartesian against spherical
f functions (10, 7, 3), tests `cartesian-function-count`; `a2` STO against STO-1G at the nucleus (0.779, 0.370,
0.474), tests `gaussian-nuclear-cusp`, `sto-ng-basis`. All `place: end`; values computed in Python.

## Derivations

(ℓ+1)(ℓ+2)/2: score 2, stays as printed. None built.

## Corrections

The cusp's r⁻¹/r⁻²; bse.pnl.gov moved; "a being"; Table 11.2.1 (counts per Li–Ne atom, 6-31G* and 6-31+G* with
Cartesian d, the asterisks); 11.2.2's caption "where constructed" (a `figure` row on `sim-sto-ng`); Example 11.2.2's
S₁ (in the exercise prompt).

## Wanted at chapter level

- variables rows for the 11.2 coordinates the text now writes with macros (`\ky`, `\kz`), which today fall back to
  their book-wide type:
  `{"sym": "y", "type": "length", "meaning": "the y coordinate of the electron", "section": "11.2"}` and
  `{"sym": "z", "type": "length", "meaning": "the z coordinate of the electron", "section": "11.2"}`.
