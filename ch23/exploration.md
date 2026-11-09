# Exploration: Chapter 23, Phase Equilibria

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 23`, then
`python3 tools/convert.py 23`), every page read in full and all 10 mirrored images looked at.
The landing page (11819, CC BY-NC-SA, no author tag) prints **one paragraph of its own** (phase
equilibria, the chemical potential as the criterion of stability, the phase diagram): it is the
chapter's **`intro/` page** and `chapter.json` has an `intro` record. **There is no 23.S page.**
**23.E (14496) is empty** (title only): no exercise to route (root rule 9), not built.

**Where the pages come from.** No page prints a Contributors list and no page carries an author
tag: every page is the book's. The pages are splices of other LibreTexts texts, which shows in
their labels: 23.1 and the opening of 23.2 are Rudolf Winter's CH431 notes (images `CH431_…`);
the rest of 23.2 and the middle of 23.4 are Tuckerman's notes, still printing **his figure and
equation numbers** (Figure 13.4–13.7, `\label{13.1}`…, `\label{14.1}`…); the end of 23.4 is a
general-chemistry page (its objectives box sits mid-page, then Figure 23.4.1 and three examples).
So 23.4 works the Clapeyron and Clausius–Clapeyron equations **three times** (23.3's derivation,
23.4's opening, Tuckerman's (23.4.2)–(23.4.16)) and states the integrated form three ways
((23.4.16), (23.4.19), (23.4.20)).

**Repeated material** (built once where the book first works it, cited after): the Clapeyron
equation (derived 23.3; Tuckerman's (23.4.2)–(23.4.10) cite it); the Clausius–Clapeyron equation
(derived 23.4's opening (23.4.1); Tuckerman's (23.4.11)–(23.4.13) cite it); μ = Ḡ (23.1; (23.4.5));
equal chemical potentials (23.3; (23.4.2)); (∂Ḡ/∂P)_T = V̄, (∂Ḡ/∂T)_P = −S̄ (22.5's
`gibbs-first-derivatives`; 23.2's (23.2.1), (23.2.4), 23.3 and (23.4.6) use it). From earlier
chapters, all merged: G, A and their fundamental equations with μ dn (22.1, 22.2, 22.5), the
chemical potential (22.5), G of an ideal gas and of a solid against pressure (22.7), G(T) with kinks
at transitions (22.7), the first-order transition and Δ_trs S = Δ_trs H/T_trs (21.3), enthalpy and
the heat of fusion (19.8), the critical point and supercritical fluid (16.3), the ideal gas law and
molar volume (16.1), U and S from Q (17.3, 20.8), the Boltzmann distribution (13.2).

## Pages

| Page | id | Licence | Headers (`<h2>`, deeper in brackets) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|
| landing | 11819 | BY-NC-SA | one paragraph | | | | | | | |
| 23.1 A Phase Diagram Summarizes … | 14497 | BY-NC-SA | (untitled opening); Thermodynamic Stability and Fluctuations; Unary Phase Diagrams (#### Liquid-Vapor, Gas-solid, Liquid-solid Equilibrium Curve; ### Putting the Curve Together); Number of moles (### Partial variables) | | | 2 (23.1.1, 23.1.2) | 1 (the unary diagram) | | 2 (emphasis, untitled; note "The partial molar Gibbs free energy") + 1 pull-quote | 0 / 13 |
| 23.2 Gibbs Energies and Phase Diagrams | 14498 | BY-NC-SA | First Order Transitions; Second Order Transitions; Conjugate Variables | | | 4 (printed 13.4–13.7) | 2 (G̅(T) sketch; G, S, C_P for 1st and 2nd order) | 1 (23.2.1) | | 6 / 8 |
| 23.3 The Chemical Potentials … in Equilibrium | 14499 | BY-NC-SA | Chemical Potential of Two Phases in Equilibrium; The Clapeyron Equation | | | | | | | 0 / 11 |
| 23.4 The Clausius-Clapeyron Equation | 14500 | **CC BY 4.0** | Evaporation; The Clapeyron Equation (holding Tuckerman's part, the objectives box, Figure 23.4.1, the examples, the exercise and two notes) | 4, all with Solution (printed 23.4.1 **twice**, 23.4.2, 23.4.3) | 1 (printed 23.4.2; no 23.4.1), unkeyed | 1 (23.4.1) | | | 2 ("Alternative Formulation", carrying (23.4.20); "Advanced Note") | 20 / 34 |
| 23.5 Chemical Potential … From a Partition Function | 14501 | BY-NC-SA | none | | | | | | | 0 / 11 |
| 23.E | 14496 | BY-NC-SA | empty | | | | | | | |

Counts agree with the full-book table (4 examples, all keyed; 1 exercise box, unkeyed; 6 figures;
1 table; 77 displays; 1 section with objectives). Objectives: 23.4 only (two items, no lead-in), to
`objectives`. No "## Summary" on any page; no embeds, no video. 23.4 is CC BY 4.0 at the source
and shared CC BY-NC-SA 4.0 like the rest (Chapters 1, 5, 8 precedent).

## Per section

- **23.1** The two opening paragraphs (maps and diagrams) are the section's own introduction, the
  first block (header proposed: "Reading a Diagram"). The book's `<h2>`s kept with their `###` and
  `####`. Concepts (new): kinds of equilibrium (stable, metastable, indifferent, labile, unstable;
  bold); fluctuations of G (idea); critical opalescence (idea); the unary phase diagram; the
  equilibrium vapor pressure P_eq (type pressure); the three coexistence curves (melting and freezing
  bold); boiling; the triple point; standard and normal melting, boiling and sublimation points; the
  plane–curve–point count of phases (in the emphasis note); n_ice + n_water = n_total and
  dn_ice = −dn_water; molar quantities G/n, V/n; partial molar quantities (∂V/∂n₁); μ = G/n for a pure
  substance (the note names μ "the thermodynamic potential", the book's word, kept). Reinforces
  22.5's chemical potential and dG = −SdT + VdP + Σμ_i dn_i, 16.3's critical point.
- **23.2** Headers kept. Concepts (new): the Ehrenfest classification (Table 23.2.1, kept as
  printed); the second-order transition; S(liquid) > S(solid) from the slopes of G(T); V̄(gas) ≫
  V̄(liquid) > V̄(solid), and ice above liquid for water, from the slopes of Ḡ(P); how Ḡ(P) changes
  through the triple and critical temperatures (idea); conjugate variables; dG and G with electrical,
  magnetic, elastic and surface terms. Reinforces 21.3's first-order transition and 22.7's G(T).
  The Tuckerman part ("The Gibbs free energy is a particularly important function …") sits under
  "Second Order Transitions" though it is about first-order behaviour; the builder may open a block
  there with a header of its own (proposed: "Gibbs Energy Across Benzene's Transitions").
- **23.3** Headers kept. Concepts (new): equal chemical potentials at phase equilibrium (Δμ = 0);
  dμ = V̄dP − S̄dT; the Clapeyron equation dP/dT = ΔS̄/ΔV̄ = ΔH̄/(TΔV̄) (bold "Clapeyron.", the
  period inside the bold). "That is the almost vertical line in the diagram" points at 23.1's unary
  diagram: an in-book link to the Sim there.
- **23.4** Headers kept; the general-chemistry part, from "The *vaporization curve*s of most
  liquids", gets a block of its own (proposed: "Vapor Pressure Curves"). Objectives to the tables.
  Concepts (new): the Clausius–Clapeyron equation (23.4.1); its integrated forms (23.4.16),
  (23.4.19), (23.4.20) and P = C′e^(−ΔH/RT) on one concept; the enthalpy of vaporization (type
  energy); vapor pressure rising with T, the normal boiling point where a curve crosses 1 atm; the
  heat of sublimation as fusion plus vaporization; the skill of using the equation both ways (the
  objectives). Tuckerman's Clapeyron (23.4.2)–(23.4.10) stays printed and cites 23.3; his (23.4.5)
  is a form of μ = Ḡ, his (23.4.2) of Δμ = 0, his (23.4.10) of the Clapeyron equation. Examples
  23.4.1 (both), 23.4.2, 23.4.3 kept whole; the second printed "Example 23.4.1" keeps its label (id
  `ex-23-4-1-2` in the draft). Exercise 23.4.2 (unkeyed) tests ice's vapor pressure above the
  triple point.
- **23.5** No header: one block proposed, "From Q to the Chemical Potential". Concepts (new):
  A = −RT ln Q (as printed; see corrections); μ = (∂G/∂n)_{P,T} = (∂A/∂n)_{V,T}; μ = −RT(∂ln Q/∂n)_{V,T}.
  Uses 17.3's U from Q, 20.8's S from Q, 22.1's A = U − TS, 22.5's fundamental equations.

## Equation numbers

One number per display, from the converter's `n=`: (23.2.1)–(23.2.6) (Tuckerman's labels 13.1–13.6);
(23.4.1)–(23.4.20) (the opening's `CCe` is (23.4.1); Tuckerman's 14.1–14.14 are (23.4.2)–(23.4.16);
the general-chemistry page's 1, 2, 2B are (23.4.18)–(23.4.20), (23.4.17) being the first Example
23.4.1's `align`). 23.1, 23.3 and 23.5 number nothing. Every `[ref:eq:…]` resolves on its page.
Printed labels kept as printed (Chapters 3–22 precedent): Figures 13.4–13.7 keep Tuckerman's
numbers in their eyebrows and rows; the two "Example 23.4.1"; "Exercise 23.4.2" with no 23.4.1;
23.4's "Section 23.3" as an in-book `xref`.

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises**: **1 printed** (23.4.2, "Show that the vapor pressure of ice at 274 K is
  higher than that of water at the same temperature"); **0 keyed**; **1 unkeyed**, available with an
  AI solution: compute (both curves pass through the triple point, 273.16 K and 4.58 Torr (23.1);
  ln(P_ice/P_water) = (Δ_sub H − Δ_vap H)/R · (1/273.16 − 1/274) = Δ_fus H/R · (…) with the book's
  6006 J/mol (Example 23.4.2's note) gives P_ice/P_water = 1.0081; with 45 051 J/mol for vaporization
  P_water = 4.867 Torr and P_ice = 4.907 Torr; *checked by computation*). Its prompt's "the curve of
  vaporization is also called the curve of vaporization" is printed as it stands, a note under the card.
- **Worked examples**: 4 (23.4.1 boiling at 473 K: 16 bar; 23.4.1 Vapor Pressure of Water: 0.697 and
  1.409 atm; 23.4.2 Sublimation of Ice: 52 370 J/mol; 23.4.3 Ethanol: 39.0 kJ/mol; every number
  *checked by computation*), kept whole, not exercises.
- **23.E**: empty. **Placement and kind**: 23.4.2 stays in 23.4, kind `exercise`, `place: end`.
- **In all**: 1 card, 0 keyed, 1 unkeyed (1 compute).
- **Proposed new: 4**, where a concept would otherwise have none, answers from the book's numbers:
  **23.1** one (water's triple point 273.16 K and 4.58 Torr: ice warmed from 250 K at 3 Torr sublimes
  and never melts; at 1 bar it melts, then boils; explain); **23.2** one (classify from Table 23.2.1:
  a transition where S is continuous with a kink and C_P jumps is second order; where G has a kink, first
  order; explain); **23.3** one (the Clapeyron slope of the ice melting line from the book's
  Δ_fus H = 6006 J/mol and the densities of ice and water, 0.9167 and 0.9998 g/cm³ (*from memory,
  unchecked*): ΔV̄ = −1.633 cm³/mol, dP/dT = −134.6 bar/K, so 100 bar lowers the melting point by
  about 0.74 K; *checked by computation*); **23.5** one (with the corrected μ = −k_BT(∂ln Q/∂N), show
  that an ideal gas, Q = q^N/N!, has μ = −k_BT ln(q/N), using Stirling's approximation (17.2); prove).
  23.4 has four examples and the exercise: none proposed.

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten: a figure starts from the book's and usually replaces it; motion where the idea
moves; a point the reader sees at once; little effort to read; folds where the book draws one scene
several times. The chapter's own numbers: water's triple point 273.16 K and 4.58 Torr, P_eq ≈ 15 Torr
at room temperature (23.1); Δ_vap H of water 40.65 and 40.7 kJ/mol at 373 K, 45 051 J/mol at 0 °C,
Δ_fus H 6006 J/mol, ice's vapor pressures 2.965 and 4.560 Torr at 268 and 273 K, ethanol's 150 Torr at
40 °C and 760 Torr at 78 °C (23.4's examples); benzene's G̅(T) and G̅(P) (Figures 13.5, 13.6, readable
off the images). No arrow in any figure is kinematic: 23.1.2's pressure arrows and the unary diagram's
"T =>" are notation.

| Image | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 23.1.1 (113529, GIF, no credit) | 23.1 | a G curve against "some variable X" with points A (stable), B (metastable), C (indifferent), D (labile), E (unstable); the caption says A and B wobble, C wanders, D and E vanish | **Replace, moving, 2D** (`sim-gibbs-stability`; motion: the caption's fluctuations have a time in them). The book's curve; a state point started at A–E (a choice) jiggles under thermal noise (Langevin steps on G(X)); slider: fluctuation size (kT on the curve's scale). **Point: A and B only wobble in their wells, C drifts far along its flat stretch, D and E roll away to a minimum.** Readout dG/dX and d²G/dX² at the point with the kind of equilibrium. Transport (a cycle of noise). Eyebrow "Figure 23.1.1"; original kept. |
| 23.1.2 (113530 CH431_vaporeq, no credit) | 23.1 | three cylinders: liquid (P > P_eq), liquid + vapor (P = P_eq), vapor (P < P_eq) | **Kept** as printed: the three states read at once, and the phase diagram below gives the variation. (The converter now reads its caption: tool change below.) |
| unnumbered "A typical unary diagram" (113531 CH431_unary) | 23.1 | schematic P–T diagram: solid, liquid, vapor, mp, bp, triple, subl.p, T_c, the Earth and Mars pressure lines | **Replace, still, 2D** (`sim-phase-diagram`, a Sim with the image as original; variation: the reader drags the state point). Water on a log-P axis, built from the book's numbers: triple point 273.16 K and 4.58 Torr; vaporization and sublimation curves by the integrated Clausius–Clapeyron equation with 45 051 and 51 057 J/mol; the melting line by the Clapeyron equation with 6006 J/mol and ΔV̄ = −1.63 cm³/mol, leaning back; the vaporization curve ends at the critical point, 647 K and 220.6 bar (*from memory, unchecked*); the 1 bar line and Mars's ≈ 6 mbar (*from memory, unchecked*). A choice water / CO₂ (CO₂ triple point 216.6 K and 5.2 bar, critical 304.1 K and 73.8 bar, *from memory, unchecked*) shows the sublimation on Earth the text describes. **Point: a phase lives in a region, two only on a curve, three only at the point; CO₂'s triple point above 1 bar is why it never melts on Earth.** Readout: the phase or phases at the point, and on a curve the Clapeyron slope dP/dT = ΔH̄/(TΔV̄) with live numbers (23.3 cites it). |
| unnumbered G̅(T) sketch (410058, no credit) | 23.2 | three straight segments, solid, liquid, gas, with kinks at the melting and boiling points | **Replace, still, 2D** (`sim-gibbs-temperature`, a Sim with the image as original; variation by slider). μ = G̅ of solid, liquid and gas as lines of slope −S̄ against T, the lowest drawn heavy and the others thin and dashed beyond their crossings; slider P (log, 0.01–10 bar) lifts the gas line by RT ln P and the condensed lines by V̄ΔP. Opens on benzene at 1 bar, its crossings and slopes read off Figure 13.5 (the book's own numbers). **Point: the stable phase is the lowest line; raising P lifts the gas line and pushes the boiling point up a long way, while the melting point barely moves.** Readout T_m, T_b and S̄ = −∂G̅/∂T of each phase. This is the brief's "μ(T) crossing, shifting with P". |
| CH431_Landau (113526, no credit) | 23.2 | G, S, C_p against T for a first- and a second-order transition | **Kept** as printed (Table 23.2.1 drawn; nothing varies that the table does not say). Its second-order C_p panel is labelled "solid"/"liquid" where the other panels say "ordered"/"disordered": corrected in the row's caption, no marker. |
| 13.4 (65989 Tuckerman, ice polymorphs) | 23.2 | P–t diagram of ice I–VII and liquid | **Kept** as printed (the text never discusses it). |
| 13.5 (65990) | 23.2 | benzene G̅(T) across melting (a) and boiling (b), tangents dashed, numbers on the axes | **Kept** as printed: the data the Sim above opens on; it is the book's real curve and reads at once. (*orchestrator*: fold it into `sim-gibbs-temperature` as "Figure 13.5" with both images as originals.) |
| 13.6 + 13.7 (65991, 65992) | 23.2 | G̅(P) for benzene and water (13.6); for benzene at four temperatures: below the triple point, at it, just below T_c, above T_c (13.7) | **Fold, still, 2D** ("Figure 13.6 + 13.7"; variation: 13.7 draws one scene at four temperatures). G̅(P) of solid, liquid and gas from the same model as `sim-phase-diagram`; slider T with detents at the triple point and T_c; choice benzene / water (13.6's a and b). **Point: compressing at fixed T walks along the lowest segment; below the triple point the liquid segment never comes lowest, and above T_c gas and liquid become one fluid curve.** Readout V̄ = ∂G̅/∂P of the lowest phase. Both images in `originals`. Lower priority than the three above. |
| 23.4.1 (125762, "CC BY-SA-NC 3.0; Anonymous") | 23.4 | vapor pressure of seven liquids against t (°C), the 760 mmHg line | **Replace, still, 2D** (variation; "Figure 23.4.1"). Left, P(T) of the seven liquids with the 1 atm line, as the book draws them; right, ln P against 1/T, where each is a straight line of slope −ΔH_vap/R; choice of liquid picks one, slider T moves its point on both panels. Data: each liquid's normal boiling point and ΔH_vap through the integrated equation (water's 40.65 kJ/mol and ethanol's 39.0 are the book's; the other five *from memory, unchecked*). **Point: seven curves that all look like exponentials become seven straight lines, and the steeper the line, the larger ΔH_vap.** Readout ln(P₂/P₁) = −(ΔH_vap/R)(1/T₂ − 1/T₁) with the live point and the normal boiling point. Original kept under its printed licence (BY-NC-SA 3.0; Chapter 8's precedent). |

**3D**: none required. One extra offered below.

### Extra simulations proposed (root rule 15)

Only where motion or variation teaches; one survives:

- **`sim-mu-surfaces` in 23.3** (offered, not recommended for the time we have; mathematical 3D):
  μ(T, P) of solid, liquid and gas as three surfaces over the T–P floor (smooth per-vertex colour),
  the lowest envelope opaque; their intersection lines drop onto the floor as the phase diagram's
  curves. **Point: a coexistence curve is where two μ surfaces cross, which is exactly what the
  Clapeyron equation differentiates.** Free orbit, bounded above the floor; no buttons.

Judged and dropped: a moving piston for 23.1.2 (the three states read at once; the phase diagram
varies P); a Sim of Table 23.2.1 (the Landau sketch says it); a Sim for 23.5 (no figure, a chain of
equations: the derivation is its picture); a separate Clapeyron-slope Sim for 23.3 (the phase
diagram's readout shows it on the curve).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 23.1, n_ice + n_water = n_total → dn_ice = −dn_water | 2 moves | | Stays. |
| 23.1, G/n and ∂V/∂n₁; dG with Σμ_i dn_i | definitions | | Stay (22.5 owns the fundamental equation). |
| 23.2, S = −∂G/∂T (23.2.1) → (23.2.2) → (23.2.3) → S(liquid) > S(solid) | printed block with words, the conclusion in prose; facts 22.5's ∂G/∂T = −S and Figure 13.5's slopes | printed | **Build**: "Derivation · the liquid has more entropy than the solid"; the book's numbers stay on (23.2.1)–(23.2.3). |
| 23.2, V̄ = ∂Ḡ/∂P → (23.2.5), (23.2.6) | read off the graph, no chain | | Stays. |
| 23.3, dG at constant T, P → dn_ice = −dn_water → Δμ dn = 0 → Δμ = 0 | printed block, 3 displays with words | printed | **Build**: "Derivation · equal chemical potentials in two phases"; facts 22.5's dG with μ dn, 23.1's mole balance. |
| 23.3, dμ → ∂μ/∂P = V̄, ∂μ/∂T = −S̄ → equate → dP/dT = ΔS̄/ΔV̄ → ΔS̄ = ΔH̄/T → Clapeyron | printed block, 7 displays with words | printed | **Build**: "Derivation · the Clapeyron equation"; `drv` to the one above and to 21.3's entropy of a transition; its first line follows the correct mathematics (the book swaps dT and dP) with a note. |
| 23.4 opening, Clapeyron → V̄_gas ≫ V̄_liq → V̄ = RT/P → (23.4.1) | printed block, 6 displays with words | printed | **Build**: "Derivation · the Clausius–Clapeyron equation"; `drv` to 23.3's Clapeyron; facts 16.1's ideal gas law; the bracket printed in the numerator follows the correct mathematics with a note. |
| 23.4, Tuckerman's (23.4.2)–(23.4.13) | the same two derivations again | printed (repeat) | Stays printed and cites 23.3's and the opening's derivations (repeated-material precedent). |
| 23.4, (23.4.13) → indefinite ln P → P = C′e^(−ΔH/RT); definite (23.4.14) → (23.4.15) → subtract → (23.4.16) | printed block with words | printed | **Build**: "Derivation · the integrated Clausius–Clapeyron equation"; the book's (T₁ − T₁) followed by the correct (T₂ − T₁) with a note. (23.4.19) and (23.4.20) are forms of its result. |
| 23.4, (23.4.18) "integrating Equation 1" → (23.4.19) | prose, 1 move | | Stays. |
| 23.4, the four examples | substitutions | never | Stay. |
| 23.5, U and S from Q → A = −RT ln Q → dA → G = A + PV → dG → μ = (∂G/∂n) = (∂A/∂n) → μ from Q | the whole page, printed, 11 displays with words | printed | **Build**: "Derivation · the chemical potential from the partition function"; facts 17.3's U, 20.8's S, 22.1's A = U − TS and G = A + PV, 22.5's fundamental equations; one line inserted (d(PV) = PdV + VdP); dA's missing differentials and R for k_B follow the correct mathematics with notes. |

Six derivation records to build (23.2, 23.3 × 2, 23.4 × 2, 23.5), all printed; no hidden one scores.

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies. *Checked by computation* marks a
correction worked here; *from memory, unchecked* one the builder checks first.

- **23.1**: water's triple point "only 0.01 K different from the normal melting point (273.16 K)"
  (273.16 K is the triple point; the normal melting point is 273.15 K; footnote); "At room temperature
  P_eq for water is only about 15 Torr" (the book's own 4.58 Torr and 45 051 J/mol give about 24 Torr at
  25 °C; 15 Torr is near 17 °C; footnote, *checked by computation*); (∂G/∂n_1) in dG and in μ_i where
  the sum runs over i (∂n_i; footnote); "role down hill", "cas A)", "(P<p_eq)>", "(Do allow the volume
  to expand, though., why?", "earths" (as printed).
- **23.2**: the sketch's alt text ("a black silhouette of a cat") is wrong: the builder writes a true one,
  no footnote; the Landau sketch's second-order C_p labels (above); "Above the critical temperature … this
  line now shows derivative discontinuity" (Figure 13.7(d) draws a smooth fluid curve: no discontinuity
  above T_c; footnote); "its first order derivatives (−S) is", "surafce", "electromotoric" (as printed);
  "Consider, first, the behavior of G vs. T … of benzene" follows Figure 13.4 (ice) but means Figure 13.5
  (the builder links it there, no footnote).
- **23.3**: dμ = (∂μ/∂P)_T dT + (∂μ/∂T)_P dP pairs each derivative with the wrong differential
  (dμ = (∂μ/∂P)_T dP + (∂μ/∂T)_P dT, as the next display has it; footnote, and the derivation follows
  the correct line); "denser that ice" (as printed).
- **23.4**: (ΔH_molar/T)[V_gas − V_liq] (the bracket divides: ΔH_molar/(T[V_gas − V_liq]); footnote);
  (T₁ − T₁)/(T₁T₂) (T₂ − T₁; footnote); "Here P₁ is the pressure of the liquid phase, and P₂ is the
  pressure of the vapor phase" (both are vapor pressures, at T₁ and T₂; footnote); Example 23.4.3's
  rounded [0.0032 − 0.0028] = 0.0004 would give 33.7 kJ/mol; the printed 39.0 kJ/mol comes from the
  unrounded 3.459 × 10⁻⁴ K⁻¹ (footnote, *checked by computation*); Example 23.4.2's closing sentence:
  6006 + 45 051 = 51 057 J/mol, 2.5% below the 52 370 J/mol just estimated (as printed; no footnote,
  the sentence says only "is the sum"); "condenses phases", "work our the integration", "40 ^o^C", the
  exercise's "curve of vaporization is also called the curve of vaporization" (as printed). Figure
  23.4.1's licence "CC BY-SA-NC 3.0" (BY-NC-SA, as printed in the credit).
- **23.5**: U = RT²(∂ln Q/∂T), S = RT(∂ln Q/∂T) + R ln Q, A = −RT ln Q and μ = −RT(∂ln Q/∂n) write R
  where Q is the system's partition function and the constant is k_B (17.3, 20.8); with n in moles,
  μ = −k_BT(∂ln Q/∂n) = −RT(∂ln Q/∂N) (footnote, *checked against 17.3's and 20.8's forms*; the
  concept rows keep the book's forms and the statement says so); dA = (∂A/∂T) + (∂A/∂V) + (∂A/∂n)
  lacks dT, dV, dn (footnote; the derivation follows the correct line).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 23.1.1, 23.1.2, the unary diagram, the G̅(T) sketch, the Landau sketch, 13.4–13.7 | none | under the page's licence (BY-NC-SA) |
| 23.4.1 | "CC BY-SA-NC 3.0; Anonymous" | shipped under its printed licence (BY-NC-SA 3.0) with the credit (Chapter 8 precedent) |

**Page licences**: every page CC BY-NC-SA 4.0 except 23.4, CC BY 4.0 at the source and shared
BY-NC-SA.

## What is new to OmniStax here

- **No new type.** P_eq is typed pressure, ΔH_vap and the molar Gibbs energies energy, the amounts
  `amount`, the molar volumes `molar-volume`, the molar entropies `entropy`, the conjugate variables
  ℰ potential, e charge, M magnetic-moment, H magnetic-field, F force, L length; γ and the area A in ink.
  μ is written under the key `mu` (otherwise the reduced mass) with concept `chemical-potential`, so the
  symbol card shows both meanings across chapters (no `redefines`: one meaning in this chapter).
- **Symbols**: 68 new, every one with a macro (`\kPeq`, `\kTm`, `\kmuice`, `\kmualpha`, `\kDeltaHvap`,
  `\kDeltaHmolarvap`, `\kVbargas`, `\kemf`, `\kgammast` …); reused: G, G_bar, G_molar, H, S_ent, S_bar,
  V, V_bar, P, T, P_1, P_2, P_3, T_1, T_2, T_c, n, n_1, n_2, n_i, mu, mu_i, A, U, Q_sys, R, C_P, C_V,
  alpha, kappa, N, Delta_sub_H. The conjugate-variable keys (`e_q`, `M_mag`, `H_mag`, `F_el`, `L_el`,
  `A_s`) are new because `e`, `H`, `F`, `L` and `A` already carry other meanings and macros.
  144 variables rows.
- **33 concepts, 50 edges** (Hasse-checked against the merged book: 6 redundant removed before the
  merge), 27 forms. Reused, not duplicated: 22.5's `chemical-potential`, `fundamental-equations-composition`,
  `gibbs-first-derivatives`; 22.7's `gibbs-temperature-curve`, `gibbs-ideal-gas-pressure`,
  `gibbs-solid-pressure`; 21.3's `first-order-transition`, `entropy-of-transition`; 19.8's `enthalpy`,
  `enthalpy-of-fusion`; 16.3's `critical-point`, `critical-temperature`, `supercritical-fluid`; 16.1's
  `molar-volume`, `ideal-gas-law`; 17.3's `average-energy-from-q`; 20.8's `entropy-from-partition-function`.

## The chapter's answer to root rule 23

Phase equilibria is a chapter about which line is lowest. The stunning version is three views of one
model of water and benzene: drag a point across the P–T diagram and watch the phase change, two
phases only on a curve, three only at 273.16 K and 4.58 Torr, CO₂ never melting on Earth; slide the
pressure under the three μ(T) lines and watch the gas line rise and the boiling point run away while
the melting point barely moves; slide the temperature under Ḡ(P) and see the liquid segment vanish
below the triple point and merge with the gas above T_c. Then the seven vapor-pressure curves straighten
into lines whose slopes are their heats of vaporization, and a state point on the G landscape jiggles in
its well, wanders on the flat stretch where opalescence lives, and falls off a labile peak. Every
number is the book's where it prints one: the triple point, the heats of 23.4's examples, benzene's
curves.

## Tool changes made for this chapter

`tools/lt2md.py`: `lone_img` now accepts a `<p>` holding a lone image, as well as a `<div>`, so an image
whose caption follows in a `div.mt-align-center` ("**Figure 23.1.2**: A cylinder with one substance")
comes through as `> FIGURE {fig:23.1.2}` instead of a bare image and two loose paragraphs. Chapters
1–22 reconverted to a scratch folder: every source.md byte-identical except `ch01/1.3/source.md`
("*kinetic* *energies*" against "*kinetic energies*"), which the committed tool without this change
produces too (a stale committed file, not this change), and `ch22/intro/source.md`, which the
chapter's own prep has not written yet. `tools/md2html.py` unchanged; drafts made for 23.1–23.5 and the
intro, 267 maths spans set by KaTeX in strict mode without an error. Notes for builders: the two
unnumbered images of 23.1 and 23.2 come through as `<p><img>` with their italic captions as the next
paragraph (as in earlier chapters); 23.4's objectives box sits mid-page in the source and the drafter
lifts it out; 23.4's two "Example 23.4.1" are `ex-23-4-1` and `ex-23-4-1-2`; Exercise 23.4.2 lands in
`exercises` (unkeyed).
