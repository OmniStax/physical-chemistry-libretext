<!-- LibreTexts page 13490: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/12:_Group_Theory_-_The_Exploitation_of_Symmetry/12.07:_Characters_of_Irreducible_Representations -->
# Characters of Irreducible Representations

## Symbols of irreducible representations

The two one-dimensional irreducible representations spanned by $s_N$ and $s_1'$ are seen to be identical. This means that $s_N$ and $s_1'$ have the ‘same symmetry’, transforming in the same way under all of the symmetry operations of the point group and forming bases for the same matrix representation. As such, they are said to belong to the same *symmetry species*. There are a limited number of ways in which an arbitrary function can transform under the symmetry operations of a group, giving rise to a limited number of symmetry species. Any function that forms a basis for a matrix representation of a group must transform as one of the symmetry species of the group. The irreducible representations of a point group are labeled according to their symmetry species as follows:

> TABLE {tab:1} cols=2

| $A$ | Nondegenerate ($d_i=1$) representation that is symmetric (character $1$) with respect to rotation about the principal axis in finite-order ($h\ne\infty$) groups. |
| --- | --- |
| $B$ | Nondegenerate ($d_i=1$) representation that is antisymmetric (character $-1$) with respect to rotation about the principal axis in finite-order ($h\neq\infty$) groups. |
| $E$ | Doubly-degenerate ($d_i=2$) representation in finite-order ($h\neq\infty$) groups. |
| $T$ | Triply-degenerate ($d_i=3$) representation in finite-order ($h\neq\infty$) groups. |
| $\Sigma$ | Nondegenerate ($d_i=1$) representation in infinite-order ($h=\infty$) groups. |
| $\Pi$, $\Delta$, $\Phi$ | Doubly-degenerate ($d_i=2$) representation in infinite-order ($h=\infty$) groups. |

1. In groups containing a center of inversion, $g$ and $u$ labels (from the German *gerade* and *ungerade*, meaning symmetric and antisymmetric) denote the character of the irreducible representation under inversion ($+1$ for $g$, $-1$ for $u$)
2. In groups with a horizontal mirror plane but no center of inversion, the irreducible representations are given prime and double prime labels to denote whether they are symmetric (character $+1$ or antisymmetric (character $-1$) under reflection in the plane.
3. If further distinction between irreducible representations is required, subscripts $1$ and $2$ are used to denote the character with respect to a $C_2$ rotation perpendicular to the principal axis, or with respect to a vertical reflection if there are no $C_2$ rotations.

The 1D irreducible representation in the $C_{3v}$ point group is symmetric (has character $+1$) under all the symmetry operations of the group. It therefore belongs to the irreducible representation $A_1$. The 2D irreducible representation has character $2$ under the identity operation, $-1$ under rotation, and $0$ under reflection, and belongs to the irreducible representation $E$.

Sometimes there is confusion over the relationship between a function $f$ and its irreducible representation, but it is quite important that you understand the connection. There are several different ways of stating the relationship. For example, the following statements all mean the same thing:

- "$f$ has $A_2$ symmetry"
- "$f$ transforms as $A_2$"
- "$f$ has the same symmetry

## Irreducible representations with complex characters

In many cases (see Appendix B), the characters for rotations $C_n$ and improper rotations $S_n$ are complex numbers, usually expressed in terms of the quantity $\epsilon$ = exp(2$\pi$i/n). It is fairly straightforward to reconcile this with the fact that in chemistry we are generally using group theory to investigate physical problems in which all quantities are real. It turns out that whenever our basis spans an irreducible representation whose characters are complex, it will also span a second irreducible representation whose characters are the complex conjugates of the first irreducible representation i.e. complex irreducible representations occur in pairs. According to the strict mathematics of group theory, each irreducible representation in the pair should be considered as a separate representation. However, when applying such irreducible representations in physical problems, we add the characters for the two irreducible representations together to get a single irreducible representation whose characters are real.

As an example, the ‘correct’ character table for the group $C_3$ takes the form:

$$ \begin{array}{l|l} C_3 & E \: \: \: \: \: \: \: \: C_3 \: \: \: \: \: \: \: \: C_3^2 \\ \hline A & 1 \: \: \: \: \: \: \: \: \: \: 1 \: \: \: \: \: \: \: \: \: \: 1 \\ \hline E & \begin{Bmatrix} 1 & \epsilon & \epsilon* \\ 1 & \epsilon* & \epsilon \end{Bmatrix} \end{array} $$ {eq:14.3} n=1

Where $\epsilon$ = exp(2$\pi$i/3). However, as chemists we would usually combine the two parts of the $E$ irreducible representation to give:

$$ \begin{array}{l|lll} C_3 & E & C_3 & C_3^2 \\ \hline A & 1 & 1 & 1 \\ E & 2 & -1 & 1 \end{array} $$ {eq:14.4} n=2

## Groups and subgroups have well-defined relationships as they descend or ascend in symmetry

Molecules can undergo structural changes through conformations or chemical reactions. Remember that the order of the subgroup must be an integer divisor from the order of the group. If the basic geometry of the molecule is preserved, the structure after the change may be a subgroup of the structure before the change, or vice versa. If the basic geometry does change, there may not be a relationship between the groups before and after. When point groups are related as group and subgroup, their irreducible representations are also related. A property that transforms as one representation in a group will transform as its correlated representation in a subgroup. {term:Correlation diagrams} show the relationships between subgroups and groups. Often, to or more bases of separate representations of a group yield the same set of $\chi(R)$ values for those operations that are carried over into the subgroup. In many cases, degenerate representations of a group ($E$ or $T$) may become two or three distinguishable bases in a subgroup.

## Reduce representations of infinite groups by approximating them as finite groups

We cannot use the tabular method for infinite-order groups since we cannot divide an infinite quantity by $h$. We will use group-subgroup relations to use the tabular method:

- Set up the reducible representation in any convenient subgroup
   
   - For $C_{\infty v}$, use $C_{2v}$
   - For $D_{\infty h}$, use $D_{2h}$
- Correlate the component irreducible representations with the species for the infinite-order group.

While somewhat limiting, this method is fairly effective.

## The direct product of two irreducible representations give either a reducible or irreducible representation of the same group

The last column in the character table shows the direct product between any two linear vectors. Direct products can also be taken between any number of irreducible representations:

$$ \Gamma_a \Gamma_b \Gamma_c=\Gamma_{abc} $$

The characters of the direct product representation $\Gamma_{abc}$ for each operator R of the group are given by:

$$ \chi_a (R) \chi_b (R) \chi_c (R)=\chi_{abc}(R) $$

The resulting representation may be reducible or irreducible. The dimension of the product, $D_p$, is the product of the dimensions of all the component representations:

$$ d_p=\prod_i{d_i} $$

These properties will become useful later, so we will reference them as needed. Briefly:

1. If all the combined irreducible representations are nondegenerate, then the product will be a nondegenerate representation too.
2. The product of a nondegenerate representation and a degenerate representation is a degenerate representation.
3. The direct product of any representation with the totally symmetric representation is the representation itself.
4. The direct product of degenerate representations is a reducible representation.
5. The direct product of an irreducible representation with itself is or contains the totally symmetry representation.
6. Only the direct product of a representation with itself is or contains the totally symmetric representation.
