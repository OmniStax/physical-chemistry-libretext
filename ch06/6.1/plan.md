# Plan: 6.1 The Schrodinger Equation for the Hydrogen Atom Can Be Solved Exactly (LibreTexts 13426)

Source: `source.md`; draft from `python3 tools/md2html.py 6.1` (deleted after the build).
Status: built 2026-11-08 in the Chapter 6 job, without a review stop (config: the chapter in one go).

No `<h2>` in the book, one figure (6.1.1), fourteen displays numbered (6.1.1)–(6.1.13)
(the radial and angular lines are one `align`, (6.1.9)), four unkeyed exercises, one pulled quote.

## Sub-concepts (page headers, all OmniStax's)

1. `hamiltonian` **The hydrogen atom's Hamiltonian**: the reduced particle, Figure 6.1.1, (6.1.1)–(6.1.3). Introduces `hydrogen-reduced-particle`, `hydrogen-schrodinger-equation`, `central-potential`.
2. `radial-angular` **The radial and angular equations**: the derivation `drv-separation` replacing (6.1.4), (6.1.5), (6.1.7), (6.1.9); then the book's prose in its order, with (6.1.6) and (6.1.8) as printed and the pulled quote. Introduces `angular-momentum-squared-operator`, `hydrogen-separation`.
3. `eigenvalues` **The angular momentum eigenvalues**: (6.1.10)–(6.1.12) as printed, `drv-radial` in place of (6.1.13), the closing paragraph, the extra Sim. Introduces `angular-momentum-eigenvalues`, `hydrogen-radial-equation`.

The sentences that only instruct a move ("multiply both sides … to obtain", "Substituting Equation 6.1.6 into Equation 6.1.5 produces") are carried by the derivation and dropped from the text (5.8's precedent); every other sentence is kept.

## Figures

- `sim-reduced` · Figure 6.1.1 · hydrogen-reduced-particle · standardisation only: a faithful copy (archetype 7) in convention colours (F.el p+, e-), r in the length hue, μ in the mass hue · arrows: symbolic (r) · still: nothing moves in the book's picture · no controls · headline: the reduced particle sits at the electron's distance r · two panels side by side · 2D (the book's 3D axes are a perspective for a relation along one line). Readout: μ = 0.99946 mₑ, r_p = 0.0288 pm, r_e = 52.89 pm. The GIF is kept as the original (no credit given).
- `sim-veff` · Sim (the extra simulation the config picked) · hydrogen-radial-equation, angular-momentum-eigenvalues · variation: choice l shows the l(l + 1)ħ²/2μr² wall rising out of the Coulomb well and the reachable stretch at Eₙ shrinking off the nucleus · arrows: none · still: a stationary state has no time · choices l (0–3) and n (l + 1 to 4) · headline: the turning points at the chosen Eₙ · graph alone, r 0–30 a₀, energy −15 to +5 eV · 2D.

## Derivations

- `separation` (score 8, as the exploration): *Derivations · the radial and angular equations of the hydrogen atom*, nodes (6.1.4), (6.1.5), (6.1.7), the divided equation, and the two lines of (6.1.9).
- `radial` (score 4: λ = l(l + 1)ħ² from 5.8, three unprinted moves): *Derivation · the radial equation*, ending at (6.1.13); its first fact links `separation`. The config named one record ending at (6.1.9) and (6.1.13); it is split in two so that the book's paragraphs on L̂² and its eigenvalue stand between them in the book's order. No fact links 5.8: none of 5.8's derivations ends at J(J + 1).

## Exercises

6.1.1–6.1.4, unkeyed, AI solutions (6.1.1 computed: 0.0288 pm, 52.89 pm, 9.104 × 10⁻³¹ kg; 6.1.2–6.1.4 cite the derivations). `place: end`.

## Corrections

The doubled "direction of r"; the unfinished sentence on (6.1.6); "Table M4"; "Equations 6.1.9 and 6.1.9" (the two lines of one display), in the text and in Exercise 6.1.3.

## Wanted at chapter level

None.
