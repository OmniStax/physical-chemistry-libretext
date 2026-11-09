<!-- LibreTexts page 14528: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26:_Chemical_Equilibrium/26.07:_The_van_'t_Hoff_Equation -->
# The van 't Hoff Equation

We can use Gibbs-Helmholtz to get the temperature dependence of $K$

$$ \left( \dfrac{∂[ΔG^o/T]}{∂T} \right)_P = \dfrac{-ΔH^o}{T^2} $$

At equilibrium, we can equate $ΔG^o$ to $-RT\ln K$ so we get:

$$ \left( \dfrac{∂[\ln K]}{∂T} \right)_P = \dfrac{ΔH^o}{RT^2} $$

We see that whether $K$ increases or decreases with temperature is linked to whether the reaction enthalpy is positive or negative. If temperature is changed little enough that $ΔH^o$ can be considered constant, we can translate a $K$ value at one temperature into another by integrating the above expression, we get a similar derivation as with melting point depression:

$$ \ln \dfrac{K(T_2)}{K(T_1)} = \dfrac{-ΔH^o}{R} \left( \dfrac{1}{T_2} - \dfrac{1}{T_1} \right) $$

If more precision is required we could correct for the temperature changes of $ΔH^o$ by using heat capacity data.

> How $K$ increases or decreases with temperature is linked to whether the reaction enthalpy is positive or negative.

The expression for $K$ is a rather sensitive function of temperature given its exponential dependence on the difference of stoichiometric coefficients One way to see the sensitive temperature dependence of equilibrium constants is to recall that

$$ K=e^{−\Delta_r{G^o}/RT} $$ {eq:18} n=1

However, since under constant pressure and temperature

$$ \Delta{G^o}= \Delta{H^o}−T\Delta{S^o} $$

Equation [ref:eq:18] becomes

$$ K=e^{-\Delta{H^o}/RT} e^{\Delta {S^o}/R} $$ {eq:19} n=2

Taking the natural log of both sides, we obtain a linear relation between $\ln K$and the standard enthalpies and entropies:

$$ \ln K = - \dfrac{\Delta {H^o}}{R} \dfrac{1}{T} + \dfrac{\Delta{S^o}}{R} $$ {eq:20} n=3

which is known as the van ’t Hoff equation. It shows that a plot of $\ln K$ vs. $1/T$ should be a line with slope $-\Delta_r{H^o}/R$ and intercept $\Delta_r{S^o}/R$.

> FIGURE {fig:26.7.1} src=media/106013-Endothermic_Reaction_van't_Hoff_Plot.png width=492px
> alt: Graph showing an inverse relationship, with Y-axis labeled "Porosity" and X-axis labeled "1/T (K⁻¹)". Points are plotted along a downward slope.
> part src=media/106014-Exothermic_Reaction_van't_Hoff_Plot.png width=476px
> alt: Graph showing the relationship of an exothermic reaction, with temperature (K) on the x-axis and enthalpy on the y-axis.
> caption: Endothermic Reaction (left) and Exothermic Reaction van 't Hoff Plots (right). Figures used with permission of Wikipedia

Hence, these quantities can be determined from the $\ln K$ vs. $1/T$ data without doing calorimetry. Of course, the main assumption here is that $\Delta_r{H^o}$ and $\Delta_r{S^o}$ are only very weakly dependent on $T$, which is usually valid.
