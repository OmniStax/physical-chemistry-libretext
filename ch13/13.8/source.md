<!-- LibreTexts page 13671: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13:_Molecular_Spectroscopy/13.08:_Rotational_Spectra_of_Polyatomic_Molecules -->
# Rotational Spectra of Polyatomic Molecules

:::note [note] Quick Review of Diatomic Rotation

As discussed previously, the Schrödinger equation for the angular motion of a rigid (i.e., having fixed bond length $R$) diatomic molecule is

$$ \dfrac{\hbar^2}{2 μ} \left[ \dfrac{1}{R^2 \sin θ} \dfrac{∂}{∂θ} \left(\sin θ \dfrac{∂}{∂θ} \right) + \dfrac{1}{R^2 \sin^2 θ} \dfrac{∂^2}{∂φ^2} \right] |ψ \rangle = E | ψ \rangle $$

or

$$ \dfrac{L^2}{2 μ R^2 } | ψ \rangle = E | ψ\rangle $$

The Hamiltonian in this problem contains only the kinetic energy of rotation; no potential energy is present because the molecule is undergoing unhindered "free rotation". The angles $θ$ and $φ$ describe the orientation of the diatomic molecule's axis relative to a laboratory-fixed coordinate system, and $μ$ is the reduced mass of the diatomic molecule

$$ μ=\dfrac{m_1m_2}{m_1+m_2} $$

The eigenvalues corresponding to each eigenfunction are straightforward to find because $H_{rot}$ is proportional to the $L^2$ operator whose eigenvalues have already been determined. The resultant rotational energies are given as:

$$ E_J= \dfrac{\hbar^2J(J+1)}{2μR^2} = B J(J+1) $$ {eq:Ediatomic} n=1

and are independent of $M$. $B$ is the rotational constant. Thus each energy level is labeled by $J$ and is $2J+1$-fold degenerate (because $M$ ranges from $-J$ to $J$). The rotational energy in Equation [ref:eq:Ediatomic] can be expressed in terms of the moment of inertia $I$

$$ I =\sum_i m_i R_i^2 $$ {eq:Idiatomic} n=2

where $m_i$ is the mass of the $i^{th}$ atom and $R$ is its distance from the center of mass of the molecule. This moment of inertia replaces $μR^2$ in the denominator of Equation [ref:eq:Ediatomic]:

$$ E_J= \dfrac{\hbar^2J(J+1)}{2I} = B J(J+1) $$ {eq:Ediatomic2} n=3
:::

## Rotation of Polyatomic Molecules

In contrast to diatomic molecules (Equation [ref:eq:Idiatomic]), the rotational motions of polyatomic molecules in three dimensions are characterized by multiple moments of inertia. typically reflected in an $3 \times 3$ inertia tensor. It is common in rigid body mechanics to express in these moments of inertia in *lab-based Cartesian coordinates* via a notation that explicitly identifies the $x$, $y$, and $z$ axes such as $I_{xx}$ and $I_{xy}$, for the components of the inertia tensor.

$$ I =\begin{bmatrix}I_{xx}&I_{xy}&I_{xz}\\I_{yx}&I_{yy}&I_{yz}\\I_{zx}&I_{zy}&I_{zz}\end{bmatrix} $$ {eq:inertiamatrix} n=4

The components of this tensor can be assembled into a matrix given by

$$ I_{xx}=\sum _{k=1}^{N}m_{k﻿}(y_{k}^{2}+z_{k}^{2}) $$

$$ I_{yy}=\sum _{k=1}^{N}m_{k}(x_{k}^{2}+z_{k}^{2}) $$

$$ I_{zz}=\sum _{k=1}^{N}m_{k}(x_{k}^{2}+y_{k}^{2}) $$

$$ I_{yx}=I_{xy}=-\sum _{k=1}^{N}m_{k}x_{k}y_{k} $$

$$ I_{zx}=I_{xz}=-\sum _{k=1}^{N}m_{k}x_{k}z_{k} $$

$$ I_{zy}=I_{yz}=-\sum _{k=1}^{N}m_{﻿k}y_{k}z_{k}. $$

The rotational motions of polyatomic molecules are characterized by moments of inertia that are defined in a *molecule based coordinates* with axes that are labeled $a$, $b$, and $c$. Measured in the body frame the inertia matrix (Equation [ref:eq:inertiamatrix]) is a constant real symmetric matrix, which can be decomposed into a diagonal matrix, given by

$$ I =\left(\begin{array}{ccc}I_{a}&0&0\\0&I_{b}&0\\0&0&I_{c}\end{array}\right) $$

These labels are assigned so that $I_c$ is the {term:largest} principal moment of inertia with an order of the three moments set as

$$ I_a<I_b<I_c $$

The rotational kinetic energy operator for a rigid non-linear polyatomic molecule is then expressed as

$$ H_{rot} = \dfrac{J_a^2}{2I_a} + \dfrac{J_b^2}{2I_b} + \dfrac{J_c^2}{2I_c} $$ {eq:genKE} n=5

The components of the quantum mechanical angular momentum operators along the three principal axes are:

$$ \begin{align} J_a &= -i\hbar \cos χ \left[\cot θ \dfrac{∂}{∂χ} - (\sin θ )^{-1} \dfrac{∂}{∂φ} \right] - -i\hbar \sin χ \dfrac{∂}{∂θ} \\[4pt] J_b &= i\hbar \sin χ \left[\cot θ \dfrac{∂}{∂χ} - (\sin θ )^{-1} \dfrac{∂}{∂φ} \right] - -i\hbar \cos χ \dfrac{∂}{∂θ} \\[4pt] J_c &= - \dfrac{ih ∂}{∂χ} \end{align} $$ n=6

The angles $θ$, $φ$, and $χ$ are the {term:Euler} {term:angles} needed to specify the orientation of the rigid molecule relative to a laboratory-fixed coordinate system. The corresponding square of the total angular momentum operator $J^2$ can be obtained as

$$ \begin{align} J^2 &= J_a^2 + J_b^ 2 + J_c^2 \\[4pt] & = - \dfrac{∂^2}{∂θ^2} - \cot θ \dfrac{∂}{∂θ} - \left(\dfrac{1}{\sin θ} \right) \left( \dfrac{∂^2}{∂φ^2} + \dfrac{∂^2}{∂χ^2} - 2 \cos θ \dfrac{∂^2}{∂φ∂χ} \right) \end{align} $$ n=7

and the component along the lab-fixed $Z$ axis is

$$ J_Z = - ih \dfrac{∂}{∂φ}. $$

## Spherical Tops

When the three principal moment of inertia values are identical, the molecule is termed a spherical top. In this case, the total rotational energy Equation [ref:eq:genKE] can be expressed in terms of the total angular momentum operator $J^2$

$$ H_{rot} = \dfrac{J^2}{2I} $$

As a result, the eigenfunctions of $H_{rot}$ are those of $J^2$ (and $J_a$ as well as $J_Z$ both of which commute with $J_2$ and with one another; $J_Z$ is the component of $J$ along the lab-fixed Z-axis and commutes with $J_a$ because

$$ J_Z = - ih \dfrac{∂}{∂φ} $$

and

$$ J_a = - ih \dfrac{∂}{∂χ} $$

act on different angles. The energies associated with such eigenfunctions are

$$ E(J,K,M) = \dfrac{\hbar^2 J(J+1)}{2I^2} $$

for all K (i.e., J a quantum numbers) ranging from -J to J in unit steps and for all M (i.e., J Z quantum numbers) ranging from -J to J. Each energy level is therefore $(2J + 1)^2$ degenarate because there are $2J + 1$ possible K values and $2J + 1$ possible M values for each J. The eigenfunctions of $J^2$, $J_Z$ and $J_a$, $|J,M,K>$ are given in terms of the set of rotation matrices $D_{J,M,K}$ :

$$ |J,M,K \rangle = \sqrt{ \dfrac{2J + 1}{8 π^2}} D^* _{J,M,K} ( θ , φ , χ ) $$

which obey

$$ J^2 |J,M,K \rangle = \hbar^2 J(J+1) | J,M,K \rangle $$

$$ J_a |J,M,K \rangle = \hbar K | J,M,K \rangle $$

$$ J_Z |J,M,K \rangle = \hbar M | J,M,K \rangle $$

## Symmetric Tops

Symmetrical tops are molecules with two rotational axes that have the same inertia and one unique rotational axis with a different inertia. Symmetrical tops can be divided into two categories based on the relationship between the inertia of the unique axis and the inertia of the two axes with equivalent inertia. If the unique rotational axis has a greater inertia than the degenerate axes the molecule is called an {term:oblate symmetrical top} (Figure 13.8.1). If the unique rotational axis has a lower inertia than the degenerate axes the molecule is called a {term:prolate symmetrical top}. For simplification think of these two categories as either frisbees for oblate tops or footballs for prolate tops.

> FIGURE {fig:13.8.1} src=media/79088-459px-Ellipsoid-rot-ax.svg.png
> alt: Diagrams of two ellipsoids with labeled axes and points, showing measurements in blue and red on a black background.
> caption: The assignment of semi-axes on a spheroid. It is oblate if $c < a$ (left) and prolate if $c > a$ (right). (CC BY-SA 4.0; Ag2gaeh)

Again, the rotational kinetic energy, which is the full rotational Hamiltonian, can be written in terms of the total rotational angular momentum operator $J^2$ and the component of angular momentum along the axis with the unique principal moment of inertia.

For prolate tops, Equation [ref:eq:genKE] becomes

$$ H_{rot} = \dfrac{J^2}{2I} + J_a^2 \left( \dfrac{1}{2I_a} - \dfrac{1}{2I} \right) $$

For oblate tops, Equation [ref:eq:genKE] becomes

$$ H_{rot} = \dfrac{J^2}{2I} + J_c^2 \left( \dfrac{1}{2I_c} - \dfrac{1}{2I} \right) $$

As a result, the eigenfunctions of $H_{rot}$ are those of $J^2$ and $J_a$ or $J_c$ (and of $J_Z$), and the corresponding energy levels.

The energies for prolate tops are

$$ E(J,K,M) = \dfrac{h^2 J(J+1)}{2I^2} + h^2 K^2 \left( \dfrac{1}{2I_a} - \dfrac{1}{2I} \right) $$

and the energies for oblate tops are

$$ E(J,K,M) = \dfrac{h^2 J(J+1)}{2I 2} + h^2 K^2 \left( \dfrac{1}{2I_c} - \dfrac{1}{2I} \right) $$

again for K and M (i.e., $J_a$ or $J_c$ and $J_Z$ quantum numbers, respectively) ranging from $-J$ to $J$ in unit steps. Since the energy now depends on K, these levels are only $2J + 1$ degenerate due to the $2J + 1$ different $M$ values that arise for each $J$ value. The eigenfunctions $|J, M,K>$ are the same rotation matrix functions as arise for the spherical-top case.

## Asymmetric Tops

The rotational eigenfunctions and energy levels of a molecule for which all three principal moments of inertia are distinct (a {term:asymmetric top}) can not easily be expressed in terms of the angular momentum eigenstates and the $J$, $M$, and $K$ quantum numbers. However, given the three principal moments of inertia $I_a$, $I_b$, and $I_c$, a matrix representation of each of the three contributions to the general rotational Hamiltonian in Equation [ref:eq:genKE] can be formed within a basis set of the $\{|J, M, K \rangle\}$ rotation matrix functions. This matrix will {term:not} be diagonal because the $|J, M, K \rangle$ functions are not eigenfunctions of the asymmetric top $H_{rot}$. However, the matrix can be formed in this basis and subsequently brought to diagonal form by finding its eigenvectors {C n, J,M,K } and its eigenvalues $\{E_n\}$. The vector coefficients express the asymmetric top eigenstates as

$$ \psi_n ( θ , φ , χ ) = \sum_{J, M, K} C_{n, J,M,K} |J, M, K \rangle $$

Because the total angular momentum $J^2$ still commutes with $H_{rot}$, each such eigenstate will contain only one J-value, and hence $Ψ_n$ can also be labeled by a $J$ quantum number:

$$ \psi _{n,J} ( θ , φ , χ ) = \sum_{M, K} C_{n, J,M,K} |J, M, K \rangle $$

To form the only non-zero matrix elements of $H_{rot}$ within the $|J, M, K\rangle$ basis, one can use the following properties of the rotation-matrix functions:

$$ \langle j, \rangle = \langle j, \rangle = 1/2 <j, \rangle = h 2 [ J(J+1) - K 2 ], $$

$$ \langle j, \rangle = h^2 K^2 $$

$$ \langle j \rangle = - \langle j \rangle = h^2 [J(J+1) - K(K ± 1)] 1/2 [J(J+1) -(K ± 1)(K ± 2)] 1/2 \langle j \rangle = 0 $$

Each of the elements of $J_c^2$, $J_a^2$, and $J_b^2$ must, of course, be multiplied, respectively, by $1/2I_c$, $1/2I_a$, and $1/2I_b$ and summed together to form the matrix representation of $H_{rot}$. The diagonalization of this matrix then provides the asymmetric top energies and wavefunctions.
