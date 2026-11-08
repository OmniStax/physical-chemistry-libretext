# Plan: 15.2 The Dynamics of Transitions can be Modeled by Rate Equations (LibreTexts 13648)

Source: `source.md`; draft from `python3 tools/md2html.py 15.2` (deleted after the build).
Status: built 2026-11-08 in the Chapter 15 job, without a review stop (config: the chapter in one go).

One figure, fourteen numbered displays (15.2.1–15.2.14), one unnumbered display, four rate laws as lone inline
maths (kept as printed). Shared CC BY-SA 4.0 (Wikipedia's text; the orchestrator's decision); credits Mitofsky,
Weideman, Wikipedia, Neils, in `notes`. Maths through the macros (`\krhonu`, `\knuonetwo`, `\knutwoone`, `\kEone`,
`\kEtwo`, `\kdE`, `\kT`, `\kt`, `\krho`, `\knu`).

## Sub-concepts (page headers)

1. `interaction` **The Interaction of Light with Atoms** (book's): the three processes, Figure 15.2.1, stimulated emission (bold), the acronym, thermal populations, no laser. Introduces `stimulated-emission`, `laser`, `level-population`, `thermal-population-ratio`, `no-lasing-at-equilibrium`; uses `boltzmann-distribution`, `photon`.
2. `einstein-coefficients` **Einstein Coefficients** (book's, h3s kept): ρ_ν, B₁₂, A₂₁, B₂₁. Introduces `einstein-coefficients`, `photon-absorption`, `spontaneous-emission`; uses `spectral-energy-density`, `bohr-frequency-condition`.
3. `relationship` **The Relationship between A₂₁, B₁₂, and B₂₁** (book's, with its subscripts): (15.2.1), (15.2.2), derivation `einstein-relations`, (15.2.12)–(15.2.14). Introduces `two-level-rate-equation`, `einstein-relations`, `net-upper-state-rate`, `population-inversion`; uses `plancks-distribution-law`, `degree-of-degeneracy`.

## Figures

- `sim-einstein` · Figure 15.2.1 · photon-absorption, spontaneous-emission, stimulated-emission · flow by animation, variation by slider · arrows: kinematic (photons travelling, the electron rising or falling) · moving: 5 s loop; A a photon arrives and lifts the electron; B the electron drops at a moment and in a direction that change each loop (a fixed sequence); C the passing photon and the stimulated one leave together crest on crest · slider E₂ − E₁ 1.65–3.10 eV (`energy`), default 1.96 eV (633 nm, the He–Ne line of 15.6), photons in their real colour · headline: hν₁₂ = E₂ − E₁ and the wavelength · the book's three lanes, levels labelled in lane A only, electrons `F.el('e-')` · 2D. Original kept (Kaya, CC BY-NC); its file is served under a name without commas (`media/ch15/399463-abs_spon_emiss_stim_emiss.svg`), since the original name broke `data-original`'s comma-separated list in the build.

Extra simulations: thermal populations of two levels, offered and not built (config).

## Exercises

The book sets none. AI exercises (config): ai1 N₂/N₁ for a 2.0 eV gap, g₁ = g₂, at 300 K (2.5 × 10⁻³⁴) and 3000 K (4.4 × 10⁻⁴), computed; tests `thermal-population-ratio`, `no-lasing-at-equilibrium`. ai2 A₂₁/B₂₁ at 632.8 nm (6.57 × 10⁻¹⁴ J·s/m³) and B₂₁ from A₂₁ = 6.56 × 10⁶ s⁻¹ (9.98 × 10¹⁹ m³ J⁻¹ s⁻²), computed; tests `einstein-relations`, `einstein-coefficients`.

## Derivations

- `einstein-relations` · "the relations between the Einstein coefficients" · score 6 (exploration), printed with words: six nodes, results (15.2.4), (15.2.6), (15.2.8), (15.2.9), (15.2.11), (15.2.10). Facts: (15.2.2), equilibrium (constant N), ν₂₁ = ν₁₂ (inserted move), Boltzmann with degeneracies ((15.2.5), 13.2), Planck ((15.2.1), 1.2), and "both hold at every T" for the matching step, which carries the one reason. (15.2.11) is derived before (15.2.10), which uses it. Displays (15.2.3)–(15.2.11) leave the text; the book's sentences stay, the host after "and"; (15.2.1) and (15.2.2) stay printed as facts. 15.3 links this id.
- (15.2.12) → (15.2.13) → (15.2.14): stays printed (2 moves).

## Corrections

Footnotes: `c-energy-of-state` (the number of atoms times the energy of that state); `c-kt` (k_BT ≈ 1/40 eV, not 140 eV); `c-exponential` (a level's population falls exponentially with its energy over k_BT); `c-degeneracy` (g is the number of states of a level, not of electrons). `$g2$` set as $g_2$ (TeX slip, no note).

## Wanted at chapter level

- variables row, 15.2: `{"sym": "nu", "type": "frequency", "meaning": "the frequency of the light", "unit": "Hz", "section": "15.2"}` (the text writes ρ_ν = dρ/d`\knu`).
