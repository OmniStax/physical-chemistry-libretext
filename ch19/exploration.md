# Exploration: Chapter 19, The First Law of Thermodynamics

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 19`, then
`python3 tools/convert.py 19`), every page read in full and the 16 mirrored images looked at.

**The landing page (11815) prints no text**: only the credit line of a thumbnail (a thermite
reaction, "CC SA-BY 3.0; Nikthestunned") that the page does not show. Chapter 4's precedent: **no
`intro/` page and no `intro` record** in `chapter.json` (root rule 21: nothing invented; the credit
is left out with the thumbnail, Chapters 3 and 5). **There is no 19.S page**: nothing goes to
`summary/`. **19.E (13712)** holds a stray copy of Chapter 4's uncertainty-principle passage
(from Zielinski's *Quantum States of Atoms and Molecules*) and one exercise, **Exercise 19.E.1**
(baseball and electron at 91.3 mph): it is already card `e3` of 1.9, so it is **not routed again**
(root rule 9); the passage is not built. The chapter therefore prints **no exercise of its own**:
no inline box, no problem list. Its five worked examples are kept with their solutions.

**Where the pages come from.** No page prints a Contributors list. 19.1 carries the author tag
`authorname:flemingp` (Patrick Fleming, Cal State East Bay, from his *Physical Chemistry*
LibreTexts text: its "Table 3.1.1" label survives); 19.2–19.11 are the NCSU CH431 lecture notes
(their equation images `CH431_Image61`–`71.gif` and figure `CH431_Image100.gif`); 19.12–19.13 are
Fleming's again (Hess, formation, Kirchhoff, the "Example" boxes); 19.14 (359804) has no tag at
all and is a four-line derivation. Licences: **19.2 CC BY 4.0**; 19.14 untagged (the book's
CC BY-NC-SA 4.0); every other page CC BY-NC-SA 4.0.

**The pages are uneven, and eleven displays are missing at the source.** 19.5–19.8 print 11 of
their equations as `<img>` tags pointing at a dead NCSU wiki path
(`/wikis.lib.ncsu.edu/images/…/CH431_Image61.gif` … `Image71.gif`; the live page shows broken
images, HTTP 404, and no copy is on files.mtstatic.com): 4 in 19.5, 2 in 19.6, 4 in 19.7 (all of
its equations) and 1 in 19.8. The prose around each still points at them ("or:", "Thus we get:").
19.6 opens mid-argument, continuing 19.5's path B + C before its own (complete) derivation; 19.8
repeats 19.2's title, "Pressure-Volume Work", over a section on enthalpy; 19.9 is a list of three
problems and a quote, which 19.10 repeats as its first sentence. *Orchestrator*, below: what to do
with the missing displays.

**Repeated material** (built once where the book first works it, cited after; Chapters 3–18
precedent): the first law (19.1; restated 19.4 as dU = δq + δw); ΔU = U_f − U_i (19.1; 19.4's
ΔU = U₂ − U₁); the sign convention (19.2's note; 19.1's prose says the opposite, footnoted); work
against a constant external pressure (Example 19.1.2's −p_ext(V₂ − V₁), then (19.2.2), then 19.3's
irreversible lines); reversible isothermal work (19.3; used 19.5 for q_rev and w_A); C_V =
(∂U/∂T)_V (17.4; restated 19.5 and 19.6); R = C̄_P − C̄_V (19.6; 19.8's C_p = C_V + nR); H ≡ U + PV
(19.8; derived again from q_P in 19.14); C_P = (∂H/∂T)_P (19.9; again 19.10); "there are no
absolute enthalpies" (19.9; 19.10); Hess's law (19.11; 19.12 again with its own example). From
earlier chapters: the ideal gas law, isotherm and isochore, system and surroundings (16.1); U =
(3/2)nRT (17.1, 18.1); the internal energy and C_V (17.4); the pressure from the partition function
(17.5, cited by 19.7 as "section 17-5"); the molar heat capacity (18.4); the specific heat capacity
(18.9); the ionization energy (7.1, which 19.12 calls the ionization potential, defined as
ΔH(0 K)); the dissociation energy (5.3, 19.12's bond dissociation energy D).

## Pages

| Page | id | Licence / author tag | Headers (`<h2>`) | Ex | Fig | Img | Dead img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|
| landing | 11815 | BY-NC-SA | none: a thumbnail credit only | | | | | | | |
| 19.1 Overview of Classical Thermodynamics | 47709 | BY-NC-SA, flemingp | opening; Heat; Work | 19.1.1, 19.1.2 | 19.1.1 (2 images) | 1 (p(V,T) surface, in the note) | | 1 ("Table 3.1.1") | 1 ("What is a partial derivative?", with a worked two-path Δp) | 4 / 20 |
| 19.2 Pressure-Volume Work | 13700 | **BY 4.0** | opening; Pressure-volume (PV) work | | 19.2.1–19.2.3 | | | | 1 ("Sign Conventions") | 2 / 8 |
| 19.3 Work and Heat are not State Functions | 13701 | BY-NC-SA | Heat and work are path functions; Reversible versus irreversible (### Isothermal Expansion) | | | 6 (two pistons, four PV plots) | | | 2 ("Path Functons" definition; "Reversible vs. Irreversible Processes") | 0 / 3 |
| 19.4 Energy is a State Function | 13702 | BY-NC-SA | Work and heat are not state functions | | | | | | 2 ("A Better Definition of the First law"; an untitled emphasis) | 0 / 2 |
| 19.5 An Adiabatic Process is … No Energy as Heat is Transferred | 13703 | BY-NC-SA | Isothermal expansion of an ideal gas; Adiabatic expansion of an ideal gas | | | 1 (paths A, B, C) | 4 (Image61–64) | | 1 quote (the etymology of "adiabatic") | 0 / 12 |
| 19.6 The Temperature of a Gas Decreases in a Reversible Adiabatic Expansion | 13704 | BY-NC-SA | none | | | | 2 (Image65–66) | | | 0 / 14 |
| 19.7 Work and Heat Have a Simple Molecular Interpretation | 13705 | BY-NC-SA | Statistical interpretation | | | | 4 (Image67–70: every equation) | | | 0 / 0 |
| 19.8 Pressure-Volume Work (on enthalpy) | 13706 | BY-NC-SA | Enthalpy | | | | 1 (Image71) | | | 0 / 9 |
| 19.9 Heat Capacity is a Path Function | 13707 | BY-NC-SA | Determining enthalpies from heat capacities. | | | | | | 1 quote | 0 / 1 |
| 19.10 Relative Enthalpies … Heat Capacity Data and Heats of Transition | 13708 | BY-NC-SA | none | | 19.10.1 | 1 (DSC, in the note) | | | 2 ("When dealing with enthalpies"; "Scanning calorimetry"), 1 quote | 0 / 4 |
| 19.11 Enthalpy Changes for Chemical Equations are Additive | 13709 | BY-NC-SA | Hess's law (### Reaction-as-written convention; Reverse reactions; Combining values) | | | | | 1 (Hess sum) | 1 quote | 0 / 2 |
| 19.12 Heats of Reactions … Tabulated Heats of Formation | 13710 | BY-NC-SA | opening; Standard Enthalpy of Formation; Ionization Reactions; Average Bond Enthalpies | 19.12.1 | | 1 (ethanol combustion scheme) | | 1 (bond energies) | 1 ("Definition: the Standard State") | 2 / 31 |
| 19.13 The Temperature Dependence of ΔH | 13711 | BY-NC-SA | none | 19.13.1, 19.13.2 | | | | 2 (Table 19.13.1; Example 19.13.2's C_p) | | 5 / 11 |
| 19.14 Enthalpy is a State Function | 359804 | untagged | none | | | | | | | 0 / 4 |
| 19.E | 13712 | BY-NC-SA | stray Chapter 4 passage + Exercise 19.E.1 (already 1.9's `e3`) | | | | | | | 1 / 1 |

Counts: 5 worked examples (all with a Solution part), 0 exercise boxes, 0 problem lists, 5
numbered figures (19.1.1, 19.2.1–19.2.3, 19.10.1; the full-book table's 4 missed 19.10.1, whose
caption sits in a div after the image: converter fixed, below), 10 unnumbered images, 11 dead
equation images, 5 tables, 121 displays (13 numbered). No objectives, no "## Summary", no
Contributors list on any page, no embeds.

## Per section

Headers: the book's `<h2>` are kept; a page with an untitled opening, or none, gets the agent's
header (proposals here, through the humanizer by the builder).

- **19.1** Opening (Joule, the first law, ΔU) proposed "Joule's Paddles and the First Law"; then
  the book's "Heat" (with Example 19.1.1 and the partial-derivative note) and "Work" (Table 3.1.1,
  Example 19.1.2). Concepts (new): heat; work; ΔU = U_f − U_i; the first law (ΔU = q + w, dU = dq +
  dw; bold); endothermic and exothermic; heat capacity (bold); state function ("state variable");
  partial derivative and total differential (the note); pressure is a state function (the note's
  two paths); kinds of work (Table 3.1.1's bold rows). Reinforces: internal energy (17.4), specific
  heat (18.9), the ideal gas law, isotherm, isochore (16.1).
- **19.2** Opening (work as ∫F·ds) proposed "Work as Force along a Path"; the book's "Pressure-volume
  (PV) work" after. Concepts (new): work as a line integral; external pressure; pressure-volume work
  (bold, (19.2.1)); the sign convention (the note, bold "you pay the bill"); work against a constant
  external pressure ((19.2.2)); irreversible process; work as an area on a PV diagram.
- **19.3** The book's two headers. Concepts (new): path function (definition note); reversible
  process (note); reversible isothermal work, −nRT ln(V₂/V₁); reversible paths need the least work
  to compress and deliver the most on expansion.
- **19.4** One header. Concepts (new): exact and inexact differentials (d against δ); internal
  energy is a state function, ∮dU = 0. Reinforces the first law (its "better definition" note).
- **19.5** The book's two headers. Concepts (new): an isothermal change of an ideal gas leaves U
  unchanged; q_rev = nRT ln(V₂/V₁); adiabatic process (δq = 0; the etymology quote kept as a quote);
  in an adiabatic process dU = δw_rev and the gas cools; dU = C_V dT for an ideal gas (lost as
  Image61–62 here, printed 19.6 per mole); paths A and B + C: same ΔU, w_B = −q_C, w_A ≠ w_B.
  Reinforces C_V (17.4), isochore (16.1).
- **19.6** No header: two blocks proposed, "Path B + C in Small Steps" (the continuation of 19.5,
  to "see Eq 19.23") and "Cooling along a Reversible Adiabat" (from "We can mathematically show").
  Concepts (new): C̄_P − C̄_V = R; the heat capacity ratio γ; T₂/T₁ = (V̄₁/V̄₂)^(γ−1). Reinforces
  C̄_V (18.4), 19.5's dU = C_V dT.
- **19.7** One header. Concepts (new): the molecular interpretation of heat and work (heat shifts
  populations of fixed levels, work shifts the levels); its every equation is lost at the source.
  Reinforces 17.5's pressure from the partition function (the page's "section 17-5", `xref`).
- **19.8** One header ("Enthalpy"). Concepts (new): enthalpy H ≡ U + PV (bold "ENTHALPY"); dH = δq
  + V dP; ΔH = q_P and ΔU = q_V; the molar heat of fusion (its display lost, Image71); U ≈ H for
  condensed matter (idea); the heat capacity is a path function. Reinforces C_p = C_V + nR (19.6).
- **19.9** One header. Concepts (new): C_P = (∂H/∂T)_P; finding enthalpies from heat capacities
  (skill, the book's two steps and three problems); C_p is infinite at a phase transition; there
  are no absolute enthalpies (bold, the quote).
- **19.10** No header: two blocks proposed, "Heating Ice through Its Melting Point" (to the
  figure's paragraph) and "A Singular Heat Capacity" (from "Notice that for process two"), the DSC
  note closing it. Concepts (new): adding enthalpy changes along a process (skill; bold "Define the
  Process"); differential scanning calorimetry (idea). Reinforces 19.9's C_P, singularity and
  "no absolute enthalpies", 19.8's heat of fusion.
- **19.11** One header and its three `###`. Concepts (new): reaction enthalpy (reaction as written;
  the reverse reaction's sign); Hess's law (bold). "Combining values" announces a PCl₃ example the
  page never prints (footnote).
- **19.12** Opening (Hess's law, Example 19.12.1) proposed "Adding Reactions"; the book's headers
  after. Concepts (new): standard state (definition note); standard formation reaction; standard
  enthalpy of formation (bold; zero for an element in its standard state); ΔH_rxn = ΣνΔH_f°(products)
  − ΣνΔH_f°(reactants); electron affinity (bold); average bond enthalpy (bold "bond dissociation
  energy"); estimating ΔH_rxn from bond enthalpies (skill). Reinforces Hess's law (19.11), the
  ionization energy (7.1; the bold "ionization potential" names it: coverage, no new concept), the
  dissociation energy (5.3).
- **19.13** No header: two blocks proposed, "Kirchhoff's Law" (to Example 19.13.1) and "Reaction
  Enthalpies at Other Temperatures" (from "For chemical reactions"). Concepts (new): Kirchhoff's law
  ((19.13.1), (19.13.2), the reaction form); the empirical C_p = a + bT + c/T² ((19.13.3)); ΔH from
  the fit ((19.13.5)).
- **19.14** No header: one block proposed, "Heat at Constant Pressure". No new concept: it derives
  19.8's enthalpy again from q_P (reinforces `enthalpy`, `heat-at-constant-pressure`).

## Equation numbers

One number per display, from the converter's `n=`: (19.1.1)–(19.1.4), (19.2.1)–(19.2.2),
(19.12.1)–(19.12.2), (19.13.1)–(19.13.5); the other pages number nothing. Every `[ref:eq:…]`
resolves on its page. **Printed labels kept as printed** (precedent): 19.1's "Table 3.1.1" (its own
table, Fleming's numbering); 19.6's "see Eq 19.23" (no such equation in this book; footnote); 19.7's
"section 17-5" (17.5, `xref`); 19.10's "(Figure 19.10.1)" for "more phase transitions" (the
figure shows one; as printed); Example 19.13.1's second "Equation [ref:eq:EQ1]" for C_p(T) (it
means (19.13.3); footnote).

## The missing equation images (*orchestrator*)

The NCSU source drew these as GIFs; the prose points at each. What each must have said, inferred
from the prose around it and the McQuarrie–Simon sections these pages follow (**inferred,
unchecked**):

| Image | Page | Inferred content |
|---|---|---|
| 61, 62 | 19.5 | (∂U/∂T)_V = dU/dT = C_v for an ideal gas; dU = C_v dT |
| 63 | 19.5 | along C, q_C = ΔU_C = ∫_{T₂}^{T₁} C_v dT |
| 64 | 19.5 | along B, dw_B = dU = −P dV = −(nRT/V) dV |
| 65 | 19.6 | the tiny steps: δw_B = −(nRT/V) dV and δq_C = C_v dT, with δw_B = −δq_C |
| 66 | 19.6 | (3/2)nR∫dT/T = −nR∫dV/V, so T₂/T₁ = (V₁/V₂)^{2/3} (the monatomic case the next sentence names) |
| 67, 68 | 19.7 | U = Σ N_jε_j, so dU = Σ ε_j dN_j + Σ N_j dε_j; δq_rev = Σ ε_j dN_j and δw_rev = Σ N_j dε_j = −P dV |
| 69, 70 | 19.7 | P = −Σ N_j (∂ε_j/∂V) and, with 17.5, P = kT(∂ln Q/∂V)_{N,T} |
| 71 | 19.8 | Δ_fus H = q_P for melting a mole of ice |

Options: **(a)** leave each gap and put a numbered AI-marked footnote where it stands, saying the
source's display is missing and giving the inferred equation (root rule 13's mechanism; the
book's words untouched); **(b)** (a) plus, where a derivation is built anyway (19.5's path B + C,
19.6's first half, 19.7), let the derivation carry the inferred lines with `note`s saying they
restore a lost display; **(c)** drop the dangling "or:" lines. Proposed: **(b)** for 19.5–19.7 and
(a) for 19.8; the inferred lines are standard results, and 19.7 would otherwise have no equation.

## Figures, in book order (root rules 14, 24, 25, 26, 28)

The chapter's own numbers: 19.3's 1 L / 1 bar / 2 bar pistons, 19.1's two-path Δp (1.0 → 3.0 L/mol,
200 → 400 K), the CO, CH₄, NaCl and C₃H₈ enthalpies of 19.11–19.12 and Table 19.13.1. No figure
needs a literature number except 19.10.1 (below). Arrows: the piston arrows of 19.2.1–19.2.2 and the
pistons of 19.3 are forces (symbolic), but "the piston will shoot down" is motion, which sets 19.3's
figure at the moving tier.

| Image(s) | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 19.1.1 (113010 portrait, 113011 apparatus; "CC BY-SA 3.0; Dr. Mirko Junge") | 19.1 | Joule seated; his paddle-wheel calorimeter | **Kept photographs** (the text points at the apparatus; the portrait is the same figure). Two images, one figure, caption and credit as printed, CC BY-SA 3.0. |
| unnumbered p(V, T) surface (113012, no credit) | 19.1 (note) | an ideal-gas pressure surface over V and T, no paths drawn | **Replace, still, 3D mathematical** (`sim-pressure-surface`; depth and variation): the surface p = RT/V̄ over 1–3 L/mol and 200–400 K, with the note's two routes drawn on it from (1.0 L/mol, 200 K) to (3.0 L/mol, 400 K): isothermal then isochoric, and isochoric then isothermal; a choice picks the route, which lights up with its two legs' Δp. **Point: one route climbs and the other falls first, yet both land on the same height, Δp = −5.47 atm: pressure is a state function.** Readout Δp = (leg 1) + (leg 2) with live numbers. Free orbit bounded above the V–T floor. Eyebrow "Figure"; original kept. |
| 19.2.1 (402577), 19.2.2 (402580), 19.2.3 (400417), no credit | 19.2 | a piston with P and P_ext; compression and expansion pistons before and after; a PV plot of a constant-P_ext compression with the work shaded | **Fold, replace, still, 2D** (`sim-pv-work`; variation): the piston beside its PV plane; slider P_ext (0.5–2 bar, opening at 19.3's 2 bar on 1 L at 1 bar), the piston drawn at its start and at the volume where P = P_ext; the rectangle −P_extΔV shaded on the plane with the isotherm dashed. **Point: whether the gas is compressed or expands is set by P_ext against P, and the work is the area under P_ext, not under the gas's own curve.** Readout w = −P_extΔV with live numbers. Eyebrow "Figure 19.2.1 + 19.2.2 + 19.2.3"; three originals. Still: the step itself is 19.3's figure. |
| six unnumbered images (402588 piston compression, 402589, 402590, 402591 piston expansion, 402592, 402593) | 19.3 | for compression and for expansion: the pegged piston, the one-step PV rectangle, the reversible PV area | **Fold, replace, moving, 2D** (`sim-reversible-path`; flow by animation, variation): choice compression (1 L, 1 bar → ½ L at 2 bar) / expansion (1 L, 2 bar → 2 L at 1 bar); slider number of steps (1–20, detent at 1, the reversible limit a special at the end). The transport plays the peg pulls: the piston shoots to each new balance while the staircase area fills on the PV plane under the isotherm. **Point: with more, smaller steps the shaded work closes in on the area under the isotherm, the least work for a compression (69.3 J against 100 J in one step) and the most from an expansion (138.6 J against 100 J).** Readout w for the chosen path and w_rev = −nRT ln(V₂/V₁) with live numbers. Moving: the peg pull is a time (the book's "suddenly"). Eyebrow "Figure"; six originals. |
| unnumbered paths A, B, C (402614, no credit) | 19.5 | isotherm A and adiabat B + isochore C between P₁V₁T₁ and P₂V₂T₁ | **Replace, still, 2D** (`sim-isotherm-adiabat`; variation): the PV plane with A, B and C; choice route A / B + C; choice gas monatomic (γ = 5/3) / diatomic (7/5); slider V₂/V₁ (1.2–4, opening at 2). Beside the plane, bars for q, w and ΔU per leg in the heat and work colours. **Point: both routes end where they started in temperature, so ΔU = 0 both ways, but the work along B is less than along A, and the heat along C makes up exactly what B's work took (w_B = −q_C).** Readout T₂ = T₁(V₁/V₂)^(γ−1) and the bookkeeping ΔU_{B+C} = 0 = w_B + q_C with live numbers. 19.6 cites it (no figure of its own). Eyebrow "Figure"; original kept. |
| none (equations lost) | 19.7 | — | **Sim, still, 2D** (`sim-heat-and-work-levels`; variation): a particle-in-a-box ladder (18.1's levels) with Boltzmann populations as bars; choice heat / work; slider energy added. Heat: the box is fixed, the bars spread up the ladder. Work (reversible adiabatic compression): the levels rise as 1/L² and the bars ride with them unchanged. **Point: heat moves molecules between levels; work moves the levels.** Readout dU = Σε_j dN_j + ΣN_j dε_j with the two sums live, one of them zero. Recommended (the brief's "levels shifting vs populations shifting"); it replaces nothing, so eyebrow "Sim". |
| 19.10.1 (87321, no credit) + unnumbered DSC (87323, no credit) | 19.10 | schematic H(T) of ice → water, −20 to +20 °C, with the jump ΔH fusion; the ideal heat-capacity spike and its broadened DSC peak | **Fold, replace, still, 2D** (`sim-enthalpy-melting`; variation): top, H(T) − H(253 K); below, C_p(T) with the melting spike; slider T (−20 to +20 °C) moves a state point on both; slider instrument broadening (0 = ideal) spreads the spike into a peak whose shaded area stays Δ_fus H. **Point: the jump in H is a spike in C_p, and however broad the DSC peak, its area is the heat of fusion.** Readout ΔH = ∫C_p dT + Δ_fus H with live numbers. Numbers: C_p of water 75.29 J mol⁻¹ K⁻¹ (Table 19.13.1, the book's); ice's C_p ≈ 38 J mol⁻¹ K⁻¹ and Δ_fus H = 6.01 kJ/mol are **literature from memory, flagged** (the book prints neither; source to be named in the caption). Eyebrow "Figure 19.10.1"; both originals (18.4.1's precedent for an unnumbered image folded in). |
| unnumbered ethanol combustion scheme (113036, no credit) | 19.12 | structural formulas, ethanol + O=O → 2 O=C=O + H–O–H (unbalanced) | **Kept** as printed (a drawn equation; no motion or variation); footnote on the balance (corrections). |

**3D**: one, `sim-pressure-surface` (mathematical: the surface is the lesson the note's
two-path sum makes; the book itself draws it in perspective). Nothing physical in 3D.

### Extra simulations proposed (root rule 15)

- `sim-heat-and-work-levels` (19.7) above, recommended.
- **`sim-enthalpy-ladder` in 19.12** (offered, not recommended): an enthalpy axis with the elements
  at zero, each compound at its ΔH_f° below, the reaction as the drop from reactants to products
  (choice: CH₄ combustion, 2CO + O₂, NaCl, C₃H₈ formation; the book's numbers). It would show why
  ΔH_rxn = ΣνΔH_f°(products) − ΣνΔH_f°(reactants), but the book's own step-by-step combination
  already does.

Judged and dropped: Joule's falling weight and paddles (the photograph suffices; the idea is a
statement, not a variation); a Hess's-law cycle for 19.11 (the ladder above covers it); a
Kirchhoff plot for 19.13 (Example 19.13.1 is a substitution).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 19.1 note, p = RT/V → (19.1.2), (19.1.3) → (19.1.4) → dp | printed block with words, 4 lines | printed | **Build**: "Derivation · the total differential of the pressure", result (19.1.4) and its substituted form; fact the ideal gas law (16.1). |
| 19.1 note, Δp along two paths | numbers into (19.1.4)'s integral | never | Stays (its slips footnoted). |
| 19.1, Examples 19.1.1, 19.1.2 | substitution | never | Stay. |
| 19.2, P = F/A → (19.2.1) → w_PV → (19.2.2) | printed with words, 4 lines | printed | **Build**: "Derivation · pressure-volume work", results w_PV = −∫P dV and (19.2.2); the sign convention a fact (the note). |
| 19.3, −∫P dV = −nRT∫dV/V = −nRT ln(V₂/V₁) | printed, one display of three steps | printed | **Build**: "Derivation · the work of a reversible isothermal compression"; facts P_ext = P (reversible), the ideal gas law (16.1); the missing dV corrected in a note. 19.3's irreversible line (−P_extΔV) is (19.2.2), cited. |
| 19.5, ΔU = 0 → w_rev = −q_rev → q_rev | printed with words, 4 lines | printed | **Build**: "Derivation · the heat of a reversible isothermal expansion"; w_rev links 19.3's derivation (`drv`). |
| 19.5, the bookkeeping of B + C | printed with words, 5 lines (Image63–64 lost between) | printed | **Build**: "Derivation · the work along the adiabat cancels the heat along the isochore", result w_B = −q_C; w_A's sign corrected in a note. Lost lines per the orchestrator's choice. |
| 19.6, first half (Image65–66) | lost | — | Only under option (b): folded into the 19.5 record's continuation or omitted. |
| 19.6, dŪ = −PdV̄ … T₂/T₁ = (V̄₁/V̄₂)^(γ−1) | printed, 13 lines with words | printed | **Build**: "Derivation · temperature and volume along a reversible adiabat", results the R/C̄_V and γ − 1 forms; facts C̄_V (18.4), the ideal gas law, R = C̄_P − C̄_V (stated "We know that"). |
| 19.7, dU = Σε dN + ΣN dε, δq and δw, P from Q | all lost; imported 3 (U = ΣN_jε_j 17.3, δw = −P dV 19.2, P from Q 17.5), run 4, joins 1: score 8, 5 moves | hidden (lost) | **Build only under option (b)**: "Derivation · heat and work on the molecular scale"; otherwise the page stays as printed with footnotes. |
| 19.8, H ≡ U + PV → dH → dH = δq + V dP → ΔH = q_P | printed with words, 5 lines | printed | **Build**: "Derivation · the heat at constant pressure is the enthalpy change", results dH = δq + V dP, ΔH = q_P. |
| 19.10, ΔH_total | a sum, 1 move | | Stays. |
| 19.12, Example 19.12.1, methane by formation, ethanol by bonds | combinations of data reactions; substitution | never | Stay (corrections footnoted). |
| 19.13, (19.13.1) + (19.13.3) → (19.13.4) → (19.13.5) | printed with words, 3 moves | printed | **Build**: "Derivation · enthalpy change from the empirical heat capacity", result (19.13.5); (19.13.1)'s limit corrected in a note. |
| 19.13, Examples 19.13.1, 19.13.2 | substitution | never | Stay (corrections footnoted). |
| 19.14, ΔU = q_P − PΔV → q_P = ΔH | printed, 4 lines with words | printed | **Build**: "Derivation · enthalpy from the heat at constant pressure", result H ≡ U + PV; facts (19.2.2) and the first law; links 19.8's (`drv`); its end is 19.8's definition, cited, not a second concept. |

Nine records to build (19.1, 19.2, 19.3, 19.5 × 2, 19.6, 19.8, 19.13, 19.14), a tenth (19.7)
under option (b); none hidden except 19.7.

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises**: 0 printed.
- **Problem lists**: none.
- **Worked examples**: 5 (19.1.1, 19.1.2, 19.12.1, 19.13.1, 19.13.2), all with a Solution, kept;
  not exercises.
- **19.E**: 1 printed (19.E.1, unkeyed), **not routed**: it tests 1.9's uncertainty principle and
  is already 1.9's card `e3`. The page's prose is a stray Chapter 4 passage, not built.
- **In all**: 0 cards from the book.
- **Proposed new: 15**, one per section and two in 19.3 and 19.12 (19.11's one with 19.12's, so
  every concept-bearing section has one). Answers computed here:
  19.1 heat to warm 250 g of water from 20.0 to 80.0 °C (4.184 J g⁻¹ K⁻¹): 62.8 kJ;
  19.2 1.00 mol compressed from 10.0 L to 5.0 L against a constant 2.00 bar: w = +1.00 kJ;
  19.3 (two) 1.00 mol at 300 K compressed from 10.0 L to 5.0 L reversibly, w = +1.73 kJ, and in one
  step at the final pressure 499 kPa, w = +2.49 kJ; explain which path needs less work and why;
  19.4 a gas taken round a cycle absorbs 500 J of heat: ΔU = 0, w = −500 J (explain);
  19.5 1.00 mol at 298 K doubles its volume reversibly and isothermally: q = +1.72 kJ, w = −1.72 kJ,
  ΔU = 0;
  19.6 reversible adiabatic doubling from 298 K: argon (γ = 5/3) 187.7 K, N₂ (γ = 7/5) 225.8 K;
  19.7 explain: in heating at constant volume and in a reversible adiabatic compression, which of
  the levels and the populations change;
  19.8 1.00 mol of a monatomic ideal gas warmed 10.0 K at constant pressure: ΔU = 124.7 J, ΔH = q_P
  = 207.9 J;
  19.9 explain why H(T) cannot be found by integrating C_p straight through a melting point;
  19.10 ice at −20 °C to water at +20 °C, with C_p(ice) = 37.7 and C_p(water) = 75.29 J mol⁻¹ K⁻¹ and
  Δ_fus H = 6.01 kJ mol⁻¹ given in the question: 8.27 kJ mol⁻¹;
  19.11 from 19.11's table, ΔrH of 2CO₂ → 2CO + O₂: +566.0 kJ;
  19.12 (two) the combustion of propane from 19.12's ΔH_f° values: −2219.9 kJ; CH₄ + 2O₂ → CO₂ +
  2H₂O(g) from the bond table: −808 kJ;
  19.13 1 mol N₂ from 298 to 400 K with Table 19.13.1: ΔH = 3.01 kJ;
  19.14 show that at constant pressure ΔH − ΔU = nRΔT for an ideal gas (prove).
  By what writing them takes: 10 compute, 4 explain, 1 prove.

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies. *Checked by computation* marks a
correction worked here.

- **19.1**: "w is the amount of energy lost due to the system doing work on the surroundings"
  (with ΔU = q + w, w is the work done *on* the system, as 19.2's note sets out); "it's ability",
  "soundings", "form or work" (as printed); C = dq/∂T (dq/dT); the note's limit "Δ_i → 0" (Δx_i)
  and df without dx_i (as printed; the derivation follows the correct mathematics); the first
  route's integrals print R(400 K) in the isothermal step at 200 K and R/(1.0 L/mol) in the
  isochoric step at 3.0 L/mol, while the next line uses 200 K and 3.0 L/mol (Δp = −5.47 atm both
  ways is right; *checked by computation*); "400,\ K" (as printed); Example 19.1.2's "am", "p_exp"
  and "−1130 J = −1.14 kJ" (−1135 J = −1.13 kJ; *checked*); Table 3.1.1's electrical row (a
  "resistance" W, as printed).
- **19.2**: "the above dissipation experiment" (no such experiment in the book; as printed);
  "(\P\)" (raw TeX, P); "w_electical" (as printed).
- **19.3**: the integrals without dV (as printed); in the expansion, "Work is being done on the
  system, so the overall work being done is negative" (by the system) and "the piston will compress
  reversibly" (expand); "it is the same amount of work … as the reversible isothermal compression"
  (with the book's numbers the compression takes 69.3 J and the expansion gives 138.6 J; equal and
  opposite only for the same two states; *checked*).
- **19.5**: the header "Isothermal expansion" over "if a gas is compressed isothermally" (as
  printed); "\w_A\)" (raw TeX); w_A = −nRT ln(V₁/V₂) (−nRT ln(V₂/V₁); *checked*: the printed form is
  positive for an expansion); "As the and points" (as printed); the four lost displays.
- **19.6**: "see Eq 19.23" (no such equation); the two lost displays; "inversely related" (as
  printed).
- **19.7**: the four lost displays (all of the page's equations).
- **19.8**: C_p = C-V + nR (C_V); "define at new state function", "at long as", "U ~ H" (as
  printed); the lost Image71.
- **19.10**: "-0 °C", "C_P,ice. dT", "infinitly", "enthlapy" (as printed); the figure cited for
  "more phase transitions" (it shows one).
- **19.11**: "Combining values" promises a PCl₃ example the page never prints.
- **19.12**: "°Ccur" (occur); Example 19.12.1 multiplies "CO(g) → C(gr) + O₂(g)" (+ ½O₂) and "C(gr) +
  2O₂(g) → 2CO₂(g)" (C(gr) + O₂(g) → CO₂(g)) and swaps the labels: "2 × ΔH₁ = −787.02" is 2ΔH₂ and
  "2 × ΔH₂ = 221.06" is −2ΔH₁ (the total −565.96 kJ is right; *checked*); "ΔH_{f^o}", "CO2_(g)",
  "Δ_rxn" (ΔH_rxn); the methane sum −890.5 kJ checks; the ethanol scheme is unbalanced and the
  text counts one O=O broken and one O–H formed while the sum uses two O–H: balanced, C₂H₅OH + 3O₂ →
  2CO₂ + 3H₂O breaks five C–H, one C–C, one C–O, one O–H and three O=O and forms four C=O and six
  O–H, ΔH ≈ −1255 kJ/mol from the page's own bond table (*checked*; the printed −856 is the
  unbalanced count).
- **19.13**: (19.13.1)'s limits ∫_{T₂}^{T₂} (T₁ to T₂); Example 19.13.1 cites (19.13.1) for C_p(T)
  ((19.13.3)), writes a = 22.14 (Table: 22.13) and gets 295.5 and 470.5 J/mol for the b and c
  terms (293.5 and 79.7: the total is 2143.6 J/mol, not 2534.4; *checked*); the reaction form's
  ∫ΔC_p ΔT (dT); Example 19.13.2 takes −46.11 kJ/mol (per mole of NH₃) for the reaction as written,
  which forms 2 NH₃, but ΔC_p for the whole reaction: per mole of NH₃ the answer is −47.81 kJ/mol,
  for the reaction as written −95.63 kJ (*checked*); "−46110 + J/mol" (as printed).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 19.1.1 (both images) | "CC BY-SA 3.0; Dr. Mirko Junge" | shipped under its own licence with credit |
| every other image | none | shipped under the page's licence (19.2's three under CC BY 4.0, the rest BY-NC-SA) |

## What is new to OmniStax here

- **Two new types, `heat` and `work`** (dimension J), merged and coloured
  (`colours:default`: heat `#740549/#FEAAD0`, work `#654D09/#DDAB0A`, no existing type moved). The
  exploration's first proposal listed them; Chapter 20's prep stages the same two rows, so this
  chapter, where heat and work are introduced, now owns them. q, q_rev, q_P, q_V are `heat`; w,
  w_rev, w_PV are `work`; U, ΔU, H, ΔH and the reaction enthalpies stay `energy`; C, C_P, C_p, C̄_P
  `heat-capacity`; P_ext `pressure`. *Orchestrator*: enthalpy as its own type (the first proposal
  listed it) was not added; the book now has 38 types against a 36-colour palette.
- **Symbols**: 35 new (30 with macros): `w` (`\kw`), `Delta_U`, `U_i`, `U_f`, `p_press` (19.1's
  lower-case p, since `p` is momentum), `p_ext`, `P_ext`, `w_PV`, `T_1` (`\kTone`), `T_2`, `P_3`,
  `q_rev`, `w_rev`, `U_bar`, `C_P_bar`, `gamma_hc` (since `gamma` is untyped elsewhere), `H`
  (`\kHenth`, since `\kH` is the Hamiltonian), `Delta_H`, `q_P`, `q_V`, `C_P`, `C_p_heat` (since `C_p`
  is 9.2's normalization constant), `Delta_fusH`, `Delta_rH`, `Delta_Hf0`, `Delta_Hrxn`, `Delta_Hc`,
  `Delta_Cp`, `D_bond`, `F_vec`, `ds_vec`, `nu_coef`, `a_cp`, `b_cp`, `c_cp`. Heat is the existing
  `q` (`\kq`, a coordinate in Chapters 2–13; one meaning in this chapter). Keys and macros match
  what Chapters 20–22 already stage (`w`, `q_rev`, `w_rev`, `T_1`, `T_2`, `P_ext`; Chapter 21's `H`
  and `C_P`; `P_1` and `P_2` were already merged by Chapter 22 and are reused). 119 variables rows;
  `redefines` on V, V₁ and V₂ after 19.1 (19.1's V is a molar volume).
- **58 concepts, 103 edges** (Hasse-reduced against the merged book: 4 redundant edges removed
  before the merge), 43 forms. Reused rather than duplicated: `internal-energy`,
  `constant-volume-heat-capacity` (17.4), `molar-heat-capacity` (18.4), `specific-heat-capacity`
  (18.9), `pressure`, `ideal-gas-law`, `isotherm`, `isochore`, `thermodynamic-system` (16.1),
  `pressure-from-q` (17.5), `canonical-partition-function` (17.2), `ionization-energy` (7.1),
  `dissociation-energy` (5.3).

## The chapter's answer to root rule 23

The first law is bookkeeping, and the book's pictures are frozen ledgers. The stunning version
lets the reader run the books: pull the peg on a piston and watch the work fill a rectangle, then
take the same compression in more and more steps until the staircase hugs the isotherm and the work
bottoms out; send a gas from one state to another along the isotherm or along the adiabat and the
isochore, and see the heat and work bars trade while ΔU stays fixed; walk the two routes of 19.1
across the pressure surface and land at the same height; look inside the gas, where heat lifts
molecules up a fixed ladder and work lifts the ladder itself; and warm ice through its melting
point, where a jump in H is a spike in C_p that a real calorimeter smears into a peak of the same
area.

## Tool changes made for this chapter

- `tools/lt2md.py`: 19.10 prints Figure 19.10.1's caption in a `div` after the image's own `div`
  (`<em><strong>Figure 19.10.1</strong>: …</em>`), not in a `<figcaption>`; the converter wrote an
  unnumbered IMAGE and a stray "Figure 19.10.1" / ": caption" pair. `children` now reads a div that
  holds one image and nothing else, followed by a div that is only "Figure N.M.K: caption", as one
  FIGURE. Chapters 1–18 reconverted to a scratch folder with the tool before and after the change:
  210 source files, all byte-identical. (23.1, page 14497, has the same pattern and will benefit.)
- `tools/md2html.py`: (1) an image linked by a dead site path (`![…](/wikis.lib.ncsu.edu/…)`, the
  eleven CH431 equation GIFs) came through as literal markdown text in a `<p>`; it is now an HTML
  comment naming the missing file, for the builder. (2) 19.13 writes `\end {align*}` with a space,
  which the align → aligned rewrite missed (KaTeX refused the display); the rewrite now allows the
  space. Drafts of Chapters 1–18 printed with the old and the new tool: 190 pages, all identical.
- Drafts for all fourteen sections: 291 maths spans in the text drafts and 3 in the section
  drafts, every one set by KaTeX 0.16 in strict mode without an error. Notes for builders: the
  drafter leaves "TODO header" above the openings of 19.1, 19.2, 19.6, 19.10, 19.12, 19.13 and 19.14;
  the dead images are `<!-- image missing at the source: … -->` comments in empty `<p>`s; the
  figures are drafted as kept images.
