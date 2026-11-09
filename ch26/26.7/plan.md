# Plan: 26.7 The van 't Hoff Equation (LibreTexts 14528)

Source: `source.md`; draft from `python3 tools/md2html.py 26.7`. Status: built 2026-11-09 in the Chapter 26 job (config agreed, no review stop). CC BY-NC-SA 4.0. Three numbered equations (26.7.1–26.7.3), one numbered figure (two panels), one pull-quote; no objectives, summary or credits.

## Sub-concepts (page headers)

1. `k-and-temperature` **How K changes with temperature** (ours): Gibbs–Helmholtz to the van 't Hoff equation and its integrated form, repeated from 26.2 (reinforces `van-t-hoff-equation`, `integrated-van-t-hoff`; "integrating the above expression" links 26.2's `drv-van-t-hoff`); the pull-quote as an untitled note.
2. `van-t-hoff-plot` **The van 't Hoff plot** (ours): (26.7.1)–(26.7.3), Figure 26.7.1. Introduces `van-t-hoff-plot`.

## Figures

- `sim-van-t-hoff` · Figure 26.7.1 (book images withheld: used with Wikipedia's permission) · van-t-hoff-plot, integrated-van-t-hoff · variation by slider: the sign of ΔH° tips the line from rising to falling and ΔS° slides it, where the book's two still panels show one case each · arrows: none · still: a line in 1/T has no time in it · sliders ΔH° (energy, −100 to 100 kJ/mol, special at 0: the flat line), ΔS° (entropy, −250 to 250 J/(K mol)), T (temperature, 250–1000 K, detents 298, 400, 500, 1000) · headline: exothermic or endothermic, and K at 298 K and at T · graph alone: ln K against 1/T on fixed axes 0–4 × 10⁻³ K⁻¹ by −40 to 40, solid over 250–1000 K and dashed to the intercept ΔS°/R at 1/T = 0; hollow point at 298.15 K, filled at T, both dropped to the axis; opens on the NH₃ synthesis (ΔH° = −91.8 kJ/mol from 26.2, ΔS° = −197.5 J/(K mol) so ΔG°(298 K) = −32.9 kJ/mol as in 26.6) · 2D. Readout: (26.7.3) and its substitution at T, and the integrated form between 298.15 K and T. Labels: the intercept and the two temperatures; the slope by hover.

Extra simulations: none.

## Exercises

`a1` (AI, config): K(400 K) for the NH₃ synthesis from K(298.15 K) = 5.8 × 10⁵ and ΔH° = −91.8 kJ/mol: 47 (computed 46.6). Tests `integrated-van-t-hoff`, `van-t-hoff-plot`.

## Derivations

None built (config): the Gibbs–Helmholtz chain repeats 26.2's `van-t-hoff` (linked); (26.7.1) → (26.7.3) is two moves.

## Corrections

None.

## Wanted at chapter level

None.
