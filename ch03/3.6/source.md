<!-- LibreTexts page 13396: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03:_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.06:_Wavefunctions_Must_Be_Normalized -->
# Wavefunctions Must Be Normalized

## Learning Objectives {section:objectives}

- Calculate the probability of an event from the wavefunction
- Understand the utility and importance of normalizing wavefunctions
- Demonstrate how to normalize an arbitrary wavefunction

## Extracting Probabilities

Since wavefunctions can in general be complex functions, the physical significance of wavefunctions cannot be found from the functions themselves because the $\sqrt {-1}$ is not a property of the physical world. Rather, the physical significance is found in the product of the wavefunction and its complex conjugate, i.e. the absolute square of the wavefunction, which also is called the {term:square of the modulus}.

$$ \Psi^*(r , t ) \Psi (r , t ) = {|\Psi (r , t)|}^2 $$ {eq:3.6.1} n=1

where $r$ is a vector specifying a point in three-dimensional space. The square is used, rather than the modulus itself, just like the intensity of a light wave depends on the square of the electric field. Remember that the Born interpretation is that $\psi^*(r_i)\psi(r_i)\, d\tau$ is the {term:probability} that the electron is in the volume $dτ$ located at $r_i$. The Born interpretation therefore calls the wavefunction the probability amplitude, the absolute square of the wavefunction is called the {term:probability density}, and the probability density times a volume element in three-dimensional space ($d\tau$) is the probability.

Since the squared magnitude $|\psi|^2$ of the wavefunction of a particle can be interpreted as the probability density, then the probability for a one-dimensional wavefunction between the points $x=a$ and $x=b$ can be calculated by

$$ P_{1D}=\int\limits_{a}^{b}|\psi(x)|^{2} \mathrm{d} x $$ {eq:prob} n=2

This is just the area under the under the $|\psi|^2$ curve (Figure 3.6.1).

> FIGURE {fig:3.6.1} src=media/348642-drawing.svg width=666px
> alt: Diagram showing variables related to a probability density function, featuring labels for A, B, C, and x, with an area under a curve.
> caption: The probability can be interpreted as an area under the probability density $|\psi|^2$. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)

If the probability of a two-dimensional wavefunction is being evaluated, then Equation [ref:eq:prob] will be amended to included a double integral:

$$ P_{2D}=\iint\limits_{a_1, a_2}^{b_1, b_2}|\psi(x,y)|^{2} \mathrm{d} x \mathrm{d} y $$

and similarly a triple integral would be used for calculating probabilities of three-dimensional wavefunctions:

$$ P_{3D}=\iiint\limits_{a_1, a_2, a_3}^{b_1, b_2,b_3}|\psi(x,y,z)|^{2} \mathrm{d} x \mathrm{d} y \mathrm{d} z $$

:::exercise {exr:3.6.1} {printed:Example 3.6.1} Probability of a Particle in a Box

Calculate the probability of finding an electron at $L/2$ in a box of infinite height within an interval ranging from $\dfrac {L}{2} - \dfrac {L}{200}$ to $\dfrac {L}{2} + \dfrac {L}{200}$ for the $n = 1$ and $n = 2$ states. Since the length of the interval, $L/100$, is small compared to $L$, you can get an approximate answer without explicitly integrating.

**Solution**

The wavefunction for the particle in a box is

$$ \psi(x)=\sqrt{\frac{2}{L}} \sin \left(\frac{n \pi x}{L}\right) $$

and the wavefunction for the $n=1$ state is

$$ \psi_{n=1}=\sqrt{\frac{2}{L}} \sin \left(\frac{\pi x}{L}\right) $$

From the interpretation that the wavefunction modulus squared is the probability density, we can establish the following integral to solve the problem (note the limits of integration)

$$ \left|\psi_{n=1}\right|^{2}=\frac{2}{L} \int_{\frac{99 L}{200}}^{\frac{101L}{200}} \sin ^{2}\left(\frac{\pi x}{L}\right) dx $$ {eq:Ex3} n=3

We can solve this, but we can also recognize that Equation [ref:eq:Ex3] is just calculating an area that can be approximated as the area of a rectangle with a height ($\frac{2}{L} \sin ^{2}\left(\frac{\pi x}{L}\right)$ at $x=L/2$) and width $\Delta x = L/100$ (Figure 3.6.2).

> FIGURE {fig:3.6.2} src=media/348966-figure-a.svg
> alt: Graph showing a wave function Ψ plotted against a horizontal axis from 0 to L, with a highlighted region labeled dx.
> caption: The probability can be interpreted as an area under the probability density $|\psi_1|^2$. (CC BY-NC; Ümit Kaya via LibreTexts)

This area can be computed:

$$ \begin{align*} \left|\psi_{n=1}\right|^{2} &\approx \frac{2}{L} \cancelto{1}{\sin ^{2}\left(\frac{\pi (L/2)}{L}\right)} \Delta x \\[4pt] & \approx \left(\frac{2}{L} \right) (L/100) \\[4pt] & \approx 1/50 = 0.02\end{align*} $$

Given that the wavefunction is sinusoidal, the actual probability of finding an electron within the given interval at $\frac{L}{2}$ should be slightly less because of the behavior of the sinusoid at $\frac{L}{2}$ is at its peak of the wavefunction (Figure 3.6.2).

The wavefunction for the $n = 2$ state

$$ \psi_{n=2}=\sqrt{\frac{2}{L}} \sin \left(\frac{2 \pi x}{L}\right) $$

so the integral that we need to construct and solve is

$$ \left|\psi_{n=2}\right|^{2}=\frac{2}{L} \int_{\frac{99 L}{200}}^{\frac{101L}{200}} \sin ^{2}\left(\frac{2 \pi x}{L}\right) dx $$

We can use the same graphical interpretation as above, but using the probability density of the $\psi_2$ wavefunction (Figure 3.6.3).

> FIGURE {fig:3.6.3} src=media/348965-figure-b.svg
> alt: Graph showing a wave function (Ψ) with peaks and troughs along the x-axis labeled from 0 to L.
> caption: The probability can be interpreted as an area under the probability density $|\psi_2|^2$. (CC BY-NC Copyright; Ümit Kaya via LibreTexts)

$$ \begin{align*} \left|\psi_{n=1}\right|^{2} &\approx \frac{2}{L} \cancelto{0}{\sin ^{2}\left(\frac{ 2\pi (L/2)}{L}\right)} \Delta x \\[4pt] & \approx 0\end{align*} $$

The probability of finding an electron in a box at $\frac{L}{2}$ for $n=2$ is approximately zero.
:::

:::exercise {exr:3.6.1}

Show that the square of the modulus of $\Psi(r,t) = \psi(r) e^{-iωt}$ is time independent. What insight regarding stationary states do you gain from this proof?

**Solution**

The square of the modulus of a wavefunction is $\Psi(r,t)^*\Psi(r,t)$ so for wavefunctions of this form, the square of the modulus is

$$ \begin{align*} \Psi(r,t)^*\Psi(r,t) &= \psi(r) \cancel{e^{+iωt}} \psi(r) \cancel{e^{-iωt}} \\[4pt] &=\psi(r)^2 \end{align*} $$

Hence, there is no time dependence to the modulus of wavefunctions of this work, which from the probability interpretation of the wavefunction means that the probability density is time-independent.
:::

## Normalizing of the Wavefunction

A probability is a real number between 0 and 1, inclusive. An outcome of a measurement which has a probability 0 is an impossible outcome, whereas an outcome which has a probability 1 is a certain outcome. According to Equation [ref:eq:3.6.1], the probability of a measurement of $x$ yielding a result between $-\infty$ and $+\infty$ is

$$ P_{x \in -\infty:\infty}(t) = \int_{-\infty}^{\infty}\vert\psi(x,t)\vert^{ 2} dx. $$ {eq:3.6.2} n=4

However, a measurement of $x$ *must* yield a value between $-\infty$ and $+\infty$, since the particle has to be located somewhere. It follows that $P_{x \in -\infty:\infty}(t) =1$, or

$$ \int_{-\infty}^{\infty}\vert\psi(x,t)\vert^{ 2} dx = 1, $$ {eq:3.6.3} n=5

which is generally known as the {term:normalization condition} for the wavefunction.

:::example {ex:3.6.2} Normalizing a Gaussian Wavepacket

Normalize the wavefunction of a Gaussian wave packet, centered on $x=x_o$ with characteristic width $\sigma$:

$$ \psi(x) = \psi_0 {\rm e}^{-(x-x_0)^{ 2}/(4 \sigma^2)}. $$ {eq:3.6.4} n=6

**Solution**

To determine the normalization constant $\psi_0$, we simply substitute Equation [ref:eq:3.6.4] into Equation [ref:eq:3.6.3], to obtain

$$ \vert\psi_0\vert^{ 2}\int_{-\infty}^{\infty}{\rm e}^{-(x-x_0)^{ 2}/(2 \sigma^2)} dx = 1. $$

Changing the variable of integration to $y=(x-x_0)/(\sqrt{2} \sigma)$, we get

$$ \vert\psi_0\vert^{ 2}\sqrt{2} \sigma \int_{-\infty}^{\infty}{\rm e}^{-y^2} dy=1. $$

However, from an integral table we know

$$ \int_{-\infty}^{\infty}{\rm e}^{-y^2} dy = \sqrt{\pi}, $$

which implies that

$$ \vert\psi_0\vert^{ 2} = \dfrac{1}{(2\pi \sigma^2)^{1/2}}. $$

Hence, a general normalized Gaussian wavefunction takes the form

$$ \psi(x) = \dfrac{e^{\rm{i} \phi}}{(2\pi \sigma^2)^{1/4}}e^{-(x-x_0)^2/(4 \sigma^2)} $$

where $\phi$ is an arbitrary real phase-angle.
:::

:::exercise {exr:3.6.2}

Normalize this wavefunction for a particle in a harmonic well:

$$ \psi = x e^{-x^2} $$

**Answer**

$$ \psi = 2 \left(\dfrac{2}{\pi} \right)^{1/4} x e^{-x^2} $$
:::

## Time Dependence to the Wavefunction

Now, it is important to demonstrate that if a wavefunction is initially normalized then it stays normalized as it evolves in time according to the time-dependent Schrödinger's equation. If this is not the case then the probability interpretation of the wavefunction is untenable, since it does not make sense for the probability that a measurement of $x$ yields *any* possible outcome (which is, manifestly, unity) to change in time. Hence, we require that

$$ \dfrac{d}{dt} \int_{-\infty}^{\infty}\vert \psi(x,t)\vert^{ 2} dx = 0 $$

for wavefunctions satisfying the time-dependent Schrödinger's equation (this results from the time-dependent Schrödinger's equation and Equation [ref:eq:3.6.3]). The above equation gives

$$ \dfrac{d}{dt} \int_{-\infty}^{\infty}\psi^* \psi \, dx=\int_{-\infty}^{\infty} \left(\dfrac{\partial\psi^*}{\partial t} \psi+\psi^* \dfrac{\partial\psi}{\partial t}\right) dx=0. $$ {eq:3.6.11} n=7

Now, multiplying Schrödinger's equation by $\psi^{*}/({\rm i} \hbar)$, we obtain

$$ \psi^* \dfrac{\partial\psi}{\partial t}= \dfrac{\rm{i}}{2m} \psi^* \dfrac{\partial^2 \psi}{\partial x^2} - \dfrac{\rm{i}}{\hbar} V \vert \psi \vert^2 $$ {eq:3.6.12} n=8

The complex conjugate of this expression yields

$$ \psi \dfrac{\partial\psi^*}{\partial t}= -\dfrac{\rm{i}}{2m} \psi \dfrac{\partial^2 \psi^*}{\partial x^2} + \dfrac{\rm{i}}{\hbar} V \vert \psi \vert^2 $$ {eq:3.6.13} n=9

since

- $(A B)^* = A^* B^*$,
- $A^{* *}=A$, and
- $i^*= -i$.

Summing Equation [ref:eq:3.6.12] and [ref:eq:3.6.13] results in

$$ \begin{align} \dfrac{\partial\psi^*}{\partial t} \psi + \psi^{*} \dfrac{\partial\psi}{\partial t} &= \dfrac{\rm{i}}{2m} \left(\psi^* \dfrac{\partial^2 \psi}{\partial x^2} - \psi \dfrac{\partial^2\psi^*}{\partial x^2}\right) \\[4pt] &=\dfrac{\rm{i}}{2m} \dfrac{\partial}{\partial x} \left(\psi^* \dfrac{\partial \psi}{\partial x} - \psi \dfrac{\partial\psi^*}{\partial x}\right).  \end{align} $$ {eq:3.6.14} n=10

Equations [ref:eq:3.6.11] and [ref:eq:3.6.14] can be combined to produce

$$ \dfrac{d}{dt}\int_{-\infty}^{\infty} \vert\psi\vert^2 dx= \dfrac{\rm{i}}{2m} \left[\psi^*\dfrac{\partial\psi}{\partial x}- \psi\dfrac{\partial\psi^*}{\partial x} \right]_{-\infty}^{\infty} = 0. $$ {eq:3.6.15} n=11

The above equation is satisfied provided the wavefunction converges

$$ \lim_{\vert x\vert\rightarrow\infty} \vert\psi\vert = 0 $$ {eq:3.6.16} n=12

However, this is a necessary condition for the integral on the left-hand side of Equation [ref:eq:3.6.3] to converge. Hence, we conclude that all wavefunctions which are *square-integrable* [i.e., are such that the integral in Equation [ref:eq:3.6.3] converges] have the property that if the normalization condition Equation [ref:eq:3.6.3] is satisfied at one instant in time then it is satisfied at all subsequent times.

:::note [note] Not all Wavefunctions can be Normalized

Not all wavefunctions can be normalized according to the scheme set out in Equation [ref:eq:3.6.3]. For instance, a planewave wavefunction for a quantum free particle

$$ \Psi(x,t) = \psi_0 {\rm e}^{ {\rm i} (k x-\omega t)} $$

is not square-integrable, and, thus, cannot be normalized. For such wavefunctions, the best we can say is that

$$ P_{x \in a:b}(t) \propto \int_{a}^{b}\vert\Psi(x,t)\vert^{ 2} dx. $$

In the following, all wavefunctions are assumed to be square-integrable and normalized, unless otherwise stated.
:::
