# Plan: 3.6 Wavefunctions Must Be Normalized (LibreTexts 13396)

Source: `source.md`; draft from `python3 tools/md2html.py 3.6` (deleted once built).
Status: built 2026-11-08 in the Chapter 3 job, without a review stop (config: the chapter in one go).

Three objectives, three numbered figures (folded into one), twelve numbered equations (3.6.1–3.6.12; 3.6.3 sits in Example 3.6.1), two worked examples (the box printed "Example 3.6.1" is an exercise box in the source, kept in the text as the example it is), two exercise boxes, one note. Licence CC BY-NC-SA 4.0; authors Hanson, Harvey, Sweeney and Zielinski (page tags).

## Sub-concepts (page headers)

The book's three `<h2>` headers are kept; the section opens on its first header.

1. `extracting-probabilities` **Extracting Probabilities** (book's): |Ψ|², the Born reading, P₁D as an area (3.6.2), P₂D, P₃D, the folded figure, Example 3.6.1. Introduces nothing; reinforces `square-of-the-modulus`, `born-interpretation`, `probability-density`, `position-probability`; uses `pib-wavefunctions`.
2. `normalizing-of-the-wavefunction` **Normalizing of the Wavefunction** (book's): 3.6.4–3.6.5, Example 3.6.2 (derivation). Introduces `normalizing-a-wavefunction`; reinforces `normalization-condition` (3.5's).
3. `time-dependence-to-the-wavefunction` **Time Dependence to the Wavefunction** (book's): the derivation 3.6.7–3.6.11, 3.6.12, the note. Introduces `normalization-preserved`, `square-integrable`; uses `time-dependent-schrodinger-equation`.

## Figures

- `sim-probability-area` · Figure 3.6.1 + 3.6.2 + 3.6.3 · position-probability, probability-density · variation by slider: the reader moves an interval along a density and sees the probability as the shaded area, against the rectangle estimate the example uses, which the three stills show only once each · arrows: none · still: a probability at one instant has no time in it · select density (the book's arbitrary curve, n = 1, 2, 3); sliders x₀ 0–L (length), Δx 0.005L–L (length); specials (dashed, snap) Δx = L/100 (Example 3.6.1), L/3, L/2 and x₀ = L/4, L/2, so the example's 0.02 and ≈ 0 and the half-box 1/2 are one catch away · headline: the interval, its probability and the rectangle estimate · graph alone, x 0–L, density 0–4 /L; the book's labels A, B, C dropped (the text never names them) · 2D. Opens on the book's curve with a thin strip on its rising flank, as Figure 3.6.1 draws it. The arbitrary curve is the square of a sum of four bumps, normalized, crossing zero once like the book's point B. Originals: the three Kaya SVGs (CC BY-NC). A select, not a button row, since four options wrap.

## Exercises

Exercise 3.6.2 (keyed: the book's normalized function), kind `exercise`, at the end, `open`. The second Exercise 3.6.1 is set in Section 3.4 as one card with Example 3.4.1 (built by another builder), and `notes` says so. No AI exercises (config).

## Derivations

- `example-3-6-2` · *Example 3.6.2 ·* the normalized Gaussian wave packet: block, score 2 (the integral table; a change of variable). Replaces the solution's displays and the words between; the closing "where φ is an arbitrary real phase-angle" stays.
- `normalization-in-time` · *Derivation · normalization is kept in time* (3.6.7–3.6.11): block, score 3. Replaces 3.6.7–3.6.11 and the words between (the conjugation rules become a fact); 3.6.12 stays printed and is the last fact. The book drops ħ from 3.6.8–3.6.11; the derivation follows the correct algebra and each node's `note` says what the book prints.

## Corrections

Footnotes: the n = 2 approximation still labelled |ψ_{n=1}|² (and the probability written as |ψ|²); "According to Equation 3.6.1" for 3.6.2. The ħ drops are derivation notes. Spelling slips ("the under the", "amended to included") are left as printed.

## Wanted at chapter level

None.
