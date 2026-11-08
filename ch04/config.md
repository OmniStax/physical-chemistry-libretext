# Config: Physical Chemistry (LibreTexts), Chapter 4

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 4 Postulates and Principles of Quantum Mechanics: landing page 11781, sections 4.1–4.6 (13406–13411), the summary page 4.S (550564); 4.E (13412) is empty and not built |
| Front matter | none: the landing page prints no text (only the site's generated list of sections), so there is no `intro/` page and `chapter.json` has no `intro` record (root rule 21) |
| Summary page | 4.S is the chapter's `summary/` page (root rule 21.2), built like 3.S with no lead, objectives, exercises or coverage: one block (a header of the agent's), the five-point list kept verbatim, its two text-tagged displays keeping their tags "(classical mechanics)" and "(quantum mechanics)", the other three unnumbered; no figure |
| Start point | 4.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; objectives pulled out (no lead-in sentences); no section closes on a "Summary"; the Contributors lists are credits (4.1 Adams, Evans and Zwiebach, MIT OCW; 4.3 Fitzpatrick and Wikiversity; 4.5 Fitzpatrick); 4.4 (Tuckerman) and 4.6 (Zielinski et al.) from the page tags; 4.2 names no author and its `notes` say so; 4.6's References kept as its closing block |
| Headers | the book's `<h2>` headers kept; the agent's for every opening block and for 4.2, which has none (proposals in `exploration.md`), put through the humanizer by the builder |
| Boxed notes | kept verbatim as titled notes: the five postulate boxes, the definition boxes (Square-Integrable Functions, Orthogonality Theorem), the theorem boxes ("Proof" twice, Gram-Schmidt), "The Hamiltonian Operator", "Collapsing the Wavefunction", "The Quantum Observer Effect", the emphasis box of 4.5; 4.6's pulled quote as the book prints it |
| Terms | 4.2's bold "Correspondence Principle" names `operator-postulate` (Postulate II), not 3.3's `correspondence-principle` |
| Lettered boxes | Examples 4.6.2A and 4.6.2B and Exercise 4.6.2C keep their printed labels; Example 4.6.2A, which has no working, is treated as an exercise (3.4's precedent) under its printed label |
| Equation numbers | one per display, an `align` included, as the converter's `n=` gives them; citations that miss are corrected (list in `exploration.md`) |
| Figures | as the table in `exploration.md`: the density forgets the ripple (4.1.1, still), which curve fails which test (4.1.2 + 4.1.3 + 4.1.4, still, a probe), σ bands of measurements (4.3.1, still), measurement collapse (4.3's two note images, moving, unnumbered), parity across the box's centre (Example 4.5.1's plot, still); Exercise 4.1.1's four key plots kept in the key; Table 4.2.1 kept as a table; every other book figure replaced |
| 3D | none: the collapse images' surfaces are perspective for a one-axis lesson (rule 28.1) |
| Extra simulations | offered, not built unless picked: a mixture and an energy measurement (4.4, recommended, moving), building a state from eigenstates (4.3, recommended), order matters (4.6, not recommended) |
| Derivations | built: an eigenstate has no spread, the variance as ⟨x²⟩ − ⟨x⟩², Example 4.3.1, the expansion coefficients (4.3); a stationary state, a mixture's density changes in time (4.4); real eigenvalues ⇒ Hermitian, the orthogonality theorem (both proofs), an orthogonal partner for a degenerate eigenstate, Gram–Schmidt (4.5); commuting operators share eigenfunctions (4.6); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`), including the swapped operators of Example 4.6.1 (c), the sign of Example 4.3.1 (b), the ψ-for-φ proof of 4.5, the missing ½ in (4.6.4) and Exercise 4.6.2C's operators |
| Colour | categories in the chapter: wavefunction, probability density, operator, energy, momentum, length, mass, time, wavenumber, force; no new type; facts and conventions: none; referents: ψₘ and ψₙ of Example 4.5.1's figure, the three measurements of the collapse figure if the builder labels them |
| Licence | every section CC BY-NC-SA 4.0; the summary untagged, so the book's; uncredited originals (4.1.1, Example 4.5.1's plot) ship in `originals` under the page's licence as Chapter 3 decided, 4.1.1 subject to the orchestrator (MIT, "used with permission") |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: 5 printed as questions (4 "Exercise" boxes and the
  solution-less Example 4.6.2A); 3 keyed, available now (4.1.1, 4.5.2,
  4.6.2C); 2 unkeyed, available with AI solutions (1 explain or prove:
  4.6.1; 1 compute: 4.6.2A).
- **Worked examples**: 4 (4.3.1, 4.5.1, 4.6.1, 4.6.2B), kept whole; not
  exercises.
- **Conceptual questions, problems, 4.E**: none printed.
- **Placement**: every question tests its own section; nothing is held or
  moved. 19.E's stray Exercise 19.E.1 (the uncertainty principle) belongs
  to 1.9, not to this chapter.
- **Proposed new**: 7, where the book leaves a concept untested: two in 4.2
  (operators from classical observables), two in 4.3 (expansion
  probabilities and ⟨E⟩; the zero variance of an eigenstate), two in 4.4
  (a superposition's oscillating density and its period; which states are
  stationary), one in 4.5 (orthogonality where parity does not decide).

**The choice** (carried over from Chapter 1): the 3 keyed questions kept as
printed, with corrections where a key is wrong; *AI solutions* for the 2
unkeyed; *AI exercises* for the 7 proposed. Every exercise is an item of the
Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked "orchestrator").

## Decisions taken by the orchestrator (2026-11-08)

- **No intro page**: the landing page has no text (root rule 21).
- **Example 4.3.1 (b), (c)**: built here as derivations, their `source` naming Examples 3.7.3 and 3.7.2 where the book first works them.
- **4.5's repeated proofs**: a derivation for each place the book prints one.
- **Figures 4.1.2–4.1.4**: folded into one still figure with an x-probe, as proposed.
- **Originals**: 4.1.1 (MIT, "used with permission") is not shipped, since the permission was given to the book, not to us; the Sim replaces it and `notes` credits the source. 4.3.1 is shipped as CC BY 2.5 with Wikipedia's credit.
- **Extra simulations**: the 4.4 mixture and measurement Sim and the 4.3 state built from eigenstates; not the 4.6 one.
- **Chapter 3 rows** ("observable", "standard deviation") and the `\braket` in `ch03/summary` are fixed in Chapter 3's chapter pass; 19.E.1 goes to 1.9 when Chapter 19 is prepared.
- **Captions** have no fixed length.
