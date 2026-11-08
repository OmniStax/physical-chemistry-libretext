<!-- LibreTexts page 13447: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08:_Multielectron_Atoms/8.09:_The_Allowed_Values_of_J_-_the_Total_Angular_Momentum_Quantum_Number -->
# The Allowed Values of J - the Total Angular Momentum Quantum Number

## Learning Objectives {section:objectives}

- Compate two spin-orbit coupling schemes that couple the total spin angular momenta and total orbital angular momenta of a multi-electron spectra

We need to be able to identify the electronic states that result from a given electron configuration and determine their relative energies. An electronic state of an atom is characterized by a specific energy, wavefunction (including spin), electron configuration, total angular momentum, and the way the orbital and spin angular momenta of the different electrons are coupled together. There are two descriptions for the coupling of angular momentum. One is called {term:j-j coupling}, and the other is called {term:L-S coupling}. The j-j coupling scheme is used for heavy elements (z > 40) and the L-S coupling scheme is used for the lighter elements. Only L-S coupling is discussed below.

## L-S Coupling of Angular Momenta

L-S coupling also is called R-S or Russell-Saunders coupling. In L-S coupling, the orbital and spin angular momenta of all the electrons are combined separately

$$ L = \sum _i l_i $$ {eq:8.11.3} n=1

$$ S = \sum _i s_i $$ {eq:8.11.4} n=2

The total angular momentum vector then is the sum of the total orbital angular momentum vector and the total spin angular momentum vector.

$$ J = L + S $$ {eq:8.11.5} n=3

The total angular momentum quantum number parameterizes the total angular momentum of a given particle, by combining its orbital angular momentum and its intrinsic angular momentum (i.e., its spin). Due to the spin-orbit interaction in the atom, the orbital angular momentum no longer commutes with the Hamiltonian, nor does the spin.

> FIGURE {fig:8.9.1} src=media/90875-379px-LS_coupling.svg.png width=321px
> alt: 3D geometric illustration of two cones: one purple and one green, showing labeled points and lines.
> caption: "Vector cones" of total angular momentum $J$ (purple), orbital $L$ (blue), and spin $S$ (green). The cones arise due to quantum uncertainty between measuring angular momentum components (see vector model of the atom). (Public Domain; Maschen).

However the total angular momentum $J$ does commute with the Hamiltonian and so is a constant of motion (does not change in time). The relevant definitions of the angular momenta are:

{term:Orbital Angular Momentum}

$$ |\vec{L}| = \hbar \sqrt{\ell(\ell+1)} $$

with its projection on the z-axis

$$ L_z = m_\ell \hbar $$

{term:Spin Angular Momentum}

$$ |\vec{S}| = \hbar \sqrt{s(s+1)} $$

with its projection on the z-axis

$$ S_z = m_s \hbar $$

{term:Total Angular Momentum}

$$ |\vec{J}| = \hbar \sqrt{j(j+1)} $$

with its projection on the z-axis

$$ J_z = m_j \hbar $$

where

- $l$ is the azimuthal quantum number of a single electron,
- $s$ is the spin quantum number intrinsic to the electron,
- $j$ is the total angular momentum quantum number of the electron,

The quantum numbers take the values:

$$ \begin{align} & m_\ell \in \{ -\ell, -(\ell-1) \cdots \ell-1, \ell \} , \quad \ell \in \{ 0,1 \cdots n-1 \} \\& m_s \in \{ -s, -(s-1) \cdots s-1, s \} , \\& m_j \in \{ -j, -(j-1) \cdots j-1, j \} , \\& m_j=m_\ell+m_s, \quad j=|\ell+s|\\\end{align} $$ n=4

and the magnitudes are:

$$ \begin{align} & |\textbf{J}| = \hbar\sqrt{j(j+1)} \\& |\textbf{J}_1| = \hbar\sqrt{j_1(j_1+1)} \\& |\textbf{J}_2| = \hbar\sqrt{j_2(j_2+1)} \\\end{align} $$ n=5

in which

$$ j \in \{ |j_1 - j_2|, |j_1 - j_2| - 1 \cdots j_1 + j_2 - 1, j_1 + j_2 \} \,\! $$

This process may be repeated for a third electron, then the fourth etc. until the total angular momentum has been found.

> FIGURE {fig:8.9.2} src=media/90876-Has.png width=716px
> alt: Diagrams comparing orbital and spin-up (left) and orbital and spin-down (right) configurations with 3D coordinate axes.
> caption: Vector model of total angular momentum: spin and orbital coupling (spin-1/2 particles). (Public Domain; Maschen).

The result of these vector sums is specified in a code that is called a Russell-Saunders term symbol, and each term symbol identifies an energy level of the atom. Consequently, the energy levels also are called terms. A term symbol has the form $^{2s+1} L_J$ where the code letter that is used for the total orbital angular momentum quantum number L = 0, 1, 2, 3, 4, 5 is S, P, D, F, G, H, respectively. Note how this code matches that used for the atomic orbitals. The superscript $2S+1$ gives the spin multiplicity of the state, where S is the total spin angular momentum quantum number. The spin multiplicity is the number of spin states associated with a given electronic state. In order not to confuse the code letter S for the orbital angular momentum with the spin quantum number S, you must examine the context in which it is used carefully. In the term symbol, the subscript J gives the total angular momentum quantum number. Because of spin-orbit coupling, only $J$ and $M_j$ are valid quantum numbers, but because the spin-orbit coupling is weak $L$, $M_l$, $S$, and $m_s$ still serve to identify and characterize the states for the lighter elements.

For example, the ground state, i.e. the lowest energy state, of the hydrogen atom corresponds to the electron configuration in which the electron occupies the 1s spatial orbital and can have either spin $\alpha$ or spin $\beta$. The term symbol for the ground state is $^2 S_{1/2}$, which is read as “doublet S 1/2”. The spin quantum number is 1/2 so the superscript 2S+1 = 2, which gives the spin multiplicity of the state, i.e. the number of spin states equals 2 corresponding to $\alpha$ and $\beta$. The S in the term symbol indicates that the total orbital angular momentum quantum number is 0 (For the ground state of hydrogen, there is only one electron and it is in an s-orbital with $l = 0$ ). The subscript ½ refers to the total angular momentum quantum number. The total angular momentum is the sum of the spin and orbital angular momenta for the electrons in an atom. In this case, the total angular momentum quantum number is just the spin angular momentum quantum number, ½, since the orbital angular momentum is zero. The ground state has a degeneracy of two because the total angular momentum can have a z-axis projection of $+\frac {1}{2} \hbar$ or $-\frac {1}{2} \hbar$, corresponding to $m_J$ = +1/2 or -1/2 resulting from the two electron spin states $\alpha$ and $\beta$. We also can say, equivalently, that the ground state term or energy level is two-fold degenerate.

:::exercise {exr:8.9.1}

Write the term symbol for a state that has 0 for both the spin and orbital angular momentum quantum numbers.
:::

:::exercise {exr:8.9.2}

Write the term symbol for a state that has 0 for the spin and 1 for the orbital angular momentum quantum numbers
:::
