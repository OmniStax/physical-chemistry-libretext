# Plan: 11.3 Extended Basis Sets (Double Zeta and Split-Valence) (LibreTexts 13478)

Source: `source.md` (`python3 tools/convert.py 11.3`); draft from `python3 tools/md2html.py 11.3`.
Status: built 2026-11-08 in the Chapter 11 job, without a review stop (config agreed).

No objectives, no summary, four displays (none numbered), two figures, three tables, no exercises printed.
Licence CC BY-NC-SA 4.0; credit the book's (Delmar Larsen, curator).

## Sub-concepts (page headers)

The book's four `<h2>` headers are kept, with its `<h3>` Extended Basis Set Notation inside the last.

1. `minimal-basis` **Minimal Basis**: the occupied and partly filled shells, one STO per orbital, Table 11.3.1, |ψ⟩ = Σ c_i|φ_STO(ζ_i)⟩. Introduces `minimal-basis-set`; uses `electron-configuration`, `slater-type-orbital`, `basis-functions`; reinforces `slater-orbital-exponents`.
2. `multiple-gaussian-representation` **Multiple Gaussian Representation**: orbital function, Gaussian primitives, H₂ in STO-3G, contraction and its notation (segmented, general), single zeta. Introduces `orbital-function`, `contraction-notation`, `single-zeta-basis`; reinforces `sto-ng-basis`, `primitive-gaussian`, `contracted-gaussian-function`; uses `hamiltonian-matrix-element`, `lcao-mo-method`.
3. `multiple-zeta-basis-sets` **Multiple Zeta Basis sets**: DZ and TZ, STO-3G-DZ for H₂, flexibility, Figure 11.3.1 + 11.3.2, the 2N cost and its derivation, optimizing GTOs directly. Introduces `multiple-zeta-basis`, `basis-set-flexibility`, `basis-set-cost`; uses `hamiltonian-is-hermitian`.
4. `split-valence-basis-sets` **Split-valence basis sets**: core against valence, Pople's X-YG, Table 11.3.2, N-MPG, Table 11.3.3. Introduces `split-valence-basis`, `pople-split-valence-basis`; reinforces `pople-basis-notation`; uses `contraction-notation`.

## Figures

- `sim-multiple-zeta` · Figure 11.3.1 + 11.3.2 · multiple-zeta-basis, single-zeta-basis, basis-set-flexibility · variation by choice and slider: the reader weights two or three 1s functions of different ζ and watches the orbital's radial density and mean radius swell or shrink between the sizes of its parts, which the book's two circle drawings only name · arrows: none · still: a stationary orbital has no time in it · choice basis (single, double, triple zeta; opens on double), sliders c₁, c₂, c₃ (untyped, 0–1, detents 0, 0.5, 1; shown only for the functions the basis has, none for single zeta) · headline: ⟨r⟩ and the range the functions reach · graph (4πr²ψ², 0–6 a₀) with each function alone dashed in instance colours and a legend, the normalized sum bold, ⟨r⟩ dropped to the axis; beside it a disc of radius ⟨r⟩ over a dashed ring for the single ζ = 1.24, in place of the book's circles · 2D. Exponents ours (0.80, 1.60; 0.60, 1.20, 2.00), named in `notes`. Originals shipped under the page's licence.

Extra simulations: none here (the orchestrator declined the STO-NG energy figure).

## Exercises

None printed. AI exercises (config): `a1` H₂O's orbital functions and primitives in STO-3G, 3-21G, 6-31G (7/21, 13/21, 13/30); `a2` distinct matrix elements for N = 10 single zeta and its double-zeta basis (55, 210, ratio 3.82). Both `place: end`, computed.

## Derivations

`double-zeta-cost` (score 5, at the bar; built per the orchestrator): N(N+1)/2 elements by Hermiticity (3.2), N(2N+1) for 2N functions, the ratio 2(2N+1)/(N+1) = 4 − 2/(N+1), so 3 ≤ ratio < 4. Placed after the cost paragraph, which stays as printed.

## Corrections

Footnotes: Table 11.3.1's fluorine 8.56 (8.65, as 7.3's note); "it will important"; the STO-3G display (third line is atom B, 0.44463454, normalization dropped); "Section 1.5.3.2"; "(Figure 11.3.2)" for the double zeta; "begin lose"; "for “for"; Table 11.3.2's lost header (3-21G, 6-31G, 6-311G) and `\cmidrule` residue; Table 11.3.3 scrambled (kept as printed, what it lists said, the grid unrecoverable).

## Wanted at chapter level

- variables rows for the derivation's counts, 11.3, untyped: `{"sym": "n_SZ", "meaning": "the number of distinct Hamiltonian matrix elements in a single-zeta basis", "section": "11.3"}` and `{"sym": "n_DZ", "meaning": "the number of distinct Hamiltonian matrix elements in a double-zeta basis", "section": "11.3"}`, with symbols `{"sym": "n_SZ", "latex": "n_{\\text{SZ}}"}`, `{"sym": "n_DZ", "latex": "n_{\\text{DZ}}"}`. The derivation writes them plainly and works without them.
