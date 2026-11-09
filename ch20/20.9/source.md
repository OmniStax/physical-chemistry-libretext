<!-- LibreTexts page 13723: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20:_Entropy_and_The_Second_Law_of_Thermodynamics/20.09:_The_Statistical_Definition_of_Entropy_is_Analogous_to_the_Thermodynamic_Definition -->
# The Statistical Definition of Entropy is Analogous to the Thermodynamic Definition

The laws of thermodynamics can be understood in two ways: by looking at large-scale properties like temperature and pressure, or by examining how countless tiny atoms move and interact. Both perspectives lead to the same laws, even though the reasoning behind them is quite different.

We learned earlier that entropy, $S$, is related to the number of microstates, $W$, in an ensemble with $A$ systems:

$$ S_{ensemble}=k_B \ln{W} $$ {eq:eq1} n=1

and

$$ W=\frac{A!}{\prod_j{a_j}!} $$ {eq:eq2} n=2

Combining Equations [ref:eq:eq1] and [ref:eq:eq2] to get:

$$ \begin{split} S_{ensemble} &= k_B \ln{\frac{A!}{\prod_j{a_j}!}} \\[4pt] &= k_B \ln{A!}-k_B\sum_j{\ln{a_j}!} \end{split} $$

Using [Sterling's approximation:](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Fundamentals/Stirlings_Approximation)

$$ \ln{A!} \approx A\ln{A}-A $$

We obtain:

$$ S_{ensemble} = k_B A \ln{A}-k_BA-k_B\sum_j{a_j\ln{a_j}}+k_B\sum{a_j} $$

Since:

$$ A=\sum{a_j} $$

The expression simplifies to:

$$ S_{ensemble} = k_B A \ln{A}-k_B\sum_j{a_j\ln{a_j}} $$

We can make use of the fact that the number of microstates in state $j$ is equal to the total number of microstates multiplied by the probability of finding the system in state $j$, $p_j$:

$$ a_j=p_jA $$

Plugging in, we obtain

$$ \begin{split}S_{ensemble} &= k_B A \ln{A}-k_B\sum_j{p_jA\ln{p_jA}} \\[4pt] &= k_B A \ln{A}-k_B\sum_j{p_jA\ln{p_j}}-k_B\sum_j{p_jA\ln{A}} \end{split} $$

Since $A$ is a constant and the sum of the probabilities of finding the system in state $j$ is always 1:

$$ \sum{p_j}=1 $$

The first and last term cancel out:

$$ S_{ensemble} = -k_BA\sum_j{p_j\ln{p_j}} $$

We can use that the entropy of the system is the entropy of the ensemble divided by the number of systems:

$$ S_{system}=S_{ensemble}/A $$

Dividing by $A$, we obtain:

$$ S_{system} = -k_B\sum_j{p_j\ln{p_j}} $$

We can differentiate this equation and dropping the subscript:

$$ dS = -k_B\sum_j{\left(dp_j+\ln{p_j}dp_j\right)} $$

Since $\sum_j{p_j}=1$, the derivative $\sum_j{dp_j}=0$:

$$ dS = -k_B\sum_j{\ln{p_j}dp_j} $$

In short:

$$ \sum_j{\ln{p_j}dp_j}=-\frac{\delta q_{rev}}{k_BT} $$

Plugging in:

$$ dS = \frac{\delta q_{rev}}{T} $$ {eq:10} n=3

The thermodynamic definition of entropy comes from macroscopic observations. In classical thermodynamics, entropy is defined as the measure of energy dispersal in a system (Equation [ref:eq:10]). ​It tells us how much heat is spread out or distributed in a system at temperature. This definition is practical and works well at the bulk level but does not say why entropy behaves this way.

The statistical definition of entropy in Equation [ref:eq:eq1], developed by Boltzmann, defines entropy in terms of the number of possible microstates that correspond to the same overall macroscopic state (macrostate). This shows that entropy measures the degree of microscopic disorder or multiplicity of arrangements consistent with what we see at the macroscopic level.

Both definitions describe the same underlying concept:

- The thermodynamic view says entropy measures the spread of energy in terms of heat and temperature.
- The statistical view says entropy measures the spread of possible microstates that energy can occupy.

They are equivalent because a system with more accessible microstates (higher disorder) will also tend to have greater energy dispersal, and thus higher entropy. In fact, the statistical definition explains why the thermodynamic definition works: macroscopic energy dispersal arises from the overwhelming number of microscopic ways energy can be arranged.
