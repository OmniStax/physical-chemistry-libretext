# Plan: 16.4 The Law of Corresponding States (LibreTexts 13659)

Source: `source.md`; draft from `python3 tools/md2html.py 16.4` (deleted after the build).
Status: built 2026-11-08 in the Chapter 16 job, without a review stop (config agreed).

Two equations numbered (16.4.1)–(16.4.2), one figure, no examples, no exercises in the book.
Credits Larsen, LaRue, Franzen; CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `reduced-variables` **Reduced variables** (agent's, for the unheaded opening): the molar van der Waals equation, the reduced state, (16.4.2), the critical constants restated, the law of corresponding states, Z = 3/8, argon and ethane at T_r = 2.0. Introduces `reduced-variables`, `reduced-vdw-equation`, `law-of-corresponding-states`, `vdw-critical-compressibility`.
2. `compressibility` **Compressibility** (book's): Z, the generalized chart, Z in reduced variables, the derivation, the figure. Introduces `reduced-compressibility`, `generalized-compressibility-chart`.

## Figures

- `sim-corresponding-states` · Figure 16.3.4 + 16.4.1 · law-of-corresponding-states, reduced-variables, reduced-compressibility, generalized-compressibility-chart, vdw-critical-compressibility · variation by slider and choice, with a morph: the four gases of Table 16.2.1 at one reduced temperature, each at its own T = T_r T_c (critical constants from a and b); against pressure in bar their Z curves fan apart, and the switch to reduced pressure morphs them onto one curve, which the still chart cannot show · arrows: none · still: no time in the idea; the choice morphs (library turning), no transport · choice axis pressure (bar) / reduced pressure; sliders T_r 1.0–2.0 (temperature) with soft detents at the chart's 1.0, 1.1, 1.2, 1.3, 1.5, 2.0, opening on 1.2; P_r 0.1–4 (pressure), marked states, special at P_r = 1 · headline: the shared Z at the marked P_r, and the chart's reading or the spread of pressures in bar · graph alone: four curves in `F.cat` colours (legend with each gas's T), the measured chart (Figure 16.4.1's curves read off the image, interpolated between its curves off a detent) dashed in reduced pressure only, Z = 1 dashed · 2D. The chart's data come from the book's image (Beychok, public domain).

## Exercises

Two AI exercises (config): ethane's temperature corresponding to argon at 225 K (456 K, checked); the van der Waals Z_c = 3/8 against the chart's T_r = 1.0 minimum (0.375, checked).

## Derivations

- `reduced-vdw` · "Derivation · the van der Waals equation in reduced variables": hidden ("By substitution", "can also be cast"), score 9, built. Nodes: (16.4.2) from (16.4.1), the reduced definitions and 16.3's critical constants; Z_c = 3/8; Z in reduced variables. Placed after the reduced-Z display (the last result). The critical-constants fact carries `drv: "16.3/vdw-critical-constants"` (16.3's id, checked).

## Corrections

`c-direction` ("Equation 16.4.2 means the critical parameters … can be expressed in terms of a and b": it is the other way round); `c-peng-robinson` ("Peng-Robertson"). "difference gases", "there critical points", "Law of Corresponding State}s" as printed.

## Wanted at chapter level

None.
