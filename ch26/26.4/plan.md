# Plan: 26.4 Gibbs Energy of a Reaction vs. Extent of Reaction is a Minimum at Equilibrium (LibreTexts 14525)

Source: `source.md`; draft from `python3 tools/md2html.py 26.4`. Status: built 2026-11-08, no review stop. CC BY 4.0 at the source, shared BY-NC-SA; Figures 26.4.1 and 26.4.2 CC BY-NC 4.0, Ümit Kaya. Displays (26.4.1)–(26.4.2).

## Sub-concepts (page headers)

1. `minimum` **Down to the minimum** (agent's, config): dG for A ⇌ B, the slope, the fold, the Terminology note. Introduces `equilibrium-position`, `exergonic-endergonic`.
2. `ideal-gas-equilibrium` **Ideal Gas Equilibrium** (book's): the mixing term (26.4.1), Think about it, (26.4.2), K_eq. Introduces `mixing-places-minimum`; Δ_rG°, Δ_rG = Δ_rG° + RT ln(P_B/P_A), K are 26.1–26.2's (reinforced).

## Figures

- `sim-gibbs-extent` · Figure 26.4.1 + 26.4.2 · gibbs-minimum-equilibrium, equilibrium-position, mixing-places-minimum, exergonic-endergonic · variation by slider: the reader tilts the unmixed line with Δ_rG° and deepens the mixing dip with T and sees the minimum move but never reach an end, which the two still sketches only show for one case; the slope at a dragged point reads as Δ_rG with its sign · arrows: none · still: a curve that answers its sliders, no time in it · Δ_rG° slider −5 to +5 kJ/mol (energy, special at 0: half and half), T 200–600 K (temperature, detent 298), ξ 0.02–0.98 mol (amount, also dragged on the curve) · headline: ξ, Δ_rG at the point and the direction it runs · graph alone: G including mixing (energy, main), the unmixed line (muted, dashed) and the mixing term (faint ink), keyed in a legend; ξ_eq dotted down to the axis and labelled; the tangent at the point · 2D. Opens at Δ_rG° = −3 kJ/mol, 298 K (the book's 26.4.2 draws a tilted line; its text's zero-enthalpy case is the special). y fixed −8 to 6 kJ: T stops at 600 K so the 298 K dip fills the frame. Readout: Δ_rG = Δ_rG° + RT ln(P_B/P_A) with the numbers, K = e^{−Δ_rG°/RT}, ξ_eq = K/(1 + K). Originals both kept, credited.

Extra simulations: none.

## Exercises

`a1` (AI, config): A ⇌ B with Δ_rG° = +5.00 kJ/mol at 298.15 K: K = 0.133, ξ_eq = 0.117 mol (computed).

## Derivations

None built: the A ⇌ B chain repeats 26.1's and 26.2's derivations and stays printed.

## Footnotes

`c-section`: "Section 26.4" means 26.1; the link is an `xref` to `26.1-extent-of-reaction`. "the point where is the minimum" kept as printed.

## Wanted at chapter level

None.
