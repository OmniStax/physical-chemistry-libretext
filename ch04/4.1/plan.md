# Plan: 4.1 The Wavefunction Specifies the State of a System (LibreTexts 13406)

Source: `source.md` (`python3 tools/convert.py 4.1`); draft from `python3 tools/md2html.py 4.1`.
Status: built 2026-11-08 in the Chapter 4 job, without a review stop (config: the chapter in one go).

Two objectives, four numbered figures (4.1.1–4.1.4) and four plots in the exercise key, two numbered
equations (4.1.1, 4.1.2), two notes (Postulate I; the definition box), one keyed exercise. Licence
CC BY-NC-SA 4.0; authors Adams, Evans and Zwiebach (MIT OCW), from the Contributors list.

## Sub-concepts (page headers)

The book's one `<h2>` is kept; the opening, which has none, divides into three blocks of ours:

1. `state-of-a-system` **The state of a system**: the classical state (x, p), the uncertainty principle, Postulate I, ψ(r, t) and the state function. Introduces `classical-state`, `state-postulate`.
2. `born-interpretation` **The Born interpretation**: P(x) = |ψ|² (4.1.1), normalization (4.1.2), square-integrable and its definition box.
3. `localized-and-spread-states` **Localized and spread-out wavefunctions**: Figure 4.1.1, Ne^{ikx} and its flat density.
4. `ill-behaved-invalid-wavefunctions` **Ill-behaved (invalid) Wavefunctions** (book's): the three conditions, Figures 4.1.2–4.1.4, the first-derivative condition. Introduces `wavefunction-derivative-condition`.

## Figures

- `sim-density` · Figure 4.1.1 · wavefunction, probability-density, born-interpretation · variation by slider: the reader moves and narrows a peak and sees the density follow, then changes k and sees the ripple change while the density stays N² · arrows: none · still: no time in the idea · choice peak / oscillating; sliders x₀ and w (length) for the peak, k (wavenumber, detents 2 and 4) for the wave, each shown only with its state · headline: where the peak sits, or the period 2π/k and the flat density · ψ above, |ψ|² filled below · 2D. The original (MIT, "used with permission") is withheld by the orchestrator's decision; `withheld` says why.
- `sim-invalid` · Figure 4.1.2 + 4.1.3 + 4.1.4 · well-behaved-wavefunction, wavefunction-derivative-condition · variation by slider: a probe the reader drags along x shows every value and the slopes the curve has there, so the failing test is found at its place instead of read off four separate sketches · arrows: none · still · select of five curves (infinite, folds back, jumps, corner, acceptable), probe slider x (length, detent at 0, where every bad curve fails) · headline: whether the curve breaks a rule at the probe · graph alone; readout ψ(x₀) and the four-test checklist · 2D. All four images in `originals`, the right panel's "180º" kept as printed.

No photograph or unnumbered image; the key's four plots stay in the key.

## Exercises

Exercise 4.1.1 (keyed, four worked parts with their plots), kind `exercise`, `open`, at the end; corrections on part (d)'s interval and the key's Ψ in (c). Tests `well-behaved-wavefunction`, `square-integrable`. No AI exercises (config names none for 4.1).

## Derivations

|Ne^{ikx}|² = N²: score 1, kept as printed (config), the dropped N corrected by a note. Nothing else qualifies.

## Corrections

Footnotes: "the periods, k" (k is the wavenumber); the dropped N in |e^{ikx}|²; Exercise (d)'s [0, 2θ]; the key's Ψ in (c). Left as printed: "(e.g., well-behaved)", "so that the Born Interpretation to be applicable", "the first derivative of the wavefunction to exist", the key's "indefinite" (meaning clear).

## Wanted at chapter level

None.
