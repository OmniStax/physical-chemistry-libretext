<!-- LibreTexts page 13377: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/02:_The_Classical_Wave_Equation/2.03:_Oscillatory_Solutions_to_Differential_Equations -->
# Oscillatory Solutions to Differential Equations

## Learning Objectives {section:objectives}

- Explore the basis of the oscillatory solutions to the wave equation
- Understand the consequences of boundary conditions on the possible solutions
- Rationalize how satisfying boundary conditions forces quantization (i.e., only solutions with specific wavelengths exist)

The boundary conditions for the string held to zero at both ends argue that $u(x,t)$ collapses to zero at the extremes of the string (Figure 2.3.1).

> FIGURE {fig:2.3.1} src=media/54788-Standing_waves_on_a_string.gif
> alt: Grid with four horizontal lines, each containing two short horizontal segments, forming a minimalist design.
> caption: Standing waves in a string (both spatially and temporally). from Wikipedia.

Unfortunately, when $K>0$, the general solution (Equation 2.2.7) results in a sum of exponential decays and growths that cannot achieve the boundary conditions (except for the trivial solution); hence $K<0$. This means we must introduce complex numbers due to the $\sqrt{K}$ terms in Equation 2.2.5. So we can rewrite $K$:

$$ K = - p^2 $$ {eq:2.3.1} n=1

and Equation 2.2.4b can be

$$ \dfrac{d^2X(x)}{dx^2} +p^2 X(x) = 0 $$ {eq:2.3.2} n=2

The [general solution ](http://mathwiki.ucdavis.edu/Analysis/Ordinary_Differential_Equations/Second_Order_Linear_Differential_Equations/Homogeneous_Equations_with_Constant_Coefficients)to differential equations of the form of Equation [ref:eq:2.3.2] is

$$ X(x) = A e^{ipx} + B e^{-ipx} $$ {eq:2.3.3} n=3

:::example {ex:2.3.1}

Verify that Equation [ref:eq:2.3.3] is the general form for differential equations of the form of Equation [ref:eq:2.3.2], which when substituted with Equation [ref:eq:2.3.1] give

$$ X(x) = A e^{ipx} + B e^{-ipx} $$

**Solution**

Expand the complex exponentials into trigonometric functions via Euler formula ($e^{i \theta} = \cos \theta + i\sin \theta$)

$$ X(x) = A \left[\cos (px) + i \sin (px) \right] + B \left[ \cos (px) - i \sin (px) \right] $$

collecting like terms

$$ X(x) = (A + B ) \cos (px) + i (A - B) \sin (px) $$ {eq:2.3.6} n=4

Introduce new *complex* constants $c_1=A+B$ and $c_2=i(A-B)$ so that the general solution in Equation [ref:eq:2.3.6] can be expressed as oscillatory functions

$$ X(x) = c_1 \cos (px) + c_2 \sin (px) $$ {eq:2.3.7} n=5

Now let's apply the boundary conditions from Equation 2.2.7 to determine the constants $c_1$ and $c_2$. Substituting the first boundary condition ($X(x=0)=0$) into the general solutions of Equation [ref:eq:2.3.7] results in

$$ \begin{align} X(x=0) = c_1 \cos (0) + c_2 \sin (0) &=0 \nonumber \\[4pt] c_1 + 0 &= 0 \nonumber \\[4pt] c_1 &=0  \end{align} $$ {eq:2.3.8c} n=6

and substituting the second boundary condition ($X(x=L)=0$) into the general solutions of Equation [ref:eq:2.3.7] results in

$$ X(x=L) = c_1 \cos (pL) + c_2 \sin (pL) = 0 $$ {eq:2.3.9} n=7

we already know that $c_1=0$ from the first boundary condition so Equation [ref:eq:2.3.9] simplifies to

$$ c_2 \sin (pL) = 0 $$ {eq:2.3.10} n=8

Given the properties of sines, Equation [ref:eq:2.3.9] simplifies to

$$ pL= n\pi $$ {eq:2.3.11} n=9

with $n=0$ is the *trivial solution* that we ignore so $n = 1, 2, 3...$.

$$ p = \dfrac{n\pi}{L} $$ {eq:2.3.12} n=10

Substituting Equations [ref:eq:2.3.12] and [ref:eq:2.3.8c] into Equation [ref:eq:2.3.7] results in

$$ X(x) = c_2 \sin \left(\dfrac{n\pi x}{L} \right) $$

which can simplify to

$$ X(x) = c_2 \sin \left( \omega x \right) $$

with

$$ \omega=\dfrac{n\pi}{L} $$

A similar argument applies to the other half of the *ansatz* ($T(t)$).
:::

:::exercise {exr:2.3.1}

Given two traveling waves:

$$ \psi_1 = \sin{(c_1 x+c_2 t)} \; \textrm{ and } \; \psi_2 = \sin{(c_1 x-c_2 t)} $$

a. Find the wavelength and the wave velocity of $\psi_1$ and $\psi_2$
b. Find the following and identify nodes:
   
   $$ \psi_+ = \psi_1 + \psi_2 \; \textrm{ and } \; \psi_- = \psi_1 - \psi_2 $$

**Solution a**

$\psi_1$ is a sin function. At every integer $n \pi$ where $n=0,\pm 1, \pm 2, ...$, a sin function will be zero. Thus, $\psi_1 = 0$ when $c_1 x + c_2 t = \pi n$. Solving for the x, while ignoring trivial solutions:

$$ x = \frac{n \pi - c_2 t}{c_1} $$

The velocity of this wave is:

$$ \frac{dx}{dt} = -\frac{c_2}{c_1} $$

Similarly for $\psi_2$. At every integer $n \pi$ where $n=0,\pm 1, \pm 2, ...$, a sin function will be zero. Thus, $\psi_2 = 0$ when $c_1 x - c_2 t = \pi n$. Solving for x, for $\psi_2$:

$$ x = \frac{n \pi + c_2 t}{c_1} $$

The velocity of this wave is:

$$ \frac{dx}{dt} = \frac{c_2}{c_1} $$

The wavelength for each wave is twice the distance between two successive nodes. In other words,

$$ \lambda = 2(x_{n} - x_{n-1}) = \frac{2 \pi}{c_1} $$

**Solution b**

Find $\psi_+ = \psi_1 + \psi_2 \; \textrm{ and } \; \psi_- = \psi_1 - \psi_2$.

$$ \begin{align*} \psi_+ &= \sin (c_1 x + c_2 t) + \sin (c_1 x - c_2 t) \\[4pt] &= \sin (c_1 x ) \cos (c_2 t) + \cancel{\cos(c_1 x) \sin(c_1 t)} + \sin (c_1 x ) \cos (c_2 t) - \cancel{\cos(c_1 x) \sin(c_1 t)} \\[4pt] &= 2\sin (c_1 x ) \cos (c_2 t) \end{align*} $$

This should have a node at every $x= n \pi / c_1$ and

$$ \begin{align*} \psi_- &= \sin (c_1 x + c_2 t) - \sin (c_1 x - c_2 t) \\[4pt] &= \cancel{\sin (c_1 x ) \cos (c_2 t)} + \cos(c_1 x) \sin(c_1 t) - \cancel{\sin (c_1 x ) \cos (c_2 t)} + \cos(c_1 x) \sin(c_1 t) \\[4pt] &= 2\cos (c_1 x ) \sin (c_2 t) \end{align*} $$
:::
