<!-- LibreTexts page 433985: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/12:_Group_Theory_-_The_Exploitation_of_Symmetry/12.15:_Molecular_Orbitals_can_be_Constructed_on_the_Basis_of_Symmetry -->
# Molecular Orbitals can be Constructed on the Basis of Symmetry

## Bonding in Diatomics

You will already be familiar with the idea of constructing molecular orbitals from linear combinations of atomic orbitals from previous courses covering bonding in diatomic molecules. By considering the symmetries of $s$ and $p$ orbitals on two atoms, we can form {term:bonding} and {term:antibonding} combinations labeled as having either $\sigma$ or $\pi$ symmetry depending on whether they resemble $s$ or $p$ orbitals when viewed along the bond axis (see diagram below). In all of the cases shown, only atomic orbitals that have the same symmetry when viewed along the bond axis $z$ can form a chemical bond e.g. two $s$ orbitals, two $p_z$ orbitals , or an $s$ and a $p_z$ can form a bond, but a $p_z$ and a $p_x$ or an $s$ and a $p_x$ or a $p_y$ cannot. It turns out that the rule that determines whether or not two atomic orbitals can bond is that *they must belong to the same symmetry species within the point group of the molecule*.

We can prove this mathematically for two atomic orbitals $\phi_i$<sub> </sub>and $\phi_j$ by looking at the overlap integral between the two orbitals.

$$ S_{ij} = \langle \phi_i|\phi_j \rangle = \int \phi_i^* \phi_j d\tau \: \: \: \: \: \: \: \: \: \: \: \: \: \: \: \: \text(18.1) $$

In order for bonding to be possible, this integral must be non-zero. The product of the two functions $\phi_1$ and $\phi_2$ transforms as the direct product of their symmetry species i.e. $\Gamma_{12}$ = $\Gamma_1 \otimes \Gamma_2$. As explained above, for the overlap integral to be non-zero, $\Gamma_{12}$ must contain the totally symmetric irreducible representation ($A_{1g}$ for a homonuclear diatomic, which belongs to the point group $D_{\infty h}$). As it happens, this is only possible if $\phi_1$ and$\phi_2$ belong to the same irreducible representation. These ideas are summarized for a diatomic in the table below.

$$ \begin{array}{lllll} \hline \text{First Atomic Orbital} & \text{Second Atomic Orbital} & \Gamma_1 \otimes \Gamma_2 & \text{Overlap Integral} & \text{Bonding?} \\ \hline s \: (A_{1g}) & s \: (A_{1g}) & A_{1g} & \text{Non-zero} & \text{Yes} \\ s \: (A_{1g}) & p_x \: (E_{1u}) & E_{1u} & \text{Zero} & \text{No} \\ s \: (A_{1g}) & p_z \: (A_{1u}) & A_{1u} & \text{Zero} & \text{No} \\ p_x \: (E_{1u}) & p_x \: (E_{1u}) & A_{1g} + A_{2g} + E_{2g} & \text{Non-zero} & \text{Yes} \\ p_X \: (E_{1u}) & p_z \: (A_{1u}) & E_{1g} & \text{Zero} & \text{No} \\ p_z \: (A_{1u}) & p_z \: (A_{1u}) & A_{1g} & \text{Non-zero} & \text{Yes} \end{array} \tag{18.2} $$

## Bonding in Polyatomics- Constructing Molecular Orbitals from SALCs

In the previous section we showed how to use symmetry to determine whether two atomic orbitals can form a chemical bond. How do we carry out the same procedure for a polyatomic molecule, in which many atomic orbitals may combine to form a bond? Any SALCs of the same symmetry could potentially form a bond, so all we need to do to construct a molecular orbital is take a linear combination of all the SALCs of the same symmetry species. The general procedure is:

1. Use a basis set consisting of valence atomic orbitals on each atom in the system.
2. Determine which irreducible representations are spanned by the basis set and construct the SALCs that transform as each irreducible representation.
3. Take linear combinations of irreducible representations of the same symmetry species to form the molecular orbitals. E.g. in our $NH_3$ example we could form a molecular orbital of $A_1$ symmetry from the two SALCs that transform as $A_1$,

$$ \begin{array}{rcl} \Psi(A_1) & = & c_1 \phi_1 + c_2 \phi_2 \\ & = & c_1 s_N + c_2 \dfrac{1}{\sqrt{3}}(s_1 + s_2 + s_3) \end{array} \tag{19.1} $$

Unfortunately, this is as far as group theory can take us. It can give us the functional form of the molecular orbitals but it cannot determine the coefficients $c_1$ and $c_2$. To go further and obtain the expansion coefficients and orbital energies, we must turn to quantum mechanics. The material we are about to cover will be repeated in greater detail in later courses on quantum mechanics and valence, but they are included here to provide you with a complete reference on how to construct molecular orbitals and determine their energies.

## Summary of the Steps Involved in Constructing Molecular Orbitals

1. Choose a basis set of functions $f_i$ consisting of the valence atomic orbitals on each atom in the system, or some chosen subset of these orbitals.
2. With the help of the appropriate character table, determine which irreducible representations are spanned by the basis set using Equation (15.20) to determine the number of times $a_k$ that the $k^{th}$ irreducible representation appears in the representation.
   
   $$ a_k = \dfrac{1}{h}\sum_C n_C \chi(g) \chi_k(g) $$ {eq:22.1} n=1
3. Construct the SALCs $\phi_i$ that transform as each irreducible representation using Equation 16.1
   
   $$ \phi_i = \sum_g \chi_k(g) g f_i $$ {eq:22.2} n=2
4. Write down expressions for the molecular orbitals by taking linear combinations of all the irreducible representations of the same symmetry species.
5. Write down the secular equations for the system.
6. Solve the secular determinant to obtain the energies of the molecular orbitals.
7. Substitute each energy in turn back into the secular equations and solve to obtain the coefficients appearing in your molecular orbital expressions in step 4.
8. Normalize the orbitals.

## A more complicated bonding example

As another example, we will use group theory to construct the molecular orbitals of $H_2O$ (point group $C_{2v}$) using a basis set consisting of all the valence orbitals. The valence orbitals are a $1s$ orbital on each hydrogen, which we will label $s_H$ and $s_H'$, and a $2s$ and three $2p$ orbitals on the oxygen, which we will label $s_O$, $p_x$, $p_y$, $p_z$ giving a complete basis $\begin{pmatrix} s_H, s_H', s_O, p_x, p_y, p_z \end{pmatrix}$.

The first thing to do is to determine how each orbital transforms under the symmetry operations of the $C_{2v}$ point group ($E$, $C_2$, $\sigma_v$ and $\sigma_v'$), construct a matrix representation and determine the characters of each operation. The symmetry operations and axis system we will be using are shown below.

![Diagram of a molecular structure showing atoms and axes labeled x, y, and z, with symmetry planes indicated.](media/61171-Screenshot_23-1.png)

The orbitals transform in the following way

$$ \begin{array}{lrcl} E & \begin{pmatrix} s_H, s_H', s_O, p_x, p_y, p_z \end{pmatrix} & \rightarrow & \begin{pmatrix} s_H, s_H', s_O, p_x, p_y, p_z \end{pmatrix} \\ C_2 & \begin{pmatrix} s_H, s_H', s_O, p_x, p_y, p_z \end{pmatrix} & \rightarrow & \begin{pmatrix} s_H', s_H, s_O, -p_x, -p_y, p_z \end{pmatrix} \\ \sigma_v(xz) & \begin{pmatrix} s_H, s_H', s_O, p_x, p_y, p_z \end{pmatrix} & \rightarrow & \begin{pmatrix} s_H, s_H', s_O, p_x, -p_y, p_z \end{pmatrix} \\ \sigma_v'(yz) & \begin{pmatrix} s_H, s_H', s_O, p_x, p_y, p_z \end{pmatrix} & \rightarrow & \begin{pmatrix} s_H', s_H, s_O, -p_x, p_y, p_z \end{pmatrix} \end{array} $$ {eq:23.1} n=3

## A short aside on constructing matrix representatives

After a little practice, you will probably be able to write matrix representatives straight away just by looking at the effect of the symmetry operations on the basis. However, if you are struggling a little the following procedure might help.

Remember that the matrix representatives are just the matrices we would have to multiply the left hand side of the above equations by to give the right hand side. In most cases they are very easy to work out. Probably the most straightforward way to think about it is that each column of the matrix shows where one of the original basis functions ends up. For example, the first column transforms the basis function $s_H$ to its new position. The first column of the matrix can be found by taking the result on the right hand side of the above expressions, replacing every function that *isn’t* $s_H$ with a zero, putting the coefficient of $s_H$ ($1$ or $-1$ in this example) in the position at which it occurs, and taking the transpose to give a column vector.

:::example {ex:?} Rotation

Consider the representative for the $C_2$ operation. The original basis $\begin{pmatrix} s_H, s_H', s_O, p_x, p_y, p_z \end{pmatrix}$ transforms into $\begin{pmatrix} s_H', s_H, s_O, -p_x, -p_y, p_z \end{pmatrix}$. The first column of the matrix therefore transforms $s_H$<sub> </sub>into $s_H'$. Taking the result and replacing all the other functions with zeroes gives $\begin{pmatrix} 0, s_H, 0, 0, 0, 0 \end{pmatrix}$. The coefficient of $s_H$ is $1$, so the first column of the $C_2$ matrix representative is

$$ \begin{pmatrix} 0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \end{pmatrix} $$ {eq:23.2} n=4
:::

## Matrix representation, characters and SALCs

The matrix representatives and their characters are

$$ \begin{array}{cccc} E & C_2 & \sigma_v & \sigma_v' \\ \scriptsize{\begin{pmatrix} 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 1 \end{pmatrix}} & \scriptstyle{\begin{pmatrix} 0 & 1 & 0 & 0 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & -1 & 0 & 0 \\ 0 & 0 & 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 1 \end{pmatrix}} & \scriptstyle{\begin{pmatrix} 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 &1 & 0 & 0 \\ 0 & 0 & 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 1 \end{pmatrix}} & \scriptstyle{\begin{pmatrix} 0 & 1 & 0 & 0 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & -1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 1 \end{pmatrix}} \\ \chi(E) = 6 & \chi(C_2) = 0 & \chi(\sigma_v) = 4 & \chi(\sigma_v') = 2 \end{array} $$ {eq:23.3} n=5

Now we are ready to work out which irreducible representations are spanned by the basis we have chosen. The character table for $C_{2v}$<sub> </sub>is:

$$ \begin{array}{l|cccc|l} C_{2v} & E & C_2 & \sigma_v & \sigma_v' & h = 4 \\ \hline A_1 & 1 & 1 & 1 & 1 & z, x^2, y^2, z^2 \\ A_2 & 1 & 1 & -1 & -1 & xy, R_z \\ B_1 & 1 & -1 & 1 & -1 & x, xz, R_y \\ B_2 & 1 & -1 & -1 & 1 & y, yz, R_x \\ \hline \end{array} $$

As before, we use Equation (15.20) to find out the number of times each irreducible representation appears.

$$ a_k = \dfrac{1}{h}\sum_C n_C \chi(g) \chi_k(g) $$ {eq:23.4} n=6

We have

$$ \begin{array}{rcll} a(A_1) & = & \dfrac{1}{4}(1 \times 6 \times 1 + 1 \times 0 \times 1 + 1\times 4\times 1 + 1\times 2\times 1) & = 3 \\ a(A_2) & = & \dfrac{1}{4}(1\times 6\times 1 + 1\times 0\times 1 + 1\times 4\times -1 + 1\times 2\times -1) & = 0 \\ a(B_1) & = & \dfrac{1}{4}(1\times 6\times 1 + 1\times 0\times -1 + 1\times 4\times 1 + 1\times 2\times -1) & = 2 \\ a(B_2) & = & \dfrac{1}{4}(1\times 6\times 1 + 1\times 0\times -1 + 1\times 4\times -1 + 1\times 2\times 1) & = 1 \end{array} $$ {eq:23.5} n=7

so the basis spans $3A_1 + 2B_1 + B_2$. Now we use the projection operators applied to each basis function $f_i$ in turn to determine the SALCs $\phi_i = \Sigma_g \chi_k(g) g f_i$

The SALCs of $A_1$ symmetry are:

$$ \begin{array}{rclll} \phi(s_H) & = & s_H + s_H' + s_H + s_H' & = & 2(s_H + s_H') \\ \phi(s_H') & = & s_H' + s_H + s_H' + s_H & = & 2(s_H + s_H') \\ \phi(s_O) & = & s_O + s_O + s_O + s_O & = & 4s_O \\ \phi(p_x) & = & p_x - p_x + p_x - p_x & = & 0 \\ \phi(p_y) & = & p_y - p_y + p_y - p_y & = & 0 \\ \phi(p_z) & = & p_z + p_z + p_z + p_z & = & 4p_z \end{array} $$ {eq:23.6} n=8

The SALCs of $B_1$ symmetry are:

$$ \begin{array}{rclll} \phi(s_H) & = & s_H - s_H' + s_H - s_H' & = & 2(s_H - s_H') \\ \phi(s_H') & = & s_H' - s_H + s_H' - s_H & = & 2(s_H' - s_H) \\ \phi(s_O) & = & s_O - s_O + s_O - s_O & = & 0 \\ \phi(p_x) & = & p_x + p_x + p_x + p_x & = & 4p_x \\ \phi(p_y) & = & p_y + p_y - p_y - p_y & = & 0 \\ \phi(p_z) & = & p_z - p_z + p_z - p_z & = & 0 \end{array} $$ {eq:23.7} n=9

The SALCs of $B_2$ symmetry are:

$$ \begin{array}{rclll} \phi(s_H) & = & s_H - s_H' -s_H = s_H' & = & 0 \\ \phi(s_H') & = & s_H' - s_H - s_H' + s_H & = & 0 \\ \phi(s_O) & = & s_O - s_O - s_O + s_O & = & 0 \\ \phi(p_x) & = & p_x + p_x - p_x - p_x & = & 0 \\ \phi(p_y) & = & p_y + p_y + p_y + p_y & = & 4p_y \\ \phi(p_z) & = & p_z - p_z - p_z + p_z & = & 0 \end{array} $$ {eq:23.8} n=10

After normalization, our SALCs are therefore:

{term:A<sub>1</sub> symmetry}

$$ \begin{array}{rcl} \phi_1 & = & \dfrac{1}{\sqrt{2}}(s_H + s_H') \\ \phi_2 & = & s_O \\ \phi_3 & = & p_z \end{array} $$ {eq:23.9} n=11

{term:B<sub>1</sub> symmetry}

$$ \begin{array}{rcl} \phi_4 & = & \dfrac{1}{\sqrt{2}}(s_H - s_H') \\ \phi_5 & = & p_x \end{array} $$ {eq:23.10} n=12

{term:B<sub>2</sub> symmetry}

$$ \begin{array}{rcl} \phi_6 & = & p_y \end{array} $$ {eq:23.11} n=13

Note that we only take one of the first two SALCs generated by the $B_1$ projection operator since one is a simple multiple of the other (i.e. they are not linearly independent). We can therefore construct three molecular orbitals of $A_1$ symmetry, with the general form

$$ \begin{array}{rcll} \Psi(A_1) & = & c_1 \phi_1 + c_2 \phi_2 + c_3 \phi_3 & \\ & = & c_1'(s_H + s_H') + c_2 s_O + c_3 p_z & \text{where} \: c_1' = \dfrac{c_1}{\sqrt{2}} \end{array} $$ {eq:23.12} n=14

two molecular orbitals of $B_1$ symmetry, of the form

$$ \begin{array}{rcl} \Psi(B_1) & = & c_4 \phi_4 + c_5 \phi_5 \\ & = & c_4'(s_H - s_H') + c_5 p_z \end{array} $$ {eq:23.13} n=15

and one molecular orbital of $B_2$ symmetry

$$ \begin{array}{rcl} \Psi(B_2) & = & \phi_6 \\ & = & p_y \end{array} $$ {eq:23.14} n=16

To work out the coefficients $c_1$ - $c_5$ and determine the orbital ener![Diagrams of various atomic or molecular structures with associated energy values in electron volts (eV) listed beside each structure.](media/57783-image063.jpg)gies, we would have to solve the secular equations for each set of orbitals in turn. We are not dealing with a conjugated $p$ system, so in this case Hückel theory cannot be used and the various $H_{ij}$ and $S_{ij}$ integrals would have to be calculated numerically and substituted into the secular equations. This involves a lot of tedious algebra, which we will leave out for the moment. The LCAO orbitals determined above are an approximation of the true molecular orbitals of water, which are shown on the right. As we have shown using group theory, the $A_1$ molecular orbitals involve the oxygen $2s$ and $2p_z$ atomic orbitals and the sum $s_H + s_H'$ of the hydrogen $1s$ orbitals. The $B_1$ molecular orbitals involve the oxygen $2p_x$ orbital and the difference $s_H -s_H'$ of the two hydrogen $1s$ orbitals, and the $B_2$ molecular orbital is essentially an oxygen $2p_y$ atomic orbital.

## Electronic transitions in molecules

When an electron is excited from one electronic state to another, this is what is called an electronic transition. A clear example of this is part C in the energy level diagram shown above. Just as in a vibrational transition the selection rules for electronic transitions are dictated by the transition moment integral. However we now must consider both the electronic state symmetries and the vibration state symmetries since the electron will still be coupled between two vibrational states that are between two electronic states. This gives us this modified transition moment integral:

![Transition Moment Integral, electronic.JPG](media/9878-Transition_Moment_Integral,_electronic.JPG)

Where you can see that the symmetry of the initial electronic state & vibrational state are in the Bra and the final electronic and vibrational states are in the Ket. Though this appears to be a modified version of the transition moment integral, the same equation holds true for a vibrational transition. The only difference would be the electronic state would be the same in both the initial and final states. Which the dot product of yields the totally symmetric representation, making the electronic state irrelevant for purely vibrational spectroscopy.

### Raman

In [Resonance Raman spectroscopy](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Spectroscopy/Vibrational_Spectroscopy/Raman_Spectroscopy/Resonant_vs._Nonresonant_Raman_Spectroscopy) transition that occurs is the excitation from one electronic state to another and the selection rules are dictated by the transition moment integral discussed in the electronic spectroscopy segment. However mechanically Raman does produce a vibration like IR, but the selection rules for Raman state there must be a change in the polarization, that is the volume occupied by the molecule must change. But as far as group theory to determine whether or not a transition is allowed one can use the transition moment integral presented in the electronic transition portion. Where one enters the starting electronic state symmetry and vibrational symmetry and final electronic state symmetry and vibrational state, perform the direct product with the different M's or polarizing operators For more information about this topic please explore the Raman spectroscopy portion of the Chemwiki

### Fluorescence

For the purposes of Group Theory Raman and Fluorescence are indistinguishable. They can be treated as the same process and in reality they are quantum mechanically but differ only in how Raman photons scatter versus those of fluorescence.

### Phosphorescence

[Phosphorescence ](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Spectroscopy/Electronic_Spectroscopy/Radiative_Decay/Phosphorescence)is the same as fluorescence except upon excitation to a singlet state there is an interconversion step that converts the initial singlet state to a triplet state upon relaxation. This process is longer than fluorescence and can last microseconds to several minutes. However despite the singlet to triplet conversion the transition moment integral still holds true and the symmetry of ground state and final state still need to contain the totally symmetric representation.

### Symmetry

Assume that we have a molecule in some initial state $\Psi_i$. We want to determine which final states $\Psi_f$ can be accessed by absorption of a photon. Recall that for an integral to be non-zero, the representation for the integrand must contain the totally symmetric irreducible representation. The integral we want to evaluate is

$$ \hat{\boldsymbol{\mu}}_{fi} = \int \Psi_f^* \hat{\boldsymbol{\mu}} \Psi_i d\tau \tag{27.4} $$

so we need to determine the symmetry of the function $\Psi_f^* \hat{\boldsymbol{\mu}} \Psi_i$. As we learned in Section $18$, the product of two functions transforms as the direct product of their symmetry species, so all we need to do to see if a transition between two chosen states is allowed is work out the symmetry species of $\Psi_f$, $\hat{\boldsymbol{\mu}}$ and $\Psi_i$ , take their direct product, and see if it contains the totally symmetric irreducible representation for the point group of interest. Equivalently (as explained in Section $18$), we can take the direct product of the irreducible representations for $\hat{\boldsymbol{\mu}}$ and $\Psi_i$ and see if it contains the irreducible representation for $\Psi_f$. This is best illustrated using a couple of examples.

Earlier in the course, we learned how to determine the symmetry molecular orbitals. The symmetry of an electronic state is found by identifying any unpaired electrons and taking the direct product of the irreducible representations of the molecular orbitals in which they are located. The ground state of a closed-shell molecule, in which all electrons are paired, always belongs to the totally symmetric irreducible representation$^7$. As an example, the electronic ground state of $NH_3$, which belongs to the $C_{3v}$ point group, has $A_1$ symmetry. To find out which electronic states may be accessed by absorption of a photon, we need to determine the irreducible representations for the electric dipole operator $\hat{\boldsymbol{\mu}}$. Light that is linearly polarized along the $x$, $y$, and $z$ axes transforms in the same way as the functions $x$, $y$, and $z$ in the character table$^8$. From the $C_{3v}$ character table, we see that $x$- and $y$-polarized light transforms as $E$, while $z$-polarized light transforms as $A_1$. Therefore:

1. For $x$- or $y$-polarized light, $\Gamma_\hat{\boldsymbol{\mu}} \otimes \Gamma_{\Psi 1}$ transforms as $E \otimes A_1 = E$. This means that absorption of $x$- or $y$-polarized light by ground-state $NH_3$ (see figure below left) will excite the molecule to a state of $E$ symmetry.
2. For $z$-polarized light, $\Gamma_\hat{\boldsymbol{\mu}} \otimes \Gamma_{\Psi 1 }$ transforms as $A_1 \otimes A_1 = A_1$. Absorption of $z$-polarized light by ground state $NH_3$ (see figure below right) will excite the molecule to a state of $A_1$ symmetry.

![Illustration of light polarization: left shows linear polarized light, middle shows circular polarized light.](media/61175-Screenshot_27-1.png)

Of course, the photons must also have the appropriate energy, in addition to having the correct polarization to induce a transition.

We can carry out the same analysis for $H_2O$, which belongs to the $C_{2v}$ point group. We showed previously that $H_2O$ has three molecular orbitals of $A_1$<sub> </sub>symmetry, two of $B_1$ symmetry, and one of $B_2$ symmetry, with the ground state having $A_1$ symmetry. In the $C_{2v}$ point group, $x$-polarized light has $B_1$ symmetry, and can therefore be used to excite electronic states of this symmetry; $y$-polarized light has $B_2$ symmetry, and may be used to access the $B_2$ excited state; and $z$-polarized light has $A_1$ symmetry, and may be used to access higher lying $A_1$ states. Consider our previous molecular orbital diagram for $H_2O$.

![Molecular orbital diagram showing bonding and antibonding levels for H2O, with arrows indicating electron spin.](media/61176-Screenshot_27-2.png)

The electronic ground state has two electrons in a $B_2$ orbital, giving a state of $A_1$ symmetry ($B_2 \otimes B_2 = A_1$). The first excited electronic state has the configuration $(1B_2)^1(3A_1)^1$ and its symmetry is $B_2 \otimes A_1 = B_2$. It may be accessed from the ground state by a $y$-polarized photon. The second excited state is accessed from the ground state by exciting an electron to the $2B_1$ orbital. It has the configuration $(1B_2)^1(2B_1)^1$, its symmetry is $B_2 \otimes B_1 = A_2$. Since neither $x$-, $y$- or $z$-polarized light transforms as $A_2$, this state may not be excited from the ground state by absorption of a single photon.
