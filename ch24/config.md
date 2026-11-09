# Config: Physical Chemistry (LibreTexts), Chapter 24

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 24 Solutions I - Volatile Solutes: landing page 11820, sections 24.1–24.9 (14503–14511) all built; no summary page; 24.E (14502) holds "TBA" and is not built |
| Stray and empty pages | 24.E a stub ("TBA"); 24.8 a stub of six displays, built as printed; no section is empty |
| Front matter | none: the landing page prints no text (only the site's list of sections), so there is no `intro/` page and `chapter.json` has no `intro` record (Chapters 4 and 22 precedent) |
| Summary page | none (the book prints no 24.S); nothing goes to `summary/` |
| Start point | 24.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; no objectives, no "## Summary" and no credits on any page (none printed, no author tag) |
| Headers | the book's `<h2>` kept with their `###`/`####`; the agent's for the untitled openings (proposed: 24.1 "Mixtures of Two Components", 24.2 "The Gibbs–Duhem Relation", 24.3 "The Partial Molar Gibbs Energy", 24.4 "Raoult's Law for Two Volatile Liquids", 24.5 "Two Limiting Laws", 24.6 "Henry's Law", 24.7 "Activity", 24.8 "Activity by Phase"); 24.9's leading `###` headers become blocks of their own and its bare "Gibbs free energy of regular solutions" a `###`; all through the humanizer by the builder |
| Boxed notes | 24.1's "Note" and "Note: Applicability of Raoult's Law", 24.3's and 24.5's untitled emphasis notes kept; 24.2's pull-quote (a repeat of the sentence above it) as an untitled emphasis note or dropped, the builder's call |
| Embeds | none; 24.9's "(see animation)" names an animation the book does not print (footnote, linked to `sim-gap-meets-dome` if built) |
| Printed labels | kept as printed: the two "Figure 24.1.1" (`fig-24-1-1` the coin, `fig-24-1-1-2` the P–x diagram, footnote on the second; *orchestrator*); the two "Example 24.6.1" (`ex-24-6-1`, `ex-24-6-1-2`, footnote on the second); 24.1's unnumbered "Exercise" (renamed from the draft's `e?`); "Figure 24.6.2; left/right" as printed, each linked to the figure meant |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (24.1.1)–(24.1.6), (24.2.1)–(24.2.3), (24.3.1)–(24.3.5), (24.6.1), (24.6.2); 24.4, 24.5, 24.7, 24.8, 24.9 number nothing |
| Repeated material | built once where the book first works it and cited after: Raoult's law, the P–x and T–x diagrams, the lever rule and distillation (24.1; 24.4 again); the Gibbs–Duhem equation (24.2; 24.6, 24.7, 24.9 use it); the gas-phase μ_j (24.3's (24.3.4); 24.6's (24.6.1)); Henry against Raoult (24.5; 24.6 again); the azeotrope (24.6; 24.9 again); μ = μ° + RT ln a (24.7; 24.9 again); from earlier chapters μ_i and dG with μ dn (22.5), μ(P) of a condensed phase and of an ideal gas (22.7; 24.3's derivations stay printed and cite them), (∂G/∂P)_T = V (22.4), fugacity and its coefficient (22.8), the entropy of mixing and mole fraction (20.6), the partial molar quantity (23.1), equal μ in two phases (23.3), the standard state (19.12) |
| Figures | as the table in `exploration.md`, all still and 2D, in priority order: `sim-pxy` replaces the second Figure 24.1.1 (tie-line and lever readout; pairs benzene–toluene (opening), 50/25 Torr, water–ethanol); `sim-txy-lever` restores 24.1's dead lever-rule image (T–x lens, lever arms, distillation stages slider); `sim-mixing-gibbs` in 24.9 (Δ_mix G/RT against x as RT/W changes, a Sim); `sim-azeotrope` replaces Figure 24.6.2 (both panels, interaction slider); `sim-henry-raoult` folds Figures 24.5.1 + 24.6.1; `sim-gap-meets-dome` replaces Figure 24.6.3 (pressure slider; lowest priority). Figure 24.4.1 replaced by a second instance of `sim-pxy` opening on water–ethanol (*orchestrator*; fallback: kept, caption corrected). Kept: the coin (24.1.1), 24.4.2, the second example's diagram |
| 3D | none required; `sim-pTx` offered below |
| Model data | the book's: 50 and 25 Torr (24.1), benzene 0.66 and toluene 0.24 bar read off the second Figure 24.1.1, water 384 and ethanol 945 Torr at 75 °C (24.4), the CO₂ example, oxygen's K_x,H 4.259 × 10⁴ atm (24.7); one regular-solution model (ln γ₁ = a x₂², a = W/RT, the book's 24.9) for every diagram; T–x diagrams from 23.4's integrated Clausius–Clapeyron equation with illustrative T_b and Δ_vap H (named as a model in each figure's notes, no literature claim); from memory and flagged in `LOG.md`: water and ethanol at 75 °C (≈ 289, ≈ 666 Torr), the water–ethanol azeotrope, ε = 78.54 for water, the Debye–Hückel sign and |z₊z₋| |
| Extra simulations | one offered, not recommended for the time: `sim-pTx` (24.1, mathematical 3D, the bubble and dew surfaces over x and T whose slices are the two diagrams) |
| Derivations | thirteen proposed (table in `exploration.md`): 24.1's G = μ₁n₁ + μ₂n₂ by scaling, the liquid line, the vapor line (hidden, score 6), the lever rule; 24.2's Gibbs–Duhem, its binary form, Raoult for both components (dχ and sign corrected); 24.3's μ of a component in solution (score 4); 24.4's ideal Δ_mix G and Δ_mix H (μ line corrected) and additive volumes; 24.6's Raoult-means-Henry; 24.7's ionic split (low priority); 24.9's second activity of a regular solution (hidden, score 9, lines inserted) and the regular Δ_mix G. Stay printed: 24.3's μ(P) (22.7's), the 2-move passages, the CO₂ example; not built: 24.7's ln γ_2,m integral (score ≈ 9, needs a molal form the book never states; *orchestrator*) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 24.1's "25 and 50 Torr" against the plotted figure and the duplicate figure label; 24.2's dropped dχ_B and sign; 24.3's dH and dA rows of Table 24.3.1; 24.4's nRTx_i ln x_i; 24.6's Henry's law P_B = k_H P_B^o, the example's k_H (1.67 × 10⁸ Pa, not 10⁹), the δx₂³ term, the figure references; 24.7's Debye–Hückel sign and |z₊z₋|, the cut-off sentence, 1/(x + y), ln a₁ ≈ −x₂; 24.9's μ°₂, "example 24-7", "(see animation)"; captions corrected without a marker: Figure 24.4.1's axis, Figure 24.6.2's "(right) Ta maximum"; 24.4's 384 and 945 Torr at 75 °C and "ideal" water–ethanol footnoted only after checking |
| Colour | no new type; pressure (P, P_i, P*, P°, K_H), energy (G, μ, Δ_mix G, Δ_mix H, W, U_ij), amount, molar-volume (V̄_i), volume, entropy (S, Δ_mix S), temperature reused; mole fractions, activities, activity, osmotic and fugacity coefficients, f_Mar, a, I, charge numbers, molality and ε in ink; facts: none; conventions: none; referents: none proposed (the builder may make the liquid and the vapor referents shared by the phase-diagram Sims if the page reads better) |
| Symbols | 69 new (all with macros), 172 variables rows (see `chapter.json`); 49 concepts, 78 edges (Hasse-checked against the merged book: 2 redundant removed before the merge), 51 forms |
| Licence | every page CC BY-NC-SA 4.0; the coin photograph under its own CC BY-SA 3.0 with its credit; the uncredited images under the page's licence; the dead lever-rule image not shipped |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: **1 printed** (24.1, unnumbered); **0 keyed**; **1 unkeyed**, available with an AI
  solution: compute (P_total = 40 Torr by (24.1.4), y₁ = 0.75 by (24.1.5); *checked by computation*).
- **Worked examples**: 2 (24.6's two "Example 24.6.1"), both with a Solution, kept whole (not exercises).
- **24.E**: **0 printed** ("TBA").
- **Placement**: the exercise stays in 24.1, kind `exercise`, `source_number` "Exercise", `place: end`.
- **In all**: 1 card, 0 keyed, 1 unkeyed (1 compute).
- **Proposed new: 9**: 24.2 one (binary Gibbs–Duhem, dμ_A = −28 J/mol), 24.3 one (μ_j^sln − μ*_j =
  −2.27 kJ/mol), 24.4 two (equimolar Δ_mix G = −1.72 kJ, Δ_mix S = +5.76 J/K; water–ethanol at the book's
  384/945 Torr: P = 664.5 Torr, y = 0.711), 24.5 one (oxygen in water from K_x,H: x = 4.93 × 10⁻⁶), 24.6 one
  (why an azeotrope stops distillation; explain), 24.7 one (MgCl₂: I = 0.030, γ± = 0.666), 24.8 one
  (activities by phase), 24.9 one (two minima above a = 2; consolute T = W/2R = 300.7 K for W = 5.0 kJ/mol;
  prove and compute); 24.1 none (subjects and computed answers in `exploration.md`).

**The choice** (carried over from Chapter 1): the 1 unkeyed exercise kept with an *AI solution*;
*AI exercises* for the 9 proposed. Every exercise is an item of the Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in `exploration.md`
(marked *orchestrator*).

## Decisions taken by the orchestrator (2026-11-09)

- **No intro page** (the landing page has no text). 24.E ("TBA") routes nothing.
- **The two "Figure 24.1.1"s**: the coin photo keeps the number. The benzene–toluene `sim-pxy` is unnumbered (eyebrow "Sim", today's rule 14), with a footnote on the duplicate; citations link by hand.
- **Figure 24.4.1** is kept as printed, with its caption corrected (a second `sim-pxy` isn't built, for time).
- **Sims to build** (time is short): `sim-pxy`, `sim-txy-lever`, `sim-mixing-gibbs`, `sim-azeotrope`, `sim-henry-raoult`. Not built: `sim-gap-meets-dome` and `sim-pTx`.
- **24.7's ln γ₂,m integral**: not built.
- **Molality** stays untyped.
- **Memory-based points** stay flagged in `LOG.md`. Only the water–ethanol azeotrope (a standard fact) gets a footnote; the 75 °C vapour pressures get no footnote, since they can't be checked here.
- **Captions** have no fixed length.
