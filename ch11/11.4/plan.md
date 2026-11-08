# Plan: 11.4 Orbital Polarization and Diffuse Terms in Basis Sets (LibreTexts 13479)

Source: `source.md` (`python3 tools/convert.py 11.4`); draft from `python3 tools/md2html.py 11.4`.
Status: built 2026-11-08 in the Chapter 11 job, without a review stop (config agreed).

No objectives, no displays, one figure, two tables, a closing Summary (to `summary_html`), no exercises printed.
Licence CC BY-NC-SA 4.0; credit Wikipedia (tag); Figure 11.4.1 under its own CC BY-SA 3.0 (Rifleman 82).

## Sub-concepts (page headers)

The book's two `<h2>` headers are kept, each with its `<h3>` Notation.

1. `polarization-functions` **Polarization Functions**: anisotropic density, functions of higher ℓ, Figure 11.4.1, stars, Table 11.4.1. Introduces `polarization-function`; uses `split-valence-basis`, `angular-momentum-quantum-number`; reinforces `pople-split-valence-basis`, `contraction-notation`.
2. `diffuse-functions` **Diffuse Functions**: anions and loosely bound species, diffuse functions, the Sim, pluses, 6-311++G for H and C, Table 11.4.2, the trade-off, effective core potentials. Introduces `diffuse-function`, `basis-set-tradeoff`, `effective-core-potential`; reinforces `basis-set-flexibility`; uses `orbital-function`, `electronic-hamiltonian`.

## Figures

- `sim-polarization` · Figure 11.4.1 · polarization-function · variation by slider: a little of the next ℓ bends the valence function and moves the density's centre off the nucleus, which the book's single drawing shows at one mixing only · arrows: none · still: a stationary function · choice pair (p + d on carbon, opens; s + p on hydrogen), slider c₂ (untyped, −0.5 to 0.5, special at 0), c₁ = √(1 − c₂²) · headline: ⟨x⟩ and its direction · signed cross-section in the house's sign pair with a ramp legend, the nucleus in `F.el`, the centroid crossed and bracketed; the two weighted parts small on the right on the same scale · 2D: the lesson is a lean in one plane (rule 28.5). STO valence functions (C 2p ζ = 1.72, H 1s ζ = 1.24; Table 11.3.1); single-Gaussian polarization functions with the 6-31G* (d, 0.8) and 6-31G** (p, 1.1) exponents. Opens on c₂ = 0.30. Conventions C, H.
- `sim-diffuse` · Sim (orchestrator's pick) · diffuse-function · variation by slider: the reader shrinks a diffuse s Gaussian's exponent and sees the density reach far past hydrogen's 1s, with the share beyond 5 a₀ read out · arrows: none · still · sliders α (0.01–0.30, detent 0.036, hydrogen's 6-311++G exponent), c (0–1.5, special at 0, opens on 1) · headline: the share beyond 5 a₀ against the 1s alone · graph 4πr²ψ² on 0–15 a₀, the 1s alone dashed, the tail beyond 5 a₀ shaded · 2D.

## Exercises

None printed. AI exercise (config) `a1`: CH₄'s orbital functions in 6-31G* (22), 6-31+G* (26), 6-311++G** (50, using the corrected 22 for carbon), and the choice of basis for F⁻ in the solution. `place: end`.

## Derivations

None qualify (exploration: arithmetic only).

## Corrections

Footnotes: "is is"; Table 11.4.1's lost header (6-31G*, 6-311G**) and residue, its H–He 6-311G** counts (6 and 8, printed 4 and 6), its Li–Ne 6-31G* contraction (10s4p1d, 27 primitives; printed 10s5p1d and 30, missed by the exploration); Table 11.4.2's lost header (6-311++G, 6-311++G**), its Li–Ne 6-311++G** counts (22 and 35), its Na–Ar [6s5p1d]; the daggers unexplained (in the header notes).

## Wanted at chapter level

None.
