# Plan: 17.4 Heat Capacity at Constant Volume is the Change in Internal Energy with Temperature (LibreTexts 13683)

Source: `source.md` (`python3 tools/convert.py 17.4`); draft from `python3 tools/md2html.py 17.4` (deleted once built).
Status: built 2026-11-08 in the Chapter 17 job, without a review stop (config: the chapter in one go).

No objectives or summary. Six numbered displays (17.4.1)–(17.4.6) and the tag "(Dulong-Petit Law)", kept; five
numbered figures. Credit: LaRue. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `heat-capacity-from-ln-q` **Heat capacity from ln Q** (ours, the exploration's, sentence case): (17.4.1), the
   derivation in place of (17.4.2)–(17.4.3). Introduces `internal-energy`, `constant-volume-heat-capacity`,
   `heat-capacity-from-q` (the block is its span; the book names it only in the displays).
2. `dulong-petit` **Dulong-Petit Law on the Heat Capacities of Solids** (book's): the law, the fall at low T, Figure
   17.4.1. Introduces `dulong-petit-law`, `heat-capacity-vanishes`.
3. `einstein` **Einstein's Theory on the Heat Capacities of Solids** (book's): the model, the Einstein display
   (printed, footnoted), the folded figure, the limits (17.4.4)–(17.4.5), the derivation, `sim-schottky`, diamond and
   (17.4.6), Figure 17.4.5. Introduces `einstein-solid`, `einstein-temperature`, `einstein-heat-capacity`,
   `einstein-high-temperature-limit`, `einstein-low-temperature-limit`, `stiff-light-solids`, `einstein-model-limits`.

## Figures

- `fig-17-4-1` · Figure 17.4.1 · photo, kept: a labelled sketch of the spring model with pointer arrows; nothing moves
  or varies in the text's use of it. OpenStax credit as printed.
- `sim-einstein-solid` · Figure 17.4.2 + 17.4.3 + 17.4.4 · einstein-solid, einstein-temperature,
  einstein-heat-capacity, both limits, dulong-petit-law · variation by slider: one T/Θ_E moves the ladder's populations
  and the point on the C_V curve together, which the three stills split over three figures · arrows: the double arrow
  hν is symbolic · still · T/Θ_E 0.05–2.5 (17.4.4's axis), opening at 0.5, detents at the book's panels 0.125, 0.5,
  1.25 · headline: the fraction excited and C_V as a share of 3Nk · ladder (v = 0–6, bars e^(−vΘ_E/T), k_BT band) beside
  the graph C_V/3Nk with the Dulong–Petit line, the Einstein curve, the state point and 17.4.4's points for Pb, Ag,
  Zn, Cu, Al (`F.el`, hollow; read off the GIF by colour, y ÷ 2.494; its three unlabeled brown points left out) ·
  2D. Three originals; the three book captions' errors as figure-row footnotes (`c-fig-panels`, `c-fig-axis`,
  `c-fig-units`); `original_caption` is 17.4.2's. Copper's `F.el` brown sits near the heat-capacity colour; the curve
  and the hollow points stay apart by weight and shape.
- `sim-schottky` · Sim (extra, picked) · einstein-heat-capacity, heat-capacity-from-q · variation by slider: a two-level
  system's C_V rises and falls while an oscillator's climbs to k and stays, so a ladder that ends cannot keep taking
  heat · arrows: none · still · kT/ε 0.05–3, opening at 1, a special at the peak 0.417 · headline: the upper level's
  share and both heat capacities · two levels with population bars beside the graph · 2D.
- `fig-17-4-5` · Figure 17.4.5 · photo, kept: lead's measured data against a curve whose Θ_E the book never prints.

## Exercises

None printed. AI exercises: `ai1` (multi, Apply) C_V/3Nk at T = Θ_E/2, Θ_E, 2Θ_E: 0.724, 0.921, 0.979 (computed);
`ai2` (choice, Understand) why diamond's heat capacity is low.

## Derivations

- `heat-capacity` (printed align, 4 lines, one inserted): "Derivation · the heat capacity from the partition function",
  result (17.4.3); (17.4.2) is a fact linked to `17.3/average-energy`. Replaces "Since:" through (17.4.3).
- `einstein-heat-capacity` (hidden, score 12): "Derivations · the Einstein heat capacity", six nodes (q of an
  oscillator by the geometric series, ln Q for 3N oscillators, E, C_V, the two limits (17.4.4), (17.4.5)); placed
  after the paragraph that completes the passage; the zero-point term's drop has a reason. The printed display stays
  with its footnote.

## Corrections

Footnotes: `c-half-kt`, `c-einstein-display`, `c-theta-constant`, and the three figure-row notes above. As printed:
"θ_E = hv/k" (v for ν), "Alexis Thèrèse Petit", "the accuracy of the of the".

## Wanted at chapter level

- A 17.4 variables row for `q_mol` ("the partition function of one oscillator of the solid",
  `molecular-partition-function`), so the Einstein derivation can write `\kqmol`; it writes q plain for now.
