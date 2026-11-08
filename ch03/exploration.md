# Exploration: Chapter 3, The Schrödinger Equation and a Particle in a Box

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 3`,
after the tool fixes listed at the end), every page read in full, the
chapter's 15 images looked at (the SVGs rendered, the two GIFs frame by
frame). The landing page (11780) is one paragraph on the particle-in-a-box
model and a thumbnail credit for an image the page does not show. 3.S
(550563) is a real summary page (Kyle Crabtree's), routed by the converter to
`summary/`. 3.E (13402) is empty: no exercise lives at the end of the
chapter, so nothing is routed from it (root rule 9); the exercises are the
inline boxes, routed below by what they test.

## Pages

| Page | LibreTexts id | Licence | Authors (page tags) | Headers (`<h2>`) | Ex | Exr | Fig | Tab | Notes | Eq (numbered / all displays) |
|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11780 | none (the book's BY-NC-SA 4.0) | none | none: one paragraph | | | | | | |
| 3.1 The Schrödinger Equation | 13391 | BY-NC-SA 4.0 | Michael Fowler | The Schrödinger Equation: A Better Approach | 0 | 0 | 0 | 0 | 2 | 22 / 23 |
| 3.2 Linear Operators in Quantum Mechanics | 13392 | BY-NC-SA 4.0 | S. M. Blinder | Fundamental Properties of Operators; Linear Operators; Hermitian Operators | 1 | 1 | 0 | 0 | 1 (definition) | 7 / 29 |
| 3.3 The Schrödinger Equation is an Eigenvalue Problem | 13393 | BY-NC-SA 4.0 | Zielinski et al. | Common Operators; Eigenstate, Eigenvalues, Wavefunctions, Measurables, and Observables | 1 | 1 | 0 | 0 | 1 | 22 / 33 |
| 3.4 Wavefunctions Have a Probabilistic Interpretation | 13394 | BY-NC-SA 4.0 | Zielinski et al. | none | 2 (no solution) | 0 | 0 | 0 | 1 | 4 / 7 |
| 3.5 The Energy of a Particle in a Box is Quantized | 13395 | BY-NC-SA 4.0 | S. M. Blinder | Orthonormality of the Eigenstates | 2 | 1 | 5 | 0 | 3 | 22 / 45 |
| 3.6 Wavefunctions Must Be Normalized | 13396 | BY-NC-SA 4.0 | Zielinski et al. | Extracting Probabilities; Normalizing of the Wavefunction; Time Dependence to the Wavefunction | 1 (+1 in an exercise box) | 2 | 3 | 0 | 1 | 12 / 31 |
| 3.7 The Average Momentum of a Particle in a Box is Zero | 13397 | BY-NC-SA 4.0 | Zielinski et al. | Classical Expectation Values; Quantum Expectation Values; Average Energy …; Average Position …; Average Momentum …; Orthogonality | 3 (one titled "Exercise") | 6 | 2 | 2 | 2 | 10 / 31 |
| 3.8 The Uncertainty Principle - Estimating Uncertainties from Wavefunctions | 13399 | BY-NC-SA 4.0 | Zielinski et al. | none | 1 | 1 | 0 | 0 | 1 | 9 / 18 |
| 3.9 A Particle in a Three-Dimensional Box | 13401 | BY-NC-SA 4.0 | Zielinski et al. | Degeneracy in a 3D Cube; References | 1 | 1 | 1 | 1 | 0 | 12 / 27 |
| summary (3.S) | 550563 | none (the book's) | Kyle Crabtree | `###` Particle in a box; Particle in a 3D box | | | 3 | | | 0 / 9 |

No page prints a Contributors list; the authors come from the tags
("Zielinski et al." is Hanson, Harvey, Sweeney and Zielinski's *Quantum
States of Atoms and Molecules*, tag `zielinskit`). Every section has
learning objectives; none closes on a "Summary". 3.4 and 3.8 have no header,
and every section but 3.6 opens on prose before its first header, so each
needs headers of the agent's (root rule 3), proposed below.

### The summary page (3.S)

`tools/convert.py` routes the N.S page to `ch03/summary/source.md`; it is
the chapter's `summary/` page (root rule 21.2), named by `chapter.json`'s
`summary` record (module 550563), built like a section with no lead,
objectives, exercises or coverage. It restates 3.5 and 3.9 in Dirac
notation (`\op`, `\ket`, `\braket`; the draft tool writes `\op{H}` as
`\hat{H}`; KaTeX has `\ket` and `\braket`). Its two `###` headers become its
two `<h2>` blocks. It prints three figures captioned by hand "Figure 1.1",
"1.2" and "1.3" (carried over from Crabtree's own notes; there is no
`\PageIndex`), with no credit: an infinite well (a Wikimedia SVG), the
wavefunctions and densities of 1D box (two panels) and the levels and
degeneracies of a cube. Proposed: the three become faithful copies drawn in
the house style (archetype 7, still, no sliders), unnumbered rows (eyebrow
"Figure"), since the numbers 1.1–1.3 would read as Chapter 1's and the
originals carry no licence; the stray numbers and two slips (below) are
corrected through the rows. Its displays are unnumbered on the page and stay
so. Its chain H → general solution → boundary conditions → Eₙ → ψₙ restates
3.5's derivation and is kept as printed (a summary; the derivation lives in
3.5).

### Per section

- **3.1** Opening (Debye's challenge to Schrödinger, a historical
  paragraph: proposed header "Schrödinger's Equation" for the opening block,
  the book's header kept after it). The 3D wave equation for light (3.1.1),
  the Laplacian (3.1.2), the bold term *wavefunction*; a sinusoid in x
  (3.1.3), Euler (3.1.4), in t (3.1.5), the traveling wave (3.1.6); Planck and
  de Broglie substituted, Ψ = exp[i(px − Et)/ħ] (3.1.7), ħ (3.1.8); time and
  space derivatives (3.1.9–3.1.12), E = p²/2m (3.1.13), the free-particle
  equation (3.1.14); V added (3.1.15), the time-dependent Schrödinger
  equation postulated in 1D (3.1.16) and 3D (3.1.17); note "The Laplacian
  Operator" (∇², ∇); separation Ψ = ψe^{−iEt/ħ} (3.1.18) and the
  time-independent equation (3.1.19, printed in red with an underbrace); note
  "Time Dependence to the Wavefunctions" (real and imaginary parts out of
  phase by π/2); closing paragraph on the validity of quantum mechanics.
  Concepts: wavefunction, ħ, the free-particle matter wave, the free-particle
  equation, the time-dependent and time-independent Schrödinger equations,
  stationary state; the Laplacian reinforced (2.5).
- **3.2** Opening: the Hamiltonian as an operator, Ĥψ = Eψ, the bold
  *eigenvalue equation*, eigenfunction and eigenvalue named (proposed header
  "Operators"). Fundamental properties (a numbered list of seven, each with a
  display), the definition box "The Commutator". Linear operators: conditions
  A and B (3.2.2a, 3.2.2b), Example 3.2.1 (−iħ d/dx is linear), Exercise 3.2.1
  (√ is not). Hermitian operators: the box Hamiltonian, two integrations by
  parts, the definition, "*All* quantum-mechanical operators that represent
  dynamical variables are Hermitian" (a pulled quote, kept as a note).
  Concepts: operator, Hamiltonian operator, eigenvalue equation,
  eigenfunction, eigenvalue, operator algebra, commutator, linear operator,
  Hermitian operator, the Hamiltonian is Hermitian, observables' operators
  are Hermitian.
- **3.3** Opening (proposed header "Eigenfunctions and Eigenvalues"):
  Âψ = kψ (3.3.1a, b), bold *eigenfunction* and *eigenvalue* (first named in
  3.2, so reinforced here), every measurable an eigenvalue (3.3.2a), Ĥ and
  the two Schrödinger equations in operator form (3.3.3–3.3.6b), note
  "Correspondence Principle". Common Operators: momentum, position, kinetic
  energy, angular momentum, Hamiltonian, total energy (3.3.7–3.3.15).
  Eigenstates…: eigenstate, superposition ψ = Σcᵢφᵢ, collapse, Example 3.3.1
  (sin and e^{−ix/ħ} against p̂ and KÊ), Exercise 3.3.1. Concepts: observables
  are eigenvalues, the Schrödinger equation as an eigenvalue problem,
  correspondence principle, the momentum, position, kinetic-energy and
  angular-momentum operators, eigenstate, superposition of eigenstates,
  collapse.
- **3.4** No header: proposed "The Born Interpretation" (Ψ*Ψ, P = |Ψ|²,
  probability density, the pulled quote), "Probabilities in a Region"
  (3.4.2–3.4.4, the volume elements) and "Well-Behaved Wavefunctions" (the
  note, quantization, the grade-distribution analogy). Two Example boxes
  with no solution at all (3.4.1, 3.4.2): questions, treated as exercises
  below. Concepts: square of the modulus, probability density, Born
  interpretation, probability in a region, volume element, well-behaved
  wavefunction.
- **3.5** Opening to the header (proposed "The Box and Its Energies" for the
  long opening, which holds the whole solution): V(x) of the box, Figure
  3.5.1, the boundary conditions (3.5.3, 3.5.4), the ODE and k² = 2mE/ħ²
  (3.5.5–3.5.6a), the general solution and both conditions (3.5.7–3.5.10),
  Eₙ (3.5.11), Figure 3.5.2, ground state, E₁ (3.5.12), note "Zero Point
  Energy" (ΔxΔp ≈ h, 3.5.13), ψₙ (3.5.14), normalization (3.5.15–3.5.17),
  Figure 3.5.3, note "Nodes and Curvature", Example 3.5.1, Exercise 3.5.1,
  note "Time Dependence and Complex Nature of Wavefunctions" with Figure
  3.5.4, a pulled quote. Orthonormality of the Eigenstates: Figure 3.5.5,
  the identity (trig), orthogonality (3.5.19), orthonormality (3.5.20), the
  Kronecker delta (3.5.21), Example 3.5.2 (bra-kets of ψ₃ and ψ₄). Concepts:
  particle in a box, box potential, Eₙ, ground state, zero-point energy, ψₙ,
  normalization condition (first stated here), nodes and energy,
  orthogonality, Kronecker delta, orthonormality, the box's orthonormality.
- **3.6** Extracting Probabilities: |Ψ|², P₁D as an area (Figure 3.6.1), P₂D,
  P₃D; an exercise box titled **Example 3.6.1** (a worked solution, Figures
  3.6.2 and 3.6.3), then **Exercise 3.6.1** (the same question as Example
  3.4.1, here with a Solution). Normalizing: the normalization condition
  (3.6.2, 3.6.3), Example 3.6.2 (a Gaussian), Exercise 3.6.2. Time
  Dependence: normalization kept in time (3.6.11–3.6.16), note "Not all
  Wavefunctions can be Normalized". Concepts: normalizing a wavefunction
  (skill), square-integrable, normalization kept in time; probability and
  normalization reinforced.
- **3.7** Opening (proposed header "Expectation Values"). Classical
  expectation values: Example 3.7.1 (exam scores, two tables). Quantum
  expectation values (⟨o⟩ = ∫ψ*Ôψ dx). Average energy (3-35, ⟨H⟩ = ⟨KE⟩ +
  ⟨V⟩), an example box titled **Exercise 3.7.2 · Particle in Box** (the
  prose calls it Example 3.7.2), zero-point energy again, Exercise 3.7.2
  (classical limit), curvature, Exercise 3.7.3. Average position: Figure
  3.7.1, note "Solution by Inspection", Exercise 3.7.4. Average momentum:
  Example 3.7.3, Exercises 3.7.5 and 3.7.6, Figure 3.7.2, note "Did we just
  Violate the Uncertainty Principle?". Orthogonality (3.7.3), Exercise 3.7.7.
  Concepts: expectation value, quantum expectation value, average energy,
  the box's ⟨x⟩ and ⟨p⟩, momentum eigenfunctions e^{±ikx}; zero-point energy
  and orthogonality reinforced.
- **3.8** No header: proposed "Uncertainties from Expectation Values"
  (3.8.1–3.8.6, the note) and "The Uncertainty Principle" (3.8.8, Example
  3.8.1, Exercise 3.8.1, the closing paragraph). Concepts: the uncertainty
  ΔA; the Heisenberg principle (1.9) reinforced with its ħ/2 form.
- **3.9** Opening (proposed header "Separating the Three Dimensions"):
  Figure 3.9.1, the potential, the TISE in 3D (3.9.1, 3.9.2), ψ = XYZ
  (3.9.3), separation (3.9.4), three 1D equations (printed inline), Σε = E
  (3.9.6), the 1D solutions (3.9.8a–c), εₓ (3.9.9), ψ (3D wave), E (3.9.10).
  Degeneracy in a 3D Cube: E₁₁₁, degenerate, degree of degeneracy, Table
  3.9.1, Example 3.9.1 (accidental degeneracies), Exercise 3.9.1. References
  (five, kept as the book's closing block). Concepts: particle in a 3D box,
  degeneracy, degree of degeneracy, degeneracy in a cube, accidental
  degeneracy.

## Equation numbers

One number per display, the user's choice of today: a multi-line `align`
is one equation (3.1's Laplacian note, 3.4.1, 3.5.16, 3.7's 3-35, 3.8.3–6,
3.6.14), and `lt2md.py` writes `n=` that way. The book's labels are names,
not numbers: 3.1's `\label{3.1.18}` is printed (3.1.20) because the
Laplacian note's two displays come first; 3.2 relabels Schrödinger's
equation `3.1.19` and prints it (3.2.1); 3.7's momentum operator is labelled
`3.2.3a` and printed (3.7.9). Every `\ref` resolves on its own page (checked:
no unresolved reference in any section). The hand-typed citations are:
3.1 "Equation 2.1.1" for the wave equation, which is (2.1.2) in Chapter 2
(correction), and "Section 2.2" (right); 3.8 "Section 4.6" (a later
chapter, right). 3.9's three separated equations are inline maths carrying
`\label{3.9.5a–c}`, which MathJax never numbers; the converter drops the
labels (warned), so 3.9.6 is printed (3.9.5).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Printed questions**: 15 boxes ask a question: 13 boxes printed
  "Exercise" (3.2.1, 3.3.1, 3.5.1, the second 3.6.1, 3.6.2, 3.7.2–3.7.7,
  3.8.1, 3.9.1) and the two solution-less "Example" boxes of 3.4 (3.4.1,
  3.4.2). One question is printed twice: Example 3.4.1 is word for word the
  second Exercise 3.6.1, which carries a Solution. **14 distinct**.
- **Keyed**: 8, available now: 3.2.1, 3.3.1, 3.4.1 (keyed by the Solution
  printed under Exercise 3.6.1), 3.5.1, 3.6.2, 3.7.2, 3.7.5, 3.9.1. Two keys
  carry errors (3.3.1's kinetic-energy eigenvalue, 3.7.5's alternative
  solution); they are kept and corrected (root rule 13).
- **Unkeyed**: 6, available with AI solutions: 3 explain or prove (3.4.2,
  the physical meaning of eψ*ψdτ; 3.7.3, nodes and energy; 3.7.6, the box's
  sine as a combination of e^{±ikx} with p = ±ħk) and 3 compute (3.7.4, ⟨x⟩
  for any n; 3.7.7, the integrals ∫ψₘψₙ for m, n ≤ 3; 3.8.1, ΔxΔp for the
  box's ground state, ħ√(π²/12 − 1/2) ≈ 0.568ħ).
- **Not exercises**: 11 worked examples with their working (3.2.1, 3.3.1,
  3.5.1, 3.5.2, "Example 3.6.1" in an exercise box, 3.6.2, 3.7.1, "Exercise
  3.7.2 · Particle in Box" in an example box, 3.7.3, 3.8.1, 3.9.1), kept
  whole. The two mislabelled boxes: the 3.6 box prints "Example 3.6.1" and
  is a worked example (kept as Example 3.6.1, in the text); the 3.7 box
  prints "Exercise 3.7.2" while the prose cites "Example 3.7.2" and the box
  is an example: proposed kept in the text as Example 3.7.2 with a
  correction note on its printed title. The orchestrator decides.
- **Placement (root rule 12)**: an exercise goes to the section that
  introduces what it tests. Proposed moves: Exercise 3.7.2 (level spacing
  as mL² grows; Eₙ is 3.5's), Exercise 3.7.3 (nodes and energy; 3.5's note
  "Nodes and Curvature") and Exercise 3.7.7 (orthogonality of the box's
  eigenfunctions; 3.5) to 3.5, with `source_section` 3.7; the second
  Exercise 3.6.1 joins Example 3.4.1 as one card in 3.4 (|Ψ|² of a
  stationary state; 3.4 with 3.1), its Solution the key. Both pages' notes
  say so. The rest test their own section.
- **Concepts the book leaves untested**: 3.1 (the Schrödinger equations
  themselves), 3.2's commutator and Hermitian operators (its one exercise is
  on linearity) and 3.5's energies as numbers (no exercise computes an Eₙ).
  **Proposed new: 6**, two each: 3.1 (show that Ψ = exp[i(px − Et)/ħ]
  satisfies the free-particle equation; the frequency E/h of the phase of a
  stationary state of given energy), 3.2 ([x̂, d/dx] acting on f(x); whether
  d/dx is Hermitian on the box's functions) and 3.5 (E₁ of an electron in a
  1.0 nm box in eV; the wavelength of its 1 → 2 transition, the polyene
  estimate the summary page mentions).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Every book figure is replaced or redrawn; none is a photograph. The point
named is what the reader should see before reading anything.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 3.5.1 + 3.5.2 + 3.5.3 | 3.5 | 3.5.1 (OpenStax, CC BY): the box's potential, V = ∞ shaded outside; 3.5.2 (OpenStax): (a) ψ₁–ψ₃ drawn on their levels between the walls, (b) the ladder E₁–E₃ (the caption says "first four"); 3.5.3 (OpenStax): \|ψ₁\|², \|ψ₂\|², \|ψ₂₀\|² | **Fold, still** (no time in the idea): one box between shaded walls, each level a line at its height with its ψₙ drawn on it, the chosen level lit and its \|ψₙ\|² filled beneath the box. Point: each step up the ladder adds one node, and the rungs spread apart as n². Slider n 1–20 with detents at the book's 1, 2, 3 and 20 (the ladder rescales so the chosen rung and the ground rung both show); slider L (electron, 0.2–2 nm) moving the energies in the readout only. Readout Eₙ = h²n²/8mL² with numbers in eV, "n − 1 nodes". Arrows: none. Flat. Opens on n = 3, the book's top state. |
| 3.5.4 | 3.5 | GIF (public domain, Sbyrnes321): (A) a classical ball bouncing in the box; (B–D) ψ₁, ψ₂, ψ₃ with real part blue and imaginary part red oscillating | **Replace, moving** (the idea has a time in it: the phase e^{−iEₙt/ħ}). One box; choice: classical ball, n = 1, 2, 3 (the book's four panels), and ψ₁ + ψ₂ (a generalisation the GIF's source shows and 3.3's superposition licenses). The real part (solid) and imaginary part (dashed variant) swing a quarter period apart while \|Ψ\|² (filled, the probability-density hue) does not move; a small dial beside turns at ωₙ = Eₙ/ħ, nine times faster for n = 3 than n = 1. In the superposition the filled density sloshes from wall to wall and a ⟨x⟩ marker swings with period h/(E₂ − E₁). Point: the wave turns, the probability stands still, unless two energies are mixed. Kinematic: the ball's path; the dial turns without an arrow. Loop: one ground-state period, about 5 s. Readout Ψₙ = ψₙe^{−iEₙt/ħ} with the live phase; for the superposition ⟨x⟩(t). Flat. It answers Example 3.4.1 visually; 3.1's time-dependence note cites it. |
| 3.5.5 | 3.5 | SVG (CC BY-NC, Ümit Kaya): top row ψ₁ & ψ₂, ψ₂ & ψ₃, ψ₃ & ψ₄ (red, purple, green, blue); bottom row their products with positive (tan) and negative (cyan) areas | **Replace, still.** Choices m and n ∈ {1, 2, 3, 4}: ψₘ and ψₙ above (four referents, one colour each, the book's four), their product below with the positive and the negative area filled in two shades. Point: the two areas are equal and cancel unless m = n. Readout ∫₀ᴸψₘψₙdx = (+A) + (−A) = 0, or 1 when m = n. Opens on the book's first pair (1, 2). Arrows none. Flat. |
| 3.6.1 + 3.6.2 + 3.6.3 | 3.6 | 3.6.1 (Kaya): an arbitrary \|Ψ\|² with a strip dx and points A, B, C; 3.6.2, 3.6.3 (Kaya): \|ψ₁\|², \|ψ₂\|² with a thin strip at L/2 (Example 3.6.1) | **Fold, still.** Probability is an area: choice of density (the book's arbitrary curve, ψ₁, ψ₂, ψ₃); two sliders, the interval's centre and width, shading the exact area and outlining the rectangle \|ψ(x₀)\|²Δx. Point: the shaded area is the probability. Specials (dashed, snap): width L/100 at L/2 (Example 3.6.1: 0.02 and ≈ 0), the left half and the middle third (Example 3.5.1 and Exercise 3.5.1: 1/2, 1/3). Readout P = ∫ₐᵇ\|ψ\|²dx = exact, against the rectangle. Opens on 3.6.1's curve with its dx strip. Flat. |
| 3.7.1 | 3.7 | PNG, no credit: (A) ψ₁, (B) ψ₁² of the box | **Replace, still.** \|ψₙ\|² with a balance point marking ⟨x⟩ and dots at the most probable positions; choice n 1–5. Point: ⟨x⟩ = L/2 in every state, even for n = 2, where the particle is never found at L/2. Readout ⟨x⟩ = ∫ψ*xψdx = L/2. Flat. It shows Exercise 3.7.4's answer; that exercise gets an AI solution anyway. |
| 3.7.2 | 3.7 | GIF (public domain, LucasVB): two waves moving opposite ways and their sum, a standing wave | **Replace, moving.** Re e^{ikx} running right and Re e^{−ikx} running left (two referents, thin), their sum the box's sin kx standing (the wavefunction hue), with momentum labels +ħk and −ħk on the two. Slider n (k = nπ/L). Point: two momenta of opposite sign make the standing wave, so ⟨p⟩ = 0 while p² is not zero. Kinematic: the two travels. Readout sin kx = (e^{ikx} − e^{−ikx})/2i, p = ±ħk. Flat. Chapter 2's 2.1 standing wave used the sister GIF; if 2.4.2's "two sine trains" extra was built, its drawing is reused. |
| 3.9.1 | 3.9 | SVG (Kaya): a box Lₓ × L_y × L_z in perspective on x, y, z axes, a ball inside | **Replace, mathematical 3D** (argued below): the box as a wireframe on its axes, the probability density of state (nₓ, n_y, n_z) as a cloud of points, coloured by the sign of ψ, with the nodal planes drawn faint. Choices nₓ, n_y, n_z ∈ {1, 2, 3}; sliders L_y/Lₓ and L_z/Lₓ (0.5–2, special at 1, the cube). Point: the state is three 1D boxes multiplied, one set of nodal planes per axis, and (2,1,1), (1,2,1), (1,1,2) are one shape turned. Readout E = (h²/8m)(nₓ²/Lₓ² + n_y²/L_y² + n_z²/L_z²) with numbers and its degeneracy. Still: a change of state morphs the cloud; no clock. |
| Table 3.9.1 | 3.9 | the cube's levels to n² = 21, combinations and degeneracies | Kept as a `div.book-table`, and a **new Sim, still**: the ladder of the lowest levels as the box's two aspect sliders move; the rungs split apart when the box is not a cube and merge, labelled 3, 6, …, at the cube; an accidental merge appears at L_y = 2Lₓ (Example 3.9.1). Point: degeneracy is the cube's symmetry. Flat. May instead stand beside the 3D cloud as one figure (archetype 5, 3D + bars); the orchestrator picks one or two figures. |
| summary 1.1, 1.2, 1.3 | summary | a well (Wikimedia SVG), ψ and \|ψ\|² (two panels), cube levels and degeneracies | Faithful copies, unnumbered, still (see "The summary page"). |

No photograph, no embed, no unnumbered image in a section.

### Flat or 3D for the 3D box (rules 24.8 and 28)

What the reader must take from 3.9 is an arrangement in space: a density
that fills a volume, split by nodal planes that stand perpendicular to one
axis or another, and three degenerate states that are one shape turned
through the cube. Rule 28.1 puts "a field that fills a volume" in 3D, and
the book draws the box in perspective (Figure 3.9.1), which 24.8 names as the
signal. Against it: the energies and the degeneracy count, which the
section's example and exercise ask about, are a ladder and read flat; and a
density can be cut flat, three slices through the centre or a z-slider over
an xy heatmap. The cuts lose exactly the lesson: a reader has to stack the
slices in the head to see that (2,1,1) is (1,2,1) turned, and a slice
through a nodal plane is blank. So: **mathematical 3D** for the state, flat
for the ladder.

Which 3D drawing: an **isosurface** (lobes at a chosen fraction of the
maximum) reads as solid blobs, needs a threshold the book never names and a
marching-cubes mesh; **slices** in 3D keep the value but hide the shape; a
**point cloud** sampled from |ψ|² is the Born picture of 3.4 (each point a
place a measurement could find the particle), is honest about density
without a threshold, and needs only points. Proposed: the cloud (about 4000
points, resampled and morphed on a state change), coloured by the sign of ψ
in two hues with a legend, the nodal planes as faint ink planes, the box as
ink edges with Lₓ, L_y, L_z labelled. If the library's smooth 3D shading
lands, a half-maximum isosurface is the alternative the orchestrator may
prefer. **Orbit bound**: no ground, so the reader may look from any side;
azimuth free, elevation −80° to +80° so the z axis stays upright and the
view never flips through a pole; it opens at the book's viewpoint (x to the
right, y toward the viewer, z up, about 20° above). No spin (the reader's own
turn shows the degenerate trio better than a set path), no zoom (no fine
parts), no snap. Fallback without WebGL: the three central slices as flat
heatmaps on one diverging scale (fact colour, rule 7.1).

### What moves in this chapter

Two ideas have a time in them and move: the phase of a stationary state and
a superposition that sloshes (3.5.4), and two counter-running momentum waves
standing still together (3.7.2). Energies, densities, areas, orthogonality,
expectation values and the 3D box answer their controls and stay still
(root rule 14: no dummy loop). The probability-density hue is filled, the
wavefunction hue stroked, everywhere in the chapter, so the reader learns
once that the filled shape is the probability.

### Extra simulations offered (root rule 15)

- **3.4, detections building |ψ|²** (recommended): points land one by one in
  a box in state n (choice), a histogram beneath fills toward |ψₙ|²; the
  book's grade-distribution analogy and 1.9's arriving electrons, now for a
  bound state. Moving (the arrivals are events in time). 3.4 has no figure.
- **3.3, an operator bench** (recommended): choose an operator (p̂ₓ, KÊ, x̂)
  and a function (Example 3.3.1's A sin ax and Ne^{−ix/ħ}, Exercise 3.3.1's
  Me^{−bx}); the function and Âf drawn together (real and imaginary parts),
  and the readout says Âf = kf with k, or that no k exists. Still.
- **3.1, the free-particle wave**: the real and imaginary parts of
  exp[i(px − Et)/ħ] running together, |Ψ|² flat; slider p. Moving. A 3D
  corkscrew (Re and Im as two perpendicular axes, a "wave with two
  perpendicular parts" of rule 28.3) is the costlier variant; flat is
  enough.
- **3.8, uncertainty from a wavefunction**: a Gaussian whose width the
  reader sets, ±Δx on |ψ|², the readout ΔxΔp = ħ/2 for every width; a choice
  of the box's ground state gives 0.568ħ (Exercise 3.8.1's answer). Still.

## Derivation candidates (root rule 29)

Score = facts imported from outside the section's method + the longest run
of moves the book does not print + joins of independent lines.

| Where | What | Printed? | Score | Decision |
|---|---|---|---|---|
| 3.1, (3.1.3)–(3.1.14) | a traveling sinusoid, Euler, E = hν and p = h/λ, ħ, ∂/∂t and ∂/∂x, E = p²/2m, the free-particle equation | block | 4 (Planck, de Broglie, Euler, E = p²/2m) | **Build**, replaces the block: *Derivation · the Schrödinger equation of a free particle*; (3.1.15)–(3.1.17) stay as the postulate. |
| 3.1, (3.1.18) → (3.1.19) | "Putting … and cancelling the exponential factors" | hidden | 5 (separation of variables from 2.2; four unprinted moves: ∂Ψ/∂t, iħ∂Ψ/∂t = Eψe^{…}, Ĥ acts on ψ only, cancel) | **Build** after the paragraph: *Derivation · the time-independent Schrödinger equation*. |
| 3.1 note, (eq30) and the next display | Euler, sin θ = cos(θ − π/2) | block, two moves | 2 | **Build**, small (every printed block qualifies): *Derivation · the real and imaginary parts of Ψ*. |
| 3.2, Hermitian | ∫fĤg, integration by parts twice, the boundary terms vanish | block (one line skipped: the second integration's equality) | 3 | **Build**: *Derivation · the Hamiltonian is Hermitian*, inserting the skipped line. |
| Example 3.2.1, Exercise 3.2.1 | linearity checks, one move per condition | block | 1 | Keep as printed: a check of a definition, no chain. |
| Example 3.3.1 | operators applied to two functions | block | 1 | Keep as printed (its slip corrected by a note). |
| 3.5, (3.5.3)–(3.5.11) and (3.5.14)–(3.5.17) | boundary conditions, k² = 2mE/ħ², A sin kx + B cos kx, B = 0, kL = nπ, Eₙ; then ψₙ = A sin(nπx/L), the substitution θ = nπx/L, A = √(2/L) | blocks | 4 (continuity from 3.4, the oscillatory solution from 2.3, the trivial solution from 2.2, ⟨sin²⟩ = ½) | **Build** as one record ending in two results: *Derivations · the particle in a box* (Eₙ and ψₙ). |
| 3.5, (3.5.19) | orthogonality "using the trigonometric identity … to show" | hidden | 5 (the identity; four unprinted moves: substitute, apply, integrate two cosines, sin((m ± n)π) = 0) | **Build** after the paragraph: *Derivation · orthogonality of the box's eigenfunctions*. |
| 3.5 note, (PIBtime) and two displays | Euler on ψₙe^{−iEₙt/ħ} | block | 2 | **Build**, small, the same shape as 3.1's note; or cite 3.1's (the orchestrator decides: the reader sees the move twice). |
| 3.5 note, ΔxΔp ≈ h | E₁ = p²/2m, Δp ≈ h/L, Δx ≈ L | prose | 2 | Stays. |
| Examples 3.5.1, 3.5.2 | an antiderivative then substitutions; orthonormality applied | block | 1 | Keep as printed (substitution into the section's formula). |
| 3.6, (3.6.11)–(3.6.15) | d/dt∫\|ψ\|², the TDSE times ψ*/iħ, its conjugate, sum, a total derivative, the boundary term | block | 3 | **Build**: *Derivation · normalization is kept in time*; the book drops ħ from (3.6.12)–(3.6.15), which the derivation follows correctly with notes. |
| Example 3.6.2 | the Gaussian into the normalization condition, change of variable, ∫e^{−y²} = √π | block | 2 (the integral table; a change of variable) | **Build** as *Example 3.6.2 ·*. |
| Example 3.6.1, Exercise 3.6.1 | rectangle approximations | block | 0 | Keep as printed. |
| 3.7, (3-35) | ⟨H⟩ split into ⟨KE⟩ + ⟨V⟩ | block, two moves | 1 | Keep as printed: a definition substituted. |
| Example 3.7.2 ("Exercise 3.7.2") | ⟨KE⟩ for ψ₁ by differentiating twice and reusing the normalization | block | 2 | **Build** as *Example 3.7.2 ·* (the prose cites it). |
| Example 3.7.3 | ⟨p⟩ = 0, the last move hidden (∫sin cos = 0) | block | 4 (sin cos = ½ sin 2θ; three unprinted moves) | **Build** as *Example 3.7.3 ·*, inserting the skipped lines. |
| Example 3.7.1 | sums of scores | block | 0 | Keep as printed. |
| Example 3.8.1 | ⟨x⟩, ⟨x²⟩, ⟨p⟩, ⟨p²⟩ of a Gaussian, Δx, Δp, the product | block | 4 (two Gaussian integrals, the odd-function rule, one join) | **Build** as *Example 3.8.1 ·*, correcting two slips (below). |
| 3.8 note | the same expectation values with ψ or Ψ | "easy to show" | 3 | Stays. |
| 3.9, (3.9.2)–(3.9.10) | ψ = XYZ, divide by XYZ, three constants, three 1D boxes, the product and the sum | block | 3 (3.5's solution, separation of variables) | **Build**: *Derivation · the particle in a three-dimensional box*, following the correct mathematics where the book divides "by the xyz product" and writes the separated equations inline. |
| Example 3.9.1 | equal ratios nₓ²/Lₓ² = n_y²/L_y² | prose and displays, no chain | 0 | Keep as printed. |

Exercise keys are the book's and stay as printed (with corrections).

## Corrections spotted (root rule 13)

- **intro**: the thumbnail credit names "wavenumbers" nₓ = 2, n_y = 2 for
  quantum numbers (the credit is left out with the thumbnail, as in
  Chapter 1).
- **3.1**: "construction an analogous structure"; "it by no means, a general
  approach"; "Corresponding, the solution"; "a only 1-dimensional"; "Equation
  2.1.1" for the wave equation (2.1.2); "Equation 3.1.5 represents … the
  wavelike nature of a particle with energy E" means (3.1.7); "differentiation
  of Equation 3.1.9 with respect to x" means (3.1.7); "Equation 3.1.3 … can
  be generalized" means (3.1.14); "Equation 3.1.6 is then expanded" means
  (3.1.16); "kinetics and potential energies"; ∇f(x,y,x); "direclty";
  "wavefunction dependent (or time-independent) wavefuction" for a
  time-independent wavefunction; "differs from from"; `exp` set upright as
  e·x·p in (3.1.6).
- **3.2**: objective "do not always to operators"; "(in 1D)" over a 3D
  equation; "To confirm is an operator is linear" (twice); "both conditions
  in Equation 3.2.2b" means (3.2.2a) and (3.2.2b); "The most operators";
  "specific times of matrices" for types; the second integration by parts
  prints only its right-hand side.
- **3.3**: objectives "determined by solve by", "obserable", "Identity and
  manipulate", "just like all measurable"; "Both time-dependent and
  time-independent Schrödinger equations are … eigenvalue equations" (only
  the time-independent one is); "(and it more commonly)"; "The right hand
  side of Equation 3.3.5" (means (3.3.14)); "In addition determining";
  "eigenstates of an operator (φ)" (φ is the eigenstate); "can be usually
  be"; Example 3.3.1(b): −iħ∂/∂x Ne^{−ix/ħ} = −Ne^{−ix/ħ}, so the momentum
  is −1, not "p_x = −N"; Exercise 3.3.1's key gives the kinetic-energy
  eigenvalue as b², which is −ħ²b²/2m.
- **3.4**: objective "from a wavefunctions"; "the probability amplitude
  P(x,t)" for the probability density; P(x ∈ [a,b]) over a volume in
  (3.4.3) and (3.4.4); "should be both finite"; "is in the feature";
  "dθ" set as a raw θ in the spherical volume element; Example 3.4.2's
  "eψ*(r₀)(r₀)dτ" for eψ*(r₀)ψ(r₀)dτ.
- **3.5**: "used to describing"; "ψ(a) = A sin kL" for ψ(L); "sin kx = 0"
  for sin kL = 0; "n = 1,2,,3"; "Eliminating k between Equation 3.5.6 and
  3.5.10" means (3.5.6a); "allows"/"depends" agreement; "given by Equation
  3.5.14, with B = 0 and k = nπ/L = a" (cites itself; means (3.5.7)); "∫₀ᵃ"
  for ∫₀ᴸ in (3.5.15); "infinite-denumerably infinite"; Figure 3.5.2's
  caption says the first four wavefunctions, the image shows three; Exercise
  3.5.1's key "(.e., probability"; the "simplified" imaginary part writes
  cos(Eₙt/ħ) − π/2 for cos(Eₙt/ħ − π/2); "eignestates"; "The normalization
  (Equation 3.5.18)" means (3.5.15); "orthonormality (Equation 3.5.21)"
  means (3.5.20); Example 3.5.2 integrates from −∞ to +∞ for 0 to L, and its
  "the integrand is odd" holds about x = L/2, not 0.
- **3.6**: "the under the"; "amended to included"; Example 3.6.1's
  computations name the probability "|ψ_{n=1}|²", and the n = 2 one still
  writes n = 1; Exercise 3.6.1's solution "wavefunctions of this work";
  "According to Equation 3.6.1, the probability of a measurement … between
  −∞ and +∞" (that is (3.6.2)); (3.6.12)–(3.6.15) drop ħ: ψ*∂ψ/∂t =
  (iħ/2m)ψ*∂²ψ/∂x² − (i/ħ)V|ψ|², and the factor before the bracket in
  (3.6.14) and (3.6.15) is iħ/2m.
- **3.7**: objective "participle"; "descretized"; Example 3.7.1's sum adds
  76 for the last 67 (its result 71.625 is right); the box titled "Exercise
  3.7.2" is the Example 3.7.2 the prose cites; its "average value for the
  total energy" is the kinetic energy, and "dependent on the n quantum
  number" for the n = 1 case; "We can calculate the most probable position"
  under "Average Position"; ⟨x⟩ integrated from −∞ to ∞ and missing dx in
  (GSExpect); "the particle is most likely to be found at the center" (it is
  the average for every n, the most probable place only for odd n);
  "(Exercise 3.7.4)" for the momentum claim means Exercise 3.7.5; Exercise
  3.7.3 points at "the graphs you made above", which do not exist; "an
  electron in the box"; Exercise 3.7.5's alternative solution: a stray x in
  d/dx x sin, h²/L for ħ²(nπ/L)², ⟨p²⟩ = −h²/L (it is n²π²ħ²/L², positive),
  and a square root of a negative number; "sine and cosine … orthonormality"
  over 0 to L.
- **3.8**: "coresponding"; "Heisenburg uncertainly"; "a particles";
  Example 3.8.1: d²/dx² e^{−ax²} is 2a(2ax² − 1)e^{−ax²}, printed
  2a(ax² − 1), and halving the range to 0…∞ doubles the first coefficient to
  −8ħ²a², printed −4ħ²a² (the result aħ² is right).
- **3.9**: "a particle within a higher dimensions"; the region "Lₓ < x < 0"
  for x < 0 or x > Lₓ (three times); "r = Lₓx̂ + L_yŷ + L_zẑ" for the position;
  "Schrondinger"; "divide it by the xyz product" for XYZ; "E is … the sum of
  x, y, and z"; ≈ between two equations in (3.9.7); "de Broglie Energy
  equation" for the 1D box's energy; "add Equation 3.9.9 and Equation 3.9.6";
  "a 3-D cube (i.e., Lₓ = L_y = L)" without L_z (twice, and Table 3.9.1's
  caption); "sum of the squares … (Equation 3D wave)" means (3.9.10); "MAY
  has"; "called as"; Exercise 3.9.1's key opens a parenthesis it never
  closes.
- **summary**: Ĥ = −(ħ/2m)∂²/∂x² for −(ħ²/2m); the rearranged equation
  (ħ/2m)∂²ψ − Eψ = 0 for (ħ²/2m)∂²ψ + Eψ = 0; "Figure 1.1–1.3" numbers;
  Figure 1.3 lists (3,1,1) three times for (3,1,1), (1,3,1), (1,1,3); its
  image's alt text describes a cartoon cat (not shown to readers, dropped).

## Licences of the figures

The pages are CC BY-NC-SA 4.0 (the summary page untagged, the book's).
3.5.1–3.5.3 OpenStax (CC BY 4.0); 3.5.4 public domain (Sbyrnes321); 3.5.5,
3.6.1–3.6.3 and 3.9.1 CC BY-NC (Ümit Kaya); 3.7.1 no credit; 3.7.2 public
domain (LucasVB); the summary's three images no credit. Every one is
replaced or redrawn, so the question is only which originals ship in
`originals`: 3.7.1 and the summary's three are the doubtful ones.

## What is new to OmniStax here

- The first chapter summary page (`summary/`), and its hand-numbered
  figures.
- Boxes whose class and printed title disagree (3.6, 3.7) and a question
  printed twice (3.4.1 = 3.6.1).
- Example boxes with no solution (3.4): questions, not examples.
- `\cancelto` (3.6), `\op` (summary), `\mbox` (3.9) and the increment sign
  ∆ (3.8), none of which the app's KaTeX takes; an irregular table with a
  spanning header (Table 3.9.1); inline maths carrying `\label` (3.9).
- Three new types: **wavefunction** (Ψ, ψ, ψₙ, eigenfunctions,
  eigenstates), **probability density** (|ψ|², P) and **operator** (Ĥ, p̂ₓ,
  x̂, KÊ, L̂, Â, B̂, Ô, ∇²). The chapter's first mathematical 3D scene that is
  a density rather than a surface.

## The chapter's answer to root rule 23

Chapter 2's string becomes a particle: the same sin(nπx/L) stack, now with
energies that grow as n², a probability that is the square of the wave, and
a phase that turns in time. The reader should come away having seen four
things rather than read them: that the ladder's rungs spread apart as each
adds a node; that a stationary state's wave spins while its probability
stands perfectly still, and that mixing two rungs sets the probability
sloshing; that a probability is an area and an average is a balance point,
even one where the particle is never found; and that a cube's degenerate
states are one cloud turned through the box, splitting apart the moment the
box is stretched. The Born picture threads it: wherever a density is drawn,
it is the pattern many measurements would leave, which 3.4's detection Sim
builds dot by dot and 3.9's cloud shows in three dimensions.

## Tool changes made for this chapter

- `tools/fetch.py --media N` also fetches the images of the chapter's N.S,
  N.E and N.T pages (the summary's three images had been missed).
- `tools/lt2md.py`: a `\label` inside inline maths is dropped with a
  warning (3.9's three separated equations); where a box's printed title
  names the other kind (an exercise box titled "Example 3.6.1"), the marker
  keeps the class as its kind and adds the printed label,
  `{printed:Example 3.6.1}`, with a warning. Reconverting Chapters 1 and 2 to
  scratch changes no byte of their source.md.
- `tools/md2html.py`: drafts `3.intro` and `3.summary` into `intro/` and
  `summary/`; writes `\cancelto{v}{X}` as `\overset{\to v}{\cancel{X}}`,
  `\op{X}` as `\hat{X}`, `\mbox` as `\text` and ∆ as `\Delta`; sets an
  irregular table's `{span=N}`/`{rows=N}` as `colspan`/`rowspan`; uses a
  box's printed label as its title or `source_number`; gives exercises
  unique ids where two boxes print one number. Every maths string of the
  eleven drafts renders in the app's KaTeX.
