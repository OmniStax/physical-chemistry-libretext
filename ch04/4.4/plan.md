# Plan: 4.4 The Time-Dependent Schrödinger Equation (LibreTexts 13409)

Source: `source.md` (`python3 tools/convert.py 4.4`); draft from `python3 tools/md2html.py 4.4`.
Status: built 2026-11-08 in the Chapter 4 job, without a review stop (config: the chapter in one go).

Two objectives, no book figure, nine numbered equations (4.4.1–4.4.9), two notes. Licence CC BY-NC-SA 4.0;
author Mark Tuckerman (page tag; the page prints no Contributors list).

## Sub-concepts (page headers)

1. `opening` **Two Schrödinger equations** (ours; the section's introduction, rule 21.3): the two flavors.
2. `time-dependent-wavefunctions` **Time-Dependent Wavefunctions** (book's): (4.4.1)–(4.4.4), note Postulate V. Reinforces the TISE and TDSE.
3. `stationary-states` **Stationary States** (book's): (4.4.5), (4.4.6), the derivation. Introduces `stationary-density-constant`.
4. `nonstationary-states` **Nonstationary States** (book's): (4.4.7)–(4.4.9), the derivation, the measurement paragraph, the Sim, note The Quantum Observer Effect. Introduces `nonstationary-state`, `observer-effect`; reinforces `wavefunction-collapse`.

## Figures

- `sim-measure` · Sim (the config's picked extra) · nonstationary-state, stationary-density-constant, wavefunction-collapse · flow by animation and variation by slider: the density of aψ₁ + bψ₂ sloshes with period h/(E₂ − E₁) and stops for good when the energy is measured, E₁ as often as |a|² says; 3.5.4 shows the sloshing but not the weight or the measurement · arrows: none · moving: three runs per loop (prepare, slosh 1.75 periods, measure, hold 0.75 period), outcomes from fixed draws 0.31, 0.74, 0.46 against |a|², so every time has one state; an electron in a 1.00 nm box · slider |a|² 0–1, specials at 0, ½ (Equation 4.4.8) and 1 · headline: the run, the period, then the energy measured · graph (density filled between the walls) with the two-level ladder beside it, the measured rung lit, the results so far under it · 2D.

No book figure or photograph.

## Exercises

None printed. Two AI exercises (config): `a1` the period h/(E₂ − E₁) = 3.67 fs of (ψ₁ + ψ₂)/√2 for an electron in a 1.0 nm box (number); `a2` which of three Ψ(x,t) are stationary (choice).

## Derivations

- `stationary-state` · *Derivations · a stationary state*: printed blocks, score 4. Replaces the two aligned blocks, "Similarly", "Hence … satisfies" and the density block; three nodes (the time side, the Hamiltonian side joined to it, the density). Notes: d/dt for ∂/∂t; ψₙ for ψₙ* in the density.
- `mixture-density` · *Derivation · a mixture's density changes in time*: stated, not worked, score 6. Stands after (4.4.9); ends in the cross term Re[ψ₁*ψ₂e^{−i(E₂−E₁)t/ħ}] that changes with t.

## Corrections

Footnote: "as in the previous example" (there is none). Notes on derivation nodes as above. Left as printed: the opening sentence's grammar.

## Wanted at chapter level

None.
