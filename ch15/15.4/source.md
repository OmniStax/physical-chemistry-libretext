<!-- LibreTexts page 13650: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/15:_Lasers_Laser_Spectroscopy_and_Photochemistry/15.04:_Population_Inversion_can_be_Achieved_in_a_Three-Level_System -->
# Population Inversion can be Achieved in a Three-Level System

Optical pumping will at most achieve only an equal population in a two-level system. This is because the probabilities for raising an electron to the upper level and inducing the decay of an electron to the lower level (stimulated emission) are exactly the same! In other words, when both levels are equally populated, the numbers of electrons "going up" and "down" will be the same, so you cannot achieve population inversion which is required for lasers. The solution is to involve a third, metastable level of intermediate energy. The pumping will occur between the two levels with the greatest energy difference, creating a highly populated upper energy level. Two lasing processes are possible once this situation has been obtained. Lasing occurs between the upper level and the intermediate level if the electrons in the upper energy level decay slowly to the intermediate, metastable level, and if the electrons in the intermediate level decay rapidly to the ground state. However, if the electrons in the upper energy level quickly decay into the intermediate level, and the transition from the intermediate level to the ground level is slow, then lasing occurs between the intermediate level and the ground state. In both cases, the lasing frequency has a frequency different than that of the pumping frequency between the ground level and the upper level, so the pumping is off-resonant to the laser transition and will not trigger stimulated emission.

## Lasing in Three-Level Systems

The first laser that was demonstrated to operate was a three-level laser, known as {term:Maiman's ruby laser}.

> FIGURE {fig:15.4.1} src=https://upload.wikimedia.org/wikipedia/commons/1/11/2_Maiman_Laser_Left_Side.jpg
> part src=https://upload.wikimedia.org/wikipedia/commons/2/25/Ruby_laser.jpg
> alt: undefined
> caption: (left) A copy of a Maiman laser (CC 0; Guy Immega) (right) Internal view of a Maiman laser ([https://commons.wikimedia.org/w/inde...ldid=42317741](https://commons.wikimedia.org/w/index.php?title=File:Ruby_laser.jpg&oldid=423177416))

Figure 15.4.1 shows the outside and inside of a three-level laser. A pump causes an excitation from the ground state to the second excited state. This state is a rather short-lived state so that the atom quickly decays into the first excited level. (Atoms in the second excited state may also decay directly back to the ground state, but these atoms can be pumped back to the second excited state again.) The first excited state is a long-lived (i.e. metastable) state which allows the atom to "wait" for the "passer-by" photon while building up a large population of atoms in this state. The lasing transition, in this laser, is due to the decay of the atom from this first excited metastable state to the ground state. If the number of atoms in the ground state exceeds the number of atoms that are pumped into the excited state, then there is a high likelihood that the "lasing photon" will be absorbed and we will not get sustained laser light. The fact that the lower lasing transition is the ground state makes it rather difficult to achieve efficient population inversion. In a ruby laser, this task is accomplished by providing the ruby crystal with a very strong pulsating light source, called a flash lamp. The flash lamp produces a very strong pulse of light that is designed to excite the atoms from their ground state into a short-lived upper level. In this way, the ground state is depopulated and population inversion is achieved until a pulse of laser light is emitted. In the ruby laser, the flash lamp light lasts for about 1/1000 of a second (1 ms) and can be repeated about every second. The duration of the laser pulse is shorter than this, typically 0.1 ms. In some pulsed lasers, the pulse duration can be tailored using special methods to be much shorter than this, down to about 10 fs (where 1 fs = 10<sup>-15</sup> s or one thousandth of a millionth of a millionth of a second). So, the output of a three-level laser is not continuous but consists of pulses of laser light.

## Transition Rates in Three-level Systems

In a three-level system, there are nine (9) events that can occur (Figure 15.4.2):

> FIGURE {fig:15.4.2} src=media/400526-Three_level_laser_transitions.svg
> alt: Energy level diagram showing transitions between three levels with arrows indicating upward and downward movements and labeled coefficients.
> caption: The nine possible events in a three-level system. (CC BY-NC; Ümit Kaya via LibreTexts)

a. absorption from level 1 to level 3, as described by $\rho_{\nu}(\nu_{13})B_{13}N_1$
b. spontaneous emission from level 3 to level 1, as described by $A_{31}N_3$
c. stimulated emission from level 3 to level 1, as described by $\rho_{\nu}(\nu_{31})B_{31}N_3$
d. spontaneous emission from level 3 to level 2, as described by $A_{32}N_3$
e. stimulated emission from level 3 to level 2 (possible lasing), as described by $\rho_{\nu}(\nu_{32})B_{32}N_3$
f. absorption from level 2 to level 3, as described by $\rho_{\nu}(\nu_{23})B_{23}N_2$
g. absorption from level 1 to level 2, as described by $\rho_{\nu}(\nu_{12})B_{12}N_1$
h. spontaneous emission from level 2 to level 1, as described by $A_{21}N_2$
i. stimulated emission from level 2 to level 1 (possible lasing), as described by $\rho_{\nu}(\nu_{21})B_{21}N_2$

In most three-level lasers, neither the spontaneous emission from level 3 to level 1, nor the stimulated emission from level 3 to level 1 occur to any significant extent, and so these events are ignored in terms of the kinetics of the lasing process. It is also true that there is no excitation source to cause absorption from level 1 to level 2 other than the possible reabsorption of light emitted from a level 2 to level 1 transition, but this event is unlikely because most atoms in the ground state are pumped up to level 3. Because the pump will be used to drive the absorption from level 1 to level 3, this event is essentially under the control of the experimenter. This leaves a maximum of five events that we need to take into consideration when studying the lasing process.

### A Ruby Laser

In a three-level system ruby laser such as that described above, the flash lamp will serve as the pump to repeatedly excite most of the atoms from the ground state to the second excited state. In this laser, lasing occurs due to the stimulated emission from level 2 to level 1 (Figure 15.4.3.)

> FIGURE {fig:15.4.3} src=media/400525-level_2_to_level_1_laser.svg
> alt: Diagram illustrating energy levels in a lasing system: ground state, metastable level, upper level, and transitions with a pump.
> caption: Lasing from level 2 to level 1 in a three-level laser. (CC BY-NC; Ümit Kaya via LibreTexts)

Because the lasing will occur from the intermediate, metastable energy level 2, we will focus on the five events that affect its population:

a. absorption from level 2 to level 3, as described by $\rho_{\nu}(\nu_{32})B_{32}N_2$
b. spontaneous emission from level 3 to level 2, as described by $A_{32}N_3$
c. stimulated emission from level 3 to level 2, as described by $\rho_{\nu}(\nu_{32})B_{32}N_3$
d. spontaneous emission from level 2 to level 1, as described by $A_{21}N_2$
e. stimulated emission from level 2 to level 1 (lasing), as described by $\rho_{\nu}(\nu_{21})B_{21}N_2$

In this system, the rate of spontaneous emission from level 3 to level 2 is much more rapid than the rate of absorption from level 2 to level 3, and also much more rapid than the rate of stimulated emission from level 3 to level 2. Thus, any electrons pumped into the upper level are most likely to transition between level 2 and level 3 by spontaneous emission. This means that $N_2$ is greater than $N_1$ and thus, population inversion between states 2 and 1 can be achieved. A system of atoms that are able to attain such a population inversion is called a gain medium, and can lase.

### A Copper Vapor Laser

In this three-level system, the flash lamp will again, serve as the pump to repeatedly excite most of the atoms from the ground state to the second excited state. However, in this laser, lasing occurs due to the stimulated emission from level 3 to level 2 (Figure 15.4.4).

> FIGURE {fig:15.4.4} src=media/400527-Level_3_to_level_2_laser.svg
> alt: Diagram illustrating energy levels in a laser: shows pump, upper level, metastable level, ground state, and transitions.
> caption: Lasing from level 3 to level 2 in a three-level laser. (CC BY-NC; Ümit Kaya via LibreTexts)

Because the lasing will occur from the higher energy excited state, we focus on the four events that affect the population ratio between level 3 and level 2:

a. absorption from level 2 to level 3, as described by $\rho_{\nu}(\nu_{32})B_{32}N_2$
b. spontaneous emission from level 3 to level 2, as described by $A_{32}N_3$
c. stimulated emission from level 3 to level 2 (lasing), as described by $\rho_{\nu}(\nu_{32})B_{32}N_3$
d. spontaneous emission from level 2 to level 1, as described by $A_{21}N_2$

If we assume that the atoms in the total population will be distributed between the three energy levels, then

$$ N_1(t) + N_2(t) + N_3(t) = N_{total} $$

At equilibrium, the population of each level will remain constant, and so

$$ 0 = \dfrac{dN_1(t)}{dt} = \dfrac{dN_2(t)}{dt} =\dfrac{dN_3(t)}{dt}. $$

Thus,

$$ \dfrac{N_2(t)}{dt} = -\rho_{\nu}(\nu_{32})B_{32}N_2 + A_{32}N_3 - A_{21}N_2 + \rho_{\nu}(\nu_{32})B_{32}N_3 = 0 $$ {eq:15.4.1} n=1

Rearranging Equation [ref:eq:15.4.1] gives

$$ N_2(A_{21} + \rho_{\nu}(\nu_{32})B_{32}) = N_3(A_{32} + \rho_{\nu}(\nu_{32})B_{32}) $$ {eq:15.4.2} n=2

which rearranges to

$$ \dfrac{N_3}{N_2} = \dfrac{A_{21} + \rho_{\nu}(\nu_{32})B_{32}}{A_{32} + \rho_{\nu}(\nu_{32})B_{32}} $$ {eq:15.4.3} n=3

From Equation [ref:eq:15.4.3] we can see that if $A_{21}$ is greater than $A_{32}$, then $N_3$ can be greater than $N_2$. If $N_3$ is greater than $N_2$, then population inversion between states 3 and 2 can be achieved. In other words, if atoms in state 2 decay to the ground state more rapidly than atoms in state 3 decay to state 2, there will be a population inversion between states 3 and 2, and the system can lase.

## Four-Level Lasers

There are also lasers based on transitions between four energy levels. These lasers can be more efficiently pumped, because the lower level of the lasing transition is not the ground state. Only four-level lasers can provide a continuous lasing output. He-Ne and Nd:YAG lasers are common four-level lasers and will be described in section 15.6.

## References

D.W. Coutts, in [Encyclopedia of Modern Optics](https://www.sciencedirect.com/referencework/9780123693952/encyclopedia-of-modern-optics), 2005, page 460, [https://doi.org/10.1016/B0-12-369395-0/00847-2](https://doi.org/10.1016/B0-12-369395-0/00847-2)
