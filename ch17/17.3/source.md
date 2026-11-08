<!-- LibreTexts page 13682: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17:_Boltzmann_Factor_and_Partition_Functions/17.03:_The_Average_Ensemble_Energy_is_Equal_to_the_Observed_Energy_of_a_System -->
# The Average Ensemble Energy is Equal to the Observed Energy of a System

We will be restricting ourselves to the canonical ensemble (constant temperature and constant pressure). Consider a collection of $N$ molecules. The probability of finding a molecule with energy $E_i$ is equal to the fraction of the molecules with energy $E_i$. That is, in a collection of $N$ molecules, the probability of the molecules having energy $E_i$:

$$ P_i = \dfrac{n_i}{N} $$

This is the directly obtained from the Boltzmann distribution, where the fraction of molecules $n_i /N$ having energy $E_i$ is:

$$ P_i = \dfrac{n_i}{N} = \dfrac{e^{-E_i/kT}}{Q} $$ {eq:BD1} n=1

The average energy is obtained by multiplying $E_i$ with its probability and summing over all $i$:

$$ \langle E \rangle = \sum_i E_i P_i $$ {eq:Mean1} n=2

:::note [emphasis]

Equation [ref:eq:Mean1] is the standard average over a distribution commonly found in quantum mechanics as [expectation values](page:13397). The quantum mechanical version of this Equation is

$$ \langle \psi | \hat{H} | \psi \rangle $$

where $\Psi^2$ is the distribution function that the Hamiltonian operator (e.g., energy) is averaged over; this equation is also the starting point in the Variational method approximation.
:::

Equation [ref:eq:Mean1] can be solved by plugging in the Boltzmann distribution (Equation [ref:eq:BD1]):

$$ \langle E \rangle = \sum_i{ \dfrac{E_ie^{-E_i/ kT}}{Q}} $$ {eq:Eq1} n=3

Where $Q$ is the partition function:

$$ Q = \sum_i{e^{-\dfrac{E_i}{kT}}} $$

We can take the derivative of $\ln{Q}$ with respect to temperature, $T$:

$$ \left(\dfrac{\partial \ln{Q}}{\partial T}\right) = \dfrac{1}{kT^2}\sum_i{\dfrac{E_i e^{-E_i/kT}}{Q}} $$ {eq:Eq2} n=4

Comparing Equation [ref:eq:Eq1] with [ref:eq:Eq2], we obtain:

$$ \langle E \rangle = kT^2 \left(\dfrac{\partial \ln{Q}}{\partial T}\right) $$

It is common to write these equations in terms of $\beta$, where:

$$ \beta = \dfrac{1}{kT} $$

The partition function becomes:

$$ Q = \sum_i{e^{-\beta E_i}} $$

We can take the derivative of $\ln{Q}$ with respect to $\beta$:

$$ \left(\dfrac{\partial \ln{Q}}{\partial\beta}\right) = -\sum_i{\dfrac{E_i e^{-\beta E_i}}{Q}} $$

And obtain:

$$ \langle E \rangle = -\left(\dfrac{\partial \ln{Q}}{\partial\beta}\right) $$

Replacing $1/kT$ with $\beta$ often simplifies the math and is easier to use.

:::note [emphasis]

It is not uncommon to find the notation changes: $Z$ instead of $Q$ and $\bar{E}$ instead of $\langle E \rangle$.
:::
