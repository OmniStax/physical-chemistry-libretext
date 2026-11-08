<!-- LibreTexts page 165359: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/11:_Computational_Quantum_Chemistry/11.01:_Overview_of_Quantum_Calculations -->
# Overview of Quantum Calculations

## Multielectron Electronic Wavefunctions

We could symbolically write an approximate two-particle wavefunction as $\psi (r_1, r_2)$. This could be, for example, a two-electron wavefunction for helium. To exchange the two particles, we simply substitute the coordinates of particle 1 ($r_l$) for the coordinates of particle 2 ($r_2$) and vice versa, to get the new wavefunction $\psi (r_1, r_2)$. This new wavefunction must have the property that

$$ |\psi (r_1, r_2)|^2 = \psi (r_2, r_1)^*\psi (r_2, r_1) = \psi (r_1, r_2)^* \psi (r_1, r_2) $$ {eq:9-38} n=1

Equation [ref:eq:9-38] will be true only if the wavefunctions before and after permutation are related by a factor of $e^{i\varphi}$,

$$ \psi (r_1, r_2) = e^{i\varphi} \psi (r_1, r_2) $$

so that

$$ \left ( e^{-i\varphi} \psi (r_1, r_2) ^*\right ) \left ( e^{i\varphi} \psi (r_1, r_2) ^*\right ) = \psi (r_1 , r_2 ) ^* \psi (r_1 , r_2) $$ {eq:9-40} n=2

If we exchange or permute two identical particles twice, we are (by definition) back to the original situation. If each permutation changes the wavefunction by $e^{i \varphi}$, the double permutation must change the wavefunction by $e^{i\varphi} e^{i\varphi}$. Since we then are back to the original state, the effect of the double permutation must equal 1; i.e.,

$$ e^{i\varphi} e^{i\varphi} = e^{i 2\varphi} = 1 $$

which is true only if $\varphi = 0$ or an integer multiple of π. The requirement that a double permutation reproduce the original situation limits the acceptable values for $e^{i\varphi}$ to either +1 (when $\varphi = 0$) or -1 (when $\varphi = \pi$). Both possibilities are found in nature, but the behavior of elections is that the wavefunction be antisymmetric with respect to permutation $(e^{i\varphi} = -1)$. A wavefunction that is antisymmetric with respect to electron interchange is one whose output changes sign when the electron coordinates are interchanged, as shown below.

$$ \psi (r_2 , r_1) = e^{i\varphi} \psi (r_1, r_2) = - \psi (r_1, r_2) $$

Blindly following the first statement of the Pauli Exclusion Principle, that each electron in a multi-electron atom {term:must} be described by a different spin-orbital, we try constructing a simple product wavefunction for helium using two different spin-orbitals. Both have the 1s spatial component, but one has spin function $\alpha$ and the other has spin function $\beta$ so the product wavefunction matches the form of the ground state electron configuration for He, $1s^2$.

$$ \psi (\mathbf{r}_1, \mathbf{r}_2 ) = \varphi _{1s\alpha} (\mathbf{r}_1) \varphi _{1s\beta} ( \mathbf{r}_2) $$ {eq:8.6.1} n=3

After permutation of the electrons, this becomes

$$ \psi ( \mathbf{r}_2,\mathbf{r}_1 ) = \varphi _{1s\alpha} ( \mathbf{r}_2) \varphi _{1s\beta} (\mathbf{r}_1) $$ {eq:8.6.2} n=4

which is different from the starting function since $\varphi _{1s\alpha}$ and $\varphi _{1s\beta}$ are different spin-orbital functions. However, an antisymmetric function must produce the same function multiplied by (–1) after permutation, and that is not the case here. We must try something else.

To avoid getting a totally different function when we permute the electrons, we can make a linear combination of functions. A very simple way of taking a linear combination involves making a new function by simply adding or subtracting functions. The function that is created by subtracting the right-hand side of Equation [ref:eq:8.6.2] from the right-hand side of Equation [ref:eq:8.6.1] has the desired antisymmetric behavior. The constant on the right-hand side accounts for the fact that the total wavefunction must be normalized.

$$ \psi (\mathbf{r}_1, \mathbf{r}_2) = \dfrac {1}{\sqrt {2}} [ \varphi _{1s\alpha}(\mathbf{r}_1) \varphi _{1s\beta}( \mathbf{r}_2) - \varphi _{1s\alpha}( \mathbf{r}_2) \varphi _{1s\beta}(\mathbf{r}_1)] $$

​A linear combination that describes an appropriately antisymmetrized multi-electron wavefunction for any desired orbital configuration is easy to construct for a two-electron system. However, interesting chemical systems usually contain more than two electrons. For these multi-electron systems a relatively simple scheme for constructing an antisymmetric wavefunction from a product of one-electron functions is to write the wavefunction in the form of a determinant. John Slater introduced this idea so the determinant is called a Slater determinant.

The Slater determinant for the two-electron wavefunction for the ground state $H_2$ system (with the two electrons occupying the $\sigma_{1s}$ molecular orbital)

$$ \psi (\mathbf{r}_1, \mathbf{r}_2) = \dfrac {1}{\sqrt {2}} \begin {vmatrix} \sigma_{1s} (1) \alpha (1) & \sigma _{1s} (1) \beta (1) \\ \sigma _{1s} (2) \alpha (2) & \sigma_{1s} (2) \beta (2) \end {vmatrix} $$

We can introduce a shorthand notation for the arbitrary {term:spin-orbital}

$$ \chi_{i\alpha}(\mathbf{r}) = \varphi_i \alpha $$

or

$$ \chi_{i\beta}(\mathbf{r}) = \varphi_i \beta $$

as determined by the $m_s$ quantum number. A shorthand notation for the determinant in Equation 8.6.4 is then

$$ \psi (\mathbf{r}_1 , \mathbf{r}_2) = 2^{-\frac {1}{2}} Det | \chi_{1s\alpha} (\mathbf{r}_1) \alpha \chi_{1s\beta} ( \mathbf{r}_2) \beta| $$

The determinant is written so the electron coordinate changes in going from one row to the next, and the spin orbital changes in going from one column to the next. The advantage of having this recipe is clear if you try to construct an antisymmetric wavefunction that describes the orbital configuration for uranium! Note that the normalization constant is

$(N!)^{-\dfrac {1}{2}}$

for a system of $N$ electrons.

The generalized Slater determinant for a multe-electrom atom with N electrons is then

$$ \psi(\mathbf{r}_1, \mathbf{r}_2, \ldots, \mathbf{r}_N)=\dfrac{1}{\sqrt{N!}} \left| \begin{matrix} \chi_1(\mathbf{r}_1) \alpha & \chi_1(\mathbf{r}_1) \beta& \cdots & \chi_{N/2}(\mathbf{r}_1) \beta\\ \chi_1(\mathbf{r}_2) \alpha & \chi_2(\mathbf{r}_2)\beta & \cdots & \chi_{N/2}(\mathbf{r}_2)\beta \\ \vdots & \vdots & \ddots & \vdots \\ \chi_1(\mathbf{r}_N) \alpha & \chi_2(\mathbf{r}_N)\beta & \cdots & \chi_{N/2}(\mathbf{r}_N) \beta \end{matrix} \right| $$ {eq:slater} n=5

In a modern *ab initio* electronic structure calculation on a closed shell molecule, the electronic Hamiltonian is used with a single determinant wavefunction. This wavefunction, $\Psi$, is constructed from molecular orbitals, $\psi$ that are written as linear combinations of contracted Gaussian basis functions, $\varphi$

$$ \varphi _j = \sum \limits _k c_{jk} \psi _k $$ {eq:10.69} n=6

The contracted Gaussian functions are composed from primitive Gaussian functions to match Slater-type orbitals. The exponential parameters in the STOs are optimized by calculations on small molecules using the nonlinear variational method and then those values are used with other molecules. The problem is to calculate the electronic energy from

$$ E = \dfrac {\int \Psi ^* \hat {H} \Psi d \tau }{\int \Psi ^* \Psi d \tau} $$ {eq:10.70} n=7

or in bra-ket notation

$$ E = \dfrac {\left \langle \Psi |\hat {H} | \Psi \right \rangle}{\left \langle \psi | \psi \right \rangle} $$

The the optimum coefficients $c_{jk}$ for each molecular orbital in Equation [ref:eq:10.69] by using the Self Consistent Field Method and the Linear Variational Method to minimize the energy as was described previously for atoms.

The variational principle says an approximate energy is an upper bound to the exact energy, so the lowest energy that we calculate is the most accurate. At some point, the improvements in the energy will be very slight. This limiting energy is the lowest that can be obtained with a single determinant wavefunction (e.g., Equation [ref:eq:slater]). This limit is called the *Hartree-Fock limit*, the energy is the *Hartree-Fock energy*, the molecular orbitals producing this limit are called *Hartree-Fock orbitals*, and the determinant is the *Hartree-Fock wavefunction*.

:::note [note] Hartree-Fock Calculations

You may encounter the terms *restricted* and *unrestricted* Hartree-Fock. The above discussion pertains to a restricted HF calculation. In a restricted HF calculation, electrons with $\alpha$ spin are restricted or constrained to occupy the same spatial orbitals as electrons with $\beta$ spin. This constraint is removed in an unrestricted calculation. For example, the spin orbital for electron 1 could be $\psi _A (r_1) \alpha (1)$, and the spin orbital for electron 2 in a molecule could be $\psi _B (r_2) \beta (2)$, where both the spatial molecular orbital and the spin function differ for the two electrons. Such spin orbitals are called *unrestricted*. If both electrons are constrained to have the same spatial orbital, e.g. $\psi _A (r_1) \alpha (1)$ and $\psi _A (r_2) \beta (2)$, then the spin orbital is said to be *restricted*. While unrestricted spin orbitals can provide a better description of the electrons, twice as many spatial orbitals are needed, so the demands of the calculation are much higher. Using unrestricted orbitals is particular beneficial when a molecule contains an odd number of electrons because there are more electrons in one spin state than in the other.
:::

:::example {ex:11.1.1} Carbon Monoxide

It is well known that carbon monoxide is a poison that acts by binding to the iron in hemoglobin and preventing oxygen from binding. As a result, oxygen is not transported by the blood to cells. Which end of carbon monoxide, carbon or oxygen, do you think binds to iron by donating electrons? We all know that oxygen is more electron-rich than carbon (8 vs 6 electrons) and more electronegative. A reasonable answer to this question therefore is *oxygen*, but experimentally it is carbon that binds to iron.

A quantum mechanical calculation done by Winifred M. Huo, published in J. Chem. Phys. 43, 624 (1965), provides an explanation for this counter-intuitive result. The basis set used in the calculation consisted of 10 functions: the ls, 2s, 2p<sub>x</sub>, 2p<sub>y</sub>, and 2p<sub>z</sub> atomic orbitals of C and O. Ten molecular orbitals (mo’s) were defined as linear combinations of the ten atomic orbitals (Equation [ref:eq:10.69]. The ground state wavefunction $\Psi$ is written as the Slater Determinant of the five lowest energy molecular orbitals $\psi _k$. Equation [ref:eq:10.70] gives the energy of the ground state, where the denominator accounts for the normalization requirement. The coefficients $C_{kj}$ in the linear combination are determined by the variational method to minimize the energy. The solution of this problem gives the following equations for the molecular orbitals. Only the largest terms have been retained here. These functions are listed and discussed in order of increasing energy.

- $1s \approx 0.94 1s_o$. The 1 says this is the first $\sigma$ orbital. The $\sigma$ says it is symmetric with respect to reflection in the plane of the molecule. The large coefficient, 0.94, means this is essentially the 1s atomic orbital of oxygen. The oxygen 1s orbital should have a lower energy than that of carbon because the positive charge on the oxygen nucleus is greater.
- $2s \approx 0.92 1s_c$. This orbital is essentially the 1s atomic orbital of carbon. Both the $1\sigma$ and $2 \sigma$ are “nonbonding” orbitals since they are localized on a particular atom and do not directly determine the charge density between atoms.
- $3s \approx (0.72 2s_o + 0.18 2p_{zo}) + (0.28 2s_c + 0.16 2p_{zc})$. This orbital is a “bonding” molecular orbital because the electrons are delocalized over C and O in a way that enhances the charge density between the atoms. The 3 means this is the third $\sigma$ orbital. This orbital also illustrates the concept of hybridization. One can say the 2s and 2p orbitals on each atom are hybridized and the molecular orbital is formed from these hybrids although the calculation just obtains the linear combination of the four orbitals directly without the *à priori* introduction of hybridization. In other words, hybridization just falls out of the calculation. The hybridization in this bonding LCAO increases the amplitude of the function in the region of space between the two atoms and decreases it in the region of space outside of the bonding region of the atoms.
- $4s \approx (0.37 2s_c + 0.1 2p_{zc}) + (0.54 2p_{zo} - 0.43 2s_{0})$. This molecular orbital also can be thought of as being a hybrid formed from atomic orbitals. The hybridization of oxygen atomic orbitals, because of the negative coefficient with 2s<sub>O</sub>, decreases the electron density between the nuclei and enhances electron density on the side of oxygen facing away from the carbon atom. If we follow how this function varies along the internuclear axis, we see that near carbon the function is positive whereas near oxygen it is negative or possibly small and positive. This change means there must be a node between the two nuclei or at the oxygen nucleus. Because of the node, the electron density between the two nuclei is low so the electrons in this orbital do not serve to shield the two positive nuclei from each other. This orbital therefore is called an “antibonding” molecular orbital and the electrons assigned to it are called antibonding electrons. This orbital is the antibonding partner to the $3 \sigma$ orbital.
- $1\pi \approx 0.32 2p_{xc} + 0.44 2p_{xo} \text {and} 2\pi \approx 0.32 2p_{yc} + 0.44 2p_{yo}$. These two orbitals are degenerate and correspond to bonding orbitals made up from the p<sub>x</sub> and p<sub>y</sub> atomic orbitals from each atom. These orbitals are degenerate because the x and y directions are equivalent in this molecule. $\pi$ tells us that these orbitals are antisymmetric with respect to reflection in a plane containing the nuclei.
- $5\sigma \approx 0.38 2_{sC} - 0.38 2_{pC} - 0.29 2p_{zO}$. This orbital is the sp hybrid of the carbon atomic orbitals. The negative coefficient for 2p<sub>C</sub> puts the largest amplitude on the side of carbon away from oxygen. There is no node between the atoms. We conclude this is a nonbonding orbital with the nonbonding electrons on carbon. This is not a “bonding” orbital because the electron density between the nuclei is lowered by hybridization. It also is not an antibonding orbital because there is no node between the nuclei. When carbon monoxide binds to Fe in hemoglobin, the bond is made between the C and the Fe. This bond involves the donation of the $5\sigma$ nonbonding electrons on C to empty d orbitals on Fe. Thus molecular orbital theory allows us to understand why the C end of the molecule is involved in this electron donation when we might naively expect O to be more electron-rich and capable of donating electrons to iron.
:::
