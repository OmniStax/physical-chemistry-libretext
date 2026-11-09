# Plan: 22.3 The Maxwell Relations (LibreTexts 14490)

Source: `source.md`; draft from `tools/md2html.py 22.3` (deleted). Built 2026-11-08 in the Chapter 22 job. Credit: the author tag `flemingp` only (18.9's precedent).

No objectives, eight labelled equations (22.3.1–22.3.8), Table 22.3.1, Example 22.3.1.

## Sub-concepts (page headers)

1. `first-and-second-laws` **The combined first and second laws** (ours): dq = TdS, dw, (22.3.1). Reinforces `fundamental-equation-u`.
2. `maxwell-relations` **Maxwell Relations** (book's): the two derivations, Table 22.3.1 (id `table-22-3-1`, which 22.4 links), Example 22.3.1. Introduces `internal-energy-first-derivatives`, `euler-reciprocity`, `maxwell-relations`, `maxwell-relation-u`, `enthalpy-first-derivatives`, `maxwell-relation-h`, `maxwell-relation-a`, `maxwell-relation-g`, `thermal-expansion-coefficient`, `isothermal-compressibility`, `pressure-coefficient-alpha-kappa`, `thermodynamic-equation-of-state`.

## Figures

None (the exploration judged a Maxwell-relations figure and dropped it).

## Exercises

- `e1` Exercise 22.5.3 (routed from 22.5, `source_section` 22.5), keyed "See the Maxwell Relations section."; tests `maxwell-relations`, `euler-reciprocity`.
- `a1` AI (config): (∂S/∂V)_T = nR/(V − nb) for 1.00 mol N₂ in 1.00 L = 8.65 J/(K·L); tests `maxwell-relation-a`.

## Derivations

- `maxwell-u`, printed: **built**, replacing (22.3.2)–(22.3.4), the Euler relation and the U relation; results keep (22.3.3), (22.3.4). Split from H's chain into its own record so the book's sentence on the bold "Maxwell Relation" and "A similar result…" stand between them.
- `maxwell-h`, printed: **built** (H ≡ U + pV → (22.3.5) → (22.3.7), (22.3.8) → the H relation, with the book's side remark (∂U/∂S)_V = (∂H/∂S)_p as a branch whose fact links `maxwell-u`); node notes correct (22.3.6)'s dV.
- `example-22-3-1`, printed: **built**, replacing the Solution; facts (22.3.1), the Maxwell relation from A (Table 22.3.1; the book's "Table 6.2.1" label goes with the replaced words), (∂p/∂T)_V = α/κ_T; notes on the dropped T and on the target.
- (22.3.1)'s three moves stay as printed.

## Corrections (footnotes)

`c-dw` (dw = TdS − pdV), `c-ex-target` (the example's printed target), `c-chapter-4` (DeVoe's chapter). Others as printed.

## Wanted at chapter level

- variables rows: `{"sym": "q", "section": "22.3", "concept": "heat", "meaning": "the heat exchanged in a reversible change"}`, `{"sym": "w", "section": "22.3", "concept": "work", "meaning": "the work done on the system"}` (dq, dw written plain meanwhile).
- variables rows `n_mol` and `R` for 22.3 (the AI exercise writes n and R plain).
