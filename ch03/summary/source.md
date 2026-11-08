<!-- LibreTexts page 550563: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03:_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.S:_The_Schrodinger_Equation_and_a_Particle_in_a_Box_(Summary) -->
# The Schrödinger Equation and a Particle in a Box (Summary)

### Particle in a box

The Hamiltonian inside the box ($0 < x < L$) is simply:

$$ \op{H} = -\frac{\hbar}{2m}\frac{\partial^2}{\partial x^2}. $$

Substituting this Hamiltonian into the Schrödinger equation and rearranging tells us that valid wavefunctions must satisfy:

$$ \frac{\hbar}{2m}\frac{\partial^2}{\partial x^2}\ket{\psi} - E\ket{\psi} = 0, $$

subject to the boundary conditions that $\psi(0) = 0$ and $\psi(L) = 0$.

> FIGURE {fig:1.1} src=media/495297-Infinite_potential_well-en.svg width=339px
> alt: Two vertical barriers with the equation \( V(x) = \infty \) labeled on each, indicating infinite potential barriers.
> caption: Particle in a box model system

The general solution for this wave equation is

$$ \psi(x) = A \cos \frac{\sqrt{2mE}}{\hbar}x + B \sin \frac{\sqrt{2mE}}{\hbar}x. $$

The first boundary condition tells us that $A = 0$, because $\cos 0 = 1$. To satisfy the second boundary condition, we know that $\sin n\pi = 0$, and therefore $\psi(L) = 0$ when

$$ \frac{\sqrt{2mE}}{\hbar}L = n\pi \quad n = 1,2,\ldots $$

Note that $n=0$ gives a physically uninteresting solution: the wavefunction everywhere is zero. Under the Born interpretation of the wavefunction, that means there is no particle in the box at all, and that’s not what we’re interested in. Now we can solve for energy

$$ E_n = \frac{\pi^2\hbar^2n^2}{2mL^2} = \frac{h^2n^2}{8mL^2} \quad n = 1,2,\ldots $$

and substitute this into our wave equation to get (after normalizing: $\braket{\psi}{\psi}=1$)

$$ \psi_n(x) = \sqrt{\frac{2}{L}} \sin \frac{n\pi x}{L} \quad n = 1,2,\ldots, \quad 0 \leq x \leq L $$

> FIGURE {fig:1.2} src=media/495299-pib-wfns1.png width=533px
> alt: Line graph with four wavy lines in different colors (blue, red, green, purple) representing data trends over time.
> part src=media/495300-pib-wfns2.png width=533px
> alt: Graph showing multiple sinusoidal waveforms in different colors, plotted against a horizontal axis labeled 'k' and a vertical axis labeled 'Energy'.
> caption: Wavefunctions (a) and probability densities (b) for a particle in a one-dimensional box. Note that the<br> number of nodes is n - 1.

The one-dimensional particle in a box is sometimes used to estimate the energy of a $\pi$ electron in a conjugated polyene.

### Particle in a 3D box

It is straightforward to show that a particle in a 3D box is simply an extension of the 1D problem. The wavefunction $\psi(x,y,z)$ can be written as a product of independent one-dimensional functions $\phi(x)\phi(y)\phi(z)$, and the energy can consequently be shown to be $E = E_x + E_y + E_z$. This is actually an extremely important point– anytime a wavefunction can be expressed as a product of 1D functions, the individual components can be treated separately, and the total energy computed from a sum of the individual energies.

The particle in a 3D box, therefore, has (normalized) wavefunctions:

$$ \psi(x,y,z) = \sqrt{\frac{8}{L_xL_yL_z}}\sin\frac{n_x \pi x}{L_x}\sin\frac{n_y \pi y}{L_y}\sin\frac{n_z \pi z}{L_z} \quad n_x,n_y,n_z = 1,2,\ldots $$

and energies

$$ E_{n_x,n_y,n_z} = \frac{h^2}{8m}\left(\frac{n_x^2}{L_x^2} + \frac{n_y^2}{L_y^2} + \frac{n_z^2}{L_z^2}\right) \quad n_x,n_y,n_z = 1,2,\ldots $$

In the special case of a particle in a cube, $L_x = L_y = L_z$, and we find that many of the states have the same energy (i.e., they are degenerate). The energies are

$$ E_{n_x,n_y,n_z} = \frac{h^2}{8mL^2}\left(n_x^2 + n_y^2 + n_z^2\right) $$

so they only depend on the sum of the squares of the $x$, $y$, and $z$ quantum numbers. If we denote the wavefunctions in Dirac notation as $\ket{n_x,n_y,n_z}$, the $\ket{1,1,2}$, $\ket{1,2,1}$, and $\ket{2,1,1}$ states all have energy $(6h^2)/(8mL^2)$. These degeneracies arise naturally as a result of the symmetry of the system, and we will explore this concept in more detail when we talk about group theory.

> FIGURE {fig:1.3} src=media/495301-pib3d.png width=469px
> alt: A simple black and white illustration of a cartoon-style cat's face with pointy ears and whiskers.
> caption: Energy levels and degeneracies of a particle in a cube.

The particle in a 3D box can be used to model the confinement energy of electrons as a function of nanoparticle size.
