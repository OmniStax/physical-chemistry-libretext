<!-- LibreTexts page 13657: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/16:_The_Properties_of_Gases/16.02:_van_der_Waals_and_Redlich-Kwong_Equations_of_State -->
# van der Waals and Redlich-Kwong Equations of State

The ideal gas law is valid for low pressures, where the finite volume of particles and intermolecular attractions do not have a large impact. At higher pressures, we must account for these factors. The van der Waals and Redlich-Kwong equations of states are equations of state that attempt to account for real gas behavior by modifying the ideal gas law with two additional parameters.

## The Van der Waals Equation of State

The van der Waals Equation of State is an equation relating the density of gases and liquids to the pressure, volume, and temperature conditions (i.e., it is a thermodynamic equation of state). It can be viewed as an adjustment to the ideal gas law that takes into account the non-zero volume of gas molecules and inter-particle attraction using correction terms $a$ and $b$. It was derived in 1873 by Johannes Diderik van der Waals, who received the Nobel Prize in 1910 for this work. The van der Waals equation of state is:

$$ P = \dfrac{nRT}{V - nb} - \dfrac{an^2}{V^2} $$ {eq:Eq7} n=1

Equation [ref:eq:Eq7] can also be rewritten as

$$ \left(P+{\dfrac {n^{2}a}{V^{2}}}\right)\left(V-nb\right)=nRT $$

If the correction terms $a$ and $b$ go to zero, the equation reduces to the ideal gas equation of state:

$$ PV=nRT $$

Let's first look first at the correction term $b$, which represents the volumes of the particles and assumes a hard-wall potential, $u_o(r)$. This potential energy term describes a system of hard sphere “billiard balls” of diameter $\sigma$. Figure 16.2.1 shows two of these billiard ball type particles at the point of contact (i.e, the distance of closest approach). At this point, they undergo a collision and separate, so they cannot be closer than that distance.

> FIGURE {fig:16.2.1} src=media/63561-Tuckerman_Screenshot_5-1.png width=221px
> alt: Two overlapping spheres are illustrated, with an arrow pointing away from one sphere. A dashed line connects points on both spheres.
> caption: Two hard spheres of diameter $\sigma$ at closest contact. The distance between their centers is also $\sigma$. A sphere of radius $\sigma$ just containing the two particles is shown in cross-section.

The distance between their centers is also $\sigma$. Because of this distance of closest approach, the total volume available to the particles is not the volume of the container, $V$, but some volume less than $V$. This reduction in volume can be calculated. Figure 16.2.1 shows a shaded sphere that just contains the pair of billiard ball particles. The volume of this sphere is the volume excluded from any two particles. The radius of the sphere is $\sigma$ and the excluded volume for the two particles is $4 \pi \sigma^3/3$, which is the volume of the shaded sphere. From this, we see that the excluded volume for any *one* particle is just half of this or $\frac{2}{3} \pi \sigma^3$. The excluded volume for a mole of such particles is the parameter $b$:

$$ b = \dfrac{2}{3} \pi \sigma^3 N_0 $$

Given $n$ moles of gas, the total excluded volume is then $nb$, so that the total *available* volume is $V - nb$.

Let's turn our attention the $a$, which represents the intermolecular attractions of the particles. Molecular attractions tend to make the $P$ exerted by the gas less than that predicted by the ideal gas law at low pressures. $P$ is force over area:

$$ P=\frac{F}{A} $$

Pressure is proportion to the net force on the wall of the container:

![Diagram showing red particles on one side of a gray barrier with a line indicating separation.](media/416021-Container_Wall_Forces.png)

The net force is the force of the molecules impacting the container wall minus the intermolecular attraction of the molecules:

$$ {\bar{F}}_{Net}={\bar{F}}_{Impact}-{\bar{F}}_{Attract} $$

Therefore, the pressure will be less for the real gas than the ideal gas. We can add a correction term to pressure to account for intermolecular attractions:

$$ P_{VDW}=P_{Real}+a\left(?\right) $$

$V$ does influence the amount of intermolecular attraction because $P$ is reduced as $V$ is increased:

$$ P\propto\frac{1}{V} $$

And pressure is proportional to the number of attractive interactions:

# of molecular interactions $\propto P^2$

# of molecular interactions $\propto \frac{1}{V^2}$

We now have an expression for the van der Waals $P$:

$$ P=P_{Real}+\frac{an^2}{V^2} $$

The constants $a$ and $b$ depend on the substance. Some typical values are:<sup>1</sup>

> TABLE {tab:1} cols=3

| Molecule | $a\;\sf\left(\frac{L^2\cdot bar}{{mol}^2}\right)$ | $b\;\sf\left(\frac{L}{mole}\right)$ |
| --- | --- | --- |
| $\sf H_2O$ | 5.536 | 0.03049 |
| $\sf N_2$ | 1.43 | 0.03913 |
| $\sf CH_4$ | 2.283 | 0.04278 |
| $\sf C_2H_6$ | 5.562 | 0.0638 |

1. R. C. Weast (1972). [*Handbook of Chemistry and Physics 53rd Edition*](https://books.google.com/books?id=vyvdSAAACAAJ). Chemical Rubber Pub.

## Redlich-Kwong Equation of State

The van der Waals Equation of State had to wait almost 100 years before a real, successful improvement was introduced to it. This progress occurred once researchers committed themselves to finding the empirical temperature dependency of the attraction parameter $a$ proposed by van der Waals. In contrast, very little attention has been paid to modifying the parameter $b$ for co-volume. It makes a lot of sense that $b$ would not be modified by temperature, because it represents the *volume* of the molecules, which should not be affected by their kinetic energy (measured in terms of temperature). The very first noteworthy successful modification to the attraction parameter came with the publication of the equation of state of Redlich-Kwong in 1949.

The Redlich–Kwong equation of state is an empirical, algebraic equation that relates temperature, pressure, and volume of gases. It is generally more accurate than the van der Waals and the ideal gas equations of state at temperatures above the critical temperature. It was formulated by Otto Redlich and Joseph Neng Shun Kwong in 1949, who showed that a simple two-parameter equation of state could well reflect reality in many situations. Redlich and Kwong revised the van der Waals Equation of State (Equation [ref:eq:Eq7]) and proposed the following expressions:

$$ \left( P + \dfrac{a}{\sqrt{T} \bar{V} (\bar{V} + b)} \right) ( \bar{V}-b) = RT $$ {eq:10.1} n=2

The fundamental change they introduced was to the functional form of $\partial P_\text{attraction}$. Additionally, they introduced the co-volume $b$ into the denominator of this functional form. The important concept here is that the attraction parameter $a$ of van der Waals needed to be made a function of temperature to do a better job of quantitatively matching experimental data. This was a realization that van der Waals had suggested, but no actual functional dependency had been introduced until the Redlich-Kwong equation.

We know what follows at this point. To come up with an expression for $a$ and $b$ of Equation [ref:eq:10.1], we apply the criticality conditions to this equation of state. As we recall, imposing the criticality conditions allows us to relate the coefficients $a$ and $b$ to the critical properties ($P_c$, $T_c$) of the substance. Once we have done that, we obtain the definition of $a$ and $b$ for the Redlich-Kwong equation of state:

$$ a =0.42780 \dfrac{R^2T_c^{2.5}}{P_c} $$ {eq:10.2a} n=3

$$ b =0.086640 \dfrac{RT_c}{P_c} $$ {eq:10.2b} n=4

The Redlich-Kwong equation of state radically improved, in a quantitative sense, the predictions of the van der Waals equation of state. We now recall that van der Waals-type equations are cubic because they are cubic polynomials in molar volume and compressibility factor. It comes as no surprise then, that we can transform Equation [ref:eq:10.1] into:

$$ \bar{v} ^3 - \left( \dfrac{RT}{P} \right)\bar{v}^2 + \dfrac{1}{P} \left( \dfrac{1}{T^{0.5}} - bRT - Pb^2 \right) \bar{v} - \dfrac{ab}{PT^{0.5}} = 0 $$ {eq:10.3} n=5

and, by defining the following parameters:

$$ A = \dfrac{aP}{R^2T^{2.5}} $$ {eq:10.3a} n=6

$$ B =\dfrac{bP}{RT} $$ {eq:10.3b} n=7

and introducing the compressibility factor definition:

$$ Z = \dfrac{P\bar{v}}{RT} $$

we get:

$$ Z^3 -Z^2 + (A -B -B^2) Z -AB =0 $$ {eq:10.4} n=8

We may also verify the two-parameter corresponding state theory by introducing Equations [ref:eq:10.2a], [ref:eq:10.2b], and [ref:eq:10.3] into Equation [ref:eq:10.4]:

$$ Z^3−Z^2+\dfrac{P_r}{T_r} \left( \dfrac{0.42748}{T_r^{1.5}} −0.08664−0.007506 \dfrac{P_r}{T_r} \right)Z−0.03704 \dfrac{P^2_r}{T^{3.5}_r}=0 $$ {eq:10.5} n=9

Where:

$$ P_r=\frac{P}{P_c} $$

$$ T_r=\frac{T}{T_c} $$

$P_r$ and $T_r$ are the pressure and temperature at the reduced state. See [Section 16.4](page:13659) for more information on reduced states. In Equation [ref:eq:10.5], we can observe the same thing that we saw with the van der Waals equation of state: gases at corresponding states have the same properties. Equation [ref:eq:10.5] is particularly clear about it: any two different gases at the same $P_r$, $T_r$ condition have the same compressibility factor.

Just as any other cubic equation of state, Equations [ref:eq:10.1] through [ref:eq:10.5], as they stand, are to be applied to pure substances. For mixtures, however, we apply *the same equation,* but we impose certain mixing rules to obtain $a$ and $b$, which are functions of the properties of the pure components. Strictly speaking, we create a new “pseudo” pure substance that has the average properties of the mixture. Redlich-Kwong preserved the same mixing rules that van der Waals proposed for his eqution of state:

$$ a_m = \sum_i \sum_j y_iy_j a_{ij} $$

with

$$ a_{ij} = \sqrt{a_ia_j} $$

and

$$ b_{m}=\sum_i y_ib_i $$

Naturally, Redlich and Kwong did not have the last word on possible improvements to the van der Waals equation of state. The Redlich-Kwong equation of state, as shown here, is no longer used in practical applications. Research continued and brought with it new attempts to improve the Redlich-Kwong equation of state. After more than two decades, a modified Redlich-Kwong equation of state with very good potential was developed.

## Contributors and Attributions {section:attributions}

- [Mark Tuckerman ](http://chemistry.fas.nyu.edu/object/marketuckerman.html)([New York University](http://chemistry.fas.nyu.edu/page/home))
- [Michael Adewumi](http://www.eme.psu.edu/faculty/adewumi) (The Pennsylvania State University) Vice Provost for Global Program, Professor of Petroleum and Natural Gas Engineering
- Jerry LaRue (Chapman University)
