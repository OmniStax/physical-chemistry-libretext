<!-- LibreTexts page 57665: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17:_Boltzmann_Factor_and_Partition_Functions/17.08:_Partition_Functions_can_be_Decomposed_into_Partition_Functions_of_Each_Degree_of_Freedom -->
# Partition Functions can be Decomposed into Partition Functions of Each Degree of Freedom

From the previous sections, the partition function for a system of $N$ indistinguishable and independent molecules is:

$$ Q(N,V,\beta) = \dfrac{\sum_i{e^{-\beta E_i}}}{N!} $$ {eq:ID1} n=1

And the average energy of the system is:

$$ \langle E \rangle = kT^2 \left(\dfrac{\partial \ln{Q}}{\partial T}\right) $$ {eq:ID2} n=2

We can combine these two equations to obtain:

$$ \begin{split} \langle E \rangle &= kT^2 \left(\dfrac{\partial \ln{Q}}{\partial T}\right)_{N,V} \\ &= NkT^2 \left(\dfrac{\partial \ln{q}}{\partial T}\right)_V \\ &= N\sum_i{\epsilon_i \dfrac{e^{-\epsilon_i/kT}}{q(V,T)}} \end{split} $$ {eq:ID3} n=3

The average energy is equal to:

$$ \langle E \rangle = N \langle \epsilon \rangle $$ {eq:aveE} n=4

where $\langle \epsilon \rangle$ is the average energy of a single particle. If we compare Equation [ref:eq:ID2] with Equation [ref:eq:ID2], we can see:

$$ \langle \epsilon \rangle = \sum_i{\epsilon_i \dfrac{e^{-\epsilon_i/kT}}{q(V,T)}} $$

The probability that a particle is in state $i$, $\pi_i$, is given by:

$$ \langle \epsilon \rangle = \dfrac{e^{-\epsilon_i/kT}}{q(V,T)} = \dfrac{e^{-\epsilon_i/kT}}{\sum_i{e^{-\epsilon_i/kT}}} $$

The energy of a particle is a sum of the energy of each degree of freedom for that particle. In the case of a molecule, the energy is:

$$ \epsilon = \epsilon_\text{trans} + \epsilon_\text{rot} + \epsilon_\text{vib} + \epsilon_\text{elec} $$

The molecular partition function is the product of the degree of freedom partition functions:

$$ q(V,T) = q_\text{trans} q_\text{rot} q_\text{vib} q_\text{elec} $$

The partition function for each degree of freedom follows the same is related to the Boltzmann distribution. For example, the vibrational partition function is:

$$ q_\text{vib} = \sum_i{e^{-\epsilon_i/kT}} $$

The average energy of each degree of freedom follows the same pattern as before. For example, the average vibrational energy is:

$$ \langle \epsilon_\text{vib} \rangle = kT^2\dfrac{\partial \ln{q_\text{vib}}}{\partial t} = -\dfrac{\partial \ln{q_\text{vib}}}{\partial \beta} $$
