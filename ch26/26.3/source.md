<!-- LibreTexts page 14524: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26:_Chemical_Equilibrium/26.03:_Standard_Gibbs_Energies_of_Formation_Can_Be_Used_to_Calculate_Equilibrium_Constants -->
# Standard Gibbs Energies of Formation Can Be Used to Calculate Equilibrium Constants

The relation $K=e^{-\frac{\Delta_rG^\circ}{RT}}$ gives us a way to evaluate the thermodynamic equilibrium constant $K$ of a reaction at a given temperature from the value of the standard molar reaction Gibbs energy $\Delta_{\text{r}}G^\circ$ at that temperature. If we know the value of $\Delta_{\text{r}}G^\circ$, we can calculate the value of $K$.

One method is to calculate $\Delta_{\text{r}}G^\circ$ from values of the {term:standard molar Gibbs energy of formation} $\Delta_{\text{f}}G^\circ$ of each reactant and product. These values are the standard molar reaction Gibbs energies for the formation reactions of the substances. To relate $\Delta_{\text{f}}G^\circ$ to measurable quantities, we make the substitution $\mu_i = H_i - TS_i$ (Eq. 9.2.46) in $\Delta_{\text{r}}G = \sum_i\!\nu_i\mu_i$ to give $\Delta_{\text{r}}G = \sum_i\!\nu_i H_i - T \sum_i\!\nu_i S_i$, or

$$ \begin{equation} \Delta_{\text{r}}G = \Delta_{\text{r}}H - T\Delta_{\text{r}}S \tag{11.8.20} \end{equation} $$

When we apply this equation to a reaction with each reactant and product in its standard state, it becomes

$$ \begin{equation} \Delta_{\text{r}}G^\circ = \Delta_{\text{r}}H^\circ - T\Delta_{\text{r}}S^\circ \tag{11.8.21} \end{equation} $$

where the standard molar reaction entropy is given by

$$ \begin{equation} \Delta_{\text{r}}S^\circ = \sum_i\nu_i S_i^\circ \tag{11.8.22} \end{equation} $$

If the reaction is the *formation* reaction of a substance, we have

$$ \begin{equation} \Delta_{\text{f}}G^\circ = \Delta_{\text{f}}H^\circ - T\sum_i\nu_i S_i^\circ \tag{11.8.23} \end{equation} $$

where the sum over $i$ is for the reactants and product of the formation reaction. We can evaluate the standard molar Gibbs energy of formation of a substance, then, from its standard molar enthalpy of formation and the standard molar entropies of the reactants and product.

Extensive tables are available of values of $\Delta_{\text{f}}G^\circ$ for substances and ions. An abbreviated version at the single temperature $298.15\thinspace\text{K}$ is given in Appendix H. For a reaction of interest, the tabulated values enable us to evaluate $\Delta_{\text{r}}G^\circ$, and then $K$, from the expression (analogous to Hess’s law)

$$ \begin{equation} \Delta_{\text{r}}G^\circ = \sum_i\nu_i\Delta_{\text{f}}G^\circ(i) \tag{11.8.24} \end{equation} $$

The sum over $i$ is for the reactants and products of the reaction of interest.

Recall that the standard molar enthalpies of formation needed in Eq. 11.8.23 can be evaluated by calorimetric methods (Sec. 11.3.2). The absolute molar entropy values $S_i^\circ$ come from heat capacity data or statistical mechanical theory by methods discussed in Sec. 6.2. Thus, it is entirely feasible to use nothing but calorimetry to evaluate an equilibrium constant, a goal sought by thermodynamicists during the first half of the 20th century. (Another method, for a reaction that can be carried out reversibly in a galvanic cell, is described in Sec. 14.3.3.)

For *ions in aqueous solution*, the values of $S_{\text{m}}^\circ$ and $\Delta_{\text{f}}G^\circ$ found in Appendix H are based on the reference values $S_{\text{m}}^\circ=0$ and $\Delta_{\text{f}}G^\circ = 0$ for H$^+$(aq) at all temperatures, similar to the convention for $\Delta_{\text{f}}H^\circ$ values discussed in Sec. 11.3.2. For a reaction with aqueous ions as reactants or products, these values correctly give $\Delta_{\text{r}}S^\circ$ using Eq. 11.8.22, or $\Delta_{\text{r}}G^\circ$ using Eq. 11.8.24.

Note that the values of $S_{\text{m}}^\circ$ in Appendix H for some ions, unlike the values for substances, are *negative*; this simply means that the standard molar entropies of these ions are less than that of H$^+$(aq).

The relation of Eq. 11.8.23 does not apply to an ion, because we cannot write a formation reaction for a single ion. Instead, the relation between $\Delta_{\text{f}}G^\circ$, $\Delta_{\text{f}}H^\circ$ and $S_{\text{m}}^\circ$ is more complicated.

Consider first a hypothetical reaction in which hydrogen ions and one or more elements form H$_2$ and a cation M$^{z_+}$ with charge number $z_+$:

$$ z_+\text{H}^+\text{(aq)}+\text{elements} \,\rightarrow\, (z_+/2)\text{H}_2\text{(g)}+\text{M}^{z_+}\text{(aq)} $$

For this reaction, using the convention that $\Delta_{\text{f}}H^\circ$, $S_{\text{m}}^\circ$, and $\Delta_{\text{f}}G^\circ$ are zero for the aqueous H$^+$ ion and the fact that $\Delta_{\text{f}}H^\circ$ and $\Delta_{\text{f}}G^\circ$ are zero for the elements, we can write the following expressions for standard molar reaction quantities:

$$ \begin{equation} \Delta_{\text{r}}H^\circ = \Delta_{\text{f}}H^\circ(\text{M}^{z_+}) \tag{11.8.25} \end{equation} $$

$$ \begin{equation} \Delta_{\text{r}}S^\circ = (z_+/2)S_{\text{m}}^\circ(\text{H}_2) +S_{\text{m}}^\circ(\text{M}^{z_+})- \! \sum_{\text{elements}}\!\!\!S_i^\circ \tag{11.8.26} \end{equation} $$

$$ \begin{equation} \Delta_{\text{r}}G^\circ = \Delta_{\text{f}}G^\circ(\text{M}^{z_+}) \tag{11.8.27} \end{equation} $$

Then, from $\Delta_{\text{r}}G^\circ=\Delta_{\text{r}}H^\circ-T\Delta_{\text{r}}S^\circ$, we find

$$ \begin{equation} \Delta_{\text{f}}G^\circ(\text{M}^{z_+}) = \Delta_{\text{f}}H^\circ(\text{M}^{z_+}) \quad -T\left[ S_{\text{m}}^\circ(\text{M}^{z_+}) -\sum_{\text{elements}}\!\!\!S_i^\circ + (z_+/2)S_{\text{m}}^\circ(\text{H}_2) \right] \tag{11.8.28} \end{equation} $$

For example, the standard molar Gibbs energy of the aqueous mercury(I) ion is found from

$$ \begin{equation} \textstyle \Delta_{\text{f}}G^\circ(\text{Hg}_2{}^{2+}) = \Delta_{\text{f}}H^\circ(\text{Hg}_2{}^{2+}) - TS_{\text{m}}^\circ(\text{Hg}_2{}^{2+}) + 2TS_{\text{m}}^\circ(\text{Hg}) - \frac{2}{2}TS_{\text{m}}^\circ(\text{H}_2) \tag{11.8.29} \end{equation} $$

For an anion X$^{z_-}$ with negative charge number $z_-$, using the hypothetical reaction

$$ |z_-/2| \text{H}_2\text{(g)}+\text{elements} \,\rightarrow\, |z_-| \text{H}^+\text{(aq)}+\text{X}^{z_-}\text{(aq)} $$

we find by the same method

$$ \begin{equation} \Delta_{\text{f}}G^\circ(\text{X}^{z_-}) = \Delta_{\text{f}}H^\circ(\text{X}^{z_-}) -T\left[ S_{\text{m}}^\circ(\text{X}^{z_-})- \! \sum_{\text{elements}}\!\!\!S_i^\circ -|z_-/2| S_{\text{m}}^\circ(\text{H}_2) \right] \tag{11.8.30} \end{equation} $$

For example, the calculation for the nitrate ion is

$$ \begin{equation} \textstyle \Delta_{\text{f}}G^\circ(\text{NO}_3{}^-) = \Delta_{\text{f}}H^\circ(\text{NO}_3{}^-) - TS_{\text{m}}^\circ(\text{NO}_3{}^-) + \frac{1}{2}TS_{\text{m}}^\circ(\text{N}_2) + \frac{3}{2}TS_{\text{m}}^\circ(\text{O}_2) + \frac{1}{2}TS_{\text{m}}^\circ(\text{H}_2) \tag{11.8.31} \end{equation} $$
