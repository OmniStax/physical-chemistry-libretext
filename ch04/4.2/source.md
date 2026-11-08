<!-- LibreTexts page 13407: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04:_Postulates_and_Principles_of_Quantum_Mechanics/4.02:_Quantum_Operators_Represent_Classical_Variables -->
# Quantum Operators Represent Classical Variables

## Learning Objectives {section:objectives}

- Understand how the correspondence principle argues that a unique quantum operator exist for every classical observable.
- Recognize several of the commonly used quantum operators

An observable is a dynamic variable of a system that can be experimentally measured (e.g., position, momentum and kinetic energy). In systems governed by classical mechanics, it is a real-valued function (never complex), however, in quantum physics, every observable in quantum mechanics is represented by an independent operator that is used to obtain physical information about the observable from the wavefunction. It is a general principle of quantum mechanics that there is an operator for every physical observable. For an observable that is represented in classical physics by a function $Q(x,p)$, the corresponding operator is $Q(\hat{x},\hat{p})$.

:::note [definition] Postulate II: The Correspondence Principle

For every observable property of a system there is a corresponding quantum mechanical operator. This is often referred to as the {term:Correspondence Principle}.
:::

Classical dynamical variables, such as $x$ and $p$, are represented in quantum mechanics by *linear operators* which act on the wavefunction. The operator for position of a particle in three dimensions is just the set of coordinates $x$, $y$, and $z$, which is written as a vector, $r$:

$$ \begin{align} \vec{r} &= (x , y , z ) \\[4pt] &= x \vec {i} + y \vec {j} + z \vec {k}  \end{align} $$ {eq:4.2.1} n=1

The operator for a component of linear momentum is

$$ \hat {p} _x = -i \hbar \dfrac {\partial}{\partial x} $$ {eq:4.2.2} n=2

and the operator for kinetic energy in one dimension is

$$ \hat {T} _x = \left ( -\dfrac {\hbar ^2}{2m} \right ) \dfrac {\partial ^2}{\partial x^2} $$ {eq:4.2.3} n=3

and in three dimensions

$$ \hat {p} = -i \hbar \nabla $$ {eq:4.2.4} n=4

and

$$ \hat {T} = \left ( -\dfrac {\hbar ^2}{2m} \right ) \nabla ^2 $$ {eq:4.2.5} n=5

The total energy operator is called the Hamiltonian operator, $\hat{H}$ and consists of the kinetic energy operator plus the potential energy operator.

$$ \hat {H} = - \frac {\hbar ^2}{2m} \nabla ^2 + \hat {V} (x, y , z ) $$ {eq:3-22} n=6

:::note [note] The Hamiltonian Operator

The Hamiltonian operator is named after the Irish mathematician William Hamilton and comes from the his [formulation of Classical Mechanics](https://phys.libretexts.org/TextBooks_and_TextMaps/Classical_Mechanics/Book%3A_Variational_Principles_in_Classical_Mechanics_(Cline)/8%3A_Hamiltonian_Mechanics) that is based on the total energy:

$$ \hat{H} = \hat{T} + \hat{V} $$

rather than Newton's second law,

$$ \vec{F} = m\vec{a} $$
:::

In many cases only the kinetic energy of the particles and the electrostatic or Coulomb potential energy due to their charges are considered, but in general all terms that contribute to the energy appear in the Hamiltonian. These additional terms account for such things as external electric and magnetic fields and magnetic interactions due to magnetic moments of the particles and their motion.

> TABLE {tab:1} cols=4 irregular
> caption: Table 4.2.1: Some common Operators in Quantum Mechanics

| {term:Name} | {term:Observable Symbol} | {term:Operator Symbol} | {term:Operation} |
| Position (in 1D) | $x$ | $\hat{X}$ | Multiply by $x$ |
| Position (in 3D) | $\vec{r}$ | $\hat{R}$ | Multiply by $\vec{r}$ |
| Momentum (in 1D) | $p_{x}$ | $\hat{P_{x}}$ | -$\imath \hbar \dfrac{d}{dx}$ |
| Momentum (in 3D) | $\vec{p}$ | $\hat{P}$ | -$\imath \hbar \left[ \hat{i}\ \dfrac{d}{dx} + \hat{j} \dfrac{d}{dy} + \hat{k} \dfrac{d}{dz}\right]$ |
| Kinetic Energy (in 1D) | $T_{x}$ | $\hat{T_{x}}$ | $\dfrac{-\hbar^2}{2m} \dfrac{d^2}{dx^2}$ |
| Kinetic Energy (in 3D) | $T$ | $\hat{T}$ | $\dfrac{-\hbar^2}{2m} \left[\dfrac{d^{2}}{dx^{2}} + \dfrac{d^2}{dy^2} + \dfrac{d^2}{dz^2} \right]$<br>Which can be simplified to<br>$\dfrac{- \hbar^2}{2m}$$\bigtriangledown^{2}$ |
| Potential Energy (in 1D) | $V(x)$ | $\hat{V}(x)$ | Multiply by $V(x)$ |
| Potential Energy (in 3D) | $V(x,y,z)$ | $\hat{V}(x,y,z)$ | Multiply by $V(x,y,z)$ |
| Total Energy | $E$ | $\hat{E}$ | $\dfrac{- \hbar^{2}}{2m} \nabla^2 + V(x,y,z)$ |
| Angular Momentum (x axis component) | $L_{x}$ | $\hat{L_{x}}$ | -$\imath \hbar \left[ y \dfrac{d}{dz} - z \dfrac{d}{dy}\right]$ |
| Angular Momentum (y axis component) | $L_{y}$ | $\hat{L_{y}}$ | -$\imath \hbar \left[ z \dfrac{d}{dx} - x \dfrac{d}{dz}\right]$ |
| Angular Momentum (z axis component) | $L_{z}$ | $\hat{L_{z}}$ | -$\imath \hbar \left[ x \dfrac{d}{dy} - y \dfrac{d}{dx}\right]$ |
