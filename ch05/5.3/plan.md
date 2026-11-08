# Plan: 5.3 The Harmonic Oscillator Approximates Molecular Vibrations (LibreTexts 13415)

Source: `source.md`; draft from `python3 tools/md2html.py 5.3` (deleted after the build).
Status: built 2026-11-08 in the Chapter 5 job, without a review stop.

One objective, three figures (5.3.1, 5.3.2, 5.3.4; the book has no 5.3.3), three numbered equations, two
notes, no exercise. Licence CC BY 4.0 at the source, shared CC BY-NC-SA 4.0; author Peter Kelly.

## Sub-concepts (page headers)

The page has no `<h2>`; three blocks of ours:

1. `opening` **The Taylor expansion of a potential**: (5.3.1), (5.3.2), Figure 5.3.1 + 5.3.4. Introduces `potential-taylor-expansion`.
2. `anharmonic-corrections` **Anharmonic corrections**: anharmonic oscillation, Figure 5.3.2, the anharmonic levels, D₀ and D_e, the Limitations note. Introduces `anharmonicity`, `anharmonic-energy-levels`, `well-depth`, `dissociation-energy`, `harmonic-oscillator-limitations`.
3. `morse-potential` **The Morse potential**: the Morse note, (5.3.3), its Hamiltonian. Introduces `morse-potential`.

## Figures

- `sim-morse` · Figure 5.3.1 + 5.3.4 · anharmonic-energy-levels, well-depth, dissociation-energy, morse-potential, harmonic-oscillator-limitations · flow by animation and variation by slider: HCl vibrates between the turning points of the chosen level while the Morse levels crowd toward dissociation beside the evenly spaced harmonic rungs, one scene the book draws twice · arrows: none · moving: the H atom on the exact Morse trajectory, three periods per loop, the period lengthening by 1/√(1 − E/Dₑ) · slider v 0–24 (untyped; 24 is the last level whose outer turning point stays in the 4 Å frame), opens on the GIF's v = 3 · headline: the gap to the next level against the harmonic 2991 cm⁻¹ · graph with the molecule below on the same r axis; Dₑ and D₀ brackets; two-entry legend above the frame · 2D. Constants: literature ν̃ₑ = 2990.946, ν̃ₑxₑ = 52.8186 cm⁻¹, rₑ = 1.27455 Å (Huber and Herzberg via NIST), orchestrator's decision; the Morse well they define is 42 343 cm⁻¹ deep, about 14 % deeper than HCl's measured well, and gives the book's two-term levels exactly. Conventions H, Cl.
- `sim-taylor` · Figure 5.3.2 · potential-taylor-expansion, anharmonicity · variation by choice: the truncated series against the Morse curve, with the stretch where it stays within 0.05 D shaded and stated, which the book's two still panels only show for fixed orders · arrows: none · still (no time) · choice harmonic / + cubic / + quartic / − quartic (the book's two panels), opens on + cubic · headline: the range of the fit · graph alone, in the well's own units u = β(x − x₀) and V/D · 2D.

## Exercises

The book sets none. AI exercises (config):
- `ai1`: the Morse force constant k = 2Dβ², evaluated for HCl's Morse well: 516 N/m (computed 516.3).
- `ai2`: HCl's 0→1 and 0→2 lines from ν̃ₑ = 2990.9, ν̃ₑxₑ = 52.8 cm⁻¹: 2885.3, 5665.0 cm⁻¹, and 105.6 cm⁻¹ = 2ν̃ₑxₑ below twice the first.

## Derivations

(5.3.1) → (5.3.2): score 4 but 3 moves; below the bar, kept as printed.

## Corrections

Footnotes: the levels said to come from "the harmonic oscillator model"; the Latin v_e; the Morse note's two zero conventions ("infinite r_e"); m for μ in the Morse Hamiltonian. Left as printed: "due in partially", "the the", "with terms up to n < 10 determined of Equation", the missing Figure 5.3.3, Figure 5.3.4's credit without a licence. The text's "red", "blue" and "green" curves name the colours of the book's Figure 5.3.2, which the reader can call up.

## Wanted at chapter level

None.
