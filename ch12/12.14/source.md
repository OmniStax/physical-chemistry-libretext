<!-- LibreTexts page 433984: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/12:_Group_Theory_-_The_Exploitation_of_Symmetry/12.14:_Symmetry_Adapted_Linear_Combinations_are_the_Sum_over_all_Basis_functions -->
# Symmetry Adapted Linear Combinations are the Sum over all Basis functions

The construction of linear combinations of the basis of atomic movements allows the vibrations belonging to irreducible representations to be investigated. The wavefunction of these symmetry equivalent orbitals is referred to as {term:Symmetry Adapted Linear Combinations}, or SALCs. SALCs (Symmetry Adapted Linear Combinations) are the linear combinations of basis sets composed of the stretching vectors of the molecule. The SALCs of a molecule can help determine binding schemes and symmetries. The procedure used to determine the SALCs of a molecule is also used to determine the LCAO of a molecule. The LCAO, Linear Combination of Atomic Orbitals, uses the basis set of atomic orbitals instead of stretching vectors. The LCAO of a molecule provides a detailed description of the molecular orbitals, including the number of nodes and relative energy levels.

Symmetry adapted linear combinations are the sum over all the basis functions:

$$ \phi_{i} =\displaystyle\sum_{j} c_{ij} b_{j} $$ {eq:1} n=1

$ϕ_i$ is the i<sup>th</sup> SALC function, bj is the j<sup>th</sup> basis function, and $c_{ij}$ is a coefficient which controls how much of $b_j$ appears in $ϕ_i$. In method two, the projection operator is used to obtain the coefficients consistent with each irreducible representation.<sup>1</sup>

The SALCs of a molecule may be constructed in {term:two} ways. The first method uses a basis set composed of the irreducible representation of the stretching modes of the molecule. On the other hand, the second method uses a projection operator on each stretching vector. When determining the irreducible representations of the stretching modes, the reducible representations for all the vibrational modes must first be determined. Basis vectors are assigned characters and are treated as individual objects. A

## Background

In order to understand and construct SALCs, a background in [group theory](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Group_Theory/Group_Theory%3A_Theory) is required. The identification of the point group of the molecule is essential for understanding how the application of operations affects the molecule. This allows for the determination of the nature of the stretching modes. As a review, let’s first determine the stretching modes of water together. Water has the point group C<sub>2v</sub>. Table 1 is the character table for the C<sub>2v</sub> point group.

> TABLE {tab:1} cols=7
> caption: Table 12.14.1: C<sub>2v</sub> Character Table

| {term:C}{term:<sub>2v</sub>} | {term:E} | {term:C}{term:<sub>2</sub>} | {term:σ}{term:<sub>v</sub>}{term:(xz)} | {term:σ}{term:<sub>v</sub>}{term:'(yz)} |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| A<sub>1</sub> | 1 | 1 | 1 | 1 | *z* | x<sup>2</sup>, y<sup>2</sup>, *z*<sup>2</sup> |
| A<sub>2</sub> | 1 | 1 | −1 | −1 | R<sub>z</sub> | xy |
| B<sub>1</sub> | 1 | −1 | 1 | −1 | x, R<sub>y</sub> | x*z* |
| B<sub>2</sub> | 1 | −1 | −1 | 1 | y, R<sub>x</sub> | y*z* |

The first step in determining stretching modes of a molecule is to add the characters contained in the x, y, and z rows to obtain the total reducible representation of the xyz coordinates, Γ<sub>XYZ</sub>. Γ<sub>XYZ</sub> can also be found by applying the symmetry operations to the three vectors (x, y, and z) of the coordinate system of the molecule. The next step involves the investigation of the atoms that remain unchanged when an operation is applied, Γ<sub>UMA</sub>. This step refers to the unmoved atoms (UMA). Multiplying Γ<sub>XYZ</sub> and Γ<sub>UMA</sub> gives the reducible representation for the molecule referred to as Γ<sub>TOTAL</sub>. The Γ<sub>TOTAL</sub> is the reducible representation for all the modes of the molecule (vibrational, rotational, and translational) and can also be determined by applying the symmetry operations to each coordinate vector (x, y, and z) on each atom.

> TABLE {tab:2} cols=5
> caption: Table 12.14.2: C<sub>2v</sub> Reducible Representation for H2O

| {term:C}{term:<sub>2v</sub>} | {term:E} | {term:C}{term:<sub>2</sub>} | {term:σ}{term:<sub>v</sub>}{term:(xz)} | {term:σ}{term:<sub>v</sub>}{term:'(yz)} |
| --- | --- | --- | --- | --- |
| Γ<sub>XYZ</sub> | 3 | -1 | 1 | 1 |
| Γ<sub>UMA</sub> | 3 | 1 | 1 | 3 |
| Γ<sub>TOTAL</sub> | 9 | -1 | 1 | 3 |

Γ<sub>TOTAL</sub> is then reduced to later give the stretching modes that are unique to the molecule. First, the reduction formula is applied to decompose the reducible representation:

$$ a_{i}=\dfrac{1}{h}\displaystyle\sum_{R}(X^{R}X_{i}^{R}C^{R}) $$ {eq:2} n=2

Here, *a<sub>i</sub>* is the number of times the irreducible representation will appear in the initial reducible representation. The order of the point group is represented by *h; R* is an operation of the group; *X<sup>R</sup>* is a character of the operation *R* in the reducible representation; *X<sub>i</sub><sup>R</sup>* is a character of the operation *R* in the irreducible representation, and *C<sup>R</sup>* is the number of members in the class to which *R* belongs. Applying this formula and subtracting the representations obtained from the basis functions x, y, z, R<sub>x</sub>, R<sub>y</sub>, and R<sub>z</sub> (for the translations and rotations of the molecule) gives the irreducible representation that corresponds to the vibrational states of the molecule:

Γ<sub>Vibration</sub> = 2a<sub>1</sub> + b<sub>2</sub>

A simple check can be performed to determine that the right number of modes was obtained. For linear molecules (3N-5) gives the correct number of [normal modes](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Spectroscopy/Vibrational_Spectroscopy/Vibrational_Modes/Normal_Modes). For molecules with any other shape otherwise known as non-linear molecules, the formula is (3N-6). *N* represents the number of atoms in a molecule. Let’s double check the above water example:

$$ (3N-6) N=3 $$ {eq:3} n=3

$$ [3(3)-6] = 3 $$

Water should have three vibrational modes. When the irreducible representation was obtained, it was seen that water has two a<sub>1</sub> modes and a b<sub>2</sub>mode for a total of three.

When double checking that you have the correct number of normal modes for other molecules, remember that the irreducible representation E is doubly degenerate and counts as two normal modes. T is triply degenerate and counts for three normal modes, etc.

## Constructing SALCs

### Method 1

There are multiple ways of constructing the SALCs of a molecule. The first method uses the known symmetries of the stretching modes of the molecule. To investigate this method, the construction of the SALCs of water is examined. Water has three vibrational states, 2a<sub>1</sub>+b<sub>2</sub>. Two of these vibrations are stretching modes. One is symmetric with the symmetry A<sub>1</sub>, and the other is antisymmetric with the symmetry B<sub>2</sub>. While looking for the SALC of a molecule, one uses vectors represented by *b<sub>j</sub>* as the basis set. The vectors demonstrate the irreducible representations of molecular vibrations.

> FIGURE {fig:12.14.1} src=media/9720-8.JPG width=388
> alt: 8.JPG
> caption: The stretching modes of H<sub>2</sub>O.

The SALCs of water can be composed by creating a linear combination of the stretching vectors.

$$ \phi(A_{1})=b_{1}+b_{2} $$

and

$$ \phi(B_{1})=b_{1}-b_{2} $$ {eq:4} n=4

#### Normalization

The final step in constructing the SALCs of water is to normalize expressions. To normalize the SALC, multiply the entire expression by the normalization constant that is the inverse of the square root of the sum of the squares of the coefficients within the expression.

$$ \phi_{i}=N\displaystyle\sum_{j}c_{ij}b_{j} $$ {eq:5} n=5

$$ N=\dfrac{1}{\sqrt{\displaystyle\sum_{j=1}^{n}c_{ij}^{2}}} $$ {eq:6} n=6

$$ \phi(A_{1})=\dfrac{1}{\sqrt{2}}(b_{1}+b_{2}) $$

and

$$ \phi(B_{1})=\dfrac{1}{\sqrt{2}}(b_{1}-b_{2}) $$

Normalizing the SALCs ensures that the magnitude of the SALC is unity, and therefore the dot product of any SALC with itself will equal one.

### Method 2

The other method for constructing SALCs is the projection operator method. The SALC of a molecule can be constructed in the same manner as the LCAO, Linear Combination of Atomic Orbitals, however the basis set differs. While looking for the SALCs of a molecule, one uses vectors represented by *b<sub>j</sub>*, on the other hand, while looking for the LCAO of a molecule, one uses atomic orbitals as the basis set. The vectors demonstrate the possible vibration of the molecule. While constructing SALCs, the basis vectors can be treated as individual vectors.

:::example {ex:12.14.1} Water

Let’s take a look at how to construct the SALC for water. The first step in constructing the SALC is to label all vectors in the basis set. Below are the bond vectors of water that will be used as the basis set for the SALCs of the molecule.

> FIGURE {fig:12.14.2} src=media/9719-7.JPG width=221px
> alt: 7.JPG
> caption: Labeled vectors of H<sub>2</sub>O.

Next, the basis vector, *v*, is transformed by *T<sub>j</sub>*, the *j*th symmetry operation of the molecule’s point group. As the vector of the basis set is transformed, record the vector that takes its place. Water is a member of the point group C<sub>2V</sub>. The Symmetry elements of the C<sub>2V</sub> point group are E, C<sub>2</sub>, σ<sub>v</sub>, σ<sub>v’</sub>.

The i<sup>th</sup> SALC function, ϕ<sub>i</sub>is shown below using the vector *v=b<sub>1</sub>*.

> FIGURE {fig:12.14.3} src=media/9716-4.JPG width=720px
> alt: 4.JPG
> caption: The transformations of the basis vectors of H<sub>2</sub>O.

Once the transformations have been determined, the SALC can be constructed by taking the sum of the products of each character of a representation within the point group and the corresponding transformation. The SALCs functions are the collective transformations of the basis sets represented by ϕ<sub>i</sub>where *X<sub>i</sub>(j)* is the character of the *i*th irreducible representation and the *j*th symmetry operation.

$$ \phi_{i}=\displaystyle\sum_{j}X_{i}(j)T_{j}\nu $$ {eq:7} n=7

[![5.JPG](media/9717-5.JPG)](https://chem.libretexts.org/@api/deki/files/9717/5.JPG?revision=1)

{term:Table 12.14.3:} Projection Operator method for C<sub>2v</sub>

The final step in constructing the SALCs of water is to normalize expressions.

[![6.JPG](media/9718-6.JPG)](https://chem.libretexts.org/@api/deki/files/9718/6.JPG?revision=1)

*{term:Table 12.14.4:} Normalized SALCs of H<sub>2</sub>O*

There are two SALCs for the water molecule, ϕ<sub>1</sub>(A<sub>1</sub>) and ϕ<sub>1</sub>(B<sub>2</sub>). This demonstrates that water has two stretching modes, one is a totally symmetric stretch with the symmetry, A<sub>1</sub>, and the other is an antisymmetric stretch with the symmetry B<sub>2</sub>.

> FIGURE {fig:12.14.4} src=media/9720-8.JPG width=474px
> alt: 8.JPG
> caption: The stretching modes of H<sub>2</sub>O resulting from Method 2.
:::

## Interpreting SALCs

Both methods of construction result in the same SALCs. Only irreducible representations corresponding to the symmetries of the stretching modes of the molecule will produce a SALC that is non-zero. Method 1 only utilized the known symmetries of the vibrational modes. All irreducible representations of the point group were used, but the representations that were not vibrational modes resulted in SALCs equal to zero.

Therefore, with the SALCs of a molecule given, all the symmetries of the stretching modes are identified. This allows for a clearer understanding of the spectroscopy of the molecule. Even though vibrational modes can be observed in both infrared and Raman spectroscopy, the SALCs of a molecule cannot identify the magnitude or frequency of the peak in the spectra. The normalized SALCs can, however, help to determine the relative magnitude of the stretching vectors. The magnitude can be determined by the equation below.

$$ a \cdot b= |a||b|cos \theta $$ {eq:8} n=8

The resulting A<sub>1</sub> and B<sub>1</sub> symmetries for the above water example are each active in both Raman and IR spectroscopies, according to the C<sub>2v</sub> character table. If the vibrational mode allows for a change in the dipole moment, the mode can be observed through infrared spectroscopy. If the vibrational mode allows for a change in the polarization of the molecule, the mode can be observed through Raman spectroscopy. Both stretching and bending modes are seen in the spectra, however only stretching modes are expressed in the SALCs.

:::example {ex:12.14.2} Difluorobenzene

The SALCs of a molecule can also provide insight to the geometry of a molecule. For example, SALCs can aid in determining the differences between para-difluorobenzene and ortho-difluorobenzene. The SALCs for these two molecules are given below.

> FIGURE {fig:12.14.5} src=media/9710-16.JPG
> alt: 16.JPG
> caption: para-difluorobenzene

$$ \phi (A_{g})= \dfrac{1}{2} (b_{1} + b_{2} + b_{3} +b_{4}) $$

$$ \phi (B_{1g})= \dfrac{1}{2} (b_{1} - b_{2} + b_{3} -b_{4}) $$

$$ \phi (B_{2u})= \dfrac{1}{2} (b_{1} - b_{2} - b_{3} +b_{4}) $$

$$ \phi (B_{3u})= \dfrac{1}{2} (b_{1} + b_{2} - b_{3} -b_{4}) $$

> FIGURE {fig:12.14.6} src=media/9711-17.JPG
> alt: 17.JPG
> caption: ortho-difluorobenzene

$$ \phi _{1} (A_{1})= \dfrac{1}{\sqrt{2}} (b_{1} + b_{2} + b_{3} +b_{4}) $$

$$ \phi _{2} (A_{1})= \dfrac{1}{\sqrt{2}} (b_{1} - b_{2} + b_{3} -b_{4}) $$

$$ \phi _{1} (B_{1})= \dfrac{1}{\sqrt{2}} (b_{1} - b_{2} - b_{3} +b_{4}) $$

$$ \phi _{2} (B_{1})= \dfrac{1}{\sqrt{2}} (b_{1} + b_{2} - b_{3} -b_{4}) $$

From the SALCs, it is seen that para-difluorobenzene has four stretching modes and ortho-difluorobenzene has only two. Therefore, it is no surprise that the vibrational spectroscopy of the para-difluorobenzene shows more peaks than the ortho-difluorobenzene.

> FIGURE {fig:12.14.7} src=media/9712-18_para.JPG
> alt: 18 para.JPG
> caption: FT-IR Raman Spectrum of para-difluorobenzene<sup>4</sup>

> FIGURE {fig:12.14.8} src=media/9713-19_ortho.JPG
> alt: 19 ortho.JPG
> caption: FT-IR Raman Spectrum of ortho-difluorobenzene<sup>5</sup>
:::

## Applications

The SALCs of a molecule can be used to understand the stretching modes and binding schemes of a molecule. More information can also be interpreted when applying the projection operator used in SALCs on the atomic orbitals of the molecule. This results in the determination of the linear combination of atomic orbitals (LCAO), which gives information on the molecular orbitals of the molecule. The [molecular orbitals](https://chem.libretexts.org/Under_Construction/Purgatory/Core_Construction/Earley/Molecular_Orbitals) (MO) of a molecule are often constructed as LCAOs. Each MO is a solution to the Schrödinger equation and is an eigenfunction of the Hamiltonian operator. The LCAOs can be determined in the same manner as the SALCs of a molecule, with the use of a projection operator. The difference is that the basis set is no longer stretching vectors, but instead the atomic orbitals of the molecule. Hydrogen only has s orbitals, but oxygen has s and p orbitals, where the p<sub>x</sub>, p<sub>y</sub>, and p<sub>z</sub> all transform differently and therefore must be treated differently.

Once the LCAOs of the molecule have been determined, the expressions can be interpreted into images of the orbitals bonding. If two orbitals are of the same sign in the expression, the electrons in the orbitals are in phase with each other and are bonding. If two orbitals are of the opposite sign in the expression, the electrons in the orbitals are out of phase with each other and are antibonding. The image below shows the atomic orbitals' phases (or signs) as red or blue lobes.

> FIGURE {fig:12.14.9} src=media/9709-15.JPG width=220px
> alt: 15.JPG
> caption: Atomic Orbitals of H<sub>2</sub>O.

Any separation between two antibonding atomic orbitals is a planar node. As the number of nodes increases, so does the level of antibonding. This allows for the LCAO to place the molecular orbitals in order of increasing energy, which can be used in constructing the molecular orbital (MO) diagram of the molecule. The irreducible representation used to construct the LCAO is used to describe the MOs. The LCAOs for water are shown below with red dotted lines showing the nodes. Notice the nodes for the p<sub>x</sub> orbitals are in a different plane than the s orbitals of the hydrogens, so these are degenerate and nonbonding.

> FIGURE {fig:12.14.10} src=media/9704-10.JPG
> alt: 10.JPG
> caption: Molecular Orbital diagram for H<sub>2</sub>O in order of increasing energy.

Information from the LCAO of water can also be used to analyze and anticipate the adsorption of water onto various surfaces. Evarestov and Bandura used this technique to identify the water adsorption on Y-doped BaZrO<sub>3</sub> and TiO<sub>2 </sub>(Rutile) respectively.<sup>2,3</sup>

:::example {ex:?} 2

Applying a combination of Methods 1 and 2, the SALCs for CBr<sub>2</sub>H<sub>2</sub> can be determined. The point group of this molecule is C<sub>2v</sub>, making it similar to the determination of SALCs for water.

> FIGURE {fig:12.14.11} src=media/9723-cbr2h2.png width=156px
> alt: A simple black line drawing of a paper airplane and a checkmark, suggesting approval or confirmation.
> caption: CBr<sub>2</sub>H<sub>2</sub>, point group C<sub>2v.</sub>

However, the central carbon contains more than one type of attached atom; therefore, the stretching analysis must be performed in pieces. First, the C-H stretches are examined, followed by the C-Br stretches:

> TABLE {tab:3} cols=6
> caption: Table 5: Irreducible Representations for C-H and C-Br stretches in CBr2H2.

| {term:C<sub>2V</sub>} | {term:E} | {term:C<sub>2</sub>} | {term:σ<sub>V</sub>} | {term:σ<sub>V’</sub>} | {term:Irreducible Representation} |
| --- | --- | --- | --- | --- | --- |
| Γ<sub>C-H</sub> | 2 | 0 | 0 | 2 | Γ<sub>C-H </sub>= A<sub>1 </sub>+ B<sub>2</sub> |
| Γ<sub>C-Br</sub> | 2 | 0 | 2 | 0 | Γ<sub>C</sub><sub>-Br </sub>= A<sub>1 </sub>+ B<sub>1</sub> |

Applying the projection operator method to C-Br and C-H stretches individually, the SALCs are obtained in the same fashion as before.

> TABLE {tab:4} cols=6
> caption: Table 6: SALCs for CBr2H2.

| {term:Γ<sub>C-Br</sub>} | {term:E} | {term:C<sub>2</sub>} | {term:σ<sub>V</sub>} | {term:σ<sub>V’</sub>} | {term:SUM} |
| --- | --- | --- | --- | --- | --- |
| A<sub>1</sub>T<sub>j</sub>(b<sub>1</sub>) | b<sub>1</sub> | b<sub>2</sub> | b<sub>1</sub> | b<sub>2</sub> | 2(b<sub>1</sub> + b<sub>2</sub>) |
| B<sub>1</sub>T<sub>j</sub>(b<sub>1</sub>) | b<sub>1</sub> | -b<sub>2</sub> | b<sub>1</sub> | -b<sub>2</sub> | 2(b<sub>1</sub> - b<sub>2</sub>) |
:::

> TABLE {tab:5} cols=6
> caption: Table 7: SALCs for CBr2H2.

| {term:Γ<sub>C-H</sub>} | {term:E} | {term:C<sub>2</sub>} | {term:σ<sub>V</sub>} | {term:σ<sub>V’</sub>} | {term:SUM} |
| --- | --- | --- | --- | --- | --- |
| A<sub>1</sub>T<sub>j</sub>(a<sub>1</sub>) | a<sub>1</sub> | a<sub>2</sub> | a<sub>2</sub> | a<sub>1</sub> | 2(a<sub>1</sub> + a<sub>2</sub>) |
| B<sub>2</sub>T<sub>j</sub>(a<sub>1</sub>) | a<sub>1</sub> | -a<sub>2</sub> | -a<sub>2</sub> | a<sub>1</sub> | 2(a<sub>1</sub> - a<sub>2</sub>) |

The results are normalized and the following SALCs are obtained for the C<sub>2v</sub> molecule CBr<sub>2</sub>H<sub>2</sub>:

$$ \phi CBr(A_{1})=\frac{1}{\sqrt{2}}(b_{1}+b_{2}) $$

$$ \phi CBr(B_{1}) =\frac{1}{\sqrt{2}} (b_{1}-b_{2}) $$

$$ \phi CH(A_{1}) =\frac{1}{\sqrt{2}} (a_{1}+a_{2}) $$

$$ \phi CH(B_{2}) =\frac{1}{\sqrt{2}} (a_{1}-a_{2}) $$

:::example {ex:?} 4

To obtain the SALCs for PtCl<sub>4</sub>, the same general method is applied.

> FIGURE {fig:12.14.12} src=media/9730-ptcl4.png
> alt: A simple black silhouette of an open book with pages slightly fanned out.
> caption: PtCl<sub>4</sub>, point group D<sub>4h.</sub>

However, even though the point group of the molecule is D<sub>4h</sub>, the cyclic subgroup C<sub>4 </sub>may be used (this is a more simplified character table used for spherically symmetrical molecules). Some manipulation is required in order to use this cyclic subgroup and will be discussed. Below is the C<sub>4</sub> cyclic character table.

> TABLE {tab:6} cols=5
> caption: Table 12.14.8: C4 cyclic character table.

| {term:C<sub>4</sub>} | {term:E} | {term:C<sub>4</sub><sup>1</sup>} | {term:C<sub>4</sub><sup>2</sup>} | {term:C<sub>4</sub><sup>3</sup>} |
| --- | --- | --- | --- | --- |
| A | 1 | 1 | 1 | 1 |
| B | 1 | -1 | 1 | -1 |
| E<sup>1</sup> E<sup>2</sup> | 1 1 | i -i | -1 -1 | -i i |

Notice, there are two rows for E, each singly degenerate. To solve for the characters of E, one must take the sum and difference of the two rows. Then, a reduction can be applied to obtain the easiest possible characters by dividing each row by a common factor (removing the common factor is not necessary, but it does simplify the problem as well as remove any imaginary terms):

Sum = [ (1+1) (i-i) (-1-1) (-i+i) ] = (2 0 -2 0) ÷ 2 = E<sup>1 </sup>(1 0 -1 0)

Difference = [ (1-1) (i+i) (-1+1) (-i-i) ] = (0 2i 0 -2i) ÷ 2i = E<sup>2</sup> (0 1 0 -1)

Using the above cyclic group, and the newly obtained characters for *E*, the projection operator can be applied using Method 2 for the construction of SALCs.

> TABLE {tab:7} cols=6
> caption: Table 12.14.9: SALCs for PtCl4 using Method 2.

| {term:C<sub>4</sub>} | {term:E} | {term:C<sub>4</sub><sup>1</sup>} | {term:C<sub>4</sub><sup>2</sup>} | {term:C<sub>4</sub><sup>3</sup>} | {term:SUM} |
| --- | --- | --- | --- | --- | --- |
| AT<sub>j</sub>(b<sub>1</sub>) | b<sub>1</sub> | b<sub>2</sub> | b<sub>3</sub> | b<sub>4</sub> | b<sub>1</sub> + b<sub>2</sub> + b<sub>3</sub> + b<sub>4</sub> |
| BT<sub>j</sub>(b<sub>1</sub>) | b<sub>1</sub> | -b<sub>2</sub> | b<sub>3</sub> | -b<sub>4</sub> | b<sub>1</sub> - b<sub>2</sub> + b<sub>3</sub> - b<sub>4</sub> |
| E<sup>1</sup>T<sub>j</sub>(b<sub>1</sub>) | b<sub>1</sub> | 0 | -b<sub>3</sub> | 0 | b<sub>1</sub> - b<sub>3</sub> |
| E<sup>2</sup>T<sub>j</sub>(b<sub>1</sub>) | 0 | b<sub>2</sub> | 0 | -b<sub>4</sub> | b<sub>2 </sub>- b<sub>4</sub> |

Normalizing the sum as mentioned in Method 1, the following SALCs are obtained for the D<sub>4h</sub> molecule PtCl<sub>4</sub>:

$$ \phi (A) =\frac{1}{2} (b_{1}+b_{2}+b_{3}+b_{4}) $$

$$ \phi (B)=\frac{1}{2} (b_{1}-b_{2}+b_{3}-b_{4}) $$

$$ \phi (E^{1})=\frac{1}{\sqrt{2}} (b_{1}-b_{3}) $$

$$ \phi (E^{2})=\frac{1}{\sqrt{2}} (b_{2}-b_{4}) $$
:::

:::example {ex:?} 3

Applying a combination of Methods 1 and 2, the SALCs for the C-H stretches of PF<sub>2</sub>H<sub>3</sub> can be determined. The point group of this molecule is C<sub>s</sub>. The central carbon contains more than one type of attached hydrogen; therefore, the stretching analysis must be performed in pieces. First, the C-H<sub>A</sub> stretches are examined, followed by the C-H<sub>B</sub> stretches:

> FIGURE {fig:12.14.13} src=media/9728-pf2h3.png
> alt: A simple black silhouette of a cat in a sitting position.
> caption: PF<sub>2</sub>H<sub>3</sub>, point group C<sub>s.</sub>

> TABLE {tab:8} cols=4
> caption: Table 12.14.10: Irreducible Representations for C-Ha and C-Hb stretches in PF2H3.

| {term:C}{term:<sub>s</sub>} | {term:E} | {term:σ}{term:<sub>h</sub>} | {term:Irreducible Representation} |
| --- | --- | --- | --- |
| Γ<sub>C</sub><sub>-Ha</sub> | 2 | 0 | Γ<sub>C-Ha </sub>= A’ + A” |
| Γ<sub>C-Hb</sub> | 1 | 1 | Γ<sub>C-Hb </sub>= A’ |

Applying the projection operator method to C-H<sub>A</sub> and C-H<sub>B</sub> stretches individually, the SALCs are obtained in the same fashion as before.

> TABLE {tab:9} cols=4
> caption: Table 12.14.11: SALCs for PF2H3 using Method 2.

| {term:Γ}{term:<sub>C-HB</sub>} | {term:E} | {term:σ}{term:<sub>h</sub>} | {term:SUM} |
| --- | --- | --- | --- |
| A’ Tj(b<sub>1</sub>) | b<sub>1</sub> | b<sub>2</sub> | b<sub>1 </sub>+ b<sub>2</sub> |
| A” Tj(b<sub>1</sub>) | b<sub>1</sub> | -b<sub>2</sub> | b<sub>1</sub> - b<sub>2</sub> |
| A’ T<sub>j</sub>(a<sub>1</sub>) | a<sub>1</sub> | a<sub>1</sub> | a<sub>1 + </sub>a<sub>1</sub> |

> TABLE {tab:10} cols=6
> caption: Table 12.14.12: SALCs for PF2H3 using Method 2.

| {term:Γ}{term:<sub>C</sub>}{term:<sub>-HA</sub>} | {term:E} | {term:C}{term:<sub>2</sub>} | {term:σ}{term:<sub>V</sub>} | {term:σ}{term:<sub>V’</sub>} | {term:SUM} |
| --- | --- | --- | --- | --- | --- |
| A<sub>1</sub>T<sub>j</sub>(a<sub>1</sub>) | a<sub>1</sub> | a<sub>2</sub> | a<sub>2</sub> | a<sub>1</sub> | 2(a<sub>1</sub>+ a<sub>2</sub>) |
| B<sub>2</sub>T<sub>j</sub>(a<sub>1</sub>) | a<sub>1</sub> | -a<sub>2</sub> | -a<sub>2</sub> | a<sub>1</sub> | 2(a<sub>1</sub>- a<sub>2</sub>) |

The results are normalized and the following SALCs are obtained for the C<sub>s</sub> molecule PF<sub>2</sub>H<sub>3</sub>:

$$ \phi_{1} A'=\frac{1}{\sqrt{2}} (b_{1} +b_{2} )+a_{1} = \frac{1}{sqrt{3}} (b_{1} +b_{2} +a_{1}) $$

$$ \phi_{2} A'=\frac{1}{\sqrt{2}} (b_{1} +b_{2} )-a_{1} = \frac{1}{sqrt{3}} (b_{1} +b_{2} -a_{1}) $$

$$ \phi A''=\frac{1}{\sqrt{2}} (b_{1} -b_{2} ) $$
:::

## Problems

1. Construct the SALCs for C-H stretches of ortho-difluorobenzene.
2. Construct the SALCs for ammonia.
3. Draw the nodes for the MOs of BeH<sub>2</sub> (determined by used of LCAOs) and rank the MOs in order of increasing energy.

[![11.JPG](media/9705-11.JPG)](https://chem.libretexts.org/@api/deki/files/9705/11.JPG?revision=1)

## References

1. Willock, David J. *Molecular Symmetry*. Chichester, U.K: Wiley, 2009.
2. R.A. Evarestov, A.V. Bandura, LCAO calculation of water adsorption on (001) surface of Y-doped BaZrO<sub>3</sub>, Solid State Ionics, In Press, Corrected Proof, Available online 2 October 2010, ISSN 0167-2738, DOI: 10.1016/j.ssi.2010.09.012.<br> (www.sciencedirect.com/science...8ab4e49bd4429e)
3. A. V. Bandura,, D. G. Sykes,, V. Shapovalov,, T. N. Troung,, J. D. Kubicki,<sup>,</sup> and, R. A. Evarestov. Adsorption of Water on the TiO<sub>2</sub> (Rutile) (110) Surface:  A Comparison of Periodic and Embedded Cluster Calculations. The Journal of Physical Chemistry B {term:2004} *108* (23), 7844-7853.
4. "1,4-Difluorobenzene" Sigma Aldrich. www.sigmaaldrich.com/catalog/...0&QS=ON&F=SPEC. 14 March, 2011.
5. "1,2-Difluorobenzene" Sigma Aldrich. www.sigmaaldrich.com/catalog/...AND_KEY&F=SPEC. 14 March, 2011.

## Solutions to Practice Problems

1. A<sub>1</sub>T<sub>j</sub>(b<sub>1</sub>)= \frac{1}{\sqrt{2}} (b_{1} +b_{2})\)

B<sub>2</sub>T<sub>j</sub>(b<sub>1</sub>)= \frac{1}{\sqrt{2}} (b_{1} -b_{2})\)

A<sub>1</sub>T<sub>j</sub>(b<sub>3</sub>)= \frac{1}{\sqrt{2}} (b_{3} +b_{4})\)

B<sub>2</sub>T<sub>j</sub>(b<sub>3</sub>)= \frac{1}{\sqrt{2}} (b_{3} -b_{4})\)

Then add and subtract (for in phase and out of phase) the individual linear combinations found by the projection operator to give the SALCs.

ϕ<sub>1</sub>(A<sub>1</sub>) = \frac{1}{2} (b_{1} +b_{2} +b_{3} +b_{4} )\)

ϕ<sub>2</sub>(A<sub>1</sub>) = \frac{1}{2} (b_{1} +b_{2} -b_{3} -b_{4} )\)

ϕ<sub>1</sub>(B<sub>2</sub>) = \frac{1}{2} (b_{1} -b_{2} +b_{3} -b_{4} )\)

ϕ<sub>2</sub>(B<sub>2</sub>) = \frac{1}{2} (b_{1} -b_{2} -b_{3} +b_{4} )\).

2. AT<sub>j</sub>(b<sub>1</sub>)= \frac{1}{\sqrt{3}} (b_{1} +b_{2} +b_{3} )\)

E<sub>1</sub>T<sub>j</sub>(b<sub>1</sub>)= \frac{1}{\sqrt{6}} (2b_{1} -b_{2} -b_{3} )\)

E<sub>2</sub>T<sub>j</sub>(b<sub>1</sub>)= \frac{1}{\sqrt{2}} (b_{2} -b_{3} )\)

3.

![13.JPG](media/9707-13.JPG)
