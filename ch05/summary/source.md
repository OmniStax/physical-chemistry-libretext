<!-- LibreTexts page 550562: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05:_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.S:_The_Harmonic_Oscillator_and_the_Rigid_Rotor_(Summary) -->
# The Harmonic Oscillator and the Rigid Rotor (Summary)

### Harmonic Oscillator

The harmonic oscillator is the model of a particle in a quadratic potential or, equivalently, two particles whose relative displacement sits in a quadratic potential. From the standpoint of chemistry, the harmonic oscillator is the simplest model for the vibration of a diatomic molecule (and even vibrations of the normal modes of a polyatomic molecule). If the potential between the two bodies is truly quadratic, then the Schrödinger equation can be solved exactly. However, any potential that has a smooth minimum can be approximated as a harmonic potential near that minimum. For any potential $V(x)$ where $x = l - l_0$ (i.e., the displacement relative to the separation at minimum potential $l_0$), a Taylor expansion gives

$$ V(x) = V(0) + \left(\frac{dV}{dx}\right)_0x + \frac{1}{2!}\left(\frac{d^2V}{dx^2}\right)_0x^2 + \frac{1}{3!}\left(\frac{d^3V}{dx^3}\right)_0x^3 + \ldots $$ {eq:chap:intro:eq:taylorpotential} n=1

The first term can be arbitrarily set to 0, and the second term is 0 because at $x=0$, the derivative of the potential is zero (it’s a minimum). Therefore, as long as $x$ is small, we an truncate the series at the quadratic term and define the force constant $k = \left(\frac{d^2V}{dx^2}\right)_0$:

$$ V(x) \approx \frac{1}{2}kx^2. $$

For the quantum harmonic oscillator involving two bodies with reduced mass $\mu = m_1^{-1} + m_2^{-1}$ and force constant $k$ with displacement $x$, the Hamiltonian is

$$ \op{H} = -\frac{\hbar^2}{2\mu}\frac{d^2}{dx^2} + \frac{1}{2}kx^2, $$

and the Schrödinger equation tells us that the wavefunctions $\psi(x)$ must be the solutions of

$$ \frac{d^2\psi}{dx^2} + \frac{2\mu}{\hbar^2}\left(E - \frac{1}{2}kx^2\right)\psi = 0. $$

It turns out that the solutions have the general form

$$ \psi_v(x) = N_vH_v(\alpha^{1/2}x)e^{-\alpha x^2/2}, \quad v = 0,1,2,\ldots $$

where

$$ \alpha = \sqrt{\frac{k\mu}{\hbar^2}}, \quad N_v = (2^vv!)^{-1/2}\left(\frac{\alpha}{\pi}\right)^{1/4} $$

and $H_v(\alpha^{1/2}x)$ are the Hermite polynomials, which are a series of polynomials of order $v$. It is conventional to use $v$ as the quantum number for a harmonic oscillator.

If we define the angular frequency of the oscillator $\omega = \sqrt{k/\mu}$ or, alternatively, its frequency $\nu = \sqrt{k/\mu}/(2\pi)$, the energies are given by

$$ E_v = \hbar\omega\left(v+\frac{1}{2}\right) = h\nu\left(v+\frac{1}{2}\right), \quad v = 0,1,2\ldots $$

A unique feature of the harmonic oscillator is that its energy levels are evenly spaced, and that the lowest energy level is greater than the minimum of the potential. This means that even at absolute zero, the harmonic oscillator still has nonzero kinetic and potential energy, which is called zero-point energy.

> IMAGE {img:1} src=media/495296-ho.png width=439px
> alt: Graph showing wave functions and energy levels, with labels for Ψ, E, and x, depicting quantum mechanical behavior.
> caption: Wavefunctions (a) and probability densities (b) of the harmonic oscillator, along with energies.

### Rigid Rotor

The rigid rotor is the model system for both a rotating diatomic molecule and for the angular distribution of the electron in a hydrogen atom. This model starts with two bodies with reduced mass $\mu$ and a fixed separation $r$.

> FIGURE {fig:1.5} src=media/495298-rr.png width=389px
> alt: Diagram showing two masses, \( m_1 \) and \( m_2 \), in orbit around a center of mass with labeled distances.
> caption: Model of a rigid rotor.

Since there is no preferred orientation of the body in free space, the Hamiltonian only has a kinetic energy term:

$$ \op{H} = \op{T} = -\frac{\hbar^2}{2\mu}\nabla^2. $$

Because we’re dealing with rotation, it’s more natural to work in spherical coordinates, and after some tedious calculus it can be shown that:

$$ \nabla^2 = \frac{1}{r^2}\frac{\partial}{\partial r}\left( r^2 \frac{\partial}{\partial r} \right)_{\theta,\phi} + \frac{1}{r^2 \sin \theta}\frac{\partial}{\partial \theta}\left(\sin \theta \frac{\partial}{\partial \theta} \right)_{r,\phi} + \frac{1}{r^2 \sin^2 \theta}\left(\frac{\partial^2}{\partial \phi^2} \right)_{r,\theta} $$

In the rigid rotor, $r$ is constant, so we can eliminate the first term to get

$$ \nabla^2 = \frac{1}{r^2 \sin \theta}\frac{\partial}{\partial \theta}\left(\sin \theta \frac{\partial}{\partial \theta} \right)_{r,\phi} + \frac{1}{r^2 \sin^2 \theta}\left(\frac{\partial^2}{\partial \phi^2} \right)_{r,\theta} $$ {eq:chap:intro:eq:delsphere} n=2

Recall from physics that angular momentum $L = I\omega$, where $I$ is the moment of inertia and $\omega$ is the angular frequency. Relative to the center of mass, $I = m_1r_1^2 + m_2r_2^2$, and consequently in the center-of-mass frame $I = \mu r^2$. The kinetic energy of a rotating body is $T = L^2/(2I)$ (just like the linear quantity $T = p^2/(2m)$). If we now substitute Equation [ref:eq:chap:intro:eq:delsphere] into the Hamiltonian, we see

$$ \op{H} = -\frac{\hbar^2}{2I}\left[\frac{1}{\sin \theta}\frac{\partial}{\partial \theta}\left(\sin \theta \frac{\partial}{\partial \theta} \right)_{r,\phi} + \frac{1}{\sin^2 \theta}\left(\frac{\partial^2}{\partial \phi^2} \right)_{r,\theta}\right], $$

and thus we find the quantum mechanical form of the square of the angular momentum operator:

$$ \op{L}^2 = -\hbar^2\left[\frac{1}{\sin \theta}\frac{\partial}{\partial \theta}\left(\sin \theta \frac{\partial}{\partial \theta} \right)_{r,\phi} + \frac{1}{\sin^2 \theta}\left(\frac{\partial^2}{\partial \phi^2} \right)_{r,\theta}\right]. $$

The eigenfunctions of the Hamiltonian (and $\op{L}^2$) are the spherical harmonics $Y_l^m(\theta,\phi)$, where $l = 0,1,2,\ldots$ and $m = 0, \pm1, \pm2,\ldots,\pm l$. These spherical harmonics have the form:

$$ Y_l^m(\theta,\phi) = \sqrt{\frac{(2l+1)(l-|m|)!}{4\pi(l+|m|)!}}P_l^{|m|}(\cos \theta)e^{im\phi}, $$

where $P_l^{|m|}(\cos \theta)$ are the associated Legendre functions.

The energies of the rigid rotor depend only on the $l$ quantum number

$$ E_l = \frac{\hbar^2}{2I}l(l+1), \quad l = 0,1,2,\ldots, $$

and each energy level has a degeneracy of $2l+1$ arising from the possible values of the $m$ quantum number. While the quantum numbers $l$ and $m$ (often $m_l$) are used when describing the angular portion of the hydrogen atom wavefunction, typically the quantum numbers become $J$ and $m_J$ when discussing molecular rotation. They are equivalent in the case of linear molecules; for nonlinear molecules, additional quantum numbers are needed to specify the projection of the angular momentum onto some molecular axis, and the energy depends on these quantum number as well.

> FIGURE {fig:1.6} src=media/495302-rr-energy.png width=385px
> alt: A black silhouette of a cat with arched back and raised tail, facing left.
> caption: Energy level diagram of a rigid rotor. The gaps between successive levels are evenly spaced in energy.

As mentioned before, $\op{L}^2$ commutes with $\op{H}$, so the square of the total angular momentum has a definite value ($l$ is a good quantum number). Looking at its components $\op{L}_x$, $\op{L}_y$, and $\op{L}_z$, we find that only $[\op{L}^2,\op{L}_z] = 0$, while $[\op{L}_i,\op{L}_j] \neq 0$ if $i \neq j$. This means that we can know the total angular momentum $l$ and its projection $m$ onto one of three axes (under the coordinate system we’ve chosen, that axis is $z$, but different coordinate choices are possible).

> FIGURE {fig:1.7} src=media/495303-l-vector1.png width=347px
> alt: A simple black silhouette of a mountain range with a sun rising above it.
> part src=media/495304-l-vector2.png width=342px
> alt: A 3D illustration of stacked geometric shapes, including cones and ellipsoid layers, in varying shades of gray.
> caption: Vector representation of total angular momentum l and its projection ml onto the z axis. (a) is a two dimensional illustration, while (b) illustrates the uncertainty in the projection of the angular momentum onto the x and y axes.
