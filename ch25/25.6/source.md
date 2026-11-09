<!-- LibreTexts page 14518: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/25:_Solutions_II_-_Nonvolatile_Solutes/25.06:_The_Debye-Huckel_Theory -->
# The Debye-Hückel Theory

As ionic solutions are very common in chemistry, having to measure all activity coefficients ($γ_{\pm}$) for all possible solute-solvent combinations is a pretty daunting task, even though in times past extensive tabulation has taken place. We should be grateful for the rich legacy that our predecessors have left us in this respect (it would be hard to get any funding to do such tedious work today). Of course, it would be very desirable to be able to *calculate* $γ_{\pm}$ values from first principles or if that fails by semi-empirical means. Fortunately, considerable progress has been made on this front as well. We can only scratch the surface of that topic in this course and will briefly discuss the simplest approach due to Debye and Hückel

Debye and Hückel came up with a theoretical expression that makes is possible to predict mean ionic activity coefficients as *sufficiently* dilute concentrations. The theory considers the vicinity of each ion as an atmosphere-like cloud of charges of opposite sign that cancels out the charge of the central ion (Figure 25.6.1). From a distance the cloud looks neutral. The quantity $1/κ$ is a measure for the size of this cloud and $\kappa$ is the *{term:Debye-length}*. Its size depends on the concentration of all other ions.

> FIGURE {fig:25.6.1} src=media/424173-Ionenverteilung_inLoesung.svg width=350px
> alt: Diagram showing positive and negative charges in a cluster, with overlapping blue and red circles representing oppositely charged regions.
> caption: An idealized representation of a solution of a 1:1 electrolyte. (CC BY-SA 3.0 unported; [Roland1952](https://commons.wikimedia.org/wiki/User:Roland1952) via [Wikipedia](https://commons.wikimedia.org/wiki/File:Ionenverteilung_inLoesung.svg))

## Ionic Strength

To take the effect from all other ions into account, it is useful to define the *{term:ionic strength}* ($I$) as:

$$ I =\dfrac{1}{2} \sum m_iz_i^2 $$

where $m_i$ is the molality of ion $i$ and $z_i$ is its charge coefficient. Note that highly charged ions (e.g. $z=3+$) contribute strongly (nine times more than +1 ions), but the formula is *linear* in the molality. Using the ionic strength the Debye-length becomes:

$$ κ^2 = constant \, I $$

The constant contains $kT$ and $ε_rε_o$ in the denominator and the number of Avogadro $N_A$ and the square of the charge of the electron $e$ in the numerator:

$$ constant= 2000 \dfrac{e^2N_A}{ε_rε_okT} $$

The Debye length and the logarithmic mean ionic activity coefficient are proportional:

$$ \ln γ_{\pm} \propto κ $$

Again there are a number of factors in the proportionality constant:

$$ \ln γ_± = -|q_+q_-| \dfrac{κ}{8πε_rε_okT} $$

:::note [note] Note

The factors $ε_r$ and $ε_o$ are the relative permittivity of the medium and the permittivity of vacuum, respectively. Note that the factor $8πε_rε_o$ is *specific* to the SI system of units. In cgs units the expression would look different, because the permittivities are defined differently in that system
:::

If there is only one salt being dissolved, the ionic strength depends linearly on its concentration, the Debye length κ and $\ln γ_±$, therefore, go as the *square root of concentration* (usually molality):

$$ \ln \gamma_{\pm} \propto \sqrt{m} $$

If there are other ions present the ionic strength involves *all* of them. This fact is sometimes used to keep ionic strength constant while changing the concentration of one particular ion. Say we wish to lower the concentration of Cu<sup>2</sup><sup>+</sup> in a redox reaction but we want to keep activity coefficients the same as much as possible. We could then *replace* it by an ion of the same charge say Zn<sup>2</sup><sup>+</sup> that does not partake in the reaction. A good way to do that is to dilute the copper solution with a zinc solution of the same concentration instead of with just solvent. The mean activity coefficient is given by the logarithm of this quantity as follows:

$$ \log _{10}\gamma _{\pm }=-Az_{j}^{2}{\frac {\sqrt {I}}{1+Ba_{0}{\sqrt {I}}}} $$ {eq:DH} n=1

with:

$$ A={\frac {e^{2}B}{2.303\times 8\pi \epsilon _{0}\epsilon _{r}k_{\rm {B}}T}} $$

$$ B=\left({\frac {2e^{2}N}{\epsilon _{0}\epsilon _{r}k_{\rm {B}}T}}\right)^{1/2} $$

where $I$ is the ionic strength and $a_0$ is a parameter that represents the distance of closest approach of ions. For aqueous solutions at 25 °C $A = 0.51\, mol^{−1}/2dm^{3/2}$ and $B = 3.29 nm^{−1}mol^{−1}/2dm^{3/2}$.

Unfortunately this theory only works at very low concentrations and is therefore also known as the {term:Debye limiting law} (Figure 25.6.2). There are a number of refinements that aim at extending the range of validity of the theory to be able to work at somewhat higher concentrations. These are discussed in the next section.

> FIGURE {fig:25.6.2} src=media/424174-D-H_Limiting_law.png
> alt: Graph showing the relationship between ionic strength (x-axis) and log gamma (y-axis) with a downward trendline.
> caption: Experimental $\log \gamma _{\pm }$ values for $\ce{KBr}$ at 25°C (points) and Debye–Hückel limiting law (coloured line) (Public Domain; [Petergans](https://en.wikipedia.org/wiki/User:Petergans) via [Wikipedia](https://en.wikipedia.org/wiki/Debye%E2%80%93H%C3%BCckel_theory#/media/File:D-H_Limiting_law.png))

:::note [emphasis]

The most significant aspect of Equation [ref:eq:DH] is the prediction that the mean activity coefficient is a function of *ionic strength* rather than the electrolyte concentration. For very low values of the ionic strength the value of the denominator in the expression above becomes nearly equal to one. In this situation the mean activity coefficient is proportional to the square root of the ionic strength.
:::

:::note [note] Importance for Colloids

When a solid is formed by a reaction from solution it is sometimes possible that it remains dispersed as very small particles in the solvent. The sizes typically range in the nanometers This is why it has become fashionable to call them *nanoparticles*, although they had been known as *colloidal particles* since the mid nineteenth century. They are smaller than the wavelength of the visible reason. This causes liquids that contain them to remain *clear*, although they can at times be beautifully colored. A good example is the reduction of AuCl<sub>4</sub><sup>-</sup> with citrate to metallic gold. This produces clear wine red solutions, even at tiny gold concentrations.

$$ \ce{2n AuCl4(aq)^{-} + n \,citrate^{3-}(aq) + 2n\, H_2O(l) \rightarrow} \\[4pt] \ce{2n\, Au(colloid) + 3n\, CH2O(aq) + 3n\, CO2(g) + 8n \,Cl^{-}(aq) + 3n\, H^{+}(aq)} $$

The reason the gold does not precipitate completely is typically that the nanoparticle (AuNP) formed during the reaction are *charged* by the attachment of some of the ionic species in solution to its surface. This results in an charged particle with an atmosphere with a certain Debye length around it (Figure 25.6.3). This charged cloud prevents the particle form coalescing with other particles by electrostatic repulsion.

> FIGURE {fig:25.6.3} src=media/78365-166602294368084616.png width=292
> alt: Diagram showing a gold nanoparticle surrounded by blue positive ions and red electrons, illustrating its structure.
> caption: Potential difference as a function of distance from gold nanoparticle surface. (CC-SA-BY-3.0; Larryisgood)

Such a system is called a *{term:colloid.}* Of course these systems are *{term:metastable}*. Often they have a pretty small threshold to crashing to a real precipitate under influence of the strong van der Waals interactions that the particles experience once they manage to get in close contact. Under the right conditions colloids can survive for a long time. Some gold colloids prepared by Faraday in the 1850's are still stable today.

It will be clear from the above that addition of a salt -particularly containing highly charged ions like 3+ or 3-- may destabilize the colloid because the ionic strength will changed drastically and this will affect the Debye length.
:::
