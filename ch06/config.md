# Config: Physical Chemistry (LibreTexts), Chapter 6

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 6 The Hydrogen Atom: landing page 11783, sections 6.1–6.7 (13426, 13427, 13428, 13429, 13430, 13431, 13432), the summary page 6.S (550557); 6.E (13425) is empty and not built |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (root rule 21.1), one block with a header of the agent's; no lead, objectives or exercises; the thumbnail credit is left out with the thumbnail (Chapters 3 and 5) |
| Summary page | 6.S is the chapter's `summary/` page (root rule 21.2), built like 3.S and 5.S: one block with a header of the agent's, its three displays unnumbered as printed, two corrections (l ≤ n − 1; e is the elementary charge) |
| Start point | 6.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; objectives pulled out (6.3, 6.4, 6.6, 6.7); 6.3's and 6.5's "## Summary" to `summary_html`; the Contributors lists are credits (6.1, 6.4 Hanson, Harvey, Sweeney, Zielinski; 6.3 Richard Fitzpatrick; 6.5 Richard Bader and Hanson et al.; 6.6 Hanson et al., Bader, Stack Exchange's Ben Norris and Loong; 6.7 Zielinski from its tag); 6.2 names no author and takes the book's credit; the summary names none |
| Headers | the book's `<h2>` headers kept; the agent's for every opening block and for 6.1, which has none (proposals in `exploration.md`), put through the humanizer by the builder |
| Boxed notes | kept verbatim as titled notes: "Wavefunction Nomenclature" (6.2); Warning and "The Meaning of Commutation of Two Operators" (6.3); "Bohr Theory vs. Schrödinger Theory" (6.4); "Volume Element for a Shell in Spherical Coordinates" with its figure (6.5); "Which m_l Number Corresponds to which p-Orbital?" and the untitled emphasis box (6.6); "The Orbital Approximation" (6.7); pulled quotes as the book prints them |
| Printed labels | kept as printed: the two tables captioned "Table 6.2.1", the table captioned "Table 6.4.3" and cited as 6.4.1, 6.4's exercise boxes numbered out of order (6.4.4–6.4.6 before 6.4.2); a note where a label misleads |
| Equation numbers | one per display, an `align` included, as the converter's `n=` gives them (6.1's numbers after (6.1.9) run one below the labels); citations that miss are corrected (list in `exploration.md`) |
| Repeated material | built once where the book first works it and cited after: 6.2 holds the concepts, the exercise cards and the radial-function figure that 6.4 and 6.5 print again; 6.5's prose citing 6.5.3, 6.5.4, 6.5.6 points at 6.2's fold (orchestrator, below); Example 6.3.1's result is 4.6's `angular-momentum-commutation`, reinforced |
| Figures | as the table in `exploration.md`: the reduced particle (6.1.1, still copy), the pyramid of spherical harmonics (6.2.1, still 3D), the 2p_x and 3p_x slice (6.2.2, still 2D), R, R² and the radial distribution with nodes sliding in (6.2.3 + 6.2.4 + 6.2.5 + 6.2.6, still with a morph), the vector model's cones (6.3.1, still 3D), the 1s detections building density and radial distribution (6.5.1 + 6.5.2 + 6.5.5, moving, 2D slab), the shell volume (6.5 note, unnumbered, still, locked view), the classical orbit and its fixed L (6.6.1, moving 3D), the p and d point clouds (6.6.2 + 6.6.4, still 3D), the Zeeman splitting (6.6.3, still), helium's three potential terms (6.7.1, still); the two answer images kept in their answers; tables kept |
| 3D | mathematical 3D, free orbit, no buttons: 6.2.1, 6.3.1, 6.6.1, 6.6.2 + 6.6.4; flat fallback where WebGL is missing |
| Extra simulations | offered, not built unless picked: the effective radial potential (6.1, recommended), the hydrogen ladder with its n² orbitals (6.4, offered), rotations that do not commute (6.3, not recommended) |
| Derivations | built: separating the hydrogen atom's equation (6.1); L̂_z in spherical coordinates, the commutator of L̂_x and L̂_y, Example 6.3.1 (6.3); Example 6.5.1 (6.5); p_x and p_y from m_l = ±1 (6.6); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`), including the radial distribution's extra 4π (6.2, 6.5 and their figures), Table 6.4.1's R₃₁ and R₃₂, the asymptotic exp(−r/na₀), the misdirected "Equation 6.1.14", the p_x, p_y note's normalization and signs, Figure 6.5.2's 74%, the e⁻/a₀³ cube, (6.7.7)'s double count, ∫|ψ|²dτ = n, the keys of 6.2.7, 6.2.8, 6.4.1, 6.4.2, 6.5.4 and 6.7.2 |
| Colour | categories in the chapter: energy, length, mass, charge, momentum, velocity, angle, wavefunction, probability density, operator, angular momentum; no new type, so `colours:default` was not rerun; the sign of ψ in 6.2.1 and 6.6.2 + 6.6.4 is two tones of the wavefunction hue; the 6.2.2 slice is a false-colour map on one scale with its legend (fact); referents: electrons 1 and 2 of 6.7.1 where the figure must tell them apart |
| Symbols | 29 new, l and m_l untyped without a macro (as J and m_J); θ still has no macro (Chapter 5's decision stands: builders write θ plain until the owning chapter stages `\ktheta`); φ is \varphi (`\kvarphi`) in 6.1, 6.3, 6.4, 6.5 and \phi (`phi`, no macro, a new meaning marked `redefines`) in 6.2 and 6.6, as the pages write them |
| Licence | every section CC BY-NC-SA 4.0; the intro tagged BY-NC-SA, the summary untagged, so the book's; uncredited originals ship in `originals` under the page's licence (Chapter 3's decision); Bader's scanned 6.5.1, 6.5.2, 6.5.5 not shipped (scans) |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: 25 printed questions in 26 boxes (6.4's last box is
  empty and dropped); 7 print 6.2's questions again (6.4.4–6.4.6 = 6.2.2–
  6.2.4; 6.5.1–6.5.4 = 6.2.5–6.2.8) and join 6.2's cards, so **18 cards**.
  **9 keyed**, available now (6.2.1, 6.2.4, 6.2.6, 6.2.7, 6.2.8, 6.2.9,
  6.4.1, 6.4.2, 6.7.2); **9 unkeyed**, available with AI solutions (7 explain
  or prove: 6.1.2, 6.1.3, 6.1.4, 6.2.2, 6.2.5, 6.4.3, 6.7.1; 2 compute:
  6.1.1, 6.2.3; none to sketch).
- **Worked examples**: 2 (6.3.1, 6.5.1), kept whole and built as
  derivations; not exercises.
- **Conceptual questions, problems, 6.E**: none printed; 6.E is empty.
- **Placement**: the seven repeats are one card each in 6.2, where the book
  first teaches what they test; the notes of 6.2, 6.4 and 6.5 say so. Every
  other question tests its own section. 6.1.2–6.1.4 are worked by 6.1's
  derivation and kept, their AI solutions citing it.
- **Proposed new**: 8, where the book leaves a concept untested: three in
  6.3 (the l = 2 cone; [L̂_y, L̂_z] = iħL̂_x; L̂_z on Y₁^{m}), one in 6.4 (E₁
  and E₂ with μ and with m_e), two in 6.5 (r²R₁₀² greatest at a₀; the
  probability within a₀, 0.323), two in 6.6 (Bohr's ħ against the 1s's zero;
  the nodal planes of p_y and d_xy).

**The choice** (carried over from Chapter 1): the 9 keyed cards kept as
printed, with corrections where a key is wrong; *AI solutions* for the 9
unkeyed; *AI exercises* for the 8 proposed. Every exercise is an item of the
Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked "orchestrator").

## Decisions taken by the orchestrator (2026-11-08)

- **6.5's citations of Figures 6.5.3, 6.5.4, 6.5.6**: the figures are not rebuilt; the citations link to 6.2's folded radial figure (a link to an item of another page), and a note says the book prints the same plots in both sections.
- **6.3.1's cones**: still. The cone is the set of equally possible vectors, not a motion; nothing precesses in an eigenstate.
- **6.6.2 + 6.6.4**: point clouds coloured by the sign of ψ, as in 3.9 (no isosurfaces).
- **Merged 6.2.8 / 6.5.4 card**: keyed with 6.2.8's answer, 6.5.4's addition named in the note.
- **Extra simulations**: the effective radial potential in 6.1 only; not the 6.4 ladder (1.8 has one) nor the 6.3 rotations.
- **Captions** have no fixed length.
