# Plan: 17.7 Partition Functions of Indistinguishable Molecules Must Avoid Over Counting States (LibreTexts 13689)

Source: `source.md`; draft from `python3 tools/md2html.py 17.7` (deleted after the build).
Status: built 2026-11-08 in the Chapter 17 job, without a review stop. Larsen, LaRue; CC BY 4.0 at the source.

Four numbered equations (17.7.1)–(17.7.4), two figures folded into one, one note, no exercises in the book.

## Sub-concepts (page headers)

1. `two-particles` **Two particles on two levels** (agent's): (17.7.1)–(17.7.3), the folded figure. Introduces `two-particle-two-level-states`.
2. `dividing-by-n-factorial` **Dividing by N!** (agent's): from "and this is not equal", (17.7.4), the last display, the note (kept as a titled note). Introduces `n-factorial-validity`.

## Figures

- `sim-two-particle-states` · Figure 17.7.1 + 17.7.2 · two-particle-two-level-states, n-factorial-validity · variation by choice and slider, a morph: every state of two particles on M levels as an M × M grid (the red particle's level across, the blue particle's down; M = 2 is the book's four arrangements), each square a small ladder with the two particles, tinted by its Boltzmann weight; choosing "identical" drains their red and blue to ink and slides each square below the diagonal onto its mirror image; beside it three bars, q², Q (identical) and q²/2!; the book's two pictures become one state space the reader can enlarge · arrows: none · still (a morph on the choice) · choice told apart / identical; βε (untyped, 0–3, opens at 1, detents 0 and 1); levels M (2–12, opens at 2) · headline: the count of states and Q against q² and q²/2! · bars beside; their axis follows q² (a zoom: q² runs from 1 to 144 over the sliders) · 2D. The book's red and blue balls are drawn in real red and blue (facts `#d93a32`, `#2f6fdc`, chapter pass), since the text names them by colour; no referents, labels on the axes; states named by hover.

## Exercises

Two AI exercises (config): the states of two particles on three levels (9 told apart, 6 identical, q²/2! = 4.5 at high T; checked by counting); why q²/2! fails for two particles on two levels and when q^N/N! works (open).

## Derivations

None: (17.7.2) and (17.7.3) are counts the figure carries.

## Corrections

`c-large-n` (the note's "only applicable for large N": it holds when particles rarely share a state; checked for two particles on M levels). "indescernable", "exited" as printed.

## Wanted at chapter level

None.
