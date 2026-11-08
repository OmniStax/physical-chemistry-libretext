# Plan: 12.12 Normal Modes of Vibrations Describe how Molecules Vibrate (LibreTexts 433954)

Source: `source.md`; draft from `python3 tools/md2html.py 12.12`.
Status: built 2026-11-08 in the Chapter 12 job, without a review stop.

No objectives, two unnumbered images, two unnumbered tables, no displays. Vallance's text with a
worked ammonia example; no licence tag (the book's).

## Sub-concepts (page headers)

1. `normal-modes-of-vibration` **Normal modes of vibration** (book's): introduces `molecular-normal-modes`; the linear triatomic image.
2. `molecular-degrees-of-freedom-determining` **Molecular degrees of freedom – determining the number of normal vibrational modes** (book's): introduces `vibrational-mode-count` (3N − 6, 3N − 5).
3. `symmetry` **Symmetry** (book's): ammonia, its Γ tables, 2A₁ + 2E, IR and Raman activity.

## Figures

- `fig-linear-modes` · Figure (unnumbered, kept) · the book's still of a linear triatomic's modes: the text does not work them, and a moving copy would replay 12.10's figure (exploration). The image's wrong alt text is rewritten.
- `sim-ammonia-modes` · Figure (unnumbered; the ball-and-stick NH₃ 9864 in `originals`) · molecular-normal-modes, vibrational-mode-count · flow by animation and depth: the reader sees the six modes move in space, which A₁ modes keep the C₃ axis and which E modes break it, and that any blend of an E pair is also a mode; the still image shows only the equilibrium · arrows: none · moving: each mode oscillates (drawn frequency in proportion to the measured one) · choice mode (symmetric stretch, umbrella, asymmetric stretch, deformation); slider mix 0–180° (angle), shown for the E modes only, detents 0° and 90° (the two partners) · headline (the stage's): whether the C₃ axis is kept, and for an E mode the mix and its one frequency · readout Γ_vib = 2A₁ + 2E and the mode's species, small line with IR/Raman activity from the character table, ν̃ (NIST 3337, 950, 3444, 1627 cm⁻¹) and the exaggeration · physical 3D (the shape in space is the lesson): F.el atoms, the C₃ axis in the operation colour; orbit bounded above the plane of the hydrogens (pitch 0.05–1.45 rad) and ±60° about the axis (config), no spin, no zoom; a flat painted fallback without WebGL. Mode shapes from a valence force field (f_r 6.5 mdyn/Å, f_θ 0.65 mdyn·Å/rad²). The pink lone pair of the book's image is not drawn. Labels: C₃ only; atoms by hover. Conventions N, H.

Extra simulations: none (config).

## Exercises

One AI exercise (config): number of modes of benzene, CO₂, HCN (30, 4, 4), multi. Tests `vibrational-mode-count`.

## Derivations

None: 3N − 6 is two moves in prose (exploration).

## Footnotes (corrections)

"the next section" is 12.10, before; "The ?’s" is σ's; "number of transitions" is the number of modes; the first table's σᵥ unmoved atoms (2, not 1, so Γ_total is 2); the second table's Γ_vibrational under σᵥ (2, not 1).

## Wanted at chapter level

None.
