# Plan: 2.1 The One-Dimensional Wave Equation (LibreTexts 13375)

Source: `source.md` (`python3 tools/convert.py 2.1`); draft from `python3 tools/md2html.py 2.1`.
Status: built 2026-11-08 in the Chapter 2 job, without a review stop (config: the chapter in one go).

One objective, five numbered figures (all animations or sketches, all replaced), four numbered
equations (2.1.1–2.1.4) and one unnumbered display, three notes, a closing Summary (to
`summary_html`). No examples, no exercises in the book. Licence CC BY-NC-SA 4.0; author Michael
Fowler (page tags).

## Sub-concepts (page headers)

The book's three `<h2>` headers are kept (Traveling Waves, Standing Waves, The Wave Equation); its
"Summary" goes to `summary_html`. The opening, which has none, gets the agent's header.

1. `sine-wave` **The sine wave**: the opening, Figure 2.1.1, the sine wave and its parameter list. Introduces `sine-wave`, `amplitude`, `angular-wavenumber`, `angular-frequency`, `phase-constant`.
2. `traveling-waves` **Traveling Waves** (book's): the rope, Figures 2.1.2–2.1.3, Equation 2.1.1. Introduces `traveling-wave`, `wave-velocity`.
3. `standing-waves` **Standing Waves** (book's): nodes and antinodes, Figure 2.1.4, the bound/free note. Introduces `standing-wave`, `node`, `antinode`.
4. `the-wave-equation` **The Wave Equation** (book's): Equation 2.1.2, the conditions, Equations 2.1.3–2.1.4, Figure 2.1.5, the quantization and curvature notes. Introduces `classical-wave-equation`, `initial-conditions`, `boundary-conditions`.

## Figures

- `sim-sine-wave` · Figure 2.1.1 · sine-wave, amplitude, angular-wavenumber, angular-frequency, phase-constant, wave-velocity · flow by animation and variation by slider: the crest runs right at v = ω/k while one bead of rope only rises and falls on its track, which the GIF shows but never ties to k and ω · arrows: kinematic (the crest's velocity, the bead's velocity) · moving, steadily (no loop: the wave runs on) · sliders A_o (displacement), k (wavenumber, detents π, 2π), ω (frequency, detents π, 2π, 4π), φ (untyped) · headline: the crest speed ω/k with numbers · graph alone (the rope is the graph) · 2D. The book's beads in a row, its λ and c labels are cut; one bead and one crest carry the point. The book gives no numbers; it opens on k = π rad/m, ω = 2π rad/s.
- `sim-pulse` · Figure 2.1.2 + 2.1.3 · traveling-wave, wave-velocity · flow by animation: the pulse travels while its t = 0 shape stays ghosted and a bracket measures vt, so "the same function moved over by vt" is seen · arrows: kinematic (the travel) · moving, a loop of 8/v s until the peak reaches x = 8 m · choice of shape (the book's bump, bump then dip, two bumps); slider v (velocity) 1–2.5 m/s · headline: t, and the shift vt · graph alone · 2D.
- `sim-standing` · Figure 2.1.4 + 2.1.5 · standing-wave, node, antinode, boundary-conditions · flow by animation: the string swings in place, the nodes (ink dots, the clamped ends among them) never move, the dashed envelope shows the antinodes swinging widest, and higher solutions swing faster (the curvature note) · arrows: none · moving, steadily · choice of solution 1–6 (a discrete state), the shape bending into the new one · headline: the number of nodes between the ends · graph alone · 2D. One node and one antinode are labelled; the rest carry hover names.

Every book figure is replaced; the originals ship in `originals` (2.1.3 CC BY-NC-ND Russell, unmodified, with its credit).

Extra simulations: none proposed.

## Exercises

None in the book. Two AI exercises (config): `a1` reads A_o, λ, ν and v off a given sine wave (0.020 m, 0.50 m, 5.0 Hz, 2.5 m/s), tests `sine-wave`, `angular-wavenumber`, `angular-frequency`, `wave-velocity`; `a2` shows f(x − vt) satisfies the wave equation (open), tests `traveling-wave`, `classical-wave-equation`. Both `place: end`.

## Derivations

None qualify: the section states the wave equation and derives nothing.

## Corrections

- `c-string-figure`: the string held at both ends is cited as Figure 2.1.3 (the traveling pulse); it is Figure 2.1.5.
- `c-planck`: "Plank's equation" for Planck's.
The typos "varing" and "i..e" and the loose citations of Figures 2.1.2 and 2.1.4 are left as printed.

## Wanted at chapter level

None.
