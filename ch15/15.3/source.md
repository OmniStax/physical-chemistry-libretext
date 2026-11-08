<!-- LibreTexts page 13649: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/15:_Lasers_Laser_Spectroscopy_and_Photochemistry/15.03:_A_Two-Level_System_Cannot_Achieve_a_Population_Inversion -->
# A Two-Level System Cannot Achieve a Population Inversion

## Lasing in Two-Level Systems

For the sake of our studies, let's first consider a laser medium whose atoms have only two energy states: a ground state and one excited state. In such an idealized atom the only possible transitions are excitation from the ground state to the excited state and de-excitation from the excited state back into ground state. Could such an atom be used to make a laser?

There are several important conditions that our laser must satisfy. First of all, the light that it produces must be coherent. That is to say, it must emit photons that are in-phase with one another. Secondly, it should emit monochromatic light, i.e. photons of the same frequency (or wavelength). Thirdly, it would be desirable if our laser's output were collimated, producing a sharply defined "pencil-like" beam of light (this is not crucial, but clearly a desirable condition). Lastly, it would also be desirable for our laser to be efficient, i.e. the higher the ratio of output energy - to - input energy, the better.

Let us begin by examining the requirements for our first condition for lasing, coherence. This condition is satisfied only when the lasing transition occurs through stimulated emission. As we have already seen, stimulated emission produces identical photons that are of equal energy and phase and travel in the same direction. But for stimulated emission to take place a "passer-by" photon whose energy is just equal to the de-excitation energy must approach the excited atom before it de-excites via spontaneous emission. Typically, a photon emitted by the spontaneous emission serves as the seed to trigger a collection of stimulated emissions. Still, if the lifetime of the excited state is too short, then there will not be enough excited atoms around to undergo stimulated emission. So, the first criteria that we need to satisfy is that the upper lasing state must have a relatively long lifetime, otherwise known as a meta-stable state, with typical lifetimes in the milliseconds range. In addition to the requirement of a long lifetime, we need to ensure that the likelihood of absorption of the "passer-by" photons is minimized. This likelihood is directly related to the ratio of the atoms in their ground state versus those in the excited state. The smaller this ratio, the more likely that the "passer-by" photon will cause a stimulated emission rather than get absorbed. So, to satisfy this requirement, we need to produce a {term:population inversion}: create more atoms in the excited state than those in the ground state.

Another way of stating the above set of conditions is that the rate of absorption must be less than the rate of stimulated emission

$$ \underbrace{B_{21}\rho_{\nu} (\nu_{21}) N_{2}}_{\text{rate of stimulated emission}} > \underbrace{B_{12}\rho_{\nu} (\nu_{12}) N_{1}}_{\text{rate of absorption}} $$ {eq:15.3.1} n=1

As shown in the previous section, $B_{21} = B_{12}$ and $\rho_{\nu}(\nu_{12}) = \rho_{\nu} (\nu_{21})$, thus Equation [ref:eq:15.3.1] becomes

$$ N_2 > N_1. $$

Hence, if $N_2 > N_1$ then there is a population inversion.

Achieving population inversion in a two-level atom is not very practical. Such a task would require a very strong pumping transition that would send any decaying atom back into its excited state. This would be similar to reversing the flow of water in a waterfall. It can be done but is very energy costly and inefficient. In a sense, the pumping transition would have to work against the lasing transition.

> FIGURE {fig:15.3.1} src=media/400442-Two_level_laser.svg
> alt: Diagram illustrating atomic transitions: before, during, and after photon emission between excited and ground states.
> caption: A two-level lasing system. (CC BY-NC; Ümit Kaya via LibreTexts)

It is clear, from figure 15.3.1, that in the two-level atom the pump is, in a way, the laser itself! Such a two-level laser would work only in jolts. That is to say, once the population inversion is achieved the laser would lase. But immediately it would end up with more atoms in the lower level. Such two-level lasers involve a more complicated process. We will see, in later material, examples of these in the context of excimer lasers, which are pulsed lasers. For continuous lasing action, we need to consider other possibilities, such as a three-level atom.
