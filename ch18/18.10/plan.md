# Plan: 18.10 Ortho and Para Hydrogen (LibreTexts 57614)

Source: `source.md` (`python3 tools/convert.py 18.10`); draft from `python3 tools/md2html.py 18.10` (deleted once built).
Status: built 2026-11-08 in the Chapter 18 job, without a review stop (config: the chapter in one go).

No objectives, summary or book headers. Eleven numbered displays (18.10.1)–(18.10.11), one figure. Credit: B. L.
Tembe's IIT Bombay notes. Figure 18.10.1 CC BY-SA 3.0, Gadolinist. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers, ours, the exploration's)

1. `nuclear-spins` **Nuclear spins and exchange**: to the triplet. Introduces `ortho-hydrogen`, `para-hydrogen`,
   `nuclear-exchange-symmetry`; reinforces `two-spin-eigenstates`.
2. `even-odd-levels` **Even and odd rotational levels**: (18.10.1), (18.10.2), derivation `exchange-parity` in place of
   (18.10.3)–(18.10.5), the parity list, derivation `ortho-para` in place of (18.10.6)–(18.10.10). Introduces
   `rotational-exchange-parity`, `ortho-para-partition-functions`, `ortho-para-ratio`.
3. `frozen-mixture` **A mixture that cannot equilibrate**: C_V and ⟨E⟩, Figure 18.10.1, (18.10.11), ¹⁶O₂. Introduces
   `frozen-ortho-para-mixture`, `oxygen-16-rotational-states`.

Referents: `ortho-h2`, `para-h2` (the figure's ladder and curves; the text's o- and p- curves).

## Figures

- `sim-ortho-para` · Figure 18.10.1 · ortho-para-ratio, ortho-para-partition-functions, frozen-ortho-para-mixture ·
  variation by slider and choice: the reader cools the gas with and without a catalyst and sees the odd levels empty,
  N_o/N_p fall from 3 toward 0 and C_V,rot climb to its 2.07R peak near 50 K, or the ratio stay at 3 and the 3:1 curve
  followed; the still shows four curves with no state · arrows: none · still: no time in it · T slider 10–330 K
  (the book's axis), opening 100 K, detents 77 K and 300 K; choice with catalyst / without · headline: the ortho
  share at T · left the ladder J = 0–5 to scale in J(J + 1), levels in the referents' colours with population bars;
  right C_V,rot/R against T (equilibrium, 3:1 dashed, ortho, para), below N_o/N_p against T · 2D. Curves computed
  from Table 18.4.1's Θ_R = 87.6 K (equilibrium peak 2.069R at 50.5 K, para 1.465R at 172 K). Original kept; its
  caption's "Exp" curve corrected by a figure-row note (`c-fig-exp`).

## Exercises

None printed. `ai1` (AI exercise, multi): N_o/N_p at 77 K and 300 K with Θ_R = 87.6 K: 0.920 and 2.987 (computed).

## Derivations

- `exchange-parity` (printed, with words): "Derivation · the exchange parity of the rotational wavefunctions", one node,
  seven moves (cos(π − θ) = −cos θ and the sign product inserted), result ψ_r → (−1)^J ψ_r numbered (18.10.5); its
  note carries the corrections of (18.10.3) and (18.10.5).
- `ortho-para` (printed, with words): "Derivations · the ortho and para partition functions and their ratio", six
  nodes: (18.10.6), (18.10.7), (18.10.8), (18.10.9), the high-T limit 3, the low-T limit (18.10.10); notes correct
  (18.10.8), (18.10.9), (18.10.10). The paragraph "Combining …" stays as prose before it.
- C_V from ⟨E⟩: stays (two lines).

## Corrections

Footnotes: `c-legendre` ((18.10.2)'s |m/2 and dx^{m|}), `c-product` (ψ_r, ψ_m), `c-energy-sign` (⟨E⟩ = −∂ln q/∂β),
`c-oxygen` (¹⁶O₂ takes the odd J: its ³Σg⁻ ground state is antisymmetric under exchange; standard textbook fact,
from memory, orchestrator's rule), `c-fig-exp` (figure row). As printed: "antisymmetic", "This in indeed", "rot, nu".

## Wanted at chapter level

None.
