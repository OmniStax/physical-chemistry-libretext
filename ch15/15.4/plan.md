# Plan: 15.4 Population Inversion can be Achieved in a Three-Level System (LibreTexts 13650)

Source: `source.md`; draft from `python3 tools/md2html.py 15.4`. Built 2026-11-08 in the Chapter 15 job, no review stop.
Credits Newman, Maleki, Neils; CC BY-NC-SA 4.0. The uncited References block goes to `notes`.

## Sub-concepts (page headers)

1. `opening` **A third level** (agent's): why two levels fail, the third level. Introduces `three-level-laser`.
2. `lasing-in-three-level-systems` **Lasing in Three-Level Systems** (book's): Maiman's ruby laser, Figure 15.4.1. Introduces `ruby-laser`.
3. `transition-rates-in-three-level-systems` **Transition Rates in Three-level Systems** (book's, h3 A Ruby Laser, A Copper Vapor Laser): the nine events, the five, the four, the steady state. Introduces `three-level-transitions`, `metastable-level-inversion`, `gain-medium`, `three-level-steady-state`.
4. `four-level-lasers` **Four-Level Lasers** (book's). Introduces `four-level-laser`.

## Figures

- `fig-15-4-1` · Figure 15.4.1 · photo kept (the text points at it); the right panel only (427015), the left (upload.wikimedia.org) unreachable, named in `notes` (orchestrator).
- `sim-three-level` · Figure 15.4.2 + 15.4.3 + 15.4.4 · three-level-transitions, metastable-level-inversion, three-level-steady-state, four-level-laser · flow by animation, variation by slider and choice: the ladder with a population bar on each level, the kept transitions as arrows with atoms running along them as fast as they flow, the lasing transition dashed; N_i/N against time beside · arrows: kinematic (population flowing); the level ladder is notation · moving · choice ruby (2 → 1) / copper vapor (3 → 2) / four-level (the extra simulation the orchestrator picked); slider pump, log 0.1–10 (special pump = A₂₁ for ruby); slider A₂₁/A₃₂, log 0.1–10, copper only (special A₂₁ = A₃₂) · headline: the steady ratio of the lasing pair, inverted or not · graph beside · 2D. Rates 20 and 1 stand for fast and slow (the book gives none); before lasing, ρ_ν(ν₃₂)B₃₂ = 0. Readout: ruby N₂/N₁ = ρ_ν(ν₁₃)B₁₃/A₂₁; copper (15.4.3) with ρB₃₂ = 0; four-level N₃/N₂ = A₂₁/A₃₂. Three originals.

## Exercises

a1 (AI): N₃/N₂ from (15.4.3) with the decay constants swapped (2.33, 0.429). a2 (AI, choice): why the ruby needs a flash lamp and a four-level laser does not.

## Derivations

- "inversion between levels 3 and 2": the printed block (15.4.1)–(15.4.3) and the condition A₂₁ > A₃₂, 4 nodes; replaces "Thus, … (15.4.3)"; the N_total and equilibrium displays stay in the text. Node note on the book's "N₂(t)/dt".
- "the ruby's inversion": hidden, score 7; ends on N₂/N₁ = ρ_ν(ν₁₃)B₁₃/A₂₁ (orchestrator: stops before the threshold, which the correction note states).

## Corrections

"N₂ is greater than N₁" (only above the pump threshold); copper vapor pumped by discharge, not a flash lamp; Figure 15.4.4's "metastable" level 2 (figure row); "Only four-level lasers … continuous" (cw ruby, 1962); "described in section 15.6" (He-Ne only).

## Wanted at chapter level

None.
