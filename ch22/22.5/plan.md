# Plan: 22.5 Thermodynamic Functions have Natural Variables (LibreTexts 14492)

Source: `source.md`; draft from `python3 tools/md2html.py 22.5`. Status: built 2026-11-09 in the Chapter 22 job (config agreed, no review stop). Andreana Rosnik's page; CC BY-NC-SA 4.0. Six numbered equations (22.5.1–22.5.6), one table, six exercise boxes, four references (to `notes`, superscripts kept).

## Sub-concepts (page headers)

The book's nine headers kept; the opening paragraph is a block of its own.

1. `opening` **Four equations in their natural variables** (ours): introduces `fundamental-equations`.
2. `introduction` **Introduction** (book's).
3. `first-law-of-thermodynamics` **First Law of Thermodynamics** (book's, with its `<h3>` Principle of Clausius): reinforces 19.4's `exact-and-inexact-differentials` (the bold "inexact differentials"), 21.1's `fundamental-equation-u`, 20.2's `entropy`.
4. `enthalpy` **Enthalpy**: reinforces `fundamental-equation-h`.
5. `gibbs-energy` **Gibbs Energy**: reinforces `gibbs-fundamental-equation`.
6. `helmholtz-energy` **Helmholtz Energy**: reinforces `helmholtz-fundamental-equation`.
7. `chemical-potential` **Chemical Potential**: introduces `fundamental-equations-composition`, `chemical-potential`.
8. `importance` **Importance/Relevance of Fundamental Equations**: the natural-variables table, kept.
9. `maxwell-relations` **Maxwell Relations**: introduces `helmholtz-first-derivatives`; reinforces `maxwell-relations`, `maxwell-relation-a`, `maxwell-relation-g`, `gibbs-first-derivatives`.

References: to `notes`.

## Figures

None (config: the chapter's figures are 22.2's and 22.8's).

## Exercises

- Exercise 22.5.1 (keyed, open, Evaluate): kept; its key's "second law" corrected under the card (`c-first-law`).
- Exercise 22.5.2 (keyed, open, Understand).
- The unnumbered "Exercise" (`exr:?`, key printed as the bare word "answer"): AI solution, C_V = T(∂S/∂T)_V = −T(∂²A/∂T²)_V; footnote under the card on "Equation three" (`c-equation-three`).
- 22.5.3 → 22.3, 22.5.4 → 22.4, 22.5.5 → 23.3 (left out here; said in `notes` and `exercise_notes`).

## Derivations

- `maxwell-a` (printed, its cross-derivative line wrong): "Derivation · the Maxwell relation from A", facts (∂A/∂V)_T = −P and (∂A/∂T)_V = −S (kept as printed displays above it) and the Euler relation (22.3); replaces the cross-derivative display and the printed Maxwell relation; node `note` corrects the "+".
- `maxwell-g` (the G half, hidden, "a similar treatment of dG"): "Derivation · the Maxwell relation from G", from the two printed first derivatives of G and the Euler relation; replaces the printed relation after "and another Maxwell relation".
- Deviation from the config's one record "Derivations · the Maxwell relations from A and G": two records, so each sits where the book prints its relation and the text reads on. Their facts are the first derivatives the page prints as displays, so the A record is three moves and the G record three; the G half alone is below the hidden bar, kept as the twin of the A half.
- The fundamental-equation aligns (repeats of 21.1, 22.1, 22.2) stay as printed.

## Wanted at chapter level

Variables rows (22.5), for macros the page uses with no row in force:

- `{"sym": "q", "type": "heat", "meaning": "the heat flow of the system", "section": "22.5"}`
- `{"sym": "w", "type": "work", "meaning": "the work of the system", "section": "22.5"}`
- `{"sym": "C_V", "concept": "constant-volume-heat-capacity", "meaning": "the heat capacity at constant volume", "unit": "J/K", "section": "22.5"}` (the unnumbered exercise's solution)
