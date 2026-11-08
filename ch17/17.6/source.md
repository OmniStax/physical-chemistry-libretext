<!-- LibreTexts page 13685: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17:_Boltzmann_Factor_and_Partition_Functions/17.06:_The_Partition_Function_of_Distinguishable_Independent_Molecules_is_the_Product_of_the_Molecular_Partition_Functions -->
# The Partition Function of Distinguishable, Independent Molecules is the Product of the Molecular Partition Functions

A system, such as a container of gas, can consist of a large number of subsystems. How is the partition function of the system built up from those of the subsystems? This depends on whether the subsystems are distinguishable or indistinguishable. Let's start with energy. Energy is additive so that:

$$ E_\text{tot}(N,V) = \epsilon_1(V) + \epsilon_2(V) + \epsilon_3(V) + \cdots $$

Each of the molecules can have their energy distributed over their respective energy states (e.g., vibrations, rotations, etc.). This means that each $\epsilon_i$ is already a summation over the states of the molecule. Let us assume that we can somehow distinguish all the molecules as: $a$, $b$, $c$, $d$… and denote the energy state they are in by $i$, $j$, $k$:

$$ E_l(N,V) = \epsilon_i^a (V) + \epsilon_j^b (V) + \epsilon_k^c (V) + \cdots $$

A good example would be the molecules in a molecular crystal. They only move around a fixed site and so we can distinguish by how far molecule '$a$' is from a given corner of the crystal. The systems partition function becomes:

$$ Q(N,V,\beta) = \sum_i e^{-\beta E_l} = \sum_{i,j,k,…} e^{-\beta (\epsilon_i^a + \epsilon_j^b + \epsilon_k^c)} $$

So far, we have done little effort to distinguish between the partition function of a molecular system $q$ and the whole ensemble $Q$ (e.g. the gas). If the entities that we called systems are {term:distinguishable} and independent, the whole ensemble partition function is the product of the molecular system partition functions. We get:

$$ Q(N,V,\beta) = \prod_i{q_i} $$

for $N$ distinguishable systems. We can split up the summation into a product of molecular partition functions:

$$ Q(N,V,β) = \prod_i^N q_i(V,\beta)= q_a(V,\beta) q_b(V,\beta) q_c(V,\beta) \cdots $$

This results in each molecular system partition function being summed over independently:

$$ Q(N,V,\beta) = \sum_{i} e^{-\beta \epsilon_i^a} \sum_{j} e^{-\beta \epsilon_i^b} \sum_{k} e^{-\beta \epsilon_i^c} \cdots $$

If the energy states of all the particles are the same, then the equation simplifies to:

$$ Q(N,V,\beta) = [q(V,\beta)]^N $$

We can do this if, for example, the particles are embedded in a crystal where we can distinguish them by their location. We will see in the next chapter that for indistinguishable particles, such as those in a gas, we get a different result.
