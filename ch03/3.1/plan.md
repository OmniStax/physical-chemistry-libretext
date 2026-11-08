# Plan: 3.1 The Schrödinger Equation (LibreTexts 13391)

Source: `source.md` (`python3 tools/convert.py 3.1`); draft from `python3 tools/md2html.py 3.1`.
Status: built 2026-11-08 in the Chapter 3 job, without a review stop (config: the chapter in one go).

One objective, 22 numbered displays (3.1.1–3.1.22) and one unnumbered, two notes, no figures, no
exercises, no worked examples. Licence CC BY-NC-SA 4.0; author Michael Fowler (page tag).

## Sub-concepts (page headers)

1. `opening` **Schrödinger's equation** (agent's; the historical paragraph before the book's header).
   Uses `photon`, `de-broglie-wavelength`.
2. `a-better-approach` **The Schrödinger Equation: A Better Approach** (book's, kept whole, root rule 3):
   the 3D wave equation, the Laplacian, the wave in x and t, the matter wave (3.1.7), ħ, the
   free-particle equation (derivation), the postulate in 1D and 3D, the Laplacian note, separation
   and the time-independent equation, the time-dependence note. Introduces `wavefunction`,
   `reduced-plancks-constant`, `matter-plane-wave`, `free-particle-schrodinger-equation`,
   `time-dependent-schrodinger-equation`, `stationary-state`, `time-independent-schrodinger-equation`;
   reinforces `laplacian`.

The `\textcolor{red}` the book sets (3.1.21) in is dropped (colour belongs to the categories); `notes` says so.

## Figures

The book has none.

- `sim-free-wave` · Sim (the extra the orchestrator picked) · matter-plane-wave, wavefunction · flow by
  animation and variation by slider: Re Ψ and Im Ψ of exp[i(px − Et)/ħ] for an electron run right a
  quarter wavelength apart while |Ψ|² lies flat at 1, which the formula alone does not show · arrows:
  none · moving: the phase runs at E/p; one default period is 1.25 s on screen, the loop a whole number
  of periods · slider p (momentum) 0.5–2.5 × 10⁻²⁴ kg·m/s, default 1.0 (λ = 0.66 nm, E = 3.4 eV) ·
  headline: λ and the phase speed · graph alone, x 0–4 nm, y −1.5–1.5, a fixed λ bracket, legend above
  the frame (three kinds) · 2D. Readout: Ψ = exp[i(px − Et)/ħ], λ = h/p, E = p²/2m, the time scale.

## Exercises

None printed. AI exercises (config, two for the Schrödinger equations):
- `a1` (open, Apply): show that exp[i(px − Et)/ħ] satisfies the free-particle equation. Tests
  `free-particle-schrodinger-equation`, `matter-plane-wave`.
- `a2` (number, Apply): the frequency E/h of the phase factor of a 1.0 eV stationary state,
  2.42 × 10¹⁴ Hz (computed: 1.602e-19 / 6.626e-34 = 2.418e14). Tests `stationary-state`, `plancks-constant`.

## Derivations

- `free-particle` (printed block, score 2 within the kept text: E = p²/2m and the two derivative
  moves): replaces "The time derivative of Equation 3.1.7 gives" through (3.1.14); five nodes with
  results (3.1.9)–(3.1.12) and (3.1.14). (3.1.3)–(3.1.8) stay printed, since they introduce ħ and the
  matter wave in prose and the sim stands after them; (3.1.7) is the derivation's fact. Node 3's note
  corrects "differentiation of Equation 3.1.9 with respect to x".
- `time-independent` (hidden, score 5): stands after (3.1.21), which stays printed; six moves
  (substitute, differentiate, simplify, move the exponential through the bracket, cancel, swap).
- `real-imaginary` (printed block in the note, score 2): replaces the note's two displays and the
  words between them; results (3.1.22) and the unnumbered cosine form.

## Corrections

Footnotes: "Equation 2.1.1" (2.1.2); "Equation 3.1.5 represents" (3.1.7); "Equation 3.1.3 … can be
generalized" (3.1.14); "Equation 3.1.6 is then expanded" (3.1.16); ∇f(x,y,x); "wavefunction dependent
(or time-independent) wavefuction". Typos ("construction", "Corresponding", "kinetics", "direclty",
"from from") left as printed: they do not change the meaning.

## Wanted at chapter level

None.
