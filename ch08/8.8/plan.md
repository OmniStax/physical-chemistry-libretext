# Plan: 8.8 Term Symbols Gives a Detailed Description of an Electron Configuration (LibreTexts 13446)

Source: `source.md`; draft from `python3 tools/md2html.py 8.8` (deleted).
Status: built 2026-11-08 in the Chapter 8 job, without a review stop (config: the chapter in one go).

Two objectives, five numbered equations (8.8.1–8.8.5), twelve worked examples (8.8.1–8.8.12), one note, Table 8.8.1,
three figures printed "8.8.1", two hand-drawn scans, three microstate pictures and thirteen charts in Example 8.8.12.
CC BY 4.0 at the source, shared BY-NC-SA; credit Mattanjah de Vries.

## Sub-concepts (page headers)

1. `atomic-quantum-numbers` **Quantum numbers of a whole atom** (ours; exploration's proposal in sentence case): the one sentence. Uses `angular-momentum-quantum-number`.
2. `total-l` **The Total Orbital Angular Momentum Quantum Number: L** (book's): (8.8.1), the three wrong sums, (8.8.2), closed and open shells, Examples 8.8.1–8.8.2. Introduces `total-orbital-angular-momentum-quantum-number`, `closed-shell`; reinforces `vector-model`.
3. `total-ml` **The Total Magnetic Quantum Number: M_l** (book's, with its `###` M_s): (8.8.3), (8.8.4), Examples 8.8.3–8.8.4. Introduces `total-magnetic-quantum-number`, `total-spin-magnetic-quantum-number`.
4. `total-s` **The Total Intrinsic Spin Quantum Number: S** (book's): (8.8.5), Examples 8.8.5–8.8.8. Introduces `total-spin-quantum-number`.
5. `total-j` **The Total Angular Momentum Quantum Number J** (book's): J's range, Table 8.8.1. Introduces `total-angular-momentum-quantum-number`.
6. `multiplicity` **Multiplicity** (book's): singlet and triplet, the spin-pair figure, the uncertainty paragraph. Introduces `spin-multiplicity`.
7. `constructing-term-symbols` **Constructing Term Symbols** (book's): the letter code, the ordering rules, Examples 8.8.9–8.8.12, the note. Introduces `term-symbol`, `hunds-rules` (stated here first; named in 8.10, config), `terms-from-microstates`; reinforces `microstate`.
8. `shortcuts` **Shortcuts** (book's). Introduces `electron-hole-equivalence`.

## Figures

- First Figure 8.8.1 (l = 1 cones) · not rebuilt: it is 6.3.1's vector model; its two citations link `#6.3-sim-vector-model`; named in `notes`.
- Second Figure 8.8.1 (L–S cones) · built once in 8.9 as Figure 8.9.1 + 8.9.2; the J paragraph's citation links `#8.9-sim-ls-coupling`.
- `sim-spin-pair` · Figure 8.8.1 (the third, with the two hand-drawn sketches) · spin-multiplicity, total-spin-quantum-number · depth and variation: two spins on their m_s cones and their resultant S, a choice of the pair's state, and the azimuth φ showing S_x, S_y undetermined while S_z and |S| stay · arrows: symbolic (the vectors) · still: nothing precesses in an eigenstate (6.3.1's decision) · choice αα, αβ + βα, ββ, αβ − βα; slider φ (angle) · no headline, readout |S| and S_z = (m_s1 + m_s2)ħ · mathematical 3D, free orbit, pitch ±80° so z stays upright, no buttons, flat fallback. Referents `spin-1`, `spin-2` (the two spins must be told apart). Original: the JPG; the two scans are not shipped. Footnote on the three figures under one number.
- `sim-microstates` · Figure (Example 8.8.12's pictures and charts; orchestrator: the Sim replaces the 13 charts) · terms-from-microstates, microstate, term-symbol · flow by animation: the chart fills row by row, then each term claims its centred rectangle and the cells drop by one, which the book shows as thirteen separate tables · arrows: none · moving: the procedure's steps are the clock (0.45 s a row, 1.6 s a term) · choice d² (the example), p², p³, d³ · headline the current row or term with its count · chart with the terms list beside it · 2D. Every printed chart is a state the transport reaches; the two wrong charts get footnotes. Originals: the three microstate PNGs (no caption in the book).

Extra simulations: none for this section (config).

## Exercises

None printed. Two AI exercises (config): `a1` p²: 15 microstates, 5 levels (³P₂,₁,₀, ¹D₂, ¹S₀), tests `terms-from-microstates`, `term-symbol`, `microstate`; `a2` p³: 20 microstates, 3 terms (⁴S, ²D, ²P), tests `terms-from-microstates`, `total-spin-quantum-number`. Both numeric (multi), `place: end`.

## Derivations

None qualify (exploration: the sums are wrong arithmetic kept as printed; Example 8.8.12 is a tabular procedure).

## Corrections

Footnotes: the three "L(same direction)" sums; 1s² 2s² p²; "ignore the s electrons too"; (8.8.4)'s last value; Example 8.8.8's S = 1; "measured in terms of l"; Table 8.8.1; the three figures printed 8.8.1; "two pieces of information"; "1S"; "microstates" for levels (Examples 8.8.9–8.8.12); M = 1 for one electron (8.8.9, 8.8.10, one note); the 2 + 4 + 2 split at M_l = 1; the chart after ³F; the last chart. Not marked: "elections", "e..,", "opposites", "is has", "strickthough", "wtih", "put distribute", "M_s = ±‐1", the rules' "high l".

## Wanted at chapter level

None.
