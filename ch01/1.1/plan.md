# Plan: 1.1 Blackbody Radiation Cannot Be Explained Classically (LibreTexts 13381)

Source: `source.md` (`python3 tools/convert.py 1.1`); draft from `python3 tools/md2html.py 1.1`.
Status: built 2026-11-08 in the Chapter 1 job, without a review stop (the user
approved the chapter config and asked for the chapter to be built).

Four objectives, five numbered figures and one unnumbered image, four
labelled equations (1.1.1–1.1.4), four worked examples, one inline exercise
(keyed), three notes. Licence CC BY 4.0 at the source.

## Sub-concepts (page headers)

The book's three `<h2>` headers are kept (Stefan-Boltzmann, Wien, Rayleigh-Jeans);
the opening, which has none, divides into three blocks of its own:

1. `blackbody-radiation` **Blackbody radiation**: thermal radiation, the blackbody, its colour with temperature; Figure 1.1.1. Introduces `thermal-radiation`, `blackbody`.
2. `perfect-absorber` **A perfect absorber is a perfect emitter**: Kirchhoff's statement and argument, the cavity with a hole; Figure 1.1.2. Introduces `kirchhoffs-law-of-thermal-radiation`.
3. `measuring-the-spectrum` **Measuring the spectrum**: Wien and Lummer's oven, the curves, the two laws; Figure 1.1.3; the fluorescent-lamp note.
4. `stefan-boltzmann` **The Stefan-Boltzmann Law** (book's): Equation 1.1.1, Figure 1.1.4, Example 1.1.1. Introduces `stefan-boltzmann-law`.
5. `wien` **Wien's Displacement Law** (book's): Equations 1.1.2–1.1.3, Examples 1.1.2–1.1.3. Introduces `wiens-displacement-law`.
6. `rayleigh-jeans` **The Rayleigh-Jeans Law** (book's): Equation 1.1.4, Figure 1.1.5, the integral note, Example 1.1.4. Introduces `spectral-energy-density`, `rayleigh-jeans-law`, `ultraviolet-catastrophe`.

## Figures

- `fig-1-1-1` · Figure 1.1.1 · photo, kept: the text points at it ("when an iron is heated in a fire (Figure 1.1.1)").
- `fig-1-1-2` · Figure 1.1.2 · kept as the book's drawing: a setup sketch with nothing that varies; the text cites it twice.
- `sim-blackbody` · Figure 1.1.3 + 1.1.5 · blackbody, stefan-boltzmann-law, wiens-displacement-law, rayleigh-jeans-law, ultraviolet-catastrophe · variation by slider: the reader moves the temperature and sees the peak shift, the area grow and the classical curve run away at short wavelength, which the two still graphs only show at fixed temperatures · arrows: none · still: a spectrum at one temperature has no time in it · T slider 2500–5500 K, detents at the book's 3000, 4000, 5000 K · headline: T and λmax · graph alone, the glowing disc beside it in its real colour · 2D. Facts: the visible band and the disc (`spectrum`).
- `fig-fluorescent` · unnumbered image in the note · kept as the book prints it: measured data.
- `sim-stefan` · Figure 1.1.4 · stefan-boltzmann-law · variation by slider: the point slides along σT⁴ with the readout computing P, the book's four marks kept as hollow points with hover names · arrows: none · still · T slider 0–400 K, detents at 273, 293, 310, 373 K · headline: T and P · graph alone · 2D.

Extra simulations: none proposed.

## Exercises

Exercise 1.1.1 (keyed: 500 nm, 10.0 microns), kind `exercise`, at the end, tests `wiens-displacement-law`. No AI exercises in this section (config).

## Derivations

None qualify: the Rayleigh-Jeans law is stated, and Example 1.1.4's integral is three lines.

## Wanted at chapter level

None.
