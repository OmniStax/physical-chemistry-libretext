<!-- LibreTexts page 13676: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13:_Molecular_Spectroscopy/13.13:_The_Harmonic_Oscillator_Selection_Rule -->
# The Harmonic Oscillator Selection Rule

Selection rules are a very important concept in spectroscopy and physical chemistry, as they directly complement the concept that systems on the atomic level are quantized. Quantization tells us how electrons, neutrons, and protons are set up, and selection rules tell us how, energetically speaking, they may move about. For example, the principal quantum number, $n$, determines the energy state of particles in the Particle in a Box model. With respect to real systems, the quantum number $n$ describes electronic transitions, such as the excitation of an electron. There are other transitions, such as the rotational transition, which applies to the rigid rotator model and occurs where there are spherical harmonics. Vibrational transitions occur where there is a system that can be visualized as two masses connected by a spring, such as a diatomic molecule.

Selection rules can be very useful in spectroscopy for obtaining information about an unknown substance; any given substance has properties and behaviors that operate within the selection rules and determine the wavelengths of electromagnetic radiation (light) that cause transitions. By tracking these properties, chemists can use techniques like IR spectroscopy to determine the chemical structure of a molecule. For example, a selection rule might govern how a quantum number changes during a transition. That quantum number appears in equations that determine the energy transition based on the mass and other structural properties of a molecule. Thus, if one knows the selection rules and the energy transition, he or she can determine other properties about the molecule, such as its mass or its bond strength.

:::example {ex:?} Example: Evaluating vibrational transitions using a transition moment integral.

Vibrational systems are described by the harmonic oscillator wavefunctions, which look like

$$ \Psi_v(x)=N_vH_v(\alpha^{1/2}x)e^{-\alpha{x^2}/2} $$

A transition dipole moment can be written to describe a transition along the z-axis.

$$ \mu_z = \int\limits_{-\infty}^{\infty}N_vN_{v+1}H_{v+1}(\alpha^{1/2}x)e^{-\alpha{x^2}/2}H_{v+1}\mu_{z}(\alpha^{1/2}x)e^{-\alpha{x^2}/2}dx $$

$\mu$ is the dipole moment, so we pull it out of the integral.

$$ \mu_z = \mu_{z}\int\limits_{-\infty}^{\infty}N_vN_{v+1}H_{v+1}(\alpha^{1/2}x)e^{-\alpha{x^2}/2}H_{v+1}(\alpha^{1/2}x)e^{-\alpha{x^2}/2}dx $$

Using the idea that the transition moment $\mu_{z}$ changes on x, we express it as a derivative.

$$ \mu_z = \frac{d\mu}{dx}\int\limits_{-\infty}^{\infty}N_vN_{v+1}H_{v+1}(\alpha^{1/2}x)e^{-\alpha{x^2}/2}H_{v+1}(\alpha^{1/2}x)e^{-\alpha{x^2}/2}dx $$

To evaluate the integral, we take advantage of a special Hermite relationship: $\sqrt{\alpha}xH_v(\sqrt{\alpha}x)=vH_{v-1}(\sqrt{\alpha}x)+\frac{1}{2}H_{v+1}(\sqrt{\alpha}x)$

$$ \mu_z = \frac{N_vN_{v+1}}{\sqrt{\alpha}}(\frac{d\mu}{dx})\int\limits_{-\infty}^{\infty}H_{v+1}(\sqrt{\alpha}x)e^(-\alpha{x^2}/2)[vH_{v-1}(\sqrt{\alpha}x)+\frac{1}{2}H_{v+1}(\sqrt{\alpha}x)]dx $$

By inspection, it is clear that the integral only allows transitions of $\Delta{v}=\pm1$, because for any other value, the integral will be zero.
:::
