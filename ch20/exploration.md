# Exploration: Chapter 20, Entropy and The Second Law of Thermodynamics

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 20`, then
`python3 tools/convert.py 20`), every page read in full and the mirrored images looked at
(14 files, copied to `media/ch20/`). **The landing page (11816) prints no text**, only its title
and the site's list of sections: no `intro/` page and no `intro` record in `chapter.json`
(Chapter 4's precedent, root rule 21); `ch20/intro/source.md` is kept as the converter's record.
**There is no 20.S page.** **20.E (13713) has no body** (title only): nothing is routed from it
(root rule 9). The chapter prints **no exercise of any kind**: no inline box, no problem list. Its
only question is 20.1's note "Causality vs. Correlation", a rhetorical question answered in the
note itself (kept as the note, not an exercise).

**Where the pages come from.** The pages are stitched from two sources and it shows. 20.1 is
Mulder's UC Davis Chem 431 notes (its images are named `CH431_…`): it speaks of "the new state
function entropy" and "the new state law" before the chapter defines either, refers to "the first
case" and "the second" of a valve experiment it never shows, and writes in the first person.
20.2–20.9 are newer pages; 20.6, 20.7 and 20.8 carry the tag `author@Jerry LaRue` (Chapman), 20.5
credits Patrick E. Fleming (CSU East Bay) and Jerry LaRue in a Contributors list; 20.1–20.4 and
20.9 print no credit and carry no author tag (the book's). 20.4 and 20.6–20.7 reuse Mulder's
passages too (the heat-pump and Stirling text, the "zero law process"). Every page is CC BY-NC-SA
4.0. 20.8 and 20.9 print the same Stirling chain from S = k ln W to S = −kΣp_j ln p_j twice.

**Repeated material** (built once where the book first works it, cited after; precedent): S = k ln W
(20.1, again 20.5 as (20.5.1), 20.8 as (20.8.1), 20.9 as (20.9.1)); W = A!/Πa_j! (17.2's
`distribution-weight`; again 20.1, 20.5, 20.8, 20.9); Stirling's approximation (17.2; again 20.1,
20.8, 20.9); S_ensemble → S_system = −kΣp_j ln p_j (derived 20.8, printed again in 20.9: cited, the
20.9 lines stay printed with a link to 20.8's derivation); ΔS = nR ln(V₂/V₁) (20.3; again 20.6 as
(20.6.1)–(20.6.3)); the expansion into a vacuum (20.1's model experiment; 20.6 again with a piston,
whose figure links 20.1's); the Boltzmann probability p_j = e^{−βE_j}/Q (17.2; 20.8 as (20.8.3)).
From Chapter 19 (being prepared alongside): the first law, reversible PV work, δw_rev = −PdV,
dU = C_vdT for an ideal gas, q_rev = nRT ln(V₂/V₁), the adiabat relation, work and heat as path
functions; 20.3 cites "Section 19-6" and an equation label `19.21`. Chapter 19 merged before this
chapter's rows, so the edges to its concepts are in.

## Pages

| Page | id | Authors (credit list / tags) | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / display lines) |
|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11816 | none | **empty** | | | | | | | |
| 20.1 Energy Does not Determine Spontaneity | 13714 | none | opening; Two items left on our wish list; Entropy on a microscopic scale (### Permutations); Changing the size of the box with the particles in it | | | | 3 (stork, gas/vacuum GIF, levels before/after) | | 1 ("Causality vs. Correlation", with the stork) | 0 / 5 |
| 20.2 Nonequilibrium Isolated Systems Evolve … Energy Dispersal | 13715 | none | none | | | | | | | 0 / 13 |
| 20.3 Unlike heat, Entropy is a State Function | 13717 | none | Circular integrals | | | 1 (20.3.1) | | | | 1 / 12 |
| 20.4 The Second Law of Thermodynamics | 13718 | none | Spontaneity of an isolated system; Entropy exchange of an open system | | | | 2 (two blocks, S against t) | | 1 (emphasis: isolated system) | 0 / 10 |
| 20.5 The Famous Equation … S=k ln W | 13719 | Fleming, LaRue | none | 20.5.1 | | 1 (20.5.1, two photographs) | | | | 1 / 5 |
| 20.6 We Must Always Devise a Reversible Process … | 13720 | tag LaRue | opening; Vacuum Expansion; The Mixing of Two Gases | | | | 2 (piston, two gases) | | 2 (emphasis: Hawking; emphasis: "Always calculate …") | 5 / 17 |
| 20.7 Thermodynamics Provides Insight into the Conversion of Heat into Work | 13721 | tag LaRue | opening; The Carnot Cycle; Efficiency; Heat pumps; Stirling Engine | | | 4 (20.7.1–20.7.4; 20.7.2 a GIF inside a note) | | | 1 ("Sadi Carnot") | 3 / 9 |
| 20.8 Entropy Can Be Expressed in Terms of a Partition Function | 13722 | tag LaRue | none | | | | | | | 4 / 19 |
| 20.9 The Statistical Definition of Entropy is Analogous to the Thermodynamic Definition | 13723 | none | none | | | | | | | 3 / 17 |
| 20.E | 13713 | | **empty** | | | | | | | |

1 worked example (20.5.1, with a Solution part), 0 exercise boxes, 0 problems, 5 numbered figures
(6 images), 7 unnumbered images, 0 tables, 4 notes, 107 display lines. No objectives box, no
"## Summary", no embeds, no References.

## Per section

- **20.1** Blocks: the opening (no header; proposed "Heat Does Not Pick the Direction") and the
  book's three `<h2>`; "### Permutations" stays a sub-header inside its block. The note with the
  stork kept as a titled note. The text speaks of "the first case" of an unseen valve figure and
  refers to entropy as already known (as printed; the chapter's order is the book's).
  Concepts (new): spontaneous process; energy does not decide spontaneity; the number of
  arrangements n!/(a!b!…); the expansion into a vacuum as a model experiment; expansion adds ways to
  share the same ⟨E⟩; Boltzmann's S = k ln W (type entropy); entropies add as W multiply; more
  accessible states drive expansion and mixing. Reinforces: 17.2's W and Stirling, 3.9's box
  levels, 17.2's ensemble.
- **20.2** No header: two blocks proposed, "Heat Is Not a State Function" (to "Which is not
  zero!!") and "Dividing by T" (from "Clearly, δq_rev is not a state function"). Concepts (new):
  energy dispersal; exact differential and its cross-derivative test; reversible heat is not exact;
  1/T as an integrating factor; entropy, dS = δq_rev/T (definition, type entropy). Reinforces: C_v
  (17.4), PV = nRT (16.1); Chapter 19's first law and δw_rev = −PdV.
- **20.3** The book's one header ("Circular integrals") covers the page: two blocks proposed, the
  book's header to the paths' heats, and "Same Change, Two Paths" (from "First, consider the
  combined paths"). Concepts (new): ∮dX = 0 for a state function; ΔS of an isothermal expansion
  nR ln(V₂/V₁); ΔS on heating at constant volume ∫C_v/T dT; entropy is a state function.
- **20.4** The book's two headers; the emphasis note kept. Concepts (new): isolated system; entropy
  produced by heat flowing between two blocks; ΔS of two identical blocks reaching T̄ (corrected);
  the second law dS ≥ 0 (axiom); entropy production and exchange; Clausius inequality.
- **20.5** No header: two blocks proposed, "Counting Microstates" (to the grave sentence and Figure
  20.5.1) and the example as its own block "An Entropy from Two Orientations". Concepts (new): W as
  the measure of energy dispersal (idea). Reinforces: S = k ln W (20.1), W (17.2). The CO crystal's
  residual entropy is Chapter 21's subject (21.x builds it; this example only applies S = k ln W).
- **20.6** The opening (with the Hawking note) its own block, proposed "Entropy and the Universe";
  the book's two headers. Concepts (new): calculating ΔS along a reversible path (skill); ΔS of the
  surroundings; ΔS_total = ΔS_sys + ΔS_surr; mole fraction; entropy of mixing (two and many gases).
  Reinforces: 20.3's nR ln(V₂/V₁), 20.1's expansion.
- **20.7** Opening its own block, proposed "Heat into Work Has a Limit"; the book's four headers;
  the Carnot note with Figure 20.7.2 kept. Concepts (new): dissipation; heat engine; Carnot cycle;
  the work as the enclosed area; engine efficiency; Carnot efficiency 1 − T_c/T_h; heat pump
  (and refrigerator); Stirling cycle.
- **20.8** No header: two blocks proposed, "From Counting to Probabilities" (to (20.8.2)) and "From
  Probabilities to Q" (from "If all the p_j are zero"). Concepts (new): S = −kΣp_j ln p_j; S = U/T
  + k ln Q. Reinforces: Stirling (17.2), Boltzmann probability (17.2), U as the ensemble average
  (17.3).
- **20.9** No header: three blocks proposed, "Two Views of One Law" (opening paragraph), "From
  the Statistical Entropy to Heat" (equations), "Why They Agree" (from "The thermodynamic
  definition of entropy comes from"). The closing bullets kept. Concepts (new): statistical and
  thermodynamic entropy agree (dS = δq_rev/T from −kΣp ln p). The printed repeat of 20.8's chain is
  cited to 20.8.

## Equation numbers

One number per display, from the converter's `n=` (MathJax `\nonumber` on the rest): (20.3.1),
(20.5.1), (20.6.1)–(20.6.5), (20.7.1)–(20.7.3), (20.8.1)–(20.8.4), (20.9.1)–(20.9.3); 20.1, 20.2
and 20.4 number nothing. Every `[ref:eq:…]` resolves on its page. **Printed labels kept as printed**
(precedent): 20.3's "Section 19-6" and its label `19.21` (the page shows (20.3.1); the 19.6
section is "Reversible adiabatic cooling", which the builder links); 20.5's "Equation 20.5.1"
(its own, fine). 20.7's "Figure 20.7.3" and 20.3's "Figure 20.3.1" resolve.

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises**: **0 printed.**
- **Problem lists**: **0 printed.**
- **Worked examples**: 1 (20.5.1, with a Solution part), kept (not an exercise).
- **20.E**: empty; nothing routed.
- **In all**: 0 cards, 0 keyed, 0 unkeyed.
- **Proposed new: 9**, one per section, since every concept of the chapter would otherwise have
  none (each answer computed here):
  20.1 W for 10 molecules split 5:5 between two halves (252, ln W = 5.53) and Stirling against
  ln 10! (13.03 against 15.10);
  20.2 δq_rev is not exact: 1 mol monatomic ideal gas from (300 K, 10 L) to (600 K, 20 L) by heat-
  then-expand and by expand-then-heat: q_rev = 7199 J against 5470 J, ΔS = (5/2)R ln 2 = 14.41 J/K
  both ways;
  20.3 1 mol monatomic gas, V tripled at 298.15 K: ΔS_A = R ln 3 = 9.13 J/K, q_rev,A = 2723 J;
  along B + C, T₂ = 143.3 K and q_rev,C = 1931 J, ΔS the same 9.13 J/K;
  20.4 two identical blocks, C_V = 10.0 J/K each, at 400 K and 300 K: ΔS = 10.0 ln(700²/4·400·300)
  = 0.206 J/K (the printed formula would give −6.52 J/K);
  20.5 1.00 mol of a crystal whose molecules take four equivalent orientations: W = 4^{N_A}, S = R
  ln 4 = 11.53 J/K (explain why W is not 4);
  20.6 1 mol N₂ and 3 mol O₂ mixed at one pressure: χ = 0.25, 0.75, ΔS̄ = 4.676 J K⁻¹ mol⁻¹,
  ΔS = 18.70 J/K;
  20.7 a Carnot engine between 500 K and 300 K taking q_h = 1000 J: η = 0.40, w_cycle = −400 J,
  q_c = −600 J; the same cycle run as a heat pump delivers 1000 J for 400 J of work;
  20.8 a two-level system with ε/kT = 1: Q = 1.368, p₀ = 0.731, p₁ = 0.269, S/k = 0.582 = U/kT
  (0.269) + ln Q (0.313);
  20.9 explain: why Σ_j dp_j = 0, and why Σ_j E_j dp_j is the reversible heat while Σ_j p_j dE_j is
  the work (populations against levels).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten: a figure starts from the book's and usually replaces it; motion where the idea
moves; a point the reader sees at once; little effort to read; folds where the book draws one scene
several times. The chapter's own numbers: the Carnot and Stirling PV diagrams (A 1.2 L, 52 bar; B
2.5 L, 25 bar; C 4.15 L, 10.7 bar; D 1.95 L, 22 bar: PV = 62.4 and 43.5 bar L on the two isotherms,
T_c/T_h = 0.70, and the adiabats fit γ = 5/3, a monatomic gas, *checked by computation*; Stirling A
1.2 L, 33.3 bar; B 2.65 L, 15 bar; C 2.65 L, 7.5 bar; D 1.2 L, 16.7 bar: T_c/T_h = 0.50), the geyser
400 K / 300 K, the heat pump's 100 J and 300 J, aluminium blocks. No literature number is needed.
Arrows: 20.1's "expansion" arrow and 20.4's double-headed q arrow are kinematic (gas and heat
flow); 20.7.3's Q_H, W, Q_C arrows are energy flows (kinematic); the rest are notation.

| Image(s) | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| unnumbered "CH431_Image92" (102761, GIF, no credit): ideal gas in a yellow half, vacuum in the white half | 20.1 | the set-up of the free expansion | **Replace, moving, 2D** (`sim-free-expansion`; flow by animation, variation by slider): a box with a partition, N molecules (slider 4–100, opening 10) in the left half; the partition lifts and they spread, a live count n_L : n_R with W = N!/(n_L!n_R!), ln W and S = k ln W against time, and beside it the bar chart of W over n_L (binomial) with the current split marked. **Point: the molecules never go back because the even splits have overwhelmingly more arrangements; ln W climbs to N ln 2 and stays, and the larger N, the narrower the peak.** Readout S = k ln W with live W. Moving: the expansion has a time (the GIF's own arrow is kinematic). Eyebrow "Figure"; the image in `originals`. Serves 20.6's vacuum expansion too (its piston image links here). |
| unnumbered "CH431_Wexpansion" (69091, no credit): two particles on equidistant levels, W₁–W₃ before, W₁–W₆ after "expansion" | 20.1 | more realizations of the same ⟨E⟩ when the levels crowd | **Replace, still, 2D** (`sim-levels-realizations`; variation by slider): the book's two particles on equidistant levels, ⟨E⟩ fixed as a dashed line; slider box size (the level spacing ∝ 1/a², opening on the book's "before" spacing, detent at the "after" one); every pair that keeps the sum fixed drawn as a column, counted as W. **Point: the same average energy, more ways to make it as the box grows: W goes 3 → 6 as in the book.** Readout W and S = k ln W. Still: the slider is the change; the arrow "expansion" is the slider. Eyebrow "Figure"; original kept. |
| unnumbered stork photograph (69090, credit Frank Vassen) | 20.1 | inside the note | **Kept** with its credit: the note is about storks and the photo is its subject (the note's own image). |
| 20.3.1 (347606, "CC BY-NC; Ümit Kaya") | 20.3 | PV plane, isotherm A, adiabat B, isochore C | **Replace, still, 2D** (`sim-entropy-two-paths`; variation by slider and choice): the PV plane with A from (V₁, T₁) to (V₂, T₁) and B + C through (V₂, T₂); a choice of path lights it and its bars of q_rev and ΔS; sliders V₂/V₁ (1.2–5, opening 2) and T₁. **Point: the heats along the two paths differ (q_rev,A against q_rev,C) while ΔS is nR ln(V₂/V₁) on both.** Readout ΔS_A = q_rev,A/T and ΔS_{B+C} = ∫C_v/T dT with live numbers. Eyebrow "Figure 20.3.1"; original kept. |
| unnumbered "Isolated_System" (401986: T_A gray, T_B white, double arrow q) + unnumbered "Entropy" (401987: S rising with t to a plateau) | 20.4 | two blocks exchanging heat; S against time | **Fold, replace, moving, 2D** (`sim-two-blocks`; flow by animation, variation by slider): two identical aluminium blocks coloured by temperature, heat drawn flowing from hot to cold (kinematic) with a rate ∝ T_A − T_B; below, T_A and T_B converging to the average and S_total(t) rising to its plateau, dS_A < 0 and dS_B > 0 plotted beside it. Sliders T_A, T_B (opening 400 K and 300 K) and C_V. **Point: the hot block loses less entropy than the cold one gains, because the same dU is divided by a larger T; S keeps rising until the temperatures meet, then stops.** Readout dS = dU_A(1/T_A − 1/T_B) and the final ΔS = C_V ln[(T_A + T_B)²/4T_AT_B] (corrected). Moving: heat flows, the book's S(t) has a clock. Eyebrow "Figure" (both images unnumbered; *orchestrator*: two unnumbered images folded into one figure, both in `originals`). |
| 20.5.1 (113517 portrait + 113518 grave, no credit) | 20.5 | Boltzmann and his grave with S = k log W | **Kept**: the text points at it ("Figure 20.5.1"); two panels, one figure. |
| unnumbered "Ideal_Gas_-_Vacuum_Piston" (402030) | 20.6 | gas, peg, vacuum | **Kept** as printed (a set-up sketch); its sentence links 20.1's `sim-free-expansion` (built once, cited). |
| unnumbered "Two_gases" (402032) | 20.6 | gas A and gas B separated | **Replace, still, 2D** (`sim-mixing-entropy`; variation by slider): a box of A and B molecules at the slider's χ_A, the wall shown and removed; beside it ΔS̄_mix/R = −(χ_A ln χ_A + χ_B ln χ_B) against χ_A with the state point. Slider χ_A (0–1, opening 0.5). **Point: mixing always raises the entropy, most at an even mix (R ln 2 = 5.76 J K⁻¹ mol⁻¹) and little when one gas is a trace.** Readout (20.6.4) with live numbers. Eyebrow "Figure"; original kept. |
| 20.7.1 (402075, "CC BY 4.0; Jerry LaRue") + 20.7.3 (99715, "Public Domain; Eric Gaba") | 20.7 | the Carnot cycle on PV, numbered steps 1–4; the engine diagram Q_H → W + Q_C | **Fold, replace, moving, 2D** (`sim-carnot-cycle`; flow by animation, variation by slider, a view the book lacks): left, the PV cycle with the state point running A → B → C → D (book's volumes, γ = 5/3), the enclosed area filling; centre, the same cycle on a TS diagram (a rectangle; the book draws none); right, 20.7.3's energy-flow diagram with arrow widths ∝ q_h, |w_cycle|, |q_c|. Sliders T_h and T_c (opening on the figure's ratio 0.70), choice engine / heat pump (the cycle reversed, arrows flipped). **Point: the work is the area, the same on both diagrams; on the TS rectangle q_h = T_hΔS and |q_c| = T_cΔS, so η = 1 − T_c/T_h falls to zero as T_c → T_h; at the geyser's 400/300 the Q_C arrow is three times W.** Readout η = 1 − T_c/T_h with q_h, q_c, w_cycle live. Moving: the cycle is a clock (a transport). Eyebrow "Figure 20.7.1 + 20.7.3"; both images in `originals`. *Orchestrator*: 20.7.3 is a different scene from 20.7.1 (energy flow, not the PV path); folding it is proposed because the text ties them ("the arrow saying Q_C … three times as fat") and one cycle drives both. |
| 20.7.2 (99717, GIF, "CC SA-BY 2.5; Emoscopes") | 20.7 | triple-expansion engine animation, in the Carnot note | **Kept** as printed (already animated; CC BY-SA 2.5 with credit). Not rebuilt: it shows machinery, not the cycle. |
| 20.7.4 (402128, "CC BY 4.0; Jerry LaRue") | 20.7 | Stirling cycle PV, two isotherms and two isochores | **Kept** as printed: the Carnot figure already moves a cycle; the Stirling text is short and its point (heats of the isochores cancel) reads from the still. Its step labels are right; the text's step 2 and 4 are swapped (footnote). |

**3D**: none. Nothing in the chapter is an arrangement in space.

### Extra simulations proposed (root rule 15)

One, offered, not recommended: **`sim-two-level-entropy` in 20.8** (still): a two-level system,
slider ε/kT; bars p₀, p₁ and S/k = U/kT + ln Q against kT/ε, rising from 0 to ln 2. The reader sees
S = U/T + k ln Q split into its two terms. Judged weaker than the text; drop unless wanted.

Judged and dropped: a Stirling-cycle sim (the Carnot one covers a moving cycle); an animated heat
pump separate from the Carnot fold (the choice covers it); a Clausius-inequality figure (no
variation to show).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 20.1, n! and n!/(a!b!…) | prose counting | under 4 moves | Stays. |
| 20.1, W_tot = W₁W₂ → S = k ln W | prose argument | not a chain | Stays. |
| 20.2, dU = C_vdT, δw_rev = −PdV → δq_rev = C_vdT + PdV → exactness test → ∂C_v/∂V = 0 ≠ ∂P/∂T = nR/V → ×1/T → both cross derivatives 0 → dS exact | printed block with words, 14 displays | printed | **Build**: "Derivation · entropy as an exact differential", results "δq_rev is not exact" and dS = δq_rev/T exact; facts dU = C_vdT and δw_rev = −PdV (Chapter 19, `drv` once 19 is built), the first law (19), PV = nRT (16.1), the cross-derivative test (this section's definition). The book's "(∂q/dT)_V" kept in its line, noted. |
| 20.3, ∫_{T₂}^{T₁} C_v/T dT → nR ln(V₂/V₁) | the book cites "Section 19-6"; hidden: C_v ln(T₁/T₂), the adiabat relation C_v ln(T₂/T₁) = −nR ln(V₂/V₁), the sign flip; 4 moves; imported 2 (the adiabat relation, ΔS_B = 0 since q = 0); run 3; joins 1 (two paths compared): score 6 | hidden | **Build**: "Derivation · the entropy change along the adiabat and the isochore", result (20.3.1) and ΔS_A = ΔS_{B+C}; links Chapter 19's adiabat derivation. |
| 20.4, dU_A = −dU_B, dU_A = δq_A, TdS = dU → dS = dU_A(1/T_A − 1/T_B) | printed block with words, 5 lines | printed | **Build** together with the next: "Derivations · entropy produced as two blocks reach one temperature". |
| 20.4, ΔS = C_V ln[(T_A + T_B)²/4T_AT_B] | "we can, in fact, derive": hidden; T_f = (T_A + T_B)/2, ΔS_A = C_V ln(T_f/T_A), ΔS_B, sum, combine logs: 5 moves; imported 2 (energy conservation for identical blocks, dS = C dT/T from 20.3); run 5; joins 1: score 8 | hidden | **Build** (same record, second result), result corrected (the book prints T_A² + T_B², which is not positive in general: *checked by computation*, 400 K and 300 K give −6.52 C_V against +0.0206 C_V). |
| 20.4, Clausius inequality | cases in prose | not a chain | Stays. |
| 20.5, Example 20.5.1 | substitution | never | Stays (W corrected in a footnote). |
| 20.6, (20.6.1) + (20.6.2) → ΔS = nR ln(V₂/V₁); ΔS_total aligns | 1–2 moves each | | Stay. |
| 20.6, ΔS_A, ΔS_B → (20.6.3) → χ → log rule → (20.6.4) → (20.6.5) | printed block with words, 8 displays | printed | **Build**: "Derivation · the entropy of mixing", results (20.6.4), (20.6.5); facts ΔS = nR ln(V₂/V₁) (20.3's, `drv`), V ∝ n at one P and T (16.1), the mole fraction. |
| 20.7, ΔU_cycle = 0 → q_h + q_c = −w_cycle → w_i → w_cycle → η; and ∮dS = 0 → q_c/q_h = −T_c/T_h → (20.7.1) | printed block with words, two routes | printed | **Build**: "Derivation · the efficiency of a Carnot engine", one result (20.7.1) reached by both routes (a join). Inserted line: V_D/V_C = V_A/V_B from the two adiabats (the book uses it silently in w_cycle), fact Chapter 19's adiabat relation. |
| 20.7, Stirling steps | step list | not a chain | Stays (q₂, q₄ corrected in footnotes). |
| 20.8, (20.8.1) → Stirling → a_j = p_jA → (20.8.2) → (20.8.3) → (20.8.4) | printed block with words, 19 displays | printed | **Build**: "Derivations · entropy from the probabilities and from the partition function", results (20.8.2) and (20.8.4); facts S = k ln W (20.1), W (17.2), Stirling (17.2, `drv` if built), p_j (17.2), U = Σp_jE_j (17.3), βk = 1/T. Corrected: the sign of the first term of the third line (+βk). |
| 20.9, the repeat of 20.8's chain | printed again | | Stays printed (repeated material), with a link to 20.8's derivation. |
| 20.9, dS = −k_BΣ(dp_j + ln p_j dp_j) → Σdp_j = 0 → "In short" Σ ln p_j dp_j = −δq_rev/k_BT → (20.9.3) | the key step hidden: ln p_j = −βE_j − ln Q, Σ ln Q dp_j = 0, ΣE_jdp_j = δq_rev; 5 moves; imported 3 (p_j from 17.2, heat as the change in populations (Chapter 19's molecular view), β = 1/k_BT); run 3; joins 1: score 7 | hidden | **Build**: "Derivation · the thermodynamic entropy from the statistical one", result (20.9.3); first fact links 20.8's derivation. |

Seven derivation records (20.2; 20.3; 20.4; 20.6; 20.7; 20.8; 20.9), three hidden or half hidden
(20.3 score 6, 20.4's second result 8, 20.9 score 7).

## Corrections spotted (root rule 13)

*Checked by computation* marks a correction worked here; none rests on memory.

- **20.1**: "n_1² + n_2² + n_2²" (n_3²); "Clearly if the side (a" (unclosed, as printed); "iis own",
  "thermodynamincs", "forms energy" (as printed); W = A!/A!0!0!… for W = 1 (as printed); "Thus
  entropy is very large" (as printed); the stork note's demographic aside (kept verbatim as the
  book's note; flagged for the orchestrator only because it is opinion, see the open questions).
- **20.2**: "(∂q/dT)_V dT + (∂q/dV)_T dV" (∂T, ∂V); "∂(C_v/T)/∂V" and "∂(P/T)/∂T = ∂(nR/V)/∂T = 0"
  are right (no correction).
- **20.3**: "q_{rec,A}" (q_rev,A); (20.3.1)'s ΔS_{B+C} = nR ln(V₂/V₁) follows from the integral
  only with the adiabat relation (the derivation supplies it); "(Notice sign in Equation 20.3.1 is
  positive)" (as printed).
- **20.4**: "Because U is a state function this makes q a state function as well" (here, with no
  work, dq_A equals dU_A; q is not a state function in general: footnote); ΔS = C_V ln[(T_A² +
  T_B²)/4T_AT_B] ((T_A + T_B)², *checked by computation*); the "bat silhouette" alt text of the S(t)
  graph (the alt is the site's; the figure is the plot).
- **20.5**: Example 20.5.1: "S = nK ln(W)" with W = 2 (S = k ln W with W = 2^N, so S = Nk ln 2 =
  R ln 2 for 1 mol; the number 5.76 J/K is right, *checked by computation*); "\cot" (·, as
  printed in the TeX: a cotangent sign shows); "k_b" (k_B).
- **20.6**: "Richard Hawkins" (Stephen Hawking, who died in 2018; footnote); "an let", "the is no",
  "Claussius" (as printed); "δw_rev = −δq_rev is nonzero" (right).
- **20.7**: "w_hot > w_cold" (magnitudes); "An ideal engine would take q_h → q_c with 100%
  efficiency" (as printed); "η = 1 − 300/400 = 24%" (25%, *checked by computation*); "you'd be
  dumping three quarters" (consistent with 25%); "the from of heat", "imaging", "if it is heat you
  after" (as printed); the Stirling list: step 2 "Isochoric heating from T_c to T_h" and step 4
  "Isochoric cooling from T_h to T_c" against the figure's 2 isochoric cooling (B → C) and 4
  isochoric heating (D → A) (the figure is right; footnote); (20.7.2) q₂ = C_V/ΔT and (20.7.3) q₄ =
  −C_V/ΔT (C_VΔT, *checked*: units); "this gray area" (refers to Figure 20.7.4's shading); "q_c is
  only zero if the cold temperature is 0 K" (as printed). Figure 20.7.1's "w_hot > w_cold" reading
  of the area is right.
- **20.8**: "formulism", "Sterling's approximation" (as printed); the third line of the last align,
  "−βk Σ E_je^{−βE_j}/Q" (+βk; with the minus the result would be −U/T + k ln Q, *checked by
  computation*); "If all the p_j are zero except for the for one" (as printed).
- **20.9**: "Sterling's" (as printed); "the number of microstates in state j is equal to the total
  number of microstates multiplied by … p_j" (systems, not microstates: footnote); "dropping the
  subscript" (as printed).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 20.3.1 | "CC BY-NC; Ümit Kaya via LibreTexts" | page licence, credit kept |
| 20.7.1, 20.7.4 | "CC BY 4.0; Jerry LaRue via LibreTexts" | own licence with credit |
| 20.7.2 | "CC SA-BY 2.5; Emoscopes" | own licence (CC BY-SA 2.5) with credit |
| 20.7.3 | "Public Domain; Eric Gaba" | public domain with credit |
| stork (20.1) | "from Wikipedia (credit: Frank Vassen)" | kept with the credit as printed (its licence on Commons is not printed; the builder confirms it before shipping, *orchestrator*) |
| 20.5.1 (two photographs) | none | page licence (both are old public-domain photographs of Boltzmann and his grave as reproduced on Wikimedia; no credit printed) |
| 20.1's two CH431 images, 20.4's two images, 20.6's two images | none | page licence |

**Page licences**: every page CC BY-NC-SA 4.0.

## What is new to OmniStax here

- **Types**: `entropy` (J/K), new, this chapter's (colour `#700486/#E99AFF` from the stable
  assignment, no other type moved). `heat` and `work` are Chapter 19's, merged before this chapter.
- **Symbols**: S is 8.8's spin quantum number (no macro), so entropy is `S_ent` (`\kSent`, latex
  S), with `S_prod`, `S_exch`, `S_sys`, `S_surr`, `S_total`, `S_ensemble`, `S_system`, `S_A`, `S_B`,
  `S_BC`, `S_bar`; heats `q_rev`, `q_irrev`, `q_rev_A/B/C/BC`, `q_h`, `q_A`, `q_1`–`q_4` (q and
  q_c reused, typed heat with `redefines`); works `w`, `w_rev`, `w_cycle`, `w_1`–`w_4`, `w_h`,
  `w_c`, `w_hot`, `w_cold`; `T_A`, `T_B`, `T_1`, `T_2`, `T_h`, `T_cold` (T_c reused, `redefines`);
  `V_A`–`V_D`, `V_tot`, `n_A`, `n_B`, `n_tot`, `P_ext`, `P_1`, `P_2`, `U_A`, `U_B`, `U_1`, `U_4`,
  `U_cycle`, `E_kin`; untyped `p_j`, `eta`, `n_3`, `W_1`, `W_2`, `W_tot`; χ's reused untyped
  (mole fractions, `redefines` on 9.12's electronegativity). Chapters 19, 21 and 22 merged first
  under the same names: `w`, `w_rev`, `q_rev`, `T_1`, `T_2`, `P_ext`, `P_1`, `P_2` are theirs and
  reused; H is 19's `H` (`\kHenth`). Chapter 21 left its S° symbols untyped awaiting this
  chapter's `entropy`.
- **39 concepts, 72 edges (Hasse-reduced against the merged book: 17 redundant edges removed before the merge), 25 forms**; reused: 19.4's `exact-and-inexact-differentials` (not a new exact-differential concept), Chapter 19's first law, reversible and irreversible processes, path and state functions, the adiabat, `work-as-area` and `molecular-heat-and-work`; 17.2's `distribution-weight`,
  `stirlings-approximation`, `boltzmann-probability`, 17.3's `average-ensemble-energy`, 17.4's
  `internal-energy` and `constant-volume-heat-capacity`, 16.1's `ideal-gas-law` and `isotherm`,
  3.9's `particle-in-a-3d-box`.

## The chapter's answer to root rule 23

The second law is the one law of the book that has a direction, and the book draws it in four
sketches. The stunning version lets the reader watch the arrow of time appear: lift a partition
and ten molecules spread and never come back, the count of arrangements beside them showing why;
two blocks trade heat and the total entropy climbs until their temperatures meet; two paths
between the same states carry different heats and the same ΔS; a Carnot cycle runs on PV and TS at
once, its area the work and its efficiency falling to zero as the reservoirs close in; run
backwards it heats a flat with the garden's cold.

## Tool changes made for this chapter

None. `tools/lt2md.py` and `tools/md2html.py` handle every page as they stand: the drafts set
every maths span (`split` and `align` displays tagged once), the notes, the example and the
figures; the bare `![…]` images of 20.1, 20.4 and 20.6 come through as `<p><img>` (as in Chapters
4–12), for the builder to make figure rows. Notes for builders: the drafter leaves no header above
the openings of 20.1, 20.2, 20.5, 20.6 (its emphasis note), 20.8 and 20.9; 20.5's credits land in
`credits`; 20.1's "### Permutations" comes through as an `<h3>` inside its block.

## Open questions (*orchestrator*)

1. **Two unnumbered images folded into one figure** (20.4's two-blocks sketch and its S(t) curve
   into `sim-two-blocks`, eyebrow "Figure"): the fold rule speaks of numbered figures; precedent for
   one unnumbered image folded into a numbered figure is 18.4.1.
2. **Folding a different scene** (20.7.3's energy-flow diagram into 20.7.1's cycle, eyebrow "Figure
   20.7.1 + 20.7.3"): the text ties them, one cycle drives both; the alternative keeps 20.7.3 as
   printed.
3. **20.1's stork note** closes on an aside about post-war Germany and immigration "mostly from
   Muslim countries … that usually have larger families": the book's words, kept verbatim under
   rule 13 unless the orchestrator wants the note's answer cut to its first and last sentences.
4. **The stork photograph's licence** is not printed (credit only): keep with the credit if the
   builder confirms a free licence, else drop it (decoration of a note).
