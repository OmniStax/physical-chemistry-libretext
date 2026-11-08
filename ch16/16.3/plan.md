# Plan: 16.3 A Cubic Equation of State (LibreTexts 13658)

Source: `source.md`; draft from `python3 tools/md2html.py 16.3` (deleted once built).
Status: built 2026-11-08 in the Chapter 16 job, without a review stop (config: the chapter in one go).

No objectives or summary; no numbered displays. Four numbered figures, one note. Credits: LaRue, Adewumi.

## Sub-concepts (page headers)

1. `isotherms` **Isotherms** (book's): the ideal hyperbolas, CO₂'s van der Waals isotherms, the tie line, Maxwell's
   construction, the note. Introduces `van-der-waals-loop`, `tie-line`, `maxwell-construction`.
2. `critical-point` **Critical Point** (book's): the critical isotherm, the criticality conditions and the critical
   constants, the roots of the cubic, the coexistence curve, the chart. Introduces `critical-point`,
   `critical-temperature`, `supercritical-fluid`, `critical-point-conditions`, `critical-volume`, `critical-pressure`,
   `vdw-critical-constants`, `cubic-roots`, `coexistence-region`, `compressibility-chart`.

## Figures

- Figure 16.3.1 · folded into 16.1's `sim-ideal-isotherms` (the same ideal isotherms of one mole); no element here, the
  prose never cites it; named in `notes`.
- `sim-vdw-isotherms` · Figure 16.3.2 · van-der-waals-loop, tie-line, maxwell-construction, critical-point,
  coexistence-region · variation by slider: the reader warms CO₂ and sees the loop, the tie line at the equal areas
  (computed live, shaded, their value in J/mol), the loop closing at T_c and gone above it · arrows: none · still · T
  (temperature, 0–80 °C, opening at the book's 10 °C, detents 10/40/70, special at T_c = 30.9 °C) · headline: P_sat and
  the areas, or the critical point · graph alone, the book's four isotherms faint, the ideal isotherm dashed, the
  coexistence curve dashed · 2D. CO₂'s a and b from the caption (T_c 304.0 K, P_c 73.7 bar). Caption units corrected
  through the row (`c-units`).
- `sim-cubic-roots` · Figure 16.3.3 · cubic-roots · variation by slider: an isobar crosses the isotherm, every real root
  marked (liquid, meaningless, vapor), and an inset complex plane shows two roots leaving the axis as a pair · arrows:
  none · still · T (temperature, 0–60 °C, special at T_c), P (pressure, 10–110 bar, specials at the dip A′, the peak B
  and, at T_c, P_c) · headline: how many times the isobar cuts and why · graph with an inset · 2D. CO₂ in real units,
  not the exploration's reduced variables, so every symbol has a variables row in 16.3 (V_r has none before 16.4).
- Figure 16.3.4 · folded into 16.4's `sim-corresponding-states` (the same Beychok chart as 16.4.1; orchestrator); the
  citation links it (`figref`) with the Standing and Katz footnote.

## Exercises

None printed. AI exercises (config: two): `a1` (multi, Apply) T_c = 304.0 K and P_c = 73.7 bar of CO₂ from a and b;
`a2` (multi of counts, Analyze, tol 0.01) the number of real roots at 10 °C and 30, 50, 70 bar and at 50 °C and 70 bar
(1, 3, 1, 1; checked by solving the cubic).

## Derivations

- `vdw-critical-constants` (printed block, 9 lines; built per config, the id 16.4 links to): replaces "Substituting the
  van der Waals equation into these two conditions" through the P_c display and the words between; five nodes, the
  two conditions applied, V_c = 3nb, RT_c = 8a/27b, P_c = a/27b². The conditions' sentence stays printed and the
  derivation follows its colon; its two displays are the derivation's starting lines, so the text no longer prints
  them (chapter pass, the reader sees nothing twice). The book bolds "critical volume" inside the replaced words: its
  "Hence, we have two equations in two unknowns …" paragraph stands after the block with the `critical-volume` and
  `critical-pressure` spans, and "This is the critical volume", "To solve the equations, first divide one by the
  other", "Now use either of the two conditions …" and "Finally, plugging …" are the reasons of their steps
  (chapter pass).

## Corrections

Footnotes: the caption's units (`c-units`, figure row); "P_A′ < P < P_B′" (`c-pb-prime`); Figure 16.3.4 is not Standing
and Katz's chart (`c-standing-katz`). As printed: "hypberbolas", "This lines", ν̄ for v̄, the unclosed parenthesis.

## Wanted at chapter level

None.
