<!-- LibreTexts page 13461: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09:_Chemical_Bonding_in_Diatomic_Molecules/9.09:_Electrons_Populate_Molecular_Orbitals_According_to_the_Pauli_Exclusion_Principle -->
# Electrons Populate Molecular Orbitals According to the Pauli Exclusion Principle

Just like with multielectron atoms, there are restrictions on how electrons occupy molecular orbitals. The most important of these rules is the Pauli exclusion principle, which we will not try to prove but will take as a fact. In general chemistry, you were told that the Pauli exclusion principle means that electrons in the same orbital must have opposite spin, and that only two electrons can be in each orbital. That is close, but not entirely accurate. The true statement of the Pauli exclusion principle is this: wavefunctions must be antisymmetric with respect to exchange of identical fermions, and symmetric with respect to exchange of identical bosons. A is a particle with half-integer spin, and a is a particle with integer spin. Recall that electrons are fermions (spin 1/2): we represent the two possible spin states as $\ket{\alpha}$ ($m_z = 1/2$) and $\ket{\beta}$ ($m_z = -1/2$), according to their spin projections.

Because all electrons are identical, the Pauli exclusion principle requires that the electronic wavefunction be antisymmetric with respect to exchanging any of them.<sup>2</sup> The word “antisymmetric” in this context means that if we swap two electrons (i.e., exchange their labels), the wavefunction must change sign. To denote both the orbital of an electron and its spin, we use a product of , each of the form $\ket{\psi\sigma}$, where $\psi$ depends only on the spatial coordinates of the electrons, and $\sigma$ depends only on their spins.

In the ground electronic state of , the electrons both occupy the $\ket{1\sigma}$ spatial orbital. Naively, we could write the following product of spin orbitals:

$$ \ket{\psi} = \ket{1\sigma^1\alpha^1}\ket{1\sigma^2\beta^2} $$ n=1

where the superscript refers to the electron number. Note that since the spatial and spin coordinates are independent of one another, we can group them into kets in whichever way is most convenient for us at the time. Let us define the permutation operator $\hat{p}_{12}$, which swaps the labels of electrons 1 and 2, in order to test the wavefunction for asymmetry in accordance with the {term:Pauli Exclusion Principle}. It is clear that the electronic wavefunction we wrote above does not change sign under this permutation operation!

$$ \hat{p}_{12}\ket{\psi} = \ket{1\sigma^2\alpha^2}\ket{1\sigma^1\beta^1} \neq -\ket{\psi}. $$ n=2

Instead, we can take a linear combination of spin functions to make a new wavefunction:

$$ \ket{\psi} = \frac{1}{\sqrt{2}}\left(\ket{1\sigma^1\alpha^11\sigma^2\beta^2} - \ket{1\sigma^2\alpha^21\sigma^1\beta^1} \right) $$ n=3

Since the Hamiltonian did not contain any terms that depend on spin, the energy of this new wavefunction is equal to the energy of our original wavefunction.<sup>3</sup> We can use the permutation operator $\hat{p}_{12}$ to see that this wavefunction is in fact antisymmetric:

$$ \begin{aligned} \hat{p}_{12}\ket{\psi} & = \frac{1}{\sqrt{2}}\left(\ket{1\sigma^2\alpha^21\sigma^1\beta^1} - \ket{1\sigma^1\alpha^11\sigma^2\beta^2} \right)  \\[4pt] & = -\frac{1}{\sqrt{2}}\left(\ket{1\sigma^1\alpha^11\sigma^2\beta^2} - \ket{1\sigma^2\alpha^21\sigma^1\beta^1} \right)  \\[4pt] & = -\ket{\psi}.\end{aligned} $$

We see here that the orbital is not occupied by one electron of each spin, but in fact it is occupied electrons in a superposition of spin states. In larger systems, antisymmetrized wavefunctions show that each orbital is occupied by a superposition of all electrons in the system in both spin states. Although that is difficult to conceptualize, in most practical cases the electrons can still be thought of as localized in one particular orbital with one particular spin.

There is a standard procedure to generate an appropriately antisymmetrized electronic wavefunction from any set of single-electron functions. Like in multi-electron atoms, the general method for doing this is by use of a Slater determinant: a determinant in which each column contains the product of one molecular orbital and spin function for each possible labeling of the electrons. For our system above (two electrons in $\ket{1\sigma}$, one with spin $\alpha$, and the other with spin $\beta$), we would write

$$ \ket{\psi} = \frac{1}{\sqrt{2!}} \left| \begin{array}{cc} \ket{1\sigma^1\alpha^1} & \ket{1\sigma^1\beta^1} \\[4pt] \ket{1\sigma^2\alpha^2} & \ket{1\sigma^2\beta^2} \end{array} \right|, $$ n=4

where once again the superscript indicated the label on the electron. The Slater determinant therefore contains all of the possible ways that we could assign numbers to the electrons in the system.

:::note [note] Note

A few things to know about Slater determinants:

- If two columns are swapped, the determinant changes sign (this is why it satisfies the exclusion principle!).
- If any two columns in a determinant are the same, the determinant is 0. This is why the Pauli exclusion principle only allows one electron of each spin to occupy a single orbital, which you learned way back in Gen Chem. It also directly leads to the “Aufbau” principle: when populating molecular orbitals, we fill up orbitals in order of increasing energy with two electrons each.
- The energy of a Slater determinant (in the independent particle approximation) is simply the sum of the orbitals that make it up (i.e., add up the energy of each electron in the MO diagram).
- The wavefunction described by a Slater determinant is normalized if the individual orbitals that make it up are normalized.
- Two Slater determinants are orthogonal if they differ in any single orbital.
:::

Given an MO diagram, it is easy to generate a Slater determinant for the ground electronic state of a closed-shell molecule using general chemistry rules: the Aufbau principle and the Pauli exclusion principle. Each orbital can accommodate one electrons of each spin, and electrons are placed into orbitals from lowest to highest energy. A system with $N$ electrons in the orbitals $\ket{\phi_1}$, $\ket{\phi_2}$, etc., will generate an $N\times N$ dimensional Slater determinant, and the general form is (if $N$ is even):

$$ \ket{\psi} = \frac{1}{\sqrt{N!}} \begin{vmatrix} \ket{\phi_1^1\alpha^1} & \ket{\phi_1^1\beta^1} & \ket{\phi_2^1\alpha^1} & \ket{\phi_2^1\beta^1} & \cdots & \ket{\phi_{N/2}^1\alpha^1} & \ket{\phi_{N/2}^1\beta^1} \\[4pt] \ket{\phi_1^2\alpha^2} & \ket{\phi_1^2\beta^2} & \ket{\phi_2^2\alpha^2} & \ket{\phi_2^2\beta^2} & \cdots & \ket{\phi_{N/2}^2\alpha^2} & \ket{\phi_{N/2}^2\beta^2} \\[4pt] \vdots&\vdots & \vdots& \vdots & \ddots&\vdots&\vdots \\[4pt] \ket{\phi_1^N\alpha^N} & \ket{\phi_1^N\beta^N} & \ket{\phi_2^N\alpha^N} & \ket{\phi_2^N\beta^N} & \cdots & \ket{\phi_{N/2}^N\alpha^N} & \ket{\phi_{N/2}^N\beta^N} \end{vmatrix} $$ n=5

Once again, each column contains the orbital and spin state of one of the electrons in the diagram, and each row in the column corresponds to a different choice of label (1, 2, 3, etc...). Evaluating the determinant yields a normalized, antisymmetrized wavefunction. Therefore, an MO diagram can stand as an effective substitute for an electronic wavefunction; it is implied that the true wavefunction used in calculations comes from the Slater determinant described by the diagram.
