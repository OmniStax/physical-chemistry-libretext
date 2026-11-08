# Exploration: Chapter 8, Multielectron Atoms

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 8`),
every page read in full, the chapter's 27 images looked at (the SVGs rendered
through sharp). The landing page (11785) prints one paragraph of its own and a
"Thumbnail" credit (Neon Atom, CC BY 3.0, BruceBlaus via Wikipedia), so the
chapter has an **`intro/` page** (root rule 21.1); the thumbnail is not shown
on the page and its credit is left out with it (Chapter 3's precedent). 8.S
(550559) is a real summary page of seven bullets, routed to `summary/`. **8.E
(13438) has no body** (`exercises/source.md` holds only its title): nothing is
routed from it (root rule 9). No stray passage elsewhere in the book tests this
chapter (of the N.E pages only 19.E and 21.E hold anything, and neither is
about atoms). The exercises are the inline boxes and one example box printed
without a solution, each testing its own section.

The chapter has two halves. 8.1–8.3 and 8.7 are the quantitative half (atomic
units, helium by perturbation and variation, the Hartree and Hartree–Fock
equations, the self-consistent field, Koopmans' theorem); 8.4–8.6 bring in
spin and antisymmetry; 8.8–8.11 are the bookkeeping of angular momentum (term
symbols, J, Hund's rules, spectra). Much of the second half is combinatorial
and tabular, and its pages are the roughest in the book so far (8.8 above all:
three figures printed "8.8.1", two hand-drawn scans, a chain of microstate
charts with two wrong tables, "microstate" used for "level"). What moves in
the chapter: the SCF loop (iterations are a clock), photons and atoms in the
two experiments of 8.4, and the step-by-step peeling of a microstate chart.
What varies: a field splitting levels, the exchange of two electrons, a spin
pair's arrangement, L and S coupling to J, and a spectrum assembled from
transitions.

## Pages

| Page | LibreTexts id | Licence | Authors (tag) | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11785 | BY 4.0 (tag) | none | none: one paragraph and a thumbnail credit | | | | | | | |
| 8.1 Atomic and Molecular Calculations are Expressed in Atomic Units | 13439 | **BY-SA 4.0** | Wikipedia | none | 1 | 0 | 0 | 0 | 2 | 0 | 0 / 2 |
| 8.2 Perturbation Theory and the Variational Method for Helium | 13440 | BY 4.0 | frioux | Perturbation Theory of the Helium Atom; Variational Method Applied to the Helium Method (five `###` trial wavefunctions); Summary | 0 | 0 | 0 | 0 | 0 | 1 (The Hartree Unit of Energy) | 17 / 28 |
| 8.3 Hartree-Fock Equations are Solved by the Self-Consistent Field Method | 13441 | BY-NC-SA 4.0 | Zielinski | Unsolvable Systems; The Hartree Approximation; The Self-Consistant Field (SCF) Approach to the Variational Method | 0 | 0 | 2 | 0 | 0 | 3 (Three Energies within the Hartree Approximation; an untitled emphasis box; Shielding and Effective Charges Concepts are Useful, holding Figure 8.3.2), one pulled quote | 5 / 17 |
| 8.4 An Electron has an Intrinsic Spin Angular Momentum | 13442 | BY-NC-SA 4.0 | Zielinski | The Zeeman Effect: Breaking Degeneracies with Magnetic Fields; Electron Spin and the Stern-Gerlach Experiment; Spin Eigenstates and Eigenvalues | 0 | 1 | 5 (two printed "8.4.2") | 0 | 0 | 2 (warning: Electrons are not Actually Spinning; Properties of Spin Eigenstates) | 12 / 22 |
| 8.5 Wavefunctions must be Antisymmetric to Interchange of any Two Electrons | 13443 | BY-NC-SA 4.0 | Zielinski | The Exchange Operator; The Pauli's Exclusion Principle | 0 | 4 (printed 8.5.1, 8.5.2, 8.5.4, 8.5.5) | 1 | 0 | 0 | 1 (Bosons and femions), two pulled quotes | 9 / 16 |
| 8.6 Antisymmetric Wavefunctions can be Represented by Slater Determinants | 13444 | BY-NC-SA 4.0 | Zielinski | Determinantal Wavefunctions | 3 | 4 (printed 8.6.1, 8.6.2, 8.6.3A, 8.6.3B) | 2 | 0 | 0 | 1 (untitled emphasis: Slater, Heisenberg and Dirac) | 13 / 26 |
| 8.7 Hartree-Fock Calculations Give Good Agreement with Experimental Data | 13445 | BY-NC-SA 4.0 | Zielinski | Hartree-Fock Energy; Koopmans' Theorem; Summary | 2 | 0 | 1 (printed 8.7.2; there is no 8.7.1) | 0 | 1 | 2 (Exchange Energy; Advanced: Electron Correlation and the "Exchange Hole", holding Figure 8.7.2) | 9 / 18 |
| 8.8 Term Symbols Gives a Detailed Description of an Electron Configuration | 13446 | BY 4.0 | Mattanjah de Vries | The Total Orbital Angular Momentum Quantum Number: L; The Total Magnetic Quantum Number: M_l (with `###` The Total Spin Magnetic Quantum Number: M_s); The Total Intrinsic Spin Quantum Number: S; The Total Angular Momentum Quantum Number J; Multiplicity; Constructing Term Symbols; Shortcuts | 12 | 0 | 3 (all printed "8.8.1") | 5 (two spin sketches, three microstate pictures) | 14 (Table 8.8.1 and 13 microstate charts in Example 8.8.12) | 1 (Note) | 5 / 13 |
| 8.9 The Allowed Values of J - the Total Angular Momentum Quantum Number | 13447 | BY-NC-SA 4.0 | Zielinski | L-S Coupling of Angular Momenta | 0 | 2 | 2 | 0 | 0 | 0 | 5 / 12 |
| 8.10 Hund's Rules Determine the Term Symbols of the Ground Electronic States | 13448 | BY-NC-SA 4.0 | Delmar Larsen | Hund's Rules (three `###`: First, Second, Third Rule) | 3 (8.10.1 without a solution) | 1 (printed 8.10.3) | 1 | 0 | 0 | 0 | 0 / 0 |
| 8.11 Using Atomic Term Symbols to Interpret Atomic Spectra | 13449 | BY-NC-SA 4.0 | Zielinski | Spin-Orbit Coupling; Atomic Spectroscopy | 1 | 3 (printed 8.11.3–8.11.5) | 3 (two printed "8.11.1") | 1 (in Example 8.11.1) | 2 (the six sodium lines; Table 8.11.1) | 1 (Splitting of the Sodium D Line) | 2 / 5 |
| summary (8.S) | 550559 | untagged (the book's) | Kyle Crabtree | none: seven bullets | | | | | | | 0 / 0 |
| 8.E | 13438 | | | empty | | | | | | | |

Objectives: all eleven sections (8.1 one, 8.2 one, 8.3 three, 8.4 three, 8.5
two, 8.6 three, 8.7 three, 8.8 two, 8.9 one, 8.10 two, 8.11 two), none with a
lead-in sentence. Two sections close on "## Summary" (8.2, 8.7), which goes to
`summary_html`. No page carries a Contributors list: the credits are the tags'
authors (8.1 Wikipedia's "Atomic units"; 8.2 frioux; 8.3–8.7, 8.9, 8.11
Theodore Zielinski; 8.8 Mattanjah de Vries; 8.10 Delmar Larsen; the summary
Kyle Crabtree; the intro none, so the book's). Every section opens on prose
before its first `<h2>` except 8.1 (no `<h2>` at all) and 8.10, whose opening
paragraph is one; each opening block needs a header of the agent's (root rule
3), proposed below, which the builder puts through the humanizer.

### The intro page

`intro/source.md`: one paragraph (atoms with more than one electron; hydrogen
the only one-electron atom; how the extra electrons behave), then the thumbnail
credit, which is dropped with the thumbnail. One block, header proposed "Atoms
with More than One Electron". Its first words are garbled ("Electrons with more
than one atom", for atoms with more than one electron): a correction.

### The summary page (8.S)

`summary/source.md`, the chapter's `summary/` page, named by `chapter.json`'s
`summary` record (550559): seven bullets, no header, no maths beyond inline.
One block, header proposed "Multielectron Atoms in Brief". Corrections: the
term symbol is written $^{2S+1}\mathbf{L}_{2J+1}$ (the subscript is J); "only
two electrons may share the same wavefunction" (the same spatial orbital);
Slater determinants "are called linear combinations of atomic orbitals" (they
are not; LCAO, 7.2, is a different construction). Each bullet links the section
that works it (8.3, 8.4, 8.5, 8.6, 8.8, 8.10).

### Per section

- **8.1** No `<h2>`. Proposed blocks: "Writing Quantities in Atomic Units" (the
  opening, the three notations, Table 8.1.1, Example 8.1.1) and "Derived Units
  and the Bohr Atom" (Table 8.1.2, α, the Bohr-model list). Concepts (new):
  atomic units, the hartree, the fine-structure constant, the helium Hamiltonian
  in atomic units. Reinforced: Bohr radius (1.8), reduced Planck constant (3.1),
  the multi-electron Hamiltonian (6.7), the Bohr model (1.8). Tables kept.
- **8.2** Opening (proposed "Two Ways into Helium"). Perturbation Theory of the
  Helium Atom: *zero-order Hamiltonian* (8.2.1), the split (8.2.2), E¹
  (unnumbered), the product ψ⁰, (8.2.3), E¹ = 34.0 eV, (8.2.4), E⁰ (unnumbered),
  E², thirteenth order, the note "The Hartree Unit of Energy". Variational
  Method: E_trial (8.2.5), five trial wavefunctions as `###` (8.2.6)–(8.2.17),
  Hylleraas, Chandrasekhar. Summary (to `summary_html`): H⁻ and the importance of
  correlation at small Z. Concepts (new): zero-order Hamiltonian, the
  perturbation split of helium, helium's first-order energy, judging an
  approximation against experiment, electron correlation, the five variational
  energies, the Hylleraas wavefunction. Reinforced: perturbation theory and the
  first-order correction (7.4), the variational method and E_trial (7.1), the
  hartree (8.1), helium's true energy (7.1), the orbital approximation (6.7).
  No figure and no exercise in the book.
- **8.3** Opening (proposed "One Step beyond Ignoring Repulsion"). Unsolvable
  Systems: V_ne (8.3.1), V_ee, Ĥ (8.3.2), the multi-electron wavefunction
  (8.3.3). The Hartree Approximation: the product *ansatz*, the one-electron
  equations, V_nucleus, the mean field and ρ, the note "Three Energies"
  ((8.3.4), J_{j,k}), ε_j, *Hartree-level of theory*, the emphasis box on
  ionization energies. The SCF Approach: the chicken-and-egg paragraph, the
  algorithm, Figure 8.3.1, the pulled quote on Fock, the note "Shielding and
  Effective Charges" ((8.3.5), Figure 8.3.2), the closing paragraph on 3d and 4s.
  Concepts (new): Hartree approximation, electron charge density, mean-field
  potential, Hartree equations, Coulomb integral, the Hartree orbital energy,
  the self-consistent field method, the limits of the screening model.
  Reinforced: orbital approximation, electron–electron repulsion,
  multi-electron Hamiltonian (6.7), shielding and effective nuclear charge (7.1),
  expectation value (3.7).
- **8.4** Opening (proposed "A Line Where None Should Be"): the hypothetical
  microwave experiment, Figure 8.4.1, 28 GHz at 10⁴ G. The Zeeman Effect:
  *magnetic dipole*, E_B (8.4.1), Zeeman, ⟨E⟩ (8.4.2), μ_B (8.4.3), *Bohr
  magneton*, Figure 8.4.2 (Zeeman), the m_l = +1 paragraph. Electron Spin and the
  Stern–Gerlach Experiment: spin postulated, Figure 8.4.2 again (Stern–Gerlach),
  *Electron Spin Quantum Number*, Goudsmit and Uhlenbeck, silver's unpaired
  electron. Spin Eigenstates and Eigenvalues: Ŝ², Ŝ_z (8.4.4), s = ½ (8.4.5),
  α and β, Figure 8.4.3, S_z (8.4.6), the warning box, the note "Properties of
  Spin Eigenstates" ((8.4.7)–(8.4.10)), hν = E_α − E_β (8.4.11), Figure 8.4.4,
  (8.4.12), γ_s, *spin gyromagnetic ratio*, *g-factor*, Exercise 8.4.1, Dirac.
  Concepts (new): magnetic field, magnetic dipole moment, energy of a dipole in
  a field, gyromagnetic ratio, Bohr magneton, Zeeman energy, electron spin,
  Stern–Gerlach experiment, spin angular momentum, spin operators, spin quantum
  number, spin magnetic quantum number, spin eigenvalue equations, s = ½, spin
  states α and β, electron spin resonance, spin gyromagnetic ratio, the
  g-factor. Reinforced: Zeeman effect (6.6), orbital angular momentum and its
  operators (6.3), spherical harmonics (5.8), orthonormality (3.5), E = hν (1.2).
- **8.5** Opening (proposed "Which Electron Is Which?"): indistinguishability,
  the helium equation, the product of spin-orbitals, the unphysical labels. The
  Exchange Operator: the guide statement, e^{iφ}, (8.5.1)–(8.5.4), Exercises
  8.5.1 and 8.5.2, P̂₁₂ (8.5.5), the note "Bosons and femions" ((8.5.6)),
  Exercises 8.5.4 and 8.5.5. The Pauli Exclusion Principle: P̂₁₂ commutes with
  Ĥ, ψ⁻ (8.5.7), ψ⁺ (8.5.8), the pulled quote, the three limiting symmetric
  functions (8.5.9), ψ⁻ = 0, Figure 8.5.1, the closing quote. Concepts (new):
  indistinguishability, spin-orbital, the exchange phase ±1, exchange operator,
  permutation symmetry, boson, fermion, antisymmetry of electronic
  wavefunctions, the antisymmetric two-electron combination, Pauli exclusion
  principle. Reinforced: multi-electron wavefunction (6.7), |ψ|² (3.4),
  Euler's formula (2.3), commuting operators (4.6), eigenvalues (3.3).
- **8.6** Opening (proposed "An Antisymmetric Helium Atom"): Figure 8.6.1, the
  product (8.6.1)–(8.6.2), the combination (8.6.3), spin-orbital again, (8.6.4),
  Example 8.6.1 (with its Hint), Exercise 8.6.1, the first excited state, Figure
  8.6.2, the four functions (8.6.6). Determinantal Wavefunctions: the emphasis
  box, (8.6.7)–(8.6.9), Example 8.6.2, Exercise 8.6.2, the physical picture, the
  four determinants (8.6.10)–(8.6.13), the two bullets, ψ₂, ψ₄, ψ₁, ψ₃ as
  determinants, Example 8.6.3 (carbon, 720 terms), Exercises 8.6.3A and 8.6.3B.
  Concepts (new): electron configuration, microstate, spatial and spin parts of
  two-electron wavefunctions, Slater determinant, its antisymmetry, combinations
  of determinants. Reinforced: determinant (7.2), Pauli, spin-orbital,
  antisymmetry (8.5).
- **8.7** Opening (proposed "From Hartree to Hartree–Fock"): the Hartree
  method's flaw, (8.7.1)–(8.7.3), the HF equations (8.7.4), the four terms,
  (8.7.5), the *exchange* term, (8.7.6) *Fock operator*, (8.7.7), the note
  "Exchange Energy", Example 8.7.1 (a stub: Ĥ⁰(1) for helium, no question, no
  solution), the average field, *Hartree-Fock wavefunctions*, *SCF*. Hartree-Fock
  Energy: ε_i (unnumbered align), occupied and virtual orbitals, Table 8.7.1.
  Koopmans' Theorem: the frozen-orbital model, (8.7.8), (8.7.9), correlation,
  Example 8.7.2 (the electron affinity derived), the advanced note (Figure
  8.7.2, the exchange hole). Summary (to `summary_html`). Concepts (new):
  Hartree–Fock method, exchange integral, Hartree–Fock equations, Fock operator,
  exchange interaction, the Hartree–Fock orbital energy, virtual orbital,
  Hartree–Fock energy, frozen-orbital approximation, Koopmans' theorem, exchange
  hole. Reinforced: Hartree equations, Coulomb integral, SCF (8.3), Slater
  determinant (8.6), electron correlation (8.2), ionization energy (7.1).
- **8.8** Opening (proposed "Quantum Numbers of a Whole Atom"; one sentence).
  The Total Orbital Angular Momentum Quantum Number: L: the vector picture,
  Figure 8.8.1 (the l = 1 cones), (8.8.1), the wrong "same direction" sums,
  (8.8.2), *closed-shell*, *open-shell*, Examples 8.8.1, 8.8.2. M_l: (8.8.3),
  Example 8.8.3; M_s (`###`): (8.8.4), Example 8.8.4. S: (8.8.5), Examples
  8.8.5–8.8.8. J: the second Figure 8.8.1 (L–S cones), Table 8.8.1.
  Multiplicity: the third Figure 8.8.1 (spin arrows), two unnumbered sketches.
  Constructing Term Symbols: the letter code, multiplicity, the ordering rules
  (Hund's, unnamed), Examples 8.8.9–8.8.12 (Zr: 13 microstate charts and three
  microstate pictures), the note. Shortcuts: p¹ = p⁵, p² = p⁴. Concepts (new):
  closed and open shells, L, M_l, M_s, S, J, spin multiplicity, term symbol,
  finding the terms of a configuration, Hund's rules (stated here first, named
  in 8.10), electron–hole equivalence. Reinforced: angular momentum quantum
  number, magnetic quantum number (6.2), vector model (6.3), microstate (8.6),
  spin magnetic quantum number (8.4).
- **8.9** Opening (proposed "Electronic States and Their Labels"): j–j and L–S
  coupling. L-S Coupling: (8.9.1)–(8.9.3), the spin–orbit interaction named,
  Figure 8.9.1, the magnitudes (bold "Orbital Angular Momentum", "Spin Angular
  Momentum", "Total Angular Momentum" kept bold), (8.9.4), (8.9.5), the j series,
  Figure 8.9.2, the term symbol again, hydrogen's ²S₁/₂ read aloud, its
  degeneracy, Exercises 8.9.1, 8.9.2. Concepts (new): L–S coupling, j–j
  coupling, spin–orbit interaction (named here first, explained in 8.11), the
  magnitudes and projections of L, S and J, the degeneracy of a term.
  Reinforced: term symbol, multiplicity, J (8.8), vector model (6.3).
- **8.10** Opening (proposed "Filling Orbitals of Equal Energy"): *Aufbau*.
  Hund's Rules: the three rules, Example 8.10.1 (no solution), First Rule
  (Figure 8.10.1, exchange energy), Second Rule, Third Rule (holes), Examples
  8.10.2, 8.10.3, Exercise 8.10.3. Concepts (new): Aufbau principle, why
  parallel spins lie lowest, finding a ground-state term symbol. Reinforced:
  Hund's rules, electron–hole equivalence (8.8), exchange interaction (8.7).
- **8.11** Opening (proposed "Lines That Are Not Single"): multiplets in Hα,
  Figure 8.11.1 (the plate), *fine structure*, He⁺. Spin-Orbit Coupling: the 2p
  states, the bar-magnet picture, *spin-orbit interaction*, E_s-o and Ĥ_s-o
  (unnumbered), the second Figure 8.11.1 (OpenStax current loop). Atomic
  Spectroscopy: Δl, Δm_l (unnumbered), the Russell–Saunders rules (8.11.1),
  (8.11.2), their failure in heavy atoms, Example 8.11.1 (sodium: an image and a
  table of six wavelengths), the note on the D line, the Hα doublet, Table
  8.11.1, Exercises 8.11.3, 8.11.4, White's splittings, Figure 8.11.2, the
  0.328 cm⁻¹ result, Exercise 8.11.5. Concepts (new): fine structure,
  one-electron selection rules, Russell–Saunders selection rules, hydrogen's
  n = 2, 3 fine structure, sodium D lines. Reinforced: spin–orbit interaction,
  term symbol, term degeneracy (8.8, 8.9), selection rule (5.5), line spectrum
  and the Balmer series (1.4, 1.5).

## Equation numbers

One number per display, an `align` included, as the converter's `n=` gives
them: 77 numbered displays of 157 (8.2 17, 8.3 5, 8.4 12, 8.5 9, 8.6 13, 8.7 9,
8.8 5, 8.9 5, 8.11 2; 8.1, 8.10 and the two front pages none). The labels are
borrowed from other books and lag or lead the printed numbers everywhere (8.9's
`8.11.3` prints (8.9.1); 8.7's `2.7` prints (8.7.1); 8.6's `8.6.10C` prints
(8.6.13) and `8.6.10D` (8.6.12)), so the builder reads numbers from the draft.
Citations that miss (corrections): 8.2 "Equation 9-28" twice, a label on no
page (the unnumbered display of E¹ = ⟨ψ⁰|Ĥ¹|ψ⁰⟩; the builder links that display,
and 7.4's (7.4.18) where the general expression is meant); 8.3 "the
electron-electron term (Equation 8.3.1)" ((8.3.1) is the nuclear–electron term;
the electron–electron one is unnumbered); 8.6 "(Equation 8.6.3C2 and
8.6.3C4)" for the functions that need combining (ψ₁ and ψ₃, and all four print
as one (8.6.6)); 8.6 "Equations 8.6.10A–8.6.10D" (prints 8.6.10–8.6.12 and
misses (8.6.13)); 8.6 "igure 8.6.2"; 8.11 "the photographic spectrum shown in
Figure 8.11.2" (Figure 8.11.1); 8.4 "(the spin version of Equation 8.4.1."
(unclosed); 8.7 cites (8.7.2) before printing it. 8.9's align
"m_j = m_ℓ + m_s, j = |ℓ + s|" gets (8.9.4) and the magnitudes (8.9.5).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercise boxes**: 15 printed (8.4.1; 8.5.1, 8.5.2, 8.5.4, 8.5.5;
  8.6.1, 8.6.2, 8.6.3A, 8.6.3B; 8.9.1, 8.9.2; 8.10.3; 8.11.3, 8.11.4, 8.11.5),
  15 cards (8.10.3 asks six atoms in one box, one card). **5 keyed**, available
  now: 8.5.5, 8.6.1, 8.6.2 (its expansion is wrong and it ends on a question it
  does not answer: corrected under the card), 8.6.3A (bracket notation and
  typos: corrected), 8.10.3 (all six right). **10 unkeyed**, available with AI
  solutions: 6 explain or prove (8.5.1 permute the product function and say
  what happens; 8.5.2 e^{2iφ} = 1 from Euler; 8.5.4 permutation symmetry; 8.6.3B
  critique the stick diagram, which the book calls "not a solved problem"; 8.11.3
  confirm the nine term symbols; 8.11.5 which transitions make Hα), 4 compute
  (8.4.1 the g-factor from 28 GHz at 10⁴ G; 8.9.1 ¹S₀; 8.9.2 ¹P₁; 8.11.4 the
  degeneracies and the totals 8 and 18).
- **Example boxes without a solution**: Example 8.10.1 (rank six terms by
  Hund's rules) is a question, not an example (Chapter 3's decision for 3.4):
  one more unkeyed card, compute. Example 8.7.1 has no question either (one
  line, Ĥ⁰(1) for helium): kept as printed, not an exercise.
- **Worked examples**: 21 (8.1.1; 8.6.1–8.6.3; 8.7.1, 8.7.2; 8.8.1–8.8.12;
  8.10.2, 8.10.3; 8.11.1), kept whole; 19 carry a Solution part (8.7.1 is a stub,
  8.7.2 works its derivation inline). 8.6.1 and 8.7.2 are built as derivations.
- **Conceptual questions, problems, 8.E**: none printed; 8.E is empty.
- **Placement (root rule 12)**: every question tests its own section; nothing
  is held or moved. 8.5.2 and 8.4.1 overlap derivations of their sections: AI
  solutions cite them (Chapter 5's decision).
- **Totals**: 16 cards: 5 keyed, 11 unkeyed (6 explain or prove, 5 compute, 0
  sketch).
- **Concepts the book leaves untested** (no exercise in 8.1, 8.2, 8.3, 8.7 or
  8.8): **proposed new: 9**: 8.1 one (write helium's −2.90372 E_h, the bohr and
  the atomic unit of velocity in SI and eV); 8.2 two (E⁰ + E¹ for Li⁺ with
  E⁰ = −Z²E_h and E¹ = 5Z/8 E_h, against experiment's −7.280 E_h; the relative
  deviation of the Hylleraas energy, which the reader recomputes); 8.3 one (which
  quantity the SCF loop tests for convergence, and why the Hartree equations
  cannot be solved in one pass); 8.4 one (the Zeeman splitting μ_B B of a 2p
  level at 1 T in cm⁻¹, 0.467); 8.7 two (Koopmans: neon's ionization energy from
  its 2p orbital energy, given, against experiment; the share of helium's energy
  Hartree–Fock misses, from Table 8.7.1); 8.8 two (the terms and levels of p²,
  ³P₂,₁,₀ ¹D₂ ¹S₀, with 15 microstates; the number of microstates of p³ and its
  terms ⁴S, ²D, ²P).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

The point named is what the reader should see before reading anything. Rule
14 as rewritten today: a figure starts from the book's and usually replaces it;
motion where the idea moves; a point seen at once; little effort to read.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 8.3.1 | 8.3 | PNG flowchart, no credit: guess, density, potential, solve, density, "same as before?", stop | **Replace, moving** (iterations are the figure's clock; the flowchart's arrows are symbolic, the loop is a sequence in time). A real Hartree calculation for helium on a radial grid, run in the figure: the book's boxes are the frame and light in turn; beside them the 1s radial density and the potential of the other electron, redrawn each cycle, and below a plot of the orbital energy ε and total energy E against iteration, settling on −0.918 E_h and −2.862 E_h (the −5.72 R_H of Table 8.7.1). Choice of starting guess (bare nucleus ζ = 2, hydrogen ζ = 1, ζ = 3), slider for the mixing fraction. **Point: from any guess the density and ε stop changing after a few cycles; that fixed point is the self-consistent field.** Readout ε_k, E_k and the change in ρ; one transport step per iteration. 2D. Original shipped (no credit, page licence). |
| 8.3.2 | 8.3 | Two PNG panels (CC BY 4.0, Larsen): orbital energies against Z for n ≤ 5, no energy scale; a zoom on 3d, 4s, 4p from K to Cr | **Faithful copy, still** (standardisation: the curves are schematic, with no energy axis to put a slider on). Both panels as one figure; the element circles of the second carry hover names. Not replotted from data, since the book's figure has no numbers to open on. |
| 8.4.1 + 8.4.4 | 8.4 | SVG (CC BY-NC 4.0, Kaya): the spectrometer in perspective, photons as red dots; SVG (CC BY-NC, Kaya): the β → α absorption in a nonzero field | **Fold, replace, moving, locked view** (the book's perspective, rule 28.2): photons stream from the generator through the sample to the detector (kinematic: the dots move); beside it the α and β levels drawn against B. Sliders: B (0–1.5 × 10⁴ G, in tesla too), ν (1–40 GHz). **Point: the sample absorbs only when hν equals the gap between α and β, and that gap grows in proportion to B.** At resonance the stream through the sample thins, the detector trace dips and the β → α arrow lights. Readout hν = gμ_B B with numbers. Opens on 10⁴ G and 28 GHz. The book returns to Figure 8.4.1 to interpret 8.4.4 ("the hypothetical microwave experiment in Figure 8.4.1"): one scene drawn twice. |
| 8.4.2 (first) | 8.4 | SVG (CC BY-NC, Kaya): 2p and 1s with no field and with a field; three 2p sublevels, three arrows | **Replace, still** (variation): slider B_z; the 2p level splits into m_l = +1, 0, −1, μ_B B_z apart, 1s does not; three emission arrows (symbolic, transitions) and a strip of the Lyman α line at 121.6 nm splitting into three. The true splitting is tiny (0.47 cm⁻¹ at 1 T against 82 259 cm⁻¹): drawn exaggerated, the readout gives the true numbers and the factor (rule 28.4). **Point: one line with no field, three equally spaced lines with one, the spacing proportional to B.** Readout ⟨E⟩ = E_n + μ_B B_z m_l with numbers. Keeps the number 8.4.2 (it is printed first; Chapter 7's precedent). Caption correction through the row: "2s → 1s" is 2p → 1s. |
| 8.4.2 (second) | 8.4 | SVG (CC BY-NC 4.0, Kaya): Stern–Gerlach, oven, two slits, magnet, screen with two spots | **Replace, moving, locked view** (the book's perspective): atoms fly from the oven through the slits and the magnet to the screen (kinematic: the beam), which fills dot by dot. Choice: a classical magnetic moment at any orientation, or a silver atom (one unpaired electron). **Point: the classical beam would spread into a smear; the real one splits into two spots, because the spin moment's component along the field takes only two values.** Readout the deflecting force's two values ±μ_B dB/dz. Shown unnumbered (eyebrow "Figure"), with a correction footnote saying the book prints it as a second Figure 8.4.2; the citation "split into two beams … (Figure 8.4.2)" links to it, the other two to the Zeeman figure. |
| 8.4.3 | 8.4 | JPG (printed "CC BY-SA-NC 3.0; Anonymous"): an electron as a spinning ball with bar-magnet poles, beside a magnet | **Faithful copy, still** (standardisation; the warning box says electrons do not spin, and nothing here varies). Caption correction through the row: the caption calls m_s = +½ "aligned with the field" and lower in energy, while the text puts α (m_s = +½) higher, its moment against the field: the moment is opposite to the spin. Licence printed BY-SA-NC (BY-NC-SA). |
| 8.5.1 | 8.5 | JPG, no credit: beryllium's 1s²2s², a wrong 2s pair (two up) and a right one | **Faithful copy, still**. Its caption is a broken sentence (correction through the row). Original shipped. |
| Sim | 8.5 | none | **Sim, still** (variation; the swap is a morph on input, no clock): two particles in a 1D box in states a and b (choices n_a, n_b = 1–4), ψ(x₁, x₂) drawn as a signed map over the (x₁, x₂) square; choice product, symmetric or antisymmetric; a swap control that reflects the map across the diagonal x₁ = x₂. **Point: exchanging the particles mirrors ψ across the diagonal; the antisymmetric combination comes back with its sign flipped and |ψ|² unchanged, is zero all along the diagonal, and vanishes everywhere when a = b (Pauli).** Readout P̂₁₂ψ = ±ψ with the sign, and ψ⁻ = 0 when a = b. The box states are 3.5's, so the reader knows them. 2D. |
| 8.6.1 + 8.6.2 | 8.6 | Two PNGs, no credit: helium's ground configuration; its four 1s¹2s¹ configurations | **Fold, replace, still** (the book draws one stick diagram five times): helium's level diagram with a choice of state (ground 1s², configurations 1–4); beside it that state's Slater determinant ((8.6.7), (8.6.10)–(8.6.13)) and which of ψ₁–ψ₄ (8.6.6) it enters. **Point: one stick diagram is one determinant; configurations 2 and 3 are ψ₂ and ψ₄ by themselves, while 1 and 4 appear only together, as ψ₁ and ψ₃.** Originals shipped. |
| 8.7.2 | 8.7 | GIF, no credit: (A) a flat line at 1, (B) a curve rising from 0 to 1 against inter-electron distance | **Replace, still, graph** (variation by choice): the conditional density of the other electrons around one at r = 0, with a choice of Hartree or Hartree–Fock and of same or opposite spin. The Hartree–Fock curve is the exchange hole of the uniform electron gas, 1 − 9[(sin x − x cos x)/x³]² with x = k_F r (Slater, Phys. Rev. 81, 385 (1951); source named in the figure's notes: literature allowed with its source named), and the hole's missing charge is shaded. **Point: Hartree–Fock clears the neighbourhood of an electron of others with its own spin, Hartree does not, and opposite spins see no hole.** Readout the shaded charge, one electron. The printed number 8.7.2 kept (there is no 8.7.1). |
| 8.8.1 (first) | 8.8 | SVG (public domain, Maschen): the l = 1 vector model, three cones | **Not rebuilt**: it is Chapter 6's vector model (6.3.1 builds l = 1, 2, 3). Its citations ("(Figure 8.8.1)" twice) link to 6.3's figure, as 6.5's citations link to 6.2's (Chapter 6's decision); a note says the book prints the same picture. |
| 8.8.1 (second) | 8.8 | PNG (no credit here; the same file as Figure 8.9.1, public domain, Maschen): J, L, S cones | **Built once, in 8.9** (as Figure 8.9.1 + 8.9.2, below), where L–S coupling is worked and the picture is credited; the J paragraph's "(Figure 8.8.1)" links there; a note says the book prints it twice. |
| 8.8.1 (third) + two images | 8.8 | JPG (no credit): four pairs of up/down arrows; two hand-drawn scans: four vector sketches (three triplet, one singlet) and "this should look like this" (a vector on a cone) | **Fold, replace, still, mathematical 3D** (directions in space, rule 28.3): two spin vectors of length (√3/2)ħ on their cones, a choice of the pair's state (αα, ββ, the triplet with M_S = 0, the singlet), the resultant S on its cone (|S| = √2ħ, S_z = +ħ, 0, −ħ) or zero; a slider for the azimuth shows S_x and S_y undetermined while S_z stays put. **Point: three arrangements of two spins make S = 1 and only one makes S = 0, so a triplet has three states and a singlet one; the two states with m_s = +½, −½ differ in how the vectors line up across the xy plane.** Free orbit, no buttons; not precessing (6.3.1's decision). Carries the number 8.8.1; a correction footnote says the book prints three figures under it. The JPG ships; the two scans do not (precedent). |
| Images in Example 8.8.12 | 8.8 | Three PNGs, no credit (and a broken image with no file, dropped by the converter): the microstates for M_l = 4, 3, 2 | **Replace, moving** (a sequence of steps is a clock; each step is a state the transport reaches exactly): the microstate chart of a configuration (choice: d² as in the example, p², p³, d³) fills row by row, each cell's stick diagrams shown on hover, then terms peel off as centred blocks (¹G, ³F, ¹D, ³P, ¹S for d²) until nothing is left. **Point: every term claims a centred rectangle of the M_l × M_s chart, and what is left after each claim names the next term.** Readout the microstate count C(2(2l + 1), n) (45 for d²) and the terms with their J. Eyebrow "Figure"; originals shipped. The book's charts stay as printed in the example (orchestrator: whether the Sim also replaces the 13 charts, below). |
| Table 8.8.1 and the charts | 8.8 | | Kept as `div.book-table`, corrected (below); the strike-through on Table 10's ¹G cells kept (tool change). |
| 8.9.1 + 8.9.2 | 8.9 | PNG (public domain, Maschen): J, L, S cones; PNG (public domain, Maschen): one electron's orbital and spin coupled, spin up and spin down | **Fold, replace, still, mathematical 3D**: L and S on cones about J, J on its cone about z; choices L (0–3), S (½, 1, 3/2) and J from |L − S| to L + S, slider for m_J and one for the azimuth. **Point: J takes the values |L − S| … L + S because L and S add as vectors, and with J fixed neither L nor S has a fixed direction.** Opens on 8.9.2's case, l = 1, s = ½, j = 3/2 and ½. Readout |J| = ħ√(J(J + 1)), J_z = m_Jħ with numbers. Free orbit; not precessing (6.3.1's decision). Originals shipped with their credits. |
| 8.10.1 | 8.10 | JPG, no credit: two electrons in three orbitals: paired, opposite spins apart, parallel apart | **Faithful copy, still**: the book gives no energies to put on a slider, and inventing them would be ours. Original shipped. |
| 8.11.1 (first) + 8.11.2 | 8.11 | GIF photograph of a plate (White 1934; Lewis and Spedding 1933): Hα of H and D, each a blurred doublet; GIF, no credit: the n = 3 and n = 2 fine-structure levels with five transitions | **Fold, replace, still** (variation): the five fine-structure levels to scale (0.108, 0.036 and 0.364 cm⁻¹, the book's), the five allowed 3 → 2 transitions, and below them the Hα line in its real colour (fact, 656.3 nm) built from the five lines, with a slider for the line width (resolution) and a choice of H or D. **Point: narrow lines show five transitions; at the plate's resolution they merge into the doublet the photograph shows, 0.33 cm⁻¹ apart; wider still, into one line.** Readout the two strong components and their separation, 0.364 − 0.036 = 0.328 cm⁻¹ against 0.326 measured. Relative intensities from a named source (orchestrator: the book says only that two are the most intense). The plate is a scan and is not shipped (precedent); the level diagram ships. |
| 8.11.1 (second) | 8.11 | JPG (OpenStax, printed "CC-SA"; University Physics is CC BY 4.0): a current loop and the hydrogen atom's orbital L and μ | **Faithful copy, still**, unnumbered (eyebrow "Figure"), with a footnote saying the book prints two figures 8.11.1; its citation ("(Figure 8.11.1)" after the bar magnets) links to it. Credit corrected to CC BY 4.0. |
| Image in Example 8.11.1 | 8.11 | JPG, no credit: a black strip with a green and two yellow lines; caption "Figure above does not show this splitting)" | **Replace, still** (variation): sodium's 3s, 3p (²P₁/₂, ²P₃/₂), 5s and 4d levels with the example's six lines on a real-colour spectrum strip (fact) at their wavelengths; a slider for the spectral window spreads each doublet. **Point: every line is doubled because the 3p level it touches is split, by the same 17 cm⁻¹ each time.** Readout the doublet's two wavelengths and their separation in cm⁻¹ (17.0, 17.1, 17.3). The original image's colours are not sodium's (no green line); it is shipped as the original with its caption corrected through the row. |
| Tables | 8.1, 8.7, 8.11 | Tables 8.1.1, 8.1.2, 8.7.1, 8.11.1, the sodium wavelengths | Kept as `div.book-table`. |

### What moves in this chapter

The SCF loop (8.3.1: iterations are time), photons through the spectrometer
(8.4.1 + 8.4.4) and atoms through the Stern–Gerlach magnet (second 8.4.2), and
the microstate chart filling and peeling (Example 8.8.12). Everything else
answers sliders and choices and is still.

### 3D

Two mathematical scenes: the spin pair (8.8.1 fold) and L–S coupling (8.9.1 +
8.9.2), both directions in space the book draws in perspective, free orbit, no
buttons. The spectrometer and the Stern–Gerlach apparatus are locked views of
the book's perspective, not 3D scenes (rule 28.2): nothing about them needs
turning.

### New simulations proposed (root rule 15)

- **8.6, the determinant at work** (recommended, still): lithium's 3 × 3 Slater
  determinant with box spin-orbitals, evaluated at three electron positions the
  reader drags; swapping two electrons swaps two rows and the value changes
  sign; choosing one spin-orbital for two columns makes it zero at every
  position. Point: the determinant builds in antisymmetry and Pauli for any N.
  The brief's "a determinant vanishing when two rows match".
- **8.10, carbon's levels from configuration to J** (recommended, still):
  1s²2s²2p² as one level, split by electron repulsion into ³P, ¹D, ¹S and by
  spin–orbit coupling into ³P₀, ³P₁, ³P₂, with a slider for each interaction's
  strength from zero to its real size (NIST atomic levels: ³P₁ 16.4, ³P₂ 43.4,
  ¹D₂ 10 192.6, ¹S₀ 21 648.0 cm⁻¹; source named). Point: Hund's order in one
  picture: highest multiplicity lowest, then highest L, then lowest J for a
  less-than-half-full shell. The brief's "levels splitting into terms then J
  levels".
- **8.2, Eckart's open-shell trial function** (offered, not recommended): E(α,
  β) for trial function 3 as a contour map with its minimum at −2.8757 E_h.
  7.1.3 already shows a one-parameter family above the true energy; the
  formula would be ours.
- Not offered: a Koopmans ladder (Table 8.7.1 has no orbital energies to draw
  from), a 3D Zeeman precession (nothing precesses in an eigenstate; 6.3.1's
  decision).

## Derivation candidates (root rule 29)

Score = facts imported from outside the section's method + the longest run
of moves the book does not print + joins of independent lines. A block the
book prints as equations with words qualifies whatever its score.

| Where | What | Printed? | Score | Decision |
|---|---|---|---|---|
| Example 8.1.1 | the helium Hamiltonian in atomic units | two displays | 1 (one move: set the constants to 1) | Stays. |
| 8.2, E¹ | E¹ = 34.0 eV | "the result is" | high, but its facts (the two-electron integral 5Z/8 E_h) appear nowhere in the book | Stays (nothing invented; 7.1's (7.1.10) precedent). |
| 8.2, (8.2.4), E⁰ | E⁰ + E¹ = −74.8 eV; E⁰ = 4E_h | numbers | 0 | Stays (substitution), corrected (E⁰ = −4E_h). |
| 8.2, (8.2.8)–(8.2.17) | the five percent deviations | aligns | 0 | Stay (substitution). |
| 8.3, ε_j | the sum of the three energies | one display | 1 | Stays. |
| 8.4, (8.4.2) | the Zeeman energy | stated | 4 (L_z from 6.3, γ_e, E_B; three unprinted moves) but 3 moves | Stays (below four moves). |
| 8.4, (8.4.5) | s = ½ | block of equations with words | qualifies | **Build**: *Derivation · the spin quantum number*, ending at s = ½; facts: two spin states (the observation), m_s in integer steps from −s to s (by analogy with m_l, 6.2). |
| 8.4, (8.4.11)–(8.4.12) → γ_s | hν/B = −γ_sħ, γ_s = 2.0023γ_e | equations with words | qualifies | **Build**: *Derivation · the electron's g-factor*, ending at γ_s = 2.0023γ_e; facts E_α, E_β (the spin version of (8.4.1)), μ_s = γ_sS, S_z = ±ħ/2 (8.4.6), μ_B (8.4.3). Node notes: "S_{z,α} = −½ħ" is S_{z,β}; the book's own numbers give hν/B = 18.55 × 10⁻²¹ erg/G and g = 2.0005 (the printed 18.5464 is exactly 2μ_B; 2.0023 needs ν = 28.03 GHz). |
| 8.5, (8.5.1)–(8.5.4) | the exchange phase is ±1 | equations with words | qualifies | **Build**: *Derivation · the exchange phase*, ending at e^{iφ} = ±1; node notes for the swapped r₁, r₂ (the permuted function is printed ψ(r₁, r₂)) and (8.5.3)'s conjugate on the second factor. |
| 8.5, ψ⁻ = 0 | Pauli from (8.5.7) | prose and one display | 2 | Stays. |
| Example 8.6.1 | ψ(r₂, r₁) = −ψ(r₁, r₂) | block | qualifies | **Build** as *Example 8.6.1 ·*. |
| Example 8.6.2 | the 2 × 2 expansion | one move | 1 | Stays. |
| Example 8.6.3 | carbon's 6 × 6 determinant, 720 terms | a count | 0 | Stays. |
| 8.6, ψ₁–ψ₄ as determinants | | equalities | 1 | Stays, corrected (normalizations). |
| 8.7, ε_i (unnumbered align) | the Hartree–Fock orbital energy | block, three lines | qualifies | **Build**: *Derivation · the Hartree–Fock orbital energy*, from h_eφ_i = ε_iφ_i to ε_i = ⟨φ_i\|T + V\|φ_i⟩ + Σ_j[J_{i,j} − K_{i,j}]; node note: the first move needs φ_i normalized. |
| 8.7, (8.7.7) | the Fock operator expanded | one move | 1 | Stays. |
| Example 8.7.2 | E_N − E_{N+1} = −ε_{N+1} | block with words | qualifies | **Build** as *Example 8.7.2 ·*, following the correct mathematics; the fact ε_{N+1} links the derivation above. Node notes: the first E_N sums J_{i,j} − K_{i,j} over i only (both indices, with ½); the i = j = N + 1 term vanishes because J_{i,i} = K_{i,i}, which is why the sum may run to N or N + 1. |
| 8.8, "L(same direction)" | √2ħ + √2ħ = 2ħ etc. | wrong arithmetic | – | Stays as printed, corrected (below). |
| Example 8.8.12 | the d² terms | tables | – | Not a derivation (a tabular procedure); the microstate Sim. |
| 8.9, 8.10, 8.11 | definitions, rule applications, 0.364 − 0.036 | – | 0–1 | Nothing qualifies. |

Built: 6 records (8.4 two, 8.5 one, 8.6 one, 8.7 two).

## Corrections spotted (root rule 13)

- **intro**: "Electrons with more than one atom" (atoms with more than one
  electron).
- **summary**: ^{2S+1}L_{2J+1} (subscript J); "only two electrons may share the
  same wavefunction" (spatial orbital); Slater determinants "are called linear
  combinations of atomic orbitals" (no).
- **8.1**: "Si units" (SI); "units normalize the reduced Planck constant" (garbled);
  a_o for a₀; "8.987 x 10⁹"; Table 8.1.2 "0.052 nm" (0.0529).
- **8.2**: "The Hamilonian"; Ĥ⁰'s second bracket "−[½∇₂² − 2/r₂]" turns the
  attraction into a repulsion (−½∇₂² − 2/r₂); "Equation 9-28" twice (above);
  E⁰ = 2/n² + 2/n² = 4E_h = 108.8 eV (each electron −Z²/2n² E_h: E⁰ = −4E_h =
  −108.8 eV); "He need" (We need); header "Variational Method Applied to the
  Helium Method" (Atom); E_exp = I₁ + I₂ = −2.90372 E_h (−(I₁ + I₂)); the fifth
  deviation's numerator drops E_h; "within 0.07%" (0.08%, as printed above it);
  "Chandrasakar" (Chandrasekhar); "Fifth Trial Wavefunction #5".
- **8.3**: objectives "mutlti-electron", "Demonstate", "Self-Consistant" (also
  in the header and in 8.7); "state-off-the-art"; "published by Douglas Hartree
  in 1948 and improved two years later by Vladimir Fock" (1928 and 1930); "the
  electron-electron term (Equation 8.3.1)" (above); ρ(r) = Σ|ψ(r)|² without the
  index i; "The sum over runs over"; "The wavefunctions that from this approach
  … involve possess"; J_{j,k}'s denominator r − r′ (|r − r′|); ε_J for ε_j;
  (8.3.5) "ψ_1p(6)" (ψ_2p); the note's sum "j ≠ k" over k.
- **8.4**: "forth quantum number"; Figure 8.4.2's caption "2s → 1s" (2p);
  "crazy experiment outlines above"; "To explain our observations, a new model
  for the hydrogen atom." (no verb); "In 1920, Otto Stern and Walter Gerlach"
  (the experiment is 1922); "might by explained"; "Because electrons of the same
  spin cancel" (opposite spin); "the project of the orbital angular momentum"
  (projection); (8.4.10) "⟨α|β⟩ = ⟨α|β⟩" (⟨β|α⟩); "S_{z,α} = −½ħ" (S_{z,β});
  the unclosed "(the spin version of Equation 8.4.1."; a stray \label in the γ_s
  display; "γ_sħ = 2.0023, γ_eħ" (a comma for a multiplication); the g-factor's
  numbers (above); Figure 8.4.3's caption against the text (above) and its
  "CC BY-SA-NC".
- **8.5**: objective "on the wavelengths" (wavefunctions), "Interprete"; the
  helium equation's ∇₁² + ∇₁² (∇₂²) and its −V(r₁) − V(r₂) against +V in the
  one-electron equations; "electon"; the second one-electron equation's
  E|φ_a(r₂)⟩ (φ_b); "spin-orbitals … of atoms 1 and 2" (electrons); the permuted
  function printed ψ(r₁, r₂) twice and in (8.5.2); (8.5.3)'s conjugate on the
  second factor; "wavefucntion"; (8.5.5) writes P̂₁₂ψ(r₁, r₂) = ±ψ(r₂, r₁)
  (= ±ψ(r₁, r₂)); note title "femions", "Moveover"; Exercise 8.5.1's opening
  "ψ(r₁, r₂)⟩" without its ket bar and "Permute the electrons the product
  function"; "asymmetric combination" (antisymmetric); "|φ^{−i}⟩ = 0" for ψ⁻ and
  its condition "φ_a(r₁) = φ_a(r₂)" (φ_a = φ_b); "(spin-orbit)" (spin-orbital);
  "|φ_b(r₁)⟩ = φ_a(r₂)⟩"; "We can only constructs"; Figure 8.5.1's caption (a
  broken sentence); the printed exercise numbers skip 8.5.3 (kept as printed).
- **8.6**: objectives "mulit-electron", "determinents"; "As spected"; "for of
  these microstate"; the four excited functions: ψ₄'s 1/2 (1/√2); "(Equation
  8.6.3C2 and 8.6.3C4)" (ψ₁ and ψ₃); "antisymemtric"; "multi-electrom";
  "ψ₁ = φ_a − φ_c" (= (φ_a − φ_c)/√2; the next line's 1/2 is right; likewise ψ₃);
  "igure 8.6.2"; Example 8.6.3 "spin-obital", "determinate", "N! factorial";
  Exercise 8.6.2's key: the expansion has five terms, two wrong (φ_1s α(3)
  φ_1s β(2) φ_1s α(1), and φ_2s α(3) in a term that already has electron 3), and
  six are needed; its closing question goes unanswered (the second determinant
  is the other spin of the 2s electron, the M_S = −½ partner); Exercise
  8.6.3A's key writes square brackets for the determinant's bars and
  "φ{2_s}".
- **8.7**: objectives "mulit-electron determential", "Koopman's theory"; (8.7.3)
  normalized by 1/√N (1/√N!); (8.7.4)'s exchange integrand ψ_j*(r′)ψ_i*(r′)ψ_j(r)
  (ψ_j*(r′)ψ_i(r′)ψ_j(r): no conjugate on ψ_i); (8.7.5) equates the potential
  term V_electron ψ_i with the integral J_{j,k}; "Hatree-Fock"; "highest occupied
  molecular orbital" (orbital, for an atom); "required to generated"; Example
  8.7.2's first E_N (the sum over i only), "φ₁ through f_N"; "leads to one of
  its most celebrated failures" (none named); "the the"; "Normalized Conditional
  Probability for from electron-electron interactions" (caption).
- **8.8**: objective "oribital"; "elections", "e..,", "revolving in opposites
  direction"; the three displays all labelled "L(same direction)" and their
  arithmetic (√2ħ + √2ħ is 2√2ħ, and L = 2 has |L| = √6ħ; the magnitudes do not
  add); "1s² 2s² p²" (2p²); "(and can ignore the s electrons too)" for 2s¹2p¹,
  where the 2s electron counts; (8.8.4)'s last value m_{s1} − m_{s2}
  (−m_{s1} − m_{s2}); Example 8.8.8: S = 3/2, 1, ½ for nitrogen (3/2 and ½: three
  spins give no S = 1); "the values of S are computing"; Table 8.8.1: "l" for
  L, "Magnet Quantum number", M_s with absolute values (it can be negative);
  "quantized by the number J" with "(measured in terms of l)" (L); "Atomic term
  symbols contain two pieces of information" (three: J too) and "1S" for a
  closed-shell atom (¹S₀); "microstate(s)" for levels in Examples 8.8.9–8.8.11
  (boron has 6 microstates and 2 levels; Be 2s¹2p¹ has 12 microstates and 4
  levels); Example 8.8.12: "will at least one each", "put distribute", "M_s =
  ±‐1", "This state is has", "strickthough", "wtih"; its chart after removing ³F
  (printed with M_l = 1, 0, −1 at 2 4 2, 2 5 2, 2 4 2) should read M_l = ±2: 0 1 0,
  ±1: 1 2 1, 0: 1 3 1; its last chart (a blank M_l and a 0) should hold one
  microstate at M_l = 0, M_s = 0; "four of which are singlet and four of which
  are triplets" for M_l = 1 (the count is 2 + 4 + 2 by M_s). The hyphen U+2010
  is printed for every minus sign in the page's maths (handled by the draft tool).
- **8.9**: objective "Compate", "of a multi-electron spectra"; "(z > 40)" (Z);
  the align's "j = |ℓ + s|" (j runs from |ℓ − s| to ℓ + s); the term-symbol form
  ^{2s+1}L_J (2S + 1).
- **8.10**: objectives "Hund three rules", "Hunds"; "there a problem"; "Hund's
  rule, which make"; "Orbital Angular Multiplicity" in a header (kept as
  printed); "someone offering"; "the everything is pretty much"; Example 8.10.2
  calls 4s²4p¹3d¹ a ground-state configuration and applies the third rule to two
  different open subshells; Example 8.10.3 "Rule 3:.L".
- **8.11**: objectives "atomic terms symbols"; "Around 1930" (Lewis and Spedding
  1933); "conservation fo"; "the transition between single (S = 1/2 and triplet
  S = 1" (singlet, S = 0); Example 8.11.1: "(Ne]ns¹", "the valence electron in
  the p-orbitals … [Ne]nd¹" (d-orbitals), "5S → 3P gives two lines since the
  initial configuration has two microstates" (5s is a single level; the split is
  3p's), "microstates" for levels; the note's duplicated "(these produce
  pressure sodium lamps (these produce", "one of the classified Fraunhofer lines
  in Sodium vapor in the upper layers of lines", "589 6 nm"; "(J\)"; "shown in
  Figure 8.11.2" for the plate (8.11.1); the second Figure 8.11.1's licence
  "CC-SA" (CC BY 4.0); the image caption "Figure above does not show this
  splitting)". The en dash written for a minus in "–J" (and in 8.7's E_N – E_{N+1},
  8.8's |L – S|) is kept as Chapter 7 kept 7.2's.

## Licences of the figures

Pages: 8.1 **CC BY-SA 4.0** (shared BY-SA, root licence note); 8.2, 8.8 and the
intro CC BY 4.0 at the source, shared BY-NC-SA; 8.3–8.7, 8.9–8.11 CC BY-NC-SA
4.0; the summary untagged (the book's). Figures: Ümit Kaya via LibreTexts CC
BY-NC (8.4.1, both 8.4.2, 8.4.4); Delmar Larsen CC BY 4.0 (8.3.2); Maschen,
public domain (8.8.1 first, 8.9.1 and its copy in 8.8, 8.9.2); "CC BY-SA-NC 3.0;
Anonymous" (8.4.3); OpenStax University Physics CC BY 4.0 (second 8.11.1); no
credit: 8.3.1, 8.5.1, 8.6.1, 8.6.2, 8.7.2, the third 8.8.1, the three microstate
pictures, 8.10.1, 8.11.2, the sodium image, shipped under the page's licence
with `notes` saying the book gives none (Chapter 3's decision). **Not shipped**:
the two hand-drawn scans of 8.8 and the photographic plate of 8.11.1 (scans,
precedent); the Wikipedia thumbnail of the intro (not printed on the page).

## What is new to OmniStax here

- Three figures printed under one number on one page (8.8.1), one of which is
  Chapter 6's figure and one 8.9's; the precedent of two (7.4.1) covers the rest.
- A figure that two sections print (8.8's second 8.8.1 is 8.9.1's file),
  built once where its subject is worked and credited (8.9).
- A worked procedure printed as 13 successive tables (Example 8.8.12), two of
  them wrong, and a strike-through that carries meaning (Table 10).
- A broken `<img src="/">` (dropped by the converter with a warning).
- Two new types: `magnetic-field` (B, B_z) and `magnetic-moment` (μ_m, μ_s and
  its α, β variants); `colours:default` rerun. Constants (μ_B, γ_e, γ_s, g, α)
  and every quantum number (s, m_s, L, S, J, M_l, M_s, j, m_j) untyped and in
  ink.
- 79 new symbols, 55 with macros (the typed ones); the spin functions α and β get their own keys
  (`alpha_s`, `beta_s`, wavefunction) beside the variational α and β; the total
  quantum numbers L and J reuse the keys `L` (a length elsewhere, untyped here)
  and `J` (5.8's rotational quantum number).

## The chapter's answer to root rule 23

Multielectron atoms are usually taught as rules to memorize: fill these boxes,
write this symbol, rank by Hund. The pictures here put a mechanism under each
rule. The self-consistent field runs in front of the reader, the density and
the orbital energy jumping, then settling on the number Table 8.7.1 prints
(8.3.1). Spin arrives the way it was found, as a microwave line that should not
exist and moves with the field, and as a beam that splits in two instead of
smearing (8.4). Antisymmetry becomes a mirror: swap the electrons and the
wavefunction reflects across the diagonal and changes sign, empty on the line
where they would coincide, and gone when they share a state (8.5). The
determinant does the same for any number of electrons (8.6, extra). The
exchange hole shows where Hartree–Fock keeps like spins apart (8.7.2). In the
second half, the microstate chart fills and gives up its terms one rectangle at
a time (8.8.12), spins and orbits couple as vectors on cones (8.8, 8.9), and a
spectral line that looks single comes apart into the transitions that make it
as the resolution sharpens, in hydrogen and in sodium (8.11). The thread is that
the labels of atomic states are counts and vector sums, and the reader should be
able to watch them being counted.

## Tool changes made for this chapter

- `tools/lt2md.py`: struck-through text (`<s>`, `<del>`, `<strike>`) becomes
  `~~…~~` (8.8's Table 10 strikes the ¹G cells, and the next sentence cites the
  strike-through; it was dropped); an `<img>` with no file (`src="/"`, 8.8's
  broken image before the first microstate picture) is dropped with a warning
  instead of written as `![alt](/)`. No page of Chapters 1–7 has either: they
  reconvert to a scratch folder byte-identical (68 files).
- `tools/md2html.py`: `~~…~~` becomes `<s>`; in maths, the hyphen U+2010 written
  for a minus becomes "-", a right quote U+2019 written for a prime becomes "'",
  ½ becomes \tfrac{1}{2}, ħ typed in maths becomes \hbar, and a bare `\label`
  with no argument is dropped (8.4's γ_s display, which KaTeX could not parse).
  Drafts of Chapters 1–7 compared old against new in memory (nothing written):
  only 3.7, 4.6, 5.1, 5.8 and 6.1 change, each where ħ or ½ was typed in maths;
  those sections are built and their drafts deleted, and Chapter 7's drafts are
  unchanged. Every maths string of the 13 Chapter 8 drafts, section rows
  included, renders in KaTeX without an error (929 strings); the remaining
  warnings are the en dash kept as a minus (above) and a ½ in a figure caption
  (plain text in the row).
