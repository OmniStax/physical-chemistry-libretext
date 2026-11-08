# Plan: 14.5 Chemical Shifts Depend upon the Chemical Environment of the Nucleus (LibreTexts 13640)

Source: `source.md`; draft from `python3 tools/md2html.py 14.5` (deleted once built).
Status: built 2026-11-08 in the Chapter 14 job, without a review stop (config: the chapter in one go).
Stefan Franzen's notes, CC BY-SA 4.0 at the source. No objectives, no summary; five displays, all
unnumbered (`\nonumber` at the source), kept untagged.

## Sub-concepts (page headers)

The book's three `<h2>` headers are kept as printed; the opening, which has none, is its own block.

1. `shifts-and-structure` **Shifts and structure** (ours, the exploration's "Why Shifts Matter" renamed
   after the humanizer to name the thing): why the chemical shift matters. Uses `chemical-shift`.
2. `the-chemical-shift` **The Chemical Shift** (book's): B_loc = (1 − σ)B, ν_L, the δ-scale, σ as three
   contributions; `sim-larmor` after "The resonance frequency of the standard is ν₀". Introduces
   `shielding-constant`, `larmor-frequency`, `chemical-shift`, `shielding-contributions`; reinforces 14.4's
   `local-magnetic-field`; uses `nuclear-shielding`, `magnetic-field`, `gyromagnetic-ratio`.
3. `the-local-contribution` **The Local Contribution** (book's): σ_d and σ_p, the Lamb formula, the Bohr
   radius. Introduces `diamagnetic-shielding`, `paramagnetic-shielding`, `lamb-formula`; uses
   `probability-density`, `bohr-radius`.
4. `the-molecular-contribution` **The Molecular Contribution** (book's): χ and the 1/r³ field. Introduces
   `magnetic-susceptibility`, `molecular-shielding-contribution`.

## Figures

- `sim-larmor` · Sim · larmor-frequency, chemical-shift, shielding-constant, local-magnetic-field · flow by
  animation and variation by slider: two moments, a standard and a shielded proton, precess about B; raising
  B speeds both and widens the proton's lead in hertz while its δ in ppm stays put, which no still drawing
  can show · arrows: kinematic (the precessing moments; the B arrow is symbolic) · moving: the moments
  precess on a steady clock, drawn 6.7 × 10⁸ times slower, the proton's lead over the standard drawn 10⁵
  times larger (rule 28.4; the readout says both) · sliders B (T, 1.4–17.6, detents 2.4, 7.2, 12: the book's
  100, 300 and 500 MHz with γ/2π = 41.67 MHz/T from its 100 MHz ≈ 2.4 T), σ (ppm, 18–30, untyped) · headline:
  the proton's lead in Hz and its δ · beneath the scene a flat strip: δ (0–12 ppm) above ν − ν₀ (0–9000 Hz),
  both right to left as spectra run, the proton marked on each and joined, with the 12 ppm window in hertz
  shaded (the book's 1200 Hz at 100 MHz) · mathematical 3D, free yaw, pitch within ±75° of the horizontal
  (end on the cones collapse), no spin, no zoom, flat fallback. The standard's σ₀ = 30 ppm is the drawing's
  choice (the book names no standard on this page), so σ = 26.04 ppm opens on δ = 3.96 ppm, H_a of
  14.6's trichloroethane. The exploration's flat α/β ladder is left out: its two gaps differ by ppm and could
  not be told apart, and the strip carries the point. Readout: B_loc = (1 − σ)B, ν_L = γB_loc/2π and
  δ = (ν − ν₀)/ν₀ × 10⁶ with live numbers, and the two drawing factors.

Extra simulations: none.

## Exercises

AI (config, two): `a1` B_loc, ν_L and the shift from the bare frequency for B = 7.05 T, σ = 2.50 × 10⁻⁵,
γ/2π = 41.7 MHz/T (−176 μT, 293.9777 MHz, 7350 Hz; computed); `a2` δ of a proton 1200 Hz above the standard
at 400 MHz (3.00 ppm) and its offset at 600 MHz (1800 Hz). `place: end`.

## Derivations

None qualify (exploration): B_loc = (1 − σ)B is one move; σ_d ∝ 1/a₀ is under four moves.

## Corrections

`c-promise` (the opening promises the tensor, the lineshape, σ_p and the solvent term, never given);
`c-lamb` (|Ψ²| for |Ψ|², ∫ₒ for ∫₀). "exlusivley" kept as printed.

## Wanted at chapter level

None.
