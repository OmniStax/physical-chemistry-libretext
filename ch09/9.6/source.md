<!-- LibreTexts page 13458: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09:_Chemical_Bonding_in_Diatomic_Molecules/9.06:_A_Simple_Molecular-Orbital_Treatment_of_H_Places_Both_Electrons_in_a_Bonding_Orbital -->
# A Simple Molecular-Orbital Treatment of H₂ Places Both Electrons in a Bonding Orbital

To describe the electronic states of molecules, we construct wavefunctions for the electronic states by using molecular orbitals. These wavefunctions are approximate solutions to the Schrödinger equation. A mathematical function for a molecular orbital is constructed, $\psi _i$, as a linear combination of other functions, $\varphi _j$, which are called basis functions because they provide the basis for representing the molecular orbital.

$$ | \psi _i \rangle = \sum _j c_{ij} \varphi _j $$ {eq:9.6.1} n=1

where

- $j$ is the index for the $j^{th}$ basis function (e.g., atomic orbital)
- $i$ is the $i^{th}$ molecular orbitals and
- $c_{ij}$ is the expansion coefficient of the $j^{th}$ basis function for the $i^{th}$ molecular orbital.

The variational method is used to find values for parameters in the basis functions and for the constant coefficients in the linear combination that optimize these functions, i.e. make them as good as possible. The criterion for quality in the variational method is making the ground state energy of the molecule as low as possible. Here and in the rest of this chapter, the following notation is used: $\sigma$ is a general spin function (can be either $\alpha$ or $\beta$), $\varphi$ is the basis function (this usually represents an atomic orbital), $\psi$ is a molecular orbital, and $\Psi$ is the electronic state wavefunction (representing a single Slater determinant or linear combination of Slater determinants).

The ultimate goal is a mathematical description of electrons in molecules that enables chemists and other scientists to develop a deep understanding of chemical bonding and reactivity, to calculate properties of molecules, and to make predictions based on these calculations. Just as for atoms, each electron in a molecule can be described by a product of spin-orbitals. Since electrons are fermions, the electronic wavefunction must be {term:antisymmetric} with respect to the permutation of any two electrons. A Slater determinant containing the molecular spin orbitals produces the antisymmetric wavefunction. For example for two electrons,

$$ \Psi (r_1, r_2) = \dfrac{1}{\sqrt{2}} \begin {vmatrix} \psi _A (r_1) \alpha (1) & \psi _B (r_1) \beta (1) \\ \psi _A (r_2) \alpha (2) & \psi _B (r_2) \beta (2) \end {vmatrix} $$ {eq:9.6.2} n=2

Solving the Schrödinger equation in the orbital approximation will produce a set of spatial molecular orbitals, each with a specific energy, $\epsilon$. Following the Aufbau Principle, two electrons with different spins ( $\alpha$ and $\beta$, consistent with the Pauli Exclusion Principle discussed for muliti-electron atoms) are assigned to each spatial molecular orbital in order of increasing energy. For the ground state of the 2n electron molecule, the n lowest energy spatial orbitals will be occupied, and the electron configuration will be given as $\psi ^2_1 \psi ^2_2 \psi ^2_3 \dots \psi ^2_n$. The electron configuration also can be specified by an orbital energy level diagram as shown in Figure 9.6.1. Higher energy configurations exist as well, and these configurations produce excited states of molecules. Some examples are shown in Figure 9.6.1.

> FIGURE {fig:9.6.1} src=media/51428-general_orbital_E_levels.gif width=409
> alt: Diagram illustrating various mathematical operations represented by symbols, arranged in a tabular format.
> caption: a) The lowest energy configuration of a closed-shell system. b) The lowest energy configuration of an open-shell radical. c) An excited singlet configuration. d) An excited triplet configuration.

## Symmetry

Molecular orbitals usually are identified by their symmetry or angular momentum properties. For example, a typical symbol used to represent an orbital in an electronic configuration of a diatomic molecule is $2\sigma ^2_g$. The superscript in symbol means that this orbital is occupied by two electrons; the prefix means that it is the second sigma orbital with *gerade* symmetry.

Diatomic molecules retain a component of angular momentum along the internuclear axis. The molecular orbitals of diatomic molecule therefore can be identified in terms of this angular momentum. A Greek letter, e.g. $\sigma$ or $\pi$, encodes this information, as well as information about the symmetry of the orbital. A $\sigma$ means the component of angular momentum is 0, and there is no node in any plane containing the internuclear axis, so the orbital must be symmetric with respect to reflection in such a plane. A $\pi$ means there is a node and the wavefunction is antisymmetric with respect to reflection in a plane containing the internuclear axis. For homonuclear diatomic molecules, a *g* or a *u* is added as a subscript to designate whether the orbital is symmetric or antisymmetric with respect to the center of inversion of the molecule.

A homonuclear diatomic molecule has a center of inversion in the middle of the bond. This center of inversion means that $\psi (x, y, z) = \pm \psi (-x, -y, -z)$ with the origin at the inversion center. Inversion takes you from $(x, y, z )$ to $(-x, -y, -z )$. For a heteronuclear diatomic molecule, there is no center of inversion so the symbols g and u are not used. A prefix 1, 2, 3, etc. simply means the first, second, third, etc. orbital of that type. We can specify an electronic configuration of a diatomic molecule by these symbols by using a superscript to denote the number of electrons in that orbital, e.g. the lowest energy configuration of N<sub>2</sub> is

$$ 1 \sigma ^2_g 1 \sigma ^2_u 2 \sigma ^2_g 2 \sigma ^2_u 1 \pi ^4_u 3 \sigma ^2_g $$ {eq:9.6.3} n=3

:::note [note] Contrasting LCAO with other Quantum Chemistry Methods

As we have already seen, the LCAO approach is very approximate, yielding only qualitative results. It should be noted that the Hartree-Fock method discussed earlier for atoms can also be used for molecules. For example, the molecule $He_{2}^{+}$ has three electrons, and the Li atom also has three electrons. As usual with Hartree-Fock, the idea is to optimize the shapes of the single-electron orbitals $\psi_1 (r)$, $\psi_2 (r)$ and $\psi_3 (r)$ by minimizing the guess to the ground state energy $E_g$. Of course, we will not get the same answer as for $Li$ because there is a different $V_{en}$ energy for $He_{2}^{+}$ due to the presence of two positively charge nuclei $(charge=+2e)$ separated by a distance $R$ in contrast to the single $+3e$ charged nucleus for $Li$. When the shapes of the orbitals are optimized, we also obtain three energy $\varepsilon_1$, $\varepsilon_2$ and $\varepsilon_3$. Not unexpectedly, we find that two of the HF orbitals resemble $1\sigma_g$ while the third resembles $1\sigma_{u}^{*}$ and the first two energies $\varepsilon_1$ and $\varepsilon_2$ will be nearly equal, while the third $\varepsilon_3$ will be noticeably higher. To contrast with the LCAO approach, in LCAO, we do not optimize the shapes of the orbitals (these are assumed *a priori* to be $1s$ shaped). All we do is choose the mixing coefficients so as to minimize the guess to the ground-state energy $E_g$.

We note, finally, that the density functional theory alluded to earlier can also be used for molecules. It is often the case that density functional theory yields a more accurate description than Hartree-Fock, but this depends on the molecule. In any case, both are more accurate than LCAO. There is also a hierarchy of methods called *post Hartree-Fock* methods, all of which are based on the wavefunction rather than the electron density, that can be used to improve upon the HF approximation systematically. The greater the accuracy that is desired for the calculation, the more costly computationally the post HF methods become, so quantum chemistry is often a trade-off between accuracy and efficiency, an issue that becomes more critical to take into account when calculations on large molecules must be carried out!
:::

## Contributors and Attributions {section:attributions}

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("[Quantum States of Atoms and Molecules](http://pubs.acs.org/doi/abs/10.1021/ed082p1880.2)")
- [Mark Tuckerman ](http://chemistry.fas.nyu.edu/object/marketuckerman.html)([New York University](http://chemistry.fas.nyu.edu/page/home))
