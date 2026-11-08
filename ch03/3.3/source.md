<!-- LibreTexts page 13393: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03:_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.03:_The_Schrodinger_Equation_is_an_Eigenvalue_Problem -->
# The Schrödinger Equation is an Eigenvalue Problem

## Learning Objectives {section:objectives}

- To recognize that each quantum mechanical observable is determined by solve by an eigenvalue problem with different operators for different observable
- Confirm if a specific wavefunction is an eigenfunction of a specific operation and extract the corresponding obserable (the eigenvalue)
- To recognize that the Schrödinger equation, just like all measurable, is also an eigenvalue problem with the eigenvalue ascribed to total energy
- Identity and manipulate several common quantum mechanical operators

As per the definition, an operator acting on a function gives another function, however a special case occurs when the generated function is proportional to the original

$$ \hat{A}\psi \propto \psi $$ {eq:3.3.1a} n=1

This case can be expressed in terms of a equality by introducing a proportionality constant $k$

$$ \hat{A}\psi = k \psi $$ {eq:3.3.1b} n=2

Not all functions will solve an equation like in Equation [ref:eq:3.3.1b]. If a function does, then $\psi$ is known as an {term:eigenfunction} and the constant $k$ is called its {term:eigenvalue} (these terms are hybrids with German, the purely English equivalents being "characteristic function" and "characteristic value", respectively). Solving [eigenvalue problems](https://math.libretexts.org/Bookshelves/Linear_Algebra/Map%3A_Linear_Algebra_(Waldron%2C_Cherney%2C_and_Denton)/12%3A_Eigenvalues_and_Eigenvectors/12.2%3A_The_Eigenvalue-Eigenvector_Equation) are discussed in most linear algebra courses.

In quantum mechanics, every experimental measurable $a$ is the eigenvalue of a specific operator ($\hat{A}$):

$$ \hat{A} \psi=a \psi $$ {eq:3.3.2a} n=3

The $a$ eigenvalues represents the possible measured values of the $\hat{A}$ operator. Classically, $a$ would be allowed to vary continuously, but in quantum mechanics, $a$ typically has only a sub-set of allowed values (hence the quantum aspect). Both time-dependent and time-independent Schrödinger equations are the best known instances of an eigenvalue equations in quantum mechanics, with its eigenvalues corresponding to the allowed energy levels of the quantum system.

$$ { \left[-\dfrac{\hbar^2}{2m}\nabla^2+V(\vec{r})\right]\psi(\vec{r})=E\psi(\vec{r})} $$ {eq:3.3.3} n=4

The object on the left that acts on $\psi (x)$ is an example of an {term:operator}.

$$ \left[-\dfrac{\hbar^2}{2m}\nabla^2+V(\vec{r})\right] $$ {eq:3.3.4} n=5

In effect, what is says to do is "take the second derivative of $\psi (x)$, multiply the result by $-(\hbar^2 /2m)$ and then add $V(x)\psi (x)$ to the result of that." Quantum mechanics involves many different types of operators. This one, however, plays a special role because it appears on the left side of the Schrödinger equation. It is called the {term:Hamiltonian} *operator* and is denoted as

$$ \hat{H}=-\dfrac{\hbar^2}{2m}\nabla^2+V(\vec{r}) $$ {eq:3.3.5} n=6

Therefore, the time-dependent Schrödinger equation can be (and it more commonly) written as

$$ \hat{H} \psi (x,t) = i \hbar \dfrac{\partial}{\partial t} \psi(x,t) $$ {eq:3.3.6a} n=7

and the time-independent Schrödinger equation

$$ \hat{H}\psi (x)=E \psi (x) $$ {eq:3.3.6b} n=8

Note that the functional form of Equation [ref:eq:3.3.6b] is the same as the general eigenvalue equation in Equation [ref:eq:3.3.1b] where the eigenvalues are the (allowed) total energies ($E$).

The [Hamiltonian](https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Book%3A_Variational_Principles_in_Classical_Mechanics_(Cline)/14%3A_Advanced_Hamiltonian_Mechanics), named after the Irish mathematician Hamilton, comes from the formulation of Classical Mechanics that is based on the total energy, $H = T + V$, rather than Newton's second law, $F = ma$. Equation [ref:eq:3.3.6b] says that the Hamiltonian operator operates on the wavefunction to produce the energy $E$, which is a scalar (e.g., expressed in Joules) times the wavefunction.

:::note [note] Correspondence Principle

Note that $\hat{H}$ is derived from the classical energy $p^2 /2m+V(x)$ simply by replacing $p \rightarrow -i\hbar(d/dx)$. This is an example of the {term:Correspondence Principle} initially proposed by Niels Bohr that states that the behavior of systems described by quantum theory reproduces classical physics in the limit of large quantum numbers.
:::

It is a general principle of Quantum Mechanics that there is an operator for every physical observable. A physical observable is anything that can be measured. If the wavefunction that describes a system is an eigenfunction of an operator, then the value of the associated observable is extracted from the eigenfunction by operating on the eigenfunction with the appropriate operator. The value of the observable for the system is then the eigenvalue, and the system is said to be in an eigenstate. Equation [ref:eq:3.3.6b] states this principle mathematically for the case of energy as the observable. If the wavefunction is not the eigenfunction of the operation, then the measurement will give an eigenvalue (by definition), but not necessarily the same one for each measurement (this will be discussed in more detail in later section).

## Common Operators

Although we could theoretically come up with an infinite number of operators, in practice there are a few which are much more important than any others.

- {term:Linear Momentum:}

The linear momentum operator of a particle moving in one dimension (the $x$-direction) is

$$ \hat p_x = -i \hbar \dfrac{\partial}{\partial x} $$ {eq:3.3.7} n=9

and can be generalized in three dimensions:

$$ \hat {\vec{p}} = -i \hbar \nabla $$ {eq:3.3.8} n=10

- {term:Position}

The position operator of a particle moving in one dimension (the $x$-direction) is

$$ \hat x = x $$ {eq:3.3.9D} n=11

and can be generalized in three dimensions:

$$ \hat {\vec{r}} = \vec{r} $$ {eq:3.3.10D} n=12

where ${\vec{r}} = (x,y,z)$.

- {term:Kinetic Energy}

Classically, the kinetic energy of a particle moving in one dimension (the $x$-direction), in terms of momentum, is

$$ KE_{classical}= \dfrac{p_x^2}{2m} $$ {eq:3.3.9} n=13

Quantum mechanically, the corresponding kinetic energy operator is

$$ \hat {KE}_{quantum}= -\dfrac{\hbar^2}{2m} \dfrac{\partial^2}{\partial x^2} $$ {eq:3.3.10} n=14

and can be generalized in three dimensions:

$$ \hat {KE}_{quantum}= -\dfrac{\hbar^2}{2m} \nabla^2 $$ {eq:3.3.11} n=15

- {term:Angular Momentum:}

Angular momentum requires a more complex discussion, but is the cross product of the position operator $\hat{\vec{r}}$ and the momentum operator $\hat p$

$$ \hat {\vec{L}} = -i \hbar ( \vec{r} \times \nabla) $$ {eq:3.3.12} n=16

- {term:Hamiltonian:}

The Hamiltonian operator corresponds to the total energy of the system

$$ \hat {H} = - \dfrac{\hbar^2}{2m} \dfrac{{\partial}^2}{{\partial x}^2} + V(x) $$ {eq:3.3.13} n=17

and it represents the total energy of the particle of mass $m$ in the potential $V(x)$. The Hamiltonian in three dimensions is

$$ \hat{H}=-\dfrac{\hbar^2}{2m}\nabla^2+V(\vec{r}) $$ {eq:3.3.5a} n=18

- {term:Total Energy:}

The energy operator from the time-dependent Schrödinger equation

$$ i \hbar \dfrac{\partial}{\partial t} \Psi(x,t)= \hat {H}\Psi(x,t) $$ {eq:3.3.14} n=19

The right hand side of Equation [ref:eq:3.3.5] is the Hamiltonian Operator. In addition determining system energies, the Hamiltonian operator dictates the time evolution of the wavefunction

$$ \hat {H} \Psi(x,t) = i \hbar \dfrac{\partial \Psi(x,t)}{\partial t} $$ {eq:3.3.15} n=20

This aspect will be discussed in more detail elsewhere.

## Eigenstate, Eigenvalues, Wavefunctions, Measurables, and Observables

In general, the {term:wavefunction} gives the "state of the system" for the system under discussion. It stores all the information available to the observer about the system. Often in discussions of quantum mechanics, the terms *eigenstate* and *wavefunction* are used interchangeably. The term eigenvalue is used to designate the value of measurable quantity associated with the wavefunction.

- If you want to measure the energy of a particle, you have to operate on the wavefunction with the Hamiltonian operator (Equation [ref:eq:3.3.5]).
- If you want to measure the momentum of a particle, you have to operate on wavefunction with the momentum operator (Equation [ref:eq:3.3.7]).
- If you want to measure the position of a particle, you have to operate on wavefunction with the position operator (Equation [ref:eq:3.3.9D]).
- If you want to measure the kinetic energy of a particle, you have to operate on wavefunction with the kinetic energy operator (Equation [ref:eq:3.3.10]).

When discussing the eigenstates of the Hamiltonian ($\hat{H}$), the associated eigenvalues represent energies and within the context of the momentum operators, the associated eigenvalues refer to the momentum of the particle. However, not all wavefunctions ($\psi$) are eigenstates of an operator ($\phi$) – and if they are not, they can be usually be written as superpositions of eigenstates.

$$ \psi = \sum_i c_i \phi_i $$

This will be discussed in more detail in later sections.

While the wavefunction may not be the eigenstate of an observable, when that operator operates on that wavefunction, the wavefunction {term:becomes} an eigenstate of that observable and only eigenvalues can be observed. Another way to say this is that the wavefunction "collapses" into an eigenstate of the observable. Because quantum mechanical operators have different forms, their associated eigenstates are similarly often (i.e., most of the time) different. For example, when a wavefunction is an eigenstate of total energy, it will {term:not} be an eigenstate of momentum.

> If a wavefunction is an eigenstate of one operator, (e.g., momentum), that state is not necessarily an eigenstate of a different operator (e.g., energy), although not always.

The wavefunction immediately after a measurement is an eigenstate of the operator associated with this measurement. What happens to the wavefunction after the measurement is a different topic.

:::example {ex:3.3.1}

Confirm that the following wavefunctions are eigenstates of linear momentum and kinetic energy (or neither or both):

a. $\psi = A \sin(ax)$
b. $\psi = N e^{-ix/\hbar}$

**Strategy**

This question is asking if the eigenvalue equation holds for the operators and these wavefunctions. This is just asking if these wavefunctions are solutions to Equation [ref:eq:3.3.1b] using the operators in Equations [ref:eq:3.3.7] and [ref:eq:3.3.10], i.e., are these equations true:

$$ \hat p_x \psi = p_x \psi $$ {eq:ex1} n=21

$$ \hat {KE} \psi = KE \psi $$ {eq:ex2} n=22

where $p_x$ and $KE$ are the measurables (eigenvalues) for these operators.

**Solution a**

Let's evaluate the left side of the linear momentum eigenvalue problem (Equation [ref:eq:ex1])

$$ -i \hbar \dfrac{\partial}{\partial x} A \sin(ax) = -i \hbar Aa \cos(ax) $$

and compare to the the right side of Equation [ref:eq:ex1]

$$ p_x A\sin(ax) $$

These are {term:not} the same so this wavefunction is not an eigenstate of momentum.

Let's look at the left side of the kinetic energy eigenvalue problem (Equation [ref:eq:ex2])

$$ \begin{align*} -\dfrac{\hbar^2}{2m} \dfrac{\partial^2}{\partial x^2} A \sin(ax) &= -\dfrac{\hbar^2}{2m} \dfrac{\partial}{\partial x} Aa \cos(ax) \\[4pt] &= +\dfrac{\hbar^2}{2m} Aa^2 \sin(ax) \end{align*} $$

and compare to the right side

$$ KE A\sin(ax) $$

These are same, so this specific wavefunction is an eigenstate of kinetic energy. Moreover, the measured kinetic energy will be

$$ KE = +\dfrac{\hbar^2}{2m} a^2 $$

**Solution b**

Let's look at the left side of Equation [ref:eq:ex1] for linear momentum

$$ -i \hbar \dfrac{\partial}{\partial x} N e^{-ix/\hbar} = -N e^{-ix/\hbar} $$

and the right side of Equation [ref:eq:ex1]

$$ p_x N e^{-ix/\hbar} $$

These are the same so this wavefunction is an eigenstate of momentum with momentum $p_x = -N$.

Let's look at the left side of Equation [ref:eq:ex2] for kinetic energy

$$ \begin{align*} -\dfrac{\hbar^2}{2m} \dfrac{\partial^2}{\partial x^2} N e^{-ix/\hbar} &= + i \dfrac{\hbar}{2m} \dfrac{\partial}{\partial x} N e^{-ix/\hbar} \\[4pt] &= + \dfrac{1}{2m} N e^{-ix/\hbar} \end{align*} $$

and the right side

$$ KE N e^{-ix/\hbar} $$

These are same so this wavefunction is an eigenstate of kinetic energy. And the measured kinetic energy will be

$$ KE = \dfrac{1}{2m} $$

This wavefunction is an eigenstate of both momentum and kinetic energy.
:::

:::exercise {exr:3.3.1}

Are $\psi = M e^{-bx}$ functions eigenstates of linear momentum and kinetic energy (or neither or both)?

**Answer**

$\psi$ is an eigenstate of linear momentum with a eigenvalue of $bi\hbar$ and also an eigenstate of kinetic energy with an eigenvalue of $b^2$.
:::
