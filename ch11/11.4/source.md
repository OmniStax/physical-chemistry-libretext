<!-- LibreTexts page 13479: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/11:_Computational_Quantum_Chemistry/11.04:_Orbital_Polarization_Terms_in_Basis_Sets -->
# Orbital Polarization and Diffuse Terms in Basis Sets

## Polarization Functions

As it turns out, even the additional flexibility afforded by split-valence basis sets is not quite enough to provide a good, efficient description of chemical bonding for most atoms. This is because the electron density in a molecule is more anisotropic around each atom than the electron density in a bare atom. This is an important result when considering accurate representations of bonding between atoms, because the very presence of the bonded atom makes the energetic environment of the electrons spherically asymmetric. In order to better account for the shapes of molecular orbitals, is is almost mandatory to supplement the split-valence basis sets with additional *polarization functions*: orbital functions with greater $\ell$ values than the valence orbitals of the atom.

> FIGURE {fig:11.4.1} src=media/78139-1920px-D-polarization_function.png width=393
> alt: Diagram showing three pairs of shapes: red and green, illustrating different configurations or combinations of colored elements.
> caption: A d-polarization function added to a p orbital. (CC-BY-SA-3.0; [Rifleman 82](https://commons.wikimedia.org/wiki/User:Rifleman_82))

Similarly, d-type functions can be added to a basis set with valence p orbitals, and f-functions to a basis set with d-type orbitals, and so on.

### Notation

In the Pople basis sets, polarization functions are indicated with “stars”: for instance, 6-31G$^*$ or 6-311G$^{**}$. A single star indicates that $\ell+1$ functions are added to all second-row and higher atoms (e.g., carbon gets a set of $d$ orbitals), and a double star indicates that hydrogen and helium also receive $p$ functions. The polarization functions are each built just from a single Gaussian primitive. Most Pople style basis sets with polarization functions are optimized through HF/SCF calculations; however, the 6-311G$^{**}$ basis set was optimized by second order Møller Plesset perturbation theory (MP2) calculations, which partially account for dynamic electron correlation. A summary of some common Pople-style basis sets with polarization functions is shown in Table 11.4.1. For more on these basis sets, see [R. Krishnan et al., *J. Chem. Phys.* (1980), 72, 650](http://dx.doi.org/10.1063/1.438955) and the other papers in that series.

> TABLE {tab:1} cols=7
> caption: Table 11.4.1: Summary of contractions, number of orbital functions (OF), and number of Gaussian primitives (GTO) for selected Pople-style split valence basis sets with polarization functions.

| (l)2-4 (l)5-7 Atoms | Contraction | OF | GTO | Contraction | OF | GTO |
| --- | --- | --- | --- | --- | --- | --- |
| H–He | ($4s$)$\to$[$2s$] | 2 | 4 | ($5s1p$)$\to$[$3s1p$] | 4 | 6 |
| Li–Ne | ($10s5p1d$)$\to$[$3s2p1d$] | 14 | 30 | ($11s5p1d$)$\to$[$4s3p1d$] | 18 | 31 |
| Na–Ar | ($16s10p1d$)$\to$[$4s3p1d$] | 18 | 51 | ($13s9p1d$)$\to$[$5s4p1d$]$^\dagger$ | 22 | 45 |

## Diffuse Functions

Accurately describing negatively charged species presents a particular challenge. For example, anions tend to have very diffuse electron distributions and very large basis functions (with very small exponents) are often needed for accurate results. The additional electrons associated with anions often occupy spatially extended regions, causing the electron density to spread much farther from the nuclei than in neutral or positively charged species. Similar issues apply to radicals, van der Waals or hydrogen-bonded complexes, electronically excited states and others. Conventional split-valence basis sets generally lack the flexibility needed to represent these diffuse electron distributions adequately, potentially limiting the accuracy of the calculated electronic structure and properties.

To address this, basis sets are often supplemented with additional {term:diffuse functions}. Diffuse functions supplement a basis set in a similar manner to polarization functions by adding extra $n+1$ orbital functions.

### Notation

The presence of diffuse functions in a Pople basis set is denoted with a $+$ symbol, such as 6-31+G. A single plus indicates that one extra $n+1$ function, built from a single Gaussian primitive, is added for each orbital in the valence shell for all atoms except H and He. Two plus symbols (e.g., 6-311++G) indicate that H and He also receive $n+1$ functions. To illustrate this, in a 6-311++G basis set, a hydrogen atom’s $1s$ (valence) orbital is represented by 3 orbital functions (built from 3, 1, and 1 GTOs, respectively), and an extra orbital function consisting of just one Gaussian primitive is added to represent the $2s$ orbital. The contraction, therefore, is ($6s$)$\to$[$4s$]. A carbon atom in the same basis set receives diffuse functions to represent the $3s$ and three $3p$ orbitals. The coefficients of the Gaussian primitives in basis sets with diffuse functions are optimized by calculations of either atomic excited states or atomic anions. Diffuse and polarization functions are very often combined to effectively include the next shell after the valence shell; such basis sets are essential for calculating accurate properties of loosely-bound species. Additional examples are given in Table 11.4.2.

> TABLE {tab:2} cols=7
> caption: Table 11.4.2: Summary of contractions, number of orbital functions (OF), and number of Gaussian primitives (GTO) for selected Pople-style split valence basis sets with diffuse and polarization functions.

| (l)2-4 (l)5-7 Atoms | Contraction | OF | GTO | Contraction | OF | GTO |
| --- | --- | --- | --- | --- | --- | --- |
| H–He | ($6s$)$\to$[$4s$] | 4 | 6 | ($6s1p$)$\to$[$4s1p$] | 7 | 9 |
| Li–Ne | ($12s6p$)$\to$[$5s4p$] | 17 | 30 | ($12s6p1d$)$\to$[$5s4p1d$] | 18 | 31 |
| Na–Ar | ($14s10p$)$\to$[$6s5p$]$^\dagger$ | 21 | 44 | ($14s10p1d$)$\to$[$7s6p1d$]$^\dagger$ | 26 | 49 |

In the end, the accuracy of a calculation depends on the basis set chosen, and there are tradeoffs to be made. For the best answer, the basis set must be flexible enough to fit the shape of the “true” wavefunction, which can be accomplished by adding additional functions with different shape parameters or polarization properties to the set. The more functions that are added, though, the more time is required to complete the calculation. The farther down the periodic table the atoms are, the more functions need to be included in the basis, and the more difficult the calculations will be. In fact, for many 4th-row and higher atoms, it is common to use basis sets that include *effective core potentials*: mathematical functions that represent a classical potential that is added to the Hamiltonian in place of many of the core electrons. These basis sets reduce considerably the numbers of integrals that need to be calculated, and can make calculations of very heavy atoms with many electrons tractable. However, there are limitations, particularly for molecular properties that are sensitive to the electronic wavefunction near the nucleus (e.g., X-ray spectroscopy, NMR shielding coefficients).

## Summary

For atoms whose ground-state electronic configurations include occupied $s$ and $p$ orbitals, a common approach is to introduce a set of $d$-type {term:polarization functions} that allow the electron density to deform beyond the shapes described by the original $s$- and $p$-type functions, providing a more flexible description of the electronic distribution during chemical bonding.

The addition of {term:diffuse functions} improve the representation of electron density that extends far from the atomic nuclei. They are typically added as an extra set of uncontracted Gaussian functions with the same angular momentum types as the valence orbitals. These are very shallow Gaussian basis functions, which more accurately represent the "tail" portion of the atomic orbitals, which are distant from the atomic nuclei. These additional basis functions can be important when considering anions and other large, "soft" molecular systems.
