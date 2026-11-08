<!-- LibreTexts page 13689: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17:_Boltzmann_Factor_and_Partition_Functions/17.07:_Partition_Functions_of_Indistinguishable_Molecules_Must_Avoid_Over_Counting_States -->
# Partition Functions of Indistinguishable Molecules Must Avoid Over Counting States

In the previous section, the definition of the the partition function involves a sum of state formulism:

$$ Q = \sum_i e^{-\beta E_i} . $$ {eq:1} n=1

However, under most conditions, full knowledge of each member of an ensemble is missing and hence we have to operate with a more reduced knowledge. This is demonstrated via a simple model of two particles in a two-energy level system in Figure 17.7.1. Each particle (red or blue) can occupy either the $E_1=0$ energy level or the $E_2=\epsilon$ energy level resulting in four possible states that describe the system. The corresponding partition function for this system is then (via Equation [ref:eq:1]):

$$ Q_{\text{distinguishable}}=e^0+ e^{-\beta\epsilon} +  e^{-\beta\epsilon} + e^{-2 \beta\epsilon}=q^2 $$ {eq:Q1} n=2

and is just the molecular partition function ($q$) squared.

> FIGURE {fig:17.7.1} src=media/419541-Figure_1.svg
> alt: Illustration of atoms represented by red and blue spheres, arranged in various formations, depicting molecular structures.
> caption: Four different states can exist for a two-level system with two distinguishable particles (red and blue balls). (CC BY 4.0; Delmar Larsen via LibreTexts)

However, if the two particles are indistinguishable (e.g., both the same color as in Figure 17.7.2) then while four different combinations can be generated like in Figure 17.7.1, there is no discernible way to separate the two middle states. Hence, there are effectively only three states observable for this system.

> FIGURE {fig:17.7.2} src=media/419542-Figure_2.svg
> alt: Diagram illustrating a chemical reaction with black spheres representing atoms and arrows indicating the reaction direction.
> caption: Three different states can exist for a two-level system with two indistinguishable particles (black balls). The two middle states are indescernable and represent a single state with one particle exited and the other in the ground state. (CC BY 4.0; Delmar Larsen via LibreTexts)

The corresponding partition function for this system (again using Equation [ref:eq:1]) can be constructed:

$$ Q(N,V,\beta) =e^0+ e^{-\beta\epsilon} + e^{-2 \beta\epsilon} \neq q^2 $$ {eq:Q2} n=3

and this is not equal to the square of the molecular partition function. If Equation [ref:eq:Q1] were used to describe the indistinguishable particle case, then it would overestimate the number of observable states. From combinatorics, using $q^N$ for a large $N$-particle system of indistinguishable particles will overestimate the number of states by a factor of $N!$. Therefore Equation [ref:eq:1] requires a slight modification to account for this over counting.

$$ Q(N,V,\beta) = \dfrac{\sum_i{e^{-\beta E_i}}}{N!} $$ {eq:2} n=4

If we have $N$ molecules, we can perform $N!$ permutations that should not affect the outcome. To avoid over counting (making sure we do not count each state more than once), the partition function becomes:

$$ Q(N,V,\beta) = \dfrac{q(V,\beta)^N}{N!} $$

:::note [note] Note

As you may have noticed, using Equation [ref:eq:2] to estimate of $Q$ for the two-indistinguishable particle discussed case above with $N=2$ is incorrect (i.e., Equation [ref:eq:2] is not equal to Equation [ref:eq:Q2]). That is because the $N!$ factor is only applicable for large $N$.
:::
