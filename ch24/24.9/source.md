<!-- LibreTexts page 14511: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24:_Solutions_I_-_Volatile_Solutes/24.09:_Gibbs_Energy_of_Mixing_of_Binary_Solutions_in_Terms_of_the_Activity_Coefficient -->
# Gibbs Energy of Mixing of Binary Solutions in Terms of the Activity Coefficient

### Activity and activity coefficients

In the ideal case, we have seen that the thermodynamic potential for species $i$ can be written as:

$$ μ_i^{sln}=μ^o_i + RT \ln \,x_i=μ^o_2 + RT \ln \left(\dfrac{P_i}{P^o}\right) $$

One approach to non-ideality is to simply *{term:redefine}* the problem and say:

$$ μ_i^{sln} \equiv μ^o_i + RT \ln\, a_i $$

≡ indicates this is actually a definition. The newly defined variable a<sub>2</sub> is known as the {term:activity}. Alternatively we can define it as:

$$ [a_i] \equiv \dfrac{P_i}{P^o} $$

As at high enough values of the mole fraction we know that we can still apply Raoult law. So $a_i$ must approach $x_i$ in this limit, but for other concentrations this will no longer hold. Often this is expressed in terms of an *{term:activity coefficient}* $\gamma$:

$$ [a_i] = \gamma_i x_i $$

For high values of $x_i$, $\gamma_i$ will approach unity. If we model the non-ideality with a Margules function we see that:

$$ P_i = x_iP^of_{Mar} $$

$$ [a_i] = \left[\frac{P_i}{P^0}\right] = \left[\frac{x_iP^0f_{Mar}}{P^0}\right] = [x_if_{Mar}] $$

The activity coefficient and the Margules function are the same thing in this description.

### Regular solutions

A special and simplest case of a Margules function is the case where all but one Margules parameters ($a$) can be neglected. Such a system is called a *{term:regular solution}.* In this case, we can write:

$$ a_1 = x_1e^{ax_2^2} $$

We can use Gibbs-Duhem to show that this *implies*:

$$ a_2 = x_2e^{ax_1^2} $$

Gibbs free energy of regular solutions

Consider the change in Gibbs free energy when we mix two components to form a regular solution:

$$ \Delta G_{mix} = n_1\mu_1^{sln}+n_2\mu_2^{sln} - (n_1\mu_1^* + n_2\mu_2^*) $$

Dividing by the total number of moles, we get:

$$ \Delta_{mix}G = x_1\mu_1^{sln}+x_2\mu_2^{sln} - (x_1\mu_1^* + x_2\mu_2^*) $$

Using:

$$ \mu_i^{sln} \equiv \mu_i^* + RT\ln{a_i} $$

and:

$$ [a_i] = \gamma_i x_i $$

We get:

$$ \frac{\Delta_{mix} G}{RT} = x_1\ln{x_1} + x_2\ln{x_2} + x_1\ln{\gamma_1} + x_2\ln{\gamma_2} $$

For a regular solution:

$$ \ln{\gamma_1} = \ln{f_{Mar}} = ax_2^2 $$

$$ \ln{\gamma_2} = \ln{f_{Mar}} = ax_1^2 $$

This gives:

$$ \begin{split} \frac{\Delta_{mix} G}{RT} &= x_1\ln{x_1} + x_2\ln{x_2} + x_1ax_2^2 + x_2ax_1^2 \\ &= x_1\ln{x_1} + x_2\ln{x_2} + a[x_1+x_2]x_1x_2 \\ &= x_1\ln{x_1} + x_2\ln{x_2} + ax_1x_2 \end{split} $$

Since:

$$ x_1 + x_2 = 1 $$

In this expression we see that we have an additional term to the entropy of mixing term we had seen before. Its coefficient $a$ is dimensionless but represents the fact that the (strong!) interactions between the molecules are different depending on who is the neighbor. In general. $a$ can be written as $W/RT$, where $W$ represents an energy (enthalpy) that brings the difference in interaction energies into account. $W$ does not depend strongly on temperature. We could look at $W$ as the difference in average interaction energies:

$$ W = 2U_{12} - U_{11} - U_{22} $$

Rearranging we get:

$$ \frac{\Delta_{mix} G}{W} = \frac{RT}{W} [x_1\ln{X_1}+x_2\ln{x_2}]+x_1x_2 $$

The two terms will *{term:compete}* as a function of temperature. The mixing entropy will be more important at high temperatures, the interaction enthalpy at low temperatures. The entropy term has a *minimum* at x<sub>1</sub>=0.5, the enthalpy term a *maximum* if W is positive. So, one tends to favor mixing, the other segregation and we will get a compromise between the two. Depending on the value of $RT/W$ (read: temperature), we can either get one or two minima. This means that at low temperatures there will be a solubility limit of 1 into 2 and *vice versa*. At higher temperatures the two components can mix completely. At the transition between these two regimes we will have *{term:critical or consolute point}.*

Notice that even though we used the vapor pressures of the gas to develop our theory, they are conspicuously absent from the final result. The same thing we said about melting points hold true here. Because we are dealing with the miscibility behavior of two condensed phases, the outcome should not depend very strongly on the total pressure of our experiment.

Although in regular solutions the consolute point is predicted to be a maximum in temperature, we can find them as minima as well in practice. The nicotine-water system even has two consolute points, an upper and a lower one. When heating up a mixture of these we first observe mixing, then segregation and then mixing again. Obviously this behavior is far more complicated than we can describe with just one Margules parameter.

#### Partial molar volumes

What we said above about volumes simply being additive in the ideal case is no longer true here.

$$ \left(\frac{\partial\Delta G_{mix}}{\partial P}\right)_T = \Delta V_\text{regular} $$

$$ \left(\frac{\partial\Delta H_{mix}+RT(n_1\ln{[x_1]}+n_2\ln{[x_2]})}{\partial P}\right)_T = \Delta V_\text{mix} $$

$$ \left(\frac{\partial\Delta H_{mix}}{\partial P}\right)_T = \Delta V_\text{mix} $$

In general the enthalpy of mixing does depend on pressure as it is related to the interactions between the molecules in solution. ($W$ depends on the distance between them). This means that partial molar volumes now become a function of composition and volume is no longer simply additive.

## Real solutions

Notice that the curves are *symmetrical* around $x=0.5$. This implies that it is as easy (or not) dissolving A into B as vice versa. In many cases this is not realistic. Many systems diverge more seriously from ideal behavior that the regular one. Up to a point we can model that by adding more terms to the Margules function. For example, adding a β-term undoes the symmetry (see example 24-7). However, many systems are so non-ideal that the Margules expression become unwieldy with too many parameters.

## Boiling non-ideal solutions

### Azeotropes

For ideal solutions we have seen that there is a lense shaped two-phase region between the gas and the liquid phase. For non-ideal systems the two-phase region can attain different shapes. In many cases there is either a minimum or a maximum. As such a point the phase gap closes to a point that is known as an *azeotrope*. It represents a composition of the liquid that boils *congruently*. That means that the vapor and the liquid have the same composition for a change. Azeotropes impose an important limitation unto distillation: they represent the end point of a distillation beyond which we can not purify by this method.

### Eutectics

Another point to be made is that in the diagram with the consolute point we are assuming the pressure to be constant. If we lower the pressure this would affect the boiling points strongly: the whole gas-liquid gap would come down in temperature (see animation). The mixing behavior is only weakly affected. (The reason is that one involves the volume term of the gas, the other only of the liquid(s)). At lower pressures it is possible therefore that the consolute point is *above* the gas-liquid gap. In other words: the mixtures will boil before they get a chance to mix. The boiling points will be lower there than for the pure compounds. There will be a composition for which the boiling point is at a minimum and where the mixture boils congruently (i.e. to a vapor with the same (overall) composition).

The mutual solubility limits increase as temperature increases, just as happens in the critical mixing case, but that due to the competition from the vapor phase this process comes to an end at the eutectic temperature. At this temperature one liquid boils always completely, the other one in part. At the eutectic composition they both boil away simultaneously.
