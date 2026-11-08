<!-- LibreTexts page 13474: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/10:_Bonding_in_Polyatomic_Molecules/10.05:_The_pi-Electron_Approximation_of_Conjugation_(Huckel_Theory) -->
# The pi-Electron Approximation of Conjugation (Hückel Theory)

## Learning Objectives {section:objectives}

- Demonstrate how Hü​ckel's theory approximates the full molecular orbital picture of molecules by treating the $\sigma$-bonding and $\pi$-bonding networks independently.

Molecular orbital theory has been very successfully applied to large conjugated systems, especially those containing chains of carbon atoms with alternating single and double bonds. An approximation introduced by Hü​ckel in 1931 considers only the delocalized *p* electrons moving in a framework of $\pi$-bonds. This is, in fact, a more sophisticated version of a free-electron model.

The simplest hydrocarbon to consider that exhibits $\pi$ bonding is ethylene (ethene), which is made up of four hydrogen atoms and two carbon atoms. Experimentally, we know that the $\ce{H–C–H}$ and $\ce{H–C–C}$ angles in ethylene are approximately 120°. This angle suggests that the carbon atoms are *sp*<sup>2</sup> hybridized, which means that a singly occupied *sp*<sup>2</sup> orbital on one carbon overlaps with a singly occupied *s* orbital on each H and a singly occupied *sp*<sup>2</sup> lobe on the other C. Thus each carbon forms a set of three $\sigma$ bonds: two C–H (*sp*<sup>2</sup> + *s*) and one C–C (*sp*<sup>2</sup> + *sp*<sup>2</sup>) (part a of Figure 10.5.1).

> FIGURE {fig:10.5.1} src=media/345964-10.5.1_(1).svg width=811px
> alt: Diagram illustrating molecular structures, with annotated electron density and bond representations.
> caption: (a) The σ-bonded framework is formed by the overlap of two sets of singly occupied carbon sp<sup>2</sup> hybrid orbitals and four singly occupied hydrogen 1s orbitals to form electron-pair bonds. This uses 10 of the 12 valence electrons to form a total of five $σ$ bonds (four C–H bonds and one C–C bond). (b) One singly occupied unhybridized 2p<sub>*z*</sub> orbital remains on each carbon atom to form a carbon–carbon $π$ bond. (Note: by convention, in planar molecules the axis perpendicular to the molecular plane is the *z*-axis.) (CC BY-NC; Ümit Kaya via LibreTexts)

The Hückel approximation is used to determine the energies and shapes of the $\pi$ molecular orbitals in conjugated systems. Within the Hückel approximation, the covalent bonding in these hydrocarbones can be separated into two independent "frameworks": the $\sigma$-bonding framework and the the $\sigma$-bonding framework. The wavefunctions used to describe the bonding orbitals in each framework results from different combinations of atomic orbitals. The method limits itself to addressing conjugated hydrocarbons and specifically only $\pi$ electron molecular orbitals are included because these determine the general properties of these molecules; the sigma electrons are ignored. This is referred to as *sigma-pi separability* and is justified by the orthogonality of $\sigma$ and $\pi$ orbitals in planar molecules. For this reason, the Hückel method is limited to planar systems. Hückel approximation assumes that the electrons in the $\pi$ bonds “feel” an electrostatic potential due to the entire $\sigma$-bonding framework in the molecule (i.e. it focuses only on the formation of $\pi$ bonds, given that the $\sigma$ bonding framework has already been formed).

:::note [note] Conjugated Systems

A conjugated system has a region of overlapping p-orbitals, bridging the interjacent single bonds, that allow a *delocalization* of $\pi$ electrons across all the adjacent aligned p-orbitals. These $\pi$ electrons do not belong to a single bond or atom, but rather to a group of atoms.
:::

## Ethylene

Before considering the Hückel treatment for ethylene ($\ce{C2H4}$), it is beneficial to review the general bonding picture of the molecule. Bonding in ethylene involves the $sp^2$ hybridization of the $2s$, $2p_x$, and $2p_y$ atomic orbitals on each carbon atom; leaving the $2p_z$ orbitals untouched (Figure 10.5.2).

> FIGURE {fig:10.5.2} src=media/345960-10.5.2.svg width=512px
> alt: A diagram showing various geometric shapes in orange and blue, including circles, ovals, and rectangles arranged in different configurations.
> caption: Hybridizing of the carbon atomic orbitals to give $sp^2$ hybrid orbitals for bonding to hydrogen atoms in ethylene. (CC BY-NC; Ümit Kaya via LibreTexts)

The use of hybrid orbitals in the molecular orbital approach describe here is merely a convenience and not invoking valence bond theory (directly). An identical description can be extracted using exclusively atomic orbitals on carbon, but the interpretation of the resulting wavefunctions is less intuitive. For example, the i<sup>th</sup> molecular orbital can be described via hybrid orbitals

$$ | \psi_1\rangle = c_1 | sp^2_1 \rangle + c_2 | 1s_a \rangle $$

or via atomic orbitals.

$$ | \psi_1\rangle = a_1 | 2s \rangle + a_1 | 2p_x \rangle + a_1 | 2p_y \rangle + a_4| 1s_a \rangle $$

where $\{a_i\}$ and $\{c_i\}$ are coefficients of the expansion. Either describe will work and both are identical approaches since

$$ | sp^2_1 \rangle = b_1 | 2s \rangle + b_1 | 2p_x \rangle + b_1 | 2p_y \rangle $$

where $\{c_i\}$ are coefficients describing the hybridized orbital.

The bonding occurs via the mixing of the electrons in the $sp^2$ hybrid orbitals on carbon and the electrons in the $1s$ atomic orbitals of the four hydrogen atoms (Figure 10.5.1; left) resulting in the $\sigma$-bonding framework. The $\pi$-bonding framework results from the unhybridized $2p_z$ orbitals (Figure 10.5.2; right). The independence of these two frameworks is demonstrated in the resulting molecular orbital diagram in Figure 10.5.3; Hückel theory is concerned only with describing the molecular orbitals and energies of the $\pi$ bonding framework.

> FIGURE {fig:10.5.3} src=media/346393-10.5.3_(2).svg width=529px
> alt: Diagram depicting a geometric shape with labeled dimensions and various dashed and solid lines in multiple colors.
> caption: Molecular orbitals demonstrating the sigma-pi separability of the $\pi$-bonding framework (blue) and the $\sigma$-bonding frameworks (red) of ethylene. (CC BY-NC; Ümit Kaya via LibreTexts)

> *Hückel treatment is concerned only with describing the molecular orbitals and energies of the $\pi$ bonding framework.*

Since Hückel theory is a special consideration of molecular orbital theory, the molecular orbitals $| \psi_i \rangle$ can be described as a linear combination of the $2p_z$ atomic orbitals $\phi$ at carbon with their corresponding $\{c_i\}$ coefficients:

$$ | \psi_i \rangle =c_1 | \phi_{1} \rangle +c_2 | \phi_2 \rangle $$ {eq:LCAO} n=1

This equation is substituted in the Schrödinger equation:

$$ \hat{H} | \psi_i \rangle =E_i | \psi_i \rangle $$

with $\hat{H}$ the Hamiltonian and $E_i$ the energy corresponding to the molecular orbital to give:

$$ \hat{H} c_{1} | \phi _{1} \rangle +\hat{H} c_{2} | \phi _{2} \rangle =E c_{1} | \phi _{1} \rangle +E c_{2} | \phi _{2} \rangle $$ {eq:SEq} n=2

If Equation [ref:eq:SEq] is multiplied by $\langle \phi _{1}|$ (and integrated), then

$$ c_1(H_{11} - ES_{11}) + c_2(H_{12} - ES_{12}) = 0 $$ {eq:Eq1} n=3

where $H_{ij}$ are the Hamiltonian matrix elements (see note below)

$$ H_{ij} = \langle \phi_i | \hat{H} | \phi_j \rangle = \int \phi _{i}H\phi _{j}\mathrm {d} v $$

and $S_{ij}$ are the overlap integrals.

$$ S_{ij}= \langle \phi_i | \phi_j \rangle = \int \phi _{i}\phi _{j}\mathrm {d} v $$

If Equation [ref:eq:SEq] is multiplied by $\langle \phi _{2} |$ (and integrated), then

$$ c_1(H_{21} - ES_{21}) + c_2(H_{22} - ES_{22}) = 0 $$ {eq:Eq2} n=4

Both Equations [ref:eq:Eq1] and [ref:eq:Eq2] can better represented in matrix notation,

$$ {\begin{bmatrix}c_{1}(H_{11}-ES_{11})+c_{2}(H_{12}-ES_{12})\\c_{1}(H_{21}-ES_{21})+c_{2}(H_{22}-ES_{22})\\\end{bmatrix}}=0 $$

or more simply as a product of matrices.

$$ \begin{bmatrix} H_{11} - ES_{11} & H_{12} - ES_{12} \\ H_{21} - ES_{21} & H_{22} - ES_{22} \\ \end{bmatrix} \times \begin{bmatrix} c_1 \\ c_2 \\ \end{bmatrix}= 0 $$ {eq:master} n=5

All diagonal Hamiltonian integrals $H_{ii}$ are called {term:Coulomb integrals} and those of type $H_{ij}$ are called {term:resonance integrals}. Both integrals are negative and the resonance integrals determines the strength of the bonding interactions. The equations described by Equation [ref:eq:master] are called the *{term:secular equations}* and will also have the trivial solution of

$$ c_1 = c_2 = 0 $$

Within linear algebra, the secular equations in Equation [ref:eq:master] will also have a non-trivial solution, if and only if, the secular determinant is zero

$$ \left| \begin{array} {cc} H_{11} - ES_{11} & H_{12} - ES_{12} \\ H_{21} - ES_{21} & H_{22} - ES_{22} \\ \end{array}\right| = 0 $$ {eq:SecDet} n=6

or in shorthand notation

$$ \text{det}(H -ES) =0 $$

Everything in Equation [ref:eq:SecDet] is a known number except $E$. Since the secular determinant for ethylene is a $2 \times 2$ matrix, finding $E$, requires solving a quadratic equation (after expanding the determinant)

$$ ( H_{11} - ES_{11} ) ( H_{22} - ES_{22} ) - ( H_{21} - ES_{21} )( H_{12} - ES_{12} ) = 0 $$

There will be two values of $E$ which satisfy this equation and they are the molecular orbital energies. For ethylene, one will be the bonding energy and the other the antibonding energy for the $\pi$-orbitals formed by the combination of the two carbon $2p_z$ orbitals (Equation [ref:eq:LCAO]). However, if more than two $| \phi \rangle$ atomic orbitals were used, e.g., in a bigger molecule, then more energies would be estimated by solving the secular determinant.

Solving the secular determinant is simplified within Hückel method via the following four assumptions:

1. All overlap integrals $S_{ij}$ are set equal to zero. This is quite reasonable since the $\pi-$ orbitals are directed perpendicular to the direction of their bonds (Figure 10.5.1). This assumption is often call neglect of differential overlap (NDO).
2. All resonance integrals $H_{ij}$ between non-neighboring atoms are set equal to zero.
3. All resonance integrals $H_{ij}$ between neighboring atoms are equal and set to $\beta$.
4. All coulomb integrals $H_{ii}$ are set equal to $\alpha$.

These assumptions are mathematically expressed as

$$ H_{11}=H_{22}=\alpha $$

$$ H_{12}=H_{21}=\beta $$

Assumptions 1 means that the overlap integral between the two atomic orbitals is 0

$$ S_{11}=S_{22}=1 $$

$$ S_{12}=S_{21}=0 $$

:::note [note] Matrix Representation of the Hamiltonian

The Coulomb integrals

$$ H_{ii}= \langle \phi _i|H| \phi _i \rangle $$

and resonance integrals.

$$ H_{ij}= \langle \phi _i|H| \phi _j \rangle \,\,\, (i \neq i) $$

are often described within the matrix representation of the Hamiltonian (specifically within the $| \phi \rangle$ basis):

$$ \hat{H} = \begin{bmatrix} H_{11} & H_{12} \\ H_{21} & H_{22} \end {bmatrix} $$

or within the Hückel assumptions

$$ \hat{H} = \begin{bmatrix} \alpha & \beta \\ \beta & \alpha \end {bmatrix} $$
:::

The Hückel assumptions reduces Equation [ref:eq:master] in two homogeneous equations:

$$ \begin{bmatrix} \alpha - E & \beta \\ \beta & \alpha - E \\ \end{bmatrix} \times \begin{bmatrix} c_1 \\ c_2 \\ \end{bmatrix}= 0 $$ {eq:Eq12} n=7

if Equation [ref:eq:Eq12] is divided by $\beta$:

$$ \begin{bmatrix} \dfrac{\alpha - E}{\beta} & 1 \\ 1 & \dfrac{\alpha - E}{\beta} \\ \end{bmatrix} \times \begin{bmatrix} c_1 \\ c_2 \\ \end{bmatrix}= 0 $$

and then a new variable $x$ is defined

$$ x = \dfrac {\alpha -E}{\beta} $$ {eq:new} n=8

then Equation [ref:eq:Eq12] simplifies to

$$ \begin{bmatrix} x & 1 \\ 1 & x \\ \end{bmatrix} \times \begin{bmatrix} c_1 \\ c_2 \\ \end{bmatrix}= 0 $$ {eq:seceq} n=9

The trivial solution gives both wavefunction coefficients equal to zero and the other (non-trivial) solution is determined by solving the secular determinant

$$ \begin{vmatrix}x&1\\1&x\\\end{vmatrix}=0 $$

which when expanded is $x^{2}-1=0$ so $x=\pm 1$.

Knowing that $E=\alpha -x\beta$ from Equation [ref:eq:new], the energy levels can be found to be

$$ E=\alpha -\pm 1\times \beta $$

or

$$ E=\alpha \mp \beta $$

Since $\beta$ is negative, the two energies are ordered (Figure 10.5.4)

- For $\pi_1$: $E_1 =\alpha + \beta$
- For $\pi_2$: $E_2 =\alpha - \beta$

> FIGURE {fig:10.5.4} src=media/345963-10.5.4.svg
> alt: Diagram showing a vertical green line with a blue rectangle at the top and a horizontal blue line intersected by arrows indicating movement.
> caption: $\pi$ energies of ethylene with occupation. (CC BY-NC; Ümit Kaya via LibreTexts)

To extract the coefficients attributed to these energies, the corresponding $x$ values can be substituted back into the Secular Equations (Equation [ref:eq:seceq]). For the lower energy state ($x=-1$)

$$ \begin{bmatrix} -1 & 1 \\ 1 & -1 \\ \end{bmatrix} \times \begin{bmatrix} c_1 \\ c_2 \\ \end{bmatrix}= 0 $$

This gives $c_1=c_2$ and the molecular orbitals attributed to this energy is then (based off of Equation [ref:eq:LCAO]):

$$ |\psi_1 \rangle = N_1 (\phi_1 \rangle + | \phi_2 \rangle ) $$ {eq:HOMO} n=10

where $N_1$ is the normalization constant for this molecular orbital; this is the {term:bonding} molecular orbital.

For the higher energy molecular orbital ($x=-1$) and then

$$ \begin{bmatrix} 1 & 1 \\ 1 & 1 \\ \end{bmatrix} \times \begin{bmatrix} c_1 \\ c_2 \\ \end{bmatrix}= 0 $$

This gives $c_1=-c_2$ and the molecular orbitals attributed to this energy is then (based off of Equation [ref:eq:LCAO]):

$$ \psi_2 \rangle = N_2 (\phi_1 \rangle - | \phi_2 \rangle ) $$ {eq:LUMO} n=11

where $N_2$ is the normalization constant for this molecular orbital; this is the {term:anti-bonding} molecular orbital.

The normalization constants for both molecular orbitals can obtained via the standard normalization approach (i.e., $\langle \psi_i | \psi_i \rangle =1$) to obtain

$$ N_1 = N_2 = \dfrac{1}{\sqrt{2}} $$

These molecular orbitals form the $\pi$-bonding framework and since each carbon contributes one electron to this framework, only the lowest molecular orbital ($| \psi_1 \rangle$) is occupied (Figure 10.5.5) in the ground state. The corresponding electron configuration is then $\pi_1^2$.

> FIGURE {fig:10.5.5} src=media/345962-10.5.5.svg
> alt: Diagram illustrating a comparison of two structures, featuring orange hourglass shapes and surrounding blue boxes.
> caption: Schemetic representation of the $\pi$ molecular orbitals framework for ethylene . Notice that the antibonding molecular orbital has one more node than the bonding molecular orbital as expected since it is higher in energy. (CC BY-NC; Ümit Kaya via LibreTexts)

> *HOMO and LUMO are acronyms for highest occupied molecular orbital and lowest unoccupied molecular orbital, respectively and are often referred to as frontier orbitals. The energy difference between the HOMO and LUMO is termed the HOMO–LUMO gap.*

Ψ = 1 2 ( ϕ 1 + ϕ 2 ) \psi ={\dfrac {1}{\sqrt {2}}}(\phi _{1}+\phi _{2})\,} The 3-D calculated $\pi$ molecular orbitals are shown in Figure 10.5.6.

> FIGURE {fig:10.5.6} src=media/78098-150px-Ethylene-HOMO-Spartan-3D-balls.png width=150px
> alt: 3D molecular structure showing two colored lobes (blue and red) with two white spheres representing atoms in between.
> part src=media/78097-150px-Ethylene-LUMO-Spartan-3D-balls.png width=171px
> alt: 3D model of a molecule with red and blue lobes representing electron clouds, connected by a black bond and gray spheres.
> caption: Calculated $\pi$ molecular orbitals for ethylene . (left) the bonding orbital (|\psi_1 \rangle\) and (right) the antibonding $(|\psi_2 \rangle$ orbital.

:::note [note] Limitations of Hückel Theory

Hückel theory was developed in the 1930's when computers were unavailable and a simple mathematical approaches were very important for understanding experiment. Although the assumptions in Hückel theory are drastic they enabled the early calculations of molecular orbitals to be performed with mechanical calculators or by hand. Hückel Theory can be extended to address other types of atoms in conjugated molecules (e.g., nitrogen and oxygen). Moreover, it can be extended to also treat $\sigma$ orbitals and this "Extended Hückel Theory" is still used today. Despite the utility of Hückel Theory, it is highly qualitative and we should remember the limitations of Hückel Theory:

- Hückel Theory is very approximate
- Hückel Theory cannot calculate energies accurately (electron-electron repulsion is not calculated)
- Hückel Theory typically overestimates predicted dipole moments

Hückel Theory is best used to provide simplified models for understanding chemistry and for a detailed understanding modern *ab initio* molecular methods discussed in Chapter 11 are needed.
:::
