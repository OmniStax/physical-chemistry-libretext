# Plan: 16.7 Van der Waals Constants in Terms of Molecular Parameters (LibreTexts 13662)

Source: `source.md`; draft from `python3 tools/md2html.py 16.7` (deleted after the build).
Status: built 2026-11-08 in the Chapter 16 job, without a review stop.

Four equations (16.7.1)–(16.7.4), no figures, no exercises in the book. Untagged; CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `virial-form` **The van der Waals equation as a virial series** (agent's): the printed series block, replaced by its derivation. Introduces `vdw-virial-expansion`.
2. `molecular-parameters` **a and b from molecular parameters** (agent's): (16.7.1)–(16.7.4), the closing paragraph, the derivation, the Sim. Introduces `hard-sphere-attractive-potential`, `dispersion-coefficient`, `molecular-vdw-constants`.

## Figures

- `sim-b2-potential` · Sim (offered in the exploration, picked by the orchestrator) · molecular-vdw-constants, hard-sphere-attractive-potential, vdw-second-virial · variation by slider: the integrand [e^{−u/kT} − 1]r² of (16.7.1) with argon's σ = 3.40 Å, its hard-core block and attractive tail shaded, over B₂(T) from the full integral beside the corrected series (16.7.2); the reader sees the core give b, the tail give −a/RT, and the series fail as T falls · arrows: none · still · sliders T 300–2000 K (temperature, opens at 600 K), C₆ 0–2 × 10⁻⁷⁷ J m⁶ (untyped), detent at argon's 1.02 (4εσ⁶ from 16.6) · headline: C₆/k_BTσ⁶ and the two B₂ values · two graphs stacked, legend on the lower · 2D.

## Exercises

One AI exercise (config): argon's b from σ = 3.40 Å, 49.6 cm³/mol, four times the volume of the spheres (checked).

## Derivations

- `vdw-virial` · "Derivation · the second virial coefficient of a van der Waals gas": printed (4 lines), replaces the block; ends at B_{2V} = b − a/RT.
- `molecular-vdw` · "Derivation · the van der Waals constants from molecular parameters": hidden, score 11; results (16.7.2) and (16.7.4), with (16.7.3) as the book's definitions (corrected); notes correct the factor of 3 (checked numerically: at C₆/kTσ⁶ = 0.05 the integral gives 1.9888 against 1.9897 corrected and 2.0595 printed). R = N₀k_B carried as a fact with no provenance (orchestrator, 16.1).

## Corrections

`c-factor-3` ((16.7.2)); `c-factor-9` ((16.7.3)); `c-force` ("a force proportional to r⁻⁶": the potential falls as r⁻⁶, the force as r⁻⁷). "Viral", "to simplifying variables" as printed.

## Wanted at chapter level

None.
