# Plan: 1.5 The Rydberg Formula and the Hydrogen Atomic Spectrum (LibreTexts 13385)

Source: `source.md` (`python3 tools/convert.py 1.5`); draft from `python3 tools/md2html.py 1.5`.
Status: built 2026-11-08 in the Chapter 1 job, without a review stop (the user
approved the chapter config and asked for the chapter to be built).

Two objectives, no book figure, two labelled equations (1.5.1–1.5.2), one
table, one worked example, one inline exercise (keyed), one note. Licence
CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's one `<h2>` (Other Series) is kept; the opening, which has none, gets its own:

1. `rydberg-equation` **Rydberg’s equation**: Balmer generalised, Equation 1.5.1, the Rydberg constant. Introduces `rydberg-formula`, `rydberg-constant`.
2. `other-series` **Other Series** (book's): Equation 1.5.2, Table 1.5.1, the Lyman and Paschen series, the note naming six series, Example 1.5.1; the Sim. Introduces `hydrogen-spectral-series`.

## Figures

- `sim-rydberg` · Sim · rydberg-formula, hydrogen-spectral-series · variation by choice and slider: one row per series (Lyman to Pfund) on a shared logarithmic wavelength axis, each row's lines (n₂ up to n₁ + 30) on a faint band from its limit to its α line, the visible band in its colours over the rows and faintly through them, so where each series falls and the overlap of the infrared ones read at once; n₁ picks the row and n₂ lights its lines in turn · arrows: none · still: a set of lines has no time in it · n₁ choice (five series, segmented), n₂ slider n₁+1 to n₁+12, untyped · headline: the line's name, n₁, n₂, λ and its region; the point seen first is the five staggered combs · strip alone, 80–10 000 nm · 2D. Defaults n₁ = 1, n₂ = 2 reproduce Example 1.5.1 (121.5 nm). Facts: `spectrum`. Labels: region names, row names, the chosen series' limit beside its name; every line by hover name.

Extra simulations: none proposed.

## Rework (rule 14, 2026-11-08)

- `sim-rydberg`: the chosen series is a few ink spikes on a mostly empty frame, the other series faint grey on one baseline so their overlap is hard to see, and two labels collide at the Lyman limit.

## Exercises

Exercise 1.5.1 (keyed: 4.65 × 10³ nm; infrared), kind `exercise`, at the end, tests `rydberg-formula`, `hydrogen-spectral-series`. No AI exercises in this section (config).

## Derivations

None qualify: Equation 1.5.1 is phenomenological and Example 1.5.1 only substitutes into it.

## Corrections

- Table 1.5.1 prints the Lyman-α wavenumber as 82,2291 cm⁻¹; R_H(1 − 1/4) = 82,303 cm⁻¹. Footnote `lyman-alpha-wavenumber`.

## Wanted at chapter level

None.
