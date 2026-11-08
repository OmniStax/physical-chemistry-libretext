# Plan: 8.6 Antisymmetric Wavefunctions can be Represented by Slater Determinants (LibreTexts 13444)

Source: `source.md`; draft from `python3 tools/md2html.py 8.6` (deleted).
Status: built 2026-11-08 in the Chapter 8 job, without a review stop (config: the chapter in one go).

Three objectives, two numbered figures, thirteen numbered displays, three worked examples, four exercise
boxes (8.6.1, 8.6.2, 8.6.3A, 8.6.3B), one untitled note. Licence CC BY-NC-SA 4.0; credit Theodore Zielinski (tag).

## Sub-concepts (page headers)

1. `opening` **An antisymmetric helium atom** (ours, the exploration's proposal): the ground configuration, (8.6.1)–(8.6.4), Example 8.6.1 (its Solution a derivation). Introduces `electron-configuration`, `two-electron-spin-functions`.
2. `excited-state` **The first excited state of helium** (ours; the opening has no book header, so it divides here): the four microstates, the fold of Figures 8.6.1 + 8.6.2, the four functions (8.6.6). Introduces `microstate`.
3. `determinantal-wavefunctions` **Determinantal Wavefunctions** (book's): the note, (8.6.7)–(8.6.9), Example 8.6.2, the physical picture, (8.6.10)–(8.6.13), the two bullets, the Sim, ψ₁–ψ₄ as determinants, Example 8.6.3. Introduces `slater-determinant`, `determinant-antisymmetry`, `slater-determinant-combinations`.

## Figures

- `sim-helium-configurations` · Figure 8.6.1 + 8.6.2 · electron-configuration, microstate, slater-determinant-combinations · standardisation and variation by choice: the book draws one stick diagram five times; here the chosen state is drawn large, the four functions of (8.6.6) beside it written with the diagrams of their determinants, and the readout gives that state's determinant · arrows: symbolic (spins) · still: a choice redraws · choice state (1s², 1–4), opens on the ground state (the book's 8.6.1) · headline: whether the state is a function by itself or only in combination · 2D. Originals shipped (no credit; widths 223, 1139).
- `sim-determinant` · Sim (the orchestrator's pick, "the determinant at work") · slater-determinant, determinant-antisymmetry · variation by slider and choice: three electrons in a box with spins α, β, α, a 3 × 3 determinant of φ₁α, φ₁β and φ₂α (or φ₁α again) evaluated live; exchanging electrons 1 and 2 slides two rows past each other and the value changes sign · arrows: symbolic (spins) · still · sliders x₁, x₂, x₃ (length, 0–1 L; x₃ has a special at x₁, two α electrons at one point), choices order (ψ(1,2,3), ψ(2,1,3)) and column 3 (φ₂α, φ₁α) · headline: the value and why it is zero where it is · the determinant's value as a bar beside the matrix · 2D. Convention: e⁻.

## Exercises

All `place: end`. Keyed (`source`): 8.6.1 (choice, symmetric), 8.6.2 (open; corrections under the card: the five-term expansion, and the unanswered closing question), 8.6.3A (open; correction: the bracket notation, and the other three determinants answer too). Unkeyed: 8.6.3B, AI answer written as a critique (config). No AI exercises.

## Derivations

- `example-8-6-1` · Example 8.6.1's Solution · block, qualifies · built as *Example 8.6.1 ·*, one node ending at (8.6.5) and ψ(r₂, r₁) = −ψ(r₁, r₂); the reminder bullets dropped (the conclusion is the last line).
- Example 8.6.2 (one move), Example 8.6.3 (a count), ψ₁–ψ₄ as determinants (score 1): stay.

## Corrections

(8.6.6): ψ₃ needs ½ and ψ₄ 1/√2 (the exploration names ψ₄; ψ₃ is wrong too); "(Equation 8.6.3C2 and 8.6.3C4)" for ψ₁ and ψ₃ (the citation is printed as Equation 8.6.6); ψ₁ = φ_a − φ_c and ψ₃ = φ_a + φ_c without 1/√2; Exercise 8.6.2's expansion and its open question; Exercise 8.6.3A's notation. "Equations 8.6.10A–8.6.10D" resolves to 8.6.10–8.6.13 and "Equation 8.6.10A–8.6.10D" to 8.6.10–8.6.12, which covers the two determinants it combines: no correction. Typos left as printed ("As spected", "for of", "antisymemtric", "multi-electrom", "igure 8.6.2", "spin-obital", "determinate", the objectives).

## Wanted at chapter level

None.
