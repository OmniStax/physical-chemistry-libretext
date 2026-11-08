# Config: Physical Chemistry (LibreTexts), Chapter 3

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 3 The Schrödinger Equation and a Particle in a Box: landing page 11780, sections 3.1–3.9 (13391–13397, 13399, 13401), the summary page 3.S (550563); 3.E (13402) is empty and not built |
| Front matter | the landing page's one paragraph (the particle-in-a-box model) is the chapter's `intro/` page, with no lead, objectives or exercises; its thumbnail credit is left out, since the page does not show the thumbnail |
| Summary page | 3.S is the chapter's `summary/` page (root rule 21.2), built like a section with no lead, objectives, exercises or coverage; its two `###` headers are its blocks; its three hand-numbered figures ("1.1"–"1.3", no credit) become unnumbered faithful copies with corrections; its displays stay unnumbered |
| Start point | 3.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; objectives pulled out; no section closes on a "Summary"; no page prints a Contributors list, so the authors come from the page tags (Fowler 3.1; Blinder 3.2, 3.5; Hanson, Harvey, Sweeney and Zielinski 3.3, 3.4, 3.6–3.9; Crabtree the summary); 3.9's References kept as its closing block |
| Headers | the book's `<h2>` headers kept; the agent's where a section opens on prose or has none (3.1, 3.2, 3.3, 3.4, 3.5, 3.7, 3.8, 3.9; proposals in `exploration.md`), put through the humanizer by the builder |
| Boxed notes | kept verbatim as titled notes; the definition box "The Commutator" (3.2); the pulled quotes (3.2, 3.3, 3.4, 3.5, 3.7) kept as the book prints them |
| Mislabelled boxes | the exercise box printed "Example 3.6.1" is a worked example, kept in the text under its printed label; the example box printed "Exercise 3.7.2 · Particle in Box" is kept as Example 3.7.2, which the prose cites, with a correction note on its title |
| Equation numbers | one per display, an `align` included (the user's choice of 2026-11-08), as the converter's `n=` gives them; 3.9's inline separated equations take none; hand-typed citations that miss are corrected |
| Figures | as the table in `exploration.md`: the box and its ladder (3.5.1 + 3.5.2 + 3.5.3, still), the turning phase and the sloshing superposition (3.5.4, moving), orthogonality as cancelling areas (3.5.5, still), probability as an area (3.6.1 + 3.6.2 + 3.6.3, still), ⟨x⟩ as a balance point (3.7.1, still), two momentum waves standing (3.7.2, moving), the 3D box (3.9.1, mathematical 3D), a new Sim of the levels splitting and merging as the box becomes a cube (Table 3.9.1 kept as a table); every book figure replaced |
| 3D | the 3D box only: mathematical 3D, a point cloud of \|ψ\|² coloured by the sign of ψ with faint nodal planes; azimuth free, elevation −80° to +80°, opening at the book's viewpoint; no spin, zoom or snap; the three central slices as flat heatmaps without WebGL; everything else flat |
| Extra simulations | offered, not built unless picked: detections building \|ψₙ\|² (3.4, recommended), an operator bench (3.3, recommended), the free-particle wave (3.1), uncertainty from a wavefunction (3.8) |
| Derivations | built: the free-particle Schrödinger equation and the time-independent equation (3.1), the real and imaginary parts of Ψ (3.1 note), the Hamiltonian is Hermitian (3.2), the particle in a box (Eₙ and ψₙ) and orthogonality (3.5), normalization kept in time and Example 3.6.2 (3.6), Examples 3.7.2 and 3.7.3 (3.7), Example 3.8.1 (3.8), the 3D box (3.9); the 3.5 note's repeat of 3.1's phase expansion built or cited (orchestrator); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`), including the wrong keys of Exercises 3.3.1 and 3.7.5 and the slips of Examples 3.3.1 and 3.8.1 |
| Colour | categories in the chapter: wavefunction, probability density and operator (new), energy, momentum, length, mass, time, wavelength, frequency, wavenumber, velocity; facts: the 3D box's slice heatmaps (one diverging scale with its legend, fallback only); referents: ψ₁–ψ₄ of 3.5.5, the two momentum waves of 3.7.2 |
| Licence | every section CC BY-NC-SA 4.0; the intro and summary untagged, so the book's; the originals of 3.7.1 and the summary's figures carry no credit and are listed in `originals` only if the orchestrator accepts them |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: 15 printed as questions (13 "Exercise" boxes and the
  two solution-less "Example" boxes of 3.4), 14 distinct (Example 3.4.1 is
  the second Exercise 3.6.1); 8 keyed, available now (3.2.1, 3.3.1,
  3.4.1 by 3.6's printed Solution, 3.5.1, 3.6.2, 3.7.2, 3.7.5, 3.9.1); 6
  unkeyed, available with AI solutions (3 explain or prove: 3.4.2, 3.7.3,
  3.7.6; 3 compute: 3.7.4, 3.7.7, 3.8.1).
- **Worked examples**: 11 (including the two mislabelled boxes), kept whole;
  not exercises.
- **Conceptual questions, problems, 3.E**: none printed.
- **Placement**: Exercises 3.7.2, 3.7.3 and 3.7.7 test what 3.5 introduces
  and are held for 3.5; the second Exercise 3.6.1 is one card with Example
  3.4.1 in 3.4; both pages' notes say so (root rule 12).
- **Proposed new**: 6, two each where the book leaves a concept untested:
  the Schrödinger equations (3.1), the commutator and Hermitian operators
  (3.2), the box's energies as numbers (3.5).

**The choice** (carried over from Chapter 1): the 8 keyed questions kept as
printed, with corrections where a key is wrong; *AI solutions* for the 6
unkeyed; *AI exercises* for the 6 proposed. Every exercise is an item of the
Exercises document (`place: end`).

## Decisions taken by the orchestrator (2026-11-08)

The user asked for Chapter 3 onward to be built without stops; these settle
the questions the exploration left open.

- **Colours**: the reassignment after the three new types stands for the whole book.
- **Placement**: Exercises 3.7.2, 3.7.3 and 3.7.7 go to 3.5 (rule 12); Example
  3.4.1 and the second Exercise 3.6.1 are one card in 3.4, keyed by 3.6's
  printed Solution. Both pages' notes say so.
- **Mislabelled boxes**: the printed labels stay as the book prints them
  (book verbatim); the box printed "Example 3.6.1" stays an example, and the
  box printed "Exercise 3.7.2" stays an exercise. Where the label misleads,
  a correction footnote says what the box is.
- **3.9**: two figures, the 3D point cloud of |ψ|² (as the exploration
  describes; point cloud, not isosurface) and the separate still Sim of the
  levels splitting as the box is stretched.
- **3.5's phase expansion note**: cite 3.1's derivation, never draw it twice.
- **Extra simulations**: build the detections Sim in 3.4, the operator bench in
  3.3 and the free-particle wave in 3.1 (it moves); not the uncertainty one in 3.8.
- **Uncredited originals** (3.7.1 and the summary's three): shipped in
  `originals` under the page's licence, as the book publishes them; `notes`
  says the book gives no credit.
- **Captions** have no fixed length (root rules, the caption paragraph).
