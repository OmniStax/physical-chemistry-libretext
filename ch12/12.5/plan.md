# Plan: 12.5 Molecules can be Represented by Reducible Representations (LibreTexts 13488)

Source: `source.md` (`python3 tools/convert.py 12.5`); draft from `python3 tools/md2html.py 12.5` (deleted once built).
Status: built 2026-11-08 in the Chapter 12 job, without a review stop (config agreed).

One unnumbered image, two numbered displays (12.5.1, 12.5.2). Jerry LaRue, CC BY 4.0.

## Sub-concepts (page headers)

The page prints no header; one block of ours (the exploration's proposal, sentence case):

1. `ammonia-s-basis` **A reducible representation of ammonia**: the (s_N, s₁, s₂, s₃) basis, the figure, (12.5.1), (12.5.2), other bases. Introduces `reducible-representation`.

## Figures

- `sim-nh3-permutation` · Figure (the book's unnumbered NH₃ drawing, shipped as the original) · reducible-representation, matrix-representation, character · motion and standardisation: the reader sees the hydrogens and their s labels carried by each operation and the 4 × 4 matrix fill in as the move lands, so each representative is read as a permutation and its trace as the count of orbitals that stay put · arrows: kinematic (the atoms move); the C₃ arrow is symbolic, in the operation's colour · moving: one loop 2.2 s, hold 1.8 s · choice E, C₃⁺, C₃⁻, σᵥ, σᵥ′, σᵥ″, opening on C₃⁺ · headline: which orbitals stay in place and χ · the matrix beside the molecule, its diagonal boxed in the character colour · locked view down the C₃ axis (config, rule 28.2: the book's viewpoint; a sequence in the plane), shaded spheres in F.el colours, 2D cost. Positions as the book draws them: s₁ top, s₂ lower left, s₃ lower right; σᵥ through H1, σᵥ′ through H3, σᵥ″ through H2; C₃⁺ counterclockwise (s₁ onto s₂'s place), checked against (12.5.1). Labels: the four orbital names ride their atoms (the lesson is that they move); plane names at the line ends; hover names for atoms, planes and the matrix.

Extra simulations: none (config).

## Exercises

None printed. AI exercise `a1` (config, reworded since the book already prints Γ(C₃⁺) and its trace): square Γ(C₃⁺) and name the result, a choice (Γ(C₃⁻)); checked by multiplying.

## Derivations

None: the matrices are written by inspection.

## Corrections

Footnote: "in the next chapter" is the next sections of this one (12.6 gives 2A₁ + E, 12.11 the method). Typos ("understand understand", "the their", the missing full stop) kept without notes.

## Wanted at chapter level

- variables 12.5 · `chi_char` · the character of the representation, the trace of Γ(g) · `character` (the figure's readout writes `\kchar`).
- variables 12.5 · `E_op`, `sigma_v`, `sigma_vp`, `sigma_vpp` · the identity and the three vertical mirror planes of C₃ᵥ (through H1, H3 and H2) · `identity-operation`, `reflection-operation` (the displays use `\kEop`, `\ksigmav`, `\ksigmavp`, `\ksigmavpp`).
- symbols · `s_1`, `s_2`, `s_3` · macros `\ksone`, `\kstwo`, `\ksthree` (wavefunction, as their variables rows say): today only `s_N` has one, so s₁–s₃ are set plain beside a coloured s_N.
