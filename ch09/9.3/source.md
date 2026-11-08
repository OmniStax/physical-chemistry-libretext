<!-- LibreTexts page 13454: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09:_Chemical_Bonding_in_Diatomic_Molecules/9.03:_The_Overlap_Integral -->
# The Overlap Integral

For $\ce{H2^{+}}$, the simplest molecule, we must determine the values for the coefficients, $C_A$ and $C_B$ for the LCAO approximation for the molecular orbital as a linear combination of the two atomic orbitals

$$ |\psi (r) \rangle = C_A 1s_A (r) + C_B1s_B (r) $$

We could use the linear variational method to find a value for these coefficients, but for the case of $\ce{H2^{+}}$ evaluating these coefficients is easy. Since the two protons are identical, the probability that the electron is near $A$ must equal the probability that the electron is near $B$. These probabilities are given by $|C_A|^2$ and $|C_B|^2$, respectively. Consider two possibilities that satisfy the condition

$$ |C_A|^2 = |C_B|^2 $$

so $C_A = C_B = C_{+}$ and $C_A = -C_B = C_{-}$. These two cases produce two molecular orbitals:

$$ \underbrace{| \psi _+ \rangle = C_+(1s_A + 1s_B)}_{\text{bonding molecular orbital}} $$ {eq:9.3.1a} n=1

and

$$ \underbrace{| \psi _{-} \rangle = C_{-}(1s_A - 1s_B)}_{\text{antibonding molecular orbital}} $$ {eq:9.3.1b} n=2

The probability density for finding the electron at any point in space is given by $|{\psi}^2|$ and the electronic charge density is just $|e{\psi}^2|$. The important difference between $\psi _+$ and $\psi _{-}$ is that the charge density for $| \psi_+ \rangle$ is enhanced between the two protons, whereas it is diminished for $|\psi _{-} \rangle$ as shown in Figures 9.3.1. $\psi _{-}$ has a node in the middle while $| \psi_+ \rangle$ corresponds to our intuitive sense of what a chemical bond must be like. The electronic charge density is enhanced in the region between the two protons. So $|\psi_+ \rangle$ is called a *bonding molecular orbital*. If the electron were described by $|\psi _{-} \rangle$, the low charge density between the two protons would not balance the Coulomb repulsion of the protons, so $|\psi _{-} \rangle$ is called an *antibonding molecular orbital*.

Now we want to evaluate $C_+$ and $C_-$ and then calculate the energy. The bonding and antibonding character of $\psi _+$ and $\psi _{-}$ also should be reflected in the energy. If $|\psi _+ \rangle$ indeed describes a bonding orbital, then the energy of this state should be less than that of a proton and hydrogen atom that are separated. The calculation of the energy will tell us whether this simple theory predicts H<sub>2</sub><sup>+</sup> to be stable or not and also how much energy is required to dissociate this molecule.

The constants $C_+$ and $C_-$ are evaluated from the standard normalization condition:

$$ \begin{align} \int \psi ^*_{\pm} \psi _{\pm} d\tau = \left \langle \psi _{\pm} | \psi _{\pm} \right \rangle &= 1  \\[4pt] \left \langle C_{\pm} ( 1s_A \pm 1s_B ) | C_{\pm} ( 1s_A \pm 1s_B ) \right \rangle &= 1  \\[4pt] |C_\pm|^2 [ \underbrace{\langle1s_A | 1s_A \rangle }_{1} + \underbrace{\langle 1s_B | 1s_B \rangle}_{1} \pm \underbrace{ \langle1s_B | 1s_A\rangle}_{S} \pm \underbrace{ \langle1s_A | 1s_B \rangle}_{S^*}] &= 1  \end{align} $$ {eq:9.3.1} n=3 {eq:9.3.2} n=3 {eq:9.3.3} n=3

Since the atomic orbitals are normalized, the first two integrals are just 1. The last two integrals are called *overlap integrals* and are symbolized by $S$ and $S^*$, respectively, since one is the complex conjugate of the other.

The overlap integrals are telling us to take the value of 1s<sub>B</sub> at a point multiply by the value of 1s<sub>A</sub> at that point and sum (integrate) such a product over all of space (Figure 9.3.1). If the functions do not overlap, i.e. if one is zero when the other one is not and vice versa, these integrals then will be zero. It also is possible in general for such integrals to be zero even if the functions overlap because of the cancelation of positive and negative contributions.

> FIGURE {fig:9.3.1} src=media/51101-300px-Orbital_overlap.png
> alt: Graph illustrating wave functions with distinct regions; top shows non-zero and bottom shows zero everywhere points.
> caption: The wavefunctions of atomic orbitals decrease exponentially with distance. Orbital overlap is non-zero when two atoms are close together, as illustrated for 1s orbitals in the upper figure. The lower figure shows orbitals that are too far away to interact. In this case both $S$ is close to zero.

If the overlap integral is zero, for whatever reason, the functions are said to be *orthogonal*. Notice that the overlap integral ranges from 0 to 1 as the separation between the protons varies from $R = ∞$ to $R = 0$. Clearly when the protons are infinite distance apart, there is no overlap, and when $R = 0$ both functions are centered on one nucleus and $\left \langle 1s_A | 1s_B \right \rangle$ becomes identical to $\left \langle 1s_B | 1s_A \right \rangle$, which is normalized to 1, because $1s_A = 1s_B$.

With these considerations and using the fact that $1s$ wavefunctions are real so

$$ \left \langle 1s_A | 1s_B \right \rangle = \left \langle 1s_B | 1s_A \right \rangle = S $$ {eq:9.3.4} n=4

Equation [ref:eq:9.3.3] becomes

$$ |C_{\pm}|^2 (2 \pm 2S ) = 1 $$ {eq:9.3.5} n=5

The solution to Equation [ref:eq:9.3.5] is given by

$$ C_{\pm} = \dfrac{1}{\sqrt{2(1 \pm S )}} $$ {eq:9.3.6} n=6

Hence, the normalized molecular orbitals in Equations [ref:eq:9.3.1a] and [ref:eq:9.3.1a] are

$$ | \psi _+\rangle = \dfrac{1}{\sqrt{2(1 + S )}} (1s_A + 1s_B) $$ {eq:9.3.7a} n=7

and

$$ |\psi _{-} \rangle = \dfrac{1}{\sqrt{2(1 - S )}} (1s_A - 1s_B) $$ {eq:9.3.7b} n=8

The energies associated with these wavefunctions requires a bit more effort to calculate though as demonstrated in the following section.

For the overlap integral of two 1s orbitals from the hydrogen dimer discussed above is difficult to evaluate analytically and is explained here. The final answer is:

$$ \begin{align} S(R) &= \left \langle 1s_A | 1s_B \right \rangle \\[4pt] &= e^{-R/a_o} \left( 1 +\dfrac{R}{a_o} + \dfrac{R^2}{3a_o^2} \right)  \end{align} $$ {eq:overlap} n=9

The overlap integral for two 1s atomic orbitals of hydrogen is graphically displayed below

> FIGURE {fig:9.3.2} src=media/91362-ch3_3-11.jpg
> alt: Graph displaying a decay curve with labeled peaks and corresponding distributions below, illustrating statistical properties.
> caption: The overlap integral at different proton separations.

:::example {ex:9.3.1}

Calculate the difference in the electronic charge density (C/pm<sup>3</sup>) at a point halfway between the two nuclei for $\ce{H2^{+}}$ for an electron in the bonding molecular orbital compared to one in the antibonding molecular orbital.

**Solution**

The electronic charge density is calculated with the formula $|e{\psi}^2|$ where $e = 1.602 \times 10^{-19} C$

*a: Bonding Molecular Orbital*

First, squaring the bonding molecular orbital (Equation [ref:eq:9.3.7a]) gives us:

$$ \begin{align*} \psi_+^2 &=\dfrac{1}{2(1 + S )} (1s_A+1s_B)^2 \\[4pt] &= \dfrac{1}{2(1 + S )} \dfrac{1}{\pi a_0^3}\Big(e^{-r_A/a_0}+e^{-r_B/a_0}\Big)^2 \\[4pt] &= \dfrac{1}{2(1 + S )} \dfrac{1}{\pi a_0^3} \\[4pt] &= (0.561)^2\times\left(\dfrac{1}{\pi\times(52.9\;\text{pm})^3}\right)=6.7672\times10^{-7}\;\text{pm}^{-3} \end{align*} $$

(Note: The value of $C^2$ is obtained from equation 9.3.12 and the value of S is from Equation [ref:eq:overlap])

To find the density at halfway between A and B for the bonding orbital evalulate at 1/2 R,

$r_A=\dfrac{1}{2}R$ and $r_B=\dfrac{1}{2}R$

$$ \psi_+^2=3.7\times10^{-7}\;\text{pm}^{-3} $$

Now multiply this answer by e to generate the electronic charge density,

$$ P = \Big(3.7\times10^{-7}\;\text{pm}^{-3}\Big)\times\Big(1.602\times10^{-19}\Big)\;\text{C} = 5.93\times10^{-26} C/pm^{3} $$

*b: Antibonding Molecular Orbital*

To find the halfway between A and B for the anti-bonding orbital at $r_A=\dfrac{1}{2}R$ and $r_B=\dfrac{1}{2}R$. However, simple inspection of Equation [ref:eq:9.3.7b] or Figure 9.3.1 shows this will be zero.

$$ \text{e}\psi_-^2=0 $$

Obviously, when multiplied by e, the answer is still zero. This makes logical sense as there would be no charge density between the two atoms as there lies a node with no probability of finding an electron.
:::

:::exercise {exr:9.3.1}

Show that for two arbitrary functions $\left \langle \varphi _B | \varphi _A \right \rangle$ is the complex conjugate of $\left \langle \varphi _A | \varphi _B \right \rangle$ and that these two integrals are equal if the functions are real.
:::

## Contributors and Attributions {section:attributions}

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("[Quantum States of Atoms and Molecules](http://pubs.acs.org/doi/abs/10.1021/ed082p1880.2)")
