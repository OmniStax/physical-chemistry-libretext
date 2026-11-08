<!-- LibreTexts page 13475: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/10:_Bonding_in_Polyatomic_Molecules/10.06:_Butadiene_is_Stabilized_by_a_Delocalization_Energy -->
# Butadiene is Stabilized by a Delocalization Energy

## Learning Objectives {section:objectives}

- Apply Hückel theory to an extended $\pi$-bonding network
- Identify the origin of delocalization energy from Hückel theory and relate it to resonances structures in valence bond theory

1,3-Butadiene is a simple conjugated diene with the formula $\ce{C_4H_6}$ and can be viewed structurally as two vinyl groups ($\ce{CH_2=CH_2}$) joined together with a single bond. Butadiene can occupy either a cis or trans conformers and at room temperature, 96% of butadiene exists as the trans conformer, which is 2.3 kcal/mole more stable than the cis structure.

> IMAGE {img:1} src=media/100559-Butadiène.PNG width=201px
> alt: alt
> caption: trans-1,3-Butadiene

For the simple application of applying Hückel theory for understanding the electronic structure of butadiene, we will ignore the energetic differences between the two conformers. As discussed previously, the molecular orbitals are linear combination of the four $|p \rangle$ atomic orbitals on the carbon atoms that are not participating in the $\sigma$ bonding network:

$$ |\psi_i \rangle = \sum_j^4 c_{ij} |p_{i} \rangle $$

or explicitly

$$ |\psi_i \rangle =c_{i1} |p_1 \rangle+ c_ {i2} | p_2 \rangle + c_ {i3} | p_3 \rangle + c_ {i4} | p_4 \rangle $$ {eq:general} n=1

for the i<sup>th</sup> molecular orbital $|\psi_i \rangle$. The secular equations that need to be solved are

$$ \begin{bmatrix} H_{11} - ES_{11} & H_{12} - ES_{12} & H_{13} - ES_{13} & H_{14} - ES_{14} \\ H_{12} - ES_{12} & H_{22} - ES_{22} & H_{23} - ES_{23} & H_{24} - ES_{24} \\ H_{13} - ES_{13} & H_{23} - ES_{23} & H_{33} - ES_{33} & H_{34} - ES_{34} \\ H_{14} - ES_{14} & H_{24} - ES_{24} & H_{34} - ES_{34} & H_{44} - ES_{44} \\ \end{bmatrix} \times\begin{bmatrix} c_1 \\ c_2 \\ c_3 \\ c_4 \\ \end{bmatrix}= 0 $$ {eq:complete} n=2

If the standard Hückel theory approximations were used

$$ H_{ii}- ES_{ii} = \alpha $$

and

$$ H_{ij}- ES_{ij} = \beta $$

when $i=j\pm 1$, otherwise

$$ H_{ij}- ES_{ij} = 0 $$

then the secular equations for butadiene in Equation [ref:eq:complete] become

$$ \begin{bmatrix} \alpha - E & \beta & 0 & 0 \\ \beta & \alpha - E & \beta & 0 \\ 0 & \beta & \alpha - E & \beta \\ 0 & 0 & \beta & \alpha - E \\ \end{bmatrix} \times\begin{bmatrix} c_1 \\ c_2 \\ c_3 \\ c_4 \\ \end{bmatrix}= 0 $$ {eq:Huckel1} n=3

Solving Equation [ref:eq:Huckel1] for $\{c_i\}$ coefficients and energy secular equation requires extracting the roots of the secular determinant:

$$ \left|\begin{array}{cccc}\alpha-E&\beta&0&0\\\beta&\alpha-E&\beta&0\\0&\beta&\alpha-E&\beta\\0&0&\beta&\alpha-E\end{array}\right|=0 $$ {eq:24} n=4

If both sides of Equation [ref:eq:24] were divided by $\beta^{4}$ and a new variable $x$ is defined

$$ x=\dfrac{\alpha-E}{\beta} $$ {eq:25} n=5

then Equation [ref:eq:24] simplifies further to

$$ \left|\begin{array}{cccc}x&1&0&0\\1&x&1&0\\0&1&x&1\\0&0&1&x\end{array}\right|=0 $$ {eq:26} n=6

This is essentially the connection matrix for the butadiene molecule. Each pair of connected atoms is represented by 1, each non-connected pair by 0 and each diagonal element by $x$. Expansion of the determinant in Equation [ref:eq:26] gives the 4th order polynomial equation

$$ x^{4}-3x^{2}+1=0 $$ {eq:27} n=7

While solving 4th order equations typically require numerical estimation, Equation [ref:eq:27] can be further simplified by recognizing that it is a quadratic equation in terms of $x^{2}$. Therefore, the roots are

$$ x^{2}= \dfrac{3\pm\sqrt{5}}{2} $$

or $x=\pm\; 0.618$ and $x= \pm\; 1.618$. Since $\alpha$ and $\beta$ are negative, these molecular orbital energies can ordered in terms of energy (from lowest to highest):

$$ E_1=\alpha+1.618\beta $$ {eq:E1} n=8

$$ E_2=\alpha+0.618\beta $$ {eq:E2} n=9

$$ E_3=\alpha-0.618\beta $$ {eq:E3} n=10

$$ E_4=\alpha-1.618\beta $$ {eq:E4} n=11

This sequence of energies is displayed in the energy diagram of Figure 10.6.1.

> FIGURE {fig:10.6.1} src=media/78093-=800px-Butadiene-pi-MOs-Spartan-3D-balls.png width=242px
> alt: alt
> caption: The $\pi$ molecular orbital energies from Hückel theory for butadiene with ground-state configuration. Structures calculated and images produced using HF/6-31G* (Public Domain; Ben Mills).

Each p atomic orbital of carbon contributes a single electron to the $\pi$ manifold, so the ground-state occupation of the resulting four $\pi$ electrons have a $\pi_1^{2}\pi_2^{2}$ configuration (Figure 10.6.1). The the total $\pi$-electron energy is then determined by adding up the energies in Equations [ref:eq:E1]-[ref:eq:E4] and scaling by their occupations to get

$$ \begin{align} E_{\pi} (\text{butadiene}) &= 2 \times E_1 + 2 \times E_2 + 0 \times E_3 + 0 \times E_4 \nonumber \\[4pt] &=2(\alpha+1.618\beta)+2(\alpha+0.618\beta) \nonumber \\[4pt] &=4\alpha + 4.472\beta  \end{align} $$ {eq:29} n=12

If the bonding of butadiene were described only as two localized double bond as in its dominant valence-bond structure (Figure 10.6.1), then its $\pi$-electron energy would be given by twice the $E_{\pi}$ predicted for the ethlyene molecule:

$$ \begin{align} E_{\pi} (\text{butadiene}) &= 2 \times E_{\pi} (\text{ethylene}) \nonumber \\[4pt] &=2 \times 2(\alpha+\beta) \nonumber \\[4pt] &= 4\alpha + 4\beta \end{align} $$ {eq:30} n=13

Comparing Equation [ref:eq:29] with Equation [ref:eq:29], the total $\pi$ energy of butadiene lies lower than the total $\pi$ energy of two double bonds by $0.48\beta$ (the $\sigma$ bond does not contribute). This difference is known as the {term:delocalization energy}; a typical estimate of $\beta$ is around -75 kJ/mol, which results in a *delocalization* *energy* for butadiene of -35 kJ/mol.

> The delocalization energy is the extra stabilization resulting from the electrons extending over the whole molecule.

:::note [note] Delocalization Energy in Valence Bond Theory

Delocalization energy is intrinsic to molecular orbital theory, since it results from breaking the two-center bond concept with the molecular orbitals that spread over more that just one pair of atoms. However, within the two-center theory of valence bond theory, the delocalization energy results from a stabilization energy attributed to resonance. Several conventional valence bond resonance structures that can be written for 1,3-butadiene, four of which are shown in Figure 10.6.2. However, while structure $2a$ dominates, the other resonance structures also contribute to describing the total molecule and hence predict a corresponding stabilization energy akin to the delocalization energy in molecular orbital theory.

> FIGURE {fig:10.6.2} src=media/346408-10.6.2.svg width=624px
> alt: A series of interconnected boxes and lines, resembling a flowchart or diagram structure.
> caption: Several resonance structures that can be written for 1,3-butadiene. The resonance structure in the upper left dominates, but does not exclusively describe the system since a delocalization energy is experimentally observed compared to two ethylene molecules. (CC BY-NC; Ümit Kaya via LibreTexts)

In general, the true description of the bonding within the valence bond theory is a superposition of resonance structures with amplitudes that are determined via a variational optimization to find the lowest possible energy for the valence bond wavefunctions.
:::

The solving the secular equations (Equation [ref:eq:complete]) gives the $\{c_{ij}\}$ coefficients for the molecular orbitals in Equation [ref:eq:general] (not demonstrated):

$$ |\psi_1 \rangle =0.37 |p_1 \rangle + 0.60 | p_2 \rangle + 0.60 | p_3 \rangle + 0.37 | p_4 \rangle $$ {eq:MO1} n=14

$$ |\psi_3 \rangle =0.60 |p_1 \rangle + 0.37 | p_2 \rangle -0.37 | p_3 \rangle - 0.60 | p_4 \rangle $$ {eq:MO2} n=15

$$ |\psi_3 \rangle =0.60 |p_1 \rangle - 0.37 | p_2 \rangle -0.37 | p_3 \rangle + 0.60 | p_4 \rangle $$ {eq:MO3} n=16

$$ |\psi_4 \rangle =0.37 |p_1 \rangle - 0.60 | p_2 \rangle + 0.60 | p_3 \rangle - 0.37 | p_4 \rangle $$ {eq:MO4} n=17

These are depicted in Figure 10.6.3.

> FIGURE {fig:10.6.3} src=media/346392-10.6.3.svg width=720px
> alt: Illustration of wave functions displaying nodes and antinodes, with three distinct patterns represented in red and blue.
> caption: Energy level diagram and decomposition of the $\pi$ molecular orbitals of butadiene. This is view three-dimensionally in Figure 10.6.1. (CC BY-NC; Ümit Kaya via LibreTexts)

Note the correlation of the energy of the $\pi$ molecular orbitals of butadiene to the number of nodes in the wavefunction; this is the general trend observed in previous systems like the particle in the box and atomic orbitals. The four 3-D calculated molecular orbitals are contrasted in Figure 10.6.1.

:::exercise {exr:10.6.1}

What would Hückel theory predict for the energy levels and $\pi$ molecular orbitals of cis-butadiene? Do you believe this approach adequately describes the energy levels of the cis-trans isomerization reaction of butadiene?
:::
