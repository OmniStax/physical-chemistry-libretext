<!-- LibreTexts page 14477: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/21:_Entropy_and_the_Third_Law_of_Thermodynamics/21.02:_The_3rd_Law_of_Thermodynamics_Puts_Entropy_on_an_Absolute_Scale -->
# The 3rd Law of Thermodynamics Puts Entropy on an Absolute Scale

## Learning Objectives {section:objectives}

- Recall the third law of thermodynamics.

In the unlikely case that we have $C_p$ data all the way from 0 K we could write:

$$ S(T) = S(0) + \int_{0}^{T} C_p(T)~ dT $$

It is tempting to set the $S(0)$ to zero and make the entropy thus an absolute quantity. As we have seen with enthalpy, it was not really possible set $H(0)$ to zero. All we did was define $ΔH$ for a particular process, although if $C_p$ data are available we could construct an enthalpy function (albeit with a floating zero point) by integration of $C_P$ (instead of $C_p/T$!). The situation is different for entropy $S$ than for $H$. Here we can actually put things on an *{term:absolute}* scale. Both Nernst and Planck have proposed to do so. Nernst postulated that for a pure and perfect crystal $S$ should indeed to go to zero as $T$ goes to zero (Figure 21.2.1).

> FIGURE {fig:21.2.1} src=media/484602-FeFig5.11.jpg
> alt: Phase diagram showing regions for solid I, solid II, liquid, and gas phases as a function of temperature and entropy.
> caption: Entropy as a Function of Temperature. The entropy ($S$) of a substance (compound or element) as a function of temperature (T). Note that there are three phase transitions in this system with evolution through two solid phases. These result in positive jumps in the entropy.

:::example {ex:21.2.1} Sulfur

Sulfur has two solid crystal structure, rhombic and monoclinic. At 368.5 K, the entropy of the phase transition from rhombic to monoclinic, $S_{(rh)}\rightarrow S_{(mono)}$, is:

$$ \Delta_\text{trs}S(\text{368.5 K})=1.09\;\sf\frac{J\cdot mol}{K} $$

As the temperature is lowered to 0 K, the entropy of the phase transition approaches zero:

$$ \lim_{T\rightarrow 0}\Delta_rS=0 $$

> FIGURE {fig:21.2.2} src=media/399492-Sulfur_Absolute_Zero.png width=352px
> alt: Diagram illustrating thermal conductivity of a material, labeled with a value of 1.09 W/(m·K) in red.
> caption: Schematic showing the entropy of the rhombic and monoclinic structures of sulfur as a function of temperature.

This shows that the entropy of the two crystalline forms are the same. The only way is if all species have the same absolute entropy at 0 K. For energy dispersal at 0 K:

1. Energy is as concentrated as it can be.
2. Only the very lowest energy states can be occupied.
:::

For a pure, perfect crystalline solid at 0 K, there is only one energetic arrangement to represent its lowest energy state. We can use this to define a natural zero, giving entropy an absolute scale. The {term:third Law of Thermodynamics} states that the entropy of a pure substance in a perfect crystalline form is 0 $\frac{J}{mol\cdot K}$ at 0 K:

$$ \bar{S}_{0\text{ K}}^\circ=0 $$

This is consistent with our molecular formula for entropy:

$$ S=k\ln{W} $$

For a perfect crystal at 0 K, the number of ways the total energy of a system can be distributed is one ($W=1$). The $\ln{W}$ term goes to zero, resulting in the perfect crystal at 0 K having zero entropy (Figure 21.2.3a).

> FIGURE {fig:21.2.3} src=media/484603-Figure_Showing_Entropy_at_0_K.png
> alt: Diagram showing two panels: A with blue circles and B with orange circles, illustrating a transition of temperature.
> caption: (a) Single possible configuration for a system at absolute zero, i.e., only one microstate is accessible. Thus $S = k \ln W = 0$. (b) At temperatures greater than absolute zero, multiple microstates are accessible due to atomic dislocation (exaggerated in the figure). Since the number of accessible microstates is greater than 1, $S = k \ln W > 0$. (CC BY-SA 4.0; BlyumJ via [Wikipedia](https://commons.wikimedia.org/wiki/File:Figure_Showing_Entropy_at_0_K.png))

It is certainly true that for the great majority of materials we end up with a crystalline material at sufficiently low materials (although there are odd exceptions like liquid helium). However, it should be mentioned that a completely *perfect* crystal can only be grown at zero Kelvin! It is not possible to grow anything at 0 K however. At any finite temperature the crystal always incorporates defects, more so if grown at higher temperatures. When cooled down very slowly the defects tend to be ejected from the lattice for the crystal to reach a new equilibrium with less defects. This tendency towards less and less disorder upon cooling is what the third law is all about.

However, the ordering process often becomes impossibly slow, certainly when approaching absolute zero. This means that real crystals always have *some* frozen in imperfections. Thus there is always *some* residual entropy. Fortunately, the effect is often too small to be measured. This is what allows us to ignore it in many cases (but not all). We could state the Third law of thermodynamics as follows:

:::note [definition] Definition: Third law of thermodynamics

The entropy of a perfect crystal approaches zero when $T$ approaches zero (but perfect crystals do not exist).

$$ \lim_{T\rightarrow 0}{S^\circ(T)} =0 $$ {eq:1} n=1
:::

Another complication arises when the system undergoes a phase transition, e.g. the melting of ice. As we can write:

$$ Δ_{fus}H= q_P $$

If ice and water are in equilibrium with each other the process is quite reversible and so we have:

$$ Δ_{fus}S = \dfrac{q_{rev}}{T}= \dfrac{Δ_{fus}H}{T} $$

This means that at the melting point the curve for $S$ makes a sudden jump by this amount because all this happens at one an the same temperature. Entropies are typically calculated from calorimetric data (e.g., $C_P$ measurements) and tabulated in standard molar form.

There are some clear trends in the entropy values of elements and molecules, e.g. when the noble gas gets heavier this induces more entropy. This is a direct consequence of the particle in the box formula. It has mass in the denominator and therefore the energy levels get more crowded together when $m$ increases: more energy levels, more entropy.

> The energy levels get more crowded together when $m$ increases: more energy levels, more entropy

There are tables for $H^\circ(T)-H^\circ(0)$, $S^\circ(T)$ and $G^\circ(T)-H^\circ(0)$ as a function of temperature for numerous substances. As we discussed before the plimsoll defines are standard state in terms of pressure (1 bar) and of concentration reference states, if applicable, but temperature is the one of interest.

:::note [note] Residual Entropy in Carbon Monoxide

For most substances, the assumption made in Equation [ref:eq:1] regarding the Third Law is generally valid; however, there are notable exceptions, such as carbon monoxide. In its solid state, carbon monoxide molecules would ideally be fully ordered at absolute zero. However, due to the similar sizes of carbon and oxygen atoms and the molecule’s weak dipole, it is possible for some molecules to be positioned "upside down"—with oxygen occupying a carbon site and vice versa (i.e., the $\ce{C#O}$ and $\ce{O#C}$ orientations are nearly isoenergetic in the lattice). When the crystal forms at higher temperatures, this disorder increases entropy, thereby lowering the Gibbs energy ($G$). Essentially, if each molecule can be placed into the lattice in two different orientations, the total number of possible configurations ($W_{\text{disorder}}$) for $N$ molecules is $2^N$.

This leads to an additional contribution to the entropy of

$$ S_{disorder} = k\,\ln{W_{disorder}} = k\,\ln 2^N = N k \ln 2 = 5.7\, \text{J/(mol K)} $$

At lower temperatures, the entropy term in $\Delta G= \Delta H−T \Delta S$ diminishes in significance, and the crystal should theoretically transition to a more ordered state with lower entropy. However, in practice, the kinetics of this process are extremely slow, preventing the ordering from occurring. As a result, solid $\ce{CO}$ retains {term:a nonzero entropy} even as it approaches absolute zero (Equation [ref:eq:1]).

In principle *all* crystalline materials have this effect to some extent, but $\ce{CO}$ is unusual because the concentration of 'wrongly aligned' entities is of the order of 50% rather than say 1 in 10<sup>13</sup> (a typical defect concentration in say single crystal silicon). The experimental residual entropy of $\ce{CO}$ is approximately 4.4 J/(mol K); this indicates that the two orientations of $\ce{CO}$ are not exactly identical in energy (i.e., equal probability of forming), which would give a residulate entropy of 5.7 J/(mol K).
:::

:::exercise {exr:21.2.1}

The entropy of a crystal composed of one mole of identical molecules is measured to be 9.134 J/K at 0 K. Determine the number of possible orientations each molecule can adopt within the crystal. Additionally, illustrate a molecule that would be expected to exhibit this behavior.
:::

## Summary

Residual entropy quantifies the remaining disorder or randomness in a system even at absolute zero temperature (0 K). According to the Third Law of Thermodynamics, the entropy of a perfect crystal approaches zero as the temperature nears absolute zero. However, some systems retain a nonzero entropy at 0 K, exhibiting residual entropy. This phenomenon represents an exception to the Third Law rather than a contradiction. The law assumes a perfect crystal with a singular, unique ground state, whereas systems with residual entropy, such as carbon monoxide, possess multiple degenerate ground states.
