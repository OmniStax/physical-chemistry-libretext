# Exploration: Chapter 9, Chemical Bonding in Diatomic Molecules

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 9`),
every page read in full, the chapter's 41 images looked at (the GIFs flattened
on white, the SVGs rendered through sharp). The landing page (11786) prints one
paragraph of its own and a "Thumbnail" credit (Covalent_bond_hydrogen.svg, CC
BY-SA 3.0, Jacek FH via Wikipedia), so the chapter has an **`intro/` page**
(root rule 21.1); the thumbnail is not shown on the page and its credit is left
out with it (Chapter 3's precedent). 9.S (550560) is a real summary page of ten
bullets by Kyle Crabtree, routed to `summary/`. **9.E (13450) has no body**
(`exercises/source.md` holds only its title): nothing is routed from it (root
rule 9).

Three pages are not what their titles say, which is new in this book:

- **9.13 and 9.16 are empty.** The API returns no body for either (only the
  "No headers" table-of-contents stub), as it does for most N.E pages. SCF-LCAO-MO
  and excited states are taught nowhere else in the chapter.
- **9.11 is a stray copy.** Its title promises photoelectron spectra; its body is
  a transclusion (`mt-include`, page 4503) of Zielinski's uncertainty-principle
  page: Heisenberg, ΔpΔx ≥ ħ/2, and one exercise, a baseball and an electron at
  91.3 mph. It is byte for byte the body of 19.E (13712), the stray passage
  Chapter 4's exploration routed to 1.9. Nothing on the page is about molecules.

So the chapter teaches through 9.12 and then 9.14–9.15; the photoelectron
spectrum and the excited states the brief lists have no text in the book (what
to do is the orchestrator's, at the end).

The chapter has three movements. 9.1–9.5 build H₂⁺ from first principles: the
Born–Oppenheimer separation, LCAO, the overlap integral, the energy as J, K and S
against R, and σ/σ* (the only quantitative half, Hanson–Zielinski's voice).
9.6–9.12 are general chemistry's MO theory (an OpenStax-derived "anonymous"
text): configurations, σ and π from p orbitals, the period-2 ordering, bond
order, He₂, O₂'s paramagnetism, heteronuclear skew. 9.9 (Crabtree) and 9.14–9.15
(a supplemental-module page and de Vries) add the formal layer: the Slater
determinant of a molecule, molecular term symbols, g/u and ±. What moves: two
atoms approaching (the overlap, J, K and the energy curves traced as R shrinks),
a light mass slaved to a heavy one (the Born–Oppenheimer picture), electrons
dropping one by one into an MO diagram across the period, a microstate chart
giving up its terms. What varies: the combination's sign and the orbital pair
(1s, 2p_z, 2p_x), the electronegativity gap, the species of a diagram.

## Pages

| Page | LibreTexts id | Licence | Authors | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11786 | BY-NC-SA 4.0 | none | none: one paragraph and a thumbnail credit | | | | | | | |
| 9.1 The Born-Oppenheimer Approximation … | 13451 | BY-NC-SA 4.0 | Hanson, Harvey, Sweeney, Zielinski | The Born-Oppenheimer Approximation; Potential Energy Curves and Surfaces; Summary | 1 (an illustration, no question) | 4 | 2 | 1 (in Example 9.1.1) | 0 | 0 | 7 / 8 |
| 9.2 The H₂⁺ Prototypical Species | 13452 | BY-NC-SA 4.0 | Hanson et al.; Rudolf Winter | The Hydrogen Molecular Ion; Linear Combination of Atomic Orbitals | 0 | 0 | 2 | 1 (in the note) | 0 | 1 (The LCAO Approximation and Interference) | 4 / 4 |
| 9.3 The Overlap Integral | 13454 | BY-NC-SA 4.0 | Hanson et al. | none | 1 | 1 | 2 | 0 | 0 | 0 | 9 / 15 |
| 9.4 Chemical Bond Stability | 13455 | BY-NC-SA 4.0 | Hanson et al. | The Coulomb and Exchange Integrals | 0 | 3 | 2 (printed 9.4.2, 9.4.3; no 9.4.1) | 0 | 0 | 2 definition boxes (The Coulomb Integral; The Exchange Integral) | 13 / 20 |
| 9.5 Bonding and Antibonding Orbitals | 13456 | BY-NC-SA 4.0 | Hanson et al. | Expanding Beyond the 1s Orbital Basis Set | 0 | 0 | 2 | 0 | 0 | 1 (Steps in a Solving the Secular Equations), two pulled quotes | 11 / 12 |
| 9.6 A Simple MO Treatment of H₂ … | 13458 | BY-NC-SA 4.0 | Hanson et al.; Mark Tuckerman | Symmetry | 0 | 0 | 1 | 0 | 0 | 1 (Contrasting LCAO with other Quantum Chemistry Methods) | 3 / 3 |
| 9.7 Molecular Orbitals Can Be Ordered … | 13459 | BY-NC-SA 4.0 | none (figures "anonymous") | Molecular Orbitals Formed from ns Orbitals; … from n p Orbitals; Energies for Homonuclear Diatomic Molecules; … from ns with n p Orbitals | 2 | 2 | 7 | 2 (in the examples) | 0 | 0, one pulled quote | 5 / 5 |
| 9.8 MO Theory Does not Predict a Stable He₂ | 13460 | BY-NC-SA 4.0 | none | Bond Order; The Helium Dimer; Conclusion | 1 | 1 | 2 | 2 (in Example 9.8.1) | 1 | 1 (However, Van der Waals Helium Dimers do exist, holding Figure 9.8.2), one pulled quote | 4 / 7 |
| 9.9 Electrons Populate MOs … Pauli | 13461 | BY-NC-SA 4.0 | Kyle Crabtree (tag) | none | 0 | 0 | 0 | 0 | 0 | 1 (Note: five facts about Slater determinants) | 5 / 6 |
| 9.10 MO Theory Predicts that O₂ is Paramagnetic | 13462 | BY-NC-SA 4.0 | none | Molecular Oxygen is Paramagnetic | 1 | 0 | 3 (9.10.1 two panels) | 0 | 1 | 1 (Advanced: Spin Barriers); a YouTube video | 0 / 7 |
| 9.11 Photoelectron Spectra … | 13463 | BY-NC-SA 4.0 | (Zielinski's page 4503, transcluded) | none | 0 | 1 (printed in bold, not a box) | 0 | 0 | 0 | 0 | 1 / 1 |
| 9.12 MO Theory Also Applies to Heteronuclear Diatomics | 13464 | BY-NC-SA 4.0 | anonymous (tag) | Nonbonding Molecular Orbitals; Summary | 1 | 1 | 3 (printed 9.12.4, 9.12.13, 9.12.6) | 1 (in Example 9.12.4) | 0 | 1 (An Odd Number of Valence Electrons: NO, holding Figure 9.12.13); two pulled quotes; a YouTube video | 0 / 0 |
| 9.13 SCF-LCAO-MO Wavefunctions … | 13465 | BY-NC-SA 4.0 | | **empty** | | | | | | | |
| 9.14 Molecular Term Symbols Describe Electronic States | 13466 | **BY 4.0** | none | Introduction; Determining term symbols of diatomics; Transition between electronic states of diatomics; References | 0 | 0 | 0 | 2 (mo4, mo6) | 0 | 0 | 1 / 1 |
| 9.15 Molecular Term Symbols Designate Symmetry | 13467 | BY-NC-SA 4.0 | Mattanjah de Vries (tag) | Two New Symmetries: Parity and Reflection | 3 | 1 | 0 | 5 | 2 (the M_L × M_S charts in Example 9.15.3) | 0 | 0 / 0 |
| 9.16 Most Molecules Have Excited Electronic States | 13468 | BY-NC-SA 4.0 | | **empty** | | | | | | | |
| summary (9.S) | 550560 | untagged (the book's) | Kyle Crabtree | none: ten bullets | | | | | | | 0 / 0 |
| 9.E | 13450 | | | empty | | | | | | | |

Objectives: 9.1 (two), 9.4 (two), 9.5 (one), 9.8 (one), 9.10 (two); none with a
lead-in sentence. Closing "## Summary" in 9.1 and 9.12 (to `summary_html`); 9.8
closes on "## Conclusion", one paragraph, which is the book's own block and stays
in the text (it is not titled Summary). Contributors lists: 9.1–9.6 (Hanson,
Harvey, Sweeney, Zielinski, "Quantum States of Atoms and Molecules"; 9.2 adds
Rudolf Winter, 9.6 Mark Tuckerman); elsewhere the credit is the tag's author
(9.9 Crabtree, 9.12 anonymous, 9.15 de Vries, 9.S Crabtree) or none (9.7, 9.8,
9.10, 9.14, the intro: the book's). 9.14 ends on a "References" list (Harris,
Willock), kept as its last block: it is the page's text, not its credit.

Opening blocks before the first `<h2>` need a header of the agent's (root rule
3), proposed below and put through the humanizer by the builder; 9.3 and 9.9 have
no `<h2>` at all and are divided by the agent.

### The intro page

`intro/source.md`: one paragraph (bonding is understood from the orbital
description of atoms), then the thumbnail credit, dropped with the thumbnail. One
block, header proposed "From Atoms to Bonds".

### The summary page (9.S)

`summary/source.md`, named by `chapter.json`'s `summary` record: ten bullets, no
header, inline maths only. One block, header proposed "Bonding in Diatomic
Molecules in Brief". Each bullet links the section that works it (9.5, 9.4, 9.7,
9.8, 9.6, 9.14, 9.15). Corrections: "the 2J+1 is gone" (an atomic term symbol's
subscript is J, not 2J + 1, 8.S's correction; and the molecular symbol keeps Ω as
its subscript, 9.14); "exchange integral … purely quantum-mechanical effect"
reads as printed.

### Per section

- **9.1** Opening (proposed "Molecules by Quantum Mechanics"): quantum chemistry,
  DFT and the Nobel prize, nuclei as classical particles. The Born-Oppenheimer
  Approximation: the mass argument, Example 9.1.1 (coupled oscillators: an
  illustration with an image and no question; its last paragraph prints after the
  box), the three-term Hamiltonian (9.1.1)–(9.1.3), Exercises 9.1.1, 9.1.2,
  (9.1.4), (9.1.5) *Born-Oppenheimer wavefunction*, *Crude Born-Oppenheimer
  Approximation*, (9.1.6), (9.1.7). Potential Energy Curves and Surfaces: Figure
  9.1.1, R₀, Exercise 9.1.3, *potential energy surfaces* (3N − 6), Figure 9.1.2,
  reaction coordinate diagrams, Exercise 9.1.4. Summary (to `summary_html`).
  Concepts (new): quantum chemistry, internuclear distance, Hamiltonian of a
  diatomic molecule, electronic Hamiltonian, Born–Oppenheimer approximation,
  electronic Schrödinger equation, Born–Oppenheimer wavefunction, potential energy
  curve, equilibrium bond length, crude Born–Oppenheimer approximation, nuclear
  Schrödinger equation, potential energy surface, reaction coordinate diagram.
  Reinforced: multi-electron Hamiltonian (6.7), separation of molecular motion
  (5.1), harmonic oscillator and Morse potential (5.1, 5.3), kinetic energy
  operator (3.3).
- **9.2** Opening (proposed "A Molecule with One Electron"). The Hydrogen
  Molecular Ion: H₂⁺ observed, the need for charge between the protons, Figure
  9.2.1, (9.2.1). Linear Combination of Atomic Orbitals: 1s_A, 1s_B, (9.2.2)
  *LCAO-MO Method*, the note on LCAO and interference (the 2p animation),
  |C_A|² = |C_B|², (9.2.3a), (9.2.3b), Figure 9.2.2, *bonding* and *antibonding
  molecular orbital*. Concepts (new): hydrogen molecular ion, electronic
  Hamiltonian of H₂⁺, molecular orbital, LCAO-MO method, number of molecular
  orbitals (the note), interference of atomic orbitals, molecular orbitals of H₂⁺,
  bonding and antibonding molecular orbital. Reinforced: LCAO approximation and
  secular determinant (7.2), atomic orbital (6.2), probability density (3.4).
- **9.3** No `<h2>`. Proposed blocks: "Two Orbitals for One Electron" (the
  coefficients again, (9.3.1a), (9.3.1b), the charge-density paragraph, the energy
  to come) and "Normalizing with the Overlap Integral" (the align (9.3.1)–(9.3.3),
  *overlap integrals*, Figure 9.3.1, *orthogonal*, (9.3.4)–(9.3.7b), S(R)
  (9.3.9), Figure 9.3.2, Example 9.3.1, Exercise 9.3.1). The page repeats 9.2's
  ψ± paragraph nearly word for word (the book's; kept). Concepts (new):
  normalized molecular orbitals of H₂⁺, overlap integral of two 1s orbitals.
  Reinforced: overlap integral (4.5), normalization (3.5), orthogonality (3.5),
  bonding and antibonding orbitals (9.2), electron charge density (8.3).
- **9.4** Opening (proposed "The Energy of H₂⁺"): ψ± again (printed (9.4.1)),
  (9.4.1)–(9.4.5), Exercise 9.4.1 (keyed, a derivation), H_AA (9.4.6) with E_H and
  *Coulomb integral*, the definition box, H_AB (9.4.7), *exchange integral*, the
  definition box, (9.4.8)–(9.4.10), Exercise 9.4.2. The Coulomb and Exchange
  Integrals: (9.4.11), (9.4.12), Figure 9.4.2, the J paragraph, *overlap charge
  density*, Exercise 9.4.3, Figure 9.4.3, the bonding and antibonding paragraphs.
  Concepts (new): LCAO energies of H₂⁺, Coulomb and exchange integrals of H₂⁺,
  overlap charge density, energy of H₂⁺ against R, stability of the H₂⁺ bond.
  Reinforced: expectation value (3.7), Hamiltonian matrix element (7.2), hydrogen
  energy levels (6.4), overlap integral of two 1s (9.3). The book's J and K are
  one-electron integrals with the same names as 8.3's and 8.7's two-electron ones:
  two new concepts ("… of H₂⁺"), and the builder picks the concept per span.
- **9.5** Opening (proposed "Sum and Difference"): (9.5.1) the general LCAO, σ_1s,
  Figure 9.5.1, *cylindrical symmetry*, (9.5.2), (9.5.3), the nodal plane, the
  pulled quote, stabilization, *energy-level diagram*, Figure 9.5.2, the second
  pulled quote. Expanding Beyond the 1s Orbital Basis Set: 134 pm and 1.8 eV
  against 106 pm and 2.8 eV, (9.5.4)–(9.5.10), the steps note, (9.5.11). Concepts
  (new): sigma orbital, nodal plane of an antibonding orbital, MO energy-level
  diagram, stabilization of bonding orbitals, larger LCAO basis sets. Reinforced:
  linear variational energy and secular equations (7.2, built there as
  derivations: cited, not rebuilt), LCAO-MO (9.2).
- **9.6** Opening (proposed "Orbitals, Determinants and Configurations"): (9.6.1),
  the notation σ, φ, ψ, Ψ, antisymmetry, (9.6.2), Aufbau, ψ₁²ψ₂²…, Figure 9.6.1.
  Symmetry: 2σ_g², σ and π by angular momentum about the axis, g and u, the
  inversion center, N₂'s configuration (9.6.3), the note on HF, DFT and post-HF.
  Concepts (new): molecular electron configuration, symmetry labels of molecular
  orbitals, gerade and ungerade, hierarchy of quantum chemistry methods.
  Reinforced: Slater determinant (8.6), Aufbau and Pauli (8.10, 8.5), closed and
  open shell (8.8), Hartree–Fock (8.7), basis functions (7.2).
- **9.7** Opening (proposed "Valence Orbitals First"). ns Orbitals: *homonuclear
  diatomic molecule*, Figure 9.7.1, bond order 1 and 0 (used before 9.8 defines
  it), Example 9.7.1 (Na₂⁻, its image, and its part C printed after the box),
  Exercise 9.7.1. n p Orbitals: (9.7.1) (a stray copy of (9.7.2) before the
  prose), (9.7.2), (9.7.3), Figure 9.7.2, Figure 9.7.3, (9.7.4), (9.7.5). Energies
  for Homonuclear Diatomic Molecules: the four key points, Figure 9.7.4, the pulled
  quote, F₂, Figure 9.7.5, the s–p mixing paragraph, Figure 9.7.6, Example 9.7.2
  (S₂, its image after the box), Exercise 9.7.2. ns with n p: Figure 9.7.7.
  Concepts (new): homonuclear diatomic molecule, valence molecular orbitals, σ
  orbitals from p orbitals, pi orbital, rules for an MO diagram, orbital order of
  the period 2 diatomics, filling an MO diagram (skill). Reinforced: p orbital
  shapes (6.6), Hund's rules (8.8), Pauli (8.5), σ and antibonding node (9.5).
- **9.8** Bond Order: (9.8.1), (9.8.2), Figure 9.8.1, H₂⁺ ½, Table 9.8.1, He₂⁺,
  Example 9.8.1 (He₂²⁺, two images), Exercise 9.8.1. The Helium Dimer: He₂,
  (9.8.3), the unequal splitting (9.8.4) (9.4's (9.4.10) printed again: cited),
  the pulled quote, the note on van der Waals He₂ with Figure 9.8.2. Conclusion
  (kept in the text). Concepts (new): bond order, bond order and bond strength,
  antibonding electrons outweigh bonding ones, no covalent bond in He₂, van der
  Waals helium dimer. Reinforced: energy of H₂⁺ against R (9.4), classically
  forbidden region (5.4).
- **9.9** No `<h2>`. Proposed blocks: "The Exclusion Principle, Stated Exactly"
  (fermions and bosons, antisymmetry, the product of spin orbitals, (9.9.1),
  (9.9.2), (9.9.3), the antisymmetry check, the superposition paragraph) and
  "Determinants from Diagrams" (the Slater determinant (9.9.4), the note, the
  N × N determinant (9.9.5), the closing paragraph). Concepts (new): antisymmetric
  ground state of H₂, properties of Slater determinants, writing a molecule's
  Slater determinant (skill). Reinforced: Pauli and antisymmetry (8.5), exchange
  operator (8.5), Slater determinant (8.6), fermion and boson (8.5). The page's
  source dropped words where LibreTexts glossary links were ("A is a particle with
  half-integer spin", "a product of , each", "the ground electronic state of ,"):
  corrections, and two footnote markers (², ³) whose notes the page does not
  print.
- **9.10** Opening (proposed "Bond Order Across a Row"): Table 9.10.1, Figure
  9.10.1, Figure 9.10.2, Example 9.10.1 (four O₂ species, Figure 9.10.3 inside it,
  seven unnumbered configurations). Molecular Oxygen is Paramagnetic: *paramagnetic*,
  Video 9.10.1 (dropped, named in `notes`; its caption paragraph goes with it), the
  note "Advanced: Spin Barriers". Concepts (new): paramagnetism, paramagnetism of
  O₂, spin barrier. Reinforced: bond order and bond strength (9.8), filling an MO
  diagram (9.7), electron spin (8.4).
- **9.11** One block (proposed "Uncertainty in Position and Momentum"): the stray
  page (above). No concept of its own; reinforces the uncertainty principle (1.9).
  Its exercise goes to 1.9 (below).
- **9.12** Opening (proposed "Two Different Atoms"): *heteronuclear*, χ_B > χ_A,
  Figure 9.12.4, the pulled quote, the note on NO (Figure 9.12.13), NO's true order
  (π below σ), NO⁺. Nonbonding Molecular Orbitals: HCl, *nonbonding molecular
  orbitals*, Figure 9.12.6, the pulled quote, Example 9.12.4 (CN⁻, its image; the
  rest of its solution printed after the box), Exercise 9.12.4, the closing
  paragraph, a YouTube video (dropped, named in `notes`). Summary (to
  `summary_html`). Concepts (new): heteronuclear diatomic molecule, molecular
  orbitals of a heteronuclear diatomic (the skewed diagram), nonbonding molecular
  orbital. Reinforced: bond order (9.8), MO diagram rules (9.7).
- **9.13** Empty.
- **9.14** Opening (proposed "Labels for Molecular States"): the four parts,
  Russell–Saunders. Introduction: the term symbol display (9.14.1), Λ, Ω, g/u, ±.
  Determining term symbols of diatomics: CO's closed shell ¹Σ⁺, its excited
  configuration (mo4), Π × Σ⁺ = Π, ¹Π and ³Π; O₂ (mo6), Π × Π. Transition between
  electronic states: three selection rules. References. Concepts (new): axial
  orbital and total angular momentum (Λ, Ω), molecular term symbol, finding the
  term symbols of a diatomic configuration (skill), selection rules for diatomic
  molecules. Reinforced: atomic term symbol and spin multiplicity (8.8),
  Russell–Saunders selection rules (8.11), gerade and ungerade (9.6).
- **9.15** Opening (proposed "Quantum Numbers Along the Axis"): Λ and its letters,
  M_L, M_S. Two New Symmetries: *Parity*, *u* and *g*, the M22 image, the product
  rules, Example 9.15.1, reflection, its rules (TeX printed as prose), *Reflection
  only applies to Σ states!*, Example 9.15.2 (its image), Example 9.15.3 (O₂: two
  diagrams, the microstate strip, two wrong charts), Exercise 9.15.1 (keyed, with an
  image). Concepts (new): parity of a molecular state, reflection symmetry of Σ
  states. Reinforced: molecular term symbol and finding molecular terms (9.14),
  terms from microstates (8.8), parity product rules (5.7).
- **9.16** Empty.

## Equation numbers

One number per display, an `align` included, as the converter's `n=` gives them:
63 numbered displays of 89 (9.1 7, 9.2 4, 9.3 9, 9.4 13, 9.5 11, 9.6 3, 9.7 5,
9.8 4, 9.9 5, 9.11 1, 9.14 1; 9.10's seven displays and the bond-order lines of
9.8 carry `\nonumber`; 9.12 and 9.15 print no display). The labels are borrowed
and lag the printed numbers in places (9.4's first display is labelled `9.3.7a`
and prints (9.4.1); 9.5's `9.7.2`, `9.7.3` print (9.5.2), (9.5.3) and its `23`
prints (9.5.10); 9.8's `10.31` prints (9.8.4)), so the builder reads numbers from
the draft. Citations that miss (corrections): 9.3 "Equations 9.3.1a and 9.3.1a"
(the same label twice, for (9.3.1) and (9.3.2)), "equation 9.3.12" for C²
((9.3.6)), "as shown in Figures 9.3.1" for the charge densities (9.2.2 shows
them); 9.4's Exercise 9.4.2 "Show that Equation 9.2.1 follows from Equation
9.4.5" ((9.4.9) follows from (9.4.5)); 9.7 "Figures 9.7.6 and 9.7.7" in Example
9.7.2 (9.7.5 and 9.7.6); 9.10's "Equation BO" four times, a label on no page (9.8's
(9.8.1); the draft tool warns), and "the energy-level diagram shown in Figure
9.10.1" (Figure 9.10.3); 9.12's "Figure 9.12.11" twice, a figure the page does not
have (O₂'s diagram: 9.7.5, linked); 9.8's "derived previously" for (9.8.4) links
9.4's (9.4.10).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercise boxes**: 13 printed boxes (9.1.1–9.1.4; 9.3.1; 9.4.1–9.4.3;
  9.7.1, 9.7.2; 9.8.1; 9.12.4; 9.15.1), 13 cards. **8 keyed**, available now:
  9.1.1 (its key drops T̂_nuc's first minus sign and writes m_b, R_Bi: corrected
  under the card), 9.1.2, 9.4.1 (a derivation; its key's ket writes
  (1_{Sa} − 1_{Sb}) for ±: corrected), 9.7.1, 9.7.2, 9.8.1, 9.12.4, 9.15.1 (printed
  with a "Solution" part). **5 unkeyed**, available with AI solutions, all explain
  or prove: 9.1.3 (relate (9.1.7) to the harmonic oscillator), 9.1.4 (BO against
  crude BO), 9.3.1 (⟨φ_B|φ_A⟩ = ⟨φ_A|φ_B⟩*), 9.4.2 (its equation numbers garbled:
  answered as (9.4.9) from (9.4.5), with a correction), 9.4.3 (a paragraph on J and
  K). 0 compute, 0 sketch.
- **9.11's Exercise 9.11.1** (printed in bold, not a box): unkeyed, compute (the
  baseball and the electron at 91.3 mph). It tests ΔpΔx ≥ ħ/2, which 1.9
  introduces, and is the same exercise as 19.E.1, which Chapter 4's decision sends
  to 1.9: **one card in 1.9** standing for both printed places (root rule 12), not
  a card of this chapter. 1.9 is built, so the card is added there in a pass on
  Chapter 1 (orchestrator).
- **Worked examples**: 10 (9.1.1; 9.3.1; 9.7.1, 9.7.2; 9.8.1; 9.10.1; 9.12.4;
  9.15.1–9.15.3), kept whole; not exercises. 9.1.1 is an illustration with no
  question (kept as printed, like 8.7.1). In 9.7.1, 9.7.2, 9.8.1 and 9.12.4 the box
  closes before the solution does (the rest prints after the box on the live
  page); the builder keeps each solution inside its example (orchestrator).
- **Conceptual questions, problems, 9.E**: none printed; 9.E is empty.
- **Placement (root rule 12)**: every box tests its own section; 9.11.1 goes to
  1.9. 9.4.1 retraces 9.4's derivation and 9.4.2 its second half: the AI solution
  of 9.4.2 cites it (Chapter 5's decision).
- **Totals**: 13 cards in this chapter: 8 keyed, 5 unkeyed (5 explain or prove).
- **Concepts the book leaves untested** (no exercise in 9.2, 9.5, 9.6, 9.9, 9.10,
  9.14): **proposed new: 8**: 9.2 one (why |C_A|² = |C_B|² and which combination
  piles charge between the protons); 9.3 one (S and C± at R = 2a₀: S = 0.586,
  C₊ = 0.561, C₋ = 1.10); 9.4 one (ΔE₊ and ΔE₋ at R = 2.0a₀ from given S, J and K,
  0.586, −0.473 and −0.406 E_h: −0.054 and +0.338 E_h); 9.5 one (how many σ and σ*
  orbitals the six-orbital basis (9.5.11) gives, and which have a node between the
  nuclei); 9.6 one (Li₂'s and N₂'s configurations in σ_g/σ_u notation, and which
  orbitals are g); 9.9 one (expand the 2 × 2 determinant (9.9.4) and show it is
  (9.9.3)); 9.10 one (which of B₂, C₂, N₂, O₂, F₂ are paramagnetic, from Figure
  9.7.6's order); 9.14 one (the term symbols of CO's 5σ¹2π¹ configuration and
  whether a transition from it to the ground state is spin-allowed).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

The point named is what the reader should see before reading anything. Rule 14 as
rewritten today: a figure starts from the book's and usually replaces it; motion
where the idea moves; a point seen at once; little effort to read; folds where the
book draws one scene several times.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| Example 9.1.1's image | 9.1 | PNG (CC BY-SA 3.0, Jim.belk, Wikipedia): a wall, a spring, a big block m₁, a spring, a small block m₂ | **Replace, moving** (the masses oscillate; time is the idea): the two-mass chain driven from rest, slider for m₁/m₂ (1–2000, soft detent at 1836, the proton) and one for the second spring's stiffness. Beside it the two displacements against time. **Point: the lighter m₂ is, the more tightly it follows m₁, jittering fast around it while m₁ swings slowly, which is how electrons follow the nuclei.** Readout the two normal-mode frequencies and their ratio. Unnumbered (eyebrow "Figure"), original shipped with its credit. 2D. |
| 9.1.1 | 9.1 | GIF, no credit, axes visible only on a white ground: H₂'s potential, energy (eV) against R (pm), well at 74 pm, 4.7 eV deep | **Replace, still** (variation): V_e(R) for H₂ drawn as the sum of its two parts, E_e(R) and the nuclei's repulsion e²/4πε₀R (9.1.6), with a probe on R. **Point: the potential the nuclei feel is the electronic energy plus their own repulsion; it has its minimum at R₀ and levels off to two atoms.** Readout V_e = E_e + repulsion with numbers; R₀ marked, with the crude Born–Oppenheimer choice labelled there. Data: a Morse fit to H₂ (D_e = 4.75 eV, R_e = 74.1 pm, NIST/Huber–Herzberg, named in notes); E_e is V_e minus the exact Coulomb term. 2D. |
| 9.1.2 | 9.1 | PNG (Wikipedia, AimNature): water's energy over bond length and bond angle, minimum at 0.0958 nm and 104.5° | **Replace, still, mathematical 3D** (a surface over two coordinates, rule 28.3): E(r, θ) for water as a surface the reader turns; a choice slices it at fixed θ or fixed r, and the slice is drawn flat beside it as a 1D curve. **Point: the bottom of the surface is the molecule's shape, and a slice through it is a potential energy curve like Figure 9.1.1, the reaction-coordinate idea.** Model surface: a Morse stretch and a harmonic bend with water's constants (literature, named). Orbit bounded above the floor (rule 26.3); no buttons. Original shipped with its credit. |
| 9.2.1 | 9.2 | SVG (CC BY-NC, Kaya): protons A and B, an electron, r_A, r_B, R | **Replace, still** (variation): the electron dragged over the plane of the two protons, with R on a slider; the potential energy of (9.2.1) drawn as a faint contour map underneath. **Point: the electron's potential is lowest between the protons, where both attract it, which is where a bond needs charge.** Readout the three Coulomb terms with numbers at the electron's position. 2D. |
| 9.2.2 + the note's animation | 9.2 | 9.2.2: GIF (Wikipedia, no credit here): 1s of H, H₂⁺ bonding and antibonding as 1D slices, real and imaginary parts oscillating in time. The note: GIF (7 frames, no credit): two 2p_z atoms approaching, in phase and out of phase, false-colour sign maps | **Fold, replace, moving** (two atoms approaching: R shrinking is the clock): a choice of the atomic pair (1s + 1s as in 9.2.2, 2p_z + 2p_z as in the note), a choice of sum or difference, and the approach run by the transport (R from 8a₀ to 1a₀, scrubbable). Top, the signed map of ψ in the plane of the nuclei (one diverging scale, legend: sign and size); below, the slice along the axis with ψ_A, ψ_B, their combination and its square. **Point: added with matching signs, the two orbitals pile density between the nuclei; with opposite signs they cancel there and leave a node, however close the atoms come.** Readout ψ = C(1s_A ± 1s_B) and the density at the midpoint. The GIF's phase rotation is dropped (stationary states' density does not move; its caption's "frequency proportional to kinetic energy" is a correction through the row). Eyebrow "Figure 9.2.2", the note's animation in `originals`. 2D. |
| 9.3.1 + 9.3.2 | 9.3 | 9.3.1: PNG (no credit): two cusped orbitals overlapping, and far apart; 9.3.2: JPG (no credit): S(R) with three insets of 1s(A), 1s(B) and their product at R = 1, 2, 4 a₀ | **Fold, replace, still** (variation; 9.3.2 already folds the scene three times): slider R (0–6 a₀); top, 1s_A, 1s_B along the axis and their product shaded; below, S(R) (9.3.9) with the probe. **Point: the product is non-zero only where both orbitals are, and its integral S falls from 1 at R = 0 to almost nothing by 6a₀.** Readout S = e^{−R/a₀}(1 + R/a₀ + R²/3a₀²) and C± = 1/√(2(1 ± S)) with numbers. Opens on R = 2a₀ (Example 9.3.1's case). The slice is honest about being one line through a 3D integral (caption). 2D. Originals shipped. |
| 9.4.2 + 9.4.3 | 9.4 | GIF (printed "CC BY-SA-NC", Hanson et al., ChemEdDL): (a) proton repulsion, (b) S, J, K against R; GIF (no credit): ΔE₊ and ΔE₋ against R | **Fold, replace, moving: the chapter's centrepiece** (two atoms approaching, the curves traced as R shrinks). Scene: two protons closing along the axis with the bonding or antibonding density between them (the 9.2.2 component, small). Graph: e²/4πε₀R, S, J and K traced as R falls, and ΔE₊, ΔE₋ built from them by (9.4.10); the minimum of ΔE₊ marked (2.49a₀ = 132 pm, −0.065 E_h = −1.76 eV) and where ΔE₊ turns positive. Choice bonding/antibonding for the scene; the transport runs the approach. **Point: J and K both deepen as the atoms close, and only in the + combination do they beat the protons' repulsion, leaving a well; in the − combination −K cancels J and the energy only climbs.** Readout ΔE± = 1/R + (J ± K)/(1 ± S) with live numbers in hartrees. J(R) = −(1/R)[1 − (1 + R)e^{−2R}] and K(R) = −(1 + R)e^{−R} (atomic units) are the standard closed forms (Pauling 1928; McQuarrie and Simon §9.4), named in the figure's notes: literature allowed with its source named; the book prints only S(R) and its curves. Eyebrow "Figure 9.4.2 + 9.4.3"; originals shipped (9.4.3 under the page's licence; the gnuplot GIFs carry their axis text in black on transparency, so they are flattened on white when shipped). 2D. |
| 9.5.1 | 9.5 | JPG (printed "CC BY-SA-NC; anonymous", the Averill–Eldredge figure): (a)–(d), the σ_1s and σ*_1s wavefunctions as sums and differences, their squares, and lobe drawings | **Replace, still, mathematical 3D** (cylindrical symmetry and a nodal plane are arrangements in space, rule 24.8): σ_1s or σ*_1s as a point cloud coloured by the sign of ψ (`F.space.points`; 3.9's and 6.6's decision: clouds, not isosurfaces), the nuclei marked, the nodal plane of σ* drawn as a faint disc; slider R. Beside it, flat, the axis slice of ψ and ψ² (panels a–d). **Point: σ_1s is round about the axis with its density piled between the nuclei; σ*_1s is round too but cut by a plane perpendicular to the axis.** Free orbit, no buttons (nothing here needs a path or fine parts). Readout the normalized form (9.5.2)/(9.5.3) with S. It does not repeat 9.2.2: that figure is the approach in a plane, this one the 3D shape (orchestrator, below). |
| 9.5.2 | 9.5 | JPG (no credit): H₂'s MO diagram, two arrows in σ_1s, lobe drawings | **Faithful copy, still**, in the house level-diagram style: the first MO diagram the book draws, and nothing in 9.5 varies on it. Original shipped. |
| 9.6.1 | 9.6 | GIF (no credit): four configurations a)–d) on a five-level ladder | **Faithful copy, still**: four states side by side is already the clearest view. Original shipped. |
| 9.7.1 + Example 9.7.1's image | 9.7 | JPG ("anonymous"): (a) alkali M₂, (b) alkaline-earth M₂; JPG: Na₂⁻ | **Fold, replace, still** (variation by choice): one ns-only diagram, choice of species M₂ (alkali), Na₂⁻, M₂ (alkaline earth), filled as chosen. **Point: two valence electrons fill σ_ns and bond; a third or fourth goes to σ*_ns and undoes half or all of it.** Readout the configuration and the bond order (2 − n*)/2 with numbers. Exercise 9.7.1's Ca₂⁺ is not a choice (it would show the answer). Originals shipped. |
| 9.7.2 + 9.7.3 + 9.7.7 | 9.7 | JPGs ("anonymous"): σ_np_z bonding and σ* from p_z; π and π* from p_x and p_y; σ and σ* from ns + np_z | **Fold, replace, still, mathematical 3D**: the LCAO cloud the brief asks for. A choice of pair (p_z + p_z head on, p_x + p_x side on, p_y + p_y, s + p_z), a choice of combination (sum, difference), slider R; the two atomic orbitals and their combination as point clouds coloured by sign, nodal planes as faint discs, the axis z drawn. **Point: head-on p lobes make a σ orbital, round about the axis; side-on lobes make a π, with a nodal plane containing the axis; whichever combination puts like signs together bonds, and the other gains a node between the atoms.** Readout the combination ((9.7.2)–(9.7.5)) and σ/π, bonding/antibonding. Free orbit, no buttons. Three figures of one scene (rule 14 fold); eyebrow "Figure 9.7.2 + 9.7.3 + 9.7.7". |
| 9.7.4 + 9.7.5 + 9.7.6 + Example 9.7.2's image | 9.7 | JPGs ("anonymous"): the six np levels; F₂ and O₂ filled; the seven period-2 diagrams side by side; S₂ | **Fold, replace, moving** (electrons dropping in one at a time is a sequence; each step is a state the transport reaches exactly, Chapter 8's microstate precedent): the valence MO diagram with a molecule choice Li₂ … F₂ (and S₂, the example), the transport adding electrons one by one by Aufbau, Pauli and Hund; between N₂ and O₂ the σ_2p_z level morphs below π_2p. **Point: as the row fills, bond order climbs to 3 at N₂ and falls to 1 at F₂, and O₂'s last two electrons sit unpaired in π*.** Readout the configuration, bond order (bonding − antibonding)/2 and unpaired electrons. Levels schematic, as the book's (it prints no energies). Eyebrow "Figure 9.7.4 + 9.7.5 + 9.7.6"; Example 9.7.2's image in `originals`. Caption correction through the row: 9.7.5(a) is F₂, 14 electrons, bond order 1. 2D. |
| 9.8.1 + Example 9.8.1's two images | 9.8 | JPG ("anonymous"): H₂⁺, He₂⁺, He₂; PNGs: an empty He₂ diagram and He₂²⁺ | **Fold, replace, still**: the 1s diagram with a choice of species (H₂⁺, H₂, He₂²⁺, He₂⁺, He₂), the σ*_1s drawn raised further than σ_1s is lowered (the ratio from 9.4's curves at R = 2.5a₀, said in the caption). **Point: each antibonding electron costs more than a bonding one gains, so He₂'s 2 + 2 leaves it unbound while He₂⁺ keeps half a bond.** Readout bond order and the net shift in units of ΔE₊, ΔE₋. Exercise 9.8.1's H₂²⁻ not a choice. The same component as 9.7.1's fold opened on other atoms (orchestrator, below). |
| 9.8.2 | 9.8 | PNG (credited "Inspire", a plot from INSPIRE-HEP; He₂ potential and |Ψ|² after Przybytek 2010) on a log R axis | **Replace, still, graph** (variation by choice): the He₂ potential on a log R axis with its one bound level and |ψ|², solved in the figure from a published potential (Aziz–Slaman 1991 or Przybytek et al. 2010, named in notes); a choice between ⁴He₂ and the unbound ³He⁴He; the classical turning point marked and the probability beyond it shaded. **Point: the well is so shallow that the one bound state lives mostly outside it, its density stretched over hundreds of ångströms.** Readout the binding energy, the turning point and ⟨R⟩. The original's licence is not stated: not shipped unless the orchestrator says otherwise. |
| 9.10.1 + 9.10.2 | 9.10 | SVGs (CC BY-NC, Kaya): bond length and bond enthalpy across Li₂ … F₂; bond length against valence electrons with ions, each point with its configuration and bond order (its caption a copy of 9.10.1's) | **Fold, replace, still** (variation): one chart, x the number of valence electrons (6–14), a choice of y (bond length, bond energy), neutral molecules and ions as two marks, the bond order on a second axis; hover gives each species' configuration. **Point: bond length falls and bond energy rises with bond order, peaking at N₂, and the ions fall where their bond orders put them.** Data: the book's points (Kaya's figures), checked against Huber–Herzberg via NIST and named. 9.10.2's caption corrected through the row. Originals shipped. |
| 9.10.3 | 9.10 | PNG ("Anonymous by request"): O₂'s MO diagram (the same scene as 9.7.5(b)) | **Replace, still**: the 9.7 component opened on O₂, with a choice of O₂⁺, O₂, O₂⁻, O₂²⁻ (Example 9.10.1's species). **Point: each electron added to π* lowers the bond order by a half and lengthens the bond, and only O₂ keeps two unpaired electrons.** Readout bond order, unpaired electrons, paramagnetic or not, and the example's bond length (112.2, 121, 128, 149 pm). Keeps the number 9.10.3. |
| Video 9.10.1 | 9.10 | YouTube: liquid O₂ held between magnet poles | Dropped, named in `notes` (the book's rule); its caption paragraph goes with it. |
| 9.12.4 | 9.12 | JPG (no credit): the skewed AB diagram | **Replace, still** (variation): slider for the electronegativity gap (how far B's orbitals sit below A's), a two-orbital LCAO solved live (7.2's secular equations, H_AB fixed); the σ, π and σ* levels move, and each MO's composition is drawn as the share of A and B (bars). **Point: as B's orbitals sink, the bonding orbitals sink with them and take on B's character, so the bonding pair sits nearer B: a polar bond.** Readout c_A², c_B² of the bonding orbital. Opens on the book's moderate skew; zero gap is the homonuclear diagram. The model's parameters are ours, said in the caption. 2D. |
| 9.12.13 | 9.12 | JPG (no credit): NO's diagram, 11 electrons, σ_2p below π | **Faithful copy, still**, inside its note; drawn as printed, with a footnote that the next paragraph puts π_2p below σ_2p for NO (the figure and the text disagree). |
| 9.12.6 | 9.12 | JPG (no credit): HCl's diagram with nonbonding levels | **Faithful copy, still**: the labelled nonbonding levels are the point and nothing varies. |
| Example 9.12.4's image | 9.12 | PNG (no credit): CN⁻'s filled diagram | **Faithful copy, still**. |
| Video in 9.12 | 9.12 | YouTube | Dropped, named in `notes`. |
| mo4, mo6 | 9.14 | PNGs (no credit, hand drawn in red lines): CO's diagram with one electron promoted; O₂'s | **Faithful copies, still**, redrawn in the house level-diagram style (the scans are crude); unnumbered. mo6 labels O₂'s orbitals 3σ⁺, 4σ⁺, 1π … without g/u: corrected through the row. |
| M22 + Example 9.15.2's image | 9.15 | JPGs (no credit): two π orbitals, "gerade" and "ungerade"; a π pair, "vertical +", "horizontal −" | **Fold, replace, still** (variation by choice; two unnumbered images of one scene): an orbital choice (σ_g, σ*_u, π_u, π*_g) drawn as signed lobes in a plane, and an operation choice: inversion (the reader drags a point; its image through the centre appears and the two phases are compared) or reflection in a plane containing the axis. **Point: an orbital is g when every point and its inverse share a phase and u when they differ; reflection splits a π pair into one + and one −.** Readout g or u, + or −. Eyebrow "Figure"; originals shipped. 2D. |
| Example 9.15.3's images (9.15.2, 9.15.3) and its two charts; Exercise 9.15.1's image (9.15.4) | 9.15 | PNGs (no credit, low resolution): O₂'s stick diagram; six π* arrangements; O₂⁻'s stick diagram; two M_L × M_S charts, both wrong | **Replace, moving** (Chapter 8's Example 8.8.12 precedent: a filling and peeling sequence, each step a state the transport reaches): O₂'s two π_g* electrons in six microstates fill the M_L × M_S chart, then terms peel off: ¹Δ_g, ³Σ_g⁻, ¹Σ_g⁺, each with its parity and reflection read off its microstates. Choice π_g*² (O₂) or π_u² (B₂). **Point: the six microstates of two π electrons make three terms, and the Σ terms differ by reflection, the triplet −.** Readout the count C(4, 2) = 6 and the terms. The book's two charts and its answer (¹Δ_g, ³Σ⁺_g, missing ¹Σ_g⁺) get correction footnotes; originals listed. 9.15.2 and 9.15.4 (stick diagrams of O₂ and O₂⁻) stay as faithful copies in the house style. Eyebrow "Figure". 2D. |
| Tables | 9.8, 9.10 | Tables 9.8.1, 9.10.1 | Kept as `div.book-table`. 9.15's two charts are replaced (above). |

### What moves in this chapter

The coupled oscillators of Example 9.1.1; two atoms approaching, in the LCAO maps
(9.2.2 fold) and in the energy curves (9.4.2 + 9.4.3); electrons filling the
period-2 diagram (9.7.4 fold); O₂'s microstate chart filling and peeling (9.15).
Everything else answers sliders and choices and is still.

### 3D

Three mathematical scenes, free orbit, no buttons: water's potential energy surface
(9.1.2, bounded above its floor), σ_1s and σ*_1s as clouds (9.5.1), and the p-orbital
combinations σ, π (9.7.2 + 9.7.3 + 9.7.7). All are point clouds coloured by sign
(3.9's and 6.6's decision) through `F.space.points`. Nothing in this chapter is
physical 3D.

### New simulations proposed (root rule 15)

- **9.11 (or 9.7), a photoelectron spectrum from MO energies** (offered; the
  orchestrator decides where, since the book's 9.11 holds no text on it): N₂'s and
  O₂'s valence MO ladders with their ionization energies (Koopmans, 8.7), a photon
  energy slider; each orbital the photon can empty adds a band at its binding
  energy, π bands with vibrational structure, O₂'s split by the unpaired spins.
  Point: the spectrum's bands are the MO diagram turned on its side. Literature
  energies (NIST, Turner's He I spectra), named.
- **9.4, H₂⁺ with an optimized exponent** (offered, not recommended): ζ as a slider
  in the 1s functions, the curve moving toward the exact 106 pm and 2.8 eV. 9.5's
  text names the gap but not this remedy; the formulas would be ours.
- **9.10, liquid O₂ and N₂ poured past a magnet** (offered, not recommended): it
  replays the dropped video; the magnetism itself is already the readout of 9.10.3.
- Not offered: an excited-state potential-curve figure (9.16 is empty, nothing to
  hang it on), a second H₂ potential in 9.6 (9.1.1 draws it).

## Derivation candidates (root rule 29)

Score = facts imported from outside the section's method + the longest run of moves
the book does not print + joins of independent lines. A block the book prints as
equations with words qualifies whatever its score.

| Where | What | Printed? | Score | Decision |
|---|---|---|---|---|
| 9.1, (9.1.1)–(9.1.7) | the Hamiltonian split and the separated equations | statements | 1–2, under four moves | Stays. |
| Exercise 9.1.1's key | the symbols labelled by underbraces | a key | – | Not a derivation. |
| 9.2, |C_A|² = |C_B|² → C_A = ±C_B | the two combinations | prose and two displays | 1 | Stays. |
| 9.3, (9.3.1)–(9.3.7b) | normalizing ψ± | block with words | qualifies | **Build**: *Derivation · the normalized orbitals of H₂⁺*, ending at (9.3.6) and (9.3.7a, b); facts S real (9.3.4), the atomic orbitals normalized (3.5). Node note: the book's "Equations 9.3.1a and 9.3.1a". |
| 9.3, S(R) | the overlap of two 1s orbitals | "difficult to evaluate … explained here" (no link) | high, but its facts (elliptic coordinates) appear nowhere in the book | Stays (nothing invented; 8.2's precedent). |
| Example 9.3.1 | the density at the midpoint | substitution | 0 | Never a derivation; corrections (below). |
| 9.4, (9.4.1)–(9.4.10) | E± from the LCAO, then in J, K, S | block with words | qualifies | **Build** one record: *Derivation · the energy of H₂⁺*, ending at (9.4.10) through (9.4.5) and (9.4.9); facts ψ± (9.3.7), (9.2.1), E_H (6.4), the normalization ⟨1s_A|1s_A⟩ = 1, the eigenfunction property of 1s_B. Exercises 9.4.1 and 9.4.2 retrace it. Node note: Exercise 9.4.1's key writes a minus in one ket. |
| 9.5, (9.5.4)–(9.5.10) | variational energy and secular equations | block with words | qualifies | Not rebuilt: 7.2 builds both (`7.2/linear-energy`, `7.2/secular`); the text cites them (repeated material, Chapter 3's decision). Corrections: (9.5.5)'s indices. |
| 9.8, (9.8.4) | ΔE± again | one display | 0 | Cites 9.4's derivation. |
| 9.8, 9.10 bond orders | (2 − 1)/2 etc. | substitution | 0 | Stay. |
| 9.9, the unnumbered align | p̂₁₂ψ = −ψ | block, three lines | qualifies | **Build**: *Derivation · the antisymmetry of H₂'s ground state*, ending at −|ψ⟩ (8.6's Example 8.6.1 precedent). |
| 9.14, Π × Π | direct products | a statement | – | Not a derivation; stays, corrected. |
| Example 9.15.3 | O₂'s terms | charts | – | A tabular procedure: the microstate Sim. |

Built: 3 records (9.3, 9.4, 9.9).

## Corrections spotted (root rule 13)

- **intro**: none.
- **summary**: "the 2J+1 is gone" (subscript J; and Ω takes its place, 9.14).
- **9.1**: "the previous lecture" (DFT has not come up); "a 2000 times greater";
  Exercise 9.1.1's key (T̂_nuc's first term without its minus, m_b, R_Bi, \hslash);
  Figure 9.1.1's alt text (shear stress; dropped with the image); "from Wikipeda".
- **9.2**: "repeal each other"; "distances electron from"; |ψ²| for |ψ|² (also
  9.3); the note's "a approximate", "difference phases"; Figure 9.2.2's caption
  "(… through the three-dimensional .)" and "proportional to the orbital's kinetic
  energy" (a stationary state's phase turns at E/ħ, its total energy).
- **9.3**: "Equations 9.3.1a and 9.3.1a"; "Figures 9.3.1" for densities;
  "In this case both S is close to zero"; "is explained here" (no link); Example
  9.3.1: R never stated (R = 2a₀ = 106 pm is implied by C = 0.561), its third line
  drops (e^{−r_A/a₀} + e^{−r_B/a₀})² before substituting numbers, "equation
  9.3.12" ((9.3.6)), "evalulate".
- **9.4**: objectives "intermolecular" (internuclear), "calculation"; the
  definition box calls J "the potential energy of electrostatic repulsion between
  the electron … and the electron" (the attraction of the electron density on A to
  proton B); φ_{1a_A}, φ_{1a_B} (1s); "goes for zero to one"; "the both"; Exercise
  9.4.2's equation numbers; Exercise 9.4.1's key ((1_{Sa} − 1_{Sb}) in the ket, "form
  above", "mulitple", "expaned"); Figure 9.4.3's caption "the molecular orbital
  ΔE₋" (antibonding); "the energy is negative up until … less than 100 pm" and "a
  minimum … at 134 pm" (with the book's own J, K and S, ΔE₊ turns negative at
  1.53a₀ = 81 pm and its minimum is at 2.49a₀ = 132 pm, as Figure 9.4.3 shows:
  the builder words the footnote on the figure's numbers); "(CC BY-SA-NC" (BY-NC-SA).
- **9.5**: objective "H⁺" (H₂⁺); "were created … were created"; {φ_i} printed in
  braces outside maths; "trail wavefunction"; (9.5.5)'s first line sums c_{J,i}φ_j
  in the ket and φ_j|φ_j in the denominator (c_{J,j}, φ_i); the steps note
  "N(N–1)/2 values" (N(N + 1)/2 distinct H_ij and S_ij), "\(c_{ij\})" (broken
  maths), "check here" (no link), "a Solving"; "genera"; "(N) in Figure 9.5.1".
- **9.6**: "muliti-electron"; the note's "\(charge=+2e\)" in maths.
- **9.7**: Figure 9.7.1's caption "σ*_ns (nonbonding)" (antibonding);
  "*σ<sub>ns</sub>****" and "σ<sub>3s</sub><sub>*** </sub>" (σ*, garbled markup);
  "data.In"; (9.7.1), a stray copy of (9.7.2) before its prose; the antibonding
  orbital "called a σ_np_z = np_z(A) − np_z(B)" (σ*_np_z = np_z(A) + np_z(B));
  "pi star (π*) orbital An antibonding … axis.." (a glossary fragment); Figure
  9.7.5's caption "(a) For C₂, with 8 valence electrons (4 from each F atom) … bond
  order of 2" (F₂, 14, bond order 1); "σ_2p_z … slightly higher in energy than the
  degenerate π*" (π_2p) and "higher in energy than the σ_3p_z orbitals" (π_2p);
  Example 9.7.2 "Figures 9.7.6 and 9.7.7", "σ_3p_z>", the π* written π_{3p^*_{x,y}}
  (also Exercise 9.7.2's key); Example 9.7.1's "{term:…}" bold labels are parts.
- **9.8**: objective "existance"; "Figure 9.8.1b is … He₂²⁺. This ion has a total
  of three valence electrons" (He₂⁺); He₂ "gives a (σ_1s)²(σ*_1s)¹ electron
  configuration" ((σ*_1s)²); "(E_H." unclosed; the note's "about 5,200 pm" against
  Table 9.8.1's 5,500 pm, and its binding energy 4.6 × 10⁻⁵ kJ/mol, which the
  builder checks against the measured ≈1.1 mK (≈9 × 10⁻⁶ kJ/mol, Grisenti et al.
  2000) and corrects only if the book's is wrong (Chapter 7's precedent); Figure
  9.8.2's caption "decrease leads to", "(i..e"; Example 9.8.1's first image is an
  empty diagram (its alt text is noise).
- **9.9**: the dropped words (fermion, boson, spin orbitals, H₂); the footnote
  markers ², ³ with no notes; "m_z" for m_s; "test the wavefunction for asymmetry"
  (antisymmetry); "occupied electrons" (by electrons); "each column contains the
  product … for each possible labeling" and "If two columns are swapped, the
  determinant changes sign (this is why it satisfies the exclusion principle!)": in
  (9.9.4) and (9.9.5) the rows are the electrons, so swapping two rows (two
  electrons) changes the sign, and two equal columns (one spin-orbital twice) make
  it vanish; "one electrons of each spin"; "superscript indicated".
- **9.10**: "identifies"; "directly form"; "Equation BO" (×4, (9.8.1)); "Figure
  9.10.1" for O₂'s diagram (9.10.3); "4 to fill the degenerate π*_2p_x and π*_2p_y"
  (the bonding π_2p; two more go to π*); the seven configurations repeat π*_{2p_y}
  where π_{2p_x} and π*_{2p_x} are meant, and give O₂⁺ "π_{2p_x}^1" (π*); "the
  the"; "bondlength"; Figure 9.10.2's caption, a copy of 9.10.1's (bond length
  against the number of valence electrons, neutral molecules and ions); "20%
  oxygen".
- **9.11**: the page is a copy of another book's page (above): one correction
  footnote saying so; "Activity 1 at the end of this chapter" (none); links into
  Zielinski's book kept as printed.
- **9.12**: "Figure 9.12.11" (×2, a figure the page does not have); NO's figure
  draws σ_2p below π_2p, the next paragraph the reverse (a footnote on the figure);
  "H^{δ+} -- Cl^{δ−}"; "Instead, we use a valence bond approach and a molecular
  orbital approach" (kept); printed numbers 9.12.4, 9.12.6, 9.12.13 kept.
- **9.14**: "Russel-Saunders"; "deducted"; "the spin degeneracy S can reach its
  maximum 3" (the multiplicity 2S + 1 = 3, S = 1); "5σ⁺" for CO's HOMO (5σ);
  "close-shell"; "there is not inversion center"; "Π x Π = Σ⁺ + Σ⁻ + [Δ], as the
  symbol in brackets does not allow the oxygen atoms to commute" (garbled: Π_g × Π_g
  gives Σ_g⁺, Σ_g⁻ and Δ_g; with two electrons in the pair the terms are ³Σ_g⁻,
  ¹Δ_g, ¹Σ_g⁺, and the ground state is ³Σ_g⁻); the selection rules' "except Λ = 0 ‡
  Λ' = 0" and "Ω = 0 ‡ Ω' = 0" (a broken glyph; the rule the first means is Σ⁺ ↮
  Σ⁻), and the missing g ↔ u; "(republished in 1989)"; mo6's labels.
- **9.15**: "similar from"; "The total orbital angular momentum quantum number For
  the molecular case" (a fragment); "M_S can range from m_s1 + m_s2 to m_s1 −
  m_s2" (to −m_s1 − m_s2, 8.8's correction); "uses these simple (Laporte rules)"
  (product rules; Laporte's rule is about transitions); Example 9.15.1 titled
  "Closed Shell Configuration" for an open-shell state; "(+)(+) \rightarrow +"
  (TeX printed as prose; the builder sets it as maths); "selcted"; the charts:
  "M_s = 2" (M_S = 1), no M_L row labels (2, 0, −2), the second chart (one row, 1 1 1
  at M_L = 0) wrong after ¹Δ is removed (M_L = 0 holds 1 2 1 → 1 1 1 is ³Σ, leaving
  one microstate, ¹Σ); the answer "^1Δ_g \(^3Σ^+_g" (³Σ_g⁻, ¹Δ_g, ¹Σ_g⁺; a stray
  "\(" that KaTeX cannot parse, the draft's one maths error); "One of the orbitals
  will be +, the other −" gives −, not +.

## Licences of the figures

Pages: 9.14 CC BY 4.0 at the source, shared BY-NC-SA; every other section CC
BY-NC-SA 4.0; the summary untagged (the book's). Figures: Jim.belk via Wikipedia CC
BY-SA 3.0 (Example 9.1.1's image: shipped under its own licence, its credit kept);
AimNature via Wikipedia (9.1.2: the caption names no licence; Wikipedia's file is
CC BY-SA 3.0, the builder confirms); Ümit Kaya via LibreTexts CC BY-NC (9.2.1,
9.10.1, 9.10.2); Hanson et al. via ChemEdDL, printed "CC BY-SA-NC" (9.4.2); the
Averill–Eldredge figures printed "CC BY-SA-NC; anonymous" (9.5.1, 9.7.1–9.7.7,
Examples 9.7.1, 9.7.2; the source is CC BY-NC-SA 3.0); "Anonymous by request"
(9.10.3); "Inspire" (9.8.2, licence not stated); no credit: 9.1.1, 9.2.2 and the
note's animation, 9.3.1, 9.3.2, 9.4.3, 9.5.2, 9.6.1, 9.8.1, Example 9.8.1's two,
9.12.4, 9.12.6, 9.12.13, Example 9.12.4's, mo4, mo6, M22 and the five 9.15 PNGs,
shipped under the page's licence with `notes` saying the book gives none (Chapter
3's decision). **Not shipped unless the orchestrator decides otherwise**: 9.8.2
(INSPIRE plot, licence unknown); the thumbnail of the intro (not printed).

## What is new to OmniStax here

- **Empty sections** (9.13, 9.16): a section page with no body at all. Root rule 11
  keeps a section a page; root rule 21 invents nothing. Proposed: listed in
  `chapter.json` (done) and not built, so the contents show them as the book does,
  unbuilt (orchestrator).
- **A section whose body is another book's page** (9.11, the same transclusion as
  19.E): proposed built as a page with the book's words and one correction footnote,
  its exercise moved to 1.9 (orchestrator).
- A box that closes before its solution ends (Examples 9.7.1, 9.7.2, 9.8.1,
  9.12.4): the book's markup; proposed: the builder keeps the tail inside its
  example.
- Two integrals named like 8.3's and 8.7's but one-electron: separate concepts
  ("Coulomb integral of H₂⁺", "Exchange integral of H₂⁺") with their own symbols
  `J_int`/`J_AB`, `K_int`/`K_AB`, since `J` and `K` are untyped keys of other
  chapters.
- mhchem's triple bond `#` (`\ce{C#C}`, Table 9.10.1) and `\ce` inside figure
  captions and exercise titles (draft tool fixed, below).
- No new type: every quantity is energy, length, mass, charge, wavefunction or
  operator. 50 new symbols, 35 typed with macros; constants, coefficients, charge
  numbers, χ, Λ, Ω, M_L, M_S untyped and in ink. ψ, N and φ_i are redefined in 9.9
  (`redefines`).

## The chapter's answer to root rule 23

Bonding is usually taught as boxes and arrows. Here it should arrive as something
the reader watches happen. A light mass shivers around a heavy one and the
Born–Oppenheimer picture is obvious before the equation (9.1). Two hydrogen atoms
drift together; their orbitals' waves add or cancel between the nuclei (9.2), the
overlap grows (9.3), and the energy curves are drawn by the approach itself: J and
K deepen, the protons push back, and one curve finds a well at 132 pm while the
other never does (9.4). The orbitals then turn in space, σ round the axis, π split
by a plane, the antibonding ones cut across (9.5, 9.7). Electrons drop into the
period's diagrams one by one, bond order climbing to N₂ and O₂ left with two
unpaired spins (9.7, 9.10); He₂ fails because each antibonding electron costs more
than a bonding one gains (9.8); a slider pulls a diagram toward the more
electronegative atom and the bond becomes polar (9.12). Last, the same counting
that named atomic states names O₂'s: six microstates, three terms (9.15). The
thread: a molecular orbital is two atomic waves interfering, and every rule of the
chapter is what that interference does to the energy.

## Tool changes made for this chapter

- `tools/md2html.py`: in `\ce{…}`, mhchem's triple bond `#` becomes `{\equiv}`
  (Table 9.10.1's `\ce{C#C}` and `\ce{N#N}`, which KaTeX read as a macro parameter);
  a figure row's `_caption` and an exercise's `title` now pass their inline maths
  through the same KaTeX fixes as the text (`\ce` in 9.2.1's, 9.4.3's, 9.8.2's,
  9.10.3's and 9.12.13's captions and Exercise 9.8.1's title). `tools/lt2md.py` is
  unchanged, so no source.md of Chapters 1–8 can differ; their drafts were compared
  old against new in memory (nothing written): only the draft-only `_caption` of
  5.1, 5.3, 5.9 and 8.8 changes (`\ce{HCl}` → `\mathrm{HCl}`, ½ → `\tfrac12`), no
  `text.html` draft changes. Every maths string of the 19 Chapter 9 drafts, rows
  included, renders in KaTeX (678 strings) except 9.15's printed "\(" (a
  correction).
