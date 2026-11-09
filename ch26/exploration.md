# Exploration: Chapter 26, Chemical Equilibrium

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 26`, then
`python3 tools/convert.py 26`), every page read in full and the 5 mirrored images looked at (the two
SVGs read from their labels). Lean by the brief: the user has about two hours.

The landing page (11822) prints **no text**: no `intro/` page and no `intro` record (Chapters 4, 22,
24, 25's precedent); `ch26/intro/source.md` holds the title alone. **No 26.S, no 26.E.** **26.13
"Homework Problems" (14520)**, a section in `modules.json`, is the exercise page in all but name, as
25.8 was: the same stray Chapter 4 uncertainty passage (Zielinski) and **Exercise 26.13.1** (the
baseball and the electron at 91.3 mph), which is 1.9's card `e3` already: **not routed, not built**
(25.8 and 19.E precedent); its `source.md` is kept where the converter writes it.

**Where the pages come from.** No page prints a Contributors list. 26.1, 26.2's second half, 26.5's
opening and 26.11–26.12 are Rudolf Winter's CH431 notes (26.12's exercise ends on his pointer "CH
431/Lecture 17/answer2"); 26.2's first half and 26.6 are a UC Davis course page (the unnumbered
Example, the van 't Hoff derivation); **26.3 is DeVoe's *Thermodynamics and Chemistry* §11.8**, with
his printed tags (11.8.20)–(11.8.31) and his cross-references ("Eq. 9.2.46", "Sec. 11.3.2", "Sec.
6.2", "Sec. 14.3.3", "Appendix H"); 26.4 is a CC BY 4.0 page with Ümit Kaya's two SVGs; 26.5's note is
the general-chemistry "Reaction Quotient" module; 26.7 splices Winter with a Wikipedia van 't Hoff
passage; 26.8 is the Wikibooks *Statistical Thermodynamics and Rate Theories* page (CC BY-SA 4.0);
26.9 and 26.10 are short course pages.

**Repeated material** (built once where the book first works it, cited after): from earlier chapters,
dG = Σμ dn (22.5), the Gibbs criterion (22.2), Gibbs–Helmholtz (22.7), G of an ideal gas against P
(22.7), the standard state of a gas (22.6), fugacity, the fugacity coefficient and μ from f (22.8,
whose `sim-fugacity-coefficient` 26.10 cites), (∂μ/∂P)_T = V̄ (23.3), A and μ from Q (23.5),
Stirling (17.2), q as a product (17.8), Θ's and D₀ (18), reaction enthalpy, Hess's law, formation
reactions (19.11–19.12), S° and the reaction entropy (21.2, 21.9), entropy of mixing (20.6), Dalton
(24.1), activity, the activity coefficient, a = 1 for a pure condensed phase (24.7–24.8), ionic
strength (24.7), the extended Debye–Hückel equation (25.6). Within the chapter: **Δ_rG = Δ_rG° +
RT ln Q** is worked first in 26.1 and again for A ⇌ B in 26.4; **K = e^{−Δ_rG°/RT}** first in 26.2
and again in 26.4 and 26.3's opening; **the van 't Hoff equation and its integrated form** first in
26.2, again in 26.7 (26.7's own new result is the linear ln K against 1/T); the **reaction-quotient
form Q = [C]^c[D]^d/[A]^a[B]^b** (26.5) is a form of 26.1's concept.

## Pages

| Page | id | Licence | Headers | Ex / Exr | Fig | Tab | Notes | Displays (numbered) |
|---|---|---|---|---|---|---|---|---|
| landing | 11822 | BY-NC-SA | none, no text | | | | | |
| 26.1 Equilibrium Results when Gibbs Energy is Minimized | 14522 | BY-NC-SA | Extent of reaction; Measuring ξ; Thermodynamic Potentials; Gas Reactions | | 1 unnumbered (411105) | | | 18 (0) |
| 26.2 An Equilibrium Constant is a Function of Temperature Only | 14523 | BY-NC-SA | Le Chatelier's Principle; Concentration | 1 unnumbered example **without a solution** (holding a 5-row table) | | 1 (in the example) | "Note" | 26 (2) |
| 26.3 Standard Gibbs Energies of Formation … | 14524 | BY-NC-SA | none once the macro header is dropped | | | | | 14 (0; 10 carry DeVoe's \tag) |
| 26.4 Gibbs Energy of a Reaction vs. Extent … | 14525 | **CC BY 4.0** | Ideal Gas Equilibrium | | 2 (26.4.1, 26.4.2) | | "Terminology", "Think about it" | 11 (2) |
| 26.5 Reaction Quotient and Equilibrium Constant Ratio … | 14526 | **CC BY 4.0** | none | | | | "Note" (Q vs K) | 5 (2) |
| 26.6 The Sign of ΔG and not ΔG° … | 14527 | BY-NC-SA | none | | | | | 5 (0) |
| 26.7 The van 't Hoff Equation | 14528 | BY-NC-SA | none | | 1 (26.7.1, two panels, "used with permission of Wikipedia") | | a pull-quote | 7 (3) |
| 26.8 Equilibrium Constants in Terms of Partition Functions | 14529 | **CC BY-SA 4.0** | none | Example 26.8.1 (Solution) | 1 unnumbered, hot-linked from upload.wikimedia.org (not mirrored) | 1 (Θ's, D₀) | | 31 (6) |
| 26.9 Molecular Partition Functions … Tabulated | 14530 | BY-NC-SA | none (two paragraphs) | | | | | 0 |
| 26.10 Real Gases … Partial Fugacities | 14531 | BY-NC-SA | none | | | | | 14 (1) |
| 26.11 Thermodynamic Equilibrium Constants … Activities | 14532 | BY-NC-SA | activities of pure condensed phases | | | 1 one-cell ("S&McQ 1083") | | 0 (all maths in `<sub>` prose) |
| 26.12 Activities are Important for Ionic Species | 14533 | BY-NC-SA | (### Weak electrolytes); Solubility products | 1 unnumbered exercise box | | 1 one-cell ("*Question*: … 0.5 mol/l NaCl?") | | 12 (0) |
| 26.13 Homework Problems | 14520 | BY-NC-SA | stray Chapter 4 passage + Exercise 26.13.1 | | | | | 1 (1) |

No objectives, no "## Summary", no embed, no video anywhere.

## Per section (blocks; concepts new unless marked)

- **26.1** Opening (3 paragraphs on solution vs gas reactions, kinetics vs equilibrium): header of the
  agent's, "Where a Reaction Ends"; then the book's four headers. Concepts: `extent-of-reaction`
  (amount), `measuring-extent` (skill), `reaction-gibbs-energy` (Δ_rG = (∂G/∂ξ)), `gibbs-minimum-equilibrium`,
  `standard-reaction-gibbs-energy`, `reaction-quotient`, `reaction-gibbs-quotient` (Δ_rG = Δ_rG° + RT ln Q).
  Uses 22.5's dG = Σμ dn, 22.7's μ of an ideal gas, 22.6's standard state.
- **26.2** Opening (to the integrated van 't Hoff): agent's header "Equilibrium Constant and
  Temperature"; "Le Chatelier's Principle" and "Concentration" kept; the note kept. Concepts:
  `equilibrium-constant`, `standard-gibbs-equilibrium-constant`, `van-t-hoff-equation`,
  `integrated-van-t-hoff`, `k-temperature-only`, `dissociation-extent-pressure`, `le-chateliers-principle`,
  `molarity`, `concentration-equilibrium-constant`. The unnumbered Example (NH₃, five stresses, then
  "write K in mole fractions") prints **no solution**: a question (Chapter 3's decision).
- **26.3** One block once the macro header is gone: agent's header "Gibbs Energies of Formation", or two
  with "Ions in Aqueous Solution" from "For *ions in aqueous solution*". Concepts:
  `reaction-gibbs-enthalpy-entropy`, `standard-gibbs-energy-of-formation`, `reaction-gibbs-from-formation`,
  `aqueous-ion-convention`, `ion-gibbs-energy-of-formation`.
- **26.4** Opening: agent's header "Down to the Minimum"; "Ideal Gas Equilibrium" kept; both notes kept.
  Concepts: `exergonic-endergonic`, `equilibrium-position` (ξ_eq), `mixing-places-minimum`; Δ_rG°,
  Δ_rG = Δ_rG° + RT ln(P_B/P_A), K_eq = P_B/P_A and K = e^{−Δ_rG°/RT} are 26.1–26.2's, cited.
- **26.5** One block, agent's header "Which Way a Reaction Goes"; the note kept. Concept:
  `q-over-k-direction` (Δ_rG = RT ln(Q/K)); Q = [C]^c[D]^d/[A]^a[B]^b is a form of `reaction-quotient`
  (already staged as `q-concentrations`).
- **26.6** One block, agent's header "Standard Conditions Are Not Reaction Conditions". Concept:
  `sign-of-delta-g` (idea).
- **26.7** One block (or two, "Integrating" before "The expression for K is a rather sensitive
  function"); the pull-quote kept as an untitled emphasis note (13.12 precedent). Concept:
  `van-t-hoff-plot`; the differential and integrated forms cite 26.2.
- **26.8** Two blocks proposed: "From Partition Functions to K" and Example 26.8.1 (an example, kept
  whole with corrections). Concepts: `chemical-potential-q-over-n`, `helmholtz-minimum-equilibrium`,
  `equilibrium-constant-partition-functions` (K_c), `k-from-molecular-data` (skill). Reuses 23.5's μ
  from Q, 17.2's Stirling, 17.8's factorisation, 18's Θ and D₀.
- **26.9** One block. Concept: `thermochemical-tables` (idea, JANAF). The links to NIST/JANAF stay.
- **26.10** One block. Concept: `fugacity-coefficient-from-z` (ln γ = ∫(Z − 1)/p dp); everything
  else is 22.8's. The book writes the fugacity coefficient γ (22.8: φ): variables row `gamma`
  `redefines`.
- **26.11** Opening (K in activities): agent's header "Equilibrium Constants in Activities"; "activities
  of pure condensed phases" kept as printed. Concepts: `activity-equilibrium-constant` (K = K_γK_c/K_c°),
  `condensed-activity-pressure`, `condensed-equilibrium-temperature`. The one-cell table "S&McQ 1083"
  is Winter's page pointer to McQuarrie and Simon (kept as printed, `div.book-table`).
- **26.12** "### Weak electrolytes" under an agent's `<h2>` "Weak Electrolytes" (the `###` promoted
  to the block's header); "Solubility products" kept. Concepts: `equilibrium-activity-iteration`
  (skill), `solubility-activity-effect` (idea); the ln γ± = −1.173|z₊z₋|√I/(1 + √I) form belongs to
  25.6's `extended-debye-huckel-equation` (the builder adds it with `ost add forms`). The one-cell
  "*Question*" table is an inline question (a Try It); the exercise box goes to the Exercises document.

## Equation numbers

One per display, as the converter numbers them: (26.2.1)–(26.2.2), (26.4.1)–(26.4.2),
(26.5.1)–(26.5.2), (26.7.1)–(26.7.3), (26.8.1)–(26.8.6), (26.10.1); every `[ref:eq:…]` resolves on
its page. **26.3 keeps DeVoe's printed tags (11.8.20)–(11.8.31)** as the converter has done since
4.S ("a display with its own \tag prints that tag and takes no number"), so the prose's "Eq. 11.8.22",
"Eq. 11.8.23", "Eq. 11.8.24" point at displays on the page (see the open question). DeVoe's other
references (Eq. 9.2.46, Sec. 11.3.2, Sec. 6.2, Sec. 14.3.3, Appendix H) are printed labels, kept as
printed, with one footnote naming them another text's (25.2's Peverati precedent). 26.4's "Section
26.4" links to page 14522, i.e. 26.1 (footnote; the link becomes an in-book `xref` to 26.1).

## Exercise count report (root rule 13), counted from source.md

- **Inline exercise boxes**: **1 printed** (26.12, unnumbered: pH of water with 0.5 m of an M²⁺X²⁻
  salt); **0 keyed** (it ends on a pointer, "CH 431/Lecture 17/answer2", to an answer not printed);
  **1 unkeyed** (compute + explain). *Checked*: I = 2.0, γ±² = 0.253 by the page's formula, [H₃O⁺]
  = 1.99 × 10⁻⁷ mol/L (−log of the concentration 6.70), while −log a(H₃O⁺) stays 7.00.
- **Example boxes without a solution**: **1** (26.2's unnumbered NH₃ example, five stresses and a K in
  mole fractions); **0 keyed**; **1 unkeyed** (explain: right, left, right, unaffected, left; and
  K = x_{N₂}x_{H₂}³P²/(x_{NH₃}²P°²)).
- **Inline questions**: **1** (26.12's one-cell "Question": 0.5 mol/L NaCl added to 0.1 mol/L acetic
  acid); **0 keyed**; **1 unkeyed** (compute: with I ≈ 0.50, γ±² = 0.378, x = 2.12 × 10⁻³ mol/L
  against 1.37 × 10⁻³: the ionisation rises by about half; *checked by computation*).
- **Worked examples**: **1** (26.8.1, with a Solution), kept whole as an example, corrected.
- **26.13**: **1 printed** (26.13.1), 0 keyed, **not routed** (1.9's card `e3`).
- **In all**: **3 cards** from the book, 0 keyed, 3 unkeyed (2 compute, 1 explain).
- **Proposed new: 10** (concepts otherwise untested; every answer *checked by computation* from the
  book's own numbers):
  - 26.1: extent: N₂ + 3H₂ → 2NH₃ from 1.00 and 3.00 mol, 0.40 mol NH₃ formed → ξ = 0.20 mol,
    n(N₂) = 0.80, n(H₂) = 2.40 mol.
  - 26.3: from 26.6's Δ_rG° = −32.9 kJ/mol and (11.8.24): Δ_fG°(NH₃) = −16.45 kJ/mol, K = 5.8 × 10⁵
    at 298.15 K.
  - 26.4: A ⇌ B with Δ_rG° = +5.00 kJ/mol at 298.15 K: K = 0.133, x_B at equilibrium 0.117.
  - 26.5: P(NH₃) = 10, P(N₂) = P(H₂) = 1 bar: Q = 100 < K, forward, Δ_rG = RT ln(Q/K) = −21.5 kJ/mol.
  - 26.6: P(NH₃) = 1, P(N₂) = P(H₂) = 0.01 bar: Δ_rG = −32.9 + 45.7 = +12.8 kJ/mol though Δ_rG° < 0.
  - 26.7: from 26.2's Δ_fH°(NH₃) = −45.90 kJ/mol (Δ_rH° = −91.8) and K(298.15 K) = 5.8 × 10⁵:
    K(400 K) = 47.
  - 26.8: the electronic factor of 26.8.1, e^{(2·427.7 − 431.9 − 239.0) kJ/mol/RT}, = 6.70 × 10¹⁴ at
    650 K and 4.3 × 10⁹ at 1000 K (explain why K falls).
  - 26.9: Δ_fG° = −RT ln K_f: log K_f of NH₃ at 298.15 K = 2.88 from −16.45 kJ/mol.
  - 26.10: Z = 1 + B′p with B′ = −5.0 × 10⁻³ bar⁻¹ at 50 bar: ln γ = −0.25, γ = 0.78, f = 39 bar.
  - 26.11: liquid water at 100 bar (V̄ = 18.07 cm³/mol, *from memory*): a = 1.075.
  - 26.2 and 26.12 none (they hold the book's question and exercise).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

The point the reader sees first, motion only where the idea moves, one figure per idea; the book's
numbers opened on.

| Image | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 411105, unnumbered | 26.1 | G against ξ from reactants to completion, the minimum marked "Equilibrium", "Slope = dG/dξ = μ" in red | **Kept** as printed (the first sketch of the idea; its interactive form is 26.4's fold, cited from here). Its "= μ" is Δ_rG: corrected in the row's caption, no marker; the alt ("slope formula") rewritten true. |
| 26.4.1 + 26.4.2 (404307, 404308; Ümit Kaya, CC BY-NC 4.0) | 26.4 | G(ξ) with the ΔG < 0, = 0, > 0 regions; then the straight "without mixing" line, the mixing dip and the "including mixing" curve | **Fold, still, 2D** ("Figure 26.4.1 + 26.4.2"). A ⇌ B, ideal gases: the straight line between μ_A° and μ_B°, the mixing term nRT(χ_A ln χ_A + χ_B ln χ_B), and their sum, its minimum marked ξ_eq, the tangent at a draggable ξ coloured by the sign of its slope Δ_rG. Sliders Δ_rG° (−10 to +10 kJ/mol, detent at 0) and T (200–1000 K). **Point: with Δ_rG° = 0 the minimum sits at half and half; Δ_rG° slides it toward the lower-G side but never to the end, because mixing always pays.** Readout Δ_rG = Δ_rG° + RT ln(ξ/(1 − ξ)) live and K = e^{−Δ_rG°/RT}, ξ_eq = K/(1 + K). Still: it answers its sliders. Originals kept (credit). |
| none | 26.5 | — | **Sim, moving, 2D** (`sim-q-toward-k`; brief's "Q moving toward K"; a time: the reaction runs). The same G(ξ) curve for N₂ + 3H₂ ⇌ 2NH₃ at 298 K (26.6's Δ_rG° = −32.9 kJ/mol, so it serves 26.6 too, cited there); a start-composition slider sets Q₀; play and the state point slides downhill to the minimum while a log-scale Q marker travels to K. **Point: the sign of ln(Q/K) is the direction; the reaction stops exactly when Q reaches K, from either side.** Readout Δ_rG = RT ln(Q/K) with live numbers. Transport. |
| 26.7.1 (106013, 106014; "used with permission of Wikipedia") | 26.7 | two schematic ln K_eq against 1/T lines, endothermic falling, exothermic rising | **Replaced by a Sim, still, 2D** (`sim-van-t-hoff`; the original not shipped: permission given to the book, 4.1.1's precedent; `notes` credits it). ln K against 1/T as a line, sliders Δ_rH° (−100 to +100 kJ/mol, special at 0: flat line) and Δ_rS° (−150 to +150 J/(K mol)), a T marker with its K. **Point: the slope is −Δ_rH°/R, so an endothermic reaction's K rises with T and an exothermic one's falls; the intercept at 1/T = 0 is Δ_rS°/R.** Readout ln K = −(Δ_rH°/R)(1/T) + Δ_rS°/R and the integrated form between two marked temperatures. Opens on the NH₃ synthesis (Δ_rH° = −91.8 kJ/mol from 26.2; Δ_rS° from Δ_rG° = −32.9 kJ/mol at 298 K: −198 J/(K mol)). |
| unnumbered, hot-linked (Wikimedia "Helmholtz Energy with respect to Equilibrium Shifts") | 26.8 | A against λ with its minimum (not mirrored: the network refuses upload.wikimedia.org, 15.4.1's precedent) | **Not shipped**; the builder drops the image and its line "Helmholtz Energy with respect to Equilibrium Shifts" (named in `notes`), and the prose cites 26.4's fold (the same minimum at constant T and V). |
| none | 26.8 | — | **Sim, still, 2D, optional** (`sim-k-from-q`; brief's "K from q's"). Example 26.8.1's H₂ + Cl₂ ⇌ 2HCl: four bars of log₁₀ of the translational, rotational, vibrational and electronic ratios and their sum log₁₀ K_c, T slider 300–2000 K, opening at 650 K. **Point: the electronic (bond-energy) factor of about 10¹⁵ outweighs everything; it shrinks as T rises, so K falls.** Readout K_c as the product with live numbers. Built on the corrected example (below). |

**3D**: none (every idea here is a relation between quantities: rule 28.1).

### Extra simulations judged and dropped

A van 't Hoff Sim in 26.2 (26.7's carries it: repeated); a Le Chatelier compression Sim for 26.2's
PCl₅ (K = Pξ²/(1 − ξ²) is one readout line, no motion the text lacks); a fugacity Sim in 26.10 (22.8's
`sim-fugacity-coefficient` is cited); an iteration Sim for 26.12 (four numbers say it).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 26.1 | dG = Σμ dn → dn_i = ±ν_i dξ → (∂G/∂ξ) = Σν_iμ_i = Δ_rG → μ_i = μ_i° + RT ln(P_i/P_i°) → Δ_rG = Δ_rG° + RT ln Q | printed | **Build**: "Derivation · the reaction Gibbs energy from the reaction quotient"; facts 22.5, 22.7 (μ of an ideal gas), the extent's definition; dn_B = −v_A dξ corrected (note). |
| 26.2 | Δ_rG = 0 → Δ_rG° = −RT ln K → ln K = −Δ_rG°/RT → Gibbs–Helmholtz → van 't Hoff → integrate | printed | **Build**: "Derivations · the van 't Hoff equation"; facts 22.7; `drv` to 26.1's. |
| 26.2 | n's from ξ → Dalton → K = Pξ²/(1 − ξ²) | printed (lines with words) | **Build**: "Derivation · K for A ⇌ B + C from the extent"; fact 24.1's Dalton; one line inserted (the quotient before simplifying). |
| 26.2 | c = P/RT into K → (RT)^g absorbed into Δ_rG° | hidden: facts 1 + run 3 + joins 0 = 4, 4 moves | **Build (short)**, meets the bar exactly; drop if time is short. |
| 26.3 | μ_i = H_i − TS_i → (11.8.20) → (11.8.21); cation (11.8.25)–(11.8.27) → (11.8.28) | printed | **Build**: "Derivation · the Gibbs energy of formation of an ion" (the (11.8.20) step as its first fact line); the anion (11.8.30) "by the same method" stays printed. |
| 26.4 | Δ_rG = μ_B − μ_A → … → K = e^{−Δ_rG°/RT} | printed, repeats 26.1/26.2 | **Stays** printed, cites 26.1's and 26.2's derivations. |
| 26.5 | subtract → Δ_rG = RT ln(Q/K) | 1 move | Stays. |
| 26.7 | Gibbs–Helmholtz → van 't Hoff → integrated; K = e^{−ΔG/RT} → ln K linear in 1/T | printed, the first repeats 26.2; the second 2 moves | First stays and cites 26.2; second stays. |
| 26.8 | A = −kT ln(q^N/N!) → Stirling → μ_i = −kT ln(q_i/N_i); dA = Σμν dλ = 0 → Σν ln(q/N) = 0 → K_c = Π(q/V)^ν | printed, 12 displays | **Build** two records: "Derivation · the chemical potential from q" (`drv` to 23.5's) and "Derivation · K_c from partition functions"; the j/i subscript mix and "N_{j≠1}" follow the correct mathematics (notes). |
| 26.8.1 | substitutions | never | Stays an example (corrected). |
| 26.10 | dμ = V dp − S dT → ∂ln f/∂p = V/RT = Z/p → f = γp → ln γ = ∫(Z − 1)/p dp | printed | **Build**: "Derivation · the fugacity coefficient from Z"; three broken lines corrected (below); fact 22.8's μ from f. |
| 26.11 | μ = μ° + RT ln a, dμ = V̄ dP → ln a′ = (P′ − 1)V̄/RT | printed (sub/sup prose lines) | **Build**: "Derivation · the activity of a solid under pressure"; fact 23.3's (∂μ/∂P)_T = V̄. |
| 26.11 | Δ_rG° = 0 → T = Δ_rH°/Δ_rS° | 2 moves | Stays. |
| 26.12 | iterations | substitutions | Stay. |

Eight records (26.1, 26.2 ×2 or 3, 26.3, 26.8 ×2, 26.10, 26.11).

## Corrections spotted (root rule 13)

The book's words kept, a numbered footnote where each applies; *checked* = computed here.

- **26.1**: dn_B = −v_A dξ (−v_B dξ); "Slope = dG/dξ = μ" in the figure (Δ_rG; row caption); "the react
  ion", "thermodynamics..", "v_i,_r" (markup, as printed).
- **26.2**: "\Delta rG" (markup); "P_B [ξ/1+ξ] P" lost its "=" (as printed); K = Pξ²/(1 − ξ²) *checked*.
- **26.3**: none; DeVoe's references (open question).
- **26.4**: "As discussed in Section 26.4" (26.1; footnote, link to 26.1); "the point where is the
  minimum" (as printed).
- **26.6**: Δ_rG° = −32.9 "kJ/(mol K)" and Δ_rG = 0 "kJ/(mol K)" (kJ/mol; one footnote); "N₂ and
  O₂ will decrease" (H₂; footnote). −32.9 kJ/mol is 2 × Δ_fG°(NH₃) = 2 × −16.45 (*from memory,
  unchecked*).
- **26.8**: "N_{j≠1}" (j ≠ i); "ln(q_i/N_i)ν_j" under Σ_j (i for j); "Sterling's" (as printed).
  **Example 26.8.1 is wrong in three places** (footnote under the example; the Sim uses the corrected
  numbers): the table's Θ_ν are swapped between H₂ and Cl₂ (808 K is Cl₂'s, 6125 K H₂'s; the product of
  the vibrational factors happens to be unchanged); the molecular masses are not the molecules'
  (2.1957 × 10⁻²⁴ kg is 1322 u, not HCl's 36.46 u; likewise H₂ and Cl₂), so the translational q/V are
  wrong; and the final product puts H₂'s translational value in the numerator and takes the rotational
  ratio as 0.1333 instead of 42.76²/(3.71 · 925.9) = 0.532. With the book's own Θ_r, Θ_ν and D₀ and the
  true masses: translational ratio 28.36, rotational 0.532, vibrational 0.713, electronic 6.70 × 10¹⁴,
  **K_c = 7.2 × 10¹⁵** against the printed 2.26 × 10¹¹ (*checked by computation*). A cross-check from
  tabulated ΔH° ≈ −184.6 kJ/mol and ΔS° ≈ +20 J/(K mol) gives ≈ 7.5 × 10¹⁵ (*from memory, unchecked*,
  used only to confirm).
- **26.10**: "dμ − Vdp − SdT" (dμ = V dp − S dT); "with respect to pressure at constant volume"
  (temperature); "Multiplying both sides by p/RT gives [∂ln f/∂p]_T = pV/RT = Z" (∂ln f/∂p = V/RT =
  Z/p; it is p(∂ln f/∂p) that equals Z); "(Z/∂p − 1/∂p)" (Z/p − 1/p); one footnote for the chain, the
  derivation follows the correct mathematics.
- **26.11**: "Example 26-12 shows that for graphite the activity is only 1.01 at 100 bars" — with
  graphite's density 2.26 g/cm³ (*from memory, unchecked*) ln a′ = 99 bar · 5.31 cm³/mol/RT gives
  1.02: as printed unless the builder confirms the density. "In stead", "equilbrium" (as printed).
- **26.12**: "K = γ±³[Ba²⁺][F⁻]2" (the square lost; markup, as printed); "I = ½(+2)²x + (−1)²x = 3x"
  (½[(+2)²x + (−1)²(2x)]; footnote); "an increase of about 30%" — 0.0107 (0.011) against 7.52 × 10⁻³ is
  about 43–46% (*checked by computation*; footnote). The acetic-acid numbers (1.31, 0.921, 1.365, 1.37 ×
  10⁻³) and γ± = 0.736, 0.0102 *checked*.

## Licences of the figures

26.4.1, 26.4.2: "CC BY-NC 4.0; Ümit Kaya via LibreTexts", shipped with credit on a CC BY 4.0 page (the
figures keep their own BY-NC). 411105: uncredited, under the page's licence. 26.7.1: not shipped
("used with permission"). 26.8's Wikimedia image: not mirrored, not shipped. **Page licences**: BY-NC-SA
4.0 except 26.4 and 26.5 (CC BY 4.0, shared under the book's BY-NC-SA, 23.4's precedent) and 26.8 (CC
BY-SA 4.0, shared BY-SA).

## What is new to OmniStax here

- **No new type.** Δ_rG, Δ_rG°, Δ_fG°, Δ_rH°, Δ_fH°, μ_i° energy; Δ_rS, Δ_rS°, S_m° entropy; ξ, ξ_eq
  amount; P_A…P_Z, P_i°, f°, P′ pressure; T_equilibrium, Θ_r, Θ_ν temperature. K, Q, K_c, ν's, c,
  activities and coefficients, N_i, λ, ρ in ink. `colours:default` not run.
- **Symbols**: 45 new (24 with macros); 171 variables rows. `\kxi` was taken (x_i), so ξ is
  `\kxiext`. `gamma` (the fugacity coefficient in 26.10), `Z` (compression factor after 17.3's
  partition function), `c_i`, `m` (a molecule's mass) and `V` (26.10's molar volume) carry `redefines`.
  New keys rather than reuse where the printed notation differs: Δ_rS° (21.9's key prints
  Δ_{rxn}S°), Δ_fH° (19.12's prints ΔH_f°), μ_i^o (25.2's prints ⊖).
- **38 concepts, 71 edges** (Hasse-checked against the merged book: 4 redundant edges removed before
  the merge), 38 forms.
- **Media names**: the two van 't Hoff images were renamed in `media/ch26/` without the apostrophe
  (`106013-Endothermic_Reaction_vant_Hoff_Plot.png`, `106014-…`) for the offline build; the drafts use
  the new names, while `26.7/source.md` keeps the converter's `van't` name (the converter's naming was
  not changed: it would rename Chapters 12, 20 and 24's media with ' or , too). Neither image ships
  (used with permission).

## The chapter's answer to root rule 23

Equilibrium is a valley. Every page of the chapter is the same curve seen from a new side: G against
ξ falls into a minimum because mixing always pays (26.4), the reaction rolls down to it from either
side as Q walks to K (26.5–26.6), the valley's floor moves as T tilts ln K along a line of slope
−Δ_rH°/R (26.7), and the floor's depth is set, molecule by molecule, by the bond energies in the
partition functions (26.8). Three figures carry it: the fold of 26.4, the rolling state point of 26.5
and the van 't Hoff line of 26.7, with an optional bar chart showing the electronic factor's 10¹⁵.

## Tool changes made for this chapter

`tools/lt2md.py`: 26.3 (DeVoe) opens with an `<h2>` holding a `div.Headertext` of ~110 `\newcommand`
lines that MathJax hides on the live page; the converter printed it as a `##` header of raw macro
definitions, and every formula of the page used the macros (`\Delsub`, `\st`, `\tx`, `\m`, `\K`,
`\arrow`), which KaTeX does not know. The converter now reads the page's own definitions from that
header, drops the header, and expands the macros in the page's maths, lifting maths written inside
`\text{}` (`\tx{Hg$_2$$^{2+}$}`) out so no formula holds a dollar sign. Only 26.3 among the 379 pages
has such a block, and the change acts only where it is present: Chapters 1–25 reconverted to a scratch
folder before and after the change are byte-identical. (Separately, the committed `ch01/1.3/source.md`
differs from what the converter writes today, before and after this change, in one italic run
"*kinetic* *energies*": older than this pass.) `md2html.py` unchanged. Drafts for 26.1–26.12: 392
maths spans set by KaTeX 0.16.47 in strict mode without an error. Builder notes: 26.8's hot-linked image
comes through as a mangled `![undefined…` link paragraph (delete it); 26.11 is all `<sub>`/`<sup>`
prose maths with `<s>o</s>` for the standard mark (the builder may set the key lines as displays);
26.2's and 26.12's one-cell tables are a question and a page pointer, not data.
