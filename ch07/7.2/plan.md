# Plan: 7.2 Linear Variational Method and the Secular Determinant (LibreTexts 13435)

Source: `source.md`; draft from `python3 tools/md2html.py 7.2` (deleted).
Status: built 2026-11-08 in the Chapter 7 job, without a review stop (config: the chapter in one go).

Four objectives, two numbered figures, fifteen numbered displays, two worked examples, five notes, no
exercises. Licence CC BY-NC-SA 4.0; credit Claire Vallance (tag).

## Sub-concepts (page headers)

1. `opening` **Linear variation functions** (ours, the exploration's proposal through the humanizer): (7.2.1), (7.2.2), the basis-function note, then (7.2.3)–(7.2.8) as a derivation, the orthonormality note. Introduces `linear-variation-function`, `basis-functions`, `hamiltonian-matrix-element`, `linear-variational-energy`.
2. `minimizing` **Minimizing the Variational Energy** (book's): Figure 7.2.1, (7.2.9)–(7.2.12) and (7.2.14) as a derivation, the Hermitian note, the bracketing theorem, Figure 7.2.2. Introduces `secular-equations`, `bracketing-theorem`.
3. `secular-determinant` **The Secular Determinant** (book's): (7.2.15), the two determinant notes, Example 7.2.1 (its Solution a derivation), Example 7.2.2. Introduces `determinant`, `secular-determinant`, `characteristic-equation`, `linear-variational-method`, `lcao-approximation`, `slater-type-orbital`, `gaussian-type-orbital`.

## Figures

- `sim-landscape` · Figure 7.2.1 · secular-determinant, secular-equations, linear-variational-energy · variation by slider: two orthonormal functions mixed at angle θ (a₁ = cos θ, a₂ = sin θ); E_trial(θ) is one sinusoid whose lowest point is the lower secular root, beside a ladder of H₁₁, H₂₂ and the roots E₋, E₊ pushing apart as the coupling grows; the book's sketch shows a landscape with no numbers · arrows: none (dashed connectors pair each H with its root, symbolic) · still · sliders H₁₂ −0.5–0 (energy, special at 0), H₂₂ − H₁₁ 0–1 (energy, special at 0), θ −90–90° (special at the minimum); opens on H₁₁ = −1.0, H₂₂ = −0.5, H₁₂ = −0.2 Eₕ and θ = 0 · headline: the trial energy and where the lowest lies · ladder beside on the same energy axis · 2D. Caption corrected through the row (false dips). Original shipped.
- `fig-7-2-2` · Figure 7.2.2 · linear-variational-method · faithful copy (archetype 7), kind `figure`, still: the six numbered steps, the four whose wording differs from Figure 7.1.2 shaded, with a legend · standardisation only. Original shipped (no credit; no width printed).

## Exercises

The book prints none. Two AI exercises (config): `a1` an orthonormal 2 × 2 secular problem (roots −1.070 and −0.430 Eₕ, a₁ = 0.944, a₂ = 0.331), tests secular-determinant, secular-equations, linear-variational-method; `a2` the characteristic equation with S₁₂ = 0.25 (roots −0.72 and −0.133 Eₕ), tests characteristic-equation, secular-determinant. All `place: end`.

## Derivations

- `linear-energy` · (7.2.3)–(7.2.8) · equations with words, qualifies · built, five nodes ending at (7.2.8); the fact E_trial cites 7.1's (7.1.7).
- `secular` · (7.2.9)–(7.2.12), (7.2.14) · qualifies · built, five nodes; notes: real coefficients and functions for (7.2.10)–(7.2.11), (7.2.14)'s index.
- `example-7-2-1` · Example 7.2.1's Solution · wrong as printed · built following the correct mathematics, stopping at the characteristic equation (orchestrator), with the printed secular equation as a second node; note on the printed numerator.
- (7.2.15) stays (prose, score 2).

## Corrections

"eigenvalues" for eigenfunctions; the Hermitian condition without its conjugate; the converse claim about real eigenvalues; "eigenvectors {C_ij}"; "(Example 7.2.1)" twice for Equation 7.2.1; the orthonormal (7.2.14) before the general (7.2.15); "c_i ≠ 0 for all i"; "Lennard and Jones"; "W.R. Ditchfield" and "J. Chem. Phys. Rev."; Figure 7.2.1's false dips (through the row). The en dash of (7.2.15) is set as a minus; typos ("the the", "rewriten", "ψ_trail", "determinate") left as printed; Example 7.2.1's f_n left as printed.

## Wanted at chapter level

Form anchors (optional): `linear-trial-ket`, `linear-trial-bra` → `7.2-opening`; `secular-equations`, `secular-eigenvalue-form` → `7.2-minimizing`; `secular-determinant`, `determinant-2x2`, `determinant-3x3` → `7.2-secular-determinant`.
