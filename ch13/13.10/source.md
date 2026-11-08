<!-- LibreTexts page 13673: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13:_Molecular_Spectroscopy/13.10:_Irreducible_Representation_of_Point_Groups -->
# Irreducible Representation of Point Groups

There exists an important fact about normal coordinates. Each of these coordinates belongs to an irreducible representation of the point the molecule under investigation. Vibrational wavefunctions associated with vibrational energy levels share this property as well. The normal coordinates and the vibration wavefunction can be categorized further according to the point group they belong to. From the character table predictions can be made for which symmetries can exist. The irreducible representation offers insight into the IR and/or Raman activity of the molecule in question.

## Symmetry of normal modes

It is important to realize that every normal mode has a certain type of symmetry associated with it. Identifying the point group of the molecule is therefore an important step. With this in mind it is not surprising that every normal mode forms a basis set for an irreducible representation of the point group the molecule belongs to. For a molecule such as water, having a structure of $\ce{XY2}$, three normal coordinates can be determined. The two stretching modes are equivalent in symmetry and energy. The figure below shows the three normal modes for the water molecule:

> FIGURE {fig:13.10.1} src=media/9691-Normal_modes_water.png width=350px
> alt: Normal_modes_water.png
> caption: Three normal modes of water

By convention, with nonlinear molecules, the symmetric stretch is denoted v<sub>1</sub> whereas the asymmetric stretch is denoted v<sub>2</sub>. Bending motions are v<sub>3</sub>. With linear molecules, the bending motion is $\nu_2$ whereas asymmetric stretch is v<sub>3</sub>.

The water molecule has C<sub>2v</sub> symmetry and its symmetry elements are E, C<sub>2</sub>, σ(xz) and σ(yz). To determine the symmetries of the three vibrations and how they each transform, symmetry operations will be performed. As an example, performing C<sub>2</sub> operations using the two normal mode v<sub>2</sub> and v<sub>3</sub> gives the following transformation:

> FIGURE {fig:13.10.2} src=media/9695-V2_C2_operation.png width=350px
> alt: V2_C2_operation.png
> caption: Symmetry operations on the symmetric and asymmetric stretches of water

Once all the symmetry operations have been performed in a systematic manner for each modes the symmetry can be assigned to the normal mode using the character table for C<sub>2v</sub>:

> TABLE {tab:1} cols=6
> caption: Table 13.10.2: Character table for the C<sub>2v</sub> point group

| {term:C<sub>2v</sub>} | {term:E} | {term:C2} | {term:σ (xz)} | {term:σ (yz)} |  |
| --- | --- | --- | --- | --- | --- |
| {term:ν<sub>1</sub>} | 1 | 1 | 1 | 1 | {term:= a<sub>1</sub>} |
| {term:ν<sub>2</sub>} | 1 | 1 | 1 | 1 | {term:= a<sub>1</sub>} |
| {term:ν<sub>3</sub>} | 1 | -1 | -1 | 1 | {term:= b<sub>2</sub>} |

Water has three normal modes that can be grouped together as the reducible representation

$$ Γ_{vib}= 2a_1 + b_2. $$

Determination of normal modes becomes quite complex as the number of atoms in the molecule increases. Nowadays, computer programs that simulate molecular vibrations can be used to perform these calculations. The example of [PtCl<sub>4</sub>]<sup>2-</sup> shows the increasing complexity (Figure 13.10.2). The molecule has five atoms and therefore 15 degrees of freedom, 9 of these are vibrational degrees of freedom. The nine normal modes are exemplified below along with the irreducible representation the normal mode belongs to (D<sub>4h</sub> point group).

> FIGURE {fig:13.10.3} src=media/9692-PtCl4_modes.png width=471
> alt: PtCl4_modes.png
> caption: A<sub>1g</sub>, b<sub>1g</sub> and e<sub>u</sub> are stretching vibrations whereas b<sub>2g</sub>, a<sub>2u</sub>, b<sub>2u</sub> and e<sub>u</sub> are bending vibrations.
