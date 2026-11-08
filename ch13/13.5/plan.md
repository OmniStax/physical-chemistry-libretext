# Plan: 13.5 Vibrational Overtones (LibreTexts 2401)

Source: `source.md`; draft from `python3 tools/md2html.py 13.5` (deleted after the build).
Status: built 2026-11-08 in the Chapter 13 job, without a review stop (config agreed).

Four figures (13.5.1–13.5.4), two numbered equations (13.5.1, 13.5.2), one note, one table, two inline exercises (unkeyed), a reference list. Licence CC BY 4.0 at the source, shared CC BY-NC-SA 4.0; credit Delmar Larsen.

## Sub-concepts (page headers)

1. `opening` **Beyond the harmonic oscillator** (ours): the harmonic model's failure at high v. Reinforces `harmonic-oscillator-limitations`.
2. `anharmonicity` **Anharmonicity** (book's): Figure 13.5.1, the Taylor series (13.5.1), the cubic potential (13.5.2), the anharmonic levels. Reinforces `potential-taylor-expansion`, `anharmonicity`, `anharmonic-energy-levels`.
3. `overtones` **Overtones** (book's): Figure 13.5.3 + 13.5.4, the selection-rule note, Table 13.5.1. Introduces `hot-band`, `anharmonic-selection-rule`, `overtone-positions`.

"References" is not a block: the list goes to `notes`.

## Figures

- `fig-13-5-1` · Figure 13.5.1 · photo, kept: the text reads its colours ("in green", "in blue"); Somoza, CC BY-SA 3.0. The paragraph after it links 5.3's `sim-morse`.
- Figure 13.5.2 · not shipped: the same two SVGs as Figure 5.3.2; "discussed in detail previously" links 5.3's `sim-taylor`, and `notes` says so.
- `sim-overtones` · Figure 13.5.3 + 13.5.4 · hot-band, anharmonic-selection-rule, overtone-positions · variation by slider: as χ̃ₑν̃ grows the anharmonic ladder closes up beside the even harmonic one, and on the strip below each line falls further short of its dashed whole multiple of the fundamental, which the two book diagrams only show at one fixed anharmonicity · arrows: symbolic (transitions between levels) · still: no clock · slider χ̃ₑν̃ 0–90 cm⁻¹ (wavenumber), detent at HCl's 52.8; dropdown of transitions 0→1 … 0→5 and the hot band 1→2 (six options would wrap a row) · headline: the chosen line and its shortfall v(v − 1)χ̃ₑν̃ · ladders above, spectrum strip below with Table 13.5.1's observed values as dots; the shortfall shaded · 2D. Constants ν̃ = 2990.9, χ̃ₑν̃ = 52.8 cm⁻¹ recovered from Table 13.5.1's anharmonic column (every entry to 0.5 cm⁻¹), so it opens on the table's 5665.0 cm⁻¹.

Extra simulations: none.

## Exercises

- `e1` Exercise 13.5.1 (unkeyed, compute): AI solution, ν̃ = 2989.6 cm⁻¹, χ̃ₑ = 0.0173 (computed: χ̃ₑν̃ = 51.85 cm⁻¹). Tests `anharmonic-energy-levels`, `overtone-positions`.
- `e2` Exercise 13.5.2 (unkeyed, explain): AI solution with x = 0.1 (terms 3–5 about 3% of term 2). Tests `potential-taylor-expansion`, `anharmonicity`.
No AI exercises (config: the book's two).

## Derivations

Overtone positions from E_v: substitution, 2 moves, below the bar; the figure's readout shows it.

## Corrections

Footnotes: the vanishing first term is the linear one (`c-linear`); ΔV for Δv in the note (`c-delta-v`); "v = ±1" for Δv = ±1 (`c-delta-v2`); the table's harmonic and anharmonic columns are calculated, with their constants (`c-table`). Left as printed: "V(x)", "R₀", "gives by", "occuring", Exercise 13.5.1's 5668.1 against the table's 5668.0.

## Wanted at chapter level

None.
