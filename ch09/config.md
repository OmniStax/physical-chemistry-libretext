# Config: Physical Chemistry (LibreTexts), Chapter 9

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 9 Chemical Bonding in Diatomic Molecules: landing page 11786, sections 9.1–9.16 (13451, 13452, 13454, 13455, 13456, 13458–13468), the summary page 9.S (550560); 9.E (13450) is empty and not built |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (root rule 21.1), one block with a header of the agent's; no lead, objectives or exercises; the thumbnail credit is left out with the thumbnail (Chapter 3's precedent) |
| Summary page | 9.S is the chapter's `summary/` page (root rule 21.2): one block of ten bullets, header of the agent's; no numbered display; one correction ("the 2J+1 is gone") |
| Start point | 9.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Empty and stray pages | 9.13 and 9.16 have no body: listed in `chapter.json`, not built (orchestrator). 9.11's body is a copy of Zielinski's uncertainty-principle page (the same as 19.E): built as a page with the book's words and a correction footnote, its exercise moved to 1.9 (orchestrator) |
| Prose | verbatim; objectives pulled out (9.1, 9.4, 9.5, 9.8, 9.10, none with a lead-in); 9.1's and 9.12's "## Summary" to `summary_html`; 9.8's "Conclusion" stays in the text; 9.14's References stay as its last block; credits: 9.1–9.6 the Contributors lists (Hanson, Harvey, Sweeney, Zielinski; 9.2 with Rudolf Winter, 9.6 with Mark Tuckerman), 9.9 and the summary Kyle Crabtree, 9.11 Hanson et al. (the transcluded page), 9.12 anonymous, 9.15 Mattanjah de Vries, the rest the book's |
| Headers | the book's `<h2>` headers kept; the agent's for every opening block and for 9.3 and 9.9, which have none (proposals in `exploration.md`), put through the humanizer by the builder |
| Boxed notes | kept verbatim as titled notes: 9.2 The LCAO Approximation and Interference; 9.4's two definition boxes; 9.5 Steps in a Solving the Secular Equations; 9.6 Contrasting LCAO with other Quantum Chemistry Methods; 9.8 However, Van der Waals Helium Dimers do exist (with Figure 9.8.2); 9.9 Note; 9.10 Advanced: Spin Barriers; 9.12 An Odd Number of Valence Electrons: NO (with Figure 9.12.13); pulled quotes as printed |
| Embeds | the two YouTube videos (9.10's Video 9.10.1 with its caption paragraph, 9.12's) dropped and named in `notes` |
| Printed labels | kept as printed: Figures 9.4.2, 9.4.3 (no 9.4.1); 9.12.4, 9.12.13, 9.12.6; Example and Exercise 9.12.4; Example 9.1.1 (an illustration with no question) kept as an example. Where an example box closes before its solution (9.7.1, 9.7.2, 9.8.1, 9.12.4), the tail is kept inside the example |
| Equation numbers | one per display, an `align` included, as the converter's `n=` gives them (63 numbered of 89); labels lag numbers (9.4, 9.5, 9.8): read numbers from the draft; citations that miss are corrected (list in `exploration.md`); "Equation BO" links 9.8's (9.8.1), "Figure 9.12.11" links 9.7's fold |
| Repeated material | built once where the book first works it and cited after: 9.5's variational energy and secular equations cite 7.2's derivations; 9.8's (9.8.4) cites 9.4's; 9.3's repeat of 9.2's ψ± paragraph is the book's and stays |
| Figures | as the table in `exploration.md`: the coupled oscillators (Example 9.1.1, moving); H₂'s potential as E_e plus repulsion (9.1.1, still); water's surface with a slice (9.1.2, still 3D); the electron over two protons (9.2.1, still); two orbitals approaching and interfering (9.2.2 + the note's animation, moving); overlap and its integral (9.3.1 + 9.3.2, still); the energy curves traced as the atoms approach (9.4.2 + 9.4.3, moving, the centrepiece); σ and σ* clouds (9.5.1, still 3D); the ns diagrams (9.7.1 + Example 9.7.1, still); σ and π from p orbitals (9.7.2 + 9.7.3 + 9.7.7, still 3D); filling the period-2 diagrams (9.7.4 + 9.7.5 + 9.7.6 + Example 9.7.2, moving); bond order and He₂ (9.8.1 + Example 9.8.1, still); He₂'s van der Waals state (9.8.2, still); bond length and energy against electrons (9.10.1 + 9.10.2, still); O₂ and its ions (9.10.3, still); the skewed diagram (9.12.4, still); inversion and reflection (M22 + Example 9.15.2's image, still); O₂'s microstates peeling into terms (Example 9.15.3, moving); faithful copies of 9.5.2, 9.6.1, 9.12.6, 9.12.13, Example 9.12.4's image, mo4, mo6, 9.15.2, 9.15.4; tables kept |
| 3D | three mathematical scenes, point clouds coloured by sign through `F.space.points` (3.9's and 6.6's decision), free orbit, no buttons: water's surface (bounded above its floor), σ_1s/σ*_1s, the p-orbital combinations |
| Extra simulations | offered, not built unless picked: a photoelectron spectrum from MO energies (where to place it is open, below), H₂⁺ with an optimized exponent (not recommended), liquid O₂ past a magnet (not recommended) |
| Derivations | built: the normalized orbitals of H₂⁺ (9.3); the energy of H₂⁺ (9.4, one record through (9.4.5) to (9.4.10)); the antisymmetry of H₂'s ground state (9.9); the rest kept as printed or cited (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`), including 9.4's J definition box and its 134 pm / 100 pm against its own curve; Figure 9.7.5's caption (F₂); 9.7's σ*/π slips; 9.8's He₂⁺ "three electrons" and He₂ configuration; 9.9's dropped words and its rows/columns; 9.10's O₂ filling and configurations; 9.12's NO figure against its text; 9.14's O₂ terms and selection rules; 9.15's charts and answer; Exercise 9.1.1's and 9.4.1's keys |
| Colour | categories in the chapter: energy, length, mass, charge, wavefunction, operator; no new type, so no `colours:default` run; constants, coefficients (C_A, C_B, C±, c_{J,i}, c_{ij}), charge numbers Z_A, Z_B, electronegativities χ, and Λ, Ω, M_L, M_S, S untyped and in ink; facts: none (no spectrum is drawn unless the PES Sim is picked); conventions: `F.el` for the nuclei and atoms where a figure names an element (H, He, Li … F, O₂, N, Cl) |
| Symbols | 50 new, 35 typed with macros; the H₂⁺ integrals get their own keys (`J_int`, `J_AB`, `K_int`, `K_AB`) beside 5.8's `J` and 8.7's `K_ij`; ψ (9.9), N (9.9) and φ_i (9.9) marked `redefines` |
| Licence | 9.14 CC BY 4.0 at the source, shared BY-NC-SA; every other section CC BY-NC-SA 4.0; the summary untagged, so the book's; uncredited originals ship in `originals` under the page's licence (Chapter 3's decision); Example 9.1.1's image under its own CC BY-SA 3.0 with its credit; 9.8.2 (INSPIRE plot, licence not stated) not shipped |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: 13 printed boxes, **13 cards**. **8 keyed**, available
  now (9.1.1, 9.1.2, 9.4.1, 9.7.1, 9.7.2, 9.8.1, 9.12.4, 9.15.1; 9.1.1's and
  9.4.1's keys corrected under their cards). **5 unkeyed**, available with AI
  solutions (5 explain or prove: 9.1.3, 9.1.4, 9.3.1, 9.4.2, 9.4.3; 0 compute; 0
  sketch).
- **9.11's Exercise 9.11.1**: 1 printed, unkeyed (compute), the same exercise as
  19.E.1; it tests the uncertainty principle and goes to **1.9** as one card for
  both printed places, not a card of this chapter.
- **Worked examples**: 10 (9.1.1; 9.3.1; 9.7.1, 9.7.2; 9.8.1; 9.10.1; 9.12.4;
  9.15.1–9.15.3), kept whole; not exercises.
- **Conceptual questions, problems, 9.E**: none printed; 9.E is empty.
- **Placement**: every box tests its own section; 9.11.1 goes to 1.9. 9.4.1 and
  9.4.2 retrace 9.4's derivation; 9.4.2's AI solution cites it.
- **In all**: 13 cards here, 8 keyed, 5 unkeyed (5 explain or prove).
- **Proposed new**: 8, where the book leaves a concept untested: one each in 9.2
  (the two combinations and where each puts charge), 9.3 (S and C± at R = 2a₀),
  9.4 (ΔE± at R = 2a₀ from given S, J, K), 9.5 (the orbitals of the six-orbital
  basis and their nodes), 9.6 (Li₂'s and N₂'s configurations with g/u), 9.9
  (expand the 2 × 2 determinant into (9.9.3)), 9.10 (which period-2 diatomics are
  paramagnetic), 9.14 (CO's excited terms and a spin-allowed transition).

**The choice** (carried over from Chapter 1): the 8 keyed cards kept as printed,
with corrections where a key is wrong; *AI solutions* for the 5 unkeyed; *AI
exercises* for the 8 proposed. Every exercise is an item of the Exercises document
(`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked "orchestrator").

## Decisions taken by the orchestrator (2026-11-08)

- **9.13 and 9.16** are empty at the source, so they are not built. Chapter 9's pass removes them from `chapter.json` (with any rows staged in them) so no link or table of contents points at an empty page. The chapter's `LOG.md` entry names them as the book's empty pages.
- **9.11** holds the wrong page (Zielinski's uncertainty-principle text, identical to 19.E), so it is treated like 9.13: not built, and removed from `chapter.json` in the pass. Its Exercise 9.11.1 goes to 1.9 as one card that also covers 19.E.1, added in Chapter 9's pass.
- **Photoelectron spectra**: no figure, since the book has no text on them.
- **9.8.2's original** (INSPIRE plot, no stated licence) is not shipped; the figure's notes name the source.
- **Examples whose box closes early** (9.7.1, 9.7.2, 9.8.1, 9.12.4): the rest of the solution stays inside the example.
- **Figures** stay separate as proposed (the 9.7.1 and 9.8.1 diagrams; 9.5.1's 3D cloud beside 9.2.2's plane view).
- **H₂⁺ J(R) and K(R)**: their closed forms' source (Pauling; McQuarrie) is named in the figure's notes. 9.4's minimum at 132 pm against the book's 134 pm gets a correction only if the book's own formulas give 132.
- **Captions** have no fixed length.
