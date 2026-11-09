# Config: Physical Chemistry (LibreTexts), Chapter 23

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 23 Phase Equilibria: landing page 11819, sections 23.1–23.5 (14497–14501) all built; no summary page; 23.E (14496) is empty and not built |
| Stray and empty pages | 23.E empty (title only); no section is empty; 23.2 and 23.4 are splices of other LibreTexts texts and keep Tuckerman's printed numbers |
| Front matter | the landing page's one paragraph is the chapter's `intro/` page (record in `chapter.json`), with no lead, objectives, summary or exercises |
| Summary page | none (the book prints no 23.S); nothing goes to `summary/` |
| Start point | 23.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; 23.4's two objectives (mid-page in the source) to `objectives`; no "## Summary" on any page; credits: none printed and no author tag (the book's) |
| Headers | the book's `<h2>` kept with their `###`/`####`; the agent's for 23.1's untitled opening ("Reading a Diagram"), 23.4's general-chemistry part ("Vapor Pressure Curves"), 23.5 ("From Q to the Chemical Potential"), and optionally 23.2's Tuckerman part ("Gibbs Energy Across Benzene's Transitions"), through the humanizer by the builder |
| Boxed notes | 23.1's untitled emphasis note (sealed containers, the critical point, the phase count) and "The partial molar Gibbs free energy" kept; 23.1's pull-quote as an untitled emphasis note (13.12 precedent); 23.4's "Alternative Formulation" (carrying (23.4.20)) and "Advanced Note" kept as titled notes |
| Embeds | none |
| Printed labels | kept as printed: Figures 13.4–13.7 (Tuckerman's numbers) in eyebrows and rows; the two "Example 23.4.1" (`ex-23-4-1`, `ex-23-4-1-2`); "Exercise 23.4.2" with no 23.4.1; 23.4's "Section 23.3" as an in-book `xref`; 23.3's "the almost vertical line in the diagram" linked to 23.1's phase diagram |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (23.2.1)–(23.2.6), (23.4.1)–(23.4.20); 23.1, 23.3, 23.5 number nothing |
| Repeated material | built once where the book first works it and cited after: the Clapeyron equation (23.3; Tuckerman's (23.4.2)–(23.4.10)); the Clausius–Clapeyron equation (23.4's opening (23.4.1); (23.4.11)–(23.4.13)); μ = Ḡ (23.1; (23.4.5)); Δμ = 0 (23.3; (23.4.2)); from earlier chapters G, A and their fundamental equations with μ dn and the chemical potential (22.1–22.5), G against P and T (22.7), the first-order transition and Δ_trs S (21.3), H and Δ_fus H (19.8), the critical point (16.3), the ideal gas law and molar volume (16.1), U and S from Q (17.3, 20.8) |
| Figures | as the table in `exploration.md`: 23.1.1 replaced by `sim-gibbs-stability` (moving: a state point jiggling on G(X), start A–E, fluctuation slider); the unnumbered unary diagram replaced by `sim-phase-diagram` (still: drag the state point, water / CO₂, triple and critical points, Earth and Mars lines, Clapeyron slope readout); the unnumbered G̅(T) sketch replaced by `sim-gibbs-temperature` (still: μ(T) of three phases, P slider, benzene from Figure 13.5); Figures 13.6 + 13.7 folded (still: G̅(P), T slider, benzene / water; lower priority); Figure 23.4.1 replaced (still: P(T) beside ln P against 1/T, liquid choice, T slider); kept: 23.1.2, the Landau sketch (C_p labels corrected in its caption), 13.4, 13.5 |
| 3D | none required; `sim-mu-surfaces` offered below |
| Model data | the book's: water's triple point 273.16 K / 4.58 Torr, Δ_fus H 6006 J/mol, Δ_vap H 45 051 J/mol at 0 °C and 40.65 kJ/mol at 373 K, ethanol's 39.0 kJ/mol, benzene's curves read off Figures 13.5–13.6; from memory and flagged in `LOG.md`: water's critical point (647 K, 220.6 bar), ice and water densities, Mars's ≈ 6 mbar, CO₂'s triple and critical points, five liquids' boiling points and Δ_vap H for Figure 23.4.1 |
| Extra simulations | one offered, not recommended for the time: `sim-mu-surfaces` (23.3, mathematical 3D, μ(T, P) surfaces whose crossings are the phase diagram) |
| Derivations | built, all printed: the liquid has more entropy than the solid (23.2); equal chemical potentials in two phases (23.3); the Clapeyron equation (23.3, first line corrected); the Clausius–Clapeyron equation (23.4's opening, bracket corrected); the integrated Clausius–Clapeyron equation (23.4, (T₂ − T₁) corrected); the chemical potential from the partition function (23.5, one line inserted, R and dA corrected); Tuckerman's repeat in 23.4 stays printed and cites; the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 23.1's 273.16 K melting point and 15 Torr, its ∂n_1; 23.2's discontinuity above T_c; 23.3's swapped dμ; 23.4's bracket, (T₁ − T₁), "pressure of the liquid phase" and Example 23.4.3's rounding; 23.5's R for k_B and dA |
| Colour | no new type; pressure, temperature, volume, molar-volume, amount, energy (G, H, μ, ΔH_vap), entropy, heat-capacity, partition-function, potential, charge, magnetic-moment, magnetic-field, force, length reused; γ and the surface area in ink; facts: none; conventions: none (no atom drawn); referents: none proposed (the phases are categories of curve, labelled, not referents: the builder may make solid, liquid and gas referents shared by the three Gibbs and phase figures if the page reads better) |
| Symbols | 68 new (all with macros), 144 variables rows (see `chapter.json`); 33 concepts, 50 edges, 27 forms |
| Licence | every page CC BY-NC-SA 4.0 except 23.4 (CC BY 4.0 at the source, shared BY-NC-SA); Figure 23.4.1 under its printed BY-NC-SA 3.0 with credit; the uncredited images under the page's licence |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: **1 printed** (23.4.2); **0 keyed**; **1 unkeyed**, available with an AI
  solution: compute (P_ice/P_water = 1.0081 at 274 K from the triple point and Δ_fus H = 6006 J/mol;
  4.907 against 4.867 Torr).
- **Worked examples**: 4 (23.4.1 twice, 23.4.2, 23.4.3), all with a Solution, kept whole (not
  exercises).
- **23.E**: **0 printed** (empty).
- **Placement**: 23.4.2 stays in 23.4, kind `exercise`, `source_number` "Exercise 23.4.2".
- **In all**: 1 card, 0 keyed, 1 unkeyed (1 compute).
- **Proposed new: 4**: 23.1 one (phase-diagram reading at 3 Torr and 1 bar), 23.2 one (Ehrenfest
  classification), 23.3 one (Clapeyron slope of ice melting, −134.6 bar/K), 23.5 one (μ of an ideal gas
  from Q); 23.4 none (subjects and computed answers in `exploration.md`).

**The choice** (carried over from Chapter 1): the 1 unkeyed exercise kept with an *AI solution*;
*AI exercises* for the 4 proposed. Every exercise is an item of the Exercises document
(`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in `exploration.md`
(marked *orchestrator*).

## Decisions taken by the orchestrator (2026-11-09)

- **Figure 13.5 folds into `sim-gibbs-temperature`**, with eyebrow "Figure 13.5" and both images as originals. Chapter 22's G(T) Sim isn't built, so nothing overlaps.
- **Not built**: the lower-priority 13.6 + 13.7 fold (both images kept as printed) and the 3D `sim-mu-surfaces`.
- **Data**: book values first. Water's triple and critical points and the ice and water densities may come from memory, named in the figure's notes and flagged unchecked. CO₂ and Mars are dropped from the phase-diagram Sim. Figure 23.4.1 uses only liquids whose curves the book's figure or text gives, read off the book's figure where needed.
- **Printed labels** (Tuckerman's Figures 13.4–13.7, the duplicated "Example 23.4.1") stay, with a footnote on the duplicate.
- **Captions** have no fixed length.
