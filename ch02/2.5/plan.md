# Plan: 2.5 A Vibrating Membrane (LibreTexts 13379)

Source: `source.md` (`python3 tools/convert.py 2.5`); draft from `python3 tools/md2html.py 2.5`.
Status: built 2026-11-08 in the Chapter 2 job, without a review stop (config: the chapter in one go).

Two objectives, two numbered figures (both GIF panels, replaced), three numbered equations (2.5.1–2.5.3),
one worked example, two inline exercises (keyed), one untitled emphasis note. No summary. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's three `<h2>` headers are kept; the opening paragraph, which has none, gets its own block.

1. `higher-dimensions` **Waves in higher dimensions** (ours): the opening paragraph. Uses `principle-of-superposition`.
2. `wave-equation-more-dimensions` **The Wave Equation and Superposition in More Dimensions** (book's): Equations 2.5.1–2.5.2, ∇², the harmonic plane wave, the linearity note. Introduces `multidimensional-wave-equation`, `laplacian`, `plane-wave`, `wave-vector`. Derivation · harmonic waves in three dimensions after the paragraph on k.
3. `rectangular-membrane` **Vibrational Modes of a Rectangular Membrane** (book's): Figure 2.5.1, Equation 2.5.3, nodes, Example 2.5.1. Introduces `rectangular-membrane-modes`, `nodal-line`. Derivation · the modes of a rectangular membrane after the list under 2.5.3.
4. `circular-membrane` **Vibrational Modes of a Circular Membrane** (book's): the Bessel-function modes, Figure 2.5.2. Introduces `bessel-function`, `circular-membrane-modes`.

## Figures

- `sim-rect-membrane` · Figure 2.5.1 · rectangular-membrane-modes, nodal-line · motion and depth: the sheet rises and falls out of its plane, its lobes trading sign each half period while the nodal lines stay still, which the flat map would make the reader imagine; variation by choice over nine modes where the book shows four · arrows: none (the x and y arrows are axis notation) · moving: the mode swings as cos ωt, a whole number of swings per 6 s loop, higher modes faster in proportion to √((n_x/a)² + (n_y/b)²); a change of mode morphs the shape and restarts the loop · choices n_x ∈ {1, 2, 3}, n_y ∈ {1, 2, 3}, default (1, 1) · no headline (the readout carries the mode and its count of nodal lines) · graph none; legend of the displacement scale beneath · mathematical 3D, a = 1.4 b, azimuth free, elevation 20°–90° (straight down is the nodal map; never from beneath, where up and down read inverted), no spin (no path shows more than the reader's own turn), no zoom (no fine parts); flat nodal map without WebGL. Ink nodal lines and fixed edge; faint grid curves so the sheet reads while it passes through rest. Facts: the diverging displacement scale (red #c2413a above rest, blue #2f6ab3 below, the page's neutral at rest).
- `sim-circ-membrane` · Figure 2.5.2 · circular-membrane-modes, nodal-line, bessel-function · as above on a drum of radius 1, u = J_m(λ_mn r) cos mθ cos cλ_mn t, λ_mn the nth zero of J_m (computed by the integral form of J_m) · moving, swing rate ∝ λ_mn · choices m ∈ {0 … 4}, n ∈ {1, 2, 3}, default (0, 1); reaches the book's (0, 3) and (4, 1) · readout: the mode with m, n, λ_mn and its count of nodal diameters and circles · same 3D bound, buttons and fallback. Originals shipped (CC BY-SA-ND, Russell) with the book's caption.

The book's Figure 2.5.1 animations (© Dan Russell, no licence) are not shipped; the source and credit are in `notes`. Extra simulation offered in config (a plane wave with its wave vector) not built.

## Exercises

Exercise 2.5.1 (keyed; correction on "one if and one is") and 2.5.2 (keyed, checked against the GIFs: radial nodes at 0.28 and 0.64 of the radius, four diameters 45° apart). Kind `exercise`, open answers, at the end. No AI exercises in this section (config).

## Derivations

- `plane-wave` · Derivation · harmonic waves in three dimensions · "you can verify": score 6 (five unprinted moves, one join) · built after the paragraph that completes it; its note follows the book's ν for v and k_x for k_y y correctly.
- `rectangular-modes` · Derivation · the modes of a rectangular membrane · "done in a similar fashion by separation of variables": score ≥ 10 (facts 2.4.10 and 2.4.12 imported, X, Y, T solved and joined) · built after the list under 2.5.3, ending at the book's (2.5.3). It names the time constant −ω_nm² and states no formula for ω_nm, which the book does not print.
- 2D wave equation from forces (score ≥ 6): not built, its facts (tension, Newton's law on a patch) are stated nowhere in the book. Circular modes: not built, Bessel's equation is not in the book.

## Corrections

"now shown" for not shown; u(x,y,,z,t); ∇² printed as a vector; ω = νk and ω = ν|k| for v; k_x x + k_x for k_x x + k_y y; "than later"; Exercise 2.5.1's key. Not marked: c for the wave speed and the nm index on A, ω, φ (notation, not errors); Example 2.5.1's missing closing parentheses.

## Wanted at chapter level

Variables rows for 2.5 (the derivations and text write these plainly until they exist):

- `{"section": "2.5", "sym": "k_x", "type": "wavenumber", "meaning": "the x component of the wave vector", "concept": "wave-vector"}`, and the same for `k_y`, `k_z` (y and z components); symbols `k_x`/`k_y`/`k_z` with latex `k_x`, `k_y`, `k_z`.
- `{"section": "2.5", "sym": "A", "meaning": "the amplitude of the harmonic plane wave", "concept": "amplitude"}` (symbol `A`, latex `A`).
- `{"section": "2.5", "sym": "X", "meaning": "the factor of u(x,y,t) that depends on x only"}`, `Y_f` (latex `Y`, "the factor that depends on y only"), `T_t` ("the factor that depends on t only").
- `{"section": "2.5", "sym": "p_n", "meaning": "the constant of the x factor, X''/X = −p², equal to n_xπ/a", "concept": null}` and a `q` row ("the constant of the y factor, Y''/Y = −q²").
