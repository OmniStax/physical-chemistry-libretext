# Plan: 12.6 Character Tables Summarize the Properties of a Point Group (LibreTexts 13489)

Source: `source.md` (`python3 tools/convert.py 12.6`); draft from `python3 tools/md2html.py 12.6` (deleted once built).
Status: built 2026-11-08 in the Chapter 12 job, without a review stop (config agreed).

Seven displays, numbered (12.6.1)–(12.6.7) in page order (Vallance's \tag{11.1}–\tag{11.5} renumbered, orchestrator), one note. Jerry LaRue, CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's three `<h2>` headers are kept; the one-sentence opening is folded into the first block (rule 3; the exploration's alternative):

1. `similarity-transforms` **Similarity Transforms** (book's): the opening sentence, (12.6.1), (12.6.2), the derivation replacing (12.6.3)–(12.6.5), the note "Characters of Representations". Introduces `similarity-transform`, `character`.
2. `character-tables` **Character Tables** (book's): the C₃ᵥ table (12.6.6) and its parts. Introduces `character-table`.
3. `characters-by-inspection` **A simple way to determine the characters of a representation** (book's): the three rules, (12.6.7), the cos θ rule. Introduces `character-shortcut`.

## Figures

None. The extra Sim offered (characters of a rotated pair of axes) was not picked (config).

## Exercises

None printed. AI exercise `a1` (config): the characters of ammonia's 3N basis under E, C₃, σᵥ by inspection, 12, 0, 2 (multi), counted atom by atom.

## Derivations

- (12.6.3)–(12.6.5), printed as equations: **Built** `similarity-transform`, *Derivation · the similarity transform*, two nodes: (12.6.4) from gx′ = x′Γ′(g) with x′ = xC, CC⁻¹ = I and gx = xΓ(g); (12.6.5) from it with C⁻¹C = I. The book's row-form lines are followed; a node note says (12.6.2) writes the column form x′ = Cx (the transpose). The displays (12.6.4), (12.6.5) are results of the derivation and leave the text; the book's sentences around them stay.
- 2 cos θ for a rotated pair: prose, 3 moves, score 2: stays.

## Corrections

Footnotes: the C₃ᵥ table's E row prints (xy, x² + y²) for (x² − y², xy); "the Appendix" (proofs) and "Appendix B" are Vallance's (the latter is the book's character-table sheet); "Section 9" is 12.4. Typos ("so position", "preformed") kept without notes.

## Wanted at chapter level

- variables 12.6 · `g_op` · a symmetry operation of the group · `symmetry-operation` (the text and the derivation write `\kgop`).
