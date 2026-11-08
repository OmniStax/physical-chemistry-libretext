# Exploration: Chapter 2, The Classical Wave Equation

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 2`,
after the converter fixes listed at the end), every page read in full, and
the chapter's 14 images looked at frame by frame. The landing page (11779) is
one paragraph of Michael Fowler's opening ("The aim of this section is to give
a fairly brief review of waves…"), with no thumbnail credit. There is no
chapter summary page, and 2.E (13380) is empty: no exercise lives at the end
of the chapter, so nothing is routed from it (root rule 9).

## Pages

| Page | LibreTexts id | Licence | Headers (`<h2>`) | Ex | Exr | Fig | Notes | Eq (numbered / all displays) |
|---|---|---|---|---|---|---|---|---|
| intro | 11779 | BY-NC-SA 4.0 | none: one paragraph | | | | | |
| 2.1 The One-Dimensional Wave Equation | 13375 | BY-NC-SA 4.0 | Traveling Waves; Standing Waves; The Wave Equation; Summary | 0 | 0 | 5 | 3 | 4 / 5 |
| 2.2 The Method of Separation of Variables | 13376 | BY-NC-SA 4.0 | A Vibrating Spring Held Fixed Between Two Points | 2 | 0 | 0 | 2 | 19 / 49 |
| 2.3 Oscillatory Solutions to Differential Equations | 13377 | BY-NC-SA 4.0 | none | 1 | 1 | 1 | 0 | 10 / 24 |
| 2.4 The General Solution is a Superposition of Normal Modes | 13378 | BY-NC-SA 4.0 | Spatial Dependence of the Solution: X(x); Time Dependence of the Solution: T(t); The Principle of Superposition | 0 | 1 | 2 | 2 | 16 / 31 |
| 2.5 A Vibrating Membrane | 13379 | BY-NC-SA 4.0 | The Wave Equation and Superposition in More Dimensions; Vibrational Modes of a Rectangular Membrane; Vibrational Modes of a Circular Membrane | 1 | 2 | 2 | 1 | 3 / 8 |

Authors (page tags; no page prints a Contributors list): Michael Fowler for
2.1–2.4, Delmar Larsen and Michael Fowler for 2.5. Every section has
learning objectives; only 2.1 closes on a "Summary" (to `summary_html`).
Every section opens on prose before its first header (2.3 has no header at
all), so each needs at least one header of the agent's (root rule 3):
proposed "The Sine Wave" (2.1), "Separating a Partial Differential Equation"
(2.2), "A Negative Separation Constant" and "Boundary Conditions Force
Quantization" (2.3), "The Product Solution" (2.4) and "Waves in Higher
Dimensions" (2.5), to be put through the humanizer by the builder.

### Per section

- **2.1** Opening: the sine wave A(x,t) = A_o sin(kx − ωt + φ), its
  parameters as a list (amplitude, x, t, wavenumber, angular frequency,
  phase constant). Traveling waves (the rope, y = f(x − vt), Eq. 2.1.1);
  standing waves, nodes and antinodes; the wave equation (2.1.2) and the
  string's boundary conditions (2.1.3, 2.1.4). Notes: "Bound vs. Free
  particles and Traveling vs. Stationary Waves", "Mathematical Origin of
  Quantization", "Curvature of Wave Solutions". Concepts: sine wave,
  amplitude, wavenumber, angular frequency, phase constant, traveling wave,
  wave velocity, standing wave, node, antinode, classical wave equation,
  boundary conditions, initial conditions.
- **2.2** Opening and a note listing the method's steps (it says three and
  lists two); the separation u = X(x)T(t) worked into two ODEs with a
  constant K (2.2.3–2.2.8); K = 0 and K > 0 cases; the boundary conditions
  applied to the exponential solution (2.2.12–2.2.13); the note "Ignore the
  Trivial Solution"; y'' − k²y = 0 solved by y = e^{αx} (2.2.14–2.2.19);
  Examples 2.2.1 (General Solution) and 2.2.2 (Boundary Conditions, really
  initial conditions). Concepts: PDE, ODE, separation of variables (skill),
  the separated wave equation, the trivial solution, exponential solutions.
- **2.3** K < 0, K = −p², the oscillatory equation and its exponential
  solution (2.3.1–2.3.3); Example 2.3.1 (untitled) carries the section's
  whole argument: Euler's formula, X = c₁cos px + c₂sin px, the two boundary
  conditions, pL = nπ, p = nπ/L (2.3.4–2.3.10). Exercise 2.3.1 (two
  traveling waves and their sum and difference). Concepts: Euler's formula,
  oscillatory solutions, quantization by boundary conditions.
- **2.4** Repeats 2.3's spatial argument with C and D (2.4.1–2.4.10, with
  Exercise 2.4.1 inside it), names n a quantum number, solves T(t)
  (2.4.11–2.4.12), forms u_n (2.4.13), the linearity note, the
  superposition definition box, the sum over modes (2.4.14–2.4.15), the
  fundamental and overtones, ν_n = nv/2L (2.4.16). Concepts: spatial and
  temporal solutions of the string, quantum number, normal mode,
  fundamental and overtones, linear differential equation, principle of
  superposition, the general solution as a sum of normal modes, the
  normal-mode frequencies.
- **2.5** The 2D and 3D wave equations (2.5.1, 2.5.2), ∇², the harmonic
  plane wave and ω = v|k|, an untitled emphasis note on superposition;
  rectangular membrane modes (2.5.3) with Example 2.5.1 and Exercise 2.5.1
  on nodal lines; the circular membrane with Bessel functions (unnumbered)
  and Exercise 2.5.2 on nodal diameters and circles. Concepts: the wave
  equation in more dimensions, the Laplacian, the wave vector, the plane
  wave, rectangular and circular membrane modes, nodal lines, Bessel
  functions.

## Equation numbers

The numbers are MathJax's (`tags: all`, page-prefixed): every display
without `\nonumber` takes the next number, and an unstarred `align` numbers
each of its rows that has no `\nonumber`. This chapter is the first to need
the row rule: 2.3 and 2.4 each hold an `align` whose first rows carry
`\nonumber` and whose last row carries a label (2.3.8c, 2.4.8c), and 2.4's
sum over modes numbers two rows (2.4.14 and 2.4.15). The converter and the
draft tool were wrong on all three (fixed, below). The live page could not
be rendered to confirm (a headless browser is refused by the site's CDN), so
the numbers rest on the row rule and on 2.3, whose labels 2.3.9–2.3.12
match the count only if the align row is numbered.

The book's labels are not its numbers. Where the prose cites by `\ref` the
number is right by construction; where it types a number by hand it names a
label, often of another page, and is wrong on the page: 2.3 "the general
solution (Equation 2.2.7)" and "Equation 2.2.5" mean (2.2.9), "Equation
2.2.4b" means (2.2.8), "the boundary conditions from Equation 2.2.7" means
(2.2.12)–(2.2.13); 2.4 "Equation 2.4.5" means (2.4.3), "Equation 2.4.4b"
and "2.4.4a" mean (2.2.8) and (2.2.7). These get root rule 13 corrections.

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises** (`box-exercise`): 4 printed (2.3.1, 2.4.1, 2.5.1,
  2.5.2); 4 keyed (2.3.1 by "Solution a/b", the others by "Answer"),
  available now; 0 unkeyed.
- **Worked examples**: 4 (2.2.1, 2.2.2, 2.3.1, 2.5.1), all worked to their
  answer. Not exercises; kept whole.
- **Conceptual questions, problems, 2.E**: none.
- **Placement**: Exercise 2.3.1 adds two traveling waves into a standing
  wave, which is superposition, introduced in 2.4; root rule 12 holds it for
  2.4 (both pages' notes say so). The others test what their own section
  introduces.
- **Concepts the book leaves untested**: everything in 2.1 (the sine wave's
  parameters, f(x − vt), the wave equation), 2.2's separation of variables
  (shown only in examples) and 2.4's normal-mode frequencies ν_n = nv/2L.
  **Proposed new: 6**, two each in 2.1 (read A_o, k, ω, λ and v off a given
  sine wave; show that f(x − vt) satisfies the wave equation), 2.2
  (separate a given linear PDE into ODEs; show that K > 0 meets
  X(0) = X(L) = 0 only trivially) and 2.4 (the first three frequencies of a
  string of given v and L; the nodes and the period of a sum of modes 1
  and 3).

## Figures, in book order (root rules 14, 24, 28)

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 2.1.1 | 2.1 | GIF (CC BY-SA, And1mu): a sine wave travelling right, beads of the medium with velocity arrows, A, λ, c marked | **Replace, moving.** The point seen at once: the crest runs along at v = ω/k while every bead only rises and falls. Kinematic arrows (bead velocities, the wave's velocity). Sliders A_o, λ (k), ν (ω), φ; readout A(x,t) = A_o sin(kx − ωt + φ) and v = ω/k with numbers. Flat. |
| 2.1.2 + 2.1.3 | 2.1 | a still bump with an arrow; a GIF (CC BY-NC-ND, Russell) of a pulse running along a string | **Fold, moving.** One rope: the pulse travels, its t = 0 shape stays ghosted and a bracket shows the shift vt, so "the same function, moved over by vt" is seen, not read. Choice of shape (a bump, a bump then a dip, two bumps: the book's three); slider v; readout y(x,t) = f(x − vt). Kinematic arrow: the travel. Flat. |
| 2.1.4 + 2.1.5 | 2.1 | GIF (public domain, LucasVB): a standing wave with its nodes as red dots; GIF (Wikipedia): the first six modes of a string | **Fold, moving.** A string held at x = 0 and L in mode n (choice 1–6): the nodes are dots that never move, the antinodes swing widest, the envelope is dashed, and the higher modes swing faster (the curvature note). Readout: the boundary conditions with live values and the node count. Flat. |
| 2.3.1 | 2.3 | the same GIF as 2.1.5 | **Replace, still** (no time in the idea). The shooting picture: from X(0) = 0, the reader turns K across zero; for K > 0 the curve grows and never returns, for K < 0 it is c₂ sin(px), and X(L) = 0 lands only on p = nπ/L (dashed specials with a snap; landing morphs the curve into mode n). The point: the far end picks a ladder of allowed p. Readout K = −p², X(L) = c₂ sin(pL), pL/π. Flat. Alternative if the orchestrator prefers: cite 2.1's folded figure. |
| 2.4.1 | 2.4 | SVG (CC BY-NC, Ümit Kaya), width 488: the first seven X(x) at their two extremes (red, blue) | **Replace, moving.** The seven modes stacked, each swinging at its own ω_n, the book's two extremes as faint outlines; choice n highlights one; sliders v and L. The point: more nodes, faster swing, ν_n = nv/2L in the readout. Flat. |
| 2.4.2 | 2.4 | GIF (ophysics.com, "for non-profit educational purposes"): two pulses passing through each other, dashed, with their sum | **Replace, moving.** Two pulses (referents, dashed) run toward each other; the string (ink) is their sum. Choice: same side or opposite sides (the book's "displaced less"); slider: the second pulse's amplitude. Readout u = u₁ + u₂ at a probe point. Kinematic arrows. Flat. A third choice, two sine trains, would show Exercise 2.3.1's standing wave forming (see extras). |
| Sim | 2.4 | none: the book draws no superposition of modes | **New Sim, moving** (the general solution, Eq. 2.4.14–2.4.15). A string moving as G₁u₁ + G₂u₂ + G₃u₃, its three modes small beneath it; sliders G₁–G₃. The point: any motion of the string is a sum of normal modes, each at its own frequency, and the shape does not repeat until the slowest has. Root rule 14 lets the concept earn it; it is the chapter's headline picture. |
| 2.5.1 | 2.5 | four GIF panels (Dan Russell, ©2018 in the frame), the rectangular modes (1,1), (1,2), (2,1), (2,2) as moving 3D surfaces, each panel captioned | **Replace, moving, mathematical 3D.** See below. Choices n_x, n_y ∈ {1, 2, 3}; opens on (1,1); readout the mode's u(x,y,t) with numbers and "(n_x − 1) + (n_y − 1) nodal lines". |
| 2.5.2 | 2.5 | three GIF panels (Dan Russell, "CC BY-SA-ND 4.0"): circular modes (0,1), (0,3) and (4,1) | **Replace, moving, mathematical 3D**, the same drawing as 2.5.1 on a disc. Choices m ∈ {0…4}, n ∈ {1, 2, 3}; opens on (0,1) and reaches the book's (0,3) and (4,1); readout u(r,θ,t) = J_m(λ_mn r) cos mθ cos cλ_mn t with λ_mn from the zeros of J_m, and "m nodal diameters, n − 1 nodal circles". |

No photograph, no unnumbered image, no embed. The converter had read
Figure 2.5.1 as an unnumbered image captioned "The (n_x=1, n_y=1) Solution"
(it took the first panel's caption for the figure's); fixed, the four panel
captions are kept as `> panel:` lines and in the draft row's `_panels`.

### The membranes: flat or 3D (rules 24.8 and 28)

A mode shape u(x, y) is a surface over the membrane's rest plane, and what
moves is that surface rising and falling. Root rule 28.1 puts "a direction
out of a plane" in 3D, and the displacement is exactly that; the book draws
every mode in perspective, which 24.8 names as the signal. Against it: both
exercises and Example 2.5.1 ask only how many nodes there are and where,
and a flat top-down map (one diverging false-colour scale with its legend,
root rule 7.1, the nodal lines in ink) answers that as well as any 3D view,
at a lower tier. The 3D surface earns its place by showing what the flat
map makes the reader imagine: the sheet bulging up where the map is red and
down where it is blue, and the antinodes trading places each half period
while the nodal lines stay put. Proposed: **mathematical 3D** (house style:
ink and the scale's hues, no ground, no materials), the surface coloured on
the same diverging scale the book's caption describes (red and blue
displacement, white at the nodes), with the nodal lines drawn in ink on the
surface. **Orbit bound**: azimuth free; elevation from 20° to 90°, so the
straight-down view, which is the flat nodal map, is reachable, and the
surface is never seen from beneath, where up and down read inverted. No
spin (no path shows more than the reader's own turn), no zoom (no fine
parts); a snap-to-top button only if the plan argues the nodal map is the
lesson. The fallback without WebGL is the flat map. The real displacement is
small and the drawing exaggerates it; a drum's numbers are not in the book,
so the readout states no scale factor (rule 28.4 does not bite).

If the orchestrator prefers the cheaper tier, the flat map with the same
choices, moving by the colour pulsing, loses only the bulge.

### Extra simulations offered (root rule 15)

- Two sine trains running opposite ways and their sum, a standing wave with
  fixed nodes (Exercise 2.3.1's ψ₁ + ψ₂): a third choice of 2.4.2's figure
  rather than a figure of its own.
- A plane wave in the xy-plane: crest lines moving along k, sliders k_x and
  k_y, readout ω = v|k| (2.5). Weak; the derivation below may be enough.

## Derivation candidates (root rule 29)

Score = facts imported from outside the section's method + the longest run
of moves the book does not print + joins of independent lines.

| Where | What | Printed? | Score | Decision |
|---|---|---|---|---|
| 2.2, (2.2.3)–(2.2.8) | u = XT into the wave equation, divided by XT, both sides = K, two ODEs | block of equations | 2 | **Build**; replaces the block. |
| 2.2, (2.2.14)–(2.2.19) | y = e^{αx} into y'' − k²y = 0, α = ±k, the linear combination | block | 1 | **Build**; replaces the block. |
| Example 2.2.2 | roots r = 3, −2, then two initial conditions solved for c₁, c₂ | block | 2 (one join) | **Build** as *Example 2.2.2 ·*; proposed. |
| Example 2.2.1 | the same method with numbers | block | 0 | Keep as printed: it repeats the section's own chain with numbers. |
| Example 2.3.1 | Euler, X = c₁cos px + c₂sin px, X(0) = 0, X(L) = 0, pL = nπ | block | 5 (Euler, two boundary conditions, one join, one skipped move "c₂ ≠ 0") | **Build** as *Example 2.3.1 ·*; it is the section's whole argument. |
| 2.4, (2.4.1)–(2.4.13) | the spatial chain again, T(t) "of the same functional form", u_n = XT | blocks | 7 (separated ODEs, boundary conditions, Euler; T's solution and ω_n skipped; X and T joined) | **Build** as *Derivations · the normal modes of a string*, ending at u_n; the book reprints 2.3's chain, so its lines are kept here too. |
| 2.4 note | ∂²(f+g)/∂x² = … = (1/v²)∂²(f+g)/∂t² | a printed proof, one line | 1 | **Build** (every printed proof qualifies), small: *Derivation · the sum of two solutions*. |
| 2.4, (2.4.16) | ν_n = ω_n/2π = nv/2L | one line | — | Stays. |
| 2.5, the 2D wave equation | forces on a square of sheet ("the math is not shown") | hidden | ≥ 6 | Qualifies on score, but every fact it needs (tension, Newton's second law on a patch) is stated nowhere in the book; **not built**, stays as printed. Orchestrator decides. |
| 2.5, the plane wave | "you can verify": second derivatives in x, y, z, t, sum, ω = v\|k\| | hidden | 6 (five unprinted moves, one join) | **Build** after the paragraph: *Derivation · harmonic waves in three dimensions*; the book's k_x for k_y and ν for v are followed correctly with notes. |
| 2.5, rectangular modes | "done in a similar fashion by separation of variables": u = X(x)Y(y)T(t), two separation constants, four edges, two 1D results, ω_nm | hidden | ≥ 10 | **Build** after the paragraph: *Derivation · the modes of a rectangular membrane*. It inserts ω_nm = vπ√((n_x/a)² + (n_y/b)²), a line the book skips; the 2.5.1 figure may then show it. Orchestrator to confirm. |
| 2.5, circular modes | Bessel functions | hidden | — | Not built: Bessel's equation is nowhere in the book. |

Exercise answers (2.3.1, 2.4.1) are keyed solutions, not derivations of the
text; they stay as the key prints them.

## Corrections spotted (root rule 13)

- 2.1: "an varing amplitude"; "Plank's equation"; "i..e"; the string with
  boundary conditions cited as "(Figure 2.1.3)", which is the travelling
  pulse (the string is Figure 2.1.5); "(Figure 2.1.2)" for the velocity of
  the wave, and "(Figure 2.1.4)" in the curvature note, both loose.
- 2.2: header "A Vibrating **Spring**" for string (the header is kept; the
  note goes on its first paragraph); "u(x,y,)=0" for u(x,t) = 0; the note
  promises three steps and lists two; Example 2.2.2's substitution prints
  "+ (re^{rt})" for "− re^{rt}" and mixes C₂ and c₂; its title says
  boundary conditions for initial conditions; the closing sentence "When
  K > 0, the general solutions … are oscillatory" should read K < 0.
- 2.3: the hand-typed citations above; "Given the properties of sines,
  Equation (2.3.7) simplifies" cites the line before the one meant (2.3.8);
  the example ends on "X(x) = c₂ sin(ωx) with ω = nπ/L", reusing the angular
  frequency's symbol for the spatial constant p. Exercise 2.3.1's key writes
  sin(c₁t) for sin(c₂t) four times and never gives ψ₋'s nodes (at
  x = (n + ½)π/c₁); the key is kept, the note adds them.
- 2.4: hand-typed citations above; "boundary conditions from Equation
  (2.4.5)" (that is the general solution) and "the original ansatz (Equation
  (2.4.1))" (that is K = −p²); "frequencies nπ/L" for the modes, which is
  their spatial constant (the frequencies are ω_n = nπv/L); Exercise 2.4.1's
  key writes e^{√x x} for e^{√K x}, mixes √(kx) with √k x, and cites
  (2.4.2) for k = −p² and (2.4.3) for the equation it substitutes into.
- 2.5: "The math is now shown here" for "not shown"; "u(x,y,,z,t)"; ∇²
  printed as a vector (∂²/∂x², ∂²/∂y², ∂²/∂z²) rather than their sum;
  "ω = νk" and "ω = ν|k|" with ν for the velocity v; "k_x x + k_x + k_z z"
  for k_x x + k_y y + k_z z; "|\vec{k|}"; "than later"; the rectangular modes
  index A and ω by nm while the quantum numbers are n_x, n_y; c in the
  circular modes is the wave speed the rest of the chapter calls v;
  Exercise 2.5.1's key "one if and one is". Exercise 2.5.2's key checks out
  against the GIFs (sampled around the third panel: four positive and four
  negative lobes, so four nodal diameters 45° apart; the middle panel's two
  nodal circles sit near 0.28 and 0.64 of the radius, which the key calls
  about 1/3 and 2/3).

## Licences of the figures

The pages are all CC BY-NC-SA 4.0. The images are mixed: 2.1.1 CC BY-SA
4.0; 2.1.3 CC BY-NC-ND (Russell); 2.1.4 public domain; 2.1.5 = 2.3.1 "from
Wikipedia", no licence named; 2.4.1 CC BY-NC (Kaya); 2.4.2 "for non-profit
educational purposes" (ophysics.com), not an open licence; 2.5.1
"courtesy of Dr. Dan Russell", © 2018 in the frame; 2.5.2 "CC BY-SA-ND 4.0",
which is not a Creative Commons licence. Every one is replaced by our own
drawing, so the question is only whether the originals ship in
`originals` for the reader to call up (2.4.2 and 2.5.1 are the doubtful
ones).

## What is new to OmniStax here

- Displays inside list items (2.2's note and its K > 0 bullet) and
  multi-row numbering, which the draft tool now handles.
- A figure of captioned panels (2.5.1).
- The book's first surfaces: membrane modes as mathematical 3D.
- Two new types: **displacement** (the wave's displacement u, y, A_o,
  u_n, A_nm) and **time** (t). k, p and the wave vector are typed
  **wavenumber** (an angular wavenumber is a variant of the spectroscopic
  one of 1.4), ω, ω_n, ν_n and ω_nm **frequency**.

## The chapter's answer to root rule 23

The chapter is a rope you shake, a string you pluck and a drum you strike,
and its one idea is that a boundary turns a continuum of solutions into a
ladder counted by integers: the first quantum numbers. Every picture can
show that happening rather than state it. In 2.3 the reader turns the
separation constant and watches the far end of the string miss zero,
miss again, and land, only at p = nπ/L. In 2.4 the seven modes swing side by
side, faster as they gain nodes, and a plucked string is seen to be their
sum. In 2.5 the same integers appear twice over on a drum, and the nodal
lines and circles a reader counts there are the angular and radial nodes of
the hydrogen orbitals in Chapter 6. The stack of sin(nπx/L) built in 2.4 is
exactly the particle in a box of Chapter 3, and should be drawn so that
Chapter 3 can reuse it.

## Tool changes made for this chapter

- `tools/lt2md.py`: a figure's caption is its own direct `<figcaption>`
  (a panel's caption no longer replaces it), and each panel's caption is
  kept as `> panel:`; an unstarred `align` numbers each row without
  `\nonumber` and keeps those rows' `\nonumber`, writing
  `{eq:a} n=14 {eq:b} n=15`; a starred environment is never numbered;
  U+00A0 in a display becomes a space (KaTeX refuses it).
- `tools/md2html.py`: equation numbers come from the converter's `n=`
  rather than a count of labelled displays; a display inside a list item is
  set as a display, and labels inside list items are numbered; an align
  with several numbered rows keeps `align` with a `\tag` per row; panel
  captions go to the draft row's `_panels`.

Re-running the converter on Chapter 1 would change its numbering: each
two-row labelled `align` (1.1 Eq3, 1.2 Eq2a, 1.4 1.4.2, 1.5 1.5.1, 1.8
1.8.16B) takes two numbers under the row rule, and 1.2's unlabelled
`aligned` display takes one, so later numbers on those pages shift by one.
Chapter 1 was not touched; see `config.md`.
