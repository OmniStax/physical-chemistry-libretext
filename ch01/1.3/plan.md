# Plan: 1.3 Photoelectric Effect Explained with Quantum Hypothesis (LibreTexts 13383)

Source: `source.md` (`python3 tools/convert.py 1.3`); draft from `python3 tools/md2html.py 1.3`.
Status: built 2026-11-08 in the Chapter 1 job, without a review stop (the user
approved the chapter config and asked for the chapter to be built).

Five objectives, four numbered figures, one table, two numbered equations
(1.3.1–1.3.2), one worked example, two inline exercises (keyed), five
Conceptual Questions (unkeyed), two notes, a closing Summary. Licence
CC BY-NC-SA 4.0. The `\ce{}` displays of the workfunction block are written
with `\text{}` (the app's KaTeX has no mhchem).

## Sub-concepts (page headers)

The book's four `<h2>` headers are kept; the opening, which has none, divides in two:

1. `photoelectrons` **Light that ejects electrons**: Planck's puzzle, Hertz, Thomson's photoelectrons. Introduces `photoelectric-effect`.
2. `classical-picture` **The classical picture**: what shaking electrons with a wave predicts. Uses `photoelectric-effect`.
3. `lenard` **Lenard's Experimental Results (Intensity Dependence)** (book's): the collector, V_stop independent of intensity. Introduces `stopping-voltage`.
4. `millikan` **Millikan's Experimental Results (Wavelength Dependence)** (book's): colour sets the energy; the two observations; the bench (Figure 1.3.1 + 1.3.2 + 1.3.3 + 1.3.4); the classical-theory note.
5. `einstein` **Einstein's Quantum Picture** (book's): Equations 1.3.1–1.3.2, threshold, the photon, Millikan's note. Introduces `work-function` (first named here, "the workfunction, Φ"), `photon`, `einstein-photoelectric-equation`, `threshold-frequency`.
6. `workfunction` **The Workfunction (Φ)** (book's): workfunction against ionization energy, Table 1.3.1, Example 1.3.1. Reinforces `work-function`.

## Figures

- `sim-photoelectric` · Figure 1.3.1 + 1.3.2 + 1.3.3 + 1.3.4 · photoelectric-effect, photon, work-function, threshold-frequency, stopping-voltage, einstein-photoelectric-equation · flow by animation and variation by slider: photons stream from the lamp at a rate set by the intensity, each one above threshold ejects one electron with KE = u(hν − Φ), u uniform on (0.02, 1], which crosses the gap trailing a streak as long as its speed and slows uniformly against the retarding voltage, turning back when KE < eV; brighter light gives more electrons at the same speeds, bluer light gives longer streaks, below ν₀ none leaves · arrows: kinematic (photons to the cathode, electrons across the gap and back) · moving: photons and electrons in a steady stream, `cycle(() => Infinity)` · metal select (Table 1.3.1 plus calcium, the default), ν slider 3–15 × 10¹⁴ Hz with a dashed circle at ν₀, intensity 0–100 %, retarding V 0–5 V with a dashed circle at V_stop · headline: λ, hν and the greatest KE, or hν < Φ; the point seen first is the stream of streaking electrons, largest and central · one graph beside (1.3.4 A, greatest KE against ν, the visible band in its colours on the ν axis, eV drawn only when V > 0); 1.3.4 D cut, since the stream's density and the arrival count under the collector carry it · 2D. Cuts: the circuit, ammeter and battery over the tube, the Φ legend line (hover on the cathode). Defaults reproduce Example 1.3.1 (420 nm on calcium, 2.96 eV, 0.25 eV) with the example's constants. Facts: the light's colour (`spectrum`), ultraviolet and infrared drawn muted; convention: `e-`. Labels: the kinds once in a legend; cathode, collector, lamp named once; plates by hover too.

Extra simulations: none proposed.

## Rework (rule 14, 2026-11-08)

- `sim-photoelectric`: bench, circuit, ammeter, battery, two graphs and a swarm of dots all compete; the caption is six sentences; electron speed, the point, is only implied by dot spacing.

## Exercises

- Exercise 1.3.1 (keyed: 263 nm, ultraviolet), `number`, tests `work-function`, `threshold-frequency`.
- Exercise 1.3.2 (keyed, worded), `open`, tests `work-function`.
- Conceptual Questions 1–5, kind `question`, AI solutions (`open`), the threshold wavelengths computed with Example 1.3.1's constants.

## Derivations

None qualify: Equations 1.3.1–1.3.2 are stated, and Example 1.3.1 only substitutes numbers.

## Corrections

- `c-ke`: Example 1.3.1 prints 2.96 eV − 2.71 eV = 0.246 eV; it is 0.25 eV.
- `c-retarding`: "a retarding potential of 0.26 eV" should be 0.25 V.

## Wanted at chapter level

- variables row: `{"sym": "V", "type": "potential", "meaning": "the retarding voltage on the collector plate", "unit": "V", "section": "1.3"}` (the bench's slider is labelled plain V until it exists).
- variables row: `{"sym": "E", "type": "energy", "meaning": "the energy of a photon", "unit": "J or eV", "section": "1.3"}` (Example 1.3.1's E is left plain until it exists).
