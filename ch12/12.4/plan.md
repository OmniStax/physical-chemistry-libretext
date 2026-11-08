# Plan: 12.4 Symmetry Operations as Matrices (LibreTexts 13487)

Source: `source.md` (`python3 tools/convert.py 12.4`); draft from `python3 tools/md2html.py 12.4` (deleted once built).
Status: built 2026-11-08 in the Chapter 12 job, without a review stop (config agreed).

One numbered figure, one unnumbered image (Example 12.4.1), five numbered displays (12.4.1–12.4.5), one table (the C₂ᵥ multiplication table, unnumbered at the source), one worked example. Claire Vallance and Jerry LaRue, CC BY 4.0.

## Sub-concepts (page headers)

The book's six `<h2>` headers are kept; the opening, which has none, gets the exploration's header:

1. `transformation-matrices` **Transformation matrices** (ours): transformation matrix, representative, matrix representation, basis, span; the vector u. Introduces `matrix-representation`.
2. `the-identity-operation` **The Identity Operation, E** (book's): (12.4.1). Introduces `symmetry-operation-matrices`.
3. `the-reflection-operation` **The Reflection Operation, σ** (book's): (12.4.2), Figure 12.4.1, σ(xz).
4. `the-n-fold-rotation-operation` **The n-fold Rotation Operation, Cₙ** (book's): Cₙ, C₂, (12.4.3)–(12.4.5).
5. `the-inversion-operation` **The Inversion operation, I** (book's).
6. `c2v-point-group` **C₂ᵥ Point Group** (book's): the multiplication table, C₂σᵥ = σᵥ′.
7. `matrix-representations-and-groups` **Matrix Representations and Groups** (book's): the four group rules in matrix form; Example 12.4.1 (allyl radical).

## Figures

- `sim-vector-ops` · Figure 12.4.1 · symmetry-operation-matrices, matrix-representation · variation by choice and motion: the reader picks an operation and sees u carried to its image with its x, y, z legs, so the one coordinate a reflection flips (or the x and y a rotation mixes) is seen, not read off a matrix; 3D shows a direction out of a plane · arrows: kinematic (u travels to its image) · moving: u slides through the plane, turns about z, or passes through the origin, one loop 2.4 s with a 1.6 s hold · select (nine options would wrap a row): E, σ(xy), σ(xz), σ(yz), C₂, C₃, C₄, C₆, i, opening on σ(xy), the book's figure · headline: what the operation does to the coordinates · readout: the matrix equation with the live entries · no graph · mathematical 3D, free orbit (pitch ±85°), no buttons (config); flat painted view without WebGL. u = (1.0, 0.5, 0.8), box ±1.2. Element in the symmetry-operation colour (plane, axis, centre), u in the length colour. Original shipped with the book's caption and width 295.
- `fig-allyl-basis` · unnumbered image in Example 12.4.1 · kept (kind `figure`, eyebrow "Figure"): the basis drawing the example reads from; the matrices are printed. A short caption of ours, since the book prints none.

Extra simulations: none (config).

## Exercises

None printed. AI exercise `a1` (config): the matrix of S₄ about z as σ(xy)C₄ and its square, a choice (C₂); checked by multiplying the matrices.

## Derivations

None qualify: the displays are definitions and one product (C₂σᵥ), printed as one line.

## Corrections

Footnotes: "the representation is then said to span the chosen basis" (the basis spans the representation); R_y (12.4.4) has the sign of the clockwise turn; Example 12.4.1's σᵥ′ images are (p₃, p₂, p₁), not (p₁, p₂, p₃). Typos ("the on that is", "following by") kept without notes.

## Wanted at chapter level

- variables 12.4 · `sigma_op` · the reflection σ in a named plane, σ(xy), σ(xz), σ(yz) · `reflection-operation` (the figure's readout writes `\ksigmaop(xy)`).
- variables 12.4 · `g_op` · a symmetry operation of the group, whose representative is Γ(g) · `symmetry-operation` (the text writes `\kgop`).
