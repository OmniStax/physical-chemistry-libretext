<!-- LibreTexts page 13395: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03:_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.05:_The_Energy_of_a_Particle_in_a_Box_is_Quantized -->
# The Energy of a Particle in a Box is Quantized

## Learning Objectives {section:objectives}

- Solve the particle-in-a-box model used to describing a trapped particle in 1 D well
- Characterize the particle-in-a-box eigenstates (i.e., wavefunctions) and the eigenenergies as a function of the quantum number
- Demonstrate that the eigenstates are orthogonal

The *particle in the box* model system is the simplest non-trivial application of the Schrödinger equation, but one which illustrates many of the fundamental concepts of quantum mechanics. For a particle moving in one dimension (again along the x- axis), the Schrödinger equation can be written

$$ -\dfrac{\hbar^2}{2m}\psi {}''(x)+ V (x)\psi (x) = E \psi (x) $$

Assume that the particle can move freely between two endpoints $x = 0$ and $x = L$, but cannot penetrate past either end. This is equivalent to a potential energy dependent on $x$ with

$$ V(x)=\begin{cases} 0 & 0\leq x\leq L \\ \infty & x< 0 \; and\; x> L \end{cases} $$

This potential is represented in Figure 3.5.1. The infinite potential energy constitutes an impenetrable barrier since the particle would have an infinite potential energy if found there, which is clearly impossible.

> FIGURE {fig:3.5.1} src=media/125867-CNX_UPhysics_40_04_box.jpg
> alt: Graph showing potential energy with regions V = ∞ at x = 0 and x = L, and V = 0 between them on a horizontal axis.
> caption: The barriers outside a one-dimensional box have infinitely large potential, while the interior of the box has a constant, zero potential. (CC-BY 4.0; OpenStax).

The particle is thus bound to a *"potential well*" since the particle cannot penetrate beyond $x = 0$ or $x = L$

$$ \psi (x)=0\; \; \; for \; \; x<0\; \; and\; \; x>L $$ {eq:3.5.3} n=1

By the requirement that the wavefunction be continuous, it must be true as well that

$$ \psi (0)=0\; \; \; and\; \; \; \psi (L)=0 $$ {eq:3.5.4} n=2

which constitutes a pair of boundary conditions on the wavefunction within the box. Inside the box, $V(x) = 0$, so the Schrödinger equation reduces to the free-particle form:

$$ -\dfrac{\hbar^2}{2m}\psi{}''(x)=E\psi (x) $$ {eq:3.5.5} n=3

with $0\leq x\leq L$.

We again have the differential equation

$$ \psi {}''(x) +k^2\psi (x)=0 $$ {eq:3.5.6} n=4

with

$$ k^2 = \dfrac{2mE}{\hbar^2} $$ {eq:3.5.6a} n=5

The general solution can be written

$$ \psi (x)=A\: \sin\; kx\,+\, B\: \cos\; kx $$ {eq:3.5.7} n=6

where $A$ and $B$ are constants to be determined by the boundary conditions in Equation [ref:eq:3.5.4]. By the first condition, we find

$$ \psi (0)=A\, \sin\, 0\, +\, B\, \cos\, 0\, =\, B\,= 0 $$ {eq:3.5.8} n=7

The second boundary condition at $x = L$ then implies

$$ \psi (a)=A\, \sin\, kL\,=\, 0 $$ {eq:3.5.9} n=8

It is assumed that $A \neq 0$, for otherwise $\psi(x)$ would be zero everywhere and the particle would disappear (i.e., the trivial solution). The condition that $\sin kx = 0$ implies that

$$ kL\, =\, n\pi $$ {eq:3.5.10} n=9

where $n$ is a integer, positive, negative or zero. The case $n = 0$ must be excluded, for then $k = 0$ and again $\psi(x)$ would vanish everywhere. Eliminating $k$ between Equation [ref:eq:3.5.6] and [ref:eq:3.5.10], we obtain

$$ E_{n}=\dfrac{\hbar^2\pi^2}{2mL^2}\, n^2=\dfrac{h^2}{8mL^2}n^2 $$ {eq:3.5.11} n=10

with $n=1,2,,3...$.

These are the only values of the energy which allows solutions of the Schrö​dinger Equation [ref:eq:3.5.5] consistent with the boundary conditions in Equation [ref:eq:3.5.4]. The integer $n$, called a {term:quantum number}, is appended as a subscript on $E$ to label the allowed energy levels. Negative values of $n$ add nothing new because the energies in Equation [ref:eq:3.5.11] depends on $n^2$.

> FIGURE {fig:3.5.2} src=media/125866-CNX_UPhysics_40_04_boxstates.jpg width=599px
> alt: Graph depicting wave functions in a quantum system with multiple graphs and labeled axes for different states.
> caption: A plot of $ψ_n(x)$ for the first four wavefunctions. (CC-BY 4.0; OpenStax).

Figure 3.5.2 shows part of the energy-level diagram for the particle in a box. The occurrence of discrete or quantized energy levels is characteristic of a bound system, that is, one confined to a finite region in space. For the free particle, the absence of confinement allowed an energy continuum. Note that, in both cases, the number of energy levels is infinite-denumerably infinite for the particle in a box, but nondenumerably infinite for the free particle.

The particle in a box assumes its lowest possible energy when $n = 1$, namely

$$ E_{1}=\dfrac{h^2}{8mL^2} $$ {eq:3.5.12} n=11

The state of lowest energy for a quantum system is termed its *ground state*.

:::note [note] Zero Point Energy

An interesting point is that $E_{1} > 0$, whereas the corresponding classical system would have a minimum energy of zero. This is a recurrent phenomenon in quantum mechanics. The residual energy of the ground state, that is, the energy in excess of the classical minimum, is known as {term:zero point energy}. In effect, the kinetic energy, hence the momentum, of a bound particle cannot be reduced to zero. The minimum value of momentum is found by equating $E_{1}$ to $p^2/2m$, giving $p_{min}$ = $\pm h/2L$. This can be expressed as an *uncertainty* in momentum given by $\Delta p\approx h/L$. Coupling this with the uncertainty in position, $\Delta x\approx L$, from the size of the box, we can write

$$ \Delta x\Delta p\approx h $$ {eq:3.5.13} n=12

This is in accord with the *Heisenberg uncertainty principle*.
:::

The particle-in-a-box eigenfunctions are given by Equation [ref:eq:3.5.14], with $B = 0$ and $k = n\pi/L=a$, in accordance with Equation [ref:eq:3.5.10]

$$ \psi _{n}(x)=A\, \sin\dfrac{n\pi x}{L} $$ {eq:3.5.14} n=13

with $n=1,2,3...$.

These, like the energies, can be labeled by the quantum number $n$. The constant $A$, thus far arbitrary, can be adjusted so that $\psi _{n}(x)$ is normalized. The normalization condition is, in this case,

$$ \int_{0}^{a}\begin{bmatrix}\psi_{n}(x) \end{bmatrix}^2\,dx=1 $$ {eq:3.5.15} n=14

the integration running over the domain of the particle $0\leq x\leq L$. Substituting Equation [ref:eq:3.5.14] into Equation [ref:eq:3.5.15],

$$ \begin{align} A^2\: \int_{0}^{L}\, \sin^2\, \dfrac{n\pi x}{L}dx &=A^2\dfrac{L}{n\pi}\int_{0}^{n\pi}\sin^2\, \theta \,d\theta \\[4pt] &=A^2\dfrac{L}{2}=1 \end{align} $$ {eq:3.5.16} n=15

We have made the substitution $\theta=n\pi x/L$ and used the fact that the average value of $\sin^2 \theta$ over an integral number of half wavelengths equals 1/2 (alternatively, one could refer to standard integral tables). From Equation [ref:eq:3.5.16], we can identify the general normalization constant

$$ A = \sqrt{ \dfrac{2}{L}} $$

for all values of $n$. Finally we can write the normalized eigenfunctions:

$$ \psi _{n}(x)=\sqrt{\dfrac{2}{L}} \sin \dfrac{n\pi x}{L} $$ {eq:3.5.17} n=16

with $n=1,2,3...$.

The first few eigenfunctions and the corresponding probability distributions are plotted in Figure 3.5.3. There is a close analogy between the states of this quantum system and the modes of vibration of a violin string. The patterns of standing waves on the string are, in fact, identical in form with the wavefunctions in Equation [ref:eq:3.5.17].

> FIGURE {fig:3.5.3} src=media/125868-CNX_UPhysics_40_04_boxprob.jpg width=572px
> alt: Graph depicting three waveforms: a smooth curve, a sinusoidal wave, and a series of rapid oscillations at the bottom.
> caption: The probability density distribution $|\psi_n(x)|^2$ for a quantum particle in a box for: (a) the ground state, $n = 1$; (b) the first excited state, $n = 2$; and, (c) the nineteenth excited state, $n = 20$. (CC-BY 4.0; OpenStax).

:::note [note] Nodes and Curvature

A significant feature of the particle-in-a-box quantum states is the occurrence of *nodes*. These are points, other than the two end points (which are fixed by the boundary conditions), at which the wavefunction vanishes. At a node there is exactly zero probability of finding the particle. The *n*th quantum state has, in fact, $n-1$ nodes. It is generally true that the number of nodes increases with the energy of the quantum state, which can be rationalized by the following qualitative argument. As the number of nodes increases, so does the number and the steepness of the 'wiggles' in the wavefunction. It's like skiing down a slalom course. Accordingly, the average curvature, given by the second derivative, must increase. But the second derivative is proportional to the kinetic energy operator. Therefore, the more nodes, the higher the energy. This will prove to be an invaluable guide in more complex quantum systems.
:::

:::example {ex:3.5.1} Excited State Probabilities

For a particle in a one-dimensional box of length $L$, the second excited state wavefunction ($n=3$) is

$$ \psi_3=\sqrt{\dfrac{2}{L}}\sin{\dfrac{3\pi x}{L}} $$

a. What is the probability that the particle is in the left half of the box?
b. What is the probability that the particle is in the middle third of the box?

**Strategy**

Probability that the particle will be found between $a$ and $b$ is

$$ P(a,b)=\int^b_a \psi^2\,dx $$

For this problem,

$$ \psi_3=\sqrt{\dfrac{2}{L}}\sin{\dfrac{3\pi x}{L}} $$

therefore,

$$ \begin{align*} P(a,b) &=\dfrac{2}{L} \int^b_a \sin^2 {\dfrac{3\pi x}{L}}\,dx \\ &=\left.\dfrac{2}{L}\left(\dfrac{x}{2}-\dfrac{L\sin \left( \dfrac{6\pi x}{L}\right)}{12\pi} \right) \right|^b_a \\[4pt] &=\dfrac{b-a}{L}-\dfrac{1}{6\pi} \left[ \sin \left(\dfrac{6\pi b}{L}\right) - \sin \left( \dfrac{6\pi a}{L} \right) \right] \end{align*} $$

**Solution a**

The probability that the particle is in the left half of the box is

$$ \begin{align*} P\left(0,\dfrac{L}{2}\right) &=\dfrac{\dfrac{L}{2}-0}{L}-\dfrac{1}{6\pi}\left[ \sin \left( \dfrac{6\pi \left(\dfrac{L}{2}\right)}{L}\right) - \sin \left( \dfrac{6\pi (0)}{L}\right) \right] \\[4pt] &= \dfrac{1}{2} \end{align*} $$

**Solution b**

The probability that the particle is in the middle third of the box

$$ \begin{align*} P\left(\dfrac{L}{3},\dfrac{2L}{3}\right) &=\dfrac{\dfrac{2L}{3}-\dfrac{L}{3}}{L}-\dfrac{1}{6\pi}\left[{\sin {\dfrac{6\pi \left(\dfrac{2L}{3}\right)}{L} }-\sin {\dfrac{6\pi \left(\dfrac{L}{3}\right) }{L} }}\right] \\[4pt] &=\dfrac{1}{3} \end{align*} $$
:::

:::exercise {exr:3.5.1} Ground State Probability

For a particle in a one-dimensional box, the ground state wavefunction is

$$ \psi_1 = \sqrt{\dfrac{2}{L}} \sin\dfrac{x\pi}{L} $$

What is the probability that the particle is in the left half of the box in the ground state?

**Answer**

$$ \begin{align} P\left(0,\frac{L}{2}\right) &= \dfrac{2}{L} \int^{\frac{L}{2}}_0 \sin^2 \dfrac{x\pi}{L} dx \nonumber\\ &=\dfrac{2}{L} \dfrac{\dfrac{L\pi}{L}+\sin 0+\sin \dfrac{L\pi}{L}}{\dfrac{4\pi}{L}} \nonumber\\ &=\dfrac{1}{2} \nonumber \end{align} $$

This is the same answer as for the $\psi_3$ state in Example 3.5.1. This is because the eigenstate squared (.e., probability density) for the particle in a 1D box will always be symmetric around the center of the box. So there will be equal probability to be on either side (i.e., no side is favored).
:::

:::note [note] Time Dependence and Complex Nature of Wavefunctions

Recall that the time-dependence of the wavefunction with time-independent potential was discussed in Section 3.1 and is expressed as

$$ \Psi(x,t)=\psi(x)e^{-iEt / \hbar} $$

so for the particle in a box, these are

$$ \psi _{n}(x)=\sqrt{\dfrac{2}{L}} \sin \dfrac{n\pi x}{L} e^{-iE_nt / \hbar} $$ {eq:PIBtime} n=17

with $E_n$ given by Equation [ref:eq:3.5.11].

The phase part of Equation [ref:eq:PIBtime] can be expanded into a real part and a complex components. So the total wavefunction for a particle in a box is

$$ \Psi(x,t)= \underbrace{\left(\sqrt{\dfrac{2}{L}} \sin \dfrac{n\pi x}{L}\right) \left(\cos \dfrac{E_nt}{\hbar}\right)}_{\text{real part}} - \underbrace{i \left(\, \sqrt{\dfrac{2}{L}} \sin \dfrac{n\pi x}{L} \right) \left(\sin \dfrac{E_nt}{\hbar} \right) }_{\text{imaginary part}} $$

which can be simplified (slightly) to

$$ \Psi(x,t)= \underbrace{\left(\sqrt{\dfrac{2}{L}} \sin \dfrac{n\pi x}{L}\right) \left(\cos \dfrac{E_nt}{\hbar}\right)}_{\text{real part}} - \underbrace{i \left(\, \sqrt{\dfrac{2}{L}} \sin \dfrac{n\pi x}{L} \right) \left(\cos \dfrac{E_nt}{\hbar} - \dfrac{\pi}{2} \right) }_{\text{imaginary part}} $$

As discussed previously, the imaginary part of the total wavefunction oscillates out of phase by $π/2$ with respect to the real part (we call this "out of phase"). This is demonstrated in the time-dependent behavior of the first three eigenfunctions in Figure 3.5.4.

> FIGURE {fig:3.5.4} src=media/345958-ezgif-6-e2d87f82b809.gif
> alt: Four labeled graphs (A, B, C, D) depicting different waveforms, including a stationary point and various curves.
> caption: Some trajectories of a particle in a box according to Newton's laws of classical mechanics (A), and according to the Schrödinger equation of quantum mechanics (B-D). In (B-D), the horizontal axis is position, and the vertical axis is the real part (blue) and imaginary part (red) of the wavefunction. The states (B, C, D) are energy eigenstates. (Public Domain; [Sbyrnes321](https://commons.wikimedia.org/wiki/User:Sbyrnes321) via Wikipedia).

Note that as $n$ increased, the energy of the wavefunction increases (Equation [ref:eq:3.5.11]) and both the number of nodes and antinodes increase and the frequency of oscillation of the wavefunction increases.
:::

> It is generally true in quantum systems (not just for particles in boxes) that the number of nodes in a wavefunction increases with the energy of the quantum state.

## Orthonormality of the Eigenstates

Another important property of the eigenfunctions in Equation [ref:eq:3.5.17] applies to the integral over a product of two *different* eigenfunctions (Equation [ref:eq:3.5.17]). It is easy to see from Figure 3.5.5 that the integral

$$ \int_{0}^{L}\psi _{2}(x)\psi _{1}(x)dx=0 $$ {eq:3.5.18} n=18

The integral in Equation [ref:eq:3.5.18] is zero when the two eignestates differ and when integrated over the entire range of the system (from $-\infty$ to $\infty$ for a 1-D particle in the box, but this can be a narrow region of $0$ to $L$ since the eigenstates are zero outside of the box).

> FIGURE {fig:3.5.5} src=media/345957-3.5.5.svg width=860px
> alt: Graphs displaying different waveforms with highlighted sections, including sine and other wave patterns, arranged in two rows.
> caption: (Top Row): Select plots of the $n=1$ (red curves), $n=2$ (purple curves), $n=3$ (green curves), and $n=4$ (blue curves) eigenfunctions. (Bottom Row): Product of different eigenstates with positive (tan) and negative (cyan) areas emphasized. Note that the negative and positive areas perfectly cancel when added together. Created via [fooplot](http://fooplot.com/) (CC BY-NC; Ümit Kaya via LibreTexts)

To prove Equation [ref:eq:3.5.18] for a particle in a box model, we can use the trigonometric identity

$$ \sin\,\alpha \: \sin\, \beta =\dfrac{1}{2}\begin{bmatrix}\cos(\alpha -\beta )-\cos(\alpha +\beta )\end{bmatrix} $$ {eq:trig} n=19

to show that

$$ \int_{0}^{L}\psi _{m}(x)\psi _{n}(x)dx=0\: \: \: if\: \: \: m \neq n $$ {eq:3.5.19} n=20

This property is called {term:orthogonality}​. We will show in the next chapter, that this is a general result from quantum-mechanical eigenfunctions. The normalization (Equation [ref:eq:3.5.18]) together with the orthogonality (Equation [ref:eq:3.5.19]) can be combined into a single relationship

$$ \int_{0}^{L}\psi _{m}(x)\psi _{n}(x)dx=\delta _{mn} $$ {eq:3.5.20} n=21

In terms of the *[Kronecker delta](https://math.libretexts.org/TextMaps/Linear_Algebra/Map%3A_Linear_Algebra_(Schilling%2C_Nachtergaele_and_Lankham)/09._Inner_product_spaces/9.4_Orthonormal_bases)*

$$ \delta _{mn}=\begin{cases} 1 & \text{if} \,\, m=n \\[4pt] 0 & \text{if} \,\, m\neq n \end{cases} $$ {eq:3.5.21} n=22

A set of functions $\begin{Bmatrix}\psi_{n}\end{Bmatrix}$ which obeys Equation [ref:eq:3.5.20] is called *orthonormal*.

:::example {ex:3.5.2}

Evaluate

a. $\langle \psi_3| \psi_3 \rangle$
b. $\langle \psi_4| \psi_4 \rangle$
c. $\langle \psi_3| \psi_4 \rangle$
d. $\langle \psi_4| \psi_3 \rangle$

for the normalized wavefunctions:

$$ |\psi_3 \rangle = \sqrt{ \dfrac{2}{L}} \sin\dfrac{3\pi x}{L} $$

and

$$ |\psi_4 \rangle = \sqrt{ \dfrac{2}{L}} \sin\dfrac{4\pi x}{L} $$

**Strategy**

These are four different integrals and we can solve them directly or use orthonormality (Equation [ref:eq:3.5.21]) to evaluate.

**Solution a**

$$ \begin{align*} \langle \psi_3| \psi_3 \rangle &= \int_{-\infty}^{+\infty} \left( \sqrt{ \dfrac{2}{L}} \sin\dfrac{3\pi x}{L} \right)\left( \sqrt{ \dfrac{2}{L}} \sin\dfrac{3\pi x}{L} \right)\, dx \\[4pt] &= \dfrac{2}{L} \int_{-\infty}^{+\infty} \sin^2 \dfrac{3\pi x}{L} \, dx \end{align*} $$

This is an integration over an even function, so it cannot be tossed out via symmetry. We can use the Trigonometry relationship in Equation [ref:eq:trig] to get

$$ \dfrac{2}{L} \int_{-\infty}^{+\infty} \sin^2 \dfrac{3\pi x}{L} \, dx = \dfrac{2}{L} \int_{-\infty}^{+\infty} \dfrac{1}{2} \left(1 - \cos \dfrac{6\pi x}{L}\right) \, dx $$

and we can continue the fun. However, there is no need. Since the we can recognize that $\langle \psi_3| \psi_3 \rangle$ is 1 by the normalization criteria which is folded into the orthonormal criteria (Equation [ref:eq:3.5.21]).

Therefore $\langle \psi_3| \psi_3 \rangle = 1$.

**Solution b**

$$ \begin{align*} \langle \psi_4| \psi_4 \rangle &= \int_{-\infty}^{+\infty} \left( \sqrt{ \dfrac{2}{L}} \sin\dfrac{4\pi x}{L} \right)\left( \sqrt{ \dfrac{2}{L}} \sin\dfrac{4\pi x}{L} \right)\, dx \\[4pt] &= \dfrac{2}{L} \int_{-\infty}^{+\infty} \sin^2 \dfrac{4\pi x}{L} \, dx \end{align*} $$

We can expand and solve, but again there is no need. The wavefunctions are normalized therefore $\langle \psi_4| \psi_4 \rangle = 1$.

**Solution c**

$$ \begin{align*} \langle \psi_3| \psi_4 \rangle &= \int_{-\infty}^{+\infty} \left( \sqrt{ \dfrac{2}{L}} \sin\dfrac{3\pi x}{L} \right)\left( \sqrt{ \dfrac{2}{L}} \sin\dfrac{4\pi x}{L} \right)\, dx \\[4pt] &= \dfrac{2}{L} \int_{-\infty}^{+\infty} \sin \left( \dfrac{3\pi x}{L} \right) \sin \left( \dfrac{4\pi x}{L} \right)\, dx \end{align*} $$

We can expand this integral and evaluate, but since the integrand is odd (and even function times an odd), this integral is zero. Alternatively, we can use the orthogonality criteria into the greater orthonormal criteria (Equation [ref:eq:3.5.21]).

**Solution d**

$$ \begin{align*} \langle \psi_4| \psi_3 \rangle &= \int_{-\infty}^{+\infty} \left( \sqrt{ \dfrac{2}{L}} \sin\dfrac{4\pi x}{L} \right)\left( \sqrt{ \dfrac{2}{L}} \sin\dfrac{3\pi x}{L} \right)\, dx \\[4pt] &= \dfrac{2}{L} \int_{-\infty}^{+\infty} \sin \left(\dfrac{4\pi x}{L} \right) \sin \left( \dfrac{3\pi x}{L} \right)\, dx \end{align*} $$

We can expand this integral and evaluate, but since the integrand is odd (and even function times an odd function), this integral is zero. Alternatively, we can use the orthogonality criteria into the greater orthonormal criteria (Equation [ref:eq:3.5.21]).

However, since the wavefunctions are real, then

$$ \langle \psi_4| \psi_3 \rangle = \langle \psi_3| \psi_4 \rangle $$

which also means

$$ \langle \psi_4| \psi_3 \rangle = 0 $$

from the results of section c.
:::
