# Plan: 14.6 Spin-Spin Coupling Can Lead to Multiplets in NMR Spectra (LibreTexts 13641)

Source: `source.md`; draft from `python3 tools/md2html.py 14.6` (deleted once built).
Status: built 2026-11-08 in the Chapter 14 job, without a review stop (config: the chapter in one go).
Tim Soderberg's *Organic Chemistry With a Biological Emphasis* section 5.5, CC BY-NC-SA 4.0. No objectives,
no summary, no numbered figure or equation; 23 images; five questions printed as "Example 5.6"–"5.10".
The closing credit line goes to `notes`.

## Sub-concepts (page headers)

The book's three headers are kept as printed, Soderberg's numbering included (config).

1. `source-of-coupling` **5.5A: The source of spin-spin coupling**: the opening, trichloroethane's doublet and
   triplet, the splitting diagrams, ethyl acetate, the n + 1 rule and its three points. Introduces
   `spin-spin-coupling`, `multiplet-patterns` (doublet first), `splitting-diagram`, `multiplet-intensities`
   (the "two ways … cancel" sentence), `n-plus-one-rule`, `equivalent-nuclei-do-not-split`,
   `three-bond-coupling`; uses `nuclear-shielding`, `nuclear-deshielding`, `chemical-shift`.
2. `coupling-constants` **5.5B: Coupling constants**: J, field independence, reciprocal J, typical values.
   Introduces `coupling-constant`, `coupling-constant-field-independence`, `reciprocal-coupling-constants`,
   `typical-coupling-constants`.
3. `complex-coupling` **5.5C: Complex coupling**: methyl acrylate's doublets of doublets, overlap in
   trichloropropane and 2-pentanone, toluene's multiplet, stronger magnets. Introduces `complex-coupling`,
   `doublet-of-doublets`, `overlapping-subpeaks`, `multiplet`, `field-strength-resolution`; reinforces
   `n-plus-one-rule`, `splitting-diagram`, `coupling-constant`.

B₀ and B_eff in prose are set as `\kBzero`, `\kBeff` (14.6's variables rows). "The 12 ppm frequency
'window'" links `sim-spectrum` (`figref`).

## Figures

- `sim-spectrum` · Figure (5173 + 5193 folded) · field-strength-resolution, coupling-constant-field-independence,
  chemical-shift · variation by slider: the reader turns the spectrometer up and watches the splittings, fixed
  in Hz, shrink on the ppm scale while the shifts stay, which two fixed spectra cannot show · arrows: none ·
  still (a spectrum has no time) · slider ν₀ (frequency, 60–750 MHz, detents 100, 300, 500, opens on 300, the
  frequency of the book's insets and of Example 5.9's TMS); choice trichloroethane / methyl acrylate (the book's
  δ and J) · headline: the largest J in ppm at this ν₀ · one 0.3 ppm enlargement per signal with its largest J
  bracketed, the full 10–0 ppm spectrum below as sticks, the 12 ppm window in Hz written under it · 2D.
  First-order lines only; methyl acrylate's ester singlet left out (no shift printed). Readout: ν − ν₀ = δ × ν₀
  for the upfield signal, J in Hz and in ppm.
- `sim-splitting` · Figure (5175 + 5177 folded) · multiplet-intensities, n-plus-one-rule, splitting-diagram,
  multiplet-patterns · variation: the number of neighbours n, which the book draws only for 1 and 2 · arrows:
  symbolic (the book's spin arrows, in ink; the B₀ arrow) · still with a crossfade on change (no clock) · choice
  n = 0–6 (discrete, rule 26.1) · headline: the 2ⁿ arrangements in n + 1 groups and the ratio · the tree on top,
  every arrangement listed under its subpeak, the multiplet with Pascal's heights below, J bracketed · 2D. Opens
  on n = 1 (H_a, J = 6.1 Hz). Readout: n + 1, the row, J. No morph of the tree itself (simplest working version).
- `sim-complex` · Figure (5203 + 5205 + 5211 folded) · complex-coupling, doublet-of-doublets, overlapping-subpeaks,
  splitting-diagram · variation by slider: two coupling constants, and the special J₂ = J₁ where subpeaks fuse
  and a triplet of doublets reads as a quartet · arrows: none · still · choice H_c, H_a, H_b (methyl acrylate,
  17.4/1.5, 17.4/10.5, 10.5/1.5 Hz) and H_b of 1,1,3-trichloropropane (two H_a then one H_c; 6.5 and 6.0 Hz,
  the drawing's values, the book printing only "very close" and 6–8 Hz for sp³ neighbours); sliders J₁, J₂
  (frequency, 0–20 Hz), special on J₂ at J₁ · headline: the pattern and its subpeak count · tree on top with
  each stage's J bracketed, the multiplet below on ±30 Hz · 2D. Readout: (n₁ + 1)(n₂ + 1) lines, or
  n₁ + n₂ + 1 subpeaks when the J's are equal; J₁, J₂. Example 5.9's tree is the H_b state (its key stays the
  book's).
- Kept, `kind: figure`, eyebrow "Figure", no caption (the book prints none): `fig-ethyl-acetate` (5179, measured,
  the text reads its shifts), `fig-equivalent` (5181), `fig-five-bonds` (5183), `fig-examples-1` (5185),
  `fig-examples-2` (5187) ("a few more examples": data), `fig-j-alkene` (5195) and `fig-j-aryl` (5197) (the text
  reads their ranges), `fig-methyl-acrylate` (5199, measured, the J box), `fig-hc-closeup` (5201) and
  `fig-hb-closeup` (5207) (the text points at them), `fig-trichloropropane` (5209), `fig-pentanone` (5213),
  `fig-toluene` (5217) (measured). Alt texts written new.
- In exercise cards: 5189 (Example 5.7), 5191 (5.8), 5215 (5.10); the five key images in the solutions.

Extra simulations: none.

## Exercises

The five "Example 5.N" questions (config: keyed by the book's linked Soderberg Chapter 5 solution manual,
`generated_by: source`, the key's words and images): `e1` 5.6 (open: the arrow tree and 1:3:3:1), `e2` 5.7
(number: four signals, splitting in the key image), `e3` 5.8 (open: d, d, t, t), `e4` 5.9 (multi: 1698.0,
1696.5, 1687.5, 1686.0 Hz; checked: 5.64 × 300 = 1692, ±10.5/2 ± 1.5/2), `e5` 5.10 (open; key corrected).
AI (config, one): `a1` the width of a J = 7.0 Hz quartet at 100 and 500 MHz (0.21, 0.042 ppm). All `place: end`.

## Derivations

None (the n + 1 rule is argued in prose; no equations).

## Corrections

`c-earlier` (methyl acetate and para-xylene spectra are Soderberg's earlier section), `c-ethane`
("trichloromethane"), `c-benzylic` (5197's "ortho/meta-benzylic" ring hydrogens), `c-jab` (10.4 for 10.5 Hz),
`c-triclosan` (the drawing is not triclosan, which has one OH and three Cl: it visibly differs, so the
footnote stands), `c-pentet` (E5.10's key: 1:4:6:4:1). Typos ("an be", "then", "coresponding") kept.

## Wanted at chapter level

None.
