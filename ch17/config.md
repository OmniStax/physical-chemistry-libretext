# Config: Physical Chemistry (LibreTexts), Chapter 17

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 17 Boltzmann Factor and Partition Functions: landing page 11813, sections 17.1–17.8 (2405, 13680, 13682–13685, 13689, 57665) all built; summary 17.S (550571); 17.E (13678) is empty and not built |
| Stray and empty pages | none: every section holds its own text |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (21.1), one block with a header of the agent's; no lead, objectives, exercises or concepts; the page has no thumbnail |
| Summary page | 17.S is the chapter's `summary/` page (21.2): its two paragraphs, then its "Learning Objectives" box (with "Skill goals") kept verbatim as a block (12.S–16.S precedent); one footnote naming what no page of the chapter teaches (equal *a priori* probabilities, Bose–Einstein and Fermi–Dirac statistics, entropy from Q, diatomic models for populations, temperatures and number densities from spectra) |
| Start point | 17.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; no section has objectives or a "## Summary"; the uncited References of 17.1 and 17.2 go to `notes`; 17.2's video link kept in its sentence (a link, not an embed); credits: 17.1 Tuckerman; 17.2, 17.3, 17.4, 17.6, 17.8 LaRue; 17.5 LaRue, Tuckerman, Franzen; 17.7 Larsen, LaRue; the summary Crabtree; the intro the book's |
| Headers | the book's `<h2>` kept; 17.1's h3 "The Microscopic Laws of Motion" promoted to its first block's header; the agent's for the intro, 17.2's, 17.4's and 17.5's openings (17.5's in two blocks), and 17.3, 17.6, 17.7 and 17.8 (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | 17.2's "Boltzmann Distribution" and 17.7's "Note" kept as titled notes; 17.3's two untitled emphasis notes kept; 17.2's blockquote kept as the book's quotation |
| Embeds | none |
| Printed labels | kept as printed: 17.2's Problem 4 "equation (17.9)" (footnote), 17.4's "(Dulong-Petit Law)" tag; 17.1's "Equation 17.1" resolves to (17.1.5) |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (17.1.1)–(17.1.5), (17.2.1)–(17.2.4), (17.3.1)–(17.3.4), (17.4.1)–(17.4.6), (17.5.1)–(17.5.8), (17.7.1)–(17.7.4), (17.8.1)–(17.8.4); 17.6 numbers nothing; 17.4's four-row `align` (17.4.3) and 17.5's (17.5.5) one number each |
| Repeated material | built once where the book first works it and cited after: β = 1/kT (17.1); Q = q^N (stated 17.2, derived 17.6); Q = q^N/N! (stated 17.2, explained 17.7); ⟨E⟩ from ln Q (17.3); the pressure from ln Q (17.5's sums; Tuckerman's (17.5.5) stays printed and cites it); P = NkT/V (17.5's first derivation; (17.5.8) cites it; 16.1's law linked); (3/2)NkT (17.1, derived for the ideal gas in 17.5); from earlier chapters the 3D box (3.9), expectation values (3.7), oscillator levels and frequency (5.1, 5.2), degrees of freedom (12.10), the Boltzmann distribution (13.2), indistinguishability (8.5), pressure and the ideal gas law (16.1) |
| Figures | as the table in `exploration.md`: three ladders switching on with T, q counted (17.2.1 + 17.2.2 folded, still); the Einstein solid, a ladder beside C_V/3Nk with five metals' points (17.4.2 + 17.4.3 + 17.4.4 folded, still); a piston raising a box's levels (17.5.1, still, drag); two particles losing their colour and a state (17.7.1 + 17.7.2 folded, still, a morph); kept: the spring lattice (17.4.1), lead's data plot (17.4.5) |
| 3D | none |
| Model data | the book's: 17.2.1's spacings (0.012, 12, 120 kJ/mol) and k_BT at 300 K, 17.4.2's three panels (read as T/Θ_E = 0.125, 0.5, 1.25 on 17.4.3's axis), 17.4.4's measured points for Pb, Ag, Zn, Cu, Al read off the image (the figure named as their source), 17.7's levels 0 and ε; no literature values in any figure |
| Extra simulations | four offered, all recommended: `sim-boltzmann-factor` (17.1), `sim-quanta-exchange` (17.2, moving), `sim-average-energy` (17.3), `sim-schottky` (17.4) |
| Derivations | built: the Boltzmann distribution (17.2, printed); the average energy from Q (17.3, printed); C_V from Q (17.4, printed); the Einstein heat capacity and its limits (17.4, hidden, score 12); the pressure from Q (17.5, printed); the ideal gas law from Q (17.5, printed); the energy of an ideal gas (17.5, mostly hidden, score 6); Q = q^N for distinguishable molecules (17.6, printed); the average energy of independent molecules (17.8, printed); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 17.2's Stirling and Lagrange slips and (17.2.4), 17.3's "constant pressure", 17.4's ½kT per atom, the Einstein display and Figures 17.4.2–17.4.4's axes and captions, 17.5's "temperature" for pressure and the sign in ln Q, 17.6's indices, 17.7's "large N", 17.8's π_i and t, 17.1's 128 bytes; those resting on memory are checked by the builder first |
| Colour | two new types, `heat-capacity` and `partition-function` (colours dealt by `colours:default`, every existing colour kept); energy, temperature, pressure, volume, force, mass, velocity, length, time, momentum, amount, force-constant reused; probabilities, W, a_j, β, k, k_B, R, N and the counts untyped and in ink; conventions: `F.el` for the five metals of 17.4.4 in the Einstein figure; facts: the red and blue particles of 17.7 in real red and blue (chapter pass; first planned as referents) |
| Symbols | 45 new (34 with macros), 131 variables rows (see `chapter.json`); 58 concepts, 88 edges, 56 forms; keys of earlier chapters reused where the quantity is the same or the meaning is new in another chapter |
| Licence | 17.1, 17.2, 17.3, 17.6, 17.7, 17.8 tagged CC BY, shared BY-NC-SA with the rest; 17.2.1 and 17.2.2 (CC BY-SA 3.0), 17.4.2 and 17.4.3 (CC BY-NC 4.0), 17.4.1 and 17.7.1–2 under their own licences with credit; the summary untagged (the book's) |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: none printed.
- **Worked examples**: none.
- **Problems** (17.1, 17.2): **10 printed**; **0 keyed**; **10 unkeyed**, available with AI
  solutions: 6 explain or describe (17.1's 1–5, 17.2's 5), 2 prove (17.2's 1 and 4),
  2 compute (17.2's 2 and 3).
- **Placement**: 17.1's 1–4 stay in 17.1; 17.1's 5 ("separate arrangements") is held for 17.2,
  which introduces them; 17.2's five stay in 17.2. So 17.1 holds 4 cards and 17.2 holds 6,
  kind `question` (12.14 precedent).
- **17.E**: empty; nothing routed.
- **In all**: 10 cards, 0 keyed, 10 unkeyed.
- **Proposed new: 12**: 17.1 one, 17.2 one, 17.3 one, 17.4 two, 17.5 two, 17.6 one, 17.7 two,
  17.8 two (subjects and checked answers in `exploration.md`).

**The choice** (carried over from Chapter 1): the 10 unkeyed problems kept with *AI solutions*;
*AI exercises* for the 12 proposed. Every exercise is an item of the Exercises document
(`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked *orchestrator*).

## Decisions taken by the orchestrator (2026-11-08)

- **`partition-function` type**: kept and coloured. Chapter 16's Z is the compression factor, a different quantity.
- **Q = q^N and Q = q^N/N!** are introduced in 17.2, where the book first states them (rule 6), and derived in 17.6 and 17.7.
- **Boltzmann concepts**: Chapter 17's pass adds an edge `boltzmann-distribution` (13) → `boltzmann-probability` (17), owned by Chapter 17's rows.
- **"Problems"** are kind `exercise` (`source_number` "Problem N"), since several compute or prove; `question` stays for conceptual questions.
- **Problem 4's "equation (17.9)"**: the builder confirms the reading against the page before solving.
- **Einstein figure detents** at T/Θ_E = 0.125, 0.5 and 1.25, the book's three panels.
- **Extra simulations**: `sim-quanta-exchange` (17.2, moving) and `sim-schottky` (17.4). Not `sim-boltzmann-factor` or `sim-average-energy`.
- **Chapter 18** reuses `translational-partition-function` and the symbol keys `q_trans`, `q_rot`, `q_vib`, `q_elec`, so it must not re-stage them.
- **Figure 17.4.1's licence** (OpenStax, flagged unchecked): shipped with OpenStax's credit, under the licence the page prints.
- **Captions** have no fixed length.
