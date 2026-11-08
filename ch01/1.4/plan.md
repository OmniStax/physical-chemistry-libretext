# Plan: 1.4 The Hydrogen Atomic Spectrum (LibreTexts 13384)

Source: `source.md` (`python3 tools/convert.py 1.4`); draft from `python3 tools/md2html.py 1.4`.
Status: built 2026-11-08 in the Chapter 1 job, without a review stop (the user
approved the chapter config and asked for the chapter to be built).

One objective, four numbered figures, two labelled equations (1.4.1–1.4.2),
two tables, one worked example, two notes, no exercises in the book.
Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's two `<h2>` headers are kept; the opening, which has none, gets its own:

1. `newtons-prism` **White light and the prism**: Newton's prisms. Introduces nothing (white light and refraction are taken as known).
2. `atomic-line-spectra` **Atomic Line Spectra** (book's): Ångström, the three kinds of spectra (Figure 1.4.1), the Fraunhofer note with Table 1.4.1 and Figure 1.4.2, line spectra of elements (Figure 1.4.3). Introduces `line-spectrum`.
3. `the-balmer-series-of-hydrogen` **The Balmer Series of Hydrogen** (book's): Figure 1.4.4, Equation 1.4.1, Table 1.4.2, Equation 1.4.2, the wavenumber note, Example 1.4.1. Introduces `balmer-formula`, `wavenumber`.

## Figures

- `sim-spectra` · Figure 1.4.1 · line-spectrum · variation by choice: one lamp, cloud, slit, prism and screen, the spectrum choice (continuous, absorption, emission) moving the lamp and the cloud in and out of the beam, and the gas choice (hydrogen, sodium, mercury) changing the lines, so the reader sees that the dark and the bright lines of one gas stand at the same wavelengths, which the book's three separate panels leave to be compared by eye · arrows: none (the beam is a band of light, not an arrow) · still: the choices morph the scene, no clock · two choices · headline: what reaches the screen in the chosen case · scene above, the screen laid out below as a strip on a wavelength axis 350–750 nm · 2D. Facts: `spectrum` and the dark of an unlit screen (`#000000`). Lines: hydrogen's are Ångström's four, sodium's the D lines of Table 1.4.1, mercury's its five strong visible lines. Labels: lamp, gas, slit, prism, screen (five); the lines by hover name.
- `fig-1-4-2` · Figure 1.4.2 · kept as the book's image: measured data (a sky spectrum), nothing to vary.
- `fig-1-4-3` · Figure 1.4.3 · photo, kept: the text points at it ("shown in Figure 1.4.3") and Example 1.4.1 cites 1.4.3a.
- `sim-balmer` · Figure 1.4.4 · balmer-formula · variation by slider: n₂ lights each Balmer line in turn on a spectrum strip in its real colour at Equation 1.4.1's wavelength, with Ångström's four measurements marked above the strip and the series limit dashed, so the reader sees the lines crowd toward 364.6 nm and leave the visible at n₂ = 8, as Table 1.4.2 lists · arrows: none · still · n₂ slider 3–20, detents at 3, 4, 5, 6, untyped · headline: n₂, the line's name and λ, its colour and Table 1.4.2's value · strip alone, 350–700 nm · 2D. Facts: `spectrum`, `#000000`. The full three-series schematic of the book's image is the hydrogen ladder of 1.8 (chapter config); this figure keeps the Balmer part, which is what the 1.4 text cites. Default n₂ = 3 reproduces Example 1.4.1's 656.2 nm.

Extra simulations: none proposed.

## Exercises

The book sets none. Two AI exercises on the Balmer formula (config), kind `exercise`, at the end, both testing `balmer-formula`:

- `e1` (Apply): the wavelength of the n₂ = 12 line and whether it is visible; 375.0 nm, ultraviolet.
- `e2` (Analyze): which n₂ gives a line at 383.5 nm; n₂² = 4λ/(λ − b) = 81.0, n₂ = 9.

## Derivations

None qualify: Equation 1.4.1 is phenomenological, and Example 1.4.1 substitutes and takes a one-line limit.

## Corrections

- Figure 1.4.3's caption puts the start of the Lyman series at 124 nm; Lyman-α is at 121.6 nm. Footnote `lyman-start`.

## Wanted at chapter level

- variables row: `1.4 · nu · frequency · Hz · the frequency of electromagnetic radiation` (the wavenumber note's λν = c and ν̃ = ν/c), so the note can write `\knu`; and `1.4 · E · energy · J · the energy of a photon` for E = hc/λ, so it can write `\kE`. The text keeps plain ν and E until then.
- Figure numbers: this section's `sim-balmer` carries 1.4.4; the 1.8 hydrogen ladder must not also carry 1.4.4 as a fold, or the number is on two rows.
