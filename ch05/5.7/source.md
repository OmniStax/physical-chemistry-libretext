<!-- LibreTexts page 13421: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05:_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.07:_Hermite_Polynomials_are_either_Even_or_Odd_Functions -->
# Hermite Polynomials are either Even or Odd Functions

## Learning Objectives {section:objectives}

- Understand key properties of the Hermite polynomials including orthogonality and symmetry.
- Be proficient at using symmetries of integrands to quickly solve integrals.

Hermite polynomials were defined by Laplace (1810) though in scarcely recognizable form, and studied in detail by Chebyshev (1859). Chebyshev's work was overlooked and they were named later after Charles Hermite who wrote on the polynomials in 1864 describing them as new. They were consequently not new although in later 1865 papers Hermite was the first to define the multidimensional polynomials. The first six Hermite polynomial are plotted in Figure 5.7.1.

> FIGURE {fig:5.7.1} src=media/344450-Hermite_poly_phys_n=0.svg width=375px
> alt: Hermite_poly_phys n=0.svg
> part src=media/344446-Hermite_poly_phys_n=1.svg width=375px
> alt: Hermite_poly_phys n=1.svg
> part src=media/344449-Hermite_poly_phys_n=2.svg width=375px
> alt: Hermite_poly_phys n=2.svg
> part src=media/344448-Hermite_poly_phys_n=3.svg width=375px
> alt: Hermite_poly_phys n=3.svg
> part src=media/344452-Hermite_poly_phys_n=4.svg width=375px
> alt: Hermite_poly_phys n=4.svg
> part src=media/344447-Hermite_poly_phys_n=5.svg width=375px
> alt: Hermite_poly_phys n=5.svg
> caption: The first six Hermite polynomials $H_n(x)$. (CC BY-SA 3.0 Unported; [Alessio ](https://commons.wikimedia.org/wiki/User:Alejo2083)[Damato](https://commons.wikimedia.org/wiki/User:Alejo2083), Vulpecula and others via Wikipedia)

:::note [note] Generating Formula

Any Hermite polynomial $H_n(x)$ can be generated from a previous one $H_{n-1}(x)$ via the following using the recurrence relation

$$ H_{n+1} (x)=2xH_n (x)-2nH_{n-1} (x). $$ {eq:5.7.2} n=1
:::

## Hermite Polynomials are Symmetric

Let $f(x)$ be a real-valued function of a real variable.

- Then $f$ is {term:even} if the following equation holds for all x and -x in the domain of f
   
   $$ f(x) = f(-x) $$
- Then $f$ is {term:odd} if the following equation holds for all x and -x in the domain of f
   
   $$ -f(x) = f(-x) $$

Even and odd are terms used to describe particularly well-behaved functions. An *even* function is symmetric about the y-axis (Figure 5.7.2; left). That is, if we reflect the graph of the function in the $y$-axis, then it does not change. Formally, we say that $f$ is even if, for all $x$ and $−x$ in the domain of $f$, we have

$$ f(-x)=f(x) $$

Two examples of even functions are $f(x)=x^2$ and $f(x)=\cos x$.

An *odd* function has rotational symmetry of order two about the origin (Figure 5.7.2; middle). That is, if we rotate the graph of the function 180° about the origin, then it does not change. Formally, we say that ff is odd if, for all $x$ and $−x$ in the domain of $f$, we have

$$ f(-x)=-f(x) $$

Examples of odd functions are $f(x)=x^3$ and $f(x)=\sin x$.

Naturally, not all functions can be classified as even or odd. For example $f=x^3+1$ shown in the right side of Figure 5.7.2, is neither.

:::note [emphasis]

You can also think of these properties as symmetry conditions at the origin. More symmetries in 3D space are discussed in Group Theory.
:::

Without proof, we can identify several key features involving multiplication properties of even and odd functions:

- The product of two {term:even} functions is an {term:even} function.
- The product of two {term:odd} functions is an {term:even} function.
- The product of an {term:even} function and an {term:odd} function is an odd function.

This can be shown graphically as a product table like that in Table 5.7.1.

> TABLE {tab:1} cols=4
> caption: Table 5.7.1: Product table of 1D Functions

| Product table | Odd Function (anti-symmetric) | Even Function (symmetric) | No symmetry (neither) |
| --- | --- | --- | --- |
| Odd Function (anti-symmetric) | Even Function (symmetric) | Odd Function (anti-symmetric) | who knows |
| Even Function (symmetric) | Odd Function (anti-symmetric) | Even Function (symmetric) | who knows |
| No symmetry (neither) | who knows | who knows | who knows |

Notice that the Hermite polynomials in Figure 5.7.1 oscillate from even to odd. We can take advantage of that aspect in our calculation of Harmonic Oscillator wavefunctions. Hermite Polynomial is an even or odd function depends on its degree $n$. Based on

$$ H_n(-x) = (-1)^n H_n(x) $$ {eq:5.7.3} n=2

- $H_n(x)$ is an even function, when $n$ is even.
- $H_n(x)$ is an odd function, when $n$ is odd.

## Integration over Symmetric Functions

You often consider integrals of the form

$$ I=\int_{-a}^a f(x)\,\mathrm{d}x $$

If $f$ is odd or even, then sometimes you can make solving this integral easier. For example, we can rewrite that integral in the following way:

$$ \begin{align} I=\int_{-a}^a f(x)\,\mathrm{d}x &= \int_{-a}^0 f(x)\,\mathrm{d}x + \int_0^a f(x)\,\mathrm{d}x \\ &= \int_0^a f(-x)\,\mathrm{d}x + \int_0^a f(x)\,\mathrm{d}x  \end{align} $$ {eq:intsym} n=3

For an even function, we have $f(-x)=f(x)$ and Equation [ref:eq:intsym] can be simplified

$$ \begin{align*} I &= \int_0^a f(-x)\,\mathrm{d}x + \int_0^a f(x)\,\mathrm{d}x \\[4pt] &=2\int_0^a f(x)\,\mathrm{d}x \end{align*} $$

For an odd function, we have $f(-x)=-f(x)$ and Equation [ref:eq:intsym] can be simplified

$$ \begin{align*} I &= -\int_0^a f(x)\,\mathrm{d}x + \int_0^a f(x)\,\mathrm{d}x \\[4pt] &=0 \end{align*} $$

That’s what it means to simplify the integration: the integral of an odd or even function over the interval $[−L,L]$ can be put into a nicer form (and sometimes we can see that it vanishes without ever computing an integral).

:::example {ex:5.7.1}

Technically, evaluating the orthogonality of Hermite polynomials requires integrating over the $\exp(-x^2)$ weight function (Equations [ref:eq:1] and [ref:eq:2]).

**Solution**

For the Hermite polynomials $H_n(x)$, the relevant inner product (using Dirac Notation)

$$ \langle f,g \rangle=\int_{-\infty}^\infty f(x)g(x)\color{red}{\exp(-x^2)}\,\mathrm dx $$

While the $H_2(x)H_3(x)$ product is indeed an odd function (Table 5.7.1), while $exp⁡(−x^2)$ is even. Their product is odd, and thus $\langle f,g \rangle$ certainly ought to be zero.
:::

Symmetry is an important aspect of quantum mechanics and mathematics, especially in calculating integrals. Using this symmetry, integrals can be identified to be equal to zero without explicitly solving them. For example, the integral of an odd integrand over all possible values will {term:always} be zero irrespective of the exact nature of the function:

$$ \int_{-\infty}^{\infty} f(x) \, dx= 0 $$

This simplifies calculations greatly as demonstrated in the following chapters.

## Hermite Polynomials are Orthogonal

Hermite polynomials $H_n(x)$ are *n*th-degree polynomials for *n* = 0, 1, 2, 3 and form an orthogonal set of functions for the weight function $e^{-x^2/2}$. The exact relation is:

$$ \int_{-\infty}^{\infty} H_m(x)H_n(x) e^{-x^2/2} dx = 0 $$ {eq:1} n=4

if $m \neq n$ and

$$ \int_{-\infty}^{\infty} H_m(x)H_n(x) e^{-x^2/2} dx = 2^n n! \sqrt{\pi} $$ {eq:2} n=5

if $m = n$.

This will not be proved, but can the demonstrated using any of the Hermite polynomials listed in the previous section. The orthogonality property becomes important when solving the Harmonic oscillator problems. Note that the integral of Equation [ref:eq:2] is important for normalizing the quantum harmonic oscillator wavefunctions discussed in last Section.

:::example {ex:5.7.2} Hermite Polynomials are Orthogonal

Demonstrate that $H_2(x)$ and $H_3(x)$ are orthogonal.

**Solution**

We need to confirm

$$ \int_{-\infty}^{\infty}H_2(x)H_3(x) dx=0 $$

or when substituted

$$ \int_{-\infty}^{\infty} (4x^2-2)(8x^3-12x) dx=0 $$

because it says I need to show it's orthogonal on $[ -\infty, \infty ]$ or we can just evaluate it on a finite interval $[−L,L]$, where $L$ is a constant.

$$ \begin{align*} \int_{-L}^{L} (4x^2-2)(8x^3-12x) dx &=\left. 8 \left(\dfrac{2 x^6}{3}-2 x^4+\dfrac{3 x^2}{2}\right)\right|_{-L}^{L} \\[4pt] &= 8 \left(\dfrac{2 L^6}{3}-2 L^4+\frac{3 L^2}{2}\right)-8 \left(\dfrac{2 (-L)^6}{3}-2 (-L)^4+\dfrac{3 (-L)^2}{2}\right) \\[4pt] &=0. \end{align*} $$
:::

## Concluding

Hermite polynomials are a component in the harmonic oscillator wavefunction that dictates the symmetry of the wavefunctions. If your integration interval is symmetric around 0, then the integral over *any* integrable odd function is zero, no exception. Therefore as soon as you've found that your integrand is odd and your integration interval is symmetric, you're done. Also, for general functions, if you can easily split them into even and odd parts, you only have to consider the integral over the even part for symmetric integration intervals.

Another important property is that the product of two even or of two odd functions is even, and the product of an even and an odd function is odd. For example, if ff is even, $x↦f(x)\sin(x)$ is odd, and therefore the integral over it is zero (provided it is well defined).
