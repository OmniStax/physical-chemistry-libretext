<!-- LibreTexts page 14514: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/25:_Solutions_II_-_Nonvolatile_Solutes/25.02:_The_Activities_of_Nonvolatile_Solutes -->
# The Activities of Nonvolatile Solutes

For non-ideal gases, we introduced in chapter [11](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/The_Live_Textbook_of_Physical_Chemistry_(Peverati)/11%3A_Ideal_and_Non-Ideal_Gases) the concept of [*fugacity* ](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/The_Live_Textbook_of_Physical_Chemistry_(Peverati)/11%3A_Ideal_and_Non-Ideal_Gases/11.04%3A_Fugacity)as an *effective pressure* that accounts for non-ideal behavior. If we extend this concept to non-ideal solution, we can introduce the *activity* of a liquid or a solid, $a$, as:

$$ \mu_{\text{non-ideal}} = \mu^{- {\ominus} } + RT \ln a, $$ {eq:14.1.1} n=1

where $\mu$ is the chemical potential of the substance or the mixture, and $\mu^{-\ominus}$ is the chemical potential at standard state. Comparing this definition to [Equation 11.4.2](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/The_Live_Textbook_of_Physical_Chemistry_(Peverati)/11%3A_Ideal_and_Non-Ideal_Gases/11.04%3A_Fugacity), it is clear that the activity is equal to the fugacity for a non-ideal gas (which, in turn, is equal to the pressure for an ideal gas). However, for a liquid and a liquid mixture, it depends on the chemical potential at standard state. This means that the activity is not an absolute quantity, but rather a relative term describing how “active” a compound is compared to standard state conditions. The choice of the standard state is, in principle, arbitrary, but conventions are often chosen out of mathematical or experimental convenience. We already discussed the convention that standard state for a gas is at $P^{-\ominus}=1\;\text{bar}$, so the activity is equal to the fugacity. The standard state for a component in a solution is the pure component at the temperature and pressure of the solution. This definition is equivalent to setting the activity of a pure component, $i$, at $a_i=1$.

For a component in a solution we can use Equation 11.4.2 to write the chemical potential in the gas phase as:

$$ \mu_i^{\text{vapor}} = \mu_i^{- {\ominus} } + RT \ln \dfrac{P_i}{P^{-\ominus}}. $$ {eq:14.1.2} n=2

If the gas phase is in equilibrium with the liquid solution, then:

$$ \mu_i^{\text{solution}} = \mu_i^{\text{vapor}} = \mu_i^*, $$ {eq:14.1.3} n=3

where $\mu_i^*$ is the chemical potential of the pure element. Subtracting Equation [ref:eq:14.1.3] from Equation [ref:eq:14.1.2], we obtain:

$$ \mu_i^{\text{solution}} = \mu_i^* + RT \ln \dfrac{P_i}{P^*_i}. $$ {eq:14.1.4} n=4

For an ideal solution, we can use Raoult’s law, Equation 13.1.1, to rewrite Equation [ref:eq:14.1.4] as:

$$ \mu_i^{\text{solution}} = \mu_i^* + RT \ln x_i, $$ {eq:14.1.5} n=5

which relates the chemical potential of a component in an ideal solution to the chemical potential of the pure liquid and its mole fraction in the solution. For a non-ideal solution, the partial pressure in Equation [ref:eq:14.1.4] is either larger (positive deviation) or smaller (negative deviation) than the pressure calculated using Raoult’s law. The chemical potential of a component in the mixture is then calculated using:

$$ \mu_i^{\text{solution}} = \mu_i^* + RT \ln \left(\gamma_i x_i\right), $$ {eq:14.1.6} n=6

where $\gamma_i$ is a positive coefficient that accounts for deviations from ideality. This coefficient is either larger than one (for positive deviations), or smaller than one (for negative deviations). The activity of component $i$ can be calculated as an *effective mole fraction*, using:

$$ a_i = \gamma_i x_i, $$ {eq:14.1.7} n=7

where $\gamma_i$ is defined as the {term:activity coefficient}. The partial pressure of the component can then be related to its vapor pressure, using:

$$ P_i = a_i P_i^*. $$ {eq:14.1.8} n=8

Comparing Equation [ref:eq:14.1.8] with Raoult’s law, we can calculate the activity coefficient as:

$$ \gamma_i = \dfrac{P_i}{x_i P_i^*} = \dfrac{P_i}{P_i^{\text{R}}}, $$ {eq:14.1.9} n=9

where $P_i^{\text{R}}$ is the partial pressure calculated using Raoult’s law. This result also proves that for an ideal solution, $\gamma=1$. Equation [ref:eq:14.1.9] can also be used experimentally to obtain the activity coefficient from the phase diagram of the non-ideal solution. This is achieved by measuring the value of the partial pressure of the vapor of a non-ideal solution. Examples of this procedure are reported for both positive and negative deviations in Figure 25.2.1.

> FIGURE {fig:25.2.1} src=media/424149-clipboard_e9cb3f74a44ae467cc26494825c366099.png width=877.997px
> alt: clipboard_e9cb3f74a44ae467cc26494825c366099.png
> caption: Positive and Negative Deviation from Raoult’s Law in the Pressure–Composition Phase Diagram of Non-Ideal Solutions at Constant Temperature.

- As we already discussed in [chapter 10](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/The_Live_Textbook_of_Physical_Chemistry_(Peverati)/10%3A_Chemical_Equilibrium), the activity is the most general quantity that we can use to define the equilibrium constant of a reaction (or the reaction quotient). The advantage of using the activity is that it’s defined for ideal and non-ideal gases and mixtures of gases, as well as for ideal and non-ideal solutions in both the liquid and the solid phase.$^1$

1. Notice that, since the activity is a relative measure, the equilibrium constant expressed in terms of the activities is also a relative concept. In other words, it measures equilibrium relative to a standard state. This fact, however, should not surprise us, since the equilibrium constant is also related to $\Delta_{\text{rxn}} G^{-\ominus}$ using Gibbs’ relation. This is why the definition of a universally agreed-upon [standard state](https://en.Wikipedia.org/wiki/Standard_state) is such an essential concept in chemistry, and why it is defined by the [International Union of Pure and Applied Chemistry (IUPAC)](https://en.Wikipedia.org/wiki/International_Union_of_Pure_and_Applied_Chemistry) and followed systematically by chemists around the globe.︎
