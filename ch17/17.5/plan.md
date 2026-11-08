# Plan: 17.5 Pressure can be Expressed in Terms of the Canonical Partition Function (LibreTexts 13684)

Source: `source.md`; draft from `python3 tools/md2html.py 17.5` (deleted after the build).
Status: built 2026-11-08 in the Chapter 17 job, without a review stop. LaRue, Tuckerman, Franzen; CC BY-NC-SA 4.0.

Eight numbered equations (17.5.1)–(17.5.8), one figure, no exercises in the book.

## Sub-concepts (page headers)

1. `pressure-average` **Pressure as an average** (agent's): ⟨P⟩ = ΣP_iP_i and P_i = −(∂E_i/∂V)_N kept; the printed block from "So we can write" to ⟨P⟩ = kT∂ln Q/∂V replaced by its derivation. Introduces `state-pressure`, `pressure-from-q`.
2. `ideal-gas-law` **The ideal gas law** (agent's): Q = q^N/N! and q kept; the ln Q block to P = NkT/V replaced by its derivation; the Nk = nR paragraph kept. Introduces `translational-partition-function`, `ideal-gas-constant`.
3. `gas-compressed-by-a-piston` **Gas Compressed by a Piston** (book's): Figure 17.5.1, (17.5.1)–(17.5.5) as printed ((17.5.5) is the pressure derivation's result by Tuckerman's route; its undefined x, 𝓔(x), C_N keep the chapter's variables rows). Introduces `pressure-energy-volume`.
4. `ideal-gas-in-the-canonical-ensemble` **Ideal Gas in the Canonical Ensemble** (book's): (17.5.6) and the classical Q kept; "Note that" to (17.5.7) replaced by its derivation; the pressure lines and (17.5.8) kept. Introduces `classical-partition-function`, `ideal-gas-partition-function`.

## Figures

- `sim-piston-levels` · Figure 17.5.1 · pressure-energy-volume, state-pressure, pressure-from-q · variation by drag and slider: the box with the book's twelve particles (helium, `F.el('He')`) and its piston coming in along z, beside the levels of one atom's motion along z, E_n = n²h²/8mL², each with its Boltzmann population as a bar; dragging the piston in raises every level, and the gas's push N Σ P_n dE_n/dz is the arrow on the piston face; the still drawing cannot show the levels climbing · arrows: the push is a force vector (symbolic), the z arrow an axis · still: the drag is the motion, no clock · z (length, 0–0.8 nm, opens at 0.4: L = 0.8 nm) by drag or slider, T (temperature, 5–60 K, opens at 20 K); piston area 1 nm² · headline: ⟨P⟩ against NkT/V (4.72 against 4.14 MPa on load; the quantum box pushes harder than the classical value at low T and short L, and closes on it as either grows) · levels graph beside the scene, x the fraction 0–1, y 0–10 × 10⁻²² J fixed · 2D. Labels: the force value and L on the scene; levels by hover names. The book prints no numbers; the helium atom and the nanometre box are the figure's own model.

## Exercises

Two AI exercises (config): the pressure of one mole in 22.4 L at 273.15 K from kT ∂ln Q/∂V, 1.014 × 10⁵ Pa (checked); the equation of state from Q ∝ (V − Nb)^N/N!, P = NkT/(V − Nb) (open).

## Derivations

- `pressure-from-q` · "Derivation · the pressure from the partition function": printed block with words (7 lines), replaced; three nodes (the average, ∂Q/∂V, the division); the book's "temperature" for pressure falls with the replaced words.
- `ideal-gas-law` · "Derivation · the ideal gas law from the partition function": printed (5 lines), replaced; result P = NkT/V = nRT/V; note corrects the sign of the (3N/2) ln term (checked: N ln q gives +).
- `ideal-gas-energy` · "Derivation · the energy of an ideal gas": mostly hidden, score 6; results the ideal-gas Q and (17.5.7); the Gaussian integral cited to 13.7; ⟨E⟩ = −∂ln Q/∂β links to 17.3's derivation as `17.3/average-energy` (warning until 17.3 is built; the orchestrator should check the id 17.3's builder chose).
- (17.5.5) and (17.5.8) stay printed.

## Corrections

None in the kept text beyond the derivation note; "Avagadro's", "Q(N,V,T" without its parenthesis and (17.5.5)'s missing dx as printed.

## Wanted at chapter level

None.
