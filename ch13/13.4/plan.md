# Plan: 13.4 Unequal Spacings in Pure Rotational Spectra (LibreTexts 13667)

Source: `source.md`; draft from `python3 tools/md2html.py 13.4` (deleted once built).
Status: built 2026-11-08 in the Chapter 13 job, without a review stop.

Two figures (13.4.1 a public-domain GIF; 13.4.2 the level diagram), twelve numbered equations
(13.4.1)–(13.4.12), a Contributors URL (to `notes`). CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `non-rigid-rotor` **The non-rigid rotor** (ours): the elastic bond, the force balance, the derivation, B̃ and D̃, Figures 13.4.1–13.4.2. Introduces `non-rigid-rotor`, `centrifugal-force`, `nonrigid-rotor-energy-levels`, `centrifugal-distortion-constant`. "non-rigid rotator" links 5.9's `sim-stretch` (orchestrator).
2. `nonrigid-spectrum` **Rotational spectrum of a non-rigid rotor** (ours): the closing-up lines, HCl's B and D. Introduces `nonrigid-line-spacing`.

## Figures

- `fig-13-4-1` · Figure 13.4.1 · photo, kept (orchestrator: public domain, Cleonis; 5.9's stretching rotor is linked for the idea).
- `sim-nonrigid` · Figure 13.4.2 · nonrigid-rotor-energy-levels, centrifugal-distortion-constant, nonrigid-line-spacing · variation: the sag of the levels and the closing of the lines as D̃ is exaggerated (rule 28.4), with true numbers in the readout · arrows: symbolic (ΔJ = +1 absorptions) · still: no time · sliders D̃ drawn × (untyped, 1–25, default 20) and J (untyped, 0–9) · headline: the sag of level J + 1 and the shortfall of line J → J + 1, true values · levels above, spectrum below, rigid dashed · 2D. HCl B̃ = 10.4, D̃ = 0.0004 cm⁻¹ (the book's).

## Exercises

No book exercise. AI exercise `a1` (config): HCl's J = 20 level, B̃J(J + 1) = 4368, D̃J²(J + 1)² = 70.6 cm⁻¹, 1.62%, computed.

## Derivations

- `nonrigid-levels` "the levels of a non-rigid rotor": the book's printed block (13.4.1)–(13.4.12), six nodes ending at (13.4.10) with (13.4.2), (13.4.3), (13.4.5), (13.4.6), (13.4.8) on their results; (13.4.1), (13.4.4), (13.4.7), (13.4.9), (13.4.11), (13.4.12) are facts. Replaces the displays and the connecting phrases between them. Node note: (13.4.8)'s k^{2μ2}.

## Corrections

Only (13.4.8)'s exponent, in the derivation's note; "Hook's law" and "Let r_e is" kept as printed.

## Wanted at chapter level

None.
