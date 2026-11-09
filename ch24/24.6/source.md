<!-- LibreTexts page 14508: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24:_Solutions_I_-_Volatile_Solutes/24.06:_Vapor_Pressures_of_Volatile_Binary_Solutions -->
# Vapor Pressures of Volatile Binary Solutions

The behaviors of ideal solutions of volatile compounds follow Raoult’s Law. Henry’s Law can be used to describe the deviations from ideality. Henry's law states:

$$ P_B = k_H P_B^o $$

For which the Henry’s Law constant ($k_H$) is determined for the specific compound. Henry’s Law is often used to describe the solubilities of gases in liquids. The relationship to Raoult’s Law is summarized in Figure 24.6.1.

> FIGURE {fig:24.6.1} src=media/113364-Figure_8.7.1.png width=420px
> alt: Graph illustrating Henry's Law and Raoult's Law, plotting pressure against mole fraction (x₃) with labeled curves.
> caption: The relationship between Raoult's Law and Henry's Law for a binary mixture.

Henry’s Law is depicted by the upper straight line and Raoult’s Law by the lower.

Example 24.6.1: Solubility of Carbon Dioxide in Water

The solubility of $CO_2(g)$ in water at 25 <sup>o</sup>C is 3.32 x 10<sup>-2</sup> M with a partial pressure of $CO_2$ over the solution of 1 bar. Assuming the density of a saturated solution to be 1 kg/L, calculate the Henry’s Law constant for $CO_2$.

{term:Solution}:

In one L of solution, there is 1000 g of water (assuming the mass of CO<sub>2</sub> dissolved is negligible.)

$$ (1000 \,g) \left( \dfrac{1\, mol}{18.02\,g} \right) = 55\, mol\, H_2O $$

The solubility of $CO_2$ can be used to find the number of moles of $CO_2$ dissolved in 1 L of solution also:

$$ \dfrac{3.32 \times 10^{-2} mol}{L} \cdot 1 \,L = 3.32 \times 10^{-2} mol\, CO_2 $$

and so the mol fraction of $CO_2$ is

$$ \chi_b = \dfrac{3.32 \times 10^{-2} mol}{55.5 \, mol} = 5.98 \times 10^{-4} $$

And so

$$ 10^5\, Pa = 5.98 \times 10^{-4} k_H $$

or

$$ k_H = 1.67 \times 10^9\, Pa $$

## Azeotropes

An azeotrope is defined as the common composition of vapor and liquid when they have the same composition.

> FIGURE {fig:24.6.2} src=media/113366-Figure_A.png width=499px
> alt: Phase diagram showing temperature (T) against composition (x) with labels for vapor and liquid phases.
> part src=media/113365-Figure_8.7.2.png width=494px
> alt: Phase diagram showing temperature (T) vs. composition (x) with regions for vapor and liquid phases.
> caption: Phase diagrams for (left) a maximum boiling point azeotrope and (right) Ta maximum boiling point azeotrope.

Azeotropes can be either maximum boiling or minimum boiling, as show in Figure 24.6.2; left. Regardless, distillation cannot purify past the azeotrope point, since the vapor and the liquid phases have the same composition. If a system forms a minimum boiling azeotrope and has a range of compositions and temperatures at which two liquid phases exist, the phase diagram might look like Figure 24.6.2; right:

> FIGURE {fig:24.6.3} src=media/113367-Figure_C.png width=661px
> alt: Phase diagram showing temperature vs. composition with regions for one-phase liquid, two-phase liquid, and vapor.
> caption: *Phase diagram for a binary solution with the boiling point of a minimum boiling azeotrope that is higher that when components are miscible (single phase).*

Another possibility that is common is for two substances to form a two-phase liquid, form a minimum boiling azeotrope, but for the azeotrope to boil at a temperature below which the two liquid phases become miscible. In this case, the phase diagram will look like Figure 24.6.3.

Example 24.6.1:

In the diagram, make up of a system in each region is summarized below the diagram. The point e indicates the azeotrope composition and boiling temperature.

![Graph depicting a phase diagram with temperature on the vertical axis and composition on the horizontal axis, showing liquid phases.](media/113368-Figure_D.png)

1. Single phase liquid (mostly compound A)
2. Single phase liquid (mostly compound B)
3. Single phase liquid (mostly A) and vapor
4. Single phase liquid (mostly B) and vapor
5. Vapor (miscible at all mole fractions since it is a gas)

{term:Solution}

Within each two-phase region (III, IV, and the two-phase liquid region, the lever rule will apply to describe the composition of each phase present. So, for example, the system with the composition and temperature represented by point b (a single-phase liquid which is mostly compound A, designated by the composition at point a, and vapor with a composition designated by that at point c), will be described by the lever rule using the lengths of tie lines ­*l<sub>A</sub>* and *l<sub>B</sub>*.

### Gibbs-Duhem and Henry's law

What happens when Raoult does *not* hold over the whole range? Recall that in a gas:

$$ μ_j = μ_j^o + RT \ln \dfrac{P_j}{P^o} $$ {eq:B} n=1

or

$$ μ_j = μ_j^o + RT \ln P_j $$

after dropping $P^o=1\; bar$ out of the notation. Note that numerically this does not matter, since $P_j$ is now *assumed* to be dimensionless.

Let's consider $dμ_1$ at constant temperature:

$$ dμ_1 = RT\left(\dfrac{\partial \ln P_1}{ \partial x_1}\right)dx_1 $$

likewise:

$$ dμ_2 = RT\left(\dfrac{\partial \ln P_2}{ \partial x_2}\right)dx_2 $$

If we substitute into the Gibbs-Duhem expression we get:

$$ x_1 \left(\dfrac{∂\ln P_1}{ ∂x_1}\right) dx_1+x_2 \left(\dfrac{∂\ln P_2}{∂x_2} \right) dx_2=0 $$

Because $dx_1= -dx_2$:

$$ x_ 1 \left( \dfrac{∂\ln P_1}{ ∂x_1} \right) =x_2 \left( \dfrac{∂\ln P_2}{∂x_2} \right) $$

(This is an alternative way of writing Gibbs-Duhem).

If in the limit for $x_1 \rightarrow 1$ Raoult Law holds then

$$ P_1 \rightarrow x_1P^*_1 $$

Thus:

$$ \dfrac{∂ \ln P_1}{∂x_1} = \dfrac{1}{x_1} $$

and

$$ \dfrac{x_1}{x_1}=x_2 \dfrac{∂ \ln P_2}{∂x_2} $$

$$ 1=x_2 \dfrac{∂ \ln P_2}{ ∂x_2} $$

$$ \dfrac{1}{x_2}= \dfrac{∂ \ln P_2}{∂x_2} $$ {eq:EqA12} n=2

We can integrate Equation [ref:eq:EqA12] to form a logarithmic impression, but it will have an integration constant:

$$ \ln P_2 =\ln x_2 + constant $$

This constant of integration can be folded into the logarithm as a multiplicative constant, $K$

$$ \ln P_2 = \ln \left(K x_2 \right) $$

So for $x_1 \rightarrow 1$ (i.e., $x_2 \rightarrow 0$), we get that

$$ P_2=K x_2 $$

where $K$ is *some* constant, but not necessarily $P^*$. What this shows is that when one component follows Raoult the other *must* follow Henry and vice versa. (Note that the ideal case is a subset of this case, in that the value of $K$ then becomes $P^*$ and the linearity must hold over the whole range.)

## Margules Functions

Of course a big drawback of the Henry law is that it only describes what happens at the two extremes of the phase diagram and not in the middle. In cases of moderate non-ideality, it is possible to describe the whole range (at least in good approximation) using a {term:Margules function}:

$$ P_1= \left(x_1P^*_1 \right)f_{Mar} $$

The function $f_{Mar}$ has the shape:

$$ f_{Mar}= \text{exp} \left[ αx_2^2+βx_2^3+δx_2^3 + .... \right] $$

Notice that the Margules function involves the mole fraction of the *opposite* component. It is an exponential with a series expansion. with the constant and linear term missing. As you can see the function has a number of parameters $α$, $β$, $δ$ etc. that need to be determined by experiment. In general, the more the system diverges from ideality, the more parameters you need. Using Gibbs-Duhem is is possible to translate the expression for $P_1$ into the corresponding one for $P_2$.
