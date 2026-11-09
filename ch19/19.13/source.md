<!-- LibreTexts page 13711: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19:_The_First_Law_of_Thermodynamics/19.13:_The_Temperature_Dependence_of_H -->
# The Temperature Dependence of ΔH

It is often required to know thermodynamic functions (such as enthalpy) at temperatures other than those available from tabulated data. Fortunately, the conversion to other temperatures is not difficult.

At constant pressure

$$ dH = C_p \,dT $$

And so for a temperature change from $T_1$ to $T_2$

$$ \Delta H = \int_{T_2}^{T_2} C_p\, dT $$ {eq:EQ1} n=1

Equation [ref:eq:EQ1] is often referred to as *Kirchhoff's Law*. If $C_p$ is independent of temperature, then

$$ \Delta H = C_p \,\Delta T $$ {eq:intH} n=2

If the temperature dependence of the heat capacity is known, it can be incorporated into the integral in Equation [ref:eq:EQ1]. A common *empirical* model used to fit heat capacities over broad temperature ranges is

$$ C_p(T) = a+ bT + \dfrac{c}{T^2} $$ {eq:EQ15} n=3

After combining Equations [ref:eq:EQ15] and [ref:eq:EQ1], the enthalpy change for the temperature change can be found obtained by a simple integration

$$ \Delta H = \int_{T_1}^{T_2} \left(a+ bT + \dfrac{c}{T^2} \right) dT $$ {eq:EQ2} n=4

Solving the definite integral yields

$$ \begin{align} \Delta H &= \left[ aT + \dfrac{b}{2} T^2 - \dfrac{c}{T} \right]_{T_1}^{T_2} \\ &= a(T_2-T_1) + \dfrac{b}{2}(T_2^2-T_1^2) - c \left( \dfrac{1}{T_2} - \dfrac{1}{T_1} \right)  \end{align} $$ {eq:ineq} n=5

This expression can then be used with experimentally determined values of $a$, $b$, and $c$, some of which are shown in the following table.

> TABLE {tab:1} cols=4
> caption: Table 19.13.1*{term::} Empirical Parameters for the temperature dependence of $C_p$*

| {term:Substance} | {term:a (J mol<sup>-1</sup> K<sup>-1</sup>)} | {term:b (J mol<sup>-1</sup> K<sup>-2</sup>)} | {term:c (J mol<sup>-1</sup> K)} |
| --- | --- | --- | --- |
| {term:C(gr)} | 16.86 | 4.77 x 10<sup>-3</sup> | -8.54 x 10<sup>5</sup> |
| {term:CO<sub>2</sub>(g)} | 44.22 | 8.79 x 10<sup>-3</sup> | -8.62 x 10<sup>5</sup> |
| {term:H<sub>2</sub>O(l)} | 75.29 | 0 | 0 |
| {term:N<sub>2</sub>(g)} | 28.58 | 3.77 x 10<sup>-3</sup> | -5.0 x 10<sup>4</sup> |
| {term:Pb(s)} | 22.13 | 1.172 x 10<sup>-2</sup> | 9.6 x 10<sup>4</sup> |

:::example {ex:19.13.1} Heating Lead

What is the molar enthalpy change for a temperature increase from 273 K to 353 K for Pb(s)?

**Solution**

The enthalpy change is given by Equation [ref:eq:EQ1] with a temperature dependence $C_p$ given by Equation [ref:eq:EQ1] using the parameters in Table 19.13.1. This results in the integral form (Equation [ref:eq:ineq]):

$$ \Delta H = a(T_2-T_1) + \dfrac{b}{2}(T_2^2-T_1^2) - c \left( \dfrac{1}{T_2} - \dfrac{1}{T_1} \right) $$

when substituted with the relevant parameters of Pb(s) from Table 19.13.1.

$$ \begin{align*} \Delta H = \,& (22.14\, \dfrac{J}{mol\,K} ( 353\,K - 273\,K) \\ & + \dfrac{1.172 \times 10^{-2} \frac{J}{mol\,K^2}}{2} \left( (353\,K)^2 - (273\,K)^2 \right) \\ &- 9.6 \times 10^4 \dfrac{J\,K}{mol} \left( \dfrac{1}{(353\,K)} - \dfrac{1}{(273\,K)} \right) \\ \Delta H = \, & 1770.4 \, \dfrac{J}{mol}+ 295.5\, \dfrac{J}{mol}+ 470.5 \, \dfrac{J}{mol} \\ = & 2534.4 \,\dfrac{J}{mol} \end {align*} $$
:::

For chemical reactions, the reaction enthalpy at differing temperatures can be calculated from

$$ \Delta H_{rxn}(T_2) = \Delta H_{rxn}(T_1) + \int_{T_1}^{T_2} \Delta C_p \Delta T $$

:::example {ex:19.13.2} Enthalpy of Formation

The enthalpy of formation of NH<sub>3</sub>(g) is -46.11 kJ/mol at 25 <sup>o</sup>C. Calculate the enthalpy of formation at 100 <sup>o</sup>C.

**Solution**

$$ \ce{N2(g) + 3 H2(g) \rightleftharpoons 2 NH3(g)} $$

with $\Delta H \,(298\, K) = -46.11\, kJ/mol$

> TABLE {tab:2} cols=2

| Compound | Cp (J mol<sup>-1</sup> K<sup>-1</sup>) |
| --- | --- |
| {term:N<sub>2</sub>(g)} | 29.12 |
| {term:H<sub>2</sub>(g)} | 28.82 |
| {term:NH<sub>3</sub>(g)} | 35.06 |

$$ \begin{align*} \Delta H (373\,K) & = \Delta H (298\,K) + \Delta C_p\Delta T \\ & = -46110 +\dfrac{J}{mol} \left[ 2 \left(35.06 \dfrac{J}{mol\,K}\right) - \left(29.12\, \dfrac{J}{mol\,K}\right) - 3\left(28.82\, \dfrac{J}{mol\,K}\right) \right] (373\,K -298\,K) \\ & = -49.5\, \dfrac{kJ}{mol} \end{align*} $$
:::
