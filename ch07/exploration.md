# Exploration: Chapter 7, Approximation Methods

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 7`),
every page read in full, the chapter's 8 images looked at (the SVG rendered
through sharp). The landing page (11784) prints one paragraph of its own (why
real systems need approximations; perturbation and variation named), so the
chapter has an **`intro/` page** (root rule 21.1); it prints no thumbnail
credit. 7.S (550558) is a real summary page, routed to `summary/`. **7.E
(13433) has no body** (`exercises/source.md` holds only its title): nothing
is routed from it (root rule 9). No stray passage elsewhere in the book tests
this chapter (of the N.E pages only 19.E and 21.E hold anything, and neither
is about approximation methods). The exercises are the four inline boxes,
each testing its own section.

The chapter is short and abstract: four sections, two of them (7.2, 7.4)
mostly derivations printed as chains of equations with words, and no
experiment except helium's two ionization energies. Its figures are a
shielding sketch, a bare energy curve, a "landscape", three flowcharts and two
level pictures. What the reader needs to see is a function of a parameter
and where its minimum sits, and levels moving as a coupling or a perturbation
grows. The brief's guidance holds throughout: **variation, not motion**.
Nothing in the chapter has a clock.

## Pages

| Page | LibreTexts id | Licence | Authors | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11784 | BY-NC-SA 4.0 (tag) | none | none: one paragraph | | | | | | | |
| 7.1 The Variational Method Approximation | 13434 | BY-NC-SA 4.0 | Zielinski (tag) | The True (Experimentally Determined) Energy of the Helium Atom; The "Ignorance is Bliss" Approximation; Shielding and Penetration; A Better Approximation: The Variational Method; Application to the Helium atom Ground State | 0 | 1 | 3 | 0 | 1 | 0, one pulled quote | 10 / 20 |
| 7.2 Linear Variational Method and the Secular Determinant | 13435 | BY-NC-SA 4.0 | Vallance (tag) | Minimizing the Variational Energy; The Secular Determinant | 2 | 0 | 2 | 0 | 0 | 5 (Linear Variational Basis Functions; Orthonormality of Basis Functions; Hermitian Operators; Properties of Determinants; Expanding Determinants) | 15 / 35 |
| 7.3 Trial Functions Can Be Linear Combinations of Functions That Also Contain Variational Parameters | 13436 | BY-NC-SA 4.0 | Zielinski (tag) | none | 0 | 2 | 0 | 0 | 1 | 0 | 1 / 1 |
| 7.4 Perturbation Theory Expresses the Solutions in Terms of Solved Problems | 13437 | BY-NC-SA 4.0 | Delmar Larsen (tag) | Zero-Order Terms (λ=0); First-Order Expression of Energy (λ=1); First-Order Expression of Wavefunction (λ=1); Second-Order Terms (λ=2) | 3 (printed 7.4.1A, 7.4.1B, 7.4.2) | 1 (printed 7.4.3) | 3 (two printed "7.4.1") | 0 | 0 | 1 (Perturbation Theory Does not always Work), four pulled quotes | 28 / 63 |
| summary (7.S) | 550558 | untagged (the book's) | Kyle Crabtree (tag) | Variational principle; Perturbation Theory | | | | | | | 1 / 11 |
| 7.E | 13433 | | | empty | | | | | | | |

Objectives: all four sections (7.1 four, 7.2 four, 7.3 one, 7.4 two), none
with a lead-in sentence. No section closes on "## Summary". No page carries
a Contributors list: the credits are the tags' authors (7.1, 7.3 Zielinski;
7.2 Claire Vallance; 7.4 Delmar Larsen; the summary Kyle Crabtree; the intro
none, so the book's). 7.1, 7.2, 7.4 and the summary open on prose before their
first `<h2>`, and 7.3 has no `<h2>` at all, so each needs headers of the
agent's (root rule 3), proposed below, which the builder puts through the
humanizer.

### The intro page

`intro/source.md`: one paragraph (the Schrödinger equation is unwieldy for
real systems; numerical methods are limited; linear combinations of the
fundamental systems' solutions; perturbation and variation). One block with a
header of the agent's (proposed "Why Approximations Are Needed"); no figure,
no exercise, no correction.

### The summary page (7.S)

`summary/source.md`, the chapter's `summary/` page, named by `chapter.json`'s
`summary` record (550558). An opening paragraph on the Born–Oppenheimer
approximation and the potential energy surface (Chapter 9's matter, kept as
printed), then the book's two `<h2>`, "Variational principle" (the
Rayleigh–Ritz method, the secular determinant written out twice, the matrix
formalism) and "Perturbation Theory" (Ĥ = Ĥ₀ + V̂, the series, the first-order
energy and state, the cubic anharmonic oscillator). Opening header proposed
"The Born–Oppenheimer Approximation". One numbered display, (7.S.1), labelled
`chap:intro:eq:var`; the rest are unnumbered. It cites "Equation
\ref{chap:intro:eq:taylorpotential}", a label on 5.S, not on this page (the
live page cannot resolve it): the draft now prints 5.S.1, and the builder links
5.S's (5.S.1) (tool change below). No figure. Corrections below.

### Per section

- **7.1** Opening (one sentence after the objectives, proposed "Beyond
  Independent Electrons"). The True (Experimentally Determined) Energy of
  the Helium Atom: the two-step ionization (7.1.1), *first ionization
  energy* I₁ = 24.59 eV, I₂ = 54.42 eV from He⁺, E_true = −(I₁ + I₂) =
  −79.02 eV = −5.8066 R_H, *true value*. The "Ignorance is Bliss"
  Approximation: the helium Hamiltonian (7.1.2) with the repulsion struck
  through, Ĥ ≈ h₁ + h₂ (7.1.3), Ψ = ψ₁ψ₂ (7.1.4), its bra-ket form (7.1.5),
  *additive* energies, −8R_H. Shielding and Penetration: Z_eff, Figure
  7.1.1, ζ < 2, the variational principle as the criterion for the best
  parameter. A Better Approximation: The Variational Method: the method, the
  *upper bound*, the *trial wavefunction*, E_trial ≥ E_true (7.1.6), E_trial
  (7.1.7), the variational theorem, Figure 7.1.2 (flowchart), the pulled quote.
  Application to the Helium atom Ground State: the *orbital approximation*
  (7.1.8), the Hamiltonian (7.1.9), E_trial(ζ) (7.1.10), Figure 7.1.3,
  Exercise 7.1.1 (ζ = 27/16), Table 7.1.1, the closing paragraph. Concepts
  (new): ionization energy, the ground-state energy of helium, ignoring
  electron–electron repulsion, additive one-electron energies, shielding,
  effective nuclear charge, trial wavefunction, variational energy,
  variational principle, applying the variational method, the variational
  energy of helium. Reinforced: multi-electron Hamiltonian, electron–electron
  repulsion, orbital approximation, multi-electron wavefunction (6.7);
  hydrogen energy levels (6.4); Rydberg constant (1.5); expectation value
  (3.7, 4.3); ground state (3.5). "Penetration" is named in the header and the
  objectives and never explained: no concept.
- **7.2** Opening (proposed "Linear Variation Functions"): the *linear
  variation function* (7.2.1), (7.2.2), the note "Linear Variational Basis
  Functions", E_trial again (7.2.3, 7.1's (7.1.7) printed again under a new
  number), the numerator (7.2.4), H_ij, (7.2.5), the denominator (7.2.6),
  S_ij, *overlap integrals*, (7.2.7), the note "Orthonormality of Basis
  Functions", E_trial (7.2.8), the quadratic dependence. Minimizing the
  Variational Energy: (7.2.9), Figure 7.2.1, ∂E/∂a_i = 0, (7.2.10), the
  independence and symmetry conditions, (7.2.11), (7.2.12), *Secular
  Equations*, the note "Hermitian Operators" ((7.2.13) and unnumbered
  lines), the orthonormal form (7.2.14), *the bracketing theorem*, Figure
  7.2.2 (flowchart), the paragraph on the method's use. The Secular
  Determinant: (7.2.15), the notes "Properties of Determinants" and
  "Expanding Determinants", the *characteristic equation*, Example 7.2.1
  (two basis functions), the ordering of the roots, *greater number* of basis
  functions, the coefficients from the secular equations, Example 7.2.2
  (LCAO; Slater and Gaussian orbitals), the closing paragraph (Boys; Ditchfield,
  Hehre and Pople). Concepts (new): basis functions, linear variation
  function, Hamiltonian matrix element, the variational energy of a linear
  trial function, secular equations, determinant, secular determinant,
  characteristic equation, bracketing theorem, applying the linear variational
  method, LCAO, Slater-type orbital, Gaussian-type orbital. Reinforced:
  overlap integral (4.5), Hermitian operator and the Hamiltonian is Hermitian
  (3.2), Kronecker delta and orthonormality (3.5), spherical harmonics (5.8),
  atomic orbital (6.2), variational energy, trial wavefunction and the method
  (7.1).
- **7.3** No `<h2>`. Proposed blocks: "Sums of Exponentials" (the opening,
  (7.3.1), *basis functions* again, ζ_j as effective charges, Slater's rules
  named, Exercise 7.3.1) and "Linear and Nonlinear Variation" (the nonlinear
  variational method, the linear one, the cost of recomputing integrals,
  Table 7.3.1, Exercise 7.3.2, the closing paragraph naming Hartree–Fock).
  Concepts (new): the orbital as a sum of exponentials, the nonlinear
  variational method, the optimized Slater orbital exponents. Reinforced:
  basis functions, linear variation function, Slater-type orbital, effective
  nuclear charge, the linear variational method (7.1, 7.2).
- **7.4** Opening (proposed "Expanding in Powers of λ"): *perturbation
  theory*, Figure 7.4.1 (the energy spectrum), (7.4.1)–(7.4.4), the pulled
  quote on the basic assumption, *expand*, λ and the series (7.4.5), the
  pulled quote on λ, the first-order truncation (7.4.6), (7.4.7)–(7.4.10), the
  coloured orders (7.4.10, with `\color` red and blue in the book's own
  display). Zero-Order Terms: (7.4.11). First-Order Expression of Energy:
  (7.4.12)–(7.4.18), *inner product*, the pulled quote (*expectation value*,
  *unperturbed*), Examples 7.4.1A and 7.4.1B (the particle in a box with a
  constant shift and with a step over half the box). First-Order Expression
  of Wavefunction: (7.4.19)–(7.4.27), two bold sub-headers ("Last term…",
  "First term on right side of Equation 7.4.19"), *linear combination*,
  *complete basis set*, Figure 7.4.2, the two bullets, the pulled quote
  (*comparable energy*), Example 7.4.2 (the oscillator with εx³; its own
  bold "Energy" and "Wavefunction" parts; (7.4.28)), Exercise 7.4.3 (γx⁴).
  Second-Order Terms: a paragraph, Figure "7.4.1" again (the flowchart), the
  note "Perturbation Theory Does not always Work". Concepts (new): perturbation
  theory, the perturbation series in λ, matching powers of λ, the first-order
  energy correction, the first-order wavefunction correction, when
  perturbation theory fails. Reinforced: the Schrödinger eigenvalue problem
  (3.3), expectation value (3.7), orthonormality (3.5), complete set (4.3),
  the particle-in-a-box energies and wavefunctions (3.5), the oscillator's
  energies, wavefunctions and Hermite polynomials (5.2, 5.6), parity and
  odd integrands (5.6, 5.7), linear combination (7.2). The bold sub-headers
  are the book's own minor headers: `<h3>` in their block (the example's two
  as parts, like its Solution).

## Equation numbers

One number per display, an `align` included, as the converter's `n=` gives
them; every citation in the four sections is a `\ref`, so the printed numbers
agree with what they cite. The labels lag the printed numbers in every page
(7.1's `7.1.9` prints (7.1.10); 7.2's `7.2.13` prints (7.2.15); 7.4's
`7.4.17.2` prints (7.4.18)), so the builder reads the numbers from the draft,
never from the labels. Citations that miss (corrections): 7.2 "(Example
7.2.1)" twice, which `\ref{Ex1}` prints for Equation 7.2.1 and which names the
real Example 7.2.1 by accident; 7.4 "Equation 7.4.6 can be simplified" (the
inner product (7.4.13) is meant); 7.4 "the first order energies (Equation
7.4.12)" (they are (7.4.18)); 7.4 "Equations 7.4.5, 7.4.5, and 7.4.8" (the
two series share one display); 7.4 "see Example 7.4.3" (7.4.2); 7.4 "Figure
7.4.1" for the flowchart in Example 7.4.2 and in the second-order paragraph
(the second figure printed 7.4.1); 7.S's citation of 5.S's label (above). 7.2's
(7.2.3) prints 7.1's (7.1.7) again: the builder cites 7.1's.

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercise boxes**: 4 printed (7.1.1, 7.3.1, 7.3.2, 7.4.3), 4
  questions, 4 cards. **3 keyed**, available now: 7.1.1 (its Solution finds
  ζ = 27/16 but skips the energy and the percent error the question asks
  for; the text under the box gives −77.483 eV and "about 2%", and a
  correction under the card says so), 7.3.2 (Answer; its reasoning corrected
  below), 7.4.3 (Answer; slips corrected below). **1 unkeyed**, available with
  an AI solution: 7.3.1, a sketch (plot three equally weighted exponentials
  with ζ = 1, 2, 5 and each term). None to explain or prove, none to compute.
- **Worked examples**: 5 (7.2.1, 7.2.2, 7.4.1A, 7.4.1B, 7.4.2), kept whole,
  not exercises; 4 carry a Solution part (7.2.2 has none: it is an exposition
  of LCAO). 7.2.1's Solution is wrong (below); 7.2.1 and 7.4.1B are built as
  derivations.
- **Conceptual questions, problems, 7.E**: none printed; 7.E is empty.
- **Placement (root rule 12)**: every box tests its own section; nothing is
  held or moved. 7.3.2 asks to compare with 7.3.1's result, both in 7.3.
- **Concepts the book leaves untested**: 7.1's variational principle as a
  bound and the independent-electron energy; 7.2's secular determinant and
  coefficients (no exercise at all in 7.2); 7.3's line between linear and
  nonlinear parameters; 7.4's first-order wavefunction and the box examples.
  **Proposed new: 7**: 7.1 two (E_trial from (7.1.10) at ζ = 2 and ζ = 1, both
  above −79.0 eV, and why the variational principle requires it; the
  independent-electron energy −8R_H against experiment, a 38% error, and
  why it is not a variational bound); 7.2 two (a 2 × 2 secular problem with
  an orthonormal basis and given H₁₁, H₂₂, H₁₂: both energies and the
  normalized coefficients of the lower; the characteristic equation when S₁₂
  ≠ 0); 7.3 one (in a given trial function, which parameters are linear and
  which nonlinear, and which calculation must recompute its integrals); 7.4
  two (the first-order shift of every box level for a floor tilted from 0 to
  V₀, V₀/2; which oscillator states a cubic perturbation mixes into the ground
  state, only v = 1 and 3, from the parity and the ladder of x³).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

The point named is what the reader should see before reading anything.
Rule 14 as rewritten today: the figure starts from the book's and usually
replaces it; motion where the idea moves; a point seen at once; little effort
to read. No figure here moves (nothing has a time in it); every replacement is
a still figure that answers its sliders. Nothing is 3D: the chapter's ideas
are functions of a parameter and ladders of levels.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 7.1.1 | 7.1 | SVG (CC BY-SA, Kaya): a nucleus "Z+", two inner electrons, an outer electron, arrows for attraction and repulsion | **Replace, still, 2D** (variation): helium, the nucleus +2, electron 1 drawn as its 1s cloud (ζ = 27/16), electron 2 on a slider for its distance r; the attraction and repulsion arrows (symbolic, force vectors) scale with r. **Point: close to the nucleus electron 2 feels nearly the full +2; far out, only +1, because electron 1's charge now lies inside its orbit.** Readout Z_eff = 2 − q_inside(r) with numbers, q_inside from 6.5's enclosed fraction. The idea of 7.3 ("the effective nuclear charge should be close to the actual nuclear charge" near the nucleus, smaller far away) made visible in the section that introduces Z_eff. Original shipped. |
| 7.1.2 | 7.1 | JPG flowchart, no credit: six steps and a "Not Good" loop | **Faithful copy, still** (standardisation: real text, both themes; the JPG's white-on-blue boxes do not survive the dark theme). Exercise 7.1.1 walks its steps by number, so the step numbers are drawn. Original shipped under the page's licence. |
| 7.1.3 | 7.1 | GIF, no credit: a bare red parabola, no axes, no numbers | **Replace, still, graph** (variation): E_trial(ζ) from (7.1.10) in eV for ζ from 1 to 2.5, the true −79.0 eV as a line the curve never crosses, the independent-electron −108.8 eV dashed below it (Table 7.1.1's three rows on one axis); slider ζ, a special (dashed circle, snap) at 27/16 and one at 2 (no shielding); beside it, electron 1's radial distribution 4ζ³r²e^{−2ζr}/a₀³ for the current ζ against the unshielded ζ = 2, faint. **Point: every ζ gives an energy above the true one; the lowest, at ζ = 1.69, is still 1.5 eV above, and the orbital it belongs to is larger than He⁺'s.** Readout E_trial = E_h(ζ² − 27ζ/8) with numbers and the gap to −79.0 eV. Opens on ζ = 2, so the reader finds the minimum. Caption corrected through the row (its "Equation 7.1.10" stands; its h for h² is the equation's). |
| 7.2.1 | 7.2 | PNG (CC BY-NC-SA, printed "CC BY-SA-NC"; Rudolf Winter): a wavy "landscape" with several dips and an arrow at "optimum coefficients" | **Replace, still, graph and level diagram** (variation): two orthonormal basis functions; sliders for the mixing angle θ (a₁ = cos θ, a₂ = sin θ, normalized), the coupling H₁₂ and the gap H₂₂ − H₁₁. Left, E_trial(θ), a single sinusoid between E₋ and E₊; right, a ladder with H₁₁ and H₂₂ in the middle and the roots E₋ and E₊ outside. **Point: the lowest point of the landscape is the lower root of the secular determinant, below both H₁₁ and H₂₂; as the coupling grows the two levels push apart.** Readout the 2 × 2 secular determinant of Example 7.2.1 with numbers, E± and a₁/a₂ at the minimum. The book prints no numbers: opens on H₁₁ = −1.0, H₂₂ = −0.5, H₁₂ = −0.2 in units the caption names. Correction through the row: a linear variation has one minimum and no false dips (the stationary points of the energy are the secular roots), so the book's several dips cannot occur. Example 7.2.1 cites it. |
| 7.2.2 | 7.2 | JPG flowchart, no credit: the linear version of 7.1.2 | **Faithful copy, still**, the three boxes that differ from Figure 7.1.2 (a linear combination of basis functions; the energy as a function of the coefficients; the secular equations) marked, since the caption asks for the comparison. Not folded with 7.1.2 (another section; the fold rule works within one). Original shipped. |
| 7.4.1 (first) | 7.4 | PNG (CC BY-SA 2.0, Frontier via Wikipedia): four original levels, arrows to four perturbed ones | **Replace, still, ladder and box** (variation): a particle in a box with a choice of perturbation, a constant V₀ (Example 7.4.1A), V₀ over the left half (Example 7.4.1B) or a floor tilted from 0 to V₀; slider V₀ in units of E₁, choice of level n = 1–4 for the shaded |ψ_n|². Three columns of levels: E_n⁰, E_n⁰ + E_n¹, and the exact levels (diagonalized in the box basis inside the figure). The book's arrows are symbolic (which level becomes which) and stay as connectors. **Point: at first order every level shifts by the perturbation averaged over its own |ψ|², and the first-order levels follow the exact ones while V₀ is small next to the level spacing.** Readout E_n ≈ E_n⁰ + ⟨n⁰\|Ĥ¹\|n⁰⟩ with numbers for the chosen n, and the exact value. The tilt is not in the book (the brief's case; orchestrator). |
| 7.4.2 | 7.4 | PNG (CC BY 4.0, Larsen): an anharmonic well beside a harmonic one with levels v = 0–8, lines from each to the perturbed ground state | **Replace, still, well and bars** (variation): the oscillator well with a choice of perturbation εx³ (Example 7.4.2) or γx⁴ (Exercise 7.4.3), slider for its strength; bars of the weights c_{m,0} for m = 1–8, the zero ones drawn empty; ψ₀ and ψ₀ + Σc_mψ_m in the perturbed well. **Point: a cubic term mixes in only v = 1 and 3 and leans the ground state toward the softer side; a quartic one mixes only v = 2 and 4 and also raises the energy.** Readout \|0⟩ ≈ \|0⁰⟩ + Σ c_{m,0}\|m⁰⟩ with the nonzero weights, and E₀ ≈ ½hν + E¹ (zero for x³, 3γ/4α² for x⁴). The book's lines are symbolic (which states mix). Correction: Example 7.4.2's "m = 1, 3, 5" (⟨5\|x³\|0⟩ = 0; x³ changes v by at most 3). |
| 7.4.1 (second) | 7.4 | JPG flowchart (CC BY 4.0, Larsen): zero, first and second order | **Faithful copy, still**. The printed label "Figure 7.4.1" kept as printed (the precedent for printed labels); its two citations (Example 7.4.2, the second-order paragraph) link to it, the third ("energies (Figure 7.4.1)") to the first figure; a note says the book numbers two figures 7.4.1 (orchestrator: whether the checker accepts two rows with one number). |
| Tables | 7.1, 7.3 | Table 7.1.1 (three helium energies), Table 7.3.1 (Slater exponents H–Ne) | Kept as `div.book-table`; 7.3.1 corrected by a note (F, below). |

### What moves in this chapter

Nothing. The chapter's ideas are functions of a parameter (E_trial(ζ), E(θ),
Z_eff(r)) and ladders of levels as a coupling or a perturbation grows; each is
a variation the reader drives with a slider, and each figure is still, with no
cycle and no transport (rule 14).

### 3D

None earns a turn. The shielding cloud is a sphere, which a 2D slice shows as
well (rule 28.5); everything else is a graph or a ladder.

### New simulations proposed (root rule 15)

- **7.3, an orbital from three exponentials** (recommended, still): the
  three terms of (7.3.1) and their sum against r, opening on Exercise 7.3.1's
  equal weights and ζ = 1.0, 2.0, 5.0, sliders for the three coefficients;
  below, the local decay rate −d ln φ/dr (in units of 1/a₀), which reads as the
  effective charge. Point: near the nucleus the fast term sets the decay,
  far out the slow one does, so the charge the electron feels falls with
  distance. 7.3 has no figure otherwise; it shows the passage on ζ_j as a
  distance-dependent Z_eff.
- **7.2, a Gaussian trial function for hydrogen** (offered, not
  recommended): e^{−αr²} against the true e^{−r/a₀} with slider α,
  E(α) = (3α/2 − 2√(2α/π)) E_h, lowest −0.424 E_h at α = 8/9π against −0.5.
  Point: the best Gaussian is still the wrong shape at the nucleus and far
  away. The book names Boys's test but postpones it, so the numbers would be
  ours.
- Not offered: a second-order or exact two-level comparison in 7.4 (7.2.1's
  ladder already shows levels repelling); the potential energy surface of the
  summary (Chapter 9's).

## Derivation candidates (root rule 29)

Score = facts imported from outside the section's method + the longest run
of moves the book does not print + joins of independent lines. A block the
book prints as equations with words qualifies whatever its score.

| Where | What | Printed? | Score | Decision |
|---|---|---|---|---|
| 7.1, (7.1.1) → E_true | E_true = −(I₁ + I₂) | numbers | 0 | Stays (substitution). |
| 7.1, (7.1.2)–(7.1.5) → −8R_H | helium without the repulsion | equations with words | 5 (hydrogen-like energies −Z²R_H/n² from 6.4; the product wavefunction; two unprinted moves; one join, the two electrons) | **Build**: *Derivation · helium's energy without electron repulsion*, ending at −8R_H; (7.1.5) without its stray Ĥ, node note. |
| 7.1, (7.1.10) | E_trial(ζ) = E_h(ζ² − 27ζ/8) | "the result is" | high, but its facts (⟨T̂⟩ and ⟨1/r⟩ for a 1s function, ⟨1/r₁₂⟩ = 5ζ/8) appear nowhere in the book | Stays (nothing invented, as 6.3's L̂_x). |
| Exercise 7.1.1 | dE/dζ = 0 → ζ = 27/16 | the keyed solution | 1 | Stays in its card. |
| 7.2, (7.2.1)–(7.2.8) | the variational energy of a linear trial function | equations with words | qualifies | **Build**: *Derivation · the variational energy of a linear trial function*, ending at (7.2.8); the fact (7.2.3) cites 7.1's (7.1.7). |
| 7.2, (7.2.9)–(7.2.12), (7.2.14) | the secular equations and their orthonormal form | equations with words | qualifies | **Build**: *Derivations · the secular equations*, ending at (7.2.12) and (7.2.14); the fact (7.2.8) links the derivation above. Node notes: ∂a_i*/∂a_k = δ_ik and H_ij = H_ji hold for real coefficients and real functions (Hermiticity alone gives H_ij = H_ji*); (7.2.14)'s indices (Σ_j H_ij a_j = E a_i). |
| 7.2, (7.2.15) | the determinant must vanish | prose | 2 | Stays. |
| Example 7.2.1 | the 2 × 2 secular determinant expanded | block, wrong | qualifies | **Build** as *Example 7.2.1 ·*, following the correct mathematics: the note's ad − bc gives (H₁₁ − ES₁₁)(H₂₂ − ES₂₂) − (H₁₂ − ES₁₂)² = 0, the characteristic equation; the second printed line (a secular equation) kept. Node note: the printed a₁²H₁₁ + 2a₁a₂H₁₂ + a₂²H₂₂ = 0 is the numerator of E_trial, not the expansion. Stops at the quadratic (the book does not solve it; Figure 7.2.1's readout shows the roots). |
| 7.4, (7.4.7)–(7.4.13) | matching powers of λ | equations with words | qualifies | **Build**: *Derivations · matching powers of λ*, ending at (7.4.11) and (7.4.12). |
| 7.4, (7.4.12)–(7.4.18) | the first-order energy | equations with words | qualifies | **Build**: *Derivation · the first-order energy correction*, ending at (7.4.18) through (7.4.17); fact (7.4.12) links the derivation above. Node notes: the E_n⁰⟨n⁰\|n¹⟩ terms cancel by (7.4.14), ⟨n⁰\|Ĥ⁰ = E_n⁰⟨n⁰\|, not by orthogonality; the misdirected "Equation 7.4.6". |
| 7.4, (7.4.19)–(7.4.27) | the first-order wavefunction | equations with words | qualifies | **Build**: *Derivation · the first-order wavefunction correction*, ending at (7.4.25) and (7.4.27). The sum over m ≠ n takes ⟨n⁰\|n¹⟩ = 0, which the book leaves unstated: a node note, not a fact (orchestrator). |
| Example 7.4.1A | E_n¹ = V₀ | block | 1 (two moves) | Stays. |
| Example 7.4.1B | E_n¹ = V₀/2 | block with an integral | 5 (ψ_n from 3.5; the antiderivative of sin²; two unprinted moves at the limits; one join, the two integrals) | **Build** as *Example 7.4.1B ·* (6.5.1's precedent); node notes for the antiderivative's "a" (L) and the potential's missing V = 0 on L/2 < x ≤ L. |
| Example 7.4.2 | E₀¹ = 0; the odd states mix | argument | 3 (parity from 5.6 and 5.7; two moves) | Stays as printed, corrected (m = 1, 3 only). |
| Exercise 7.4.3 | E¹ = 3γ/4α² | the keyed answer | – | Stays in its card. |
| 7.3, summary | – | – | 0 | Nothing qualifies. |

Built: 8 records (7.1 one, 7.2 three, 7.4 four).

## Corrections spotted (root rule 13)

- **intro**: none.
- **summary**: "if the basis functions are normalized, then ⟨φ_n\|φ_m⟩ =
  δ_nm" (orthonormal); the last row of both determinants and of the Ĥ matrix
  writes ⟨φ₁\|Ĥ\|φ₁⟩ in the second column (⟨φ_n\|Ĥ\|φ₁⟩), three times; "This
  equation will result in n values for E" (n + 1: the basis runs φ₀ … φ_n);
  the citation of 5.S's Taylor expansion (above); it writes ε_n and E_n for
  the same energies.
- **7.1**: objectives "muliti-electron", "User variational method"; (7.1.2)
  prints the full Hamiltonian with the repulsion already struck through,
  before the text drops it; I₂ = Z²/2n² without its unit (hartree: 2E_h =
  54.42 eV); (7.1.5) "\|Ψ_total⟩ = Ĥ\|ψ_el1ψ_el2⟩" (no Ĥ); "significantly
  overestimates the true energy" (it lies 29.8 eV below it: the binding is
  overestimated); "E_He1s = −5.8066 R" (that is E_true, in R_H); "This allows
  calculating approximate wavefunctions and is the variational principle"
  (garbled); "an variational energy … greater than or equal to the true
  ground state wavefunction" (energy); (7.1.9) writes ζ in the Hamiltonian's
  nuclear attraction (the complete Hamiltonian has Z = 2; ζ belongs to the
  trial function); (7.1.10) and Exercise 7.1.1 write μe⁴/4ε₀²h (m_e e⁴/4ε₀²h² =
  E_h, 27.21 eV); Exercise 7.1.1's "Step 3 … This procedure was already above"
  and its skipped energy and percent error (−77.5 eV, 1.9%); Table 7.1.1's
  caption "three approximation methods to experiment" (two methods and the
  experiment).
- **7.2**: "functions … that not the eigenvalues of the Hamiltonian" (that
  are not its eigenfunctions); "the the"; (7.2.10)–(7.2.11) as in the
  derivation table; the Hermitian note's (7.2.13) without its complex
  conjugate, against its own A_ij = A_ji*, and "For any operator that
  generates a real eigenvalue …, then that operator is Hermitian" (the
  converse of the postulate, not true); "rewriten"; (7.2.14)'s indices;
  "eigenvectors {C_ij}" (the a_i); "ψ_trail"; "(Example 7.2.1)" twice (Equation
  7.2.1); "(i.e. c_i ≠ 0 for all i)" (not all zero); "the determinate"; the
  secular-determinant paragraph opens on the orthonormal equations (7.2.14)
  and writes the general (7.2.15); the en dash "–" for a minus in (7.2.12)
  and (7.2.15); Example 7.2.1's f_n for φ_n and its wrong Solution (above);
  Example 7.2.2 "Lennard and Jones" (Lennard-Jones, one person), "W.R.
  Ditchfield" (R. Ditchfield) and "J. Chem. Phys. Rev." (J. Chem. Phys.);
  Figure 7.2.1's dips and "CC BY-SA-NC" (above).
- **7.3**: objectives "Demonstrate that …" fine; (7.3.1) e^{−ζ_j r_j/a_o} (the
  electron's r₁, not a per-term r_j; a₀); "hydrogenic spin-orbitals" (the
  orbitals; spin is not in play); Table 7.3.1's F ζ₁s 8.56 (the standard set
  of Hehre, Stewart and Pople, J. Chem. Phys. 51, 2657 (1969), gives 8.65;
  the digits look transposed; the builder verifies before the footnote);
  Exercise 7.3.2's key: the ζ₁s rise is the nuclear charge Z rising by one
  per element, shielded by about 0.3 by the other 1s electron, not
  "electronegativity" or "nuclear density", and it never answers the
  comparison with 7.3.1 the question asks (7.3.1 yields no ζ value).
- **7.4**: H⁰ and H^o written for one operator (kept as printed); (7.4.5)'s
  first sum without its lower limit i = 0; the headers "(λ=1)" and "(λ=2)" (λ
  is set to 1 in every order; the order is the power of λ), kept as printed
  with a note; "Equation 7.4.6 can be simplified" (7.4.13); "since the
  unperturbed set of eigenstates are orthogonal" (the cancellation is
  (7.4.14)); (7.4.16)'s misplaced bracket in \cancelto; "First term on right
  side" (left side: ⟨m⁰\|Ĥ⁰\|n¹⟩); the unstated ⟨n⁰\|n¹⟩ = 0; Example 7.4.1A
  "Hamilonian", "infiinitely"; Example 7.4.1B's potential (0 on L/2 < x ≤ L
  missing) and "2πn/a" (L), "ground-state" though it treats any state;
  "see Example 7.4.3" (7.4.2); Example 7.4.2's −ħ/2m (−ħ²/2m; also Exercise
  7.4.3 and its key, twice), "Figure 7.4.1" for the flowchart, "m = 2k+1 with
  k=1,2,3" (k = 0, 1, 2), "only m=1, m=3 and m=5 mix" (only 1 and 3; for x³
  the sum is finite, not "technically infinite"), "first six" against "the
  original five", "pertubtiation", "Hamitonian"; Exercise 7.4.3's key: the
  integral table's x^{2π} and 2^{m+1} (x^{2n}, 2^{n+1}), a for α, "n⁰ =" for
  the wavefunction, E_r⁰ for E₀; the result 3γ/4α² is right.

## Licences of the figures

Pages: every section CC BY-NC-SA 4.0; the intro tagged BY-NC-SA; the
summary untagged (the book's). Figures: Kaya CC BY-SA (7.1.1); Rudolf Winter
CC BY-NC-SA (7.2.1, printed "CC BY-SA-NC"); Frontier via Wikipedia CC BY-SA
2.0 (7.4.1, first); Delmar Larsen CC BY 4.0 (7.4.2 and the flowchart 7.4.1);
no credit: 7.1.2, 7.1.3, 7.2.2, shipped under the page's licence with
`notes` saying the book gives none (Chapter 3's decision). No scans, no
"used with permission" originals: every original ships.

## What is new to OmniStax here

- Two figures printed under one number on one page ("Figure 7.4.1"), and
  three citations of it that point at different figures.
- A `\ref` to a label on another page (7.S cites 5.S); the draft tool now
  resolves it to that page's number.
- A figure caption that cites an equation (7.1.3, 7.4.2): the draft row now
  keeps the number, not the marker.
- Worked examples numbered with a letter (7.4.1A, 7.4.1B), as the page prints
  them.
- No new type: the chapter's quantities are energy, wavefunction, operator,
  length, mass, charge, angle and frequency; effective charges, exponents,
  coefficients and λ are numbers, untyped. 33 new symbols (λ as the
  perturbation's bookkeeping parameter is a new key, `lambda_pt`, with no
  macro, since `lambda` is the wavelength's).

## The chapter's answer to root rule 23

Approximation methods are usually taught as algebra, and the reader never
sees why the answer is good. Here every method has a picture of one
parameter and its minimum: the helium energy as ζ slides, its curve sitting
above the true energy everywhere and touching closest at 27/16, with the
orbital swelling beside it (7.1.3); the charge an electron feels falling from
2 to 1 as it moves out through its partner's cloud (7.1.1), which is the same
fact the sum of exponentials encodes (the 7.3 Sim); the two-function landscape
whose lowest point is the secular determinant's root, with the two levels
pushing apart as the coupling grows (7.2.1); and in perturbation theory the
levels of a box sliding by the average of what was added, matching the exact
ones until the push is no longer small (7.4.1), and an oscillator ground state
that borrows only the states its perturbation can reach (7.4.2). The thread is
the chapter's own: an approximate answer is the best point of a family, and
the reader should see the family.

## Tool changes made for this chapter

- `tools/md2html.py`: a figure caption's `[ref:eq:…]` is resolved to the
  number in the draft row's `_caption` too, as it already was in the text
  (7.1.3, 7.4.2 had kept the raw marker); a `\ref` to a label another page
  defines is resolved by searching the converted pages and printed as that
  page's number, with a warning (7.S's 5.S.1); the zero-width no-break space
  U+FEFF is dropped from maths (7.4's (7.4.18), which KaTeX has no metrics
  for). No earlier page has a caption citing an equation, a foreign `\ref` or
  a U+FEFF, so the drafts of Chapters 1–6 do not change. `lt2md.py` and
  `convert.py` are unchanged; Chapters 1–7 reconvert to a scratch folder
  byte-identical (68 files). Every maths string of the six Chapter 7 drafts,
  section rows included, renders in KaTeX without an error or warning (347).
