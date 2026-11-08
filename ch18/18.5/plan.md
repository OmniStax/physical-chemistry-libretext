# Plan: 18.5 Most Molecules are Rotationally Excited at Ordinary Temperatures (LibreTexts 13695)

Source: `source.md`; draft from `python3 tools/md2html.py 18.5` (deleted after the build).
Status: built 2026-11-08 in the Chapter 18 job, without a review stop. No credit list; CC BY-NC-SA 4.0.

One numbered equation (18.5.1), one unnumbered image, one inline exercise (keyed), no header.

## Sub-concepts (page headers)

The page has no header; two blocks of the agent's (exploration's proposals, sentence case):

1. `rotational-levels` **Rotational levels and their degeneracy**: E(J), B̃, g(J) = 2J + 1, the change of variables, T ≫ Θ_rot. Introduces `rotational-partition-function`, `rotational-integral-validity`.
2. `rotational-heat-capacity` **Rotation's share of the heat capacity**: I = μr², μ, Θ_rot, ⟨ε⟩, C_v = (3/2)nR and (5/2)nR (18.5.1), the HCl chart. Introduces `rotational-temperature`, `rotational-heat-capacity-diatomic`, `heat-capacity-contributions`, `gas-heat-capacity-room-temperature`, `rotationally-excited`.

## Figures

- `fig-hcl-populations` · unnumbered image, kept (`kind: figure`, eyebrow "Figure"): measured-looking bar chart the sentence before it points at; it agrees with Θ_rot = 15.02 K at room temperature. The sentence "many rotational states will be populated" links 13.2's `sim-rovib` (figref), whose T and B̃ sliders move the peak; not rebuilt (exploration).

Extra simulations: none (config).

## Exercises

- `e1` Exercise 18.5.1 (keyed, open, the book's answer); card footnotes `c-table` ("table 18.2" is Table 18.4.1) and `c-he` (He has no rotation).
- `a1` AI: the most populated level of N₂ at 300 K from Θ_rot = 2.88 K: J = 7 (J_max = 6.72; populations 8.69, 8.76, 8.52 for J = 6, 7, 8; checked by computation).

## Derivations

None: C_v = (3/2)nR + nR is a printed two-move align (exploration: stays).

## Corrections

`c-c` (c in cm s⁻¹), `c-g` (g(J) = J(J + 1) is X), `c-theta` (hb/k is hcB̃/k), `c-nkt` (NkT is N molecules' energy); in the card `c-table`, `c-he`. The stray "n=1" after (18.5.1) is left out (named in `notes`).

## Wanted at chapter level

None.
