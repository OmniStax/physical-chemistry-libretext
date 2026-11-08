<!-- LibreTexts page 13444: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08:_Multielectron_Atoms/8.06:_Antisymmetric_Wavefunctions_can_be_Represented_by_Slater_Determinants -->
# Antisymmetric Wavefunctions can be Represented by Slater Determinants

## Learning Objectives {section:objectives}

- Understand how the Pauli Exclusion principle affects the electronic configuration of mulit-electron atoms
- Understand how determinantal wavefunctions (Slater determinents) ensure the proper symmetry to electron permutation required by Pauli Exclusion Principle.
- Connect the electron permutation symmetry requirement to multi-electron wavefunctions to the Aufbau principle taught in general chemistry courses

Let’s try to construct an antisymmetric function that describes the two electrons in the ground state of helium. Blindly following the first statement of the Pauli Exclusion Principle, then each electron in a multi-electron atom {term:must} be described by a different spin-orbital. For the ground-state helium atom, this gives a $1s^22s^02p^0$ configuration (Figure 8.6.1).

> FIGURE {fig:8.6.1} src=media/124755-HeGS1.png width=223px
> alt: Diagram showing electron energy levels: 1s at the bottom, followed by 2s, and 2p at the top with lines representing orbitals.
> caption: Electron configuration for ground state of the helium atom.

We try constructing a simple product wavefunction for helium using two different spin-orbitals. Both have the 1s spatial component, but one has spin function $\alpha$ and the other has spin function $\beta$ so the product wavefunction matches the form of the ground state electron configuration for He, $1s^2$.

$$ | \psi (\mathbf{r}_1, \mathbf{r}_2 ) \rangle = \varphi _{1s}\alpha (\mathbf{r}_1) \varphi _{1s}\beta ( \mathbf{r}_2) $$ {eq:8.6.1} n=1

After permutation of the electrons, this becomes

$$ | \psi ( \mathbf{r}_2,\mathbf{r}_1 ) \rangle = \varphi _{1s}\alpha ( \mathbf{r}_2) \varphi _{1s}\beta (\mathbf{r}_1) $$ {eq:8.6.2} n=2

which is different from the starting function since $\varphi _{1s\alpha}$ and $\varphi _{1s\beta}$ are different spin-orbital functions. Hence, the simple product wavefunction in Equation [ref:eq:8.6.1] does not satisfy the indistinguishability requirement since an antisymmetric function must produce the same function multiplied by (–1) after permutation of two electrons, and that is not the case here. We must try something else.

To avoid getting a totally different function when we permute the electrons, we can make {term:a linear combination of functions}. A very simple way of taking a linear combination involves making a new function by simply adding or subtracting functions. The function that is created by subtracting the right-hand side of Equation [ref:eq:8.6.2] from the right-hand side of Equation [ref:eq:8.6.1] has the desired antisymmetric behavior. The constant on the right-hand side accounts for the fact that the total wavefunction must be normalized.

$$ | \psi (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} [ \varphi _{1s}\alpha (\mathbf{r}_1) \varphi _{1s}\beta ( \mathbf{r}_2) - \varphi _{1s} \alpha( \mathbf{r}_2) \varphi _{1s} \beta (\mathbf{r}_1)] $$ {eq:8.6.3} n=3

​ In this orbital approximation, a single electron is held in a single s*pin-orbital* with an orbital component (e.g., the $1s$ orbital) determined by the $n$, $l$, $m_l$ quantum numbers and a spin component determined by the $m_s$ quantum number.

The wavefunction in Equation [ref:eq:8.6.3] can be decomposed into spatial and spin components:

$$ | \psi (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} \underbrace{[ \varphi _{1s}(1) \varphi _{1s}(2)]}_{\text{spatial component}} \underbrace{[ \alpha(1) \beta( 2) - \alpha( 2) \beta(1)]}_{\text{spin component}} $$ {eq:8.6.3B} n=4

:::example {ex:8.6.1} Symmetry to Electron Permutation

Show that the linear combination of spin-orbitals in Equation [ref:eq:8.6.3] is antisymmetric with respect to permutation of the two electrons.

{term:Hint}

Replace the minus sign with a plus sign (i.e. take the positive linear combination of the same two functions) and show that the resultant linear combination is symmetric.

**Solution**

First a reminder of permutation symmetries:

- If the wavefunction is symmetric with respect to permutation of the two electrons then
   
   $$ \left|\psi (\mathbf{r}_1, \mathbf{r}_2) \rangle=\right| \psi(\mathbf{r}_2, \mathbf{r}_1)\rangle $$
- If the wavefunction is antisymmetric with respect to permutation of the two electrons then
   
   $$ \left|\psi(\mathbf{r}_1, \mathbf{r}_2) \rangle= - \right| \psi(\mathbf{r}_2, \mathbf{r}_1)\rangle $$

We start with the original wavefunction

$$ | \psi (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} [ \varphi _{1s\alpha}(\mathbf{r}_1) \varphi _{1s\beta}( \mathbf{r}_2) - \varphi _{1s\alpha}( \mathbf{r}_2) \varphi _{1s\beta}(\mathbf{r}_1)] $$

and flip the position of electron 1 with electron 2 and vice versa

$$ | \psi (\mathbf{r}_2, \mathbf{r}_1) \rangle = \dfrac {1}{\sqrt {2}} [ \varphi _{1s\alpha}(\mathbf{r}_2) \varphi _{1s\beta}( \mathbf{r}_1) - \varphi _{1s\alpha}( \mathbf{r}_1) \varphi _{1s\beta}(\mathbf{r}_2)] $$ {eq:permute1} n=5

We then we ask if we can rearrange the left side of Equation [ref:eq:permute1] to either become $+ | \psi(\mathbf{r}_1, \mathbf{r}_2)\rangle$ (symmetric to permutation) or $- | \psi(\mathbf{r}_1, \mathbf{r}_2)\rangle$ (antisymmetric to permutation).

$$ | \psi (\mathbf{r}_2, \mathbf{r}_1) \rangle = \dfrac {1}{\sqrt {2}} [ - \varphi _{1s\alpha}( \mathbf{r}_1) \varphi _{1s\beta}(\mathbf{r}_2) + \varphi _{1s\alpha}(\mathbf{r}_2) \varphi _{1s\beta}( \mathbf{r}_1) ] $$

or

$$ | \psi (\mathbf{r}_2, \mathbf{r}_1) \rangle = - \dfrac {1}{\sqrt {2}} [ \varphi _{1s\alpha}( \mathbf{r}_1) \varphi _{1s\beta}(\mathbf{r}_2) - \varphi _{1s\alpha}(\mathbf{r}_2) \varphi _{1s\beta}( \mathbf{r}_1) ] $$

This is just the negative of the original wavefunction, therefore

$$ | \psi (\mathbf{r}_2, \mathbf{r}_1) \rangle = - | \psi (\mathbf{r}_1, \mathbf{r}_2) \rangle $$

The wavefunction is antisymemtric.
:::

:::exercise {exr:8.6.1} Symmetry

Is this linear combination of spin-orbitals

$$ | \psi (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} [ \varphi _{1s\alpha}(\mathbf{r}_1) \varphi _{1s\beta}( \mathbf{r}_2) + \varphi _{1s\alpha}( \mathbf{r}_2) \varphi _{1s\beta}(\mathbf{r}_1)] $$

symmetric or antisymmetric with respect to permutation of the two electrons?

**Answer**

Symmetric
:::

The electronic configuration of the first excited state of He is $1s^12s^12p^0$ and we can envision four microstates for this configuration (Figure 8.6.2). As spected, the wavefunctions associated for of these microstate must satisfy indistinguishability requirement just like the ground state.

> FIGURE {fig:8.6.2} src=media/124756-HeGS_-_Copy.png width=1139px
> alt: Diagram showing various forms of horizontal and vertical lines with varying styles, marked with arrows and labels for clarity.
> caption: Electron configurations for first-excited state of the helium atom.

These electron configurations are used to construct four possible excited-state two-electron wavefunctions (but not necessarily in a one-to-one correspondence):

$$ \begin{align} | \psi_1 (\mathbf{r}_1, \mathbf{r}_2) \rangle &= \dfrac {1}2 \underbrace{[ \varphi _{1s}(1) \varphi _{2s}(2)+\varphi _{1s}(2) \varphi _{2s}(1)]}_{\text{spatial component}} \underbrace{[ \alpha(1) \beta( 2) - \alpha( 2) \beta(1)]}_{\text{spin component}}  \\[4pt] | \psi_2 (\mathbf{r}_1, \mathbf{r}_2) \rangle &= \dfrac {1}{\sqrt {2}} \underbrace{[ \varphi _{1s}(1) \varphi _{2s}(2) - \varphi _{1s}(2) \varphi _{2s}(1)]}_{\text{spatial component}} \underbrace{[ \alpha(1) \alpha( 2)]}_{\text{spin component}}  \\[4pt] | \psi_3 (\mathbf{r}_1, \mathbf{r}_2) \rangle &= \dfrac {1}{\sqrt {2}} \underbrace{[ \varphi _{1s}(1) \varphi _{2s}(2) - \varphi _{1s}(2) \varphi _{2s}(1)]}_{\text{spatial component}} \underbrace{[ \alpha(1) \beta( 2) + \alpha( 2) \beta(1)]}_{\text{spin component}}  \\[4pt] | \psi_4 (\mathbf{r}_1, \mathbf{r}_2) \rangle &= \dfrac {1}2 \underbrace{[ \varphi _{1s}(1) \varphi _{2s}(2) - \varphi _{1s}(2) \varphi _{2s}(1)]}_{\text{spatial component}} \underbrace{[ \beta(1) \beta( 2)]}_{\text{spin component}}  \end{align} $$ {eq:8.6.3C1} n=6 {eq:8.6.3C2} n=6 {eq:8.6.3C3} n=6 {eq:8.6.3C4} n=6

All four wavefunctions are antisymmetric as required for fermionic wavefunctions (which is left to an exercise). Wavefunctions $| \psi_2 \rangle$ and $| \psi_4 \rangle$ correspond to the two electrons both having spin up or both having spin down (Configurations 2 and 3 in Figure 8.6.2, respectively). Wavefunctions $| \psi_1 \rangle$ and $| \psi_3 \rangle$ are more complicated and are antisymmetric (Configuration 1 - Configuration 4) and symmetric combinations (Configuration 1 + 4). That is, a single electron configuration does not describe the wavefunction. For many electrons, this ad hoc construction procedure would obviously become unwieldy. However, there is an elegant way to construct an antisymmetric wavefunction for a system of $N$ identical particles.

## Determinantal Wavefunctions

A linear combination that describes an appropriately antisymmetrized multi-electron wavefunction for any desired orbital configuration is easy to construct for a two-electron system. However, interesting chemical systems usually contain more than two electrons. For these multi-electron systems a relatively simple scheme for constructing an antisymmetric wavefunction from a product of one-electron functions is to write the wavefunction in the form of a determinant. John Slater introduced this idea so the determinant is called a {term:Slater determinant}.

:::note [emphasis]

John C. Slater introduced the determinants in 1929 as a means of ensuring the antisymmetry of a wavefunction, however the determinantal wavefunction first appeared three years earlier independently in Heisenberg's and Dirac's papers.
:::

The Slater determinant for the two-electron ground-state wavefunction of helium is

$$ | \psi (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} \begin {vmatrix} \varphi _{1s} (1) \alpha (1) & \varphi _{1s} (1) \beta (1) \\ \varphi _{1s} (2) \alpha (2) & \varphi _{1s} (2) \beta (2) \end {vmatrix} $$ {eq:8.6.4} n=7

A shorthand notation for the determinant in Equation [ref:eq:8.6.4] is then

$$ | \psi (\mathbf{r}_1 , \mathbf{r}_2) \rangle = 2^{-\frac {1}{2}} Det | \varphi _{1s\alpha} (\mathbf{r}_1) \varphi _{1s\beta} ( \mathbf{r}_2) | $$ {eq:8.6.5} n=8

The determinant is written so the electron coordinate changes in going from one row to the next, and the spin orbital changes in going from one column to the next. The advantage of having this recipe is clear if you try to construct an antisymmetric wavefunction that describes the orbital configuration for uranium! Note that the normalization constant is $(N!)^{-\frac {1}{2}}$ for $N$ electrons.

The generalized Slater determinant for a multi-electrom atom with $N$ electrons is then

$$ \psi(\mathbf{r}_1, \mathbf{r}_2, \ldots, \mathbf{r}_N)=\dfrac{1}{\sqrt{N!}} \left| \begin{matrix} \varphi_1(\mathbf{r}_1) & \varphi_2(\mathbf{r}_1) & \cdots & \varphi_N(\mathbf{r}_1) \\ \varphi_1(\mathbf{r}_2) & \varphi_2(\mathbf{r}_2) & \cdots & \varphi_N(\mathbf{r}_2) \\ \vdots & \vdots & \ddots & \vdots \\ \varphi_1(\mathbf{r}_N) & \varphi_2(\mathbf{r}_N) & \cdots & \varphi_N(\mathbf{r}_N) \end{matrix} \right| $$ {eq:5.6.96} n=9

:::example {ex:8.6.2} Helium Atom

Expand the Slater determinant in Equation [ref:eq:8.6.4] for the $\ce{He}$ atom.

**Solution**

To expand the Slater determinant of the Helium atom, the wavefunction in the form of a two-electron system:

$$ | \psi (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} \begin {vmatrix} \varphi _{1s} (1) \alpha (1) & \varphi _{1s} (1) \beta (1) \\ \varphi _{1s} (2) \alpha (2) & \varphi _{1s} (2) \beta (2) \end {vmatrix} $$

This is a simple expansion exercise of a $2 \times 2$ determinant

$$ | \psi (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} \left[ \varphi _{1s} (1) \alpha (1) \varphi _{1s} (2) \beta (2) - \varphi _{1s} (2) \alpha (2) \varphi _{1s} (1) \beta (1) \right] $$

It is not unexpected that the determinant wavefunction in Equation [ref:eq:8.6.4] is the same as the form for the helium wavefunction that is given in Equation [ref:eq:8.6.3].
:::

:::exercise {exr:8.6.2} Lithium Atom

Write and expand the Slater determinant for the ground-state $\ce{Li}$ atom.

**Answer**

Slater determinant for $\ce{Li}$ atom:

$$ \psi(1,2,3)=\frac{1}{\sqrt{6}} \operatorname{det}\left(\begin{array}{ccc} {\varphi _{1s} \alpha(1)} & {\varphi _{1s} \beta(1)} & {\varphi _{2s} \alpha(1)} \\ \varphi _{1s} \alpha(2) & {\varphi _{1s} \beta(2)} & {\varphi _{2s} \alpha(2)} \\ {\varphi _{1s} \alpha(3)} & {\varphi _{1s} \beta(3)} & {\varphi _{2s} \alpha(3)} \end{array}\right) $$

Expansion of Slater determinant:

$$ \psi(1,2,3)=\frac{1}{\sqrt{6}}[\varphi _{1s} \alpha(1) \varphi _{1s} \beta(2) \varphi _{2s} \alpha(3)-\varphi _{1s} \alpha(1) \varphi _{1s} \beta(3) \varphi _{2s} \alpha(2)+ \varphi _{1s} \alpha(3) \varphi _{1s} \beta(1) \varphi _{2s} \alpha(2) - \varphi _{1s} \alpha(3) \varphi _{1s} \beta(2) \varphi _{1s} \alpha(1)+ \varphi _{1s} \alpha(2) \varphi _{1s} \beta(3) \varphi _{2s} \alpha(3) ] $$

Note that this is also a valid ground state wavefunction

$$ \psi(1,2,3)=\frac{1}{\sqrt{6}} \operatorname{det}\left(\begin{array}{ccc} {\varphi _{1s} \alpha(1)} & {\varphi _{1s} \beta(1)} & {\varphi _{2s} \beta(1)} \\ \varphi _{1s} \alpha(2) & {\varphi _{1s} \beta(2)} & {\varphi _{2s} \beta(2)} \\ {\varphi _{1s} \alpha(3)} & {\varphi _{1s} \beta(3)} & {\varphi _{2s} \beta(3)} \end{array}\right) $$

What is the difference between these two wavefunctions?
:::

Now that we have seen how acceptable multi-electron wavefunctions can be constructed, it is time to revisit the “guide” statement of conceptual understanding with which we began our deeper consideration of electron indistinguishability and the Pauli Exclusion Principle. What does a multi-electron wavefunction constructed by taking specific linear combinations of product wavefunctions mean for our physical picture of the electrons in multi-electron atoms? Overall, the antisymmetrized product function describes the configuration (the orbitals, regions of electron density) for the multi-electron atom. Because of the requirement that electrons be indistinguishable, we cannot visualize specific electrons assigned to specific spin-orbitals. Instead, we construct functions that allow each electron’s probability distribution to be dispersed across each spin-orbital. The total charge density described by any one spin-orbital cannot exceed one electron’s worth of charge, and each electron in the system is contributing a portion of that charge density.

The four configurations in Figure 8.6.2 for first-excited state of the helium atom can be expressed as the following Slater Determinants

$$ | \phi_a (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} \begin {vmatrix} \varphi _{1s} (1) \alpha (1) & \varphi _{2s} (1) \beta(1) \\ \varphi _{1s} (2) \alpha (2) & \varphi _{2s} (2) \beta (2) \end {vmatrix} $$ {eq:8.6.10A} n=10

$$ | \phi_b (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} \begin {vmatrix} \varphi _{1s} (1) \alpha (1) & \varphi _{2s} (1) \alpha (1) \\ \varphi _{1s} (2) \alpha (2) & \varphi _{2s} (2) \alpha(2) \end {vmatrix} $$ {eq:8.6.10B} n=11

$$ | \phi_c (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} \begin {vmatrix} \varphi _{1s} (1) \beta(1) & \varphi _{2s} (1) \alpha(1) \\ \varphi _{1s} (2) \beta(2) & \varphi _{2s} (2) \alpha(2) \end {vmatrix} $$ {eq:8.6.10D} n=12

$$ | \phi_d (\mathbf{r}_1, \mathbf{r}_2) \rangle = \dfrac {1}{\sqrt {2}} \begin {vmatrix} \varphi _{1s} (1) \beta(1) & \varphi _{2s} (1) \beta (1) \\ \varphi _{1s} (2) \beta(2) & \varphi _{2s} (2) \beta (2) \end {vmatrix} $$ {eq:8.6.10C} n=13

Slater determinants are constructed by arranging spinorbitals in columns and electron labels in rows and are normalized by dividing by $\sqrt{N!}$, where $N$ is the number of occupied spinorbitals. As you can imagine, the algebra required to compute integrals involving Slater determinants is extremely difficult. It is therefore most important that you realize several things about these states so that you can avoid unnecessary algebra:

- A Slater determinant corresponds to a single electron configuration diagram (Figure 8.6.2). Furthermore, recall that for the excited states of helium we had a problem writing certain stick diagrams as a (space)x(spin) product and had to make linear combinations of certain states to force things to separate (Equation [ref:eq:8.6.3C2] and [ref:eq:8.6.3C4]). Because of the direct correspondence of configuration diagrams and Slater determinants, the same pitfall arises here: Slater determinants sometimes may not be representable as a (space)x(spin) product, in which case a linear combination of Slater determinants must be used instead. This generally only happens for systems with unpaired electrons (like several of the Helium excited-states).
- A Slater determinant is anti-symmetric upon exchange of any two electrons. We recall that if we take a matrix and interchange two its rows, the determinant changes sign.

The wavefunctions in [ref:eq:8.6.3C1]-[ref:eq:8.6.3C4] can be expressed in term of the four determinants in Equations [ref:eq:8.6.10A]-[ref:eq:8.6.10C].

$$ \begin{align*} | \psi_2 \rangle &= |\phi_b \rangle \\[4pt] &= \dfrac {1}{\sqrt {2}} \begin {vmatrix} \varphi _{1s} (1) \alpha (1) & \varphi _{2s} (1) \alpha (1) \\ \varphi _{1s} (2) \alpha (2) & \varphi _{2s} (2) \alpha(2) \end {vmatrix} \end{align*} $$

$$ \begin{align*} | \psi_4 \rangle &= |\phi_d \rangle \\[4pt] &= \dfrac {1}{\sqrt {2}} \begin {vmatrix} \varphi _{1s} (1) \beta(1) & \varphi _{2s} (1) \beta (1) \\ \varphi _{1s} (2) \beta(2) & \varphi _{2s} (2) \beta (2) \end {vmatrix} \end{align*} $$

but the wavefunctions that represent combinations of spinorbitals and hence combinations of electron configurations (e.g., igure 8.6.2 ) are combinations of Slater determinants (Equation [ref:eq:8.6.10A]-[ref:eq:8.6.10D])

$$ \begin{align*} | \psi_1 \rangle & = |\phi_a \rangle - |\phi_c \rangle \\[4pt] &= \dfrac {1}{2} \left( \begin {vmatrix} \varphi _{1s} (1) \alpha (1) & \varphi _{2s} (1) \beta(1) \\ \varphi _{1s} (2) \alpha (2) & \varphi _{2s} (2) \beta (2) \end {vmatrix} - \begin {vmatrix} \varphi _{1s} (1) \beta(1) & \varphi _{2s} (1) \alpha(1) \\ \varphi _{1s} (2) \beta(2) & \varphi _{2s} (2) \alpha(2) \end {vmatrix} \right) \end{align*} $$

$$ \begin{align*} | \psi_3 \rangle &= |\phi_a \rangle + |\phi_c \rangle \\[4pt] &= \dfrac {1}{2} \left( \begin {vmatrix} \varphi _{1s} (1) \alpha (1) & \varphi _{2s} (1) \beta(1) \\ \varphi _{1s} (2) \alpha (2) & \varphi _{2s} (2) \beta (2) \end {vmatrix} + \begin {vmatrix} \varphi _{1s} (1) \beta(1) & \varphi _{2s} (1) \alpha(1) \\ \varphi _{1s} (2) \beta(2) & \varphi _{2s} (2) \alpha(2) \end {vmatrix} \right) \end{align*} $$

Note the expected change in the normalization constants.

:::example {ex:8.6.3} Carbon Atom

Write the Slater determinant for the ground-state carbon atom. If you expanded this determinant, how many terms would be in the linear combination of functions?

**Solution**

Carbon has 6 electrons which occupy the 1s 2s and 2p orbitals. Each row in the determinant represents a different electron and each column a unique spin-obital where the electron could be found. There are 6 rows, 1 for each electron, and 6 columns, with the two possible p orbitals both alpha (spin up), in the determinate. There are two columns for each s orbital to account for the alpha and beta spin possibilities. There are two different p orbitals because the electrons in their ground state will be in the different p orbitals and both spin up. N=6 so the normalization constant out front is 1 divided by the square-root of 6!

$$ \begin{align*}\psi(1,2,3,4,5,6)=\frac{1}{6!^{1/2}}\begin{vmatrix}\varphi _{1s} (1) \alpha (1) & \varphi _{1s} (1) \beta (1) & \varphi _{2s} (1) \alpha (1) & \varphi _{2s} (1) \beta (1) & \varphi _{2px} (1) \alpha (1) & \varphi _{2py} (1) \alpha (1) \\ \varphi _{1s} (2) \alpha (2) & \varphi _{1s} (2) \beta (2) & \varphi _{2s} (2) \alpha (2) & \varphi _{2s} (2) \beta (2) & \varphi _{2px} (2) \alpha (2) & \varphi _{2py} (2) \alpha (2) \\ \varphi _{1s} (3) \alpha (3) & \varphi _{1s} (3) \beta (3) & \varphi _{2s} (3) \alpha (3) & \varphi _{2s} (3) \beta (3) & \varphi _{2px} (3) \alpha (3) & \varphi _{2py} (3) \alpha (3) \\ \varphi _{1s} (4) \alpha (4) & \varphi _{1s} (4) \beta (4) & \varphi _{2s} (4) \alpha (4) & \varphi _{2s} (4) \beta (4) & \varphi _{2px} (4) \alpha (4) & \varphi _{2py} (4) \alpha (4)\\ \varphi _{1s} (5) \alpha (5) & \varphi _{1s} (5) \beta (5) & \varphi _{2s} (5) \alpha (5) & \varphi _{2s} (5) \beta (5) & \varphi _{2px} (5) \alpha (5) & \varphi _{2py} (5) \alpha (5)\\ \varphi _{1s} (6) \alpha (6) & \varphi _{1s} (6) \beta (6) & \varphi _{2s} (6) \alpha (6) & \varphi _{2s} (6) \beta (6) & \varphi _{2px} (6) \alpha (6) & \varphi _{2py} (6) \alpha (6)\end{vmatrix} \end{align*} $$

Expanding this determinant would result in a linear combination of functions containing 720 terms. An expanded determinant will contain N! factorial terms, where N is the dimension of the matrix.
:::

:::exercise {exr:8.6.3A} Excited-State of Helium Atom

Write the Slater determinant for the $1s^12s^1$ excited state orbital configuration of the helium atom.

**Answer**

Since there are 2 electrons in question, the Slater determinant should have 2 rows and 2 columns exactly. Additionally, this means the normalization constant is $1/\sqrt{2}$.

Each element of the determinant is a different combination of the spatial component and the spin component of the $1 s^{1} 2 s^{1}$ atomic orbitals

$$ \frac{1}{\sqrt{2}}\left[\begin{array}{cc} {\varphi _{1_s}(1) \alpha(1)} & {\varphi {2_s}(1) \beta(1)} \\ {\varphi {1_s}(2) \alpha(2)} & {\varphi {2_s}(2) \beta(2)} \end{array}\right] $$
:::

:::exercise {exr:8.6.3B}

Critique the energy level diagram and shorthand electron configuration notation from the perspective of the indistinguishability criterion. Can you imagine a way to represent the wavefunction expressed as a Slater determinant in a schematic or shorthand notation that more accurately represents the electrons? (This is not a solved problem!)
:::
