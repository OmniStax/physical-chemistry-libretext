# Plan: 7.1 The Variational Method Approximation (LibreTexts 13434)

Source: `source.md`; draft from `python3 tools/md2html.py 7.1` (deleted).
Status: built 2026-11-08 in the Chapter 7 job, without a review stop (config: the chapter in one go).

Four objectives (kept as printed, typos included), three numbered figures, ten numbered displays
(7.1.1–7.1.10), one inline exercise (keyed), one table, one pulled quote. Licence CC BY-NC-SA 4.0;
credit Theodore Zielinski (tag).

## Sub-concepts (page headers)

1. `opening` **Beyond independent electrons** (ours, the exploration's proposal through the humanizer): the one sentence before the first header.
2. `true-energy` **The True (Experimentally Determined) Energy of the Helium Atom** (book's): (7.1.1), I₁, I₂, E_true. Introduces `ionization-energy`, `helium-ground-state-energy`.
3. `ignorance-is-bliss` **The "Ignorance is Bliss" Approximation** (book's): (7.1.2)–(7.1.5) and −8R_H, replaced by the derivation. Introduces `independent-electron-approximation`, `additive-electron-energies`.
4. `shielding` **Shielding and Penetration** (book's): Z_eff, Figure 7.1.1, the variational principle as the criterion. Introduces `shielding`, `effective-nuclear-charge`.
5. `variational-method` **A Better Approximation: The Variational Method** (book's): (7.1.6), (7.1.7), Figure 7.1.2, the quote. Introduces `trial-wavefunction`, `variational-energy`, `variational-principle`, `variational-method`.
6. `helium-ground-state` **Application to the Helium atom Ground State** (book's): (7.1.8)–(7.1.10), Figure 7.1.3, Table 7.1.1. Introduces `helium-variational-energy`.

## Figures

- `sim-shielding` · Figure 7.1.1 · shielding, effective-nuclear-charge · variation by slider: electron 2 moves out through electron 1's 1s cloud (ζ = 27/16) and the charge it feels falls from 2 to 1, which the book's sketch only asserts · arrows: symbolic (the pull of the nucleus and the push of the enclosed charge, lengths in proportion to the charges) · still: nothing has a time · slider r₂ 0.1–4 a₀ (length), opens at 1 a₀ (the book prints no number) · headline: Z_eff at r₂ · graph beside: Z_eff = 2 − q_inside(r₂), 0–4 a₀ · 2D (a sphere reads the same as its slice). Referents electron 1 and 2; conventions He, e⁻. Readout uses 6.5's enclosed fraction (orchestrator). Original shipped.
- `fig-7-1-2` · Figure 7.1.2 · variational-method · faithful copy (archetype 7), kind `figure`, still: the six steps numbered (Exercise 7.1.1 walks them by number), the "Not Good" loop, real text in both themes · standardisation only. Original shipped (no credit).
- `sim-trial-energy` · Figure 7.1.3 · helium-variational-energy, variational-principle · variation by slider: E_trial(ζ) with the experimental −79.0 eV line it never crosses and the independent-electron −108.8 eV dashed (Table 7.1.1 on one axis), electron 1's radial distribution beside it against He⁺'s ζ = 2 · arrows: none · still · slider ζ 1–2.5, specials at 27/16 (minimum) and 2 (no shielding), opens on 2 so the reader finds the minimum · headline: E_trial and its gap above E_true · graph beside · 2D. Original shipped (no credit).

Extra simulations: none here (config).

## Exercises

- `e1` Exercise 7.1.1 (keyed, ζ = 27/16 = 1.6875), correction under the card for the skipped energy and error (−77.49 eV, 1.9%) and E_h's h².
- `a1` (AI) E_trial at ζ = 2 (−74.8 eV) and ζ = 1 (−64.6 eV), why both lie above −79.0 eV; tests helium-variational-energy, variational-principle.
- `a2` (AI) −8R_H = −108.8 eV, 37.7% error, why it is no bound; tests additive-electron-energies, independent-electron-approximation, variational-principle.
All `place: end`.

## Derivations

- `helium-independent` · (7.1.2)–(7.1.5) and E_He1s · equations with words, qualifies (score 5) · built: three nodes, (7.1.3), the additive energies, −8R_H; notes: (7.1.2)'s strike-through, (7.1.5)'s stray Ĥ.
- (7.1.10) stays (its facts appear nowhere in the book); Exercise 7.1.1's dE/dζ stays in its card; E_true stays (substitution).

## Corrections

I₂'s missing unit (hartree); "overestimates the true energy" and the −5.8066 R quoted as E_He1s; "is the variational principle"; "true ground state wavefunction"; ζ in (7.1.9)'s Hamiltonian; h for h² in (7.1.10); Table 7.1.1's "three approximation methods"; Exercise 7.1.1's key (card). Typos left as printed.

## Wanted at chapter level

Form anchors (optional): `helium-true-energy`, `helium-true-energy-rydberg` → `7.1-true-energy`; `helium-independent-energy` → `7.1-ignorance-is-bliss`; `variational-principle`, `variational-energy` → `7.1-variational-method`; `helium-variational-energy` → `7.1-helium-ground-state`.
