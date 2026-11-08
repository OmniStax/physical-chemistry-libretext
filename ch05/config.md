# Config: Physical Chemistry (LibreTexts), Chapter 5

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 5 The Harmonic Oscillator and the Rigid Rotor: landing page 11782, sections 5.1–5.9 (13413, 13414, 13415, 13419, 13418, 13420, 13421, 13422, 13423), the summary page 5.S (550562); 5.E (13424) is empty and not built |
| Front matter | the landing page's three bullets are the chapter's `intro/` page (root rule 21.1), one block with a header of the agent's, the bold lead phrases kept bold; no lead, objectives or exercises; the thumbnail credit is left out with the thumbnail (Chapter 3's precedent) |
| Summary page | 5.S is the chapter's `summary/` page (root rule 21.2), built like 3.S: no lead, objectives, exercises or coverage; its two `###` headers are its two blocks; its two numbered displays keep their numbers (5.S.1, 5.S.2), the rest unnumbered; its four figures as in the figures setting |
| Start point | 5.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; objectives pulled out (5.3, 5.5, 5.6, 5.7, 5.8, 5.9; 5.6's is a copy of 5.2's title and is dropped with a note); 5.8's "## Summary" to `summary_html` and its References kept as its closing block; its Contributors list is its credit; every other page's authors from its tags (5.1 Michael Fowler, 5.2 Eugene Lee, 5.3 Peter Kelly, 5.4–5.6 and 5.9 Zielinski et al., 5.7 Delmar Larsen); the summary names none |
| Headers | the book's `<h2>` headers kept; the agent's for every opening block and for 5.3 and 5.4, which have none (proposals in `exploration.md`), put through the humanizer by the builder |
| Boxed notes | kept verbatim as titled notes: Caution and "Two atoms or one?" (5.1, the second holding Figure 5.1.3), Warning and "Caution: Do Not Use Atomic Weights…" with Table 5.2.1 (5.2), "Limitations…" and "Morse Potentials…" with Figure 5.3.4 (5.3), "The Wavenumber as a Unit of Energy" and "Rules for IR Absorption" (5.5), "Alternative and More Common Formulation…" (5.6), "Generating Formula" and the untitled emphasis box (5.7), "Interpretation of Quantum Numbers…" (5.8), "Advanced: Non-Rigid Rotors" with Figure 5.9.5 (5.9); pulled quotes as the book prints them |
| Printed labels | kept as printed: the two boxes printed "Example 5.2.1"; the exercise boxes printed "Example 5.5.2" and "Example 5.9.6" stay worked examples (Chapter 3's decision); a note where a label misleads |
| Equation numbers | one per display, an `align` included, as the converter's `n=` gives them; citations that miss are corrected (list in `exploration.md`) |
| Repeated material | built once where the book first works it and cited after: Figure 5.9.5 is 5.1.1's GIF (see figures); 5.7.1 shows the same polynomials as 5.6.1 but is built for parity, a different point; Example 5.9.6's method is Example 5.9.1's |
| Figures | as the table in `exploration.md`: the pair about its center of mass (5.1.1, moving), spring and x(t) (5.1.2 + 5.1.4, moving), two-body vectors (5.1.3, still copy), energy and the classical density (5.1.5, moving), two bodies as one (5.2.1, moving), HCl in its anharmonic well (5.3.1 + 5.3.4, moving), Taylor truncations (5.3.2, still), the ladder (5.4.1, still), the transition integral (5.5.1, still), polynomials tamed by the Gaussian (5.6.1, still), ψ_v against the classical density (5.6.2 + 5.6.3, still), parity (5.7.1, still), the rotor's sphere (5.8.1 + 5.8.4, still 3D), the rotor's ladder (5.8.2, still), |Y|² (5.8.3, two views), rotations of a chair and a dumbbell (5.9.1 + 5.9.2, moving 3D), the spectrum from the ladder (5.9.3 + 5.9.4, still), the stretching rotor (5.9.5, moving); the summary's image, "1.5" and "1.6" faithful copies, "1.7" two views; Example 5.1.1's plot kept in its solution; tables kept |
| 3D | 5.8.1 + 5.8.4 (mathematical), 5.8.3's second view (mathematical, J ≤ 2 only: Chapter 6 owns the orbitals), 5.9.1 + 5.9.2 (physical, orbit above the seat plane), the summary's "1.7" second view (mathematical) |
| Extra simulations | offered, not built unless picked: even, odd and the integral (5.7, recommended, where the absent Figure 5.7.2 is cited), the HCl fundamental and overtones (5.5), the vector model (5.8, not recommended if the summary's "1.7" is built) |
| Derivations | built: the classical oscillator's motion and Example 5.1.3 (b) (5.1); the photon matches the vibration, the IR selection rules (5.5); the scaled equation, the tail at large x, the ground state beyond its limits (5.6); integrals over a symmetric interval (5.7); the rotor's kinetic energy, separating the rotor's equation, the cyclic boundary condition (5.8); the rotational line positions (5.9); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`), including Table 5.2.1's ³⁵Cl mass, the Morse note's two zero conventions, Example 5.5.2's ω, Table 5.5.1's frequency column, the note's α = 1/√β, the Hermite weight e^{−x²/2}, the garbled classical rotor algebra, Table 5.8.1's last Φ, Example 5.8.7's 10⁻²⁷ J, Exercise 5.8.7's key, Table 5.9.1's "6 → 6", the summary's μ and its "evenly spaced" caption |
| Colour | categories in the chapter: force, force constant (new), length, energy, mass, time, momentum, velocity, frequency, wavenumber, wavelength, wavefunction, probability density, operator, dipole moment (new), moment of inertia (new), angular momentum (new), angle (new); `colours:default` rerun after the five new types; facts and conventions: the HCl, N₂, CO and NaH atoms in `F.el`; referents: m₁ and m₂ of 5.1.1 and 5.2.1 where the figure must tell the atoms apart |
| Licence | every section CC BY-NC-SA 4.0 except 5.7, CC BY-SA 4.0 (its page tag); 5.3 is CC BY 4.0 at the source and shared BY-NC-SA; the intro tagged BY-NC-SA, the summary untagged, so the book's; uncredited originals ship in `originals` under the page's licence as Chapter 3 decided, except the summary's two scans (orchestrator) |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: 34 printed questions; 13 keyed, available now
  (5.1.1, 5.1.2, 5.1.3, 5.2.1, 5.4.1, 5.5.2, 5.6.8, 5.8.3, 5.8.4, 5.8.6,
  5.8.7, 5.9.3, 5.9.5); 21 unkeyed, available with AI solutions (12 explain
  or prove: 5.5.1, 5.6.1, 5.6.3, 5.6.4, 5.6.7, 5.8.1, 5.8.2, 5.8.5, 5.8.9,
  5.8.10, 5.9.1, 5.9.4; 5 compute: 5.5.3, 5.6.5, 5.6.6, 5.6.11, 5.8.8; 4
  sketch or plot: 5.6.2, 5.6.9, 5.6.10, 5.9.2).
- **Worked examples**: 12 (5.1.1, 5.1.2, 5.1.3, the two printed 5.2.1,
  5.5.1, 5.5.2, 5.7.1, 5.7.2, 5.8.7, 5.9.1, 5.9.6), kept whole; not
  exercises. 5.5.2 and 5.9.6 are exercise boxes printed "Example".
- **Conceptual questions, problems, 5.E**: none printed; 5.E is empty.
- **Placement**: Exercise 5.4.1 is held for 5.6 (it tests ψ_v and the
  correspondence principle) and Exercise 5.5.1 for 5.7 (it needs the
  Hermite recurrence); both pages' notes say so. Every other question tests
  its own section.
- **Proposed new**: 8, where the book leaves a concept untested: two in 5.3
  (the Morse force constant k = 2Dβ²; HCl's anharmonic 0→1 and 0→2 lines),
  two in 5.4 (E₀ and Q₀ for H₂ and D₂; the v = 1 turning point √3 Q₀), one in
  5.5 (Example 5.5.1's other five molecules, which the book leaves "as an
  exercise"), two in 5.7 (H₃ and H₄ from the recurrence; which transition
  integrals vanish by parity), one in 5.9 (the J = 0 → 1 line of ¹³C¹⁶O).

**The choice** (carried over from Chapter 1): the 13 keyed questions kept
as printed, with corrections where a key is wrong; *AI solutions* for the
21 unkeyed; *AI exercises* for the 8 proposed. Every exercise is an item of
the Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked "orchestrator").

## Decisions taken by the orchestrator (2026-11-08)

- **θ and B macros**: builders write θ and B (angle, rotational constant) plain for now; Chapter 5's pass stages `\ktheta` and `\kB` in the chapters that own the symbols and converts the text.
- **Summary page**: the scanned-looking ψ_v image and "1.5" are not shipped in `originals`; every summary figure is a faithful house-style copy, as in 3.S (no 2D/3D two-view version of "1.7").
- **Figure 5.7.2**: the page cites it but the book omits it; the even/odd-integral Sim carries the number 5.7.2, and a correction footnote says the book's figure is missing.
- **Figure 5.9.5**: a new stretching-rotor figure built on Table 5.9.1's numbers, not 5.1.1's GIF again.
- **Exercises worked by derivations** (5.6.1, 5.8.1, 5.8.2): kept, with AI solutions that cite the derivation. Moves: 5.4.1 to 5.6, 5.5.1 to 5.7.
- **HCl constants** for the 5.3.1 + 5.3.4 fold: literature values (Huber and Herzberg, via the NIST Chemistry WebBook) with the source named in the figure's notes; nothing else in the text depends on them.
- **5.5.1 drawing ψ_v before 5.6**: allowed, drawn as a shape without its formula; 5.8.3's 3D view stops at J ≤ 2.
- **3D**: 5.8.1 + 5.8.4 and 5.8.3's second view in mathematical 3D, 5.9.1 + 5.9.2 in physical 3D, with the bounds the exploration gives.
- **Captions** have no fixed length.
