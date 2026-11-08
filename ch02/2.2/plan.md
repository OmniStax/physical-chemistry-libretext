# Plan: 2.2 The Method of Separation of Variables (LibreTexts 13376)

Source: `source.md` (`python3 tools/convert.py 2.2`); draft from `python3 tools/md2html.py 2.2`.
Status: built 2026-11-08 in the Chapter 2 job, without a review stop (config: the chapter in one go).

One objective, no figures, nineteen numbered equations (2.2.1–2.2.19), two worked examples, two notes, no
book exercises. Licence CC BY-NC-SA 4.0. Author (page tags): Michael Fowler.

## Sub-concepts (page headers)

The book's one `<h2>` ("A Vibrating Spring Held Fixed Between Two Points") is kept as printed and not divided;
the opening before it gets a header of ours.

1. `opening` **Partial differential equations**: the wave equation (2.2.1), PDE and ODE, the method's note (2.2.2), the separability assumption. Introduces `partial-differential-equation`, `ordinary-differential-equation`, `separation-of-variables`.
2. `vibrating-string` **A Vibrating Spring Held Fixed Between Two Points** (book's): u = XT (2.2.3), the separation (derivation, 2.2.4–2.2.8), K = 0 and K > 0, the boundary conditions (2.2.9–2.2.13), the trivial-solution note, y'' − k²y = 0 (2.2.14–2.2.15) and its exponential solutions (derivation, 2.2.16–2.2.19), Examples 2.2.1 and 2.2.2. Introduces `separated-wave-equation`, `trivial-solution`, `exponential-solutions`.

## Figures

None: the page prints no figure, and the separation is an argument in equations, which the derivations draw. Extra simulations: none proposed.

## Exercises

None printed. Two AI exercises (config), at the end, kind `exercise`, `generated_by: "ai"`:
- `a1` (Apply, numeric): separate the wave equation with v = 2.0 m/s and K = −4.0 m⁻²; ω = 4.0 rad/s (checked: −Kv² = 16 s⁻²). Tests `separated-wave-equation`, `separation-of-variables`.
- `a2` (Analyze, open): K > 0 meets X(0) = X(L) = 0 only with A = B = 0. Tests `trivial-solution`, `separation-of-variables`.

## Derivations

- `separated` (score 2, printed block): replaces "Substitute Equation 2.2.3…" through (2.2.8); six nodes, results (2.2.4)–(2.2.8), the two ODEs as ends (*Derivations ·*). (2.2.1) and (2.2.3) stay in the text as the facts it starts from.
- `exponential` (score 1, printed block): replaces "Substituting Equation 2.2.15…" through (2.2.19); results (2.2.16)–(2.2.19). (2.2.14) and (2.2.15) stay in the text.
- `example-2-2-2` (score 2, one join): built. It carries more than a substitution: the trial solution is differentiated, the two initial conditions are two independent lines joined into a 2 × 2 system. Replaces the example's Solution; its two notes correct the sign slip and C₂/c₂.
- Example 2.2.1: kept as printed (score 0, the section's own chain with numbers).

## Corrections

Footnotes: the note's "three steps" lists two; header "Spring" for string; u(x,y,) for u(x,t); Example 2.2.2's title says boundary for initial conditions; the closing "When K > 0" for K < 0. In derivation notes: Example 2.2.2's "+ (re^{rt})" and C₂ for c₂.

## Wanted at chapter level

None.
