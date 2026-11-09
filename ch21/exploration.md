# Exploration: Chapter 21, Entropy and the Third Law of Thermodynamics

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 21`, then
`python3 tools/convert.py 21`), every page read in full and all 4 mirrored images looked at.
The landing page (11817, CC BY-NC-SA, no author tag) **prints no text**, only the site's
generated list of sections with their blurbs: there is **no `intro/` page** and `chapter.json`
has no `intro` record (Chapter 4's precedent, root rule 21: nothing is invented). **There is no
21.S page.** **21.E (14475)** holds one item, "Problem 1" (the entropy change of 200 g of water
cooled from 70.0 °C to 20.0 °C), unkeyed: it is routed to **21.1**, which introduces
ΔS = ∫C_P/T dT (root rule 9; `source_number` "Problem 1", 21.E noted in `exercise_notes`).

**Where the pages come from.** No page prints a Contributors list or names an author, and no page
carries an author tag: every page is the book's (CC BY-NC-SA 4.0, credited to the book). The pages
are short and uneven: 21.4 is three paragraphs and two equations, 21.8 two paragraphs and one
display, 21.6 **stops mid-argument** (its last display is the low-temperature sum; the conclusion
S → k_B ln n is never printed: the page on the site ends there too, checked in `source/pages/14483.json`).
21.2 is the chapter's long page (1 486 words, three figures, a note, the exercise).

**Repeated material** (built once where the book first works it, cited after): ΔS = ∫C_P/T dT
(21.1, again as (21.5.1)); Δ_trs S = Δ_trs H/T_trs (21.2 for fusion, 21.3 in general, again as
(21.5.2)); the S(T) staircase with jumps at transitions (sketched in 21.2's Figure 21.2.1, worked as
(21.5.3) and Figure 21.5.1); residual entropy (21.2's CO note, 21.8's S̄_calc − S̄_exp); entropy
rising with mass (21.2's noble-gas sentence, 21.7's table). From earlier chapters: C_V and the
internal energy (17.4), the Einstein solid and Dulong–Petit (17.4, 18.9), the partition function
and ⟨E⟩ from it (17.2, 17.3), W (17.2), the particle in a box (3.5), degeneracy (3.9), normal modes
(12.12). From the chapters prepared beside this one (**not yet in `book.json`**): the first law,
PV work, H = U + PV, C_P and enthalpies of transition (Chapter 19); entropy, δq_rev = TdS,
S = k ln W (20.5) and S = U/T + k ln Q (20.8, (20.42)) (Chapter 20); ΔG = ΔH − TΔS (Chapter 22).
21.1 also overlaps 20.2–20.3, which already write δq_rev/T = (C_v/T)dT + (P/T)dV and
∫(C_v/T)dT (*orchestrator*, below).

## Pages

| Page | id | Headers (`<h2>`) | Ex | Exr | Fig | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|
| landing | 11817 | **no text** (site list only) | | | | | | |
| 21.1 Entropy Increases with Increasing Temperature | 14476 | objectives; Entropy versus temperature (h3 Entropy and heat capacity) | 21.1.1 (**no solution**) | | | | | 0 / 16 |
| 21.2 The 3rd Law … Absolute Scale | 14477 | objectives; none; Summary | 21.2.1 Sulfur (no Solution part, explained inline) | 21.2.1 (unkeyed) | 3 | | 2 ("Definition: Third law of thermodynamics", "Residual Entropy in Carbon Monoxide") + a pull-quote | 1 / 9 |
| 21.3 The Entropy of a Phase Transition … | 14479 | none | | | | 1 (transition names) | | 0 / 2 |
| 21.4 The Debye Function … Low Temperatures | 14481 | none | | | | | | 2 / 2 |
| 21.5 Practical Absolute Entropies … Calorimetrically | 14482 | none | 21.5.1 (Solution) | | 1 (in the example) | | | 3 / 4 |
| 21.6 Practical Absolute Entropies of Gases … Partition Functions | 14483 | none | | | | | | 0 / 8 |
| 21.7 Standard Entropies Depend Upon Molecular Mass and Structure | 14484 | none; References | | | | 1 (noble gases) | | 0 / 0 |
| 21.8 Spectroscopic Entropies sometimes disgree … | 14485 | none | | | | | | 0 / 1 |
| 21.9 Standard Entropies … Chemical Reactions | 14486 | none; References | | | | 1 (four S°) | | 0 / 3 |
| 21.E | 14475 | "Problem 1" | | | | | | |

Counts agree with the full-book table (3 examples, 1 exercise box, 4 figures, 3 tables, 2 notes,
45 displays). Objectives: 21.1 and 21.2, one item each, to `objectives`. 21.2 closes on "## Summary"
(to `summary_html`). 21.7's and 21.9's References are cited (the superscript ¹ on every table
value): kept as each page's closing block (16.5's precedent). 21.2's pull-quote ("> The energy
levels get more crowded …", repeating the sentence above it) becomes an untitled emphasis note
(13.12 precedent). 21.2's `box-definition` "Definition: Third law of thermodynamics" kept as a
titled note (it carries (21.2.1)). No embeds, no video.

## Per section

- **21.1** Objectives to the tables. The book's "Entropy versus temperature" `<h2>` covers the whole
  page; its `###` "Entropy and heat capacity" kept. Concepts (new): dU = TdS − PdV and dU ≤ TdS − PdV
  (`fundamental-equation-u`); S and V the natural variables of U (bold); dS = (C_V/T)dT and
  ΔS = ∫C_V/T dT; entropy increases with T (C > 0); dH = TdS + VdP (natural variables S, P); dS =
  (C_P/T)dT and ΔS = ∫C_P/T dT, the common route. Uses: the first law, δq_rev = TdS, δw = −PdV,
  H = U + PV, C_P (Chapters 19–20), C_V (17.4). Example 21.1.1 is five instructions with no solution:
  a question (Chapter 3's decision, 8.10.1 and 11.2.2 precedent). 21.E's Problem 1 lands here.
- **21.2** Objectives to the tables; no header: three blocks proposed, "Setting a Zero for Entropy"
  (to Figure 21.2.3), "Real Crystals and Residual Disorder" (from "It is certainly true", to the
  definition note) and "Jumps and Trends" (from "Another complication", the CO note and the exercise
  closing it); "## Summary" to `summary_html`. Concepts (new): absolute entropy (bold "absolute");
  the third law (axiom, (21.2.1), bold); a perfect crystal at 0 K has W = 1, S = k ln W = 0; the
  entropy of fusion Δ_fus S = Δ_fus H/T; standard molar entropy (tabulated "in standard molar form");
  heavier particles, more entropy (the noble gases, reinforced in 21.7); residual entropy (the note's
  bold "a nonzero entropy"); S_disorder = Nk ln 2 for CO. Uses S = k ln W (20.5), the particle in a box
  (3.5). Example 21.2.1 (Sulfur) kept whole. Exercise 21.2.1 (unkeyed) tests residual entropy.
- **21.3** No header: two blocks proposed, "Equilibrium at the Transition" (to the second-order
  sentence) and "Kinds of Phase Transition" (the table). Concepts (new): Δ_trs S = Δ_trs H/T_trs; the
  first-order transition (bold "first order"); (∂Ḡ/∂T)_P = −S̄; the heat capacity's singularity at the
  transition; the six transition names (the table, kept as printed). Uses G (Chapter 22's).
- **21.4** No header: one block proposed, "Phonons and the T³ Law". Concepts (new): the Debye model
  (idea); C_P = aT³ ((21.4.1), type heat-capacity); a metal's C_P = aT + bT³ ((21.4.2)). Reinforces
  Dulong–Petit (17.4), the Einstein model's limits (17.4), normal modes (12.12). Θ_D and the Debye
  function itself are never written: the Sim below supplies the curve, nothing is added to the text.
- **21.5** No header: two blocks proposed, "Adding Up the Entropy from 0 K" (to (21.5.3) and the
  paragraph after) and the example under the book's own title. Concepts (new): S(T) = ∫₀ᵀC_p/T dT +
  ΣΔH_trs/T_trs ((21.5.3)); the skill of following a heating path (Example 21.5.1). (21.5.1) and
  (21.5.2) restate 21.1's and 21.3's results: forms with `section: 21.5` on those concepts (21.3's form
  staged; (21.5.1) is the same latex as 21.1's `delta-s-cp`, so the builder anchors 21.1's form and
  cites it). Its links to 21.1 and 21.3 are in-book `xref`s.
- **21.6** No header: one block proposed, "Counting the Ground States". Concepts (new): S from the
  partition function approaches k_B ln n as T → 0, zero for a nondegenerate ground state (the page's
  aim; its conclusion is supplied by the derivation below, which states only what the book sets out
  to show). Uses S = U/T + k ln Q (20.8), U = k_BT²∂ln Q/∂T (17.3), degeneracy (3.9).
- **21.7** No header: two blocks proposed, "Mass, Structure and Microstates" (to the table) and the
  closing paragraph with the References. Concepts (new): more complex molecules have more entropy.
  Reinforces 21.2's mass trend and standard molar entropy. The noble-gas table is the book's NIST-JANAF
  data: kept, and it checks against the Sackur–Tetrode entropy to ±0.04 J/(mol K) (*checked by
  computation*), which makes it the data for an AI exercise.
- **21.8** No header: one block proposed, "When Calorimetry Falls Short". Concepts (new): spectroscopic
  entropy (S°_calc); residual entropy as S̄_calc − S̄_exp. Reinforces 21.2's residual entropy (glass,
  ice, CO).
- **21.9** No header: one block proposed, "Products Minus Reactants", References closing it. Concepts
  (new): Δ_rxn S° = Σν S°(products) − Σν S°(reactants). The methane combustion is a worked sum in the
  text, not an example box; kept as printed.

## Equation numbers

One number per display, from the converter's `n=`: (21.2.1); (21.4.1)–(21.4.2); (21.5.1)–(21.5.3).
21.1, 21.3, 21.6–21.9 number nothing (every display `\nonumber`); 21.1's and 21.3's `align*` blocks
are unnumbered. Every `[ref:eq:…]` resolves on its page. Printed labels kept as printed: 21.2's
"Figure 21.2.3a" (the figure's panel a); 21.5's "section 21.1" and "section 21.3" links (in-book).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises**: **1 printed** (21.2.1, the number of orientations from S = 9.134 J/K at
  0 K, and a molecule that would show it); **0 keyed**; **1 unkeyed**, available with an AI
  solution: compute and sketch (W = e^{S/R} = 3.000, *checked by computation*; a molecule that fits
  its site in three nearly equal-energy orientations, drawn).
- **Example boxes without a solution**: **1** (Example 21.1.1, five steps from U(T, V) and U(S, V)
  to dS and S(T, V)): a question (Chapter 3's decision), **unkeyed**, available with an AI solution:
  prove (dS = (C_V/T)dT + (1/T)[(∂U/∂V)_T + P]dV, so (∂S/∂T)_V = C_V/T).
- **21.E**: **1 printed** (Problem 1), **unkeyed**, available with an AI solution: compute
  (n = 11.10 mol, ΔS = nC̄_P ln(293.15/343.15) = −131.8 J/K, *checked by computation*). Routed to 21.1.
- **Worked examples**: 2 (21.2.1 Sulfur, explained inline; 21.5.1 CO₂ with its Solution), kept
  whole, not exercises.
- **Placement and kind**: 21.2.1 stays in 21.2, kind `exercise`; 21.1.1 and Problem 1 in 21.1, kind
  `exercise` (Chapter 17's decision for problems; `source_number` "Example 21.1.1", "Problem 1").
  All in the Exercises document (`place: end`).
- **In all**: 3 cards, 0 keyed, 3 unkeyed (1 compute, 1 compute with a sketch, 1 prove).
- **Proposed new: 7**, where a concept would otherwise have none, every answer from the book's own
  numbers and computed here: **21.3** one (the rhombic → monoclinic sulfur transition of Example
  21.2.1: Δ_trs H = 1.09 × 368.5 = 402 J/mol); **21.4** one (C_P = aT³: 0.10 J/(mol K) at 5 K gives
  0.80 at 10 K, and S(T) = C_P(T)/3 for the stretch below the lowest measured temperature, the
  extrapolation calorimetry uses); **21.5** one (Figure 21.5.1's jump, about 130 J/(mol K) at
  194.7 K, gives Δ_sub H ≈ 25.3 kJ/mol); **21.6** one (one mole of a crystal with a doubly degenerate
  ground state: S → R ln 2 = 5.76 J/K); **21.7** one (explain from the table why S° rises from He to
  Rn and by how much per doubling of mass: (3/2)R ln 2 = 8.64 J/(mol K), Sackur–Tetrode, *checked*);
  **21.8** one (CO's residual 4.4 J/(mol K) as orientations: e^{4.4/R} = 1.70, not an integer, so the
  two orientations are not equally likely; *checked*); **21.9** one (the reverse reaction from the
  page's own table: +5.08 J/(mol K), with the table's 213.79).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten: a figure starts from the book's and usually replaces it; motion where the
idea moves; a point the reader sees at once; little effort to read; folds where the book draws one
scene several times. The chapter's own numbers: 21.2's 1.09 J/(mol K) at 368.5 K (sulfur), CO's
5.7 and 4.4 J/(mol K), Figure 21.5.1's CO₂ curve (T_sub = 194.7 K; S ≈ 69 J/(mol K) below the jump,
≈ 199 above it, ≈ 214 at 300 K, read off the image), 21.7's noble-gas table, 21.9's four S°. The
book prints no C_p data. No arrow in any figure is kinematic except 21.2.3's "Increasing
Temperature" block arrow, which is a notation arrow between two states (symbolic, nothing moves).

| Image | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 21.2.1 (484602 FeFig5.11, no credit) | 21.2 | schematic S against T from 0: solid I, a jump at T_trs, solid II, jumps at T_fus and T_b, gas; no numbers | **Kept** as printed (a sketch the text cites once; the idea is worked with numbers in 21.5, where the Sim lives). Its sentence links forward to Figure 21.5.1's Sim. |
| 21.2.2 (399492, no credit) | 21.2, Example 21.2.1 | S̄°_T − S̄°_0K of rhombic and monoclinic sulfur meeting at 0 K, the 1.09 J/(mol K) gap at 368.5 K (red arrow, notation) | **Kept** as printed: two straight lines meeting at the origin, read at once; nothing moves or varies. The red is the book's emphasis, not a fact. Its alt text ("thermal conductivity … W/(m·K)") is wrong: the builder writes a true one. |
| 21.2.3 (484603, "CC BY-SA 4.0; BlyumJ via Wikipedia") | 21.2 | (a) a perfect 4 × 4 lattice, T = 0 K, S = 0, W = 1; (b) displaced atoms, T > 0, W > 1 | **Kept** as printed, under its own licence with credit: the text points at panel a, and the contrast is read at once. A jiggling lattice would only replay the sketch (judged and dropped, rule 24.9). |
| 21.5.1 (399491, no credit) | 21.5, Example 21.5.1 | S of CO₂ from 0 to 300 K: smooth rise to ≈ 69 J/(mol K), vertical jump at 194.7 K to ≈ 199, slow rise to ≈ 214 | **Replace, still, 2D** (`sim-calorimetric-entropy`; variation by slider): top, C_P/T against T with the area under it shaded up to the slider's T and the solid and gas stretches in their own decoration; bottom, S(T) traced up to the same T, the sublimation jump drawn as a step labelled Δ_sub H/T_sub. Slider T (0–300 K, opening at 300 K, the example's; detent at 194.7 K). **Point: the entropy at 300 K is three pieces you can see — the area under C_P/T for the solid, one jump of Δ_sub H/T_sub that is most of the total, and a thin sliver for the gas.** Readout (21.5.3) with live numbers: S(T) = ∫ solid + Δ_sub H/T_sub + ∫ gas = total. Data: the book's own curve, digitized from the image (S(T) at about 15 points; C_P/T is its slope), which keeps every number the book's (*orchestrator*: digitizing against literature C_p data). Eyebrow "Figure 21.5.1"; original kept. |

**3D**: none. Nothing in the chapter is an arrangement in space whose depth teaches (the CO lattice
is flat in the book and in the Sim below).

### Extra simulations proposed (root rule 15)

Only where motion or variation teaches (precedent). Two survive:

- **`sim-debye-einstein` in 21.4** (recommended; variation, still): C_V/3R against T/Θ on log–log
  axes for the Debye and the Einstein (17.4) solids with Θ_D = Θ_E, the T³ line drawn dashed;
  slider T/Θ (0.01–2, log, opening at 0.05). **Point: at T/Θ = 0.05 the Debye solid still holds
  C_V/3R ≈ 0.0097 while the Einstein solid has 8 × 10⁻⁷: the low-frequency modes Debye keeps are what
  give the T³ law, and both meet Dulong–Petit near T ≈ Θ.** Readout C_V/3R for both with live
  numbers and C = aT³. 21.4 prints no figure and no Θ_D, so the curves are the standard Debye and
  Einstein functions (17.4's function, Debye's integral), no material data.
- **`sim-residual-entropy` in 21.2** (offered; variation, still): a flat lattice of 64 CO molecules
  (C and O in `F.el` colours), a fraction p of them reversed at random; slider p (0–0.5, detent at 0.5
  and at the p that gives the measured 4.4 J/(mol K), 0.222, *checked by computation*). **Point: the
  entropy of the frozen disorder climbs to R ln 2 = 5.76 J/(mol K) only when the two orientations are
  equally likely; CO's measured 4.4 means about one molecule in five is reversed.** Readout
  S = −R[p ln p + (1 − p)ln(1 − p)] and W = 2^N at p = 0.5. Uses only S = k ln W with Stirling (17.2).
  It goes past the note (which states the 50% case and says the measured value is lower because the
  orientations are not equally likely), so it is the orchestrator's call.

Judged and dropped: the sulfur pair (two lines, nothing varies); a moving lattice for 21.2.3 (the
sketch says it); a Σ e^(−E/kT) Sim for 21.6 (17.2's `sim-level-populations` already empties the upper
levels as T falls; 21.6 cites it); a noble-gas bar chart for 21.7 (the table reads at once; the
mass trend is an exercise); an entropy-of-reaction bar for 21.9 (four numbers).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 21.1, dU = δq_rev + δw_rev → dU = TdS − PdV | printed block of four displays with words | printed | **Build**: "Derivation · the fundamental equation for U"; facts the first law (Chapter 19), δq_rev = TdS (Chapter 20), δw_rev = −PdV (19.2); `drv` links once those chapters are built. The inequality line stays as printed after it. |
| 21.1, dU = TdS at constant V → C_V → dS = (C_V/T)dT → ΔS | printed block with words, 4 lines | printed | **Build**: "Derivation · the entropy change at constant volume"; fact C_V = (∂U/∂T)_V (17.4). |
| 21.1, H = U + PV → dH = TdS + VdP → dS = (C_P/T)dT → ΔS | printed `align` blocks with words, about 8 lines (the "VP" typo and the repeated dH line in the book) | printed | **Build**: "Derivation · the entropy change at constant pressure"; one line inserted (at constant P, dH = TdS); facts H = U + PV and C_P = (∂H/∂T)_P (Chapter 19). The book's two garbled lines follow the correct mathematics with notes. |
| 21.2, S_disorder = k ln 2^N = Nk ln 2 | one display, 3 moves | | Stays. |
| 21.2, Δ_fus S = q_rev/T = Δ_fus H/T | 2 moves | | Stays. |
| 21.3, Δ_trs G = 0 → Δ_trs S = Δ_trs H/T_trs | printed `align`, 4 lines | printed | **Build**: "Derivation · the entropy of a phase transition"; facts G = H − TS (Chapter 22) and Δ_trs G = 0 at equilibrium. Result 21.2's Δ_fus S as its special case is cited, not repeated. |
| 21.5, (21.5.1) + (21.5.2) + S(0) = 0 → (21.5.3) | prose, 3 moves | 2 | Stays as printed. |
| 21.5, Example 21.5.1 | the formula written out for CO₂ | never | Stays (a substitution). |
| 21.6, S = U/T + k_B ln Q → S = k_B ln Q + k_BT∂ln Q/∂T → the sum → **S → k_B ln n** | printed lines with words, then hidden: the page stops before the limit. Moves after the printed sum: factor ne^(−E₁/kT); ln Q = ln n − E₁/kT + ln(1 + …); k_BT∂ln Q/∂T → E₁/T; the two E₁ terms cancel; the correction terms vanish as T → 0: 5 moves. Imported 2 (S from Q, 20.8; U from Q, 17.3), longest unprinted run 4, joins 1: **score 7** | printed + hidden | **Build**: "Derivation · the entropy near absolute zero", after the last paragraph; the book's lines word for word, its δ read as ∂ with a note; result S → k_B ln n (0 for n = 1). `drv` to 20.8's derivation of (20.42) once built and to 17.3's average energy. |
| 21.9, Δ_rxn S° for methane | substitution | never | Stays. |

Five derivation records to build (21.1 × 3, 21.3, 21.6), one with a hidden ending (21.6, score 7).

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies. *Checked by computation* marks a
correction worked here; *from memory, unchecked* one the builder checks first.

- **21.1**: "This equality expresses U" (inequality, as printed); "TdS −PdV + PdV + VP" (VdP; the
  derivation corrects); "At constant pressure: dH = TdS + VdP" (dH = TdS, since dP = 0; footnote);
  C_P = dH/dT and C_V = (dU/dT)_V (partial derivatives, as printed).
- **21.2**: S(T) = S(0) + ∫₀ᵀ C_p(T) dT (the integrand is C_p/T: the page's own next sentence says so;
  footnote); "1.09 J·mol/K" (J/(mol·K), as Figure 21.2.2 prints it); "lim Δ_rS = 0" (Δ_trs S); "at
  sufficiently low materials" (temperatures, as printed); "the plimsoll defines are standard state"
  (as printed); the CO note's 5.7 J/(mol K) = R ln 2 = 5.76 (*checked*); "residulate" (as printed);
  CO's experimental residual entropy 4.4 J/(mol K) (*from memory, unchecked*: often quoted as about
  4.6; not footnoted unless the builder confirms). Figure 21.2.2's and 21.5.1's alt texts are wrong
  (thermal conductivity; °C): the builder writes true ones, no footnote (alt is not the book's prose).
- **21.3**: "the solid has a much more ordered structure than the crystalline solid" (than the
  liquid; footnote).
- **21.4**: "(form Equation 21.4.1" (as printed); a in (21.4.2) is a new constant, not (21.4.1)'s a
  (as printed; the variables rows keep them apart).
- **21.6**: "E₁ = E₂ = … = E_m" for an n-fold ground level (E_n; footnote); ∂ printed as δ (as printed;
  the derivation reads ∂); the page ends before its conclusion (supplied by the derivation, not a
  correction).
- **21.7**: "methane (CH₄) has a higher standard entropy than carbon dioxide (CO₂)" (the book's own
  21.9 table gives CH₄ 186.25 and CO₂ 213.79 J/(mol K): the reverse; footnote, *checked against the
  book's numbers*); "O₂ has a higher entropy than N₂" (true: 205.15 against about 191.6, *from memory,
  unchecked*; the mass explanation is the book's); Kr's mass "84.8" (83.8 g/mol; footnote, *checked*);
  "As the mass of increases" (as printed); "Themochemical" (as printed).
- **21.8**: "disgree" in the title (as printed); "it is not a perfect crystal, but must still have
  zero entropy according to third law" (the third law speaks only of a perfect crystal, so it asks no
  zero here; footnote).
- **21.9**: "subtract the entropies of the reactions" (reactants, as printed); v_i for ν_i (as
  printed); "213.70" in the sum where the table prints 213.79 (the result is −5.08, not −5.17
  J/(mol K); footnote, *checked by computation*); H₂O without a state (the 188.84 is the gas's).
- **21.E**: "75.4." (a stray point, as printed under the card).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 21.2.1, 21.2.2, 21.5.1 | none | under the page's licence (BY-NC-SA) |
| 21.2.3 | "CC BY-SA 4.0; BlyumJ via Wikipedia" | shipped under its own licence (CC BY-SA 4.0) with credit |

**Page licences**: every page CC BY-NC-SA 4.0.

## What is new to OmniStax here

- **No new type staged.** Entropy is a category (root rule 7), but Chapter 20 introduces it and is
  being prepared beside this one (its variables already write `S_ent` with type `entropy`, a type not
  yet in `book.json`): whichever chapter stages a type id second is refused by the merge, so this prep
  stages none. Chapters 19 and 22, merged while this prep ran, type H and G as `energy` and q and w as
  `heat` and `work`; Chapter 21's rows follow them. S (key `S_ent`, Chapter 20's), Δ_trs S, Δ_fus S,
  S°, S_disorder and the other entropies are in ink until Chapter 20's `entropy` type merges, when the
  chapter pass sets it (*orchestrator*). Typed now: T, T_1, T_2, T_trs, T_sub (temperature); C_V, C_P,
  C_P^g (heat-capacity); H, G, Ḡ, Δ_trs H, Δ_trs G, Δ_fus H, Δ_sub H, U, E_j (energy); q_rev, q_P (heat);
  w_rev (work); P, V, m; Q. Untyped and in ink: k, k_B, R, N, n, W, the degeneracies, v_i, a and b.
- **Symbols**: 19 staged (3 with macros: `\kTtrs`, `\kTsub`, `\kCPg`), all of them Chapter 21's own
  (T_trs, T_sub, C_P_g, S_std, S_std_i, S_std_exp, S_std_calc, S_bar_calc, S_bar_exp, S_disorder,
  W_disorder, Delta_trs_S, Delta_trs_H, Delta_trs_G, Delta_sub_H, Delta_rxn_S, nu_stoich, a_el,
  m_deg). **Not staged**, because Chapters 19, 20 and 22 print them first: S_ent, S_bar, H, G, G_bar,
  C_P, q_rev, w_rev, q_P, T_1, T_2 (all but S_ent and S_bar now merged by those chapters),
  Delta_fus_H and Delta_fus_S (keys no chapter has staged yet: the pass stages them if Chapters 19–20
  do not). `C_p` is taken (9.2's C₊), so 21.2's and 21.5's lower-case C_p is a meaning of `C_P`
  ("written C_p or C_P"). 70 variables rows; `redefines` on 21.4's a and b (16's van der Waals
  constants, 4.6's eigenvalue).
- **29 concepts, 39 edges** (Hasse-reduced against the merged book: one redundant edge removed before
  the merge), 21 forms. Reused, not duplicated: 17.4's `internal-energy`,
  `constant-volume-heat-capacity`, `einstein-model-limits`; 17.2's `distribution-weight`,
  `canonical-partition-function`; 3.5's `pib-energy-levels`; 3.9's `degeneracy`; 12.12's
  `molecular-normal-modes` and `vibrational-mode-count`; 18.3's `molecular-ideal-gas-partition-function`.
  **Pending edges** (prereqs in Chapters 19, 20, 22, added by this chapter's pass once they merge):
  `fundamental-equation-u` ← the first law, δq_rev = TdS, PV work; `fundamental-equation-h` ←
  the enthalpy H = U + PV; `entropy-change-constant-pressure` ← C_P; `third-law` and
  `perfect-crystal-zero-entropy` ← entropy and S = k ln W (20.5); `entropy-of-fusion` ← the enthalpy
  of fusion and δq_rev/T; `gibbs-temperature-derivative`, `entropy-of-transition` ← the Gibbs energy;
  `partition-function-third-law` ← S = U/T + k ln Q (20.8); `spectroscopic-entropy` ← 20.8's
  statistical entropy; `reaction-entropy` ← entropy as a state function (20.3).

## The chapter's answer to root rule 23

The chapter puts entropy on an absolute scale, and the book draws it as sketches. The stunning
version lets the reader build an entropy: drag the temperature of CO₂ up from 0 K and watch the area
under C_P/T fill, then the sublimation jump account for most of the total, the gas adding a thin
sliver to 214 J/(mol K); set a Debye solid beside an Einstein solid at a twentieth of their
characteristic temperature and see four orders of magnitude between them, which is why calorimetry
can extrapolate to 0 K with T³; and turn the molecules of a CO crystal at random until the frozen
disorder reaches R ln 2, then back to the fifth reversed that matches what is measured. Every
number is the book's: Figure 21.5.1's curve, the CO note's 5.7 and 4.4, the noble-gas and reaction
tables.

## Tool changes made for this chapter

None. `tools/lt2md.py` and `tools/md2html.py` read every page without a fault (179 maths spans in
the text drafts and 3 in the section drafts, every one set by KaTeX in strict mode without an
error); so Chapters 1–18 were not reconverted. (Both files show uncommitted changes in the working
tree, made by the agents preparing Chapters 19–22, not by this prep; the drafts were made with the
tree as it stood.) Notes for builders: the drafter leaves "TODO header" above the openings of
21.2–21.9; 21.2's `box-definition` comes through as a note with eyebrow "Note" and the book's
title; 21.2's pull-quote as a `blockquote`; `\ce{C#O}` became `\mathrm{C{\equiv}O}`; 21.7's and 21.9's
References come through as a block; 21.2's exercise lands in `exercises` (unkeyed); Example 21.1.1 is
drafted as an example (move it to `exercises`, kind `exercise`); 21.E's Problem 1 is not drafted
(the builder of 21.1 adds it).
