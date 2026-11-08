<!-- LibreTexts page 13411: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04:_Postulates_and_Principles_of_Quantum_Mechanics/4.06:_Commuting_Operators_Allow_Infinite_Precision -->
# Commuting Operators Allow Infinite Precision

## Learning Objectives {section:objectives}

- To connect the Heisenberg Uncertainty principle to the commutation relations.
- Develop proficiency in calculating the commutator of two operators.

If two operators commute then both quantities can be measured at the same time with infinite precision, if not then there is a tradeoff in the accuracy in the measurement for one quantity vs. the other. This is the mathematical representation of the Heisenberg Uncertainty principle.

## Commuting Operators

One important property of operators is that the order of operation matters. Thus in general

$$ \hat{A}{\hat{E}f(x)} \not= \hat{E}{\hat{A}f(x)} $$

unless the two operators {term:commute}. Two operators commute if the following equation is true:

$$ \left[\hat{A},\hat{E}\right] = \hat{A}\hat{E} - \hat{E}\hat{A} = 0 $$

To determine whether two operators commute first operate $\hat{A}\hat{E}$ on a function $f(x)$. Then operate$\hat{E}\hat{A}$ the same function $f(x)$. If the same answer is obtained subtracting the two functions will equal zero and the two operators will commute.on

If two operators commute, then they can have the same set of eigenfunctions. By definition, two operators $\hat {A}$ and $\hat {B}$ commute if the effect of applying $\hat {A}$ then $\hat {B}$ is the same as applying $\hat {B}$ then $\hat {A}$, i.e.

$$ \hat {A}\hat {B} = \hat {B} \hat {A}. $$

For example, the operations brushing-your-teeth and combing-your-hair commute, while the operations getting-dressed and taking-a-shower do not. This theorem is very important. If two operators commute and consequently have the same set of eigenfunctions, then the corresponding physical quantities can be evaluated or measured exactly simultaneously with no limit on the uncertainty. As mentioned previously, the eigenvalues of the operators correspond to the measured values.

If $\hat {A}$ and $\hat {B}$ commute and $ψ$ is an eigenfunction of $\hat {A}$ with eigenvalue $b$, then

$$ \hat {B} \hat {A} \psi = \hat {A} \hat {B} \psi = \hat {A} b \psi = b \hat {A} \psi $$ {eq:4-49} n=1

Equation [ref:eq:4-49] says that $\hat {A} \psi$ is an eigenfunction of $\hat {B}$ with eigenvalue $b$, which means that when $\hat {A}$ operates on $ψ$, it cannot change $ψ$. At most, $\hat {A}$ operating on $ψ$ can produce a constant times $ψ$.

$$ \hat {A} \psi = a \psi $$ {eq:4-50} n=2

$$ \hat {B} (\hat {A} \psi ) = \hat {B} (a \psi ) = a \hat {B} \psi = ab\psi = b (a \psi ) $$ {eq:4-51} n=3

Equation [ref:eq:4-51] shows that Equation [ref:eq:4-50] is consistent with Equation [ref:eq:4-49]. Consequently $ψ$ also is an eigenfunction of $\hat {A}$ with eigenvalue $a$.

:::example {ex:4.6.1}

Do the following pairs of operators commute?

a. $\hat{A} = \dfrac{d}{dx} \nonumber$ and $\hat{E} = x^2 \nonumber$
b. $\hat{B}= \dfrac {h} {x} \nonumber$ and $\hat{C}\{f(x)\} = f(x) +3 \nonumber$
c. $\hat{J} = 3x$ and $\hat{O} = x^{-1}$

**Solution a**

This requires evaluating $\left[\hat{A},\hat{E}\right]$, which requires solving for $\hat{A} \{\hat{E} f(x)\}$ and $\hat{E} \{\hat{A} f(x)\}$ for arbitrary wavefunction $f(x)$ and asking if they are equal.

$$ \hat{A} \{\hat{E} f(x)\} = \hat{A}\{ x^2 f(x) \}= \dfrac{d}{dx} \{ x^2 f(x)\} = 2xf(x) + x^2 f'(x) $$

From the product rule of differentiation.

$$ \hat{E} \{\hat{A}f(x)\} = \hat{E}\{f'(x)\} = x^2 f'(x) $$

Now ask if they are equal

$$ \left[\hat{A},\hat{E}\right] = 2x f(x) + x^2 f'(x) - x^2f'(x) = 2x f(x) \not= 0 $$

Therefore the two operators do not commute.

**Solution b**

This requires evaluating $\left[\hat{B},\hat{C}\right]$ like in Example 4.6.1
.

$$ \hat{B} \{\hat{C}f(x)\} = \hat{B}\{f(x) +3\} = \dfrac {h}{x} (f(x) +3) = \dfrac {h f(x)}{x} + \dfrac{3h}{x} $$

$$ \hat{C} \{\hat{B}f(x)\} = \hat{C} \{ \dfrac {h} {x} f(x)\} = \dfrac {h f(x)} {x} +3 $$

Now ask if they are equal

$$ \left[\hat{B},\hat{C}\right] = \dfrac {h f(x)} {x} + \dfrac {3h} {x} - \dfrac {h f(x)} {x} -3 \not= 0 $$

The two operators do {term:not} commute.

**Solution c**

This requires evaluating $\left[\hat{J},\hat{O}\right]$

$$ \hat{J} \{\hat{O}f(x) \} = \hat{J} \{f(x)3x\} = f(x)3x/x = 3f(x) $$

$$ \hat{O} \{\hat{J}f(x) \}= \hat{O} \{\dfrac{f(x)}{x}\} = \dfrac{f(x)3x}{x} = 3f(x) $$

$$ \left[\hat{J},\hat{O}\right] = 3f(x) - 3f(x) = 0 $$

Because the difference is zero, the two operators commute.
:::

## General Heisenberg Uncertainty Principle

Although it will not be proven here, there is a general statement of the uncertainty principle in terms of the commutation property of operators. If two operators $\hat {A}$ and $\hat {B}$ do not commute, then the uncertainties (standard deviations $σ$) in the physical quantities associated with these operators must satisfy

$$ \sigma _A \sigma _B \ge \left| \int \psi ^* [ \hat {A} \hat {B} - \hat {B} \hat {A} ] \psi \,d\tau \right| $$ {eq:4-52} n=4

where the integral inside the square brackets is called the {term:commutator}, and ││signifies the modulus or absolute value. If $\hat {A}$ and $\hat {B}$ commute, then the right-hand-side of Equation [ref:eq:4-52] is zero, so either or both $σ_A$ and $σ_B$ could be zero, and there is no restriction on the uncertainties in the measurements of the eigenvalues $a$ and $b$. If $\hat {A}$ and $\hat {B}$ do not commute, then the right-hand-side of Equation [ref:eq:4-52] will not be zero, and neither $σ_A$ nor $σ_B$ can be zero unless the other is infinite. Consequently, both a and b cannot be eigenvalues of the same wavefunctions and cannot be measured simultaneously to arbitrary precision.

:::exercise {exr:4.6.1}

Show that the commutator for position and momentum in one dimension equals $–i ħ$ and that the right-hand-side of Equation [ref:eq:4-52] therefore equals $ħ/2$ giving $\sigma _x \sigma _{px} \ge \frac {\hbar}{2}$.
:::

## Applications

Operators are very common with a variety of purposes. They are used to figure out the energy of a wavefunction using the Schrödinger Equation.

$$ \hat{H}\psi = E\psi $$

They also help to explain observations made in the experimentally. An example of this is the relationship between the magnitude of the angular momentum and the components.

$$ \left[\hat{L}^2, \hat{L}^2_x\right] = \left[\hat{L}^2, \hat{L}^2_y\right] = \left[\hat{L}^2, \hat{L}^2_z\right] = 0 $$

However the components do not commute themselves. An additional property of commuters that commute is that both quantities can be measured simultaneously. Thus, the magnitude of the angular momentum and ONE of the components (usually z) can be known at the same time however, NOTHING is known about the other components.

> The physical quantities corresponding to operators that commute can be measured simultaneously to any precision.

:::example {ex:4.6.2A}

Determine whether the following two operators commute:

$$ \hat{K} = \alpha \displaystyle \int {[1]}^{[\infty]} d[x] $$

and

$$ \hat{H} = d/dx $$

**Solution**

Evaluate

$$ \left[\hat{K},\hat{H}\right] $$
:::

:::example {ex:4.6.2B}

Determine whether the following two operators commute:

$$ \hat{I} = 5 $$

and

$$ \hat{L} = \displaystyle \int_{[1]}^{[\infty]} d[x] $$

**Solution**

The identity operator, $\hat{I}$ is a real number and commutes with everything. Thus, these two operators commute. We can also directly evaluate the commutator:

$$ \left[\hat{I},\hat{L}\right] $$

$$ \left[\hat{I},\hat{L}\right] f(x) = 5 \displaystyle \int_{1}^{\infty} f(x) d(x)  - \displaystyle \int_{1}^{\infty} 5 f(x) d(x) = 0 $$
:::

:::exercise {exr:4.6.2C}

Show that the components of the angular momentum do not commute.

$$ \begin{align*} \hat{L}_x &= -i \hbar \left[ -\sin \left(\phi \dfrac {\delta} {\delta \theta} \right) - \cot (\Theta) \cos \left( \phi \dfrac {\delta} {\delta \phi} \right) \right] \\[4pt] \hat{L}_y &= -i \hbar \left[ \cos \left(\phi \dfrac {\delta} {\delta \theta} \right) - \cot (\Theta) \cos \left( \phi \dfrac {\delta} {\delta \phi} \right) \right] \\[4pt] \hat{L}_z &= -i\hbar \dfrac {\delta} {\delta\theta} \end{align*} $$

**Solution**

This requires evaluating the following commucators:

$$ \left[\hat{L}_z,\hat{L}_x\right] = i\hbar \hat{L}_y $$

$$ \left[\hat{L}_x,\hat{L}_y\right] = i\hbar \hat{L}_z $$

$$ \left[\hat{L}_y,\hat{L}_z\right] = i\hbar \hat{L}_x $$
:::

## References

1. Gohberg, I. Basic Operator Theory; Birkhäuser: Boston, 2001
2. McQuarrie, D.A. Quantum Chemistry, 2nd Edition; University Science Books:Sausalito, 2008
3. Schechter, M. Operator Methods in Quantum Mechanics; Dover Publications, 2003
