# Plan: 8.4 An Electron has an Intrinsic Spin Angular Momentum (LibreTexts 13442)

Source: `source.md`; draft from `python3 tools/md2html.py 8.4`.
Status: built 2026-11-08 in the Chapter 8 job, without a review stop (config: the chapter in one go).

Three objectives, three `<h2>` headers, 12 numbered displays (8.4.1–8.4.12), five figures (two printed
8.4.2), two notes, one exercise (unkeyed). CC BY-NC-SA 4.0, Theodore Zielinski.

## Sub-concepts (page headers)

1. `microwave-line` **A microwave line in hydrogen** (ours; the exploration's "A Line Where None Should Be" through the humanizer): the hypothetical experiment, Figure 8.4.1 + 8.4.4. Introduces `electron-spin-resonance`; uses `magnetic-field`.
2. `zeeman` **The Zeeman Effect: Breaking Degeneracies with Magnetic Fields** (book's): (8.4.1)–(8.4.3), Figure 8.4.2. Introduces `magnetic-field`, `magnetic-dipole-moment`, `magnetic-dipole-energy`, `zeeman-energy`, `bohr-magneton`; reinforces `zeeman-effect`; uses `magnetic-quantum-number`.
3. `stern-gerlach` **Electron Spin and the Stern-Gerlach Experiment** (book's): the postulate, Stern–Gerlach (the second 8.4.2, unnumbered here). Introduces `electron-spin`, `stern-gerlach-experiment`, `spin-magnetic-quantum-number`.
4. `spin-eigenstates` **Spin Eigenstates and Eigenvalues** (book's): Ŝ², Ŝ_z (8.4.4), the s = ½ derivation, α and β, Figure 8.4.3, (8.4.6), both notes, the g-factor derivation, Dirac. Introduces `spin-angular-momentum`, `spin-operators`, `spin-eigenvalues`, `spin-quantum-number`, `spin-one-half`, `spin-states`, `gyromagnetic-ratio`, `spin-gyromagnetic-ratio`, `electron-g-factor`; uses `spherical-harmonics`; reinforces `orthonormality`. (`gyromagnetic-ratio` is introduced on "the same ratio between magnetic moment and angular momentum": the book never names γ_e in words outside the replaced run.)

## Figures

- `sim-esr` · Figure 8.4.1 + 8.4.4 · electron-spin-resonance, spin-states, electron-g-factor · flow by animation and variation by slider: photons stream through the sample and stop getting through only at resonance, and the dip moves with the field, which the two still drawings leave the reader to imagine · arrows: kinematic (the photons move); the hν arrow on the level plot is symbolic · moving: the photon stream, 4 s a pass, seamless · sliders B_z 0–1.5 T (magnetic-field, shown in T and G), ν 1–40 GHz (frequency) · headline: whether the sample absorbs and where · locked view of the book's perspective (rule 28.2: generator, poles, sample, detector as shaded boxes, field lines between the poles), the detector's signal against ν below it, the α and β levels against B beside it · 2D locked view. Opens on 10⁴ G and 28 GHz. The resonance is drawn 0.4 GHz wide (a real line is far narrower) so a slider can find it. The H sample is tinted with `F.el('H')`.
- `sim-zeeman` · Figure 8.4.2 (the first) · zeeman-energy, bohr-magneton, magnetic-quantum-number · variation by slider: one line becomes three, spaced in proportion to B_z · arrows: symbolic (transitions) · still: no time in it · slider B_z 0–2 T · headline: the true spacing and the factor the diagram exaggerates it by (about 3 × 10⁴, rule 28.4) · the level diagram beside the Lyman α line on a true scale (shifts in pm from 121.567 nm) · 2D. Caption correction through the row (2s → 1s is 2p → 1s).
- `sim-sg` · the second Figure 8.4.2, unnumbered (eyebrow "Figure") · stern-gerlach-experiment, electron-spin, spin-magnetic-quantum-number · flow by animation and variation by choice: the screen fills dot by dot into two spots for silver and a smear for classical magnets, the contrast the book only states · arrows: kinematic (the atoms fly) · moving: 6 s a run, atoms from a fixed pseudo-random sequence · choice silver / classical magnets; slider dB_z/dz 0–1500 T/m (magnetic-field; the book gives no gradient, 1000 T/m is a typical one) · headline: what lands on the screen and why · locked view of the book's perspective (oven, slit, poles, screen) · 2D locked view. Silver atoms in flight wear `F.el('Ag')`. A row footnote says the book prints it as a second 8.4.2; the citation "split into two beams … (Figure 8.4.2)" links here, the other two to the Zeeman figure.
- `fig-8-4-3` · Figure 8.4.3 · photo kept: the warning note cites it ("like Figure 8.4.3 suggests"), and nothing in it varies. Caption correction by footnote (moment against spin; the licence).

## Exercises

Exercise 8.4.1 (unkeyed, compute): AI solution with the book's numbers, g = 2.0007 (2.0005 with today's μ_B;
2.0023 needs 28.02 GHz), tolerance 0.1%. One AI exercise (config): `ai1` the 2p Zeeman spacing at 1 T,
0.467 cm⁻¹.

## Derivations

- `spin-half` (block of equations with words; qualifies): *Derivation · the spin quantum number*, replacing the paragraph "Since m_l ranges …" and (8.4.5); facts the one observed transition, m_s's ladder by analogy with m_l (6.2), the one-step difference; result (8.4.5).
- `g-factor` (equations with words; qualifies): *Derivation · the electron's g-factor*, replacing the run from (8.4.11) to γ_s = 2.0023γ_e (Figure 8.4.4, which sat in it, is folded into `sim-esr`); five nodes: (8.4.12), the z components, hν/B = −γ_sħ, the numbers, γ_s/γ_e. Notes: S_{z,α} printed for S_{z,β}; 18.5464 is 2μ_B (the numbers give 18.55); 2.0023 against the 2.0007 the numbers give. The lead-in "Now let's apply … E_α and E_β" stays printed before it.
- (8.4.2), the Zeeman energy: three moves, below the bar. Stays.

## Corrections

Footnotes: "In 1920" (1922); "electrons of the same spin cancel" (opposite); (8.4.10)'s ⟨α|β⟩ twice; Figure 8.4.3's
caption against the text and its licence; through rows: Figure 8.4.2's "2s → 1s", the second 8.4.2. In the
derivation's notes: S_{z,α}, 18.5464, 2.0023. Left as printed (typing): "forth" (objective), "outlines above",
"a new model for the hydrogen atom." without a verb, "might by explained", "project", the unclosed parenthesis
(inside the replaced run), "2.0023, γ_e" (inside the run).

## Wanted at chapter level

None. (Config note: the config's "g = 2.0005" uses today's μ_B; with the book's own μ_B of (8.4.3), 9.2732, the
numbers give 2.0007, which the derivation and the solution state, naming both.)
