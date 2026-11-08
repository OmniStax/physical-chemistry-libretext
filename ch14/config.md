# Config: Physical Chemistry (LibreTexts), Chapter 14

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 14 Nuclear Magnetic Resonance Spectroscopy: landing page 11809, sections 14.1, 14.4–14.8 (13636, 13639–13643) built; summary 14.S (550569); 14.E (13645) is empty and not built |
| Empty and stray pages | 14.2 (13637) and 14.3 (13638) carry Zielinski's uncertainty-principle text (the same as 9.11 and 19.E) and 14.9 (13644) reads "under development": not built and left out of `chapter.json` (9.11, 9.13, 12.9 precedent); their source.md files stay as the record. Exercises 14.2.1 and 14.3.1 are 1.9's card `e3` already: no new card |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (21.1), one block with a header of the agent's; no lead, objectives, exercises or concepts |
| Summary page | 14.S is the chapter's `summary/` page (21.2): its paragraph and list, then its "Learning Objectives" box (with "Skill goals") kept verbatim as a block (12.S, 13.S precedent); one footnote that the commutation relations, the spectrometer-frequency page, perturbation theory for coupled protons and second-order spectra are not taught on this chapter's built pages |
| Start point | 14.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; no section has objectives or a "## Summary"; 14.6's closing Soderberg line and 14.7's Stack Exchange source go to `notes`; 14.7's "Notes and references" (the answer's footnotes [1]–[5], cited in the text) kept as the closing block of the accepted answer; credits: 14.5 Franzen, 14.6 Soderberg, 14.7 the Stack Exchange thread, the summary Crabtree, the rest the book's |
| Headers | the book's `<h2>` kept (14.5's three; 14.6's "5.5A/B/C: …" as printed; 14.7's "Selection rules", "Notes and references"); 14.7's printed line "Finding the states between which transitions occur" used as its block's header; the agent's for the intro, 14.1, 14.4, 14.5's opening, 14.7's opening and its AX/A₂ block, 14.8's two blocks (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | 14.7's untitled "Note" (with its level diagram) and "Advanced: Liouville–von Neumann Equation" kept as titled notes; its pull-quote as an untitled emphasis note (13.12 precedent) |
| Embeds | none |
| Printed labels | kept as printed: 14.6's "5.5A/B/C" headers and "Example 5.6"–"5.10" (as the exercises' `source_number`), "Table 4" (an outside link); 14.7's "(14)" tag; 14.8's molecule numbers 1–3 |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (14.7.1)–(14.7.10); 14.5's displays unnumbered (`\nonumber`); 14.7's citations of the answer's own numbers "(4)", "(11)", "(12)→(13)", "10 and 11" footnoted and linked to the displays meant |
| Repeated material | built once where the book first works it and cited after: electron spin, s, m_s, α, β (8.4); fermions, bosons, Pauli (8.5); singlet and triplet spin functions (8.6); angular momentum addition (8.8); the secular determinant (7.2's `secular`, `drv` from 14.7's derivation); commutation relations (6.3); selection rules and the transition moment (5.5); ΔE = hν (13.1) |
| Figures | as the table in `exploration.md`: the precessing moments and the field (`sim-larmor`, 14.5, new Sim, moving, mathematical 3D); the spectrum against the magnet (5173 + 5193 folded, still); splitting by n neighbours into Pascal's rows (5175 + 5177 folded, still); two couplings fusing at J₁ = J₂ (5203 + 5205 + 5211 folded, still); the two-spin levels and spectrum from AX to A₂ (344398 + 344400 + 344399 folded, still); the vinyl doublets of doublets (14.8's six images folded, still); 14.8's table image transcribed; kept: the measured spectra and close-ups (5179, 5199, 5201, 5207, 5213, 5217), the structures (5181, 5183, 5185, 5187, 5195, 5197, 5209, 14.8's molecules 1–3); exercise images in their prompts and keys |
| 3D | `sim-larmor` only: mathematical, free orbit within ±75° of the horizontal (the cones collapse end-on), no spin, no zoom |
| Model data | the book's numbers: trichloroethane (3.96, 5.76 ppm; 6.1 Hz), methyl acrylate (6.21, 5.95, 5.64 ppm; 17.4, 10.5, 1.5 Hz), 100 MHz ≈ 2.4 T and 500 MHz ≈ 12 T (γ/2π ≈ 41.7 MHz T⁻¹ from them), TMS at 300 MHz (Example 5.9); 14.8's vinyl J's taken from 14.6's methyl acrylate (named in notes); no literature values used |
| Extra simulations | one offered, not recommended: the pulse and the free-induction signal, A₂ against AX (14.7's Liouville note) |
| Derivations | built: "the levels and lines of two equivalent spins" (14.7, score 9, with the selection-rule branch); "the coupling commutes with the total spin" (14.7's Advanced note, score 7); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 14.8's five "H_as" for "has", 14.7's foreign equation numbers and A₂ sentence, 14.6's "trichloromethane", the 10.4/10.5 Hz J, the "benzylic" labels, the triclosan drawing, the E5.10 key (1:4:6:4:1), 14.5's unkept promise and Lamb display, 14.4's "does not experience", the summary's "particularly NMR" |
| Colour | no new type; frequency (J, ν_L, ν, ω), magnetic-field (B, B_loc, B₀, …), operator, energy, angular-momentum; σ, δ, χ, μ₀, I, M_I and counts untyped and in ink; conventions: `F.el` for atoms in the structures the figures draw; facts: none |
| Symbols | 42 new (32 with macros), 70 variables rows (see `chapter.json`); 48 concepts, 73 edges; keys of earlier chapters reused where the quantity is the same |
| Licence | 14.1 and 14.5 CC BY-SA 4.0 (tagged), kept BY-SA; 14.4, 14.6, 14.8 BY-NC-SA; **14.7 and the intro proposed BY-SA** (Stack Exchange and Wikipedia text on pages tagged BY-NC-SA: orchestrator); the summary untagged (the book's) |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **14.6's questions** ("Example 5.6"–"5.10", plain paragraphs, each with a "Solution"
  link to Soderberg's solution manual): 5 printed; **5 keyed** by the linked manual
  (fetched; four answers are images, now in `media/ch14/`), available now, one key
  corrected (E5.10: 1:4:6:4:1, not 1:2:3:2:1); **0 unkeyed**. Without the linked manual
  as the key: 5 unkeyed, available with AI solutions (2 explain or predict: 5.7, 5.8;
  3 sketch with a computation: 5.6, 5.9, 5.10). Each stays in 14.6.
- **Stray exercises**: 2 printed (14.2.1, 14.3.1), the uncertainty exercise of 9.11.1 and
  19.E.1; routed to 1.9's existing card; no new card.
- **Worked examples**: none.
- **14.E**: empty; nothing routed.
- **In all**: 5 cards, 5 keyed (linked manual), 0 unkeyed.
- **Proposed new: 9**: 14.1 one, 14.4 one, 14.5 two, 14.6 one, 14.7 two, 14.8 two
  (subjects in `exploration.md`).

**The choice** (carried over from Chapter 1): book exercises kept with their keys
(here the linked manual's, corrected where wrong), *AI solutions* for any the orchestrator
rules unkeyed; *AI exercises* for the 9 proposed. Every exercise is an item of the
Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked *orchestrator*).

## Decisions taken by the orchestrator (2026-11-08)

- **14.2, 14.3 and 14.9** are not built and stay out of `chapter.json` (empty or wrong pages; the 9.11 precedent). 1.9's card `e3` already covers 14.2.1 and 14.3.1. Chapter 14's pass adds them to 1.9's `exercise_notes`.
- **14.6's five questions** are keyed by the book's linked Soderberg solution manual (`generated_by: "source"`), and E5.10's wrong ratio gets a correction under its card.
- **Licences**: 14.7 (Stack Exchange) and the intro (Wikipedia) are shared as CC BY-SA, their own licence.
- **14.7's AB figure** may show the general eigenvalues of the book's two-spin Hamiltonian (14.7.3) for any Δν, since they follow from the printed equation. The readout says they are computed from (14.7.3).
- **14.8's vinyl figure** isn't built; the text cites 14.6's two-coupling figure.
- **Triclosan**: the footnote stands only if the drawing visibly differs from triclosan's structure, 5-chloro-2-(2,4-dichlorophenoxy)phenol.
- **Captions** have no fixed length.
