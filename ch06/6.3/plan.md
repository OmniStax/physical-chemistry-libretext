# Plan: 6.3 The Three Components of Angular Momentum Cannot be Measured Simultaneously with Arbitrary Precision (LibreTexts 13428)

Source: `source.md` (`python3 tools/convert.py 6.3`); draft from `python3 tools/md2html.py 6.3`.
Status: built 2026-11-08 in the Chapter 6 job, without a review stop (config: the chapter in one go).

Three objectives (no lead-in), one numbered figure in two panels (replaced), twelve numbered equations
(6.3.1–6.3.12, one per display, as the draft numbers them), one worked example, two notes (Warning; The
Meaning of Commutation of Two Operators), one pulled quote, a closing Summary (to `summary_html`). No
exercise box. Licence CC BY-NC-SA 4.0; credit Richard Fitzpatrick.

## Sub-concepts (page headers)

1. `angular-momentum-operators` **Angular momentum operators** (ours, the exploration's proposal in sentence
   case): L = r × p and its components, the Cartesian operators (6.3.1)–(6.3.3), the spherical forms (L̂_x,
   L̂_y kept printed, L̂_z by the derivation), L̂² (6.3.4), the eigenvalue problem (6.3.5), ψ = RY (6.3.6).
   Introduces `orbital-angular-momentum`, `angular-momentum-component-operators`; reinforces
   `angular-momentum-squared-operator`; uses `angular-momentum`, `spherical-coordinates`, `eigenvalue-equation`.
2. `quantized-angular-momentum` **Quantized angular momentum** (ours): "By definition", (6.3.7), (6.3.8), the
   Warning, (6.3.9), the two names. Introduces `angular-momentum-magnitude`, `lz-quantization`; reinforces
   `angular-momentum-eigenvalues`.
3. `simultaneous-measurements` **Simultaneous Measurements** (book's): commuting, the canonical commutators,
   the [L̂_x, L̂_y] derivation, (6.3.10)–(6.3.12), the quote, Example 6.3.1, Figure 6.3.1, the note.
   Introduces `angular-momentum-commutation-relations`, `vector-model`; reinforces `commuting-operators`,
   `angular-momentum-commutation` (4.6; Example 6.3.1's result).

## Figures

- `sim-vector-model` · Figure 6.3.1 · vector-model, angular-momentum-magnitude, lz-quantization · depth and
  variation: the cones, the sphere of radius |L| and the rings at L_z = m_lħ turn in space, and the azimuth
  slider moves one vector round its cone so the reader sees L_x and L_y change while |L| and L_z do not,
  which the book's two flat panels cannot show · arrows: symbolic (the vector L) · still: in an eigenstate
  nothing precesses; the cone is the set of equally possible vectors (orchestrator) · choices l ∈ {1, 2, 3}
  (opening on the book's right panel, 2) and m_l ∈ {−l…l} (opening on +1); slider φ, 0–360° (angle) · no
  headline (the readout carries the numbers) · graph none · mathematical 3D, free orbit, pitch ±80° so z
  stays upright, no spin (the reader's own turn shows the cone), no zoom (no fine parts), flat fallback from
  the opening view. One scale in ħ for every l (box ±3.6), so l = 1 is drawn small as it is. Labels: z, x,
  y and L only; rings, cone, drop line and angle carry hover names (seven ring labels at l = 3 would crowd).
  The readout writes |L|, L_z, L_x² + L_y² (fixed; the two parts are not) and cos θ.

Extra simulations: none (config: the 6.3 rotations are not built).

## Exercises

None printed. Three AI exercises (config): `a1` the l = 2 vector model (|L| = 2.449ħ, angles 35.26° and
65.91°), tests `angular-momentum-magnitude`, `lz-quantization`, `vector-model`; `a2` [L̂_y, L̂_z] = iħL̂_x from
the canonical commutators, tests `angular-momentum-commutation-relations`, `angular-momentum-component-operators`;
`a3` L̂_z on Y₁^{+1}, Y₁⁰, Y₁^{−1} (+1, 0, −1 in ħ), tests `lz-quantization`, `angular-momentum-component-operators`.
All `place: end`.

## Derivations

- `lz-spherical` · Derivation · the z component operator in spherical coordinates · score 8 (chain rule,
  the spherical coordinates; five unprinted moves; one join) · replaces the L̂_z line of the book's
  spherical align; the L̂_x and L̂_y lines stay printed above it (their inverse derivatives are never stated).
- `lx-ly-commutator` · Derivation · the commutator of the x and y components · score 6 · replaces the
  align after "Consider the commutator"; ends at iħL̂_z, the result the next display numbers (6.3.10), so
  the node carries no number of its own. Note: the book's "L̂_x and L̂_z".
- `example-6-3-1` · Example 6.3.1 · score 6 · replaces the solution up to "One can also show similarly",
  which stays printed; note on the garbled lines ("[L̂_y, L̂_x] = L̂_y + …", "Lz", "ih").

## Corrections

"amplitude" (magnitude); (6.3.9) L_z … m ħ (L̂_z, m_l ħ); "the commutator of L̂_x and L̂_z" (L̂_y); the
note's "eigenvalues (|ψ⟩)" (eigenfunctions); the Summary's m_l list. Not marked (typos that do not mislead):
"These can be transforming", "capable of assume", "would unknown", "can drawn", "we do no need",
"eignevalue"; (6.3.7) and the Summary's L² without a hat. The note's "commutes with L̂" is true (the
Hamiltonian of a central potential commutes with every component) and is not corrected, unlike the
exploration's list.

## Wanted at chapter level

None.
