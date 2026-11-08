<!-- LibreTexts page 13693: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18:_Partition_Functions_and_Ideal_Gases/18.03:_The_Energy_of_a_Diatomic_Polyatomic_Molecule_Can_Be_Approximated_as_a_Sum_of_Separate_Terms -->
# The Energy of a Diatomic/Polyatomic Molecule Can Be Approximated as a Sum of Separate Terms

A monatomic gas has three degrees of freedom per molecule, all of them translational:

1. movement in x-direction
2. movement in y-direction
3. movement in z-direction

A polyatomic gas, including diatomic molecules, has other levels that you can 'stuff' energy into. Polyatomic molecules can rotate and vibrate, and if enough energy is available you could also excite the electrons involved in the $σ$ and $π$ bonds. A reasonable approximation of the partition function of the molecule would become:

$$ q_\text{tot}(V,T) = q_\text{trans}q_\text{vib}q_\text{rot}q_\text{elec} $$

The partition function of a molecular idea gas is then:

$$ Q(N,V,T) = \frac{(q_\text{trans}q_\text{vib}q_\text{rot}q_\text{elec})^N}{N!} $$

The total energy of the molecule is then the sum of the translation, vibrational, rotational, and electronic energies:

$$ E_{tot} = E_\text{trans}E_\text{vib}E_\text{rot}E_\text{elec} $$

We will only scratch the surface of the additional degrees of freedom and their partition functions.

## Electronic

At room temperature the system is usually in its ground electronic state. This means that the {term:electronic partition function} $q_\text{elec} = 1$. Usually we do not have to worry about these degrees of freedom. If we do, there are usually just a few levels to worry about. This includes their {term:degeneracy g}. If there is a single state at a certain energy ($g=1$), two states ($g=2$), or more states, we must multiply the Boltzmann factor by this degeneracy number.

If there are more than one state to worry about, we could follow the same procedure as we did for the translational states:

1. Define the energy states and their degeneracies
2. Compose the partition function $q$ for the molecule and $Q$ for the gas
3. Use the ($\beta$ or $T$) derivative of $\ln Q$ to determine $\langle E\rangle$
4. Use the $T$ derivative of $U \approx\langle E\rangle$ to find the contribution to the heat capacity
