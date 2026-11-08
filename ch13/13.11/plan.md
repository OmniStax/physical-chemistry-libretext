# Plan: 13.11 Time-Dependent Perturbation Theory (LibreTexts 13674)

Source: `source.md`; draft deleted. Built 2026-11-08, Chapter 13 job. Licence **BY-SA 4.0** (kept). Credit Wikipedia.
The "{\displaystyle |j\rangle }" residue is dropped (named in `notes`).

## Sub-concepts

1. `time-dependent-perturbations` **Time-dependent perturbations** (ours): Dirac's method, the amplitudes, the amplitude equations (derivation). Introduces `time-dependent-perturbation-theory`, `probability-amplitudes`, `amplitude-equations`.
2. `two-level-system` **Two-Level System** (book's, h3 Transition Probability kept): introduces `two-level-system`, `first-order-transition-amplitude`, `transition-probability`, `resonance-condition`.

## Figures

- `sim-two-level` · Figure (unnumbered; the ladder 79089 and the curve 79090 folded, both in `originals`) · two-level-system, transition-probability, resonance-condition · flow by animation and variation: the populations exchange in time and the line shape narrows (4π/t) and grows (t²), which the two stills show at one moment · arrows: ħω symbolic · moving: t 0–8 ps · sliders ω − ω₀ (frequency) −3…3 ps⁻¹, default 0.5, detents 0 and 1 (the book's curve); |H₂₁|/ħ 0.05–0.25 ps⁻¹, default 0.25 (the maximum keeps P₁₂ ≤ 1 at resonance over the run) · headline: P₁₂ now, and a warning past 0.5 · levels with population bars top left, P₁₂(t) top right (π/|ω − ω₀| marked), line shape below · 2D. First-order curve only (orchestrator: no Rabi curve).

## Exercises

`ai1` (AI, numeric multi): first maximum at π/|Δ| = 1.571 ps, P₁₂ = 0.0100 there, 0.0247 at resonance.

## Derivations

Two records where the exploration proposed one, because the setup between them (the two-level equations) stays printed in the text:
- `amplitude-equations` · "Derivation · the equations for the amplitudes" (score 7): TDSE → substitute H and the expansion → H₀|n⟩ = E_n|n⟩ (`drv` 4.4/stationary-state) → chain rule → the book's Σ(…)|n⟩ = 0 → ⟨k| and orthonormality → ∂c_n/∂t. The book's "one obtains" leads into it; "By resolving the identity…" becomes a reason.
- `transition-probability` · "Derivation · the transition probability of a two-level system" (score 7): c₂ equation (`drv` amplitude-equations) → (13.11.1) → H₁ = cos ωt V(r), Euler, drop the far-off-resonance term, integrate, take out half the phase → c₂ → P₁₂. Replaces the printed (13.11.1)…c₂ chain and its connecting sentences; placed after the h3's lead-in sentence. Notes: e^{iω₀t} under ∫dt′, c₂'s extra t and 2i, P₁₂'s factor 4/t².

## Footnotes

`c-perturbation` ("permutation"); `c-curve` (figure: the book's curve is P₁₂ against ω − ω₀, labelled t).

## Wanted at chapter level

None.
