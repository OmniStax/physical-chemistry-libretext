<!-- LibreTexts page 13420: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05:_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.06:_The_Harmonic_Oscillator_Wavefunctions_involve_Hermite_Polynomials -->
# The Harmonic Oscillator Wavefunctions involve Hermite Polynomials

## Learning Objectives {section:objectives}

- The Equation for a Harmonic-Oscillator Model of a Diatomic Molecule Contains the Reduced Mass of the Molecule

For a diatomic molecule, there is only one vibrational mode, so there will be only a single set of vibrational wavefunctions with associated energies for this system. For polytatomic molecules, there will be a set of wavefunctions with associated energy associated with each vibrational mode.

The Hamiltonian operator, the general quantum mechanical operator for energy, includes both a kinetic energy term, $\hat {T}$, and a potential energy term, $\hat {V}$.

$$ \hat {H} = \hat {T} + \hat {V} $$ {eq:5.6.2} n=1

For the free particle and the particle in a box, the potential energy term used in the Hamiltonian was zero. As shown in Equation [ref:eq:5.6.2], the classical expression for the energy of a harmonic oscillator includes both a kinetic energy term and the harmonic potential energy term. Transforming this equation into the corresponding Hamiltonian operator gives,

$$ \hat {H} (q) = \dfrac {1}{2 \mu} \hat {P}^2_q + \dfrac {k}{2} \hat {q}^2 $$ {eq:5.6.3} n=2

where $\hat {q}$ is the operator for the length of the normal coordinate, and $\hat {P}_q$ is the momentum operator associated with the normal coordinate. $\mu$ is an effective (reduced) mass, and $k$ is an effective force constant, and these quantities will be different for each of the normal modes (vibrations).

Substituting the definitions for the operators yields

$$ \hat {H} (q) = -\dfrac {\hbar ^2}{2\mu} \dfrac {d^2}{dq^2} + \dfrac {k}{2} q^2 $$ {eq:5.6.4} n=3

since the operator for position or displacement is just the position or displacement. The time-independent Schrödinger Equation then becomes

$$ - \dfrac {\hbar ^2}{2\mu} \dfrac {d^2 \psi _v (q)}{dq^2} + \dfrac {k}{2} q^2 \psi _v (q) = E_v \psi _v (q) $$ {eq:15.6.5} n=4

or upon rearranging

$$ \dfrac {d^2 \psi _v (q)}{dq^2} + \dfrac {2 \mu}{\hbar ^2} \left ( E_v - \dfrac {k}{2} q^2 \right ) \psi _v (q) = 0 $$ {eq:15.6.6} n=5

This differential equation is not straightforward to solve. Rather than fully develop the details of the solution, we will outline the method used because it represents a common strategy for solving differential equations. The steps taken to solve Equation [ref:eq:15.6.6] are to simplify the equation by collecting constants in the parameter $\beta$

$$ \beta ^2 = \dfrac {\hbar}{\sqrt { \mu k}} $$ {eq:15.6.7} n=6

and then changing the variable from $q$ to $x$ where

$$ x = \dfrac {q}{\beta} $$ {eq:scale} n=7

so that

$$ \dfrac {d^2}{dq^2} = \dfrac {1}{\beta^2} \dfrac {d^2}{dx^2} $$ {eq:15.6.8} n=8

After substituting Equations [ref:eq:15.6.7] and [ref:eq:15.6.8] into Equation [ref:eq:15.6.6], the differential equation for the harmonic oscillator becomes

$$ \dfrac {d^2 \psi _v (x)}{dx^2} + \left ( \dfrac {2 \mu \beta ^2 E_v}{\hbar ^2} - x^2 \right ) \psi _v (x) = 0 $$ {eq:15.6.9} n=9

:::exercise {exr:5.6.1}

Make the substitutions given in Equations [ref:eq:15.6.7] and [ref:eq:15.6.8] into Equation [ref:eq:15.6.6] to get Equation [ref:eq:15.6.9].
:::

## Solving for the Quantum Wavefunctions

A common strategy for solving differential equations, which is employed here, is to find a solution that is valid for large values of the variable and then develop the complete solution as a product of this asymptotic solution and a power series. Since the potential energy approaches infinity as $x$ and the coordinate $q$ approach infinity, the wavefunctions must approach zero (this is, the wavefunctions must {term:converge to zero}):

$$ \lim_{x \rightarrow \infty} \psi_v(x) = 0 $$ {eq:15.6.10a} n=10

The function that has this property and satisfies the differential equation for large values of $x$ is the exponential function, i.e.,

$$ \lim_{x \rightarrow \infty} \phi_v(x) \exp \left ( \dfrac {-x^2}{2} \right ) = 0 $$ {eq:15.6.10} n=11

where the wavefunctions are

$$ \psi_v(x) \propto \phi_v(x) \exp \left ( \dfrac {-x^2}{2} \right ) $$

The general expression for a power series of $\phi_v(x)$ is

$$ \begin{align*}\phi_v(x) &= \sum _{n=0}^\infty c_n(v) x^n \\[4pt] &=c_n(v) x + c_n(v) x^2 + c_n(v) x^3 + \cdots \end{align*} $$

which can be truncated after the first term, after the second term, after the third term, etc. to produce a set of polynomials. There is one polynomial for each value of $v$ where $v$ can be equal to any integer value including zero.

$$ \sum _{n=0}^v c_n x^n $$ {eq:15.6.12} n=12

Each of the truncations of the power series in Equation [ref:eq:15.6.12] can be multiplied by the exponential function in Equation [ref:eq:15.6.10] to create a family of valid solutions to the differential equation in Equation [ref:eq:15.6.9].

$$ \psi _v (x) = \sum _{n=0}^v c_n x^n \exp \left ( \dfrac {-x^2}{2} \right ) $$ {eq:15.6.13} n=13

:::exercise {exr:5.6.2}

Write the first four polynomials, $v=0$ to $v=1$, $v=12$, $v=13$, $v=14$ for Equation [ref:eq:15.6.12] and use suitable software to prepare plots of these polynomials. Identify the curves in the plots.
:::

:::exercise {exr:5.6.3}

Confirm that the wavefunction given by Equation [ref:eq:15.6.13] is a solution to the harmonic oscillator Schrödinger Equation in Equation [ref:eq:15.6.9] for $v=0$ and $v=1$.
:::

### Hermite Polynomials

While polynomials in general approach $∞$ (or $-∞$) as $x$ approaches $∞$, the decreasing exponential term overpowers the polynomial term so that the overall wavefunction exhibits the desired approach to zero at large values of $x$ or $-x$. The exact forms of polynomials that solve Equation [ref:eq:15.6.9] are the {term:Hermite polynomials}, which are standard mathematical functions known from the work of Charles Hermite. The first eight Hermite polynomials, $H_v(x)$, are given below.

- $H_0 = 1$
- $H_1 = 2x$
- $H_2 = -2 + 4x^2$
- $H_3 = -12x + 8x^3$
- $H_4 = 12 - 48x^2 +16x^4$
- $H_5 = 120x - 160x^3 + 32x^5$
- $H_6 = -120 + 720x^2 - 480 x^4 + 64x^6$
- $H_7 = -1680x + 3360 x^3 - 1344 x^5 + 128 x^7$

The first six Hermite polynomials are plotted in Figure 5.6.1. Hermite polynomials will be discussed in more detail in the following Section.

> FIGURE {fig:5.6.1} src=media/344453-Hermite_poly_phys.svg width=505px
> alt: Graph depicting multiple curves in varying colors, including blue, green, cyan, and red, each representing different mathematical functions.
> caption: The first six Hermite polynomials $H_n(x)$. (CC BY-SA 3.0 Unported; [Alessio ](https://commons.wikimedia.org/wiki/User:Alejo2083)[Damato](https://commons.wikimedia.org/wiki/User:Alejo2083), Vulpecula and others via Wikipedia)

:::exercise {exr:5.6.4}

Determine the units of $β$ and the units of $x$ in the Hermite polynomials.
:::

Because of the association of the wavefunction with a probability density, it is necessary for the wavefunction to include a normalization constant, $N_v$.

$$ N_v = \dfrac {1}{(2^v v! \sqrt {\pi} )^{1/2}} $$ {eq:5.6.15} n=14

The final form of the harmonic oscillator wavefunctions is thus

$$ \psi _v (x) = N_v H_v (x) e^{-x^2/2} $$ {eq:5.6.16} n=15

:::note [note] Alternative and More Common Formulation of Harmonic Oscillator Wavefunctions

The harmonic oscillator wavefunctions are often written in terms of $Q$, the unscaled displacement coordinate (Equation [ref:eq:scale]) and a different constant $\alpha$:

$$ \alpha =1/\sqrt{\beta} = \sqrt{\dfrac{k \mu}{\hbar ^2}} $$

so Equation [ref:eq:5.6.16] becomes

$$ \psi _v (x) = N_v'' H_v (\sqrt{\alpha} Q) e^{-\alpha Q^2/ 2} $$

with a slightly different normalization constant

$$ N_v'' = \sqrt {\dfrac {1}{2^v v!}} \left(\dfrac{\alpha}{\pi}\right)^{1/4} $$
:::

:::exercise {exr:5.6.5}

Compute the normalization factor for $\psi_v(x)$ where $v = 0$ and $v = 4$. What is the purpose of $N_v$?
:::

The energy eigenvalues for a quantum mechanical oscillator also are obtained by solving the Schrödinger equation. The energies are restricted to discrete values

$$ E_v = \left ( v + \dfrac {1}{2} \right ) \hbar \omega $$ {eq:5.6.17} n=16

with $v = 0, 1, 2, 3, \cdots$.

The energies depend both on the quantum number, $v$, and the oscillator frequency

$$ \omega = \sqrt {\dfrac {k}{\mu}} $$

which in turn depends on the spring constant $k$ and the reduced mass of the vibration $\mu$.

:::exercise {exr:5.6.6}

Determine the energy for the first ten harmonic oscillator energy levels in terms of $\hbar \omega$. Sketch an energy level diagram of these energies.

1. What insights do you gain from Equation [ref:eq:5.6.17], your calculations, and your diagram?
2. Is it possible to have a molecule that is not vibrating?
3. In terms of $\hbar \omega$, what is the energy of the photon required to cause a transition from one vibrational state to the next higher one?
4. If a transition from energy level $v = 9$ to $v = 10$ were observed in a spectrum, where would that spectral line appear relative to the one for the transition from level $v = 0$ to $v = 1$?
5. If a vibrational transition is observed at 3000 cm-1 in an infrared spectrum, what is the value of $\hbar \omega$ for the normal mode?
6. Identify all the possible meanings of $ΔE = hν$ and the definition of the frequency, $ν$, in each case.
:::

The normalized wavefunctions for the first four states of the harmonic oscillator are shown in Figure 5.6.2, and the corresponding probability densities are shown in Figure 5.6.3. You should remember the mathematical and graphical forms of the first few harmonic oscillator wavefunctions, and the correlation of $v$ with $E_v$. The number of nodes in the wavefunction will help you to remember these characteristics. Also note that the functions fall off exponentially and that the symmetry alternates. For $v$ equal to an even number, $\psi_v$ is gerade; for $v$ equal to an odd number, $\psi_v$ is ungerade.

> FIGURE {fig:5.6.2} src=media/345385-5.6.2-1_(1).svg width=274px
> alt: A flow diagram with blue boxes and a red curve, illustrating a concept in statistics or data analysis.
> part src=media/345384-5.6.2-2_(1).svg width=274px
> alt: Graph depicting a red curve with blue bounding boxes around points, illustrating data analysis or object detection.
> part src=media/345386-5.6.2-3_(1).svg width=274px
> alt: Graph with a red wavy line intersecting several blue rectangular boxes, representing data points and structures.
> part src=media/345387-5.6.2-4_(1).svg width=274px
> alt: Graph with a red wave line and blue rectangles outlining various regions on a grid.
> caption: The harmonic oscillator wavefunctions describing the four lowest energy states.

:::exercise {exr:5.6.7}

Write a few sentences describing and comparing the plots in Figure 5.6.2. How many nodes are there as a function of $v$? Do the wavefunctions converge at extreme displacement? Where is the most likely displacements for the oscillator to be found?
:::

> FIGURE {fig:5.6.3} src=media/345391-5.6.3-1.svg width=274px
> alt: Graph showing a red curve on a coordinate plane with several blue rectangles outlined, suggesting object detection or clustering.
> part src=media/345390-5.6.3-2.svg width=274px
> alt: Graph displaying a red sine wave with blue rectangles indicating data points or ranges on a black background.
> part src=media/345389-5.6.3-3.svg width=274px
> alt: A graph with a red sine wave and multiple blue rectangular boxes overlaying the plot, indicating areas of interest.
> part src=media/345388-5.6.3-4.svg width=274px
> alt: A graph with a red sinusoidal wave and blue boxes around certain areas, indicating features or data points.
> caption: The probability densities for the four lowest energy states of the harmonic oscillator.

:::exercise {exr:5.6.8}

Explain how Figure 5.6.3 is related to Figure 5.6.2. Explain the physical significance of the plots in Figure 5.6.3 in terms of the magnitude of the normal coordinate $Q$. Couch your discussion in terms of the $\ce{HCl}$ molecule. How would you describe the location of the atoms in each of the states? How does the oscillator position correspond to the energy of a particular level?

**Answer**

Figure 5.6.2 is simply the wavefunction in Figure 5.6.1 squared. The normal coordinate is the linear combination of the atomic cartesian coordinates. As Q is often in relation to the energy (kinetic and potential), they would be displaced by a certain amount dependent on Q (energy) along with an increase in nodes. This displacement is apparent when comparing the ascending energy levels of each of the wavefunctions. In the n=0 (first) energy state, it is most probable to be found between -2, 2. (in a range of -4, 4) In the second energy state, it is likely to be between -2.5, 2.5 (range -5, 5), third level: (-3,3) (range -6,6), fourth level (-4,4) (range -6,6).
:::

:::exercise {exr:5.6.9}

Plot the probability density for energy level 10 of the harmonic oscillator. How many nodes are present? Plot the probability density for energy level 20. Compare the plot for level 20 with that of level 10 and level 1. Compare these quantum mechanical probability distributions to those expected for a classical oscillator. What conclusion can you draw about the probability of the location of the oscillator and the length of a chemical bond in a vibrating molecule? Extend your analysis to include a very high level, like level 50.
:::

In completing Exercise 5.6.9, you should have noticed that as the quantum number increases and becomes very large, the probability distribution approaches that of a classical oscillator. This observation is very general. It was first noticed by Bohr, and is called the Bohr Correspondence Principle. This principle states that classical behavior is approached in the limit of large values for a quantum number. A classical oscillator is most likely to be found in the region of space where its velocity is the smallest. This situation is similar to walking through one room and running through another. In which room do you spend more time? Where is it more likely that you will be found?

Examination of the quantum mechanical wavefunction for the lowest-energy state reveals that the wavefunction $\psi_0(x)$ extends beyond the classical limit (i.e., outside of the harmonic oscillator well, albeit slightly). Higher energy states have higher total energies, so the classical limits to the amplitude of the displacement will be larger for these states.

## Tunneling in the Quantum Harmonic Oscillator

The observation that the wavefunctions are not zero at the classical limit means that the quantum mechanical oscillator has a finite probability of having a displacement that is larger than what is classically possible. The oscillator can be in a region of space where the potential energy is greater than the total energy. Classically, when the potential energy equals the total energy, the kinetic energy and the velocity are zero, and the oscillator cannot pass this point. A quantum mechanical oscillator, however, has a finite probability of passing this point. For a molecular vibration, this property means that the amplitude of the vibration is larger than what it would be in a classical picture. In some situations, a larger amplitude vibration could enhance the chemical reactivity of a molecule.

:::exercise {exr:5.6.10}

Plot the probability density for $v = 0$ and $v = 1$ states. Mark the classical limits on each of the plots, since the limits are different because the total energy is different for $v = 0$ and $v = 1$. Shade in the regions of the probability densities that extend beyond the classical limit.
:::

We should be able to calculate the probability that the quantum mechanical harmonic oscillator is in the classically forbidden region for the lowest energy state of the harmonic oscillator, the state with $v = 0$. The classically forbidden region is shown by the shading of the regions beyond $Q_0$ in the graph you constructed for Exercise 5.6.3. The area of this shaded region gives the probability that the bond oscillation will extend into the forbidden region (Figure 5.6.3). To calculate this probability, we use

$$ P [ \text {forbidden}] = 1 - P [ \text {allowed}] $$ {eq:5.4.9} n=17

because the integral from 0 to $Q_0$ for the allowed region can be found in integral tables and the integral from $Q_0$ to $\infty$ cannot. The form of the integral, $P[ \text{allowed}]$, to evaluate is

$$ P[ \text {allowed}] = 2 \int \limits _0^{Q_0} \psi _0^* (Q) \psi _0 (Q) dQ $$ {eq:5.4.10} n=18

The factor 2 appears in Equation [ref:eq:5.4.10] from the chancing the limits of integration from $-Q_0$ to $+Q_0$ into $0$ to $+Q_0$; we can do this since the integrand is an even function, i. e., $f(-x)=f(x)$. To evaluate the integral in Equation [ref:eq:5.4.10], use the wavefunction and do the integration in terms of $x$. Recall that for $v = 0$, $Q = Q_0$ corresponds to $x = 1$. Including the normalization constant, Equation [ref:eq:5.4.10] produces

$$ P[ \text {allowed}] = \dfrac {2}{\sqrt {\pi}} \int \limits _0^1 \exp (-x^2) dx $$ {eq:5.4.11} n=19

The integral in Equation [ref:eq:5.4.11] is called an [error function (ERF)](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book%3A_Heat_and_Thermodynamics_(Tatum)/04%3A_Thermal_Conduction/4.01%3A_Error_Function) and can only be evaluated numerically. Values can be found in books of mathematical tables. When the limit of integration is 1, ERF(l) = 0.843 and P[forbidden] = 0.157. This result means that the quantum mechanical oscillator can be found in the forbidden region 16% of the time. This effect is substantial and leads to the phenomenon called *quantum mechanical tunneling*.

:::exercise {exr:5.6.11}

Numerically verify that $P[ \text{allowed}]$ in Equation [ref:eq:5.4.11] equals 0.843. To obtain a value for the integral do not use symbolic integration or symbolic equals.
:::
