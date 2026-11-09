<!-- LibreTexts page 14505: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24:_Solutions_I_-_Volatile_Solutes/24.03:_Chemical_Potential_of_Each_Component_Has_the_Same_Value_in_Each_Phase_in_Which_the_Component_Appears -->
# Chemical Potential of Each Component Has the Same Value in Each Phase in Which the Component Appears

In much the same fashion as the partial molar volume is defined, the {term:partial molar Gibbs function} is defined for compound $i$ in a mixture:

$$ \mu_i = \left( \dfrac{\partial G}{\partial n_i} \right) _{P,T,n_j\neq i} $$ {eq:eq1} n=1

The partial molar function is of particular importance and is called the {term:chemical potential}. The chemical potential tells how the Gibbs function will change as the composition of the mixture changes. Since systems tend to seek a minimum aggregate Gibbs function, the chemical potential will point to the direction the system can move in order to reduce the total Gibbs function and reach equilibrium. In general, the total change in the Gibbs function ($dG$) can be calculated from:

$$ dG = \left( \dfrac{\partial G}{\partial P} \right) _{T,n_i} dP + \left( \dfrac{\partial G}{\partial T} \right) _{P, n_i }dT + \sum_i \left( \dfrac{\partial G}{\partial n_i} \right) _{T,n_j\neq i} dn_i $$

Or, by substituting the definition for the chemical potential, and evaluating the pressure and temperature derivatives:

$$ dG = VdP - SdT + \sum_i \mu_i dn_i $$

But as it turns out, the chemical potential can be defined as the partial molar quantity of any of the four major thermodynamic functions $U$, $H$, $A$, or $G$:

> TABLE {tab:1} cols=2
> caption: Table 24.3.1: Chemical potential can be defined as the partial molar derivative any of the four major thermodynamic functions

| $dU = TdS - PdV + \sum_i \mu_i dn_i$ | $\mu_i = \left( \dfrac{\partial U}{\partial n_i} \right) _{S,V,n_j\neq i}$ |
| --- | --- |
| $dH = TdS - VdT + \sum_i \mu_i dn_i$ | $\mu_i = \left( \dfrac{\partial H}{\partial n_i} \right) _{S,P,n_j\neq i}$ |
| $dA = -PdV - TdS + \sum_i \mu_i dn_i$ | $\mu_i = \left( \dfrac{\partial A}{\partial n_i} \right) _{V,T,n_j\neq i}$ |
| $dG = VdP - SdT + \sum_i \mu_i dn_i$ | $\mu_i = \left( \dfrac{\partial G}{\partial n_i} \right) _{P,T,n_j\neq i}$ |

The last definition, in which the chemical potential is defined as the partial molar Gibbs function, is the most commonly used, and perhaps the most useful (Equation [ref:eq:eq1]). As the partial most Gibbs function, it is easy to show that:

$$ d\mu = VdP - SdT $$

where $V$ is the molar volume, and $S$ is the molar entropy. Using this expression, it is easy to show that:

$$ \left( \dfrac{\partial \mu}{\partial P} \right) _{T} = V $$

and so at constant temperature:

$$ \int_{\mu^o}^{\mu} d\mu = \int_{P^o}^{P} V\,dP $$ {eq:eq5} n=2

So that for a substance for which the molar volume is fairly independent of pressure at constant temperature (i. e., $\kappa_T$ is very small), therefore Equation [ref:eq:eq5] becomes:

$$ \int_{\mu^o}^{\mu} d\mu = V \int_{P^o}^{P} dP $$

$$ \mu - \mu^o = V(P-P^o) $$

or:

$$ \mu = \mu^o + V(P-P^o) $$

Where $P^o$ is the standard state pressure (1 bar) and $\mu^o$ is the chemical potential at the standard pressure. If the substance is highly compressible (such as a gas) the pressure dependence of the molar volume is needed to complete the integral. If the substance is an ideal gas:

$$ V =\dfrac{RT}{P} $$

So at constant temperature, Equation [ref:eq:eq5] then becomes:

$$ \int_{\mu^o}^{\mu} d\mu = RT int_{P^o}^{P} \dfrac{dP}{P} $$ {eq:eq5b} n=3

or:

$$ \mu = \mu^o + RT \ln \left(\dfrac{P}{P^o} \right) $$

A lot of chemistry takes place in solution and therefore this topic is of prime interest for chemistry.

## Thermodynamic potentials of solutions

The Gibbs free energy of an ideal gas depends logarithmically on pressure:

$$ G = G^o + RT \ln \dfrac{P}{P^o} $$

P<sup>~~o~~</sup> is *is often dropped out of the formula.* and we write:

$$ G = G^o + RT \ln P $$

:::note [emphasis]

Notice however that although $P$ and $P/P^o$ have the same numerical value, the dimensions are different. $P$ usually has dimensions of bar, but $P/P^o$ is *dimensionless*.
:::

If we have a gas mixture we can hold the same logarithmic argument for each partial pressure as the gases do not notice each other. We do need to take into account the number of moles of each and work with (partial) molar values, i.e. the thermodynamic potential:

$$ μ_j = μ_j^o + RT \ln \dfrac{P_j}{P^o} $$ {eq:B} n=4

If we are dealing with an equilibrium over an ideal liquid solution the situation in the gas phase gives us a probe for the situation in the liquid. The equilibrium must hold for each of *all* components j (say two in binary mixture). That means that for each of them the thermodynamic potential in the liquid and in the gas must be equal:

$$ μ_j^{sln} = μ_j^{gas} $$

for all $j$. Consider what happens to a pure component, e.g. $j=1$ in equilibrium with its vapor. We can write:

$$ μ_1^{pure \,liq}= μ_1^{pure\, vapor}=μ_1^o + RT \ln \dfrac{P^*_1}{P^o} $$

The asterisk in $P^*_1$ denotes the equilibrium vapor pressure of pure component 1 and we will use that to indicate the thermodynamic potential of pure compounds too:

$$ μ_1^{*liq}= μ_1^o + RT \ln \dfrac{P^*_1}{P^o} $$ {eq:A} n=5

Combining Equations [ref:eq:A] and [ref:eq:B] we find a relationship between the solution and the pure liquid:

$$ μ_j^{sln}=μ^*_j + RT \ln \dfrac{P_j}{P^*_j} $$

Notice that the *gas* and its pressure is used to link the mixture and the pure compound.
