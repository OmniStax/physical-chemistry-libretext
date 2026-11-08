# Plan: 3.5 The Energy of a Particle in a Box is Quantized (LibreTexts 13395)

Source: `source.md` (`python3 tools/convert.py 3.5`); draft from `python3 tools/md2html.py 3.5`.
Status: built 2026-11-08 in the Chapter 3 job, without a review stop (config: the chapter in one go).

Three objectives, five numbered figures (all replaced), twenty-two numbered equations (3.5.1–3.5.22, one
per display, the converter's numbering), two worked examples, one inline exercise (keyed), three notes,
one pulled quote. Licence CC BY-NC-SA 4.0; author S. M. Blinder (page tags).

## Sub-concepts (page headers)

The book's one `<h2>` (Orthonormality of the Eigenstates) is kept. The long opening holds the whole
solution, so it is divided into four blocks of ours (root rule 3) instead of the exploration's single
"The Box and Its Energies":

1. `box` **A particle in a box**: the Schrödinger equation, V(x), the potential well, (3.5.1), the boundary conditions (3.5.2). Introduces `particle-in-a-box`, `box-potential`.
2. `energies` **Quantized energies**: the derivation of Eₙ (3.5.3–3.5.10), the quantum number, the folded Figure 3.5.1 + 3.5.2 + 3.5.3, E₁ (3.5.11), ground state, the Zero Point Energy note (3.5.12). Introduces `pib-energy-levels`, `ground-state`, `zero-point-energy`.
3. `wavefunctions` **The wavefunctions**: ψₙ = A sin(nπx/L) (3.5.13), the normalization condition (3.5.14), the normalization derivation (3.5.15–3.5.16), the violin string, the Nodes and Curvature note, Example 3.5.1. Introduces `pib-wavefunctions`, `normalization-condition`, `nodes-and-energy`.
4. `time-dependence` **Time dependence**: the note with (3.5.17) and Figure 3.5.4, the pulled quote. Reinforces `stationary-state`, `nodes-and-energy`.
5. `orthonormality-of-the-eigenstates` **Orthonormality of the Eigenstates** (book's): (3.5.18), Figure 3.5.5, the identity (3.5.19), (3.5.20) and its derivation, (3.5.21), the Kronecker delta (3.5.22), Example 3.5.2. Introduces `orthogonality`, `kronecker-delta`, `orthonormality`, `pib-orthonormality`.

## Figures

- `sim-ladder` · Figure 3.5.1 + 3.5.2 + 3.5.3 · particle-in-a-box, box-potential, pib-energy-levels, pib-wavefunctions, nodes-and-energy · variation by slider: one box holds the walls (3.5.1), the ladder with each ψₙ on its rung (3.5.2) and the chosen |ψₙ|² (3.5.3); stepping n shows a node added per rung and the rungs spreading as n², which three separate stills only sample · arrows: none · still: an energy level has no time in it · slider n 1–20 (untyped, detents at the book's 1, 2, 3, 20), slider L 0.20–2.00 nm (length, default 1.00 nm, an electron); energy in units of E₁ so L moves the readout only · headline: level n at n²E₁ with n − 1 nodes · scene and graph: the ladder above on an energy axis that zooms with n (0 to max(4.6, 1.15n²), the one zoom), |ψₙ|² filled below on the same x; rung labels only for the chosen rung and the ground rung, the rest by hover; walls shaded with one V = ∞ label · 2D. Opens on n = 3, the book's top state. Originals: the three OpenStax images, their captions joined in the row.
- `sim-phase` · Figure 3.5.4 · stationary-state, pib-wavefunctions, eigenstate-superposition · flow by animation: the phase e^{−iEₙt/ħ} turns while |Ψ|² stays still, and a mix of two levels sloshes; the GIF shows the turning but no density · arrows: kinematic (the classical ball's momentum, riding with it) · moving: one loop is one ground-state period T₁ = h/E₁ = 11.0 fs for an electron in a 1.00 nm box, drawn over 5 s; ψₙ turns n² times per loop, the superposition sloshes three times (E₂ − E₁ = 3E₁), the ball makes two round trips (p = h/2L) · choice classical / ψ₁ / ψ₂ / ψ₃ / ψ₁ + ψ₂ (the book's four panels and the superposition), opens on ψ₂ · headline: how many turns per ground-state turn, or that the density sloshes · Re (solid) and Im (dashed) above with a phase dial beside, |Ψ|² filled below; for the superposition the readout follows P(0, L/2) = ½ + (4/3π)cos((E₂ − E₁)t/ħ) instead of the exploration's ⟨x⟩, which 3.7 introduces (rule 26.5) · 2D.
- `sim-ortho` · Figure 3.5.5 · orthogonality, pib-orthonormality, kronecker-delta · variation by choice: any pair of ψ₁–ψ₄ and the product's positive and negative areas, which the book shows for three fixed pairs · arrows: none · still · choices m and n 1–4, opens on (1, 2), the book's first pair · headline: the areas cancel, or the area is 1 when m = n · ψₘ, ψₙ above in referent colours (`psi-1`–`psi-4`), the product below in ink with its two areas in two shades and a two-swatch legend; readout ∫ψₘψₙdx = δₘₙ with the two areas added · 2D.

No photograph or unnumbered image. The originals' captions are kept in the rows without TeX: the build renders maths inside an attribute and breaks it (reported).

## Exercises

- `e1` Exercise 3.5.1 (keyed, 1/2), number answer.
- `e2` Exercise 3.7.2 (keyed, open), `source_section: 3.7`: level spacing as mL² grows (Eₙ is this section's).
- `e3` Exercise 3.7.3 (unkeyed, AI solution), `source_section: 3.7`: nodes and energy; its "graphs you made above" is corrected.
- `e4` Exercise 3.7.7 (unkeyed, AI solution), `source_section: 3.7`: the six integrals for n ≤ 3, by symmetry about L/2 and the identity (3.5.19).
- `ai1` AI: E₁ of an electron in a 1.0 nm box, 0.376 eV (computed: 6.025 × 10⁻²⁰ J).
- `ai2` AI: the photon of the 1 → 2 jump in that box, 1099 nm (ΔE = 3E₁).

## Derivations

- `pib-energy` (score 4; printed as equations with words between): *Derivation · the energy levels of a particle in a box*, replacing the run from "Inside the box, V(x) = 0 … free-particle form:" (the sentence kept as the lead-in) to "with n = 1,2,,3...": six nodes, results (3.5.3), (3.5.4), (3.5.7), (3.5.8), (3.5.9), (3.5.10); facts (3.5.2), (3.5.5), (3.5.6), the trivial solution, sin θ = 0, n ≠ 0, ħ = h/2π (3.1). Notes on ψ(a) for ψ(L), sin kx for sin kL, and the citation of 3.5.4 for 3.5.5.
- `pib-normalization` (score 4): *Derivation · the normalized wavefunctions of a particle in a box*, replacing "(3.5.15) … with n = 1,2,3..." after "Substituting Equation 3.5.13 into Equation 3.5.14,"; results (3.5.15), A = √(2/L), (3.5.16).
- `pib-orthogonality` (score 5; hidden "to show"): *Derivation · orthogonality of the eigenfunctions of a particle in a box*, after (3.5.20); the substitution into (3.5.19), integration, sin jπ = 0.

The config's one record for Eₙ and ψₙ is two: the book prints the two chains as blocks separated by Figure 3.5.2, the ground state and the zero-point note, and one host would show one of them twice (rule 29.2). The (3.5.13) step (B = 0, k = nπ/L) stays printed as the book's own two-move prose. The note's phase expansion cites 3.1's derivation (orchestrator); its displays stay as printed. Examples 3.5.1, 3.5.2 stay as printed (score 1).

## Corrections

Footnotes: "given by Equation 3.5.13 … = a" (means 3.5.6); ∫₀ᵃ in (3.5.14); the imaginary part's cos(Eₙt/ħ) − π/2; "The normalization (Equation 3.5.18)" (means 3.5.14); orthonormality cited as 3.5.22 (means 3.5.21); Example 3.5.2's −∞ to ∞ limits; its "integrand is odd" (about L/2); Figure 3.5.2's "first four" (through the row); Exercise 3.7.3's missing graphs. In derivation notes: ψ(a), sin kx, the 3.5.4/3.5.9 citation. Left as printed (grammar or typing, meaning clear): "used to describing" (objective), "allows"/"depends", "n = 1,2,,3" (inside the replaced run), "infinite-denumerably", "eignestates", Exercise 3.5.1's "(.e.,".

## Wanted at chapter level

None.
