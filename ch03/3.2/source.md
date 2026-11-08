<!-- LibreTexts page 13392: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03:_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.02:_Linear_Operators_in_Quantum_Mechanics -->
# Linear Operators in Quantum Mechanics

## Learning Objectives {section:objectives}

- Classical-Mechanical quantities are represented by linear operators in Quantum Mechanics
- Understand that "algebra" of scalars and functions do not always to operators (specifically the commutative property)

The bracketed object in the time-independent Schrödinger Equation (in 1D)

$$ \left[-\dfrac{\hbar^2}{2m}\nabla^2+V(\vec{r})\right]\psi(\vec{r})=E\psi(\vec{r}) $$ {eq:3.1.19} n=1

is called an *operator*. An operator is a generalization of the concept of a function applied to a function. Whereas a function is a rule for turning one number into another, an operator is a rule for turning one function into another. For the time-independent Schrödinger Equation, the operator of relevance is the Hamiltonian operator (often just called the Hamiltonian) and is the most ubiquitous operator in quantum mechanics.

$$ \hat{H} = -\dfrac{\hbar^2}{2m}\nabla^2+V(\vec{r}) $$

We often (but not always) indicate that an object is an operator by placing a 'hat' over it, eg, $\hat{H}$. So time-independent Schrödinger Equation can then be simplified from Equation [ref:eq:3.1.19] to

$$ \hat{H} \psi(\vec{r}) = E\psi(\vec{r}) $$ {eq:simple} n=2

Equation [ref:eq:simple] says that the Hamiltonian operator operates on the wavefunction to produce the energy, which is a scalar (i.e., a number, a quantity and observable) times the wavefunction. Such an equation, where the operator, operating on a function, produces a constant times the function, is called an [{term:eigenvalue equation}](https://math.libretexts.org/Bookshelves/Linear_Algebra/Map%3A_Linear_Algebra_(Waldron%2C_Cherney%2C_and_Denton)/12%3A_Eigenvalues_and_Eigenvectors/12.2%3A_The_Eigenvalue-Eigenvector_Equation). The function is called an eigenfunction, and the resulting numerical value is called the eigenvalue. Eigen here is the German word meaning self or own. We will discuss this in detail in later Sections.

## Fundamental Properties of Operators

Most properties of operators are straightforward, but they are summarized below for completeness.

1. The sum and difference of two operators $\hat{A}$ and $\hat{B}$ are given by
   
   $$ (\hat{A} \pm \hat{B}) f = \displaystyle \hat{A} f \pm \hat{B} f $$
2. The product of two operators is defined by
   
   $$ \hat{A} \hat{B} f \equiv \hat{A} [ \hat{B} f ] $$
3. Two operators are equal if
   
   $$ \hat{A} f = \hat{B} f $$
   
   for {term:all} functions $f$.
4. The identity operator $\hat{1}$ does nothing (or multiplies by 1)
   
   $$ {\hat 1} f = f $$
5. The $n$-th power of an operator $\hat{A}^n$ is defined as $n$ successive applications of the operator, e.g.
   
   $$ \hat{A}^2 f = \hat{A} \hat{A} f $$
6. The *associative law* holds for operators
   
   $$ \hat{A}(\hat{B}\hat{C}) = (\hat{A}\hat{B})\hat{C} $$
7. The *commutative law* does {term:not} generally hold for operators. In general, but not always,
   
   $$ \hat{A} \hat{B} \neq \hat{B}\hat{A}. $$ {eq:comlaw} n=3

To help identify if the inequality in Equation [ref:eq:comlaw] holds for any two specific operators, we define the commutator.

:::note [definition] Definition: The Commutator

It is convenient to define the {term:commutator} of $\hat{A}$ and $\hat{B}$

$$ [\hat{A}, \hat{B}] \equiv \hat{A} \hat{B} - \hat{B} \hat{A} $$
:::

If $\hat{A}$ and $\hat{B}$ commute, then

$$ [\hat{A} ,\hat{B} ] = 0. $$

If the commutator is not zero, the order of operating matters and the operators are said to "not commute." Moreover, this property applies

$$ [\hat{A} ,\hat{B} ] = - [\hat{B} ,\hat{A} ]. $$

## Linear Operators

The action of an operator that turns the function $f(x)$ into the function $g(x)$ is represented by

$$ \hat{A}f(x)=g(x) $$ {eq:3.2.1} n=4

The most common kind of operator encountered are *linear operators* which satisfies the following two conditions:

$$ \underset{\text{Condition A}}{\hat{O}(f(x)+g(x)) = \hat{O}f(x)+\hat{O}g(x)} $$ {eq:3.2.2a} n=5

and

$$ \underset{\text{Condition B}}{\hat{O}cf(x) = c \hat{O}f(x)} $$ {eq:3.2.2b} n=6

where

- $\hat{O}$ is a linear operator,
- $c$ is a constant that can be a complex number ($c = a + ib$), and
- $f(x)$ and $g(x)$ are functions of $x$

If an operator fails to satisfy either Equations [ref:eq:3.2.2a] or [ref:eq:3.2.2b] then it is not a linear operator.

:::example {ex:3.2.1}

Is this operator $\hat{O} = -i \hbar \dfrac{d}{dx}$ linear?

**Solution**

To confirm is an operator is linear, both conditions in Equation [ref:eq:3.2.2b] must be demonstrated.

Condition A (Equation [ref:eq:3.2.2a]):

$$ \hat{O}(f(x)+g(x)) = -i \hbar \dfrac{d}{dx} \left( f(x)+g(x)\right) $$

From basic calculus, we know that we can use the {term:[sum rule for differentiation](http://mathwiki.ucdavis.edu/Calculus/Differential_Calculus/3._Rules_for_Finding_Derivatives/Linearity_of_the_Derivative)}

$$ \begin{align*} \hat{O}(f(x)+g(x)) &= -i \hbar \dfrac{d}{dx} f(x) - i \hbar \dfrac{d}{dx} g(x) \\[4pt] &= \hat{O}f(x)+\hat{O}g(x) \;\;\; \checkmark \end{align*} $$

Condition A is confirmed. Does Condition B (Equation [ref:eq:3.2.2b]) hold?

$$ \hat{O}cf(x) = -i \hbar \dfrac{d}{dx} c f(x) $$

Also from basic calculus, this can be factored out of the derivative

$$ \begin{align*}\hat{O}cf(x) &= - c i \hbar\dfrac{d}{dx} f(x) \\[4pt] &= c \hat{O}f(x) \;\;\; \checkmark \end{align*} $$

Yes. This operator is a linear operator (this is the linear momentum operator).
:::

:::exercise {exr:3.2.1}

Confirm if the square root operator $\sqrt{f(x)}$ linear or not?

**Answer**

To confirm is an operator is linear, both conditions in Equations [ref:eq:3.2.2a] and [ref:eq:3.2.2b] must be demonstrated. Let's look first at Condition B.

Does Condition B (Equation [ref:eq:3.2.2b]) hold?

$$ \hat{O}cf(x) = c\hat{O}{ f(x) } $$

$$ \sqrt{c f(x) } \neq c\sqrt{f(x)} $$

Condition B does not hold, therefore the square root operator is not linear.
:::

The most operators encountered in quantum mechanics are *linear operators*.

## Hermitian Operators

An important property of operators is suggested by considering the Hamiltonian for the particle in a box:

$$ \hat{H}=-\dfrac{\hbar^2}{2m}\frac{d^2}{dx^2} $$

Let $f(x)$ and $g(x)$ be arbitrary functions which obey the same boundary values as the eigenfunctions of $\hat{H}$ (e.g., they vanish at $x = 0$ and $x = a$). Consider the integral

$$ \int_0^a \! f(x) \, \hat{H} \, g(x) \, \mathrm{d}x =-\frac{\hbar^2}{2m} \int_0^a \! f(x) \, g''(x) \, \mathrm{d}x $$

Now, using [integration by parts](http://mathwiki.ucdavis.edu/Calculus/Integral_Calculus/8_Techniques_of_Integration/Integration_by_Parts),

$$ \int_0^a \! f(x) \, g''(x) \, \mathrm{d}x = - \int_0^a \! f'(x) \, g'(x) \, \mathrm{d}x + \, f(x) \, g'(x) \Big|_0^a $$ {eq:3} n=7

The boundary terms vanish by the assumed conditions on $f$ and $g$. A second integration by parts transforms Equation [ref:eq:3] to

$$ \int_0^a \! f''(x) \, g(x) \, \mathrm{d}x \, - \, f'(x) \, g(x) \Big|_0^a $$

It follows therefore that

$$ \int_0^a \! f(x) \, \hat{H} \, g(x) \, \mathrm{d}x=\int_0^a g(x) \, \hat{H} \, f(x) \, \mathrm{d}x $$

An obvious generalization for complex functions will read

$$ \int_0^a \! f^*(x) \, \hat{H} \, g(x) \, \mathrm{d}x=\left(\int_0^a g^*(x) \, \hat{H} \, f(x) \, \mathrm{d}x\right)^* $$

In mathematical terminology, an operator $\hat{A}$ for which

$$ \int \! f^* \, \hat{A} \, g \, \mathrm{d}\tau=\left(\int \! g^* \, \hat{A} \, f \, \mathrm{d}\tau\right)^* $$

for all functions $f$ and $g$ which obey specified boundary conditions is classified as *Hermitian* or *self-adjoint*. Evidently, the Hamiltonian is a {term:Hermitian operator}. It is postulated that *all* quantum-mechanical operators that represent dynamical variables are Hermitian. The term is also used for specific times of matrices in linear algebra courses.

> *All* quantum-mechanical operators that represent dynamical variables are Hermitian.
