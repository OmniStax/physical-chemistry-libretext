# Plan: 1.9 The Heisenberg Uncertainty Principle (LibreTexts 13389)

Source: `source.md` (`python3 tools/convert.py 1.9`); draft from `python3 tools/md2html.py 1.9`.
Status: built 2026-11-08 in the Chapter 1 job, without a review stop.

One objective, two numbered figures, five labelled equations (1.9.1–1.9.5),
two worked examples, two inline exercises (keyed), three notes, one YouTube
embed (dropped). Licence CC BY 4.0 at the source.

## Sub-concepts (page headers)

The opening has no header and gets one; the book's three `<h2>` headers are kept:

1. `limits` **A limit to precision** (ours): the opening two paragraphs. Introduces `heisenberg-uncertainty-principle`.
2. `probability` **Probability** (book's): Figure 1.9.1, the double-slit argument. Introduces `quantum-probability`.
3. `heisenberg` **Heisenberg’s Uncertainty Principle** (book's): Equations 1.9.1–1.9.5, Figure 1.9.2, two notes, Example 1.9.1.
4. `wave-packets` **Understanding the Uncertainty Principle through Wave Packets and the Slit Experiment** (book's): Example 1.9.2, the humour note. Introduces `wave-packet`.

## Figures

- `sim-electron-buildup` · Figure 1.9.1 · quantum-probability · flow by animation: electrons land one at a time and the counts grow into the predicted distribution, which the three still photographs only sample · arrows: kinematic (the electron in flight) · moving: the clock is the number of electrons · choice which slit (not watched / watched → single-slit pattern, the text's catch), v slider 1.5–4 × 10⁶ m/s · headline: count and what shows · scene + histogram beside · 2D. Convention e⁻.
- `sim-wave-packet` · Figure 1.9.2 · wave-packet, heisenberg-uncertainty-principle · variation: the Δx slider narrows the packet and widens its momentum distribution, Δp = ħ/2Δx, with seven component waves faint behind · arrows: none · still (the book's GIF moves, but the idea has no time in it) · Δx 25–600 pm, detent 150 pm (Example 1.9.1: Δv = 3.9 × 10⁵ m/s on load) · headline: Δx, Δp, Δv · packet above, momenta below · 2D.
- YouTube embed: dropped, named in `notes`.

Extra simulations: none proposed.

## Exercises

Exercise 1.9.1 (keyed, open: infinity), Exercise 1.9.2 (keyed: 1.15 × 10⁶, with corrections: Δx is ±5 × 10⁻¹¹ m and the unit is m/s). Kind `exercise`, at the end. No AI exercises.

## Derivations

Δp = h/λ, Δx = λ → ΔpΔx = h: four lines, score below four; stays as printed.

## Corrections

"The momentum of a photon … is simply its frequency"; "double-slit patterns … in Figure 1.9.2"; Exercise 1.9.2's ±5 × 10⁻¹⁰ m and km/s.

## Wanted at chapter level

None.
