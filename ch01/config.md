# Config: Physical Chemistry (LibreTexts), Chapter 1

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user accepted every proposal and asked for the
chapter to be built in one go, so the loop runs without per-section stops. Each line is a
setting and its proposed value; the exercise lines end on the choice the
user has to make.

| Setting | Proposed value |
|---|---|
| Chapter | 1 The Dawn of the Quantum Theory: landing page 11778 and sections 1.1–1.9 (13381–13389); 1.E (13390) is empty and not built |
| Front matter | the landing page's Dirac epigraph is the chapter's `intro/` page, with no lead, objectives or exercises; the book has no front-matter page worth building (TitlePage, InfoPage and Licensing are the site's) |
| Start point | 1.1 |
| Unit of work | one section = one page, never folded |
| Loop | one section at a time: plan → stop for review → build → check → stop for feedback (root rules 2 and 5), unless you say to run the chapter in one go |
| Prose | verbatim; objectives (with their lead-in sentence), the "Summary" of 1.2 and 1.3 (to `summary_html`) and the Contributors and Attributions list are pulled out of the text |
| Headers | the book's `<h2>` headers kept; 1.6 has none and gets the agent's (root rule 3) |
| Boxed notes | kept verbatim as titled notes; "Humor: Heisenberg and the Police" (1.9) kept as the book prints it |
| Embeds | the YouTube video of 1.9 dropped and named in `notes` |
| Figures | as the table in `exploration.md`: the blackbody spectra (1.1.3 + 1.1.4 + 1.1.5 + 1.2.1 + 1.2.2 across 1.1 and 1.2), the photoelectric bench (1.3.1–1.3.4), the three spectra (1.4.1), the hydrogen ladder (1.4.4 + 1.8.4 + 1.8.6 + 1.8.7), the double slit (1.7.1–1.7.3), the death spiral (1.8.1), the Coulomb potentials (1.8.2), the Bohr atom (1.8.3), standing waves on a circle (1.8.5), electrons arriving one by one (1.9.1) and the wave packet (1.9.2) become interactive; sketches that only show a setup are faithful copies; photographs kept where the text points at them (1.1.1, 1.4.3, 1.7.4, Planck's portrait), the Max Planck Society logo dropped |
| Derivations | three: de Broglie's wavelength (1.6), the Bohr radius and energies (1.8), the Rydberg equation from the Bohr model (1.8) |
| Corrections | the book's slips get root rule 13's footnotes, the book's words kept (e.g. the unit of e in Exercise 1.8.1 printed as C²) |
| 3D | none proposed; the chapter's pictures are graphs, benches and ladders, flat |
| Colour | facts: the spectrum (1.1, 1.2, 1.4, 1.5, 1.8), hot bodies in their colour; conventions: none; categories proposed for the chapter: energy, temperature, wavelength, frequency, wavenumber, momentum, length, potential (see `COLOR.md`, to be written once the types are agreed) |
| Licence | 1.1 and 1.9 CC BY 4.0 at the source, shared as CC BY-NC-SA 4.0 like the rest of the chapter |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: 12 printed; 11 keyed, available now; 1 unkeyed,
  available with an AI solution (1.2.1, a units argument: explain or prove).
- **Conceptual Questions (1.3)**: 5 printed; 0 keyed; 5 unkeyed, available
  with AI solutions (5 explain).
- **Proposed new**: 6, two each on the Balmer formula (1.4), diffraction of
  matter waves (1.7) and Planck's law (1.2), which the book leaves
  without a computational exercise.

**The choice**: *AI solutions* for the unkeyed exercise and the five
Conceptual Questions, and *AI exercises* for the six proposed (two each in
1.2, 1.4 and 1.7).

Every exercise is an item of the Exercises document (`place: end`).
