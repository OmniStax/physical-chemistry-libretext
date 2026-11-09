<!-- LibreTexts page 47709: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19:_The_First_Law_of_Thermodynamics/19.01:_Overview_of_Classical_Thermodynamics -->
# Overview of Classical Thermodynamics

One of the pioneers in the field of modern thermodynamics was James P. Joule (1818 - 1889). Among the experiments Joule carried out, was an attempt to measure the effect on the temperature of a sample of water that was caused by doing work on the water. Using a clever apparatus to perform work on water by using a falling weight to turn paddles within an insulated canister filled with water, Joule was able to measure a temperature increase in the water.

> FIGURE {fig:19.1.1} src=media/113010-1200px-Joule_James_sitting1.jpg width=237px
> alt: Black and white portrait of a seated man with a thick beard and a suit, looking to the side. Victorian-era attire is evident, with a waistcoat and bow tie. Neutral background.
> part src=media/113011-651px-Joule_Apparatus.jpg width=224px
> alt: A metal heat engine with a wooden handle, featuring multiple stacked, angled blades within a cylindrical frame.
> caption: (left) James Prescott Joule (1818 - 1889) (right) Joule's apparatus for measuring the work equivalent of heat. (CC BY-SA 3.0; Dr. Mirko Junge)

Thus, Joule was able to show that work and heat can have the same effect on matter – a change in temperature! It would then be reasonable to conclude that heating, as well as doing work on a system will increase its energy content, and thus it’s ability to perform work in the surroundings. This leads to an important construct of the {term:First Law of Thermodynamics}:

> The capacity of a system to do work is increased by heating the system or doing work on it.

The {term:internal energy} (U) of a system is a measure of its capacity to supply energy that can do work within the surroundings, making U the ideal variable to keep track of the flow of heat and work energy into and out of a system. Changes in the internal energy of a system ($\Delta U$) can be calculated by

$$ \Delta U = U_f - U_i $$ {eq:FirstLaw} n=1

where the subscripts $i$ and $f$ indicate initial and final states of the system. $U$ as it turns out, is a state variable. In other words, the amount of energy available in a system to be supplied to the surroundings is independent on how that energy came to be available. That’s important because the manner in which energy is transferred is path dependent.

There are two main methods energy can be transferred to or from a system. These are suggested in the previous statement of the first law of thermodynamics. Mathematically, we can restate the first law as

$$ \Delta U = q + w $$

or

$$ dU = dq + dw $$

where q is defined as the amount of energy that flows into a system in the form of {term:heat} and w is the amount of energy lost due to the system doing {term:work} on the surroundings.

## Heat

Heat is the kind of energy that in the absence of other changes would have the effect of changing the temperature of the system. A process in which heat flows into a system is {term:endothermic} from the standpoint of the system ($q_{system} > 0$, $q_{surroundings} < 0$). Likewise, a process in which heat flows out of the system (into the surroundings) is called {term:exothermic} ($q_{system} < 0$, $q_{surroundings} > 0$). In the absence of any energy flow in the form or work, the flow of heat into or out of a system can be measured by a change in temperature. In cases where it is difficult to measure temperature changes of the system directly, the amount of heat energy transferred in a process can be measured using a change in temperature of the soundings. (This concept will be used later in the discussion of calorimetry).

An infinitesimal amount of heat flow into or out of a system can be related to a change in temperature by

$$ dq = C\, dT $$

where C is the {term:heat capacity} and has the definition

$$ C = \dfrac{dq}{\partial T} $$

Heat capacities generally have units of (J mol<sup>-1</sup> K<sup>-1</sup>) and magnitudes equal to the number of J needed to raise the temperature of 1 mol of substance by 1 K. Similar to a heat capacity is a {term:specific heat} which is defined per unit mass rather than per mol. The specific heat of water, for example, has a value of 4.184 J g<sup>-1</sup> K<sup>-1</sup> (at constant pressure – a pathway distinction that will be discussed later.)

:::example {ex:19.1.1} Heat required to Raise Temperature

How much energy is needed to raise the temperature of 5.0 g of water from 21.0 °C to 25.0 °C?

**Solution**

$$ \begin{align*} q &=mC \Delta T \\[4pt] &= (5.0 \,\cancel{g}) (4.184 \dfrac{J}{\cancel{g} \, \cancel{°C}}) (25.0 \cancel{°C} - 21.0 \cancel{°C}) \\[4pt] &= 84\, J \end{align*} $$
:::

:::note [note] What is a partial derivative?

A partial derivative, like a total derivative, is a slope. It gives a magnitude as to how quickly a function changes value when one of the dependent variables changes. Mathematically, a partial derivative is defined for a function $f(x_1,x_2, \dots x_n)$ by

$$ \left( \dfrac{ \partial f}{\partial x_i} \right)_{x_j \neq i} = \lim_{\Delta _i \rightarrow 0} \left( \dfrac{f(x_1+ \Delta x_1 , x_2 + \Delta x_2, \dots, x_i +\Delta x_i, \dots x_n+\Delta x_n) - f(x_1,x_2, \dots x_i, \dots x_n) }{\Delta x_i} \right) $$

Because it measures how much a function changes for a change in a given dependent variable, infinitesimal changes in the in the function can be described by

$$ df = \sum_i \left( \dfrac{\partial f}{\partial x_i} \right)_{x_j \neq i} $$

So that each contribution to the total change in the function $f$ can be considered separately.

For simplicity, consider an ideal gas. The pressure can be calculated for the gas using the ideal gas law. In this expression, pressure is a function of temperature and molar volume.

$$ p(V,T) = \dfrac{RT}{V} $$

The partial derivatives of p can be expressed in terms of $T$ and $V$ as well.

$$ \left( \dfrac{\partial p}{ \partial V} \right)_{T} = - \dfrac{RT}{V^2} $$ {eq:max1} n=2

and

$$ \left( \dfrac{\partial p}{ \partial T} \right)_{V} = \dfrac{R}{V} $$ {eq:max2} n=3

So that the change in pressure can be expressed

$$ dp = \left( \dfrac{\partial p}{ \partial V} \right)_{T} dV + \left( \dfrac{\partial p}{ \partial T} \right)_{V} dT $$ {eq:eq3} n=4

or by substituting Equations [ref:eq:max1] and [ref:eq:max2]

$$ dp = \left( - \dfrac{RT}{V^2} \right ) dV + \left( \dfrac{R}{V} \right) dT $$

![3D surface plot showing a curved, grid-like surface in shades of purple on a graph with labeled X, Y, and Z axes.](media/113012-imageedit_1_9031701417.png)

Macroscopic changes can be expressed by integrating the individual pieces of Equation [ref:eq:eq3] over appropriate intervals.

$$ \Delta p = \int_{V_1}^{V_2} \left( \dfrac{\partial p}{ \partial V} \right)_{T} dV + \int_{T_1}^{T_2} \left( \dfrac{\partial p}{ \partial T} \right)_{V} dT $$

This can be thought of as two consecutive changes. The first is an {term:isothermal} (constant temperature) expansion from $V_1$ to $V_2$ at $T_1$ and the second is an {term:isochoric} (constant volume) temperature change from $T_1$ to $T_2$ at $V_2$. For example, suppose one needs to calculate the change in pressure for an ideal gas expanding from 1.0 L/mol at 200 K to 3.0 L/mol at 400 K. The set up might look as follows.

$$ \Delta p = \underbrace{ \int_{V_1}^{V_2} \left( - \dfrac{RT}{V^2} \right ) dV}_{\text{isothermal expansion}} + \underbrace{ \int_{T_1}^{T_2}\left( \dfrac{R}{V} \right) dT}_{\text{isochoric heating}} $$

or

$$ \begin{align*} \Delta p &= \int_{1.0 \,L/mol}^{3.0 \,L/mol} \left( - \dfrac{R( 400\,K)}{V^2} \right ) dV + \int_{200 \,K}^{400,\ K }\left( \dfrac{R}{1.0 \, L/mol} \right) dT \\[4pt] &= \left[ \dfrac{R(200\,K)}{V} \right]_{ 1.0\, L/mol}^{3.0\, L/mol} + \left[ \dfrac{RT}{3.0 \, L/mol} \right]_{ 200\,K}^{400\,K} \\[4pt] &= R \left[ \left( \dfrac{200\,K}{3.0\, L/mol} - \dfrac{200\,K}{1.0\, L/mol}\right) + \left( \dfrac{400\,K}{3.0\, L/mol} - \dfrac{200\,K}{3.0\, L/mol}\right) \right] \\[4pt] &= -5.47 \, atm \end{align*} $$

Alternatively, one could calculate the change as an isochoric temperature change from $T_1$ to $T_2$ at $V_1$ followed by an isothermal expansion from $V_1$ to $V_2$ at $T_2$:

$$ \Delta p = \int_{T_1}^{T_2}\left( \dfrac{R}{V} \right) dT + \int_{V_1}^{V_2} \left( - \dfrac{RT}{V^2} \right ) dV $$

or

$$ \begin{align*} \Delta p &= \int_{200 \,K}^{400,\ K }\left( \dfrac{R}{1.0 \, L/mol} \right) dT + \int_{1.0 \,L/mol}^{3.0 \,L/mol} \left( - \dfrac{R( 400\,K)}{V^2} \right ) dV \\[4pt] &= \left[ \dfrac{RT}{1.0 \, L/mol} \right]_{ 200\,K}^{400\,K} + \left[ \dfrac{R(400\,K)}{V} \right]_{ 1.0\, L/mol}^{3.0\, L/mol} \\[4pt] &= R \left[ \left( \dfrac{400\,K}{1.0\, L/mol} - \dfrac{200\,K}{1.0\, L/mol}\right) + \left( \dfrac{400\,K}{3.0\, L/mol} - \dfrac{400\,K}{1.0\, L/mol}\right) \right] \\[4pt] &= -5.47 \, atm \end{align*} $$

This results demonstrates an important property of pressure in that pressure is a state variable, and so the calculation of changes in pressure do not depend on the pathway!
:::

## Work

Work can take several forms, such as expansion against a resisting pressure, extending length against a resisting tension (like stretching a rubber band), stretching a surface against a surface tension (like stretching a balloon as it inflates) or pushing electrons through a circuit against a resistance. The key to defining the work that flows in a process is to start with an infinitesimal amount of work defined by what is changing in the system.

> TABLE {tab:1} cols=4
> caption: Table 3.1.1: Changes to the System

| Type of work | Displacement | Resistance | dw |
| --- | --- | --- | --- |
| {term:Expansion} | dV (volume) | -p<sub>ext</sub> (pressure) | -p<sub>ext</sub>dV |
| {term:Electrical} | dQ (charge) | W (resistence) | -W dQ |
| {term:Extension} | dL (length) | -t (tension) | t dL |
| {term:Stretching} | dA | -s (surf. tens.) | sdA |

The pattern followed is always an infinitesimal displacement multiplied by a resisting force. The total work can then be determined by integrating along the pathway the change follows.

:::example {ex:19.1.2} Work from a Gas Expansion

What is the work done by 1.00 mol an ideal gas expanding from a volume of 22.4 L to a volume of 44.8 L against a constant external pressure of 0.500 atm?

**Solution**

$$ dw = -p_{ext} dV $$

since the pressure is constant, we can integrate easily to get total work

$$ \begin{align*} w &= -p_{exp} \int_{V_1}^{V_2} dV \\[4pt] &= -p_{exp} ( V_2-V_1) \\[4pt] &= -(0.500 \,am)(44.8 \,L - 22.4 \,L) \left(\dfrac{8.314 \,J}{0.08206 \,atm\,L}\right) \\[4pt] &= -1130 \,J = -1.14 \;kJ \end{align*} $$

*Note*: The ratio of gas law constants can be used to convert between atm∙L and J quite conveniently!
:::
