<!-- LibreTexts page 13418: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05:_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.05:_The_Harmonic_Oscillator_and_Infrared_Spectra -->
# The Harmonic Oscillator and Infrared Spectra

## Learning Objectives {section:objectives}

- Understand how the quantum harmonic oscillator model can be used to interpret the infrared spectra of diatomic molecules
- Understand the origin of the transition moment integral and selection rules and how they are related

Infrared (IR) spectroscopy is one of the most common and widely used spectroscopic techniques employed mainly by inorganic and organic chemists due to its usefulness in determining structures of compounds and identifying them. Chemical compounds have different chemical properties due to the presence of different functional groups. IR spectroscopy is one of the most common and widely used spectroscopic techniques. Absorbing groups in the infrared region absorb within a certain wavelength region. The absorption peaks within this region are usually sharper when compared with absorption peaks from the ultraviolet and visible regions. In this way, IR spectroscopy can be very sensitive to determination of functional groups within a sample since different functional group absorbs different particular frequency of IR radiation. Also, each molecule has a characteristic spectrum often referred to as the fingerprint. A molecule can be identified by comparing its absorption peak to a data bank of spectra. IR spectroscopy is very useful in the identification and structure analysis of a variety of substances, including both organic and inorganic compounds. It can also be used for both qualitative and quantitative analysis of complex mixtures of similar compounds.

## IR Spectroscopy

Transitions between vibrational energy levels can be induced about by absorption or emission of radiation. To understand this, knowledge of both the initial and final eigenstates is needed. The energy of the $v^{th}$ eigenstate of a harmonic oscillator can be written as

$$ E_v = \left(v+\dfrac{1}{2}\right) \dfrac{h}{2\pi} \sqrt{\dfrac{k}{\mu}} $$ {eq:5.5.16} n=1

where $h$ is Planck's constant and $v$ is the vibrational quantum number and ranges from 0, 1, 2, 3,..., $\infty$. Equation [ref:eq:5.5.16] is often rewritten as

$$ E_v = \left(v+\dfrac{1}{2}\right)h \nu_m $$ {eq:5.5.17} n=2

where $\nu_m$ is the vibrational frequency of the vibration. Equation [ref:eq:5.5.17] is often written as

$$ E_v = \left(v + \dfrac{1}{2}\right)\hbar\omega $$

where $\omega$ is the angular frequency (i.e., $2\pi \nu$).

Transitions in vibrational energy levels can be brought about by absorption of radiation, provided the energy of the radiation ($h\nu_{photon}$) {term:exactly} matches the difference in energy ($\Delta E_{vv^\prime}$) between the vibrational quantum state $v$ to quantum state $v^\prime$. This can be expressed as

$$ \begin{align} h \nu_{photon} &= \Delta E_{vv^\prime} \nonumber \\[4pt] &= E_{v^\prime} - E_{v} \nonumber \\[4pt] &= \left(v^\prime + \dfrac{1}{2}\right)h \nu _m- \left(v +\dfrac{1}{2}\right)h \nu_m \nonumber \\[4pt] &= \left(v^\prime - v\right) h \nu_m  \end{align} $$ {eq:5.5.18} n=3

Let's consider only transitions between adjacent eigenstates (discussed in more details below) so

$$ v^\prime - v = \pm 1 $$

which is positive if an IR photon is absorbed and negative if it is emitted. For the absorption of a IR photon, Equation [ref:eq:5.5.18] simplifies to

$$ \begin{align} h \nu_{photon} &= h \nu_m \nonumber \\[4pt] &= \dfrac{h}{2\pi} \sqrt{\dfrac{k}{\mu}}  \end{align} $$ {eq:5.5.19} n=4

The frequency of radiation $\nu_{photon}$ that will bring about this change is {term:identical} to the classical vibrational frequency of the bond $\nu$.

:::note [note] The Wavenumber as a Unit of Energy

The cm<sup>-1</sup> is the wavenumber scale and it can also be defined as 1/wavelength in cm. A wavenumber is often used due to its direct relationship with both frequency and energy. The frequency of the absorbed radiation causes the molecular vibrational frequency for the absorption process:

$$ \begin{align} \bar{\nu}(cm^{-1}) &= \dfrac{1}{\lambda(\mu m)} \times 10^4 \left(\dfrac{\mu m}{cm}\right) \\[4pt] &= \dfrac{\nu\,(Hz)}{c\,(cm/s)}  \end{align} $$ {eq:5.5.28} n=5
:::

Equation [ref:eq:5.5.18] can be modified so that the radiation can be expressed in wavenumbers

$$ \widetilde{\nu}_m = \dfrac{1}{2\pi c} \sqrt{\dfrac{k}{\mu}} $$ {eq:5.5.23} n=6

where $c$ is the velocity of light (cm/s) and $\widetilde{\nu}$ is the wavenumber of an absorption maximum (cm<sup>-1</sup>).

:::example {ex:5.5.1} Hydrogen Halides

The force constants for typical diatomic molecules are in the range between 400 to 2000 $N \cdot m^{-1}$.

> TABLE {tab:1} cols=7

| Molecule | HF | HCl | HBr | HI | CO | NO |
| --- | --- | --- | --- | --- | --- | --- |
| Force constant, $k$ (N.m<sup>-1</sup>) | 970 | 480 | 410 | 320 | 1860 | 1530 |

For the diatomic molecules listed above, calculate the following:

a. angular frequency ($\text{rad} \cdot s^{-1}$)
b. natural frequency (Hz)
c. period (s)
d. separation between energy levels
e. wavelength $\lambda$ of the electromagnetic radiation absorbed in the transition $v=0 \rightarrow v=1$.

**Solution**

For $\ce{HCl}$:

a. angular frequency
   
   $$ \omega = 5.45 \times 10^{14} \text{rad} \cdot s^{-1} $$
b. natural frequency:
   
   $$ \nu = \dfrac{\omega}{2\pi} = 8.68 \times 10^{13} $$
c. period (s):
   
   $$ T =\dfrac{1}{\nu} = 1.15 \times 10^{-14} $$
d. separation between energy levels:
   
   $$ \Delta E = E_{v=1} - E_{v=0} = \hbar \omega = 5.75 \times 10^{-20} \; J $$
e. wavelength $\lambda$ of the electromagnetic radiation absorbed in the transition $v=0 \rightarrow v=1$:
   
   $$ 3.46 \times 10^{-6} \, m $$

The electromagnetic radiation released (and absorbed) for vibrations is primarily in the infrared (IR) part of the spectrum. Calculating the above properties for the other molecules remains as an exercise.

Note: We did not designate the specific isotopes in the hydrogen halides above because that information was not required to solve these questions.
:::

IR deals with the interaction between a molecule and radiation from the electromagnetic region ranging (4000- 40 cm<sup>-1</sup>). The IR region of the electromagnetic spectrum ranges in wavelength from 2 -15 µm. Conventionally the IR region is subdivided into three regions (Table 5.5.1): near IR, mid IR and far IR. Most of the IR used originates from the mid IR region.

> TABLE {tab:2} cols=4
> caption: Table 5.5.1: Regions of the IR Spectrum

| Region | Wavelength | Wavenumbers ($\widetilde{\nu}$), cm<sup>-1</sup> | Frequencies (v), HZ |
| --- | --- | --- | --- |
| *Near* | 0.78 -2.5 | 12800 - 4000 | 3.8 x 10<sup>14</sup> - 1.2 x 10<sup>14</sup> |
| *Middle* | 2.5 - 50 | 4000 - 200 | 3.8 x 10<sup>14</sup> - 1.2 x 10<sup>14</sup> |
| *Far* | 50 -100 | 200 -10 | 3.8 x 10<sup>14</sup> - 1.2 x 10<sup>14</sup> |
| *Most Used* | 2.5 -15 | 4000 -670 | 3.8 x 10<sup>14</sup> - 1.2 x 10<sup>14</sup> |

:::exercise {exr:5.5.2} {printed:Example 5.5.2} Hydrogen Chloride

The $\ce{H^{35}Cl}$ equilibrium bond length is 0.127 nm and the $v = 0$ to $v = 1$ transition is observed in the infrared at 2,886 cm<sup>-1</sup>. Compute the vibrational energy of $\ce{H^{35}Cl}$ in its lowest state.

a. Compute the classical limit for the stretching of the $\ce{HCl}$ bond from its equilibrium length in this state.
b. What percent of the equilibrium bond length is this extension?

**Solution**

The $\ce{H-Cl}$ bond length is $0.127\,nm = 1.27 \times 10^{-10}m$ and the IR transition is observed at $2886 \,cm^{-1}$. We first convert this to Hertz

$$ 2886\, cm^{-1} (3 \times 10^{10} cm/s) = 8.646 \times 10^{13} s^{-1} = 8.646 \times 10^{13}\, Hz $$

The equations for the energy of the v<sup>th</sup> eigenstate of a harmonic oscillator is

$$ E_v = (v + 1/2)\hbar\omega $$

So the ground state ($v=0$) energy is

$$ E_0 = \dfrac{1}{2} \hbar \omega $$

with

$$ \begin{align*} \omega &= 2\pi \nu \\[4pt] &= 5.54 \times 10^{14}\, rad/s \end{align*} $$

We can then extra the ground state vibrational energy (aka zero-point energy) from

$$ \begin{align*} E_o &= \dfrac{1}{2}\hbar \omega \\[4pt] &= \dfrac{1}{2} \hbar (5.54 \times 10^{14} rad/s) \\[4pt] &= 2.916 \times 10^{-20}\, J\end{align*} $$

The classical limit of the stretch is denoted as $Q_0$, this can be equated as potential energy in relation to the total $E_0$ found above as, at $E_0$, all of the energy would be potential energy in the form of the stretch. In comparison to the classic spring potential

$$ V = \dfrac{1}{2}k Q_0^2 $$

As described above, we can relate the two as

$$ \dfrac{1}{2}\hbar \omega = \dfrac{1}{2} k Q_0^2 $$

or,

$$ 2.916 \times 10^{-20} J = \dfrac{1}{2}481 Q_0^2 $$

where $Q_0 = 1.10 \times 10^{-11} m = 0.0110\, nm$.

Lastly, this classical limit to length can be compared to the equilibrium bond length by a simple relation of

$$ \begin{align*} \text{Percent bond length} &= \dfrac{Q_0}{x_{eq}} \times 100\% \\[4pt] &= \dfrac{0.0110\,nm}{0.127\,nm} \times 100\% \\[4pt] &= 8.66\% \end{align*} $$
:::

## Selection Rules for IR Transitions

Photons can be absorbed or emitted, and the harmonic oscillator can transition from one vibrational energy state to another. Which transitions between vibrational states are allowed? When discussing the Bohr hydrogen atom in Chapter 1, we identified multiple transitions between different states as being responsible for the line spectra emission of the hydrogen atom. No limitations were identified so that any transition between any starting state and ending state was possible and this resulted in a complex pattern in the spectra. As we will identify later on, when considering mulit-electron atoms, there are {term:selection rules} that limits which transitions will be observed (i.e., are allowed).

A similar situation exist for the harmonic oscillator and IR transitions and a set of selection rules must be satisfied to ensure a particular transition is allowed. Selection rules result from evaluating a {term:transition moment integral} that expresses the probability of a transition from the $v$ to the $v'$ eigenstates:

$$ \begin{align} \mu_T &= \langle \psi_{v'} | \hat {\mu} (x) | \psi_{v} \rangle \\[4pt] &= \int \limits _{-\infty}^{\infty} \psi_{v'}^* (x) \hat {\mu} (x) \psi _v (x) dx  \end{align} $$ {eq:5.5.29} n=7

When the transition moment integral is zero for two specific eigenstates (i.e., $\psi _v (x)$ and $\psi'_v (x)$), then the probability of observing that transition is zero. In this case, this transition is called a {term:forbidden transition} (i.e., it will not be obversed). Transitions with low probabilities are call "weakly allowed transitions" since they will have small amplitudes in spectra and transitions with high probabilities are "strongly allowed transitions" and will exhibit high amplitudes in spectra.

> FIGURE {fig:5.5.1} src=media/348952-5.5.svg width=535px
> alt: Diagram showing energy levels and transitions in a quantum system, labeled with forbidden and transition energies.
> caption: Possible transitions for a harmonic oscillator. Allowed transitions are labeled with blue arrows and forbidden transitions are labeled with red arrows. (CC BY-NC; Ümit Kaya via LibreTexts)

To evaluate Equation [ref:eq:5.5.29], we need to express the dipole moment operator, $\hat {\mu}$, in terms of the magnitude of the vibration $x$. The dipole moment operator is defined as

$$ \hat {\mu} = \sum _{electrons} e \vec{r} + \sum _{nuclei} q \vec{R} $$ {eq:5.5.30} n=8

where the two sums are over all the electrons and nuclei and involve the particle charge ($-e$ or $q$) multiplying the position vector ($\vec{r}$ or $\vec{R}$, respectively). We can obtain this dipole moment operator in terms of the magnitude of the displacement coordinate, $x$, in a simple way by using a {term:[Taylor series](https://math.libretexts.org/Bookshelves/Calculus/Book%3A_Calculus_(OpenStax)/10%3A_Power_Series/10.3%3A_Taylor_and_Maclaurin_Series) expansion} for the dipole moment around the equlibrium position ($x=0$).

$$ \hat{\mu} (x) = \mu _{x=0} + \left. \dfrac {d \mu (x)}{dx} \right |_{x=0} x + \left. \dfrac {d^2 \mu (x)}{dx^2} \right |_{x=0} x^2 + \cdots $$ {eq:5.5.31} n=9

Retaining only the first two terms and substituting into Equation [ref:eq:5.5.29] produces

$$ \mu _T = \mu _{x=0} \int \limits _{-\infty}^{\infty} \psi _{v'} (x) \psi _v (x) dx + \left . \dfrac {d \mu (x)}{dx} \right |_{x=0} \int \limits _{-\infty}^{\infty} x\psi _{v'}^* (x) \psi _v (x) dx $$ {eq:5.5.32} n=10

where $\mu _{x=0}$ is the {term:dipole moment} of the molecule when the nuclei are at their equilibrium positions, and

$$ \left.\dfrac {d\mu (x)}{dx} \right|_{x=0} $$

is the *linear* change in the dipole moment due to the displacement of the nuclei in the normal mode. The derivative is the linear change because it multiplies $x$ and not a higher power of $x$ in Equation [ref:eq:5.5.31]. Both $\mu$­ and

$$ \left.\dfrac {d\mu (x)}{dx}\right |_{x=0} $$

are moved outside of the integral because they are constants that no longer depend on $x$ because they are evaluated at $x = 0$.

The integral in the first term in Equation [ref:eq:5.5.32] is 0 because any two harmonic oscillator wavefunctions are *orthogonal*. The integral in the second term of Equation [ref:eq:5.5.32] is zero except when $v' = v \pm 1$ as demonstrated in Exercise 5.5.1. Also note that the second term is zero if

$$ \left .\dfrac {d\mu (x)}{dx}\right |_{x=0} = 0 $$ {eq:5.5.33} n=11

Hence we can identify two "rules" that need to be satisfied for an IR photon to be absorb (or emitted) by a vibrating molecule.

:::note [note] Rules for IR Absorption

For IR absorption to occur two conditions must be met:

1. There must be a {term:change} in the dipole moment of the molecule as a result of a molecular vibration (or rotation). The change (or oscillation) in the dipole moment allows interaction with the alternating electrical component of the IR radiation. Symmetric molecules (or bonds) do not absorb IR radiation since there is no dipole moment.
2. If the frequency of the radiation $\nu_{photon}$ matches the natural frequency of the vibration ($\nu_m$), the IR photon can be absorbed and the amplitude of the vibration increases.
:::

:::exercise {exr:5.5.1}

Use one of the Hermite polynomial recursion relations to verify that the second integral in Equation [ref:eq:5.5.32] is 0 unless $v' = v \pm 1$.
:::

If we are to observe absorption of infrared radiation due to a vibrational transition in a molecule, the transition moment cannot be zero. This condition requires that the dipole moment derivative Equation [ref:eq:5.5.33] {term:cannot} be zero and that the vibrational quantum number change by one unit. The normal coordinate motion must cause the dipole moment of the molecule to change in order for a molecule to absorb infrared radiation. If the normal coordinate oscillation does not cause the dipole moment to change then $\mu _T = 0$ and no infrared absorption is observed. So we can

$$ \underbrace{ \Delta v = \pm 1}_{\text{For allowed transitions}} $$ {eq:5.5.34} n=12

Consider oxygen and nitrogen molecules. Because they are symmetrical, their dipole moments are zero, $\mu = 0$. Since the vibrational motion (only bond stretching for a diatomic molecule) preserves this symmetry, the change in the dipole moment due to the vibrational motion also is zero, $\dfrac {d\mu (x)}{dx} = 0$. Consequently, oxygen and nitrogen do not absorb infrared radiation as a result of vibrational motion.

:::exercise {exr:5.5.2}

Explain why the molar absorptivity or molar extinction coefficients ($\epsilon$) in Beer's Law for the IR absorption of some vibrations are greater than others.

**Answer**

Qualitatively, if the probability of transition is large, then the molar absorptivity is large. And similar if the transition were not allowed, then there will be no intensity and no observed peak in the spectrum. Transitions can be "partially allowed" as well, and these bands appear with a lower intensity than the full allowed transitions.

When looking at the Beer's Law

$$ A=\epsilon ~c ~l $$

where $A$ is absorbance. $\epsilon$ is the molar absorptivity, $c$ is the molar concentration and $l$ is the optical path length

We are only looking at the change in the molar absorptivity as the IR absorptions of vibrations vary. To do this we have to look at the transition moment integral

$$ \mu_{T}=\left\langle\psi_{v^{\prime}}|\not \hat{\mu}(x)| \psi_{v}\right\rangle $$

When the transition moment integral is zero, there is no transition as it is not allowed under the selection rules. This means that the IR is not absorbing any vibrations and therefore the molar absorptivity is zero, which means that absorbance according to Beer's Law is zero. As the transition moment integral increases, the molar absorptivity also increases and the overall absorbance increases.
:::

The case $v' = v + 1$ corresponds to going from one vibrational state to a higher energy one by absorbing a photon with energy $h\nu$. The case $v' = v − 1$ corresponds to a transition that emits a photon with energy $h\nu$. In the harmonic oscillator model infrared spectra are very simple; only the fundamental transitions, $\Delta = \pm 1$, are allowed. The associated transition energy is $\hbar \omega$, according to Equation [ref:eq:5.5.19]. The transition energy is the change in energy of the oscillator as it moves from one vibrational state to another, and it equals the photon energy.

$$ \begin{align*} \Delta E &= E_{final} - E_{initial} \\[4pt] &= hv_{photon} \\[4pt] &= \hbar \omega _{oscillator} \end{align*} $$

For perfect harmonic oscillators, the only possible allowed transitions are $\Delta = \pm 1$ with all other transitions forbidden (Figure 5.5.1). This conclusion predicts that the vibrational absorption spectrum of a diatomic molecule consists of a single line since the energy levels are equally spaced in the harmonic oscillator model (Figure 5.5.1). If the vibration were anharmonic, then the levels would not be equally spaced and then transitions from $v = 0$ to $v=1$ and from $v = 1$ to $v=2$, etc. would occur at different frequencies.

> Only the fundamental transitions, $\Delta = \pm 1$, are observed in infrared spectra within harmonic oscillator model.

The actual IR spectrum is more complex, especially at high resolution. There is a fine structure due to the rotational states of the molecule. These states will be discussed in the next chapter. The spectrum is enriched further by the appearance of lines due to transitions corresponding to $\Delta = \pm n$ where $n > 1$. These transitions are called {term:overtone} transitions and their appearance in spectra despite being forbidden in the harmonic oscillator model is due to the anharmonicity of molecular vibrations. Anharmonicity means the potential energy function is not strictly the harmonic potential. The first overtone, $Δv = 2$, generally appears at a frequency slightly less than twice that of the fundamental, i.e. the frequency due to the $Δv = 1$ transition.

:::exercise {exr:5.5.3} Hydrogen Chloride

Compute the approximate transition frequencies in wavenumber units for the first and second overtone transitions in $\ce{HCl}$ given that the fundamental is at 2,886 cm<sup>-1</sup>.
:::
