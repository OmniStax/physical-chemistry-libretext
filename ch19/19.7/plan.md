# Plan: 19.7 Work and Heat Have a Simple Molecular Interpretation (LibreTexts 13705)

Source: `source.md`; draft from `python3 tools/md2html.py 19.7` (deleted once built).
Status: built 2026-11-09 in the Chapter 19 job, without a review stop.

One header; all four equation images (CH431_Image67–70) lost at the source.

## Sub-concepts (page headers)

1. `statistical-interpretation` **Statistical interpretation** (book's): the prose, the derivation built on the restored lines, the bold closing sentence, the Sim. Introduces `molecular-heat-and-work`. "section 17-5" is an `xref` to 17.5.

## Figures

- `sim-heat-and-work-levels` · Sim · molecular-heat-and-work · variation by choice and slider: the same ΔU added as heat or as work, and the ladder shows which of levels and populations moved, which no single drawing shows · arrows: none · still: the slider is the change, no clock · choice added as heat / work; slider ΔU 0–6 × 10⁻²³ J (opens at 3) · headline: what moved, with the new T or L · ladder graph (P_i 0–0.5 against E_i 0–40 × 10⁻²³ J) beside the box (L bracket) · 2D. One helium atom (`F.el('He')`) in a 1.0 nm one-dimensional box at 5 K (18.1's levels; the figure's own model, the book prints no numbers). Start state dashed and hollow, new state solid; heat bars in the heat colour, compressed levels in the work colour; readout ΔU = ΣE_iΔP_i + ΣP_iΔE_i, one sum zero. Labels: legend, U; levels by hover names.

## Exercises

`a1` (AI, explain): heating at constant volume against a reversible adiabatic compression, which of levels and probabilities change.

## Derivations

- `molecular-heat-and-work` · Derivation · heat and work on the molecular scale · lost at the source (score 8), built on the restored lines (orchestrator): dU = ΣE_i dP_i + ΣP_i dE_i; δw_rev = ΣP_i dE_i; P = −ΣP_i(∂E_i/∂V)_N; P = kT(∂ln Q/∂V)_{N,T} (`drv` 17.5/pressure-from-q). Each node's `note` says it restores a lost image. Written over system states i, as 17.5 does.

## Corrections

`c-image67-68`, `c-image69-70` (lost displays, pointing at the derivation), `c-factor` (the missing factor is β).

## Wanted at chapter level

- variables row: `{"sym": "E_i", "type": "energy", "meaning": "the energy of state i of the system, E_i(N, V)", "unit": "J", "section": "19.7"}` (the derivation and the Sim write `\kEi`).
