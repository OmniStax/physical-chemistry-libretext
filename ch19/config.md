# Config: Physical Chemistry (LibreTexts), Chapter 19

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 19 The First Law of Thermodynamics: landing page 11815, sections 19.1–19.14 (47709, 13700–13711, 359804) all built; no summary page; 19.E (13712) holds a stray Chapter 4 passage and Exercise 19.E.1, not built |
| Stray and empty pages | 19.E: its passage is Chapter 4's uncertainty principle (not built); its one exercise is already 1.9's card `e3` (not routed again) |
| Front matter | none: the landing page prints only the credit of a thumbnail it does not show, so there is no `intro/` page and `chapter.json` has no `intro` record (Chapter 4's precedent; the credit is left out with the thumbnail) |
| Summary page | none (the book prints no 19.S); nothing goes to `summary/` |
| Start point | 19.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; no objectives, no "## Summary", no Contributors list on any page; credits: 19.1 the author tag `flemingp` (Patrick Fleming); the others print none (the book's); 19.5's etymology quote and 19.9–19.11's quotes kept as quotes |
| Headers | the book's `<h2>` kept; the agent's for the openings of 19.1, 19.2, 19.12 and the headerless 19.6, 19.10, 19.13, 19.14 (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | kept as titled notes: 19.1's "What is a partial derivative?", 19.2's "Sign Conventions", 19.3's two, 19.4's two (one untitled), 19.10's two, 19.12's "Definition: the Standard State" |
| Missing displays | the eleven CH431 equation images of 19.5–19.8 are dead at the source; treatment is the orchestrator's (options in `exploration.md`; proposed: restored as AI-marked derivation lines in 19.5–19.7, a footnote in 19.8) |
| Embeds | none |
| Printed labels | kept as printed: 19.1's "Table 3.1.1"; 19.6's "Eq 19.23" (footnote); 19.7's "section 17-5" (`xref` to 17.5); 19.10's "(Figure 19.10.1)"; Example 19.13.1's second "Equation 19.13.1" (means (19.13.3), footnote) |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (19.1.1)–(19.1.4), (19.2.1)–(19.2.2), (19.12.1)–(19.12.2), (19.13.1)–(19.13.5); the other pages number nothing |
| Repeated material | built once where the book first works it and cited after: the first law (19.1; 19.4); ΔU = U_f − U_i (19.1; 19.4); work against a constant P_ext (19.2's (19.2.2); Example 19.1.2 before it, 19.3 after); reversible isothermal work (19.3; 19.5); R = C̄_P − C̄_V (19.6; 19.8); H ≡ U + PV (19.8; 19.14's derivation links it); C_P = (∂H/∂T)_P (19.9; 19.10); "no absolute enthalpies" (19.9; 19.10); Hess's law (19.11; 19.12); from earlier chapters the ideal gas law, isotherm, isochore (16.1), U = (3/2)nRT (17.1, 18.1), U and C_V (17.4), P from Q (17.5), C̄_V (18.4), specific heat (18.9), ionization energy (7.1), dissociation energy (5.3) |
| Figures | as the table in `exploration.md`: 19.1.1 kept (two photographs); the p(V, T) surface with the note's two routes (3D mathematical, still); 19.2.1 + 19.2.2 + 19.2.3 folded (piston and PV rectangle, still); 19.3's six images folded (steps toward the reversible path, moving); 19.5's paths A, B + C with heat and work bars (still; 19.6 cites it); Figure 19.10.1 folding the DSC image (H(T) and C_p(T) with broadening, still); the ethanol scheme kept |
| 3D | one: `sim-pressure-surface` (mathematical, orbit bounded above the V–T floor) |
| Model data | the book's: 19.3's pistons, 19.1's two routes, 19.11–19.12's enthalpies, Table 19.13.1; literature only in Figure 19.10.1 (ice's C_p ≈ 38 J mol⁻¹ K⁻¹, Δ_fus H = 6.01 kJ/mol), from memory, source named in the caption and flagged in `LOG.md` |
| Extra simulations | `sim-heat-and-work-levels` (19.7, recommended); `sim-enthalpy-ladder` (19.12, offered, not recommended) |
| Derivations | built: the total differential of the pressure (19.1, printed); pressure-volume work (19.2, printed); the reversible isothermal work (19.3, printed); the reversible isothermal heat (19.5, printed); w_B = −q_C (19.5, printed); T and V along a reversible adiabat (19.6, printed); ΔH = q_P (19.8, printed); ΔH from the empirical C_p (19.13, printed); enthalpy from q_P (19.14, printed); heat and work on the molecular scale (19.7, lost at the source, score 8) only under the restoration option; the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 19.1's sign of w, the two-route integrals and Example 19.1.2's −1.13 kJ; 19.3's "by the system" and its equal-work claim; 19.5's w_A sign; 19.8's C_V; 19.12's Example 19.12.1 and the unbalanced ethanol count (−1255 kJ/mol balanced); 19.13's limits, Example 19.13.1's 2143.6 J/mol and Example 19.13.2's per-mole mix; all checked by computation |
| Colour | two new types, `heat` and `work` (merged, `colours:default` run: heat `#740549/#FEAAD0`, work `#654D09/#DDAB0A`, no existing type moved); U, H and the reaction enthalpies `energy`; C's `heat-capacity`; P, P_ext `pressure`; V `volume`, 19.1's V `molar-volume`; n `amount`; γ, ν, a, b, c, counts untyped and in ink; facts: none; conventions: none (no atom drawn); referents: path A, B, C in 19.5's figure if the builder draws them as referents (`path-a`, `path-b`, `path-c`) |
| Symbols | 35 new (30 with macros), 119 variables rows (see `chapter.json`); 58 concepts, 103 edges, 43 forms; `q` (heat) reuses the existing key, `P_1`, `P_2` reuse Chapter 22's |
| Licence | 19.2 CC BY 4.0 (its three figures with it); 19.14 untagged (the book's CC BY-NC-SA 4.0); the rest CC BY-NC-SA 4.0; 19.1.1 CC BY-SA 3.0 with its credit |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: **0 printed**.
- **Problem lists**: none.
- **Worked examples**: 5 (19.1.1, 19.1.2, 19.12.1, 19.13.1, 19.13.2), kept with their solutions
  (not exercises).
- **19.E**: **1 printed** (19.E.1), unkeyed; **not routed**: it is 1.9's card `e3` already.
- **In all**: 0 cards from the book; 0 keyed, 0 unkeyed.
- **Proposed new: 15**: 19.1 one, 19.2 one, 19.3 two, 19.4 one, 19.5 one, 19.6 one, 19.7 one,
  19.8 one, 19.9 one, 19.10 one, 19.11 one, 19.12 two, 19.13 one, 19.14 one (10 compute, 4
  explain, 1 prove; subjects and computed answers in `exploration.md`).

**The choice** (carried over from Chapter 1): *AI exercises* for the 15 proposed. Every exercise
is an item of the Exercises document (`place: end`), kind `exercise`.

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked *orchestrator*).

## Decisions taken by the orchestrator (2026-11-09)

- **No intro page**: the landing page holds only a thumbnail credit (Chapter 4 precedent).
- **The 11 lost equation images** (NCSU CH431_Image61–71, 404 at the source): restored as AI-marked lines. In derivations they are node lines with a note; in the text, a correction footnote says the book's equation image is missing and the line shown is reconstructed. All are flagged unchecked in `LOG.md`. 19.7's derivation is built on the restored lines.
- **Figure 19.10.1's values** (ice C_p ≈ 38 J mol⁻¹ K⁻¹, Δ_fus H = 6.01 kJ/mol): allowed, named in the figure's notes and flagged unchecked.
- **Types**: `heat` and `work` stay; enthalpy is `energy`. Palette pressure (38 types against 36 colours) goes to the final colour pass.
- **Extra simulations**: 19.7's heat-moves-populations, work-moves-levels Sim only.
- **Captions** have no fixed length.
