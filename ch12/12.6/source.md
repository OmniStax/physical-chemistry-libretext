<!-- LibreTexts page 13489: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/12:_Group_Theory_-_The_Exploitation_of_Symmetry/12.06:_Character_Tables_Summarize_the_Properties_of_a_Point_Group -->
# Character Tables Summarize the Properties of a Point Group

Now that we’ve learned how to create a matrix representation of a point group within a given basis, we will move on to look at some of the properties that make these representations so powerful in the treatment of molecular symmetry.

## Similarity Transforms

Suppose we have a basis set $\begin{pmatrix} x_1, x_2, x_3, ... x_n \end{pmatrix}$, where $x_i$ represents so position in $x$ of each atom, and we have determined the matrix reducible representatives for the basis in a given point group. There is nothing particularly special about the basis set we have chosen, and we could equally well have used any set of linear combinations of the original functions (provided the combinations were linearly independent). Consider an additional basis set $\begin{pmatrix} x_1', x_2', x_3', ... x_n' \end{pmatrix}$, in which each basis function $x_i'$ is a linear combination of our original basis $\begin{pmatrix} x_1, x_2, x_3, ... x_n \end{pmatrix}$:

$$ x_j' = \Sigma_i x_ic_{ji} = x_1c_{j1} + x_2c_{j2} + ... \tag{11.1} $$

The $c_{ji}$ appearing in the sum are coefficients; $c_{ji}$ is the coefficient multiplying the original basis function $x_i$ in the new linear combination basis function $x_j'$. We could also represent this transformation in terms of a matrix equation $\textbf{x'} = C\textbf{x}$:

$$ \begin{pmatrix} x_1' \\ x_2' \\ ... \\ x_n' \end{pmatrix} = \begin{pmatrix} c_{11} & c_{12} & ... & c_{1n} \\ c_{21} & c_{22} & ... & c_{2n} \\ ... & ... & ... & ... \\ c_{n1} & c_{n2} & ... & c_{nn} \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ ... \\ x_n \end{pmatrix} \tag{11.2} $$

where $C$ is the transformation matrix. The matrix representatives for the two basis sets will certainly be different, but we would expect them to be related to each other in some way. As we shall show shortly, they are in fact related by a *similarity transform*. Now we look at what happens when we apply a symmetry operation $g$ to our two basis sets. If $\Gamma(g)$ and $\Gamma'(g)$ are matrix representatives of the symmetry operation in the $\textbf{x}$ and $\textbf{x'}$ bases, then we have:

$$ \begin{array}{rcll} g\textbf{x'} & = & \textbf{x'}\Gamma'(g) \\ g\textbf{x}C & = & \textbf{x}C\Gamma'(g) & \text{since} \: \textbf{x'} = \textbf{x}C \\ g\textbf{x} & = & \textbf{x}C\Gamma'(g)C^{-1} & \text{multiplying on the right by} \: C^{-1} \text{and using} \: CC^{-1} = I \\ & = & \textbf{x}\Gamma(g) \end{array} \tag{11.3} $$

We can therefore identify the similarity transform relating $\Gamma(g)$, the matrix representative in our original basis, to $\Gamma'(g)$, the representative in the transformed basis. The transform depends only on the matrix of coefficients used to transform the basis functions:

$$ \Gamma(g) = C\Gamma'(g)C^{-1} \tag{11.4} $$

Also:

$$ \Gamma'(g) = C^{-1}\Gamma(g)C \tag{11.5} $$

:::note [note] Characters of Representations

The trace of a matrix representative $\Gamma(g)$ is usually referred to as the *character* of the representation under the symmetry operation $g$. We will soon come to see that the characters of a matrix representation are often more useful than the matrix representatives themselves. Characters have several important properties.

1. The character of a symmetry operation is invariant under a similarity transform
2. Symmetry operations belonging to the same class have the same character in a given representation. Note that the character for a given class may be different in different representations, and that more than one class may have the same character.

Proofs of the above two statements are given in the Appendix.
:::

## Character Tables

A character table summarizes the behavior of all of the possible irreducible representations of a group under each of the symmetry operations of the group. The character table for $C_{3v}$ is shown below. All operations in the character table are contained in the first row of the character table, in this case $E$, $C_3$, & $\sigma_v$, these are all of the operations that can be preformed on the molecule that return the original structure. The first column contains the three irreducible representations $A_1$, $A_2$ & $E$. The character of the irreducible representation denotes what the operation does. A value of 1 represents no change, -1 opposite change and 0 is a combination of 1 & -1 (0’s are found in degenerate molecules. The final two columns Rotation and Translation represented by $R_x$,$R_y$, $R_z$ & $x$, $y$, $z$ respectively. Each $R_x$, $R_y$, $R_z$ & $x$, $y$, $z$ term is the irreducible symmetry of a rotation or translation operation. Like wise the final column the orbital symmetries relates the orbital wave function to a irreducible representation.

$$ \begin{array}{lllll} \hline C_{3v} & E & 2C_3 & 3\sigma_v & h=6 \\ \hline A_1 & 1 & 1 & 1 & z, z^2, x^2+y^2 \\ A_2 & 1 & 1 & -1 & R_z \\ E & 2 & -1 & 0 & \begin{pmatrix} x, y \end{pmatrix}, \begin{pmatrix} xy, x^2+y^2 \end{pmatrix}, \begin{pmatrix} xz, yz \end{pmatrix}, \begin{pmatrix} R_x, R_y \end{pmatrix} \\ \hline \end{array} $$ {eq:14.1} n=1

The various sections of the table are as follows:

1. The first element in the table gives the name of the point group, usually in both Schoenflies ($C_{3v}$) and Hermann-Mauguin ($3m$) notation.
2. Along the first row are the symmetry operations of the group, $E$, $2C_3$ and $3\sigma_v$, followed by the order of the group. Because operations in the same class have the same character, symmetry operations are grouped into classes in the character table and not listed separately.
3. In the first column are the irreducible representations of the group. In $C_{3v}$ the irreducible representations are $A_1$, $A_2$ and $E$ (the representation we considered above spans $2A_1$ + $E$).
4. The characters of the irreducible representations under each symmetry operation are given in the bulk of the table.
5. The final column of the table lists a number of functions that transform as the various irreducible representations of the group. These are the Cartesian axes $\begin{pmatrix} x, y, z \end{pmatrix}$, the Cartesian products $\begin{pmatrix} z^2, x^2 + y^2, xy, yz \end{pmatrix}$, and the rotations $\begin{pmatrix} R_x, R_y, R_z \end{pmatrix}$.

The functions listed in the final column of the table are important in many chemical applications of group theory, particularly in spectroscopy. For example, by looking at the transformation properties of $x$, $y$ and $z$ (sometimes given in character tables as $T_x$, $T_y$, $T_z$) we can discover the symmetry of translations along the $x$, $y$, and $z$ axes. Similarly, $R_x$, $R_y$ and $R_z$ represent rotations about the three Cartesian axes. As we shall see later, the transformation properties of $x$, $y$, and $z$ can also be used to determine whether or not a molecule can absorb a photon of $x$-, $y$-, or $z$-polarized light and undergo a spectroscopic transition. The Cartesian products play a similar role in determining selection rules for Raman transitions, which involve two photons.

Character tables for common point groups are given in Appendix B.

## A simple way to determine the characters of a representation

In many applications of group theory, we only need to know the characters of the representative matrices, rather than the matrices themselves. Luckily, when each basis function transforms as a 1D irreducible representation (which is true in many cases of interest) there is a simple shortcut to determining the characters without having to construct the entire matrix representation. All we have to do is to look at the way the individual basis functions transform under each symmetry operation. For a given operation, step through the basis functions as follows:

1. Add $1$ to the character if the basis function is unchanged by the symmetry operation (i.e. the basis function is mapped onto itself);
2. Add $-1$ to the character if the basis function changes sign under the symmetry operation (i.e the basis function is mapped onto minus itself);
3. Add $0$ to the character if the basis function moves when the symmetry operation is applied (i.e the basis function is mapped onto something different from itself).

Try this for the $s$ orbital basis we have been using for the $C_{3v}$ group. You should find you get the same characters as we obtained from the traces of the matrix representatives.

We can also work out the characters fairly easily when two basis functions transform together as a 2D irreducible representation. For example, in the $C_{3v}$ point group $x$ and $y$ axes transform together as $E$. If we carry out a rotation about $z$ by an angle $\theta$, our $x$ and $y$ axes are transformed onto new axes $x'$ and $y'$. However, the new axes can each be written as a linear combination of our original $x$ and $y$ axes. Using the rotation matrices introduced in Section 9, we see that:

$$ \begin{array}{ccc}x' & = & \cos\theta \: x + \sin\theta \: y \\ y' & = & -\sin\theta \: x + \cos\theta \: y \end{array} $$ {eq:14.2} n=2

For one-dimensional irreducible representations we asked if a basis function/axis was mapped onto itself, minus itself, or something different. For two-dimensional irreducible representations we need to ask how much of the ‘old’ axis is contained in the new one. From the above we see that the $x'$ axis contains a contribution $\cos{\theta}$ from the $x$ axis, and the $y'$ axis contains a contribution $\cos{\theta}$ from the $y$ axis. The characters of the $x$ and $y$ axes under a rotation through $\theta$ are therefore $\cos{\theta}$, and the overall character of the $E$ irreducible representation is therefore $\cos{\theta}+\cos{\theta}=2\cos{\theta}$. For a $C_3$ rotation through 120 degrees, the character of the $E$ irreducible representation is therefore $2\cos{120}$° $=-1$.

In general, *when an axis is rotated by an angle* *$\theta$ by a symmetry operation, its contribution to the character for that operation is* $\cos{\theta}$*.*
