# Exploration: Chapter 5, The Harmonic Oscillator and the Rigid Rotor

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 5`,
after the tool fixes listed at the end), every page read in full, the
chapter's 42 images looked at (the SVGs rendered through sharp). The landing
page (11782) prints words of its own, three bulleted reasons the harmonic
oscillator matters, so the chapter has an **`intro/` page** (root rule 21.1;
its thumbnail credit is left out, as in Chapter 3, since the page does not
show the thumbnail). 5.S (550562) is a real summary page (two `###` blocks,
harmonic oscillator and rigid rotor, four figures), routed to `summary/`.
5.E (13424) has no body at all (its tags speak of hydrogen-like atoms, a
LibreTexts leftover): no exercise lives at the end of the chapter, so nothing
is routed from it (root rule 9). The exercises are the inline boxes, routed
below by what they test; two are held for later sections of this chapter.
No stray passage elsewhere in the book tests this chapter (the full-book
pass lists the N.E pages; only 19.E and 21.E hold anything, and neither is
about oscillators or rotors).

## Pages

| Page | LibreTexts id | Licence | Authors | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / all displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11782 | BY-NC-SA 4.0 (tag) | none | none: a list of three | | | | | | | |
| 5.1 A Harmonic Oscillator Obeys Hooke's Law | 13413 | BY-NC-SA 4.0 | Michael Fowler (tag) | The Classical Harmonic Oscillator; Solving the Harmonic Oscillator Model; Harmonic Oscillator Energies | 3 | 3 | 5 | 1 in Example 5.1.1's solution | 0 | 2 (Caution; "Two atoms or one?", holding Figure 5.1.3) | 8 / 28 |
| 5.2 The Equation for a Harmonic-Oscillator Model … Reduced Mass | 13414 | BY-NC-SA 4.0 | Eugene Lee (tag) | Reduced Mass; The Quantum Harmonic Oscillator | 2 (both printed "Example 5.2.1") | 1 | 1 | 0 | 1 (5.2.1, in a note) | 2 (Warning ν/v; Caution: atomic weights) | 4 / 10 |
| 5.3 The Harmonic Oscillator Approximates Molecular Vibrations | 13415 | **BY 4.0** (shared BY-NC-SA) | Peter Kelly (tag) | none | 0 | 0 | 3 (5.3.1, 5.3.2, 5.3.4; no 5.3.3) | 0 | 0 | 2 (Limitations; Morse Potentials, holding 5.3.4) | 3 / 6 |
| 5.4 The Harmonic Oscillator Energy Levels | 13419 | BY-NC-SA 4.0 | Zielinski et al. (tag) | none | 0 | 1 | 1 | 0 | 0 | 0, one pulled quote | 6 / 7 |
| 5.5 The Harmonic Oscillator and Infrared Spectra | 13418 | BY-NC-SA 4.0 | Zielinski et al. (tag) | IR Spectroscopy; Selection Rules for IR Transitions | 1 + 1 printed "Example 5.5.2" in an exercise box | 3 | 1 | 0 | 2 (in Example 5.5.1; 5.5.1) | 2 (The Wavenumber as a Unit of Energy; Rules for IR Absorption), one pulled quote | 12 / 33 |
| 5.6 The Harmonic Oscillator Wavefunctions involve Hermite Polynomials | 13420 | BY-NC-SA 4.0 | Zielinski et al. (tag) | Solving for the Quantum Wavefunctions (### Hermite Polynomials); Tunneling in the Quantum Harmonic Oscillator | 0 | 11 | 3 | 0 | 0 | 1 (Alternative … Formulation) | 19 / 25 |
| 5.7 Hermite Polynomials are either Even or Odd Functions | 13421 | **BY-SA 4.0** (stays BY-SA) | Delmar Larsen (tag) | Hermite Polynomials are Symmetric; Integration over Symmetric Functions; Hermite Polynomials are Orthogonal; Concluding | 2 | 0 | 1 (six panels) | 0 | 1 (5.7.1) | 2 (Generating Formula; an untitled emphasis box) | 5 / 17 |
| 5.8 The Energy Levels of a Rigid Rotor | 13422 | BY-NC-SA 4.0 | its Contributors list: Ian Huh; Hanson, Harvey, Sweeney, Zielinski; Tuckerman; MIT OCW (Griffin, Van Voorhis) | The Classical Rigid Rotor in 3D; The Quantum Rigid Rotor in 3D (### Solving the φ Equation; ### Solving the Θ(θ) Equation); Spherical Harmonics; Summary; References | 1 (printed 5.8.7) | 10 | 4 | 0 | 1 (5.8.1) | 1 (Interpretation of Quantum Numbers), three pulled quotes | 28 / 43 |
| 5.9 The Rigid Rotator is a Model for a Rotating Diatomic Molecule | 13423 | BY-NC-SA 4.0 | Zielinski et al. (tag) | Introduction to Microwave Spectroscopy; Microwave Transition Energies | 1 + 1 printed "Example 5.9.6" in an exercise box | 5 | 5 | 0 | 1 (5.9.1) | 1 (Advanced: Non-Rigid Rotors, holding 5.9.5) | 12 / 28 |
| summary (5.S) | 550562 | untagged (the book's) | none printed | `###` Harmonic Oscillator; Rigid Rotor | | | 3 numbered by hand "1.5", "1.6", "1.7" | 1 | | | 2 / 14 |
| 5.E | 13424 | | | empty | | | | | | | |

Every section from 5.3 on has learning objectives (5.6's single "objective"
is a copy of 5.2's title: it states nothing, so 5.6 gets no objectives row
and a correction note); 5.1, 5.2 and 5.4 have none. Only 5.8 closes on a
"## Summary" (to `summary_html`) and a References list (kept as its closing
block, as 3.9's and 4.6's were); its Contributors list is its credit. The
other pages print no Contributors list; their authors are the tags'. Every
section opens on prose before its first `<h2>` (5.3 and 5.4 have no `<h2>`
at all), so each needs an opening header of the agent's (root rule 3),
proposed below, which the builder puts through the humanizer.

### The intro page

`intro/source.md`: three bullets, each a bold lead phrase ("The harmonic
oscillator is common:", "… intuitive:", "… mathematically simple:") and a
sentence or two. One block, with a header of the agent's (proposed "Why the
Harmonic Oscillator"); the bold leads stay bold as the book prints them (they
are emphasis, not terms). No figure, no exercise. The thumbnail credit
(Mysterioso's rigid rotor, CC BY-SA 3.0) is left out with the thumbnail.

### The summary page (5.S)

Converted to `ch05/summary/source.md`; the chapter's `summary/` page, named
by `chapter.json`'s `summary` record (550562), built like 3.S and 4.S: no
lead, objectives, exercises or coverage. Its two `###` headers become its two
`<h2>` blocks. It restates 5.1–5.9 in its own symbols (l, m, Y_l^m, I = μr²)
and adds what the sections only gesture at: the Taylor argument for the
harmonic potential, the Laplacian in spherical coordinates, L̂², the vector
model of angular momentum. Its two labelled displays (the Taylor series and
the angular Laplacian) are numbered by MathJax; the draft tags them 5.S.1
and 5.S.2 (the page's own number; not checked against the live page, which
renders client-side); every other display carries `\nonumber`. Figures: an
unnumbered image (ψ_v and |ψ_v|² on their levels, two panels) and three
figures captioned by hand "Figure 1.5" (the rigid rotor, two masses about
their center of mass), "1.6" (the rotor's levels with ΔE = 2B, 4B, 6B, 8B)
and "1.7" (two panels: (a) the vector of length √(l(l+1)) with its
projections m on z, (b) the five cones of l = 2), none credited. As in 3.S,
the numbers 1.5–1.7 would read as Chapter 1's: the rows are unnumbered
(eyebrow "Figure"). Proposed: faithful copies in the house style (archetype
7, still) for the image, 1.5 and 1.6 (with the 1.6 caption corrected through
its row: the gaps grow), and for 1.7 the one figure of this chapter whose
original is itself a 3D drawing: **two views** (archetype 10), the 2D panel
(a) by default and the cones of (b) as a mathematical 3D scene, choice l = 1,
2, 3 opening on the book's l = 2 (orchestrator: this goes past 3.S's
faithful copies). The image and "1.5" look like scans from a printed textbook
(greyscale halftone, McQuarrie-style lettering): proposed **not to ship them
in `originals`** (orchestrator), since no licence covers them.

### Per section

- **5.1** Opening (proposed header "Motions of a Diatomic Molecule"):
  translation, rotation and vibration; bold *rigid rotor* and *harmonic
  oscillator*; Figure 5.1.1 (the cleonis GIF of a vibrating, rotating pair);
  why a classical description first. The Classical Harmonic Oscillator: ball
  in a dish, Figure 5.1.2 (spring A/B/C), Hooke's law (5.1.1), *stiffness*,
  V = ½kx² (5.1.2), the Caution note (stiff ≠ strong, no dissociation), the
  note "Two atoms or one?" with Figure 5.1.3 and *vibrational coordinate*,
  Example 5.1.1 (a–d, with a Desmos plot in (d)'s solution). Solving the
  Harmonic Oscillator Model: (5.1.3), (5.1.4), x(t) (5.1.5), ω (5.1.6),
  p(t) (unnumbered), *harmonic*, Figure 5.1.4 (GIF), Example 5.1.2,
  Exercises 5.1.1, 5.1.2. Harmonic Oscillator Energies: p (5.1.7), E = T + V
  (5.1.8), *turning points*, Figure 5.1.5, the classical density paragraph,
  Example 5.1.3, Exercise 5.1.3. Concepts (new): molecular motion
  separation, harmonic oscillator, rigid rotor, Hooke's law, force constant,
  vibrational coordinate, harmonic potential, equation of motion, harmonic
  motion, oscillator frequency, oscillator energy, turning points, where a
  classical oscillator is found; reinforced: angular frequency, amplitude,
  phase constant, sine wave.
- **5.2** Opening (proposed "Two Bodies as One"): μ_AB (5.2.1), reduced
  mass. Reduced Mass: separation of the motion, Figure 5.2.1 (vectors, center
  of mass, reduced mass), Example 5.2.1 (proton and electron). The Quantum
  Harmonic Oscillator: V ≈ ½kx² (5.2.2), the Schrödinger equation
  (unnumbered), E_v (5.2.3), ν (5.2.4); Warning (ν and v); Caution: Do Not Use
  Atomic Weights, with Table 5.2.1; a second box printed **Example 5.2.1**
  (Isotope Effect: H³⁵Cl and H³⁷Cl), *isotope effect*; Exercise 5.2.1.
  Concepts (new): reduced mass, the oscillator's Schrödinger equation,
  vibrational quantum number, oscillator energy levels, isotope effect.
- **5.3** No `<h2>`. Proposed blocks: "The Taylor Expansion of a Potential"
  (opening, (5.3.1), (5.3.2), Figure 5.3.1), "Anharmonic Corrections"
  (anharmonic oscillation, Figure 5.3.2, the levels E_v with ν_e x_e, ν_e
  y_e, the note "Limitations of the Harmonic Oscillator Model"), "The Morse
  Potential" (the note with Figure 5.3.4 and (5.3.3)). Concepts (new): Taylor
  expansion of a potential, anharmonicity, anharmonic levels, well depth,
  dissociation energy, limitations of the model, Morse potential.
- **5.4** No `<h2>`. Proposed blocks: "Quantized Energies" (opening, Figure
  5.4.1, E_v (5.4.1), P (5.4.2), ⟨Q⟩ = 0, zero-point motion, Exercise 5.4.1),
  "Measuring the Displacement" (rms deviation, orthonormality (5.4.3),
  (5.4.4)), "The Classical Limit" (forbidden region, *zero-point energy*,
  (5.4.5), the pulled quote, ω (5.4.6)). Concepts (new): the oscillator's
  zero-point energy, classical displacement limit, zero averages, rms
  displacement, orthonormality of ψ_v, classically forbidden region;
  reinforced: zero-point energy (3.5), expectation value, uncertainty.
- **5.5** Opening (a section introduction on IR spectroscopy; proposed "What
  Infrared Spectra Show"). IR Spectroscopy: E_v (5.5.1), (5.5.2), ħω form,
  the photon condition (5.5.3), Δv = ±1, (5.5.4); note "The Wavenumber as a
  Unit of Energy" (5.5.5); ν̃_m (5.5.6); Example 5.5.1 (a table of six force
  constants, worked for HCl only; "the other molecules remains as an
  exercise"); Table 5.5.1; the box printed **Example 5.5.2** (H³⁵Cl's
  zero-point energy and Q₀). Selection Rules for IR Transitions: *selection
  rules*, *transition moment integral* (5.5.7), *forbidden transition*,
  Figure 5.5.1, μ̂ (5.5.8), its Taylor series (5.5.9), (5.5.10), (5.5.11),
  note "Rules for IR Absorption", Exercise 5.5.1, Δv = ±1 (5.5.12), O₂ and N₂,
  Exercise 5.5.2, the pulled quote, *overtone*, Exercise 5.5.3. Concepts
  (new): IR spectroscopy, transition frequency, selection rule, dipole
  moment, dipole moment operator, transition moment integral, forbidden
  transition, IR selection rules, overtone; reinforced: wavenumber, photon.
- **5.6** Opening (proposed "The Oscillator's Schrödinger Equation"): one
  mode per diatomic; Ĥ = T̂ + V̂ (5.6.1), Ĥ(q) (5.6.2), (5.6.3), the TISE
  (5.6.4), (5.6.5), β (5.6.6), x = q/β (5.6.7), (5.6.8), (5.6.9), Exercise
  5.6.1. Solving for the Quantum Wavefunctions: the asymptotic strategy,
  (5.6.10), (5.6.11), the power series, (5.6.12), (5.6.13), Exercises 5.6.2,
  5.6.3; ### Hermite Polynomials: H₀–H₇, Figure 5.6.1, Exercise 5.6.4, N_v
  (5.6.14), ψ_v (5.6.15), the note (α and N_v″), Exercise 5.6.5, E_v (5.6.16),
  Exercise 5.6.6, Figures 5.6.2 and 5.6.3 with Exercises 5.6.7–5.6.9, the
  Bohr correspondence principle. Tunneling in the Quantum Harmonic Oscillator:
  Exercise 5.6.10, P[forbidden] (5.6.17)–(5.6.19), the error function,
  0.157, *quantum mechanical tunneling*, Exercise 5.6.11. Concepts (new):
  scaled equation, asymptotic-times-series method, Hermite polynomials,
  oscillator wavefunctions, their nodes and parity, quantum tunneling, error
  function, ground-state forbidden probability; reinforced: correspondence
  principle (3.3), normalization, Hamiltonian.
- **5.7** Opening (a history paragraph and Figure 5.7.1; proposed "Hermite's
  Polynomials"); note "Generating Formula" (5.7.1). Hermite Polynomials are
  Symmetric: even and odd (bold), the cited but absent Figure 5.7.2, the
  emphasis box, the product rules, Table 5.7.1, (5.7.2) parity. Integration
  over Symmetric Functions: (5.7.3), the even and odd reductions, Example
  5.7.1 (an assertion with a "Solution"), the odd integrand. Hermite
  Polynomials are Orthogonal: (5.7.4), (5.7.5), Example 5.7.2. Concluding.
  Concepts (new): even function, odd function, product rules, integrals over
  a symmetric interval, Hermite recurrence, Hermite parity, Hermite
  orthogonality; reinforced: orthogonality.
- **5.8** Opening, two sentences (a section introduction; proposed "Rigid
  Rotors"). The Classical Rigid Rotor in 3D: *rigid rotor*, (5.8.1)–(5.8.8),
  *angular velocity*, *angular momentum*, L = Iω. The Quantum Rigid Rotor in
  3D: Figure 5.8.1, ΘΦ (5.8.9), (5.8.10)–(5.8.15), λ (5.8.14), Exercise
  5.8.1, the θ- and φ-equations (5.8.16), (5.8.17), Exercise 5.8.2; ### the φ
  equation: (5.8.18), Exercise 5.8.3, (5.8.19), Exercise 5.8.4, *cyclic
  boundary condition* (5.8.20), (5.8.21), Exercise 5.8.5; ### the Θ equation:
  Table 5.8.1, λ = J(J+1) (5.8.22), (5.8.23), E (5.8.24), the J = 0, 1, 2
  bullets (*one state*, *three states*, *five states*), Figure 5.8.2,
  Exercises 5.8.6, 5.8.7, note "Interpretation of Quantum Numbers", Example
  5.8.7 (O₂). Spherical Harmonics: (5.8.25), Figure 5.8.3, Figure 5.8.4,
  (5.8.26), (5.8.27), Exercise 5.8.8, Y₁⁰ (5.8.28), the xy-plane *node*,
  Exercises 5.8.9, 5.8.10. Summary (to `summary_html`), References.
  Concepts (new): angular velocity, angular momentum, moment of inertia,
  rotational kinetic energy, spherical coordinates, the rotor's Schrödinger
  equation, the θ and φ equations, cyclic boundary condition, Φ functions,
  associated Legendre functions, rotor quantum numbers, rotor levels,
  degeneracy 2J + 1, spherical harmonics, orientation probability, a quantum
  rotor is not a classical one; reinforced: separation of variables,
  Euler's formula, degeneracy, node.
- **5.9** Opening (proposed "Rotation in Space"): the rigid-rotor model,
  Figure 5.9.1 (a chair's three rotations), the questions, Figure 5.9.2.
  Introduction to Microwave Spectroscopy: μ_T (5.9.1), (5.9.2), (5.9.3),
  ΔJ = ±1 (5.9.4), Δm_J (5.9.5), Exercise 5.9.1, E_J (5.9.6). Microwave
  Transition Energies: (5.9.7)–(5.9.9), 2B(J_i + 1), *rotational constant*
  (5.9.10), B/h (5.9.11), B̃ (5.9.12), Exercises 5.9.2–5.9.4, Figure 5.9.3,
  Table 5.9.1, Figure 5.9.4, Exercise 5.9.5, Example 5.9.1 (NaH), the box
  printed **Example 5.9.6** (CO's bond length), note "Advanced: Non-Rigid
  Rotors" with Figure 5.9.5, line intensities. Concepts (new): rotations of a
  molecule, microwave spectroscopy, rotational selection rules, rotational
  constant, transition energies, line spacing 2B, centrifugal stretching,
  bond length from a spectrum (skill).

## Equation numbers

One number per display, an `align` included, as the converter's `n=` gives
them (every display without `\nonumber` is numbered, on the site's MathJax
`tags: all`). The book's labels are names, not numbers, and they lag the
printed numbers: 5.1's `5.1.2` is printed (5.1.1); 5.5's labels run
`5.5.16`…`5.5.34`; 5.6 labels most displays `15.6.x` and its tunnelling
block `5.4.9`–`5.4.11` (printed (5.6.17)–(5.6.19)); 5.8's (5.8.20) carries
two labels on its two rows (`5.8.24`, `5.8.25`), as 5.9's (5.9.7) does.
Every `\ref` resolves on its own page. Citations that miss (corrections):
5.4 "given by Equation 5.4.1 which is ω = √(k/μ)" (ω is (5.4.6)); 5.5
"Equation 5.5.18 can be modified … in wavenumbers" (it is (5.5.4) that is
divided by hc); 5.6 "Substituting Equations 15.6.7 and 15.6.8" (the change
of variable (5.6.7) is needed too), "the graph you constructed for Exercise
5.6.3" (Exercise 5.6.10); 5.8 "We can rewrite Equation 5.8.3 as" (it is
(5.8.6)), "as shown in Figure 5.8.2" for the sphere (Figure 5.8.4),
Exercises 5.8.9 and 5.8.10 "Figure 5.8.1" (the polar plots are 5.8.3); 5.7
cites Figure 5.7.2 three times and the page has none. The summary page's
two numbers are taken as 5.S.1, 5.S.2 (above).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Printed questions**: 34 exercise boxes (5.1: 3; 5.2: 1; 5.4: 1; 5.5: 3;
  5.6: 11; 5.8: 10; 5.9: 5). Two further boxes are exercise boxes printed
  **"Example 5.5.2"** and **"Example 5.9.6"**, each with a full worked
  Solution: by Chapter 3's decision (a box printed "Example" stays an
  example) they are worked examples under their printed labels, not
  exercises.
- **Keyed**: 13, available now: 5.1.1, 5.1.2, 5.1.3, 5.2.1, 5.4.1, 5.5.2,
  5.6.8, 5.8.3, 5.8.4, 5.8.6, 5.8.7, 5.9.3, 5.9.5. Keys kept as printed with
  correction notes where they slip: 5.1.1 (d²x/dt for d²x/dt², a dropped
  minus), 5.1.2 (the root dropped in √(9k/4m); the factor 3/2 is right),
  5.1.3 (kx/2 for kx²/2; the result is right), 5.2.1 (it answers H³⁵Cl and
  **D³⁵Cl** in cm⁻¹ where the question asks H³⁵Cl and H³⁷Cl frequencies),
  5.6.8 (wrong figure numbers and "n" ranges), 5.8.7 (its last sentence says
  the levels get closer together; they spread apart), 5.9.3 (B̃ in "s/m" for
  m⁻¹).
- **Unkeyed**: 21, available with AI solutions: 12 explain or prove (5.5.1,
  5.6.1, 5.6.3, 5.6.4, 5.6.7, 5.8.1, 5.8.2, 5.8.5, 5.8.9, 5.8.10, 5.9.1,
  5.9.4), 5 compute (5.5.3, 5.6.5, 5.6.6, 5.6.11, 5.8.8), 4 sketch or plot
  (5.6.2, 5.6.9, 5.6.10, 5.9.2). Notes: 5.6.2 is garbled ("v=0 to v=1, v=12,
  v=13, v=14", read as v = 0–3); 5.6.6 has six sub-questions; 5.8.8 drops
  the φ of "a range in [φ] of 0° to 90°"; 5.8.9 and 5.8.10 write θ for φ and
  cite Figure 5.8.1 for 5.8.3; 5.5.3's harmonic answer is 5772 and 8658 cm⁻¹,
  and the solution says the observed overtones fall a little lower, as 5.5
  states.
- **Worked examples**: 12 kept whole, not exercises: 5.1.1, 5.1.2, 5.1.3,
  the two printed 5.2.1, 5.5.1, 5.5.2 (exercise box), 5.7.1, 5.7.2, 5.8.7,
  5.9.1, 5.9.6 (exercise box).
- **Conceptual questions, problems, 5.E**: none; 5.E is empty.
- **Placement (root rule 12)**: two held for a later page. **Exercise 5.4.1**
  (classical against quantum at v = 1 and v = 50) tests the wavefunctions,
  densities and correspondence principle that 5.6 introduces (5.4 draws no
  wavefunction): held for 5.6. **Exercise 5.5.1** (verify Δv = ±1 with a
  Hermite recursion relation) needs the recurrence (5.7.1) and the ψ_v of
  5.6: held for 5.7, tagged with the IR selection rules and the recurrence.
  Both pages' notes say so. Every other question tests its own section.
- **Concepts the book leaves untested**: 5.3 (no exercise at all:
  anharmonicity, the Morse potential), 5.4 once 5.4.1 moves (zero-point
  energy, Q₀), 5.7 before 5.5.1 arrives (recurrence, parity), the IR
  frequencies of Example 5.5.1's other five molecules (the book leaves them
  "as an exercise"), and the isotope shift of a rotational line. **Proposed
  new: 8**: 5.3 two (expand the Morse potential about x₀ to show k = 2Dβ²;
  from HCl's ν̃_e = 2990.9 and ν̃_e x_e = 52.8 cm⁻¹, the 0→1 and 0→2 lines and
  the shrinking spacing); 5.4 two (E₀ and Q₀ for H₂ and D₂ with one force
  constant, 575 N/m; the v = 1 turning point is √3 Q₀); 5.5 one (Example
  5.5.1's remainder: ω, ν, period, ΔE and λ for HF, HBr, HI, CO and NO from
  the book's table); 5.7 two (H₃ and H₄ from the recurrence, checked against
  5.6's list; which of ∫ψ₀xψ₁, ∫ψ₀xψ₂ and ∫ψ₁x²ψ₃ dx vanish by parity alone);
  5.9 one (the J = 0 → 1 line of ¹³C¹⁶O from ¹²C¹⁶O's 115,271 MHz at the same
  bond length).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

The point named is what the reader should see before reading anything.
Rule 14 as rewritten today: the figure starts from the book's and usually
replaces it; motion where the idea moves; a point seen at once; little
effort to read.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 5.1.1 | 5.1 | GIF (CC BY-SA 3.0, cleonis.nl): two balls on a spring, vibrating while the pair turns about its center | **Replace, moving** (the idea has a time in it). The pair vibrates along the bond and turns about a fixed, marked center of mass. Slider m₂/m₁ (detents at 1, H₂; 1.33, CO; 35, HCl); choice of motion: vibration, rotation, both (the book's). **Point: the center of mass never moves; the lighter atom does most of the moving.** Readout m₁r₁ = m₂r₂ with live numbers. Arrows none. Flat. |
| 5.1.2 + 5.1.4 | 5.1 | (CC BY-NC, Kaya) a mass on a spring at rest, compressed, stretched, with the force arrow; (no credit, a Wikimedia GIF) a dot riding a sine curve | **Fold, moving**: one scene drawn twice. Strip + graph (archetype 1): the mass on its spring above, the force F = −kx drawn on it (a symbolic force vector, growing and flipping with x), x(t) tracing below with a drop line. Sliders k and m (ω = √(k/m)), amplitude x₀. **Point: the force always points back to x = 0; a stiffer spring or a lighter mass swings faster, at any amplitude.** Readout F = −kx and x(t) = x₀ sin(ωt + φ) with numbers. Flat. Eyebrow "Figure 5.1.2 + 5.1.4". |
| 5.1.3 | 5.1, note | (CC BY-NC, Kaya) the two-particle vectors (m₁, m₂, R, r) and the one-particle μ at r | **Replace, still** (faithful copy in the house style, archetype 7): (a) and (b) side by side in type colours, no sliders; the variation lives in 5.2.1. Flat: the book's axes are perspective for a relation along one line (rule 28.1). |
| Ex. 5.1.1 (img) | 5.1, solution (d) | Desmos screenshot, no credit: ½kx² for two k | Kept in the solution as the book prints it (the solution is the book's). |
| 5.1.5 | 5.1 | (Paul Wormer, Wikipedia) the parabola V(x) with E and the turning points ±A | **Replace, moving**: the parabola with the energy line E; a ball rides the curve between ±A while bars split E into T and V; below, the classical density builds as a histogram of where the ball has been. Sliders E (or A) and k. **Point: energy sloshes between T and V, and the oscillator lingers at the turning points, so it is most often found there.** Readout E = p²/2m + kx²/2 with numbers. Flat. Its density is the classical curve 5.6's figure compares with. |
| 5.2.1 | 5.2 | (CC BY-NC, Kaya) three panels in 3D axes: the two vectors, the center of mass, the reduced mass | **Replace, moving**: left, the pair vibrating about its fixed center of mass; right, one particle of mass μ on a spring to a wall, driven by the same r(t). Sliders m₁, m₂ in amu, opening on the isotope example's ¹H and ³⁵Cl (1.0078, 34.9688). **Point: the pair vibrates exactly like one particle of mass μ, and μ is always lighter than the lighter atom.** Readout μ = m₁m₂/(m₁ + m₂) and ν = (1/2π)√(k/μ) at the book's k = 478 N/m. Flat (rule 28.1). |
| 5.3.1 + 5.3.4 | 5.3 (main text and the Morse note) | GIF (CC BY-SA 3.0, Darekk2): HCl's potential in cm⁻¹ with levels, the molecule vibrating at E₃; PNG (Wikipedia): Morse and harmonic curves with their levels, D_e and D₀ | **Fold, moving**: one scene drawn twice. HCl's Morse curve with its levels E_v = (v + ½)ν̃_e − (v + ½)²ν̃_e x_e (the book's two-term formula, exact for a Morse curve) and the harmonic parabola with its even rungs; the HCl pair below vibrates between the turning points of the chosen level, a dot riding the curve. Slider v (opens on the GIF's E₃). **Point: real levels crowd together toward dissociation while the harmonic ones stay evenly spaced; D₀ falls short of D_e by the zero-point energy.** Readout the level energy and its spacing to the next. Flat. Constants: HCl's literature ν̃_e, ν̃_e x_e, r_e, D_e (the book gives none; the GIF's axes agree), orchestrator. |
| 5.3.2 | 5.3 | (CC BY 4.0, Kaya) two panels: harmonic, cubic and "exact" curves; ± quartic terms | **Replace, still** (no time; variation is the value add). The "exact" (Morse) curve and its Taylor truncation; choice of order 2, 3, 4 and, for 4, the sign of the quartic term (the right panel). **Point: the parabola fits only near the minimum; each added term follows the true curve further out.** Readout the series with its coefficients. Flat. |
| 5.4.1 | 5.4 | (CC BY-NC 4.0, Kaya) the parabola with E₀…E₄ labelled (v + ½)hν | **Replace, still**: the ladder in the well, each rung drawn between its classical turning points. Sliders k and μ. **Point: the rungs are evenly spaced by ħω, and the lowest sits ħω/2 above the bottom: never zero.** Readout E_v = (v + ½)ħω and Q₀. Flat. |
| 5.5.1 | 5.5 | (CC BY-NC, Kaya) the ladder with blue allowed and red crossed forbidden arrows | **Replace, still**: the ladder (arrows symbolic, the book's blue allowed and red crossed); beside it the integrand ψ_v′ x ψ_v with its signed area filled. Choices v, v′ (0–4) and molecule HCl or N₂ (dμ/dx ≠ 0 or = 0). **Point: the integral cancels to zero unless v′ = v ± 1, and for N₂ it is zero always.** Readout μ_T ∝ (dμ/dx)∫ψ_v′ x ψ_v dx with its value, and ΔE = ħω. Flat. It draws ψ_v, named in 5.5's own integral and drawn in 5.6 (rule 26.5: borderline, orchestrator). |
| 5.6.1 | 5.6 | (CC BY-SA 3.0, Damato et al.) H₀–H₅ on one plot | **Replace, still**: the six polynomials as the book draws them; a choice v (0–7) brings one forward and draws below it H_v e^{−x²/2}. **Point: the polynomial runs off to infinity, and the Gaussian pulls every one of them back to zero.** Flat. |
| 5.6.2 + 5.6.3 | 5.6 | SVGs, no credit: ψ₀–ψ₃ (four panels) and their densities (four panels) | **Fold, still** (a stationary state has no time): ψ_v drawn on its level in the parabola, |ψ_v|² below it, the classical turning points ±Q_v marked, the forbidden region shaded, the classical density (5.1.5's) dashed over |ψ_v|². Slider v, 0–50, detents at the book's 0–3 and the exercises' 10, 20, 50. **Point: ψ_v has v nodes and alternates even and odd; as v grows its density piles up at the turning points like the classical one, and some always leaks past them.** Readout E_v = (v + ½)ħω, nodes, P[beyond ±Q_v] (0.157 at v = 0, the book's (5.6.19)). Flat. The book's panels draw the densities reaching zero at finite x; the new figure shows the tails (no marker). |
| 5.7.1 | 5.7 | the same Wikipedia polynomials as six panels | **Replace, still**, a different point from 5.6.1: H_n beside its mirror image H_n(−x), dashed; choice n (0–7). **Point: an even n maps onto itself, an odd n flips sign: H_n(−x) = (−1)ⁿH_n(x).** Readout the parity. Flat. |
| (5.7.2) | 5.7 | cited three times (x², x³, x³ + 1), absent from the page | No original. See the Sim offered below (orchestrator: whether it carries the number 5.7.2). |
| 5.8.1 + 5.8.4 | 5.8 | (public domain, Andeggs) a point at (r, θ, φ) in 3D axes; GIF, no credit: a sphere with θ and φ arrows | **Fold, still, mathematical 3D** (an angle in space, drawn by the book in perspective: rules 24.8, 28.3): a sphere of radius r₀, the internuclear axis from the origin to the point, θ marked from z and φ in the xy-plane with their arcs and drop lines. Sliders θ, φ (no time). **Point: a rigid rotor's orientation is a point on a sphere; θ and φ are its only freedoms.** Readout x = r sin θ cos φ, y = r sin θ sin φ, z = r cos θ. Free orbit (house style); no buttons. |
| 5.8.2 | 5.8 | PNG, no credit: levels J = 0–4 | **Replace, still**: the levels E_J = J(J + 1)ħ²/2I, each with its 2J + 1 m_J states as short marks; the gaps labelled 2, 4, 6, 8 (ħ²/2I). Slider I (or choice molecule); choice J highlights its states. **Point: the gaps grow with J and each level holds 2J + 1 states of one energy.** Flat. |
| 5.8.3 | 5.8 | GIF, no credit: polar plots of Y₀⁰, Y₁⁰, Y₁¹ and their squares (z horizontal) | **Two views** (archetype 10): the 2D polar plot of |Y|² against θ by default (the book's), and the 3D surface of revolution about z. Choice (J, m_J) from Table 5.8.1 (J ≤ 2), opening on (1, 0). **Point: (Y₁⁰)² is largest along z and zero over the whole xy-plane, the same in every plane through z.** Mathematical 3D, free orbit. Honest note (rules 24.8, 28): the θ-dependence reads flat; only the claim "any plane containing the z-axis" needs the turn. Chapter 6 owns the spherical harmonics as orbitals; this stays at J ≤ 2 (orchestrator). |
| 5.9.1 + 5.9.2 | 5.9 | PNG, no credit: a chair rotated about x, y, z; GIF, no credit: a diatomic turning about x | **Fold, moving, physical 3D** (an arrangement in space, rule 24.8): choice object chair (the book's) or diatomic; choice axis x, y, z; the object turns about it. **Point: the chair has three distinct rotations; the diatomic only two, since turning it about its own axis changes nothing.** Orbit bounded to the views above the chair's seat plane; no buttons. Flat fallback. |
| 5.9.3 + 5.9.4 | 5.9 | GIF, no credit: CO's absorption at 40 K; PNG (CC BY-SA 3.0, Nrrw): levels, J → J + 1 arrows and a stick spectrum 2B apart | **Fold, still** (the text sets out to "reproduce Figure 5.9.3 from Table 5.9.1"): the ladder above, each J → J + 1 arrow landing on a frequency axis at 2B(J + 1), heights from Table 5.9.1's γ_max, the measured lines as ticks. Slider r₀ (opening on CO's 1.131 Å). **Point: the lines are evenly spaced by 2B, and a shorter or lighter molecule spreads them apart.** Readout ν = 2B(J_i + 1) and B̃. No temperature slider (populations are later chapters, rule 26.5). Flat. |
| 5.9.5 | 5.9, note | 5.1.1's GIF again (another file), its caption copied | **Replace, moving**, reusing 5.1.1's drawing with a J slider: the pair turns faster and the bond stretches (exaggerated, rule 28.4), with the true numbers in the readout: B_J from each spacing of Table 5.9.1 and the r it implies. **Point: the faster it turns, the longer the bond, the smaller B, the closer the lines.** Flat. Alternative: cite 5.1.1 (orchestrator; the precedent "built once" fits the image, not this note's idea). |
| summary img, "1.5", "1.6" | summary | ψ_v and |ψ_v|² on levels; the rotor; its levels | Faithful copies, still, unnumbered (3.S's precedent); originals not shipped (scans, above). |
| summary "1.7" | summary | (a) the vector and its projections; (b) cones | **Two views**: (a) flat by default, (b) mathematical 3D cones, choice l. Still: no precession, which would draw a motion the book does not describe. |
| Tables | 5.2, 5.5, 5.7, 5.8, 5.9 | 5.2.1 isotopes; Example 5.5.1's force constants; 5.5.1 IR regions; 5.7.1 product table; 5.8.1 spherical harmonics; 5.9.1 CO lines | Kept as `div.book-table`, corrected by notes (5.2.1's ³⁵Cl mass, 5.5.1's frequency column, 5.8.1's last Φ, 5.9.1's "6 → 6"). |

### What moves in this chapter

The ideas with a time in them: a spring vibrating (5.1.2 + 5.1.4), two
masses about their center of mass (5.1.1, 5.2.1), energy sloshing between T
and V while the classical density builds (5.1.5), a molecule climbing an
anharmonic well (5.3.1 + 5.3.4), a dumbbell and a chair turning (5.9.1 +
5.9.2), a rotor stretching as it spins faster (5.9.5). Still, with sliders:
the Taylor truncations, the ladders, the transition integral, the Hermite
polynomials and their parity, ψ_v against the classical density, the
spherical-coordinate sphere, |Y|², the rotational spectrum. A stationary
state does not move, so ψ_v and |Y|² are still (rule 14: no dummy loop).

### 3D, honestly (rules 24.8, 28)

Four figures earn a turn: the spherical-coordinate sphere (5.8.1 + 5.8.4,
mathematical), |Y|² as a surface (5.8.3, mathematical, behind a 2D default),
the rotations of a chair and a dumbbell (5.9.1 + 5.9.2, physical) and the
summary's cones ("1.7", mathematical, behind a 2D default). The vector
drawings of 5.1.3 and 5.2.1 sit in 3D axes in the book, but their lesson is a
relation along one line: flat. The rotor's wavefunctions are shown only as
the book shows them (Table 5.8.1, J ≤ 2), leaving Chapter 6 the orbitals.

### New simulations proposed (root rule 15)

- **5.7, even, odd and the integral** (recommended, still): choose f and g
  from the book's x², cos x, x³, sin x, x³ + 1; the product is drawn with its
  parity, and ∫₋ₐᵃ fg dx shaded, the odd product's two halves cancelling.
  Point: an odd integrand's areas cancel exactly, whatever the function. It
  stands where the absent Figure 5.7.2 is cited and makes Table 5.7.1
  something to try (orchestrator: number it 5.7.2 or call it a Sim).
- **5.5, the HCl spectrum, fundamental and overtones** (offered): the stick
  spectrum of Δv = 1, 2, 3 from 5.3's anharmonic levels against the
  harmonic prediction of 1, 2, 3 × 2886 cm⁻¹. Point: anharmonicity puts each
  overtone just below its harmonic multiple, as 5.5 says. Still.
- **5.8, the vector model** (offered, not recommended if the summary's
  "1.7" is built as proposed): the angular momentum of length √(J(J+1)) on
  its cone for each m_J. The note in 5.8 describes it; the summary draws it.
- Not offered: a coherent-state oscillator (nothing in the book), a
  temperature slider on the rotational spectrum (later chapters).

## Derivation candidates (root rule 29)

Score = facts imported from outside the section's method + the longest run
of moves the book does not print + joins of independent lines.

| Where | What | Printed? | Score | Decision |
|---|---|---|---|---|
| Example 5.1.1 (a)–(c) | −dV/dx = F, d²V/dx² = k, the minimum | blocks | 1 | Keep as printed (checks of a definition, 4.6.1's precedent). |
| 5.1, (5.1.3)–(5.1.6) and p(t) | the classical oscillator's motion | equations with words, the solution asserted ("standard method") | 4 (Newton's second law; the unprinted substitution: differentiate twice, compare, read ω; 4 moves) | **Build**, replacing the displays: *Derivation · the motion of the classical oscillator*, (5.1.5) and (5.1.6) on the results. |
| Example 5.1.2, Exercise 5.1.1's key | substitution checks | blocks | 1 | Keep as printed. |
| Example 5.1.3 (b) | E = ½kA² | block | 3 (x(t) and v(t) implied, ω² = k/m; one unprinted move; one join by sin² + cos² = 1) | **Build** as *Example 5.1.3 ·* for part (b); the K and V lines imply x = A cos ωt, (5.1.5) with φ = π/2 (a node note). |
| 5.2, the reduced mass | two bodies to one | stated | – | Stays: the separation's facts (center of mass, relative coordinate) are never stated; nothing is invented. |
| 5.2, E_v | "outside the scope of this text" | – | – | Stays. |
| 5.3, (5.3.1) → (5.3.2) | V(x₀) = 0, no linear term | hidden | 4, but 3 moves | Stays (below the four-move bar); the summary page states the same argument. |
| 5.5, (5.5.1)–(5.5.4) | the photon's frequency equals the vibration's | block | 3 (E_v from 5.2/5.4; hν = ΔE from 1.x; one join, Δv = 1) | **Build**, replacing the block: *Derivation · the photon matches the vibration*, (5.5.3), (5.5.4). |
| 5.5, (5.5.7)–(5.5.12) | the IR selection rules | equations with words; the second integral left to Exercise 5.5.1 | 6 (orthogonality (5.4.4), the Taylor series; two unprinted moves; two joins) | **Build**: *Derivations · the IR selection rules* (Δv = ±1 and dμ/dx ≠ 0), the second integral's "zero unless v′ = v ± 1" taken as a fact citing Exercise 5.5.1, so the exercise keeps its work. |
| Example 5.5.1, Example 5.5.2 | numbers | – | – | Never (substitution). |
| 5.6, (5.6.1)–(5.6.9) | the scaled oscillator equation | block; the substitution left to Exercise 5.6.1 | 7 (p̂ from 3.3, the TISE, ½kq²; three unprinted moves: chain rule, substitute, β⁴μk = ħ²; one join) | **Build**, replacing (5.6.1)–(5.6.9): *Derivation · the oscillator equation in a scaled coordinate*. It works Exercise 5.6.1 on the page (orchestrator: keep the exercise with an AI solution that cites it, as proposed, or drop it). |
| 5.6, (5.6.10)–(5.6.11) | the Gaussian tail at large x | "the function that has this property" | 4 (four unprinted moves) | **Build** after the paragraph: *Derivation · the wavefunction's tail at large x* (borderline; it meets the bar exactly). |
| 5.6, (5.6.13) → (5.6.16) | the series truncates; E_v | "also obtained by solving" | – | Stays: the coefficient recursion and its termination are never stated. |
| 5.6, (5.6.17)–(5.6.19) | 16% beyond the classical limits | block | 7 (x = 1 at Q₀ from (5.4.5) and β; the even integrand (5.7); ERF(1); three unprinted moves; one join) | **Build**, replacing the block: *Derivation · the ground state beyond its classical limits*, ending at 0.157. |
| 5.7, (5.7.2) | parity of H_n | stated | – | Stays (the induction from the recurrence is never printed). |
| 5.7, (5.7.3) and the two reductions | integrals of even and odd functions | blocks | 3 (the change x → −x unprinted; one join) | **Build**, replacing the three displays: *Derivations · integrals over a symmetric interval*. |
| Example 5.7.1, Example 5.7.2 | parity argument; a polynomial integral | prose; block | 0, 1 | Keep as printed (5.7.2's missing weight corrected by a note). |
| 5.7, (5.7.4), (5.7.5) | orthogonality | "will not be proved" | – | Stays. |
| 5.8, (5.8.1)–(5.8.8) | T = ½Iω² | a chain, garbled (ω × r as a scalar product) | 4 (L = Iω "from physics", l = r × mv; one unprinted move; one join) | **Build**, replacing the chain: *Derivation · the kinetic energy of a rotor*, following the correct vector algebra (node notes). |
| 5.8, (5.8.11)–(5.8.17) | the θ- and φ-equations | block; steps left to Exercises 5.8.1, 5.8.2 | 8 (the spherical Laplacian, I = μr₀², the separation argument of 2.2; three unprinted moves; one join) | **Build**, replacing the block: *Derivations · separating the rotor's equation* (two results). Works Exercises 5.8.1 and 5.8.2 on the page (orchestrator, as for 5.6.1). |
| 5.8, (5.8.20), (5.8.21) | m_J is an integer | block | 3 (Euler's formula from 2.3; two moves) | **Build**: *Derivation · the cyclic boundary condition*; Exercise 5.8.5 (the Euler step) stays an exercise, Euler cited as a fact. |
| 5.8, (5.8.22)–(5.8.24); Exercise 5.8.4's key | E = J(J + 1)ħ²/2I; N = 1/√2π | two moves; the key | 1 | Stays as printed. |
| Example 5.8.7, Example 5.9.1, Example 5.9.6 | numbers | – | – | Never. |
| 5.9, (5.9.1)–(5.9.3) | the transition moment | "a bit of mathematical effort" | – | Stays (its facts are never stated). |
| 5.9, (5.9.7)–(5.9.12) | the line positions and B | block; the algebra skipped (Exercise 5.9.3's key works it) | 5 (E_J from 5.8; hν = ΔE; two unprinted moves; one join) | **Build**, replacing the block: *Derivation · the rotational line positions*, ending at 2B(J_i + 1) and B̃. The spacing 2B is Exercise 5.9.5's (keyed), not added. |
| summary | restatements | – | 0 | Kept as printed. |

Built: 12 records (5.1 two, 5.5 two, 5.6 three, 5.7 one, 5.8 three, 5.9 one).

## Corrections spotted (root rule 13)

- **summary**: μ = m₁⁻¹ + m₂⁻¹ (it is μ⁻¹); "we an truncate"; "depends on these
  quantum number"; the "1.6" caption says the gaps are evenly spaced (they
  grow, 2B, 4B, 6B, 8B, as its own drawing shows); the site's machine alt
  texts ("a black silhouette of a cat", "a mountain range") are replaced
  with the figures.
- **5.1**: "the momentum \(\) has" (an empty maths span: p); "standardform";
  "Figure 5.1.4 show"; "fix wall"; "turning points (" stray parenthesis;
  "CC SA-BY" in two credits; Example 5.1.1 (a) "the force constant, −k";
  Example 5.1.3 (a) quotes the quantum E_v with a Latin v for ν and speaks of
  the reduced mass beside ω = √(k/m); "does not affects"; Exercise 5.1.1's
  key, Exercise 5.1.2's and 5.1.3's keys (above).
- **5.2**: two boxes printed "Example 5.2.1" (labels kept; a note); Table
  5.2.1 gives ³⁵Cl as 35.968852 amu for 34.968852 (the example uses 34.9688);
  "1.0078 + 34.9688)" unbalanced; μ(H³⁵Cl) = 0.9796 amu is 1.627 × 10⁻²⁷ kg,
  not 1.629; the H³⁷Cl frequency line repeats H³⁵Cl's μ; "only 0.29% bigger"
  (0.14%); Exercise 5.2.1's key answers another pair (above); "the the";
  "dictated primary"; "This require".
- **5.3**: "due in partially"; the anharmonic levels write v_e (Latin) for
  ν_e; "calculated using the harmonic oscillator model (i.e., Equation 5.3.1
  …)" (the expanded potential); the Morse note says V "approaches zero at
  infinite r_e and equals −D_e at its minimum", against (5.3.3)'s V(x₀) = 0
  and V(∞) = D (two zero conventions in one note); the Morse Hamiltonian
  uses m for μ; "with terms up to n < 10 determined of Equation"; "the the";
  Figure 5.3.4's credit "from Wikipedia" names no licence; no Figure 5.3.3.
- **5.4**: "given by Equation 5.4.1" (above); "spend most it's time" (key);
  "(see also root-mean-square displacement)" stray link text.
- **5.5**: "induced about by"; the sentence "IR spectroscopy is one of the
  most common and widely used spectroscopic techniques" twice; the note's
  "The frequency of the absorbed radiation causes the molecular vibrational
  frequency"; Example 5.5.1 (b) gives ν with no unit; Example 5.5.2: ω =
  2π(8.646 × 10¹³) = 5.43 × 10¹⁴ rad/s (printed 5.54), so E₀ = 2.86 × 10⁻²⁰ J,
  Q₀ = 1.09 × 10⁻¹¹ m, 8.6% (printed 2.916, 0.0110, 8.66%), and "We can then
  extra"; Table 5.5.1's frequency column repeats 3.8 × 10¹⁴ – 1.2 × 10¹⁴ Hz in
  every row (right only for the near IR; mid 1.2 × 10¹⁴ – 6 × 10¹², far 6 ×
  10¹² – 3 × 10¹¹, most used 1.2 × 10¹⁴ – 2.0 × 10¹³) and its wavelengths have
  no unit (μm; the far IR is 50–1000 μm for 200–10 cm⁻¹); (5.5.8) writes e
  where the electron's charge is −e; (5.5.9) lacks the 1/2! of the quadratic
  term; (5.5.10)'s first integral lacks a conjugate; "ψ′_v" for ψ_v′;
  "obversed"; "call"; "Symmetric molecules … since there is no dipole
  moment" (no change in it); "So we can" left hanging; "Δ = ±1" for Δv
  (three times); "hv_photon" (Latin v); "mulit-electron"; Exercise 5.5.2's
  key "⟨ψ|∕μ̂|ψ⟩" (a stray slash).
- **5.6**: the objective is 5.2's title; "polytatomic"; "As shown in Equation
  5.6.2, the classical expression …" ((5.6.1) is the operator sum); the
  citations above; the power series c_n(v)x + c_n(v)x² + … for c₀ + c₁x + c₂x²
  + …; the note's α = 1/√β (it is 1/β²) and ψ_v(x) written for ψ_v(Q), Q
  called "the unscaled displacement coordinate (Equation 5.6.7)" where the
  section wrote q; Exercise 5.6.2 garbled (above); Exercise 5.6.8's key
  "Figure 5.6.2 is simply the wavefunction in Figure 5.6.1 squared" (5.6.3 is
  5.6.2 squared), "n" for v; "chancing the limits"; "ERF(l)"; "the integral
  from Q₀ to ∞ cannot [be found in tables]" (it is 1 − ERF); Figures 5.6.2,
  5.6.3 draw the densities reaching zero at finite x (the new figure shows
  the tails; no marker).
- **5.7**: "Hermite polynomial are plotted"; "They were consequently not new
  although in later 1865 papers"; "ff is odd", "if ff is even" (site
  doubling of f); Figure 5.7.2 cited, absent; "Hermite Polynomial is an even
  or odd function depends on its degree"; Example 5.7.1 states a fact where a
  question belongs, calls the weighted integral "Dirac notation" and prints
  its weight in red; "While … while"; (5.7.4) and (5.7.5) give the weight
  e^{−x²/2} for e^{−x²} (the norm 2ⁿn!√π needs e^{−x²}; the forms in the
  tables follow the correct weight, as Chapter 4's (4.6.4) did); "can the
  demonstrated"; Example 5.7.2 drops the weight from the integral it calls
  orthogonality (the conclusion stands: the integrand is odd either way).
- **5.8**: "a rotating diatomic molecular"; "However, In reality";
  "simplifys"; (5.8.4) v_i = ωXr_i (ω × r_i, a cross product); (5.8.5)
  ½Σm_iv_i(ω × r_i) is a dot product, "Since ω is a scalar constant" (it is
  a vector: v·(ω × r) = ω·(r × v)), (5.8.6) v_i × r_i for r_i × v_i; "We can
  rewrite Equation 5.8.3" (above); "the faster is rotates"; "with in";
  (5.8.13)
  1/(Θ(θ)ψ(φ)) for Φ(φ); Exercise 5.8.1's hint "dy/dx = y d/dx" (garbled);
  "Separating of Variables"; "φ and φ + 2φ" for φ + 2π; Table 5.8.1's last
  row Φ = e^{2iφ} for e^{−2iφ}; "greater than or equal to m_J" (|m_J|);
  Exercise 5.8.7's key (above); Example 5.8.7 "1 au" for 1 amu and E = 5.71 ×
  10⁻²⁷ J for 5.7 × 10⁻²³ J; Figure 5.8.2 for 5.8.4 and Exercises 5.8.8–5.8.10
  (above); "Pr[θ, θ]"; "three-deminesions".
- **5.9**: objectives "regid", "Demonstate", "can get used", "Interprete";
  "For a linear molecule, the motion around the interatomic axis (x-axis)"
  while Figure 5.9.2 turns the molecule about x, across its axis; (5.9.3)
  is |μ_T|² = μ²(J + 1)/(2J + 1), so "the transition moment depends on the
  square of the dipole moment" describes its square; "depends on the
  distance (R)" (r₀); Exercise 5.9.3's key (above), "h_ν", "E{i}"; Table
  5.9.1's "6 → 6" for 5 → 6; Example 5.9.1 R_e = 1.887 × 10⁻¹⁰ m (printed
  1.899, then 1.89 Å) and "1 au"; Example 5.9.6 takes the spacing between the
  first two lines as the J = 0 → 1 frequency (equal here only because the
  spacing is 2B), writes "1.661 × 10⁻²⁷ kg / 12 amu" for kg/amu (the result
  is right) and uses average atomic weights, which 5.2's Caution forbids;
  Figure 5.9.5 repeats 5.1.1's GIF and caption, which show no stretching;
  "the following chapters" without a full stop.

## Licences of the figures

Pages: CC BY-NC-SA 4.0, except 5.3 (CC BY 4.0, shared BY-NC-SA) and 5.7 (CC
BY-SA 4.0, shared BY-SA, its figure CC BY-SA 3.0 too); the summary untagged
(the book's). Figures: Kaya CC BY-NC (5.1.2, 5.1.3, 5.2.1, 5.4.1, 5.5.1; 5.3.2
CC BY 4.0); cleonis.nl CC BY-SA 3.0 (5.1.1, 5.9.5); Darekk2 CC BY-SA 3.0
(5.3.1); Damato et al. CC BY-SA 3.0 (5.6.1, 5.7.1); Andeggs public domain
(5.8.1); Nrrw CC BY-SA 3.0 (5.9.4); Paul Wormer, Wikipedia, licence not
named (5.1.5); "from Wikipedia" (5.3.4); no credit: 5.1.4 (a Wikimedia GIF
by its name), 5.6.2, 5.6.3, 5.8.2, 5.8.3, 5.8.4, 5.9.1, 5.9.2, 5.9.3, Example
5.1.1's plot and the summary's four. By Chapter 3's decision uncredited
originals ship under the page's licence with `notes` saying the book gives
none; proposed exceptions (orchestrator): the summary's ψ_v image and "1.5",
which look like scans from a printed textbook.

## What is new to OmniStax here

- Five new types: force constant, moment of inertia, angular momentum,
  dipole moment, angle; `colours:default` rerun.
- θ (owned by Chapter 2) and B (owned by Chapter 3) have no macro, yet here
  θ is an angle and B the rotational constant (energy). Their rows here carry
  the type; the macros (`\ktheta`, `\kB`) must be staged by the chapters that
  own the symbols (orchestrator). φ of 5.8 is the new `varphi` (`\kvarphi`),
  as the book writes \varphi there.
- A landing page with text again (unlike Chapter 4), with a list.
- Exercise boxes printed "Example" (5.5.2, 5.9.6) and two boxes printed with
  one number (Example 5.2.1 twice).
- A summary page with numbered displays (5.S.1, 5.S.2) and a hand-numbered
  3D original ("1.7 (b)").
- A section that cites a figure it does not have (5.7.2).
- Derivations that would work an unkeyed exercise on the page (5.6.1,
  5.8.1, 5.8.2), and one that cites an exercise as its fact (5.5.1).
- Image names the site double-encodes (Hermite_poly_phys_n%253D1.svg).

## The chapter's answer to root rule 23

The chapter puts two pictures of a molecule side by side, a spring and a
dumbbell, and the reader should feel each one move before reading its
quantum version. The spring: the force pulling back, the energy sloshing
between T and V, the ball lingering at the turning points so that its
density piles up there (5.1); then the quantum ladder evenly spaced and
lifted off the floor by ħω/2 (5.4), and ψ_v on its rung with the classical
density dashed over it, the two converging as v climbs while a sliver
always leaks past the turning points (5.6). The real well bends away from
the parabola and its rungs crowd toward dissociation (5.3), which is why
overtones appear (5.5). The dumbbell: a point on a sphere (5.8.1 + 5.8.4),
levels that spread as J(J + 1) with 2J + 1 states each, a |Y|² that refuses
the xy-plane (5.8.3), and a spectrum the reader builds from the ladder and
lays on the measured CO lines, evenly spaced by 2B except for the slight
crowding of a bond that stretches as it spins (5.9). The one thread: the
classical motion is drawn moving, and every quantum picture is laid over it.

## Tool changes made for this chapter

- `tools/fetch.py` and `tools/lt2md.py`: an image's file name is decoded
  until it no longer changes (`filename()`): the site double-encodes some
  (`Hermite_poly_phys_n%253D1.svg`), which had left a `%3D` in the name, a
  file the app could not serve. The six images were fetched again under
  `…n=1.svg`. Chapters 1–4 reconvert to the same bytes (no other name had a
  `%`).
- `tools/md2html.py`: a summary page tags its equations under its printed
  number (5.S.1), not "5.summary.1"; `\ce{…}` is converted with matched
  braces and mhchem's two habits (a count after an element is a subscript,
  O₂; a mass number after ^ keeps all its digits, ³⁵Cl), so `\ce{H^{35}Cl}`,
  `\ce{^{12}C^{16}O}` and `\ce{^35Cl}` render (they had been left raw or set
  ^3 5). Of the 35 drafts of Chapters 1–4 only 1.3 and 1.8 change, where
  `\ce{M (s) + …}`, `\ce{He^{+}}`, `\ce{Li^{2+}}` and `\ce{Be^{3+}}` are now
  converted instead of left raw. Every maths string of the eleven Chapter 5
  drafts renders in KaTeX without mhchem.
