# Plan: 2.3 Oscillatory Solutions to Differential Equations (LibreTexts 13377)

Source: `source.md` (`python3 tools/convert.py 2.3`); draft from `python3 tools/md2html.py 2.3`.
Status: built 2026-11-08 in the Chapter 2 job, without a review stop (config: the chapter in one go).

Three objectives, one figure, ten numbered equations (2.3.1–2.3.10), one worked example, one inline
exercise (held for 2.4). Licence CC BY-NC-SA 4.0. Author (page tags): Michael Fowler.

## Sub-concepts (page headers)

The page prints no `<h2>`; two blocks of ours.

1. `negative-constant` **A negative separation constant**: the boundary conditions, Figure 2.3.1, K < 0, K = −p² (2.3.1), the oscillatory equation (2.3.2) and its exponential solution (2.3.3). Introduces `oscillatory-solutions`.
2. `quantization` **Quantization by boundary conditions**: Example 2.3.1, the section's whole argument (derivation, 2.3.4–2.3.10), and the book's closing lines X = c₂ sin(nπx/L). Introduces `eulers-formula`, `quantization-by-boundary-conditions`.

## Figures

- `sim-shooting` · Figure 2.3.1 · oscillatory-solutions, quantization-by-boundary-conditions, trivial-solution · variation by slider: from X(0) = 0 the reader turns K across zero; for K > 0 the curve only grows, at K = 0 it is a line, for K < 0 it is c₂ sin(px), and the far end lands on zero only at p = nπ/L, which the book's GIF of finished modes never shows failing · arrows: none · still: no time in the idea · K slider −100 to 20 m⁻², default −25 (a miss), dashed specials at −(nπ)² for n = 1–3 with a snap; landing grows the nodes in and fills the target ring (tween) · headline: K, pL/π and whether the far end lands; the point is the curve missing or meeting the ring at x = L · a p strip below with the rungs nπ/L and the live p · 2D. Each curve is drawn scaled to its largest value on [0, L] so the shape is continuous through K = 0; L = 1 m (the book gives no numbers). The book's GIF (Wikipedia, as 2.1.5) is in `originals`.

Extra simulations: none proposed.

## Exercises

Exercise 2.3.1 is printed here and tests superposition, introduced in 2.4: held for 2.4 (root rule 12), named in `notes` and `exercise_notes`. No AI exercises here (config).

## Derivations

- `example-2-3-1` (score 5): *Example 2.3.1 ·*, replaces the example's solution from Euler's expansion to (2.3.10); seven nodes, results (2.3.4)–(2.3.10). The Euler sentence before it is kept (it introduces the concept), and the book's last three lines after (2.3.10) stay as printed with the ω correction.

## Corrections

Footnotes: "Equation 2.2.7" for (2.2.9); "Equation 2.2.5" for (2.2.9); "Equation 2.2.4b" for (2.2.8); ω for p in the closing lines. In derivation notes: the boundary conditions cited as 2.2.7 (they are 2.2.10–2.2.11); "Equation 2.3.7 simplifies" for 2.3.8.

## Wanted at chapter level

None.
