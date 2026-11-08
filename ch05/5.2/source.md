<!-- LibreTexts page 13414: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05:_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.02:_The_Equation_for_a_Harmonic-Oscillator_Model_of_a_Diatomic_Molecule_Contains_the_Reduced_Mass_of_the_Molecule -->
# The Equation for a Harmonic-Oscillator Model of a Diatomic Molecule Contains the Reduced Mass of the Molecule

For studying the energetics of molecular vibration we take the simplest example, a diatomic heteronuclear molecule $\ce{AB}$. Let the respective masses of atoms $\ce{A}$ and $\ce{B}$ be $m_A$ and $m_B$. For diatomic molecules, we define the reduced mass $\mu_{AB}$ by:

$$ \mu_{AB}=\dfrac{m_A\, m_B}{m_A+m_B} $$ {eq:5.2.1} n=1

Reduced mass is the representation of a two-body system as a single-body one. When the motion (displacement, vibrational, rotational) of two bodies are only under mutual interactions, the inertial mass of the moving body with respect to the body at rest can be simplified to a reduced mass.

## Reduced Mass

Viewing the multi-body system as a single particle allows the separation of the motion: vibration and rotation, of the particle from the displacement of the center of mass. This approach greatly simplifies many calculations and problems.

> FIGURE {fig:5.2.1} src=media/343782-Fig_5.2.1.svg
> alt: Diagram showing three axes with arrows indicating movement and interactions between colored spheres at the ends, illustrating a physical concept.
> caption: a) the individual vectors to the particles $m_1$ and $m_2$ in the coordinate space and the resultant vector. b) center of mass. c) reduced mass. (CC BY-NC; Ümit Kaya via LibreTexts)

This concept is readily used in the general motion of diatomics, i.e. simple harmonic oscillator (vibrational displacement between two bodies, following Hooke's Law), the rigid rotor approximation (the moment of inertia about the center of mass of a two-body system), spectroscopy, and many other applications.

:::example {ex:5.2.1} Reduced Mass

Determine the reduced mass of the two body system of a proton and electron with $m_{proton} = 1.6727 \times 10^{-27}\, kg$ and $m_{electron} = 9.110 \times 10^{-31}\, kg$).

**Answer**

$$ \begin{align*} \mu_{pe} &= \dfrac{(1.6727 \times 10^{-27})(9.110 \times 10^{-31})}{1.6727 \times 10^{-27} + 9.110 \times 10^{-31}} \\[4pt] &= 9.105 \times 10^{-31} kg \end{align*} $$
:::

## The Quantum Harmonic Oscillator

The classical Harmonic Oscillator approximation is a simple yet powerful representation of the energetics of an oscillating spring system. Central to this model is the formulation of the quadratic potential energy

$$ V(x) \approx \dfrac {1}{2} kx^2 $$ {eq:potential} n=2

One problem with this classical formulation is that it is not general. We cannot use it, for example, to describe vibrations of diatomic molecules, where quantum effects are important. This require the formulation for Schrödinger Equation using Equation [ref:eq:potential].

$$ \hat{H} | \psi \rangle = \left[ \dfrac {-\hbar^2}{2\mu} \dfrac {d^2 }{d x^2} + \dfrac {1}{2}kx^2 \right ] | \psi \rangle = E|\psi \rangle $$

Solving this quantum harmonic oscillator is appreciably harder than solving the Schrödinger Equation for the simpler particle-in-the-box model and is outside the scope of this text. However, as with most quantum modules (and in contrast to the classical harmonic oscillator), the energies are quantized in terms of a quantum number ($v$ in this case):

$$ \begin{align} E_v &= \hbar \left(\sqrt {\dfrac {k}{\mu}} \right) \left(v + \dfrac {1}{2} \right) \\[4pt] &= h \nu \left(v+\dfrac {1}{2} \right) \end{align} $$ n=3

with the natural vibrational frequency of the system given as

$$ \nu = \dfrac{1}{2 \pi}\sqrt {\dfrac {k}{\mu}} $$ {eq:freq} n=4

and the mass, $\mu$, is the reduced mass of the system (Equation [ref:eq:5.2.1]).

:::note [warning] Warning

Be careful to distinguish $\nu$, the symbol for the natural frequency (as a Greek nu) from $v$ the quantum harmonic oscillator quantum number (Latin $v$).
:::

:::note [warning] Caution: Do Not Use Atomic Weights to Calculate Reduced Masses

The vibrational frequencies given by Equation [ref:eq:freq] depend on the force constants ($k$) and the atomic masses of the vibrating nuclei via the reduced mass ($\mu$). It should be clear that the substitution of one isotope of an atom in a molecule for another isotope will affect the atomic masses and therefore the reduced mass (via Equation [ref:eq:5.2.1]) and therefore the vibrational frequencies (via Equation [ref:eq:freq]).

It is important to remember that the Periodic Table gives only atomic weights of elements, which are scaled averages of atoms normally encountered in the laboratory (Table 5.2.1). To properly discuss vibrational frequencies of molecules, we need to know (or denote) the specific isotopes in the molecule. Check Table A4 for that information.

> TABLE {tab:1} cols=3
> caption: Table 5.2.1: Atomic Mass and Isotope Composition. Consult Table A4 for more extensive table.

| isotope | atomic mass (in amu) | isotopic abundance (%) |
| --- | --- | --- |
| <sup>1</sup>H | 1.007825 | 99.985 |
| <sup>2</sup>H | 2.0140 | 0.015 |
| <sup>35</sup>Cl | 35.968852 | 75.77 |
| <sup>37</sup>Cl | 36.965903 | 24.23 |
| <sup>79</sup>Br | 78.918336 | 50.69 |
| <sup>81</sup>Br | 80.916289 | 49.31 |
:::

:::example {ex:5.2.1} Isotope Effect

What are the reduced mass for $\ce{^1H^35Cl}$ and $\ce{^1H^37Cl}$? If the spring constants for vibrations of both molecules are equal and estimated at $478 \,N/m$, what are the natural vibrational frequencies of these two molecules?

**Solution**

The periodic table gives an atomic weight of 35.45 amu for chlorine, but remember this is the the average of the natural abundances of different chlorine isotopes which is dictated primary by two isotopes: $\ce{^35Cl}$ and $\ce{^37Cl}$. For this problem, we need the exact mass of the $\ce{^1H}$, $\ce{^35Cl}$, and $\ce{^37Cl}$ isotopes. Check Table A4 for that information.

For $\ce{^1H^35Cl}$:

$$ \begin{align*} \text{Reduced mass} &= \dfrac{m_1m_2}{m_1+m_2} \\[4pt] &= \dfrac{m_\ce{H}m_\ce{^35Cl}}{m_\ce{H}+m_\ce{^35Cl}} \\[4pt] &= \dfrac{(1.0078)(34.9688)}{1.0078 + 34.9688)}\, amu \\[4pt] &= 0.9796\,amu\end{align*} $$

or when converted into kg is $1.629 \times 10^{-27}\,kg$.

For $\ce{^1H^37Cl}$:

$$ \begin{align*} \text{Reduced mass} &= \dfrac{m_1m_2}{m_1+m_2} \\[4pt] &= \dfrac{m_\ce{H}m_\ce{^37Cl}}{m_\ce{H}+m_\ce{^37Cl}} \\[4pt] &= \dfrac{(1.0078)(36.965)}{1.0078 + 36.965)}\, amu \\[4pt] &= 0.9810\,amu\end{align*} $$

or when converted into kg is $1.6291 \times 10^{-27}\,kg$. This is only 0.29% bigger.

Equation [ref:eq:freq] is used to predict the respective vibrational frequencies of these two molecules.

For $\ce{^1H^35Cl}$:

$$ \begin{align*} \nu &= \dfrac{1}{2 \pi}\sqrt {\dfrac {k}{\mu}} \\[4pt] &= \dfrac{1}{2 \pi}\sqrt {\dfrac {478 \,N/m}{1.629 \times 10^{-27}\,kg}} \\[4pt] &= 8.6394×10^{13} s^{-1} \end{align*} $$

For $\ce{^1H^37Cl}$:

$$ \begin{align*} \nu &= \dfrac{1}{2 \pi}\sqrt {\dfrac {k}{\mu}} \\[4pt] &= \dfrac{1}{2 \pi}\sqrt {\dfrac {478 \,N/m}{1.629 \times 10^{-27}\,kg}} \\[4pt] &= 8.621×10^{13} s^{-1} \end{align*} $$

As with the differences in the reduced masses, the differences in the vibrational frequencies of these two molecules is quite small. However, high resolution IR spectroscopy can easily distinguish the vibrations between these two molecules. Exercise 5.2.1 will demonstrate that this "{term:isotope effect}" is not always a small effect.
:::

:::exercise {exr:5.2.1} Hydrogen Chloride

The force constant is weakly sensitive to the specific isotopes in a molecule (and we typically assume it is isotope independent). If the $k = 478 \,N/m$ for both $\ce{H^{35}Cl}$ and $\ce{H^{37}Cl}$. What are the vibration frequencies in these two diatomic molecules.

**Answer**

$\ce{H^{35}Cl}$: 2886 cm<sup>-1</sup>

$\ce{D^{35}Cl}$: 2081 cm<sup>-1</sup>
:::
