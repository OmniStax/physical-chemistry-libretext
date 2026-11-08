<!-- LibreTexts page 13419: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05:_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.04:_The_Harmonic_Oscillator_Energy_Levels -->
# The Harmonic Oscillator Energy Levels

For a classical oscillator, we know exactly the position, velocity, and momentum as a function of time. The frequency of the oscillator (or normal mode) is determined by the reduced mass $\mu$ and the effective force constant $k$ of the oscillating system and does not change unless one of these quantities is changed. There are no restrictions on the energy of the oscillator, and changes in the energy of the oscillator produce changes in the amplitude of the vibrations experienced by the oscillator.

> FIGURE {fig:5.4.1} src=media/343783-Fig_5.4.1.svg width=507px
> alt: A graph showing a grid of red and blue boxes on a Cartesian plane, with labeled axes.
> caption: Potential energy function and first few energy levels for harmonic oscillator. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)

For the quantum mechanical oscillator, the oscillation frequency of a given normal mode is still controlled by the mass and the force constant (or, equivalently, by the associated potential energy function). However, the energy of the oscillator is limited to certain values. The allowed quantized energy levels are equally spaced and are related to the oscillator frequencies as given by Equation [ref:eq:5.4.1] and Figure 5.4.1.

$$ E_v = \left ( v + \dfrac {1}{2} \right ) \hbar \omega = \left ( v + \dfrac {1}{2} \right ) h \nu $$ {eq:5.4.1} n=1

with

$$ v = 0, 1, 2, 3, \cdots \infty $$

In a quantum mechanical oscillator, we cannot specify the position of the oscillator (the exact displacement from the equilibrium position) or its velocity as a function of time; we can only talk about the probability of the oscillator being displaced from equilibrium by a certain amount. This probability is given by

$$ P_{Q \rightarrow Q + dQ} = \int_{Q}^{Q + dQ} \psi ^*_v (Q) \psi _v (Q) dQ $$ {eq:5.4.3} n=2

We can, however, calculate the average displacement and the mean square displacement of the atoms relative to their equilibrium positions. This average is just $\left \langle Q \right \rangle$, the expectation value for $Q$, and the mean square displacement is $\left \langle Q^2 \right \rangle$, the expectation value for $Q^2$. Similarly we can calculate the average momentum $\left \langle P_Q \right \rangle$, and the mean square momentum $\left \langle P^2_Q \right \rangle$, but we cannot specify the momentum as a function of time.

Physically what do we expect to find for the average displacement and the average momentum? Since the potential energy function is *symmetric* around $Q = 0$, we expect values of $Q > 0$ to be equally as likely as $Q < 0$. The average value of $Q$ therefore should be zero.

These results for the average displacement and average momentum do not mean that the harmonic oscillator is sitting still. As for the particle-in-a-box case, we can imagine the quantum mechanical harmonic oscillator as moving back and forth and therefore having an average momentum of zero. Since the lowest allowed harmonic oscillator energy, $E_0$, is $\dfrac{\hbar \omega}{2}$ and not 0, the atoms in a molecule must be moving even in the lowest vibrational energy state. This phenomenon is called the zero-point energy or the zero-point motion, and it stands in direct contrast to the classical picture of a vibrating molecule. Classically, the lowest energy available to an oscillator is zero, which means the momentum also is zero, and the oscillator is not moving.

:::exercise {exr:5.4.1}

Compare the quantum mechanical harmonic oscillator to the classical harmonic oscillator at $v=1$ and $v=50$.

**Answer**

At v=1 the classical harmonic oscillator poorly predicts the results of quantum mechanical harmonic oscillator, and therefore reality. At v=1 the particle will be near the ground state and the classical model will predict the particle to spend most it's time on the outer edges when the KE goes to zero and PE is at a maximum, while the quantum model says the opposite and that the particle will be more likely to be found in the center. At v=50 the quantum model will begin to match the classical much more closely, with the particle most likely to be found at the edges. The quantum model looking more like the classical at higher quantum numbers can be referred to as the correspondence principle.
:::

Since the average values of the displacement and momentum are all zero and do not facilitate comparisons among the various normal modes and energy levels, we need to find other quantities that can be used for this purpose. We can use the root mean square deviation (see also root-mean-square displacement) (also known as the standard deviation of the displacement) and the root-mean-square momentum as measures of the uncertainty in the oscillator's position and momentum.

For a molecular vibration, these quantities represent the standard deviation in the bond length and the standard deviation in the momentum of the atoms from the average values of zero, so they provide us with a measure of the relative displacement and the momentum associated with each normal mode in all its allowed energy levels. These are important quantities to determine because vibrational excitation changes the size and symmetry (or shape) of molecules. Such changes affect chemical reactivity, the absorption and emission of radiation, and the dissipation of energy in radiationless transitions.

The harmonic oscillator wavefunctions form an orthonormal set; this means that all functions in the set are normalized individually

$$ \int \limits _{-\infty}^{\infty} \psi ^*_v (x) \psi _v (x) dx = 1 $$ {eq:5.4.4} n=3

and are orthogonal to each other.

$$ \int \limits _{-\infty}^{\infty} \psi ^*_{v'} (x) \psi _v (x) dx = 0 \;\; \text {for} \;\; v' \ne v $$ {eq:5.4.5} n=4

The fact that a family of wavefunctions forms an orthonormal set is often helpful in simplifying complicated integrals. We will use these properties when we determine the harmonic oscillator selection rules for vibrational transitions in a molecule and calculate the absorption coefficients for the absorption of infrared radiation.

Finally, we can calculate the probability that a harmonic oscillator is in the classically forbidden region. What does this tantalizing statement mean? Classically, the maximum extension of an oscillator is obtained by equating the total energy of the oscillator to the potential energy, because at the maximum extension all the energy is in the form of potential energy. If all the energy weren't in the form of potential energy at this point, the oscillator would have kinetic energy and momentum and could continue to extend further away from its rest position. Interestingly, as we show below, the wavefunctions of the quantum mechanical oscillator extend beyond the classical limit, i.e. beyond where the particle can be according to classical mechanics.

The lowest allowed energy for the quantum mechanical oscillator is called the {term:zero-point energy,} $E_0 = \dfrac {\hbar \omega}{2}$. Using the classical picture described in the preceding paragraph, this total energy must equal the potential energy of the oscillator at its maximum extension. We define this classical limit of the amplitude of the oscillator displacement as $Q_0$. When we equate the zero-point energy for a particular normal mode to the potential energy of the oscillator in that normal mode, we obtain

$$ \dfrac {\hbar \omega}{2} = \dfrac {k Q^2_0}{2} $$ {eq:5.4.6} n=5

> The zero-point energy is the {term:lowest} possible energy that a quantum mechanical physical system may have. Hence, it is the energy of its ground state.

Recall that $k$ is the effective force constant of the oscillator in a particular normal mode and that the frequency of the normal mode is given by Equation [ref:eq:5.4.1] which is

$$ \omega = \sqrt {\dfrac {k}{\mu}} $$ {eq:5.4.7} n=6
