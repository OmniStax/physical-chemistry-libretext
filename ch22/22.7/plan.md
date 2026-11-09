# Plan: 22.7 The Gibbs-Helmholtz Equation (LibreTexts 14494)

Source: `source.md`; draft from `python3 tools/md2html.py 22.7`. Status: built 2026-11-09. No author, CC BY-NC-SA 4.0. Three numbered equations (22.7.1–22.7.3), one note.

## Sub-concepts (page headers)

1. `pressure` **Gibbs energy and pressure** (ours; the opening before the first `<h2>`, its `<h3>`s Ideal gas and Solids kept): introduces `gibbs-ideal-gas-pressure`, `gibbs-solid-pressure`.
2. `gibbs-helmholtz` **The Gibbs-Helmholtz Expression** (book's): introduces `gibbs-helmholtz-equation`.
3. `gibbs-temperature` **Gibbs Energy as a Function of Temperature** (book's, its note on H(0) kept): introduces `gibbs-temperature-curve`; reinforces 21.2's `third-law`.

## Figures

None: `sim-gibbs-temperature` is not built (orchestrator, 2026-11-09: it would need benzene data from memory). "Fig. 22.7 in the book" kept as printed with a footnote (`c-fig-22-7`).

## Exercises

Two AI exercises (config):
- `a1` (Apply, multi): ΔḠ for compressing an ideal gas from 1 to 10 bar at 298.15 K, RT ln 10 = 5.71 kJ mol⁻¹, against liquid water with V̄ = 18.07 cm³ mol⁻¹, V̄ΔP = 16.3 J mol⁻¹. Tests `gibbs-ideal-gas-pressure`, `gibbs-solid-pressure`.
- `a2` (Apply, number): the Gibbs–Helmholtz equation with ΔH constant from 22.2's ΔG(298 K) = −91.21 kJ to 500 K: −33.6 kJ. Tests `gibbs-helmholtz-equation`.

## Derivations

- `gibbs-helmholtz` (printed block with words): "Derivation · the Gibbs–Helmholtz equation"; facts G = H − TS (22.5.3), (∂H/∂T)_P = C_P (19.9), (∂S/∂T)_P = C_P/T (21.1); node 1 ends on (22.7.1), node 2 on the Δ form. Replaces the G/T display, the derivative, (22.7.1) and the Δ display; the book's "Take the derivative under constant pressure of each side" is the derivative step's reason, and the paragraphs after (H as a first derivative of G/T, the Δ step) stay in the text.
- ΔG_molar = RT ln(P₂/P₁), the solid's VΔP, (22.7.2) and (22.7.3): under four moves or repeated, kept as printed.

## Wanted at chapter level

None (Δ_fus H, Δ_vap H, Δ_fus S, Δ_vap S and Δ_trs H, Δ_trs S are written on the H and S rows of 22.7 with subscripts).
