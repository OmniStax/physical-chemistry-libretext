# Plan: 15.5 What is Inside a Laser? (LibreTexts 13651)

Source: `source.md`; draft from `python3 tools/md2html.py 15.5`. Built 2026-11-08 in the Chapter 15 job, no review stop.
No authors (the book's); CC BY-NC-SA 4.0. Draft fixes: "AA*", "AB*" restored (the converter read the asterisks as emphasis).

## Sub-concepts (page headers)

1. `laser-parts` **The parts of a laser** (agent's): the three components. Introduces `laser-components`.
2. `the-gain-medium` **The Gain Medium** (book's, h3 Solids, Gases, Exciplex Lasers, Liquid Solutions), Tables 15.5.1, 15.5.2. Introduces `exciplex-laser`, `dye-laser`.
3. `the-pump-source` **The Pump Source** (book's). Introduces `cw-and-pulsed-lasers`.
4. `the-laser-optical-cavity` **The Laser Optical Cavity** (book's). Introduces `optical-cavity`.
5. `diode-lasers` **Diode Lasers** (book's). Introduces `diode-laser`.

## Figures

- Figure 15.5.1 · the photograph shown as 15.4.1: cited (`figref` to 15.4), not shown twice, footnote.
- `fig-15-5-2` · Figure 15.5.2 · kept (He-Ne tube drawing in perspective, nothing moves; 15.6 cites it).
- `fig-15-5-3` · Figure 15.5.3 · photo kept (the text points at the yellow tube), own licence in the caption.
- `sim-cavity` · Figure 15.5.4 · optical-cavity, laser-components · flow by animation, variation by slider: the book's cavity in its perspective (locked view, rule 28.2), photons running to and fro, the gain medium tinted by the gain left in it, the beam out as thick as (1 − R)I; graph beside below: the light inside against round trips, I(k+1) = R G₀ I/(1 + I) from one photon's worth, levelling at R G₀ − 1 · arrows: kinematic (photons); the pump arrows symbolic · moving · sliders R 90–99.9 %, G₀ 1.00–1.50 (special: threshold G₀ = 1/R) · headline: the growth per round trip · graph below · 2D. Readout: the saturated gain, R G and the beam out (the gain–loss balance rather than (15.2.13), which has no output coupler in it). Beam red (fact).
- `sim-dye` · Figure 15.5.5 · dye-laser · variation by slider: the cavity laid out flat with the argon-ion pump (514.5 nm), dye jet, grating turned to Littrow's angle for 1800 lines/mm, output coupler; the beams in their real colours; inset: rhodamine 6G's gain band over the book's 560–635 nm (shape schematic), the wavelength marked · arrows: none · still (a setting, not a time) · slider λ 560–635 nm · headline: the grating sends one wavelength back · inset beside · 2D. Readout: E = hc/λ.

## Exercises

a1 (AI, choice): an output coupler from 98 % to 80 %. a2 (AI, choice): the excimer among XeCl*, KrF*, Xe₂*, ArF*.

## Derivations

None qualify.

## Corrections

"always monochromatic … always coherent"; Figure 15.5.1 = 15.4.1; Table 15.5.1's "Lifetime" (pulse durations), ruby's 10 ps, YAG (Y₃Al₅O₁₂), YLF (LiYF₄); Table 15.5.2's K⁺ (Kr⁺); the ruby cannot run cw; the dye laser's tuning; diode lasers do lase by stimulated emission.

## Wanted at chapter level

The dye figure's readout writes `\klambda` and `\kE`, which have no variables row in force at 15.5:

- variables `{"sym": "lambda", "type": "wavelength", "meaning": "the wavelength of the dye laser's beam", "unit": "nm", "section": "15.5"}`
- variables `{"sym": "E", "type": "energy", "meaning": "the energy of one photon of the beam", "unit": "J", "section": "15.5"}`
