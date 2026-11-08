<!-- LibreTexts page 13428: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/06:_The_Hydrogen_Atom/6.03:_The_Three_Components_of_Angular_Momentum_Cannot_be_Measured_Simultaneously_with_Arbitrary_Precision -->
# The Three Components of Angular Momentum Cannot be Measured Simultaneously with Arbitrary Precision

## Learning Objectives {section:objectives}

- Understand how to measure the orbital angular momentum of an electron around a nucleus.
- Understand how the Heisenburgh Uncertainty Principle extends to orbital angular momenta.
- Manipulate the angular momenta cyclic permutations that allow two of the three projects to be simultaneous measured

Consider a particle described by the Cartesian coordinates $(x, y, z)\equiv \vec{r}$ and their conjugate momenta $(p_x, p_y, p_z)\equiv \vec{p}$. The classical definition of the *orbital angular momentum* of such a particle about the origin is (i.e., via the [vector cross product](https://math.libretexts.org/Bookshelves/Calculus/Book%3A_Calculus_(OpenStax)/12%3A_Vectors_in_Space/12.4%3A_The_Cross_Product)):

$$ \vec{L} = \vec{r} \times \vec{p} $$

which can be separated into projections into each of the primary axes :

$$ \begin{align*} L_x &= y\, p_z - z\, p_y,  \\[4pt] L_y &= z\, p_x - x\, p_z  \\[4pt] L_z &= x\,p_y - y \,p_x  \end{align*} $$

Extending this discussion to the quantum mechanics, we can assume that the operators $(\hat{L}_x, \hat{L}_y, \hat{L}_z)\equiv \vec{L}$ - that represent the components of orbital angular momentum in quantum mechanics - can be defined in an analogous manner to the corresponding components of classical angular momentum. In other words, we are going to assume that the above equations specify the angular momentum operators in terms of the position and linear momentum operators.

In Cartesian coordinates, the three operators for the orbital angular momentum components can be written as

$$ \hat{L}_x = -{\rm i}\,\hbar\left(y\,\dfrac{\partial}{\partial z} - z\,\dfrac{\partial} {\partial y}\right) $$ {eq:6.3.2a} n=1

$$ \hat{L}_y = -{\rm i}\,\hbar\left(z\,\dfrac{\partial}{\partial x} - x\,\dfrac{\partial} {\partial z}\right) $$ {eq:6.3.2b} n=2

$$ \hat{L}_z = -{\rm i}\,\hbar\left(x\,\dfrac{\partial}{\partial y} - y\,\dfrac{\partial} {\partial x}\right) $$ {eq:6.3.2c} n=3

These can be transforming to operators in standard spherical polar coordinates,

$$ \begin{align*} x &= r \,\sin\theta\, \cos\varphi  \\[4pt] y &= r\, \sin\theta\, \sin\varphi  \\[4pt] z &=r \cos \theta  \end{align*} $$

we obtain

$$ \begin{align*} \hat{L}_x &= {\rm i}\,\hbar\,\left(\sin\varphi\, \dfrac{\partial}{\partial \theta} + \cot\theta \cos\varphi\,\dfrac{\partial}{\partial \varphi}\right)  \\[4pt] \hat{L}_y &= -{\rm i} \,\hbar\,\left(\cos\varphi\, \dfrac{\partial}{\partial\theta} -\cot\theta \sin\varphi \,\dfrac{\partial}{\partial \varphi}\right)  \\[4pt] \hat{L}_z &= -{\rm i}\,\hbar\,\dfrac{\partial}{\partial\varphi}  \end{align*} $$

We can introduce a new operator $\hat{L^2}$:

$$ \begin{align} \hat{L^2} &= \hat{L}_x^{\,2}+\hat{L}_y^{\,2}+\hat{L}_z^{\,2}  \\[4pt] &= - \hbar^2\left( \dfrac{1}{\sin\theta}\dfrac{\partial}{\partial \theta} \sin \theta \dfrac{\partial}{\partial \theta} + \dfrac{1}{\sin^2\theta}\dfrac{\partial^2} {\partial\varphi^2}\right)  \end{align} $$ {eq:6.3.5} n=4 {eq:6.3.6} n=4

The eigenvalue problem for $\hat{L^2}$ takes the form

$$ \hat{L^2} | \psi \rangle = \lambda \,\hbar^2 | \psi \rangle $$ {eq:6.3.6a} n=5

where $\psi(r, \theta, \varphi)$ is the wavefunction, and $\lambda$ is a number. Let us write

$$ \psi(r, \theta, \varphi) = R(r) \,Y(\theta, \varphi) $$ {eq:6.3.6b} n=6

By definition,

$$ \boxed{L^2 \,Y_{l}^{m_l} = l\,(l+1)\,\hbar^2\,Y_{l}^{m_l}} $$ {eq:6.3.9} n=7

where $l$ is an integer. This is an important conclusion that argues the angular momentum is quantized with the square of the magnitude of the angular momentum only capable of assume one of the discrete set of values (Equation [ref:eq:6.3.9]). From this, the {term:amplitude} of angular momentum can be expressed

$$ \boxed{ |\vec{L}| =\sqrt{L^2} = \sqrt{l(l+1)} \hbar } $$ {eq:6.3.10} n=8

:::note [warning] Warning

We often refer to a particle in a state with angular momentum quantum number $l$ as having angular momentum $l$, rather than saying that it has angular momentum of $\sqrt{l(l+1)} \hbar$ magnitude, primarily since it is awkward to say quickly.
:::

The properties of spherical harmonics that the z-component of the angular momentum ($L_z$) is also quantized and can only assume a one of a discrete set of values

$$ L_z \,Y_{l}^{m_l} = m\,\hbar\,Y_l^{m_l} $$ {eq:6.3.11} n=9

where $m_l$ is an integer lying in the range $-l\leq m_l \leq l$.

- $l$ is sometimes called "azimuthal quantum number" or "orbital quantum number"
- $m_l$ is sometimes called "magnetic quantum number"

## Simultaneous Measurements

Note that observables associated with $\hat{L}_x$, $\hat{L}_y$, and $\hat{L}_z$ can, in principle, be measured. However, to determine if they can be measured *simultaneously* with infinite precision, the corresponding operators must {term:commute}. Remember that the fundamental commutation relations satisfied by the position and linear momentum operators are:

$$ \begin{align*} [\hat{x}_i, \hat{x}_j] &=0  \\[4pt] [\hat{p}_i, \hat{p}_j] &=0  \\[4pt] [\hat{x}_i, \hat{p}_j] &= {\rm i}\,\hbar \,\delta_{ij}  \end{align*} $$

where $i$ and $j$ stand for either $x$, $y$, or $z$. Consider the commutator of the operators $\hat{L}_x$ and $\hat{L}_z$ :

$$ \begin{align*} [\hat{L}_x, \hat{L}_y] & = [(y\,p_z-z\,p_y), (z\,p_x-x \,p_z)] \\[4pt] &= y\,[p_z, z]\,p_x + x\,p_y\,[z, p_z]  \\[4pt] &= {\rm i}\,\hbar\,(-y \,p_x+ x\,p_y) \\[4pt] &= {\rm i}\,\hbar\, \hat{L}_z  \end{align*} $$

The {term:cyclic permutations} of the above result yield the fundamental commutation relations satisfied by the components of an orbital angular momentum:

$$ [\hat{L}_x, \hat{L}_y] = {\rm i}\,\hbar\, \hat{L}_z $$ {eq:6.3.17a} n=10

$$ [\hat{L}_y, \hat{L}_z] = {\rm i}\,\hbar\, \hat{L}_x $$ {eq:6.3.17b} n=11

$$ [\hat{L}_z, \hat{L}_x] = {\rm i}\,\hbar\, \hat{L}_y $$ {eq:6.3.17c} n=12

The three commutation relations (Equations [ref:eq:6.3.17a] - [ref:eq:6.3.17c]) are the foundation for the whole theory of angular momentum in quantum mechanics. Whenever we encounter three operators having these commutation relations, we know that the dynamical variables that they represent have identical properties to those of the components of an angular momentum (which we are about to derive). In fact, we shall assume that any three operators that satisfy the commutation relations (Equations [ref:eq:6.3.17a] - [ref:eq:6.3.17c]) represent the components of some sort of angular momentum.

> Any three operators that satisfy the cyclic commutation relations represent the components of some sort of angular momentum.

:::example {ex:6.3.1} Commutators

Show that the $\hat{L^2}$ and $\hat{L}_x$ operators commute.

**Solution**

We want to confirm that $[\hat{L^2}, \hat{L}_x] = 0$ that from Equation [ref:eq:6.3.5] this can be expanded

$$ [\hat{L^2}, \hat{L}_x] = [\hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2, \hat{L}_x] $$

from the properties of commutators, this can be expanded

$$ [\hat{L^2}, \hat{L}_x] = [\hat{L}_x^2, \hat{L}_x] + [\hat{L}_y^2, \hat{L}_x] + [\hat{L}_z^2 , \hat{L}_x] $$

However,

$$ [\hat{L}_x^2, \hat{L}_x] = \hat{L}_x^2 \hat{L}_x - \hat{L}_x \hat{L}_x^2 = \hat{L}_x \hat{L}_x \hat{L}_x - \hat{L}_x \hat{L}_x \hat{L}_x = 0 $$

So

$$ \begin{align*} [\hat{L^2}, \hat{L}_x] &= [\hat{L}_y^2, \hat{L}_x] + [\hat{L}_z^2, \hat{L}_x] \\ &= \hat{L}_y^2 \hat{L}_x - \hat{L}_x \hat{L}_y^2 + \hat{L}_z^2 \hat{L}_x - \hat{L}_x \hat{L}_z^2  \\ &= \hat{L}_y \hat{L}_y \hat{L}_x - \hat{L}_x \hat{L}_y \hat{L}_y + \hat{L}_z \hat{L}_z \hat{L}_x - \hat{L}_x \hat{L}_z \hat{L}_z  \end{align*} $$

Lets look at some related forms which can be used to simplify the above expression. The first two terms can and final two terms can be rewritten as different commutators

$$ \begin{align*} [\hat{L}_y , \hat{L}_x] &= \hat{L}_y + \hat{L}_y [\hat{L}_y , \hat{L}_x]  \\ &= (\hat{L}_y \hat{L}_x - \hat{L}_x \hat{L}_y) \hat{L}_y + \hat{L}_y (\hat{L}_y \hat{L}_x - \hat{L}_x \hat{L}_y)  \\ &= \cancel{\hat{L}_y \hat{L}_x \hat{L}_y} - \hat{L}_x \hat{L}_y \hat{L}_y + \hat{L}_y \hat{L}_y \hat{L}_x - \cancel{\hat{L}_y \hat{L}_x \hat{L}_y}  \end{align*} $$

The first & fourth terms cancel, giving

$$ [\hat{L}_y , \hat{L}_x] \hat{L}_y + \hat{L}_y [\hat{L}_y , \hat{L}_x] = \hat{L}_y \hat{L}_y \hat{L}_x - \hat{L}_x \hat{L}_y \hat{L}_y $$

Similarly,

$$ [Lz , \hat{L}_x] \hat{L}_z + \hat{L}_z [\hat{L}_z, \hat{L}_x] = \hat{L}_z \hat{L}_z \hat{L}_x - \hat{L}_x \hat{L}_z \hat{L}_z $$

So,

$$ \begin{align*} [\hat{L^2} , \hat{L}_x] &= [\hat{L}_y , \hat{L}_x] \hat{L}_y + \hat{L}_y [\hat{L}_y , \hat{L}_x] + [\hat{L}_z , \hat{L}_x] \hat{L}_z + \hat{L}_z [\hat{L}_z , \hat{L}_x] \\[4pt] &= - i\hbar \hat{L}_z \hat{L}_y - i\hbar \hat{L}_y \hat{L}_z + i\hbar \hat{L}_y \hat{L}_z + ih \hat{L}_z \hat{L}_y \\[4pt] &= 0  \end{align*} $$

One can also show similarly that

$$ [\hat{L^2}, \hat{L}_y] = [\hat{L^2}, \hat{L}_z] = 0 $$
:::

Example 6.3.1 shows that while $L_z$ can be known with certainty, $L_x$ and $L_y$ would {term:unknown}. This means that every vector with the appropriate length and *z*-component can drawn to represent $\vec{L}$, which forms a cone (Figure 6.3.1). The expected value of the angular momentum for a given ensemble of systems in the quantum state characterized by $l$ and $m_l$ could be somewhere on this cone while it cannot be defined for a single system (since the components of $L$ do not commute with each other).

> FIGURE {fig:6.3.1} src=media/350792-Vector_model_of_orbital_angular_momentuml1.svg width=365px
> alt: Diagram of a hyperboloid with two blue cones intersecting, and three blue circles positioned around the cones.
> part src=media/350791-Vector_model_of_orbital_angular_momentum.svg width=365px
> alt: Diagram illustrating light convergence through lenses, featuring multiple lens shapes and labeled focal points.
> caption: Illustration of the vector model of orbital angular momentum. (left) A set of states with quantum numbers $l=1$, and $m_l = -1, 0, +1,$. (right) A set of states with quantum numbers $l=2$, and $m_l = -2, -1, 0, +1, +2$. (Public Domain; Maschen via Wikipedia)

:::note [note] The Meaning of Commutation of Two Operators

The mathematics of commutation relations is relatively straightforward, but what does it physically mean for an observable (Hermitian operator) to commute with another observable (Hermitian operator) in quantum mechanics?

If two operators $\hat{A}$ and $\hat{B}$ commute with each other then

$$ \hat A \hat B - \hat B \hat A = 0, $$

which can be rearranged to

$$ \hat A \hat B = \hat B \hat A. $$

This is not a trivial statement and many operations do not commute and hence the end-result depends on how you have ordered the operations.

If you recall that operators act on quantum mechanical states and give you a new state in return, then this means that with $\hat{A}$ and $\hat{B}$ commuting, the state you obtain from letting first $\hat{A}$ act and then $\hat{B}$ act on some initial state is the same as if you let first $\hat{B}$ and then $\hat{A}$ act on that state, i.e.,

$$ \hat A \hat B | \psi \rangle = \hat B \hat A | \psi \rangle. $$

Recall that when you perform a quantum mechanical measurement, you will always measure an eigenvalue of your operator, and after the measurement your state is left in the corresponding eigenstate. The eigenstates to the operator are precisely those states for which there is {term:no uncertainty} in the measurement: You will {term:always} measure the eigenvalue.

Therefore, $\hat{B} |a \rangle$ must be an eigenfunction of $\hat{A}$ with eigenvalue $a$ just like $|a \rangle$ itself is. That is essentially saying that $|a \rangle$ is an eigenfunction of $\hat{B}$.

A key example of this is since $\hat{L^2}$ and $\hat{L}_x$ commute (Example 6.3.1) then both operators share the same eigenstates. Hence, we do no need to solve two eignevalue problems:

$$ \hat{L^2} | \psi \rangle = \lambda | \psi \rangle $$

and

$$ \hat{L}_x | \psi \rangle = \beta| \psi \rangle $$

If we solve one, we then know the eigenvalues ($| \psi \rangle$) for the other!

What does it mean when some observable $\hat{A}$ commutes with the Hamiltonian $\hat{H}$? First, we get all the result from above: There is a simultaneous eigenbasis of the energy-eigenstates and the eigenstates of $\hat{A}$. This can yield a tremendous simplification of the task of solving Schrödinger equations. For example, the Hamiltonian of the hydrogen atom commutes with $\hat{L}$, the angular momentum operator, and with $\hat{L}_z$, its z-component. This tells you that you can classify the eigenstates by an angular- and magnetic quantum number $l$ and $m$.
:::

## Summary

In the quantum world, angular momentum is quantized. The square of the magnitude of the angular momentum (determined by the eigenvalues of the $\hat{L^2}$ operator) can only assume one of the discrete set of values

$$ L^2 = l(l + 1)\hbar^2 $$

or the magnitude of the angular momentum

$$ L = \sqrt{l(l + 1)}\hbar $$

with $l = 0, 1, 2, ... \nonumber$

The z-component of the angular momentum (i.e., projection of $L$ onto the $z$-axis) is also quantized with

$$ L_z= m_{l} \hbar $$

with $m_l = -l, 0-1, ..., 0, ... +l +1, l \nonumber$ for a given value of $l$. Hence, $l$ and $m_l$ are the *angular momentum quantum number* and the *magnetic quantum number,* respectively.

## Contributors and Attributions {section:attributions}

- [Richard Fitzpatrick](http://farside.ph.utexas.edu/) (Professor of Physics, The University of Texas at Austin)
