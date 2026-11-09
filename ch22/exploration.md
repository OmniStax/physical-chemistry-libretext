# Exploration: Chapter 22, Helmholtz and Gibbs Energies

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 22`, then
`python3 tools/convert.py 22`), every page read in full. **The chapter prints no image at all**
(`--media 22` fetched none; no page has an `<img>`), so every figure here is a Sim. **The landing
page (11818) prints no text**, only the site's generated list of the eight sections with their
machine summaries: there is **no `intro/` page** and `chapter.json` has no `intro` record (Chapter
4's precedent; root rule 21: nothing is invented). The converter's empty `intro/source.md` was
removed. **There is no 22.S and no 22.E page** (the tree and `modules.json` list only 22.1–22.8;
`exercises` is null). The chapter's exercises are the six inline boxes of 22.5, routed below (root
rule 9).

**Where the pages come from.** A patchwork of UC Davis ChemWiki pages: 22.1, 22.2 and 22.7 are
one author's lecture notes (no credit list, no author tag; 22.2's "Summary" and 22.7's "Fig. 22.7
in the book" show they shadow McQuarrie and Simon); 22.3 is Patrick Fleming's (tag
`authorname:flemingp`, no name printed; 18.9's precedent: credited as the tag) and cites DeVoe's
numbering ("Table 6.2.1", "Chapter 4"); 22.5 is Andreana Rosnik's student page (tag) with its own
exercises and References; 22.8 is Jerry LaRue and Michael Adewumi's (tags; Penn State's PNG 520);
22.4 and 22.6 have no author. Every page is CC BY-NC-SA 4.0. No page prints a Contributors list.

**Repeated material** (built once where the book first works it, cited after; Chapters 3–18
precedent). From earlier chapters, now merged: dU = TdS − PdV (21.1 `fundamental-equation-u`,
restated 22.3 and 22.5), dH = TdS + VdP (21.1 `fundamental-equation-h`, again 22.3, 22.5), the
natural variables of U (21.1 `natural-variables-u`), the Clausius inequality (20.4), the entropy of
mixing (20.6), the reversible paths' extreme work (19.3), (∂Ḡ/∂T)_P = −S̄ (21.3
`gibbs-temperature-derivative`), Δ_trs S = Δ_trs H/T_trs (21.3), H(T) and S(T) from heat
capacities through transitions (19.9 `enthalpy-from-heat-capacity`, 21.5
`absolute-entropy-heating-path`: 22.7's (22.7.2) and (22.7.3) restate them), exact and inexact
differentials (19.4; 22.5's bold "inexact differentials" is that concept), the standard state
(19.12), the ideal-gas law (16.1), the van der Waals constants (16.2's Table 1, 16.3.2's CO₂).
Within the chapter: dA = −PdV − SdT (22.1; again 22.5 as (22.5.5)–(22.5.6)); dG = VdP − SdT
(22.2; again 22.4, 22.5's (22.5.3)–(22.5.4), 22.8); the four Maxwell relations (22.3's Table
22.3.1; A's and G's worked in 22.5, G's used in 22.4); (∂G/∂T)_P = −S and (∂G/∂P)_T = V (22.4;
22.5); (∂H/∂P)_T for an ideal gas (22.4; Exercise 22.5.4); the natural-variables table (22.2's
summary; 22.5's Table).

## Pages

| Page | id | Authors (tags) | Headers (`<h2>`) | Ex | Exr | Fig | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|
| landing | 11818 | none | **no text** | | | | | | |
| 22.1 Helmholtz Energy | 14488 | none | opening; Natural variables of A | 22.1.1 (no Solution part; its body is the worked reasoning) | | | | | 1 / 10 |
| 22.2 Gibbs Energy Determines the Direction of Spontaneity … | 14489 | none | opening; Direction of the spontaneous change; Meaning of the ΔG term; Natural variables of G; Summary | 1 unnumbered ("Example", NH₃ + HCl) | | | 1 (in the Summary) | 2 (an emphasis box "If ΔG = 0 …"; a "Note") | 0 / 9 |
| 22.3 The Maxwell Relations | 14490 | `flemingp` | opening; Maxwell Relations | 22.3.1 (Solution) | | | 1 (Table 22.3.1) | | 8 / 33 |
| 22.4 The Enthalpy of an Ideal Gas is Independent of Pressure | 14491 | none | none | | | | | | 2 / 8 |
| 22.5 Thermodynamic Functions have Natural Variables | 14492 | Andreana Rosnik | opening; Introduction; First Law of Thermodynamics (### Principle of Clausius); Enthalpy; Gibbs Energy; Helmholtz Energy; Chemical Potential; Importance/Relevance …; Maxwell Relations; References | | 6 (one unnumbered) | | 1 (unnumbered) | | 6 / 28 |
| 22.6 The Standard State for a Gas is an Ideal Gas at 1 Bar | 14493 | none | none: one paragraph | | | | | | 0 / 0 |
| 22.7 The Gibbs-Helmholtz Equation | 14494 | none | opening (### Ideal gas, ### Solids); The Gibbs-Helmholtz Expression; Gibbs Energy as a Function of Temperature | | | | | 1 (emphasis box on H(0)) | 3 / 12 |
| 22.8 Fugacity Measures Nonideality of a Gas | 14495 | Jerry LaRue, Michael Adewumi | none | | | | | | 1 / 12 |

Counts agree with the full-book table (3 examples, 1 with a Solution part; 6 exercise boxes; 3
tables; 0 figures). No objectives on any page. 22.2 closes on "## Summary" (the table of the four
differentials and natural variables, its two-item "Note" and the closing sentence): to
`summary_html`. 22.5's References (cited in the text by superscripts 1–4): to `notes` (16.6 and
18.11 precedent), the superscripts kept as printed. No embeds, no applets.

## Per section

Headers the agent writes (the openings, the headerless pages) are proposals; the builder puts them
through the humanizer.

- **22.1** Opening block, header proposed "Holding Volume and Temperature Constant", Example 22.1.1
  closing it; the book's "Natural variables of A" after. Concepts (new): `natural-variables` (the
  general definition; 21.1's is U's), `helmholtz-energy` (bold "Helmholtz energy", "free"),
  `helmholtz-criterion` (dA ≤ 0 at constant T and V, (22.1.1)), `helmholtz-energy-of-mixing`
  (ΔA_molar = RT Σ y ln y), `helmholtz-maximum-work` (ΔA = w_rev, other work at constant V),
  `helmholtz-fundamental-equation` (dA = −PdV − SdT). Reinforces: 20.4's Clausius inequality, 21.1's
  dU, 20.6's entropy of mixing.
- **22.2** Opening block, header proposed "Gibbs Energy at Constant Pressure"; the book's headers
  after; Summary to `summary_html`. The emphasis box and the "Note" kept as titled notes (the
  emphasis box has no title: kept as the book prints it). Concepts (new): `gibbs-energy` (G ≡ H − TS
  = A + PV), `gibbs-criterion` (dG ≤ 0, ΔG = ΔH − TΔS ≤ 0, ΔG = 0 at equilibrium, bold
  "equilibrium"), `coupled-processes` (idea, "pumped"), `spontaneity-temperature` (the sign of ΔG
  changes with T; the example's 618 K), `gibbs-maximum-non-pv-work`, `gibbs-fundamental-equation`
  (dG = VdP − SdT).
- **22.3** Opening block, header proposed "Combining the First and Second Laws"; the book's "Maxwell
  Relations" after, Table 22.3.1 and Example 22.3.1 in it. Concepts (new):
  `internal-energy-first-derivatives` ((22.3.3), (22.3.4)), `euler-reciprocity` (the book's "Euler
  relation"), `maxwell-relations` (bold "Maxwell Relation"), `maxwell-relation-u`,
  `enthalpy-first-derivatives` ((22.3.7), (22.3.8)), `maxwell-relation-h`, `maxwell-relation-a`,
  `maxwell-relation-g` (the last two from Table 22.3.1, worked in 22.5),
  `thermal-expansion-coefficient` α and `isothermal-compressibility` κ_T (named, never defined, by
  the book: their rows state the standard definitions), `pressure-coefficient-alpha-kappa`
  ((∂p/∂T)_V = α/κ_T, given in the example), `thermodynamic-equation-of-state` (Example 22.3.1's
  result, corrected). Reinforces: 21.1's dU and dH and U(S, V).
- **22.4** No header: one block, header proposed "Pressure and the Enthalpy". Concepts (new):
  `gibbs-first-derivatives` ((∂G/∂T)_P = −S, (∂G/∂P)_T = V, printed −V: corrected),
  `enthalpy-pressure-dependence` ((22.4.2)), `ideal-gas-enthalpy-pressure` ((∂H/∂P)_T = 0).
  Reinforces: `maxwell-relation-g`, the ideal-gas law. Exercise 22.5.4 routed here.
- **22.5** The opening paragraph is its own block, header proposed "Four Equations in Their Natural
  Variables"; the book's nine headers after (### Principle of Clausius stays an `<h3>`); References
  to `notes`. Concepts (new): `fundamental-equations` (idea), `chemical-potential` (μ_i, first named
  here), `fundamental-equations-composition` (the n-dependent forms), `helmholtz-first-derivatives`
  ((∂A/∂V)_T = −P, (∂A/∂T)_V = −S, bold "first order derivatives"). Reinforces: 19.4's inexact
  differentials (the bold term, `exact-and-inexact-differentials`, not a new concept), 20.2's
  entropy (the "Principle of Clausius"), 21.1's dU and dH, 22.1's dA, 22.2's dG, 22.3's Maxwell
  relations (A's and G's worked here), 22.2's natural-variables table (22.5's Table, kept).
- **22.6** One paragraph, one block, header proposed "Standard State Conditions". Concept (new):
  `standard-state-gas` (a pure ideal gas at 1 bar, °, temperature not in the definition), resting on
  19.12's `standard-state`.
- **22.7** The opening (### Ideal gas, ### Solids) is a block, header proposed "Gibbs Energy and
  Pressure", its `<h3>`s kept; the book's two headers after; the emphasis box on H(0) kept. Concepts
  (new): `gibbs-ideal-gas-pressure` (ΔG_molar = RT ln(P₂/P₁), G_molar = G°_molar + RT ln(P/1)),
  `gibbs-solid-pressure` (G(P_final) ≈ G(P_initial) + VΔP), `gibbs-helmholtz-equation` ((22.7.1)
  and the Δ form), `gibbs-temperature-curve` (G continuous at transitions, descending, kinks; plotted
  as G − H(0)). Reinforces: 19.9's H from C_P, 21.5's S along a heating path, 21.3's Δ_trs S, 21.2's
  third law, κ (22.3's κ_T).
- **22.8** No header: two blocks proposed, "Defining the Fugacity" (to "In the zero-pressure limit
  …") and "Fugacity in Mixtures and at Equilibrium" (from "For mixtures"). Concepts (new):
  `fugacity` (bold), `fugacity-coefficient` φ, `fugacity-zero-pressure-limit`,
  `component-fugacity` (dḠ_i and dμ̄_i), `chemical-potential-fugacity` (μ̄ = μ̄° + RT ln(f/P°)).
  Reinforces: `gibbs-ideal-gas-pressure`, `chemical-potential`, `standard-state-gas`.

## Equation numbers

One number per display, from the converter's `n=`: (22.1.1); 22.2 numbers nothing;
(22.3.1)–(22.3.8); (22.4.1)–(22.4.2); (22.5.1)–(22.5.6); 22.6 nothing; (22.7.1)–(22.7.3);
(22.8.1). 22.7's two-row `align` (the Gibbs–Helmholtz cancellation) is one number, (22.7.1), and
its S(T) align one, (22.7.3); 22.5's (22.5.3), (22.5.4) and (22.5.6) are aligns whose first rows
carry `\nonumber`: one number each. Every `[ref:eq:…]` resolves on its page. **Printed labels kept
as printed** (precedent), with a link or footnote where they mislead: 22.3's "Table 6.2.1" (DeVoe's
number for Table 22.3.1: `xref`, footnote); 22.3's "given without proof in Chapter 4" (DeVoe's
Chapter 4, not this book's: footnote); 22.5's "Equation three" in the unnumbered exercise (read as
the third display of its "Maxwell Relations" block, (∂A/∂T)_V = −S: footnote under the card); 22.5's
"in step 2" (as printed); 22.4's "As we showed above" (22.3's Table 22.3.1 and 22.5: `xref`);
22.7's "Fig. 22.7 in the book" (McQuarrie and Simon's figure, which this page does not print:
footnote; `sim-gibbs-temperature` stands after the paragraph).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises (22.5)**: **6 printed**. **4 keyed**, available now: 22.5.1 and 22.5.2
  (explanations), 22.5.4 (its Answer gives (∂H/∂P)_T = 0 and the reason; the derivation half is 22.4's
  printed derivation), 22.5.3 (its Answer "See the Maxwell Relations section" points at a section
  the page prints, and 22.3's has the same name). **2 unkeyed**, available with AI solutions, both
  derive-or-prove: the unnumbered "What does Equation three mean for the heat capacity?" (its
  printed answer is the bare word "answer", a collapsed placeholder: C_V = T(∂S/∂T)_V =
  −T(∂²A/∂T²)_V), and 22.5.5 (the Clapeyron equation; its Answer "See the third outside link" points
  at no link the page prints: *orchestrator*, below).
- **Placement** (root rule 12: an exercise goes with the section that introduces what it tests):
  22.5.1, 22.5.2 and the unnumbered one stay in 22.5; **22.5.3 → 22.3** (the Maxwell relations);
  **22.5.4 → 22.4** ((∂H/∂P)_T and the ideal gas); **22.5.5 → 23.3** (the Clapeyron equation, derived
  on page 14499; held for Chapter 23, both notes say so). Kind `exercise` for all; `source_number`
  "Exercise 22.5.1" … "Exercise 22.5.5", and "Exercise" for the unnumbered one.
- **Worked examples**: 3 (22.1.1; 22.2's unnumbered NH₃ + HCl; 22.3.1 with a Solution), kept, never
  exercises.
- **22.E**: no such page; nothing else to route.
- **In all**: Chapter 22 keeps **5 cards, 4 keyed, 1 unkeyed**: 22.3 one (22.5.3, keyed), 22.4 one
  (22.5.4, keyed), 22.5 three (22.5.1 and 22.5.2 keyed, the unnumbered one unkeyed); 22.5.5
  (unkeyed) goes to 23.3.
- **Proposed new: 9**, where a concept would otherwise have none (answers computed here): 22.1 one
  (ΔA_molar for an equimolar ideal mixture at 298.15 K: RT ln ½ = −1718 J mol⁻¹); 22.2 one (ΔG of the
  NH₄Cl example at 400 K with ΔH and ΔS held: −62.2 kJ, and the crossover T = ΔH/ΔS = 618 K); 22.3 one
  ((∂S/∂V)_T of a van der Waals gas from the Maxwell relation from A: nR/(V − nb)); 22.4 one
  ((∂H̄/∂P)_T of N₂ as a van der Waals gas at low pressure, 298.15 K, from 16.2's a = 1.43 L² bar
  mol⁻², b = 0.03913 L mol⁻¹: b − 2a/RT = −0.0762 L mol⁻¹ = −7.62 J mol⁻¹ bar⁻¹); 22.6 one (explain:
  why the standard state is a hypothetical ideal gas at 1 bar and why it names no temperature); 22.7
  two (ΔḠ for compressing an ideal gas from 1 to 10 bar at 298.15 K, RT ln 10 = +5.71 kJ mol⁻¹,
  against liquid water with V̄ taken as 18.07 cm³ mol⁻¹, V̄ΔP = +16.3 J mol⁻¹; the Gibbs–Helmholtz
  equation with ΔH constant from the example's ΔG(298 K) = −91.21 kJ to 500 K: −33.6 kJ); 22.8 one
  (φ of N₂ as a van der Waals gas at 298.15 K and 100 bar: 0.940, so f = 94.0 bar and μ̄ − μ̄_ideal =
  RT ln φ = −153 J mol⁻¹; computed from 16.2's a and b with the gas root of the cubic).

## Figures (root rules 14, 24, 25, 26, 28)

The book prints none. Rule 14 as rewritten today: a figure shows a point the reader sees at once,
moves where the idea moves and costs little effort to read; one per idea that moves or varies, few
extra Sims. None of the chapter's ideas has a time in it, so every proposal is **still** (no cycle,
no transport) and **2D** (relations between quantities, item 28.1). Three ideas vary, as the brief
names them; each gets one Sim, eyebrow "Sim".

| Sim | Section | Point the reader sees at once | Treatment |
|---|---|---|---|
| `sim-gibbs-sign` | 22.2, after the example | the line ΔG = ΔH − TΔS crosses zero at T = ΔH/ΔS, 618 K for the book's NH₃ + HCl: spontaneous below, reverse above | **Sim, still, 2D** (variation by slider): ΔG against T (0–1000 K) as a straight line of intercept ΔH and slope −ΔS, the spontaneous half (ΔG < 0) shaded, a marker at the slider's T; sliders T, ΔH (−300 to +300 kJ) and ΔS (−0.5 to +0.5 kJ K⁻¹), opening on the book's −176.2 kJ and −0.285 kJ K⁻¹ at 298 K, with T = ΔH/ΔS a dashed special on the T slider (F.solve); flipping a sign shows the other three cases (always, never, only above). Readout: ΔG = ΔH − TΔS with the live numbers, and T = ΔH/ΔS when the signs agree. Arrows: none. Book numbers only. **Recommended.** |
| `sim-gibbs-temperature` | 22.7, after the paragraph citing "Fig. 22.7 in the book" | G − H(0) of benzene falls with T and bends at the melting and boiling points; drawn per phase, the three lines cross there and the lowest is the stable phase | **Sim, still, 2D** (variation by slider): G − H(0) of solid, liquid and gas against T (0–450 K), each phase's line drawn full where it is stable and dashed where it is not, the stable curve thick, its slope −S jumping at T_fus and T_boil; a T cursor reads G, H and TS of the stable phase; slider P (0.1–10 bar) moves the gas line by RT ln(P/P°) and with it the boiling point. Readout: G = H − TS with the live numbers, and at a crossing Δ_trs H = T_trs Δ_trs S. **Literature data needed** (the page gives none): benzene T_fus 278.7 K, Δ_fus H 9.87 kJ mol⁻¹, T_b 353.2 K, Δ_vap H 30.7 kJ mol⁻¹, C̄_P(l) ≈ 136 and C̄_P(g) ≈ 82 J K⁻¹ mol⁻¹, a Debye solid below the melting point: NIST WebBook to be named in the caption, **from memory, unchecked** (`LOG.md`). Offered; the orchestrator decides (below). |
| `sim-fugacity-coefficient` | 22.8, after φ = f/P | φ starts at 1 as P → 0, dips below 1 where the attractions win and climbs past 1 where the molecules' own volume wins; the hotter the gas, the closer φ stays to 1 | **Sim, still, 2D** (variation by slider and choice): φ against P (0–500 bar) for a van der Waals gas, choice of gas from 16.2's Table 1 (N₂, CH₄, C₂H₆) and 16.3.2's CO₂ (a = 3.66 L² bar mol⁻², b = 0.0429 L mol⁻¹); slider T (150–1000 K); the ideal φ = 1 dashed; a P marker reads f = φP. H₂O is left out at room temperature (it condenses); for T below the gas's 8a/27Rb the curve stops at the cubic's three-root region. Readout: φ = f/P and ln φ = ∫₀^P (Z − 1)/P′ dP′ (one step from the page's dḠ = V̄dP and dḠ = RT d ln f) with the live numbers. Opens on N₂ at 298.15 K: φ = 0.993, 0.966, 0.940, 0.918 at 10, 50, 100, 200 bar (computed here). Book numbers only. **Recommended.** |

Judged and dropped: a Maxwell-relations figure (the relations are identities; a surface of U(S, V)
with its two slopes would show nothing the table does not, and needs an equation of state the book
does not give); a figure for 22.4 (H flat against P for an ideal gas is a horizontal line); a figure
for 22.6 (one paragraph); a natural-variables "thermodynamic square" (the book does not draw one).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 22.1, dS > δq/T → dU ≤ TdS → dU − TdS ≤ 0 → A ≡ U − TS → (22.1.1) → dA ≤ 0 | printed block with words, 6 displays; one line inserted (δq = dU at constant V) | printed | **Build**: "Derivation · the Helmholtz energy as the criterion at constant T and V"; facts the Clausius inequality (20.4), dU = δq + δw with no work at constant V (19.1), A's definition. |
| 22.1, Example 22.1.1 | ΔU = 0, ΔS_mix (20.6), ΔA = −TΔS; then ΔA = ΔU − q_rev = w_rev | 2 moves each | Stays. |
| 22.1, natural variables of A | printed align, 2 moves (substitute 21.1's dU, cancel) | | Stays. |
| 22.2, dG ≤ 0 at constant T, P | "repeat the above treatment": G = U + PV − TS, dG, constant T and P, the Clausius inequality with dU = δq − PdV; about 5 moves; imported 2 (20.4, 19.2's PV work), run 3, joins 0: **5** | hidden | **Build**: "Derivation · the Gibbs energy as the criterion at constant T and P", after the paragraph that ends on ΔG ≤ 0. |
| 22.2, the meaning of ΔG | printed block with words, 6 lines; first line's −PdV a slip | printed | **Build**: "Derivation · ΔG as the maximum non-PV work"; facts dU = TdS + δw_rev, δw_volume = −PdV (19.2); a `note` corrects the sign. |
| 22.2, natural variables of G | printed align, 2 moves | | Stays. |
| 22.3, dq = TdS, dw → (22.3.1) | 3 moves, repeated from 21.1 | | Stays; cites 21.1 (a `drv` link if 21.1 builds that derivation); "dw = TdS − pdV" footnoted. |
| 22.3, (22.3.2) → (22.3.3), (22.3.4) → Euler → (∂T/∂V)_S; H ≡ U + pV → (22.3.5) → (22.3.6) → (22.3.7), (22.3.8) → Euler → (∂T/∂p)_S | two printed blocks with words, about 14 lines | printed | **Build**: "Derivations · the Maxwell relations from U and H", two chains, results the two relations; (22.3.6)'s dV corrected in a node `note`; dH = TdS + Vdp links 21.1's derivation if there is one. |
| 22.3, A's and G's relations | "can also be developed": hidden here, worked in 22.5 | | Built in 22.5; Table 22.3.1 cites it. |
| 22.3, Example 22.3.1 | 8 printed lines with words, the target misprinted twice, a T dropped | printed | **Build**: "Example 22.3.1 · the thermodynamic equation of state", replacing the Solution; facts dU = TdS − pdV (21.1), the Maxwell relation from A (Table 22.3.1), (∂p/∂T)_V = α/κ_T (given); notes on (∂U/∂V)_T and the T. |
| 22.4, (22.4.1) → ∂/∂P at constant T → (22.4.2) → ideal gas → 0 | printed block with words; the substitution of (∂G/∂P)_T = V and the Maxwell relation inserted | printed | **Build**: "Derivation · the pressure dependence of the enthalpy", results (22.4.2) and (∂H/∂P)_T = 0; a `note` corrects the printed (∂G/∂P)_T = −V. |
| 22.5, (22.5.1), dH, (22.5.3)–(22.5.6) | repeated from 21.1, 22.3, 22.2, 22.1 | | Stay; cite. |
| 22.5, dA → (∂A/∂V)_T, (∂A/∂T)_V → cross derivative → Maxwell from A; "a similar treatment of dG gives" → (∂G/∂T)_P, (∂G/∂P)_T → Maxwell from G | A's chain printed (its cross-derivative line wrong); G's half hidden: 4 moves, imported 2 ((22.5.4), Euler 22.3), run 2, joins 0: **4** | printed + hidden | **Build**: "Derivations · the Maxwell relations from A and G"; a `note` corrects the "+" in the cross derivative. |
| 22.7, ΔG_molar = RT ln(P₂/P₁) | dG = VdP, V = RT/P, integrate: 3 moves | under 4 moves | Stays. |
| 22.7, solids | 2 moves | | Stays. |
| 22.7, G/T = H/T − S → ∂/∂T → C_P terms cancel → (22.7.1) → Δ form | printed block with words | printed | **Build**: "Derivation · the Gibbs–Helmholtz equation"; facts (∂H/∂T)_P = C_P (19.9), (∂S/∂T)_P = C_P/T (21.1); the Δ form as the book's last line. |
| 22.7, (22.7.2), (22.7.3) | repeated from 19.9 and 21.5 | | Stay; cite. |
| 22.7, G continuous at a transition | prose, 2 moves (Δ_trs G = 0, 21.3) | | Stays; `sim-gibbs-temperature` shows it. |
| 22.8, dG = VdP → RT d ln P → fugacity; μ̄ = μ̄° + RT ln(f/P°) | 2 moves each | | Stay. |

**Eight derivation records** to build: 22.1 one, 22.2 two (one hidden, score 5), 22.3 two (one the
example), 22.4 one, 22.5 one (half hidden, score 4), 22.7 one.

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies. *Checked* marks one worked here.

- **22.2**: the "Meaning" block's first line "dG = d(U + PV − TS) = dU − TdS − SdT − PdV + VdP"
  (+PdV; the next line has it right; *checked*); the example's "at 298K ΔG is −91.21 kJ" (−176.2 +
  298 × 0.285 = −91.27 kJ, −91.23 at 298.15 K: rounding of the inputs, not footnoted); 618 K =
  176.2/0.285 = 618.2 K agrees; "is as equilibrium", "does not occur spontaneous", "0<sup>o</sup>C"
  (as printed).
- **22.3**: "dw = TdS − pdV" (dw = −pdV; *checked*: only then does dU = dq + dw give (22.3.1));
  (22.3.6)'s "(∂H/∂p)_S dV" (dp); Example 22.3.1's statement and conclusion "(∂V/∂T)_p = Tα/κ_T − p"
  ((∂U/∂V)_T: the example's own lines reach (∂U/∂V)_T; *checked*); "TdS/dV|_T = (∂S/∂V)_T"
  (T(∂S/∂V)_T); "Table 6.2.1", "Chapter 4" (labels, above); "equation to each other", "p-V works",
  "Modeling the dependence of the Gibbs and Helmholtz functions behave" (as printed).
- **22.4**: "(∂G/∂P)_T = −V" (+V, as 22.5 prints; with −V the next lines give (∂H/∂P)_T = −V −
  T(∂V/∂T)_P, not (22.4.2); *checked*); "∂V/∂T = nR/P" without (·)_P (as printed).
- **22.5**: the cross derivative "∂²A/∂V∂T = (∂(−S)/∂V)_T + (∂(−P)/∂T)_V" (the two are equal, not
  summed; *checked*); (22.5.3)'s second row "& dH − TdS − SdT" without "=" (as printed); Exercise
  22.5.1's answer "the work term in the second law" (the first law; under the card); 22.5.5's answer
  (no link: under the card); "Equation three" (above); "write is out", "deffinition", "what would
  effect", "examples were", "do not account include" (as printed).
- **22.7**: "(P<sub>1</sub>}" (as printed); the struck-through "o" of G°_molar (the page's
  plimsoll, kept as printed: the drafter writes `<s>o</s>`); "If heat capacities are know",
  "discontinuties" (as printed); "Fig. 22.7 in the book" (above).
- **22.8**: "At equilibrium: 0 = μ̄° + RT ln(f/P°)" (a chemical potential is not zero at equilibrium:
  equilibrium sets a species' chemical potential equal in every phase it occupies, 23.3; footnote);
  "Lewis, in 1905" (*from memory, unchecked*: G. N. Lewis introduced the fugacity in 1901; footnote
  only after the builder checks); "lim_{P→0} dḠ = RT d ln P" (notation as printed).

## Licences

Every page CC BY-NC-SA 4.0. No images; nothing to ship but the text.

## What is new to OmniStax here

- **No new type.** A, G, H, U, μ, Ḡ, Ḡ_i, μ̄ and every Δ of them are `energy` (a molar or partial
  molar Gibbs energy is a variant of the same kind; *orchestrator* below on μ); S is 20's
  `entropy`, q_rev 19's `heat`, w_rev 19's `work`, C_P `heat-capacity`, P, p, f, f_i, P°
  `pressure`, T, T_fus, T_boil, T_trs `temperature`, V `volume`, n and n_i `amount`. Untyped and in
  ink: α, κ_T, κ, φ (dimensionless or reciprocal-unit coefficients), y₁, y₂ (mole fractions), R.
- **Symbols: 21 new** (17 with macros): G, Ḡ (also adopted by 21.3's row), Ḡ_i, G_molar,
  G°_molar, A_molar, f, μ̄, μ̄°, μ̄_i, P°, P₁, P₂, P_initial, P_final, T_fus, T_boil, and α
  (`alpha_V`), κ_T, y₁, y₂ without. Reused with a new meaning (`redefines`): A (Helmholtz), p
  (pressure, 22.3), μ_i (chemical potential), f_i (fugacity of component i), φ (fugacity
  coefficient), κ (22.7's compressibility), n_i (amount of species i). Reused as they stand: T, U, P,
  V, R, n_mol, H (`\kHenth`), Delta_H, S_ent, q_rev, w_rev, C_P, T_trs. **84 variables rows.**
  Not yet given rows (the builder adds them with `ost meanings` first): ΔS, ΔU, Δ_trs H and S,
  δq, δw_volume and δw_other, x and X (22.2's other work), C_V (22.5's stub exercise).
- **41 concepts, 67 edges** (Hasse-reduced against the merged book, Chapters 19–21 included: three
  redundant edges removed before the merge), **43 forms**. Reused rather than duplicated: 21.1's
  `fundamental-equation-u`, `natural-variables-u` and `fundamental-equation-h` (22.3's own versions
  withdrawn before the final merge), 19.4's `exact-and-inexact-differentials` (22.5's bold term),
  20.4's `clausius-inequality`, 20.6's `entropy-of-mixing` and `mole-fraction`, 19.8's `enthalpy`,
  19.12's `standard-state`, 17.4's `internal-energy`, 17.5's `ideal-gas-constant`.

## The chapter's answer to root rule 23

The chapter is pure formalism, printed without a single picture, and its one experimental claim
is a sign: ΔG changes sign with temperature. The stunning version gives the reader three dials.
Drag the temperature along the book's NH₄Cl line and watch the salt stop forming at 618 K; flip
the signs of ΔH and ΔS and see the four cases of spontaneity as four lines through the origin of
a plot. Warm benzene from 0 K and watch its Gibbs energy fall as three straight-ish lines, one per
phase, the solid's, the liquid's and the gas's, take turns being lowest; squeeze the vapour and
the boiling point slides up as the gas line rises by RT ln P. Compress nitrogen, methane, ethane
and carbon dioxide with the book's own van der Waals constants and see the fugacity coefficient
sag below one, then climb back past it, flattening as the gas is heated. The Maxwell relations
and natural variables stay what the book makes them, chains of derivatives, built as derivations
the reader can replay step by step.

## Tool changes made for this chapter

None. `tools/lt2md.py` and `tools/md2html.py` handle every construct here: the drafts' 289 maths
spans parse in KaTeX 0.16; two in 22.5 use the Unicode "đ" in maths, which KaTeX accepts with the
app's `strict: false` (a strict parse warns), so no change. Notes for builders: the drafter leaves
"TODO header" above every opening; 22.2's unnumbered example gets the id `ex-example` and 22.5's
unnumbered exercise `e?` / `exr:?` (rename); 22.2's Summary (table, Note list and last sentence)
lands in `summary_html`; 22.5's References come through as a block (to `notes`); 22.7's
`<h3>`s sit in the opening block before the first `<h2>`.

## Open questions (*orchestrator*)

1. **`sim-gibbs-temperature`** needs benzene's transition data and heat capacities from the
   literature (the page gives none and points at a figure it does not print). Build it with NIST
   WebBook values named in the caption and flagged in `LOG.md`, or drop it?
2. **22.5.5's key** ("See the third outside link", no link printed): treat as unkeyed (AI solution,
   the printed pointer kept with a footnote under the card), as counted here?
3. **μ's type**: the chemical potential, Ḡ and μ̄ are proposed as `energy` (molar variants of G),
   though the book gave molar volume a type of its own. Keep, or declare a `molar-energy` type (and
   run `colours:default`)?
