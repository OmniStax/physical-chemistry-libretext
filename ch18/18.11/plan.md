# Plan: 18.11 The Equipartition Principle (LibreTexts 57608)

Source: `source.md` (`python3 tools/convert.py 18.11`); draft from `python3 tools/md2html.py 18.11` (deleted once built).
Status: built 2026-11-08 in the Chapter 18 job, without a review stop (config: the chapter in one go).

No objectives or summary. Seven numbered displays (18.11.1)–(18.11.7), one figure, one unnumbered example. The
uncited References go to `notes`. Credits: Sterkewolf, Tembe's notes, Sinha. Figure 18.11.1 public domain.
Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `half-kt-per-term` **Half of kT per quadratic term** (ours, the exploration's): introduces `equipartition-theorem`.
2. `translations` **Translations** (book's): (18.11.1), derivation `trans-energy`. Introduces `average-translational-energy`.
3. `rotations` **Rotations** (book's): (18.11.2), derivation `rot-energy`, the classical energy. Introduces
   `average-rotational-energy`.
4. `vibrations` **Vibrations** (book's): (18.11.3), derivation `vib-energy` in place of (18.11.4)–(18.11.7). Introduces
   `average-vibrational-energy`.
5. `heat-capacity` **Heat Capacity** (book's): C_v, the equipartition contributions, Figure 18.11.1, the example.
   Introduces `frozen-out`, `equipartition-heat-capacity`, `diatomic-heat-capacity-steps`.

## Figures

- `sim-diatomic-heat-capacity` · Figure 18.11.1 · diatomic-heat-capacity-steps, frozen-out, equipartition-heat-capacity ·
  variation by slider and choice: real molecules over four decades of T, so the reader sees each step switch on near
  its own Θ and why 300 K sits on (5/2)R, which the book's schematic linear axis cannot show · arrows: none · still:
  no time in it · T slider (log, 1–10 000 K, opening 300 K, detent 300 K); select of molecule (Table 18.4.1's eleven
  plus I₂), opening on CO · headline: C̄_V at T and which motions are on · graph alone, the curve stacked in
  translation, rotation and vibration bands, Θ_rot and Θ_vib marked on the axis, a dashed line at 300 K · 2D. CO and I₂
  from the caption (2.8 K, 3103 K; 308 K), the rest Table 18.4.1. Rotation summed over all J with weight 2J + 1 (H₂'s
  nuclear-spin case is 18.10's figure; said in `notes`); I₂'s Θ_rot is not printed, below Cl₂'s 0.351 K, so its
  rotation is taken as fully classical and unmarked. Log axis argued: real Θ_rot and Θ_vib are 10²–10³ apart.

## Exercises

None printed. `ai1` (AI exercise, multi): water's C̄_V by equipartition, 3R = 24.9 with vibrations frozen, 6R = 49.9
J K⁻¹ mol⁻¹ with all three modes active.

## Derivations

The exploration proposed one record, "Derivations · the average energy per kind of motion". Built as three, one per
book block, so each replaces its own printed chain in place (rule 29.2) and no block is left pointing at a display
that sits in another:

- `trans-energy`: "Derivation · the average translational energy", five moves (one inserted: Λ ∝ β^{1/2}), result
  (3/2)k_BT; note corrects the printed −(3/Λ)∂Λ/∂β.
- `rot-energy`: "Derivation · the average rotational energy of a diatomic", five moves, result k_BT (q_rot = 1/σβB̃
  from 18.6).
- `vib-energy`: "Derivation · the average vibrational energy", four nodes: (18.11.4), (18.11.5), (18.11.6), (18.11.7).

No `drv` links to 18.1, 18.4 or 18.6: their derivation ids were not built when this was written.

## Corrections

Only the derivation note above. As printed: "derivative of the translational partition" (rotations, vibrations),
"½kBT", "with with", "there ar", "mo'⁻¹", the example's measured 30.1 and 29.5 J K⁻¹ mol⁻¹ (from memory nearer 28.8
and 28.9; not shown from the book's numbers, so not footnoted).

## Wanted at chapter level

- variables row: `{"section": "18.11", "sym": "C_V_bar", "meaning": "the molar heat capacity at constant volume of a diatomic gas", "unit": "J K⁻¹ mol⁻¹", "concept": "molar-heat-capacity"}`. The figure writes `\kCVbar`, which otherwise takes 18.8's meaning ("the molar rotational heat capacity at constant volume").
