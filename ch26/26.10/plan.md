# Plan: 26.10 Real Gases Are Expressed in Terms of Partial Fugacities (LibreTexts 14531)

Source: `source.md`; draft from `python3 tools/md2html.py 26.10`. Status: built 2026-11-09 in the Chapter 26 job. CC BY-NC-SA 4.0. One numbered equation (26.10.1).

## Sub-concepts (page headers)

1. `fugacity-and-z` **Fugacity from the compression factor** (ours): μ with p and with f, then `drv-fugacity-coefficient-from-z` replacing the printed chain from dμ to ln γ = ∫(Z − 1)/p dp, then the closing paragraph ("Equation 26.10.1" links the derivation). Introduces `fugacity-coefficient-from-z`.

## Figures

None (22.8's `sim-fugacity-coefficient` covers fugacity; exploration).

## Exercises

`a1` (AI, config): Z = 1 + B′p with B′ = −5.0 × 10⁻³ bar⁻¹ at 50 bar: ln γ = −0.25, γ = 0.779, f = 38.9 bar.

## Derivations

- `fugacity-coefficient-from-z` · Derivation · the fugacity coefficient from the compression factor · printed · four nodes: (26.10.1) from dμ (23.3) at constant T; RT(∂ln f/∂p)_T = V from μ in f (22.8); ∂ln f/∂p = Z/p with Z = pV/RT (16.1); f = γp to ln γ with γ → 1 as p → 0. Notes correct the book's "dμ − Vdp − SdT", "constant volume", "multiplying by p/RT … = Z" and "Z/∂p − 1/∂p".

## Corrections

All four sit in the derivation's node notes (the printed lines are replaced).

## Wanted at chapter level

None.
