<!-- LibreTexts page 13719: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20:_Entropy_and_The_Second_Law_of_Thermodynamics/20.05:_The_Famous_Equation_of_Statistical_Thermodynamics_is_Sk_ln_W -->
# The Famous Equation of Statistical Thermodynamics is S=k ln W

A common interpretation of entropy is that it is somehow a measure of chaos or randomness. There is some utility in that concept. Given that entropy is a measure of the dispersal of energy in a system, the more chaotic a system is, the greater the dispersal of energy will be, and thus the greater the entropy will be. Ludwig Boltzmann (1844 – 1906) (O'Connor & Robertson, 1998) understood this concept well, and used it to derive a statistical approach to calculating entropy. Boltzmann proposed a method for calculating the entropy of a system based on the number of energetically equivalent ways a system can be constructed.

Boltzmann proposed an expression, which in its modern form is:

$$ S = k_b \ln(W) $$ {eq:Boltz} n=1

$W$ is the number of available microstates in a macrostate (ensemble of systems) and can be taken as the quantitative measure of energy dispersal in a macrostate:

$$ W=\frac{A!}{\prod_j{a_j}!} $$

Where $a_j$ is the number of systems in the ensemble that are in state $j$ and $A$ represents the total number of systems in the ensemble:

$$ A=\sum_j{a_j} $$

Equation 20.5.1 is a rather famous equation etched on Boltzmann’s grave marker in commemoration of his profound contributions to the science of thermodynamics (Figure 20.5.1).

> FIGURE {fig:20.5.1} src=media/113517-561.jpg width=239px
> alt: Black and white portrait of a man with glasses and a full beard, wearing a suit with a high collar.
> part src=media/113518-562.jpg width=220px
> alt: A stone monument featuring a bust of a man and an engraved plaque with text, surrounded by greenery.
> caption: Ludwig Boltzmann (1844 - 1906)

:::example {ex:20.5.1}

Calculate the entropy of a carbon monoxide crystal, containing 1.00 mol of $\ce{CO}$, and assuming that the molecules are randomly oriented in one of two equivalent orientations.

{term:Solution}:

Using the Boltzmann formula (Equation [ref:eq:Boltz]):

$$ S = nK \ln (W) $$

And using $W = 2$, the calculation is straightforward.

$$ \begin{align*} S &= \left(1.00 \, mol \cot \dfrac{6.022\times 10^{23}}{1\,mol} \right) (1.38 \times 10^{-23} J/K) \ln 2 \\ &= 5.76\, J/K \end{align*} $$
:::

## Contributors and Attributions {section:attributions}

- [Patrick E. Fleming](http://www.csueastbay.edu/directory/profiles/chem/flemingpatrick.html) (Department of Chemistry and Biochemistry; California State University, East Bay)
- Jerry LaRue (Department of Chemistry and Biochemistry, Chapman University)
