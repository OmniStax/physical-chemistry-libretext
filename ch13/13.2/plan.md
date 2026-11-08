# Plan: 13.2 Rotations Accompany Vibrational Transitions (LibreTexts 2402)

Source: `source.md`; draft from `python3 tools/md2html.py 13.2` (deleted once built).
Status: built 2026-11-08 in the Chapter 13 job, without a review stop.

Three images under two numbers (13.2.1 and 13.2.3 twice; the text cites a 13.2.2 it never prints), two
notes, four numbered equations (13.2.1)–(13.2.4). No exercises, objectives or summary. CC BY 4.0, Larsen.

## Sub-concepts (page headers)

1. `opening` **Rotational fine structure** (ours, the exploration's proposal in sentence case).
2. `selection-rules` **Selection Rules** (book's, with its h3 R-branch, P-branch, Q-branch and the occupations note). Introduces `rovibrational-spectrum`, `rotational-term`, `rovibrational-selection-rules`, `r-branch`, `p-branch`, `q-branch`, `rovibrational-term`, `rovibrational-line-intensities`, `zero-gap`, `boltzmann-distribution` (axiom, its first appearance in the book), `rotational-populations`.

## Figures

- `sim-rovib` · Figure 13.2.1 + 13.2.3 (three originals; "Figure 13.2.2" citations link to it, footnoted) · rovibrational-spectrum, r-branch, p-branch, q-branch, zero-gap, rotational-populations, rovibrational-line-intensities · standardisation of the book's three cartoons into one drawing, variation (T, B̃) and a directed build: each line is seen to come from one arrow · arrows: symbolic (transitions) · moving: play fires R(0), P(1), R(1), … one every 0.24 s, the current arrow and line in ink; at rest (and with reduced motion) the whole band · sliders T (temperature, 100–1000 K, detent 298) and B̃ (energy, the rotational constant's type, 5–15 cm⁻¹, detent HCl 10.4); choice Q branch forbidden (HCl) / allowed (NO), a dotted Q line at the origin · headline: the line just fired and its population, at rest the 2B̃ spacing, the 4B̃ gap and the strongest J · ladders above, spectrum below, the vibrational gap cut · 2D. HCl ν̃₀ = 2885.9 cm⁻¹ (Table 13.5.1). Ladders drawn J = 0–7 in units of B̃; lines beyond J = 7 have no arrow.

## Exercises

No book exercise. AI exercises (config, two): `a1` HCl's R(0) 2906.7, P(1) 2865.1 and zero gap 41.6 cm⁻¹; `a2` J_max = 2.66 at 298 K and the most populated level J = 3 (N₂/N₀ = 3.70 < N₃/N₀ = 3.83), computed.

## Derivations

- `jmax` "the most populated rotational level": hidden in "by differentiation, we obtain"; 7 moves, facts imported 1, unprinted run 6, score 7 or more: built, after the J_max display (the prose is kept, rule 29.2).
- The R, P and Q aligns stay printed (orchestrator, 12.8.1 precedent).

## Corrections

R and P wording reversed; the aligns' first-line J/J′ labels; the Q-branch reason (O₂); the figure numbering; S(J) for F(J); "electrons" for molecules; "upper"/"lower" levels in the note.

## Wanted at chapter level

None.
