<!-- LibreTexts page 13478: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/11:_Computational_Quantum_Chemistry/11.03:_Extended_Basis_Sets -->
# Extended Basis Sets (Double Zeta and Split-Valence)

## Minimal Basis

It is useful to begin a study of basis sets by thinking of the smallest possible number of orbitals required to calculate the electronic structure of a molecule. From chemical intuition, it seems reasonable that since molecules are made from atoms, we should at least include all occupied orbitals from the constituent atoms in the basis set, and it is probably also good to include all the orbitals in partially-filled shells. For example, the electron configuration for hydrogen is $1s^1$, so the minimal basis for a molecule would involve a $1s$ orbital from each hydrogen atom. Carbon’s electron configuration is $1s^22s^22p^2$, so each carbon atom in a molecule would contribute $1s$, $2s$, and three $2p$ orbitals (even though only two of the three are occupied, it makes most sense to include the entire $2p$ shell since those orbitals are degenerate in carbon). As another example, sulfur’s electron configuration is $1s^22s^22p^63s^23p^4$, so each sulfur atom would contribute three $s$-type orbitals ($1s$, $2s$, and $3s$) and six $p$-type orbitals (the three $2p$ orbitals and the three $3p$ ones). Finally, it is conventional to include the $p$ shell for all alkali and alkaline earth metals, even though those orbitals are not occupied in the atom. Leaving out the $p$ orbitals for these metals tends to yield exceptionally poor results.

The simplest way to construct a minimal basis set would be to use a single Slater-type orbital to represent each orbital in the minimal basis. Because each atom has different orbital shapes (i.e., the $2p$ orbitals of a carbon atom are different than those of an oxygen atom), the STO for each atom’s orbital will have its own value of $\zeta$ associated with it. Some examples of values of $\zeta$ are shown in Table 11.3.1. As can be seen in the table, the value of $\zeta$ tends to increase with atomic number as the larger nuclear charge of the atom holds the electrons closer to the nucleus. Using such a minimal basis of Slater-type orbitals, the wavefunction is expressed as:

$$ \ket{\psi} = \sum_i c_i\ket{\phi_{\text{STO}}(\zeta_i)}, $$

where $\ket{\phi_{\text{STO}}(\zeta_i)}$ is the STO corresponding to orbital $i$. The total number and type of orbitals in the basis depends on which atoms make up the molecule.

> TABLE {tab:1} cols=3
> caption: Table 11.3.1: $\zeta$ values for selected atoms and orbitals, from McQuarrie.

| Atom | $\zeta_{1s}$ | $\zeta_{2s} = \zeta_{2p}$ |
| --- | --- | --- |
| H | 1.24 | $\cdots$ |
| He | 1.69 | $\cdots$ |
| Li | 2.69 | 0.80 |
| C | 5.67 | 1.72 |
| F | 8.56 | 2.55 |

## Multiple Gaussian Representation

Because of the difficulties with performing efficient numerical integration of STOs, it is extremely rare for these to be used, even as a minimal basis. The simplest minimal basis set encountered is the aforementioned STO-$N$G family, in which each Slater-type orbital is built from a linear combination of GTOs. As we go forward, it will important to be very clear with the terminology used to discuss the “orbitals.” At this point, we introduce the concept of an *orbital function*: this is a mathematical function that is analogous to an atomic orbital in an LCAO-MO calculation. The dimensionality of the Hamiltonian matrix depends on the number of orbital functions, and the solutions to the electronic Schrödinger equation are linear combinations of these orbital functions. However, each orbital function may itself be built up from multiple simpler functions. In the present case, a single STO-$N$G orbital function is built from a linear combination of *Gaussian primitives*: the individual GTOs with their own values of $d$ and $\alpha$. When the Hamiltonian is being solved, the $d$ and $\alpha$ values of the Gaussian primitives remain fixed; only the weights of the orbital functions themselves are adjusted.

As a simple example, let us use the STO-3G basis to represent the orbitals in $\ce{H2}$. Instead of a linear combination of atomic orbitals $\ket{\psi} = c_1\ket{1s_A} + c_2\ket{1s_B}$, the electronic wavefunction is given by the linear combination:

$$ \begin{aligned} \ket{\psi} & = c_1\ket{\phi_{\text{STO-3G},A}} + c_2\ket{\phi_{\text{STO-3G},B}} \\[4pt] \ket{\phi_{\text{STO-3G},A}} & = 0.15432897e^{-3.42525091(r-r_A)^2}  + 0.53532814e^{-0.62391373(r-r_A)^2} + 0.44463545e^{-0.16885540(r-r_A)^2} \\[4pt] \ket{\phi_{\text{STO-3G},A}} & = 0.15432897e^{-3.42525091(r-r_B)^2} + 0.53532814e^{-0.62391373(r-r_B)^2} + 0.44463545e^{-0.16885540(r-r_B)^2}.\end{aligned} $$

The STO-3G basis set is still a minimal basis set because, as we can see in this example, only one orbital function is used to represent the $\ket{1s}$ orbital of the hydrogen atom. The fact that each orbital function is built from three Gaussian primitives does not increase the size of the Hamiltonian matrix; the three primitive functions are used to approximate a single STO with a certain value of $\zeta$.

When a single orbital function is represented by multiple Gaussian primitives, that orbital function is called a {term:contraction}. Contractions are represented using a notation that tells how many primitives are contracted into how many orbital functions. It is easiest to see this by example. Consider a carbon atom in an STO-3G basis. As a minimal basis, the STO-3G basis includes carbon’s $1s$, $2s$, and three $2p$ orbitals, and each is represented by three Gaussian primitives. The contraction is denoted ($6s3p$)$\to$[$2s1p$]. The numbers and orbital types in parentheses tell the number of Gaussian primitives that contribute to each type of orbital ($s$, $p$, $d$, etc.), and the numbers in square brackets tell how many “shells” of orbital functions of each type those primitives are contracted into. In this example, 6 $s$-type GTOs are contracted into 2 $s$-type orbital functions, and three $p$-type primitives are contracted into a single $p$-type orbital function shell (but there are still 3 $p$-type orbital functions in that shell). By examining the numbers in square brackets, we can quickly see the total number of orbital functions is 5 ($2\times1$) $s$-type and ($1\times3$) $p$-type. Contractions come in two types: *segmented contractions*, in which each Gaussian primitive appears only in a single orbital function, and *general contractions*, where a given Gaussian primitive may appear in more than one orbital function to save memory. We will revisit the contraction concept in Section 1.5.3.2.

A minimal basis is a specific case of a more general category: *Single zeta* basis sets. In a single zeta basis set, each atomic orbital is represented by a single orbital function (i.e., one value of $\zeta$ for an STO, or one linear combination of GTOs that approximate an STO with that value of $\zeta$). All minimal basis sets are single zeta, but not all single zeta basis sets are necessarily minimal. For example, we could choose to also include the $2s$ and $2p$ orbitals for hydrogen atoms, each represented by a single orbital function. The resultant basis set would still be single zeta, though not minimal. Nevertheless, it is rare to encounter a single zeta basis that is not also a minimal basis because there are more efficient ways to improve the quality of a basis set.

## Multiple Zeta Basis sets

Over the course of basis set development, researchers realized that minimal basis sets could be improved in a number of ways. As with the discussion of the STOs, one improvement to the minimal basis sets was the development of *multiple zeta* basis sets (e.g., double zeta (DZ), triple zeta (TZ), etc.). For instance, in a double zeta basis, instead of using a single orbital function to represent the $1s$ orbital, two STOs with different values of $\zeta$ would be added to the basis to represent that single atomic orbital (Figure 11.3.2).

In an STO-3G-DZ basis for $\ce{H2}$, the electronic wavefunction would be:

$$ \ket{\psi} = c_1\ket{\phi_{\text{STO-3G},A}(\zeta_1)} + c_2\ket{\phi_{\text{STO-3G},A}(\zeta_2)} + c_3\ket{\phi_{\text{STO-3G},B}(\zeta_1)} + c_4\ket{\phi_{\text{STO-3G},B}(\zeta_2)}, $$

where each $\ket{\phi_{\text{STO-3G}}}$ function (on atom $A$ or $B$) is a fixed linear combination of three Gaussian primitives. Because two different $\zeta$ values are used to represent each $1s$ orbital, the $1s$ orbital can take on different radial shapes (i.e., become more diffuse or more compact) as their relative weights change. The basis set gains additional *flexibility* as the wavefunction amplitude around each nucleus can take on a greater variety of shapes compared with a single zeta basis. Flexibility confers a superior ability for the basis set to reproduce the shapes of the molecular wavefunction. As an example, it is easy to imagine that if a hydrogen atom is bonded to an electronegative atom like fluorine, the electron density around the hydrogen atom in will be quite different than that around each nucleus in $\ce{H2}$. The double zeta basis is more flexible in that it can alter the shape of the $1s$ orbital around the hydrogen atom in a way that the single zeta basis cannot.

> FIGURE {fig:11.3.1} src=media/511539-clipboard_e32e684c9ce34cf2bfe95a1ef39384dd7.png width=409px
> alt: clipboard_e32e684c9ce34cf2bfe95a1ef39384dd7.png
> caption: A "double zeta" basis set with each Atomic Orbital is represented by 2 orbital functions with different ζ values.

However, the increased flexibility comes at a cost: a double zeta basis contains twice as many orbital functions as a single zeta basis. If a molecule has $N$ orbital functions in a single basis, its Hamiltonian is an $N\times N$ matrix. To represent the same molecule in a double zeta basis requires $2N$ orbital functions, so the Hamiltonian becomes a $2N\times2N$ matrix– even accounting for the Hermiticity of the Hamiltonian, there will be about 3–4 times more matrix elements to evaluate! Because of this steep computational penalty, true multiple-zeta basis sets are not used often for reasons that will soon be apparent.

> FIGURE {fig:11.3.2} src=media/511540-clipboard_e7975f9265f797fc9ec4b9a6906926582.png width=557px
> alt: clipboard_e7975f9265f797fc9ec4b9a6906926582.png
> caption: A "triple zeta" basis with each Atomic Orbital is represented by 3 orbital functions with different ζ values.

In a multiple zeta basis set, the individual orbital functions begin {term:lose their original meaning as atomic orbitals}. This presents a challenge: how is it possible to optimize the weights and exponents of the Gaussian primitives? In the single zeta basis, this was straightforward: an atomic structure calculation could be performed with STO functions to optimize the value of $\zeta$, and then the coefficients in the Gaussian primitives could be adjusted to optimize the overlap of the contracted orbital functions with the corresponding STO. With a multiple zeta basis set, this is no longer possible. Instead, atomic structure calculations are performed directly with GTO contractions, and the GTO parameters optimized directly in an effort to minimize the atomic orbital energies. This is a highly nonlinear multivariate optimization problem, and requires an extensive, careful exploration of parameter space, so development of multiple-zeta basis sets is challenging, and still an active area of research today.

## Split-valence basis sets

Chemical intuition tells us a large portion of molecular structure and reactivity involves only the valence electrons in a molecule. Electrons in atomic “core” orbitals tend to remain close to the nucleus and participate very little in bonding interactions; they effectively just screen a portion of the nuclear charge from electrons in the outer valence shells, allowing those valence electrons to more easily move around. This suggests that core orbitals in a molecule require little flexibility, and this realization led to the development of *split-valence* basis sets: in which a single orbital function is used to represent a core atomic orbital, and multiple orbital functions are used to represent valence atomic orbitals. In other words, each atom has a single zeta representation of its core orbitals, and a multiple zeta representation of its valence orbitals. By using a split-valence basis, additional flexibility is gained in the regions where the electron density is likely to be distorted away from the nucleus through interactions with other atoms, while the cost of the calculation is kept lower than a true multiple-zeta basis set by sacrificing flexibility near the atomic centers. It is common for modern electronic structure calculations to employ split-valence basis sets. Here, we will explore two of the more frequently used general purpose families of split-valence basis sets: the Pople basis sets and Dunning’s correlation consistent basis sets.

John Pople was the co-recipient of the 1998 Nobel Prize in chemistry for “for his development of computational methods in quantum chemistry.” This was due in part to his work developing split-valence basis sets, and in part to his work developing the *Gaussian* quantum chemical software package. Pople’s split valence basis sets can be recognized by their designation of the form X-YG, where X is usually a one-digit number and Y is a two or three digit number. X indicates the number of Gaussian primitives that are contracted into a single orbital function to describe core orbitals. The number of digits in Y indicates the number of orbital functions per valence orbital, and each digit in Y denotes how many Gaussian primitives are in each. For example, the basis set 3-21G uses a contraction of 3 GTOs to represent each core orbital, and two orbital functions to represent each valence orbital. Of these two, the first one (made of 2 primitives) corresponds to a larger effective value of $\zeta$ (i.e., a narrower function), while the second (made of 1 primitive) is more diffuse. Once the third row of the periodic table is reached, it becomes common for the contractions to be general rather than segmented, so in the larger basis sets the total number of Gaussian primitives may be less than the number suggested by a straightforward count of core and valence orbitals. The exponents and coefficients of the primitives for most Pople-style basis sets are optimized using HF/SCF calculations of the respective atoms. More examples are shown in Table 11.3.2.

> TABLE {tab:2} cols=10
> caption: Table 11.3.2: Summary of contractions, number of orbital functions (OF), and number of Gaussian primitives (GTO) for selected Pople-style split valence basis sets.

| (l)2-4 (l)5-7 (l)8-10 Atoms | Contraction | OF | GTO | Contraction | OF | GTO | Contraction | OF | GTO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H–He | ($3s$)$\to$[$2s$] | 2 | 3 | ($4s$)$\to$[$2s$] | 2 | 4 | ($5s$)$\to$[$3s$] | 3 | 5 |
| Li–Ne | ($6s3p$)$\to$[$3s2p$] | 9 | 15 | ($10s4p$)$\to$[$3s2p$] | 9 | 22 | ($11s5p$)$\to$[$4s3p$] | 13 | 26 |
| Na–Ar | ($9s6p$)$\to$[$4s3p$] | 13 | 27 | ($16s10p$)$\to$[$4s3p$] | 13 | 46 | ($17s11p$)$\to$[$5s4p$] | 17 | 50 |

### Extended Basis Set Notation

The notation of this sort of basis set (with a Gaussian basis) is

$$ N-MPG $$

for describing split-valence basis set. $N$ is the number of Gaussian functions describing inner-shell orbitals, while the hyphen denotes a split-valence set. $M$ and $P$ designate the number of Gaussian functions used to fit the two orbitals of the valence shell:

- M corresponds to number of Gaussian functions used to describe the smaller orbital
- P corresponds to number of Gaussian functions used to describe the larger orbital (e.g., 6-31G and 3-21G).

There are hundreds of basis sets composed of Gaussian-type orbitals (Table 11.3.3). The smallest of these are called minimal basis sets, and they are typically composed of the minimum number of basis functions required to represent all of the electrons on each atom. The largest of these can contain dozens to hundreds of basis functions on each atom.

> TABLE {tab:3} cols=6
> caption: Table 11.3.3: Commonly used split-valence basis sets

| 3-21G | 3-21G | 3-21G | 3-21G* - Polarized | 3-21+G - Diffuse functions | 3-21+G* - With polarization and diffuse functions |
| --- | --- | --- | --- | --- | --- |
| 4-21G | 4-31G | 4-31G | 4-31G | 4-31G |  |
| 6-21G | 6-31G | 6-31G* | 6-31+G* | 6-31G(3df, 3pd) | 6-311G |
| 6-311G | 6-311G* | 6-311+G* |  |  |  |
