# Plan: 21.2 The 3rd Law of Thermodynamics Puts Entropy on an Absolute Scale (LibreTexts 14477)

Source: `source.md`; draft from `python3 tools/md2html.py 21.2` (deleted once built).
Status: built 2026-11-08 in the Chapter 21 job, without a review stop (config: the chapter in one go).

One objective, one numbered display (21.2.1), three figures, Example 21.2.1, two titled notes and a pull-quote,
Exercise 21.2.1, a Summary (to `summary_html`). Licence CC BY-NC-SA 4.0; Figure 21.2.3 CC BY-SA 4.0 (BlyumJ).

## Sub-concepts (page headers, ours, sentence case)

1. `natural-zero` **A natural zero for entropy**: S(T) from C_p, Nernst, Figure 21.2.1, Example 21.2.1 (sulfur,
   Figure 21.2.2), the third law, S = k ln W, Figure 21.2.3. Introduces `absolute-entropy`, `third-law`,
   `perfect-crystal-zero-entropy`.
2. `residual-disorder` **Real crystals and residual entropy**: defects, frozen-in disorder, the definition note
   (21.2.1). Introduces `residual-entropy`.
3. `jumps-and-trends` **Jumps at transitions and tabulated entropies**: Δ_fus S, standard molar form, the mass
   trend and its pull-quote (untitled note with eyebrow, 13.12 precedent), the tables, the CO note. Introduces
   `entropy-of-fusion`, `standard-molar-entropy`, `entropy-increases-with-mass`, `orientational-disorder-entropy`.

## Figures

- `fig-21-2-1` · Figure 21.2.1 · kept as printed: a schematic the text cites once; the idea is worked with numbers
  in 21.5's Figure 21.5.1.
- `fig-21-2-2` · Figure 21.2.2 · kept (width 352): two straight lines, nothing varies. Alt text rewritten (the
  source's spoke of thermal conductivity).
- `fig-21-2-3` · Figure 21.2.3 · kept with its CC BY-SA credit; the text points at panel a. Alt text rewritten.

Extra simulation `sim-residual-entropy` not built (orchestrator: `sim-debye-einstein` only).

## Exercises

`e1` Exercise 21.2.1 (unkeyed): number 3 (W = e^{9.134/8.314} = 3.000, computed), AI solution with the sketch
described in words (a trigonal planar XY₂Z in a triangular site), Apply.

## Derivations

None qualify (S_disorder and Δ_fus S are two or three moves).

## Corrections

`c-integrand` (S(T) integrand C_p, not C_p/T), `c-sulfur-units` (J·mol/K for J/(mol·K)). As printed: Δ_r S,
"sufficiently low materials", "the plimsoll defines are", "residulate", 5.7 (= R ln 2 rounded); CO's 4.4 J/(mol K)
left unfootnoted (memory says about 4.2–4.6; not confirmed).

## Wanted at chapter level

None.
