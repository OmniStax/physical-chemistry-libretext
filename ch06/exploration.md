# Exploration: Chapter 6, The Hydrogen Atom

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 6`,
after the tool fixes listed at the end), every page read in full, the
chapter's 23 images looked at (the three SVGs rendered through Playwright).
The landing page (11783) prints one paragraph of its own (the isotropic
Coulomb potential, why the orbitals are classified by l and m), so the
chapter has an **`intro/` page** (root rule 21.1; its thumbnail credit,
Bensaccount's public-domain hydrogen atom, is left out with the thumbnail, as
in Chapters 3 and 5). 6.S (550557) is a real summary page, one block of four
short paragraphs and three displays, routed to `summary/`. **6.E (13425) has
no body at all** (the API returns an empty body; `exercises/source.md` holds
only its title): no exercise lives at the end of the chapter, so nothing is
routed from it (root rule 9). The exercises are the inline boxes, routed
below by what they test. No stray passage elsewhere in the book tests this
chapter: of the N.E pages only 19.E (a Chapter 4 passage, routed to 1.9) and
21.E (an entropy problem) hold anything.

The chapter is unusual in one way that shapes everything below: **6.2
repeats 6.4 and 6.5.** Its "Atomic Orbitals" block is 6.5's opening almost
word for word, its radial functions, nodes and radial distribution functions
are 6.5's, and nine of its exercise boxes reappear in 6.4 (three) and 6.5
(four) with other numbers. By the precedent (repeated material built once
where the book first works it, cited after), the concepts, the shared
exercises and the radial-function figure are built in 6.2, where the book
first prints them; 6.4 and 6.5 keep their words and cite back.

## Pages

| Page | LibreTexts id | Licence | Authors | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11783 | BY-NC-SA 4.0 (tag) | none | none: one paragraph | | | | | | | |
| 6.1 The Schrodinger Equation for the Hydrogen Atom Can Be Solved Exactly | 13426 | BY-NC-SA 4.0 | Hanson, Harvey, Sweeney, Zielinski (list) | none | 0 | 4 | 1 | 0 | 0 | 0, one pulled quote | 13 / 14 |
| 6.2 The Wavefunctions of a Rigid Rotator are Called Spherical Harmonics | 13427 | BY-NC-SA 4.0 | none printed or tagged | Atomic Orbitals; Probabilities and Distribution Functions | 0 | 9 | 6 | 1 in Exercise 6.2.4's answer | 3 (+1 in Exercise 6.2.8's answer) | 1 (Wavefunction Nomenclature) | 1 / 13 |
| 6.3 The Three Components of Angular Momentum Cannot be Measured Simultaneously… | 13428 | BY-NC-SA 4.0 | Richard Fitzpatrick (list) | Simultaneous Measurements; Summary | 1 | 0 | 1 (two panels) | 0 | 0 | 2 (Warning; The Meaning of Commutation of Two Operators), one pulled quote | 12 / 35 |
| 6.4 Hydrogen Atomic Orbitals Depend upon Three Quantum Numbers | 13429 | BY-NC-SA 4.0 | Hanson et al. (list; tag Zielinski) | Radial Part of the Wavefunction | 0 | 6 + 1 empty box | 0 | 1 in Exercise 6.4.2's answer | 1 (captioned "Table 6.4.3") | 1 (Bohr Theory vs. Schrödinger Theory) | 4 / 7 |
| 6.5 s-orbitals are Spherically Symmetric | 13430 | BY-NC-SA 4.0 | Richard Bader; Hanson et al. (list) | Radial Distribution Functions; Summary | 1 | 4 | 6 | 1 in the shell note | 0 (+1 in Exercise 6.5.4's answer) | 1 (Volume Element for a Shell…), one pulled quote | 0 / 5 |
| 6.6 Orbital Angular Momentum and the p-Orbitals | 13431 | BY-NC-SA 4.0 | Hanson et al.; Bader; Stack Exchange (Ben Norris, Loong) (list) | Classical Orbital Angular Momentum; Quantum Angular Momentum; The m_l Quantum Number and Magnetic Fields; d-Orbitals | 0 | 0 | 4 | 0 | 0 | 2 (Which m_l Number Corresponds to which p-Orbital?; an untitled emphasis box), two pulled quotes | 3 / 8 |
| 6.7 The Helium Atom Cannot Be Solved Exactly | 13432 | BY-NC-SA 4.0 | Zielinski (tag) | Multi-electron Hamiltonians; Multi-electron Wavefunctions and the Orbital Approximation | 0 | 2 | 1 | 0 | 0 | 1 (The Orbital Approximation) | 9 / 18 |
| summary (6.S) | 550557 | untagged (the book's) | none printed (tag Kyle Crabtree) | none | | | | | | | 0 / 3 |
| 6.E | 13425 | | | empty | | | | | | | |

Objectives: 6.3, 6.4, 6.6, 6.7 (6.3's list has no lead-in sentence). Two
sections close on "## Summary" (6.3, 6.5: to `summary_html`). Every section
but 6.6 and 6.7 opens on prose before its first `<h2>` (6.1 has no `<h2>` at
all), so each needs an opening header of the agent's (root rule 3), proposed
below, which the builder puts through the humanizer. The Contributors lists
are credits; 6.2 has none and no author tag, so its credit is the book's.

### The intro page

`intro/source.md`: one paragraph (the isotropy of the Coulomb potential;
energy eigenstates chosen as simultaneous eigenstates of the angular
momentum; ℓ and m). One block with a header of the agent's (proposed "Why
Angular Momentum Labels the Orbitals"); no figure, no exercise; the
thumbnail line is left out.

### The summary page (6.S)

`summary/source.md`, the chapter's `summary/` page, named by `chapter.json`'s
`summary` record (550557), built like 3.S and 5.S. One block (header of the
agent's, proposed "The Hydrogen Atom in Brief"); its three displays all carry
`\nonumber` (no numbers). It writes Ĥ with m_e (the sections use μ), E_n in
terms of a₀ (the sections in μ, e, h). Two corrections: "0 ≤ l ≤ n" (it is
n − 1), and "e is the charge of the electron" (e is the elementary charge;
the electron's is −e). No figure.

### Per section

- **6.1** No `<h2>`. Proposed blocks: "The Hamiltonian in Spherical
  Coordinates" (opening, Figure 6.1.1, Exercise 6.1.1, (6.1.1)–(6.1.3),
  *central potential*) and "Separating Radial and Angular Motion" ((6.1.4)–
  (6.1.13), the pulled quote, Exercises 6.1.2–6.1.4, the asymptotic-series
  paragraph). Concepts (new): the hydrogen atom as a reduced particle, central
  potential, the hydrogen Schrödinger equation, the square of the angular
  momentum operator (M̂², L̂²), separating radial and angular motion, the
  eigenvalues l(l + 1)ħ², the radial equation. Reinforced: reduced mass,
  spherical coordinates, Coulomb potential, separation of variables,
  spherical harmonics, the rotor's separated equations (5.8).
- **6.2** Opening (proposed "The Three Quantum Numbers"): ψ = RY (6.2.1),
  |ψ|² dτ, Exercise 6.2.1, the names of n, l, m_l, their allowed values,
  *degeneracy* n², the note "Wavefunction Nomenclature", Φ_m and the Θ
  functions, *spherical harmonics*, Figure 6.2.1, Table 6.2.1 (Y_J^M),
  Exercises 6.2.2–6.2.4. Atomic Orbitals: *atomic orbitals*, the complex
  solutions (a second "Table 6.2.1") and the real ones (Table 6.2.2),
  visualizing densities, Figure 6.2.2, Figure 6.2.3, radial nodes and n − l −
  1, Exercises 6.2.5–6.2.8, Figure 6.2.4. Probabilities and Distribution
  Functions: *radial probability density*, *radial distribution function*,
  Figure 6.2.5, Exercise 6.2.9, Figure 6.2.6. Concepts (new): radial function,
  hydrogen wavefunctions, principal, angular momentum and magnetic quantum
  numbers, their allowed values, the n² degeneracy, the orbital letters,
  atomic orbital, real orbitals from complex ones, picturing an orbital,
  radial node, the n − l − 1 rule, only s is nonzero at the nucleus, radial
  probability density, radial distribution function. Reinforced: spherical
  harmonics, degeneracy, node, normalization.
- **6.3** Opening (proposed "Angular Momentum Operators"): L = r × p and its
  components, the operators (6.3.1)–(6.3.3), the spherical forms (unnumbered
  align), L̂² (6.3.4), the eigenvalue problem (6.3.5), ψ = RY (6.3.6), (6.3.7),
  |L| (6.3.8), the Warning, L_z (6.3.9), the two name bullets. Simultaneous
  Measurements: *commute*, the canonical commutators, [L̂_x, L̂_y], *cyclic
  permutations* (6.3.10)–(6.3.12), the pulled quote, Example 6.3.1, Figure
  6.3.1 (the vector model), the note on commutation. Summary (to
  `summary_html`). Concepts (new): orbital angular momentum, the component
  operators, the magnitude √(l(l + 1)) ħ, L_z = m_l ħ, the commutation
  relations, the vector model. Reinforced: commutator, commuting operators
  (4.6), the commutation of L̂² with its components (4.6, Example 6.3.1),
  angular momentum operator (3.3). No exercise box.
- **6.4** Opening (proposed "Orbitals and Their Quantum Numbers"): ψ = RY
  (6.4.1, labelled `6.1.14`), Exercise 6.4.1, the three names (bold), the
  allowed values, Exercises 6.4.4–6.4.6 (copies of 6.2.2–6.2.4). Radial Part
  of the Wavefunction: R_asymptotic (6.4.2), Exercise 6.4.2, *associated
  Laguerre polynomials* (6.4.3), R(r) (6.4.4), Table 6.4.1 (printed "6.4.3"),
  E_n (unnumbered), the note "Bohr Theory vs. Schrödinger Theory", Exercise
  6.4.3, an empty exercise box (dropped). Concepts (new): the asymptotic
  radial function, associated Laguerre polynomials, the hydrogen radial
  functions, the hydrogen energy levels, Bohr and Schrödinger compared.
  Reinforced: the three quantum numbers and their values (6.2), asymptotic
  series method (5.6), Bohr energy levels (1.8).
- **6.5** Opening (proposed "The Ground State's Electron Density"): atomic
  orbitals again (6.2's words), ψ₁ and P₁, Figure 6.5.1, the two
  interpretations of P₁, the contour map, Figure 6.5.2, *electron density
  distributions*, the atomic unit of density, n² degeneracy and the one
  spherical orbital, R(r) of 1s and 2s, Figure 6.5.3, Exercises 6.5.1–6.5.4
  (copies of 6.2.5–6.2.8), Figure 6.5.4. Radial Distribution Functions: the
  shell 4πr²Δr, *radial distribution function*, the note on the shell
  volume with its image, Figure 6.5.5, r_max = a₀ and r̄, the pulled quote
  (6.2's sentence), Figure 6.5.6, Example 6.5.1 (76.2% within 2a₀). Summary
  (to `summary_html`). Concepts (new): electron density distribution, s
  orbitals are spherical, the thin-shell volume, the 1s radial maximum at a₀.
  Reinforced: radial function, radial node, radial distribution function,
  atomic orbital (6.2).
- **6.6** Classical Orbital Angular Momentum: the circular orbit, Figure
  6.6.1, |L| = mvr (written mνr), *torque*. Quantum Angular Momentum: the
  pulled quote (conserved means quantized), |L| = √(l(l + 1)) ħ (6.6.1), s
  orbitals have zero angular momentum, the nodes n − 1, Figure 6.6.2 (the
  2p orbitals), p orbitals and their nodal plane, the pulled quote. The m_l
  Quantum Number and Magnetic Fields: L_z = m_l ħ, the Zeeman effect, spin
  named, Figure 6.6.3, the note on m_l and p_x, p_y ((6.6.2), (6.6.3) and an
  unnumbered align). d-Orbitals: Figure 6.6.4, *zero angular momentum*,
  d_z², the emphasis note (spectroscopic letters), the 2l + 1 orientations.
  Concepts (new): torque, a central force conserves angular momentum,
  conserved means quantized, s orbitals carry no angular momentum, total
  nodes n − 1, the p and d shapes, the Zeeman effect. Reinforced: orbital
  angular momentum, magnitude, L_z, real orbitals, orbital letters, degeneracy.
- **6.7** Multi-electron Hamiltonians: Figure 6.7.1, Ĥ = T̂ + V̂ (6.7.1), the
  helium Hamiltonian (6.7.2)–(6.7.5), Z (6.7.6), the n-electron form (6.7.7),
  Exercises 6.7.1, 6.7.2. Multi-electron Wavefunctions and the Orbital
  Approximation: *a multi-electron wavefunction*, p(V), the normalization to
  n, the note "The Orbital Approximation" ((6.7.8), (6.7.9), E ≈ Σε_i).
  Concepts (new): electron–electron repulsion, the multi-electron
  Hamiltonian, not separable, multi-electron wavefunction, orbital
  approximation. Reinforced: Coulomb potential, Hamiltonian, separation of
  variables, atomic orbital.

## Equation numbers

One number per display, an `align` included, as the converter's `n=` gives
them. The book's labels lag or lead the printed numbers: 6.2's one display
is labelled `6.2.20` (printed (6.2.1)); 6.4's four are labelled `6.1.14`–
`6.1.17` (printed (6.4.1)–(6.4.4)); 6.3's run `6.3.2a`…`6.3.17c` (printed
(6.3.1)–(6.3.12)); 6.6's one label is `4` (printed (6.6.1)). In 6.1 the
radial and angular equations are one `align` labelled 6.1.9 and 6.1.10, so
it prints (6.1.9) and every later number is one less than its label
((6.1.10)–(6.1.13)); "Equations 6.1.9 and 6.1.10" both point at (6.1.9). In
6.6 two note aligns carry their `\nonumber` outside the environment and are
numbered (6.6.2), (6.6.3), as the converter has done since Chapter 1.
Citations that miss (corrections): 6.4 "(Equation 6.1.14)" twice: on the
page the label is its own (6.4.1), ψ = RY, where the radial equation is
meant, which is 6.1's (6.1.13); 6.7 "the 2-electron Hamiltonian (Equation
6.7.1)" is (6.7.2); 6.1 cites "Table M4" for the spherical harmonics (they
are 5.8's Table 5.8.1 and 6.2's Table 6.2.1); 6.6 cites Figure 6.6.3 for the
p lobes (Figure 6.6.2) and "the 1s orbital in Figure 6.6.2" for the growth of
r̄ with n (a figure of Bader's the book does not have); 6.5 cites "the electron
confined to move on a plane (Figure 6.5.2)" (Bader's earlier chapter, not in
this book); 6.4 says "Table 6.4.1" for the table captioned 6.4.3; 6.2
captions two tables "Table 6.2.1" (the second and third are 6.2.2 and 6.2.3
in page order; labels kept, a note).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Printed boxes**: 26 exercise boxes (6.1: 4; 6.2: 9; 6.4: 7; 6.5: 4; 6.7:
  2). One is empty (6.4's last, no number, no words): dropped. **25 printed
  questions.**
- **Repeats, one card each (Chapter 3's precedent)**: seven boxes print
  6.2's questions again. 6.4.4, 6.4.5, 6.4.6 are 6.2.2, 6.2.3, 6.2.4 (6.4.6
  without parts a–d); 6.5.1, 6.5.2, 6.5.3, 6.5.4 are 6.2.5, 6.2.6, 6.2.7,
  6.2.8. Each pair is one card in 6.2, where the book first teaches what it
  tests; the card's notes name the second printing. 6.5.4 prints its own key
  (a larger table that adds the particle in a box and the oscillator); 6.2.8's
  key answers the question asked and keys the card, and 6.5.4's is named in
  the note (orchestrator, below). Exercise 6.2.1 is part (a) of 6.4.1 but
  6.4.1 adds orthogonality: both kept. **18 distinct cards.**
- **Keyed**: 9 cards, available now: 6.2.1, 6.2.4, 6.2.6, 6.2.7, 6.2.8,
  6.2.9, 6.4.1, 6.4.2, 6.7.2 (6.2.6 and 6.2.7 keyed by 6.2's boxes, whose
  6.5 copies print no answer). Keys kept as printed with corrections: 6.2.7
  (e^{−2r/α₀} for e^{−r/2a₀}; α₀ for a₀; the result r = 2a₀ is right), 6.2.8
  (energies printed positive; E = Z²E_h/2n² without its minus sign; "(N-1\)"),
  6.4.1 (the angular integral needs Y*; the radial factor alone is not
  δ_nn′δ_ll′ for l ≠ l′, the product is), 6.4.2 (e^{−c/n a₀} for e^{−r/na₀};
  the plot runs to negative r), 6.7.2 (the expanded Hamiltonians write
  "− (−5e²)/4πε₀r_i", which makes the attraction repulsive, and the B⁺ one is
  titled Ĥ_B), 6.2.4 ("J · S"). 6.2.4 (d)'s key is an image (cones); kept.
- **Unkeyed**: 9 cards, available with AI solutions: 7 explain or prove
  (6.1.2, 6.1.3, 6.1.4: the algebra from (6.1.4) to (6.1.13); 6.2.2: n²
  orbitals; 6.2.5: why s functions are nonzero at the origin; 6.4.3: zero
  angular momentum against Bohr; 6.7.1: the three sums), 2 compute (6.1.1:
  the proton 0.0288 pm and the electron 52.89 pm from the center of mass, μ =
  0.99946 m_e = 9.104 × 10⁻³¹ kg; 6.2.3: the table of n, l, m_l to n = 7).
  6.1.2–6.1.4 are worked on the page by the derivation proposed for 6.1
  (Chapter 5's decision: kept, with AI solutions that cite it).
- **Worked examples**: 2 kept whole, not exercises: 6.3.1 (built as a
  derivation, below), 6.5.1.
- **Conceptual questions, problems, 6.E**: none; 6.E is empty.
- **Placement (root rule 12)**: the seven repeats go to 6.2 as above; every
  other question tests its own section.
- **Concepts the book leaves untested**: 6.3 has no exercise at all (the
  component operators, the commutation relations, L_z = m_lħ, the vector
  model); 6.5 has none once its four copies join 6.2 (the 1s maximum at a₀,
  the enclosed fraction); 6.6 has none (p and d shapes, the classical L); the
  energy formula of 6.4 is not computed. **Proposed new: 8**: 6.3 three (the
  cone of l = 2: |L| = √6 ħ, L_z = 0, ±ħ, ±2ħ and the half-angles
  cos θ = m_l/√6; [L̂_y, L̂_z] = iħL̂_x from the canonical commutators, as the
  book did [L̂_x, L̂_y]; L̂_z = −iħ∂/∂φ on Y₁^{±1} and Y₁⁰ of Table 6.2.1 gives
  ±ħ and 0); 6.4 one (E₁ and E₂ in eV with μ and with m_e, the 0.05% shift
  Exercise 6.1.1 predicts); 6.5 two (show r²R₁₀² is greatest at r = a₀; the
  probability within a₀, 1 − 5e⁻² = 0.323, against Figure 6.5.2's 32%); 6.6
  two (Bohr's L = ħ for n = 1 against the Schrödinger 1s's zero; the nodal
  planes of p_y and d_xy from their real forms in Table 6.2.2).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

The point named is what the reader should see before reading anything.
Rule 14 as rewritten today: the figure starts from the book's and usually
replaces it; motion where the idea moves; a point seen at once; little
effort to read. The chapter's 3D question (rules 24.8, 28) is answered per
figure: an orbital's density or sign is a field filling a volume, but a
radial plot or a slice through the nucleus is often the clearer point, and
5.8.3 already shows |Y|² for J ≤ 2.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 6.1.1 | 6.1 | GIF, no credit (Hanson et al.): (a) proton and electron joined by r; (b) the reduced particle μ at r from the center of mass, 3D axes | **Replace, still** (faithful copy, archetype 7): (a) and (b) side by side in type colours, the center of mass drawn where it really is, on the proton (0.0288 pm off it, which no drawing can show; the readout says so). Flat: the axes are a perspective for a relation along one line (5.1.3's precedent). Motion of two bodies as one is 5.2.1's, cited. |
| 6.2.1 | 6.2 | PNG, no credit (Wikimedia's "Spherical Harmonics deg5"): the real spherical harmonics l = 0–5 as a pyramid of shaded lobes, sign in light and dark | **Replace, still, mathematical 3D** (lobes in space, the book's own perspective): the pyramid kept, 36 small surfaces r = |Y_l^m(θ, φ)| sharing one camera, positive and negative lobes in two tones of the wavefunction hue; a choice (l, m) enlarges one beside the pyramid with its nodal planes and cones drawn faintly. **Point: each row down adds one nodal surface (l of them); across a row they turn from cones about z (m = 0) to planes through z (|m| = l).** Readout Y_l^m from Table 6.2.1 where l ≤ 2, and "l angular nodes". Free orbit (mathematical 3D); no buttons; flat fallback. Builds on 5.8.3 (|Y|² for J ≤ 2) without repeating it: here the sign and the whole family. |
| 6.2.2 | 6.2 | PNG, no credit: contours in the xy-plane of 2p_x and 3p_x | **Replace, still, 2D** (a slice through the nucleus is the clearer point here): |ψ|² in the xy-plane as one false-colour scale with its legend (rule 7.1) and contour lines; choice of orbital among Table 6.2.2's real ones with n ≤ 3, opening on the book's 2p_x (3p_x beside it as the book prints). **Point: 3p_x has the same two lobes as 2p_x plus a nodal circle, its radial node.** Readout ψ from Table 6.2.2. Caption corrected through its row (it says "R(r)²"; the contours are of |ψ|²). |
| 6.2.3 + 6.2.4 + 6.2.5 + 6.2.6 | 6.2 | PNGs and a GIF, no credit: R(r), R², 4πr²R² for 1s, 2s, 2p (three panels each); the 2s distribution beside its density | **Fold, still, with a morph**: three stacked graphs on one r axis (R, R², the radial distribution), a probe line through all three; choice of orbital 1s…3d (Table 6.4.1's six), opening on 2s (the figure 6.2.6 the exercise cites); changing n morphs the curves so the radial nodes slide in. **Point: the r² of the shell turns R²'s peak at the nucleus into a zero, and every orbital has n − l − 1 radial nodes, where all three curves touch zero together.** Readout P(r) = r²R(r)² at the probe and the node positions (2a₀ for 2s). Flat. The book's 4πr²R² is 4π too large (its 1s peak reads 6.8; the true r²R² peaks at 0.54, as Bader's 6.5.5 shows): the figure draws r²R² = 4πr²|ψ|² for s, and a correction says so. Eyebrow "Figure 6.2.3 + 6.2.4 + 6.2.5 + 6.2.6". |
| 6.3.1 | 6.3 | two SVGs (public domain, Maschen): the vector model, l = 1 and l = 2, cones with their vectors | **Replace, still, mathematical 3D** (a direction in space, drawn in perspective by the book): the cones for l (choice 1, 2, 3, opening on 2), one vector of length √(l(l + 1)) ħ on the chosen m_l's cone, a slider for its azimuth showing L_x and L_y change while L_z and |L| do not. **Point: the vector never lies along z, and every vector on the cone is the same state.** Readout |L| = √(l(l + 1)) ħ and L_z = m_lħ with numbers, "L_x, L_y not determined". Free orbit. Not precessing: the book describes the cone as a set of equally good vectors, not a motion (precession needs a field the book does not bring in); orchestrator, since the brief named precession as an idea that moves. |
| Ex. 6.2.4 (img) | 6.2, answer (d) | a student's drawing of the five m_l vectors on their circles | Kept in the answer as printed. |
| Ex. 6.4.2 (img) | 6.4, answer | a Desmos plot of e^{−x} | Kept in the answer as printed. |
| 6.5.1 + 6.5.2 + 6.5.5 | 6.5 | JPGs, no credit (Bader's scans): ψ₁ and P₁ against r; the contour map with densities 0.32…0.0001 and enclosed fractions 32%, 74%, 93%, 99%; the radial distribution Q₁(r) with r_max and r̄ | **Fold, moving** (the text describes the experiment "repeated a large number of times"): detections of the 1s electron accumulate as dots in a thin slab through the nucleus; beside it two histograms build, density per volume (peaking at the nucleus, P₁) and counts per shell (peaking at a₀); a slider R draws a sphere and reads the enclosed fraction. **Point: the electron is found most densely at the nucleus, yet most often at a distance a₀, because the shells grow as 4πr².** Readout P(r < R) = 1 − e^{−2R/a₀}(1 + 2R/a₀ + 2R²/a₀²), 0.762 at the book's 2a₀ (Example 6.5.1), and r̄ = 1.5a₀. 2D: a slab of a spherical cloud says as much as an orbit around it (rule 28.5). The book's 74% at r = 2 is 76% (a correction through the row). Originals not shipped (scans, the precedent). |
| 6.5.3, 6.5.4, 6.5.6 | 6.5 | JPGs, no credit: the 1s and 2s panels of 6.2.3, 6.2.4, 6.2.5 again | Repeated material: cited to 6.2's fold, not built again (orchestrator: how a later page's three numbers point at an earlier page's figure, below). |
| shell image | 6.5, note | PNG (CC BY, OpenStax): a volume element in spherical coordinates, with φ as the polar angle | **Replace, still** (unnumbered, eyebrow "Figure", the image kept as the original): a cut-away of two concentric spheres, radius r and r + Δr, slider Δr; the exact volume and 4πr²Δr side by side. **Point: as Δr shrinks the two volumes agree.** Locked view (rule 28.2). The OpenStax image names the polar angle φ and the azimuth θ, the reverse of this book. |
| 6.6.1 | 6.6 | SVG (CC BY-NC, Kaya): an orbit tilted to an axis, r, L at θ | **Replace, moving, mathematical 3D**: the electron circles its orbit, its velocity arrow (kinematic) turning with it, L = r × p drawn from the center and fixed. Sliders r and v; the tilt θ to the arbitrary axis as the book draws it. **Point: v turns all the time, L does not move.** Readout |L| = mvr with numbers. Free orbit. |
| 6.6.2 + 6.6.4 | 6.6 | PNGs (CC BY-SA 3.0, Sarxos): the three 2p orbitals and the five 3d, red and green lobes | **Fold, still, mathematical 3D** (a field filling a volume, the book's own 3D drawing): a point cloud of |ψ|², each point coloured by the sign of ψ (two tones of the wavefunction hue), for the real orbitals of Table 6.2.2, a choice 2p_x, 2p_y, 2p_z, 3p_x and the five 3d, opening on 2p_z; the nodal planes drawn faint. **Point: a p orbital has one nodal plane, a d orbital two nodal surfaces, and 3p adds a radial node inside its lobes.** Readout ψ from Table 6.2.2. Free orbit; no buttons. A point cloud, not an isosurface: the drawing layer has point clouds (3.9) and no marching cubes; an isosurface would need a library addition (orchestrator). |
| 6.6.3 | 6.6 | GIF (CC BY-SA 3.0, Darekk2): a bar magnet with one level, then two levels in a field | **Replace, still**: one level splitting into 2l + 1 evenly spaced levels as a field slider B rises from zero; choice l = 1, 2. **Point: without a field every m_l has the same energy; a field separates the orientations.** No energy scale (the book gives no formula; rule 26.5): levels in units of the splitting. The GIF's two levels are spin's, not l = 1's (the caption is garbled too; corrected through the row). Flat. |
| 6.7.1 | 6.7 | GIF, no credit (Hanson et al.): helium's nucleus and two electrons, r₁, r₂, r₁₂; the reduced particles | **Replace, still** (variation): the nucleus and two electrons; drag either electron (two position sliders each, or direct drag); bars show V₁, V₂ and V₁₂. **Point: V₁ and V₂ each move with one electron, V₁₂ with both, which is why the equation will not separate.** Readout (6.7.2)'s potential terms with numbers. Flat. |
| Tables | 6.2, 6.4 | Table 6.2.1 (Y_J^M), the complex ψ (printed "6.2.1"), the real ψ (6.2.2), radial functions (printed "6.4.3") | Kept as `div.book-table`, corrected by notes (Table 6.4.1's R₃₁ and R₃₂, below). |

### What moves in this chapter

The ideas with a time in them: detections of the 1s electron piling up into
its density and its radial distribution (6.5.1 + 6.5.2 + 6.5.5), the
classical electron going round its orbit under a fixed L (6.6.1). Morphs, not
loops: the radial nodes sliding in as n grows (6.2.3–6.2.6). Still: the
spherical harmonics, the orbitals, the contour slice, the vector model (see
the note on precession), the Zeeman splitting, the helium energies, the
shell. A stationary state does not move (rule 14: no dummy loop).

### 3D, honestly (rules 24.8, 28)

Four figures earn a turn, all mathematical 3D: the pyramid of spherical
harmonics (6.2.1), the vector model's cones (6.3.1), the classical orbit and
its L (6.6.1), the p and d point clouds (6.6.2 + 6.6.4). The 2p_x and 3p_x
contours (6.2.2) stay a 2D slice, the book's own and the clearer one; the
radial functions are graphs; the 1s cloud is a 2D slab, since a sphere looks
the same from every side.

### New simulations proposed (root rule 15)

- **6.1, the effective radial potential** (recommended, still): −e²/4πε₀r +
  l(l + 1)ħ²/2μr², the bracket of (6.1.13), with a choice l = 0–3 and the
  energy E_n drawn across. Point: for l > 0 the angular term walls the
  electron off from the nucleus, which is why only s orbitals reach it (6.2).
- **6.4, the hydrogen ladder with its orbitals** (offered): E_n = −13.6/n² eV
  for n ≤ 5, each level holding its n² orbitals as labelled boxes (1s; 2s,
  2p×3; …). Point: the energy depends on n alone, and each level holds n²
  orbitals. Not recommended if 1.8.4's ladder is judged enough.
- **6.3, rotations that do not commute** (offered, not recommended): a book
  turned 90° about x then y, and y then x, ending differently. The book does
  not use the picture.
- Not offered: the helium energy against experiment (Chapter 8 gives the
  numbers), precession in a field (the book does not describe it).

## Derivation candidates (root rule 29)

Score = facts imported from outside the section's method + the longest run
of moves the book does not print + joins of independent lines.

| Where | What | Printed? | Score | Decision |
|---|---|---|---|---|
| 6.1, (6.1.1)–(6.1.13) | separating the hydrogen atom's equation | equations with words; the steps left to Exercises 6.1.2–6.1.4 | 8 (the spherical kinetic operator, the Coulomb potential, J(J + 1)ħ² from 5.8, the separation argument of 2.2; three unprinted moves: multiply, divide by RY, substitute λ; one join) | **Build**, replacing (6.1.4)–(6.1.13): *Derivations · separating the hydrogen atom's equation*, ending at (6.1.9) and (6.1.13); the fact J(J + 1)ħ² links 5.8's `rotor-separation`. Works Exercises 6.1.2–6.1.4 on the page (kept, AI solutions cite it, as decided for 5.6.1 and 5.8.1). |
| 6.2, 4πr²R*R | the radial distribution | prose | 1 | Stays. |
| 6.3, (6.3.1)–(6.3.3) → spherical forms | L̂_x, L̂_y, L̂_z in spherical coordinates | "we obtain" | L̂_z alone: 8 (the chain rule, the spherical coordinates of 5.8; five unprinted moves; one join) | **Build L̂_z only**: *Derivation · L̂_z in spherical coordinates*. L̂_x and L̂_y stay printed: they need the inverse derivatives ∂θ/∂x, ∂φ/∂x, which the book never states (nothing invented). |
| 6.3, [L̂_x, L̂_y] | the commutation relation | equations with words, the expansion skipped | 6 (the canonical commutators, printed beside it but from 4.6; three unprinted moves: expand into four commutators, drop the commuting ones; one join, the cyclic permutations) | **Build**, replacing the align: *Derivation · the commutator of L̂_x and L̂_y*, ending at (6.3.10). |
| Example 6.3.1 | [L̂², L̂_x] = 0 | block, several lines garbled | 6 (the product rule for commutators, unprinted; (6.3.10)–(6.3.12); two joins, the y and z parts) | **Build** as *Example 6.3.1 ·*, following the correct algebra with node notes ("[L̂_y, L̂_x] = L̂_y + …", "[Lz", "ih"). |
| 6.3, (6.3.9)–(6.3.11) | the eigenvalues | "By definition", from 5.8 | 0 | Stays. |
| 6.4, (6.4.2)–(6.4.4), E_n | asymptotic form, Laguerre, energy | asserted | – | Stays (the series and its truncation are never stated). |
| 6.5, note | shell volume 4πr²Δr | two displays | 2 | Stays as printed; the new still figure shows it. |
| Example 6.5.1 | P(r < 2a₀) = 1 − 13e⁻⁴ | block | 6 (ψ₁₀₀ from Table 6.2.1, the volume element (3.4), two angular integrals; integration by parts twice; one join of the three integrals) | **Build** as *Example 6.5.1 ·*, replacing the solution; node notes for "∫₀^2a₀" and the sign of the exponent in the second-last line. |
| 6.6, note | p_x and p_y from m_l = ±1 | block, slips | 5 (Euler's formula (2.3) and sin, cos from it; ψ_{2,1,±1}; two unprinted moves; one join, two results) | **Build**: *Derivations · p_x and p_y from the m_l = ±1 functions*, following the correct mathematics: ψ_{2,1,±1} = ∓(r/√2) sin θ e^{±iφ}R(r) (the book's r/2 leaves them unnormalized), p_x = (ψ_{2,1,−1} − ψ_{2,1,+1})/√2 (the book's order gives −p_x), x = r sin θ cos φ (the book drops r); node notes. |
| 6.7 | the Hamiltonians | written down | 0 | Stay; no derivation. |
| summary | restatements | – | 0 | Kept as printed. |

Built: 6 records (6.1 one, 6.3 three, 6.5 one, 6.6 one).

## Corrections spotted (root rule 13)

- **intro**: none.
- **summary**: "0 ≤ l ≤ n" (n − 1); "e is the charge of the electron" (−e).
- **6.1**: "the direction of r and the direction of r is given"; "The square
  of the angular momentum operator in Equation 6.1.6." (a fragment); "Table
  M4" (absent); the equation-number shift above.
- **6.2**: "(as we will see, the energy …" (unclosed); "the θ-equation, which
  involves the azimuthal angle Θ" (θ is the polar angle; φ is the azimuth);
  "known as Legendre polynomials" (associated Legendre functions, 5.8); two
  tables captioned 6.2.1; Figure 6.2.2's caption maps "R(r)²" (the contours
  are of |ψ|²); the display labelling 4πr²R*R "radial probability density"
  (it is the radial distribution function); the radial distribution
  "4πr²R*R" and Figures 6.2.5 and 6.5.6 are 4π too large, since R is
  normalized with ∫r²R²dr = 1 (the distribution is r²R² = 4πr²|ψ|² for an s
  orbital; its 1s peak is 0.54, not 6.8); "R(r)*R(r) … the probability
  density for the electron to be at a point" (for an s orbital the density
  at a point is R²/4π); the keys of 6.2.4, 6.2.7, 6.2.8 (above); Exercise
  6.2.9's key confuses the two functions in its last paragraph.
- **6.3**: objectives "Heisenburgh", "the angular momenta cyclic permutations
  that allow two of the three projects to be simultaneous measured";
  "These can be transforming"; "capable of assume"; "the amplitude of
  angular momentum" (magnitude); (6.3.7) and the Summary write L² and L_z
  without hats; (6.3.9) "L_z Y = m ħ Y" (m_l); "The properties of spherical
  harmonics that the z-component …" (garbled); "Consider the commutator of
  the operators L̂_x and L̂_z" (it computes [L̂_x, L̂_y]); Example 6.3.1's
  garbled lines (above); "while L_z can be known with certainty, L_x and L_y
  would unknown"; "can drawn"; the note's "we do no need", "eignevalue",
  "we then know the eigenvalues (|ψ⟩) for the other" (the eigenfunctions);
  the note's "the Hamiltonian … commutes with L̂" (with L̂² and L̂_z, as it
  then says); the Summary's "m_l = −l, 0−1, …, 0, … +l +1, l" (−l, −l + 1,
  …, l − 1, l).
- **6.4**: (6.4.2) exp(−r/n a₀) (exp(−r/na₀), the n a₀ in the denominator);
  (6.4.3) sums over "r = 0" (i = 0); "L_n , _l(r)"; the citations of
  "Equation 6.1.14" (above); Table 6.4.1 (printed "6.4.3"): R₃₁ is
  (4/81√6)(Z/a₀)^{3/2}(6ρ − ρ²)e^{−ρ/3}, printed with 1 for 4 and + for −,
  and R₃₂ is (4/81√30)(Z/a₀)^{3/2}ρ²e^{−ρ/3}, printed with 1 (both checked by
  normalizing: the printed forms integrate to 0.896 and 0.0625); the note's
  "√((l(l + 1)) ħ" (a stray parenthesis); keys of 6.4.1, 6.4.2 (above); the
  empty box (dropped, a note).
- **6.5**: "the ls orbital" (1s); "the electron confined to move on a plane
  (Figure 6.5.2)" (above); "a cube with a length of 0.52917 × 10⁻⁸ cm … would
  contain 6.7 electronic charges" (it holds one; a cube of 1 Å holds 6.7);
  Figure 6.5.2's "74%" within 2 au (76%, Example 6.5.1's 76.2%); Figure 6.5.3's
  "For an interactive graph click here." and 6.5.6's (the links are gone);
  Figure 6.5.4's caption "R(r)*R(r)" is right but the text calls it the
  radial density; "4πr²Dr" (Δr); "a_o"; the shell image names φ the polar
  angle (OpenStax's convention); Exercise 6.5.4's key (the box's PIB energies
  repeat 6.02 × 10⁻³⁸ J/L² for every n and write "n²L²" for n²/L², the n = 3
  hydrogen energy lacks its minus sign, and "-" stands for zero radial
  nodes); Example 6.5.1's "∫₀^2a₀" and "−e^{2r/a₀}|" (the exponent's sign);
  the Summary's "y_n" for ψ_n (a lost Greek font).
- **6.6**: "|L| = mνr" (a Greek ν for v); "the third quantum numbers which
  describe"; Figure 6.6.3 cited for the lobes (6.6.2) and 6.6.2 for r̄ (above);
  "An electron possesses orbital angular momentum has a density
  distributions"; "a characteristic shapes"; Figure 6.6.3's caption ("acts
  like a magnetic field with is no energetic difference"; "CC SA-BY") and its
  two levels; the note: ψ_{2,1,±1} with r/2 (r/√2), "x = sin θ cos φ" (r sin θ
  cos φ), f(r) for R(r), p_x's sign (above), "m_l = +1 might correspond to
  (|p_x⟩ + |p_y⟩)" (to −(|p_x⟩ + i|p_y⟩)/√2); "Figure 6.6.4 shows the contours
  in a plane for a 3d orbital" (it shows the five 3d shapes in 3D); "arrives
  not only from" (arises); "s*, p, d, f*" (stray emphasis).
- **6.7**: "(Equation 6.7.1)" for (6.7.2); (6.7.7) sums V_ij over i ≠ j,
  which counts each pair twice (i < j, as the expanded key does); "with n
  electron"; "these summations over"; "∫|ψ|²dτ = n" (the wavefunction is
  normalized to 1; the electron density integrates to n); "Hamilitonian",
  "as we we will see"; key of 6.7.2 (above).

## Licences of the figures

Pages: every section CC BY-NC-SA 4.0; the intro tagged BY-NC-SA; the
summary untagged (the book's). Figures: Kaya CC BY-NC (6.6.1); Maschen
public domain (6.3.1); Sarxos CC BY-SA 3.0 (6.6.2, 6.6.4); Darekk2 CC BY-SA
3.0 (6.6.3); OpenStax CC BY (the shell image); no credit: 6.1.1, 6.7.1
(Hanson et al.'s GIFs), 6.2.1 (the Wikimedia image's credit not given),
6.2.2–6.2.6, 6.5.3, 6.5.4, 6.5.6, and the two answer images, which ship
under the page's licence with `notes` saying the book gives none (Chapter
3's decision). 6.5.1, 6.5.2 and 6.5.5 are greyscale scans of Bader's printed
figures: not shipped in `originals` (the precedent for scans).

## What is new to OmniStax here

- A section that repeats two later sections (6.2 against 6.4 and 6.5),
  with seven exercise boxes printed twice under different numbers, one pair
  with two different keys.
- A later page whose three numbered figures (6.5.3, 6.5.4, 6.5.6) repeat an
  earlier page's (6.2.3–6.2.5): the fold rule works within a section only.
- An empty exercise box (6.4), dropped by the draft tool.
- A bare `\begin{align*}` in running text, outside `\[ … \]` (6.6), which
  MathJax sets as a display; the converter now does too.
- No new type: the chapter's quantities are energy, length, mass, charge,
  momentum, velocity, angle, wavefunction, probability density, operator and
  angular momentum. 29 new symbols (l and m_l untyped, as J and m_J are).

## The chapter's answer to root rule 23

The hydrogen atom is where the book's quantum mechanics finally fills
space, and the reader should feel it fill. The figures carry one thread from
the equation to the shapes: the angular part as a family of surfaces whose
nodes multiply row by row (6.2.1), the radial part as three curves on one
axis where nodes slide in as n grows and the shell's r² pushes the most
likely distance off the nucleus (6.2.3–6.2.6), the 1s electron detected dot
by dot until its density and its radial distribution disagree about where it
"is" (6.5), and the p and d clouds with their signs (6.6). Angular momentum
runs beside it: a classical orbit with a fixed L (6.6.1), then the quantum
vector that cannot point along z and is drawn on a cone (6.3.1), and the
effective potential that keeps every electron but an s electron off the
nucleus (the offered 6.1 Sim). Helium closes it by showing, with two
draggable electrons, the one term that breaks the separation.

## Tool changes made for this chapter

- `tools/lt2md.py`: a bare environment (`\begin{align*}…\end{align*}`, and
  the same for align, alignat, gather, equation, eqnarray, multline) in a
  paragraph outside `\[ … \]` is a display: MathJax processes environments in
  running text, and 6.6's p_x and p_y lines had come out as raw text. Chapters
  1–5 reconvert to the same bytes (51 files; the only other bare
  environments in the book are in 8.6, 9.1 and 26.3, not yet converted).
- `tools/md2html.py`: an exercise box with no prompt and no answer is
  dropped with a warning (6.4's last box had made a row "e?"); the
  non-breaking hyphen U+2011 in maths becomes "-" (KaTeX has no metrics for
  it: 6.2's and 6.4's "n‑1"). Of the earlier drafts only 1.8's ($10^{‑11}$)
  and 5.8's ($‑1$, $‑J$) change; 1.8's built page already writes a minus.
  Every maths string of the nine Chapter 6 drafts renders in KaTeX (839).
