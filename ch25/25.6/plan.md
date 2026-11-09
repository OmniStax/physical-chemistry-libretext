# Plan: 25.6 The Debye-Hückel Theory (LibreTexts 14518)

Source: `source.md`; draft from `python3 tools/md2html.py 25.6`. Status: built 2026-11-09 in the Chapter 25 job (config agreed, no review stop). CC BY-NC-SA 4.0. One numbered equation (25.6.1); three figures; three notes; no examples, objectives, summary or credits.

## Sub-concepts (page headers)

1. `opening` **The ionic atmosphere** (ours, config's header in sentence case): introduces `ionic-atmosphere`, `debye-length`; Figure 25.6.1.
2. `ionic-strength` **Ionic Strength** (book's): reinforces 24.7's `ionic-strength` and `debye-huckel-law`; introduces `ln-gamma-debye-length`, `constant-ionic-strength`, `extended-debye-huckel-equation` ((25.6.1)), `distance-of-closest-approach`, `colloid` (in the "Importance for Colloids" note); Figures 25.6.2 and 25.6.3.

## Figures

- `sim-ionic-atmosphere` · Figure 25.6.1 · ionic-atmosphere, debye-length, ln-gamma-debye-length · motion and variation: the reader sees the cloud of counter-ions jiggle about the central ion and spread out as the solution is diluted, which the still idealised picture cannot show · arrows: none · moving: the atmosphere is a time average of ions in thermal motion (Metropolis steps, seeded, replayed from the transport's clock; 8 s loop) · salt choice 1:1 (NaCl) / 2:2 (ZnSO₄); molality slider (log, 0.001–0.1 mol/kg, untyped, detents at each decade, default 0.010) · headline: 1/κ and γ± live · graph beside: the share of the central charge cancelled within r, 1 − (1 + κr)e^(−κr), on fixed axes 0–12 nm by 0–1, with 1/κ marked · 2D (a slice shows the spherical cloud whole). Scene fixed at 24 nm across; 14 counter-ions and 8 co-ions are a sample, not the true count; ions closer than 0.75 nm are refused. The molality range stops at 0.001 rather than the exploration's 10⁻⁴ so the 1/κ circle (9.6 nm) stays in the fixed frame. Readout: I = ½Σm_iz_i², κ = 3.29√I nm⁻¹, ln γ± = −|q₊q₋|κ/(8πε_rε₀kT) with 0.357 nm = 2.303A/B from the book's A and B. Ions through `F.el` (Na, Cl, Zn; S for sulfate); kinds in a legend, individuals by hover. Original kept (CC BY-SA 3.0, Roland1952).
- `fig-25-6-2` · Figure 25.6.2 · kept: measured data the text cites; its axis (√I) corrected in a figure footnote.
- `fig-25-6-3` · Figure 25.6.3 · kept inside the colloid note: nothing varies that the text discusses; caption corrected in a figure footnote, alt rewritten (the "red electrons" are anions).

Extra simulations: none.

## Exercises

`a1` (AI): I of 0.010 m CaCl₂ + 0.020 m NaCl = 0.050 mol/kg; 1/κ = 1.36 nm. `a2` (AI): ZnSO₄ 0.0010 m by the limiting law, γ± = 0.74. Both checked by computation.

## Derivations

None built: the Debye–Hückel theory itself rests on facts printed nowhere (exploration); (25.6.1) → limiting law is one move.

## Corrections

`c-debye-length` (κ named the Debye length; covers "the Debye length and ln γ± are proportional"), `c-units` (mol^−1/2 dm^3/2), `c-dh-extended` ((25.6.1) is the extended form, |z₊z₋| for z_j²), `c-proportional` (ln γ±, not γ±, ∝ √I), `c-fig-axis` (25.6.2), `c-fig-colloid` (25.6.3).

## Wanted at chapter level

- forms row: `{"id": "ionic-strength-sum", "concept": "ionic-strength", "section": "25.6", "tex": "I =\\dfrac{1}{2} \\sum m_iz_i^2"}` (config: the sum form on Chapter 24's concept).
