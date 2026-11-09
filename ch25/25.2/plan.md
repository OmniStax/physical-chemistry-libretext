# Plan: 25.2 The Activities of Nonvolatile Solutes (LibreTexts 14514)

Source: `source.md` (`python3 tools/convert.py 25.2`); draft from `python3 tools/md2html.py 25.2`.
Status: built 2026-11-09 in the Chapter 25 job, without a review stop (config agreed).

Peverati's §14.1: nine displays (25.2.1)–(25.2.9), one figure (25.2.1), Peverati's footnote 1. No
objectives, no summary, no credits. Licence CC BY-NC-SA 4.0. The stray U+FE0E is dropped.

## Sub-concepts (page headers)

The book prints no header. Two blocks; the split falls before "For a component in a solution", one
paragraph later than the config's "to (25.2.3)", because (25.2.2)–(25.2.9) are one argument from
the vapor and splitting it after (25.2.3) would cut the subtraction from its two lines.

1. `activity-chemical-potential` **Activity from the chemical potential**: (25.2.1), the standard states. Reuses `activity`, `fugacity`, `chemical-potential`, `standard-state`, `standard-state-gas`, `activity-by-phase`.
2. `activity-coefficients-vapor` **Activity coefficients from vapor pressure**: (25.2.2)–(25.2.9), Figure 25.2.1, the closing paragraph with the book's footnote 1. Introduces `activity-coefficient-from-vapor-pressure`; reuses `raoults-law`, `ideal-solution-chemical-potential`, `activity-coefficient`, `chemical-potential-fugacity`.

Peverati's links: "chapter 11", "fugacity" and the first "Equation 11.4.2" link to 22.8's
`defining-fugacity` block (`xref`); "chapter 10" is left unlinked until Chapter 26 is built (Wanted);
"Equation 13.1.1" and the second "Equation 11.4.2" are unlinked in the source and stay so. One
correction footnote (`peverati-numbers`) says the numbers are another text's and names this book's
places. The book's footnote 1 is a `book` footnote under its number.

## Figures

- `fig-25-2-1` · Figure 25.2.1 · photo, kept as printed (exploration): Chapter 24's P–x figures carry the variation; the text cites it. A true alt written. Width 878 from the source.

Extra simulations: none (exploration: a P–x deviation Sim is Chapter 24's).

## Exercises

The book sets none. One AI exercise (config): `a1`, compute: x_i = 0.40, P_i* = 100 Torr, P_i = 52 Torr → P_i^R = 40 Torr, γ_i = 1.30, a_i = 0.52 (checked by computation). Tests `activity-coefficient-from-vapor-pressure`, `raoults-law`.

## Derivations

(25.2.2) + (25.2.3) → (25.2.4) → (25.2.5): **not built**. The exploration's condition: build unless
Chapter 24 builds the same chain, and Chapter 24's exploration builds it (24.3 "Derivation · the
chemical potential of a component in solution", 24.2's ideal case giving μ = μ* + RT ln x). The
block stays printed. (25.2.8) + Raoult → (25.2.9): one move, stays.

## Wanted at chapter level

- A macro for `P_i` (pressure, the partial pressure of component i): the symbol row has none, so `P_i` is written plain in (25.2.2), (25.2.4), (25.2.8), (25.2.9). Proposed: `{"sym": "P_i", "latex": "P_i", "macro": "\\kPpi"}` and then `P_i` → `\kPpi` in 25.2's text and exercise.
- Link "chapter 10" in the last paragraph to the opening block of 26.1 once Chapter 26 is built (`<a class="xref" href="#26.1-<block>">chapter 10</a>`).
- Once 24.3 is built: a cross-link from "Subtracting Equation 25.2.3 from Equation 25.2.2" to `#24.3-drv-<its id>` (the same chain, derived there).
