<!-- LibreTexts page 13722: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20:_Entropy_and_The_Second_Law_of_Thermodynamics/20.08:_Entropy_Can_Be_Expressed_in_Terms_of_a_Partition_Function -->
# Entropy Can Be Expressed in Terms of a Partition Function

We have seen that the partition function of a system gives us the key to calculate thermodynamic functions like energy or pressure as a moment of the energy distribution. We can extend this formulism to calculate the entropy of a system once its $Q$ is known. We can start with Boltzmann's (statistical) definition of entropy:

$$ S = k \ln(W) $$ {eq:Boltz} n=1

with

$$ W=\frac{A!}{\prod_j{a_j}!} $$

Combining these equations, we obtain:

$$ S_{ensemble} = k \ln\frac{A!}{\prod_j{a_j}!} $$

Rearranging:

$$ S_{ensemble} = k \ln{A!}-k \sum_j{\ln{a_j!}} $$

Using [Sterling's approximation](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Thermodynamics_and_Chemical_Equilibrium_(Ellgen)/19%3A_The_Distribution_of_Outcomes_for_Multiple_Trials/19.04%3A_Stirling's_Approximation):

$$ \begin{split}S_{ensemble} &= k A\ln{A}-k A - k \sum_j{a_j\ln{a_j}} + k \sum_j{a_j} \\ &= k A\ln{A}- k \sum_j{a_j\ln{a_j}}\end{split} $$

Since:

$$ \sum_j{a_j}=A $$

The probability of finding the system in state $a_j$ is:

$$ p_j=\frac{a_j}{A} $$

Rearranging:

$$ a_j = p_jA $$

Plugging in:

$$ S_{ensemble}=k A\ln{A}- k \sum_j{p_jA\ln{p_jA}} $$

Rearranging:

$$ S_{ensemble}=k A\ln{A}- k \sum_j{p_jA\ln{p_j}}- k \sum_j{p_jA\ln{A}} $$

If $A$ is constant, then:

$$ k \sum_j{p_jA\ln{A}} = k A\ln{A}\sum_j{p_j} $$

Since:

$\sum_j{p_j} = 1$

We get:

$$ S_{ensemble}=k A\ln{A}- k \sum_j{p_jA\ln{p_j}}- k A\ln{A} $$

The first and last term cancel out:

$$ S_{ensemble}=- k \sum_j{p_jA\ln{p_j}} $$

We can divide by $A$ to get the entropy of the system:

$$ S_{system}=- k \sum_j{p_j\ln{p_j}} $$ {eq:eq10} n=2

If all the $p_j$ are zero except for the for one, then the system is perfectly ordered and the entropy of the system is zero. The probability of being in state $j$ is

$$ p_j=\frac{e^{-\beta E_j}}{Q} $$ {eq:eq15} n=3

Plugging Equation [ref:eq:eq15] into Equation [ref:eq:eq10] results in

$$ \begin{align*}S &= - k \sum_j{\frac{e^{-\beta E_j}}{Q}\ln{\frac{e^{-\beta E_j}}{Q}}} \\[4pt] &= - k \sum_j{\frac{e^{-\beta E_j}}{Q}\left(-\beta E_j- \ln{Q}\right)} \\[4pt] &= - \beta k \sum_j{\frac{E_je^{-\beta E_j}}{Q}}+\frac{k\ln{Q}}{Q}\sum_j{e^{-\beta E_j}} \end{align*} $$

Making use of:

$$ \beta k=\frac{1}{T} $$

And:

$$ \sum{\frac{e^{-\beta E_j}}{Q}}=\sum{p_j}=1 $$

We obtain:

$$ S= \dfrac{U}{T} + k\ln Q $$ {eq:20.42} n=4
