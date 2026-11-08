<!-- LibreTexts page 13432: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/06:_The_Hydrogen_Atom/6.07:_The_Helium_Atom_Cannot_Be_Solved_Exactly -->
# The Helium Atom Cannot Be Solved Exactly

## Learning Objectives {section:objectives}

- Adding electrons to the quantum hydrogen atom results in analytically unsolvable Schrödinger Equations (they exist, we just do not have analytical forms for them)
- A basic aspect of the corresponding multi-electron Hamiltonians is that they are NOT separable with respect to the spatial coordinate of each electron
- The solutions to multi-electron Schrödinger Equations are called multi-electron wavefunctions and they are often approximated as a product of single-electron wavefunctions (called the orbital approximation).

## Multi-electron Hamiltonians

The second element in the periodic table provides our first example of a quantum-mechanical problem which *cannot* be solved exactly. Nevertheless, as we will show, approximation methods applied to helium can give accurate solutions in perfect agreement with experimental results. In this sense, it can be concluded that quantum mechanics is correct for atoms more complicated than hydrogen. By contrast, the Bohr theory failed miserably in attempts to apply it beyond the hydrogen atom.

Figure 6.7.1 shows a schematic representation of a helium atom with two electrons whose coordinates are given by the vectors $r_1$ and $r_2$. The electrons are separated by a distance $r_{12} = |r_1-r_2|$. The origin of the coordinate system is fixed at the nucleus. As with the hydrogen atom, the nuclei for multi-electron atoms are so much heavier than an electron that the nucleus is assumed to be the center of mass. Fixing the origin of the coordinate system at the nucleus allows us to exclude translational motion of the center of mass from our quantum mechanical treatment.

> FIGURE {fig:6.7.1} src=media/51421-HeAtomReduced.gif width=520
> alt: Two diagrams representing directed graphs. The first graph shows nodes and directed edges labeled with values, while the second graph outlines a similar structure with additional labels.
> caption: (a) The nucleus (++) and electrons (e-) of the helium atom. (b) Equivalent reduced particles with the center of mass (approximately located at the nucleus) at the origin of the coordinate system. Note that $\mu_1$ and $\mu_2 ≈ m_e$.

The Hamiltonian operator for the hydrogen atom serves as a reference point for writing the Hamiltonian operator for atoms with more than one electron. Start with the same general form we used for the hydrogen atom Hamiltonian

$$ \hat {H} = \hat {T} + \hat {V} $$ {eq:6.7.1} n=1

Include a kinetic energy term for each electron and a potential energy term for the attraction of each negatively charged electron for the positively charged nucleus and a potential energy term for the mutual repulsion of each pair of negatively charged electrons. The He atom Hamiltonian is

$$ \hat {H} = -\dfrac {\hbar ^2}{2m_e} (\nabla ^2_1 + \nabla ^2_2) + V_1 (r_1) + V_2 (r_2) + V_{12} (r_{12}) $$ {eq:6.7.2} n=2

where

$$ V_1(r_1) = -\dfrac {2e^2}{4 \pi \epsilon _0 r_1} $$ {eq:6.7.3} n=3

$$ V_2(r_2) = -\dfrac {2e^2}{4 \pi \epsilon _0 r_2} $$ {eq:6.7.4} n=4

$$ V_{12}(r_{12}) = \dfrac {e^2}{4 \pi \epsilon _0 r_{12}} $$ {eq:6.7.5} n=5

The two-electron Hamiltonian in Equation [ref:eq:6.7.2] can be extended to any atom or ion by replacing the He nuclear charge of +2 with a general charge $Z$; e.g.

$$ V_1(r_1) = -\dfrac {Ze^2}{4 \pi \epsilon _0 r_1} $$ {eq:6.7.6} n=6

and including terms for the additional electrons. The subsequent multi-electron atom with $n$ electron is

$$ \hat {H} = \underbrace{-\dfrac {\hbar ^2}{2m_e} \sum_i^n \nabla ^2_i}_{\text{Kinetic Energy}} + \underbrace{\sum_i^n V_i (r_i)}_{\text{Coulombic Attraction}} + \underbrace{ \sum_{i \ne j}^{n,n} V_{ij} (r_{ij})}_{\text{electron-electron Repulsion}} $$ {eq:6.7.7} n=7

This multi-electron Hamiltonian is qualitatively similar to the 2-electron Hamiltonian (Equation [ref:eq:6.7.1]) with each electron having its own kinetic energy and nuclear potential energy terms (Equations [ref:eq:6.7.3] and [ref:eq:6.7.4]). The other big difference between single electron systems and multi-electron systems is the presence of the $V_{ij}(r_{ij})$ terms which contain $1/r_{ij}$, where $r_{ij}$ is the distance between electrons $i$ and $j$. These terms account for the electron-electron repulsion that we expect between like-charged particles.

:::exercise {exr:6.7.1} Multi-electron atom Hamiltonians

For the generalized multi-electron atom Hamiltonian (Equation [ref:eq:6.7.7]):

a. Explain the origin of each of the three summations.
b. What do these summations over (i.e., what is the origin of the summing index)?
c. Write expressions for $V_i(r_i)$ and $V_{ij}(r_{ij})$.
:::

:::exercise {exr:6.7.2} Boron Atom

Boron is the fifth element of the periodic table (Z=5) and is located in Group 13.

a. Write the multi-electron Hamiltonian for a $\ce{^{11}B}$ atom.
b. Would it be any different for a $\ce{^{11}B^{+}}$ ion?
c. Would it be any different for a $\ce{^{10}B}$ atom?

**Answer**

a.

$$ \hat {H}_{\ce{B}}(\vec r_1,\vec r_2,\vec r_3,\vec r_4,\vec r_5) = -\dfrac {\hbar ^2}{2m_e} \sum_i^{5} \nabla ^2_i + \sum_i^{5} \dfrac {-5e^2}{4 \pi \epsilon _0 r_i} + \sum_{i \ne j}^{5,5} \dfrac {e^2}{4 \pi \epsilon _0 r_{ij}} $$

which expands to 20 terms

$$ \begin{align*} \hat {H}_B(\vec r_1,\vec r_2,\vec r_3,\vec r_4,\vec r_5) = &-\dfrac {\hbar ^2}{2m_e} \nabla ^2_1 -\dfrac {\hbar ^2}{2m_e} \nabla ^2_2 -\dfrac {\hbar ^2}{2m_e} \nabla ^2_3 -\dfrac {\hbar ^2}{2m_e} \nabla ^2_4 -\dfrac {\hbar ^2}{2m_e} \nabla ^2_5 \\[4pt] &- \dfrac {-5e^2}{4 \pi \epsilon _0 r_1} - \dfrac {-5e^2}{4 \pi \epsilon _0 r_2} - \dfrac {-5e^2}{4 \pi \epsilon _0 r_3} - \dfrac {-5e^2}{4 \pi \epsilon _0 r_4} - \dfrac {-5e^2}{4 \pi \epsilon _0 r_5} \\[4pt] &+ \dfrac {e^2}{4 \pi \epsilon _0 r_{12}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{13}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{14}} +\dfrac {e^2}{4 \pi \epsilon _0 r_{15}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{23}} +\dfrac {e^2}{4 \pi \epsilon _0 r_{24}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{25}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{34}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{35}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{45}} \end{align*} $$

b. Yes, $\ce{^{11}B^{+}}$ has one less electron than $\ce{^{11}B}$. Its Hamiltonian is

$$ \hat {H}_{\ce{B^+}}(\vec r_1,\vec r_2,\vec r_3,\vec r_4 ) = -\dfrac {\hbar ^2}{2m_e} \sum_i^{4} \nabla ^2_i + \sum_i^{4} \dfrac {-5e^2}{4 \pi \epsilon _0 r_i} + \sum_{i \ne j}^{4,4} \dfrac {e^2}{4 \pi \epsilon _0 r_{ij}} $$

or expanded to 14 terms

$$ \begin{align*} \hat {H}_B(\vec r_1,\vec r_2,\vec r_3,\vec r_4) = &-\dfrac {\hbar ^2}{2m_e} \nabla ^2_1 -\dfrac {\hbar ^2}{2m_e} \nabla ^2_2 -\dfrac {\hbar ^2}{2m_e} \nabla ^2_3 -\dfrac {\hbar ^2}{2m_e} \nabla ^2_4 \\[4pt] &- \dfrac {-5e^2}{4 \pi \epsilon _0 r_1} - \dfrac {-5e^2}{4 \pi \epsilon _0 r_2} - \dfrac {-5e^2}{4 \pi \epsilon _0 r_3} - \dfrac {-5e^2}{4 \pi \epsilon _0 r_4} \\[4pt] &+ \dfrac {e^2}{4 \pi \epsilon _0 r_{12}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{13}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{14}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{23}} +\dfrac {e^2}{4 \pi \epsilon _0 r_{24}} + \dfrac {e^2}{4 \pi \epsilon _0 r_{34}} \end{align*} $$

c. No effect. Changing the number of neutrons in the nucleus does not affect kinetic nor potential energies of the electrons. The Hamilitonian for $\ce{^{10}B}$ is identical to $\ce{^{11}B}$. This is technically correct for this level of discussion, but as we we will see in later, if we expand the Hamiltonian with hyperfine structure the number of neutrons can play a role.
:::

## Multi-electron Wavefunctions and the Orbital Approximation

Given what we have learned from the previous quantum mechanical systems we’ve studied, we predict that exact solutions to the multi-electron Schrödinger equation in Equation [ref:eq:6.7.7] would consist of a family of multi-electron wavefunctions, each with an associated energy eigenvalue. These wavefunctions and energies would describe the ground and excited states of the multi-electron atom, just as the hydrogen wavefunctions and their associated energies describe the ground and excited states of the hydrogen atom. We would predict quantum numbers to be involved, as well.

The fact that electrons interact through their Coulomb repulsion means that an exact wavefunction for a multi-electron system would be a single function that depends *simultaneously* upon the coordinates of all the electrons; i.e., {term:a multi-electron wavefunction},

$$ \psi (\vec r _1, \vec r_2, \vec r_3, \vec r_4, \cdots \vec r_n) $$

The modulus squared of such a wavefunction would describe the probability of finding the electrons (though not specific ones) at a designated volume ($V$) in the atom.

$$ p(V)= \int_{V} | \psi (\vec r _1, \vec r_2, \vec r_3, \vec r_4, \cdots \vec r_n) |^2 d\tau $$

All of the electrons are described simultaneously by a multi-electron wavefunction, so the total amount of electron density represented by the wavefunction equals the number of electrons in the atom.

$$ \int_{\text{all space}} | \psi (\vec r _1, \vec r_2, \vec r_3, \vec r_4, \cdots \vec r_i) |^2 d\tau = n $$

Unfortunately, the Coulomb repulsion terms (Equation [ref:eq:6.7.5]) make it impossible to find an exact solution to the Schrödinger equation for many-electron atoms and molecules even for two electrons atoms. We have to rely on approximations and the *orbital approximation* is central to basic chemistry concepts.

:::note [note] The Orbital Approximation

The most basic approximations to the exact solutions to a multi-electron atom Hamiltonian, $\hat{H}$, (Equation [ref:eq:6.7.7]) involve writing a multi-electron wavefunction ($\psi (r_1, r_2, \cdots , r_n)$) as a simple product of single-electron wavefunctions ($\varphi _i (r_i)$ ):

$$ \psi (r_1, r_2, \cdots , r_n) \approx \varphi _1 (r_1) \varphi _2 (r_2) \cdots \varphi _n(r_n) $$ {eq:6.7.8} n=8

or in Dirac notation

$$ |\psi (r_1, r_2, \cdots , r_n) \rangle \approx | \varphi _1 (r_1) \rangle |\varphi _2 (r_2) \rangle \cdots |\varphi _n(r_n) \rangle $$ {eq:6.7.9} n=9

The energy of the atom in the state associated with a specific multi-electron wavefunction ($E$) is obtained from the multi-electron Schrödinger Equation

$$ \hat{H} \psi (r_1, r_2, \cdots , r_n) = E \psi (r_1, r_2, \cdots , r_n) $$

Within the approximation in Equation [ref:eq:6.7.8], $E$ can be expressed sum of the energies of the one-electron components ($\epsilon_i$).

$$ E \approx \sum_i \epsilon_i $$

This is called the {term:orbital approximation}.
:::

By writing the multi-electron wavefunction as a product of single-electron functions (Equations [ref:eq:6.7.8] or [ref:eq:6.7.9]), we conceptually transform a multi-electron atom into a collection of individual electrons located in individual orbitals whose spatial characteristics and energies can be separately identified. For atoms, these single-electron wavefunctions are called *atomic orbitals* and resemble the wavefunctions for hydrogen-like atoms. For molecules, as we will see in the following chapters, these are called *molecular orbitals*. While a great deal can be learned from such an analysis, it is important to keep in mind that such a discrete, compartmentalized picture of the electrons is an approximation, albeit a powerful one.
