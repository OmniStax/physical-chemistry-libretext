<!-- LibreTexts page 13415: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05:_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.03:_The_Harmonic_Oscillator_Approximates_Molecular_Vibrations -->
# The Harmonic Oscillator Approximates Molecular Vibrations

## Learning Objectives {section:objectives}

- Understand the utility and limits of using the quantum harmonic oscillator as a model for molecular vibrations

The quantum harmonic oscillator is one of the most important model systems in quantum mechanics. This is due in partially to the fact that an arbitrary potential curve $V(x)$ can usually be *approximated* as a harmonic potential at the vicinity of a stable equilibrium point. Furthermore, it is one of the few quantum-mechanical systems for which an exact, analytical solution exists. Solving other potentials typically require either approximations or numerical approaches to identify the corresponding eigenstates and eigenvalues (i.e., wavefunctions and energies).

A general potential energy ($V(x)$) curve for a molecular vibration can be expanded as a [Taylor series](https://math.libretexts.org/Bookshelves/Calculus/Book%3A_Calculus_(OpenStax)/10%3A_Power_Series/10.3%3A_Taylor_and_Maclaurin_Series)

$$ V(x) = V(x_0) + \left. \dfrac {d V(x)}{d x} \right|_{x_0}^{x} (x - x_0) + \left. \dfrac {1}{2!} \dfrac {d^2 V(x)}{d x^2} \right|_{x_0}^{x} (x - x_0)^2 + \ldots + \left. \dfrac {1}{n!} \dfrac {d^n V(x)}{d x^n} \right|_{x_0}^{x} (x - x_0)^n $$ {eq:5.3.1} n=1

It is important to note that this approximation is only good for $x$ near $x_0$, and that $x_0$ stands for the equilibrium bond distance. $V(x)$ is often (but not always) shortened to the cubic term and can be rewritten as

$$ V(x) = \dfrac {1}{2} kx^2 + \dfrac {1}{6} \gamma x^3 $$ {eq:5.3.2} n=2

where $V(x_0) = 0$, $k$ is the harmonic force constant (harmonic term), and $\gamma$ is the first anharmonic term (i.e., cubic)*.* As Figure 5.3.2 demonstrates, the harmonic oscillator (red curve) is a good approximation for the exact potential energy of a vibration (blue curve).

> FIGURE {fig:5.3.1} src=media/9030-Anharmonic_oscillator.gif
> alt: Graph showing energy levels (E) and potential (U) versus distance (r), with labeled curves and a spring-mass system illustration.
> caption: The vibration of the $\ce{HCl}$ molecule is really an anharmonic oscillator, but can be approximated as a harmonic oscillator at low energies. In this animation, $\ce{HCl}$ is vibrating at the $E_3$ energy level. $D_0$ is dissociation energy here, $r_0$ bond length, $V$ potential energy. Energy is expressed in wavenumbers. The hydrogen chloride molecule is attached to the coordinate system to show bond length changes on the curve. (CC BY-SA 3.0; [Darekk2](https://commons.wikimedia.org/wiki/User:Darekk2) via [Wikipedia](https://en.Wikipedia.org/wiki/Molecular_vibration#/media/File:Anharmonic_oscillator.gif)).

Adding anharmonic perturbations to the harmonic oscillator (Equation [ref:eq:5.3.2]) better describes molecular vibrations. Anharmonic oscillation is defined as the deviation of a system from harmonic oscillation, or an oscillator not oscillating in simple harmonic motion. Anharmonic oscillation is described as the restoring force is no longer proportional to the displacement. Adding the cubic term (Figure 5.3.2; green curve) improves the harmonic oscillation approximation especially under greater displacement from equilibrium.

> FIGURE {fig:5.3.2} src=media/344391-5.3.2-1.svg width=428px
> alt: Graph displaying multiple curves in different colors (red, green, blue) with a central minimum point.
> part src=media/344392-5.3.2-2.svg width=290px
> alt: Graph showing curves representing functions, with plotted points and shaded areas to illustrate concepts in mathematics.
> caption: (left) Deviation from simple harmonic potential approximation (red curve) of true/exact potential (blue curve) with cubic term (green). (right) Expansion with positive or negative quartic terms. (CC BY 4.0; Ümit Kaya via LibreTexts)

Naturally, adding higher order anharmonic terms, like quartic terms (Figure 5.3.2; right) improve the approximation. Almost all diatomics have experimentally determined potentials for their lowest energy states. $\ce{H2}$, $\ce{Li2}$, $\ce{O2}$, $\ce{N2}$, and $\ce{F2}$ with terms up to $n < 10$ determined of Equation [ref:eq:5.3.1].

Figure 5.3.1 shows the the general potential with (numerically) calculated energy levels ($E_0$, $E_1$ etc.). $D_o$ is the dissociation energy, which is different from the well depth $D_e$. These vibrational energy levels of this plot can be calculated using the harmonic oscillator model (i.e., Equation 5.3.1 with the Schrödinger equation) and have the general form

$$ E_v = \left(v + \dfrac{1}{2}\right) v_e - \left(v + \dfrac{1}{2}\right)^2 v_e x_e + \left(v + \dfrac{1}{2}\right)^3 v_e y_e + \text{higher terms} $$

where $v$ is the vibrational quantum number and $x_e$ and $y_e$ are the first and second anharmonicity constants, respectively.

The $v = 0$ level is the vibrational ground state. Because this potential is less confining than a parabola used in the harmonic oscillator, the energy levels become {term:less widely} spaced at high excitation (Figure 5.3.1; top of potential).

:::note [note] Limitations of the Harmonic Oscillator Model for Molecular Vibrations

The harmonic oscillation is a great approximation of a molecular vibration, but has key limitations:

- Due to equal spacing of energy, all transitions occur at the {term:same} frequency (i.e. single line spectrum). However experimentally many lines are often observed (called overtones).
- The harmonic oscillator does not predict bond dissociation; you cannot break it no matter how much energy is introduced.
:::

:::note [note] Morse Potentials are better Approximations of Vibrational Motion

A more powerful approach than just "patching up" the harmonic oscillator solution with anharmonic corrections is to adopt a different potential ($V(x)$). One such approach is the Morse potential, named after physicist Philip M. Morse, and a better approximation for the vibrational structure of the molecule than the harmonic oscillator because it explicitly includes the effects of *bond breaking* and accounts for the anharmonicity of real bonds (Figure 5.3.4).

> FIGURE {fig:5.3.4} src=media/55788-imageedit_27_4431511387.png width=505px
> alt: Graph showing potential energy versus interatomic separation, with energy minima indicated and labeled states.
> caption: The Morse potential (blue) and harmonic oscillator potential (green). Unlike the energy levels of the harmonic oscillator potential, which are evenly spaced by ħω, the Morse potential level spacing decreases as the energy approaches the dissociation energy. The dissociation energy $D_e$ is larger than the true energy required for dissociation $D_0$ due to the zero point energy of the lowest ($v = 0$) vibrational level. from Wikipedia.

The Morse Potential is a good approximation to $V(x)$ and is best when looking for a general formula for all $x$ from 0 to $\infty$, not just applicable for the local region around the $x_o$:

$$ V(x) = D(1-e^{-\beta (x - x_0)})^2 $$ {eq:5.3.8} n=3

with $V(x = x_0) = 0$ and $V(x = \infty) = D$.

The Morse Potential (Figure 5.3.4) approaches zero at infinite $r_e$ and equals $-D_e$ at its minimum (i.e. $r=r_e$). It clearly shows that the Morse potential is the combination of a short-range repulsion term (small $r$ values) and a long-range attractive term (large $r$ values).

Solving the Schrödinger Equation with the Morse Potential (Equation [ref:eq:5.3.8]) is not trivial, but can be done analytically.

$$ \hat{H}|\psi \rangle = E_n | \psi \rangle $$

with

$$ \begin{align*} \hat{H} &= \hat{T} + \hat{V} \\[4pt] &= \dfrac{- \hbar ^2 d^2}{2m \;dx^2} + D(1-e^{-\beta (x - x_0)})^2 \end{align*} $$

The solutions and energies for the Morse potential will not be used in this course and will not be discussed in more detail.
:::
