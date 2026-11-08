<!-- LibreTexts page 13648: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/15:_Lasers_Laser_Spectroscopy_and_Photochemistry/15.02:_The_Dynamics_of_Transitions_can_be_Modeled_by_Rate_Equations -->
# The Dynamics of Transitions can be Modeled by Rate Equations

## The Interaction of Light with Atoms

In 1916, [Albert Einstein](https://en.Wikipedia.org/wiki/Albert_Einstein) proposed that there are three processes occurring in the formation of an atomic spectral line. The three processes are referred to as spontaneous emission, stimulated emission, and absorption (figure 15.2.1).

> FIGURE {fig:15.2.1} src=media/399463-abs,_spon_emiss,_stim_emiss.svg width=736px
> alt: abs, spon emiss, stim emiss.svg
> caption: The three processes that can occur during the formation of a spectral line. A) Absorption of a photon, leading to the promotion of an electron to a higher electronic energy level. B) The spontaneous emission of a photon created by the relaxation of an electron back to the ground state. C) The stimulated emission of a photon created by the influence of a passing photon, accompanied by the relaxation of an electron back to the ground state. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)

For now, let's make our discussion as simple as possible, by assuming we are talking about the interaction of light with an atom that has only two energy levels. There is a collection of these atoms present, and they are in an assortment of states, some in the ground state, and some in "the" excited state. Our discussion of photon emission to this point has generally centered around *spontaneous emission*, the triggering of which we attributed to a perturbation in the hamiltonian that comes from (if nothing else) vacuum fluctuations.

Suppose some of these atoms spontaneously emit photons, and now the collection of atoms is not sitting in a total vacuum, but is in the presence of many photons as well. We now consider what effects these present photons can have on the atoms. The answer depends upon which state the atom is in when it encounters the photon. If the atom is in the ground state, then it can absorb the photon and go to the excited state. If the atom is in its excited state, it can't absorb the photon, but the time-varying EM fields of the photon present a nice perturbation to the electron's hamiltonian (at just the right frequency!) to induce the emission of a photon. This is called **stimulated emission**. The photon that induces the emission is unaffected by the interaction, and continues on its merry way. The emitted photon naturally has the same frequency as the passing photon (the energy gap assured this), but it also emerges moving in the same direction as, **and in phase with** the stimulating photon. This completes the acronym - {term:L}ight {term:A}mplification by the {term:S}timulated {term:E}mission of {term:R}adiation.

It turns out that if a photon happens by two of these atoms, the first in the ground state and the second in the excited state, the probability that it will be absorbed by the first is equal to the probability that it will stimulate emission in the other – neither of these results is preferred over the other. Now consider a collection of these atoms in a state of some fixed total energy. This total energy comes from the number of atoms in the ground state multiplied by the energy of that state, plus the number of atoms in the excited state multiplied by the number of atoms in that state. As we will discuss in a future chapter, the populations of these two states subject to the constraint of the total energy can be shown to be a function that depends upon the energy difference of the two states and the temperature of the collection of atoms. Specifically, if N<sub>1</sub> is the number of atoms in the ground state, N<sub>2</sub> is the number of atoms in the excited state, and the energy difference is ΔE, then the following relation holds:

$$ N_1 = N_2 \, e^{\dfrac{\Delta E}{k_BT}} $$

where T is the temperature and $k_B$ is Boltzmann's constant. Clearly N<sub>1</sub> is greater than N<sub>2</sub>, but how much greater? We can do a very quick calculation of this using an approximation that at room temperature, the constant $k_BT$ is about 140 eV. Let's assume that the energy difference between two energy states of an atom is on the order of 1eV. Then the number of ground state atoms would exceed the number of excited state atoms by a factor of e<sup>40</sup><sup> </sup>= 2.4×10<sup>17</sup>!

Thus, a photon passing through this collection has an equal probability of being absorbed or stimulating emission if it happens by an atom prepared for one of those actions. But there are so many more atoms available to absorb the photon, that this has a much greater chance of happening. While waiting for a photon to stimulate emission, an atom in an excited state will impatiently emit a photon spontaneously, which will then be much more likely to be absorbed than stimulate emission, and things continue like this, with some atoms spontaneously sending out photons while others absorb them... no laser.

## Einstein Coefficients

Einstein proposed a separate rate equation for each of the three processes described above. The rate of each process is proportional to the number of particles in either the ground state (absorption) or the excited state (emission). Each rate is also proportional to the spectral radiant energy density, $\rho_{\nu}$, which is a measure of the radiant energy density ($\rho$) per unit frequency of the light associated with the transition. Thus, $\rho_{\nu} = \dfrac{d\rho}{d\nu}$, and has units of $\dfrac{J·s}{m^3}$. With each process there is also an associated Einstein coefficient, which is a proportionality constant.

### Photon absorption

Absorption is the process by which a photon is absorbed by the atom, causing an electron to jump from a lower energy level to a higher one (figure 15.2.1a). The process is described by the Einstein coefficient $B_{12} \left(\dfrac{m^3}{ J· s^2}\right)$, which gives the probability per unit time per unit spectral radiance of the radiation field that an electron in state 1 with energy $E_1$ will absorb a photon with an energy $E_2 − E_1 = h\nu_{12}$ and jump to state 2 with energy $E_2$. If $N_1(t)$ is the number density of atoms in state 1, then the change in the number density of atoms in state 1 per unit time due to absorption will be

$-\dfrac {dN_1(t)}{dt}= B_{12}\rho_{\nu} (\nu_{12}) N_{1}(t)$

If only absorption occurred, the increase of the excited state population as a function of time is equal to the decrease of the ground state population as a function of time.

### Spontaneous emission

Spontaneous emission is the process by which an electron "spontaneously" (i.e. without any outside influence) decays from a higher energy level to a lower one (figure 15.2.1b). The process is described by the Einstein coefficient $A_{21} (s^{-1})$, which gives the probability per unit time that an electron in state 2 with energy $E_2$ will decay spontaneously to state 1 with energy $E_1$, emitting a photon with an energy $E_2 - E_1 = h\nu_{21}$. Due to the [energy-time uncertainty principle](https://en.Wikipedia.org/wiki/Uncertainty_Principle#Energy-time_uncertainty_principle), the transition actually produces photons within a narrow range of frequencies called the [spectral linewidth](https://en.Wikipedia.org/wiki/Spectral_linewidth). If $N_2(t)$ is the number density of atoms in state 2, then the change in the number density of atoms in state 2 per unit time due to spontaneous emission will be

$-\dfrac {dN_2(t)}{dt}= A_{21}N_{2}(t)$

The same process results in increasing of the population of the state 1:

$\dfrac {dN_1(t)}{dt}= A_{21}N_{2}(t)$

### Stimulated emission

[Stimulated emission](https://en.Wikipedia.org/wiki/Stimulated_emission) (also known as induced emission) is the process by which an electron is induced to jump from a higher energy level to a lower one by the presence of electromagnetic radiation at (or near) the frequency of the transition (figure 15.2.1c). From the thermodynamic viewpoint, this process must be regarded as negative absorption. The process is described by the Einstein coefficient $B_{21} \left(\dfrac{m^3}{ J· s^2}\right)$, which gives the probability per unit time per unit spectral radiance of the radiation field that an electron in state 2 with energy $E_2$will decay to state 1 with energy $E_1$, emitting a photon with an energy $E_2 - E_1 = h\nu_{21}$. The change in the number density of atoms in state 1 per unit time due to induced emission will be

$\dfrac {dN_1(t)}{dt}= B_{21}\rho_{\nu} (\nu_{21}) N_{2}(t)$

## The Relationship between A 21 , B 12 , and B 21

In 1900, Max Planck derived a formula for the energy density per unit bandwidth of a blackbody radiator by making the assumption that only discrete energies are allowed. His work agreed with known experimental data, and it is one of the fundamental ideas of quantum mechanics. More specifically, the spectral energy density per unit bandwidth, $\rho_{\nu}(\nu_{12})$ in units $\dfrac{J⋅s}{m^3}$, is given by

$$ \rho_{\nu}(\nu_{12}) = \dfrac{8\pi h}{c^3} \dfrac{\nu_{12}^3}{e^{(h\nu_{12})/(k_BT)} -1} $$ {eq:15.2.1} n=1

In a given sample of atoms exposed to radiation of the correct frequency all three processes will be occurring simultaneously. Thus the rate of change of the populations of the two states will be

$$ -\dfrac {dN_1(t)}{dt} = \dfrac {dN_2(t)}{dt}= B_{12}\rho_{\nu} (\nu_{12}) N_{1}(t) - A_{21}N_{2}(t) - B_{21}\rho_{\nu} (\nu_{21}) N_{2}(t) $$ {eq:15.2.2} n=2

If we assume that the two energy states are in thermal equilibrium, then $N_1$ and $N_2$ are constant, and thus

$$ -\dfrac {dN_1(t)}{dt} = \dfrac {dN_2(t)}{dt}= B_{12}\rho_{\nu} (\nu_{12}) N_{1}(t) - A_{21}N_{2}(t) - B_{21}\rho_{\nu} (\nu_{21}) N_{2}(t) =0 $$ {eq:15.2.3} n=3

Upon solving for $\rho_{\nu}(\nu_{12})$, we get

$$ \rho_{\nu}(\nu_{12}) = \dfrac{A_{21}}{(N_1(t)/N_2(t))B_{12} - B_{21}} $$ {eq:15.2.4} n=4

Recall that in this equation $N_1/N_2$ represents the electron density in the lower energy state divided by the electron density in the upper state at equilibrium. This quantity is a function of temperature. Assuming many allowed energy states, the number of occupied states decreases exponentially with temperature, as per Boltzmann statistics.

$$ N_2/N_1 =\dfrac{g_2}{g_1} e^{(-h\nu_{12})/(k_BT)} $$ {eq:15.2.5} n=5

The quantity $\dfrac{g_2}{g_1}$ represents the degeneracy level, which is the number of allowed electrons in the upper state over the number of allowed electrons in the lower state. In this expression, $g_1$ and $g2$ are unitless measures of the number of ways electrons can occupy an energy states. Upon rearrangement, equation [ref:eq:15.2.5] becomes

$$ N_1/N_2 =\dfrac{g_1}{g_2} e^{(h\nu_{12})/(k_BT)} $$ {eq:15.2.6} n=6

Equations [ref:eq:15.2.6] and [ref:eq:15.2.4] can be combined to get

$$ \rho_{\nu}(\nu_{12}) = \dfrac{A_{21}}{\left(\dfrac{g_1}{g_2} e^{(h\nu_{12})/(k_BT)}\right)B_{12} - B_{21}} $$ {eq:15.2.7} n=7

which can be rearranged to

$$ \rho_{\nu}(\nu_{12}) = \dfrac{\dfrac{A_{21}}{B_{21}}}{\left(\dfrac{g_1B_{12}}{g_2B_{21}} e^{(h\nu_{12})/(k_BT)}\right) - 1} $$ {eq:15.2.8} n=8

One expression for the energy density per unit bandwidth of this system is given by Equation [ref:eq:15.2.1]. Equation [ref:eq:15.2.8] gives a second expression for the energy density per unit bandwidth, and it was found by considering the relative rates of absorption, spontaneous emission, and stimulated emission. These equations can be combined to relate the rates of the different processes.

$$ \dfrac{8\pi h}{c^3} \dfrac{\nu_{12}^3}{e^{(h\nu_{12})/(k_BT)} -1} = \dfrac{\dfrac{A_{21}}{B_{21}}}{\left(\dfrac{g_1B_{12}}{g_2B_{21}} e^{(h\nu_{12})/(k_BT)}\right) - 1} $$ {eq:15.2.9} n=9

The above equation is true for the conditions

$$ \dfrac{A_{21}}{B_{21}} = \dfrac{8\pi h \nu_{12}^3}{c^3} $$ {eq:15.2.10} n=10

and

$$ \dfrac{g_1B_{12}}{g_2B_{21}} = 1 $$ {eq:15.2.11} n=11

If we know one of the Einstein coefficients, we can quickly calculate the other two Einstein coefficients using equations [ref:eq:15.2.10] and [ref:eq:15.2.11].

These equations also provide further insight into the operation of lasers and other devices based on stimulated emission. The overall nonequilibrium upper state population rate is given by

$$ \dfrac {dN_2(t)}{dt}= - A_{21}N_{2} - B_{21}\rho_{\nu} (\nu_{21}) N_{2} + B_{21}\dfrac{g_2}{g_1}\rho_{\nu} (\nu_{12}) N_{1} $$ {eq:15.2.12} n=12

which can be simplified with some algebra.

$$ \dfrac {dN_2(t)}{dt}= - A_{21}N_{2} - B_{21}\rho_{\nu} (\nu_{12}) \left(N_2 - \dfrac{g_2}{g_1}N_1\right) $$ {eq:15.2.13} n=13

The term in parenthesis is the net upper state population. Optical amplification and lasing can only occur when the term in parenthesis is positive. The condition

$$ N_2 - \dfrac{g_2}{g_1}N_1 > 0 $$ {eq:15.2.14} n=14

is called a population inversion. It only occurs when enough energy is being supplied to the system, by optical, electrical, or thermal means, so that there are more electrons in the upper energy level than the lower energy level. This situation cannot be achieved for a two-level system, as will be shown in the next section. However, in section 15.4, it will be shown that this situation can be achieved if the system has more than two levels.

## Contributors

- Andrea M. Mitofsky (Trine University)
- Tom Weideman (University of California, Davis)
- Wikipedia ([https://en.Wikipedia.org/wiki/Einstein_coefficients](https://en.Wikipedia.org/wiki/Einstein_coefficients))
- Tom Neils (Grand Rapids Community College)
