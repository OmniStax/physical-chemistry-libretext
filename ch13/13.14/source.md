<!-- LibreTexts page 13677: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13:_Molecular_Spectroscopy/13.14:_Group_Theory_Determines_Infrared_Activity -->
# Group Theory Determines Infrared Activity

## Determining if a Normal Modes is IR or Raman Active

A transition from $v \rightarrow v'$ is IR active if the {term:transition moment integral} contains the totally symmetric irreducible representation of the point group the molecule belongs to. The transition moment integral is derived from the one-dimensional harmonic oscillator. Using the definition of electric dipole moment $\mu$, the integral is:

$$ M(v \rightarrow v') = \langle \text{final wavefunction} | \vec{\mu} | \text{initial wavefunction } \rangle $$

or in terms of vibrational wavefunctions for a specific normal mode $| \phi (v) \rangle$

$$ M(v \rightarrow v') = \langle \phi(v' \neq 0) | \vec{\mu} | \phi (v=0) \rangle $$ {eq:M1} n=1

assuming the transition from the $v=0$ wavefunction to the $v' \neq 0$ wavefunction.

Now, consider the case that $\vec{μ}$, is a constant and therefore independent of the vibration (i.e., the electric dipole moment does not change during the vibration). This it could be taken outside the integral in Equation [ref:eq:M1] becomes

$$ M(v \rightarrow v') = \vec{\mu} \langle \phi(v' \neq 0) | \phi (v=0) \rangle $$ {eq:M2} n=2

Since $|\phi(v=0) \rangle$ and $|\phi(v =\neq0) \rangle$ are mutually orthogonal to each other, the integral in Equation [ref:eq:M1] will equal zero and the transition will {term:not} be allowed (i.e., it is forbidden). For the $M$ to be nonzero, $\vec{μ}$ must change during a vibration. This selection rule explains why homonuclear diatomic molecules do not produce an IR spectrum. There is no change in dipole moment resulting in a transition moment integral of zero and a transition that is forbidden.

For a transition to be Raman active, the same rules apply. The transition moment integral must contain the totally symmetric irreducible representation of the point group. The integral contains the polarizability tensor $\alpha$ (usually represented by a square matrix):

$$ M(v \rightarrow v') = \langle \phi(v' \neq 0) | \alpha | \phi (v=0) \rangle $$ {eq:M3} n=3

Following a similar argument as above, $\alpha$ must be nonzero for the transition to be allowed and exhibits Raman scattering.

### Character Table

For a molecule to be IR active the dipole moment has to change during the vibration. For a molecule to be Raman active the polarizability of the molecule has to change during the vibration. The reducible representation {term:Γ}{term:<sub>vib</sub>}{term:<sub> </sub>}can also be found by determining the reducible representation of the 3N degrees of freedom of H<sub>2</sub>O, {term:Γ}<sub>tot</sub>. By applying Group Theory it is straightforward to find {term:Γ}{term:<sub>x</sub>}{term:<sub>,y,z</sub>} as well as UMA (number of unmoved atoms). Again, using water as an example with C<sub>2v</sub> symmetry where 3N = 9, {term:Γ}{term:<sub>tot</sub>} can be determined:

> TABLE {tab:1} cols=6 irregular

| C<sub>2v</sub> | E | C<sub>2</sub> | σ (xz) | σ (yz) |  |
| {term:Τ<sub>x</sub><sub>,y,z</sub>} | 3 | -1 | 1 | 1 |  |
| UMA | 3 | 1 | 1 | 3 |  |
| {term:Γ}<sub>{term:tot}</sub> | {term:9} | {term:-1} | {term:1} | {term:3} | {term:=3a<sub>1</sub> + a<sub>2</sub> + 2b<sub>1</sub> + 3b<sub>2</sub>} |
| {span=6}Note that {term:Γ}<sub>tot</sub> contains nine degrees of freedom consistent with 3N = 9. |

{term:Γ}<sub>tot</sub> contains {term:Γ}<sub>translational</sub>, {term:Γ}<sub>rotational</sub> as well as {term:Γ}<sub>vibrational</sub>. {term:Γ}<sub>trans</sub> can be obtained by finding the irreducible representations corresponding to x,y and z in the right side of the character table, {term:Γ}<sub>rot</sub> by finding the ones corresponding to R<sub>x</sub>, R<sub>y</sub> and R<sub>z</sub>. {term:Γ}<sub>vib</sub> can be obtained by {term:Γ}<sub>tot</sub> - {term:Γ}<sub>trans</sub> - {term:Γ}<sub>rot</sub>.

$$ Γ_{vib} (H_2O) = (3a_1 + a_2 + 2b_1+ 3b_2) - (a_1 + b_1 + b_2) - (a_2 + b_1 + b_2) = 2a_1 + b_2 $$

In order to determine which modes are IR active, a simple check of the irreducible representation that corresponds to x,y and z and a cross check with the reducible representation {term:Γ}<sub>vib</sub> is necessary. If they contain the same irreducible representation, the mode is IR active.

For H<sub>2</sub>O, z transforms as a<sub>1</sub>, x as b<sub>1</sub> and y as b<sub>2</sub>. The modes a1 and b2 are IR active since Γvib contains 2a<sub>1</sub> + b<sub>2</sub>.

In order to determine which modes are Raman active, the irreducible representation that corresponds to z<sup>2</sup>, x<sup>2</sup>-y<sup>2</sup>, xy, xz and yz is used and again cross checked with Γvib. For H<sub>2</sub>O, z<sup>2</sup> and x<sup>2</sup>-y<sup>2</sup> transform as a<sub>1</sub>, xy as a<sub>2</sub>, xz as b<sub>1</sub> and yz as b<sub>2</sub>.The modes a<sub>1</sub> and b<sub>2</sub> are also Raman active since Γ<sub>vib</sub> contains both these modes.

The IR spectrum of H2O does indeed have three bands as predicted by Group Theory. The two symmetric stretches v1 and v2 occur at 3756 and 3657 cm-1 whereas the bending v3 motion occurs at 1595 cm-1.

In order to determine which normal modes are stretching vibrations and which one are bending vibrations, a stretching analysis can be performed. Then the stretching vibrations can be deducted from the total vibrations in order to obtain the bending vibrations. A double-headed arrow is drawn between the atom as depicted below:

![Diagram of a water molecule (H2O) showing one oxygen atom connected to two hydrogen atoms with arrows indicating bonds.](media/9696-water.png)

Then a determination of how the arrows transform under each symmetry operation in C2v symmetry will yield the following results:

> TABLE {tab:2} cols=6

| C<sub>2v</sub> | E | C<sub>2</sub> | σ (xz) | σ (yz) |  |
| --- | --- | --- | --- | --- | --- |
| {term:Γ}{term:<sub>stretch</sub>} | 2 | 0 | 0 | 2 | {term:= a<sub>1</sub> + b<sub>2</sub>} |

$$ Γ_{bend} = Γ_{vib} - Γ_{stretch} = 2a_1 + b_2 -a_1 - b_2 = a_1 $$

H<sub>2</sub>O has two stretching vibrations as well as one bending vibration. This concept can be expanded to complex molecules such as PtCl4<sup>-</sup>. Four double headed arrows can be drawn between the atoms of the molecule and determine how these transform in D<sub>4h</sub> symmetry. Once the irreducible representation for {term:Γ}<sub>stretch</sub> has been worked out, {term:Γ}<sub>bend</sub> can be determined by {term:Γ}<sub>bend</sub> = {term:Γ}<sub>vib</sub> - {term:Γ}<sub>stretch</sub>.

Most molecules are in their zero point energy at room temperature. Therefore, most transitions do originate from the v=0 state. Some molecules do have a significant population of the v=1 state at room temperature and transitions from this thermally excited state are called {term:hot} bands.

## References

1. Merlin, J.C., Cornard, J.P., *J. Chem. Educ*., {term:2006}, 83 (9), p 1383. {term:DOI:} 10.1021/ed083p1393
2. McGuinn, C.J., *J. Chem. Educ*., {term:1982}, 59 (10), p 813. {term:DOI:} 10.1021/ed059p813
3. Harris, D.C., Bertolucci, M.D., *Symmetry and Spectroscopy: An introduction to Vibrational and Electronic Spectroscopy*. Dover Publocations, Inc., New York, {term:1989}.
4. McQuarrie, D. A., Simon, J.D., *Physical Chemistry: A Molecular Approach*, University Science Books, Sausalito, California, {term:1997}; 518-521.
5. Housecroft, C.E., Sharpe, A.G., {term:Inorganic Chemistry.} Pearson Education Limited, England, {term:2008}, 107.
6. Atkins, P., dePaula, J., *Physical Chemistry*, W.H. Freeman and Company, New York, {term:2002}, 520-523.
7. Bishop, D.M., *Group Theory and Chemistry*, Dover Publications, Inc, New York, {term:1973}, 166.
