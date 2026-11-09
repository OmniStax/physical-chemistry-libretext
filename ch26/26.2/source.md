<!-- LibreTexts page 14523: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26:_Chemical_Equilibrium/26.02:_An_Equilibrium_Constant_is_a_Function_of_Temperature_Only -->
# An Equilibrium Constant is a Function of Temperature Only

Consider a generic reaction:

$$ v_AA + v_BB \rightleftharpoons v_YY + v_ZZ $$

When the reaction reaches equilibrium, the Gibbs energy of reaction, $Δ_rG$, goes to zero. In this case, the reaction quotient, $Q$, is usually rewritten as the {term:equilibrium constant}, $K$, and we get:

$$ \Delta_rG = \Delta_rG^o + RT\ln K=0 $$

$$ \Delta_rG^o = - RT\ln K $$

where

$$ K=\dfrac{P_{eq,Y}^{vY}P_{eq,Z}^{vZ}}{P_{eq,A}^{vA}P_{eq,B}^{vB}} $$

:::note [note] Note

As you see $Δ_rG^o$ is *{term:not}* zero, because the standard state does *{term:not}* represent an equilibrium state (typically).
:::

We can calculate the temperature dependence of $K$. Rather than look at:

$$ \left(\frac{\partial K}{\partial T}\right)_P $$

We will look at:

$$ \left(\frac{\partial\ln{K}}{\partial T}\right)_P $$

Starting with Gibbs energy:

$$ \Delta_rG^{\circ}=-RT\ln{K} $$

$$ \therefore\ln{K}=-\frac{\Delta rG^{\circ}}{RT} $$

$$ \left(\frac{\partial\ln{K}}{\partial T}\right)_P=-\frac{1}{R}\left[\frac{\partial(\Delta_rG^{\circ}/T)}{\partial T}\right]_P $$

We need to take the Gibbs-Helmholtz equation:

$$ \Delta \bar{H}=-T^2\left[\frac{\partial (\Delta\bar{G}/T)}{\partial T}\right]_P $$

We can also write it as:

$$ \left[\frac{\partial\left(\Delta\bar{G}/T\right)}{\partial T}\right]_P=-\frac{\Delta \bar{H}}{T^2} $$

Plugging the Gibbs-Helmholtz equation into our earlier equation, we obtain the Van't Hoff equation:

$$ \left(\frac{\partial\ln{K}}{\partial T}\right)_P=\frac{\Delta_rH^{\circ}}{RT^2} $$

The temperature dependence of the equilibrium constant depends on enthalpy of reaction. Rearranging:

$$ d\left(\ln{K}\right)=\frac{\Delta_rH^{\circ}(T)}{RT^2}dT $$

This is the Van't Hoff equation. We can use it to find $K$ at other temperatures. Assuming enthalpy is independent of temperature, the integrated form becomes:

$$ \ln{\frac{K(T_2)}{K(T_1)}}=-\frac{\Delta_rH^{\circ}}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right) $$

## Le Chatelier's Principle

In the ideal gas reaction case, $K$ {term:only} depends on temperature, $T$, (just like $U$) not on the total pressure, $P$. This leads to the well-known principle of Le Chatelier. Consider a gas reaction like:

$$ A \rightleftharpoons B + C $$

e.g.

$$ PCl_5 \rightleftharpoons PCl_3 + Cl_2 $$

In pressures, the equilibrium constant becomes:

$$ K = \dfrac{P_BP_C}{P_A} $$

If initially n<sub>A</sub> =1 we have at an extent ξ:

n<sub>A</sub> = 1- ξ

n<sub>B</sub>= ξ

n<sub>C</sub>= ξ

n<sub>Total</sub> = 1+ ξ

The partial pressures are given by Dalton's law:

P<sub>A</sub>= [1- ξ /1+ ξ] P

P<sub>B</sub> [ξ / 1+ ξ ] P

P<sub>C</sub> [ξ /1+ ξ ] P

The equilibrium constant becomes:

$$ K = P\dfrac{ξ_{eq}^2}{1-ξ_{eq}^2} $$

Even though the total pressure, $P$, does occur in this equation, $K$ is *not* dependent on $P$. If the total pressure is changed (e.g. by compression of the gas) the value of ξ<sub>eq</sub> will change (the equilibrium shifts) in response. It will go to the side with the fewer molecules. This fact is known as le Chatelier's principle

If the system is not ideal we will also get a Chatelier shift, but the value of $K$ may change a little because the value of the activity coefficients (or fugacity) is a little dependent on the pressure too. In solution the same thing holds. In ideal solutions $K$ is only $T$ dependent, but as we saw these systems are rare. Particularly in ionic solutions equilibrium constants will be effected by other things than just temperature, e.g. changes in the ionic strength and we need to find the activity coefficients to make any predictions.

:::example {ex:?} Example

Consider the reaction of ammonia decomposition:

$$ \sf 2NH_3\it\left(g\right)\sf\leftrightharpoons N_2\it\left(g\right)\sf+3H_2\it\left(g\right) $$

$$ \Delta_fH^{\circ}(\text{NH}_3, g)=-45.90\;\sf kJ/mol $$

The reaction is initially at equilibrium. For each of the stresses, use your General Chemistry knowledge to decide if equilibrium will be unaffected, or if it will shift towards reactants or products.

> TABLE {tab:1} cols=2

| Process | Shifts towards |
| --- | --- |
| Isothermal removal of $\sf H_2$ gas |  |
| Isothermal addition of $\sf N_2$ gas |  |
| Isothermal decrease of container volume |  |
| Isothermal and isochoric addition of argon gas |  |
| Isobaric increase of temperature |  |

Write the equilibrium constant expression for the above chemical reaction in terms of gas-phase mole fractions.
:::

## Concentration

The gas law contains a hidden definition of concentration:

$$ PV= nRT $$

$$ P= \left(\dfrac{n}{V} \right) RT $$

$$ P= c RT $$

$$ c= \dfrac{P}{RT} $$ {eq:Conc} n=1

Here c stands for the molar amount per unit volume or *{term:molarity}*. For gaseous mixtures we do not use this fact much, but it provides the link to the more important liquid solution as a reaction medium. We can rewrite the equilibrium constant as

$$ K= \dfrac{c_{eq,Y}^{v_Y} c_{eq,Z}^{v_Z} }{c_{eq,A}^{v_A} c_{eq,B}^{v_B}} $$ {eq:K} n=2

However, c (Equation [ref:eq:Conc]) is substituted into $K$ (Equation [ref:eq:K]), then not all the factors of $RT$ cancel. The missing term g. ln[RT] depends on the stoichiometric coefficients:

$$ g=v_Y+v_Z-v_A-v_B $$

The term is generally *incorporated* in Δ<sub>r</sub>G<sup>~~o~~</sup> so that the latter now refers to a new standard state of 1 mole per liter of each species rather than 1 bar of each (or so).
