# Config: Physical Chemistry (LibreTexts), Chapter 15

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 15 Lasers, Laser Spectroscopy, and Photochemistry: landing page 11810, sections 15.1–15.7 (13647–13653) all built; summary 15.S (550572); 15.E (13646) is empty and not built |
| Stray and empty pages | none: every section holds its own text (no Zielinski passage, no "under development") |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (21.1), one block with a header of the agent's; no lead, objectives, exercises or concepts; the thumbnail credit is left out with the thumbnail (Chapter 3's precedent) |
| Summary page | 15.S is the chapter's `summary/` page (21.2): its paragraph, then its "Learning Objectives" box (with "Skill goals") kept verbatim as a block (12.S–14.S precedent); one footnote that spectral and temporal resolution, cw lasers for high resolution, pulsed lasers for photodissociation, quantum yield, duty cycle and average and peak power are not taught on this chapter's pages |
| Start point | 15.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; no section has objectives or a "## Summary"; 15.1's and 15.4's uncited "References" go to `notes`; 15.7's numbered references, cited in its text, kept as its closing block (9.14, 14.7 precedent); credits: 15.1 Schaller, Wong, Neils; 15.2 Mitofsky, Weideman, Wikipedia, Neils; 15.3, 15.4, 15.6 Newman, Maleki, Neils; 15.7 Schaertel (Neils for the references); 15.5 the book's; the summary Crabtree |
| Headers | the book's `<h2>`/`<h3>` kept (15.2's third with its subscripts A₂₁, B₁₂, B₂₁); the agent's for the intro, 15.1's opening, 15.4's opening, 15.5's opening list and 15.6's three blocks (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | 15.1's "Note" (billiards, Barry Bonds) kept as a titled note |
| Embeds | none |
| Printed labels | kept as printed; 15.2's bolded letters of the acronym are one term, "laser" |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (15.2.1)–(15.2.14), (15.3.1), (15.4.1)–(15.4.3); the `\nonumber` displays of 15.1, 15.2, 15.3, 15.4 and 15.6 stay unnumbered; 15.2's four rate laws printed as lone inline maths stay as printed |
| Repeated material | built once where the book first works it and cited after: Pauli (8.5), multiplicity and Hund's rule (8.8, 8.10), paramagnetism (9.10), ΔS = 0 (8.11), vibronic transitions and 0–0 (13.6), Franck–Condon and the displaced-oscillator overlaps (13.7, `sim-vertical`), the Boltzmann distribution (13.2), Planck's law (1.2), ΔE = hν (13.1), degeneracy (3.9), standing waves (2.1); 15.5.1 is 15.4.1's right panel and 15.6.2 is 15.5.2 (the same files): each shown once and cited with a footnote (1.2.1 precedent) |
| Figures | as the table in `exploration.md`: the Jablonski ladder with molecules firing through it (15.1.2 + 15.1.3 folded, moving); the potential-curve routes (15.1.4 + 15.1.5 + 15.1.8 + 15.1.10 + 15.1.11 folded, moving); the mirror spectra against the excited state's displacement (15.1.6, still); the collision handing over a quantum (15.1.7, moving); Einstein's three processes (15.2.1, moving); two-level atoms pumped toward half and no further (15.3.1, moving); the three-level ladder crossing into inversion (15.4.2 + 15.4.3 + 15.4.4 folded, moving); photons building a beam in the cavity (15.5.4, moving, locked perspective view); the tunable dye laser (15.5.5, still); helium feeding neon (15.6.1, moving); faithful copies of 15.1.1 and 15.1.9; kept: 15.4.1 (photographs), 15.5.2 (the He–Ne tube drawing), 15.5.3 (the dye laser photograph); not shipped: 15.1.2's GIF (no licence), 15.6.3 (copyright) |
| 3D | none; 15.5.4's cavity is a locked view in a 2D figure (rule 28.2) |
| Model data | the book's: Table 15.1.1's timescales, the He–Ne wavelengths and its figure's 10⁴ cm⁻¹ scale, rhodamine 6G's 560–635 nm, Table 15.6.1's A values; no literature values in any figure |
| Extra simulations | two offered: a four-level choice in the three-level figure (recommended), thermal populations of two levels (not recommended) |
| Derivations | built: "the Einstein relations" (15.2, score 6), "why two levels never invert" (15.3, hidden, score 8), "inversion between levels 3 and 2" (15.4, printed, 4 moves), "the ruby's inversion" (15.4, hidden, score 7); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 15.2's "140 eV" (1/40 eV) and "number of atoms in that state" (its energy), 15.1's diamagnetism wording and Figure 15.1.6's equal-bond-length caption, 15.3's B₂₁ = B₁₂ without g₁ = g₂, 15.4's unconditional "N₂ is greater than N₁" and its "metastable" lower level, 15.5's diode lasers "no stimulated emission", the dye laser's tuning, Tables 15.5.1 (YAG, YLF, "Lifetime") and 15.5.2 (K⁺ for Kr⁺); those resting on memory are checked by the builder first |
| Colour | no new type; energy (E₁, E₂, ΔE), frequency (ν₁₂ … ν₂₃), energy-density (ρ_ν, ρ), time, temperature, wavelength; the Einstein coefficients, populations, degeneracies and quantum numbers untyped and in ink; facts: photons in their real colour (`spectrum`), the He–Ne red; conventions: `F.el` for He and Ne in the He–Ne figure |
| Symbols | 21 new (7 with macros), 56 variables rows (see `chapter.json`); 52 concepts, 88 edges; keys of earlier chapters reused where the quantity is the same |
| Licence | 15.2 shared **CC BY-SA 4.0** (Wikipedia's text, 14.7's decision); 15.6 and the intro tagged CC BY, shared BY-NC-SA with the rest; Kaya's figures and 15.5.3 under their own licences with credit; the summary untagged (the book's) |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises** (15.1.1, 15.1.2, molar energies from λ and from ν̃): 2 printed;
  **2 keyed**, available now (keys checked by computation: 15.1.1 exact, 15.1.2 within
  0.1 %, no correction); **0 unkeyed**. Both stay in 15.1, kind `exercise`.
- **Worked examples**: none.
- **Problem or question lists**: none.
- **15.E**: empty; nothing routed.
- **In all**: 2 cards, 2 keyed, 0 unkeyed.
- **Proposed new: 12**: 15.1 two, 15.2 two, 15.3 one, 15.4 two, 15.5 two, 15.6 two,
  15.7 one (subjects in `exploration.md`).

**The choice** (carried over from Chapter 1): book exercises kept with their keys;
*AI solutions* for any the orchestrator rules unkeyed (none); *AI exercises* for the 12
proposed. Every exercise is an item of the Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked *orchestrator*).

## Decisions taken by the orchestrator (2026-11-08)

- **Hot-linked images the network blocks** (15.1.3, 15.4.1's left panel): shipped without them. The Sims replace 15.1.3; 15.4.1 keeps its other panel. `notes` names the source URLs.
- **15.6.3** (marked Copyright): no figure. A footnote where the text points at it says the book's figure isn't reproduced and gives its source.
- **Hidden derivations**: built, but each ends on what the book states. The ruby derivation stops before the condition that the pump must outpace A₂₁, which the book never prints.
- **15.1.6**: opens on the drawn spectra, with a correction footnote on the caption's "equal bond lengths".
- **Einstein coefficients**: untyped for now. A `rate-constant` type waits for Chapter 28.
- **Extra simulations**: the four-level choice in the three-level figure; not thermal two-level populations.
- **15.2** (contains Wikipedia text) is shared as CC BY-SA, under the 14.7 decision.
- **Captions** have no fixed length.
