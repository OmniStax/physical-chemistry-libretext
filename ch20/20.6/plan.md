# Plan: 20.6 We Must Always Devise a Reversible Process to Calculate Entropy Changes (LibreTexts 13720)

Source: `source.md`; draft from `python3 tools/md2html.py 20.6` (deleted once built).
Status: built 2026-11-09 in the Chapter 20 job, without a review stop.

No objectives or summary. Displays (20.6.1)–(20.6.5); two emphasis notes kept; two unnumbered images. Credit: author tag LaRue. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `entropy-and-the-universe` **Entropy and the universe** (ours): the opening and the Hawking note. Reinforces `second-law`.
2. `vacuum-expansion` **Vacuum Expansion** (book's): the two expansions, (20.6.1), (20.6.2), ΔS_total for both. Introduces `reversible-path-for-entropy` (the note), `entropy-of-surroundings`, `total-entropy-change`; reinforces `free-expansion`, `isothermal-entropy-change`.
3. `mixing-of-two-gases` **The Mixing of Two Gases** (book's): the sim, the derivation, the closing paragraph. Introduces `mole-fraction` (in the derivation), `entropy-of-mixing`.

## Figures

- `fig-vacuum-piston` · unnumbered image · kept as the book draws it (a set-up sketch, nothing varies); kind `figure`, eyebrow "Figure", a short caption of ours. "move against vacuum" links 20.1's `sim-free-expansion` (figref).
- `sim-mixing-entropy` · Sim (replaces the unnumbered "Two gases" image, kept as the original) · entropy-of-mixing, mole-fraction · variation by slider: the reader sets the composition and sees the curve's state point and the box before and after the wall goes, the still shows one composition and no numbers · arrows: none · still: a composition has no time in it · slider χ_A 0–1 (untyped), default 0.5, detents 0.25/0.5/0.75 · headline: ΔS̄ at the live χ_A · graph beside the two boxes, y 0–7 J K⁻¹ mol⁻¹ with R ln 2 dashed · 2D. Gases A and B are `F.cat(0)`, `F.cat(1)` with a legend; molecules unlabelled (48 of them).

Extra simulations: none.

## Exercises

None printed. AI exercise `ai1` (multi, Apply): 1 mol N₂ + 3 mol O₂, ΔS̄ = 4.675 J K⁻¹ mol⁻¹, ΔS = 18.70 J/K (computed).

## Derivations

- `mixing` (printed block with words, built per config): "Derivation · the entropy of mixing". Replaces "For gas A we can write" through (20.6.5); the book's sentence on proportional volumes stays above it. Five nodes: ΔS_A, ΔS_B, (20.6.3), (20.6.4), (20.6.5). Facts: ΔS = nR ln(V₂/V₁) (20.6.1–2, no `drv`: 20.3's record id was not known when built), amounts ∝ volumes, ΔS = ΔS_A + ΔS_B, χ_A, χ_B, the log rule, ΔS̄ = ΔS/n_tot, the many-gas generalization.

## Corrections

`c-hawking` (Richard Hawkins → Stephen Hawking). As printed: "an let", "the is no", "Claussius", q_irr (set as \kqirrev).

## Wanted at chapter level

None.
