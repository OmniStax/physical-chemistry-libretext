# Plan: 23.2 Gibbs Energies and Phase Diagrams (LibreTexts 14498)

Source: `source.md`; draft from `python3 tools/md2html.py 23.2` (deleted). Status: built 2026-11-09 in the Chapter 23 job, without a review stop (config agreed). No author, CC BY-NC-SA 4.0. Tuckerman's Figures 13.4–13.7 keep his numbers; six numbered equations (23.2.1)–(23.2.6), one table.

## Sub-concepts (page headers)

1. `first-order-transitions` **First Order Transitions** (book's): the G̅(T) sketch (now Figure 13.5's Sim). Reinforces 21.3's `first-order-transition`, 22.7's `gibbs-temperature-curve`.
2. `second-order-transitions` **Second Order Transitions** (book's): Table 23.2.1, the Landau sketch. Introduces `second-order-transition`, `ehrenfest-classification`.
3. `gibbs-energy-of-benzene` **Gibbs energy across benzene's transitions** (ours, opening at "The Gibbs free energy is a particularly important function"): Figures 13.4, 13.6, 13.7, the derivation, (23.2.4)–(23.2.6). Introduces `liquid-entropy-exceeds-solid`, `phase-molar-volume-ordering`, `gibbs-pressure-curves`; uses `gibbs-first-derivatives`, `triple-point`, `supercritical-fluid`.
4. `conjugate-variables` **Conjugate Variables** (book's). Introduces `generalized-gibbs-differential`, `conjugate-variables`.

## Figures

- `sim-gibbs-temperature` · Figure 13.5 (folds the unnumbered G̅(T) sketch; both images in `originals`, orchestrator) · liquid-entropy-exceeds-solid, first-order-transition, gibbs-temperature-curve · variation by slider: the reader lowers the pressure and sees the gas line drop, the boiling point fall fast, the melting point stay, and below the triple point the liquid never lowest, which the two still panels cannot show · arrows: none · still · P slider (log, 0.01–10 bar, circles at 1 bar and the model's triple point) · headline: melting and boiling points at P (or the sublimation point) · graph alone: G̅ of solid, liquid, gas as lines of slope −S̄ read off Figure 13.5 (crossings 279 K at −18.2 kJ/mol and 354 K; slopes 118, 175, 300 J/(mol K)), the stable stretch heavy, the rest thin and dashed; gas moved by RT ln P, condensed phases by V̄ΔP with benzene's molar volumes 77.3 and 88.9 cm³/mol (from memory, unchecked); colours by `F.cat` (the phases are kinds, not types); readout (23.2.1), S̄(liquid) > S̄(solid) and the equal G̅ at the transition with live numbers · 2D. The book's sketch has the wrong alt text (a cat); the Sim replaces it, so no footnote.
- `fig-landau` · unnumbered "Schematic comparison…" · kept as printed (Table 23.2.1 drawn; nothing varies the table does not say); its second-order C_P labels corrected by footnote `c-landau` in the caption.
- `fig-13-4` · kept as printed (the text never discusses it).
- `fig-13-6`, `fig-13-7` · kept as printed (the 13.6 + 13.7 fold is not built, orchestrator).

Extra simulations: none.

## Exercises

One AI exercise (config), `a1` (Apply, choice): S continuous with a kink and C_P jumping is a second-order transition. Tests `ehrenfest-classification`, `second-order-transition`.

## Derivations

- `liquid-entropy` (printed block with words): "Derivation · the liquid has more entropy than the solid"; facts S = −∂G/∂T ((23.2.1), 22.4) and the slopes of Figure 13.5 ((23.2.3)); node 1 ends on (23.2.2), node 2 on S(liquid) > S(solid). Replaces "Now, recall that", (23.2.1)–(23.2.3) and the "(note that…) it follows that…" clause; the book's words are the derivation's reasons; "This is what we might expect…" stays in the text.
- (23.2.4)–(23.2.6): read off the graph, no chain; kept as printed.

## Corrections

`c-above-tc` ("this line now shows derivative discontinuity": above T_c the fluid curve is smooth, Figure 13.7(d)), `c-landau` (the sketch's second-order C_P labels). "Consider, first, the behavior of G vs. T … of benzene" links to Figure 13.5's Sim (no footnote). Typos kept as printed.

## Wanted at chapter level

None.
