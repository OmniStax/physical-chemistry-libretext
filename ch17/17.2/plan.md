# Plan: 17.2 The Boltzmann Distribution represents a Thermally Equilibrated Distribution (LibreTexts 13680)

Source: `source.md` (`python3 tools/convert.py 17.2`); draft from `python3 tools/md2html.py 17.2` (deleted once built).
Status: built 2026-11-08 in the Chapter 17 job, without a review stop (config: the chapter in one go).

No objectives or summary. Four numbered displays (17.2.1)–(17.2.4); two numbered figures (folded); the note
"Boltzmann Distribution" kept as a titled note, the blockquote as the book's quotation. Credit: LaRue. Licence CC BY
4.0 at the source. The References are never cited: to `notes`. The video is a link in a sentence, kept.

## Sub-concepts (page headers)

1. `counting-arrangements` **Counting arrangements** (ours, the exploration's "Counting Arrangements" in sentence case
   after both humanizer passes): p_N = W_N p_i, the canonical ensemble. Introduces `canonical-ensemble`.
2. `the-boltzmann-distribution` **The Boltzmann Distribution** (book's): a_j, W, P_j and (17.2.1), the most probable
   distribution, the constraints (17.2.2)–(17.2.3), `sim-quanta-exchange`, the stationarity condition, Lagrange's
   method and Stirling's approximation (printed, kept: they are the facts the derivation imports). Introduces
   `occupation-number`, `distribution-weight`, `ensemble-average`, `most-probable-distribution`,
   `distribution-constraints`, `lagrange-multipliers`, `stirlings-approximation`.
3. `stirlings-approximation` **Application of Stirling's Approximation** (book's): the derivation, β = 1/kT, the folded
   figure, the note, the quotation. Introduces `boltzmann-probability`, `populations-fall-with-energy`.
4. `partition-function` **Partition Function** (book's): q, Q, Q = q_iq_jq_k… = q^N, the N! remark. Introduces
   `molecular-partition-function`, `partition-function-counts-states`, `canonical-partition-function`,
   `distinguishable-partition-function`, `indistinguishable-partition-function`.

## Figures

- `sim-quanta-exchange` · Sim (extra, picked) · most-probable-distribution, distribution-constraints,
  distribution-weight, boltzmann-probability · flow by animation and variation by slider: quanta hop between
  oscillators and the histogram of a_j settles onto the exponential while ln W climbs to that distribution's value,
  which no still can show · arrows: kinematic (quanta pass), drawn as the jiggling columns · moving: one loop is 25
  exchanges per oscillator in 6 s, seeded, so scrubbing replays exactly; every loop starts from every oscillator
  holding the same number of quanta (W = 1) · sliders A (20–400, untyped, 100) and quanta each (1–4, untyped, 2) ·
  headline: exchanges so far, ln W now and the Boltzmann distribution's ln W · oscillator strip above, histogram and ln W
  per oscillator below · 2D. Readout: ln W = ln A! − Σ ln a_j! and E_total = Σ a_j e_j, which stays fixed.
- `sim-level-populations` · Figure 17.2.1 + 17.2.2 · boltzmann-probability, molecular-partition-function,
  partition-function-counts-states · variation by slider: one temperature sweeps the book's three ladders and switches
  each on at its own temperature, which the two stills show only at one or three fixed temperatures · arrows: none ·
  still · T on a log slider 1–20 000 K, opening at the book's 300 K (k_BT = 2.49 kJ/mol), detent there · headline: T,
  k_BT and q for the three ladders · three ladders side by side, each on its own energy scale (0.012, 12, 120 kJ/mol),
  twelve levels each, a bar e^(−jΔE/RT) on each level, a k_BT band, q under each · 2D. The exploration's 0 K special is
  not built: a log slider cannot reach 0 K, and 1 K already leaves the vibrational and electronic ladders in their
  ground levels. Both originals kept; 17.2.2's citation links the fold.

## Exercises

All `place: end`, kind `exercise`, `source_number` "Problem N", unkeyed, AI solutions: 17.1's Problem 5 (held here,
`source_section` 17.1, `open`), Problems 1–5 (`open`; Problem 4 carries the correction `c-problem-4` on "equation
(17.9)", read as this page's Q = q_iq_jq_k…, the result the property of the exponential gives). AI exercise `ai1`
(number, Apply): P₁/P₀ = e^(−4.81) = 0.0081 for the 12 kJ/mol ladder at 300 K (computed).

## Derivations

- `boltzmann-distribution` (printed block with words, about 14 lines; imported 2, Stirling and Lagrange, both stated in
  the section; built per config): "Derivation · the Boltzmann distribution". Replaces "First step is to note that"
  through "This determines a and defines the Boltzmann distribution"; the setup lines of block 2 stay printed. Six
  nodes: ln W = A ln A − Σ a_j ln a_j; ∂ln W/∂a_j = −ln(a_j/A); the stationarity condition; (17.2.4) corrected;
  e^α = 1/Σe^(−βe_j); P_j. Notes correct the Stirling sign, the two derivative signs and (17.2.4).

## Corrections

Footnotes: `c-exp-proportional`, `c-sum-da` (each term carries da_j), `c-stirling-derivative` (the logarithms of the
factorials), `c-problem-4`. In the derivation's notes: the Stirling line, the derivative signs, (17.2.4), "This
determines a" (gone with the replaced block). As printed: "The sum of the probabilities … equals the total number",
"places a very important role", 17.2.1's "CC SA-BY 3.0".

## Wanted at chapter level

- Optional: symbols `q_j` and `q_k` (macros `\kqj`, `\kqk`, type from `molecular-partition-function`) with 17.2
  variables rows ("the molecular partition function of molecule j/k"), so Q = q_iq_jq_k… colours every factor; the
  text writes q_j and q_k plain for now.
