<!-- LibreTexts page 13439: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08:_Multielectron_Atoms/8.01:_Atomic_and_Molecular_Calculations_are_Expressed_in_Atomic_Units -->
# Atomic and Molecular Calculations are Expressed in Atomic Units

## Learning Objectives {section:objectives}

- Demonstrate how solving electron structure problems are less cluttered by switching to atomic units instead of SI units.

Atomic units (au or a.u.) form a system of natural units which is especially convenient for atomic physics calculations. Atomic units, like SI units, have a unit of mass, a unit of length, and so on. However, the use and notation is somewhat different from SI. Suppose a particle with a mass of *m* has 3.4 times the mass of electron. The value of mass $m$ can be written in three ways:

- $m=3.4\; m_e$: This is the clearest notation (but least common), where the atomic unit is included explicitly as a symbol.
- $m=3.4\; a.u.$: This notation is ambiguous, but is common. Here, it means that the mass $m$ is 3.4 times the atomic unit of mass. If considering a length $L$ of 3.4 times the atomic unit of length, the equation would look the same, $L= 3.4 \;a.u.$ The dimension needs to be inferred from context, which is sloppy.
- $m = 3.4$: This notation is similar to the previous one, and has the same dimensional ambiguity. It comes from formally setting the atomic units to 1 (Table 8.1.1).

This article deals with "Hartree type" of atomic units, where the numerical values of the following four fundamental physical constants are all unity by definition:

> TABLE {tab:1} cols=5
> caption: Table 8.1.1: Fundamental atomic units

| Dimension | Name | Symbol/Definition | Value in SI units | Value in Atomic Units |
| --- | --- | --- | --- | --- |
| mass | electron rest mass | $m_e$ | 9.109×10<sup>−31</sup> kg | 1 |
| charge | elementary charge | $e$ | 1.602×10<sup>−19</sup> C | 1 |
| action | reduced Planck's constant | $\hbar = \dfrac{h}{2\pi}$ | 1.054×10<sup>−34</sup> J·s | 1 |
| electric constant<sup>−1</sup> | Coulomb force constant | $\displaystyle k_e = \frac{1}{4 \pi \epsilon_o}$ | 8.987 x 10<sup>9</sup> kg·m<sup>3</sup>·s<sup>−2</sup>·C<sup>−2</sup> | 1 |

:::example {ex:8.1.1} Simplifying the Hamiltonian

Use the atomic units definitions in Table 8.1.1 to contrast the Hamiltonian for a Helium atom in Si units and in atomic units.

**Solution**

In SI units, the Hamiltonian for a Helium atom is

$$ \hat {H} = -\dfrac {\hbar ^2}{2m_e} (\nabla ^2_1 + \nabla ^2_2) -\dfrac {2e^2}{4 \pi \epsilon _0 r_1} - \dfrac {2e^2}{4 \pi \epsilon _0 r_2} + \dfrac {e^2}{4 \pi \epsilon _0 r_{12}} $$

In atomic units, the same Hamiltonian

$$ \hat {H} = -\dfrac {1}{2} (\nabla ^2_1 + \nabla ^2_2) - \dfrac {2}{r_1} - \dfrac {2}{r_2} + \dfrac {1}{r_{12}} $$

All the units that make the SI version of the Hamiltonian disappear to emphasize the key aspects of the operator.
:::

Atomic units are derived from certain fundamental properties of the physical world, and are free of anthropocentric considerations. It should be kept in mind that atomic units were designed for atomic-scale calculations in the present-day universe, with units normalize the reduced Planck constant and also mass and charge of the electron are set to 1, and, as a result, the speed of light in atomic units is a large value, $1/\alpha \approx 137$. For example, the orbital velocity of an electron around a small atom is of the order of 1 in atomic units. Table 8.1.2 give a few derived units. Some of them have proper names and symbols assigned, as indicated in the table.

> TABLE {tab:2} cols=6
> caption: Table 8.1.2: Derived atomic units

| Dimension | Name | Symbol | Expression | Value in SI units | Value in more common units |
| --- | --- | --- | --- | --- | --- |
| *length* | bohr | $a_o$ | $4\pi \epsilon_0 \hbar^2 / (m_\mathrm{e} e^2) = \hbar / (m_\mathrm{e} c \alpha)$ | 5.291×10<sup>−11</sup> m | 0.052 nm = 0.529 Å |
| *energy* | hartree | $E_h$ | $m_\mathrm{e} e^4/(4\pi\epsilon_0\hbar)^2 = \alpha^2 m_\mathrm{e} c^2$ | 4.359×10<sup>−18</sup> J | 27.2 eV = 627.5 kcal·mol<sup>−1</sup> |
| *time* |  |  | $\hbar / E_\mathrm{h}$ | 2.418×10<sup>−17</sup> s |  |
| *velocity* |  |  | $a_0 E_\mathrm{h} / \hbar = \alpha c$ | 2.187×10<sup>6</sup> m·s<sup>−1</sup> |  |

Atomic units are chosen to reflect the properties of electrons in atoms. This is particularly clear from the classical Bohr model of the hydrogen atom in its ground state. The ground state electron orbiting the hydrogen nucleus has (in the classical Bohr model):

- Orbital velocity = 1
- Orbital radius = 1
- Angular momentum = 1
- Orbital period = 2π
- Ionization energy = <sup>1</sup>⁄<sub>2</sub>
- Electric field (due to nucleus) = 1
- Electrical attractive force (due to nucleus) = 1
