<!-- LibreTexts page 13485: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/12:_Group_Theory_-_The_Exploitation_of_Symmetry/12.02:_Symmetry_Elements_and_Operations_Define_the_Point_Groups -->
# Symmetry Elements and Operations Define the Point Groups

## Symmetry Elements

A *symmetry operation* is an action that leaves an object looking the same after it has been carried out. For example, if we take a molecule of water and rotate it by 180° about an axis passing through the central O atom (between the two H atoms) it will look the same as before. Each symmetry operation has a corresponding *symmetry element*, which is the axis, plane (2-dimensional), line (1-dimensional) or point (0-dimensional) with respect to which the symmetry operation is carried out:

![Logo featuring the word "easier" in black text with a red line and a stylized red geometric shape to the right.](media/421666-Symmetry_elements.png)

The symmetry element consists of all the points that stay in the same place when the symmetry operation is performed. In a rotation, the line of points that stay in the same place constitute a *symmetry axis*; in a reflection the points that remain unchanged make up a *plane of symmetry*. The symmetry of a molecule or ion can be described in terms of the complete collection of symmetry operations it possesses. The symmetry elements that a molecule (and any other 3-D object) may possess are discussed below.

## Symmetry Operations

The symmetry of a molecule or ion can be described in terms of the complete collection of symmetry operations it possesses. There are five types of operations:

1. Identity, $E$
2. Rotation, $C_n$
3. Reflection, $\sigma$
4. Inversion, $i$
5. Improper Rotation, $S_n$

:::note [note] Symmetry Operations

A symmetry operation is a permutation of atoms such that the molecule is transformed into a state {term:indistinguishable} from the starting state.
:::

### Identity Symmetry, $E$

The identity operator, $E$, consists of doing nothing, and the corresponding symmetry element is the entire molecule. Every molecule possesses at least this operation. For example, the $\ce{CHFClBr}$ molecule in Figure 12.2.1. The identify symmetry operation is not indicated since all molecule exhibit this symmetry.

> FIGURE {fig:12.2.1} src=media/78357-DSL1.png width=212
> alt: 3D molecular model showing spheres in various colors: red, green, gray, white, and teal, representing different atoms and bonds.
> caption: Example of Identify Symmetry: The $\ce{CHFClBr}$ molecule contain no other symmetry other than identity. Image created via Symmetry @ Otterbein site by Dean Johnston et al.

### $n$-fold Axis of Rotation, $C_n$

The rotation operation (sometimes called proper rotation), $C_n$, rotates an object about an axis by $2\pi/n$ radians or $360^{\circ}/n$. Rotation by $C_n$ leaves the molecule unchanged. The $H_2O$ molecule has a $C_2$ axis (Figure 12.2.2). Molecules can have more than one $C_n$ axis, in which case the one with the highest value of $n$ is called the *principal axis*. In some high symmetry systems, there may be more than one principal axis. Note that by convention, rotations are *counterclockwise* about the axis. $C_n$ rotations are indicated via vectors with labels as indicated below.

> FIGURE {fig:12.2.2} src=media/78358-DSL2.png width=479
> alt: Two molecular structures: on the left, a red and white molecule, and on the right, a gray and white molecule with multiple bonds.
> caption: Examples of $n$-fold Axis of Rotation: (left) The water molecule contains a $C_2$ axis. (right) Ethane contains both $C_2$ and $C_3$ axes. Image created via Symmetry @ Otterbein site by Dean Johnston et al.

We always want to express rotations in their simplest equivalent fractions of $m/n$:

$$ C_4^2=C_2 $$

$$ C_6^4=C_3^2 $$

$$ C_8^6=C_4^3 $$

Rotating an object $n$ times brings the object back to the original object and is equivalent to the identity operation, $E$:

$$ C_n^n = E $$

Linear molecules have a very high rotational symmetry: $C_\infty$. Examples include diatomics such as $\text{CO}$, $\text{NO}$, and $\text{CO}_2$.

### Reflection, $\sigma$

Reflection, $\sigma$, defines the bilateral symmetry about a plane (mirror plane / reflection plane). Reflection in the plane leaves the molecule looking the same. In a molecule that also has an axis of symmetry, a mirror plane that includes the axis is called a vertical mirror plane and is labeled $\sigma_v$, while one perpendicular to the axis is called a horizontal mirror plane and is labeled $\sigma_h$. A vertical mirror plane that bisects the angle between two $C_2$ axes is called a dihedral mirror plane, $\sigma_d$. If no principal axis exist, $\sigma_h$ is defined as the plane of the molecule. $\sigma$ symmetry is indicated as a plane on molecules; since they often bisect atoms, which should be clearly indicated.

> FIGURE {fig:12.2.3} src=media/78359-DSL3.png width=497
> alt: Three molecular structures are depicted: one with blue and white spheres, another with red and white spheres, and a larger yellow sphere cluster.
> caption: Examples of reflection symmetry. (left) The ammonia molecule contains three identical reflection planes. All are designated as vertical symmetry planes ($σ_v$) because they contain the principle rotation axis.(middle) The water molecule contains two different reflection planes. (right) benzene contains a total of seven reflection planes, one horizontal plane ($σ_h$) and six vertical planes ($σ_v$ and $σ_d$). Image created via Symmetry @ Otterbein site by Dean Johnston et al.

For any mirror plane, performing two successive reflections about the same plane brings objects back to their original configuration:

$$ \sigma\sigma=\sigma^2=E $$

### Inversion, $i$

Inversion, $i$, through the center of symmetry leaves the molecule unchanged. Inversion consists of passing each point through the center of inversion and out to the same distance on the other side of the molecule. If inversion symmetry exists, a line drawn from any atom through the center will connect with an equivalent atom at an equivalent distance from the center. Examples of molecules with centers of inversion is shown in Figure 12.2.4. Centers of inversion are indicated via a point, which may or may not overlap with an atoms. The inversion center is always located at the central point of the molecule and there can only be one inversion center in any system. The centers of inversion in the examples below do not overlap with atoms.

> FIGURE {fig:12.2.4} src=media/78360-DSL4.png width=416
> alt: Molecular structures of benzene (left) and toluene (right), shown in a simplified 3D representation.
> caption: Examples of Center of Inversion Symmetry. (left) Benzene and (right) staggard ethane have centers of inversion (green balls). Image created via Symmetry @ Otterbein site by Dean Johnston et al.

Performing inversion twice in succession brings every point back to its original position:

$$ ii=i^2=E $$

Molecules with no inversion symmetry are said to be centrosymmetric.

### $n$-fold Axis of Improper Rotation, $S_n$

Improper rotations, $S_n$, are also called rotation-reflections. The rotation-reflection operation consists of rotating by $C_n$ about an axis, followed by reflecting in a plane perpendicular to the same axis. Improper rotation symmetry is indicated with both an axis and a plan as demonstrated in the examples in Figure 12.2.5.

> FIGURE {fig:12.2.5} src=media/78361-DSL5.png width=396
> alt: Molecular model showing a molecule on the left with ellipsoid shapes, and a complex structure on the right with shaded planes.
> caption: Examples of Improper axis of rotation. (left) Staggered ethane contains an $S_6$ axis of improper rotation. (right) Methane contains three $S_4$ axes of improper rotation. Image created via Symmetry @ Otterbein site by Dean Johnston et al.

:::note [note] Note

$S_1$ is the same as reflection and $S_2$ is the same as inversion.
:::

The lowest-order improper rotation that is not a simpler operation is $S_3$. The pattern of successive operations depends on if $n$ is even or odd. The general relationships for $S_n$ operations are:

- If $n$ is even, $S_n^n=E$
   
   - Molecule returns to original orientation configuration after each full rotation
   - There are an even number of rotation operators and reflection operators
- If $n$ is odd, $S_n^n=\sigma$ and $S_n^{2n}=E$
   
   - First full rotation:
      
      - Molecular does not return to original configuration after first rotation
      - There are an odd number of rotation operators and reflection operators
   - Second full rotation:
      
      - Molecule returns to original orientation configuration
      - There are an even number of rotation operators and reflection operators
- When $m$ is even, there is always a corresponding proper rotation ($C_n$):
   
   - $S_n^m=C_n^m$ when $m<n$
   - $S_n^m=C_n^{m-n}$ when $m>n$ (2nd rotation)
- If $S_n$ with even $n$ exists, $C_{n/2}$ exists
- If $S_n$ with odd $n$ exists, then both $C_n$ and $\sigma$ perpendicular to $C_n$ exist

### Summary of Symmetry Operations

The identity $E$ and rotations $C_n$ are symmetry operations that could actually be carried out on a molecule. For this reason they are called *proper symmetry operations*. Reflections, inversions and improper rotations can only be imagined (it is not actually possible to turn a molecule into its mirror image or to invert it without some fairly drastic rearrangement of chemical bonds) and as such, are termed *improper symmetry operations*. These five symmetry operations are tabulated in Table 12.2.1.

> TABLE {tab:1} cols=4
> caption: Table 12.2.1: The five principal symmetry elements and their operators for 3D space

| {term:Symbol} {term:Elements} | {term:Description} | {term:Symbol} {term:Operator} | {term:Symbol} |
| --- | --- | --- | --- |
| $E$ | identity | $\hat{E}$ | no change |
| $C_n$ | $n$-fold axis of rotation | $\hat{C}_n$ | Rotation by $360°/n$ leaves the molecule unchanged |
| $\sigma$ | plane of symmetry | $\hat{\sigma}$ | Reflection in the plane leaves the molecule unchanged |
| $i$ | center of symmetry. | $\hat{i}$ | Inversion through the center of symmetry leaves the molecule unchanged. |
| $S_n$ | $n$-fold improper rotation | $\hat{S}_n$ | The rotary reflection operation consists of rotating through an angle $360°/n$ about the axis, followed by reflecting in a plane perpendicular to the axis. |

## Defining the Coordinate System

:::note [note] Axis Definitions

Conventionally, when imposing a set of Cartesian axes on a molecule (as we will need to do later on in the course), the $z$ axis lies along the principal axis of the molecule, the $x$ axis lies in the plane of the molecule (or in a plane containing the largest number of atoms if the molecule is non-planar), and the $y$ axis makes up a right handed axis system.
:::

Generally, the following conventions are observed to define the coordinate system:

1. The origin of the coordinate system is located at the central atom or the center of the molecule.
2. The $z$-axis is collinear with the highest-order rotational axis (principal axis).
3. For planar molecules, if the z-axis is perpendicular to the molecular plane:
   
   - The $x$-axis lies in the plane of the molecule and passes through the greatest number of atoms.
   
   If the $z$-axis lies in the plane of the molecule:
   
   - The $x$-axis stands perpendicular to the plane
4. For non-planar molecules, once the z-axis has been defined, the x-axis is the usually chosen so that the xz plane contains as many atoms as possible.

## Molecular Point Groups

It is only possible for certain combinations of symmetry elements to be present in a molecule (or any other object). As a result, we may group together molecules that possess the same symmetry elements and classify molecules according to their symmetry. These groups of symmetry elements are called *point groups* (due to the fact that there is at least one point in space that remains unchanged no matter which symmetry operation from the group is applied). There are two systems of notation for labeling symmetry groups, called the Schönflies and Hermann-Mauguin (or International) systems. Schönflies notation is used by chemists and spectroscopists, while Crystallographers prefer Hermann-Mauguin notation.The symmetry of individual molecules is usually described using the {term:Schö}{term:nflies} notation, which is used below. The common point groups can be categorized into the following:

- Nonrotational groups
- Single-axis rotationa groups
- Dihedral groups
- Cubic groups

:::note [note] Shared Names

Some of the point groups share their names with symmetry operations, so be careful you do not mix up the two. It is usually clear from the context which one is being referred to.
:::

### Nonrotational groups

Nonrotational groups represent the lowest symmetry groups. They include:

$C_1$ - Contains only the identity (a $C_1$ rotation is a rotation by 360° and is the same as the identity operation, $E$). Molecules that belongs to the $C_1$ group have no symmetry and are therefore asymmetric.

- Example: CHDFCl

![Molecular structure illustration with four spheres representing atoms in different shades of gray and white.](media/17577-1.png)

$C_i$ - Contains the identity $E$ and a center of inversion $i$.

- Example: C<sub>2</sub>H<sub>2</sub>F<sub>2</sub>Cl<sub>2</sub>

![Molecular structure illustration featuring interconnected atoms represented as spheres in varying shades of gray.](media/17578-2.png)

$C_S$ - Contains the identity $E$ and a plane of reflection $\sigma$.

![3D molecular structure with gray and white spheres representing atoms, connected by lines to indicate chemical bonds.](media/17579-3.png)

### Single-axis rotation groups

Single-axis rotation groups are examples of cyclic groups. In cyclic groups, all of the operators commute (Abelian). In their multiplication tables, elements appear along right-to-left diagonals. Knowing this pattern makes it easy to construct multiplication tables! Single-axis rotational groups include:

$C_n$ - Contains the identity and an $n$-fold axis of rotation.

![Diagram of a molecular structure featuring spheres representing atoms, with two larger gray spheres and one smaller white sphere.](media/17580-4.png)

$C_{nv}$ - Contains the identity, an $n$-fold axis of rotation, and $n$ vertical mirror planes $\sigma_v$.

![A molecular model showing one large gray sphere connected to three smaller white spheres, representing atoms.](media/17581-5a.png) ![Two overlapping spheres, one larger and gray, the other smaller and white, on a plain background.](media/17582-5b.png)

$C_{nh}$ - Contains the identity, an $n$-fold axis of rotation, and a horizontal reflection plane $\sigma_h$ (note that in $C_{2h}$ this combination of symmetry elements automatically implies a center of inversion).

![Two larger gray spheres connected by a bond, surrounded by smaller white spheres, representing a molecular structure.](media/17583-6.png)

$S_n$ - Contains the identity and *one* $S_n$ axis. Note that molecules only belong to $S_n$ if they have not already been classified in terms of one of the preceding point groups (e.g. $S_2$ is the same as $C_i$, and a molecule with this symmetry would already have been classified).

### Dihedral groups

The dihedral groups have $n$ two-fold axes perpendicular to the principal $n$-fold axis. These $C_2$ axis are called dihedral axes. Dihedral groups groups include:

$D_n$ - Contains the identity, an $n$-fold axis of rotation, and $n$ 2-fold rotations about axes perpendicular to the principal axis.

$D_{nd}$ - Contains the same symmetry elements as $D_n$ with the addition of $n$ dihedral mirror planes.

![A molecular model showing interconnected atoms represented by spheres in various sizes and shades of gray.](media/17588-9.png)

$D_{nh}$ - Contains the same symmetry elements as $D_n$ with the addition of a horizontal mirror plane.

- There are $n$-fold vertical mirror places ($\sigma_v$)
- Includes $n$-fold improper axis when $n>2$
- They are centrosymmetric when $n$ is even

$D_{\infty h}$ - Same as $D_{nh}$, except the principal rotational axis is an infinite-fold $C_\infty$.

- This is the point group for all linear centrosymmetric linear molecules (e.g. H<sub>2</sub>, CO<sub>2</sub>)

![Two overlapping circles with a light gray fill and black outlines.](media/17584-7.png)

### Cubic groups

The following groups are the cubic groups, which contain more than one principal axis. The cubic groups are associated with polyhedra that are geometrically related to the cube. All are characterized by the presence of multiple, intersecting, high-order rotational axes. They separate into the tetrahedral groups ($T_d$, $T_h$ and $T$) and the octahedral groups ($O$ and $O_h$).

$T_d$ - Contains all the symmetry elements of a regular tetrahedron, including the identity, 4 $C_3$ axes, 3 $C_2$ axes, 6 dihedral mirror planes, and 3 $S_4$ axes e.g. $\ce{CH_4}$.

- Example: Methane, $\ce{C_4}$

![3D model of a molecule with one central larger sphere and four smaller spheres positioned around it.](media/17586-11.png)

$T$ - Same as for $T_d$ but no planes of reflection.

$T_h$ - Same as for $T$ but contains a center of inversion.

$O_h$ - The group of the regular octahedron.

- Example: Sulfur hexafluoride, $\ce{SF_6}$

![A 3D molecular model with a central dark sphere surrounded by six lighter spheres, representing a molecular structure.](media/17587-14.png)

$O$ - Same as for $O_h$, but with no planes of reflection.

$I_h$ - Icoshedral, a geometric shape with 20 faces.

- Example: Buckminsterfullerene, ($\ce{C_{60}}$)

### Summary of groups

The final group is the full rotation group $R_3$, which consists of an infinite number of $C_n$ axes with all possible values of $n$ and describes the symmetry of a sphere. Atoms (but no molecules) belong to $R_3$, and the group has important applications in atomic quantum mechanics. However, we won’t be treating it any further here.

> TABLE {tab:2} cols=10
> caption: Table 12.2.2: Common Point Groups for Molecules

| {term:Nonaxial groups} | C<sub>1</sub> | C<sub>s</sub> | C<sub>i</sub> | - | - | - | - | - | - |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {term:C<sub>n</sub> groups} | C<sub>2</sub> | C<sub>3</sub> | C<sub>4</sub> | C<sub>5</sub> | C<sub>6</sub> | C<sub>7</sub> | C<sub>8</sub> | - | - |
| {term:D<sub>n</sub> groups} | D<sub>2</sub> | D<sub>3</sub> | D<sub>4</sub> | D<sub>5</sub> | D<sub>6</sub> | D<sub>7</sub> | D<sub>8</sub> | - | - |
| {term:C<sub>nv</sub><sub> </sub>groups} | C<sub>2v</sub> | C<sub>3v</sub> | C<sub>4v</sub> | C<sub>5v</sub> | C<sub>6v</sub> | C<sub>7v</sub> | C<sub>8v</sub> | - | - |
| {term:C<sub>nh</sub> groups} | C<sub>2h</sub> | C<sub>3h</sub> | C<sub>4h</sub> | C<sub>5h</sub> | C<sub>6h</sub> | - | - | - | - |
| {term:D<sub>nh</sub> groups} | D<sub>2h</sub> | D<sub>3h</sub> | D<sub>4h</sub> | D<sub>5h</sub> | D<sub>6h</sub> | D<sub>7h</sub> | D<sub>8h</sub> | - | - |
| {term:D<sub>nd</sub> groups} | D<sub>2d</sub> | D<sub>3d</sub> | D<sub>4d</sub> | D<sub>5d</sub> | D<sub>6d</sub> | D<sub>7d</sub> | D<sub>8d</sub> | - | - |
| {term:S<sub>n</sub> groups} | S<sub>2</sub> | - | S<sub>4</sub> | - | S<sub>6</sub> |  | S<sub>8</sub> | S<sub>10</sub> | S<sub>12</sub> |
| {term:Cubic groups} | T | T<sub>h</sub> | T<sub>d</sub> | O | O<sub>h</sub> | I | I<sub>h</sub> | - | - |
| {term:Linear groups} | C<sub>∞v</sub> | D<sub>∞h</sub> | - | - | - | - | - | - | - |

Once you become more familiar with the symmetry elements and point groups described above, you will find it quite straightforward to classify a molecule in terms of its point group. In the meantime, the flowchart shown below provides a step-by-step approach to the problem.

![alt](media/17590-Sym1.jpg.bmp)

<sup>1</sup>Though the Hermann-Mauguin system can be used to label point groups, it is usually used in the discussion of crystal symmetry. In crystals, in addition to the symmetry elements described above, translational symmetry elements are very important. Translational symmetry operations leave no point unchanged, with the consequence that crystal symmetry is described in terms of *space groups* rather than *point groups*.

## Symmetry and Physical Properties

Carrying out a symmetry operation on a molecule must not change any of its physical properties. It turns out that this has some interesting consequences, allowing us to predict whether or not a molecule may be chiral or polar on the basis of its point group.

For a molecule to have a permanent dipole moment, it must have an asymmetric charge distribution. The point group of the molecule not only determines whether the molecule may have a dipole moment, but also in which direction(s) it may point. If a molecule has a $C_n$ axis with $n > 1$, it {term:cannot} have a dipole moment perpendicular to the axis of rotation (for example, a $C_2$ rotation would interchange the ends of such a dipole moment and reverse the polarity, which is not allowed – rotations with higher values of $n$ would also change the direction in which the dipole points). Any dipole must lie parallel to a $C_n$ axis.

Also, if the point group of the molecule contains any symmetry operation that would interchange the two ends of the molecule, such as a $\sigma_h$ mirror plane or a $C_2$ rotation perpendicular to the principal axis, then there cannot be a dipole moment along the axis. The only groups compatible with a dipole moment are $C_n$, $C_{nv}$ and $C_s$. In molecules belonging to $C_n$ or $C_{nv}$ the dipole must lie along the axis of rotation.

One example of symmetry in chemistry that you will already have come across is found in the isomeric pairs of molecules called enantiomers. Enantiomers are non-superimposable mirror images of each other, and one consequence of this symmetrical relationship is that they rotate the plane of polarized light passing through them in opposite directions. Such molecules are said to be chiral,<sup>2</sup> meaning that they cannot be superimposed on their mirror image. Formally, the symmetry element that precludes a molecule from being chiral is a rotation-reflection axis $S_n$. Such an axis is often implied by other symmetry elements present in a group.

For example, a point group that has $C_n$ and $\sigma_h$ as elements will also have $S_n$. Similarly, a center of inversion is equivalent to $S_2$. As a rule of thumb, a molecule definitely cannot have be chiral if it has a center of inversion or a mirror plane of any type ($\sigma_h$, $\sigma_v$ or $\sigma_d$), but if these symmetry elements are absent the molecule should be checked carefully for an $S_n$ axis before it is assumed to be chiral.

:::note [note] Chirality

The word chiral has its origins in the Greek word for hand ($\chi$$\epsilon$$\rho$$\iota$, pronounced ‘cheri’ with a soft ch as in ‘loch’). A pair of hands is also a pair of non-superimposable mirror images, and you will often hear chirality referred to as ‘handedness’ for this reason.
:::

## Summary

All molecules can be described in terms of their symmetry or lack thereof, which may contain symmetry elements (point, line, plane). Identity, rotation, reflection, and inversion are symmetry operations (movement of the molecules such that after the movement, all the atoms of the molecules is coincidental with equivalent atom of the molecule in original).
