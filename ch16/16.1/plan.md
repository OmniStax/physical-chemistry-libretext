# Plan: 16.1 All Dilute Gases Behave Ideally (LibreTexts 13656)

Source: `source.md` (`python3 tools/convert.py 16.1`); draft from `python3 tools/md2html.py 16.1` (deleted once built).
Status: built 2026-11-08 in the Chapter 16 job, without a review stop (config: the chapter in one go).

No objectives or summary. Eleven numbered displays (16.1.1)–(16.1.11), two numbered figures, two unnumbered
images (and a broken `src="/"` image the converter drops). Credits: Tuckerman, LaRue. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `pressure-from-collisions` **Pressure from collisions** (ours, the exploration's, sentence case): the opening, the
   wall-collision derivation, the ideal gas law, equation of state, isotherms and isochores, Figure 16.1.1. Introduces
   `ideal-gas`, `pressure`, `pressure-from-collisions`, `mean-square-velocity-component`, `ideal-gas-law`,
   `equation-of-state`, `isotherm`, `isochore`, `ideal-gas-never-condenses`.
2. `compressibility-factor` **The compressibility factor** (ours; the exploration's "Isotherms and the Compressibility
   Factor" cut to what the block holds, since the isotherms stand in block 1): (16.1.10), Figure 16.1.2. Introduces
   `compressibility-factor`, `dilute-gases-ideal`.
3. `extensive-and-intensive` **Extensive and Intensive Properties in Thermodynamics** (book's): system and surroundings,
   (16.1.11). Introduces `thermodynamic-system`, `extensive-and-intensive`, `molar-volume`, `number-density`.

## Figures

- `sim-wall-pressure` · Figure (unnumbered image 417799) · pressure, pressure-from-collisions, ideal-gas-law · flow by
  animation and variation by slider: the particles fly and each strike on the right wall hands it a kick of 2mvₓ, and the
  strip beside shows the force in 0.1 ns bins and its running average settling on Nk_BT/a, which the still image cannot
  show · arrows: kinematic (the particles move); the kick arrows on the wall are force (symbolic) · moving, a continuous
  run (cycle without end, transport, no scrubber), model time 0.5 ns per second, true speeds (1 m/s = 1 nm/ns) · sliders
  N (1–200, untyped, default 20), T (temperature, 100–600 K, 300), a (length, 50–200 nm, 100); the sample's ⟨vₓ²⟩ is set
  to k_BT/m at each reset so the average lands on the prediction · headline: the kicks so far and their average pressure
  against Nk_BT/V · graph beside (force ÷ Nk_BT/a, 0–3, the last 10 ns) · 2D. Particles one category colour, `F.cat(0)`,
  no element (the mass is an N₂ molecule's, named in the hover). Original kept; no caption at the source.
- `sim-ideal-isotherms` · Figure 16.1.1 + 16.3.1 · isotherm, isochore, ideal-gas-law · variation by slider and drag: the
  reader drags the state point along its isotherm and the PV rectangle keeps its area beside a dashed twin; on the right
  the isochore at that volume is a line through the origin · arrows: none · still: no time in it · T (temperature,
  100–600 K, 300, detents 200/400/600), V (volume, 5–40 L, 10, detents 5/10/20); drag on both panels · headline: T, V, P and
  PV · two graphs side by side · 2D. One mole, as 16.3.1 draws; the book's family as three faint curves each.
- `fig-16-1-2` · Figure 16.1.2 · compressibility-factor, dilute-gases-ideal · standardisation only (faithful copy,
  archetype 7, kind `figure`): the five curves read off the OpenStax image, the ideal line, the shaded Z < 1 band; hover
  names each gas's minimum · still, no controls · no headline · 2D. The image's axis "Z (kPa)" is read as Z (footnote
  on the figure row). Original kept with its OpenStax credit.
- 417800 (system, boundary, surroundings) · kept as the book prints it, inline (`<p><img>`, Chapter 4's precedent): a
  labelled sketch with nothing that moves or varies.

The figure library's legend and plot dashes are used as they stand; nothing was missing.

## Exercises

None printed. AI exercises (config: two): `a1` (multi, Apply) the pressure of 0.0100 mol N₂ in 1.00 L at 300 K from
Nm⟨vₓ²⟩/V and from nRT/V (⟨vₓ²⟩ = 8.906 × 10⁴ m²/s², both 2.49 × 10⁴ Pa; computed); `a2` (choice, Understand) which list
of quantities is intensive. Both `place: end`.

## Derivations

- `ideal-gas-law` (printed block, 9 lines; imported facts 3: Newton's second law in (16.1.1)'s line, ⟨vₓ²⟩ = k_BT/m,
  R = N₀k_B; built per config): replaces "According to Newton’s second law" through (16.1.9) and the words between;
  six nodes with results (16.1.2), (16.1.3), (16.1.4), (16.1.6), (16.1.7), (16.1.9). (16.1.5) and (16.1.8) are facts
  with their numbers. R = N₀k_B and N = nN₀ carry no provenance (orchestrator). "which is the ideal gas law" follows the
  host as printed.

## Corrections

Footnotes: Z called "compressibility" (`c-compressibility`); P = ρRT with a number density and the "extensive form"
of the three lines (`c-rho`); the image's "Z (kPa)" (`c-z-axis`, on the figure row). As printed, no footnote: "t
represents", "iwht", the caption's missing parenthesis, "Before we discuss ensembles".

## Wanted at chapter level

None.
