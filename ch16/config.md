# Config: Physical Chemistry (LibreTexts), Chapter 16

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 16 The Properties of Gases: landing page 11811, sections 16.1–16.7 (13656–13662) all built; summary 16.S (550570); 16.E (13655) is empty and not built |
| Stray and empty pages | none: every section holds its own text |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (21.1), one block with a header of the agent's; no lead, objectives, exercises or concepts; the thumbnail credit is left out with the thumbnail (Chapter 3's precedent) |
| Summary page | 16.S is the chapter's `summary/` page (21.2): its two paragraphs, its "Figure 7.1" kept as printed, then its "Learning Objectives" box (with "Skill goals") kept verbatim as a block (12.S–15.S precedent); one footnote naming what no page of the chapter teaches (quantum properties to bulk, dipole moments, polarizabilities and ionization energies behind the attraction, C₆ from molecular parameters, the square-well potential, phase diagrams) |
| Start point | 16.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; no section has objectives or a "## Summary"; 16.6's uncited "References" go to `notes`; 16.5's references, cited in its text, kept as its closing block with "Related reading" (9.14, 14.7, 15.7 precedent); 16.2's table footnote (Weast) kept under the table; credits: 16.1 Tuckerman, LaRue; 16.2 Tuckerman, Adewumi, LaRue; 16.3 LaRue, Adewumi; 16.4 Larsen, LaRue, Franzen; 16.5 SklogWiki, Franzen; 16.6 and 16.7 the book's; the summary Crabtree |
| Headers | the book's `<h2>`/`<h3>` kept; the agent's for the intro, 16.1's opening (two blocks), 16.2's, 16.4's, 16.5's and 16.6's openings and 16.7's two blocks (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | 16.3's "Note" ("Even today …") kept as a titled note |
| Embeds | none |
| Printed labels | kept as printed: 16.6's "Figure A", "Figure C" (inside the images; "See Figure C" links the folded figure) and "equation 2.1" (links (16.6.1)); 16.2's "Equation 10.2a" … labels resolve to N.M.K; the summary's "Figure 7.1" |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (16.1.1)–(16.1.11), (16.2.1)–(16.2.9), (16.4.1)–(16.4.2), (16.6.1)–(16.6.2), (16.7.1)–(16.7.4); 16.3 and 16.5 number nothing; 16.7's two-row `align` is one number, so the live page's (16.7.5) is (16.7.4) |
| Repeated material | built once where the book first works it and cited after: ideal isotherms (16.1.1, 16.3.1 folded into it), the generalized compressibility chart (16.3.4 = 16.4.1, one figure), the van der Waals equation (16.2), the critical constants (16.3), B₂ = b − a/RT (stated 16.5, derived 16.7), the hard-sphere B₂ (16.5); from earlier chapters the Boltzmann distribution (13.2), the well depth (5.3), dipole moment (5.5), polarizability (12.13), the van der Waals helium dimer (9.8) |
| Figures | as the table in `exploration.md`: particles kicking the wall into a steady pressure (unnumbered 16.1 image, moving); ideal isotherms and isochores (16.1.1 + 16.3.1 folded, still); Z against P (16.1.2, faithful copy, axis corrected); the excluded sphere (16.2.1, still); attraction at the wall (unnumbered 16.2 image, moving); CO₂'s van der Waals isotherms with Maxwell's equal areas and the critical point (16.3.2, still); the roots of the cubic with a complex-plane inset (16.3.3, still); four gases collapsing in reduced pressure (16.3.4 + 16.4.1 folded, still, a morph); B₂ against T (a Sim in 16.5, still); the Lennard-Jones pair (Figure A + 16.6.1 + Figure C folded, still); kept: the system-and-surroundings sketch (16.1), the summary's Figure 7.1 |
| 3D | none |
| Model data | the book's: Table 16.2.1's a and b, Figure 16.3.2's CO₂ constants, 16.4's argon and ethane critical temperatures, 16.6's ε and σ for Ar and Xe, and the curves of Figures 16.1.2 and 16.4.1 read off as the book's data with their sources named; no literature values in any figure |
| Extra simulations | two offered: `sim-b2-potential` in 16.7 (recommended), a van der Waals P–V̄–T surface (not recommended) |
| Derivations | built: the ideal gas law from wall collisions (16.1, printed); the Redlich–Kwong cubic (16.2, hidden, score 9); the Redlich–Kwong constants (16.2, hidden, score 10); the van der Waals critical constants (16.3, printed); the van der Waals equation in reduced variables (16.4, hidden, score 9); the van der Waals virial series (16.7, printed); the van der Waals constants from molecular parameters (16.7, hidden, score 11); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 16.1's P = ρRT with a number density and "compressibility" for Z, Figure 16.1.2's "Z (kPa)", 16.2's 0.42780 (0.42748), the missing a in (16.2.5) and its "∝ P²", 16.3's caption units and P_B′, 16.5's "radius σ", 16.6's σ called the van der Waals radius and Example 16.6.2's rounding, 16.7's factor of 3 in (16.7.2) and (16.7.3) (checked by computation); those resting on memory are checked by the builder first |
| Colour | four new types, `pressure`, `volume`, `molar-volume`, `amount` (colours dealt by `colours:default`, every existing colour kept); temperature, length, energy, force, velocity, mass, time reused; Z, a, ρ, R, k_B, N, N₀, C₆ and the counts untyped and in ink; the reduced variables wear the type they scale (*orchestrator*); facts and conventions: none (molecules are generic particles, no element drawn, except `F.el` if a builder names Ar or Xe in 16.6's figure) |
| Symbols | 42 new (33 with macros), 127 variables rows (see `chapter.json`); 65 concepts, 100 edges, 63 forms; keys of earlier chapters reused where the quantity is the same or the meaning is new in another chapter |
| Licence | 16.5 and 16.6 tagged CC BY, shared BY-NC-SA with the rest; 16.1.2 (OpenStax, CC BY) under its own licence with credit; the summary untagged (the book's) |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises** (16.6.1 kinds of attraction, 16.6.2 where the force is repulsive,
  attractive or zero): 2 printed; **2 keyed**, available now (both explanations, the keys as
  printed; 16.6.2's stray back-link dropped from its words); **0 unkeyed**. Both stay in 16.6,
  kind `exercise`.
- **Worked examples**: 3 (16.6.1–16.6.3), all with a Solution part, kept in the text;
  16.6.2's rounding and 16.6.3's 4.10 against 4.0 Å get footnotes.
- **Problem or question lists**: none.
- **16.E**: empty; nothing routed.
- **In all**: 2 cards, 2 keyed, 0 unkeyed.
- **Proposed new: 13**: 16.1 two, 16.2 two, 16.3 two, 16.4 two, 16.5 two, 16.6 two,
  16.7 one (subjects in `exploration.md`).

**The choice** (carried over from Chapter 1): book exercises kept with their keys;
*AI solutions* for any the orchestrator rules unkeyed (none); *AI exercises* for the 13
proposed. Every exercise is an item of the Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked *orchestrator*).

## Decisions taken by the orchestrator (2026-11-08)

- **R = N₀k_B** in the 16.1 derivation: carried as a fact with no provenance, as a given relation between constants. The derivation ends at the book's PV = nRT.
- **Redlich–Kwong constants**: derived by the triple-root route, which rests on 16.3's own statement that the critical point is a triple root.
- **The 16.3.4 + 16.4.1 fold** lives in 16.4, where the law of corresponding states is; 16.3's citation links to it.
- **Forms** of `molecular-vdw-constants` and `rk-constants` are in corrected form (Chapters 6–7 precedent), with the corrections footnoted in the text.
- **Reduced variables** P_r, T_r, V_r wear the type they scale.
- **New symbol keys** (`n_mol`, `b_vdw`, `sigma_hs`, `sigma_lj`, `R_curv`) as proposed. In 16.2, the area A is written plain.
- **Extra simulations**: `sim-b2-potential` in 16.7; not the P–V̄–T surface.
- **Captions** have no fixed length.
