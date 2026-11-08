<!-- LibreTexts page 13455: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09:_Chemical_Bonding_in_Diatomic_Molecules/9.04:_Chemical_Bond_Stability -->
# Chemical Bond Stability

## Learning Objectives {section:objectives}

- Identify the nature of the energy of molecular orbitals of a diatomic as a function of intermolecular distance
- Identify the three integrals involved in calculation the total Molecular Orbital Energy: coulomb Integral, exchange integral, and overlap integral

As shown previously, we can construct two molecular orbitals for the $\ce{H_2^{+}}$ system using the LCAO approximation with a basis set of two 1s atomic orbitals (i.e., the $1s$ orbitals on hydrogen $A$ ($1s_A$) and hydrogen $B$ ($1s_B$):

$$ | \psi _\pm\rangle = \dfrac{1}{\sqrt{2(1 \pm S )}} (1s_A \pm 1s_B) $$ {eq:9.3.7a} n=1

The energy of these two molecular orbitals can be calculated from the expectation value integral of the Hamiltonian,

$$ E_{\pm} = \left \langle \psi _{\pm} | \hat {H} _{elec} | \psi _{\pm} \right \rangle $$ {eq:9.4.1} n=2

which can be expanded using the expanded molecular orbital wavefunctions in Equations [ref:eq:9.3.7a] to give

$$ E_{\pm} = \dfrac {1}{2(1 \pm S)} \left[ \underbrace{\left \langle 1s_A |\hat {H} _{elec} | 1s_A \right \rangle}_{H_{AA}} + \underbrace{\left \langle 1s_B |\hat {H} _{elec} | 1s_B \right \rangle }_{H_{BB}}\pm \underbrace{\left \langle 1s_A |\hat {H} _{elec} | 1s_B \right \rangle}_{H_{AB}} \pm \underbrace{\left \langle 1s_B |\hat {H} _{elec} | 1s_A \right \rangle}_{H_{BA}} \right] $$ {eq:9.4.2a} n=3

where $S$ is the overlap integral between the two atomic orbitals of the basis. The four integrals in Equation [ref:eq:9.4.2a] can be represented by $H_{AA}$, $H_{BB}$, $H_{AB}$, and $H_{BA}$, respectively.

$$ E_{\pm} = \dfrac {1}{2(1 \pm S)} \left[ H_{AA} + H_{BB} \pm H_{AB} \pm H_{BA} \right] $$ {eq:9.4.2b} n=4

:::exercise {exr:9.4.1}

Show that Equation [ref:eq:9.4.1] expands to give Equation [ref:eq:9.4.2a] within the LCAO approximation that uses a basis set of only two 1s atomic orbitals.

**Answer**

Here we have the wavefunction within the LCAO approximation that uses a basis set of only two 1s atomic orbitals (Equation [ref:eq:9.3.7a]).

$$ | \psi_{\pm} \rangle =\frac{1}{\sqrt{2(1 \pm S)}}\left(1_{S a} \pm 1_{S b}\right) $$

And our LCAO approximation is equivalent to this if we plug in the wavefunction directly.

$$ E_{\pm}= \langle \psi_{\pm}|\hat{H}| \psi_{\pm} \rangle =N^{2} \langle \left(1_{S a} \pm 1_{S b}\right)|\hat{H}|\left(1_{S a}-1_{S b}\right) \rangle $$

We can see form above that the normalization constant squared results in:

$$ N^{2}=\frac{1}{2(1 \pm S)} $$

We now FOIL the mulitple (i.e., expaned term by term):

$$ \langle 1_{S a}|\hat{H}| 1_{S a} \rangle + \langle1_{S b}|\hat{H}| 1_{S b} \rangle \pm \langle 1_{S a}|\hat{H}| 1_{S b} \rangle \pm \langle 1_{S b}|\hat{H}| 1_{S a} \rangle $$

Now we can see this is now equivalent to Equation [ref:eq:9.4.2a] if the equation above is inserted (and adding a subscript to emphasize this only applies to the electronic wavefunction):

$$ E_{\pm} = \dfrac {1}{2(1 \pm S)} \left[ \underbrace{\left \langle 1s_A |\hat {H} _{elec} | 1s_A \right \rangle}_{H_{AA}} + \underbrace{\left \langle 1s_B |\hat {H} _{elec} | 1s_B \right \rangle }_{H_{BB}}\pm \underbrace{\left \langle 1s_A |\hat {H} _{elec} | 1s_B \right \rangle}_{H_{AB}} \pm \underbrace{\left \langle 1s_B |\hat {H} _{elec} | 1s_A \right \rangle}_{H_{BA}} \right] $$
:::

Notice that $A$ and $B$ appear equivalently in the Hamiltonian operator for $\ce{H_2^{+}}$. This equivalence means that integrals involving $1s_A$ must be the same as corresponding integrals involving $1s_B$, i.e.

$$ H_{AA} = H_{BB} $$ {eq:9.4.3} n=5

and since the wavefunctions are real

$$ | A \rangle = \langle A | $$

so

$$ H_{AB} = H_{BA} $$ {eq:9.4.4} n=6

These two equalities simplify Equation [ref:eq:9.4.2b]:

$$ E_{\pm} = \dfrac {1}{1 \pm S} (H_{AA} \pm H_{AB}) $$ {eq:9.4.5} n=7

Now examine the details of $H_{AA}$ after inserting the Hamiltonian operator for $\ce{H_2^{+}}$ (Equation 9.2.1):

$$ H_{AA} = \underbrace{ \left \langle 1s_A \left| - \dfrac {\hbar ^2}{2m} \nabla ^2 - \dfrac {e^2}{4\pi \epsilon _0 r_A} \right| 1s_A \right \rangle }_{\color{red}{E_H}} + \dfrac {e^2}{4\pi \epsilon _0 R} \cancelto{ \color{red} {1}}{ \left \langle 1s_A | 1s_A \right \rangle} \underbrace{ - \left \langle 1s_A \left| \dfrac {e^2}{4 \pi \epsilon _0 r_B } \right| 1s_A \right \rangle}_{ \color{red} {J_{AB}}} $$ {eq:9.4.6} n=8

- The first term is just the integral for the energy of the hydrogen atom of the 1s orbital, $E_H$.
- The second integral is equal to 1 by normalization; the prefactor is just the Coulomb repulsion of the two protons.
- The last integral, *including the minus sign*, is represented by $J$ and is called the {term:Coulomb integral}.

Physically $J_{AB}$ is the potential energy of interaction of the electron located around proton $A$ with proton $B$. It is negative because it is an attractive interaction. It is the average interaction energy of an electron described by the $1s_A$ function with proton $B$.

:::note [definition] The Coulomb Integral ($J$)

The {term:Coulomb Integral} is the potential energy of electrostatic repulsion between the electron with the electron density in $1S_A$ and the the electron with the electron density function $1S_B$
:::

Now consider $H_{AB}$.

$$ H_{AB} = \underbrace{ \left \langle 1s_A \left| - \dfrac {\hbar ^2}{2m} \nabla ^2 - \dfrac {e^2}{4\pi \epsilon _0 r_B} \right| 1s_B \right \rangle}_{\color{red}{E_HS}} + \dfrac {e^2}{4\pi \epsilon _0 R} \cancelto{\color{red}{S}}{\left \langle 1s_A | 1s_B \right \rangle} - \underbrace{ \left \langle 1s_A \left| \dfrac {e^2}{4 \pi \epsilon _0 r_A } \right| 1s_B \right \rangle }_ {\color{red} {K_{AB}}} $$ {eq:9.4.7S} n=9

- In the first integral we have the hydrogen atom Hamiltonian and the H atom function 1s<sub>B</sub>. The function 1s<sub>B</sub> is an eigenfunction of the operator with eigenvalue $E_H$. Since $E_H$ is a constant it factors out of the integral, which then becomes the overlap integral, $S$. The first integral therefore reduces to $E_HS$.
- The second term is just the Coulombic energy of the two protons times the overlap integral.
- The third term, *including the minus sign*, is given the symbol $K$ and is called the *exchange integral* because the electron is described by the 1s<sub>A</sub> orbital on one side and by the 1s<sub>B</sub> orbital on the other side of the operator. The electron changes or exchanges position in the molecule.

:::note [definition] The Exchange Integral ($K$)

In a {term:coulomb integral}, the electron always is in the same orbital; whereas, in an *Exchange Integral*, the electron is in one orbital on one side of the operator and in a different orbital on the other side.
:::

Using the expressions for $H_{AA}$ (Equation [ref:eq:9.4.6]) and $H_{AB}$ (Equation [ref:eq:9.4.7S]) and substituting into Equation [ref:eq:9.4.5] produces:

$$ \begin{align} E_{\pm} &= \dfrac {1}{1 \pm S} \left[ \left(E_H + \dfrac {e^2}{4\pi \epsilon_0 R}\right) (1 \pm S ) + J \pm K \right]  \\[4pt] &= E_H + \dfrac {e^2}{4\pi \epsilon _0 R} + \dfrac {J \pm K}{1 \pm S}  \end{align} $$ {eq:9.4.8} n=10 {eq:9.4.9} n=10

Equation [ref:eq:9.4.9] tells us that the energy of the $\ce{H_2^+}$ molecule is the energy of a hydrogen atom plus the repulsive energy of two protons plus some additional electrostatic interactions of the electron with the protons. These additional interactions are given by the last term

$$ \dfrac {J \pm K}{1 \pm S} . $$

If the protons are infinitely far apart then only $E_H$ is nonzero, which we can set to zero by subtracting off:

$$ \begin{align} \Delta E_{\pm} &= E_{\pm} - E_H \\[4pt] &= \dfrac {e^2}{4\pi \epsilon _0 R} + \dfrac {J \pm K}{1 \pm S}  \end{align} $$ {eq:9.4.10} n=11

To get a chemical bond and a stable $\ce{H_2^+}$ molecule $\Delta E_{\pm}$ must be less than zero and have a minimum, i.e. $\dfrac {J \pm K}{1 \pm S}$ must be sufficiently negative to overcome the positive repulsive energy of the two protons $\dfrac {e^2}{4 \pi \epsilon _0R }$ for some value of $R$. For large $R$, these terms are zero, and for small $R$, the {term:Coulomb repulsion of the protons rises to infinity.}

:::exercise {exr:9.4.2}

Show that Equation 9.2.1 follows from Equation [ref:eq:9.4.5]
:::

## The Coulomb and Exchange Integrals

We will examine more closely how the Coulomb repulsion term and the integrals $J$, $K$, and $S$ depend on the separation of the protons, but first we want to discuss the physical significance of $J$, the Coulomb integral, and $K$, the exchange integral. $J$ and $K$ have been defined as

$$ J_{AB} = \left \langle 1s_A \left| \dfrac {-e^2}{4 \pi \epsilon _0 r_B } \right|1s_A \right \rangle = - \int \varphi ^*_{1s_A} (r) \varphi _{1s_A} (r) \dfrac {e^2}{4 \pi \epsilon _0 r_B } d\tau $$ {eq:9.4.11} n=12

$$ K_{AB} = \left \langle 1s_A \left| \dfrac {-e^2}{4 \pi \epsilon _0 r_A } \right|1s_B \right \rangle = - \int \varphi ^*_{1s_A} (r) \varphi _{1s_B} (r) \dfrac {e^2}{4 \pi \epsilon _0 r_A } d\tau $$ {eq:9.4.12} n=13

Figure 9.4.2 shows graphs of the four terms contributing to the energy of $\ce{H_2^{+}}$ (Equation [ref:eq:9.4.10]). In Figure 9.4.2, you can see that as the internuclear distance $R$ approaches zero,

- the Coulomb repulsion of the two protons goes from near zero to a large positive number,
- the overlap integral goes for zero to one, and
- $J$ and $K$ become increasingly negative.

> FIGURE {fig:9.4.2} src=media/51430-proton_electrostatics.gif
> alt: Two graphs: the top shows a decreasing red curve, and the bottom shows three curves (red, green, blue) with varying trends.
> caption: (a) The electrostatic energy (in hartrees, 27.2 eV) of two protons separated by a distance $R$ in units of the Bohr radius (52.92 pm). (b) The overlap ($S$), Coulomb ($J$), and exchange (K) integrals at different proton separations. The units for $J$ and $K$ are hartrees; $S$ has no units. (CC BY-SA-NC; David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski via ChemEdDL)

Note that both $J$ and $K$ integrals are {term:negative} since all quantities in the integrands of Equation [ref:eq:9.4.11] and [ref:eq:9.4.12] are positive. In the Coulomb integral, $e \varphi ^*_{1s_A} (r) \varphi _{1a_A} (r)$ is the charge density of the electron around proton A, since {term:r} represents the coordinates of the electron relative to proton A. Since r<sub>B</sub> is the distance of this electron to proton B, the Coulomb integral gives the potential energy of the charge density around proton A interacting with proton B. $J$ can be interpreted as an average potential energy of this interaction because $e \varphi ^*_{1s_A} (r) \varphi _{1a_A} (r)$ is the probability density for the electron at point $r$, and $\dfrac {e^2}{4 \pi \epsilon _0 r_B }$ is the potential energy of the electron at that point due to the interaction with proton B. Essentially, J accounts for the attraction of proton B to the electron density of hydrogen atom A. As the two protons get further apart, this integral goes to zero because all values for r<sub>B</sub> become very large and all values for 1/r<sub>B</sub> become very small.

In the {term:exchange integral}, $K$, the product of the two functions is nonzero {term:only} in the regions of space where the two functions overlap. If one function is zero or very small at some point then the product will be zero or small. The exchange integral also approaches zero as internuclear distances increase because the both the overlap and the $1/r$ values become zero. The product $e \varphi ^*_{1s_A} (r) \varphi _{1a_B} (r)$ is called the *overlap charge density*. Since the overlap charge density is significant in the region of space between the two nuclei, it makes an important contribution to the chemical bond. The exchange integral, $K$, is the potential energy due to the interaction of the overlap charge density with one of the protons. While $J$ accounts for the attraction of proton $B$ to the electron density of hydrogen atom $A$, $K$ accounts for the added attraction of the proton due the build-up of electron charge density between the two protons.

:::exercise {exr:9.4.3}

Write a paragraph describing in your own words the physical significance of the Coulomb and exchange integrals for $\ce{H_2^{+}}$.
:::

Figure 9.4.3 shows the energy of H<sub>2</sub><sup>+</sup> relative to the energy of a separated hydrogen atom and a proton as given by Equation [ref:eq:9.4.9]. For the electron in the $\psi_-$ orbital, the energy of the molecule, $E_{el}(R)$, {term:always} is greater than the energy of the separated atom and proton.

> FIGURE {fig:9.4.3} src=media/51431-H2Potential.gif
> alt: Graph showing two curves: one red decreasing sharply, the other blue leveling off over a range of values on the x-axis.
> caption: Energy of the $\ce{H2^{+}}$ bonding molecular orbital $\Delta E_+$ and the molecular orbital $\Delta E_-$, relative to the energy of a separated hydrogen atom and proton.

For the electron in the $\psi _+$ orbital, you can see that the big effect for the energy of the bonding orbital, $E_+(R)$, is the balance between the repulsion of the two protons $\dfrac {e^2}{4 \pi \epsilon _0R }$ and J and K, which are both negative. J and K manage to compensate for the repulsion of the two protons until their separation is less than 100 pm (i.e the energy is negative up until this point), and a minimum in the energy is produced at 134 pm. This minimum represents the formation of a chemical bond. The effect of S is small. It only causes the denominator in Equation [ref:eq:9.4.9] to increase from 1 to 2 as R approaches 0.

For the antibonding orbital, $-K$ is a positive quantity and essentially cancels J so there is not sufficient compensation for the Coulomb repulsion of the protons. The effect of the -K in the expression, Equation [ref:eq:9.4.9], for $E_-$ is to account for the absence of overlap charge density and the enhanced repulsion because the charge density between the protons for $\psi _-$ is even lower than that given by the atomic orbitals.

## Contributors and Attributions {section:attributions}

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("[Quantum States of Atoms and Molecules](http://pubs.acs.org/doi/abs/10.1021/ed082p1880.2)")
