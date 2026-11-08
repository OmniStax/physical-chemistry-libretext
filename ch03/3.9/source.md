<!-- LibreTexts page 13401: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03:_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.09:_A_Particle_in_a_Three-Dimensional_Box -->
# A Particle in a Three-Dimensional Box

## Learning Objectives {section:objectives}

- To demonstrate how the particle in 1-D box problem can extend to a particle in a 3D box
- Introduction to nodal surfaces (e.g., nodal planes)

The quantum particle in the 1D box problem can be expanded to consider a particle within a higher dimensions as demonstrated elsewhere for a quantum particle in a 2D box. Here we continue the expansion into a particle trapped in a 3D box with three lengths $L_x$, $L_y$, and $L_z$. As with the other systems, there is NO FORCE (i.e., no potential) acting on the particles *inside* the box (Figure 3.9.1).

> FIGURE {fig:3.9.1} src=media/345734-3.12.1_(1).svg
> alt: A transparent yellow cube with a circular hole on one face, sitting in a 3D coordinate system.
> caption: A particle in 3D box with three lengths $L_x$, $L_y$, and $L_z$. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)

The potential for the particle inside the box

$$ V(\vec{r}) = 0 $$

- $0 \leq x \leq L_x$
- $0 \leq y \leq L_y$
- $0 \leq z \leq L_z$
- $L_x < x < 0$
- $L_y < y < 0$
- $L_z < z < 0$

$\vec{r}$ is the vector with all three components along the three axes of the 3-D box: $\vec{r} = L_x\hat{x} + L_y\hat{y} + L_z\hat{z}$. When the potential energy is infinite, then the wavefunction equals zero. When the potential energy is zero, then the wavefunction obeys the Time-Independent Schrödinger Equation

$$ -\dfrac{\hbar^{2}}{2m}\nabla^{2}\psi(r) + V(r)\psi(r) = E\psi(r) $$ {eq:3.9.1} n=1

Since we are dealing with a 3-dimensional figure, we need to add the 3 different axes into the Schrondinger equation:

$$ -\dfrac{\hbar^{2}}{2m}\left(\dfrac{d^{2}\psi(r)}{dx^{2}} + \dfrac{d^{2}\psi(r)}{dy^{2}} + \dfrac{d^{2}\psi(r)}{dz^{2}}\right) = E\psi(r) $$ {eq:3.9.2} n=2

The easiest way in solving this partial differential equation is by having the wavefunction equal to a {term:product} of individual function for each independent variable (e.g., the Separation of Variables technique):

$$ \psi{(x,y,z)} = X(x)Y(y)Z(z) $$ {eq:3.9.3} n=3

Now each function has its own variable:

- $X(x)$ is a function of variable $x$ only
- $Y(y)$ is a function of variable $y$ only
- $Z(z)$ is a function of variable $z$ only

Now substitute Equation [ref:eq:3.9.3] into Equation [ref:eq:3.9.2] and divide it by the $xyz$ product:

$$ \dfrac{d^{2}\psi}{dx^{2}} = YZ\dfrac{d^{2}X}{dx^{2}} \Rightarrow \dfrac{1}{X}\dfrac{d^{2}X}{dx^{2}} $$

$$ \dfrac{d^{2}\psi}{dy^{2}} = XZ\dfrac{d^{2}Y}{dy^{2}} \Rightarrow \dfrac{1}{Y}\dfrac{d^{2}Y}{dy^{2}} $$

$$ \dfrac{d^{2}\psi}{dz^{2}} = XY\dfrac{d^{2}Z}{dz^{2}} \Rightarrow \dfrac{1}{Z}\dfrac{d^{2}Z}{dz^{2}} $$

$$ \left(-\dfrac{\hbar^{2}}{2mX} \dfrac{d^{2}X}{dx^{2}}\right) + \left(-\dfrac{\hbar^{2}}{2mY} \dfrac{d^{2}Y}{dy^{2}}\right) + \left(-\dfrac{\hbar^{2}}{2mZ} \dfrac{d^{2}Z}{dz^{2}}\right) = E $$ {eq:3.9.4} n=4

$E$ is an energy constant, and is the sum of $x$, $y$, and $z$. For this to work, each term must equal its own constant. For example,

$$ \dfrac{d^{2}X}{dx^{2}} + \dfrac{2m}{\hbar^{2}} \varepsilon_{x}X = 0 $$

Now separate each term in Equation [ref:eq:3.9.4] to equal zero:

$\dfrac{d^{2}X}{dx^{2}} + \dfrac{2m}{\hbar^{2}} \varepsilon_{x}X = 0$

$\dfrac{d^{2}Y}{dy^{2}} + \dfrac{2m}{\hbar^{2}} \varepsilon_{y}Y = 0$

$\dfrac{d^{2}Z}{dz^{2}} + \dfrac{2m}{\hbar^{2}} \varepsilon_{z}Z = 0$

Now we can add all the energies together to get the total energy:

$$ \varepsilon_{x}+ \varepsilon_{y} + \varepsilon_{z} = E $$ {eq:3.9.6} n=5

Do these equations look familiar? They should because we have now reduced the 3D box into three particle in a 1D box problems!

$$ \dfrac{d^{2}X}{dx^{2}} + \dfrac{2m}{\hbar^{2}} E_{x}X = 0 \approx \dfrac{d^{2}\psi}{dx^{2}} = -\dfrac{4\pi^{2}}{\lambda^{2}}\psi $$ {eq:3.9.7} n=6

Now the equations are very similar to a 1-D box and the boundary conditions are identical, i.e.,

$$ n = 1, 2,..\infty $$

Use the normalization wavefunction equation for each variable:

$$ \psi(x) = \begin{cases} \sqrt{\dfrac{2}{L_x}}\sin{\dfrac{n \pi x}{L_x}} & \mbox{if } 0 \leq x \leq L \\ 0 & \mbox{if } {L < x < 0} \end{cases} $$

Normalization wavefunction equation for each variable (that substitute into Equation [ref:eq:3.9.3]):

$$ X(x) = \sqrt{\dfrac{2}{L_x}} \sin \left( \dfrac{n_{x}\pi x}{L_x} \right) $$ {eq:3.9.8a} n=7

$$ Y(y) = \sqrt{\dfrac{2}{L_y}} \sin \left(\dfrac{n_{y}\pi y}{L_y} \right) $$ {eq:3.9.8b} n=8

$$ Z(z) = \sqrt{\dfrac{2}{L_z}} \sin \left( \dfrac{n_{z}\pi z}{L_z} \right) $$ {eq:3.9.8c} n=9

The limits of the three quantum numbers

- $n_{x} = 1, 2, 3, ...\infty$
- $n_{y} = 1, 2, 3, ...\infty$
- $n_{z} = 1, 2, 3, ...\infty$

For each constant use the de Broglie Energy equation:

$$ \varepsilon_{x} = \dfrac{n_{x}^{2}h^{2}}{8mL_x^{2}} $$ {eq:3.9.9} n=10

with $n_{x} = 1...\infty$

Do the same for variables $n_y$ and $n_z$. Combine Equation [ref:eq:3.9.3] with Equations [ref:eq:3.9.8a]-[ref:eq:3.9.8c] to find the wavefunctions inside a 3D box.

$$ \psi(r) = \sqrt{\dfrac{8}{V}}\sin \left( \dfrac{n_{x} \pi x}{L_x} \right) \sin \left(\dfrac{n_{y} \pi y}{L_y}\right) \sin \left(\dfrac{ n_{z} \pi z}{L_z} \right) $$ {eq:3D wave} n=11

with

$$ V = \underbrace{L_x \times L_y \times L_z}_{\text{volume of box}} $$

To find the Total Energy, add Equation [ref:eq:3.9.9] and Equation [ref:eq:3.9.6].

$$ E_{n_x,n_y,n_z} = \dfrac{h^{2}}{8m}\left(\dfrac{n_{x}^{2}}{L_x^{2}} + \dfrac{n_{y}^{2}}{L_y^{2}} + \dfrac{n_{z}^{2}}{L_z^{2}}\right) $$ {eq:3.9.10} n=12

Notice the similarity between the energies a particle in a 3D box (Equation [ref:eq:3.9.10]) and a 1D box.

## Degeneracy in a 3D Cube

The energy of the particle in a 3-D cube (i.e., $L_x=L_y= L$) in the *ground state* is given by Equation [ref:eq:3.9.10] with $n_x=1$, $n_y=1$, and $n_z=1$. This energy ($E_{1,1,1}$) is hence

$$ E_{1,1,1} = \dfrac{3 h^{2}}{8mL^2} $$

The ground state has only one wavefunction and no other state has this specific energy; the ground state and the energy level are said to be {term:non-degenerate}. However, in the 3-D cubical box potential the energy of a state depends upon the sum of the squares of the quantum numbers (Equation [ref:eq:3D wave]). The particle having a particular value of energy in the excited state *MAY* has several different stationary states or wavefunctions. If so, these states and energy eigenvalues are said to be {term:degenerate}.

For the first excited state, three combinations of the quantum numbers $(n_x,\, n_y, \, n_z )$ are $(2,\,1,\,1),\, (1,2,1),\, (1,1,2)$. The sum of squares of the quantum numbers in each combination is same (equal to 6). Each wavefunction has same energy:

$$ E_{2,1,1} =E_{1,2,1} = E_{1,1,2} = \dfrac{6 h^{2}}{8mL^2} $$

Corresponding to these combinations three different wavefunctions and {term:three} different states are possible. Hence, the first excited state is said to be three-fold or triply degenerate. The number of independent wavefunctions for the stationary states of an energy level is called as the {term:degree of degeneracy} of the energy level. The value of energy levels with the corresponding combinations and sum of squares of the quantum numbers

$$ n^2 \,= \, n_x^2+n_y^2+n_z^2 $$

as well as the degree of degeneracy are depicted in Table 3.9.1.

> TABLE {tab:1} cols=9 irregular
> caption: Table 3.9.1: Degeneracy properties of the particle in a 3-D cube with $L_x=L_y= L$.

| $n_x^2+n_y^2+n_z^2$ | {span=6}Combinations of Degeneracy<br> ($n_x$, $n_y$, $n_z$) | Total Energy<br> ($E_{n_x,n_y,n_z}$) | Degree of Degeneracy |
| 3 | (1,1,1) |  |  |  |  |  | $\dfrac{3 h^{2}}{8mL^2}$ | 1 |
| 6 | (2,1,1) | (1,2,1) | (1,1,2) |  |  |  | $\dfrac{6 h^{2}}{8mL^2}$ | 3 |
| 9 | (2,2,1) | (1,2,2) | (2,1,2) |  |  |  | $\dfrac{9 h^{2}}{8mL^2}$ | 3 |
| 11 | (3,1,1) | (1,3,1) | (1,1,3) |  |  |  | $\dfrac{11 h^{2}}{8mL^2}$ | 3 |
| 12 | (2,2,2) |  |  |  |  |  | $\dfrac{12 h^{2}}{8mL^2}$ | 1 |
| 14 | (3,2,1) | (3,1,2) | (2,3,1) | (2,1,3) | (1,3,2) | (1,2,3) | $\dfrac{14 h^{2}}{8mL^2}$ | 6 |
| 17 | (2,2,3) | (3,2,2) | (2,3,2) |  |  |  | $\dfrac{17 h^{2}}{8mL^2}$ | 3 |
| 18 | (1,1,4) | (1,4,1) | (4,1,1) |  |  |  | $\dfrac{18 h^{2}}{8mL^2}$ | 3 |
| 19 | (1,3,3) | (3,1,3) | (3,3,1) |  |  |  | $\dfrac{19 h^{2}}{8mL^2}$ | 3 |
| 21 | (1,2,4) | (1,4,2) | (2,1,4) | (2,4,1) | (4,1,2) | (4,2,1) | $\dfrac{21 h^{2}}{8mL^2}$ | 6 |

:::example {ex:3.9.1} Accidental Degeneracies

When is there degeneracy in a 3-D box when none of the sides are of equal length (i.e., $L_x \neq L_y \neq L_z$)?

**Solution**

From simple inspection of Equation [ref:eq:3.9.10] or Table 3.9.1, it is clear that degeneracy originates from different combinations of $n_x^2/L_x^2$, $n_y^2/L_y^2$ and $n_z^2/L_z^2$ that give the same value. These will occur at common multiples of at least two of these quantities (the [Least Common Multiple](https://math.libretexts.org/TextMaps/Map%3A_Prealgebra_(OpenStax)/2%3A_Introduction_to_the_Language_of_Algebra/2.5%3A_Prime_Factorization_and_the_Least_Common_Multiple_(Part_1)) is one example). For example

if

$$ \dfrac{n_x^2}{L_x^2} = \dfrac{n_y^2}{L_y^2} $$

there will be a degeneracy. Also degeneracies will exist if

$$ \dfrac{n_y^2}{L_y^2} = \dfrac{n_z^2}{L_z^2} $$

or if

$$ \dfrac{n_x^2}{L_x^2} = \dfrac{n_z^2}{L_z^2} $$

and especially if

$$ \dfrac{n_x^2}{L_x^2} = \dfrac{n_y^2}{L_y^2} = \dfrac{n_z^2}{L_z^2} . $$

There are two general kinds of degeneracies in quantum mechanics: degeneracies due to a symmetry (i.e., $L_x=L_y$) and accidental degeneracies like those above.
:::

:::exercise {exr:3.9.1}

The 6<sup>th</sup> energy level of a particle in a 3D Cube box is 6-fold degenerate.

a. What is the energy of the 7th energy level?
b. What is the degeneracy of the 7th energy level?

**Answer a**

$\dfrac{17 h^{2}}{8mL^2}$

**Answer b**

three-fold (i.e., there are three wavefunctions that share the same energy.
:::

## References

1. Atkins, Peter. Physical Chemistry 5th Ed. USA. 1994.
2. Fitts, Donald. Principles of Quantum Mechanics. United Kingdom, Cambridge. University Press. 1999
3. McQuarrie. Donald. Physical Chemistry A Molecular Approach. Sausalito, CA. University Science Books. 1997.
4. Riggs. N. V. Quantum Chemistry. Toronto, Ontario. The Macmillan Company. 1969
5. [C. A. Hollingsworth, Accidental Degeneracies of the Particle in a Box, J. Chem. Educ., 1990, 67 (12), p 999](https://doi.org/10.1021/ed067p999)
