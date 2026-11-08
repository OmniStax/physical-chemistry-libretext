<!-- LibreTexts page 13423: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05:_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.09:_The_Rigid_Rotator_is_a_Model_for_a_Rotating_Diatomic_Molecule -->
# The Rigid Rotator is a Model for a Rotating Diatomic Molecule

## Learning Objectives {section:objectives}

- Demonstrate how to use the 3D regid rotor to describe a rotating diatomic molecules
- Demonstate how microwave spectroscopy can get used to characterize rotating diatomic molecules
- Interprete a simple microwave spectrum for a diatomic molecule

To develop a description of the rotational states, we will consider the molecule to be a rigid object, i.e. the bond lengths are fixed and the molecule cannot vibrate. This model for rotation is called the rigid-rotor model. It is a good approximation (even though a molecule vibrates as it rotates, and the bonds are elastic rather than rigid) because the amplitude of the vibration is small compared to the bond length.

The rotation of a rigid object in space is very simple to visualize. Pick up any object and rotate it. There are orthogonal rotations about each of the three Cartesian coordinate axes just as there are orthogonal translations in each of the directions in three-dimensional space (Figures 5.9.1 and 5.9.2 ). These rotations are said to be *orthogonal* because one can not describe a rotation about one axis in terms of rotations about the other axes just as one can not describe a translation along the x-axis in terms of translations along the y- and z-axes. For a linear molecule, the motion around the interatomic axis (x-axis) is not considered a rotation.

> FIGURE {fig:5.9.1} src=media/250652-libretexts_section_complete_chem_sm_124.png width=661px
> alt: Diagrams showing a chair from different angles, illustrating rotational movement around its axes.
> caption: Cartesian rotations of a chair. Rotations about the (a) x axis, (b) y axis, and (c) z axis.

In this section we examine the rotational states for a diatomic molecule by comparing the classical interpretation of the angular momentum vector with the probabilistic interpretation of the angular momentum wavefunctions. We want to answer the following types of questions. How do we describe the orientation of a rotating diatomic molecule in space? Is the molecule actually rotating? What properties of the molecule can be physically observed? In what ways does the quantum mechanical description of a rotating molecule differ from the classical image of a rotating molecule?

> FIGURE {fig:5.9.2} src=media/15882-DiatomicRx.gif
> alt: A sequence of three purple lines connecting two points each, with red dots at the endpoints.
> caption: Rotation of a diatomic molecule about the x axis.

## Introduction to Microwave Spectroscopy

The permanent electric dipole moments of polar molecules can couple to the electric field of electromagnetic radiation. This coupling induces transitions between the rotational states of the molecules. The energies that are associated with these transitions are detected in the far infrared and microwave regions of the spectrum. For example, the microwave spectrum for carbon monoxide spans a frequency range of 100 to 1200 GHz, which corresponds to 3 - 40 $cm^{-1}$.

The selection rules for the rotational transitions are derived from the transition moment integral by using the spherical harmonic functions and the appropriate dipole moment operator, $\hat {\mu}$.

$$ \mu _T = \int Y_{J_f}^{m_f*} \hat {\mu} Y_{J_i}^{m_i} \sin \theta \,d \theta\, d \varphi $$ {eq:5.9.1a} n=1

or in braket notation

$$ \mu _T = \langle Y_{J_f}^{m_f} | \hat {\mu} | Y_{J_i}^{m_i} \rangle $$ {eq:5.9.1b} n=2

Evaluating the transition moment integral involves a bit of mathematical effort. This evaluation reveals that the transition moment depends on the square of the dipole moment of the molecule, $\mu ^2$ and the rotational quantum number, $J$, of the initial state in the transition,

$$ \mu _T = \mu ^2 \dfrac {J + 1}{2J + 1} $$ {eq:5.9.2} n=3

and that the selection rules for rotational transitions are

$$ \Delta J = \pm 1 $$ {eq:5.9.3} n=4

and

$$ \Delta m_J = 0, \pm 1 $$ {eq:5.9.4} n=5

A photon is absorbed for $\Delta J = +1$ and emitted for $\Delta J = -1$.

:::exercise {exr:5.9.1}

Explain why your microwave oven heats water, but not air. Hint: draw and compare Lewis structures for components of air and for water.
:::

The energies of the $J^{th}$ rotational levels are given by

$$ E_J = J(J + 1) \dfrac {\hbar ^2}{2I} $$ {eq:energy} n=6

with each $J^{th}$ energy level having a degeneracy of $2J+1$ due to the different possible $m_J$ values.

## Microwave Transition Energies

The transition energies for absorption of radiation are given by

$$ \begin{align} E_{photon} &= \Delta E \\[4pt] &= E_f - E_i  \\[4pt] &= h \nu \\[4pt] &= hc \bar {\nu}  \end{align} $$ {eq:5.9.5A} n=7 {eq:5.9.5} n=7

Substituting the relationship for energy (Equation [ref:eq:energy]) into Equation [ref:eq:5.9.5A] results in

$$ \begin{align} E_{photon} &= E_f - E_i \\[4pt] &= J_f (J_f +1) \dfrac {\hbar ^2}{2I} - J_i (J_i +1) \dfrac {\hbar ^2}{2I}  \end{align} $$ {eq:5.9.6} n=8

with $J_i$ and $J_f$ representing the rotational quantum numbers of the initial (lower) and final (upper) levels involved in the absorption transition.

Since microwave spectroscopists use frequency units and infrared spectroscopists use wavenumber units when describing rotational spectra and energy levels, both $\nu$ and $\bar {\nu}$ are important to calculate. When we add in the constraints imposed by the selection rules to identify possible transitions, $J_f$ in Equation [ref:eq:5.9.6] can be replaced by $J_i + 1$, since the selection rule requires $J_f – J_i = 1$ for the absorption of a photon (Equation [ref:eq:5.9.3]). The equation for absorption transitions (Equation [ref:eq:5.9.6]) then can be written in terms of the only the quantum number $J_i$ of the initial state.

$$ \begin{align} E_{photon} &= h \nu \\[4pt] &= hc \bar {\nu} \\[4pt] &= 2 (J_i + 1) \dfrac {\hbar ^2}{2I}  \end{align} $$ {eq:5.9.7} n=9

Equation [ref:eq:5.9.7] can be rewritten as

$$ E_{photon} = 2B (J_i+1) $$

where $B$ is the {term:rotational constant} for the molecule and is defined in terms of the *energy* of the absorbed photon

$$ B = \dfrac {\hbar ^2}{2I} $$ {eq:5.9.9} n=10

Often spectroscopists want to express the rotational constant in terms of *frequency* of the absorbed photon and do so by dividing Equation [ref:eq:5.9.9] by $h$

$$ \begin{align} B (\text{in freq}) &= \dfrac{B}{h} \\[4pt] &= \dfrac {h}{8\pi^2 \mu r_0^2} \end{align} $$ n=11

More often, spectroscopists want to express the rotational constant in terms of *wavenumbers* ($\bar{\nu}$) of the absorbed photon by dividing Equation [ref:eq:5.9.9] by $hc$,

$$ \tilde{B} = \dfrac{B}{hc} = \dfrac {h}{8\pi^2 c \mu r_0^2} $$ {eq:5.9.8} n=12

The rotational constant depends on the distance ($R$) and the masses of the atoms (via the reduced mass) of the nuclei in the diatomic molecule.

:::exercise {exr:5.9.2}

Construct a rotational energy level diagram for $J = 0$, $1$, and $2$ and add arrows to show all the allowed transitions between states that cause electromagnetic radiation to be absorbed or emitted.
:::

:::exercise {exr:5.9.3}

Complete the steps going from Equation [ref:eq:5.9.6] to Equation [ref:eq:5.9.9] and identify the units of $B$ at the end.

**Answer**

$$ \begin{align*} \Delta E_{photon} &= E_{f} - E{i}\\[4pt] E_{r.rotor} &= J(J+1)\frac{\hbar^2}{2I}\\[4pt] E_{photon} = h_{\nu} = hc\widetilde{\nu} &= J_f(J_f+1)\frac{\hbar^2}{2I} - J_i(J_i+1)\frac{\hbar^2}{2I}\\[4pt] J_f - J_i &= 1\\[4pt] J_f &= 1 + J_i\\[4pt] E_{photon} = h_{\nu} = hc\widetilde{\nu} &= (1+J_i)(2+J_i)\frac{\hbar^2}{2I} - J_i(J_i+1)\frac{\hbar^2}{2I} \\[4pt] &= \frac{\hbar^2}{2I}[2 + 3J_i + J_i^2 -J_i^2 - J_i]\\[4pt] &= \frac{\hbar^2}{2I}2(J_i+1)\\[4pt] &= 2B(J_i + 1) \end{align*} $$

Now we do a standard dimensional analysis

$$ \begin{align*} B &= \frac{\hbar^2}{2I} \equiv \left[\frac{kg m^2}{s^2}\right] = [J]\\[4pt] \frac{B}{h} = B(in freq.) &= \frac{h}{8 \pi^2\mu r_o^2} \equiv \left[\frac{1}{s}\right]\\[4pt] \frac{B}{hc} = \widetilde{B} &= \frac{h}{8 \pi^2\mu c r_o^2} \equiv \left[\frac{s}{m}\right]\\[4pt] \end{align*} $$
:::

:::exercise {exr:5.9.4}

Infrared spectroscopists use units of wavenumbers. Rewrite the steps going from Equation [ref:eq:5.9.6] to Equation [ref:eq:5.9.9] to obtain expressions for $h\nu$ and $B$ in units of wavenumbers. Note that to convert $B$ in Hz to $B$ in $cm^{-1}$, you simply divide the former by $c$.
:::

> FIGURE {fig:5.9.3} src=media/15879-COrotspectrum.gif width=463
> alt: Simple line drawing of a mountain range with a wavy base line.
> caption: The rotation spectrum of $\ce{^{12}C^{16}O}$ at 40 K. The peaks are tabulated in Table 5.9.1.

Figure 5.9.3 shows the rotational spectrum as a series of nearly equally spaced lines. The line positions $\nu _J$, line spacings, and the maximum absorption coefficients ( $\gamma _{max}$, the absorption coefficients associated with the specified line position) for each line in this spectrum are given here in Table 5.9.1.

> TABLE {tab:1} cols=4
> caption: Table 5.9.1: Rotational Transitions in $^{12}C^{16}O$ at 40 K

| {term:J} | $\nu _J$ (MHz) | {term:Spacing from previous line (MHz)} | $\gamma _{max}$ |
| --- | --- | --- | --- |
| $0 \rightarrow 1$ | 115,271.21 | 0 | 0.0082 |
| $1 \rightarrow 2$ | 230,538.01 | 115,266.80 | 0.0533 |
| $2 \rightarrow 3$ | 345,795.99 | 115,257.99 | 0.1278 |
| $3 \rightarrow 4$ | 461,040.76 | 115,244.77 | 0.1878 |
| $4 \rightarrow 5$ | 576,267.91 | 115,227.15 | 0.1983 |
| $6 \rightarrow 6$ | 691,473.03 | 115,205.12 | 0.1618 |
| $6 \rightarrow 7$ | 806,651.78 | 115,178.68 | 0.1064 |
| $7 \rightarrow 8$ | 921,799.55 | 115,147.84 | 0.0576 |
| $8 \rightarrow 9$ | 1,036,912.14 | 115,112.59 | 0.0262 |
| $9 \rightarrow 10$ | 1,151,985.08 | 115,072.94 | 0.0103 |

Let’s try to reproduce Figure 5.9.3 from the data in Table 5.9.1 by using the quantum theory that we have developed so far. Equation [ref:eq:5.9.8] predicts a pattern of exactly equally spaced lines. The lowest energy transition is between $J_i = 0$ and $J_f = 1$ so the first line in the spectrum appears at a frequency of $2B$. The next transition is from $J_i = 1$ to $J_f = 2$ so the second line appears at $4B$. The spacing of these two lines is $2B$. In fact the spacing of all the lines is $2B$, which is consistent with the experimental data in Table 5.9.1 showing that the lines are very nearly equally spaced. The difference between the first spacing and the last spacing is less than 0.2%.

> FIGURE {fig:5.9.4} src=media/122130-Rotational_spectrum_example.png
> alt: Energy level diagram with transitions and a corresponding intensity plot against energy values.
> caption: Energy levels and line positions calculated in the rigid rotor approximation. (CC BY-SA 3.0; Nrrw via Wikipedia)

:::exercise {exr:5.9.5}

Use Equation [ref:eq:5.9.8] to prove that the spacing of any two lines in a rotational spectrum is $2B$, i.e. derive:

$$ \nu _{J_i + 1} - \nu _{J_i} = 2B $$

**Answer**

To prove the relationship, evaluate the LHS. First, define the terms:

$$ \nu_{J_{i}}=2B(J_{i}+1),\nu_{J_{i}+1}=2B((J_{i}+1)+1) $$

Substitute into the equation and evaluate:

$$ 2B((J_{i}+1)+1)-2B(J_{i}+1)=2B $$

$$ 2B(J_{i}+1)+2B-2B(J_{i}+1)=2B $$

$$ 2B=2B $$

LHS equals RHS.Therefore, the spacing between any two lines is equal to $2B$.
:::

:::example {ex:5.9.1} Rotation of Sodium Hydride

The molecule $\ce{NaH}$ undergoes a rotational transition from $J=0$ to $J=1$ when it absorbs a photon of frequency $2.94 \times 10^{11} \ Hz$. What is the equilibrium bond length of the molecule?

**Solution**

We use $J=0$ in the formula for the transition frequency

$$ \nu =2B=\dfrac{\hbar}{2\pi I}=\dfrac{\hbar}{2\pi \mu R_{e}^{2}} $$

Solving for $R_e$ gives

$$ R_e = \sqrt{\dfrac{\hbar}{2\pi \mu \nu}} $$

The reduced mass is given by

$$ \begin{align*}\mu &= \dfrac{m_{Na}m_H}{m_{Na}+m_H} \\[4pt] &=\dfrac{(22.989)(1.0078)}{22.989+1.0078}\\[4pt] &=0.9655\end{align*} $$

which is in atomic mass units or relative units. To convert to kilograms, we need the conversion factor $1 \ au = 1.66\times 10^{-27} \ kg​$​. Multiplying this by $0.9655$ gives a reduced mass of $1.603\times 10^{-27} \ kg$. Substituting in for $R_e$ gives

$$ \begin{align*} R_e &= \sqrt{\dfrac{(1.055 \times 10^{-34} \ J\cdot s)}{2\pi (1.603\times 10^{-27} \ kg)(2.94\times 10^{11} \ Hz)}}\\[4pt] &= 1.899\times 10^{-10} \ m \\[4pt] &=1.89 \ \stackrel{\circ}{A}\end{align*} $$
:::

:::exercise {exr:5.9.6} {printed:Example 5.9.6}

Use the frequency of the $J = 0$ to $J = 1$ transition observed for carbon monoxide to determine a bond length for $^{12}C^{16}O$.

**Solution**

- J=0: $v_{0}=115271.21\, \text{MHz}$
- J=1: $v_{1}=230538.01\, \text{MHz}$

$$ \begin{align*} \Delta v &=230538.01 ~\text{MHz} -115271.21\, \text{MHz} \\[4pt] &=115266.8 \, \text{MHz} \\[4pt] &=1.153 \times 10^{11} ~\text{Hz} \\[4pt] &=\dfrac{\hbar}{2 \pi \mu R_{e}^2} \end{align*} $$

The reduced mass is

$$ \begin{align*} \mu &=\dfrac{m_{C} m_{O}}{m_{C}+m_{O}} \\[4pt] &=\frac{12.01 \times 16.00}{12.01+16.00} \\[4pt] &=6.86\, \text{amu} \end{align*} $$

Convert to kg

$$ 6.86 amu \, \left( \frac{1.661 \times 10^{-27} ~\text{kg}}{12 ~\text{amu}} \right) =1.139 \times 10^{-26} ~\text{kg} $$

$$ \begin{align*} R_{e} &=\sqrt{\frac{\hbar}{2 \pi \mu \Delta v}} \\[4pt] &= \sqrt{\frac{1.055 \times 10^{-34} ~J \cdot s}{2 \pi \cdot 1.139 \times 10^{-26}~\text{kg} \cdot 1.153 \times 10^{11} ~\text{Hz}}} \\[4pt] &=1.131 \times 10^{-10} \mathrm{m} \\[4pt] &=1.131\, \stackrel{\circ}{A} \end{align*} $$
:::

:::note [note] Advanced: Non-Rigid Rotors

Centrifugal stretching of the bond as $J$ increases causes the decrease in the spacing between the lines in an observed spectrum (Table 5.9.1). This decrease shows that the molecule is not really a rigid rotor. As the rotational angular momentum increases with increasing $J$, the bond stretches. This stretching increases the moment of inertia and decreases the rotational constant (Figure 5.9.5).

> FIGURE {fig:5.9.5} src=media/267973-ezgif-3-69bd3a4fa05d.gif
> alt: A simple graphic showing two circles connected by a wavy line, resembling a spring or wave pattern.
> caption: Two atoms connected by a vibrating bond. There is a rotation around the common center of mass, and oscillation in bond distance. (CC SA-BY 3.0; www.cleonis.nl).

The effect of centrifugal stretching is smallest at low $J$ values, so a good estimate for $B$ can be obtained from the $J = 0$ to $J = 1$ transition. From $B$, a value for the bond length of the molecule can be obtained since the moment of inertia that appears in the definition of $B$ (Equation [ref:eq:5.9.9]) is the reduced mass times the bond length squared. When the centrifugal stretching is taken into account quantitatively, the development of which is beyond the scope of the discussion here, a very accurate and precise value for B can be obtained from the observed transition frequencies because of their high precision. Rotational transition frequencies are routinely reported to 8 and 9 significant figures.
:::

As we have just seen, quantum theory successfully predicts the line spacing in a rotational spectrum. An additional feature of the spectrum is the line intensities. The lines in a rotational spectrum do not all have the same intensity, as can be seen in Figure 5.9.3 and Table 5.9.1. This is related to the populations of the initial and final states. This aspect of spectroscopy will be discussed in more detail in the following chapters
