<!-- LibreTexts page 13652: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/15:_Lasers_Laser_Spectroscopy_and_Photochemistry/15.06:_The_Helium-Neon_Laser -->
# The Helium-Neon Laser

The He-Ne laser was the first continuous-wave (cw) laser invented. A few months after Maiman announced his invention of the pulsed ruby laser, Ali Javan and his associates W. R. Bennet and D. R. Herriott announced their creation of a cw He-Ne laser. This gas laser is a four-level laser that uses helium atoms to excite neon atoms. The atomic transitions in the neon produce the laser light. The most commonly used neon transition in these lasers produces red light at 632.8 nm. These lasers can also produce green and yellow light in the visible region, as well as several UV and IR wavelengths (Javan's first He-Ne operated in the IR at 1152.3 nm). By using highly reflective mirrors designed for one of these many possible lasing transitions, a given He-Ne's output is made to operate at a single wavelength.

He-Ne lasers are not sources of high-power laser light, typically producing a few to tens of mW (milli-Watt, or $10^{-3}$ W) of power. Probably one of the most important features of these lasers is that they are highly stable, both in terms of their wavelength (mode stability) and intensity of their output light (low jitter in power level). For these reasons, He-Ne lasers are often used to stabilize other lasers. They are also used in applications, such as holography, where mode stability is important. Until the mid-1990's, He-Ne lasers were the dominant type of lasers produced for low-power applications - from range finding to scanning to optical transmission, to laser pointers, etc. Recently, however, other types of lasers, most notably the semiconductor lasers, seem to have won the competition because of reduced costs.

> FIGURE {fig:15.6.1} src=media/402427-energy_diagram_for_He-Ne_laser.svg width=611px
> alt: energy diagram for He-Ne laser.svg
> caption: An energy level diagram for He and Ne in a He-Ne laser. The pumping creates helium atoms in two excited states. These excited states have energies similar to two sets of four excited states in the Ne atoms. Thus, collisions between the excited He atoms and Ne atoms can lead to nonradiative energy transfer. The excited state Ne atoms have lifetimes that enable a population inversion and lasing. (CC BY-NC; Ümit Kaya via LibreTexts)

The energy level diagram in figure 15.6.1 shows the two excited states of a helium atom, the 2 <sup>3</sup>S and 2 <sup>1</sup>S, that get populated as a result of electromagnetic pumping. Both of these states are metastable and do not allow de-excitations via radiative transitions. Instead, the helium atoms give off their energy to neon atoms through collisional excitation. In this way, the 4s and 5s levels in neon get populated.

$$ He^* (2s^3 \, S_1) + Ne(g) \rightarrow He(g) + Ne^*(2p^54s) $$

$$ He^* (2s^1 \, S_0) + Ne(g) \rightarrow He(g) + Ne^*(2p^55s) $$

These are the two upper lasing levels, each for a separate set of lasing transitions. Each of these upper lasing levels contains 4 states (<sup>3</sup>P<sub>2</sub>, <sup>3</sup>P<sub>1</sub>, <sup>3</sup>P<sub>0</sub>, <sup>1</sup>P<sub>1</sub>). Radiative decay from the 5s to the 4s levels is forbidden. So, ten states associated with the 4p and 3p levels serve as the lower lasing levels and rapidly decay into the metastable 3s level. In this way, population inversion is easily achieved in the He-Ne mixture. The 632.8 nm laser transition, for example, involves the 5s and 3p levels, as shown above. Table 15.6.1 lists parameters of several of the Ne transitions.

> TABLE {tab:1} cols=4
> caption: Table 15.6.1: Several Lasing Transitions for an Excited State Ne Atom

| Transition | $\lambda$ (nm) | Einstein Coefficient A (s<sup>-1</sup>) | Relative Intensity |
| --- | --- | --- | --- |
| 5s<sup>1</sup> P<sub>1</sub> → 3p<sup>3</sup> P<sub>1</sub> | 640.1 | 0.60 x 10<sup>6</sup> | 100 |
| 5s<sup>1</sup> P<sub>1</sub> → 3p<sup>3</sup> P0 | 635.2 | 0.70 x 10<sup>6</sup> | 100 |
| 5s<sup>1</sup> P<sub>1</sub> → 3p<sup>3</sup> P2 | 632.8 | 6.56 x 10<sup>6</sup> | 300 |
| 5s<sup>1</sup> P<sub>1</sub> → 3p<sup>1</sup> P<sub>1</sub> | 629.4 | 1.35 x 10<sup>6</sup> | 100 |
| 5s<sup>1</sup> P<sub>1</sub> → 3p<sup>1</sup> D<sub>2</sub> | 611.8 | 1.28 x 10<sup>6</sup> | 100 |

In most He-Ne lasers the gas, a mixture of 5 parts helium to 1 part neon, is contained in a sealed glass tube with a narrow (2 to 3 mm diameter) bore as shown above in figure 15.6.2. Typically the laser's optical cavity mirrors, the high reflector and the output coupler form the two sealing caps for the narrow bore tube. High voltage electrodes create a narrow electric discharge along the length of this tube, which then leads to the narrow beam of laser light.

> FIGURE {fig:15.6.2} src=media/402428-HeNe_laser_cavity.svg
> alt: HeNe laser cavity.svg
> caption: A He-Ne laser cavity. (CC BY-NC; Ümit Kaya via LibreTexts)

Many He-Ne lasers also contain a ballast which serves to maintain the desired gas mixture. Since some of the atoms may get embedded in the glass and/or the electrodes as they accelerate within the discharge, in the absence of a ballast the lasing mixture would not last very long. To further prolong the useable life of the laser, some of these lasers also use "getters", often metals such as titanium, that absorb impurities in the gas. Figure 15.6.3 below shows a He-Ne laser with a ballast.

> FIGURE {fig:15.6.3} src=media/106508-HeNeTube.jpg width=533px
> alt: HeNeTube.jpg
> caption: A commercial He-Ne tube. The thicker cylinder closest to the meter-stick (shown for scale) is the ballast. The thinner tube houses the resonant cavity where the lasing occurs. Notice the two mirrors that seal the two ends of the bore. For mode stability reasons, these mirrors are concave; they serve as the output coupler and the high reflector. (Copyright; author via source)

A typical commercially available He-Ne produces about a few mW of 632.8 nm light with a beam width of a few millimeters at an overall efficiency of near 0.1%. This means that for every 1 Watt of input power from the power supply, 1 mW of laser light is produced. Still, because of their long operating lifetime of 20,000 hours or more and their relatively low manufacturing cost, He-Ne lasers are among the most popular gas lasers.
