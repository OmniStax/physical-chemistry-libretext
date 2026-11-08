# Config: Physical Chemistry (LibreTexts), Chapter 8

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 8 Multielectron Atoms: landing page 11785, sections 8.1–8.11 (13439–13449), the summary page 8.S (550559); 8.E (13438) is empty and not built |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (root rule 21.1), one block with a header of the agent's; no lead, objectives or exercises; the thumbnail credit is left out with the thumbnail (Chapter 3's precedent); its garbled first words corrected |
| Summary page | 8.S is the chapter's `summary/` page (root rule 21.2): one block of seven bullets, header of the agent's; no numbered display; corrections as listed (the term symbol's subscript, "the same wavefunction", Slater determinants called LCAO) |
| Start point | 8.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; objectives pulled out (all eleven sections, no lead-in sentences); 8.2's and 8.7's "## Summary" to `summary_html`; no Contributors list on any page: the credits are the tags' authors (8.1 Wikipedia; 8.2 frioux; 8.3–8.7, 8.9, 8.11 Theodore Zielinski; 8.8 Mattanjah de Vries; 8.10 Delmar Larsen; the summary Kyle Crabtree; the intro the book's) |
| Headers | the book's `<h2>` and `<h3>` headers kept; the agent's for every opening block and for 8.1, which has none (proposals in `exploration.md`), put through the humanizer by the builder; 8.9's bold "Orbital / Spin / Total Angular Momentum" kept bold in their block |
| Boxed notes | kept verbatim as titled notes: 8.2 The Hartree Unit of Energy; 8.3 Three Energies within the Hartree Approximation, the untitled emphasis box, Shielding and Effective Charges Concepts are Useful (with Figure 8.3.2); 8.4 the warning and Properties of Spin Eigenstates; 8.5 Bosons and femions; 8.6 the untitled emphasis box; 8.7 Exchange Energy and the advanced exchange-hole note (with Figure 8.7.2); 8.8 Note; 8.11 Splitting of the Sodium D Line; pulled quotes as the book prints them |
| Printed labels | kept as printed: Exercises 8.5.4, 8.5.5 (no 8.5.3), 8.6.3A, 8.6.3B, 8.10.3, 8.11.3–8.11.5; Figure 8.7.2 (no 8.7.1); the two figures printed 8.4.2, the three printed 8.8.1 and the two printed 8.11.1 handled as Chapter 7's 7.4.1 (the figures table in `exploration.md`); Example 8.10.1, printed without a solution, is a question (Chapter 3's decision); Example 8.7.1, a stub, kept as printed |
| Equation numbers | one per display, an `align` included, as the converter's `n=` gives them (77 numbered of 157); the labels lag the numbers on every page: read numbers from the draft; citations that miss are corrected (list in `exploration.md`), 8.2's "Equation 9-28" linking the unnumbered E¹ display |
| Repeated material | built once where the book first works it and cited after: the first Figure 8.8.1 is 6.3.1's vector model (citations link there); the second Figure 8.8.1 is 8.9.1's file, built in 8.9 (8.8's citation links there); Hund's rules are introduced in 8.8, where the book first states them, and reinforced in 8.10, where it names them; 8.3's Hartree terms are reinforced, not rebuilt, in 8.7 |
| Figures | as the table in `exploration.md`: the SCF loop run live for helium (8.3.1, moving), orbital energies against Z (8.3.2, faithful copy), the spin-resonance spectrometer and its two levels (8.4.1 + 8.4.4, moving, locked view), the Zeeman splitting (8.4.2, still), Stern–Gerlach (second 8.4.2, moving, locked view, unnumbered), the spin cartoon (8.4.3, faithful copy), beryllium's boxes (8.5.1, faithful copy), the exchange of two electrons (8.5 Sim, still), helium's stick diagrams beside their determinants (8.6.1 + 8.6.2, still), the exchange hole (8.7.2, still), two spins coupling (third 8.8.1 with the two sketches, still 3D), the microstate chart filling and peeling (Example 8.8.12, moving), L and S coupling to J (8.9.1 + 8.9.2, still 3D), Hund's first rule (8.10.1, faithful copy), hydrogen's Hα built from five transitions (8.11.1 + 8.11.2, still), the current loop (second 8.11.1, faithful copy, unnumbered), sodium's doublets (Example 8.11.1's image, still); tables kept |
| 3D | two mathematical scenes, free orbit, no buttons, not precessing (6.3.1's decision): the spin pair (8.8) and L–S coupling (8.9); the two experiments of 8.4 are locked views of the book's perspective |
| Extra simulations | offered, not built unless picked: the determinant at work (8.6, recommended), carbon's levels from configuration to J (8.10, recommended), Eckart's two-parameter function (8.2, not recommended) |
| Derivations | built: the spin quantum number and the electron's g-factor (8.4); the exchange phase (8.5); Example 8.6.1 (8.6); the Hartree–Fock orbital energy and Example 8.7.2 (8.7); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`), including 8.2's Ĥ⁰ sign, E⁰ and E_exp signs; Hartree's and Fock's dates; 8.4's S_{z,α}, ⟨α\|β⟩ and the g-factor's arithmetic (2.0005 from the book's numbers); 8.5's swapped labels and conjugates; 8.6's normalizations and Exercise 8.6.2's expansion; 8.7's 1/√N, exchange integrand and Example 8.7.2's sums; 8.8's vector sums, nitrogen's S, "microstate" for level, Table 8.8.1 and the two wrong charts of Example 8.8.12; 8.11's singlet, the sodium example's reasoning and the plate's figure number |
| Colour | categories in the chapter: energy, operator, wavefunction, length, mass, charge, frequency, wavelength, angle, probability density, angular momentum, and two new types, **magnetic field** (B, B_z) and **magnetic moment** (μ_m, μ_s); `colours:default` rerun after adding them; constants (μ_B, γ_e, γ_s, g, α, k_e), every quantum number (s, m_s, L, S, J, M_l, M_s, M, j, m_j) and the parameters α, β, γ untyped and in ink; facts: Hα at 656.3 nm and the six sodium lines in their real colours; referents: electrons 1 and 2 of the 8.5 Sim and the two spins of the 8.8 fold, where the figure must tell them apart |
| Symbols | 79 new, 55 typed with macros, 24 untyped; the spin functions α, β as `alpha_s`, `beta_s` beside the variational `alpha`, `beta`; L and J reuse the keys `L` and `J`; ε_i (8.7) and Ĥ⁰ (8.7, the one-electron operator) marked `redefines` |
| Licence | 8.1 CC BY-SA 4.0 (its page tag; shared BY-SA); 8.2 and 8.8 CC BY 4.0 at the source, shared BY-NC-SA; every other section CC BY-NC-SA 4.0; the intro tagged BY, the summary untagged, so the book's; uncredited originals ship in `originals` under the page's licence (Chapter 3's decision); the two hand-drawn sketches of 8.8 and the photographic plate of 8.11 are scans and do not ship |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: 15 printed boxes, **15 cards** (8.10.3's six atoms are
  one card). **5 keyed**, available now (8.5.5, 8.6.1, 8.6.2, 8.6.3A, 8.10.3;
  8.6.2's expansion and 8.6.3A's notation corrected under their cards).
  **10 unkeyed**, available with AI solutions (6 explain or prove: 8.5.1, 8.5.2,
  8.5.4, 8.6.3B, 8.11.3, 8.11.5; 4 compute: 8.4.1, 8.9.1, 8.9.2, 8.11.4; 0
  sketch).
- **Example boxes without a solution**: 1, Example 8.10.1 (rank six terms by
  Hund's rules), a question: **1 unkeyed card**, available with an AI solution
  (compute).
- **Worked examples**: 21 (8.1.1; 8.6.1–8.6.3; 8.7.1, 8.7.2; 8.8.1–8.8.12;
  8.10.2, 8.10.3; 8.11.1), kept whole; 8.6.1 and 8.7.2 built as derivations;
  not exercises.
- **Conceptual questions, problems, 8.E**: none printed; 8.E is empty.
- **Placement**: every question tests its own section; nothing held or moved.
  8.4.1 and 8.5.2 retrace derivations of their own sections; their AI solutions
  cite them.
- **In all**: 16 cards, 5 keyed, 11 unkeyed (6 explain or prove, 5 compute).
- **Proposed new**: 9, where the book leaves a concept untested: one in 8.1
  (helium's energy, the bohr and the atomic unit of velocity in SI and eV), two
  in 8.2 (E⁰ + E¹ for Li⁺ against experiment; the relative deviation of the
  Hylleraas energy), one in 8.3 (what the SCF loop tests and why one pass is not
  enough), one in 8.4 (the Zeeman splitting of 2p at 1 T in cm⁻¹), two in 8.7
  (Koopmans' estimate of neon's ionization energy from a given orbital energy;
  the share of helium's energy Hartree–Fock misses, from Table 8.7.1), two in 8.8
  (the levels of p² and its 15 microstates; the 20 microstates and three terms of
  p³).

**The choice** (carried over from Chapter 1): the 5 keyed cards kept as
printed, with corrections where a key is wrong or short; *AI solutions* for the
11 unkeyed (8.6.3B's open question answered as a critique, not as a solved
notation); *AI exercises* for the 9 proposed. Every exercise is an item of the
Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked "orchestrator").

## Decisions taken by the orchestrator (2026-11-08)

- **Three figures printed "8.8.1"**: as the exploration proposes. The first cites and links 6.3.1's vector model, the second is built once in 8.9, and the third is the fold that keeps the number, with a footnote on the duplicates.
- **Example 8.8.12's 13 charts**: the microstate Sim replaces them. Each printed chart is a state the Sim reaches; the originals are listed, and the two wrong charts get correction footnotes.
- **Hα line strengths**: relative strengths from the NIST Atomic Spectra Database (Einstein A coefficients), named in the figure's notes.
- **Exchange hole**: the uniform-electron-gas form (Slater 1951), named in the figure's notes.
- **Hund's rules**: introduced in 8.8, reinforced in 8.10.
- **Extra simulations**: the Slater determinant at work (8.6) and carbon's levels from configuration to J (8.10); not Eckart's trial function.
- **AI solutions** handle the book's arithmetic: Exercise 8.4.1's numbers give g = 2.0005, and Example 8.8.8's S = 1 for nitrogen is impossible. Both get corrections.
- **Captions** have no fixed length.
