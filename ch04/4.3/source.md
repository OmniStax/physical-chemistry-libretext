<!-- LibreTexts page 13408: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04:_Postulates_and_Principles_of_Quantum_Mechanics/4.03:_Observable_Quantities_Must_Be_Eigenvalues_of_Quantum_Mechanical_Operators -->
# Observable Quantities Must Be Eigenvalues of Quantum Mechanical Operators

## Learning Objectives {section:objectives}

- To be introduced to the role of eigenvalue equations in obtaining observables from a system
- Understand how expectation values are calculated if the wavefunctions is not an eigenstate of the operator for the observable.

Recall, that we can identify the total energy operator, which is called the Hamiltonian operator, $\hat{H}$, as consisting of the kinetic energy operator plus the potential energy operator.

$$ \hat {H} = - \dfrac {\hbar ^2}{2m} \nabla ^2 + \hat {V} (x, y , z ) $$ {eq:3-22} n=1

Using this notation, we write the Schrödinger Equation as

$$ \hat {H} | \psi (x , y , z ) \rangle = E | \psi ( x , y , z ) \rangle $$ {eq:3-23} n=2

Equation [ref:eq:3-23] says that the Hamiltonian operator operates on the wavefunction to produce the energy, which is a number, (a quantity of Joules), times the wavefunction. Such an equation, where the operator, operating on a function, produces a constant times the function, is called an {term:eigenvalue equation}. The function is called an {term:eigenfunction}, and the resulting numerical value is called the {term:eigenvalue}. Eigen here is the German word meaning self or own.

It is a general principle of Quantum Mechanics that there is an operator for every physical observable. A physical observable is anything that can be measured. If the wavefunction that describes a system is an eigenfunction of an operator, then the value of the associated observable is extracted from the eigenfunction by operating on the eigenfunction with the appropriate operator. The value of the observable for the system is the eigenvalue, and the system is said to be in an eigenstate. Equation [ref:eq:3-23] states this principle mathematically for the case of energy as the observable.

:::note [definition] Postulate III: Obtaining Observables Requires Solving Eigenvalue Problems

If a system is described by the eigenfunction $\Psi$ of an operator $\hat{A}$ then the value measured for the observable property corresponding to $\hat{A}$ will always be the eigenvalue $a$, which can be calculated from the eigenvalue equation.

$$ \hat {A} | \Psi \rangle = a | \Psi \rangle $$ {eq:4.3.1} n=3
:::

Consider a general real-space operator $A(x)$. When this operator acts on a general wavefunction $\psi(x)$ the result is usually a wavefunction with a completely different shape. However, there are certain special wavefunctions which are such that when $A$ acts on them the result is just a multiple of the original wavefunction. These special wavefunctions are called *eigenstates*, and the multiples are called *eigenvalues*. Thus, if

$$ A | \psi_a(x) \rangle = a | \psi_a(x) \rangle $$ {eq:4.3.2} n=4

where $a$ is a complex number, then $\psi_a$ is called an {term:eigenstate} of $A$ corresponding to the eigenvalue $a$.

Suppose that $A$ is an operator corresponding to some physical dynamical variable. Consider a particle whose wavefunction is $\psi_a$. The expectation of value $A$ in this state is simply

$$ \begin{align*} \langle A\rangle &= \int_{-\infty}^\infty \psi_a^{\ast} A \psi_a dx \\[4pt] &= a \int_{-\infty}^\infty \psi_a^{\ast} \psi_a dx \\[4pt] &= a. \end{align*} $$

where use has been made of Equation [ref:eq:4.3.2] and the normalization condition. Moreover,

$$ \begin{align*} \langle A^2\rangle &= \int_{-\infty}^\infty \psi_a^{\ast} A^2 \psi_a dx \\[4pt] &= a \int_{-\infty}^\infty \psi_a^{\ast} A \psi_a dx \\[4pt] &= a^2 \int_{-\infty}^\infty \psi_a^{\ast} \psi_a dx \\[4pt] &= a^2. \end{align*} $$

So the variance of $A$ is

$$ \begin{align*} \sigma_A^{ 2} &= \langle A^2\rangle - \langle A\rangle^2 = a^2-a^2 \\[4pt] &= 0. \end{align*} $$

The fact that the variance is *zero* implies that every measurement of $A$ is bound to yield the same result: namely, $a$. Thus, the eigenstate $\psi_a$ is a state which is associated with a *unique* value of the dynamical variable corresponding to $A$. This unique value is simply the associated eigenvalue determined by Equation [ref:eq:4.3.2].

## Expectation Values

We have seen that $\vert\psi(x,t)\vert^{ 2}$ is the probability density of a measurement of a particle's displacement yielding the value $x$ at time $t$. Suppose that we made a large number of independent measurements of the displacement on an equally large number of identical quantum systems. In general, measurements made on different systems will yield different results. However, from the definition of probability, the mean of all these results is simply

$$ \langle x\rangle = \int_{-\infty}^{\infty} x \vert\psi\vert^{ 2} dx $$ {eq:4.3.5} n=5

Here, $\langle x\rangle$ is called the *expectation value* of $x$. Similarly the expectation value of any function of $x$ is

$$ \langle f(x)\rangle = \int_{-\infty}^{\infty} f(x) \vert\psi\vert^{ 2} dx. $$ {eq:4.3.6} n=6

:::note [definition] Postulate IV

The average value of an observable measurement of a state in (*normalized*) wavefunction $\psi$ with operator $\hat{A}$ is given by the expectation value $\langle a \rangle$:

$$ \begin{align} \langle a \rangle &= \langle \psi | a |\psi \rangle \\[4pt] &= \int_{-\infty}^{\infty} \psi^* \hat{A} \psi dx  \end{align} $$ {eq:4.3.7} n=7
:::

If an unnormalized wavefunction where used, then Equation [ref:eq:4.3.7] changes to

$$ \begin{align} \langle a \rangle &= \dfrac{\langle \psi | a |\psi \rangle}{\langle \psi | \psi \rangle} \\[4pt] &=\dfrac{ \displaystyle \int_{-\infty}^{\infty} \psi^* \hat{A} \psi dx}{ \displaystyle \int_{-\infty}^{\infty} \psi^* \psi dx}  \end{align} $$ {eq:4.3.8} n=8

The denominator is just the normalization requirement discussed earlier. In general, the results of the various different measurements of $x$ will be scattered around the expectation value $\langle x\rangle$. The degree of scatter is parameterized by the quantity

$$ \begin{align} \sigma^2_x &= \int_{-\infty}^{\infty} \left(x-\langle x\rangle \right)^2 |\psi|^{ 2} dx \\[4pt] &\equiv \langle x^2\rangle -\langle x\rangle^{2},  \end{align} $$ {eq:4.3.9} n=9

which is known as the *variance* of $x$. The square-root of this quantity, $\sigma_x$, is called the *standard deviation* of $x$. We generally expect the results of measurements of $x$ to lie within a few standard deviations of the expectation value (Figure 4.3.1).

> FIGURE {fig:4.3.1} src=media/122080-2000px-Standard_deviation_diagram.svg.png width=402
> alt: Normal distribution curve with percentages: 34.1% in the middle, flanked by 13.6% on each side. Vertical lines indicate sections.
> caption: A plot of a normal distribution (or bell-shaped curve) where each band has a width of 1 standard deviation. image usd with permission from Wikipedia.

:::example {ex:4.3.1}

For a particle in a box in its ground state, calculate the expectation value of the

a. *position*,
b. the *linear momentum*,
c. the *kinetic energy*, and
d. the total energy

**Solution**

First the wavefunction needs to be defined. From the particle in the box solutions, the ground state wavefunction ($n=1$) is

$$ \psi = \sqrt{\dfrac{2}{L}} \sin \left ( \dfrac{\pi x}{L} \right ) $$

We can confirm that the wavefunction is normalized.

$$ \int \psi^* \psi \, d\tau = \int_{0}^{L} \sqrt{\dfrac{2}{L}} \sin \left ( \dfrac{\pi x}{L} \right ) \sqrt{\dfrac{2}{L}} \sin \left ( \dfrac{\pi x}{L} \right ) \, dx = 1 $$

Hence, the Equation [ref:eq:4.3.7] is the relevant equation to use.

**Solution a**

The expectation value of the {term:position} is:

$$ \begin{align*} \left \langle x \right \rangle &= \int \psi^* x \psi \, d\tau = \int_{0}^{L} \sqrt{\dfrac{2}{L}} x \sin \left ( \dfrac{\pi x}{L} \right ) \sqrt{\dfrac{2}{L}} \sin \left ( \dfrac{\pi x}{L} \right ) \, dx \\[4pt] &=\dfrac{2}{L} \int_{0}^{L} x \sin^2 \left ( \dfrac{\pi x}{L} \right ) \, dx \\[4pt] &= \dfrac{L}{2} \end{align*} $$

**Solution b**

The expectation value of the {term:momentum} is:

$$ \begin{align*} \left \langle p \right \rangle &= \int \psi^* \hat{p} \psi \, d\tau =\int_{0}^{L} \sqrt{\dfrac{2}{L}} \sin \left ( \dfrac{\pi x}{L} \right ) \left ( -i\hbar \dfrac{d}{dx} \right ) \sqrt{\dfrac{2}{L}} \sin \left ( \dfrac{\pi x}{L} \right ) \, dx \\[4pt] &= \dfrac{2i\hbar\pi}{L^2} \int_{0}^{L} \sin \left ( \dfrac{\pi x}{L} \right ) \cos \left ( \dfrac{\pi x}{L} \right ) \, dx \\[4pt] &= 0 \end{align*} $$

**Solution c**

The expectation value of the {term:kinetic energy} is:

$$ \begin{align*} \left \langle T \right \rangle &= \int \psi^* \hat{K} \psi \, d\tau = \dfrac{2}{L} \int_{0}^{L} \sin \left ( \dfrac{\pi x}{L} \right ) \left ( -\dfrac{\hbar^2}{2m} \dfrac{\partial^2}{\partial x^2} \right ) \sin \left ( \dfrac{\pi x}{L} \right ) \, dx \\[4pt] &= \dfrac{\hbar^2 \pi^2}{2mL^2} \dfrac{2}{L} \int_{0}^{L} \sin^2 \left ( \dfrac{\pi x}{L} \right ) \, dx \\[4pt] &= \dfrac{\hbar^2 \pi^2}{2mL^2} \end{align*} $$

A position "on average" is in the middle of the box ($L/2$). It has equal probability of traveling towards the left or right, so the average momentum and velocity must be zero.

**Solution d**

The average kinetic energy must be equal to the total energy of the ground state of the particle in the box, as there is no other energy component (i.e, $V=0$).
:::

## Expanding the Wavefunction

It is also possible to demonstrate that the eigenstates of an operator attributed to a observable form a {term:complete set} (*i.e.*, that any general wavefunction can be written as a linear combination of these eigenstates). However, the proof is quite difficult, and we shall not attempt it here.

In summary, given an operator $\hat{A}$, any general wavefunction, $\psi(x)$, can be written

$$ \psi = \sum_{i}c_i \phi_i $$

where the $c_i$ are complex weights, and the $\phi(x)$ are the properly normalized (and mutually orthogonal) eigenstates of $\hat{A}$: i.e.,

$$ A \phi_i = a_i \phi_i $$

where $a_i$ is the eigenvalue corresponding to the eigenstate $\phi_i$, and

$$ \int_{-\infty}^\infty \phi_i^\ast \phi_j dx = \delta_{ij}. $$ {eq:4.3.11} n=10

Here, $\delta_{ij}$ is called the {term:Kronecker delta-function}, and takes the value unity when its two indices are equal, and zero otherwise. It follows from Equations [ref:eq:4.3.8] and [ref:eq:4.3.11] that

$$ c_i = \int_{-\infty}^\infty \phi_i^\ast \psi dx. $$ {eq:4.3.12} n=11

Thus, the expansion coefficients in Equation [ref:eq:4.3.12] are easily determined, given the wavefunction $\psi$ and the eigenstates $\phi_i$. Moreover, if $\psi$ is a properly normalized wavefunction then Equations [ref:eq:4.3.8] and [ref:eq:4.3.11] yield

$$ \sum_i \vert c_i\vert^2 =1. $$

:::note [note] Collapsing the Wavefunction

Wavefunction collapse is said to occur when a wavefunction—initially in a superposition of several eigenstates—appears to reduce to a single eigenstate (by "observation"). A particle (or a system in general) can be found in a given state $\psi(x,t)$. Suppose now a measurement is performed on the wavefuction to characterize a specific property of the system.

> IMAGE {img:1} src=media/394140-cpn-a.svg
> alt: Diagram depicting a wavefunction before measurement and its collapse into distinct states after three measurements.
> caption: The measurement of position (with the position operator) effectively collapses this wavefunction that is a superposition of position eigenstates, which are delta-functions and are continuous - i.e. not quantized. Using a different measurement operation may in quantized values (CC BY-NC 4.0; Ümit Kaya via LibreTexts)

Mathematically, an operator $\hat{A}$ is associated with this measurement process, which you suppose has a *complete orthonormal set* of eigenvalues: $\{ \phi_i \}$ that is typically an infinite set of functionals that depend on quantum number $n$. The wavefunction $\Psi$ can be expand and a set of basis functions can be selected to specifies the wavefunction is the coefficients $\{c_n\}$ of the expansion. Therefore, if the system is perturbed, then your wavefunction will have another set of coefficients $\{c'_n\}$.

> IMAGE {img:2} src=media/394139-cpn-b.svg
> alt: Diagram illustrating a quantum wavefunction before and after three measurements, showing changes in probability distributions.
> caption: The measurement of position (with the position operator) does not collapse this wavefunction since it is in a position eigenstate in contrast to the wavefunction above. Using a different measurement operation (e.g., kinetic energy) may "collapse" the wavefunction into a different eigenstate (CC BY-NC 4.0; Ümit Kaya via LibreTexts)

If you wavefunction is in the eigenstate of the operator, then each measurement via that operator will give the same result.
:::

## Contributors and Attributions {section:attributions}

- [Richard Fitzpatrick](http://farside.ph.utexas.edu/) (Professor of Physics, The University of Texas at Austin)
- Wikiversity
