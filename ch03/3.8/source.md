<!-- LibreTexts page 13399: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03:_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.08:_The_Uncertainty_Principle_-_Estimating_Uncertainties_from_Wavefunctions -->
# The Uncertainty Principle - Estimating Uncertainties from Wavefunctions

## Learning Objectives {section:objectives}

- Expand on the introduction of Heisenberg's Uncertainty Principle by calculating the $\Delta x$ or $\Delta p$ directly from the wavefunction

As will be discussed in Section 4.6, the operators $\hat{x}$ and $\hat{p}$ are not compatible and there is {term:no} measurement that can precisely determine the coresponding observables ($x$ and $p$) simultaneously. Hence, there must be an uncertainty relation between them that specifies how uncertain we are about one quantity given a definite precision in the measurement of the other. Presumably, if one can be determined with infinite precision, then there will be an infinite uncertainty in the other. The uncertainty in a general quantity $A$ is

$$ \Delta A = \sqrt{\langle A^2 \rangle - \langle A \rangle ^2} $$ {eq:3.8.1} n=1

where $\langle A^2 \rangle$ and $\langle A \rangle$ are the expectation values of $\hat{A^2}$ and $\hat{A}$ operators for a specific wavefunction. Extending Equation [ref:eq:3.8.1] to $x$ and $p$ results in the following uncertainties

$$ \Delta x = \sqrt{\langle x^2 \rangle - \langle x \rangle ^2} $$ {eq:3.8.2a} n=2

$$ \Delta p = \sqrt{\langle p^2 \rangle - \langle p \rangle ^2} $$ {eq:3.8.2b} n=3

These quantities can be expressed explicitly in terms of the (time-dependent) wavefunction $\Psi (x, t)$ using the fact that

$$ \begin{align} \langle x \rangle &= \langle \Psi(t)\vert \hat{x}\vert\Psi(t)\rangle  \\[4pt] &=\int \Psi^{*}(x,t) x \Psi(x,t)\;dx \end{align} $$ {eq:3.8.3} n=4

and

$$ \begin{align} \langle x^2 \rangle &= \langle \Psi(t)\vert \hat{x}^2 \vert\Psi(t)\rangle  \\[4pt] &= \int \Psi^{*}(x,t) x^2 \Psi(x,t)\;dx \end{align} $$ {eq:3.8.4} n=5

The middle terms in both Equations [ref:eq:3.8.3] and [ref:eq:3.8.4] are the integrals expressed in Dirac's Bra-ket notation. Similarly using the definition of the linear momentum operator:

$$ \hat{p}_x = - i \hbar \dfrac{\partial}{ \partial x}. $$

So

$$ \begin{align} \langle p \rangle &= \langle \Psi(t)\vert \hat{p} \vert\Psi(t)\rangle  \\&= \int \Psi^{*}(x,t) - i \hbar {\partial \over \partial x}\Psi(x,t)\,dx \end{align} $$ {eq:3.8.5} n=6

and

$$ \begin{align} \langle p^2 \rangle &= \langle \Psi(t)\vert \hat{p}^2\vert\Psi(t)\rangle  \\ &= \int \Psi ^{*} (x, t)\left(-\hbar^2{\partial^2 \over \partial x^2}\right)\Psi(x,t) \;dx \end{align} $$ {eq:3.8.6} n=7

:::note [note] Time-dependent vs. time-independent wavefunction

The expectation values above are formulated with the total time-dependence wavefunction $\psi(x,t)$ that are functions of $x$ and $t$. However, it is easy to show that the same expectation value would be obtained if the time-independent wavefunction $\psi(x)$ that are functions of only $x$ are used. If $V(x)$ in $\hat{H}$ is time independent, then the wavefunctions are stationary and the expectation value are time-independent. You can easily confirm that by comparing the expectation values using the general formula for a stationary wavefunction

$$ \Psi(x,t)=\psi(x)e^{-iEt / \hbar} $$

and for $\psi(x)$.
:::

The Heisenberg uncertainty principle can be quantitatively connected to the properties of a wavefunction, i.e., calculated via the expectation values outlined above:

$$ \Delta p \Delta x \ge \dfrac {\hbar}{2} $$ {eq:3.8.8} n=8

This essentially states that the greater certainty that a measurement of $x$ or $p$ can be made, the greater will be the *uncertainty* in the other. Hence, as $Δp$ approaches 0, $Δx$ must approach $\infty$, which is the case of the free particle (e.g, with $V(x)=0$) where the momentum of a particles can be determined precisely.

:::example {ex:3.8.1} Uncertainty with a Gaussian wavefunction

A particle is in a state described by the wavefunction

$$ \psi{(x)} =\left(\dfrac{2a}{π}\right)^{\frac{1}{4}} e^{−ax^2} $$ {eq:Ex1eq1} n=9

where $a$ is a constant and $−∞≤ x ≤ ∞$. Verify that the value of the product $∆p∆x$ is consistent with the predictions from the uncertainty principle (Equation [ref:eq:3.8.8]).

**Solution**

Let's calculate the average of $x$:

$$ \begin{align} \langle x\rangle &= \int ^\infty_{-\infty} \psi^{*}x \psi \,dx \nonumber \\ &= \int ^\infty_{-\infty}(2a/π)^\frac{1}{4} e^{−ax^2} x (2a/π)^\frac{1}{4} e^{−ax^2} \,dx \nonumber \\ &= \int ^\infty_{-\infty}x(2a/π)^\frac{1}{2} e^{−2ax^2}\,dx \nonumber \\ &= 0\nonumber \end{align} $$

since the integrand is an odd function (an even function times an odd function is an odd function). This makes sense given that the gaussian wavefunction is symmetric around $x=0$.

Let's calculate the average of $x^2$:

$$ \begin{align} \langle x^2\rangle &= \int ^\infty_{-\infty} \psi^{*}{x^2}\psi \,dx \nonumber \\ &= \int ^\infty_{-\infty}(2a/π)^\frac{1}{4} e^{−ax^2} (x^2) (2a/π)^\frac{1}{4} e^{−ax^2} \, dx \nonumber \\ &= \int ^\infty_{-\infty}x^2(2a/π)^\frac{1}{2} e^{−2ax^2} \, dx \nonumber \\ & =\frac{1}{4a} \nonumber \end{align} $$

Let's calculate the average in $p$:

$$ \begin{align} \langle p\rangle &= \int ^\infty_{-\infty} \psi^{*} p \psi \,dx \nonumber \\ &= \int ^\infty_{-\infty} \left(\dfrac{2a}{π}\right)^{\frac{1}{4}} e^{−ax^2} -i\hbar \frac{d}{dx} \left(\dfrac{2a}{π}\right)^{\frac{1}{4}} e^{−ax^2} \,dx \nonumber \\ &= \int ^\infty_{-\infty} \left(\dfrac{2a}{π}\right)^{\frac{1}{4}} e^{−ax^2} (- i \hbar ) \left(\dfrac{2a}{π}\right)^{\frac{1}{4}} e^{−ax^2} (-2ax)\,dx \nonumber \\ &=0 \nonumber \end{align} $$

since the integrand is an odd function.

Let's calculate the average of $p^2$:

$$ \begin{align} \langle p^2\rangle &= \int ^\infty_{-\infty} \psi^{*}{p^2} \psi dx \nonumber \\ &= -\hbar^2 \left(\dfrac{2a}{\pi}\right) ^{1/2} \int_{-\infty}^{\infty} 2a(a x^2 - 1) e^{- 2a x^2} dx \nonumber \\ &= -4\hbar^2 a^2 \left(\dfrac{2a}{\pi}\right) ^{1/2} \int_{0}^{\infty} x^2 e^{- 2a x^2} dx + 4\hbar^2 a \left(\dfrac{2a}{\pi}\right)^{1/2} \int_{0}^{\infty} e^{- 2a x^2} dx \nonumber \\ &= a\hbar^2 \nonumber \end{align} $$

We use Equation [ref:eq:3.8.1] to check on the uncertainty

$$ \begin{align*} \Delta{x^2} &= \langle x^2 \rangle - \langle x \rangle^2 = \dfrac{1}{4a} - 0 \\[4pt] \Delta{x} &= \sqrt{\Delta{x^2}} = \dfrac{1}{2\sqrt{a}}\\[4pt] \Delta{p^2} &= \langle p^2 \rangle - \langle p \rangle^2 = a\hbar^2 - 0 \\[4pt] \Delta{p} &= \sqrt{\Delta{p^2}} = \hbar \sqrt{a} \end{align*} $$

Finally we have

$$ \Delta{p}\Delta{x} = \left(\dfrac{1}{2\sqrt{a}}\right) (\hbar \sqrt{a}) = \dfrac{\hbar}{2} $$

Not only does the Heisenburg uncertainly principle hold (Equation [ref:eq:3.8.8]), but the equality is established for this wavefunction. This is because the Gaussian wavefunction (Equation [ref:eq:Ex1eq1]) is special as discussed later.
:::

:::exercise {exr:3.8.1}

A particle is in a state described by the ground state wavefunction of a particle in a box

$$ \psi = \sqrt{\dfrac{2}{L}} \sin \left(\dfrac{\pi x}{L}\right) $$

where $L$ is the length of the box and $0≤ x ≤ L$. Verify that the value of the product $∆p∆x$ is consistent with the predictions from the uncertainty principle (Equation [ref:eq:3.8.8]).
:::

The uncertainty principle is a consequence of the wave property of matter. A wave has some finite extent in space and generally is not localized at a point. Consequently there usually is significant uncertainty in the position of a quantum particle in space.
