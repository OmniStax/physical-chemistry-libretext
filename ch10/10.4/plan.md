# Plan: 10.4 Photoelectron Spectroscopy (LibreTexts 13473)

Source: `source.md`; draft from `tools/md2html.py 10.4` (deleted). Status: built 2026-11-08 in the Chapter 10 job, no review stop. Roger Nix, CC BY 4.0 at the source, shared CC BY-NC-SA 4.0. One objective, eight printed figures, two example images, one uncaptioned table, three notes, seven numbered equations (borrowed labels 5.3.x read from the draft), two examples (illustrations, kept), Summary (to `summary_html`).

## Sub-concepts (page headers)

The page's opening has no header; it is divided (rule 3), the book's two headers kept:

1. `photoelectron-spectroscopy` **Photoelectron spectroscopy**: PES, XPS, UPS, (10.4.1), the instrument (Figure 10.4.1). Introduces `photoelectron-spectroscopy`.
2. `photoionization` **The energy of a photoelectron**: the derivation (10.4.2)–(10.4.6), the vertical ionization energy, the note. Introduces `photoelectron-energy-balance`, `vertical-ionization-energy`.
3. `koopmans` **Ionization energies and orbital energies**: Koopmans (10.4.7), the spectrum figure, the note. Introduces `pes-bands-orbitals`.
4. `vertical-adiabatic` **Vertical and adiabatic ionization**: the two definitions, Figures 10.4.2 + 10.4.4, the note, Examples 10.4.1, 10.4.2. Introduces `adiabatic-ionization-energy`, `pes-vibrational-structure`.
5. `hydrogen-chloride` **Hydrogen Chloride** (book's).
6. `water` **Water** (book's): the table, three bands against two. Introduces `water-photoelectron-spectrum`.

## Figures

- `sim-analyzer` · Figure 10.4.1 · photoelectron-spectroscopy, photoelectron-energy-balance · motion and variation: electrons fly from the sample through the hemispherical analyzer, only those at the pass energy reach the exit slit, and the visited pass energies build the spectrum below · arrows: kinematic (the electrons' path, drawn as moving electrons) · moving: photons and electrons fly continuously (cycle without end), slowed, said in the code · slider pass energy 0.5–10 eV (energy; circles at the three band peaks), opening at 8.60 eV (1b₁) · headline: which electrons pass · graph below: recorded counts against KE over the full spectrum faint and dashed · 2D. Water with He I 21.22 eV (named in the caption); our progression parameters.
- `sim-pes` · Figure 10.4.3 + 10.4.5 + 10.4.6 + 10.4.7 + 10.4.8 (with the example images in `originals`) · pes-bands-orbitals, water-photoelectron-spectrum, photoelectron-energy-balance, pes-vibrational-structure · variation: photon energy and molecule; the orbital ladder and the sideways spectrum share one energy axis, and a band appears only above the photon line · arrows: none · still · choice H₂/N₂/HCl/H₂O, slider hν 10–45 eV (circles He I 21.22, He II 40.81) · headline: how many orbitals the photon reaches · ladder left, spectrum right · 2D. Data: water's table (HF and measured), H₂, N₂, HCl from the page's spectra, N₂ 2σ_g 37.3 eV and HCl's Cl 3s 25.8 eV from Siegbahn's ESCA (named in the code). Placed at 10.4.3; the example images moved into its originals. Figure 10.4.8 (a scan) withheld (`withheld`). The VB prediction drawn dashed (exploration) is left out: it would place two bands at energies no source gives.
- `sim-franck` · Figure 10.4.2 + 10.4.4 · vertical-ionization-energy, adiabatic-ionization-energy, pes-vibrational-structure · variation: the ion's bond-length change; Franck–Condon factors computed live from harmonic H₂ and H₂⁺ (Huber–Herzberg) give the band as sticks · arrows: symbolic (the vertical and adiabatic transitions) · still · slider ΔR 0–45 pm (length; circles 31.1 pm H₂→H₂⁺ and 0) · headline: the tallest peak and its distance above the adiabatic energy · potential curves left on a broken energy axis (one scale), the band right on the ion's axis · 2D. Opens on H₂: v′ = 2, 16.00 eV vertical, 0.58 eV above 15.43 eV (measured 15.98). Placed at 10.4.4, after the definitions.

Extra simulations: none.

## Exercises

None printed. One AI exercise (config): He I photons on water, the kinetic energy of 1b₁ electrons (8.62 eV, number, part a) and why 2a₁ (32.2 eV) gives no band (in the solution); tests `photoelectron-energy-balance`, `water-photoelectron-spectrum`.

## Derivations

`photoelectron-ke` · *Derivation · the kinetic energy of a photoelectron* (printed block, qualifies): four nodes ending at (10.4.3), (10.4.4), (10.4.5), (10.4.6); facts: energy conservation in (10.4.2), E = hν (10.4.1), E(e⁻) = KE, IE = E(A⁺) − E(A). The connecting words between the displays live in the facts and captions; the vertical ionization energy's text span stays in the paragraph after.

## Corrections

"always greater"; Example 10.4.1's 2σ_u* and "ejecting from a range"; Example 10.4.2's bonding and antibonding, 1σ_g (2σ_g); HCl's Cl 2s/2p (3s/3p), 3σ* (4σ), the 1p/3s band labels; H₂O⁺ (H₂O); "As explained above"; Figure 10.4.6 (10.4.8), Figure 10.4.8 (10.4.7); the 1b₁ three-centre claim. Typos ("ionzation", "tern", "bare", "UPS using") left as printed.

## Wanted at chapter level

- variables row, 10.4: `{"sym": "R", "type": "length", "meaning": "the bond length of H₂ or H₂⁺", "section": "10.4"}` (the Franck–Condon slider and axis write `\kR`).
