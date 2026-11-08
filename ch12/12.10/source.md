<!-- LibreTexts page 433871: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/12:_Group_Theory_-_The_Exploitation_of_Symmetry/12.10:_Molecular_Motions_of_a_Molecule_can_be_Represented_by_a_Reducible_Reperesentation -->
# Molecular Motions of a Molecule can be Represented by a Reducible Reperesentation

## Determining the Symmetries of Molecular Motions

We mentioned above that the procedure for determining the normal vibrational modes of a polyatomic molecule is very similar to that used in previous sections to construct molecular orbitals. In fact, virtually the only difference between these two applications of group theory is the choice of basis set.

As we have already established, the motions of a molecule may be described in terms of the motions of each atom along the $x$, $y$ and $z$ axis. Consequently, it probably won’t come as too much of a surprise to discover that a very useful basis for describing molecular motions comprises a set of $\begin{pmatrix} x, y, z \end{pmatrix}$ axes centered on each atom. This basis is usually known as the $\textit{3N}$ *Cartesian* basis since there are $3N$ Cartesian axes, $3$ axes for each of the $N$ atoms in the molecule. In other words, each atom as 3 degrees of freedom. {term:Degrees of freedom} are the number of independent ways a molecule can move. An atom has 3 degrees of freedom as it can move in $x$, $y$, and $z$, but cannot rotate or vibrate. Note that each molecule will have a different $3N$ Cartesian basis, just as every molecule has a different atomic orbital basis.

Our first task in investigating motions of a particular molecule is to determine the characters of the matrix representatives for the $3N$ Cartesian basis under each of the symmetry operations in the molecular point group. We will use the $H_2O$ molecule, which has $C_{2v}$ symmetry, as an example.

$H_2O$ has three atoms, so the $3N$ Cartesian basis will have $9$ elements. The basis vectors are shown in the diagram below.

![3D molecular model illustrating a central atom connected to two other atoms, labeled with X, Y, and Z axes.](media/61173-Screenshot_24-2.png)

One way of determining the characters would be to construct all of the matrix representatives and take their traces. While you are more than welcome to try this approach if you want some practice at constructing matrix representatives, there is an easier way. Recall that we can also determine the character of a matrix representative under a particular symmetry operation by stepping through the basis functions and applying the following rules:

1. Add $1$ to the character if the basis function is unchanged by the symmetry operation;
2. Add $-1$ to the character if the basis function changes sign under the symmetry operation;
3. Add $0$ to the character if the basis function moves when the symmetry operation is applied.

For $H_2O$, this gives us the following characters for the $3N$ Cartesian basis (check that you can obtain this result using the rules above and the basis vectors as drawn in the figure):

$$ \begin{array}{lcccc} \text{Operation:} & E & C_2 & \sigma_v(xz) & \sigma_v'(yz) \\ \chi_{3N}: & 9 & -1 & 3 & 1 \end{array} \tag{24.1} $$

There is an even quicker way to work out the characters of the $3N$ Cartesian basis if you have a character table in front of you. The character for the *Cartesian* basis is simply the sum of the characters for the $x$, $y$, and $z$ (or $T_x$, $T_y$, and $T_z$) functions listed in the character table. To get the character for the $\textit{3N}$ *Cartesian* basis, simply multiply this by the number of atoms in the molecule that are unshifted by the symmetry operation.

The $C_{2v}$ character table is shown below.

$$ \begin{array}{l|cccc|l} C_{2v} & E & C_2 & \sigma_v & \sigma_v' & h = 4 \\ \hline A_1 & 1 & 1 & 1 & 1 & z, x^2, y^2, z^2 \\ A_2 & 1 & 1 & -1 & -1 & xy, R_z \\ B_1 & 1 & -1 & 1 & -1 & x, xz, R_y \\ B_2 & 1 & -1 & -1 & 1 & y, yz, R_x \\ \hline \end{array} \tag{24.2} $$

$x$ transforms as $B_1$, $y$ as $B_2$, and $z$ as $A_1$, so the characters for the Cartesian basis are

$$ \begin{array}{lcccc} \text{Operation:} & E & C_2 & \sigma_v(xz) & \sigma_v'(yz) \\ \chi_{3N}: & 3 & -1 & 1 & 1 \end{array} \tag{24.3} $$

We multiply each of these by the number of unshifted atoms ($3$ for the identity operation, $1$ for $C_2$, $3$ for $\sigma_v$ and $1$ for $\sigma_v'$) to obtain the characters for the $3N$ Cartesian basis.

$$ \begin{array}{lcccc} \chi_{3N}: & 9 & -1 & 3 & 1 \end{array} \tag{24.4} $$

Reassuringly, we obtain the same characters as we did previously. Which of the three methods you use to get to this point is up to you.

We now have the characters for the molecular motions (described by the $3N$ Cartesian basis) under each symmetry operation. At this point, we want to separate these characters into contributions from translation, rotation, and vibration. This turns out to be a very straightforward task. We can read the characters for the translational and rotational modes directly from the character table, and we obtain the characters for the vibrations simply by subtracting these from the $3N$ Cartesian characters we’ve just determined. The characters for the translations are the same as those for $\chi_{Cart}$. We find the characters for the rotations by adding together the characters for $R_x$, $R_y$, and $R_z$ from the character table (or just $R_x$ and $R_y$ if the molecule is linear). For $H_2O$, we have:

$$ \begin{array}{lcccc} \text{Operation:} & E & C_2 & \sigma_v(xz) & \sigma_v'(yz) \\ \chi_{3N}: & 9 & -1 & 3 & 1 \\ \chi_{\text{Trans}}: & 3 & -1 & 1 & 1 \\ \chi_{\text{Rot}}: & 3 & -1 & -1 & -1 \\ \chi_{\text{Vib}} = \chi_{3N} - \chi_{\text{Trans}} - \chi_{\text{Rot}}: & 3 & 1 & 3 & 1 \end{array} \tag{24.5} $$

The characters in the final row are the sums of the characters for all of the molecular vibrations. We can find out the symmetries of the individual vibrations by using the reduction equation (Equation (15.20)) to determine the contribution from each irreducible representation.

In many cases you won’t even need to use the equation, and can work out which irreducible representations are contributing just by inspection of the character table. In the present case, the only combination of irreducible representations that can give the required values for $\chi_{\text{Vib}}$ is $2A_1 + B_1$. As an exercise, you should make sure you are also able to obtain this result using the reduction equation.

So far this may all seem a little abstract, and you probably want to know is what the vibrations of $H_2O$ actually look like. For a molecule with only three atoms, it is fairly easy to identify the possible vibrational modes and to assign them to the appropriate irreducible representation.

![Illustration of molecular geometries: symmetric stretch, asymmetric stretch, and bend modes, labeled A1, B1, and A2.](media/61174-Screenshot_24-3.png)

For a larger molecule, the problem may become much more complex, and in that case we can generate the SALCs of the $3N$ Cartesian basis, which will tell us the atomic displacements associated with each vibrational mode. We will do this now for $H_2O$.
