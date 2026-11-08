# Plan: 5.8 The Energy Levels of a Rigid Rotor (LibreTexts 13422)

Source: `source.md`; draft from `python3 tools/md2html.py 5.8`.
Status: built 2026-11-08 in the Chapter 5 job, without a review stop. Licence CC BY-NC-SA 4.0.

Five objectives, four figures, 28 numbered equations, one worked example (printed 5.8.7), ten exercises, one table,
one note, three pulled quotes, a Summary (to `summary_html`) and References (kept as the closing block).

## Sub-concepts (page headers)

1. `opening` **Rigid rotors** (agent's header). Reinforces `rigid-rotor`.
2. `the-classical-rigid-rotor-in-3d` (book's): (5.8.1)–(5.8.3), the derivation of T = ½Iω², L = Iω (5.8.7) kept in the text after it. Introduces `angular-velocity`, `angular-momentum`, `moment-of-inertia`, `rotational-kinetic-energy`.
3. `the-quantum-rigid-rotor-in-3d` (book's, with ### Solving the φ / Θ equations): Figure 5.8.1 + 5.8.4, (5.8.9), the separation derivation, (5.8.16)–(5.8.19), the cyclic-boundary derivation, Table 5.8.1, (5.8.22)–(5.8.24), Figure 5.8.2, the note, Example 5.8.7. Introduces `spherical-coordinates`, `rigid-rotor-schrodinger-equation`, `separated-rotor-equations`, `cyclic-boundary-condition`, `rotor-phi-functions`, `associated-legendre-functions`, `rotor-quantum-numbers`, `rotor-energy-levels`, `rotor-degeneracy`.
4. `spherical-harmonics` (book's): (5.8.25)–(5.8.28), Figure 5.8.3. Introduces `spherical-harmonics`, `rotor-orientation-probability`, `quantum-rotor-not-classical`.
5. `references` (book's).

## Figures

- `sim-sphere` · Figure 5.8.1 + 5.8.4 · spherical-coordinates, rigid-rotor · 3D: an angle in space the book draws in perspective twice; sliders θ (0–180°, 50) and φ (0–360°, 40) move the internuclear axis over the sphere of radius r₀, with θ's and φ's arcs and the drop line · arrows: the axis vector (symbolic) · still · readout x, y, z in r₀ · mathematical 3D (`F.space3d`), free orbit, no buttons, flat fallback from the library.
- `sim-rotor-levels` · Figure 5.8.2 · rotor-energy-levels, rotor-degeneracy · variation by choice: J lights its level, its 2J + 1 states and the gap above, so the growing gaps and the degeneracy are read off one drawing · arrows: none · still · choice J 0–4 · headline: states and gap of the chosen level · graph alone · 2D. A slider for I was dropped: in units of ħ²/2I it would change nothing visible (rule 26.6).
- `sim-ylm` · Figure 5.8.3 · spherical-harmonics, rotor-orientation-probability, quantum-rotor-not-classical · two views (archetype 10): 2D polar plot of |Y|² against θ (z up) and the 3D surface of revolution about z, mounted on the first switch; dropdown (J, |m_J|) for J ≤ 2 (orchestrator: Chapter 6 owns the orbitals), opening on (1, 0); slider θ marks one direction and reads |Y|² there · still · one scale for every state · mathematical 3D, free orbit.

## Exercises

Keyed (book): 5.8.3, 5.8.4 (N = 0.3989), 5.8.6 (0, 2, 6, 12, 20, 30), 5.8.7 (key corrected: the levels spread). AI solutions: 5.8.1 and 5.8.2 (citing the separation derivation, as the orchestrator decided), 5.8.5, 5.8.8 (0.0808), 5.8.9, 5.8.10. All at the end.

## Derivations

- `rotor-kinetic` · *Derivation · the kinetic energy of a rotor* · score 4 · replaces (5.8.4)–(5.8.8) with the correct vector algebra (node note on the book's ω X r and scalar ω); (5.8.7) stays printed after it because its paragraph introduces I.
- `rotor-separation` · *Derivation · the separated equation of the rigid rotor* · score 8 · replaces (5.8.10)–(5.8.15) and their connecting words; results (5.8.12) and (5.8.15); λ = 2IE/ħ² (5.8.14) is a fact. The separation paragraph and (5.8.16), (5.8.17) stay printed, so Exercise 5.8.2 keeps its work.
- `cyclic` · *Derivation · the allowed values of m_J* · score 3, built as the config says; results (5.8.20), (5.8.21); Euler from 2.3 as a fact, Exercise 5.8.5 stays an exercise.
- Kept: (5.8.22)–(5.8.24), Example 5.8.7.

## Corrections

φ + 2φ; Table 5.8.1's last Φ; "greater than or equal to m_J"; Example 5.8.7's "1 au" and 5.71 × 10⁻²⁷ J (5.72 × 10⁻²³ J); "Figure 5.8.2" for the sphere; Exercise 5.8.1's hint; 5.8.7's key; 5.8.8's missing φ; 5.8.9 and 5.8.10's θ for φ and Figure 5.8.1 for 5.8.3; (5.8.13)'s ψ(φ) and (5.8.4)–(5.8.6) as derivation node notes. Typos ("simplifys", "In reality", "deminesions") left as printed.

## Wanted at chapter level

None (θ stays plain, as the orchestrator decided).
