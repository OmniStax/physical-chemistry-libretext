# Plan: 12.1 The Exploitation of Symmetry Can Help Simplify Numerical Calculations (LibreTexts 13484)

Source: `source.md`; draft from `python3 tools/md2html.py 12.1` (deleted once built).
Status: built 2026-11-08 in the Chapter 12 job, without a review stop (config: the chapter in one go).

No headers at the source, four numbered displays (12.1.1)–(12.1.4), one photograph. Licence CC BY 4.0 at the
source, shared as the book's BY-NC-SA 4.0; credit Larsen, LaRue (tags).

## Sub-concepts (page headers)

1. `symmetry-and-calculation` **Symmetry and calculation** (ours, the exploration's proposal through the humanizer): the Rubik's cube and the point of the chapter. Introduces `symmetry-simplifies-calculations`.
2. `benzene-basis` **Benzene in a better basis** (ours): from "In section 10.7": (12.1.1), (12.1.2), the six combinations φ₁…φ₆, (12.1.3), the derivation, (12.1.4) and the 36 + 36 integrals. Introduces `basis-change-invariance`, `block-diagonal-determinant`; uses `secular-determinant`, `huckel-approximation`, `basis-functions`, `hamiltonian-matrix-element`, `overlap-integral`; reinforces `symmetry-simplifies-calculations`.

"section 10.7" is an `xref` link to 10.7. The book's "¹" after "Rubik's cube" has no note at the source and stays as printed.

## Figures

- Rubik's cube photograph (unnumbered) · dropped: decoration, and a "used with permission from Wikipedia" image is not shipped (precedent); `notes` says so, with the video link the text describes.

No figure of our own: the lesson is the determinant's block form, which the derivation works.

## Derivations

- (12.1.3) to the factored polynomial and the roots: printed as equations (score 6: 1 imported fact, an unprinted run of 3, 2 joins). **Built**, `benzene-block-roots`, *Derivation · benzene's roots from the block-diagonal determinant*: (12.1.3) → product of the two 1 × 1 and two 2 × 2 blocks → each 2 × 2 expanded → ¾(x + 1)², ¾(x − 1)² → the book's 9/16 (x + 2)(x − 2)(x + 1)²(x − 1)² = 0 → x = ±2, ±1, ±1 (checked numerically). It replaces the book's unnumbered display of the factored polynomial; (12.1.3) stays printed. No `drv` link to 10.7: 10.7's record proves the roots of (12.1.2) inside a node with no step the link could hang on, and a fact used by no move fails the checker.

## Exercises

- `a1` (AI, Apply, numeric): block-diagonalize butadiene's Hückel determinant with the four symmetric and antisymmetric combinations; the positive roots of the two blocks, 0.618 and 1.618 (checked: (x² + x − 1)(x² − x − 1) = x⁴ − 3x² + 1). Tests `block-diagonal-determinant`, `basis-change-invariance`.

## Corrections

Footnotes: "2p_x" for the benzene basis (it is 2p_z); (12.1.4)'s last entry "ES₆" (ES₆₆). Kept without notes: "To a fully understand", "Never the less", "this task is takes away", "an a cube", "determinnat", "the the", "bock diagonal", "(long as it span", "{φ⟩}", the 9/16 against the monic (12.1.2) (same roots).

## Wanted at chapter level

None.
