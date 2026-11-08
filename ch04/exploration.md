# Exploration: Chapter 4, Postulates and Principles of Quantum Mechanics

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 4`,
after the tool fixes listed at the end), every page read in full, the
chapter's 13 images looked at (the SVGs rendered through sharp). The landing
page (11781) prints no words of its own: its body is only the site's
generated listing of the six sections with their machine summaries, so
`intro/source.md` is a title and nothing else, and the chapter has **no
`intro/` page** (root rule 21: nothing is invented where the book prints no
introduction; `chapter.json` carries no `intro` record). 4.S (550564) is a
real summary page (Kyle Crabtree's five numbered points), routed to
`summary/`. 4.E (13412) is empty: no exercise lives at the end of the
chapter, so nothing is routed from it (root rule 9). The exercises are the
inline boxes, routed below by what they test. One stray passage elsewhere
touches this chapter's subject: 19.E holds a copy of a Zielinski page on the
uncertainty principle with an unkeyed Exercise 19.E.1 (a baseball and an
electron at 91.3 mph); it tests ΔpΔx ≥ ħ/2, which 1.9 introduces, so by root
rule 12 it belongs to 1.9, not here (orchestrator).

## Pages

| Page | LibreTexts id | Licence | Authors | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / all displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11781 | (the book's) | none | none: no text | | | | | | | |
| 4.1 The Wavefunction Specifies the State of a System | 13406 | BY-NC-SA 4.0 | Adams, Evans, Zwiebach (MIT OCW), from its Contributors list | Ill-behaved (invalid) Wavefunctions | 0 | 1 | 4 | 4 in the key | 0 | 2 (Postulate I; definition box Square-Integrable Functions) | 2 / 6 |
| 4.2 Quantum Operators Represent Classical Variables | 13407 | BY-NC-SA 4.0 | none printed, no author tag | none | 0 | 0 | 0 | 0 | 1 | 2 (definition box Postulate II; The Hamiltonian Operator) | 6 / 8 |
| 4.3 Observable Quantities Must Be Eigenvalues of Quantum Mechanical Operators | 13408 | BY-NC-SA 4.0 | Richard Fitzpatrick; Wikiversity | Expectation Values; Expanding the Wavefunction | 1 | 0 | 1 | 2 | 0 | 3 (Postulates III and IV; Collapsing the Wavefunction) | 11 / 22 |
| 4.4 The Time-Dependent Schrödinger Equation | 13409 | BY-NC-SA 4.0 | Mark Tuckerman (tag) | Time-Dependent Wavefunctions; Stationary States; Nonstationary States | 0 | 0 | 0 | 0 | 0 | 2 (Postulate V; The Quantum Observer Effect) | 9 / 14 |
| 4.5 Eigenfunctions of Operators are Orthogonal | 13410 | BY-NC-SA 4.0 | Richard Fitzpatrick | Hermitian Operators; Orthogonality of Degenerate Eigenstates | 1 | 1 | 0 | 1 in the example | 0 | 5 (definition Orthogonality Theorem; two theorem boxes "Proof"; emphasis; theorem Gram-Schmidt) | 17 / 32 |
| 4.6 Commuting Operators Allow Infinite Precision | 13411 | BY-NC-SA 4.0 | Zielinski et al. (tag) | Commuting Operators; General Heisenberg Uncertainty Principle; Applications; References | 3 (4.6.1, 4.6.2A, 4.6.2B) | 2 (4.6.1, 4.6.2C) | 0 | 0 | 0 | 0, a pulled quote | 4 / 29 |
| summary (4.S) | 550564 | untagged (the book's) | Kyle Crabtree | none: one numbered list | | | | | | | 0 / 5 (two carry text tags) |

Every section has learning objectives (with no lead-in sentence) and none
closes on a "Summary". Every section opens on prose before its first `<h2>`
(4.2 has no `<h2>` at all), so each needs an opening header of the agent's
(root rule 3), proposed below; the builder puts them through the humanizer.
4.2 and 4.4 print no Contributors list; their authors come from the tags
(4.4) or are unknown (4.2, whose `notes` say the book names none). 4.6 closes
on a References list (three books), kept as its closing block as 3.9's was.

### The summary page (4.S)

Converted to `ch04/summary/source.md`; it is the chapter's `summary/` page,
named by `chapter.json`'s `summary` record (550564), built like Chapter 3's:
no lead, objectives, exercises or coverage. It is one numbered list of five
points (the state; an operator for every observable; eigenvalues; orthogonal
and complete eigenfunctions with cₙ = ⟨φₙ|ψ⟩; non-commuting operators and
ΔpₓΔx ≥ ħ/2) in Dirac notation. It has no header: one block, with a header
of the agent's ("Five Postulates in Brief", for the builder to humanize). No
figure. Two of its displays carry text tags, "(classical mechanics)" and
"(quantum mechanics)", which MathJax prints in place of a number: they stay
as those tags and take no number (the converter now knows this, below);
the other three displays are unnumbered on the page and stay so. It restates
4.2–4.6 and derives nothing. Corrections: −(ħ/2m)∇² for −(ħ²/2m)∇² (the
slip 3.S also makes); the bold run "Hermitian quantum mechanical operator.
For example:" is the site's markup, not a term (the builder bolds only
"Hermitian quantum mechanical operator" or nothing).

### Per section

- **4.1** Opening (proposed header "The State of a System"): the classical
  state (x, p), its failure under the uncertainty principle, the bold "first
  Postulate"; note **Postulate I**; ψ(r, t) and the state function; the Born
  density P = ψ*ψ = |ψ|² (4.1.1) and normalization (4.1.2); square-integrable
  (bold) and the definition box; Figure 4.1.1 (two localized and two
  oscillating wavefunctions), ψ = Ne^{ikx} and its constant density.
  Ill-behaved (invalid) Wavefunctions: single-valued, continuous, finite;
  Figures 4.1.2, 4.1.3, 4.1.4; the first derivative must exist (second-order
  equation); Exercise 4.1.1. Concepts: classical state, Postulate I, the
  first-derivative condition (new); wavefunction, Born interpretation,
  probability density, normalization, square-integrable, well-behaved
  wavefunction, uncertainty principle (reinforced from 1.9, 3.4, 3.6).
- **4.2** No header: proposed "Observables and Their Operators" (observable;
  note **Postulate II: The Correspondence Principle**; Q(x, p) → Q(x̂, p̂)) and
  "Common Operators" (r (4.2.1), p̂ₓ (4.2.2), T̂ₓ (4.2.3), p̂ (4.2.4), T̂
  (4.2.5), Ĥ (4.2.6); note "The Hamiltonian Operator", Ĥ = T̂ + V̂ against
  F = ma; the other terms of a Hamiltonian; Table 4.2.1). **The book's
  "Correspondence Principle" here names a different idea from 3.3's** (Bohr's
  classical-limit principle, concept `correspondence-principle`): here it is
  the postulate that every observable has an operator. The new concept is
  `operator-postulate` ("Postulate II"); the builder marks the bold term
  with `data-concept="operator-postulate"` and its terms do not repeat 3.3's
  (orchestrator: keep the two apart, as proposed). Concepts: observable,
  operator postulate, potential energy operator (new); the momentum,
  kinetic-energy, angular-momentum and Hamiltonian operators and the
  Laplacian (reinforced; the 3D momentum operator is already a form of
  3.3's `momentum-operator`).
- **4.3** Opening (proposed header "Eigenvalue Equations"): Ĥ (4.3.1), Ĥ|ψ⟩ =
  E|ψ⟩ (4.3.2), eigenvalue equation, eigenfunction, eigenvalue (bold,
  restated from 3.2/3.3); note **Postulate III** with (4.3.3); eigenstates
  (4.3.4); ⟨A⟩ = a, ⟨A²⟩ = a², σ² = 0 (three unnumbered blocks). Expectation
  Values: ⟨x⟩ (4.3.5), ⟨f(x)⟩ (4.3.6), note **Postulate IV** (4.3.7), the
  unnormalized form (4.3.8), variance and standard deviation (4.3.9), Figure
  4.3.1, Example 4.3.1 (⟨x⟩, ⟨p⟩, ⟨T⟩, E of the box's ground state). Expanding
  the Wavefunction: complete set (bold), ψ = Σcᵢφᵢ, orthonormality (4.3.10),
  Kronecker delta, cᵢ (4.3.11), Σ|cᵢ|² = 1; note "Collapsing the
  Wavefunction" with two unnumbered images. Concepts: an eigenstate has no
  spread, the unnormalized expectation value, variance, completeness,
  expansion coefficients, Σ|cᵢ|² = 1 (new); eigenvalue equation, eigenstate,
  observables as eigenvalues, expectation value, uncertainty (σ is 3.8's ΔA),
  Kronecker delta, superposition and collapse (reinforced).
- **4.4** Opening, one paragraph on the two "flavors" (a section
  introduction, rule 21.3; proposed header "Two Schrödinger Equations").
  Time-Dependent Wavefunctions: the TISE (4.4.1), Newton (4.4.2), p(x,0)
  (4.4.3), the TDSE (4.4.4); note **Postulate V**. Stationary States: Ψ(x,0) =
  ψₙ, p(x,0) (4.4.5), Ψ = ψₙe^{−iEₙt/ħ} (4.4.6) shown to satisfy the TDSE, p(x,t)
  = p(x,0), *stationary state*. Nonstationary States: aψ₁ + bψ₂ (4.4.7),
  (ψ₁ + ψ₂)/√2 (4.4.8), p(x,t) ≠ p(x,0) (4.4.9); a measurement of E₁ leaves ψ₁
  (bold *collapse of the wavefunction*); note "The Quantum Observer Effect".
  Concepts: a stationary state's constant density, nonstationary state,
  observer effect (new); TDSE, TISE, stationary state, collapse
  (reinforced).
- **4.5** Opening, one paragraph (proposed header "From the Box to General
  Theorems"). Hermitian Operators: the Hermitian condition (4.5.1), the
  eigenvalue equation and its conjugate (4.5.2, 4.5.3), the two integrals
  (4.5.4, 4.5.5), their equality (4.5.6), a garbled unnumbered display, the
  conclusion (4.5.7); definition box **Orthogonality Theorem**; a theorem box
  "Proof" (4.5.8–4.5.10, ending □); the definition of orthogonal (4.5.11);
  Fitzpatrick's second proof (4.5.12–4.5.15 and two unnumbered lines); the
  emphasis box "The eigenvalues … are all real"; Example 4.5.1 (ψ₂ and ψ₃ of
  the box, with a MATLAB plot). Orthogonality of Degenerate Eigenstates:
  degenerate (bold), the overlap integral (4.5.16), the normalized
  orthogonal combination (4.5.17, "easily demonstrated (but not here)"),
  theorem box **Gram-Schmidt Orthogonalization**, a second "Proof" box (the
  same three-line argument twice, in bra-ket and then integral notation),
  Exercise 4.5.2, the closing sentence. Concepts: real eigenvalues,
  orthogonality theorem, overlap integral, Gram–Schmidt orthogonalization,
  eigenstates chosen orthogonal (new); Hermitian operator, Hermitian
  observables, orthogonality, degeneracy (reinforced).
- **4.6** Opening, one paragraph (proposed header "Commutation and
  Precision"). Commuting Operators: [Â, Ê] = ÂÊ − ÊÂ = 0, the recipe, the
  shared eigenfunctions, the teeth-and-hair analogy, (4.6.1)–(4.6.3);
  Example 4.6.1 (three pairs). General Heisenberg Uncertainty Principle:
  (4.6.4), "will not be proven here"; Exercise 4.6.1. Applications: Ĥψ = Eψ,
  [L̂², L̂²ₓ] = … = 0, the components do not commute, the pulled quote (kept
  as the book prints it); Example 4.6.2A (an operator garbled by the site:
  K̂ = α∫ from [1] to [∞] d[x], and a Solution that only says "Evaluate");
  Example 4.6.2B (worked); Exercise 4.6.2C (the angular momentum
  commutators, a key that states the three results). References. Concepts:
  commuting operators share eigenfunctions, the general uncertainty
  principle, angular-momentum commutation (new); commutator, uncertainty,
  angular momentum operator (reinforced). The position–momentum commutator
  [x̂, p̂ₓ] = iħ is stated only in Exercise 4.6.1 and on the summary page, so
  it has no span in a section's text and is not a concept row; the exercise
  is tagged with the commutator and the general principle.

## Equation numbers

One number per display, an `align` included (the user's choice), as the
converter's `n=` gives them. The book's labels are names: 4.2 and 4.3 both
label the Hamiltonian `3-22` (printed (4.2.6) and (4.3.1)); 4.3's Schrödinger
equation is `3-23` (4.3.2); 4.5 uses `4-37`…`4-47` (4.5.1–4.5.10) before the
`4.5.N` labels (4.5.11–4.5.17); 4.6 uses `4-49`…`4-52` (4.6.1–4.6.4). Every
`\ref` resolves on its own page. Citations that miss: 4.3 "It follows from
Equations 4.3.8 and 4.3.10" (and again "Equations 4.3.8 and 4.3.10 yield"):
(4.3.8) is the unnormalized expectation value; the step needs the unnumbered
expansion ψ = Σcᵢφᵢ and (4.3.10) (correction). 4.5 "from Equation 4.5.9, the
left-hand sides … are equal": that is the Hermitian property (4.5.1), not
(4.5.9) (correction). 4.6's Example 4.6.1 b cites "Example 4.6.1" from inside
Example 4.6.1 (it means part a). The summary's two text tags are tags, not
numbers. Inline maths in Example 4.6.1 carries `\nonumber`, which names
nothing and the draft drops.

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Printed questions**: 5. Four boxes printed "Exercise" (4.1.1 with four
  parts, 4.5.2, 4.6.1, 4.6.2C) and the box printed **Example 4.6.2A**, whose
  "Solution" is only "Evaluate [K̂, Ĥ]": a question with no working, treated as
  an exercise by the precedent of 3.4's solution-less examples (it stays
  labelled as the book prints it, with a correction note on its garbled
  operator). The book's numbering skips Exercise 4.5.1 (the page's
  `\PageIndex` starts at 2); the label is kept.
- **Keyed**: 3, available now: 4.1.1 (four worked solutions, with four small
  plots kept in the key), 4.5.2 (worked), 4.6.2C (the three commutators,
  stated without working; its operator definitions are misprinted,
  corrected by a note).
- **Unkeyed**: 2, available with AI solutions: 1 explain or prove (4.6.1,
  [x̂, p̂ₓ] and the bound ħ/2; the printed bound (4.6.4) lacks the factor ½
  that makes the answer ħ/2, so the solution follows the correct relation and
  the correction note says so) and 1 compute (4.6.2A: [K̂, Ĥ]f = α∫₁^∞ f′dx −
  0 = −αf(1) for an f that vanishes at infinity, so they do not commute).
- **Not exercises**: 4 worked examples kept whole: 4.3.1, 4.5.1, 4.6.1,
  4.6.2B.
- **Conceptual questions, problems, 4.E**: none printed; 4.E is empty.
- **Placement (root rule 12)**: every question tests its own section (4.1.1
  the conditions of 4.1; 4.5.2 the overlap of 4.5; 4.6.1, 4.6.2A and 4.6.2C
  commutators and the uncertainty bound of 4.6). Nothing is held or moved.
- **Concepts the book leaves untested**: 4.2 (no exercise: operators from
  classical observables), 4.3 (no exercise: variance of an eigenstate,
  expansion coefficients, Σ|cᵢ|²), 4.4 (no exercise: stationary and
  nonstationary states) and 4.5's orthogonality theorem (its one exercise is
  on normalizing a Gram–Schmidt combination). **Proposed new: 7**: 4.2 two
  (write Ĥ for a particle on a spring, V = ½kx², from Table 4.2.1; write
  L̂_z from L_z = xp_y − yp_x by Postulate II and check it against the
  table); 4.3 two (for Ψ = √(1/3)ψ₁ + √(2/3)ψ₂ of a box, the probabilities of
  measuring E₁ and E₂ and ⟨E⟩; show that e^{ikx} has zero variance of p̂ₓ);
  4.4 two (show |Ψ|² of (ψ₁ + ψ₂)/√2 in a box oscillates and find its period
  h/(E₂ − E₁) for an electron in a 1.0 nm box; which of three given Ψ(x,t)
  are stationary); 4.5 one (show ψ₁ and ψ₃ of the box are orthogonal by
  integrating, where the parity argument of Example 4.5.1 does not apply).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

The point named is what the reader should see before reading anything.
Every book figure here is a graph or a sketch; none is a photograph.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 4.1.1 | 4.1 | GIF, one frame, no credit (MIT OCW 8.04): four panels, ψ (red, top) and \|ψ\|² (blue, bottom): two narrow peaks at two places, two cosines of different k | **Replace, still** (no time in the idea; variation is the value add). Choice: localized (a narrow peak) or oscillating (Ne^{ikx}); for the peak, sliders centre x₀ and width; for the wave, slider k with detents at the book's two values. Top: Re ψ stroked in the wavefunction hue (Im dashed for the wave); below, \|ψ\|² filled in the probability-density hue. **Point: the density keeps where the particle is and forgets the wave's ripple: a narrow peak gives a narrow density, and Ne^{ikx} gives the same flat N² for every k.** Readout P(x) = \|ψ(x)\|²; for the wave \|Ne^{ikx}\|² = N². Arrows none. Flat. Opens on the book's first panel. The book's red/blue are its own colours, not facts; the new caption does not name them. |
| 4.1.2 + 4.1.3 + 4.1.4 | 4.1 | SVGs (CC BY-NC, Ümit Kaya): a curve that goes to infinity over a region; a curve that folds back (multivalued, grey lines); (left) a curve with a jump, (right) a curve with a kink | **Fold, still**: one frame, a choice of the book's four curves and a fifth, acceptable one. A probe the reader drags along x (a vertical line held by a slider) shows at each x every value ψ takes there, its slope and its curvature; the failing place is where the probe meets three values (multivalued), no value (infinite), two values (jump) or two slopes (kink). Readout a checklist: single-valued, continuous, finite, first derivative, each ✓ or ✗ at the probe. **Point: each bad curve fails one test at one place.** Arrows none. Flat. Eyebrow "Figure 4.1.2 + 4.1.3 + 4.1.4", every image in `originals`, the right panel's caption "180º" kept as printed. Lower-tier alternative: four faithful copies (orchestrator). |
| (4 imgs) | 4.1, Exercise 4.1.1's key | four small plots: cos x, eˣ, e^{−x}, tan θ | Kept in the keyed answer as the book prints them (the key is the book's). |
| 4.3.1 | 4.3 | PNG, a normal curve with 1σ bands, 34.1 / 13.6 / 2.1 / 0.1 % (Wikipedia, M. W. Toews, CC BY 2.5; the caption says "used with permission") | **Replace, still.** A density \|ψ\|² with ⟨x⟩ marked and the ±1σ, ±2σ, ±3σ bands filled; choice of state: the book's Gaussian, the box's ψ₁, the box's ψ₂ (Example 4.3.1's states); for the Gaussian a slider σ. **Point: σ measures how far measurements scatter around ⟨x⟩; the Gaussian's bands hold the book's 34.1, 13.6, 2.1 and 0.1 %, and another state's bands hold other shares.** Readout σ²ₓ = ⟨x²⟩ − ⟨x⟩² with numbers and the share within ±σ. Arrows none. Flat. Opens on the book's Gaussian. |
| (img ×2) | 4.3 note | SVGs (CC BY-NC 4.0, Kaya): before measurement, a broad 3D bump ψ₁ over a plane; after three measurements, three spikes at three places; the same for a spike ψ₂, three spikes at the same place | **Fold into one moving figure, unnumbered** (eyebrow "Figure", as 3.S's were; the two images in `originals`). The idea has a time in it (a measurement is an event): the density sits; a measurement fires; the density collapses into a spike at a place drawn from \|ψ\|²; the system is prepared again and measured again, three times per cycle. Choice: spread state or position eigenstate (the book's two images). **Point: a spread state gives a different place each time; an eigenstate gives the same answer every time.** Flat, not 3D: the book's surfaces over a plane are perspective for a 1D lesson (rule 28.1); the collapse reads on one axis. Arrows: the book's process arrows are symbolic, dropped. Loop: three measurements, about 6 s. Readout the last measured x and the three results so far. |
| (img) | 4.5, Example 4.5.1 | JPG, no credit: ψ₂ and ψ₃ of the box (MATLAB, labelled ψ_{ν=2}, ψ_{ν=3}) | **Replace, still**, kept inside the example where the book puts it. The two functions, the box's centre L/2 drawn as the mirror line, their product below with its positive and negative areas filled. Choices m, n ∈ {1, 2, 3, 4}, opening on the book's (2, 3); readout the parity of each about L/2 and ∫ψₘψₙdx = 0. **Point: an odd product cancels itself across L/2; for two functions of the same parity (1, 3) the integral is still zero, but not by symmetry.** It adds parity, which 3.5.5's figure does not show; the builder reuses 3.5.5's drawing code. Arrows none. Flat. |
| Table 4.2.1 | 4.2 | the common operators | Kept as a `div.book-table` (its line breaks inside a cell kept). |

### What moves in this chapter

Two ideas have a time in them: a measurement collapsing a state (4.3's
note, and 4.4's energy measurement), and a nonstationary state's density
changing while a stationary one's stands still (4.4). The first is the
folded collapse figure; the second is a new Sim (below), since 4.4 has no
figure. A stationary state's turning phase was drawn in 3.5.4; it is not
drawn again. The postulates themselves, the operator table, Hermiticity and
the orthogonality proofs are not decorated.

### New simulations proposed (root rule 15)

- **4.4, a mixture and a measurement** (recommended, moving): a box with
  Ψ(x,0) = aψ₁ + bψ₂, slider |a|² from 0 to 1 (specials at 0, ½ the book's
  (4.4.8), and 1); the density sloshes with period h/(E₂ − E₁) and stands
  still at 0 or 1; a "Measure E" control collapses the state: E₁ with
  probability |a|², E₂ with |b|², and the density then stops moving for good.
  Point: a mixture's density moves; one energy measurement freezes it in an
  eigenstate. Readout p(x,t) = |Ψ(x,t)|², the cross term's frequency, and the
  measured E. It goes beyond 3.5.4 by the weight slider and the measurement.
  Flat.
- **4.3, building a state from eigenstates** (recommended, still): a
  state in the box (the book gives none; a triangle or a Gaussian, choice)
  and its partial sum Σⁿcᵢψᵢ; slider the number of terms 1–20; bars of |cᵢ|²
  beside, summing toward 1. Point: any state is a sum of eigenstates, and
  the |cᵢ|² are the probabilities of each energy, adding to one. Readout cᵢ =
  ∫ψᵢ*ψ dx for the last term and Σ|cᵢ|².
- **4.6, order matters** (offered, not recommended): choose f(x) and see
  x̂p̂f and p̂x̂f drawn together with their difference, always iħf. It repeats
  3.3's operator bench closely.
- Not offered: an uncertainty sim in 4.6 (Chapter 3's orchestrator declined
  the same one in 3.8).

## Derivation candidates (root rule 29)

Score = facts imported from outside the section's method + the longest run
of moves the book does not print + joins of independent lines.

| Where | What | Printed? | Score | Decision |
|---|---|---|---|---|
| 4.1, \|Ne^{ikx}\|² = N² | the modulus of a plane wave | block, three lines | 1 (the conjugate of e^{ikx}) | Keep as printed (a definition applied, 3.7's (3-35) precedent); the missing N in the second line corrected by a note. |
| 4.3, ⟨A⟩ = a, ⟨A²⟩ = a², σ²_A = 0 | the eigenvalue equation in ⟨A⟩ and ⟨A²⟩, normalization, the variance | three blocks | 5 (eigenvalue equation, normalization, the variance (4.3.9) stated later; A²ψ = a²ψ unprinted; one join) | **Build**, replacing the blocks: *Derivation · an eigenstate has no spread*. |
| 4.3, (4.3.9) | σ² = ∫(x − ⟨x⟩)²\|ψ\|² ≡ ⟨x²⟩ − ⟨x⟩² | the result printed, the work skipped | 7 (⟨x⟩, ⟨f(x)⟩, normalization; four unprinted moves: expand, split, two substitutions) | **Build**, replacing the display: *Derivation · the variance as ⟨x²⟩ − ⟨x⟩²*, (4.3.9) on the result. |
| Example 4.3.1 | ⟨x⟩, ⟨p⟩, ⟨T⟩ for ψ₁ of the box | blocks, the integrals' evaluation skipped | 7 (ψ₁ from 3.5, normalization, ∫x sin², sin cos = ½ sin 2θ; three unprinted moves) | **Build** as *Example 4.3.1 ·* with three branches; follows the correct sign in (b) (−2iħπ/L², a note). Parts (b) and (c) repeat 3.7's Examples 3.7.3 and 3.7.2: build them here (the book prints the work again) or let those nodes link to 3.7's derivations (orchestrator; proposed: build, with provenance naming 3.7). |
| 4.3, (4.3.11) and Σ\|cᵢ\|² = 1 | "It follows from …" | hidden | 6 and 7 (expansion, orthonormality, normalization; four unprinted moves each) | **Build** after the paragraph as one record with two results: *Derivations · the expansion coefficients*. |
| 4.4, Ψ = ψₙe^{−iEₙt/ħ} and p(x,t) = p(x,0) | the TDSE checked on a stationary state, then its density | blocks | 4 (TISE, TDSE; Ĥ does not act on t, unprinted; one join) | **Build** as one record with two results: *Derivations · a stationary state*; the density line takes ψₙ* (a note: the book writes ψₙ, right only for a real ψₙ). |
| 4.4, (4.4.9) | the density of (ψ₁ + ψ₂)/√2 at time t | stated, not worked | 6 (the stationary-state result, the superposition; four unprinted moves to the cross term 2Re[ψ₁ψ₂e^{−i(E₂−E₁)t/ħ}]) | **Build** after the paragraph: *Derivation · a mixture's density changes in time*, ending in the book's ≠. |
| 4.5, (4.5.1)–(4.5.7) | real eigenvalues ⇒ Hermitian, for an eigenfunction | a proof, one garbled display | 3 | **Build** (every proof): *Derivation · an operator with real eigenvalues is Hermitian*, following the correct mathematics where the garbled line stands (a note). |
| 4.5, the "Proof" of the Orthogonality Theorem | eigenvalue equations, multiply, integrate, subtract | a proof | 3 | **Build**: *Derivation · the orthogonality theorem*; the book writes ψ for φ throughout (so its integral is ∫ψ*ψ = 1, not an overlap), followed correctly with notes. |
| 4.5, (4.5.11)–(4.5.15) and two lines | Fitzpatrick's proof of the same theorem | a proof | 3 | **Build**: *Derivation · eigenstates of different eigenvalues are orthogonal*; "from Equation 4.5.9" is the Hermitian property (4.5.1). The book proves the theorem twice; both records stand where the book prints them (orchestrator may prefer one). |
| 4.5, (4.5.17) | the normalized orthogonal combination, "easily demonstrated (but not here)" | hidden | 8 (S, normalization of ψₐ and ψₐ′; five unprinted moves; one join of orthogonality and norm) | **Build** after the paragraph: *Derivation · an orthogonal partner for a degenerate eigenstate*. |
| 4.5, Gram–Schmidt "Proof" box | ⟨ψₐ\|ψₐ′ − Sψₐ⟩ = S − S = 0, then the same in integrals | a proof, twice, the second garbled (a stray display, Φ and ψ_A undefined) | 2 | **Build** one record from the bra-ket lines: *Derivation · Gram–Schmidt orthogonalization*; the integral restatement is the same three moves in other notation: proposed to stand as the record's second node, notes on Φ and the stray line (orchestrator: or leave it printed with corrections). |
| Exercise 4.5.2 | normalizing N(φ₁ − Sφ₂) | the key | – | The key is the book's, kept as printed. |
| Example 4.5.1 | a parity argument | prose, no chain | 0 | Keep as printed (its slips corrected). |
| 4.6, (4.6.1)–(4.6.3) | commuting operators share eigenfunctions | block | 3 (the eigenvalue equations; one join) | **Build**: *Derivation · commuting operators share eigenfunctions*, with the book's "eigenfunction of Â with eigenvalue b" read as of B̂ (a note). |
| Example 4.6.1 | three commutators by the product rule | block | 1 | Keep as printed (a check of a definition, 3.2.1's precedent); part (c)'s swapped operators corrected by a note. |
| 4.6, (4.6.4) | the general uncertainty principle | "will not be proven here" | – | Stays: the proof rests on facts the book never states (the Schwarz inequality); nothing is invented. The missing ½ gets a correction. |
| Example 4.6.2B | the identity operator commutes | block | 0 | Keep as printed. |
| summary | restatements | – | 0 | Kept as printed. |

## Corrections spotted (root rule 13)

- **summary**: −(ħ/2m)∇² for −(ħ²/2m)∇²; the bold run over "For example:".
- **4.1**: "(e.g., well-behaved)" for i.e.; "so that the Born Interpretation to
  be applicable"; |e^{ikx}|² for |Ne^{ikx}|² in the second line of the
  modulus; "the periods, k" (k is the wavenumber; the period is 2π/k); "which
  implies that the first derivative of the wavefunction to exist"; Exercise
  4.1.1 (d) "[0, 2θ]" over θ (read as [0, 2π], which the key's plot shows);
  key (b) "indefinite" for unbounded; key (c) writes Ψ for the e^{−x} under
  test; Figure 4.1.1's alt text describes "voltage input and output
  waveforms" (alt only, replaced with the figure).
- **4.2**: objective "a unique quantum operator exist"; "comes from the his
  formulation"; (4.2.4) is introduced as the kinetic energy operator "in
  three dimensions" but is the momentum operator (the kinetic one is
  (4.2.5)); Table 4.2.1 writes ordinary derivatives d/dx for the partials of
  3D operators.
- **4.3**: objective "if the wavefunctions is not an eigenstate"; "The
  expectation of value A"; Postulate IV and (4.3.8) write ⟨ψ|a|ψ⟩ for
  ⟨ψ|Â|ψ⟩; "If an unnormalized wavefunction where used"; "image usd with
  permission" (and the image is CC BY 2.5, Wikipedia); Example 4.3.1 (b)
  2iħπ/L² for −2iħπ/L²; (c) names the operator K̂ for T̂; "Equations 4.3.8
  and 4.3.10" twice (above); "complete orthonormal set of eigenvalues" for
  eigenfunctions; "an infinite set of functionals"; "can be expand"; "to
  specifies"; "Using a different measurement operation may in quantized
  values"; "If you wavefunction"; "wavefuction".
- **4.4**: the opening sentence's grammar ("that if classified and
  understood, then it becomes easier"); "as in the previous example" (there
  is none); p(x,t) writes ψₙ for ψₙ* in the first factor; d/dt for ∂/∂t;
  `exp` set as italic letters in "ψₙ(x) exp(−iEₙt/ħ)".
- **4.5**: objective "obervables"; "which is discuss first"; (4.5.1)'s gloss
  speaks of "Â operating on φ" where the equation has only ψ; the display
  "Â*∫ψ*Âψ dτ = ∫ψÂ*ψ* dτ_*" is meaningless; the Orthogonality "Proof"
  writes ψ for φ in every line after the first and Â*ψ* = a₂ψ* (it means
  Â*φ* = a₂φ*), so (4.5.10) multiplies ∫ψ*ψ dτ, which is 1; "from Equation
  4.5.9" for the Hermitian property; "(A ψa)*" fine but "Aψa′" for Âψₐ′;
  Example 4.5.1: sin(2n x/L) twice for sin(2πx/L) and sin(3πx/L), a missing
  dx, and the parities swapped (about L/2 ψ₂ is odd and ψ₃ even); the
  Gram–Schmidt proof's stray display ∫ψₐ*ψₐ dτ (it means S = ∫ψₐ*ψₐ′ dτ), Φ
  undefined (ψₐ″), ψ_A for ψₐ.
- **4.6**: "will commute.on"; "If Â and B̂ commute and ψ is an eigenfunction
  of Â with eigenvalue b" (of B̂); Example 4.6.1 (b) "like in Example 4.6.1"
  (part a); (c) Ĵ{Ôf} written as Ĵ{f·3x} and Ô{Ĵf} as Ô{f/x} (the operators
  swapped; the result 3f is right); (4.6.4) lacks the factor ½ (σ_Aσ_B ≥
  ½|⟨[Â, B̂]⟩|), and "the integral inside the square brackets is called the
  commutator" (the bracket is); Exercise 4.6.1 "equals –iħ" ([x̂, p̂ₓ] = iħ;
  −iħ is [p̂ₓ, x̂]); "commuters that commute"; "observations made in the
  experimentally"; Example 4.6.2A's K̂ = α∫{[1]}^{[∞]}d[x] (the site's
  template residue, read α∫₁^∞ … dx); Example 4.6.2B "d(x)"; Exercise 4.6.2C's
  operators: L̂ₓ and L̂_y put φ inside sin and cos with the derivative, L̂_y
  has cos φ where sin φ belongs, Θ for θ, and L̂_z = −iħ∂/∂θ for −iħ∂/∂φ;
  δ for ∂ throughout; "commucators".

## Licences of the figures

The pages are CC BY-NC-SA 4.0 (the summary untagged, the book's). 4.1.2–4.1.4
and the two collapse images CC BY-NC (Ümit Kaya); 4.1.1 no credit (an MIT
8.04 lecture image; the page credits MIT OCW, used with permission); 4.3.1
Wikipedia (CC BY 2.5, M. W. Toews; the caption says "used with permission");
Example 4.5.1's plot and Exercise 4.1.1's four plots no credit. Every figure
but the key's four plots is replaced, so the question is only which
originals ship in `originals`: by Chapter 3's decision, uncredited
originals ship under the page's licence with `notes` saying the book gives
none; 4.1.1 (MIT, "used with permission") is the doubtful one (orchestrator).

## What is new to OmniStax here

- A landing page with no text: the chapter has no `intro/` page and no
  `intro` record.
- Box numbers with a letter (Example 4.6.2A, 4.6.2B, Exercise 4.6.2C) and a
  page whose exercise numbering starts at 2 (4.5).
- A display with a text `\tag` (4.S), a two-argument `\braket` (4.S; 3.S has
  one too), `\xcancel` (4.1, KaTeX has it), inline `\nonumber` (4.6).
- Two proofs of one theorem on one page (4.5), and a proof printed twice in
  two notations.
- A book term, "Correspondence Principle", that names two different
  concepts in two chapters (3.3 and 4.2).
- No new type: the chapter's quantities are operators, wavefunctions,
  densities and energies, all declared by Chapter 3. `colours:default` was
  not run.

## The chapter's answer to root rule 23

Chapter 3 built the particle in a box; Chapter 4 says what the rules were.
The danger is a chapter of boxed postulates that look alike. The figures
should make three of them things the reader watches: that a measurement
picks one value out of a spread and that an eigenstate never spreads
(4.3's collapse, its σ bands); that only a mixture of energies makes the
probability move, and one measurement stops it (4.4's Sim); that
orthogonality is a cancellation the reader can see across the box's centre
(4.5). The rest (operators, Hermiticity, commutators) is algebra, and the
derivations carry it: every proof in 4.5 and 4.6 becomes a graph whose facts
are the postulates themselves, so the reader sees the five postulates being
used.

## Tool changes made for this chapter

- `tools/lt2md.py`: a box number may end in a capital letter ("Example
  4.6.2A" had come out `{ex:4.6.2} A`, which would have given three boxes one
  number); a display with its own `\tag{…}` takes no number (4.S's
  "(classical mechanics)" had been numbered n=1, n=2, and the draft then
  set two tags). Chapters 1–3 reconvert to the same bytes.
- `tools/md2html.py`: each panel of a figure keeps its own alt text (4.1.4's
  second image had the first's); `\braket{a}{b}` becomes KaTeX's
  `\braket{a|b}` (it rendered ⟨a⟩b; 3.S's `\braket{\psi}{\psi}` has the same
  fault in its built page, which is Chapter 3's to fix); `\nonumber` in
  inline maths is dropped; example and exercise ids are lower-cased
  (`ex-4-6-2a`, `e2c`). Every maths string of the seven drafts renders in the
  app's KaTeX.
