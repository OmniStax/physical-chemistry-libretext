# Config: Physical Chemistry (LibreTexts), Chapter 21

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 21 Entropy and the Third Law of Thermodynamics: landing page 11817, sections 21.1–21.9 (14476, 14477, 14479, 14481–14486) all built; no summary page; 21.E (14475) holds one problem, routed to 21.1, and is not built |
| Stray and empty pages | 21.6 ends mid-argument on the site (its conclusion is supplied by a derivation, below); no page is empty |
| Front matter | none: the landing page prints no text (only the site's generated list of sections), so there is no `intro/` page and `chapter.json` has no `intro` record (Chapter 4's precedent, root rule 21) |
| Summary page | none (the book prints no 21.S); nothing goes to `summary/` |
| Start point | 21.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; 21.1's and 21.2's one-item objectives to `objectives`; 21.2's "## Summary" to `summary_html`; 21.7's and 21.9's References, cited in their tables, kept as each page's closing block (16.5 precedent); credits: none printed on any page and no author tag (the book's) |
| Headers | the book's `<h2>` kept (21.1's "Entropy versus temperature" and its `###`); the agent's for the headerless 21.2–21.9 (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | 21.2's "Definition: Third law of thermodynamics" (carrying (21.2.1)) and "Residual Entropy in Carbon Monoxide" kept as titled notes; 21.2's pull-quote as an untitled emphasis note (13.12 precedent) |
| Embeds | none |
| Printed labels | kept as printed: 21.2's "Figure 21.2.3a"; 21.5's links to "section 21.1" and "section 21.3" as in-book `xref`s; Example 21.1.1, printed without a solution, is a question (Chapter 3's decision) |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (21.2.1), (21.4.1)–(21.4.2), (21.5.1)–(21.5.3); 21.1, 21.3, 21.6–21.9 number nothing |
| Repeated material | built once where the book first works it and cited after: ΔS = ∫C_P/T dT (21.1; (21.5.1)); Δ_trs S = Δ_trs H/T_trs (21.2 for fusion, derived 21.3; (21.5.2)); the S(T) staircase (sketched 21.2.1, worked 21.5); residual entropy (21.2; 21.8); entropy rising with mass (21.2; 21.7); from earlier chapters C_V and U (17.4), the Einstein solid and Dulong–Petit (17.4, 18.9), W and Q (17.2), ⟨E⟩ from Q (17.3), the particle in a box (3.5), degeneracy (3.9); from Chapters 19–20 (prepared beside this one) the first law, H, C_P, δq_rev = TdS, S = k ln W (20.5) and S = U/T + k ln Q (20.8) |
| Figures | as the table in `exploration.md`: Figure 21.5.1 replaced by `sim-calorimetric-entropy` (still; C_P/T area and S(T) with the sublimation jump, T slider, CO₂ from the book's own curve); kept: 21.2.1 (schematic, linked forward to 21.5.1), 21.2.2 (sulfur), 21.2.3 (microstates, CC BY-SA 4.0 with credit) |
| 3D | none |
| Model data | the book's: Figure 21.5.1's CO₂ curve read off the image, the CO note's 5.7 and 4.4 J/(mol K), Example 21.2.1's 1.09 J/(mol K) at 368.5 K, 21.7's and 21.9's tables; the Debye and Einstein functions need no material data |
| Extra simulations | two offered: `sim-debye-einstein` (21.4, recommended), `sim-residual-entropy` (21.2, offered) |
| Derivations | built: the fundamental equation for U (21.1, printed); the entropy change at constant volume (21.1, printed); the entropy change at constant pressure (21.1, printed, one line inserted); the entropy of a phase transition (21.3, printed); the entropy near absolute zero (21.6, printed then hidden, score 7); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 21.1's dH at constant P, 21.2's S(T) integrand and units, 21.3's "crystalline solid", 21.6's E_m, 21.7's CH₄ against CO₂ and Kr's mass, 21.8's third-law sentence, 21.9's 213.70; CO's 4.4 J/(mol K) and O₂ against N₂ rest on memory and are checked by the builder first |
| Colour | no new type staged (entropy waits on Chapter 20's `entropy`); temperature, heat-capacity, pressure, volume, energy (H and G, as Chapters 19 and 22 type them), heat, work, mass, partition-function reused; S (`S_ent`), Δ_trs S, Δ_fus S, S° and the other entropies in ink until that type merges; facts: none; conventions: `F.el` for C and O in `sim-residual-entropy`; referents: none |
| Symbols | 19 new (3 with macros), 70 variables rows (see `chapter.json`); 29 concepts, 39 edges, 21 forms; Chapter 19, 20 and 22 symbols (S_ent, S_bar, H, G, G_bar, C_P, q_rev, w_rev, q_P, T_1, T_2) used as variables keys but not staged; Delta_fus_H and Delta_fus_S not yet staged by anyone |
| Licence | every page CC BY-NC-SA 4.0; 21.2.3 (CC BY-SA 4.0, BlyumJ via Wikipedia) under its own licence with credit; the uncredited images under the page's licence |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: **1 printed** (21.2.1); **0 keyed**; **1 unkeyed**, available with an AI
  solution: compute with a sketch (W = 3 orientations, and a molecule drawn that fits its site three
  ways).
- **Example boxes without a solution**: **1 printed** (Example 21.1.1); **0 keyed**; **1 unkeyed**,
  available with an AI solution: prove (the five steps to dS and (∂S/∂T)_V = C_V/T).
- **21.E**: **1 printed** (Problem 1); **0 keyed**; **1 unkeyed**, available with an AI solution:
  compute (ΔS = −131.8 J/K); routed to 21.1.
- **Worked examples**: 2 (21.2.1, 21.5.1), kept whole (not exercises).
- **Placement**: 21.2.1 stays in 21.2; Example 21.1.1 and Problem 1 go to 21.1. Kind `exercise` for
  all three; `source_number` "Exercise 21.2.1", "Example 21.1.1", "Problem 1".
- **In all**: 3 cards, 0 keyed, 3 unkeyed (1 compute, 1 compute with a sketch, 1 prove).
- **Proposed new: 7**: 21.3 one, 21.4 one, 21.5 one, 21.6 one, 21.7 one, 21.8 one, 21.9 one
  (subjects and computed answers in `exploration.md`).

**The choice** (carried over from Chapter 1): the 3 unkeyed exercises kept with *AI solutions*;
*AI exercises* for the 7 proposed. Every exercise is an item of the Exercises document
(`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in `exploration.md`
(marked *orchestrator*).

## Decisions taken by the orchestrator (2026-11-09)

- **No intro page** (the landing page has no text; Chapter 4 precedent). Problem 1 of 21.E goes to 21.1.
- **Entropy type**: Chapter 21 stays untyped until Chapter 20 merges its `entropy` type; Chapter 21's pass sets it. H and G are typed `energy`, q `heat` and w `work`, as in Chapters 19 and 22.
- **dS = C/T dT**: owned by Chapter 20, where the book first works it (rule 6); 21.1 reinforces it.
- **`sim-calorimetric-entropy`**: data digitized from the book's own CO₂ curve.
- **Extra simulations**: `sim-debye-einstein` (21.4) only.
- **Pending edges** into Chapters 19, 20 and 22: left to Chapter 21's pass.
- **21.6** ends mid-argument at the source; a footnote says the book never prints its conclusion.
- **Captions** have no fixed length.

## Decisions taken in the chapter pass (2026-11-09)

- **Entropy typed** with Chapter 20's `entropy`: the S_ent rows of 21.1–21.6 name `entropy`, 21.3's S̄ is typed
  `entropy`, and the chapter's entropy concepts (absolute, standard molar, residual, of fusion, of transition,
  at constant V and P, calorimetric, spectroscopic, of reaction, near 0 K) carry the type. S°, S°_i, S°_exp,
  S°_calc, S̄_calc, S̄_exp, S_disorder, Δ_trs S and Δ_rxn S° have macros (`\kSstd`, `\kSstdi`, `\kSstdexp`,
  `\kSstdcalc`, `\kSbarcalc`, `\kSbarexp`, `\kSdisorder`, `\kDeltatrsS`, `\kDeltarxnS`); the plain S of the
  text, captions, exercises, footnotes and derivations is `\kSent`, the book's ΔS_trs and ΔS_sub as
  `\Delta \kSent_{trs}` (Chapter 23's form). 21.5's S(T) curve is drawn in the entropy colour.
- **Problem 1 of 21.E** is 21.1's `e2`, `source_section: "21.E"`, which the checker now reads from
  `exercises/source.md`.
