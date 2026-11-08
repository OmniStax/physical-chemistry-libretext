# Plan: 15.6 The Helium-Neon Laser (LibreTexts 13652)

Source: `source.md`; draft from `python3 tools/md2html.py 15.6`. Built 2026-11-08 in the Chapter 15 job, no review stop.
Credits Newman, Maleki, Neils; tagged CC BY, shared BY-NC-SA. No book headers: three blocks of the agent's.

## Sub-concepts (page headers)

1. `first-continuous-laser` **The first continuous laser**: history and uses. Introduces `helium-neon-laser`.
2. `helium-feeds-neon` **Helium feeds neon**: Figure 15.6.1, the two transfer reactions, Table 15.6.1. Introduces `excitation-transfer`.
3. `inside-the-tube` **Inside the tube**: the tube, ballast, getters, efficiency. Reinforces `laser-efficiency`.

## Figures

- `sim-hene` · Figure 15.6.1 · excitation-transfer, helium-neon-laser · flow by animation, variation by choice: the book's two ladders on its 10⁴ cm⁻¹ scale (He 2³S, 2¹S and Ne 5s read off the figure; 4s, 4p, 3p from the book's three wavelengths); one cycle of the mechanism: a discharge electron lifts helium, a collision hands the energy across (wavy), neon lases and the photon leaves toward the mirrors, the lower level drains to 3s · arrows: kinematic (the atoms, the photon); the line arrows symbolic · moving · choice: the line the mirrors are made for (632.8 / 1152.3 / 3391.3 nm) · headline: which level lases to which · graph none · 2D. He and Ne by `F.el`; the red line its real colour, the infrared ones in ink. Readout λ = hc/ΔE = 1/Δν̃, and A from Table 15.6.1 for 632.8 nm.
- Figure 15.6.2 · cites 15.5.2 (the same drawing), footnote.
- Figure 15.6.3 · not shipped (copyright, orchestrator); footnote at the citation with the source page.

## Exercises

a1 (AI): input power of a 5.0 mW He-Ne at 0.10 % (5.0 W). a2 (AI): photons per second in 1.0 mW at 632.8 nm (3.19 × 10¹⁵).

## Derivations

None qualify (0.1 % → 1 mW per W is a substitution).

## Corrections

"Bennet" (Bennett); figure 15.6.2 is 15.5.2 and stands below; Figure 15.6.3 not reproduced.

## Wanted at chapter level

- variables row `lambda` at 15.6 ("the wavelength of a lasing transition of neon") carries no type, so the readout's `\klambda` and the table header set λ in ink: set `"type": "wavelength"` on it.
