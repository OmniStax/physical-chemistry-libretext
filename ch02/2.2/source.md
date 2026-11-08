<!-- LibreTexts page 13376: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/02:_The_Classical_Wave_Equation/2.02:_The_Method_of_Separation_of_Variables -->
# The Method of Separation of Variables

## Learning Objectives {section:objectives}

- To be introduced to the *Separation of Variables* technique as method to solved wave equations

Solving the wave equation involves identifying the functions $u(x,t)$ that solve the partial differential equation that represent the amplitude of the wave at any position $x$ at any time $t$

$$ \dfrac{\partial^2 u(x,t)}{\partial x^2} = \dfrac{1}{v^2} \dfrac{\partial^2 u(x,t)}{\partial t^2} $$ {eq:2.1.1} n=1

This wave equation is a type of second-order [partial differential equation](https://math.libretexts.org/TextMaps/Analysis/Book%3A_Partial_Differential_Equations_(Miersemann)) (PDE) involving two variables - $x$ and $t$. PDEs differ from [ordinary differential equations](https://math.libretexts.org/TextMaps/Analysis/Book%3A_Differential_Equations_for_Engineers_(Lebl)) (ODEs) that involve functions of only one variable. However, this difference makes PDEs appreciably more difficult to solve. In fact, the vast majority of PDE cannot be solved analytically and those classes of special PDEs that can be solved analytically invariably involve converting the PDE into one or more ODEs and then solving independently. One of these approaches is the the method of *separation of variables*.

:::note [note] Method of Separation of Variables

The general application of the [*Method of Separation of Variables*](https://math.libretexts.org/Bookshelves/Calculus/Book%3A_Calculus_(OpenStax)/08%3A_Introduction_to_Differential_Equations/8.3%3A_Separable_Equations) for a wave equation involves three steps:

1. We find all solutions of the wave equation with the general form
   
   $$ u(x,t)= X(x)T(t) $$
   
   for some function $X(x)$ that depends on $x$ but not $t$ and some function $T(t)$ that depends only on $t$, but not $x$. It is of course too much to expect that all solutions of Equation [ref:eq:2.1.1] are of this form, however, if we find a set of solutions $\{X_i(x)T_i(t)\}$ since the wave equation is a *linear equation*,
   
   $$ u(x,t)=\sum_i c_ iX_i(x)T_i(t) $$ {eq:gen1} n=2
   
   is also a solution for *any choice* of the constants $c_i$.
2. Impose constraints on the solutions based on the knowledge of the system. These are called the {term:boundary conditions}, which specify the values of $u(x,t)$ at the extremes ("boundaries"). This is a similar constraint to the solution as in initial value problems which the conditions $x(t_i)$ are specified at a specific time $t_i$. The goal is then to select the constants $c_i$ in Equation [ref:eq:gen1] so that the boundary conditions are also satisfied.
:::

Method of separation of variables is one of the most widely used techniques to solve partial differential equations and is based on the *assumption* that the solution of the equation is separable, that is, the final solution can be represented as a product of several functions, each of which is only dependent upon a single independent variable. If this assumption is incorrect, then clear violations of mathematical principles will be obvious from the analysis.

## A Vibrating Spring Held Fixed Between Two Points

As discussed in Section 2.1, the solutions to the string example $u(x,t)$ for all $x$ and $t$ would be assumed to be a product of two functions: $X(x)$ and $T(t)$, where $X(x)$ is a function of only $x$, not $t$ and $T(t)$ is a function of $t$, but not $x$.

$$ u(x,t)= X(x)T(t) $$ {eq:2.2.1} n=3

Substitute Equation [ref:eq:2.2.1] into the one-dimensional wave equation (Equation [ref:eq:2.1.1]) gives

$$ \dfrac{\partial^2 X(x)T(t)}{\partial x^2} = \dfrac{1}{v^2} \dfrac{\partial^2 X(x)T(t)}{\partial t^2} $$ {eq:2.2.2} n=4

Since $X$ is not a function of $t$ and $T$ is not a function of $x$, Equation [ref:eq:2.2.2] can be simplified

$$ T(t) \dfrac{\partial^2 X(x)}{\partial x^2} = \dfrac{1}{v^2} X(x) \dfrac{\partial^2T(t)}{\partial t^2} $$ {eq:2.2.3} n=5

Collecting the expressions that depend on $x$ on the left side of Equation [ref:eq:2.2.3] and of $t$ on the right side results in

$$ \dfrac{1}{X(x)} \dfrac{\partial^2 X(x)}{\partial x^2} = \dfrac{1}{v^2} \dfrac{1}{T(t)} \dfrac{\partial^2T(t)}{\partial t^2} $$ {eq:2.2.3a} n=6

Equation [ref:eq:2.2.3a] is an interesting equation since each side can be set to a fixed constant $K$ as that is the only solution that works for all values of $t$ and $x$. Therefore, the equation can be separated into two *ordinary differential equations:*

$$ \dfrac{d^2T(t)}{dt^2} - Kv^2 T(t) = 0 $$ {eq:2.2.4a} n=7

$$ \dfrac{d^2X(x)}{dx^2} - K X(x) = 0 $$ {eq:2.2.4b} n=8

Hence, by substituting the new product solution form (Equation [ref:eq:2.2.1]) into the original wave equation (Equation [ref:eq:2.1.1]), we converted a partial differential equation of two variables ($x$ and $t$) into two *ordinary differential equations* (differential equation containing a function or functions of one independent variable and its derivatives). Each differential equation involves only one of the independent variables ($x$ or $t$).

- If $K=0$, then the solution is the trivial $u(x,y,)=0$ solution (i.e., no wave exists).
- If $K > 0$, then the general solution of Equation [ref:eq:2.2.4b] is
   
   $$ X(x) = A e^{\sqrt{K}x} + B e^{-\sqrt{K}x} $$ {eq:2.2.5} n=9

At this stage, Equation [ref:eq:2.2.5] implies that the solution to the two ordinary differential wave equations will be an infinite number of waves with no quantization to limit those that are allowed (i.e., any values of $A$ and $B$ are possible). Narrowing down the general solution to a specific solution occurs when taking the boundary conditions into account.

The boundary conditions for this problem is that the wave amplitude equal to zero at the ends of the string

$$ u(0,t) = X(x)T(t) = 0 $$ {eq:2.2.6a} n=10

$$ u(L,t) = X(x)T(t) = 0 $$ {eq:2.2.6b} n=11

for all times $t$.

Applying the two boundary conditions in Equations [ref:eq:2.2.6a] and [ref:eq:2.2.6b] into the general solution in Equation [ref:eq:2.2.5] results into relationships between $A$ and $B$:

$$ X(x=0)= A + B = 0 $$ {eq:2.2.7a} n=12

and

$$ X(x=L)= A e^{\sqrt{K}L} + B e^{-\sqrt{K}L} = 0 $$ {eq:2.2.7b} n=13

:::note [note] Ignore the Trivial Solution

One solution to this is that $A = B = 0$, but this is the trivial solution from $K=0$ and one we ignore since it provides no physical solution to the problem other than the knowledge that $0=0$, which is not that inspiring of a result.
:::

Both Equations [ref:eq:2.2.4a] and [ref:eq:2.2.4b] can be generalized into the following equations

$$ \dfrac{d^2y(x)}{dx^2} - k^2 y(x) = 0 $$ {eq:2.2.8} n=14

where $k$ is a real constant (i.e., not complex). Equation [ref:eq:2.2.8] is a *homogeneous* second order linear differential equation. The general solution to these types of differential equations has the form

$$ y(x) = e^{\alpha x} $$ {eq:2.2.9} n=15

where $\alpha$ is a constant to be determined by the constraints of system. Substituting Equation [ref:eq:2.2.9] into Equation [ref:eq:2.2.8] results in

$$ \left( \alpha^2 - k^2 \right)y(x)=0 $$ {eq:2.2.10} n=16

For this equation to be satisfied, either

- $\alpha^2 - k^2 = 0$ or
- $y(x) = 0$.

The later is the trivial solution and is ignored and therefore

$$ \alpha^2 - k^2 = 0 $$ {eq:2.2.11} n=17

so

$$ \alpha = \pm k $$ {eq:2.2.12} n=18

Hence, there are two solutions to the general Equation [ref:eq:2.2.8], as expected for a second order differential equation (first order differential equations have one solution), which are a result from substituting the $\alpha$ values from Equation [ref:eq:2.2.12] into Equation [ref:eq:2.2.9]

$$ y(x) = e^{k\, x} $$

$$ y(x) = e^{-k\, x} $$

The general solution can then be any linear combination of these two equations

$$ y(x) = c_1 e^{k\, x} + c_2 e^{-k\, x} $$ {eq:2.2.14} n=19

:::example {ex:2.2.1} General Solution

Solve

$$ y'' + 3y' - 4y = 0 $$

**Solution**

The strategy is to search for a solution of the form

$$ y = e^{\alpha t } $$

The reason for this is that long ago some geniuses figured this stuff out and it works. Now calculate derivatives

$$ y' = \alpha e^{\alpha t } $$

$$ y'' = \alpha^2e^{\alpha t} $$

Substituting into the differential equation gives

$$ \begin{align*} \alpha ^2e^{\alpha t} + 3(\alpha e^{\alpha t}) - 4(e^{\alpha t}) &= 0 \\[4pt] ( \alpha ^2 + 3\alpha - 4)e^{\alpha t} &= 0 \end{align*} $$

Now divide by $e^{\alpha t}$ to get

$$ \begin{align*} \alpha ^2 + 3\alpha - 4 &= 0 \\[4pt] (\alpha - 1)(\alpha + 4) &= 0 \\[4pt] \alpha &= 1 \end{align*} $$

and

$$ \alpha = -4 $$

We can conclude that two solutions are

$$ y_1 = e^t $$

and

$$ y_2 = e^{-4t} $$

Now let

$$ L(y) = y'' + 3y' - 4y $$

It is easy to verify that if $y_1$ and $y_2$ are solutions to

$$ L(y) = 0 $$

then

$$ y= c_1y_1 + c_2y_2 $$

is also a solution. More specifically we can conclude that

$$ y = c_1e^t + c_2e^{-4t } $$

Represents a two dimensional family (vector space) of solutions. Later we will prove that this is the most general description of the solution space.
:::

:::example {ex:2.2.2} Boundary Conditions

Solve

$$ y'' - y' - 6y = 0 $$

with $y(0) = 1$ and $y'(0) = 2$.

**Solution**

As before we seek solutions of the form

$$ y = e^{rt} $$

Now calculate derivatives

$$ \begin{align*} y' &= re^{rt} \\[4pt] y'' &= r^2e^{rt} \end{align*} $$

Substituting into the differential equation gives

$$ \begin{align*} r^2e^{rt} + (re^{rt}) - 6(e^{rt}) &= 0 \\[4pt] ( r^2 - r - 6 )e^{rt} &= 0 \end{align*} $$

Now divide by $e^{rt}$ to get

$$ \begin{align*} r^2 - r - 6 &= 0 \\[4pt] (r - 3)(r + 2) &= 0 \end{align*} $$

We can conclude that two solutions are

$$ y_1 = e^{3t} $$

and

$$ y_2 = e^{-2t} $$

We can conclude that

$$ y = c_1e^{3t} + C_2e^{-2t} $$

Represents a two dimensional family (a "vector space") of solutions. Now use the initial conditions to find that

$$ 1 = c_1 + c_2 $$

We have that

$$ y' = 3C_1e^{3t} - 2C_2e^{-2t} $$

Plugging in the initial condition with $y'$, gives

$$ 2 = 3c_1 - 2c_2 $$

This is a system of two equations and two unknowns. We can use linear algebra to arrive at

$$ c_1 = \dfrac{4}{5} $$

and

$$ C_2 = \dfrac {1}{5} $$

The final solution is

$$ y = \dfrac{4}{5} e^{3t } + \dfrac{1}{5}e^{-2t} $$
:::

When $K > 0$, the general solutions of Equations [ref:eq:2.2.4a] and [ref:eq:2.2.4b] are oscillatory in time and space, respectively, as discussed in the following section.
