<!-- LibreTexts page 2402: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13:_Molecular_Spectroscopy/13.02:_Rotations_Accompany_Vibrational_Transitions -->
# Rotations Accompany Vibrational Transitions

Each of the modes of vibration of diatomic molecules in the gas phase also contains closely-spaced (1-10 cm<sup>-1</sup> difference) energy states attributable to rotational transitions that accompany the vibrational transitions. A molecule’s rotation can be affected by its vibrational transition because there is a change in bond length, so these rotational transitions are expected to occur. Since vibrational energy states are on the order of 1000 cm<sup>-1</sup>, the rotational energy states can be superimposed upon the vibrational energy states.

## Selection Rules

Rotational and Vibration transitions (also known as rigid rotor and harmonic oscillator) of molecules help us identify how molecules interact with each other, their bond length as mentioned in previous section. In order to know each transitions, we have to consider other terms like wavenumber, force constant, quantum number, etc. There are rotational energy levels associated with all vibrational levels. From this, vibrational transitions can couple with rotational transitions to give {term:rovibrational spectra}. Rovibrational spectra can be analyzed to determine average bond length.

We treat the molecule's {term:vibrations} as those of a harmonic oscillator (ignoring anharmonicity). The energy of a vibration is quantized in discrete levels and given by

$$ E_v=h\nu \left(v+\dfrac{1}{2} \right) $$

Where v is the vibrational quantum number and can have integer values 0, 1, 2..., and $\nu$ is the frequency of the vibration given by:

$$ \nu=\dfrac{1}{2\pi}\left(\dfrac{k}{\mu}\right)^\dfrac{1}{2} $$

where $k$ is the force constant and $\mu$ is the reduced mass of a diatomic molecule with atom masses $m_1$ and $m_2$, given by

$$ \mu=\dfrac{{m}_1{m}_2}{{m}_1+{m}_2} $$ {eq:reduced mass} n=1

We treat the molecule's {term:rotations} as those of a rigid rotor (ignoring centrifugal distortion from non-rigid rotor aspects). The energy of a rotation is also quantized in discrete levels given by

$$ E_r=\dfrac{h^2}{8\pi^2I} J(J+1) $$

In which $I$ is the moment of inertia, given by

$$ {I}=\mu{r}^2 $$

where $\mu$ is the reduced mass (Equation [ref:eq:reduced mass]) and $r$ is the equilibrium bond length.

Experimentally, frequencies or wavenumbers are measured rather than energies, and dividing by $h$ or $hc$ gives more commonly seen term symbols, $F(J)$ using the rotational quantum number $J$ and the rotational constant $B$ in either frequency

$$ F(J)=\dfrac{E_r}{h}=\dfrac{h}{8\pi^2I} J(J+1)=BJ(J+1) $$

or wavenumbers

$$ \tilde{F}(J)=\dfrac{E_r}{hc}=\dfrac{h}{8\pi^2cI} J(J+1)=\tilde{B}J(J+1) $$

:::note [emphasis]

It is important to note in which units one is working since the rotational constant is always represented as $B$, whether in frequency or wavenumbers.
:::

- {term:Vibrational T﻿ransition Selection Rules}: At room temperature, typically only the lowest energy vibrational state v= 0 is populated, so typically v<sub>0</sub> = 0 and ∆v = +1. The full selection rule is technically that ∆v = ±1, however here we assume energy can only go upwards because of the lack of population in the upper vibrational states.
- {term:Rotational Transition Selection Rules}: At room temperature, states with J≠0 can be populated since they represent the fine structure of vibrational states and have smaller energy differences than successive vibrational levels. Additionally, ∆J = ±1 since a photon contains one quantum {term:of angular momentum} and we abide by the principle of {term:conservation of energy}. This is also the selection rule for rotational transitions.

These two selection rules mean that the transition ∆J = 0 (i.e. J" = 0 and J' = 0, but $\nu_0 \neq 0$ is forbidden and the pure vibrational transition is not observed in most cases. The rotational selection rule gives rise to an R-branch (when ∆J = +1) and a P-branch (when ∆J = -1). Each line of the branch is labeled R(J) or P(J), where J represents the value of the lower state Figure 13.2.1).

> FIGURE {fig:13.2.1} src=media/9564-vibrottrans.png width=302px
> alt: Graph depicting a parabola with energy levels marked by horizontal lines, using red and blue for different levels.
> caption: Rotation-Vibration Transitions. Rotational transitions are on the order of 1-10 cm<sup>-1</sup>, while vibrational transitions are on the order of 1000 cm<sup>-1</sup>. The difference of magnitude between the energy transitions allow rotational levels to be superimposed within vibrational levels.

### R-branch

When ∆J = +1, i.e. the rotational quantum number in the ground state is one more than the rotational quantum number in the excited state – R branch (in French, *riche* or rich). To find the energy of a line of the R-branch:

$$ \begin{align} \Delta{E} &=h\nu_0 +hB \left [J(J+1)-J^\prime (J^\prime{+1}) \right] \\[4pt] &=h\nu_0 +hB \left[(J+1)(J+2)-J(J+1)\right] \\[4pt] &= h\nu_0 +2hB(J+1) \end{align} $$ n=2

### P-branch

When ∆J = -1, i.e. the rotational quantum number in the ground state is one less than the rotational quantum number in the excited state – P branch (in French, *pauvre* or poor). To find the energy of a line of the P-branch:

$$ \begin{align} \Delta{E} &=h\nu_0 +hB \left [J(J+1)-J^\prime(J^\prime+1) \right] \\[4pt] &= h\nu_0 +hB \left [J(J-1)-J(J+1) \right] \\[4pt] &= h\nu_0 -2hBJ \end{align} $$ n=3

### Q-branch

When ∆J = 0, i.e. the rotational quantum number in the ground state is the same as the rotational quantum number in the excited state – Q branch (simple, the letter between P and R). To find the energy of a line of the Q-branch:

$$ \begin{align} \Delta{E} &=h\nu_0 +hB[J(J+1)-J^\prime(J^\prime+1)] \\[4pt] &=h\nu_0 \end{align} $$ n=4

The Q-branch can be observed in polyatomic molecules and diatomic molecules with electronic angular momentum in the ground electronic state, e.g. nitric oxide, NO. Most diatomics, such as O<sub>2</sub>, have a small moment of inertia and thus very small angular momentum and yield no Q-branch.

> FIGURE {fig:13.2.3} src=media/125630-151700610935440509.png
> alt: Graph displaying upward arrows in three colors: purple, blue, and red, representing data trends over time.
> caption: Cartoon depiction of rotational energy levels, J, imposed on vibrational energy levels, v. The transitions between levels that would result in the P- and R-branches are depicted in purple and red, respectively, in addition to the theoretical Q-branch line in blue.

As seen in Figure 13.2.2, the lines of the P-branch (represented by purple arrows) and R-branch (represented by red arrows) are separated by specific multiples of $B$ (i.e, $2B$), thus the bond length can be deduced without the need for pure rotational spectroscopy.

The total nuclear energy of the combined rotation-vibration terms, $S(v, J)$, can be written as the sum of the vibrational energy and the rotational energy

$$ S(v,J)=G(v)+F(J) $$

where $G(v)$ represents the energy of the harmonic oscillator, ignoring anharmonic components and $S(J)$ represents the energy of a rigid rotor, ignoring centrifugal distortion.

From this, we can derive

$$ S(v,J)=\nu_0 \left(v+\dfrac{1}{2}\right) +BJ(J+1) $$

The spectrum we expect, based on the conditions described above, consists of lines equidistant in energy from one another, separated by a value of $2B$. The *relative* intensity of the lines is a function of the rotational populations of the ground states, i.e. the intensity is proportional to the number of molecules that have made the transition. The *overall* intensity of the lines depends on the vibrational transition dipole moment.

> FIGURE {fig:13.2.3} src=media/9568-rovib_ideal_spectrum.png width=500px
> alt: A bar graph with purple bars on the left and red bars on the right, centered around a blue vertical line.
> caption: A cartoon depiction of an ideal rovibrational spectrum.

In Figure 13.2.2, between $P(1)$ and $R(0)$ lies the zero gap, where the the first lines of both the P- and R-branch are separated by $4B$, assuming that the rotational constant B is equal for both energy levels. The zero gap is also where we would expect the Q-branch, depicted as the dotted line, if it is allowed.

:::note [note] Advanced Concept: Occupations (Peak Intensities)

The relative intensity of the P- and R-branch lines depends on the thermal distribution of electrons; more specifically, they depend on the population of the lower J state. If we represent the population of the Jth upper level as N<sub>J</sub> and the population of the lower state as N<sub>0</sub>, we can find the population of the upper state relative to the lower state using the Boltzmann distribution:

$$ \dfrac{N_J}{N_0}={(2J+1)e}^\left(-\dfrac{E_r}{kT}\right) $$

(2J+1) gives the degeneracy of the Jth upper level arising from the allowed values of M<sub>J</sub> (+J to –J). As J increases, the degeneracy factor increases and the exponential factor decreases until at high J, the exponential factor wins out and N<sub>J</sub>/N<sub>0</sub> approaches zero at a certain level, J<sub>max</sub>. Thus, when

$$ \dfrac{d}{dJ} \left( \dfrac{N_J}{N_0} \right)=0 $$

by differentiation, we obtain

$$ J_{max}=\left(\dfrac{kT}{2hB}\right)^\dfrac{1}{2}-\dfrac{1}{2} $$

This is the reason that rovibrational spectral lines increase in energy to a maximum as J increases, then decrease to zero as J continues to increase, as seen in Figure 13.2.2.

From this relationship, we can also deduce that in heavier molecules, $B$ will decrease because the moment of inertia will increase, and the decrease in the exponential factor is less pronounced. This results in the population distribution shifting to higher values of J. Similarly, as temperature increases, the population distribution will shift towards higher values of $J$.
:::
