# Plan: 5.6 The Harmonic Oscillator Wavefunctions involve Hermite Polynomials (LibreTexts 13420)

Source: `source.md` (`python3 tools/convert.py 5.6`); draft from `python3 tools/md2html.py 5.6`.
Status: built 2026-11-08 in the Chapter 5 job, without a review stop (config agreed).

One "objective" (a copy of 5.2's title, dropped and named in `notes`), three
numbered figures (5.6.2 and 5.6.3 four panels each), nineteen numbered equations
(5.6.1–5.6.19), eleven exercise boxes (one keyed), one note. Licence CC BY-NC-SA 4.0;
authors Zielinski et al. (page tags).

## Sub-concepts (page headers)

1. `schrodinger-equation` **The oscillator's Schrödinger equation** (agent's): one mode per diatomic, Ĥ = T̂ + V̂ (5.6.1), Ĥ(q) (5.6.2), (5.6.3), the TISE (5.6.4), (5.6.5), β (5.6.6), x = q/β (5.6.7), derivation (5.6.8)–(5.6.9). Introduces `scaled-oscillator-equation`; reinforces `hamiltonian-operator`, `harmonic-oscillator-schrodinger-equation`.
2. `solving-for-the-quantum-wavefunctions` **Solving for the Quantum Wavefunctions** (book's, with its ### Hermite Polynomials): the asymptotic strategy, (5.6.10), (5.6.11), derivation of the tail, the power series (5.6.12), (5.6.13), H₀–H₇, Figure 5.6.1, N_v (5.6.14), ψ_v (5.6.15), the note, E_v (5.6.16), Figure 5.6.2 + 5.6.3, nodes and parity, the correspondence principle. Introduces `asymptotic-series-method`, `hermite-polynomials`, `oscillator-wavefunctions`, `oscillator-wavefunction-parity`; reinforces `oscillator-energy-levels`, `correspondence-principle`.
3. `tunneling` **Tunneling in the Quantum Harmonic Oscillator** (book's): the forbidden region, derivation (5.6.17)–(5.6.19), the error function, 0.157, tunneling. Introduces `oscillator-tunneling-probability`, `error-function`, `quantum-tunneling`.

## Figures

- `sim-hermite` · Figure 5.6.1 · hermite-polynomials, oscillator-wavefunctions · variation by choice: the reader picks a degree and sees the polynomial leave the frame above while the same polynomial times the Gaussian returns to zero below, which the book's plot of bare polynomials cannot show · arrows: none · still: no time in it · choice v 0–7 (the book's eight) · headline: H_v grows like xᵛ and the Gaussian still takes ψ_v to zero · two graphs on one x (−4.5 to 4.5): H₀–H₅ faint as the book draws them with H_v bold and labelled where it leaves the frame (the others named by hover), ψ_v below (wavefunction) · 2D. Opens on v = 3. Original: Damato et al. SVG (CC BY-SA 3.0).
- `sim-states` · Figure 5.6.2 + 5.6.3 · oscillator-wavefunctions, oscillator-wavefunction-parity, correspondence-principle, classically-forbidden-region, oscillator-tunneling-probability · variation by slider: the reader climbs v from 0 to 50 and sees the nodes add up, the density pile up at the turning points over the dashed classical density (5.1's), and the share beyond the turning points shrink but never vanish; the book's eight panels stop at v = 3 · arrows: none · still: a stationary state has no time in it · slider v 0–50, detents 0, 1, 2, 3 (the book's) and 10, 20, 50 (Exercise 5.6.9) · headline: nodes, parity and the percentage beyond the turning points · two graphs on one x: the well in ħω with the level and ψ_v drawn on it, the forbidden regions shaded beyond ±√(2v+1); below, |ψ_v|² filled and the classical density dashed, legend above · zoom (the one exception): x runs to ±max(4, 1.3 x_v) and the energy to 1.35(v + ½), the density axis to its tallest peak · 2D. Opens on v = 0, whose 0.157 matches Equation 5.6.19. The book's panels draw the densities reaching zero at finite x; the figure shows the tails (no marker). Originals: the eight uncredited SVGs, under the page's licence (Chapter 3's decision).

Extra simulations: none.

## Exercises

All at the end. Keyed: Exercise 5.4.1 (from 5.4, `source_section`), Exercise 5.6.8 (correction footnote on its figure numbers and "n"). AI solutions: 5.6.1 and 5.6.3 (following the derivation and the series), 5.6.2 (garbled prompt read as v = 0–3, correction footnote), 5.6.4 (β in m, x unitless), 5.6.5 (N₀ = 0.751, N₄ = 0.0383), 5.6.6 (six parts; ħω = 5.96 × 10⁻²⁰ J at 3000 cm⁻¹), 5.6.7, 5.6.9 (forbidden share 6.0% at v = 10, 4.8% at 20, 3.6% at 50), 5.6.10 (0.157 and 0.112), 5.6.11 (Simpson, 0.843). No AI exercises (config).

## Derivations

- `scaled-equation` (score 7): *Derivation · the oscillator equation in a scaled coordinate*, replacing "so that (5.6.8) After substituting … becomes (5.6.9)"; (5.6.1)–(5.6.7) stay printed, the definitions β and x being cited elsewhere. Results (5.6.8), (5.6.9); the citation that omits (5.6.7) is a node note. It works Exercise 5.6.1, which is kept with an AI solution citing it (orchestrator).
- `gaussian-tail` (score 4): *Derivation · the wavefunction's tail at large x*, after "where the wavefunctions are …": drop the constant at large x, e^{−x²/2}'' = (x² − 1)e^{−x²/2}, the growing solution rejected by (5.6.10).
- `forbidden-probability` (score 7): *Derivation · the ground state beyond its classical limits*, replacing (5.6.17)–(5.6.19) and the prose between; results (5.6.18), (5.6.19), ERF(1) = 0.843, P[forbidden] = 0.157; (5.6.17) kept as a fact. Node note: the integral from Q₀ to ∞ is 1 − ERF(1), contrary to "cannot".
- (5.6.13) → (5.6.16): stays (the recursion is never stated).

## Corrections

Footnotes: "As shown in Equation 5.6.1, the classical expression" (Ĥ, not the classical energy); the power series' c_n(v) terms; the note's Q for q, α = 1/√β (1/β²), ψ_v(x) for ψ_v(Q); "the graph you constructed for Exercise 5.6.3" (5.6.10); Exercise 5.6.2's garbled levels; Exercise 5.6.8's key. Node notes: the substitution citation; "cannot" be found in tables. Left as printed: "polytatomic", "chancing" (in the replaced run), "ERF(l)".

## Wanted at chapter level

None.
