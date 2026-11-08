# Plan: 3.7 The Average Momentum of a Particle in a Box is Zero (LibreTexts 13397)

Source: `source.md`; draft from `python3 tools/md2html.py 3.7` (deleted once built).
Status: built 2026-11-08 in the Chapter 3 job, without a review stop.

Four objectives, two numbered figures, ten numbered equations (3.7.1–3.7.10), three worked examples (the example box printed "Exercise 3.7.2 · Particle in Box" kept in the text under its printed label, with a correction footnote saying it is the Example 3.7.2 the prose cites), six exercise boxes, two notes, two pulled quotes kept. Licence CC BY-NC-SA 4.0; authors Hanson, Harvey, Sweeney and Zielinski.

## Sub-concepts (page headers)

The book's six `<h2>` headers are kept; the opening paragraph gets one of ours.

1. `average-properties` **Average properties of a particle in a box** (ours): the opening. Uses `pib-wavefunctions`.
2. `classical-expectation-values` **Classical Expectation Values**: Example 3.7.1 with its two tables. Introduces `expectation-value`.
3. `quantum-expectation-values` **Quantum Expectation Values**: 3.7.3. Introduces `quantum-expectation-value`.
4. `average-energy-of-a-particle-in-a-box` **Average Energy …**: 3.7.4–3.7.6, Example 3.7.2 (derivation), zero-point energy, curvature and nodes. Introduces `average-energy`; reinforces `zero-point-energy`, `nodes-and-energy`.
5. `average-position-of-a-particle-in-a-box` **Average Position …**: 3.7.7, Figure 3.7.1, 3.7.8, the note. Introduces `pib-average-position`.
6. `average-momentum-of-a-particle-in-a-box` **Average Momentum …**: 3.7.9, Example 3.7.3 (derivation), Figure 3.7.2, the note. Introduces `pib-average-momentum`, `momentum-eigenfunctions`.
7. `orthogonality` **Orthogonality**: 3.7.10. Reinforces `orthogonality` (3.5's).

## Figures

- `sim-balance` · Figure 3.7.1 · pib-average-position, quantum-expectation-value · variation by choice: |ψₙ|² stands on a fulcrum at L/2 in every state, so the average is seen as a balance point, even for even n, where the density is zero at the center; the book's still shows n = 1 only · arrows: none · still: no time · choice n 1–5 (opens on the book's n = 1) · headline: the state, and whether the center is also the most probable place · two stacked graphs on one x axis: ψₙ (thin, top, the book's panel A) and |ψₙ|² filled (the book's panel B), most probable positions as hollow dots named on hover, a ring at the center node for even n · 2D. Original: the uncredited PNG, shipped under the page's licence (orchestrator), and `notes` says the book gives no credit.
- `sim-standing` · Figure 3.7.2 · momentum-eigenfunctions, pib-average-momentum · flow by animation: Re Ψₙ = ½ sin(kx − ωt) + ½ sin(kx + ωt); the two halves run right and left while their sum stands with fixed nodes, so two opposite momenta average to zero while p² does not · arrows: kinematic (each travelling wave's direction, riding on one of its crests) · moving: one loop is one period of the phase, 5 s, no hold (periodic) · choice n 1–4 (opens on 2, the book's GIF having several wavelengths and no numbers) · headline: the state, the two momenta ±ħk, the node count · graph alone, x 0–L with the box walls, y −1 to 1 in √(2/L); the two halves dashed in their referent colours, the sum solid in the wavefunction colour, a three-entry legend above; entity labels on the moving waves are left to hover names · 2D. Referents `wave-right`, `wave-left`. Original: the LucasVB GIF (public domain), width 732.

## Exercises

- Exercise 3.7.4 (unkeyed; AI solution: ⟨x⟩ = L/2 for every n), `open`.
- Exercise 3.7.5 (keyed, the book's answer; a correction under the card for the alternative solution's slips), `open`.
- Exercise 3.7.6 (unkeyed; AI solution: ψₙ = −(i/√(2L))e^{ikx} + (i/√(2L))e^{−ikx}, eigenvalues ±ħk), `open`.
- Exercises 3.7.2, 3.7.3 and 3.7.7 are set in Section 3.5 (built by another builder); `notes` and `exercise_notes` say so. No AI exercises here (config).

## Derivations

- `example-3-7-2` · *Example 3.7.2 ·* the average energy of a particle in a box: block, score 2. Replaces the solution from its first display to ⟨H⟩ = π²ħ²/2mL²; the closing paragraph stays. The book's "average value for the total energy" for ⟨KE⟩ falls away with the replaced words.
- `example-3-7-3` · *Example 3.7.3 ·* the average momentum of a particle in a box: block, score 4; inserts the skipped lines (sin θ cos θ = ½ sin 2θ, the antiderivative, cos 2nπ = 1). Replaces the solution's displays; "Note that this makes sense…" and the Interpretation stay.
- (3-35), Example 3.7.1: kept as printed (score 1 and 0).

## Corrections

Footnotes: Example 3.7.1's sum (76 for 67); the box printed "Exercise 3.7.2"; "most probable position" under Average Position; the limits and missing dx of 3.7.8; "most likely to be found at the center"; "(Exercise 3.7.4)" for 3.7.5; Exercise 3.7.5's alternative solution (in its card). Spelling slips ("descretized", "intergral") left as printed.

## Wanted at chapter level

- variables row (the readout of `sim-standing` writes `\kp`; 3.7 has no `p` row): `{"sym": "p", "type": "momentum", "meaning": "the momentum of a momentum eigenfunction, +ħk or −ħk", "unit": "kg·m/s", "section": "3.7"}`
