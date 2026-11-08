# Plan: 15.1 Electronically Excited Molecules can Relax by a Number of Processes (LibreTexts 13647)

Source: `source.md`; draft from `python3 tools/md2html.py 15.1` (deleted after the build).
Status: built 2026-11-08 in the Chapter 15 job, without a review stop (config: the chapter in one go).

No objectives, no summary; eleven figures (15.1.1–15.1.11), one table, two unnumbered displays, one note, two
keyed exercise boxes. Licence CC BY-NC-SA 4.0; credits Schaller, Wong, Neils; the uncited References go to `notes`.

## Sub-concepts (page headers)

1. `opening` **Two ways to give light back** (ours, the exploration's header after both humanizer passes): fluorescence against phosphorescence. Introduces `fluorescence`, `phosphorescence`.
2. `spin-multiplicity` **Spin Multiplicity - Singlet and Triplet Excited States** (book's): Pauli, diamagnetism, singlet and triplet, 2S + 1, Figure 15.1.1, forbidden S–T. Introduces `diamagnetism`, `excited-singlet-and-triplet`, `spin-forbidden-transitions`; uses `pauli-exclusion-principle`, `spin-multiplicity`, `total-spin-quantum-number`, `spin-magnetic-quantum-number`, `paramagnetism`.
3. `jablonski-diagrams` **Jablonski Diagrams** (book's): the diagram's conventions, Figure 15.1.2 + 15.1.3. Introduces `jablonski-diagram`.
4. `deactivation-processes` **Deactivation Processes** (book's, with its h3s Relaxation and Fluorescence, Internal Conversion, Intersystem Crossing, Phosphorescence…, External Conversion): Figures 15.1.4–15.1.11, the note, the two exercise boxes (moved to the end). Introduces `deactivation-pathways`, `vibrational-relaxation`, `fluorescence-red-shift`, `absorption-fluorescence-spectra`, `radiationless-transition`, `internal-conversion`, `intersystem-crossing`, `external-conversion`; uses `franck-condon-principle`, `vibronic-transition`, `hunds-rules`.
5. `rates` **Absorption and Emission Rates** (book's): Table 15.1.1. Introduces `relaxation-timescales`.

## Figures

- `fig-15-1-1` · Figure 15.1.1 · excited-singlet-and-triplet · faithful copy (archetype 7), kind `figure`, still: the three level pairs with symbolic spin arrows in ink · standardisation only · arrows: symbolic · 2D. Original shipped (public domain, width 288), the book's caption.
- `sim-jablonski` · Figure 15.1.2 + 15.1.3 · jablonski-diagram, deactivation-pathways, relaxation-timescales, fluorescence, phosphorescence, internal-conversion, intersystem-crossing · flow by animation, variation by choice and slider · arrows: kinematic (the molecule's state dropping, photons in and out) · moving: one molecule per loop, each step played in turn while a log clock (10⁻¹⁵ to 10² s) runs at Table 15.1.1's typical times · choice where the light lands (S₁ violet 399 nm, the book's 15.1.3; S₂ 317 nm and S₃ 266 nm ultraviolet), slider S₁ → T₁ share 0–100 % (untyped), default 25 % · headline: the step now playing, with its time and wavelengths · tally of photons out by kind beside the diagram, molecule j crossing when floor((j+1)p) > floor(jp) so the tally keeps the share exactly · 2D. Straight arrows in the photon's real colour (ultraviolet muted), wavy ones in ink. No originals: 15.1.2 has no licence and 15.1.3 is hot-linked and unreachable (`withheld`).
- `sim-relaxation` · Figure 15.1.4 + 15.1.5 + 15.1.8 + 15.1.10 + 15.1.11 · vibrational-relaxation, fluorescence-red-shift, internal-conversion, intersystem-crossing, radiationless-transition · flow by animation · arrows: kinematic (the relaxation steps, the vertical excitation and emission) · moving: the state climbs straight up, steps down the ladder as heat, leaves by the chosen route · choice fluorescence / internal conversion / intersystem crossing; slider bond shift 0–3 (dimensionless, untyped), special at 0 (lands on v′ = 0 and re-emits the same wavelength, the text's case), default 2 · headline: the step and its energies · graph alone (S₀, S₁ and, for the triplet route, T₁ dashed, harmonic, 0.20 eV quanta; S₁ v′ = 0 level with S₀ v = 13 and T₁ v = 1) · 2D. Opens on 3.00 eV (413 nm) in, 2.20 eV (564 nm) out, 0.80 eV heat. Five originals (page licence).
- `sim-mirror` · Figure 15.1.6 · absorption-fluorescence-spectra, fluorescence-red-shift · variation by slider · arrows: symbolic (the transitions) · still: the shift is variation · slider bond shift 0–3 (untyped), special at 0, default 2.5 (S ≈ 3.1, the book's progressions peaking near v = 3) · headline: the strongest lines either side of 0 → 0 · ladders above, both spectra below on one wavelength axis (absorption up, fluorescence down, lines in their real colours; intensities e^(−S)S^v/v!, 13.7's overlaps) · 2D. The caption's "equal bond length" corrected through the row.
- `sim-collision` · Figure 15.1.7 · vibrational-relaxation · flow by animation · arrows: kinematic (a quantum handed across) · moving: four fresh partners collide in turn, 1.4 s each · no controls (none changes the idea) · headline: the collision number and levels · the two wells above, the molecules meeting below, the excited molecule and partner in `F.cat` colours · 2D.
- `fig-15-1-9` · Figure 15.1.9 · hunds-rules (8.8) · faithful copy, kind `figure`, still: nitrogen's 2s and 2p boxes, quartet and doublet · standardisation only · 2D. Original shipped (width 431).
- Table 15.1.1 kept as a `div.book-table`; its typical times drive `sim-jablonski`'s clock.

Extra simulations: none.

## Exercises

- e1, e2 (Exercises 15.1.1, 15.1.2), keyed from the book (665.0, 251.5, 185.6; 37.14, 20.27, 11.52 kJ/mol), kind `exercise`, at the end; test `photon` (and `wavenumber`).
- ai1 (choice, AI): the most likely path from a high level of S₂ for a molecule that fluoresces, by Table 15.1.1's timescales. Tests `relaxation-timescales`, `deactivation-pathways`, `fluorescence`.
- ai2 (open, AI): why fluorescence is red-shifted, and why cold or viscous solvent brightens it. Tests `fluorescence-red-shift`, `external-conversion`.

## Derivations

None: the two multiplicity sums are substitutions (exploration, stays).

## Corrections

Footnotes: `c-magnetic` (diamagnets are repelled, radicals attracted, by a magnetic field only); `c-ms` (the ±½ is m_s); `c-factor` (10⁴ is a factor, no unit); `c-previous-page` (the Franck-Condon principle is 13.7, linked); `c-equal-bond` (equal bond lengths leave only 0 → 0); `c-mirror-caption` (the same, on Figure 15.1.6's caption, through the row). The source's `(\Delta S=0\)` is set as maths, $\Delta S=0$, without a note.

## Wanted at chapter level

- variables row, 15.1: `{"sym": "E", "type": "energy", "meaning": "the energy of a photon absorbed or emitted, or of a vibrational level", "unit": "eV", "section": "15.1"}` (every readout of the section writes `\kE`).
- variables row, 15.1: `{"sym": "lambda", "type": "wavelength", "meaning": "the wavelength of a photon absorbed or emitted", "unit": "nm", "section": "15.1"}` (`sim-jablonski`, `sim-relaxation` write `\klambda`).
- variables row, 15.1: `{"sym": "nu", "type": "frequency", "meaning": "the frequency of a molecular vibration", "unit": "Hz", "section": "15.1"}` (`sim-collision` writes `h\knu`).
