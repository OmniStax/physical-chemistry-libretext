<!-- LibreTexts page 14504: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24:_Solutions_I_-_Volatile_Solutes/24.02:_The_Gibbs-Duhem_Equation_Relates_Chemical_Potential_and_Composition_at_Equilibrium -->
# The Gibbs-Duhem Equation Relates Chemical Potential and Composition at Equilibrium

At {term:equilibrium}, there is no change in chemical potential for the system:

$$ \sum_i n_i d\mu_i = 0 $$ {eq:eq1} n=1

This is the Gibbs-Duhem relationship and it places a compositional constraint upon any changes in the chemical potential in a mixture at constant temperature and pressure for a given composition. This result is easily derived when one considers that $\mu_i$ represents the partial molar Gibbs function for component $i$. And as with other partial molar quantities:

$$ G_\text{tot} = \sum_i n_i \mu_i $$

Taking the derivative of both sides yields:

$$ dG_\text{tot} = \sum_i n_i d \mu_i + \sum_i \mu_i d n_i $$

But $dG$ can also be expressed as:

$$ dG = Vdp - sdT + \sum_i \mu_i d n_i $$

Setting these two expressions equal to one another:

$$ \sum_i n_i d \mu_i + \cancel{ \sum_i \mu_i d n_i } = Vdp - sdT + \cancel{ \sum_i \mu_i d n_i} $$

And after canceling terms, one gets:

$$ \sum_i n_i d \mu_i = Vdp - sdT $$ {eq:eq41} n=2

For a system at constant temperature and pressure:

$$ V~dp - s~dT = 0 $$ {eq:eq42} n=3

Substituting Equation [ref:eq:eq42] into [ref:eq:eq41] results in the {term:Gibbs-Duhem equation} (Equation [ref:eq:eq1]). This expression relates how the chemical potential can change for a given composition while the system maintains equilibrium.

## Gibbs- Duhem for Binary Systems

For a binary system consisting of components two components, $A$ and $B$:

$$ n_Bd\mu_B + n_Ad\mu_A = 0 $$

Rearranging:

$$ d\mu_B = -\dfrac{n_A}{n_B} d\mu_A $$

Consider a Gibbs free energy that only includes $μ_n$ conjugate variables as we obtained it from our scaling experiment at $T$ and $P$ constant:

$$ G = \mu_An_A + \mu_Bn_B $$

Consider a change in $G$:

$$ \begin{align*} dG &= d(\mu_An_A) + d(\mu_Bn_B) \\[4pt] &= n_Ad\mu_A+\mu_Adn_A + n_Bd\mu_B+\mu_Bdn_B \end{align*} $$

However, if we simply write out a change in $G$ due to the number of moles we have:

$$ dG = \mu_A dn_A +\mu_B dn_B $$

Consequently the other terms must add up to zero:

$$ 0 = n_Ad\mu_A+ n_Bd\mu_B $$

$$ d\mu_A= - \dfrac{n_B}{n_A}d\mu_B $$

$$ d\mu_A= - \dfrac{\chi_B}{\chi_A}d\mu_B $$

In the last step we have simply divided both denominator and numerator by the total number of moles. This expression is the Gibbs-Duhem equation for a 2-component system. It relates the change in one thermodynamic potential ($d\mu_A$) to the other ($d\mu_B$).

> The Gibbs-Duhem equation relates the change in one thermodynamic potential ($d\mu_A$) to the other ($d\mu_B$).

## Gibbs-Duhem in the Ideal Case

In the ideal case we have:

$$ \mu_B = \mu^*_B + RT \ln x_B $$

Gibbs-Duhem gives:

$$ d\mu_A = - \dfrac{\chi_B}{\chi_A} d\mu_B $$

As:

$$ d\mu_B = 0 + \dfrac{RT}{\chi_B} $$

with $x_B$ being the only active variable at constant temperature, we get:

$$ d\mu_A = - \dfrac{\chi_B}{\chi_A} \dfrac{RT}{\chi_B} = \dfrac{RT}{\chi_A} $$

If we now wish to find $\mu_A$ we need to integrate $d\mu_A$, e.g. form pure 1 to $\chi_A$. This produces:

$$ \mu_A = \mu^*_A + RT \ln \chi_A $$

This demonstrates that [Raoult's law](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Solutions_and_Mixtures/Ideal_Solutions/Changes_In_Vapor_Pressure_Raoult's_Law) can only hold over the whole range for one component *{term:if}* it also holds for the other over the whole range.
