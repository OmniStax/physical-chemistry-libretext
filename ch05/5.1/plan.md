# Plan: 5.1 A Harmonic Oscillator Obeys Hooke's Law (LibreTexts 13413)

Source: `source.md`; draft from `python3 tools/md2html.py 5.1` (deleted after the build).
Status: built 2026-11-08 in the Chapter 5 job, without a review stop (config: the chapter in one go).

No objectives, five numbered figures and one unnumbered image (Example 5.1.1's plot), eight numbered
equations (5.1.1–5.1.8), three worked examples, three inline exercises (all keyed), two notes. Licence
CC BY-NC-SA 4.0; author Michael Fowler (page tag).

## Sub-concepts (page headers)

The book's three `<h2>` headers are kept; the opening gets one of ours.

1. `opening` **Motions of a diatomic molecule**: translation, rotation, vibration; Figure 5.1.1; why classical first. Introduces `molecular-motion-separation`, `harmonic-oscillator`, `rigid-rotor`.
2. `the-classical-harmonic-oscillator` **The Classical Harmonic Oscillator** (book's): Figure 5.1.2 (+ 5.1.4), Hooke's law (5.1.1), stiffness, V = ½kx² (5.1.2), the Caution note, the note "Two atoms or one?" with Figure 5.1.3, Example 5.1.1. Introduces `hookes-law`, `force-constant`, `harmonic-potential`, `vibrational-coordinate`; uses `reduced-mass` (introduced in 5.2 by the tables).
3. `solving-the-harmonic-oscillator-model` **Solving the Harmonic Oscillator Model** (book's): the derivation (5.1.3)–(5.1.6) and p(t), *harmonic*, Example 5.1.2. Introduces `oscillator-equation-of-motion`, `classical-harmonic-motion`, `oscillator-frequency`.
4. `harmonic-oscillator-energies` **Harmonic Oscillator Energies** (book's): (5.1.7), (5.1.8), turning points, Figure 5.1.5, the classical density paragraph, Example 5.1.3. Introduces `oscillator-energy`, `turning-points`, `classical-oscillator-density`.

## Figures

- `sim-pair` · Figure 5.1.1 · molecular-motion-separation, rigid-rotor, harmonic-oscillator · flow by animation and variation by slider: the pair vibrates and turns about a fixed, marked center of mass, each atom's whole-loop path drawn faint, so the lighter atom's wide path against the heavier one's small one is seen at once; the GIF has equal-looking atoms and no slider · arrows: none · moving: one turn per 6 s loop with five vibrations (rates illustrative) · slider m₂/m₁ 1–40 on a log track (mass), detents H₂ 1, CO 1.33, HCl 34.7 (opens on HCl); choice motion vibration / rotation / both (opens on the book's both) · headline: the mass ratio and the ratio of the distances from the center of mass · scene alone; atoms in `F.cat` colours with a two-entry legend (no referents: the text never names the atoms one by one) · 2D.
- `sim-spring` · Figure 5.1.2 + 5.1.4 · hookes-law, force-constant, classical-harmonic-motion, oscillator-frequency · flow by animation: the mass moves, the force −kx grows and flips with it, and x(t) traces beside it, which the two stills and the bare GIF show apart · arrows: symbolic (the force vector on the mass) · moving: x(t) = x₀ sin ωt over a 10 s window, real time · sliders k 1–20 N/m (force-constant), m 0.2–2 kg (mass), x₀ 0.05–0.25 m (length); the book prints no numbers, so k = 10 N/m, m = 1 kg, x₀ = 0.20 m · headline: x and F now · graph beside: the spring stood on end on a base so x shares the graph's vertical axis, a dashed line from the mass to its point · 2D.
- `fig-5-1-3` · Figure 5.1.3 · faithful copy (archetype 7), kind `figure`, still, no controls: the two panels in the house style, the book's perspective axes kept as drawn lines (rule 28.1: the lesson is along a line; the variation lives in 5.2.1) · standardisation only.
- `fig-ex-5-1-1` · unnumbered image in Example 5.1.1 (d) · kept as the book prints it: it is the solution's own sketch.
- `sim-energy` · Figure 5.1.5 · oscillator-energy, turning-points, classical-oscillator-density · flow by animation: the ball rides the parabola, bars trade T and V on the same energy scale, and a tally of where the ball has been grows tallest at ±A, with the classical density dashed over it; the still parabola shows none of the sloshing or lingering · arrows: none · moving: three periods per loop, m = 1 kg, the tally recomputed from t = 0 each frame so scrubbing is exact · sliders k 2–10 N/m (force-constant), A 0.05–0.25 m (length), defaults 5 N/m, 0.20 m · headline: T and V now, adding to E · graph above (V and E), bars beside, tally below on the same x · 2D.

The originals' credits: cleonis.nl (CC BY-SA 3.0), Kaya (CC BY-NC), Paul Wormer (no licence named), 5.1.4 none.

## Exercises

- `e1` Exercise 5.1.1 (keyed, open): correction note on d²x/dt for d²x/dt² and the dropped minus.
- `e2` Exercise 5.1.2 (keyed, 1.5): correction note on the dropped square root.
- `e3` Exercise 5.1.3 (keyed, open): correction note on kx/2 for kx²/2.

## Derivations

- `oscillator-motion` (score 4; equations with words, the solution asserted by "the standard method"): *Derivation · the motion of the classical oscillator*, replacing (5.1.3)–(5.1.6) and p(t) with the prose between them; facts Newton's second law, (5.1.1), the trial sine, p = mv, v = dx/dt; results (5.1.3), (5.1.4), (5.1.6), (5.1.5), p(t). The result numbered (5.1.5) is the sine with ω written out, since the trial line itself is a fact.
- `example-5-1-3` (score 3, built per config): *Example 5.1.3 · the energy of an oscillator of amplitude A*, replacing part (b)'s two displays; facts x = A cos ωt and its velocity, K = ½mv², (5.1.2), (5.1.6) (linked to `oscillator-motion`), sin² + cos² = 1.
- Kept as printed: Example 5.1.1 (score 1), Example 5.1.2 and Exercise 5.1.1's key (substitution checks).

## Corrections

Footnotes: Example 5.1.1 (a) "the force constant, −k"; Example 5.1.3 (a)'s E_v with a Latin v and the m/μ mix; the three keys. The empty maths span "\(\)" lies inside the replaced run. Left as printed (typing, meaning clear): "standardform", "Figure 5.1.4 show", "fix wall", "does not affects", "CC SA-BY" in a credit; the stray "(" of "*turning points (*" was a markup slip of the converter and is not shown.

## Wanted at chapter level

None.
