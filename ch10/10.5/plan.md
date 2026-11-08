# Plan: 10.5 The pi-Electron Approximation of Conjugation (Hückel Theory) (LibreTexts 13474)

Source: `source.md` (`python3 tools/convert.py 10.5`); draft from `python3 tools/md2html.py 10.5` (deleted once built).
Status: built 2026-11-08 in the Chapter 10 job, without a review stop (config agreed).

One objective, six numbered figures, eleven numbered displays, no worked example, no exercise, three notes, two pulled quotes. Seymour Blinder, CC BY-NC-SA 4.0. The objective's zero-width space in "Hückel" is dropped (config).

## Sub-concepts (page headers)

1. `conjugation` **Conjugation and π electrons** (ours; exploration proposed "Conjugation and π Electrons"): Hückel 1931, ethylene's sp² σ framework, Figure 10.5.1, σ–π separability, the note "Conjugated Systems". Introduces `conjugated-system`, `sigma-pi-separability`, `huckel-approximation`.
2. `ethylene` **Ethylene** (book's): Figure 10.5.2, hybrids against atomic orbitals, Figure 10.5.3, the pulled quote, (10.5.1)–(10.5.6) (7.2's secular equations, kept as printed and cited), Hückel's four assumptions, the note on the Hamiltonian matrix, the derivation replacing (10.5.7)–(10.5.11) and N₁ = N₂ = 1/√2, the energies list, Figures 10.5.4 + 10.5.5, the HOMO/LUMO quote, Figure 10.5.6, the note "Limitations of Hückel Theory". Introduces `huckel-coulomb-integral`, `resonance-integral`, `huckel-x`, `ethylene-pi-orbitals`, `homo-lumo-gap`.

## Figures

- `sim-ethylene-frameworks` · Figure 10.5.1 · sigma-pi-separability, conjugated-system · depth: the σ bonds in the plane and the π bond above and below it is an arrangement in space the book's flat sketch implies · arrows: none · still: nothing has a time · choice of framework (both, σ bonds, π bond), opening on both so the point shows at once · headline: where each framework lies · mathematical 3D (config), point clouds: σ bonds schematic Gaussians in muted ink (one sign), the π bond φ₁ + φ₂ sampled from |ψ|² in two tones of the wavefunction hue, the molecular plane a faint sheet; free azimuth, elevation ±85°, no buttons; flat fallback by `F.space3d`. Readout counts the electrons in each framework (10 and 2, the caption's numbers). Conventions C, H.
- `fig-10-5-2` · Figure 10.5.2 · kept: the mixing itself is 10.1's figure, and the text points here.
- `fig-10-5-3` · Figure 10.5.3 · sigma-pi-separability · faithful copy (archetype 7), kind `figure`, still, no controls: the σ and π ladders in two instance colours (`F.cat`) with a legend, spins in the electron convention · standardisation only. Original shipped.
- `sim-two-p` · Figure 10.5.4 + 10.5.5 · ethylene-pi-orbitals, resonance-integral · variation by slider: every normalized mix ψ = cos θ φ₁ + sin θ φ₂ and its energy ⟨E⟩ = α + β sin 2θ, so α ± β are seen as the bottom and top of a curve rather than two printed bars · arrows: none (spins not drawn; the occupation is in the text) · still · slider θ 0–180° (untyped), specials at 45° (π₁, the opening) and 135° (π₂) · headline: where the mix sits against α · scene (two carbons, p lobes sized by |c| and toned by sign, a node line when the signs differ) above a graph of E − α in kJ/mol (β = −75 kJ/mol, 10.6's estimate), y fixed −90 to 90 · 2D. Readout ψ and ⟨E⟩ = α + 2c₁c₂β with live coefficients.
- `fig-10-5-6` · Figure 10.5.6 · kept: computed pictures the text points at; the caption's broken maths set as $|\psi_1\rangle$ (exploration). No widths: a photo row takes one, and the figure has two images.

Extra simulations: none (config).

## Exercises

None printed. One AI exercise (config): `a1`, ethylene's HOMO–LUMO gap with β = −75 kJ/mol (150 kJ/mol) and the photon wavelength it implies (798 nm), numeric, tests `homo-lumo-gap`, `ethylene-pi-orbitals`.

## Derivations

- (10.5.1)–(10.5.6): 7.2's secular equations, kept as printed (repeated material, config); the derivation below links 7.2's `secular`.
- (10.5.7)–(10.5.11), N = 1/√2: block with words, qualifies. **Built**: `ethylene-pi`, *Derivations · the π orbitals of ethylene*, seven nodes: (10.5.7), (10.5.9), x = ±1, E = α ∓ β, (10.5.10), (10.5.11), N₁ = N₂ = 1/√2. Node notes: "E = α −± 1 × β"; "(x = −1)" for the higher orbital (x = +1); the kets missing their bars. The energies list and Figure 10.5.4's citation stay in the text after it.

## Corrections

Footnotes: "the the σ-bonding framework" (π); a₁ repeated in the atomic-orbital expansion; "{c_i} are coefficients describing the hybridized orbital" ({b_i}, and b₁ repeated); "(Figure 10.5.1; left) … (Figure 10.5.2; right)" (10.5.1 (a) and (b)); "(i ≠ i)". Spelling slips ("hydrocarbones", "often call", "Either describe", "Schemetic") kept without notes.

## Wanted at chapter level

None.
