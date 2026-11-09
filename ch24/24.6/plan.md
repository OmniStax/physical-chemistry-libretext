# Plan: 24.6 Vapor Pressures of Volatile Binary Solutions (LibreTexts 14508)

Source: `source.md`; draft from `python3 tools/md2html.py 24.6` (deleted). Status: built 2026-11-08 in the Chapter 24 job. CC BY-NC-SA 4.0. Equations (24.6.1), (24.6.2); Figures 24.6.1–24.6.3; two examples printed "Example 24.6.1"; no exercise printed.

## Sub-concepts (page headers)

1. `henrys-law` **Henry's law** (ours, config's proposal): Henry's law, Figure 24.6.1 (folded into 24.5's Sim; the citation links there), Example 24.6.1 (CO₂). Reinforces `henrys-law`, `henrys-law-constant`; uses `raoults-law`, `ideal-solution`.
2. `azeotropes` **Azeotropes** (book's), with the book's `###` "Gibbs-Duhem and Henry's law" inside it: introduces `azeotrope`, `partially-miscible-boiling-diagram`, `gibbs-duhem-vapor-pressures`, `raoult-implies-henry`; uses `temperature-composition-diagram`, `lever-rule`, `distillation`, `gibbs-duhem-binary`, `ideal-gas-mixture-chemical-potential`. (24.6.1) stays printed (a recall of 24.3's gas-phase μ).
3. `margules-functions` **Margules Functions** (book's): introduces `margules-function`.

## Figures

- Figure 24.6.1 · folded into 24.5's `sim-henry-raoult` ("Figure 24.5.1 + 24.6.1").
- `sim-azeotrope` · Figure 24.6.2 · azeotrope, temperature-composition-diagram, margules-function · variation by slider: the book's two panels are one model at two signs of the deviation; the reader drags α through zero and sees the lens tilt until its curves touch at a maximum or a minimum · arrows: none · still: no time in it · sliders α (untyped, −2 to 2, opens −2, the book's left panel; detent 0) and x₁ (untyped, opens 0.20) · headline: the azeotrope's x₁ and T, or "no azeotrope" · graph alone, T 335–380 K, liquid curve solid and vapor curve dashed in temperature, a legend above, the tie-line at the reader's liquid, the azeotrope a dot labelled once · 2D. Model at 1 bar: P₁ = x₁P*₁e^{αx₂²}, P₂ = x₂P*₂e^{αx₁²} (the section's Margules form with one parameter), P* by 23.4's integrated Clausius–Clapeyron with illustrative liquids boiling at 350 and 365 K, ΔH_vap 36 kJ/mol (no real pair); azeotrope past |α| ≈ 0.5. Original caption corrected ("(right) Ta maximum" → "a minimum"), no marker. Readout: T, P₁ = x₁P*₁f_Mar with numbers, y₁ = P₁/P, and y₁ = x₁ at the azeotrope.
- `fig-24-6-3` · Figure 24.6.3 · kept (orchestrator: `sim-gap-meets-dome` not built).
- `fig-24-6-example` · the second example's unnumbered diagram · kept as a `figure` (eyebrow "Figure"): the example reads its regions and points; the text's second "Figure 24.6.3" links to it.

Extra simulations: none.

## Exercises

No printed exercise. One AI exercise (config): why distilling at the azeotropic composition separates nothing, and what distillate and residue tend to for a minimum-boiling azeotrope (explain).

## Derivations

The printed block (13 displays) is built as two records, so the book's parenthesis "(This is an alternative way of writing Gibbs-Duhem)" can stand between them:
- `gibbs-duhem-lnp`: "Derivation · the Gibbs–Duhem equation in vapor pressures"; nodes dμ₁, dμ₂ (from the gas-phase μ at constant T), then the binary Gibbs–Duhem (24.2) with dx₁ = −dx₂.
- `raoult-means-henry`: "Derivation · Raoult for one component means Henry for the other"; Raoult's slope 1/x₁, (24.6.2) as a numbered result, then integration to P₂ = Kx₂; fact with `drv` to `gibbs-duhem-lnp`. 24.5's last sentence links here.
No `drv` to 24.2's binary Gibbs–Duhem derivation (id unknown at build time; see Wanted). The P₂-from-P₁ Margules step stays prose; the CO₂ example stays (substitution).

## Corrections

Footnotes `c-henry-form` (P_B = k_H x_B), `c-kh-value` (1.67 × 10⁸ Pa, checked by computation), `c-fig-right` ("Figure 24.6.2; right" means 24.6.3; linked there), `c-fig-example` ("Figure 24.6.3" means the example's diagram; linked there), `c-second-example`, `c-margules-delta` (δx₂⁴). As printed: "55 mol", regions 1–5 against I–V, "(III, IV, and", "logarithmic impression", "is is", "as show".

## Wanted at chapter level

- Variables rows for `mu_1` and `mu_2` at 24.6 if the checker should see them in force here: `{"sym": "mu_1", "concept": "chemical-potential", "meaning": "the chemical potential of component 1", "section": "24.6"}`, the same for `mu_2` (the derivation writes `\kmuone`, `\kmutwo`; the check passed with the 24.1 rows).
- When 24.2 is built: `drv` on `gibbs-duhem-lnp`'s fact x₁dμ₁ + x₂dμ₂ = 0 to 24.2's binary Gibbs–Duhem derivation.
