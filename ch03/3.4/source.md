<!-- LibreTexts page 13394: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03:_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.04:_Wavefunctions_Have_a_Probabilistic_Interpretation -->
# Wavefunctions Have a Probabilistic Interpretation

## Learning Objectives {section:objectives}

- To understand that wavefunctions can have probabilistic interpretations.
- To calculate the probabilities directly from a wavefunctions

For a single-particle system, the wavefunction $\Psi(\vec{r},t)$, or $\psi(\vec{r})$ for the time-independent case, represents the amplitude of the still vaguely defined matter waves. Since wavefunctions can in general be complex functions, the physical significance cannot be found from the function itself because the $\sqrt {-1}$ is not a property of the physical world. Rather, the physical significance is found in the product of the wavefunction and its complex conjugate, i.e. the absolute square of the wavefunction, which also is called the {term:square of the modulus} (also called absolute value).

$$ \begin{align} P(\vec{r},t) &= \Psi^*(\vec{r},t) \Psi(\vec{r},t) \\[4pt] &= {|\Psi(\vec{r},t)|}^2  \end{align} $$ {eq:3.4.1} n=1

where $\vec{r}$ is a vector $(x, y, z)$ specifying a point in three-dimensional space. The square is used, rather than the modulus itself, just like the intensity of a light wave depends on the square of the electric field.

Born proposed in 1926, the most commonly accepted interpretation of the wavefunction {term:that the square of the modulus} (Equation [ref:eq:3.4.1]) is {term:proportional} to the {term:probability density} (probability per unit volume) that the electron is in the volume $d\tau$ located at $r_i$. Since the wavefunction represents the wave properties of matter, the probability amplitude $P(x,t)$ will also exhibit wave-like behavior. Probability density is the three-dimensional analog of the diffraction pattern that appears on the two-dimensional screen in the double-slit diffraction experiment for electrons. The idea that we can understand the world of atoms and molecules only in terms of probabilities is disturbing to some, who are seeking more satisfying descriptions through ongoing research.

> The Born interpretation therefore calls the wavefunction the probability amplitude, the absolute square of the wavefunction is called the probability density, and the probability density times a volume element in three-dimensional space ($d\tau$) is the probability $P$

The probability that a single quantum particle moving in one spatial dimension will be found in a region $x\in[a,b]$ if a measurement of its location is performed is

$$ P(x\in[a,b])=\int_{a}^{b}|\psi (x)|^2 dx $$ {eq:3.4.2} n=2

In three dimensions, Equation [ref:eq:3.4.2] is represented differently

$$ P(x \in[a,b])=\int_{V}|\psi (\vec{\tau})|^2 d\tau $$ {eq:3.4.3} n=3

This integration extends over a specified volume ($V$) with the symbol $d\tau$ designating the appropriate volume element (including a [Jacobian](https://math.libretexts.org/TextMaps/Calculus/Supplemental_Modules_(Calculus)/Vector_Calculus/3%3A_Multiple_Integrals/3.8%3A_Jacobians)) of the coordinate system adopted:

- Cartesian:
   
   $$ d\tau = dx\,dy\,dz $$
- Spherical:
   
   $$ d\tau = r^2 \sin \phi \,dr\, dθ \,d \phi $$
- Cylindrical:
   
   $$ d\tau = r \,dr\, d \phi \,dz. $$

For rectilinear Cartesian space, Equation [ref:eq:3.4.3] can be is expanded with dimension explicitly indicated

$$ P(x \in[a,b])=\int_{a_x}^{b_x} \int_{a_y}^{b_y} \int_{a_z}^{b_z}|\psi (x,y,z)|^2 dx\,dy\,dz $$ {eq:3.4.4} n=4

where the limits of integration are selected to encompass the volume $V$ of consideration.

The Born interpretation (Equation [ref:eq:3.4.1]) of relating the wavefunction to probability forces certain demands on its mathematical behavior of wavefunctions and not any mathematical function can be a valid wavefunction.

:::note [note] Required Properties of Wavefunction

- The wavefunction must be a *single-valued function* of all its coordinates, since the probability density ought to be *uniquely determined* at each point in space.
- The wavefunction should be both *finite* as an infinite probability has no meaning.
- The wavefunction should be *continuous everywhere*, as expected for a physically-meaningful probability density.
:::

The conditions that the wavefunction be single-valued, finite and continuous--in short, "well behaved"-- lead to restrictions on solutions of the Schrödinger equation such that only certain values of the energy and other dynamical variables are allowed. This is called *quantization* and is in the feature that gives *quantum* mechanics its name.

It is important to note that this interpretation implies the wavefunction does {term:not} mean the particle is distributed over a large region as a sort of "charge cloud". The wavefunction is used to describe the electron motion that behaves like waves and satisfies a wave equation. This is akin to how a grade distribution in a large class does not represent a smearing of grades for a single student, but only makes sense when taking into account that the distribution is the result of many measurables (e.g., student performances).

:::example {ex:3.4.1}

Show that the square of the modulus of $\Psi(\vec{r},t) = \psi(\vec{r}) e^{-iωt}$ is time independent. What insight regarding stationary states do you gain from this proof?
:::

:::example {ex:3.4.2}

According to the Born interpretation, what is the physical significance of $e\psi^*(r_0)(r_0)d\tau$?
:::
