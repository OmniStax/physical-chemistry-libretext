# Plan: 9.3 The Overlap Integral (LibreTexts 13454)

Source: `source.md`; draft from `python3 tools/md2html.py 9.3`.
Status: built 2026-11-08 in the Chapter 9 job, without a review stop.

No `<h2>`; nine numbered displays (9.3.1–9.3.9), two figures, one example, one exercise (unkeyed).
Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers, both ours)

1. `opening` **Two orbitals for one electron**: the coefficients again (the book repeats 9.2's ψ± paragraph;
   kept), the energy to come. Reinforces `h2plus-lcao-orbitals`, the bonding and antibonding orbitals.
2. `normalization` **Normalization and the overlap integral**: (9.3.3), overlap integrals, the overlap and
   orthogonality paragraphs, (9.3.4), the derivation, S(R) (9.3.9), Figure 9.3.1 + 9.3.2, Example 9.3.1.
   Introduces `h2plus-normalization`, `overlap-integral-1s`; reinforces `overlap-integral`,
   `normalization-condition`, `orthogonality`.

## Figures

- `sim-overlap` · Figure 9.3.1 + 9.3.2 (placed where the book says "graphically displayed below"; both originals shipped) · overlap-integral-1s · variation by slider: the product of the two orbitals shrinks as they part, and S(R) is traced with its probe, which the book draws only at three separations · arrows: none · still: no time · slider R (0–6 a₀, detents 1, 2, 4; opens on Example 9.3.1's 2 a₀) · headline: S at R · two graphs, the axis slice above and S(R) below; the caption says the slice is one line through a 3D integral · 2D. Convention p+.

## Exercises

Exercise 9.3.1 (unkeyed, AI solution). One AI exercise (config): S, C₊ and C₋ at R = 2a₀ (0.586, 0.561, 1.10).

## Derivations

- `drv-normalized` · *Derivations · the normalized orbitals of H₂⁺* · qualifies (printed block with words) ·
  replaces "Equation 9.3.3 becomes" through (9.3.8); (9.3.3) and (9.3.4) stay printed as the facts it starts
  from. Nodes: (9.3.5), (9.3.6), (9.3.7), (9.3.8). Node note: the book's "Equations 9.3.1 and 9.3.1".
- S(R): stays (its facts appear nowhere in the book).

## Corrections

"as shown in Figures 9.3.1" (the densities are in 9.2.2); "is explained here" (no link); Example 9.3.1's
third line and its unstated R = 2a₀; "equation 9.3.12" (9.3.6).

## Wanted at chapter level

None.
