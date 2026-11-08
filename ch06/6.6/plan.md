# Plan: 6.6 Orbital Angular Momentum and the p-Orbitals (LibreTexts 13431)

Source: `source.md` (`python3 tools/convert.py 6.6`); draft from `python3 tools/md2html.py 6.6`.
Status: built 2026-11-08 in the Chapter 6 job, without a review stop (config: the chapter in one go).

Two objectives, four numbered figures (all replaced, 6.6.2 and 6.6.4 folded), three numbered
equations (6.6.1–6.6.3, the two note aligns numbered as the converter gives them), two notes,
two pulled quotes, no exercise in the book. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's four `<h2>` headers are kept; the section opens on the first.

1. `classical-orbital-angular-momentum` **Classical Orbital Angular Momentum**: the circular orbit, Figure 6.6.1, |L| = mνr, the central force, torque. Introduces `torque`, `central-force-conserves-angular-momentum`; reinforces `orbital-angular-momentum`.
2. `quantum-angular-momentum` **Quantum Angular Momentum**: conserved means quantized (with the pulled quote), (6.6.1), s orbitals, n − 1 nodes, Figure 6.6.2 + 6.6.4, the p lobes. Introduces `conserved-means-quantized`, `s-orbital-zero-angular-momentum`, `hydrogen-node-count`, `p-orbital-shape`.
3. `ml-and-magnetic-fields` **The $m_l$ Quantum Number and Magnetic Fields**: L_z = m_lħ, the Zeeman effect, Figure 6.6.3, the note on m_l and p_x, p_y with the derivation. Introduces `zeeman-effect`.
4. `d-orbitals` **d-Orbitals (even higher angular momenta wavefunctions)**: the 3d shapes (cited Figure 6.6.4, folded), d_z², the spectroscopic-letters note, the 2l + 1 orientations. Introduces `d-orbital-shape`.

## Figures

- `sim-orbit` · Figure 6.6.1 · orbital-angular-momentum, central-force-conserves-angular-momentum, torque · motion and depth: the electron goes round and its velocity arrow turns while L stays put along the orbit's axis, which the still drawing can only assert · arrows: kinematic (v turns with the electron); L and r symbolic · moving: the electron circles, a turn in 3 s on Bohr's orbit, the real 1.5 × 10⁻¹⁶ s stated with the slowing factor (root 28.4) · sliders r 25–80 pm (length; circle at 52.9 pm, the Bohr radius) and v 1.0–3.5 × 10⁶ m/s (velocity; circle at 2.19) · headline: |L| in units of ħ, "at every point of the orbit" · graph none; legend v, r, L beneath; only L and z labelled (v and r move, hover names) · mathematical 3D (L is a direction out of the plane): azimuth free, elevation −85° to 85° so z stays upright, no buttons; the orbit tilted 25° to the dashed z axis as the book draws it. Opens on Bohr's orbit, |L| = 1.00 ħ (the AI exercise's numbers). The book's force on the electron is not drawn: one more moving arrow would crowd the point.
- `sim-orbitals` · Figure 6.6.2 + 6.6.4 · p-orbital-shape, d-orbital-shape, hydrogen-node-count · depth: the density fills space and its nodal planes and cones are seen by turning, which the book's two still renderings cannot show; one figure for the p and d sets · arrows: none · still: a stationary state has no time · select over the real orbitals of Table 6.2.2 (2p_x, 2p_y, 2p_z, 3p_x, five 3d), opening on 2p_z · no headline (the readout states ψ and the nodes) · graph none; legend ψ > 0, ψ < 0, node · mathematical 3D: 4000 points per orbital sampled from |ψ|² (radius by an inverse table of r²R², direction by rejection on the angular factor), coloured by the sign of ψ in two tones of the wavefunction hue (config), nodal planes, the cones of 3d_z² and the 3p sphere r = 6a₀ in faint ink; one scale (±20 a₀) for all, so n = 3 clouds stand larger; opening 40° above the xy-plane and 22° off the y axis, so the x lobes are seen side on (3p_x's sphere between them) and no p or d lobe points at the reader; azimuth free, elevation ±85°, no buttons; without WebGL the layers are painted still. Points through `F.space.points` (the point-cloud mark now in the library).
- `sim-zeeman` · Figure 6.6.3 · zeeman-effect, lz-quantization · variation by slider: one level fans into 2l + 1 as the field rises, which the book's GIF (two spin levels) does not show for l · arrows: none · still · choice l = 0, 1, 2; slider B 0–1 of the frame, untyped, circle at 0 (no field), opening at 0.6 · headline: how many levels the l level has split into · graph alone: energy against field, no scales (the book gives no formula, root 26.5), m_l labels fixed at the right · 2D. The original's caption is corrected through the figure row.

Extra simulations: none (config).

## Exercises

None printed. Two AI exercises (config): `ai1` Bohr's |L| = mvr = 1.00 ħ against Equation 6.6.1's 0 for 1s (multi, computed: 9.109e-31 × 2.19e6 × 52.9e-12 / 1.0546e-34 = 1.0007); `ai2` the nodal planes of 2p_y and 3d_xy from Table 6.2.2 (open). Both at the end.

## Derivations

- `px-py` · Derivations · the real 2p orbitals from the m_l = ±1 functions · printed block with slips, score 5 · replaces the note's last align (unnumbered); two nodes ending in p_x = xR(r) and p_y = yR(r). Follows the correct mathematics: ψ₂,₁,±₁ with r/√2 (checked normalized), p_x = (ψ₂,₁,₋₁ − ψ₂,₁,₊₁)/√2 (the book's order gives −p_x), x = r sin θ cos φ; node notes say what the book printed. Euler's formula (6.6.3) and (6.6.2) stay printed as facts, with correction markers.

## Corrections (footnotes)

mνr; "the 1s orbital in Figure 6.6.2"; the lobes cited as Figure 6.6.3; the r/2 normalization of (6.6.2); x = sin θ cos φ; m_l = ±1 as combinations (the factor i); Figure 6.6.4 is not contours in a plane; Figure 6.6.3's caption (through the row). Grammar slips are left as printed. The draft's stray Markdown asterisks (1*s*, s*, p, d, f*) are set as italics.

## Wanted at chapter level

- variables row: `{"sym": "L", "concept": "orbital-angular-momentum", "meaning": "the magnitude of the orbital angular momentum", "unit": "J·s", "section": "6.6"}` (the text writes |L| and "angular momentum (L)" with `\kL`).
- variables row: `{"sym": "psi", "concept": "hydrogen-wavefunctions", "meaning": "a hydrogen atom wavefunction, its quantum numbers or orbital name written as subscripts", "section": "6.6"}` (the note writes ψ₂,₁,₀, ψ_2p_z with `\kpsi`).
- form anchor: `circular-orbit-angular-momentum` → `anchor: "6.6-classical-orbital-angular-momentum"`.
