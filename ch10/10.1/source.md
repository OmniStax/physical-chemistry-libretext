<!-- LibreTexts page 13470: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/10:_Bonding_in_Polyatomic_Molecules/10.01:_Hybrid_Orbitals_Account_for_Molecular_Shape -->
# Hybrid Orbitals Account for Molecular Shape

## Learning Objectives {section:objectives}

- Introduce hybrid orbital to explain non-linear molecular structure

{term:Valence bond} (VB) theory is one of two basic theories, along with {term:molecular orbital} (MO) theory, that were developed to use the methods of quantum mechanics to explain chemical bonding. It focuses on how the atomic orbitals of the dissociated atoms combine to give individual chemical bonds when a molecule is formed. In contrast, molecular orbital theory, which will be discussed elsewhere, predict wavefunctions that cover the entire molecule.

## Review of Diatomics

Let us consider $H_2$. Recall that the Lewis structure for a single $H$ atom is $H\cdot$ and for $H_2$, it is $H:H$. Thus, each hydrogen brings one unpaired electron to the bond. Let the two protons be denoted A and B and the two electrons 1 and 2. Now, consider the potential energy

$$ \begin{align} V &= V_{ee}+V_{en}+V_{nn}\\[4pt] &=\dfrac{e^2}{4\pi \epsilon_0}\left [ \dfrac{1}{r_{12}}-\dfrac{1}{r_{1A}}-\dfrac{1}{r_{1B}}-\dfrac{1}{r_{2A}}-\dfrac{1}{r_{2B}}+\dfrac{1}{R_{AB}}\right ] \end{align} $$ n=1

But as $R_{AB}\rightarrow \infty$, the $1/r_{12}$, $1/r_{1B}$, $1/r_{2A}$, and $1/R_{AB}$ terms vanish and the potential energy becomes simply that of two noninteracting hydrogen atoms

$$ V\rightarrow -\dfrac{e^2}{4\pi \epsilon_0}\left [ \dfrac{1}{r_{1A}}+\dfrac{1}{r_{2B}}\right ] $$

Since the potential energy becomes a simple sum of separate energies for electrons 1 and 2, the wavefunction should simply be a product $\psi_{1s}(r_1 -r_A)\psi_{1s}(r_2 -r_B)$. But as we let $R_{AB}\rightarrow R_e$, where $R_e$ is the equilibrium bond length, the electrons mix, and we can no longer tell if electron 1 belongs to atom A or atom B and the same for electron 2. Thus, we need to construct a combination of products that is consistent with the Pauli exclusion principle. If we just consider the coordinates $r_1$ and $r_2$ of the electrons, then the only wavefunction we can construct from a product of 1s orbitals is

$$ \psi_u (r_1 ,r_2)=C_u [\psi_{1s}^{A}(r_1)\psi_{1s}^{B} (r_2)-\psi_{1s}^{A}(r_2)\psi_{1s}^{B}(r_1)] $$

where the $u$ designator indicates that this is an odd function. The constant $C_u$ is the overall noramlization constant. Unfortunately, like in the LCAO method, such a wavefunction is antibonding and is not a good representation of the ground state. If, however, we construct the wavefunction

$$ \psi_g (r_1 ,r_2)=C_g [\psi_{1s}^{A} (r_1)\psi_{1s}^{B} (r_2)+\psi_{1s}^{A}(r_2) \psi_{1s}^{B} (r_1)] $$

where $g$ designates that this is an even function (even in German is *gerade*), we violate the Pauli exclusion principle, even though such a wavefunction leads to a stable chemical bond.

What is missing here is the fact that we have not considered the spins of the electrons. Since the electrons are identical, if we exchange coordinates *and* spins, then the wavefunction should change sign. Thus, we can make both wavefunctions above consistent with the Pauli exclusion principle by multiplying by an appropriate spin wavefunction. We obtain

$$ \begin{align}\psi_u (r_1 ,r_2 ,s_1 ,s_2 ) &=\psi_u(x_1 ,x_2)=C_u [\psi_{1s}^{A}(r_1)\psi_{1s}^{B}(r_2)-\psi_{1s}^{A}(r_2)\psi_{1s}^{B}(r_1)][\psi_{\uparrow}(s_1)\psi_{\downarrow}(s_2)+\psi_{\uparrow}(s_2)\psi_{\downarrow}(s_1)]\\[4pt] \psi_g (r_1 ,r_2 ,s_1 ,s_2) &= \psi_g(x_1 ,x_2)=C_g[\psi_{1s}^{A}(r_1)\psi_{1s}{B}(r_2)+\psi_{1s}^{A}(r_2)\psi_{1s}^{B}(r_1)][\psi_{\uparrow}(s_1)\psi_{\downarrow}(s_2)-\psi_{\uparrow}(s_2)\psi_{\downarrow}(s_1)]\end{align} $$ n=2

where $s_1$ and $s_2$ are the z-components of spin for electrons 1 and 2, respectively. We can now use $\psi_g$ as an approximate 2-electron wavefunction that leads to a stable chemical bond in $H_2$.

The fact that $\psi_u$ is antibonding can be easily determined by looking for a nodal plane between the two atoms, in this case, in the plane that exactly bisects the line joining the two atoms, midway between them. That this is, indeed, a nodal plane can be seen by considering two points $r_1$ and $r_2$ for the two electrons that are taken to lie in this plane. By symmetry, the functions $\psi_{1s}^{A}(r_1)$ and $\psi_{1s}^{B}(r_1)$ have the same value for $r_1$ in this plane, and the same for $\psi_{1s}^{B}(r_2)$ and $\psi_{1s}^{A}(r_2)$. Let us assign the following values:

$$ \begin{align}\psi_{1s}^{A}(r_1) &= \psi_{1s}^{B}(r_1)=A\\[4pt] \psi_{1s}^{B}(r_2) &= \psi_{1s}^{A}(r_2)=A' \end{align} $$ n=3

Substituting these into $\psi_u (x_1 ,x_2)$, we obtain

$$ \psi_u (x_1 ,x_2)=C_u [AA' -A' A][\psi_{\uparrow}(s_1)\psi_{\downarrow}(s_2)+\psi_{\uparrow}(s_2)\psi_{\downarrow}(s_1)]=0 $$

Since the wavefunction has a node midway between the two atoms, it is clearly antibonding and should have a *higher energy* than the corresponding bonding wavefunction $\psi_g$.

A similar argument can be used for the molecule $F_2$. Each $F$ has an electronic configuration

$$ 1s^2 2s^2 2p_{x}^{2}2p_{y}^{2}2p_{z}^{1} $$

and the Lewis structure of $\ce{F_2}$ is

> FIGURE {fig:10.1.1} src=media/125585-img48.png width=84px
> alt: Two capital letter "F" in a stylized font, separated by dots, with additional dots lining the top and bottom.
> caption: Lewis structure of $F_2$.

Most of the electrons are in lone pairs, but the $2p_z$ electrons, which are unpaired in each $\ce{F}$ atom come together to form the bond. Thus, the bonding wavefunction should be a {term:2-electron wavefunction} constructed from $2p_z$ orbitals. The bonding wavefunction takes the "gerade" form as in $\ce{H_2}$:

$$ \psi_g (r_1 ,r_2 ,s_1 ,s_2)=C_g [\psi_{2p_z}^{A}(r_1)\psi_{2p_z}^{B}(r_2)+\psi_{2p_z}^{A}(r_2)\psi_{2p_z}^{B}(r_1)][\psi_{\uparrow}(s_1)\psi_{\downarrow}(s_2)-\psi_{\uparrow}(s_2)\psi_{\downarrow}(s_1)] $$

For $\ce{HF}$, the $2p_z$ orbital on $\ce{F}$ and $1s$ orbital on $\ce{H}$ come together to form the bonding wavefunction. To be consistent with the Pauli principle, we need a wavefunction of the form

$$ \psi (r_1 ,r_2 ,s_1 ,s_2)=[\psi_{1s}^{H}(1)\psi_{2p_z}^{F}(2)+\psi_{1s}^{H}(2)\psi_{2p_z}^{F}(1)][\psi_{\uparrow}(s_1)\psi_{\downarrow}(s_2)-\psi_{\uparrow}(s_2)\psi_{\downarrow}(s_1)] ) $$ {eq:1} n=4

Looking at the $\ce{HF}$ example, it becomes clear how much valence bond theory attempts to appear as a "quantum version'' of the Lewis dot structure model. Valence bond theory attempts to construct very approximate wavefunctions for the bonding electrons in a Lewis structure, leaving the orbitals unused in the construction of the valence bond wavefunctions for the lone pair electrons. In the case of $\ce{HF}$, we use the $2p_z$ orbitals of $\ce{F}$, which leaves the $2s$, $2p_x$ and $2p_y$ orbitals unused. Since there are three lone pairs, these three orbitals are sufficient to hold each of the lone pairs as spin-up/spin-down couples.

## Hybridization

For polyatomic molecules, the valence bond theory becomes a very poor approximation because the directionalities of the $2s$ and $2p$ orbitals is too restrictive to describe molecules with steric numbers ranging between 2 and 4. The example considered above of $\ce{H_2O}$ illustrates this rather dramatically! Let us consider an even simpler molecule, $\ce{BeH_2}$, which has a steric number of 2 and is linear. Let the atoms lie entirely along the z-axis in the arrangement $\ce{H-Be-H}$.

Although the $\ce{Be}$ atom has a ground-state electronic configuration of $1s^2 2s^2$, but if we "promote" one of the $2s$ electrons to a state with higher energy and allow its electronic structure to be $1s^2 2s 2p_z$, then the unpaired electrons in the $2s$ and $2p_z$ orbitals can combine with the unpaired electrons in each of the hydrogen atoms to form bonds. The energy needed to excite the electron in Be would be "repaid'' by the energy gained in the formation of stable bonds. The two valence-bond wavefunctions we would construct would be

$$ \begin{align}\psi_1 (1,2) &= C_1 \left[\psi_{1s}^{H_1}(1)\psi_{2s}^{Be}(2)+\psi_{1s}^{H_1}(2)\psi_{2s}^{Be}(1) \right] \left[\psi_{\uparrow}(s_1)\psi_{\downarrow}(s_2)-\psi_{\uparrow}(s_2)\psi_{\downarrow}(s_1)\right]\\[4pt] \psi_2 (1,2) &= C_2 \left[\psi_{1s}^{H_2}(1)\psi_{2p_z}^{Be}(2)+\psi_{1s}^{H_2}(2)\psi_{2p_z}^{Be}(1)\right] \left[\psi_\uparrow (s_1)\psi_\downarrow (s_2)-\psi_\uparrow (s_2)\psi_\downarrow (s_1) \right]\end{align} $$ n=5

Unfortunately, even this simple scheme does not work entirely because the two $\ce{Be-H}$ bonds would be different due to their construction from different combinations of orbitals. By symmetry, however, we can see that the two $\ce{Be-H}$ bonds should be equivalent. A solution to this problem was proposed by Linus Pauling in the 1930s in the form of {term:orbital hybridization}, a scheme that we still use today.

Pauling used the fact that in the first and second periods, the $2s$ and $2p$ orbitals have similar energies. Indeed, for the $\ce{H}$ atom, the energies are exactly the same. Given that these energies are not that different, we can combine s and p orbitals and still have a valid solution of the Schrödinger equation. That is, a general orbital

$$ \chi (r)=C_1 \psi_{2s}(r)+C_2 \psi_{2p_x}(r)+C_3 \psi_{2p_y}(r)+C_4 \psi_{2p_z}(r) $$

is also a solution of the Schrödinger equation with the same energy as a $2s$ or $2p$ orbitals individually (this is exactly true for $H$). In the case of $\ce{BeH_2}$, the external potential on the electrons in $\ce{Be}$ by the two hydrogens changes the energy levels and creates a near degeneracy between the $2s$ and $2p_z$ orbitals, hence, we are now free to combine the into linear combinations that are more suitable to the construction both of valence bond wavefunctions *and* MOs via the LCAO procedure.

## $sp$ Hybrid Orbitals

For Be, we now allow the s and p orbitals to mix and create two *hybrid* orbitals known as $sp$ orbitals. The two new hybrid wavefunctions as linear combination of the functions for 2s and 2p<sub>z</sub> (using Dirac Notation):

$$ | \chi_i \rangle = a_1|2s \rangle + b_1 |2p_z \rangle $$ {eq:sp1} n=6

$$ | \chi_j \rangle = a_2|2s \rangle + b_2 |2p_z \rangle $$ {eq:sp2} n=7

These two wavefunctions must be orthogonal.

$$ \langle \chi_i | \chi_j \rangle = \delta_{ij} $$

Which can be separated into the following relationships:

$$ \langle \chi_i | \chi_i \rangle = 1 $$ {eq:norm1} n=8

and

$$ \langle \chi_j | \chi_j \rangle = 1 $$ {eq:norm2} n=9

and

$$ \langle \chi_i | \chi_j \rangle = \langle \chi_j | \chi_i \rangle = 0 $$ {eq:ortho} n=10

Equations [ref:eq:norm1] and [ref:eq:norm2] are the {term:normality requirement} and Equation [ref:eq:ortho] is the {term:orthogonality requirement} for the new hybrid wavefunctions. Substituting [ref:eq:sp1] into [ref:eq:norm1] results in

$$ \langle \chi_i | \chi_i \rangle = a_1^2 \cancelto{1}{\langle 2s | 2s \rangle } + a_1 b_1 \cancelto{0} {\langle 2s | 2p_z \rangle} + a_1 b_1 \cancelto{0} {\langle 2p_z | 2s} \rangle + b_1^2 \cancelto{1} {\langle 2p_z | 2p_z \rangle} =1 $$

and similarly for $\langle \chi_j | \chi_j \rangle$

$$ \langle \chi_j | \chi_j \rangle = a_2^2 \cancelto{1}{\langle 2s | 2s \rangle } + a_2 b_2 \cancelto{0} {\langle 2s | 2p_z \rangle} + a_2 b_2 \cancelto{0} {\langle 2p_z | 2s} \rangle + b_2^2 \cancelto{1} {\langle 2p_z | 2p_z \rangle} =1 $$

results in the following relationships

$$ \langle \chi_i | \chi_i \rangle = a_1^2 + b_1^2 = 1 $$ {eq:Con1} n=11

$$ \langle \chi_j | \chi_j \rangle = a_2^2 + b_2^2 = 1 $$ {eq:Con2} n=12

and

$$ \langle \chi_i | \chi_j \rangle = a_1a_2 + b_1b_2 = 0 $$ {eq:Con3} n=13

These are four unknowns and three equations. The fourth "constraint" is that we assume contribution of $|s\rangle$ is the same for both hybrid orbitals.

$$ a_1 = a_2 $$

Equations [ref:eq:Con1] to [ref:eq:Con3] revert to

$$ a_1^2 + b_1^2 = 1 $$ {eq:Con1a} n=14

$$ a_1^2 + b_2^2 = 1 $$ {eq:Con2a} n=15

$$ b_1^2 = b_2^2 $$ {eq:Con3a} n=16

Therefore

$$ b_1 = -b_2 $$

and

$$ a_1 = b_1 $$ {eq:eq231} n=17

Insert Equation [ref:eq:eq231] into [ref:eq:Con3a] to get

$$ a_1= \dfrac{1}{\sqrt{2}} $$

and the two hybrid orbitals are

$$ \begin{align}\chi_1 (r) &= \dfrac{1}{\sqrt{2}}[\psi_{2s}(r)+\psi_{2p_z}(r)]\\[4pt] \chi_2 (r) &= \dfrac{1}{\sqrt{2}}[\psi_{2s}(r)-\psi_{2p_z}(r)]\end{align} $$ n=18

Note that these orbitals are both normalized and orthogonal:

$$ \int |\chi_1 (r)|^2 dV=1 \ ; \ \int |\chi_2 (r)|^2 dV=1 \ ; \ \int \chi_{1}^{*}(r)\chi_2 (r)dV=0 $$

These orbitals appear as shown in Figure 10.1.3

> FIGURE {fig:10.1.3} src=media/125591-22dd6f732f9b979df3f3f6cd7f9a672e.jpg width=689px
> alt: Diagram illustrating hybridization with spheres representing atomic orbitals, including sp, sp², and sp³ hybridizations.
> caption: The Formation of sp Hybrid Orbitals. Taking the sum and difference of an ns and an *np* atomic orbital where *n* = 2 gives two equivalent *sp* hybrid orbitals oriented at 180° to each other.

Given that the two $sp$ hybrid orbitals are mirror images of each other, they can overlap with the $1s$ orbital of $H$ (shown in the figure) and create two equal bonds, as needed for $BeH_2$. Using the valence bond formulation, now, one of the $BeH$ bonds will be described by a wavefunction of the form:

$$ \begin{align}\psi_1 (1,2) &= C_1 [\psi_{1s}^{H_1}(1)\chi_{1}^{Be}(2)+\psi_{1s}^{H_1}(2)\chi_{1}^{Be}(1)][\psi_{\uparrow}(s_1)\psi_{\downarrow}(s_2)-\psi_{\uparrow}(s_2)\psi_{\downarrow}(s_1)]\\[4pt] \psi_2 (1,2) &= C_2 [\psi_{1s}^{H_2}(1)\chi_{2}^{Be}(2)+\psi_{1s}^{H_2}(2)\chi_{2}^{Be}(1)][\psi_{\uparrow}(s_1)\psi_\downarrow (s_2)-\psi_{\uparrow}(s_2)\psi_\downarrow (s_1)]\end{align} $$ n=19

In the above wavefunctions, it is clear that $H_1$ is on the right and $H_2$ is on the left, based on the directionalities of $\chi_1$ and $\chi_2$.

## $sp^2$ Hybrid Orbitals

For trigonal planar molecules such as $\ce{BH_3}$, we start with the electronic configuration of $B$, which is $1s^2 2s^2 2p_x$, and we promote one of the $2s$ electrons to a $2p_y$ orbital, so that we have $1s^2 2s 2p_x 2p_y$. Suppose the geometry of $\ce{BH_3}$ is such that one of the hydrogen atoms lies along the positive x axis. The remaining hydrogen atoms would be in the 3rd and 4th quadrants, respectively (Figure 10.1.4).

> FIGURE {fig:10.1.4} src=media/125586-img84.png width=277px
> alt: Graph displaying a linear equation with labeled axes for x and y, including a plotted line.
> caption: Geometry of $BH_3$.

If we simply combine the $2s$ with the $2p_x$ and $2p_y$ orbitals of boron, the resulting hybrid orbitals will not point in the correct direction. For this reason, we will create rotated versions of the $p_x$ and $p_y$ orbitals, which, as we will see are tantamount to taking new combinations of $2p_x$ and $2p_y$ orbitals to combine with the $2s$. Since the rotation occurs in the $xy$ plane, the coordinate that controls this is the azimuthal angle $\phi$. For the $p_x$ and $p_y$ orbitals, the $\phi$ dependence is

$$ \psi_{2p_x}\sim \cos\phi \ ; \ \psi_{2p_y}\sim \sin\phi $$

If we rotate $2p_y$ by $-30$ degrees (Figure 10.1.5; blue is positive and red is negative), the $\phi$ dependence becomes

$$ \psi_{2p_y}^{(rot)}\sim \sin(\phi +30) $$

> FIGURE {fig:10.1.5} src=media/125587-img90.png width=336px
> alt: Illustration of two pairs of atoms or molecules, with blue and red spheres representing different elements.
> caption: Rotation of a $2p_y$ orbital by $-30$ degrees.

Using the fact that

$$ \sin(\alpha \pm \beta)=\sin\alpha \cos\beta \pm cos\alpha sin\beta $$

this rotation gives

$$ \begin{align}\psi_{2p_y}^{(rot,1)} &\sim \sin\phi \cos30+\cos\phi \sin30\\[4pt] &\sim \left [ \dfrac{\sqrt{3}}{2}\sin\phi +\dfrac{1}{2}\cos\phi \right ] \\[4pt] &\sim \left [ \dfrac{\sqrt{3}}{2}\psi_{2p_y}+\dfrac{1}{2}\psi_{2p_x}\right ]\end{align} $$ n=20

Similarly, consider rotating $-\psi_{2p_y}$ by $+30$ degrees (Figure 10.1.6). This gives

$$ \begin{align}-\psi_{2p_y}^{(rot,2)} &\sim -\sin(\phi -30)\\[4pt] &\sim -\left [ \dfrac{\sqrt{3}}{2}\sin\phi -\dfrac{1}{2}\cos\phi \right ] \\[4pt] &\sim -\dfrac{\sqrt{3}}{2}\psi_{2p_y}+\dfrac{1}{2}\psi_{2p_x}\end{align} $$ n=21

> FIGURE {fig:10.1.6} src=media/125588-img105.png width=336px
> alt: Diagram illustrating molecular structures with red and blue spheres representing atoms, showing bonding interactions.
> caption: Rotation of a $-2p_y$ orbital by $30$ degrees.

So, we now take the hybrid orbitals to be of the form

$$ \begin{align}\chi_1 (r) &= a\psi_{2s}(r)-b\psi_{2p_x}\\[4pt] \chi_2 (r) &= c\psi_{2s}(r)+d\psi_{2p_y}^{(rot,1)}(r)\\[4pt] \chi_3 (r) &=c\psi_{2s}(r)-d\psi_{2p_y}^{(rot,2)}(r)\end{align} $$ n=22

The coefficients $a$, $b$, and $c$ are determined by requiring that the orbitals are normalized and mutually orthogonal:

$$ \begin{align}\int |\chi_1 (r)|^2 dV=1 \ &; \ \int \chi_{1}^{*}(r)\chi_2 (r)dV=0\\[4pt] \int |\chi_2 (r)|^2 dV=1 \ &; \ \int \chi_{1}^{*}(r)\chi_3 (r)dV=0\\[4pt] \int |\chi_3 (r)|^2 dV=1 \ &; \ \int \chi_{2}^{*}(r)\chi_3 (r)dV=0\end{align} $$ n=23

Carrying out the algebra, we obtain the following $sp^2$ hybrid orbitals:

$$ \begin{align}\chi_1 (r) &= \dfrac{1}{\sqrt{3}}[\psi_{2s}(r)-\sqrt{2}\psi_{2p_x}(r)]\\[4pt] \chi_2 (r) &= \dfrac{1}{\sqrt{6}}[\sqrt{2}\psi_{2s}(r)+\psi_{2p_x}(r)+\sqrt{3}\psi_{2p_y} (r)]\\[4pt] \chi_3 (r) &= \dfrac{1}{\sqrt{6}}[\sqrt{2}\psi_{2s}(r)+\psi_{2p_x}(r)-\sqrt{3}\psi_{2p_y}(r)]\end{align} $$ n=24

The $sp^2$ hybrids allow bonding at $120^\circ$ degrees, and these orbitals appear as shown in Figure 10.1.7:

> FIGURE {fig:10.1.7} src=media/125592-ebe6b2c4a818c5c2169eca649b888390.jpg width=786px
> alt: Illustration depicting the hybridization of atomic orbitals, showing spherical shapes and overlapping regions in various stages.
> caption: Formation of sp<sup>2</sup> Hybrid Orbitals. Combining one ns and two np atomic orbitals gives three equivalent *sp*<sup>2</sup> hybrid orbitals in a trigonal planar arrangement; that is, oriented at 120° to one another.

The figure also shows the overlaps of these orbitals with the $1s$ orbitals of $\ce{H}$.

## $sp^3$ Hybrid Orbitals

Finally, we consider the case of methane $CH_4$. The electronic configuration of $C$ is $1s^2 2s^2 2p_x 2p_y$. We now promote one of the $2s$ orbitals to the $2p_z$ orbital and write $C$ as $1s^2 2s2p_x 2p_y 2p_z$. We can now hybridize the $2s$ orbital with each of the $2p$ orbitals to create four hybrids:

$$ \begin{align}\chi_1 (r) &= \dfrac{1}{2} \left[\psi_{2s}(r)+\psi_{2p_x}(r)+\psi_{2p_y}(r)+\psi_{2p_z}(r)\right]\\[4pt] \chi_2 (r) &= \dfrac{1}{2}\left[\psi_{2s}(r)-\psi_{2p_x}(r)-\psi_{2p_y}(r)+\psi_{2p_z}(r)\right]\\[4pt] \chi_3 (r) &= \dfrac{1}{2}\left[\psi_{2s}(r)+\psi_{2p_x}(r)-\psi_{2p_y}(r)-\psi_{2p_z}(r)\right]\\[4pt] \chi_4 (r) &= \dfrac{1}{2}\left[\psi_{2s}(r)-\psi_{2p_x}(r)+\psi_{2p_y}(r)-\psi_{2p_z}(r)\right]\end{align} $$ n=25

The large lobes of the hybridized orbitals are oriented toward the vertices of a tetrahedron, with 109.5° angles between them (Figure 10.1.8). Like all the hybridized orbitals discussed earlier, the *sp*<sup>3</sup> hybrid atomic orbitals are predicted to be equal in energy.

> FIGURE {fig:10.1.8} src=media/125593-ed3c092ac061d604967430ba5d47a99a.jpg width=861px
> alt: Diagram illustrating molecular structures and configurations, showing spheres representing atoms with colors indicating different elements.
> caption: Formation of sp<sup>3</sup> Hybrid Orbitals. Combining one ns and three np atomic orbitals results in four *sp*<sup>3</sup> hybrid orbitals oriented at 109.5° to one another in a tetrahedral arrangement.

In addition to explaining why some elements form more bonds than would be expected based on their valence electron configurations, and why the bonds formed are equal in energy, valence bond theory explains why these compounds are so stable: the amount of energy released increases with the number of bonds formed. In the case of carbon, for example, much more energy is released in the formation of four bonds than two, so compounds of carbon with four bonds tend to be more stable than those with only two. Carbon does form compounds with only two covalent bonds (such as CH<sub>2</sub> or CF<sub>2</sub>), but these species are highly reactive, unstable intermediates that form in only certain chemical reactions.

:::note [note] Are hybrid orbitals Real?

Hybridization is an often misconceived concept. It only is a mathematical interpretation, which explains a certain bonding situation (in an intuitive fashion). In a molecule the equilibrium geometry will result from various factors, such as steric and electronic interactions, and further more interactions with the surroundings like a solvent or external field. The geometric arrangement will not be formed because a molecule is hybridized in a certain way, it is the other way around, i.e. a result of the geometry or more precise and interpretation of the wavefunction for the given molecular arrangement.

The justification we gave for invoking hybridization in molecules such as BeH<sub>2</sub>, BF<sub>3</sub> and CH<sub>4</sub> was that the bonds in each are geometrically and chemically equivalent, whereas the atomic *s*- and *p*-orbitals on the central atoms are not. By combining these into new orbitals of *sp*, *sp*<sup>2</sup> and *sp*<sup>3</sup> types we obtain the required number of completely equivalent orbitals. This seemed easy enough to do on paper; we just drew little boxes and wrote “*sp*<sup>2</sup>” or whatever below them. But what is really going on here?

The full answer is beyond the scope of this course, so we can only offer the following very general explanation. First, recall what we mean by “orbital”: a mathematical function ψ having the character of a standing wave whose square ψ<sup>2</sup> is proportional to the probability of finding the electron at any particular location in space. The latter, the *electron density distribution*, can be observed (by X-ray scattering, for example), and in this sense is the only thing that is “real”.

A given standing wave (ψ-function) can be synthesized by combining all kinds of fundamental wave patterns (that is, atomic orbitals) in much the same way that a color we observe can be reproduced by combining different sets of primary colors in various proportions. In neither case does it follow that these original orbitals (or colors) are actually present in the final product. So one could well argue that hybrid orbitals are not “real”; they simply turn out to be convenient for understanding the bonding of simple molecules at the elementary level, and this is why we use them.
:::

## Summary

The shape and bonding valecies of polyatomic molecules can be accounted for by hybrid orbitals. Molecular orbitals are formed from linear combinations of atomic orbitals which are similar in energy. These atomic orbitals could come from different atoms, or from the same atom. For example, the 2 sand 2patomic orbitals are very close energetically. When a linear combo of more than one atomic orbital from the {term:same atom} is formed, we have a hybrid orbital.
