<!-- LibreTexts page 13382: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/01:_The_Dawn_of_the_Quantum_Theory/1.02:_Quantum_Hypothesis_Used_for_Blackbody_Radiation_Law -->
# Quantum Hypothesis Used for Blackbody Radiation Law

## Learning Objectives {section:objectives}

- To understand how energy is quantized in blackbody radiation

By the late 19th century, many physicists thought their discipline was well on the way to explaining most natural phenomena. They could calculate the motions of material objects using Newton’s laws of classical mechanics, and they could describe the properties of radiant energy using mathematical relationships known as [Maxwell’s equations](https://phys.libretexts.org/TextMaps/General_Physics_TextMaps/Map%3A_University_Physics_(OpenStax)/Map%3A_University_Physics_II_(OpenStax)/16%3A_Electromagnetic_Waves/16.1%3A_Maxwell%E2%80%99s_Equations_and_Electromagnetic_Waves), developed in 1873 by James Clerk Maxwell, a Scottish physicist. The universe appeared to be a simple and orderly place, containing matter, which consisted of particles that had mass and whose location and motion could be accurately described, and electromagnetic radiation, which was viewed as having no mass and whose exact position in space could not be fixed. Thus matter and energy were considered distinct and unrelated phenomena. Soon, however, scientists began to look more closely at a few inconvenient phenomena that could not be explained by the theories available at the time.

One experimental phenomenon that could not be adequately explained by classical physics was blackbody radiation (Figure 1.2.1). Attempts to explain or calculate this spectral distribution from classical theory were complete failures. A theory developed by Rayleigh and Jeans predicted that the intensity should go to infinity at short wavelengths. Since the intensity actually drops to zero at short wavelengths, the Rayleigh-Jeans result was called the {term:ultraviolet catastrophe} (Figure 1.2.1 dashed line). There was no agreement between theory and experiment in the ultraviolet region of the blackbody spectrum.

> FIGURE {fig:1.2.1} src=media/347651-9469e9ec92fcdd65227d9055e7ae0639.jpg
> alt: Graph depicting infection dynamics over time with labeled phases and predicted clinical outcomes for different scenarios.
> caption: Relationship between the temperature of an object and the spectrum of blackbody radiation it emits. At relatively low temperatures, most radiation is emitted at wavelengths longer than 700 nm, which is in the infrared portion of the spectrum. As the temperature of the object increases, the maximum intensity shifts to shorter wavelengths, successively resulting in orange, yellow, and finally white light. At high temperatures, all wavelengths of visible light are emitted with approximately equal intensities. The white light spectrum shown for an object at 6000 K closely approximates the spectrum of light emitted by the sun. Note the sharp decrease in the intensity of radiation emitted at wavelengths below 400 nm, which constituted the ultraviolet catastrophe. The classical prediction fails to fit the experimental curves entirely and does not have a maximum intensity. (CC BY-SA-NC; anonymous).

## Quantizing Electrons in the Radiator

In 1900, the German physicist Max Planck (1858–1947) explained the ultraviolet catastrophe by proposing that the energy of electromagnetic waves is *quantized* rather than continuous. This means that for each temperature, there is a maximum intensity of radiation that is emitted in a blackbody object, corresponding to the peaks in Figure 1.2.1, so the intensity does not follow a smooth curve as the temperature increases, as predicted by classical physics. Thus energy could be gained or lost only in integral multiples of some smallest unit of energy, a quantum (the smallest possible unit of energy). Energy can be gained or lost only in integral multiples of a quantum.

:::note [note] Quantization

Although quantization may seem to be an unfamiliar concept, we encounter it frequently in quantum mechanics (hence the name). For example, US money is integral multiples of pennies. Similarly, musical instruments like a piano or a trumpet can produce only certain musical notes, such as C or F sharp. Because these instruments cannot produce a continuous range of frequencies, their frequencies are quantized. It is also similar to going up and down a hill using discrete stair steps rather than being able to move up and down a continuous slope. Your potential energy takes on discrete values as you move from step to step. Even electrical charge is quantized: an ion may have a charge of −1 or −2, but *not* −1.33 electron charges.

> IMAGE {img:1} src=media/347652-ladder.svg width=689px
> alt: Two geometric shapes: a slanted prism on the left and a stepped block structure on the right, both in shades of blue.
> caption: A continuous vs. a quantized (gravitationaly) potential energy system. In the continuous case (left) a system can have any potential energy, but in the quantized case (right), a system can only have certain values (other values are not allowed). (CC BY-NC; Ümit Kaya via LibreTexts)
:::

Planck's quantization of energy is described by the his famous equation:

$$ E=h \nu $$ {eq:Eq1.2.1} n=1

where the proportionality constant $h$ is called {term:Planck’s constant}, one of the most accurately known fundamental constants in science

$$ h=6.626070040(81) \times 10^{−34}\, J\cdot s $$

However, for our purposes, its value to four significant figures is sufficient:

$$ h = 6.626 \times 10^{−34} \,J\cdot s $$

As the frequency of electromagnetic radiation increases, the magnitude of the associated quantum of radiant energy increases. By assuming that energy can be emitted by an object only in integral multiples of $hν$, Planck devised an equation that fit the experimental data shown in Figure 1.2.1. We can understand Planck’s explanation of the ultraviolet catastrophe qualitatively as follows: At low temperatures, radiation with only relatively low frequencies is emitted, corresponding to low-energy quanta. As the temperature of an object increases, there is an increased probability of emitting radiation with higher frequencies, corresponding to higher-energy quanta. At any temperature, however, it is simply more probable for an object to lose energy by emitting a large number of lower-energy quanta than a single very high-energy quantum that corresponds to ultraviolet radiation. The result is a maximum in the plot of intensity of emitted radiation versus wavelength, as shown in Figure 1.2.1, and a shift in the position of the maximum to lower wavelength (higher frequency) with increasing temperature.

At the time he proposed his radical hypothesis, Planck could not explain *why* energies should be quantized. Initially, his hypothesis explained only one set of experimental data—blackbody radiation. If quantization were observed for a large number of different phenomena, then quantization would become a law. In time, a theory might be developed to explain that law. As things turned out, Planck’s hypothesis was the seed from which modern physics grew.

Max Planck explain the spectral distribution of blackbody radiation as result from oscillations of electrons. Similarly, oscillations of electrons in an antenna produce radio waves. Max Planck concentrated on modeling the oscillating charges that must exist in the oven walls, radiating heat inwards and—in thermodynamic equilibrium—themselves being driven by the radiation field. He found he could account for the observed curve if he required these oscillators not to radiate energy continuously, as the classical theory would demand, but they could {term:only} lose or gain energy in chunks, called {term:quanta}, of size $h\nu$, for an oscillator of frequency $\nu$ (Equation [ref:eq:Eq1.2.1]).

With that assumption, Planck calculated the following formula for the radiation energy density inside the oven:

$$ \begin{align} d\rho(\nu,T) &= \rho_\nu (T) d\nu \\[4pt] &= \dfrac {8 \pi  h \nu^3}{c^3} \cdot \dfrac {1 }{\exp \left( \dfrac {h\nu}{k_B T}\right)-1} d\nu  \end{align} $$ {eq:Eq2a} n=2

with

- $\pi = 3.14159$
- $h$ = $6.626 \times 10^{-34} J\cdot s$
- $c$ = $3.00 \times 10^{8}\, m/s$
- $\nu$ = $1/s$
- $k_B$ = $1.38 \times 10^{-23} J/K$
- $T$ is absolute temperature (in Kelvin)

Planck's radiation energy density (Equation [ref:eq:Eq2a]) can also be expressed in terms of wavelength $\lambda$.

$$ \rho (\lambda, T) = \dfrac {8 \pi hc}{\lambda ^5} \left(\dfrac {1}{ e^{hc/\lambda k_B T} - 1}\right) $$ {eq:Eq2b} n=3

With a wavelength of maximum energy density at:

$$ \lambda_{max}=\frac{hc}{4.965kT} $$

This can be used to calculate the radiance emitted from surface per unit frequency

$$ \begin{aligned} dB_\nu (\nu, T) & =\rho_\nu(T) d \nu \\ & =\frac{2 h \nu^3}{c^2} \cdot \frac{1}{\exp \left(\frac{h \nu}{k_B T}\right)-1} d \nu \end{aligned} $$ n=4

or

$$ B_\lambda(\lambda, T)=\frac{2 h c^2}{\lambda^5} \frac{1}{e^{h c /\left(\lambda k_{\mathrm{B}} T\right)}-1} $$ n=5

Planck's equation (Equation [ref:eq:Eq2b]) gave an excellent agreement with the experimental observations for all temperatures (Figure 1.2.2).

> FIGURE {fig:1.2.2} src=media/141672-imageedit_2_2261707525.png
> alt: Graph showing spectral irradiance against wavelength in nanometers, with two areas shaded: one for solar irradiance and another for blackbody spectrum.
> caption: The Sun is an excellent approximation of a blackbody. Its effective temperature is ~5777 K. (CC-SA-BY 3.0; [Sch](https://commons.wikimedia.org/wiki/User:Sch)).

:::note [note] Max Planck (1858–1947)

Planck made many substantial contributions to theoretical physics, but his fame as a physicist rests primarily on his role as the originator of quantum theory. In addition to being a physicist, Planck was a gifted pianist, who at one time considered music as a career. During the 1930s, Planck felt it was his duty to remain in Germany, despite his open opposition to the policies of the Nazi government.

> IMAGE {img:2} src=media/34210-225px-Max_Planck_1933.jpg width=167
> alt: Black and white portrait of a bespectacled man with a bald head, wearing a bow tie and formal attire.
> IMAGE {img:3} src=media/388128-Max-Planck-Gesellschaft.svg.png width=253px
> alt: Logo of the Max Planck Society, featuring a profile of a classical figure with a laurel crown, text below.
> caption: (left) The German physicist Max Planck had a major influence on the early development of quantum mechanics, being the first to recognize that energy is sometimes quantized. Planck also made important contributions to special relativity and classical physics. (Public Domain; Library of Congress via [Wikimedia](https://en.Wikipedia.org/wiki/Max_Planck#/media/File:Max_Planck_1933.jpg)) (left) The society's logo features Minerva, the Roman goddess of wisdom. (Fair use)

One of his sons was executed in 1944 for his part in an unsuccessful attempt to assassinate Hitler and bombing during the last weeks of World War II destroyed Planck’s home. After WWII, the major German scientific research organization was renamed the Max Planck Society.
:::

:::exercise {exr:1.2.1}

Use Equation [ref:eq:Eq2b] to show that the units of $ρ(λ,T)\,dλ$ are $J/m^3$ as expected for an energy density.
:::

The near perfect agreement of this formula with precise experiments (e.g., Figure 1.2.3), and the consequent necessity of energy quantization, was the most important advance in physics in the century. His blackbody curve was completely accepted as the correct one: more and more accurate experiments confirmed it time and again, yet the radical nature of the quantum assumption did not sink in. Planck was not too upset—he didn’t believe it either, he saw it as a technical fix that (he hoped) would eventually prove unnecessary.

> Part of the problem was that Planck’s route to the formula was long, difficult and implausible—he even made contradictory assumptions at different stages, as Einstein pointed out later. However, the result was correct anyway!

The mathematics implied that the energy given off by a blackbody was not continuous, but given off at certain specific wavelengths, in regular increments. If Planck assumed that the energy of blackbody radiation was in the form

$$ E = nh \nu $$

where $n$ is an integer, then he could explain what the mathematics represented. This was indeed difficult for Planck to accept, because at the time, there was no reason to presume that the energy should only be radiated at specific frequencies. Nothing in Maxwell’s laws suggested such a thing. It was as if the vibrations of a mass on the end of a spring could only occur at specific energies. Imagine the mass slowly coming to rest due to friction, but not in a continuous manner. Instead, the mass jumps from one fixed quantity of energy to another without passing through the intermediate energies.

> To use a different analogy, it is as if what we had always imagined as smooth inclined planes were, in fact, a series of closely spaced steps that only presented the illusion of continuity.

## Summary

The agreement between Planck’s theory and the experimental observation provided strong evidence that the energy of electron motion in matter is quantized. In the next two sections, we will see that the energy carried by light also is quantized in units of $h \bar {\nu}$. These packets of energy are called “photons.”

## Contributors and Attributions {section:attributions}

- [Michael Fowler](http://galileo.phys.virginia.edu/~mf1i/home.html) (Beams Professor, [Department of Physics](http://www.phys.virginia.edu/), [University of Virginia)](http://www.virginia.edu/)
- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("[Quantum States of Atoms and Molecules](http://pubs.acs.org/doi/abs/10.1021/ed082p1880.2)")
