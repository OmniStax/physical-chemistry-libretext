# Plan: 23.1 A Phase Diagram Summarizes the Solid-Liquid-Gas Behavior of a Substance (LibreTexts 14497)

Source: `source.md`; draft from `python3 tools/md2html.py 23.1` (deleted). Status: built 2026-11-09 in the Chapter 23 job, without a review stop (config agreed). No author, CC BY-NC-SA 4.0. One numbered figure kept as printed (23.1.2), one replaced (23.1.1), one unnumbered image replaced; no numbered equations; two notes and the pull-quote as an untitled note.

## Sub-concepts (page headers)

1. `reading-a-diagram` **Reading a diagram** (ours; the untitled opening on maps and diagrams). Introduces nothing.
2. `thermodynamic-stability-and-fluctuations` **Thermodynamic Stability and Fluctuations** (book's): Figure 23.1.1. Introduces `equilibrium-stability-kinds`, `gibbs-fluctuations`, `critical-opalescence`; uses 13.2's `boltzmann-distribution`, 22.2's `gibbs-energy`.
3. `unary-phase-diagrams` **Unary Phase Diagrams** (book's, its `####` and `###` kept): Figure 23.1.2, the unary diagram, the emphasis note. Introduces `phase-diagram`, `equilibrium-vapor-pressure`, `boiling`, `coexistence-curves`, `triple-point`, `normal-and-standard-transition-points`, `phase-diagram-dimensionality`; reinforces 16.3's `critical-point`.
4. `number-of-moles` **Number of moles** (book's, `### Partial variables` kept, the note "The partial molar Gibbs free energy"). Introduces `phase-transfer-mole-balance`, `molar-quantity`, `partial-molar-quantity`, `chemical-potential-pure-substance`; reinforces 22.5's `chemical-potential`, `fundamental-equations-composition`.

## Figures

- `sim-gibbs-stability` · Figure 23.1.1 · equilibrium-stability-kinds, gibbs-fluctuations · motion: the caption's fluctuations happen in time; the reader watches A and B wobble in their wells, C wander along the flat stretch, D fall off its peak once nudged and E roll down at once, which the still sketch only describes · arrows: none · moving: an overdamped random walk on the book's G(X) curve (seeded, computed per cycle, so the transport scrubs it exactly), 6 s and a 1.2 s hold · choice start A–E (default B), slider fluctuation size 0.02–0.30 (energy, default 0.08) · headline: the kind of state the walk started in · graph alone, no ticks (the book's curve is schematic); the last 1.5 s of the path faint behind the point; readout dG/dX and d²G/dX² at the point · 2D.
- `fig-23-1-2` · Figure 23.1.2 · kept as printed: the three cylinders read at once, and the phase diagram gives the variation. Alt text rewritten (the converter's was generic).
- `sim-phase-diagram` · Sim (replaces the unnumbered "A typical unary diagram") · phase-diagram, coexistence-curves, triple-point, equilibrium-vapor-pressure, phase-diagram-dimensionality, normal-and-standard-transition-points · variation: the reader drags the state point and reads the phase, or the two phases and the curve's slope on a curve, or all three only at the triple point · arrows: none (the book's "T =>" is notation) · still: no time in a map · T slider 200–700 K and P slider (log, 10⁻⁵–10³ bar), both with dashed circles on the curves, the triple point and the critical temperature · headline: the phase at the point · graph alone, water on a log-P axis from the book's numbers (triple point 273.16 K and 4.58 Torr; sublimation 51 057 J/mol; vaporization 45 051 J/mol at the triple point falling 28 J/mol per K so the curve ends near the critical point; melting by the Clapeyron equation with 6006 J/mol); critical point 647 K (model 222.6 bar against 220.6 bar remembered) and the ice and water densities 0.9167 and 0.9998 g/cm³ are from memory, unchecked; the 1 bar line with the standard melting and boiling points as hover marks; CO₂ and Mars dropped (orchestrator); readout P against P_eq and T against T_m in a region, the Clapeyron slope dP/dT = ΔH/(TΔV) with live numbers on a curve · 2D. Labels: ice, liquid, vapor, triple point, critical point, 1 bar (six).

Extra simulations: none.

## Exercises

One AI exercise (config), `a1` (Analyze, choice): ice at 250 K warmed at 3 Torr sublimes and never melts, against 1 bar. Tests `triple-point`, `phase-diagram`, `coexistence-curves`.

## Derivations

None qualify: n_ice + n_water = n_total → dn_ice = −dn_water is two moves; G/n, ∂V/∂n₁ and dG with μ dn are definitions (22.5 owns the fundamental equation).

## Corrections

`c-15-torr` (about 24 Torr at 25 °C from the book's own numbers; 15 Torr is near 17 °C, checked by computation), `c-triple-melting` (273.16 K is the triple point; the normal melting point is 273.15 K), `c-dn1-dg` and `c-dn1-mu` (∂n₁ for ∂n_i; markers after the prose that follows each display). Typos ("role down hill", "cas A)", "(P<p_eq)>", "earths") kept as printed.

## Wanted at chapter level

None. (The `n_1`, `n_2`, `n_i`, `n`, `n^{ice}` symbols carry no macro and are written in plain LaTeX.)
