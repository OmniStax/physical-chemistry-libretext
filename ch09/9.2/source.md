<!-- LibreTexts page 13452: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09:_Chemical_Bonding_in_Diatomic_Molecules/9.02:_The_H_Prototypical_Species -->
# The H₂⁺ Prototypical Species

Molecular orbital theory is a conceptual extension of the orbital model, which was so successfully applied to atomic structure. As was once playfully remarked, "a molecule is nothing more than an atom with more nuclei." This may be overly simplistic, but we do attempt, as far as possible, to exploit analogies with atomic structure. Our understanding of atomic orbitals began with the exact solutions of a prototype problem – the hydrogen atom. We will begin our study of homonuclear diatomic molecules beginning with another exactly solvable prototype, the hydrogen molecule-ion $\ce{H2^{+}}$.

## The Hydrogen Molecular Ion

The simplest conceivable molecule would be made of two protons and one electron, namely $\ce{H2^{+}}$. This species actually has a transient existence in electrical discharges through hydrogen gas and has been detected by mass spectrometry and it also has been detected in outer space. The Schrödinger equation for $\ce{H2^{+}}$ can be solved exactly within the Born-Oppenheimer approximation (i.e., fixed nuclei). This ion consists of two protons held together by the electrostatic force of a single electron. Clearly the two protons, two positive charges, repeal each other. The protons must be held together by an attractive Coulomb force that opposes the repulsive Coulomb force. A negative charge density between the two protons would produce the required counter-acting Coulomb force needed to pull the protons together. So intuitively, to create a chemical bond between two protons or two positively charged nuclei, a high density of negative charge between them is needed. We expect the molecular orbitals that we find to reflect this intuitive notion.

> FIGURE {fig:9.2.1} src=media/395884-9.3.1-1.svg
> alt: Diagram illustrating a binary tree structure with a blue node at the top and orange nodes below, with empty rectangular boxes on the sides.
> caption: Hydrogen molecular ion $\ce{H2^{+}}$ with fixed nuclei $A$ and $B$, internuclear distance $R$. (CC BY-NC; Ümit Kaya via LibreTexts)

The electronic Hamiltonian for $\ce{H2^{+}}$ is

$$ \hat {H}_{elec} (r, R) = -\dfrac {\hbar ^2}{2m} \nabla ^2 - \dfrac {e^2}{4 \pi \epsilon _0 r_A} - \dfrac {e^2}{4 \pi \epsilon _0 r_B} + \dfrac {e^2}{4 \pi \epsilon _0 R} $$ {eq:9.2.1} n=1

where $r_A$ and $r_B$ are the distances electron from the $A$ and $B$ hydrogen nuclei, respectively and $R$ is the distance between the two protons.

Although the Schrödinger equation for $\ce{H2^{+}}$ can be solved exactly (albeit within the Born-Oppenheimer approximation where the nuclei are fixed) because there is only one electron, we will develop approximate solutions in a manner applicable to other diatomic molecules that have more than one electron.

## Linear Combination of Atomic Orbitals

For the case where the protons in H<sub>2</sub><sup>+</sup> are infinitely far apart, we have a hydrogen atom and an isolated proton when the electron is near one proton or the other. The electronic wavefunction would just be $1s_A(r)$ or $1s_B(r)$ depending upon which proton, labeled $A$ or $B$, the electron is near. Here $1s_A$ denotes a 1s hydrogen atomic orbital with proton A serving as the origin of the spherical polar coordinate system in which the position $r$ of the electron is specified. Similarly $1s_B$ has proton B as the origin. A useful approximation for the molecular orbital when the protons are close together therefore is a linear combination of the two atomic orbitals. The general method of using

$$ \psi (r) = C_A 1s_A (r) + C_B1s_B (r) $$ {eq:9.2.2} n=2

i.e. of finding molecular orbitals as linear combinations of atomic orbitals is called the *Linear Combination of Atomic Orbitals - Molecular Orbital (LCAO-MO) Method*. In this case we have two basis functions in our basis set, the hydrogenic atomic orbitals $1s_A$ and $1s_B$.

:::note [note] The Linear Combination of Atomic Orbitals (LCAO) Approximation and Interference

The LCAO approximation is an example of the linear variational method discussed previously with the true molecular orbital wavefunction approximated as an expansion of a basis set of atomic orbitals on each atom of the molecule with variable coefficients that can be optimized (e.g., via the secular equations). As discussed previously, the number of wavefunctions (solutions) extracted from solving the secular determinant is equal the number of elements in the expansion. So for the expansion in Equation [ref:eq:9.2.2] with two atomic orbitals contributing result in two molecule orbitals.

This method yields a approximate picture of the molecular orbitals in a molecules. The figure below shows two atoms approaching along the axis of one of their $2p$ states. In the top row, the two lobes facing one another have the same sign; in the bottom row they have opposite sign. These are two different linear combinations of the same two atomic states, on different atoms and with difference phases (i.e., signs of $C_A$ vs. $C_B$ in the expansion). In the first example, the electron density increases between the nuclei and in the second example, a very steep-sided node between the two nuclei causes all the probability density to face away from the atom opposite.

![Black square with no discernible features or text.](media/124614-lcao.gif)
:::

For $\ce{H2^{+}}$, the simplest molecule, the starting function is given by Equation [ref:eq:9.2.2]. We must determine the values for the coefficients, $C_A$ and $C_B$. We could use the variational method to find a value for these coefficients, but for the case of $\ce{H2^{+}}$ evaluating these coefficients is easy. Since the two protons are identical, the probability that the electron is near $A$ must equal the probability that the electron is near $B$. These probabilities are given by $|C_A|^2$ and $|C_B|^2$, respectively. Consider two possibilities that satisfy the condition $|C_A|^2 = |C_B|^2$; namely, $C_A = C_B = C_{+}$ and $C_A = -C_B = C_{-}$. These two cases produce two molecular orbitals:

$$ \psi _+ = C_+(1s_A + 1s_B) $$ {eq:9.2.3a} n=3

$$ \psi _{-} = C_{-}(1s_A - 1s_B) $$ {eq:9.2.3b} n=4

The probability density for finding the electron at any point in space is given by $|{\psi}^2|$ and the electronic charge density is just $|e{\psi}^2|$. The important difference between $\psi _+$ and $\psi _{-}$ is that the charge density for $\psi _+$ is enhanced (Figure 9.2.2 (bottom) between the two protons, whereas it is diminished for $\psi _{-}$ as shown in Figures 9.2.2 (top). $\psi _{-}$ has a node in the middle while $\psi _+$ corresponds to our intuitive sense of what a chemical bond must be like. The electronic charge density is enhanced in the region between the two protons.

> FIGURE {fig:9.2.2} src=media/57781-H2OrbitalsAnimation.gif
> alt: Four graphs displaying sinusoidal waves in blue, with red dots marking peaks and troughs, arranged in a 2x2 grid.
> caption: Electron wavefunctions for the 1s orbital of a lone hydrogen atom (left and right) and the corresponding bonding (bottom) and antibonding (top) molecular orbitals of the $H_2^+$ ion. The real part of the wavefunction is the blue curve, and the imaginary part is the red curve. The red dots mark the locations of the nuclei. The electron wavefunction oscillates according to the Schrödinger wave equation, and orbitals are its standing waves. The standing wave frequency is proportional to the orbital's kinetic energy. (This plot is a one-dimensional slice through the three-dimensional .)

So $\psi _+$ is called a {term:bonding molecular orbital}. If the electron were described by $\psi _{-}$, the low charge density between the two protons would not balance the Coulomb repulsion of the protons, so $\psi _{-}$ is called an {term:antibonding molecular orbital}.

## Contributors and Attributions {section:attributions}

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("[Quantum States of Atoms and Molecules](http://pubs.acs.org/doi/abs/10.1021/ed082p1880.2)")
- Rudolf Winter (Aberystwyth University)
