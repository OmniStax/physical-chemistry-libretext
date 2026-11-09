<!-- LibreTexts page 14483: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/21:_Entropy_and_the_Third_Law_of_Thermodynamics/21.06:_Practical_Absolute_Entropies_of_Gases_Can_Be_Calculated_from_Partition_Functions -->
# Practical Absolute Entropies of Gases Can Be Calculated from Partition Functions

Recall that the entropy of a system, $S$, can be calculated if the partition function, $Q$, is known:

$$ S=\frac{U}{T}+k_B \ln{Q} $$

where $Q$ is:

$$ Q=\sum_j{e^{-\frac{E_j}{kT}}} $$

The internal energy of the system can also be calculated from the partition function:

$$ U=k_BT^2\left(\frac{\delta \ln{Q}}{\delta T}\right) $$

Combining these equations, we obtain:

$$ S=k_B\ln{Q}+k_BT\left(\frac{\delta \ln{Q}}{\delta T}\right) $$

The third law of thermodynamics states that entropy of a perfect crystal at absolute zero is zero. We can show that our equation for entropy in terms of the partition function is consistent with the third law. Plugging in our equation for the partition function into our equation for entropy, we obtain:

$$ S=k_B\ln{\sum_j{e^{-\frac{E_j}{kT}}}}+k_BT\left(\frac{\delta \ln{\sum_j{e^{-\frac{E_j}{kT}}}}}{\delta T}\right) $$

As $T$ goes to zero, all the states will be in their lowest energy configuration. If the ground state is $n$ degenerate, then $n$ states will be in the ground state:

$$ E_1=E_2=...=E_m $$

This is true for all the next states. For example, if the next state is $m$ degenerate, then:

$$ E_{n+1}=E_{n+2}=...=E_{n+m} $$

This gives us the result:

$$ \sum_j{e^{-\frac{E_j}{kT}}} = ne^{-\frac{E_1}{kT}}+me^{-\frac{E_{n+1}}{kT}}+... $$
