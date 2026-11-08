# Config: Physical Chemistry (LibreTexts), Chapter 12

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 12 Group Theory - The Exploitation of Symmetry: landing page 11807, sections 12.1–12.8 and 12.10–12.15 (13484–13491, 433871, 433848, 433954, 433991, 433984, 433985), summary 12.S (550567), table pages 12.T (433853, 433854); 12.9 (13492) and 12.E (13483) are empty and not built |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (root rule 21.1), one block with a header of the agent's; no lead, objectives, exercises or concepts; no thumbnail |
| Summary page | 12.S is the chapter's `summary/` page (21.2), built like 3.S with no lead, objectives, exercises or coverage; its chapter-level "Learning Objectives" box (with "Skill goals") kept verbatim as its first block (proposal), its prose the second block |
| Reference tables | the two 12.T pages become two `table` sheets of the book, `character-tables` (46 tables) and `correlation-tables` (7), written by a book tool from `ch12/tables/*/source.md`; corrections as table notes; sections link to them |
| Start point | 12.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Empty and stray pages | 12.9 and 12.E empty (not built; 12.9 left out of `chapter.json`); 12.7 and 12.10 open or close on Vallance's text the book does not print (footnotes) |
| Prose | verbatim; no section objectives; 12.2's "## Summary" to `summary_html`; 12.14's References to its notes and Solutions to its cards; credits from the tags (12.1 Larsen, LaRue; 12.2 Vallance, Larsen, LaRue; 12.3 Vallance; 12.4 Vallance, LaRue; 12.5, 12.6, 12.11 LaRue; 12.7 Vallance, LaRue; 12.12, 12.15 Vallance; 12.13 Vallance, Larsen, LaRue; 12.14 Larsen, LaRue; the summary Crabtree; 12.8, 12.10 and the intro the book's) |
| Headers | the book's `<h2>`/`<h3>` kept; the agent's for the intro, 12.1's two blocks, 12.4's, 12.6's and 12.8's opening blocks, 12.5 and 12.11 (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | kept verbatim as titled notes (12.2 five, 12.3 one, 12.6 one, 12.8 two) |
| Embeds | none |
| Printed labels | kept as printed: 12.14's examples "2", "4", "3" (in that order) and "Table 5/6/7"; 12.15's example "Rotation"; Table 12.4.1 unnumbered |
| Equation numbers | one per display, N.M.K; the explicit Vallance `\tag`s (12.6, 12.10, 12.13, 12.15) replaced by the page's N.M.K sequence (proposal); citations of Vallance's numbers and sections footnoted |
| Repeated material | built once where the book first works it and cited after: 12.15's steps note and its two displays cite 12.8's; 12.15's C₂ᵥ table is 12.10's; 12.13's Morse curve links 5.3's figure; 12.14.10's water orbitals are 12.15's figure |
| Figures | as the table in `exploration.md`: operations on a molecule (12.2.1–12.2.5 folded, moving, physical 3D); the point-group finder with the flowchart (still, 3D); composing two operations in C₃ᵥ (moving, locked view); a vector and its matrices (12.4.1, moving, mathematical 3D); NH₃'s s basis permuted (moving); NH₃'s A₁ and E orbitals (still, 3D); water's normal modes and their characters (moving, 2D); ammonia's six modes (moving, 3D); polarized light exciting water's modes (moving); Raman photons (moving); the projection operator on water's stretches (12.14.1–12.14.4 folded, moving); water's basis under C₂ᵥ (moving, 3D); water's MOs and excited states (still, 3D); the level diagram, the difluorobenzenes, CBr₂H₂, PtCl₄, PF₂H₃ faithful; tables kept |
| 3D | physical: 12.2's scenes, 12.8's orbitals, 12.12's modes, 12.15's MOs, orbit bounded above the molecular plane and ±60° about the principal axis, zoom for benzene and SF₆ only, no spin; locked view: NH₃ down its axis (12.3, 12.5); mathematical: 12.4's vector |
| Model data | literature allowed with its source named: water's and ammonia's fundamental frequencies (NIST), mode shapes from a valence force field named in the notes; NH₃'s orbital coefficients recomputed from the book's integrals |
| Extra simulations | three offered (rule 15; orchestrator): characters of a rotated pair of axes (12.6); descent in symmetry with the correlation table (12.7); reduction as weighted sums (12.11) |
| Derivations | built: benzene's roots from the block-diagonal determinant (12.1, score 6); the similarity transform (12.6, printed); NH₃'s A₁ and E orbital energies (12.8, printed, two results); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 12.8's energies (−29.83 and +31.03 eV) and the coefficients that follow, 12.8's "even function" integral, 12.12's σᵥ column (2, not 1), 12.4's σᵥ′ images and R_y, 12.6's E row, 12.7's C₃ table, 12.14's B₁/B₂ and PF₂H₃, 12.15's c₅p_x and B₂ sum, 12.13's μ = αE; the 12.T errors as sheet notes |
| Colour | three new types merged and dealt by `colours:default` (no other type moved): `symmetry-operation`, `representation`, `character`; also energy, wavefunction, angle, length, operator, dipole-moment; species labels, counts (h, n_C, a_k, N), coefficients and normalization constants untyped and in ink; conventions: `F.el` for every atom; facts: photon colours in the Raman figure |
| Symbols | 38 new (24 with macros), 113 variables rows; E, χ, h, i, σ given their own keys (`E_op`, `chi_char`, `h_order`, `i_op`, `sigma_op`) beside the book's |
| Licence | 12.1–12.5, 12.8, 12.14, 12.15 CC BY 4.0 pages shared as the book's BY-NC-SA 4.0 (a BY page may be); 12.6, 12.7 BY-NC-SA; 12.10–12.13, the summary and the sheets untagged (the book's); Otterbein renders shipped with their credit; not shipped: the Rubik's cube photo, the two Sigma-Aldrich spectra, the transition integral image |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: none printed.
- **Worked examples**: 7 (12.4.1; 12.14.1, 12.14.2, "2", "4", "3"; 12.15 "Rotation"),
  all worked in their text, kept whole; not exercises.
- **Problems** (12.14): 3 printed; **3 keyed**, available now (the page's "Solutions to
  Practice Problems": 2 compute, 1 sketch keyed by an image); 0 unkeyed.
- **12.E**: empty, nothing routed; no other page holds this chapter's exercises.
- **Placement**: the three problems stay at the end of 12.14.
- **In all**: 3 cards, 3 keyed, 0 unkeyed.
- **Proposed new: 14**, where the book leaves its concepts untested: 12.1 one, 12.2 two,
  12.3 one, 12.4 one, 12.5 one, 12.6 one, 12.7 one, 12.8 one, 12.10 one, 12.11 one,
  12.12 one, 12.13 one, 12.15 one (subjects in `exploration.md`).

**The choice** (carried over from Chapter 1): the 3 keyed problems kept with the book's
keys; *AI exercises* for the 14 proposed. Every exercise is an item of the Exercises
document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked *Orchestrator*).

## Decisions taken by the orchestrator (2026-11-08)

- **12.9** is empty at the source: not built, left out of `chapter.json` (Chapter 9 precedent).
- **12.T pages**: two `table` sheets, `character-tables` and `correlation-tables`, built by a new `tools/sheets.py`. The errors the orthogonality check found (7 + 3) are table notes.
- **Vallance's `\tag`s** (11 displays in 12.6, 12.10, 12.13 and 12.15, numbered from his own source): renumbered into the page's N.M.K sequence. A footnote names his citations ("(15.20)", "Section 9", "Appendix B") as referring to his original notes.
- **12.S's chapter objectives** are kept verbatim as the summary page's first block.
- **Images of text**: 12.15's transition integral is set as maths, and Tables 12.14.3 and 12.14.4 are rebuilt as book tables. Neither image is shipped.
- **Not shipped**: the Sigma-Aldrich spectra (12.14.7, 12.14.8), with no replacement, and the Otterbein renders (12.2.1–5; no stated licence, as with 9.8.2). The 3D scene replaces them, and `notes` credits Otterbein's site.
- **12.3's figure** stands beside display (12.3.5); the display stays printed. The Raman figure leaves out anti-Stokes, which the text doesn't discuss. (12.8.1) stays printed.
- **Extra simulations**: none of the three offered.
- **Captions** have no fixed length.
