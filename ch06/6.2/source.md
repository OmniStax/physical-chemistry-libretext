<!-- LibreTexts page 13427: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/06:_The_Hydrogen_Atom/6.02:_The_Wavefunctions_of_a_Rigid_Rotator_are_Called_Spherical_Harmonics -->
# The Wavefunctions of a Rigid Rotator are Called Spherical Harmonics

The solutions to the hydrogen atom Schrödinger equation are functions that are products of a spherical harmonic function and a radial function:

$$ \psi _{n, l, m_l } (r, \theta , \phi) = R_{n,l} (r) Y^{m_l}_l (\theta , \phi) $$ {eq:6.2.20} n=1

The wavefunctions for the hydrogen atom depend upon the three variables $r$, $\theta$, and $\phi$ and the three quantum numbers n, $l$, and $m_l$. The variables give the position of the electron relative to the nucleus in spherical coordinates. The absolute square of the wavefunction, $| \psi (r, \theta , \phi )|^2$, evaluated at $r$, $\theta$, and $\phi$ gives the probability density of finding the electron inside a differential volume $d \tau$, centered at the position specified by $r$, $\theta$, and $\phi$.

:::exercise {exr:6.2.1}

What is the value of the integral (in braket notation)

$$ \langle \psi (r, \theta , \phi ) | \psi (r, \theta , \phi ) \rangle \;? $$

or expanded in integral notation (in Cartesian coordinates)

$$ \int \limits_{-\infty}^{+\infty} \int \limits_{-\infty}^{+\infty} \int \limits_{-\infty}^{+\infty} | \psi (x, y , z)|^2 \,dx\,dy\,dz $$

or expanded in integral notation (in spherical coordinates)

$$ \int \limits_{0}^{+\infty} \int \limits_{0}^{\pi} \int \limits_{0}^{+2\pi} | \psi (r, \theta , \phi)|^2 r^2\sin \theta \,d\theta\, d\phi\,dr $$

**Answer**

No need to know the functional form of the hydrogen atom eigenstates in any coordinate system. If the eigenstates (i.e., solutions to the hydrogen atom Schrödinger equation) are normalized - as we normally like them- then this integral will be 1.
:::

The quantum numbers have names:

- $n$ is called the principal quantum number,
- $l$ is called the angular momentum quantum number, and
- $m_l$ is called the magnetic quantum number because (as we will see, the energy in a magnetic field depends upon $m_l$).

Often $l$ is called the azimuthal quantum number because it is a consequence of the $\theta$-equation, which involves the azimuthal angle $\Theta$, referring to the angle to the zenith. These quantum numbers have specific values that are dictated by the physical constraints or boundary conditions imposed upon the Schrödinger equation: $n$ must be an integer greater than 0, $l$ can have the values 0 to $n‑1$, and $m_l$ can have $2l + 1$ values ranging from $-l$ to $+l$ in unit or integer steps. The total number of orbitals with a particular value of $n$ is $n^2$ - i.e., this is the {term:degeneracy} of the system.

:::note [note] Wavefunction Nomenclature

The values of the quantum number $l$ usually are coded by a letter: s means 0, p means 1, d means 2, f means 3; the next codes continue alphabetically (e.g., g means $l = 4$). The quantum numbers specify the quantization of physical quantities. The discrete energies of different states of the hydrogen atom are given by $n$, the magnitude of the angular momentum is given by $l$, and one component of the angular momentum (usually chosen by chemists to be the z‑component) is given by $m_l$.
:::

The $\Phi$ function is found to have the quantum number $m$, where

$$ \Phi_m (\phi) = A_m e^{im\phi} $$

and $A_m$ is the normalization constant and $m = 0, \pm1, \pm2 ... \pm\infty$. The $\Theta$ function was solved and is known as *Legendre polynomials*, which have quantum numbers $m$ and $\ell$. When $\Theta$ and $\Phi$ are multiplied together, the product is known as {term:spherical harmonics} with labeling $Y_{J}^{m} (\theta, \phi)$.

> FIGURE {fig:6.2.1} src=media/349334-20161030161434!Spherical_Harmonics_deg5.png width=861px
> alt: 3D representations of atomic orbitals arranged in a pyramidal structure, showing varying electron density distributions.
> caption: Spherical Harmonics as commonly displayed, sorted by increasing energies and aligned for symmetry.

Figure 6.2.1 shows the spherical harmonics $Y_J^M$, which are solutions of the angular Schrödinger equation. These are explicitly written in Table 6.2.1. Notice that these functions are complex in nature.

> TABLE {tab:1} cols=5
> caption: Table 6.2.1: spherical harmonics $Y_J^M$

| $m_J$ | $J$ | $\Theta ^{m_J}_J (\theta)$ | $\Phi (\varphi)$ | $Y^{m_J}_J (\theta , \varphi)$ |
| --- | --- | --- | --- | --- |
| 0 | 0 | $\dfrac {1}{\sqrt {2}}$ | $\dfrac {1}{\sqrt {2 \pi}}$ | $\dfrac {1}{\sqrt {4 \pi}}$ |
| 0 | 1 | $\sqrt {\dfrac {3}{2}}\cos \theta$ | $\dfrac {1}{\sqrt {2 \pi}}$ | $\sqrt {\dfrac {3}{4 \pi}}\cos \theta$ |
| 1 | 1 | $\sqrt {\dfrac {3}{4}}\sin \theta$ | $\dfrac {1}{\sqrt {2 \pi}}e^{i \varphi}$ | $\sqrt {\dfrac {3}{8 \pi}}\sin \theta e^{i \varphi}$ |
| -1 | 1 | $\sqrt {\dfrac {3}{4}}\sin \theta$ | $\dfrac {1}{\sqrt {2 \pi}}e^{-i\varphi}$ | $\sqrt {\dfrac {3}{8 \pi}}\sin \theta e^{-i \varphi}$ |
| 0 | 2 | $\sqrt {\dfrac {5}{8}}(3\cos ^2 \theta - 1)$ | $\dfrac {1}{\sqrt {2 \pi}}$ | $\sqrt {\dfrac {5}{16\pi}}(3\cos ^2 \theta - 1)$ |
| 1 | 2 | $\sqrt {\dfrac {15}{4}} \sin \theta \cos \theta$ | $\dfrac {1}{\sqrt {2 \pi}}e^{i \varphi}$ | $\sqrt {\dfrac {15}{8\pi}} \sin \theta \cos \theta e^{i\varphi}$ |
| -1 | 2 | $\sqrt {\dfrac {15}{4}} \sin \theta \cos \theta$ | $\dfrac {1}{\sqrt {2 \pi}}e^{-i\varphi}$ | $\sqrt {\dfrac {15}{8\pi}} \sin \theta \cos \theta e^{-i\varphi}$ |
| 2 | 2 | $\sqrt {\dfrac {15}{16}} \sin ^2 \theta$ | $\dfrac {1}{\sqrt {2 \pi}}e^{2i\varphi}$ | $\sqrt {\dfrac {15}{32\pi}} \sin ^2 \theta e^{2i\varphi}$ |
| -2 | 2 | $\sqrt {\dfrac {15}{16}} \sin ^2 \theta$ | $\dfrac {1}{\sqrt {2 \pi}}e^{-2i\varphi}$ | $\sqrt {\dfrac {15}{32\pi}} \sin ^2 \theta e^{-2i\varphi}$ |

:::exercise {exr:6.2.2}

Consider several values for $n$, and show that the number of orbitals for each $n$ is $n^2$.
:::

:::exercise {exr:6.2.3}

Construct a table summarizing the allowed values for the quantum numbers $n$, $l$, and $m_l$. for energy levels 1 through 7 of hydrogen.
:::

:::exercise {exr:6.2.4}

The notation 3d specifies the quantum numbers for an electron in the hydrogen atom.

a. What are the values for $n$ and $l$?
b. What are the values for the energy and angular momentum?
c. What are the possible values for the magnetic quantum number?
d. What are the possible orientations for the angular momentum vector?

**Answer**

a. $n=3$ and $l=2$
b. Energy:
   
   $$ E_{n}=\frac{E_{1}}{n^{2}}=\frac{-13.6 \mathrm{eV}}{9}=-1.51 \mathrm{eV} $$
   
   and angular momentum
   
   $$ \sqrt{l(l+1)} \hbar=\sqrt{2 \times 3} \hbar=2.584 \times 10^{-34} J \cdot S $$
c. Magnetic quantum number:
   
   $$ m_{l}=-2,-1,0,1,2 $$
d. ![Graph showing ellipses along a vertical axis with points labeled at intervals, indicating directions with red arrows.](media/392737-clipboard_e5df581bd3fd4faf7ec6bad7dcfdf8938.png)
:::

## Atomic Orbitals

The hydrogen atom wavefunctions, $\psi (r, \theta , \phi )$, are called {term:atomic orbitals}. An atomic orbital is a function that describes one electron in an atom. The wavefunction with $n = 1$, $l = 0$, and $m_{l}=0$ is called the 1s orbital, and an electron that is described by this function is said to be “in” the 1s orbital, i.e. have a 1s orbital state. The constraints on $n$, $\ell$, and $m_\ell$ that are imposed during the solution of the hydrogen atom Schrödinger equation explain why there is a single 1s orbital, why there are three 2p orbitals, five 3d orbitals, etc. We will see when we consider multi-electron atoms, these constraints explain the features of the Periodic Table. In other words, the Periodic Table is a manifestation of the Schrödinger model and the physical constraints imposed to obtain the solutions to the Schrödinger equation for the hydrogen atom.

The first few solutions of the Schrödinger equation for the H atom are:

> TABLE {tab:2} cols=5
> caption: Table 6.2.1: The solutions to the Schrödinger equation for one-electron atoms and ions. $Z$ is the atomic number of the nucleus, and $\rho = \frac {Zr}{a_0}$, where $a_0$ is the Bohr radius and r is the radial variable.

|  | $n$ | $l$ | $m_l$ | $\psi_{n,l,m_l}$ |
| --- | --- | --- | --- | --- |
| $\psi_{100}$ | $1$ | $0$ | $m_{l} = 0$ | $\frac{1}{\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{3}{2}}e^{- \frac{Zr}{a_{0}}}$ |
| $\psi_{200}$ | $2$ | $0$ | $m_{l} = 0$ | $\frac{1}{\sqrt{32\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{3}{2}}\left( 2 - \frac{Zr}{a_{0}} \right)e^{- \frac{Zr}{2a_{0}}}$ |
| $\psi_{210}$ | $2$ | $1$ | $m_{l} = 0$ | $\frac{1}{\sqrt{32\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{5}{2}}re^{- \frac{Zr}{2a_{0}}}\cos\theta$ |
| $\psi_{21\pm 1}$ | $2$ | $1$ | $m_{l} = \pm 1$ | $\frac{1}{\sqrt{64\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{5}{2}}re^{- \frac{Zr}{2a_{0}}}\sin\theta e^{\pm i\phi}$ |
| $\psi_{300}$ | $3$ | $0$ | $m_{l} = 0$ | $\frac{1}{81\sqrt{3\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{3}{2}}\left( 27 - 18\frac{Zr}{a_{0}} + 2\frac{Z^2r^2}{a_{0}^2} \right)e^{- \frac{Zr}{3a_{0}}}$ |
| $\psi_{310}$ | $3$ | $1$ | $m_{l} = 0$ | $\frac{\sqrt{2}}{81\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{5}{2}}r\left( 6 - \frac{Zr}{a_{0}} \right)e^{- \frac{Zr}{3a_{0}}}\cos\theta$ |
| $\psi_{31\pm 1}$ | $3$ | $1$ | $m_{l} = \pm 1$ | $\frac{1}{81\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{5}{2}}r\left( 6 - \frac{Zr}{a_{0}} \right)e^{- \frac{Zr}{3a_{0}}}\sin\theta e^{\pm i\phi}$ |
| $\psi_{320}$ | $3$ | $2$ | $m_{l} = 0$ | $\frac{1}{81\sqrt{6\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{7}{2}}r^{2}e^{- \frac{Zr}{3a_{0}}}\left( 3\cos^{2}\theta - 1 \right)$ |
| $\psi_{32\pm 1}$ | $3$ | $2$ | $m_{l} = \pm 1$ | $\frac{1}{81\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{7}{2}}r^{2}e^{- \frac{Zr}{3a_{0}}}\sin\theta\cos\theta e^{\pm i\phi}$ |
| $\psi_{32\pm 2}$ | $3$ | $2$ | $m_{l} = \pm 2$ | $\frac{1}{162\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{7}{2}}r^{2}e^{- \frac{Zr}{3a_{0}}}\sin^{2}\theta e^{\pm 2i\phi}$ |

We can take superposition states of the solutions to obtain real wavefunctions that do not have any imaginary components:

> TABLE {tab:3} cols=5
> caption: Table 6.2.2: The real solutions to the Schrödinger equation for one-electron atoms and ions. $Z$ is the atomic number of the nucleus, and $\rho = \frac {Zr}{a_0}$, where $a_0$ is the Bohr radius and r is the radial variable.

|  | $n$ | $l$ | $m_l$ | $\psi_{n,l}$ |
| --- | --- | --- | --- | --- |
| $\psi_{1s}$ | $1$ | $0$ | $0$ | $\frac{1}{\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{3}{2}}e^{- \frac{Zr}{a_{0}}}$ |
| $\psi_{2s}$ | $2$ | $0$ | $0$ | $\frac{1}{\sqrt{32\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{3}{2}}\left( 2 - \frac{Zr}{a_{0}} \right)e^{- \frac{Zr}{2a_{0}}}$ |
| $\psi_{2p_z}$ | $2$ | $1$ | $0$ | $\frac{1}{\sqrt{32\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{5}{2}}re^{- \frac{Zr}{2a_{0}}}\cos\theta$ |
| $\psi_{2p_x}$ | $2$ | $1$ | $\pm 1$ | $\frac{1}{\sqrt{32\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{5}{2}}re^{- \frac{Zr}{2a_{0}}}\sin\theta\cos\phi$ |
| $\psi_{2p_y}$ | $2$ | $1$ | $\pm 1$ | $\frac{1}{\sqrt{32\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{5}{2}}re^{- \frac{Zr}{2a_{0}}}\sin\theta\sin\phi$ |
| $\psi_{3s}$ | $3$ | $0$ | $0$ | $\frac{1}{81\sqrt{3\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{3}{2}}\left( 27 - 18\frac{Zr}{a_{0}} + 2\frac{Z^{2}r^{2}}{a_{0}^{2}} \right)e^{- \frac{Zr}{3a_{0}}}$ |
| $\psi_{3p_z}$ | $3$ | $1$ | $0$ | $\frac{\sqrt{2}}{81\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{5}{2}}r\left( 6 - \frac{Zr}{a_{0}} \right)e^{- \frac{Zr}{3a_{0}}}\cos\theta$ |
| $\psi_{3p_x}$ | $3$ | $1$ | $\pm 1$ | $\frac{\sqrt{2}}{81\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{5}{2}}r\left( 6 - \frac{Zr}{a_{0}} \right)e^{- \frac{Zr}{3a_{0}}}\sin\theta\cos\phi$ |
| $\psi_{3p_y}$ | $3$ | $1$ | $\pm 1$ | $\frac{\sqrt{2}}{81\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{5}{2}}r\left( 6 - \frac{Zr}{a_{0}} \right)e^{- \frac{Zr}{3a_{0}}}\sin\theta\sin\phi$ |
| $\psi_{3d_{z^2}}$ | $3$ | $2$ | $0$ | $\frac{1}{81\sqrt{6\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{7}{2}}r^{2}e^{- \frac{Zr}{3a_{0}}}\left( 3\cos^{2}\theta - 1 \right)$ |
| $\psi_{3d_{xz}}$ | $3$ | $2$ | $\pm 1$ | $\frac{\sqrt{2}}{81\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{7}{2}}r^{2}e^{- \frac{Zr}{3a_{0}}}\sin\theta\cos\theta\cos\phi$ |
| $\psi_{3d_{yz}}$ | $3$ | $2$ | $\pm 1$ | $\frac{\sqrt{2}}{81\sqrt{\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{7}{2}}r^{2}e^{- \frac{Zr}{3a_{0}}}\sin\theta\cos\theta\sin\phi$ |
| $\psi_{3d_{x^2-y^2}}$ | $3$ | $2$ | $\pm 2$ | $\frac{1}{81\sqrt{2\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{7}{2}}r^{2}e^{- \frac{Zr}{3a_{0}}}\sin^{2}\theta\cos{2\phi}$ |
| $\psi_{3d_{xy}}$ | $3$ | $2$ | $\pm 2$ | $\frac{1}{81\sqrt{2\pi}}\left( \frac{Z}{a_{0}} \right)^{\frac{7}{2}}r^{2}e^{- \frac{Zr}{3a_{0}}}\sin^{2}\theta\sin{2\phi}$ |

These are the wavefunctions that are most often depicted. Visualizing the variation of an electronic wavefunction with $r$, $\theta$, and $\phi$ is important because the absolute square of the wavefunction depicts the charge distribution (electron probability density) in an atom or molecule. The charge distribution is central to chemistry because it is related to chemical reactivity. For example, an electron-deficient part of one molecule is attracted to an electron-rich region of another molecule, and such interactions play a major role in chemical interactions ranging from substitution and addition reactions to protein folding and the interaction of substrates with enzymes.

Visualizing wavefunctions and charge distributions is challenging because it requires examining the behavior of a function of three variables in three-dimensional space. This visualization is made easier by considering the radial and angular parts separately, but plotting the radial and angular parts separately do not reveal the shape of an orbital very well. The shape can be revealed better in a probability density plot. To make such a three-dimensional plot, divide space up into small volume elements, calculate $\psi^* \psi$ at the center of each volume element, and then shade, stipple or color that volume element in proportion to the magnitude of $\psi^* \psi$. Do not confuse such plots with polar plots, which look similar. Probability densities also can be represented by contour maps, as shown in Figure 6.2.2.

> FIGURE {fig:6.2.2} src=media/349331-imageedit_2_2845651548.png
> alt: Two contour plots displaying concentric patterns; left shows two elliptical peaks, right displays a more complex, wavy structure.
> caption: Contour plots in the x-y plane for the $2p_x$ and $3p_x$ orbitals of the hydrogen atom. The plots map lines of constant values of $R(r)^2$; red lines follow paths of high $R(r)^2$, blue for low $R(r)^2$. The angular function used to create the figure was a linear combination of two Spherical Harmonic functions.

Methods for separately examining the radial portions of atomic orbitals provide useful information about the distribution of charge density within the orbitals. Graphs of the radial functions, $R(r)$, for the 1s, 2s, and 2p orbitals plotted in Figure 6.2.3.

> FIGURE {fig:6.2.3} src=media/349332-imageedit_3_2436950155.png
> alt: Three graphs displayed side by side, showing various curves, with axes marked and red dotted lines representing data trends.
> caption: Radial function, $R(r)$, for the 1s, 2s, and 2p orbitals.

The 1s function in Figure 6.2.3 starts with a high positive value at the nucleus and exponentially decays to essentially zero after 5 Bohr radii. The high value at the nucleus may be surprising, but as we shall see later, the probability of finding an electron at the nucleus is vanishingly small.

Next notice how the radial function for the 2s orbital, Figure 6.2.3, goes to zero and becomes negative. This behavior reveals the presence of a radial node in the function. A radial node occurs when the radial function equals zero other than at $r = 0$ or $r = ∞$. Nodes and limiting behaviors of atomic orbital functions are both useful in identifying which orbital is being described by which wavefunction. For example, all of the s functions have non-zero wavefunction values at $r = 0$, but p, d, f and all other functions go to zero at the origin. It is useful to remember that there are $n-1-l$ radial nodes in a wavefunction, which means that a 1s orbital has no radial nodes, a 2s has one radial node, and so on.

:::exercise {exr:6.2.5}

Examine the mathematical forms of the radial wavefunctions. What feature in the functions causes some of them to go to zero at the origin while the s functions do not go to zero at the origin?
:::

:::exercise {exr:6.2.6}

What mathematical feature of each of the radial functions controls the number of radial nodes?

**Answer**

The Laguerre polynomial controls the radial nodes with the number of roots for the Laguerre polynomial is the number of radial nodes.
:::

:::exercise {exr:6.2.7} Radial Node

At what value of $r$ does the 2s radial node occur?

**Answer**

A node exists when the radial portion of the wavefunction equals 0. The radial portion of the 2s wavefunction is:

$$ R(r) = \left(\frac{1}{2 \sqrt{2}}\right)\left(\frac{Z}{\alpha_{0}}\right)^{\frac{3}{2}}(2-\rho) e^{\frac{-\rho}{2}} $$

where $\rho=\frac{Z r}{\alpha_{0}}$, $Z=1$ for the hydrogen atom and $\alpha_{0}$ is the Bohr radius.

Therefore:

$$ R(r) = \left(\frac{1}{2 \sqrt{2}}\right)\left(\frac{1}{\alpha_{0}}\right)^{\frac{3}{2}}\left(2-\frac{r}{\alpha_{0}}\right) e^{\frac{-2 r}{\alpha_{0}}} $$

For this wavefunction:

- $\left(\frac{1}{\alpha_{0}}\right)^{\frac{3}{2}}$ is a constant and will never equal 0.
- $e^{\frac{-2 r}{\alpha_{0}}}$ is an exponential, and will also never equal 0.

Therefore, our node is when $\left(2-\frac{r}{\alpha_{0}}\right)=0$ and

$$ r=2 \alpha_{0} $$
:::

:::exercise {exr:6.2.8}

Make a table that provides the energy, number of radial nodes, and the number of angular nodes and total number of nodes for each function with $n = 1$, $n=2$, and $n=3$. Identify the relationship between the energy and the number of nodes. Identify the relationship between the number of radial nodes and the number of angular nodes.

**Answer**

> TABLE {tab:4} cols=5

| Wavefunction | Energy | Total Nodes | Radial Nodes | Angular Nodes |
| --- | --- | --- | --- | --- |
| 1s | 13.6 eV | 0 | 0 | 0 |
| 2s | 3.4 eV | 1 | 1 | 0 |
| 2p | 3.4 eV | 1 | 0 | 1 |
| 3s | 1.5 eV | 2 | 2 | 0 |
| 3p | 1.5 eV | 2 | 1 | 1 |
| 3d | 1.5 eV | 2 | 0 | 2 |

The energy of the electron in each wavefunction is

$$ E = \dfrac{Z^2E_h}{2n^2} $$

The number of total nodes is (N-1\), the number of radial nodes is $N-L-1$ and the number of angular nodes is $L$.
:::

The quantity $R(r)^* R(r)$ gives the radial probability density; i.e., the probability density for the electron to be at a point located the distance $r$ from the proton. Radial probability densities for three atomic orbitals are plotted in Figure 6.2.4.

> FIGURE {fig:6.2.4} src=media/349335-imageedit_4_8711751630.png
> alt: Three graphs showing exponential decay with red dashed lines, featuring varying scales and axes.
> caption: Radial probability densities for the 1s, 2s, and 2p orbitals.

## Probabilities and Distribution Functions

When the {term:radial probability density} for every value of $r$ is multiplied by the area of the spherical surface represented by that particular value of r, we get the radial distribution function. The radial distribution function gives the probability density for an electron to be found anywhere on the surface of a sphere located a distance r from the proton. Since the area of a spherical surface is $4 \pi r^2$, the {term:radial distribution function} is given by

$$ \underbrace{4 \pi r^2 R(r) ^* R(r)}_{\text{radial probability density}} $$

Radial distribution functions are shown in Figure 6.2.5. At small values of $r$, the radial distribution function is low because the small surface area for small radii modulates the high value of the radial probability density function near the nucleus. As we increase $r$, the surface area associated with a given value of r increases, and the $r^2$ term causes the radial distribution function to increase even though the radial probability density is beginning to decrease. At large values of $r$, the exponential decay of the radial function outweighs the increase caused by the $r^2$ term and the radial distribution function decreases.

> FIGURE {fig:6.2.5} src=media/349336-imageedit_5_7755063594.png
> alt: Three graphs arranged horizontally, showing varying peak patterns in a red line plot against an x-axis.
> caption: The radial distribution function for the 1s, 2s, and 2p orbitals.

:::exercise {exr:6.2.9}

Write a quality comparison of the radial function and radial distribution function for the 2s orbital. See Figure 6.2.6.

**Answer**

$R(r)$ is the radial function of the eigenstate and $4\pi r^2 R(r)^* R(r)$ gives the radial distribution function of the distance of electron at distance $r$ from the nucleus (i.e., the probability integrated over all angles).

The radial probability function is low at small values of $r$ because of a small surface area near nucleus, for example at 2s at a small value of $r$ the radial probability function is low. At higher values of $r$ the surface area increases while radial probability density decreases, this causes the radial distribution function to increase. In contrast the radial probability density is high at small surface area and when $r$ is near the nucleus, i.e low values of $r$.
:::

> FIGURE {fig:6.2.6} src=media/15890-2s_radial_plots.gif width=411px
> alt: Abstract pattern with shades of blue, featuring scattered dark shapes and dots across a textured background.
> caption: Comparison of a) the radial distribution function and b) the radial probability density for the 2s orbital.
