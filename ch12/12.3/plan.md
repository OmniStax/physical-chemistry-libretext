# Plan: 12.3 Symmetry Operations Define Groups (LibreTexts 13486)

Source: `source.md`; draft from `python3 tools/md2html.py 12.3` (deleted once built).
Status: built 2026-11-08 in the Chapter 12 job, without a review stop (config: the chapter in one go).

Two `<h2>` headers (kept), five numbered displays (12.3.1)–(12.3.5), two unnumbered images, one note.
Licence CC BY 4.0, shared as the book's BY-NC-SA 4.0; credit Vallance.

## Sub-concepts (page headers)

1. `properties-of-groups` **Properties of Groups** (book's): the definition, order h, the four criteria (12.3.1)–(12.3.4). Introduces `group`, `group-order`; uses `symmetry-operation`, `identity-operation`, `point-group`.
2. `group-multiplication` **Group Multiplication** (book's): the note "Commuting is not a Requirement", σᵥC₃ and C₃σᵥ on NH₃, Abelian, class, the C₃ᵥ table (12.3.5). Introduces `abelian-group`, `symmetry-class`, `group-multiplication-table`; reinforces `group`; uses `proper-rotation`, `reflection-operation`.

Operation symbols in the maths through the chapter's macros (`\kEop`, `\kCthree`, `\kCtwo`, `\ksigmav`, `\ksigmavp`, `\ksigmavpp`, `\ksigmaop`, `\kiop`, `\kgop`), the table (12.3.5) included; group names (C₃ᵥ) and h stay plain.

## Figures

- `sim-c3v-product` · Figure (unnumbered; originals 61156 and 61157, the book's two composition drawings) · `group-multiplication-table`, `abelian-group`, `group` · value add: motion (the operations happen; the book draws three frozen stages each) and variation (any of the 36 products, not just the book's two) · arrows: kinematic (the C₃ turn, drawn as a growing arc arrow while it happens; the H atoms slide straight through a mirror plane in a reflection) · moving: the first operation carries the numbered H atoms, then the second, then the single operation that does both is named in the headline and its cell lit in the multiplication table beside, the reverse order's cell ringed (dashed); 4.6 s and a 1.6 s hold · choices "first" and "then", six options each (E, C₃⁺, C₃⁻, σᵥ, σᵥ′, σᵥ″) · headline: "σᵥ after C₃⁺ leaves the atoms as σᵥ″ alone does." · scene left, table right · locked view (rule 28.2): NH₃ from 20° off its axis, drawn flat on the canvas with depth-sorted atoms, no WebGL. Opens on the book's first case, C₃⁺ then σᵥ (= σᵥ″; the reverse C₃⁺σᵥ = σᵥ′ ringed and in the readout's second line). The three H numbers are drawn beside their atoms although the atoms move (rule 26.7's exception: the reader must tell the three apart, as the book numbers them); mirror-plane names sit at the planes' fixed ends; hover names for atoms, planes and the lit cell. The script checks all 36 products against the book's (12.3.5) on load (they agree: σᵥ fixes site 0, σᵥ′ site 2, σᵥ″ site 1, C₃⁺ anticlockwise from above). Placed where the book's first image stood; the second image is folded in; (12.3.5) stays printed as the display (orchestrator).

## Exercises

- `a1` (AI, Apply, choice): σᵥ′(yz)σᵥ(xz) in C₂ᵥ is C₂, and the two commute (C₂ᵥ is Abelian). Tests `group`, `group-multiplication-table`, `abelian-group`.

## Derivations

None: (12.3.1)–(12.3.4) are definitions, (12.3.5) a table.

## Corrections

None. Kept without notes: "a rule for forming combinations g_j", "they elements", "C₃rotation", the unclosed parenthesis of item 2, "As we discovered in the C₃ᵥ example above" (the example follows).

## Wanted at chapter level

None.
