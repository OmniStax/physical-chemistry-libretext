# Plan: 12.8 Using Symmetry to Solve Secular Determinants (LibreTexts 13491)

Source: `source.md` (`python3 tools/convert.py 12.8`); draft from `python3 tools/md2html.py 12.8` (deleted once built).
Status: built 2026-11-08 in the Chapter 12 job, without a review stop (config agreed).

Twenty numbered displays (12.8.1–12.8.20), one unnumbered, two unnumbered images, two notes, one pulled quote. Claire Vallance's text, CC BY 4.0.

## Sub-concepts (page headers)

The book's two `<h2>` headers are kept; the opening gets the exploration's header:

1. `integrals-that-must-vanish` **Integrals that must vanish** (ours): the even-function example, invariance of an integral, the totally symmetric rule, the emphasis note. Introduces `vanishing-integral-rule`.
2. `secular-equations` **Secular Equations** (book's): (12.8.1), the non-zero determinant, homogeneous equations. Introduces `homogeneous-equations-solvable`.
3. `orbital-energies-and-coefficients` **Solving for the orbital energies and expansion coefficients** (book's): (12.8.2), the derivation of the A₁ energies, the numbers (12.8.7)–(12.8.14), the figure, the E pair (12.8.15), (12.8.17) and its derivation, the steps note with (12.8.19), (12.8.20). Introduces `two-by-two-secular-roots`, `ammonia-s-orbitals`, `reduction-formula`, `mo-construction-steps`.

## Figures

- `sim-nh3-orbitals` · Figure (the book's two unnumbered images, both shipped as originals) · ammonia-s-orbitals, two-by-two-secular-roots · 3D and standardisation: the lobes sit on a real NH₃ the reader can turn, so the in-phase and out-of-phase A₁ pair and the E pair's nodes are seen in space, with their energies on one axis · arrows: none · still: a choice of orbital, nothing has a time · choice Ψ₁…Ψ₄, opening on Ψ₁ · headline: what the orbital is (bonding, antibonding, one of the E pair) · the level ladder below, the chosen level lit, with the sign legend · physical 3D (config): NH₃ at N–H 1.012 Å, HNH 106.7°, orbit bounded above the plane of the hydrogens (pitch 0.12–1.45 rad) and ±60° about the axis, no buttons. Lobe radius 0.5√|c| Å (cross-section ∝ |c|), colour the sign (the wavefunction hue and its other tone, 10.1's rule), nuclei small in F.el colours. Numbers follow the correct mathematics (exploration): Ψ₁ = 0.6128 s_N + 0.2511(s₁ + s₂ + s₃) at −29.8336 eV, Ψ₂ = 1.6209 s_N − 0.9685(…) at +31.0342 eV, recomputed from (12.8.7); Ψ₃ = φ₃, Ψ₄ = φ₄ at −9.2892 eV. Hover names carry the coefficients.

Extra simulations: none (config).

## Exercises

None printed. AI exercise `a1` (config): is ⟨s_N|Ĥ|φ₃⟩ zero by symmetry? A choice (yes: A₁ ⊗ A₁ ⊗ E = E).

## Derivations

- (12.8.3)–(12.8.6), printed as equations: **Built** `a1-energies`, *Derivation · the energies of NH₃'s A₁ orbitals*, four nodes ending at the book's numbers (12.8.3)–(12.8.6), from (12.8.2), the zero-determinant condition, S₁₁ = S₂₂ = 1 and the quadratic formula; the 2 × 2 expansion inserted. The displays leave the text; the book's sentences stay before the host.
- (12.8.16)–(12.8.18): **Built** separately as `e-energies`, *Derivation · the energies of NH₃'s E orbitals*, ending at (12.8.18) from (12.8.16) and H₃₄ = S₃₄ = 0; (12.8.16) stays printed as its fact. The exploration proposed one record with two results; two keep the book's order, since the numbers and the A₁ figure stand between them (10.6's precedent).
- (12.8.7)–(12.8.14): substitution, never a derivation. (12.8.1): two moves, stays printed.

## Corrections

Footnotes: cos x is even and its integral diverges (an odd function integrates to zero), twice; "the previous section" is Vallance's; "Equation (21.3)", "(15.20)", "16.1" are (12.8.3), (12.8.19), (12.8.20); S₁₂ has no unit; the roots are E₊ = +31.0342 eV and E₋ = −29.8336 eV, with Ψ₁ and Ψ₂ recomputed (computed, checked against (12.8.5) and the normalization ⟨Ψ|Ψ⟩ = 1 with S₁₂).

## Wanted at chapter level

None.
