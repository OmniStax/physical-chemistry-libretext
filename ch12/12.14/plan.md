# Plan: 12.14 Symmetry Adapted Linear Combinations are the Sum over all Basis functions (LibreTexts 433984)

Source: `source.md`; draft from `python3 tools/md2html.py 12.14` (deleted). Status: built 2026-11-08 in the
Chapter 12 job (config agreed, no per-section stop). Licence CC BY 4.0 at the source (Larsen, LaRue; a ChemWiki
student module). Eight numbered displays (12.14.1–12.14.8), five worked examples (12.14.1, 12.14.2 and the printed
"2", "4", "3"), thirteen numbered figures, three problems with keys.

## Sub-concepts (page headers)

The book's headers are kept; its opening has none, and "References" and "Solutions to Practice Problems" are
apparatus (references to `notes`, solutions to the cards).

1. `salcs` **Symmetry adapted linear combinations** (ours): SALC defined, (12.14.1), the two methods. Introduces `salc`.
2. `background` **Background**: Tables 12.14.1, 12.14.2, the reduction formula (12.14.2), 3N − 6.
3. `constructing-salcs` **Constructing SALCs** (h3 Method 1, h4 Normalization, h3 Method 2; Example 12.14.1 with the
   projection figure and Tables 12.14.3, 12.14.4 rebuilt from the book's images). Introduces `salc-normalization`, `projection-operator`.
4. `interpreting-salcs` **Interpreting SALCs**: (12.14.8), Example 12.14.2 (difluorobenzenes). Introduces `stretching-salcs`.
5. `applications` **Applications**: LCAOs, Figure 12.14.10, the printed examples "2" (CBr₂H₂, Table 7 moved inside its box),
   "4" (PtCl₄), "3" (PF₂H₃).

## Figures

- `sim-projection` · Figure 12.14.1 + 12.14.2 + 12.14.3 + 12.14.4 · projection-operator, stretching-salcs · variation (the species) and flow (each operation carries b₁ to its image) · arrows: the stretch vectors are notation, but the operations are motions · moving: each of E, C₂, σᵥ(xz), σᵥ′(yz) carries b₁ in turn (a turn squeezes through zero width, a reflection slides through the plane), the character then signs the image, and the fifth panel draws the sum on the bonds · choice: A₁, A₂, B₁, B₂ (opens on A₁, the book's first row) · headline: what the species does to the four terms · no graph · 2D (water in the yz plane of Table 12.14.2; the molecule's plane is the page). Readout: φ = Σ χ(j) T_j b₁ with the live terms, normalized form as the small line.
- `fig-12-14-5`, `fig-12-14-6`, `fig-12-14-11`, `fig-12-14-12`, `fig-12-14-13` · kept as the book's sketches (the examples read their labels; no motion helps). Exploration said faithful copies; kept as images instead (lowest tier, 1.1's precedent for a sketch with nothing that varies); alt texts rewritten, since the source's are wrong.
- `fig-12-14-10` · kept: the LCAO picture the text points at ("shown below with red dotted lines"). 12.15's MO figure covers the same orbitals.
- Dropped: 12.14.7, 12.14.8 (Sigma-Aldrich spectra, no licence; notes name them), 12.14.9 (empty axes), the images of Tables 12.14.3/12.14.4 (set as tables).

## Exercises

Problems 1–3, kind `question`, keyed by the page's own solutions (maths delimiters restored), place end; problem 3's
BeH₂ image as the card's figure, its key image as the solution. No AI exercises (config).

## Derivations

None: the normalization and the projection sums are substitutions.

## Corrections (footnotes)

Cut-off sentence; X for χ; B₁ for B₂ (12.14.4 and its normalized form; "resulting A₁ and B₁"; the fold's image, as a
figure note); 12.14.5's four b₁ labels; ortho normalization 1/2; "ortho has only two"; p_x "degenerate"; C₄ "spherically
symmetrical"; PF₂H₃'s central carbon; Table 12.14.12's C₂ᵥ columns; PF₂H₃'s normalized A′ forms. `\frac{1}{sqrt{3}}`
typeset with its backslash.

## Wanted at chapter level

None.
