<!-- LibreTexts page 13484: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/12:_Group_Theory_-_The_Exploitation_of_Symmetry/12.01:_The_Exploitation_of_Symmetry_Can_Help_Simplify_Numerical_Calculations -->
# The Exploitation of Symmetry Can Help Simplify Numerical Calculations

To a fully understand the math behind group theory one needs to take a look at the theory portion of the Group Theory topic or refer to one of the reference text listed at the bottom of the page. Never the less as Chemist the object in question we are examining is usually a molecule. Though we live in the 21<sup>st</sup> century and much is known about the physical aspects that give rise to molecular and atomic properties. The number of high level calculations that need to be performed can be both time consuming and tedious. To most experimentalist this task is takes away time and is usually not the integral part of their work. When one thinks of group theory applications one doesn't necessarily associated it with everyday life or a simple toy like a Rubik's cube. A Rubik's cube is an a cube that has a $3 \times 3$ array of different colored tiles on each of its six surfaces, for a total of 54 tiles. Since the cube exist in 3D space, the three axis are $x$, $y$, $z$. Since the rubik's cube only allows rotation which are called operations, there are three such operations around each of the $x$, $y$, $z$ axis.

> IMAGE {img:1} src=media/9875-Rubiks_cube.jpg width=255px
> alt: Rubiks_cube.jpg
> caption: Figure: Reubik's cube. Use with permission from Wikipedia

Of course the ultimate challenge of a Rubik's cube is to place all six colors on each of the six faces. By performing a series of such operations on the Rubik's cube one can arrive at a solution (A link of a person solving a Rubik's cube<sup>1</sup> in 10.4s with operations performed noted, the operations performed will not translate to chemistry applications but it is a good example of how symmetry operations arrive at a solution). The operations shown in the Rubik's cube case are inherent to the make up of the cube, i.e., the only operations allowed are the rotations along the x, y, z axis. Therefore the Rubik's cube only has x,y,z rotation operations. Similarly the operations that are specific to a molecule are dependent on its symmetry.

Using group theory, we can exploit the symmetry of molecules to give us a rich amount of information on the molecular orbitals, rotations, and vibrations of bonds, to name a few. Making symmetry arguments, we can skip complicated quantum calculations to gain qualitatively accurate information.

In [section 10.7](page:53694), we used Hü​ckel theory to explore the $\pi$ bonding network of benzene by constructing linear combinations of $2p_x$ atomic orbitals on the carbon atoms. In doing so, the roots of the secular equations were found via solving the $6 \times 6$ secular determinant.

$$ \left|\begin{array}{cccccc}x&1&0&0&0&1\\1&x&1&0&0&0\\0&1&x&1&0&0\\0&0&1&x&1&0\\0&0&0&1&x&1\\1&0&0&0&1&x\end{array}\right|=0 $$ {eq:31} n=1

Since the secular determinant is a $6 \times 6$ matrix, there are six solutions or values of $x$ that can be determined after expanding the determinant into the resulting (6th-order) polynomial.

$$ x^6-6x^4 + 9x^2 -4 =0 $$ {eq:poly1} n=2

Secular determinants are formulated in terms of a specific basis set; i.e., a set of functions that describe the wavefunctions. For the determinnat in Equation [ref:eq:31], that basis set is the the $\{|2p_z \rangle \}$ orbitals on the carbons. However, any basis set can be used to represent the determinant (long as it span the same space). For example, the following linear combination of $\{|2p_z \rangle \}$ orbitals could also be used:

$$ \begin{align} & | \phi_1 \rangle = \dfrac{1}{\sqrt{6}} \left[ | 2p_{z1} \rangle+ | 2p_{z2} \rangle + | 2p_{z3} \rangle + | 2p_{z4} \rangle + | 2p_{z5} \rangle + | 2p_{z6} \rangle \right] \nonumber \\ & | \phi_2 \rangle = \dfrac{1}{\sqrt{4}} \left[ | 2p_{z2} \rangle + | 2p_{z3} \rangle - | 2p_{z4} \rangle - | 2p_{z5} \rangle \right] \nonumber \\ & | \phi_3 \rangle = \dfrac{1}{\sqrt{3}} \left[ | 2p_{z1} \rangle + \dfrac{1}{2}| 2p_{z2} \rangle - \dfrac{1}{2} | 2p_{z3} \rangle - | 2p_{z4} \rangle - \dfrac{1}{2} | 2p_{z5} \rangle + \dfrac{1}{2} | 2p_{z6} \rangle \right] \nonumber \\ & | \phi_4 \rangle = \dfrac{1}{\sqrt{4}} \left[ | 2p_{z2} \rangle - | 2p_{z3} \rangle + | 2p_{z4} \rangle - | 2p_{z5} \rangle \right] \nonumber \\ & | \phi_5 \rangle = \dfrac{1}{\sqrt{3}} \left[ | 2p_{z1} \rangle - \dfrac{1}{2}| 2p_{z2} \rangle - \dfrac{1}{2} | 2p_{z3} \rangle + | 2p_{z4} \rangle - \dfrac{1}{2} | 2p_{z5} \rangle - \dfrac{1}{2} | 2p_{z6} \rangle \right] \nonumber \\ & | \phi_6 \rangle = \dfrac{1}{\sqrt{6}} \left[ | 2p_{z1} \rangle- | 2p_{z2} \rangle + | 2p_{z3} \rangle - | 2p_{z4} \rangle + | 2p_{z5} \rangle - | 2p_{z6} \rangle \right] \nonumber \end{align} $$

In this new basis set $\{\phi \rangle \}$, the secular determinant Equation [ref:eq:31] is represented as

$$ \left|\begin{array}{cccccc} x+2&0&0&0&0&0 \\0&x-2&0&0&0&0 \\0&0&x+1& \dfrac{x+1}{2}&0&0 \\0&0& \dfrac{x+1}{2} &x+1&0&0 \\0&0&0&0&x-1& \dfrac{x-1}{2} \\0&0&0&0& \dfrac{x-1}{2} &x-1\end{array}\right|=0 $$ {eq:32} n=3

This is the determinant into a bock diagonal form; which can be expanded into a product of smaller determinants to give the polynomial

$$ \dfrac{9}{16} ( x +2)(x-2)(x+1)^2(x-1)^2=0 $$

The roots to this equation are $\pm2$, $\pm1$ and $\pm 1$. This is not surprising since these are the same roots obtained from expanding the determinant in the original basis set (Equation [ref:eq:poly1]). You may remember that the selection of a specific basis set to represent a function does not change the fundamental nature of the function (e.g., a parabola in 2D space is the same curve if represented in terms of Cartesian coordinates ($x$ and $y$) or polar coordinates ($\theta$ and $r$), which both span 2-D space).

As you recall, Hü​ckel theory (irrespective of the basis set ) was used to simplify the general secular determinant (e.g., for benzene)

$$ \left|\begin{array}{cccccc} H_{11} - ES_{11} & H_{12} - ES_{12} & H_{13} - ES_{13} & H_{14} - ES_{14} & H_{15} - ES_{15} & H_{16} - ES_{16} \\ H_{21} - ES_{21} & H_{22} - ES_{22} & H_{23} - ES_{23} & H_{24} - ES_{24} & H_{25} - ES_{25} & H_{26} - ES_{26} \\ H_{31} - ES_{31} & H_{32} - ES_{32} & H_{33} - ES_{33} & H_{34} - ES_{34} & H_{35} - ES_{35} & H_{36} - ES_{36} \\ H_{41} - ES_{41} & H_{42} - ES_{42} & H_{43} - ES_{43} & H_{44} - ES_{44} & H_{45} - ES_{45} & H_{46} - ES_{46} \\ H_{51} - ES_{51} & H_{52} - ES_{52} & H_{53} - ES_{53} & H_{54} - ES_{54} & H_{55} - ES_{55} & H_{56} - ES_{56} \\ H_{61} - ES_{61} & H_{62} - ES_{62} & H_{63} - ES_{63} & H_{64} - ES_{64} & H_{65} - ES_{65} & H_{66} - ES_{6} \end{array}\right|=0 $$ {eq:33} n=4

where $H_{ij}$ are the Hamiltonian matrix elements

$$ H_{ij} = \langle \phi_i | \hat{H} | \phi_j \rangle = \int \phi _{i}H\phi _{j}\mathrm {d} v $$

and $S_{ij}$ are the overlap integrals.

$$ S_{ij}= \langle \phi_i | \phi_j \rangle = \int \phi _{i}\phi _{j}\mathrm {d} v $$

In general, this involves solving 36 Hamiltonian matrix elements ($H_{ij}$) and 36 overlap integrals ($S_{ij}$), which can be a daunting task to do by hand without the assumptions of Hü​ckel theory to help out. As with the application of Hü​ckel theory, which was used to set most of these integrals to zero, solving for the energies from Equation [ref:eq:33] can be simplified by using the intrinsic symmetry of the benzene system to demonstrate (rigorously) that many of these integrals are zero. This is the subject of group theory. Group theory is used to exploit the symmetry of molecules to quickly gain insights into their properties, such as vibrations and molecular orbitals.
