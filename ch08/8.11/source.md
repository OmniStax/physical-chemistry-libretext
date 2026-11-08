<!-- LibreTexts page 13449: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08:_Multielectron_Atoms/8.11:_Using_Atomic_Term_Symbols_to_Interpret_Atomic_Spectra -->
# Using Atomic Term Symbols to Interpret Atomic Spectra

## Learning Objectives {section:objectives}

- Demonstrate how spin-orbit coupling is experimentally observed in atomic spectra
- Use atomic terms symbols to ascribe transitions to specific angular momenta states described by atomic term symbols

Around 1930, several spectroscopists using high resolution instruments found that lines in the hydrogen atom spectrum actually are not single lines but they are multiplets as shown for an isotopic mixture of hydrogen,$(H^1_{\alpha})$ and deuterium, ($H^2_{\alpha}$), in Figure 8.11.1. A multiplet consists of two or more closely spaced lines. Two lines together form a doublet, three a triplet, etc. Multiplets also are called fine structure. The term fine structure means the lines are spaced close together, i.e. finely spaced. Such fine structure also was found in spectra of one-electron ions such as $\ce{He^{+}}$.

> FIGURE {fig:8.11.1} src=media/51418-HspectrumMultiplets.gif width=349px
> alt: Two vertical faint lines on a dark background, labeled H¹α and H²α, suggesting a spectral analysis or emission spectrum.
> caption: Photograph of the first line in the Balmer series for atomic hydrogen and deuterium. These lines are identified as $H^1_{\alpha}$ (hydrogen) and $H^2_{\alpha}$ (deuterium), respectively. From H.E. White, Introduction to Atomic Spectra (McGraw-Hill, New York, 1934) p. 132 and G.N. Lewis and F.H. Spedding, Phys. Rev. 43, 964 (1933). The doublet splitting for $H^1_{\alpha}$ at 656.279 nm was measured to be 0.326 $cm^{-1}$.

You should recall that the $H^1_{\alpha}$ line in the Balmer series at 656.279 nm was understood as resulting from a single transition of an electron from the n = 3 energy level to the n = 2 level. The observation of fine structure revealed that an orbital energy level diagram does not completely describe the energy levels of atoms. This fine structure also provided key evidence at the time for the existence of electron spin, which was used not only to give a qualitative explanation for the multiplets but also to furnish highly accurate calculations of the multiplet splittings.

## Spin-Orbit Coupling

Specifying the orbital configuration of an atom does not uniquely identify the electronic state of the atom because the orbital angular momentum, the spin angular momentum, and the total angular momentum are not precisely specified. For example in the hydrogen 2p<sup>1</sup> configuration, the electron can be in any of the three p-orbitals, $m_l$ = +1, 0, and –1, and have spins with $m_s$ = +1/2 or –1/2. Thus, there are 3 times 2 different possibilities or states. Also, the orbital and spin angular momentum of the electrons combine in multiple ways to produce angular momentum vectors that are characteristic of the entire atom not just individual electrons, and these different combinations can have different energies. This coupling of orbital and spin angular momentum occurs because both the electron spin and orbital motion produce magnetic dipole moments. As we have seen previously, the relationship between the angular momentum and the magnetic moment is given by the gyromagnetic ratio. These magnetic dipoles interact just like two tiny bar magnets attracting and repelling each other. This interaction is called {term:spin-orbit interaction}. The interaction energy is proportional to the scalar product of the magnetic dipole moments, which are proportional to the angular momentum vectors.

$$ E_{s-o} \propto S \cdot L $$

with the following terms added to the Hamiltonian

$$ \hat {H} _{s-o} \propto \hat {S} \cdot \hat {L} $$

where the constant of proportionality is called the spin-orbit coupling constant. The spin-orbit interaction couples the spin motion and orbital motion of all the electrons together. This coupling means that exact wavefunctions are not eigenfunctions of the spin and orbital angular momentum operators separately. Rather the total angular momentum $J = L+S$, the vector sum of the spin and orbital angular momentum, is required to be coupled for a completely accurate description of the system. Trying to describe the coupled system in terms of spin and orbital angular momentum separately is analogous to trying to describe the positions of two coupled bar magnets independently. It cannot be done; their interaction must be taken into account (Figure 8.11.1).

> FIGURE {fig:8.11.1} src=media/124741-CNX_UPhysics_41_02_AtomicLoop.jpg
> alt: Diagram showing a current-carrying loop and a polarization diagram, illustrating magnetic and electric field directions.
> caption: An electron that orbits the nucleus induces a "current" and a magnetic field. Similarly, the rotating electron (really intrinsic spin) of the electron induces a different magnet. Both a magnetic (dipole) moments will interact with each other via spin-orbit coupling to generate fine structure atomic spectra.(CC-SA OpenStax).

## Atomic Spectroscopy

Higher energy or excited orbital configurations also exist. The hydrogen atom can absorb energy, and the electron can be promoted to a higher energy orbital. The electronic states that result from these excited orbital configurations also are characterized or labeled by term symbols. The details of how to determine the term symbols for multi-electron atoms and for cases where both the orbital and spin angular momentum differ from zero are given elsewhere, along with rules for determining the relative energies of the terms.

We have found that the selection rules for promoting a single electron moving from one atomic orbital to another via the absorption or emission of light are

$$ \begin{align*} \Delta l &= \pm 1 \\[4pt] \Delta m_l &= 0, \pm 1 \end{align*} $$

These selection rules arise from the conservation fo angular momentum during a spectroscopic transition and the fact that a photon has a spin 1. Within the limits of L-S coupling, these rules can be expressed in terms of atomic term symbols resulting in the resulting Russell-Saunders selection rules:

$$ \begin{align} \Delta S &= 0  \\[4pt] \Delta L &= 0, \pm 1  \\[4pt] \Delta J &= 0, \pm 1, \end{align} $$ {eq:8.11.8} n=1 {eq:8.11.9} n=1 {eq:8.11.10} n=1

but the $J =0$ to $J= 0$ transition is forbidden

$$ \Delta m_J = 0, \pm 1 $$ {eq:8.11.11} n=2

but the $m_J = 0$ to $m_J = 0$ transition is forbidden if $\Delta J = 0$.

These selection rules result from the general properties of angular momentum such as the conservation of angular momentum and commutation relations. The $\Delta L =0$ option in Equation [ref:eq:8.11.9] does not violate the conservation of angular momentum discussed previously, since $\Delta l = \pm 1$ is still required. The orbital angular momentum of an electron must change upon absorption, but this does not necessarily affect the overall momentum of the state given by Equation [ref:eq:8.11.9].

The selection rules apply only to atoms that can be described with Russell-Saunders (LS) coupling. These rules fail as the atomic number increases because the $S$ and $L$ quantum numbers become "bad" quantum numbers; this occurs when the jj-coupling coupling approach is more applicable. For example, the transition between single ($S=1/2$ and triplet $S=1$ states (violation of selection rule in Equation [ref:eq:8.11.8]) are allowed and experimentally observed, in heavy atoms.

:::example {ex:8.11.1} Sodium Atoms

An example of this fine structure is the emission of sodium atoms.

> IMAGE {img:1} src=media/91226-emission_spec.jpg width=567px
> alt: A black rectangle with two vertical colored lines: one aqua and one yellow, creating a striking contrast.
> caption: Figure above does not show this splitting).

> TABLE {tab:1} cols=6

| 616.07 nm | 615.42 nm | 589.00 nm | 589.59 nm | 568.82 nm | 568.26 nm |
| --- | --- | --- | --- | --- | --- |

How can these transitions be described in terms of transitions between microstates

**Solution**

We need to discussed states in terms of not only electron configurations, but in terms of microstates (i.e., term symbols) and the principal quantum number of the valence electron, $n$:

- The ground state has a $(Ne]ns^1$ configuration, which has only one microstate $^2S_{1/2}$
- The excited state with the valence electron in the p-orbitals has an electron configuration of $[Ne]np^1$, which has two microstates: $^2P_{3/2}$ and $^2P_{1/2}$
- The excited state with the valence electron in the p-orbitals has an electron configuration of $[Ne]nd^1$, which has two microstates of $^2D_{5/2}$ and $^2D_{3/2}$

Observed lines can be explained:

- $5S \rightarrow 3P$ gives two lines since the initial configuration has two microstates: 616.07, 615.42 nm
- $3P \rightarrow 3S$ gives two lines since the terminal configuration has two microstates: 589.00, 589.59 nm
- $4D \rightarrow 3P$ gives two lines since the terminal configuration has two microstates: 568.82, 568.26 nm
:::

:::note [note] Splitting of the Sodium D Line

One notable atomic spectral line of sodium vapor is the so-called D-line, which may be observed directly as the sodium flame-test line and also the major light output of low -pressure sodium lamps (these produce pressure sodium lamps (these produce an unnatural yellow). The D-line is one of the classified Fraunhofer lines in Sodium vapor in the upper layers of lines. Sodium vapor in the upper layers of the sun creates a dark line in the emitted spectrum of electromagnetic radiation by absorbing visible light in a band of wavelengths around 589.5 nm. This wavelength corresponds to transitions in atomic sodium in which the valence-electron transitions from a 3s to 3p electronic state.

Closer examination of the visible spectrum of atomic sodium reveals that the D-line actually consists of two lines called the $D_1$ and $D_2$ lines at 589 6 nm and 589.0 nm, respectively. The splitting between these lines arises because of spin-orbit coupling. Na has one unpaired electron ($S = ½$). If we consider the $S \rightarrow P$ transition, then for the excited state, $P$, we have $L = 1$. Thus, $J = 3/2$ or $J=1/2$.
:::

Now we want to apply these ideas to understand why multiplet structure is found in the luminescence spectrum of hydrogen and single electron ions. As we have said, the $H_{\alpha}$ line in the Balmer series at 656.279 nm can be understood via a transition of an electron in a n = 3 atomic orbital to a n = 2 atomic orbital. When this spectral line was examined using high-resolution instruments, it was found actually to be a doublet, i.e. two lines separated by 0.326 cm<sup>-1</sup>.

There are 9 degenerate orbitals associated with the n = 3 level, and 4 associated with the n = 2 level. Since an electron can be in any orbital with any one of two spins, we expect the total number of states to be twice the number of orbitals. The number of orbitals is given by $n^2$ so there should be 8 states associated with n = 2 and 18 states associated with n = 3. Using the ideas of vector addition of angular momentum, the terms that result from having an electron in any one of these orbitals are given in Table 8.11.1.

> TABLE {tab:2} cols=3
> caption: Table 8.11.1: H Atom Terms Originating from n = 1, 2, and 3

| Orbital Configuration | Term Symbols | Degeneracy |
| --- | --- | --- |
| 1s<sup>1</sup> | $^2S_{1/2}$ | 2 |
| 2s<sup>1</sup> | $^2S_{1/2}$ | 2 |
| 2p<sup>1</sup> | $^2P_{1/2}$, $^2P_{3/2}$ | 2, 4 |
| 3s<sup>1</sup> | $^2S_{1/2}$ | 2 |
| 3p<sup>1</sup> | $^2P_{1/2}$, $^2P_{3/2}$ | 2, 4 |
| 3d<sup>1</sup> | $^2D_{3/2}$, $^2D_{5/2}$ | 4, 6 |

Table 8.11.1 shows that there are three terms associated with n = 2, and 5 terms associated with n = 3. In principle, each term can have a different energy. The degeneracy of each term is determined by the number of projections that the total angular momentum vector has on the z-axis. These projections depend on the $m_J$ quantum number, which ranges from $+J$ to $–J$ in integer steps. J is the total angular momentum quantum number, which is given by the subscript in the term symbol. This relationship between $m_J$ and J ($m_J$ varies from $+J$ to $–J$ in integer steps) is true for any angular momentum vector.

:::exercise {exr:8.11.3}

Confirm that the nine term symbols in Table 8.11.1 are correct.
:::

:::exercise {exr:8.11.4}

Confirm that the values for the degeneracy in Table 8.11.1 are correct and that the total number of states add up to 8 for n = 2 and 18 for n = 3.
:::

The energies of the terms depend upon spin-orbit coupling and relativistic corrections that need to be included in the Hamiltonian operator in order to provide a more complete description of the hydrogen atom. As a consequence of these effects, all terms with the same $n$ and (J\) quantum numbers have the {term:same energy,} while terms with different values for $n$ or $J$ have different energies. The theoretical term splittings as given by H.E. White, Introduction to Atomic Spectra (McGraw-Hill, New York, 1934) pp. 132-137 and are shown in Figure 8.11.2.

> FIGURE {fig:8.11.2} src=media/51419-H_n=2and3_splittings.gif width=321
> alt: alt
> caption: Energy level diagram for the electronic states of hydrogen corresponding to an electron with the principal quantum number n = 3 and n = 2. While the relative energies of the terms are drawn to scale, the energy of n = 3 relative to n = 2 is not. Transitions to the 2P<sub>3</sub><sub>/2</sub> and (2P<sub>1</sub><sub>/2</sub> and 2S<sub>1</sub><sub>/2</sub>) levels correspond to the two lines in the $H^1_{\alpha}$ band, which have a measured separation of 0.326 cm<sup>-1</sup>.

Figure 8.11.2 shows 5 allowed transitions for the electron in the states associated with n = 3 to the states associated with n = 2. Of these five, two are most intense and are responsible for the doublet structure. These two transitions are indicated by the wide black lines at the bottom of the figure to correspond to the lines observed in the photographic spectrum shown in Figure 8.11.2. The other transitions contribute to the width of these lines or are not observed. The theoretical value for the doublet splitting is 0.328 cm<sup>-1</sup>, which is in excellent agreement with the measured value of 0.326 cm<sup>-1</sup>. The value of 0.328 cm<sup>-1 </sup>is obtained by taking the difference, 0.364 – 0.036 cm<sup>-1</sup>,in the term splittings.

As we have just seen, the electronic states, as identified by the term symbols, are essential in understanding the spectra and energy level structure of atoms, but it also is important to associate the term symbols and states with the orbital electron configurations. The orbital configurations help us understand many of the general or coarse features of spectra and are necessary to produce a physical picture of how the electron density changes because of a spectroscopic transition.

:::exercise {exr:8.11.5}

Use the Russell-Saunders selection rules to determine which transitions contribute to the $H_{\alpha}$ line in the hydrogen spectrum.
:::
