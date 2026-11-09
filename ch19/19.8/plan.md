# Plan: 19.8 Pressure-Volume Work (LibreTexts 13706)

Source: `source.md`; draft from `python3 tools/md2html.py 19.8` (deleted once built).
Status: built 2026-11-09 in the Chapter 19 job, without a review stop.

One header ("Enthalpy"); one equation image (CH431_Image71) lost at the source; no figures.

## Sub-concepts (page headers)

1. `enthalpy` **Enthalpy** (book's): introduces `enthalpy`, `enthalpy-differential`, `heat-at-constant-pressure`, `enthalpy-of-fusion`, `enthalpy-and-energy-of-condensed-matter`, `heat-capacity-path-function`; reinforces `ideal-gas-cp-cv`.

## Figures

None (nothing in the book to replace; the idea is a definition and a derivation).

## Exercises

`a1` (AI, compute): 1.00 mol monatomic ideal gas warmed 10.0 K at constant P: ΔU = 124.7 J, ΔH = 207.9 J (checked).

## Derivations

- `enthalpy-heat-constant-pressure` · Derivation · the heat at constant pressure is the enthalpy change · printed block, replaces "If we differentiate" through ΔH = q_P; "instead of ΔU = q_V" stays in the text after it. Nodes: dH = dU + P dV + V dP; dH = δq + V dP; ΔH = q_P. Facts: H ≡ U + PV, the first law (19.1), δw = −P dV (19.2), no other work, dP = 0.

## Corrections

`c-image71` (lost display, reconstructed Δ_fus H = q_P), `c-cv` (C-V for C_V). As printed: "define at new", "at long as", "U ~ H" (set as `\sim`).

## Wanted at chapter level

None.
