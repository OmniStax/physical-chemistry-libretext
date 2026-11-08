<!-- LibreTexts page 13426: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/06:_The_Hydrogen_Atom/6.01:_The_Schrodinger_Equation_for_the_Hydrogen_Atom_Can_Be_Solved_Exactly -->
# The Schrodinger Equation for the Hydrogen Atom Can Be Solved Exactly

The hydrogen atom, consisting of an electron and a proton, is a two-particle system, and the internal motion of two particles around their center of mass is equivalent to the motion of a single particle with a reduced mass. This reduced particle is located at $r$, where $r$ is the vector specifying the position of the electron relative to the position of the proton. The length of $r$ is the distance between the proton and the electron, and the direction of $r$ and the direction of $r$ is given by the orientation of the vector pointing from the proton to the electron. Since the proton is much more massive than the electron, we will assume throughout this chapter that the reduced mass equals the electron mass and the proton is located at the center of mass.

> FIGURE {fig:6.1.1} src=media/18826-H_atom_reduced.gif width=409
> alt: A simple diagram illustrating solar systems with a yellow sun, an orange planet, and smaller celestial objects.
> caption: (a) The proton ($p^+$) and electron ($e^-$) of the hydrogen atom. (b) Equivalent reduced particle with reduced mass $μ$ at distance $r$ from center of mass.

:::exercise {exr:6.1.1}

a. Assuming the Bohr radius gives the distance between the proton and electron, calculate the distance of the proton from the center of mass, and calculate the distance of the electron from the center of mass.
b. Calculate the reduced mass of the electron-proton system.
c. In view of your calculations in (a) and (b), comment on the validity of a model in which the proton is located at the center of mass and the reduced mass equals the electron mass.
:::

Since the internal motion of any two-particle system can be represented by the motion of a single particle with a reduced mass, the description of the hydrogen atom has much in common with the description of a diatomic molecule discussed previously. The time-independent Schrödinger Equation for the hydrogen atom

$$ \hat {H} (r , \theta , \varphi ) \psi (r , \theta , \varphi ) = E \psi ( r , \theta , \varphi) $$ {eq:6.1.1} n=1

employs the same kinetic energy operator, $\hat {T}$, written in spherical coordinates. For the hydrogen atom, however, the distance, $r$, between the two particles can vary, unlike the diatomic molecule where the bond length was fixed and the [rigid rotor](page:13423) model was applicable. The hydrogen atom Hamiltonian also contains a potential energy term, $\hat {V}$, to describe the attraction between the proton and the electron. This term is the Coulomb potential energy,

$$ \hat {V} (r) = - \dfrac {e^2}{4 \pi \epsilon _0 r } $$ {eq:6.1.2} n=2

where r is the distance between the electron and the proton. The Coulomb potential energy depends inversely on the distance between the electron and the nucleus and does not depend on any angles. Such a potential is called a [{term:central potential}](https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Classical_Mechanics_(Tatum)/21%3A_Central_Forces_and_Equivalent_Potential).

The full expression for $\hat {H}$ in spherical coordinates is

$$ \hat {H} (r , \theta , \varphi ) = - \dfrac {\hbar ^2}{2 \mu r^2} \left [ \dfrac {\partial}{\partial r} \left (r^2 \dfrac {\partial}{\partial r} \right ) + \dfrac {1}{\sin \theta } \dfrac {\partial}{\partial \theta } \left ( \sin \theta \dfrac {\partial}{\partial \theta} \right ) + \dfrac {1}{\sin ^2 \theta} \dfrac {\partial ^2}{\partial \varphi ^2} \right ] - \dfrac {e^2}{4 \pi \epsilon _0 r } $$ {eq:6.1.3} n=3

The contributions from rotational and radial components of the motion become clearer if we write out the complete Schrödinger equation,

$$ \left \{ -\dfrac {\hbar ^2}{2 \mu r^2} \left [ \dfrac {\partial}{\partial r} \left (r^2 \dfrac {\partial}{\partial r} \right ) + \dfrac {1}{\sin \theta } \dfrac {\partial}{\partial \theta } \left ( \sin \theta \dfrac {\partial}{\partial \theta} \right ) + \dfrac {1}{\sin ^2 \theta} \dfrac {\partial ^2}{\partial \varphi ^2} \right ] - \dfrac {e^2}{4 \pi \epsilon _0 r } \right \} \psi (r , \theta , \varphi ) = E \psi (r , \theta , \varphi ) $$ {eq:6.1.4} n=4

multiply both sides of Equation [ref:eq:6.1.4] by $2 \mu r^2$, and rearrange to obtain

$$ \hbar ^2 \dfrac {\partial}{\partial r} \left ( r^2 \dfrac {\partial}{\partial r} \psi (r , \theta , \varphi ) \right ) + 2 \mu r^2 \left [ E + \dfrac {e^2}{4 \pi \epsilon _0 r } \right ] \psi (r , \theta , \varphi ) = $$

$$ - \hbar^2 \left [ \dfrac {1}{\sin \theta } \dfrac {\partial}{\partial \theta } \left ( \sin \theta \dfrac {\partial}{\partial \theta} \right ) + \dfrac {1}{\sin ^2 \theta} \dfrac {\partial ^2}{\partial \varphi ^2} \right ] \psi (r , \theta , \varphi ) $$ {eq:6.1.5} n=5

Manipulating the Schrödinger equation in this way helps us recognize the square of the angular momentum operator in Equation [ref:eq:6.1.5]. The square of the angular momentum operator in Equation [ref:eq:6.1.6].

$$ \hat {M} ^2 = -\hbar ^2 \left [\dfrac {1}{\sin \theta } \dfrac {\partial}{\partial \theta } \left ( \sin \theta \dfrac {\partial}{\partial \theta} \right ) + \dfrac {1}{\sin ^2 \theta} \dfrac {\partial ^2}{\partial \varphi ^2} \right ] $$ {eq:6.1.6} n=6

Substituting Equation [ref:eq:6.1.6] into Equation [ref:eq:6.1.5] produces

$$ \hbar ^2 \dfrac {\partial}{\partial r } \left ( r^2 \dfrac {\partial}{\partial r} \psi (r , \theta , \varphi ) \right ) + 2 \mu r^2 [ E - \hat {V} ] \psi (r , \theta , \varphi ) = \hat {M} ^2 \psi (r, \theta , \varphi ) $$ {eq:6.1.7} n=7

:::exercise {exr:6.1.2}

Show the algebraic steps going from Equation [ref:eq:6.1.4] to [ref:eq:6.1.5] and finally to [ref:eq:6.1.7]. Justify the statement that the rotational and radial motion are separated in Equation [ref:eq:6.1.7].
:::

Since the angular momentum operator does not involve the radial variable, $r$, we can separate variables in Equation [ref:eq:6.1.7] by using a product wavefunction, as we did previously for rigid rotors. We know that the eigenfunctions of the angular momentum operator are the Spherical Harmonic functions (Table M4), $Y (\theta , \varphi )$, so a good choice for a product function is

$$ \psi (r , \theta , \varphi ) = R (r) Y (\theta , \varphi ) $$ {eq:6.1.8} n=8

> The Spherical Harmonic functions provide information about where the electron is around the proton, and the radial function $R(r)$ describes how far the electron is away from the proton.

To separate variables, substitute the product function, Equation [ref:eq:6.1.8] into Equation [ref:eq:6.1.7], evaluate partial derivatives, divide each side by R(r) $Y (\theta, \varphi )$, and set each side of that resulting equation equal to a constant $\lambda$.

$$ \begin{align} \dfrac {\hbar ^2}{R (r)} \dfrac {\partial}{\partial r} r^2 \dfrac {\partial}{\partial r} R(r) + \dfrac {2 \mu r^2}{R (r)} [ E - V ] R (r) &= \lambda  \\[4pt] \dfrac {1}{Y (\theta , \varphi )} \hat {M} ^2 Y (\theta , \varphi ) &= \lambda  \end{align} $$ {eq:6.1.9} n=9 {eq:6.1.10} n=9

Equations [ref:eq:6.1.9] and [ref:eq:6.1.10] represent the radial differential equation and the angular differential equation, respectively. As we describe below, they are solved separately to give the $Y (\theta , \varphi )$ angular functions and the R(r) radial functions.

:::exercise {exr:6.1.3}

Complete the steps leading from Equations [ref:eq:6.1.7] to [ref:eq:6.1.9] and [ref:eq:6.1.10].
:::

Rearranging Equation [ref:eq:6.1.10] yields

$$ \hat {M} ^2 Y^{m_l}_l (\theta , \varphi ) = \lambda Y^{m_l}_l (\theta , \varphi ) $$ {eq:6.1.11} n=10

where we have added the indices $l$ and $m_l$ to identify a particular spherical harmonic function. Note that the notation has changed from that used with the Rigid Rotor; it is customary to use $J$ and $m_J$ to represent the angular momentum quantum numbers for rotational states, but for electronic states, it is customary to use $l$ and $m_l$ to represent the same thing. Furthermore, the electronic angular momentum is designated by $L$ and the corresponding operator is called $\hat {L}$. In complete electronic notation, Equation [ref:eq:6.1.11] is

$$ \hat {L} ^2 Y^{m_l}_l (\theta , \varphi ) = \lambda Y^{m_l}_l (\theta , \varphi ) $$ {eq:6.1.12} n=11

Equation [ref:eq:6.1.12] says that $Y^{m_l}_l (\theta , \varphi )$ must be an eigenfunction of the angular momentum operator $\hat {L} ^2$ with eigenvalue λ. We know from the discussion of the Rigid Rotor that the eigenvalue $λ$ is $J(J+1)ħ^2$, or in electronic notation, $l (l + 1) \hbar ^2$. Consequently, Equation [ref:eq:6.1.12] becomes

$$ \hat {L} ^2 Y^{m_l}_l (\theta , \varphi ) = l (l + 1) \hbar ^2 Y^{m_l}_l (\theta , \varphi ) $$ {eq:6.1.13} n=12

Using this value for λ and rearranging Equation [ref:eq:6.1.9], we obtain

$$ - \dfrac {\hbar ^2}{2 \mu r^2} \dfrac {\partial}{\partial r} r^2 \dfrac {\partial}{\partial r} R(r) + \left [ \dfrac {l(l +1) \hbar ^2}{2 \mu r^2} + V (r) - E \right ] R (r) = 0 $$ {eq:6.1.14} n=13

:::exercise {exr:6.1.4}

Write the steps leading from Equation [ref:eq:6.1.9] to Equation [ref:eq:6.1.14].
:::

The details for solving Equation [ref:eq:6.1.14] are provided elsewhere, but the procedure and consequences are similar to previously examined cases. As for the harmonic oscillator, an asymptotic solution (valid at large $r$) is found, and then the complete solutions are written as products of the asymptotic solution and polynomials arising from sequential truncations of a power series expansion.

## Contributors and Attributions {section:attributions}

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("[Quantum States of Atoms and Molecules](http://pubs.acs.org/doi/abs/10.1021/ed082p1880.2)")
