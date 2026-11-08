# Exploration: Chapter 1, The Dawn of the Quantum Theory

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 1`),
every page read in full. The landing page (11778) is an epigraph from Dirac
and a thumbnail credit; there is no chapter summary page, and 1.E (13390)
is empty.

## Pages

| Page | LibreTexts id | Licence | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Eq | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11778 | BY-NC-SA 4.0 | epigraph only | | | | | | | |
| 1.1 Blackbody Radiation Cannot Be Explained Classically | 13381 | BY | Stefan-Boltzmann Law; Wien's Displacement Law; Rayleigh-Jeans Law | 4 | 1 | 5 | 1 | 0 | 16 | 2 |
| 1.2 Quantum Hypothesis Used for Blackbody Radiation Law | 13382 | BY-NC-SA 4.0 | Quantizing Electrons in the Radiator; Summary | 0 | 1 | 2 | 3 | 0 | 9 | 2 |
| 1.3 Photoelectric Effect Explained with Quantum Hypothesis | 13383 | BY-NC-SA 4.0 | Lenard's Results; Millikan's Results; Einstein's Quantum Picture; The Workfunction; Summary; Conceptual Questions | 1 | 2 | 4 | 0 | 1 | 10 | 2 |
| 1.4 The Hydrogen Atomic Spectrum | 13384 | BY-NC-SA 4.0 | Atomic Line Spectra; The Balmer Series of Hydrogen | 1 | 0 | 4 | 0 | 2 | 8 | 2 |
| 1.5 The Rydberg Formula and the Hydrogen Atomic Spectrum | 13385 | BY-NC-SA 4.0 | Other Series | 1 | 1 | 0 | 0 | 1 | 6 | 1 |
| 1.6 Matter Has Wavelike Properties | 13386 | BY-NC-SA 4.0 | none | 1 | 2 | 0 | 0 | 0 | 13 | 1 |
| 1.7 de Broglie Waves can be Experimentally Observed | 13387 | BY-NC-SA 4.0 | Diffraction of Light; of Electrons; Neutron Diffraction | 1 | 0 | 4 | 0 | 0 | 4 | 1 |
| 1.8 The Bohr Theory of the Hydrogen Atom | 13388 | BY-NC-SA 4.0 | Rutherford's Failed Planetary Atom; The Bohr Model; The Wave Argument for Quantization; Derivation of the Rydberg Equation from Bohr Model | 0 | 3 | 7 | 1 | 0 | 39 | 1 |
| 1.9 The Heisenberg Uncertainty Principle | 13389 | BY 4.0 | Probability; Heisenberg's Uncertainty Principle; Wave Packets and the Slit Experiment | 2 | 2 | 2 | 0 | 0 | 11 | 3 |

Every section has learning objectives. 1.2 and 1.3 close on a "Summary"
(to `summary_html`); the others have none.

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises** (`box-exercise`): 12 printed; 11 keyed, available now;
  1 unkeyed, available with an AI solution (1.2.1, show that ρ(λ,T)dλ has the
  units of an energy density: explain or prove, a units argument).
- **Conceptual Questions** (1.3, a numbered list): 5 printed; 0 keyed; 5
  unkeyed, available with AI solutions (all explain).
- **Problems**: none; 1.E is empty.
- **Worked examples**: 11, all with their working (10 with a titled
  Solution, 1.3.1 worked after its Strategy). Not exercises; kept whole.
- **Concepts the book leaves untested**: 1.4 (line spectra, the Balmer
  formula), 1.7 (diffraction of matter waves) and the Planck distribution
  of 1.2 (whose one exercise is a units check) have no computational
  exercise. **Proposed new: 6**, two each on the Balmer formula (1.4), the
  de Broglie wavelength in diffraction (1.7) and Planck's law (1.2), if
  the user picks AI exercises.

## Figures, in book order

| Number | Section | What | Proposed treatment |
|---|---|---|---|
| 1.1.1 | 1.1 | photographs: a forge, the sun | keep (the text's red-to-white argument) |
| 1.1.2 | 1.1 | sketch: cavity with a hole vs. a solid | faithful copy |
| 1.1.3 | 1.1 | graph: blackbody spectra at several T | interactive: T slider, real-colour body, Wien peak and Stefan–Boltzmann area |
| (img) | 1.1 note | fluorescent lamp spectrum | faithful copy |
| 1.1.4 | 1.1 | graph: P ∝ T⁴ | folds into 1.1.3's readout, or a still graph |
| 1.1.5 | 1.1 | graph: Rayleigh–Jeans vs. observed | interactive with 1.1.3, the catastrophe as T rises |
| 1.2.1 | 1.2 | the same image as 1.1.5 | the same figure, cited |
| (img) | 1.2 note | ramp vs. ladder (continuous vs. quantized) | still simulation: a ball on a ramp vs. stairs |
| 1.2.2 | 1.2 | the sun's spectrum against a 5777 K blackbody | interactive with Planck's law |
| (img ×2) | 1.2 note | Max Planck portrait; the Max Planck Society logo | keep the portrait; drop the logo |
| 1.3.1 | 1.3 | sketch: photons ejecting electrons | moving simulation (kinematic arrows) |
| 1.3.2 | 1.3 | Lenard's bench, high and low intensity | moving simulation: intensity and stopping voltage |
| 1.3.3 | 1.3 | Millikan's bench, blue and red light | folds into 1.3.2: frequency slider |
| 1.3.4 | 1.3 | graphs: KE vs ν, current vs intensity | the readout graphs of the folded bench |
| 1.4.1 | 1.4 | three panels: continuous, absorption, emission spectra | interactive: one source, cloud on/off |
| 1.4.2 | 1.4 note | spectrum of blue sky, Fraunhofer dips | faithful copy (data) |
| 1.4.3 | 1.4 | photographs: emission spectra of H, Ne, … | keep |
| 1.4.4 | 1.4 | schematic: the series of hydrogen | interactive with 1.8.7: the level ladder |
| 1.7.1 | 1.7 | Young's double slit | moving simulation: wavelength and slit spacing |
| 1.7.2 | 1.7 | interference pattern | folds into 1.7.1 |
| 1.7.3 | 1.7 | electron diffraction (Davisson–Germer) | folds into 1.7.1 with a particle choice (photon, electron, neutron) |
| 1.7.4 | 1.7 | photograph: SEM image of an ant | keep |
| 1.8.1 | 1.8 | sketch: the classical death spiral | moving simulation |
| 1.8.2 | 1.8 | graphs: repulsive and attractive Coulomb potentials | still simulation: the sign of Q₁Q₂ |
| 1.8.3 | 1.8 | Bohr atom | interactive: n slider, r_n and E_n |
| 1.8.4 | 1.8 | Bohr energy levels | the ladder of 1.4.4 + 1.8.7 |
| (img) | 1.8 exercise | r vs n plot | faithful copy (it serves an exercise answer) |
| 1.8.5 | 1.8 | standing waves on a circle | interactive: n, the wave closing on itself or not |
| 1.8.6 | 1.8 | animated GIF: quantum leaps | folds into the ladder |
| 1.8.7 | 1.8 | transitions of the Lyman, Balmer, Paschen series | the ladder, photons in their real colour |
| 1.9.1 | 1.9 | photographs: an electron diffraction pattern building up | moving simulation: electrons arriving one by one |
| 1.9.2 | 1.9 | animated GIF: a wave packet | interactive: Δx slider, Δp from the packet's spread |
| (embed) | 1.9 | YouTube video on wave packets | dropped, named in `notes` |

Tables: 1.3.1 (work functions and ionization energies), 1.4.1 (Fraunhofer
lines), 1.4.2 (Balmer series), 1.5.1 (Lyman series), kept as
`div.book-table`.

## Derivation candidates (root rule 29)

- 1.6, the note "Deriving the de Broglie Wavelength" (E² = p²c² + m²c⁴ →
  hν = pc → λ = h/p): printed as equations, qualifies; replaces the block.
- 1.8, the Bohr model (force balance + mvr = nħ → r_n → E_n), printed as a
  chain of about ten equations: qualifies.
- 1.8, the Rydberg equation from the Bohr model (ΔE = hν): qualifies.
- 1.2, Planck's distribution: stated, not derived (the derivation is
  Appendix 33.1), stays as printed.
- 1.9, Δp = h/λ, Δx = λ → ΔpΔx = h: four lines, score below four; stays.

## What is new to OmniStax here

- A book whose sections are numbered per page by `\PageIndex`, with
  figure, table, example and exercise numbers N.M.K.
- Collapsible answers in the source.
- Per-section licences (1.1 and 1.9 CC BY, the rest BY-NC-SA).
- The real-colour spectrum (fact colour "spectrum") is central to 1.1,
  1.4, 1.5 and 1.8.

## The chapter's answer to root rule 23

The chapter is four experiments that classical physics could not explain
(the blackbody, the photoelectric effect, line spectra, diffraction of
matter) and two ideas that answer them (quantization and wave–particle
duality). Each experiment can be a bench the reader runs: heat the body and
watch the curve outrun the classical prediction; turn the lamp's colour
and intensity and see which one ejects electrons; light the hydrogen ladder
and see the series appear on the spectrum; fire electrons one at a time and
watch the fringes form. The hydrogen ladder, built once in 1.4 and reused
in 1.5 and 1.8, is the picture the reader will meet again in Chapters 6
and 17.
