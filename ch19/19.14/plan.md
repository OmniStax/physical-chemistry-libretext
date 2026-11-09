# Plan: 19.14 Enthalpy is a State Function (LibreTexts 359804)

Source: `source.md` (`python3 tools/convert.py 19.14`); draft from `python3 tools/md2html.py 19.14`.
Status: built 2026-11-08 in the Chapter 19 job, without a review stop (config agreed).

A four-line derivation with words between; no objectives, figures, numbered equations or credits.
The page has no licence tag; the book's CC BY-NC-SA 4.0 applies (named in `notes`).

## Sub-concepts (page headers)

1. `heat-at-constant-pressure` **Heat at constant pressure** (ours; the page has no header): the
   whole page. No new concept: reinforces `enthalpy`, `heat-at-constant-pressure` (19.8).

## Figures

None.

## Exercises

`a1` (AI, prove): ΔH − ΔU = nRΔT for an ideal gas at constant pressure. Tests `enthalpy`,
`ideal-gas-law`.

## Derivations

- `enthalpy-from-qp` (printed, 4 lines with words): *Derivation · enthalpy from the heat at
  constant pressure*, replacing the four displays and "Rearrange:", "We can define this term as
  enthalpy:" between the kept lead-in "Our expression for internal energy at constant pressure:"
  and "This is a new state function.". Three nodes: ΔU = q_P − PΔV (facts: the first law, 19.1;
  constant pressure; w = −PΔV, (19.2.2)); q_P = (U₂ + PV₂) − (U₁ + PV₁); q_P = H₂ − H₁ = ΔH (fact
  H ≡ U + PV, 19.8, with `drv` to 19.8's derivation, which reaches ΔH = q_P from the other side).

## Wanted at chapter level

None.
