# Exploration: Chapter 11, Computational Quantum Chemistry

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 11`), every
page read in full against its raw HTML, the chapter's 7 images looked at (the SVGs
rendered through sharp, the PNGs as they are). The landing page (11788) prints one
paragraph of its own (computational and quantum chemistry, *ab initio* against
semi-empirical) and no thumbnail credit, so the chapter has an **`intro/` page**
(root rule 21.1). There is **no summary page**. **11.E (13482) has no body**
(`exercises/source.md` holds only its title): nothing is routed from it (root rule
9), and no other page of the book holds exercises for this chapter (the full-book
pass found none in any N.E but 19.E and 21.E, which test Chapters 1/4 and 21).

Every section page holds the text its title promises (checked against Chapter 9's
empty and stray pages): none is empty, none is a transclusion of another book's
page. Two are patchworks, which matters for what is built:

- **11.1** (Zielinski) is mostly Chapter 8 again: the double-permutation argument of
  8.5 (with 8.5's own labels `9-38`, `9-40`), the helium product and its
  antisymmetric combination of 8.6 (labels `8.6.1`, `8.6.2`, and a plain-text
  "Equation 8.6.4"), the Slater determinant of 8.6, then a page of its own: the
  single-determinant *ab initio* calculation, the Hartree–Fock limit, a note on
  restricted and unrestricted Hartree–Fock and Example 11.1.1 (Huo's CO).
- **11.2** opens mid-thought ("The problem is that STOs do not perform well…"), a
  passage lifted from a longer text, and its Example 11.2.2 is a plotting task with
  no solution (no 11.2.1 is printed).
- **11.3** and **11.4** are one continuous text (a course's chapter on basis sets:
  "for the purposes of this course", "Section 1.5.3.2"), whose LaTeX tables lost
  their header rows on the way to LibreTexts.

The chapter is about one thing, the basis set: what a calculation expands its
orbitals in, and what each choice buys and costs. What varies: the number of
Gaussians fitted to a Slater orbital (the cusp and the tail come closer with each
one), the weights of two or three functions of different ζ (the orbital swells or
tightens), the weight of a polarization function (the density leans off the
nucleus), the exponent of a diffuse function (the tail reaches farther), the size
of the basis (the energy falls toward a limit while the cost climbs). Nothing in
the chapter has a time in it, so nothing moves; every figure is still and answers
its controls (root rule 14).

## Pages

| Page | LibreTexts id | Licence | Authors (tags) | Headers (`<h2>`, `<h3>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11788 | BY-NC-SA 4.0 | none | none: one paragraph | | | | | | | |
| 11.1 Overview of Quantum Calculations | 165359 | BY-NC-SA 4.0 | Theodore Zielinski | Multielectron Electronic Wavefunctions | 1 (11.1.1, worked in its text) | 0 | 0 | 0 | 0 | 1 (Hartree-Fock Calculations) | 7 / 16 |
| 11.2 Gaussian Basis Sets | 13476 | BY-NC-SA 4.0 | LibreTexts | Gaussian Type Orbitals (GTO): h3 Multiple Gaussian Representation, Basis Notation; Summary | 1 (11.2.2, no solution) | 0 | 3 (11.2.1 two panels) | 0 | 2 (11.2.1; the example's unnumbered α/C table) | 1 (Limitation: Overdetermined Basis) | 2 / 3 |
| 11.3 Extended Basis Sets (Double Zeta and Split-Valence) | 13478 | BY-NC-SA 4.0 | none | Minimal Basis; Multiple Gaussian Representation; Multiple Zeta Basis sets; Split-valence basis sets: h3 Extended Basis Set Notation | 0 | 0 | 2 | 0 | 3 | 0 | 0 / 4 |
| 11.4 Orbital Polarization and Diffuse Terms in Basis Sets | 13479 | BY-NC-SA 4.0 | Wikipedia | Polarization Functions: h3 Notation; Diffuse Functions: h3 Notation; Summary | 0 | 0 | 1 | 0 | 2 | 0 | 0 / 0 |
| 11.E | 13482 | | | empty | | | | | | | |

No section has learning objectives; none prints a Contributors list, so the
credits are the tags' authors (11.1 Zielinski, 11.2 LibreTexts, 11.4 Wikipedia),
and 11.3 and the intro carry the book's (Larsen, curator). Closing "## Summary" in
11.2 and 11.4 (to `summary_html`). Displays: 23, of which 9 numbered (one number
per display; no `align` is numbered).

### The intro page

`intro/source.md`: one paragraph, no header, no maths. One block, header proposed
"Solving the Schrödinger Equation by Computer" (humanizer by the builder). The
book's italics are split into four touching `<em>`s ("a*b initio*,"): the
converter now joins them (Tool changes, below); the "a" stays roman as printed,
which the builder may set whole in italics as the live page shows it. No
correction. The intro carries no concepts (rule 21.1): *ab initio* is introduced in
11.1, where the text first uses it in a sentence that says what it is.

### Per section

- **11.1** One `<h2>`, which covers only the first half. Proposed blocks: the
  book's "Multielectron Electronic Wavefunctions" (the permutation argument
  (11.1.1)–(11.1.2), the double permutation, φ = 0 or π, the helium product
  (11.1.3), its permutation (11.1.4), the antisymmetric combination, the H₂
  determinant, spin-orbital shorthand χ, the N-electron determinant (11.1.5)), and
  one of the agent's from "In a modern *ab initio* electronic structure
  calculation…" (proposed "The Hartree–Fock Limit"): MOs in a contracted Gaussian
  basis (11.1.6), the energy (11.1.7) and its bra-ket form, SCF and the linear
  variational method, the Hartree–Fock limit, the note "Hartree-Fock
  Calculations" (restricted and unrestricted), Example 11.1.1 (CO, Huo 1965, the
  ten-orbital basis and the 5σ that binds iron). Concepts (new): *ab initio*
  calculation, molecular orbitals in a basis set, Hartree–Fock limit, restricted
  and unrestricted Hartree–Fock, molecular orbitals of CO. Reinforced or used:
  exchange phase, antisymmetry principle, two-electron antisymmetric combination
  (8.5), Slater determinant, spin-orbital (8.5, 8.6), Hartree–Fock energy and
  method (8.7), self-consistent field method (8.3), variational principle (7.1),
  linear variational method (7.2), electronic Hamiltonian (9.1), LCAO-MO (9.2),
  nonbonding and antibonding orbitals, σ and π (9.2–9.12), hybrid orbital (10.1).
  The repeated half is built once in Chapter 8 and cited here (orchestrator
  precedent): its prose and displays stay as the book prints them, with
  corrections, and link 8.5's `exchange-phase` derivation and 8.6's determinant
  figure.
- **11.2** Opening block (proposed "Why Gaussians"): STOs integrate badly, GTOs
  well. Gaussian Type Orbitals (GTO): LCAO's natural basis, STOs and GTOs named
  (glossary bolds), the Cartesian GTO (11.2.1), a, b, c and ℓ, the note
  "Limitation: Overdetermined Basis" ((ℓ+1)(ℓ+2)/2 against 2ℓ+1), the missing cusp
  (Figure 11.2.1). Multiple Gaussian Representation (h3): contracted functions,
  STO-NG (11.2.2) (Figure 11.2.2), d and α frozen, primitive and contracted
  Gaussians (bold), the cost argument (100⁶ against 600), Figure 11.2.3, Basis Set
  Exchange. Basis Notation (h3): alphabet soup, N-MPG\*, 3G and 6-31G, Table
  11.2.1, Example 11.2.2 (plot an STO against three Gaussians, refit, comment).
  Summary (Boys). Concepts (new): Cartesian Gaussian-type orbital, Cartesian
  against spherical Gaussians, Gaussians miss the nuclear cusp, Gaussian integrals
  are cheap, primitive Gaussian, contracted Gaussian function, STO-NG basis set,
  fitting a Slater orbital with Gaussians (skill, Example 11.2.2), Pople basis set
  notation. Reinforced: Slater-type and Gaussian-type orbitals, basis functions
  (7.2), LCAO (7.2, 9.2), spherical harmonics (5.8), angular momentum quantum
  number (6.2).
- **11.3** Minimal Basis: the occupied and partly filled shells, the p shell of
  the alkali and alkaline earth metals, one STO per orbital, Table 11.3.1 (ζ from
  McQuarrie, the same values as 7.3's Clementi–Raimondi column), |ψ⟩ = Σ c_i
  |φ_STO(ζ_i)⟩. Multiple Gaussian Representation: the *orbital function*, Gaussian
  primitives, H₂ in STO-3G (the aligned display), still minimal, contraction
  (bold), the notation (6s3p)→[2s1p], segmented and general contractions, single
  zeta. Multiple Zeta Basis sets: DZ and TZ, STO-3G-DZ for H₂, flexibility, Figures
  11.3.1 and 11.3.2, the N → 2N cost, functions losing their meaning as atomic
  orbitals (bold), optimization directly with GTOs. Split-valence basis sets: core
  against valence, Pople and Dunning, X-YG, 3-21G, Table 11.3.2. Extended Basis Set
  Notation (h3): N-MPG again, Table 11.3.3. Concepts (new): minimal basis set,
  orbital function, contraction notation (with segmented and general), single-zeta
  basis, multiple-zeta basis, flexibility of a basis set, cost of a larger basis,
  split-valence basis, Pople split-valence basis sets. Reinforced: STO-NG,
  contracted Gaussian, primitive (11.2), Pople notation (11.2), Slater orbital
  exponents (7.3), electron configuration (8.6), Hamiltonian matrix element (7.2),
  Hamiltonian is Hermitian (3.2).
- **11.4** Polarization Functions: anisotropic density, functions of higher ℓ,
  Figure 11.4.1 (d added to p). Notation (h3): stars, single primitives, MP2 for
  6-311G\*\*, Krishnan et al. 1980, Table 11.4.1. Diffuse Functions: anions,
  radicals, complexes, excited states, diffuse functions (bold), n+1 functions.
  Notation (h3): + and ++, 6-311++G for H and C, Table 11.4.2, the trade-offs,
  effective core potentials. Summary. Concepts (new): polarization function,
  diffuse function, choosing a basis set (the trade-off), effective core
  potential. Reinforced: split-valence and Pople sets, contraction notation,
  orbital function (11.3), angular momentum quantum number (6.2), electronic
  Hamiltonian (9.1).

Glossary bolds the converter marks `{term:…}`: 11.1 *must* (emphasis, not a term)
and *spin-orbital*; 11.2 LCAO (a link to another book), STO, GTO, primitive and
contracted Gaussian functions; 11.3 contraction, "lose their original meaning as
atomic orbitals" (emphasis); 11.4 diffuse functions, polarization functions (in
the summary). The italic terms of 11.1 (Hartree–Fock limit, energy, orbitals,
wavefunction) and 11.3 (orbital function, Gaussian primitives, segmented and
general contractions, single zeta, multiple zeta, split-valence, flexibility) are
the concepts' introducing spans.

## Equation numbers

One number per display, as the converter's `n=` gives them. 11.1: (11.1.1) the
probability density unchanged by permutation, (11.1.2) the phase factors,
(11.1.3), (11.1.4) the helium product and its permutation, (11.1.5) the N-electron
determinant, (11.1.6) the MOs in the basis, (11.1.7) the energy; nine displays are
`\nonumber`. 11.2: (11.2.1) the Cartesian GTO, (11.2.2) STO-NG; Example 11.2.2's
S_G is unnumbered. 11.3: four displays, none numbered. 11.4: none. Every
`[ref:eq:…]` resolves (the borrowed labels `9-38`, `8.6.1`, `8.6.2`, `slater`,
`10.69`, `10.70`, `chap:mot:eq:stong` read as 11.1.1, 11.1.3, 11.1.4, 11.1.5,
11.1.6, 11.1.7, 11.2.2 in the draft). One plain-text citation misses: 11.1's
"Equation 8.6.4" (Chapter 8's number for the H₂ determinant printed just above it,
unnumbered here): a footnote.

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises** (`box-exercise`): none printed.
- **Example boxes without a solution**: 1, Example 11.2.2 (plot the 1s STO
  against three Gaussians with the printed α_j and C_j, try a better fit, comment
  on the fit): a question (Chapter 3's decision, 8.10.1's precedent), **1 unkeyed
  card**, available with an AI solution (1 sketch: the plot, with a computed
  refit and a sentence of comment).
- **Worked examples**: 1, Example 11.1.1 (CO; its answer is worked in its own
  text, no Solution part), kept whole; not an exercise.
- **Conceptual questions, problems, 11.E**: none printed; 11.E is empty, so
  nothing is routed to the sections (root rule 9).
- **Placement**: 11.2.2 tests 11.2 and stays there.
- **In all**: 1 card, 0 keyed, 1 unkeyed (0 explain or prove, 0 compute, 1
  sketch).
- **Concepts the book leaves untested**: everything but the STO-NG fit. **Proposed
  new: 6**: 11.1 one (restricted or unrestricted Hartree–Fock for a radical, and
  which CO orbital donates to iron and why); 11.2 two (Cartesian against spherical
  counts for f functions; the value at the nucleus of an STO-1G against its STO,
  the cusp); 11.3 two (orbital functions and primitives of H₂O in STO-3G, 3-21G and
  6-31G; the number of matrix elements when a basis is doubled); 11.4 one
  (orbital functions of CH₄ in 6-31G\*, 6-31+G\* and 6-311++G\*\*, and which to
  choose for F⁻).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

The point named is what the reader should see before reading anything. Rule 14 as
rewritten today: a figure starts from the book's and usually replaces it; motion
where the idea moves (none here: no figure has a clock, no arrow is kinematic); a
point seen at once; little effort to read; folds where the book draws one scene
several times. Signs of a function in the house's diverging sign colours (11.4.1's
red and green are not facts). Radial functions drawn in atomic units (a₀), the
book's own unit.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 11.2.1 (a + b) + 11.2.2 + 11.2.3 | 11.2 | SVGs (CC BY 4.0, Kaya): a Slater 1s with its cusp, e^{−αr}; a Gaussian 1s, e^{−αr²}; three Gaussians summed into "STO-3G 1s Basis function"; a scan (McQuarrie's, uncredited): φ₁ₛ(r) for ζ = 1.24 against STO-1G, -2G, -3G | **Fold, replace, still, 2D** (variation: N; the book draws one scene three times): H's 1s STO (ζ = 1.24, so it opens on 11.2.3's axes, 0–4 a₀, peak 0.78) as a solid ink curve, a choice of N (1, 2, 3, 6), the contraction in the wavefunction colour and its N weighted primitives dashed beneath it, the difference STO − STO-NG on a strip below. **Point: each Gaussian added climbs closer to the cusp and the tail, but the sum stays flat at r = 0 and dies too soon far out; the middle is where Gaussians fit.** Readout (11.2.2) with the live d_n and α_n, φ(0) of both functions, and the overlap ⟨STO|STO-NG⟩. Data: Hehre, Stewart and Pople (1969) coefficients, named in the caption (literature data allowed, Chapters 8–10). Eyebrow "Figure 11.2.1 + 11.2.2 + 11.2.3"; the Kaya SVGs ship in `originals`, the scan does not (scans not shipped). |
| Example 11.2.2 | 11.2 | a task: plot S₁ against Σ C_j e^{−α_j r²} with α = 0.1688, 0.6239, 3.425 and C = 0.4, 0.7, 1.3, then refit | **Extra Sim, offered** (rule 15; below): the reader's own fit. Not a required figure: the card's AI solution draws the plot. |
| 11.3.1 + 11.3.2 | 11.3 | PNGs (no credit): C₁ ζ₁ + C₂ ζ₂ as two circles; C₁ ζ₁ + C₂ ζ₂ + C₃ ζ₃ | **Fold, replace, still, 2D** (variation: the weights; one scene drawn twice): a choice of single, double or triple zeta for hydrogen's 1s, the fixed STOs of each ζ as thin curves of the radial density r²φ², and one slider (two for triple zeta) for their weights, the normalized sum drawn solid; ⟨r⟩ marked on the axis and a disc beneath sized by it, in place of the book's circles. **Point: one function has one size; two of different ζ let the weights make the orbital tighter or looser, which is the flexibility the variational method uses in a molecule.** Readout |ψ⟩ = c₁|φ(ζ₁)⟩ + c₂|φ(ζ₂)⟩ with the live weights and ⟨r⟩. Single zeta shows no slider (rule 24.6). Exponents: ours, bracketing ζ = 1.24 (proposed 0.8 and 1.6; 0.6, 1.2, 2.0), named in the notes (the Walsh precedent of 10.3). Eyebrow "Figure 11.3.1 + 11.3.2"; originals shipped under the page's licence. |
| 11.4.1 | 11.4 | PNG (CC BY-SA 3.0, Rifleman 82): p + d = a bent p, red and green lobes | **Replace, still, 2D** (variation: the weight; a cross-section in the plane of the bend says it all, 3D adds no view, rule 28.5): a choice of pair, s + p (hydrogen with \*\*) or p + d (carbon with \*), the filled contour of c₁φ₁ + c₂φ₂ in the sign colours, a slider for c₂ (−0.5 to 0.5, special at 0), the density's centroid marked as it leaves the nucleus. **Point: a little of a function of the next ℓ bends and shifts the density off the nucleus, toward a bond, a shape no amount of the valence function alone can make.** Readout φ = c₁φ₁ + c₂φ₂ with live weights and the centroid's offset. Opens on the book's p + d at the drawn mixing. Eyebrow "Figure 11.4.1"; original shipped under its own CC BY-SA 3.0 with credit (10.6's precedent). |
| Tables 11.2.1, 11.3.1, 11.3.2, 11.3.3, 11.4.1, 11.4.2; Example 11.2.2's α/C table | 11.2–11.4 | basis sets and their function counts; ζ values; contractions | Kept as `div.book-table`; the lost header rows and the wrong counts get footnotes (below); the example's table goes with the card. |

### What moves in this chapter

Nothing. No figure of the book has a time in it or a kinematic arrow, and the
ideas the brief names (the fit improving, contracted against primitive, density
shifting, the tail widening, the energy converging) are variations: sliders and
choices, no transport.

### 3D

None proposed. The polarization picture is the one candidate (a lobe bending, an
arrangement in space); its lesson is a lean in one plane, which the flat
cross-section shows without an orbit, and the chapter's other figures are graphs.

### New simulations proposed (root rule 15)

Each answers an idea the brief names and no book figure draws; only where
variation teaches (orchestrator precedent).

1. **Fit it yourself** (11.2, for Example 11.2.2): the STO of ζ = 1.24 in the
   example's radial normalization, the three Gaussians with the example's α_j,
   sliders for C₁, C₂, C₃ opening on 0.4, 0.7, 1.3, the overlap and the largest
   error read out live, a dashed special at the least-squares coefficients. The
   reader sees that the coefficients trade the middle against the cusp and that no
   setting reaches r = 0.
2. **Hydrogen's energy in a Gaussian basis** (11.3, contracted against primitive,
   the energy converging): the figure computes the H atom's variational energy
   itself (closed-form kinetic and nuclear-attraction integrals of s Gaussians, a
   small generalized eigenproblem): a choice of basis, STO-1G, -2G, -3G, -6G
   contracted (one orbital function, a 1 × 1 Hamiltonian) or the same primitives
   uncontracted (N × N), against −½ E_h. The reader sees each basis's energy above
   the exact one, the uncontracted set always a little lower than its contraction
   at N times the matrix size: what contraction trades.
3. **A diffuse function** (11.4): a valence s function and an added diffuse s
   Gaussian, sliders for its exponent and weight, the radial density r²φ² on a
   axis out to 15 a₀; the reader sees the tail reach outward as the exponent
   shrinks, where an anion's extra electron lives. No book figure; offered only if
   the orchestrator wants 11.4 to have one per kind of function.

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 11.1, (11.1.1)–(11.1.2), the double permutation, φ = 0 or π | printed as equations | qualifies as printed | **Cite, not built**: 8.5's `exchange-phase` derivation works it (repeated material built once and cited after); the displays stay printed with their corrections, and a link to 8.5's derivation follows the paragraph. |
| 11.1, the helium product to the antisymmetric combination | printed as equations | qualifies as printed | **Cite, not built**: 8.6 works it; kept as printed, linked. |
| 11.1, (11.1.6)–(11.1.7), the energy and the variational coefficients | stated, prose "as was described previously" | 0 moves printed | Stays: a statement, the working is 7.2's (`7.2/secular`). |
| 11.2, (ℓ+1)(ℓ+2)/2 Cartesian functions | prose | 2 moves, score 2 | Stays as printed. |
| 11.3, 2N × 2N, "about 3–4 times more matrix elements" | prose | 4 moves (N² → N(N+1)/2 by Hermiticity → N(2N+1) → ratio 2(2N+1)/(N+1) → 3 at N = 1, toward 4); facts imported 1 (Hermiticity, 3.2), unprinted run 4, joins 0: score 5 | **Build** (meets 29.1 at the bar): "Derivation · the cost of a double-zeta basis", after the paragraph; its end node states the ratio's range 3 to 4. Orchestrator may cut it as thin. |
| 11.3, the contraction counts (6s3p)→[2s1p], 5 functions | arithmetic | 0 | Stays. |
| 11.4, 6-311++G for H, (6s)→[4s] | arithmetic | 0 | Stays. |

One derivation to build, two cited.

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies.

- **11.1**: "to get the new wavefunction ψ(r₁, r₂)" is ψ(r₂, r₁); "(r_l)" is r₁;
  (11.1.2)'s second factor carries a stray conjugate (e^{iφ}ψ(r₁, r₂), not
  e^{iφ}ψ(r₁, r₂)\*); the unnumbered ψ(r₁, r₂) = e^{iφ}ψ(r₁, r₂) is ψ(r₂, r₁) =
  e^{iφ}ψ(r₁, r₂); "elections" are electrons; "Equation 8.6.4" is the H₂
  determinant just above (Chapter 8's number); the shorthand Det|χ₁ₛα(r₁)α
  χ₁ₛβ(r₂)β| writes each spin twice (χ already holds it) and calls H₂'s σ₁ₛ "1s";
  "multe-electrom atom"; (11.1.5)'s second column reads χ₂ in rows 2 and N where
  row 1's χ₁β fixes it as χ₁; (11.1.6) swaps its letters: the MOs ψ_j are sums of
  the basis functions φ_k, ψ_j = Σ_k c_jk φ_k, as the sentence before it says; the
  bra-ket energy's denominator ⟨ψ|ψ⟩ is ⟨Ψ|Ψ⟩; "The the optimum coefficients …
  by using" lacks its verb.
- **Example 11.1.1**: "ls" is 1s; the orbitals printed "1s, 2s, 3s, 4s" are 1σ,
  2σ, 3σ, 4σ (as the text then calls them); σ is symmetric under reflection in
  any plane containing the nuclei, not "the plane of the molecule"; "1π … and 2π"
  are the two degenerate 1π orbitals; "2_{sC}, 2_{pC}" are 2s_C and 2p_zC; the
  coefficients "C_kj" are the c_jk of (11.1.6); CO's 14 electrons fill **seven**
  orbitals (1σ²2σ²3σ²4σ²1π⁴5σ²), not "the five lowest". Huo, J. Chem. Phys. 43, 624
  (1965), checked.
- **11.2**: the cusp sentence's "r⁻¹ dependence … r⁻²" means an exponent linear
  in r against one in r²; Table 11.2.1's 6-31G\* (15) and 6-31+G\* (19) count six
  Cartesian d functions, against the note's five (14, 18), and its "18\*", "22\*"
  asterisks are unexplained; "G identifies the set a being"; 11.2.2's caption
  "where constructed"; Example 11.2.2's S₁ = √(4ζ₁e^{−ζ₁r}) is the radial
  function √(4ζ₁³) e^{−ζ₁r} = 2ζ₁^{3/2}e^{−ζ₁r} (the printed C_j, summing to 2.4,
  fit 2.76 e^{−1.24r}, not the printed form); bse.pnl.gov has moved to
  basissetexchange.org. Example 11.2.2 is printed with no 11.2.1 (label kept).
- **11.3**: the double-zeta sentence cites "Figure 11.3.2", the triple-zeta one;
  it is 11.3.1; in the STO-3G display the third line is φ_{STO-3G,B}, printed
  φ_{STO-3G,A}, the third coefficient is 0.44463454 (Hehre–Stewart–Pople),
  printed 0.44463545, and each primitive carries its normalization (2α/π)^{3/4},
  which the display drops; "Section 1.5.3.2" is the source course's, not this
  book's; "it will important"; "for for"; Table 11.3.2 lost its header: its three
  column groups are 3-21G, 6-31G and 6-311G (read from the H–He contractions), and
  "(l)2-4 (l)5-7 (l)8-10" is LaTeX `\cmidrule` residue; Table 11.3.3 is
  scrambled (headers as cells, 3-21G three times and 4-31G four, rows of unequal
  length): kept as printed with one footnote saying what it lists.
- **11.4**: "is is almost mandatory"; Table 11.4.1 lost its header (6-31G\*,
  6-311G\*\*) and keeps the `\cmidrule` residue; its H–He 6-311G\*\* row,
  (5s1p)→[3s1p], gives 6 orbital functions and 8 primitives, printed 4 and 6;
  Table 11.4.2 lost its header (6-311++G, 6-311++G\*\*); its Li–Ne 6-311++G\*\*
  row, (12s6p1d)→[5s4p1d], gives 22 functions and 35 primitives, printed 18 and
  31 (copied from 11.4.1); its Na–Ar contraction [7s6p1d] is [6s5p1d], whose
  count is the printed 26; the daggers are unexplained.
- **Intro**: none (the split italics are markup, not words).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 11.2.1 a, b; 11.2.2 | CC BY 4.0, Ümit Kaya via LibreTexts | shipped in `originals` with credit |
| 11.2.3 | none (a scan of McQuarrie's figure, with bleed-through from the facing page) | **not shipped** (scans not shipped; no licence); the figure's notes name the source |
| 11.3.1, 11.3.2 | none | shipped under the page's licence (Chapter 3's decision) |
| 11.4.1 | CC BY-SA 3.0, Rifleman 82 (Wikimedia) | shipped under its own licence with credit, on a BY-NC-SA page (10.6's decision, in reverse) |

## What is new to OmniStax here

- The first chapter whose subject is a method's apparatus (basis sets and their
  names) rather than a system: much of it is vocabulary and bookkeeping (6-31G\*,
  (6s3p)→[2s1p]), which concepts and tables carry better than figures.
- Tables whose header rows the source lost, reconstructed only in footnotes (the
  book's tables kept as printed).
- A figure that computes a variational energy itself from Gaussian integrals
  (proposed extra Sim 2).
- No new type: the chapter's quantities are wavefunctions, energies and lengths;
  exponents (α, ζ, d, C), coefficients, counts and basis-set names are untyped and
  in ink (7.2's and 7.3's precedent for α and ζ).

## The chapter's answer to root rule 23

A computer cannot solve the Schrödinger equation for a molecule; it solves it in a
box of functions the chemist chooses. The stunning picture is that box filling up:
one Gaussian that cannot make a cusp, three that nearly can, two sizes of orbital
that let a hydrogen shrink beside fluorine, a d function that bends a p toward a
bond, a broad function that catches an anion's electron, and the energy stepping
down toward a limit while the bill (the number of functions, the size of the
matrix) climbs. Every figure here is the same graph of a radial function or a
cross-section in one style, so the reader sees each addition as a change to the
one orbital they met in Chapter 6.

## Tool changes made for this chapter

- `lt2md.py` joins touching `<em>` (or `<i>`) elements into one run before
  converting: the landing page writes "a<em>b </em><em>i</em><em>nitio</em><em>,
  </em>", which came out "a\*b\* \*i\*\*nitio\*\*,\*" and drafted as bold. Chapters
  1–10 reconverted to a scratch folder: 110 of 111 source.md byte-identical; the
  one difference is 1.3's "\*kinetic\* \*energies\*" (`<em>kinetic </em><em>energies</em>`)
  now "\*kinetic energies\*", the same text in the same italics; 1.3 is built, so
  its committed source.md was left as it was.
- `md2html.py` drafts a table (or a figure) inside a list item: Example 11.2.2's
  α/C table sat in its first item and drafted as a line of pipes. Every draft of
  Chapters 1–10 compared through `--stdout` with the old script: identical (101
  pages).
