# Config: Physical Chemistry (LibreTexts), Chapter 20

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 20 Entropy and The Second Law of Thermodynamics: landing page 11816, sections 20.1–20.9 (13714, 13715, 13717–13723) all built; no summary page; 20.E (13713) is empty and not built |
| Stray and empty pages | none: every section holds its own text |
| Front matter | none: the landing page prints no text, so there is no `intro/` page and `chapter.json` has no `intro` record (Chapter 4's precedent, root rule 21); `ch20/intro/source.md` stays as the converter's record |
| Summary page | none (the book prints no 20.S); nothing goes to `summary/` |
| Start point | 20.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim, including 20.1's first-person Chem 431 voice and its forward references to "the new state function entropy"; no section has objectives or a "## Summary"; credits: 20.5 Fleming and LaRue (its list); 20.6, 20.7, 20.8 the author tag `LaRue` only (no list printed); 20.1–20.4 and 20.9 none printed (the book's) |
| Headers | the book's `<h2>` kept (20.1's "### Permutations" stays a sub-header); the agent's for the openings of 20.1, 20.6, 20.7 and the headerless 20.2, 20.5, 20.8, 20.9, and the split of 20.3 (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | kept as titled notes: 20.1 "Causality vs. Correlation" (with its stork photograph and its own Answer, which is not an exercise), 20.4's and 20.6's two emphasis boxes, 20.7 "Sadi Carnot" (with Figure 20.7.2) |
| Embeds | none (20.7.2 is an animated GIF, not an embed) |
| Printed labels | kept as printed: 20.3's "Section 19-6" (linked to 19.6) and "Equation 19.21" (its own (20.3.1)) |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (20.3.1), (20.5.1), (20.6.1)–(20.6.5), (20.7.1)–(20.7.3), (20.8.1)–(20.8.4), (20.9.1)–(20.9.3); 20.1, 20.2, 20.4 number nothing |
| Repeated material | built once where the book first works it and cited after: S = k ln W (20.1; 20.5, 20.8, 20.9); W and Stirling (17.2; 20.1, 20.8, 20.9); S = −kΣp_j ln p_j (derived 20.8; 20.9's repeat stays printed, linked); ΔS = nR ln(V₂/V₁) (20.3; 20.6); the expansion into a vacuum (20.1's figure; 20.6 links it); p_j (17.2; 20.8); from Chapter 19 the first law, δw_rev = −PdV, dU = C_vdT, q_rev of an isotherm, the adiabat relation |
| Figures | as the table in `exploration.md`: the free expansion with W counted (20.1, moving, replaces the gas/vacuum image); W of the same ⟨E⟩ as the levels crowd (20.1, still, replaces the levels image); two paths, one ΔS (20.3.1, still); two blocks trading heat with S(t) (20.4's two images folded, moving); the mixing entropy against χ_A (20.6's two-gases image, still); the Carnot cycle on PV and TS with the energy-flow arrows (20.7.1 + 20.7.3 folded, moving, engine / heat pump); kept: the stork, 20.5.1, 20.6's piston sketch, 20.7.2, 20.7.4 |
| 3D | none |
| Model data | the book's: Figure 20.7.1's and 20.7.4's corner volumes and pressures (γ = 5/3, T_c/T_h = 0.70 and 0.50), the geyser's 400 K and 300 K, 20.4's identical aluminium blocks, the heat pump's 100 J and 300 J; no literature values |
| Extra simulations | one offered, not recommended: `sim-two-level-entropy` (20.8) |
| Derivations | built: entropy as an exact differential (20.2, printed); the adiabat-and-isochore entropy change (20.3, hidden, score 6); entropy produced as two blocks reach one temperature (20.4, printed + hidden, score 8, result corrected); the entropy of mixing (20.6, printed); the Carnot efficiency by two routes (20.7, printed, one line inserted); entropy from probabilities and from Q (20.8, printed, sign corrected); the thermodynamic entropy from the statistical one (20.9, hidden, score 7); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 20.1's n₂², 20.2's ∂q/dT, 20.4's (T_A + T_B)² and "q a state function", 20.5's W = 2^N, 20.6's Hawking, 20.7's 25%, the Stirling steps 2 and 4 and C_VΔT, 20.8's sign, 20.9's systems; every one checked by computation or by the page itself, none from memory |
| Colour | new type `entropy` (J/K); `heat` and `work` are Chapter 19's (merged before this chapter), reused; reused energy, temperature, volume, pressure, amount, mass, length, heat-capacity, partition-function; untyped and in ink: W and its kin, p_j, η, mole fractions χ, A, a_j, quantum numbers, k, R; facts: none; conventions: none; referents: none |
| Symbols | see `book-rows.json` and `chapter.json`: 56 new (50 with macros), 163 variables rows; 39 concepts, 72 edges, 25 forms; entropy is `S_ent` (`\kSent`) since `S` is 8.8's spin; H is Chapter 19's `H` (`\kHenth`, rows linked to `enthalpy`) |
| Licence | every page CC BY-NC-SA 4.0; 20.7.1 and 20.7.4 CC BY 4.0 (LaRue), 20.7.2 CC BY-SA 2.5 (Emoscopes), 20.7.3 public domain (Eric Gaba), 20.3.1 CC BY-NC (Ümit Kaya), the stork photograph credited to Frank Vassen as printed; the uncredited images under the page's licence |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: **0 printed**.
- **Problem lists**: **0 printed**.
- **Worked examples**: 1 (20.5.1), kept with its solution (not an exercise).
- **20.E**: empty; nothing routed.
- **In all**: 0 cards; 0 keyed; 0 unkeyed.
- **Proposed new: 9**, one per section, since no concept of the chapter has a printed exercise:
  20.1 one (W and ln W for 10 molecules in two halves; Stirling against ln 10!), 20.2 one (q_rev on
  two paths, same ΔS), 20.3 one (ΔS along A and along B + C), 20.4 one (two blocks, 400 K and 300 K),
  20.5 one (four orientations, W = 4^N), 20.6 one (mixing N₂ and O₂), 20.7 one (Carnot engine and
  heat pump between 500 K and 300 K), 20.8 one (two-level S = U/T + k ln Q), 20.9 one (explain:
  populations against levels). Subjects and computed answers in `exploration.md`.

**The choice** (carried over from Chapter 1): *AI exercises* for the 9 proposed. Every exercise is
an item of the Exercises document (`place: end`), kind `exercise`.

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in `exploration.md`
(marked *orchestrator*).

## Decisions taken by the orchestrator (2026-11-09)

- **No intro page** (the landing page has no text).
- **20.4's two unnumbered images** fold into `sim-two-blocks`, which reads "Sim" under today's rule 14 (unnumbered).
- **20.7.3** folds into 20.7.1 as "Figure 20.7.1 + 20.7.3"; the Carnot Sim's energy-flow arrows carry it.
- **20.1's stork note** is kept verbatim (book's words).
- **Stork photo**: dropped unless the builder can confirm a free licence from the page itself. `notes` names the credit.
- **Extra simulations**: none.
- **Captions** have no fixed length.
