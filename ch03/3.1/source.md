<!-- LibreTexts page 13391: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03:_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.01:_The_Schrodinger_Equation -->
# The Schrödinger Equation

## Learning Objectives {section:objectives}

- To be introduced to the general properties of the Schrödinger equation and its solutions.

De Broglie’s doctoral thesis, defended at the end of 1924, created a lot of excitement in European physics circles. Shortly after it was published in the fall of 1925 Pieter Debye, Professor of Theoretical Physics at Zurich and Einstein's successor, suggested to Erwin Schrödinger that he give a seminar on de Broglie’s work. Schrödinger gave a polished presentation, but at the end Debye remarked that he considered the whole theory rather childish: why should a wave confine itself to a circle in space? It wasn’t as if the circle was a waving circular string, real waves in space diffracted and diffused, in fact they obeyed three-dimensional wave equations, and that was what was needed. This was a direct challenge to Schrödinger, who spent some weeks in the Swiss mountains working on the problem and constructing his equation. There is no rigorous derivation of Schrödinger’s equation from previously established theory, but it can be made very plausible by thinking about the connection between light waves and photons, and construction an analogous structure for de Broglie’s waves and electrons (and later, other particles).

## The Schrödinger Equation: A Better Approach

While the Bohr model is able to predict the allowed energies of any single-electron atom or cation, it by no means, a general approach. Moreover, it relies heavily on classical ideas, clumsily grafting quantization onto an essentially classical picture, and therefore, provides no real insights into the true quantum nature of the atom. Any rule that might be capable of predicting the allowed energies of a quantum system must also account for the *wave-particle duality* and implicitly include a wave-like description for particles. Nonetheless, we will attempt a heuristic argument to make the result at least plausible. In classical electromagnetic theory, it follows from [Maxwell's equations](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/Map%3A_University_Physics_II_-_Thermodynamics%2C_Electricity%2C_and_Magnetism_(OpenStax)/16%3A_Electromagnetic_Waves/16.1%3A_Maxwell%E2%80%99s_Equations_and_Electromagnetic_Waves) that each component of the electric and magnetic fields in vacuum is a solution of the 3-D wave equation for electromagnetic waves:

$$ \nabla^2 \Psi(x,y,z,t) -\dfrac{1}{c^2}\dfrac{\partial ^2 \Psi(x,y,z,t) }{\partial t^2}=0 $$ {eq:3.1.1} n=1

The wave equation in Equation [ref:eq:3.1.1] is the three-dimensional analog to the wave equation presented earlier (Equation 2.1.1) with the velocity fixed to the known speed of light: $c$. Instead of a partial derivative $\dfrac{\partial^2}{\partial x^2}$ in one dimension, the Laplacian (or "del-squared") operator is introduced:

$$ \nabla^2=\dfrac{\partial^2}{\partial x^2}+\dfrac{\partial^2}{\partial y^2}+\dfrac{\partial^2}{\partial z^2} $$ {eq:3.1.2} n=2

Corresponding, the solution to this 3D equation wave equation is a function of *four* independent variables: $x$, $y$, $z$, and $t$ and is generally called the {term:wavefunction} $\psi$.

We will attempt now to create an analogous equation for de Broglie's matter waves. Accordingly, let us consider a only 1-dimensional wave motion propagating in the *x*-direction. At a given instant of time, the form of a wave might be represented by a function such as

$$ \Psi(x)=f\left(\dfrac {2\pi x}{ \lambda}\right) $$ {eq:3.1.3} n=3

where $f(\theta)$ represents a sinusoidal function such as $\sin\theta$, $\cos\theta$, $e^{i\theta}$, $e^{-i\theta}$ or some linear combination of these. The most suggestive form will turn out to be the complex exponential, which is related to the sine and cosine by Euler's formula

$$ e^{\pm i\theta}=\cos\theta \pm i \sin\theta $$ {eq:3.1.4} n=4

Each of the above is a periodic function, its value repeating every time its argument increases by $2\pi$. This happens whenever $x$ increases by one wavelength $\lambda$. At a fixed point in space, the time-dependence of the wave has an analogous structure:

$$ T(t)=f(2\pi\nu t) $$ {eq:3.1.5} n=5

where $\nu$ gives the number of cycles of the wave per unit time. Taking into account both $x$ and $t$ dependence, we consider a wavefunction of the form

$$ \Psi(x,t)=exp\left[2\pi i\left(\dfrac{x}{\lambda}-\nu t\right)\right] $$ {eq:3.1.6} n=6

representing waves traveling from left to right. Now we make use of the Planck formula ($E=h\nu$) and de Broglie formulas ($p=\frac{h}{\lambda}$) to replace $\nu$ and $\lambda$ by their particle analogs. This gives

$$ \Psi(x,t)=\exp \left[\dfrac{i(px-Et)}{\hbar} \right] $$ {eq:3.1.7} n=7

where

$$ \hbar \equiv \dfrac{h}{2\pi} $$ {eq:3.1.8} n=8

Since Planck's constant occurs in most formulas with the denominator $2\pi$, the $\hbar$ symbol was introduced by Paul Dirac. Equation [ref:eq:3.1.5] represents in some way the wavelike nature of a particle with energy $E$ and momentum *$p$*. The time derivative of Equation [ref:eq:3.1.7] gives

$$ \dfrac{\partial\Psi}{\partial t} = -\left(\dfrac{iE}{\hbar} \right ) \exp \left[\dfrac{i(px-Et)}{\hbar} \right] $$ {eq:3.1.9} n=9

Thus from a simple comparison of Equations [ref:eq:3.1.7] and [ref:eq:3.1.9]

$$ i\hbar\dfrac{\partial\Psi}{\partial t} = E\Psi $$ {eq:3.1.10} n=10

or analogously differentiation of Equation [ref:eq:3.1.9] with respect to $x$

$$ -i\hbar\dfrac{\partial\Psi}{\partial x} = p\Psi $$ {eq:3.1.11} n=11

and then the second derivative

$$ -\hbar^2\dfrac{\partial^2\Psi}{\partial x^2} = p^2\Psi $$ {eq:3.1.12} n=12

The energy and momentum for a *nonrelativistic* free particle (i.e., all energy is kinetic with no potential energy involved) are related by

$$ E=\dfrac{1}{2}mv^2=\dfrac{p^2}{2m} $$ {eq:3.1.13} n=13

Substituting Equations [ref:eq:3.1.12] and [ref:eq:3.1.10] into Equation [ref:eq:3.1.13] shows that $\Psi(x,t)$ satisfies the following partial differential equation

$$ i\hbar\dfrac{\partial\Psi}{\partial t}=-\dfrac{\hbar^2}{2m}\dfrac{\partial^2\Psi}{\partial x^2} $$ {eq:3.1.14} n=14

Equation [ref:eq:3.1.14] is the applicable differential equation describing the wavefunction of a *free particle* that is not bound by any external forces or equivalently not in a region where its potential energy $V(x,t)$ varies.

For a particle with a non-zero potential energy $V(x)$, the total energy $E$ is then a sum of kinetics and potential energies

$$ E=\dfrac{p^2}{2m}+V(x) $$ {eq:3.1.15} n=15

we postulate that Equation [ref:eq:3.1.3] for matter waves can be generalized to

$$ \underbrace{ i\hbar\dfrac{\partial\Psi(x,t)}{\partial t}=\left[-\dfrac{\hbar^2}{2m}\dfrac{\partial^2}{\partial x^2}+V(x)\right]\Psi(x,t) }_{\text{time-dependent Schrödinger equation in 1D}} $$ {eq:3.1.16} n=16

For matter waves in three dimensions, Equation [ref:eq:3.1.6] is then expanded

$$ \underbrace{ i\hbar\dfrac{\partial}{\partial t}\Psi(\vec{r},t)=\left[-\dfrac{\hbar^2}{2m}\nabla^2+V(\vec{r})\right]\Psi(\vec{r},t)}_{\text{time-dependent Schrödinger equation in 3D}} $$ {eq:3.1.17} n=17

Here the potential energy and the wavefunctions $\Psi$ depend on the three space coordinates $x$, $y$, $z$, which we write for brevity as $\vec{r}$. Notice that the potential energy is assumed to depend on position only and not time (i.e., particle motion). This is applicable for [conservative forces ](https://phys.libretexts.org/TextMaps/General_Physics_TextMaps/Map%3A_University_Physics_(OpenStax)/Map%3A_University_Physics_I_(OpenStax)/8%3A_Potential_Energy_and_Conservation_of_Energy/8.2%3A_Conservative_and_Non-Conservative_Forces)that a potential energy function $V(\vec{r})$ can be formulated.

:::note [note] The Laplacian Operator

The three second derivatives in parentheses together are called the Laplacian operator, or del-squared,

$$ \begin{align} \nabla^2 &= \nabla \cdot \nabla \nonumber\\[4pt] &= \left ( \frac {\partial ^2}{\partial x^2} + \dfrac {\partial ^2}{\partial y^2} + \dfrac {\partial ^2}{\partial z^2} \right )  \end{align} $$ {eq:3-20} n=18

with the del operator,

$$ \nabla = \left ( \vec {x} \frac {\partial}{\partial x} + \vec {y} \frac {\partial}{\partial y} + \vec {z} \frac {\partial }{\partial z} \right ) $$ {eq:3-21} n=19

Remember from basic calculus that when the del operator is direclty operates on a field (e.g, $\nabla f(x,y,x)$, it denotes the [gradient ](https://math.libretexts.org/Bookshelves/Calculus/Supplemental_Modules_(Calculus)/Vector_Calculus/1%3A_Vector_Basics/2%3A_The_Gradient)(i.e, the locally steepest slope) of the field. The symbols with arrows in Equation [ref:eq:3-21] are unit vectors.
:::

Equation [ref:eq:3.1.17] is the *time-dependent Schrödinger* equation describing the wavefunction amplitude $\Psi(\vec{r}, t)$ of matter waves associated with the particle within a specified potential $V(\vec{r})$. Its formulation in 1926 represents the start of modern quantum mechanics (Heisenberg in 1925 proposed another version known as matrix mechanics).

For *conservative* systems, the energy is a constant, and the time-dependent factor from Equation [ref:eq:3.1.7] can be separated from the space-only factor (via the *Separation of Variables* technique discussed in Section 2.2)

$$ \Psi(\vec{r},t)=\psi(\vec{r})e^{-iEt / \hbar} $$ {eq:3.1.18} n=20

where $\psi(\vec{r})$ is a wavefunction dependent (or time-independent) wavefuction that only depends on space coordinates. Putting Equation [ref:eq:3.1.18] into Equation [ref:eq:3.1.17] and cancelling the exponential factors, we obtain the time-independent Schrödinger equation:

$$ \textcolor{red}{ \underbrace{\left[-\dfrac{\hbar^2}{2m}\nabla^2+V(\vec{r})\right]\psi(\vec{r})=E\psi(\vec{r})} _{\text{time-independent Schrödinger equation}}} $$ {eq:3.1.19} n=21

The overall form of the Equation [ref:eq:3.1.19] is not unusual or unexpected as it uses the principle of the {term:conservation of energy}. Most of our applications of quantum mechanics to chemistry will be based on this equation (with the exception of spectroscopy). The terms of the time-independent Schrödinger equation can then be interpreted as total energy of the system, equal to the system kinetic energy plus the system potential energy. In this respect, it is just the same as in classical physics.

:::note [note] Time Dependence to the Wavefunctions

Notice that the wavefunctions used with the time-independent Schrödinger equation (i.e., $\psi(\vec{r})$) do not have explicit $t$ dependences like the wavefunctions of time-dependent analog in Equation [ref:eq:3.1.17] (i.e., $\Psi(\vec{r},t)$). That does {term:not imply} that there is no time dependence to the wavefunction. Equation [ref:eq:3.1.18] argues that the time-dependent (i.e., full spatial and temporal) wavefunction ($\Psi(\vec{r},t)$) differs from from the time-independent (i.e., spatial only) wavefunction $\psi(\vec{r})$ by a "phase factor" of constant magnitude. Using the Euler relationship in Equation [ref:eq:3.1.4], the total wavefunction above can be expanded

$$ \Psi(\vec{r},t)=\psi(\vec{r})\left(\cos \dfrac{Et}{\hbar} - i \, \sin \dfrac{Et}{\hbar} \right) $$ {eq:eq30} n=22

This means the total wavefunction has a {term:complex behavior} with a real part and an imaginary part. Moreover, using the trigonometry identity $\sin (\theta) = \cos (\theta - \pi/2)$ Equation [ref:eq:eq30] can further simplified to

$$ \Psi(\vec{r},t)=\psi(\vec{r})\cos \left(\dfrac{Et}{\hbar} \right) - i \psi(\vec{r})\cos \left(\dfrac{Et}{\hbar} - \dfrac{\pi}{2} \right) $$

This shows that both the real and the imaginary components of the total wavefunction oscillate, the imaginary part of the total wavefunction oscillates {term:out of phase} by $\frac{\pi}{2}$ with respect to the real part.

Note that while all wavefunctions have a time-dependence, that dependence may not impact in simple quantum problems as the next sections discuss and can often be ignored.
:::

Before we embark on this, however, let us pause to comment on the validity of quantum mechanics. Despite its weirdness, its abstractness, and its strange view of the universe as a place of randomness and unpredictability, quantum theory has been subject to intense experimental scrutiny. It has been found to agree with experiments to better than $10^{-10}\%$ for all cases studied so far. When the Schrödinger Equation is combined with a quantum description of the electromagnetic field, a theory known as *quantum electrodynamics*, the result is one of the most accurate theories of matter that has ever been put forth. Keeping this in mind, let us forge ahead in our discussion of the quantum universe and how to apply quantum theory to both model and real situations.
