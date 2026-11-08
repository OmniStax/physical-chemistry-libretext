# Config: Physical Chemistry (LibreTexts), Chapter 11

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 11 Computational Quantum Chemistry: landing page 11788, sections 11.1–11.4 (165359, 13476, 13478, 13479); no summary page; 11.E (13482) is empty and not built |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (root rule 21.1), one block with a header of the agent's; no lead, objectives, exercises or concepts; no thumbnail |
| Summary page | none printed, so none built (rule 21: nothing invented) |
| Start point | 11.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Empty and stray pages | none empty; 11.1's first half repeats 8.5 and 8.6 (built there, cited here); 11.2 opens mid-thought, as printed |
| Prose | verbatim; no objectives in the chapter; the "## Summary" of 11.2 and 11.4 to `summary_html`; credits from the tags (11.1 Zielinski, 11.2 LibreTexts, 11.4 Wikipedia; 11.3 and the intro the book's); the intro's split italics joined by the converter |
| Headers | the book's `<h2>` and `<h3>` kept; the agent's for 11.2's opening block, for 11.1's second half from "In a modern *ab initio*…", and for the intro (proposals in `exploration.md`), put through the humanizer by the builder |
| Boxed notes | kept verbatim as titled notes: 11.1 Hartree-Fock Calculations; 11.2 Limitation: Overdetermined Basis |
| Embeds | none |
| Printed labels | kept as printed: Example 11.2.2 (no 11.2.1); every table number as printed; Example 11.2.2's α/C table unnumbered, with its card |
| Equation numbers | one per display (9 numbered of 23); borrowed labels resolved by the converter; 11.1's plain "Equation 8.6.4" corrected by footnote |
| Repeated material | built once where the book first works it and cited after: 11.1's permutation argument cites 8.5's `exchange-phase` derivation, its helium combination and determinant 8.6; 11.1's energy and coefficients cite 7.2's secular equations; Table 11.3.1's ζ are 7.3's |
| Figures | as the table in `exploration.md`: the STO-NG fit, a Slater 1s against N Gaussians with the cusp and tail errors (11.2.1 + 11.2.2 + 11.2.3, still); single, double and triple zeta weighted into one hydrogen 1s (11.3.1 + 11.3.2, still); a polarization function bending s or p (11.4.1, still, 2D cross-section); tables kept |
| 3D | none: the chapter's figures are radial graphs and one cross-section |
| Model data | literature allowed with its source named: Hehre–Stewart–Pople (1969) STO-NG coefficients; the double- and triple-zeta exponents ours, named in the notes (10.3's Walsh precedent) |
| Extra simulations | three offered (rule 15; orchestrator): fit it yourself for Example 11.2.2 (11.2); hydrogen's energy in contracted against uncontracted STO-NG bases, computed in the figure (11.3); a diffuse function's tail (11.4) |
| Derivations | built: the cost of a double-zeta basis (11.3, score 5, at the bar); cited, not rebuilt: the exchange phase (8.5) and the antisymmetric helium combination (8.6) in 11.1; the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): 11.1's permuted arguments, stray conjugate, determinant column, swapped ψ and φ in (11.1.6), Example 11.1.1's orbital labels and "five lowest" orbitals; 11.2's S₁ normalization and Cartesian d counts in Table 11.2.1; 11.3's figure citation, STO-3G display, Table 11.3.2's lost header, Table 11.3.3; 11.4's lost headers and wrong counts in Tables 11.4.1 and 11.4.2 |
| Colour | categories in the chapter: wavefunction, energy, length, angle (the exchange phase, 8.5's); no new type, so no `colours:default` run; exponents and coefficients (α, α_j, α_in, ζ, ζ_i, d_in, C_j, c_i, c_jk), quantum numbers, counts, normalization constants and basis-set names untyped and in ink; facts: none; conventions: `F.el` only where a figure names an atom (H, C) |
| Symbols | 25 new, 12 with macros; N given three meanings (11.1 electrons, 11.2 primitives, 11.3 orbital functions; `redefines`), the 11.2 normalization constant on its own key `N_norm`; ζ₁ redefined in 11.3 |
| Licence | every section CC BY-NC-SA 4.0; Kaya's 11.2.1 and 11.2.2 under their CC BY 4.0 with credit; 11.4.1 under its own CC BY-SA 3.0 with credit (10.6's decision); 11.3.1 and 11.3.2 uncredited, under the page's licence; not shipped: 11.2.3 (a scan of McQuarrie's figure) |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: none printed.
- **Example boxes without a solution**: 1, Example 11.2.2 (plot an STO against
  three Gaussians, refit, comment), a question: **1 unkeyed card**, available with
  an AI solution (0 explain or prove; 0 compute; 1 sketch).
- **Worked examples**: 1 (11.1.1, CO, worked in its text), kept whole; not an
  exercise.
- **Conceptual questions, problems, 11.E**: none printed; 11.E is empty, so
  nothing is routed to the sections.
- **Placement**: 11.2.2 tests 11.2 and stays there.
- **In all**: 1 card, 0 keyed, 1 unkeyed (1 sketch).
- **Proposed new**: 6, where the book leaves its concepts untested: 11.1 one
  (restricted or unrestricted Hartree–Fock for a radical; which CO orbital donates
  to iron), 11.2 two (Cartesian against spherical f functions; an STO-1G's value at
  the nucleus against its STO), 11.3 two (orbital functions and primitives of H₂O
  in STO-3G, 3-21G and 6-31G; matrix elements when a basis doubles), 11.4 one
  (CH₄'s functions in 6-31G\*, 6-31+G\*, 6-311++G\*\*, and which basis for F⁻).

**The choice** (carried over from Chapter 1): *AI solutions* for the 1 unkeyed
card; *AI exercises* for the 6 proposed. Every exercise is an item of the Exercises
document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (the three extra Sims; the 11.3 derivation at the bar; the
scrambled Table 11.3.3).

## Decisions taken by the orchestrator (2026-11-08)

- **Extra simulations**: "fit it yourself" for Example 11.2.2, and a diffuse function's tail in 11.4, which the text discusses. Not the STO-NG energy figure, whose numbers would be ours.
- **11.3 cost derivation**: built (score at the bar).
- **Table 11.3.3** is kept as printed. A correction footnote says the table is scrambled at the source and gives the intended reading where it can be recovered; where it can't, the footnote says so.
- **Tables 11.3.2, 11.4.1 and 11.4.2** get their lost header rows back and wrong counts corrected through footnotes; the book's cells stay.
- **Figure 11.4.1** (CC BY-SA 3.0 on an NC page): shipped under its own licence, with credit.
- **N's three meanings**: as the tables have them (`redefines`, and `N_norm`).
- **Captions** have no fixed length.
