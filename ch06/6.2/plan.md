# Plan: 6.2 The Wavefunctions of a Rigid Rotator are Called Spherical Harmonics (LibreTexts 13427)

Source: `source.md`; draft from `python3 tools/md2html.py 6.2` (deleted after the build).
Status: built 2026-11-08 in the Chapter 6 job, without a review stop.

Two book headers, six figures, one numbered display (6.2.1), three tables (two captioned
"Table 6.2.1", kept as printed with a note), nine exercise boxes, one note. No author: the book's credit.

## Sub-concepts (page headers)

1. `quantum-numbers` **The three quantum numbers** (OmniStax's): ψ = RY (6.2.1), the names and allowed values, n², the note, Φ and Θ, Figure 6.2.1, Table 6.2.1. Introduces `hydrogen-wavefunctions`, `radial-function`, `principal-quantum-number`, `angular-momentum-quantum-number`, `magnetic-quantum-number`, `hydrogen-quantum-number-rules`, `hydrogen-degeneracy`, `orbital-letter-codes`.
2. `atomic-orbitals` **Atomic Orbitals** (book's): the two tables of orbitals, picturing densities, Figure 6.2.2, the radial functions and nodes (Figure 6.2.3 + 6.2.4 + 6.2.5 + 6.2.6 stands at 6.2.3). Introduces `atomic-orbital`, `real-orbitals`, `orbital-density-plots`, `radial-node`, `radial-node-count`, `s-orbital-at-nucleus`, `radial-probability-density`.
3. `distributions` **Probabilities and Distribution Functions** (book's). Introduces `radial-distribution-function`.

## Figures

- `sim-harmonics` · Figure 6.2.1 · spherical-harmonics, orbital-letter-codes · depth and variation: the 36 real Y from l = 0 to 5 as the book's pyramid, and one enlarged that turns, with its nodal cones and planes faint; the still shows the lobes from one side only · arrows: none · still: an angular function has no time in it · choices l (0–5), m_l (−l to l), opening on (2, +1) · headline: the nodal surfaces of the chosen one (cones about z, the xy-plane, planes through z) · pyramid above as a locked view (36 meshes in one orbiting scene would turn as one board), the chosen one below in mathematical 3D, free orbit, no buttons, flat fallback from the library. Sign in two tones of the wavefunction hue.
- `sim-contour` · Figure 6.2.2 · orbital-density-plots, radial-node, real-orbitals · variation: any two of Table 6.2.2's orbitals that are not zero in the xy-plane, side by side, opening on the book's 2p_x and 3p_x; the radial node circles dashed · arrows: none · still · two selects · no headline (the panel names and the caption carry it) · |ψ|² as a fraction of each panel's greatest value, one false-colour scale (viridis stops, facts) with its legend, contours at 0.02, 0.1, 0.3 … 0.9 · 2D: the slice through the nucleus is the book's view and the clearer one. The original caption's "R(r)²" is corrected through the row.
- `sim-radial` · Figure 6.2.3 + 6.2.4 + 6.2.5 + 6.2.6 · radial-function, radial-node, radial-node-count, radial-probability-density, radial-distribution-function, s-orbital-at-nucleus · variation with a morph: R, R² and r²R² on one r axis; changing the orbital bends the curves so the nodes slide in as n grows; the probe reads all three · arrows: none · still (the morph is the choice's) · choice of 1s, 2s, 2p, 3s, 3p, 3d (Table 6.4.1's six), opening on 2s (the book's Figure 6.2.6); probe slider r 0–25 a₀, default the 2s node at 2 a₀, nodes as specials · headline: the number and places of the radial nodes · three stacked graphs; r fixed 0–25 a₀, the y ranges follow the orbital (the zoom this line names: 3d's R is a fiftieth of 1s's) · 2D. Draws r²R², not the book's 4πr²R² (correction through the row and in the text).

## Exercises

Nine cards, all `place: end`. Keyed (book's key, `generated_by: source`): 6.2.1, 6.2.4, 6.2.6, 6.2.7, 6.2.8, 6.2.9, with corrections on 6.2.4, 6.2.7, 6.2.8 (two) and 6.2.9. AI solutions: 6.2.2, 6.2.3, 6.2.5. Merged: 6.4.4–6.4.6 into 6.2.2–6.2.4 and 6.5.1–6.5.4 into 6.2.5–6.2.8 (`exercise_notes` names them; 6.5.4's longer key is named, 6.2.8's kept). No AI exercises here (config).

## Derivations

None: the radial distribution is prose (score 1).

## Corrections

The azimuthal angle Θ (it is the polar angle θ); "Legendre polynomials" (associated Legendre functions); the second "Table 6.2.1"; R*R as the density at a point; the display's label and its 4π (r²R*R); Figure 6.2.2's caption and Figures 6.2.5, 6.2.6's 4π through the figure rows; the keys above.

## Wanted at chapter level

None.
