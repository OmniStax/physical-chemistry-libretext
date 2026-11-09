# Plan: 26.8 Equilibrium Constants in Terms of Partition Functions (LibreTexts 14529)

Source: `source.md`; draft from `python3 tools/md2html.py 26.8`. Status: built 2026-11-09 in the Chapter 26 job. CC BY-SA 4.0 (Wikibooks). Six numbered equations (26.8.1)–(26.8.6), one worked example with a table, one hot-linked Wikimedia image (not shipped, named in `notes`).

## Sub-concepts (page headers)

1. `partition-functions-to-k` **From partition functions to K** (config): (26.8.1), K_c, μ_i as ∂A/∂N_i (26.8.2, kept printed with a correction marker), then `drv-mu-q-over-n` (replaces the printed chain to (26.8.3)), the λ paragraph with (∂A/∂λ) = 0 ("at equilibrium" links 26.4's `sim-gibbs-extent`, the same minimum), then `drv-kc-partition` (replaces the printed chain to (26.8.4)). Introduces `chemical-potential-q-over-n`, `helmholtz-minimum-equilibrium`, `equilibrium-constant-partition-functions`.
2. `example-26-8-1` **The equilibrium constant of H₂ + Cl₂ ⇌ 2HCl** (ours): Example 26.8.1 kept whole, as printed, with the correction footnote. Introduces `k-from-molecular-data`.

## Figures

None. The Wikimedia "Helmholtz Energy with respect to Equilibrium Shifts" image is not mirrored and is dropped with its caption line. `sim-k-from-q` not built (orchestrator).

## Exercises

`a1` (AI, config): the electronic factor e^{184.5 kJ/mol/RT} at 650 K (6.7 × 10¹⁴) and 1000 K (4.3 × 10⁹), and why K_c falls. Tests `k-from-molecular-data`, `equilibrium-constant-partition-functions`.

## Derivations

- `mu-q-over-n` · Derivation · the chemical potential from the molecular partition function · printed · facts: A = −k_BT ln Q (23.5, `drv` 23.5/mu-from-q), Q = q^N/N! (17.2), (26.8.2), Stirling (17.2); result (26.8.3); note on N_{j≠1}.
- `kc-partition` · Derivation · the equilibrium constant from partition functions · printed · facts: dA (22.1), fixed T and V, dN_j = ν_j dλ, (∂A/∂λ) = 0, (26.8.3) (`drv` mu-q-over-n), the sign convention for ν_j, ρ = N/V, K_c; result (26.8.4); note on the i/j subscript mix.

## Corrections

`c-n-j-not-i` (26.8.2's N_{j≠1}); `c-example` (Example 26.8.1: Θ_ν swapped, molecular masses wrong, product mis-combined; corrected K_c = 7.2 × 10¹⁵, computed). "Sterling's" and "then then" as printed.

## Wanted at chapter level

None.
