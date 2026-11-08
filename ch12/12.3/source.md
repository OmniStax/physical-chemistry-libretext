<!-- LibreTexts page 13486: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/12:_Group_Theory_-_The_Exploitation_of_Symmetry/12.03:_Symmetry_Operations_Define_Groups -->
# Symmetry Operations Define Groups

## Properties of Groups

Now that we have explored some of the properties of symmetry operations and elements and their behavior within point groups, we are ready to introduce the formal mathematical definition of a group. A mathematical group is defined as a set of elements ($g_1$, $g_2$, $g_3$...) together with a rule for forming combinations $g_j$. The number of elements $h$ is called the {term:order} of the group. For our purposes, the elements are the symmetry operations of a molecule and the rule for combining them is the sequential application of symmetry operations investigated in the previous section. The elements of the group and the rule for combining them must satisfy the following criteria:

1. Identity
2. Closure
3. Associativity
4. Reciprocality

These criteria are explained below.

### Identity

The group must include the {term:identity}, $E$. $E$ commutes with any other elements of the group, $g_i$, such that:

$$ E g_i= g_i E = g_i $$ {eq:7.1} n=1

This requirement explains the need to define the symmetry operation of identity.

### Closure

The elements must satisfy the group property of {term:closure}, meaning that the combination of any pair of elements is also an element of the group.

Closure is a mathematical definition. In mathematics, a group has closure under an operation if performance of that operation on members of the group always produces a member of the same group:

If $A$ and $B$ are elements of the group $G$, and if $AB=g_i$, then $g_i$ is also in the group $G$

### Reciprocality

To satisfy reciprocality, each element $g_i$ must have an inverse $g_i^{-1}$, which is also an element of the group, such that:

$$ g_i g_i^{-1} = g_i^{-1}g_i = E $$ {eq:7.2} n=2

Some symmetry operations are their own inverses:

- $C_2 C_2=E$
- $\sigma \sigma=E$
- $ii=E$
- $EE=E$

The inverse of each of these operations effectively 'undoes’ the effect of the symmetry operation. Most other operations are not the inverse of themselves. For example, in $C_{3v}$ the inverse of $C_3$ is $C_3^{-1}$.

### Associativity

The {term:associative law} of combination states that all combinations of elements of a group must be associative:

$$ (g_i g_j )(g_k) = g_i(g_jg_k) $$ {eq:7.3} n=3

The above definition {term:does not} require the elements to commute, which would require:

$$ g_i g_k =g_k g_i $$ {eq:7.4} n=4

## Group Multiplication

As we discovered in the $C_{3v}$ example above, in many groups the outcome of consecutive application of two symmetry operations depends on the order in which the operations are applied.

:::note [note] Commuting is not a Requirement of Group Elements

Groups for which the elements do not commute are called {term:non-Abelian} groups; those for which they elements do commute are *Abelian*.
:::

Group theory is an important area in mathematics, and luckily for chemists the mathematicians have already done most of the work for us. Along with the formal definition of a group comes a comprehensive mathematical framework that allows us to carry out a rigorous treatment of symmetry in molecular systems and learn about its consequences.

Many problems involving operators or operations (such as those found in quantum mechanics or group theory) may be reformulated in terms of matrices. Any of you who have come across transformation matrices before will know that symmetry operations such as rotations and reflections may be represented by matrices. It turns out that the set of matrices representing the symmetry operations in a group obey all the conditions laid out above in the mathematical definition of a group, and using matrix representations of symmetry operations simplifies carrying out calculations in group theory. Before we learn how to use matrices in group theory, it will probably be helpful to review some basic definitions and properties of matrices.

Now we will investigate what happens when we apply two symmetry operations in sequence. As an example, consider the $NH_3$ molecule, which belongs to the $C_{3v}$ point group. Consider what happens if we apply a $C_3$rotation followed by a $\sigma_v$ reflection. We write this combined operation $\sigma_v$$C_3$ (when written, symmetry operations operate on the thing directly to their right, just as operators do in quantum mechanics – we therefore have to work backwards from right to left from the notation to get the correct order in which the operators are applied). As we shall soon see, the order in which the operations are applied is important.

![Three molecular structures depicted in sequence, showcasing spatial orientation and bonding in chemistry.](media/61156-Screenshot_1.png)

The combined operation $\sigma_v$$C_3$ is equivalent to $\sigma_v''$, which is also a symmetry operation of the $C_{3v}$ point group. Now let’s see what happens if we apply the operators in the reverse order i.e. $C_3$$\sigma_v$ ($\sigma_v$ followed by $C_3$).

![Schematic of molecular structures showing spatial orientation and bond angles of a molecule.](media/61157-Screenshot_5-2.png)

Again, the combined operation $C_3$$\sigma_v$ is equivalent to another operation of the point group, this time $\sigma_v'$.

There are two important points that are illustrated by this example:

1. The order in which two operations are applied is important. For two symmetry operations $A$ and $B$, $AB$ is not necessarily the same as $BA$, i.e. symmetry operations do not in general commute. In some groups the symmetry elements do commute; such groups are said to be *Abelian*.
2. If two operations from the same point group are applied in sequence, the result will be equivalent to another operation from the point group. Symmetry operations that are related to each other by other symmetry operations of the group are said to belong to the same *class*. In $NH_3$, the three mirror planes $\sigma_v$, $\sigma_v'$ and $\sigma_v''$ belong to the same class (related to each other through a $C_3$ rotation), as do the rotations $C_3^+$ and $C_3^-$ (anticlockwise and clockwise rotations about the principal axis, related to each other by a vertical mirror plane

The effects of applying two symmetry operations in sequence within a given point group are summarized in *group multiplication tables*. As an example, the complete group multiplication table for $C_{3v}$ using the symmetry operations as defined in the figures above is shown below. The operations written along the first row of the table are carried out first, followed by those written in the first column (note that the table would change if we chose to name $\sigma_v$, $\sigma_v'$ and $\sigma_v''$ in some different order).

$$ \begin{array}{l|llllll} C_{3v} & E & C_3^+ & C_3^- & \sigma_v & \sigma_v' & \sigma_v'' \\ \hline E & E & C_3^+ & C_3^- & \sigma_v & \sigma_v' & \sigma_v'' \\ C_3^+ & C_3^+ & C_3^- & E & \sigma_v' & \sigma_v'' & \sigma_v \\ C_3^- & C_3^- & E & C_3^+ & \sigma_v'' & \sigma_v & \sigma_v' \\ \sigma_v & \sigma_v & \sigma_v'' & \sigma_v' & E & C_3^- & C_3^+ \\ \sigma_v' & \sigma_v' & \sigma_v & \sigma_v'' & C_3^+ & E & C_3^- \\ \sigma_v'' & \sigma_v'' & \sigma_v' & \sigma_v & C_3^- & C_3^+ & E \end{array} $$ {eq:5.1} n=5
