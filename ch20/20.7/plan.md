# Plan: 20.7 Thermodynamics Provides Insight into the Conversion of Heat into Work (LibreTexts 13721)

Source: `source.md`; draft from `python3 tools/md2html.py 20.7` (deleted once built).
Status: built 2026-11-09 in the Chapter 20 job, without a review stop.

No objectives or summary. Displays (20.7.1)–(20.7.3); four figures; the "Sadi Carnot" note. Credit: author tag LaRue.

## Sub-concepts (page headers)

1. `heat-into-work` **Heat into work** (ours): the opening. Introduces `dissipation`.
2. `carnot-cycle` **The Carnot Cycle** (book's): the sim, the four steps, the area; the Sadi Carnot note with Figure 20.7.2. Introduces `heat-engine`, `carnot-cycle`, `cycle-work-area`.
3. `efficiency` **Efficiency** (book's): η's definition, the derivation, the geyser. Introduces `engine-efficiency`, `carnot-efficiency`.
4. `heat-pumps` **Heat pumps** (book's). Introduces `heat-pump`.
5. `stirling-engine` **Stirling Engine** (book's): Figure 20.7.4, the four steps. Introduces `stirling-cycle`.

## Figures

- `sim-carnot-cycle` · Figure 20.7.1 + 20.7.3 · carnot-cycle, cycle-work-area, carnot-efficiency, heat-pump · flow by animation, variation by slider, a view the book lacks (the TS rectangle): the state point runs A → B → C → D on PV and TS together while the energy-flow arrows (20.7.3) pulse during the isotherms that carry them; widths ∝ |q_h|, |q_c|, |w| · arrows: kinematic (heat and work flowing) · moving: the cycle is a clock, 1.4 s a step, transport · sliders T_h 400–650 K (default 600, detents 400/600), T_c 300–T_h (default 420, ratio 0.70; detents 300/420; dashed special at T_c = T_h, no work), choice engine / heat pump (the path reversed, arrows flipped) · headline: where q_h goes, live · PV (V 0–8 L, P 0–60 bar), TS (S − S_A 0–10 J/K, T 0–700 K) and the flow diagram side by side · 2D. Book's corners: n = 1.25 mol, V_A 1.2 L, V_B 2.5 L, γ = 5/3, P_A 52 bar. Corner labels A–D drawn (four, fixed); the step's name in the PV corner; hover names on corners, state, areas, gas.
- `fig-20-7-2` · Figure 20.7.2 · kept (animated GIF in the Carnot note; CC BY-SA 2.5, Emoscopes).
- `fig-20-7-4` · Figure 20.7.4 · kept (the Stirling cycle reads from the still; the Carnot sim moves a cycle already).

Library: `Tc.range()` follows T_h; nothing missing from figlib.

## Exercises

None printed. AI exercise `ai1` (multi, Apply): Carnot 500 K / 300 K, q_h = 1000 J: η 0.40, w_cycle −400 J, q_c −600 J, heat pump work 400 J (computed).

## Derivations

- `carnot-efficiency` (printed block, two routes, built per config): "Derivations · the efficiency of a Carnot engine". Replaces "To get the work of the cycle" through (20.7.1) (the η definition display stays printed above). Nodes: q_h + q_c = −w_cycle (∮dU = 0); w_cycle = −R(T_h − T_c)ln(V_B/V_A) with the inserted line V_D/V_C = V_A/V_B (19.6's adiabats); η by work; q_c/q_h = −T_c/T_h (∮dS = 0); η = 1 + q_c/q_h = 1 − T_c/T_h (20.7.1).

## Corrections

`c-whot` (magnitudes), `c-24` (25%), `c-stirling-order` (steps 2 and 4 against Figure 20.7.4), `c-stirling-q` (C_VΔT). As printed: "the from of heat", "imaging", "if it is heat you after", "this gray area".

## Wanted at chapter level

None.
