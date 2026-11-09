# Plan: 19.6 The Temperature of a Gas Decreases in a Reversible Adiabatic Expansion (LibreTexts 13704)

Source: `source.md`; draft from `python3 tools/md2html.py 19.6` (deleted once built).
Status: built 2026-11-09 in the Chapter 19 job, without a review stop.

No header, no numbered equations, no figures; two equation images (CH431_Image65, Image66) lost at the source.

## Sub-concepts (page headers)

1. `path-b-c-small-steps` **Path B + C in small steps** (ours): the continuation of 19.5's paths, the two lost displays restored as reconstructed lines with correction footnotes, "see Eq 19.23". Uses `isotherm-and-adiabat-paths`, `ideal-gas-energy-heat-capacity`. "the three processes A and B+C" links 19.5's `sim-isotherm-adiabat` (`figref`, `#19.5-sim-isotherm-adiabat`; the only check error until 19.5 is built).
2. `cooling-reversible-adiabat` **Cooling along a reversible adiabat** (ours): the derivation and the closing sentence. Introduces `ideal-gas-cp-cv`, `heat-capacity-ratio`, `reversible-adiabatic-cooling`.

## Figures

None; the section cites 19.5's paths figure.

## Exercises

`a1` (AI, compute): reversible adiabatic doubling from 298 K, argon 187.7 K, N₂ 225.8 K (checked).

## Derivations

- `adiabat-temperature-volume` · Derivation · temperature and volume along a reversible adiabat · printed block (13 lines with words), replaces "Assuming an ideal gas…" through the last display. Four nodes: dŪ = −P dV̄; T₂/T₁ = (V̄₁/V̄₂)^(R/C̄_V); R/C̄_V = γ − 1; the join. Facts: the first law (19.1), δq = 0 (19.5), δw = −P dV̄ (19.2), C̄_V (18.4), U(T) only (19.5), the ideal gas law (16.1), R = C̄_P − C̄_V, γ = C̄_P/C̄_V.
- The lost first half: restored in the text as reconstructed displays with footnotes (orchestrator), not a derivation.

## Corrections

`c-image65`, `c-image66` (lost displays, reconstructed), `c-eq-19-23` (no such equation; P₁V₁^(5/3) = P₂V₂^(5/3)). As printed: "inversely related", "equation.:".

## Wanted at chapter level

None.
