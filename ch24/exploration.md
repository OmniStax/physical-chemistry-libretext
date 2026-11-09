# Exploration: Chapter 24, Solutions I - Volatile Solutes

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 24`, then
`python3 tools/convert.py 24`), every page read in full and all 10 mirrored images looked at.
The landing page (11820) prints **no text of its own** (only the site's list of sections with its
generated overviews), so there is no `intro/` page and `chapter.json` has no `intro` record (Chapters
4 and 22 precedent; the converter's `ch24/intro/source.md` holds the title alone). **There is no
24.S page.** **24.E (14502) holds only "TBA"**: no exercise to route (root rule 9), not built.

**Where the pages come from.** No page prints a Contributors list and no page carries an author tag:
every page is the book's, CC BY-NC-SA 4.0. The pages are splices, which shows in their voice and
labels: 24.1, 24.2's binary part, 24.3's second half, 24.5, 24.6's Gibbs–Duhem part and 24.9 are
Rudolf Winter's CH431 notes (first person, "I used the same 25 and 50 Torr", a dead NCSU image
`/wikis.lib.ncsu.edu/…/CH431_leverrule.jpg`, a lost "animation" and an "example 24-7" that the book
does not have); 24.3's first half, 24.4, 24.6's opening and examples and 24.7's first half are
Fleming's notes (figures named `Figure_8.7.1`, `Figure_2`, `Figure_A`…); 24.8 is a stub.

**Repeated material** (built once where the book first works it, cited after): Raoult's law (24.1's
(24.1.3); 24.4 and 24.5 restate it); the P–x diagram of an ideal pair (24.1's Figure 24.1.1 (second);
24.4's Figure 24.4.1 draws it again for water–ethanol); the T–x diagram, the lever rule and
distillation (24.1; 24.4 and Figure 24.4.2 again); the Gibbs–Duhem equation (24.2; 24.6 and 24.7 use
it); μ_i = (∂G/∂n_i) and the fundamental equations with μ dn (22.5's `chemical-potential` and
`fundamental-equations-composition`; 24.3 restates them with Table 24.3.1); μ = μ° + V(P − P°) and
μ = μ° + RT ln(P/P°) (22.7's `gibbs-solid-pressure` and `gibbs-ideal-gas-pressure`; 24.3 works them
again); the gas-phase μ_j = μ_j° + RT ln(P_j/P°) (24.3's (24.3.4); 24.6's (24.6.1) prints it again);
the Henry line against the Raoult line (24.5's Figure 24.5.1; 24.6's Figure 24.6.1 draws it again);
the azeotrope (24.6; 24.9's "Azeotropes" again); the activity μ = μ° + RT ln a (24.7; 24.9 again);
the Gibbs energy of mixing of an ideal solution (24.4; 24.9's regular one extends it); the entropy of
mixing (20.6's `entropy-of-mixing`); the fugacity and fugacity coefficient (22.8; 24.8 uses them);
mole fraction (20.6); the standard state (19.12, 22.6); the Margules function (24.6; 24.9).

## Pages

| Page | id | Licence | Headers (`<h2>`, deeper in brackets) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|
| landing | 11820 | BY-NC-SA | none (site listing only) | | | | | | | |
| 24.1 A Mixture is a Combination … | 14503 | BY-NC-SA | (untitled opening); Partial Quantities and Scaling; Gaseous Mixtures; Liquid Mixtures; Solid Mixtures; Ideal liquid/Ideal Gas Phase Diagrams; The Pressure Phase Diagram; The Temperature Phase Diagram (### The Lever Rule; ### Distillation) | | 1 (unnumbered "Exercise"), unkeyed | 2, **both printed "Figure 24.1.1"** (the electrum coin; the toluene–benzene P–x diagram) | 1 dead (the NCSU lever-rule T–x diagram) | 1 (24.1.1) | 2 ("Note"; "Note: Applicability of Raoult's Law") | 6 / 26 |
| 24.2 The Gibbs-Duhem Equation … | 14504 | BY-NC-SA | (untitled opening); Gibbs- Duhem for Binary Systems; Gibbs-Duhem in the Ideal Case | | | | | | 1 pull-quote | 3 / 20 |
| 24.3 Chemical Potential of Each Component … | 14505 | BY-NC-SA | (untitled opening); Thermodynamic potentials of solutions | | | | | 1 (24.3.1) | 1 (emphasis, untitled) | 5 / 19 |
| 24.4 Ideal Solutions obey Raoult's Law | 14506 | BY-NC-SA | (untitled opening); The Gibbs energy of mixing is always negative; In the ideal case, volumes are additive | | | 2 (24.4.1, 24.4.2) | | | | 0 / 12 |
| 24.5 Most Solutions are Not Ideal | 14507 | BY-NC-SA | none | | | 1 (24.5.1) | | | 1 (emphasis, untitled) | 0 / 2 |
| 24.6 Vapor Pressures of Volatile Binary Solutions | 14508 | BY-NC-SA | (untitled opening); Azeotropes (### Gibbs-Duhem and Henry's law); Margules Functions | **2, both printed "Example 24.6.1"** (CO₂ in water, with Solution; reading a diagram, with Solution and its own image) | | 3 (24.6.1; 24.6.2 of two panels; 24.6.3) | 1 (in the second example) | | | 2 / 22 |
| 24.7 Activities of Nonideal Solutions | 14509 | BY-NC-SA | (untitled opening); Activity Coefficients for Ionic Solutes (### Debeye-Hückel Law); Raoult versus Henry; Various concentration units; Non-volatile solutes | | | | | | | 0 / 25 |
| 24.8 Activities are Calculated with Respect to Standard States | 14510 | BY-NC-SA | none | | | | | | | 0 / 6 |
| 24.9 Gibbs Energy of Mixing … Activity Coefficient | 14511 | BY-NC-SA | (### Activity and activity coefficients; ### Regular solutions; #### Partial molar volumes, before the first `<h2>`); Real solutions; Boiling non-ideal solutions (### Azeotropes; ### Eutectics) | | | | | | | 0 / 22 |
| 24.E | 14502 | BY-NC-SA | "TBA" | | | | | | | |

Counts agree with the full-book table (0 example boxes as `section`, 1 exercise box, unkeyed; 8 figures;
2 tables; 154 displays; no objectives, no "## Summary", no embed, no video). The two examples of 24.6 are
`div.box-example` titled by a `p.box-legend`, the only such boxes in the book, which the converter
read as loose paragraphs until this chapter (tool change below).

## Per section

- **24.1** The opening paragraph is the section's introduction (no header; proposed "Mixtures of Two
  Components"). The book's `<h2>`s kept with their `###`. Concepts (new): G = μ₁n₁ + μ₂n₂ and
  V = V̄₁n₁ + V̄₂n₂ from scaling (partial molar additivity; volumes not strictly additive, bold);
  Dalton's law (24.1.1), (24.1.2) and P_total = ΣP_i; the ideal solution; the regular solution (bold;
  defined in 24.9); Table 24.1.1's four kinds of solution (kept as printed); solid solutions, rare and
  never ideal (the note); Raoult's law (24.1.3) with P°_i and χ_i (bold), its picture of random chance
  at the interface and its applicability note; the liquid (bubble) line (24.1.4); the vapor composition
  (24.1.5) and the vapor (dew) line (24.1.6); the pressure–composition diagram, its phase gap or
  two-phase region and the tie-line (bold); the temperature–composition diagram (isobaric, the lens,
  isopleth and isotherm); the lever rule; distillation (bold) and the fractionation column. Uses
  22.5's fundamental equation with μ dn, 23.1's partial molar quantity, 20.6's mole fraction.
- **24.2** Opening block unheaded (proposed "The Gibbs–Duhem Relation"). Concepts (new): the
  Gibbs–Duhem equation Σ n_i dμ_i = 0 (24.2.1) and its general form Σ n_i dμ_i = V dP − S dT (24.2.2);
  the binary form dμ_A = −(χ_B/χ_A) dμ_B; the chemical potential of a component of an ideal solution
  μ_B = μ*_B + RT ln x_B (stated here first); Raoult's law can only hold over the whole range for one
  component if it holds for the other (the closing sentence). The pull-quote repeats the paragraph
  above it: an untitled emphasis note (13.12 precedent) or dropped as a repeat (builder).
- **24.3** Opening block unheaded (proposed "The Partial Molar Gibbs Energy"). Concepts: 22.5's chemical
  potential reinforced; Table 24.3.1 (μ_i from U, H, A, G, kept, with two corrections); 22.7's μ(P) of
  a condensed phase and of an ideal gas reinforced ((24.3.2), (24.3.3) and the lines after them); new: the
  chemical potential of a component of an ideal gas mixture (24.3.4); the equality μ_j^sln = μ_j^gas for
  every component (the section's title result); the pure liquid's μ*_1 from its vapor pressure (24.3.5);
  μ_j^sln = μ*_j + RT ln(P_j/P*_j), the gas linking mixture and pure compound. The emphasis note
  (dimensionless P/P°) kept.
- **24.4** Opening block unheaded (proposed "Raoult's Law for Two Volatile Liquids"). Raoult's law
  reinforced (24.1); volatile liquid (plain); the P–x diagram of water and ethanol (Figure 24.4.1) and the
  T–x diagram with the lever rule and distillation (Figure 24.4.2) reinforce 24.1. Concepts (new): the
  Gibbs energy of mixing of an ideal solution Δ_mix G = nRT Σ x_i ln x_i, always negative; Δ_mix H = 0;
  Δ_mix V = 0, volumes additive. 20.6's entropy of mixing (bold here) reinforced.
- **24.5** No header (proposed "Two Limiting Laws"). Concepts (new): Henry's law P₁ = K_H x₁ for x → 0
  (bold); the Henry constant K_H, a property of the pair (the emphasis note); the limiting laws, Raoult for
  the solvent and Henry for the solute, with solute and solvent (italic). The closing "There is a handy
  expression that saves us the trouble" points at 24.6's Gibbs–Duhem part (an in-book link).
- **24.6** Opening block unheaded (proposed "Henry's Law"). Concepts (new): the azeotrope (maximum and
  minimum boiling) and its limit on distillation; partially miscible liquids with a boiling gap
  (Figure 24.6.3 and the second example); the Gibbs–Duhem equation in vapor pressures
  x₁(∂ln P₁/∂x₁) = x₂(∂ln P₂/∂x₂); Raoult for one component means Henry for the other; the Margules
  function (bold). Examples 24.6.1 (CO₂, k_H) and the second "Example 24.6.1" (regions I–V of a diagram)
  kept whole, ids `ex-24-6-1` and `ex-24-6-1-2`.
- **24.7** Opening block unheaded (proposed "Activity"). Concepts (new): activity a_B = γ m_B/m° and
  μ_B = μ°_B + RT ln a_B (bold); the activity coefficient (bold); the mean ionic activity coefficient
  γ± (bold) for MX and M_xX_y; the Debye–Hückel limiting law; the ionic strength (bold); a_i = γ_i x_i;
  the Raoult (solvent) and Henry (solute) conventions for activity, the Henry standard state a virtual
  state; Henry constants in other concentration units (K_x,H, K_cp,H, K_pc,H for oxygen in water); the
  osmotic coefficient φ (italic) and ln γ_2,m from it. "As seen before activities are…" starts a second
  voice mid-block after an unfinished sentence ("For a solution in water at 25 °C,").
- **24.8** No header (proposed "Activity by Phase"). Concepts (new): the activity relative to a standard
  state, by phase: real gas f_i/P° = φ_i y_i P/P°, ideal gas y_i P/P°, solute γ_i [A]/1 M, pure solid or
  liquid 1. Uses 22.8's fugacity and fugacity coefficient.
- **24.9** Opens with `###` headers before any `<h2>` (the builder makes "Activity and Activity
  Coefficients" and "Regular Solutions" blocks of their own, the `####` "Partial molar volumes" inside the
  second; 22.7 precedent). Concepts (new): the activity coefficient as the Margules function; the regular
  solution's a₁ = x₁e^{ax₂²} and a₂ = x₂e^{ax₁²}; Δ_mix G/RT = Σx ln x + Σx ln γ; the regular solution's
  Δ_mix G/RT = x₁ln x₁ + x₂ln x₂ + a x₁x₂; the interaction energy W = 2U₁₂ − U₁₁ − U₂₂ with a = W/RT; the
  competition of entropy and enthalpy and the critical or consolute point (bold); upper and lower
  consolute points (nicotine–water); Δ_mix V ≠ 0 in a regular solution; real solutions (asymmetry, more
  Margules terms); boiling non-ideal solutions: azeotropes (24.6 reinforced) and the case the book calls
  eutectics (a boiling gap that comes down under lower pressure onto the solubility gap). "Gibbs free
  energy of regular solutions" is a bare paragraph: a `###` of its own (builder).

## Equation numbers

One number per display, from the converter's `n=` (only displays with a `\label` are numbered on the
site): (24.1.1)–(24.1.6) (the align of (24.1.4) is one equation); (24.2.1)–(24.2.3); (24.3.1)–(24.3.5);
(24.6.1), (24.6.2). 24.4, 24.5, 24.7, 24.8 and 24.9 number nothing. Every `[ref:eq:…]` resolves on its
page. The label `vaporus1` carries a zero-width no-break space at the source (`vaporus1&#65279;`); the
converter keeps it on both the label and the reference, and the drafter tags (24.1.5) and resolves
"Equations 24.1.4 and 24.1.5" correctly.

Printed labels kept as printed (Chapters 3–23 precedent): the two "Figure 24.1.1" (`fig-24-1-1` the coin,
`fig-24-1-1-2` the P–x diagram, *orchestrator*: see the open questions); the two "Example 24.6.1"
(`ex-24-6-1`, `ex-24-6-1-2`), with a footnote on the duplicate as in 23.4; the unnumbered "Exercise" of
24.1 (draft id `e?` / `exr:?`, renamed by the builder); "Figure 24.6.2; left" and "; right" as printed.

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises**: **1 printed** (24.1, unnumbered: "Suppose P°₁ = 50 Torr and P°₂ = 25 Torr. If
  χ₁ = 0.6 what is the composition of the vapor?"); **0 keyed**; **1 unkeyed**, available with an AI
  solution: compute (P_total = 25 − 0.6(25 − 50) = 40 Torr by (24.1.4); y₁ = 0.6 × 50/40 = 0.75 by
  (24.1.5); *checked by computation*). Stays in 24.1, kind `exercise`, `place: end`.
- **Worked examples**: 2 (24.6's two "Example 24.6.1": CO₂ in water, k_H; reading regions I–V and
  the lever rule on a diagram), both with a Solution, kept whole, not exercises.
- **24.E**: **0 printed** ("TBA").
- **In all**: 1 card, 0 keyed, 1 unkeyed (1 compute).
- **Proposed new: 9**, where a concept would otherwise have none, answers from the book's numbers
  and *checked by computation*:
  **24.2** one (binary Gibbs–Duhem: at χ_A = 0.30 a change dμ_B = +12 J/mol forces dμ_A = −28 J/mol;
  compute);
  **24.3** one (a component whose partial pressure above the solution is 0.40 P*_j at 298.15 K has
  μ_j^sln − μ*_j = RT ln 0.40 = −2.27 kJ/mol; compute);
  **24.4** two (an equimolar ideal solution of 1 mol at 298.15 K: Δ_mix G = −1.72 kJ, Δ_mix S = +5.76 J/K,
  Δ_mix H = 0, compute; with the book's 384 and 945 Torr at 75 °C, an equimolar water–ethanol liquid has
  P = 664.5 Torr and y_ethanol = 0.711, compute);
  **24.5** one (with the book's K_x,H = 4.259 × 10⁴ atm for oxygen in water (24.7), air at 0.21 atm gives
  x_O₂ = 4.93 × 10⁻⁶ in water, and why Henry and not Raoult applies; compute and explain);
  **24.6** one (why distilling a liquid at its azeotropic composition separates nothing, and what the
  distillate and residue tend to for a minimum-boiling azeotrope; explain);
  **24.7** one (0.010 mol/kg MgCl₂: I = 0.030; with the book's constant 1.824 × 10⁶/(εT)^{3/2} = 0.509 at
  298.15 K for ε = 78.54 (*from memory, unchecked*) and the corrected law, log γ± = −0.176, γ± = 0.666;
  compute);
  **24.8** one (activities: an ideal gas at y = 0.25 and P = 2.0 bar has a = 0.50; a pure solid 1; a
  solute at 0.10 M with γ = 0.80 has a = 0.080; compute);
  **24.9** one (show from Δ_mix G/RT = x ln x + (1 − x) ln(1 − x) + a x(1 − x) that the curvature at
  x = 0.5 is 4 − 2a, so two minima appear above a = 2, and with W = 5.0 kJ/mol the consolute
  temperature W/2R is 300.7 K; prove and compute).
  24.1 has the printed exercise; none proposed there.

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten: a figure starts from the book's and usually replaces it; motion where the idea
moves; a point the reader sees at once; little effort to read; folds where the book draws one scene
several times. No arrow in any figure is kinematic (the lever rule's arrows, which the dead image drew,
are lengths). The chapter's own numbers: 50 and 25 Torr (24.1's text and exercise); toluene 0.24 bar and
benzene 0.66 bar (read off Figure 24.1.1, second); water 384 and ethanol 945 Torr at 75 °C (24.4);
k_H of CO₂ (24.6's example); K_x,H of oxygen 4.259 × 10⁴ atm (24.7). One model serves every phase
diagram: the regular solution of 24.9, ln γ₁ = a x₂², ln γ₂ = a x₁², with a = W/RT (a = 0 is Raoult),
and pure vapor pressures by 23.4's integrated Clausius–Clapeyron equation for the T–x diagrams.
**Priority** (the user has about two hours): 1 `sim-pxy`, 2 `sim-txy-lever`, 3 `sim-mixing-gibbs`,
4 `sim-azeotrope`, then 5 `sim-henry-raoult`, 6 `sim-gap-meets-dome`.

| Image | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| "Figure 24.1.1" (78364, electrum coin, CC BY-SA 3.0, Classical Numismatic Group) | 24.1 | a photograph of a Byzantine electrum coin | **Kept** as printed: the text names electrum as the miscible-but-not-ideal solid, and the coin is that alloy. Under its own CC BY-SA 3.0 with credit (Chapters 9–19 precedent). |
| "Figure 24.1.1" (427419, toluene A and benzene B, P against X_A in bar) | 24.1 | the liquid line straight, the gas line curved below it, no regions or tie-line drawn | **Replace, still, 2D** (`sim-pxy`; variation by slider). P against composition at fixed T: liquid (bubble) line by (24.1.4), vapor (dew) line by (24.1.6), the regions labelled liquid, liquid + vapor, vapor; sliders overall composition x₁ and pressure P; choice of pair: the figure's benzene–toluene (0.66 and 0.24 bar, opening), the text's 50 and 25 Torr, the 24.4 water–ethanol case (384 and 945 Torr). **Point: inside the gap the state splits along the horizontal tie-line into a liquid poorer and a vapor richer in the volatile component, and the two ends are what (24.1.4) and (24.1.5) give.** Readout P = P°₂ − χ₁(P°₂ − P°₁) and y₁ = χ₁P°₁/P with live numbers, and the lever-rule amounts. Eyebrow "Figure 24.1.1"; original kept, with a true alt text (the printed one describes a scatter plot). |
| dead NCSU image "binary T-X diagram showing the lever rule" | 24.1 | (nothing shows at the source) | **Restore as a Sim, still, 2D** (`sim-txy-lever`; ch19's decision on the dead CH431 images: an AI-made stand-in, said so). T against composition at 1 bar: the lens between bubble and dew curves from the model above (a = 0, two liquids' T_b and Δ_vap H), the isopleth at x_overall and the isotherm at T; sliders x_overall and T, and a stages slider 0–5 drawing the distillation staircase (boil, condense, boil again). **Point: the tie-line's two arms are the lever (liquid against the left arm, gas against the right, crosswise), and each boil–condense step walks the vapor toward the volatile end.** Readout n_liq/n_gas = (y₂ − x_all)/(x_all − x₂) with live numbers. Still: the staircase answers a slider, no clock. 24.4's Figure 24.4.2 and 24.6's diagrams cite it. |
| 24.4.1 (423013, water–ethanol at 75 °C) | 24.4 | P against "X_H₂O", liquid solid and vapor dashed, P_A = 384 at x = 0, P_B = 945 at x = 1 | **Replace by the same model** (*orchestrator*): `sim-pxy` again, opening on water–ethanol, eyebrow "Figure 24.4.1", original kept; the axis is ethanol's mole fraction (the image's "X_H₂O" contradicts its own end points: corrected in the row's caption, no marker). Fallback, cheaper: kept as printed with that caption correction and a link to 24.1's Sim. |
| 24.4.2 (113363) | 24.4 | the T–x lens with points a, b, b′, c, d and their x_B | **Kept** as printed: the text reads its lettered points step by step, and 24.1's Sim gives the variation; the text's "lever rule, as described previously" links there. |
| 24.5.1 (113532) + 24.6.1 (113364) | 24.5, 24.6 | P₁ against x₁: Raoult's line, a nonideal curve above it, Henry's tangent at x → 0 (24.5.1); the same with Henry above and Raoult below for x_B (24.6.1) | **Fold, still, 2D** ("Figure 24.5.1 + 24.6.1" in 24.5; the book draws one scene twice; 24.6's citation links to it). P₁ against x₁ from P₁ = x₁P*₁e^{a x₂²}: Raoult's line, Henry's line of slope K_H = P*₁e^{a}, the curve; slider a (−2 to +2, opening at the book's positive deviation, a ≈ 1.2 read off 24.5.1's shape). **Point: every curve leaves along Henry's line and arrives along Raoult's, and K_H differs from P* by exactly the deviation, above it for positive a and below for negative.** Readout P₁ = x₁P*₁f_Mar and K_H/P*₁ = e^{a}. Both images in `originals`. |
| 24.6.2 (113366 + 113365, two panels) | 24.6 | T–x of a maximum-boiling (left) and a minimum-boiling (right) azeotrope | **Replace, still, 2D** (`sim-azeotrope`, "Figure 24.6.2"; variation: the two panels are one model at two signs of the deviation). T–x–y at 1 bar from the model, slider a (−3 to +3): at 0 the lens of 24.1; negative a lifts the middle to a maximum, positive a sinks it to a minimum where the curves touch. **Point: once the deviation is large enough the two curves touch at an extremum, the azeotrope, where vapor and liquid have one composition and distillation stops.** Readout x_az and T_az, or "no azeotrope". Both panels kept as originals; caption corrected ("(right) Ta maximum" → minimum) with no marker. This is the brief's "deviations bending the lines". |
| 24.6.3 (113367) + the second Example 24.6.1's diagram (113368) | 24.6 | a minimum-boiling lens above a solubility dome (24.6.3); the lens come down onto the dome, regions I–V (example) | **Replace 24.6.3, still, 2D** (`sim-gap-meets-dome`, lowest priority; it supplies 24.9's lost "see animation"). The regular-solution dome (T_c = W/2R) and the minimum-boiling lens from one W; slider P lowers the lens. **Point: the boiling gap moves with pressure and the solubility gap hardly does, so at low pressure the lens lands on the dome and the mixture boils before it can mix.** Opens on 24.6.3's arrangement. The example's diagram stays printed (the example reads its regions and points). |

**3D**: none required. One extra offered below.

### Extra simulations proposed (root rule 15)

Only where motion or variation teaches; two survive, neither recommended for the time:

- **`sim-mixing-gibbs` in 24.9** (*recommended, counted in the priorities above as 3; it replaces no
  figure, so a Sim*): Δ_mix G/RT against x₁ = x ln x + (1 − x) ln(1 − x) + a x(1 − x), the entropy term and
  the enthalpy term drawn thin, their sum heavy; slider RT/W (or T at a fixed W). **Point: as the
  interaction grows the single minimum flattens and splits into two, and the common tangent picks the two
  liquids that coexist; that split is the consolute point.** Beside it, T against x with the miscibility
  dome traced as the slider moves. At a = 0 it is 24.4's ideal curve, so 24.4 links to it. (The brief's
  "ΔG_mix against x as the interaction grows".)
- **`sim-pTx` in 24.1** (offered, not recommended; mathematical 3D): the bubble and dew surfaces over the
  (x, T) floor with P up, from the same model; the P–x and T–x diagrams are its two slices, drawn as
  planes the reader moves. **Point: the two diagrams are cross sections of one lens-shaped solid**, which
  is the text's "we should make it a three dimensional picture". Free orbit, bounded above the floor.

Judged and dropped: a Sim of Table 24.1.1 (the table says it); a moving fractionating column (the
staircase slider shows the stages); a Sim for 24.2–24.3 (chains of equations: the derivations are their
pictures); a Sim of Debye–Hückel (a one-line law with an unfinished sentence; an exercise serves it);
a Sim of 24.8 (a list of cases).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 24.1, dn_i = n_i dV, dG = G dV → dG = Σμ_i dn_i → integrate 0..1 → G = μ₁n₁ + μ₂n₂ (and V likewise) | printed block, 7 displays with words | printed | **Build**: "Derivation · G = μ₁n₁ + μ₂n₂ by scaling"; fact 22.5's dG with μ dn. V here is the size of the system as a fraction of the original (the book's use, kept; the node says so). |
| 24.1, Dalton + Raoult + χ₂ = 1 − χ₁ → (24.1.4) | printed align, 4 rows | printed | **Build**: "Derivation · the liquid line of the pressure diagram"; facts (24.1.1), (24.1.3). |
| 24.1, (24.1.2) with (24.1.3) and (24.1.4) → (24.1.5); solve (24.1.5) for χ₁ → into (24.1.4) → (24.1.6) | prose ("substitute", "rearrange"), 2 displays; ≈ 6 moves, 0 imported facts, unprinted run 5, 1 join | 6 | **Build**: "Derivation · the vapor line of the pressure diagram", after the paragraph that completes it; the book's (24.1.5) and (24.1.6) keep their numbers. |
| 24.1, the lever rule (9 displays) | printed block with words | printed | **Build**: "Derivation · the lever rule"; the book's `x_2^*n` writes a product with an asterisk (the node's note reads it as x₂·n). |
| 24.2, G = Σn_iμ_i → dG → equate with dG = VdP − SdT + Σμ_i dn_i → (24.2.2) → constant T, P → (24.2.1) | printed block | printed | **Build**: "Derivation · the Gibbs–Duhem equation"; `drv` to 24.1's scaling; facts 22.5's fundamental equation. |
| 24.2, binary: G = μ_An_A + μ_Bn_B → dG → 0 = n_Adμ_A + n_Bdμ_B → dμ_A = −(χ_B/χ_A)dμ_B | printed block | printed | **Build**: "Derivation · Gibbs–Duhem for two components"; `drv` to the one above. |
| 24.2, ideal case: μ_B → dμ_B → dμ_A → integrate → μ_A = μ*_A + RT ln χ_A | printed block | printed | **Build**: "Derivation · Raoult's law holds for both or neither"; the book drops dχ_B and the sign that dχ_B = −dχ_A restores (correct mathematics, notes). |
| 24.3, dμ → (∂μ/∂P)_T = V → integrate → μ = μ° + V(P − P°); ideal gas → μ = μ° + RT ln(P/P°) | printed block | printed (repeat) | Stays printed and cites 22.7's derivations (repeated-material precedent); (24.3.3)'s `int_` typeset as ∫ by the builder. |
| 24.3, μ_j^sln = μ_j^gas → (24.3.4) and (24.3.5) → μ_j^sln = μ*_j + RT ln(P_j/P*_j) | prose ("Combining"), 4 moves, 0 imported, unprinted run 3, 1 join | 4 | **Build**: "Derivation · the chemical potential of a component in solution". |
| 24.4, Δ_mix G = Σn(μ^sln − μ*) → (μ^sln = μ* + RT ln x) → nRTΣx ln x; with 20.6's Δ_mix S and ΔG = ΔH − TΔS → Δ_mix H = 0 | printed block with words | printed | **Build**: "Derivations · the Gibbs energy and enthalpy of ideal mixing" (two results); the "Using" line's nRTx_i ln x_i follows the correct μ* + RT ln x_i with a note; `drv` to 24.2's ideal case. |
| 24.4, (∂G/∂P)_T = V → (∂ΔG/∂P)_T = ΔV → ideal → 0 | printed block, 4 displays | printed | **Build**: "Derivation · volumes are additive in an ideal solution"; fact 22.4's first derivatives. |
| 24.6, CO₂ example | substitution | never | Stays (k_H corrected by footnote). |
| 24.6, μ_j = μ_j° + RT ln P_j → dμ₁, dμ₂ → Gibbs–Duhem → x₁∂ln P₁/∂x₁ = x₂∂ln P₂/∂x₂ → Raoult limit → 1/x₂ = ∂ln P₂/∂x₂ (24.6.2) → integrate → P₂ = Kx₂ | printed block, 13 displays with words | printed | **Build**: "Derivation · Raoult for one component means Henry for the other"; `drv` to 24.2's binary Gibbs–Duhem; (24.6.1) cites 24.3's (24.3.4). |
| 24.6, P₂ from P₁ through Gibbs–Duhem for a Margules function | "it is possible": not worked | | Stays. |
| 24.7, G = μ₊ + μ₋ → … → G = μ*₊ + μ*₋ + RT ln m₊m₋ + RT ln γ₊γ₋ | printed block, 5 displays | printed | **Build**: "Derivation · the ions' share of non-ideality"; low priority; the builder may keep it printed if the graph adds nothing (one substitution per line). |
| 24.7, ln γ_2,m = φ − 1 + ∫(φ − 1)/m′ dm′ from φ by Gibbs–Duhem | hidden ("leads to this integral"); ≥ 6 moves, imports Gibbs–Duhem and the molal form ln a₁ = −φM₁m the book never states, unprinted run ≈ 6, 1 join | ≈ 9 | **Not built** (*orchestrator*): it qualifies by score, but needs a definition the book does not give (its φ is written in mole fraction); stays printed. |
| 24.7, ln a₁ ≈ −x₂ | 2 moves (garbled as printed) | | Stays, footnoted. |
| 24.9, P_i = x_iP°f_Mar → a_i = x_if_Mar → γ = f_Mar | printed, 2 moves | | Stays. |
| 24.9, a₁ = x₁e^{ax₂²} → (Gibbs–Duhem) → a₂ = x₂e^{ax₁²} | hidden ("We can use Gibbs–Duhem to show"); 6 moves, imports 24.2's Gibbs–Duhem and the Raoult limit (2), unprinted run 6, 1 join | 9 | **Build**: "Derivation · the regular solution's second activity", every line inserted and AI-marked; `drv` to 24.2's binary form. |
| 24.9, Δ_mix G per mole → μ = μ* + RT ln a, a = γx → Δ_mix G/RT = Σx ln x + Σx ln γ → regular → … + a x₁x₂ | printed block | printed | **Build**: "Derivation · the Gibbs energy of mixing of a regular solution"; `drv` to 24.4's ideal one. |
| 24.9, Δ_mix G/W rearrangement; ∂ΔH_mix/∂P = ΔV_mix | 1–2 moves each | | Stay (the second cites 24.4's volume derivation). |

Thirteen derivation records proposed to build (24.1 × 4, 24.2 × 3, 24.3, 24.4 × 2, 24.6, 24.7 (low
priority), 24.9 × 2); two of them (24.1's vapor line, 24.9's second activity) are hidden in prose and
score past the bar.

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies. *Checked by computation* marks a
correction worked here; *from memory, unchecked* one the builder checks first.

- **24.1**: "Figure 24.1.1" printed on two figures (footnote on the second, like 23.4's duplicate
  example; *orchestrator*); the P–x figure's alt text describes a scatter plot of "Effort" (the builder
  writes a true one, no footnote); "I used the same 25 and 50 Torr values for the pure equilibrium
  pressures as in the question above" (the plotted figure reads about 0.66 and 0.24 bar for benzene and
  toluene; footnote, and the Sim offers both); the lever rule's "arrows in the diagram" point at an image
  missing at the source (footnote: restored as the Sim); the lever rule's `x_2^*n` asterisks (multiplication;
  the derivation's note); "the intersection points in inside", "one a fractionation column", "Note that
  values for pure components are typically indicated by adding an asterisk $^\circ$ superscript" (as printed).
- **24.2**: "Vdp − sdT" (lowercase s for the entropy, as printed; the derivation writes S with a note);
  "dμ_B = 0 + RT/χ_B" lacks dχ_B, and "dμ_A = −(χ_B/χ_A)(RT/χ_B) = RT/χ_A" drops the sign that
  dχ_B = −dχ_A restores (footnote; the derivation follows the correct line); "form pure 1", "components
  two components" (as printed).
- **24.3**: Table 24.3.1's "dH = TdS − VdT" (dH = TdS + VdP) and "dA = −PdV − TdS" (dA = −PdV − SdT)
  (footnotes, *checked*); the general dG's last partial held at "T, n_j≠i" (also P; footnote); (24.3.3)'s
  "RT int_" (a typesetting slip: the builder sets ∫, no footnote); "partial most Gibbs function", "is is
  often dropped" and the struck-through "o" (as printed).
- **24.4**: "μ_i^sln ≡ μ_i* + nRTx_i ln x_i" (μ_i* + RT ln x_i; footnote, the derivation follows the
  correct line); Figure 24.4.1's axis "X_H₂O" against its own end points (corrected in the caption, no
  marker); "water a pure vapor pressure of 384 Torr and ethanol … 945 Torr" at 75 °C (*from memory,
  unchecked*: about 289 and 666 Torr at 75 °C; the book's pair fits about 82–84 °C; footnote only after
  checking) and water–ethanol called ideal (it forms a minimum-boiling azeotrope near 89 mol % ethanol,
  *from memory, unchecked*; footnote only after checking); "his expression", "the vapor, which exists at
  higher temperatures)" (as printed).
- **24.5**: none beyond typography.
- **24.6**: Henry's law printed "P_B = k_H P_B^o" (P_B = k_H x_B, as the example then uses; footnote);
  Example 24.6.1's k_H = 1.67 × 10⁹ Pa (10⁵ Pa / 5.98 × 10⁻⁴ = 1.67 × 10⁸ Pa; footnote, *checked by
  computation*; its "55 mol" then 55.5 mol as printed); Figure 24.6.2's caption "(right) Ta maximum"
  (minimum; corrected in the caption, no marker); "might look like Figure 24.6.2; right:" introduces Figure
  24.6.3, and "the phase diagram will look like Figure 24.6.3" describes the example's diagram (footnotes;
  the builder links each to the figure meant); the second "Example 24.6.1" (footnote on the duplicate);
  the example's regions numbered 1–5 against the diagram's I–V, the unclosed "(III, IV, and" (as printed);
  f_Mar's "βx₂³ + δx₂³" (the δ term is x₂⁴; footnote); "logarithmic impression", "is is possible" (as printed).
- **24.7**: the Debye–Hückel law printed with a positive sign and |z₊ + z₋| (log₁₀γ± =
  −1.824 × 10⁶|z₊z₋|√I/(εT)^{3/2}; footnote, *from memory, unchecked* for the form; the constant gives
  0.509 at 298.15 K with ε = 78.54, *checked by computation*); "For a solution in water at 25 °C," breaks
  off (footnote: the constant there is 0.509); γ± = (γ₊^xγ₋^y)^{1/x+y} (the exponent is 1/(x + y); footnote);
  "ln a₁ ln x-1 ≈ −x-2" (ln a₁ = ln x₁ ≈ −x₂; footnote); "Debeye" (as printed); "where \(\mu^*\) denotes"
  (raw delimiters in the source: the builder sets the maths, no footnote); "molaliy", "insuring",
  "Substituting his" (as printed).
- **24.8**: "a_i = γ i [A]/1 M" (γ_i; the builder sets the subscript, no footnote); "Need to define a new
  variable." (as printed).
- **24.9**: "= μ°₂ + RT ln(P_i/P°)" (μ°_i; footnote); "The newly defined variable a₂" (a_i; as printed);
  "x₁ln X₁" (as printed); "adding a β-term undoes the symmetry (see example 24-7)" (the book has no such
  example; footnote); "(see animation)" (no animation is printed; footnote, linking the Sim
  `sim-gap-meets-dome` if built); "Eutectics" names a boiling gap meeting a solubility gap (usually called
  a heteroazeotrope, *from memory, unchecked*; the book's word kept, no footnote unless checked).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 24.1.1 (coin) | "CC-BY-SA-3.0; Classical Numismatic Group, Inc." | shipped under its own CC BY-SA 3.0 with the credit (Chapters 9, 11, 17–19 precedent) |
| 24.1.1 (P–x), 24.4.1, 24.4.2, 24.5.1, 24.6.1–24.6.3, the example's diagram | none | under the page's licence (BY-NC-SA) |
| the lever-rule image | dead at the source | not shipped (nothing to ship) |

**Page licences**: every page CC BY-NC-SA 4.0.

## What is new to OmniStax here

- **No new type.** Partial and vapor pressures, P*, K_H typed pressure; chemical potentials and Gibbs
  energies energy, W and U_ij energy; amounts `amount`; partial molar volumes `molar-volume`; V `volume`;
  Δ_mix S `entropy`; T, T_A, T_B temperature. Mole fractions, activities, activity and osmotic
  coefficients, the Margules function and parameters, the ionic strength, charges numbers and molality in
  ink (molality would want a concentration type the book has never needed; *orchestrator* if wanted).
- **Symbols**: new keys with macros for the chapter's own (P_total, the pure vapor pressures, x_1, x_2,
  x_A, x_B, x_i, chi_1, chi_2, mu_1, mu_2, mu_A, mu_j, the starred and standard μ, V_bar_1, V_bar_2, K_H,
  gamma_i, gamma_pm, the Δ_mix quantities, W_int, U_12 …); reused: mu_i, mu_B, chi_A, chi_B, y_i, y_1,
  y_2, P_i, P_j, n_1, n_2, n_A, n_B, n_i, G, V, P, T, R, S_ent, H, T_A, T_B, P_std, f_i, phi_i, epsilon,
  m_B (as molality here: `ost meanings` shows its mass meaning in 5.2 and 9.1; the variables row gives
  this chapter's). 69 new symbols, all with macros; 172 variables rows; 49 concepts, 78 edges (2 redundant
  removed by a Hasse check against the merged book), 51 forms.
- Reused concepts, not duplicated: 22.5's `chemical-potential` and `fundamental-equations-composition`;
  22.4's `gibbs-first-derivatives`; 22.7's `gibbs-ideal-gas-pressure` and `gibbs-solid-pressure`; 22.8's
  `fugacity`, `fugacity-coefficient`, `component-fugacity`; 23.1's `partial-molar-quantity`; 23.3's
  `phase-equilibrium-chemical-potential`; 23.4's `vapor-pressure-curve`; 20.6's `mole-fraction` and
  `entropy-of-mixing`; 19.12's `standard-state`; 16.1's `ideal-gas-law`.

## The chapter's answer to root rule 23

Solutions are a chapter about one lens. Slide the composition across the P–x diagram and watch a liquid
split along its tie-line into a vapor richer in benzene; turn it on its side into the T–x lens and walk
the distillation staircase to the volatile end; then turn up the interaction between unlike molecules
and watch the lens tilt until its curves touch at an azeotrope where distillation stops, the partial
pressure leave along Henry's line and arrive along Raoult's, and the Gibbs energy of mixing grow a
second minimum as the two liquids refuse to mix. One parameter, a = W/RT, drives every one of them,
and at a = 0 each figure is the ideal case the chapter starts from.

## Tool changes made for this chapter

`tools/lt2md.py`: a `div.box-example` titled by a `p.box-legend` (24.6's two examples, the only ones in
the book) is now read as an example box, so both come through as `:::example {ex:24.6.1}` instead of a
loose "Example 24.6.1: …" paragraph followed by the body; `box()` takes such a div's title from its
legend. Chapters 1–23 reconverted to a scratch folder: every source.md byte-identical except
`ch01/1.3/source.md` (the stale committed file Chapter 23's prep reported, the same without this change)
and `ch22/intro/source.md` (not written by Chapter 22's prep, which has no intro page). `tools/md2html.py`
unchanged; drafts made for 24.1–24.9 (no intro), 341 maths spans set by KaTeX in strict mode without an error or warning. Notes for
builders: the dead lever-rule image comes through as an HTML comment in 24.1's draft; the second
example's diagram (`113368-Figure_D.png`) is a bare inline image inside `ex-24-6-1-2`; 24.1's exercise is
`e?` / `exr:?` (rename); 24.9's opening `###` headers sit in the opening block; the converter does not
read 24.7's `\(\mu^*\)` (escaped at the source) and leaves it raw.
