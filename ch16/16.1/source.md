<!-- LibreTexts page 13656: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/16:_The_Properties_of_Gases/16.01:_All_Dilute_Gases_Behave_Ideally -->
# All Dilute Gases Behave Ideally

Ideal gases have no interactions between the particles, hence, the particles do not exert forces on each other. However, particles do experience a force when they collide with the walls of the container. Let us assume that each collision with a wall is elastic. Let us assume that the gas is in a cubic box of length $a$ and that two of the walls are located at $x = 0$ and at $x = a$. Thus, a particle moving along the $x$ direction will eventually collide with one of these walls and will exert a force on the wall when it strikes it, which we will denote as $F_x$. Since every action has an equal and opposite reaction, the wall exerts a force $-F_x$ on the particle.

> IMAGE {img:1} src=media/417799-Gas-Container-Collisions.png width=235px
> alt: Diagram illustrating particles represented as red circles, with a gray barrier and a force \( F_x \) indicated by a horizontal arrow.

According to Newton’s second law, the force $-F_x$ on the particle in this direction gives rise to an acceleration via

$$ -F_x = ma_x = m\dfrac{\Delta v_x}{\Delta t} $$ {eq:2.1} n=1

Here, $t$ represents the time interval between collisions with the same wall of the box. In an elastic collision, all that happens to the velocity is that it changes sign. Thus, if $v_x$ is the velocity in the $x$ direction before the collision, then $-v_x$ is the velocity after, and $\Delta v_x = -v_x - v_x = -2v_x$, so that

$$ -F_x = -2m\dfrac{v_x}{\Delta t} $$ {eq:2.2} n=2

Since the particles have no forces acting upon them, except for when they collide iwht the wall container, the particles move at constant speed. Thus, a collision between a particle and, say, the wall at $x = 0$ will not change the particle’s speed. Before it strikes this wall again, it will proceed to the wall at $x = a$ first, bounce off that wall, and then return to the wall at $x = 0$. The total distance in the $x$ direction traversed is $2a$, and since the speed in the $x$ direction is always $v_x$, the interval $\Delta t = \dfrac{2a}{v_x}$. Consequently, the force is:

$$ -F_x = -\dfrac{mv_x^2}{a} $$ {eq:2.3} n=3

Thus, the force that the particle exerts on the wall is:

$$ F_x = \dfrac{mv_x^2}{a} $$ {eq:2.4} n=4

The mechanical definition of pressure is the average force over area:

$$ P = \dfrac{\langle F \rangle}{A} $$ {eq:2.5} n=5

where $\langle F \rangle$ is the average force exerted by all $N$ particles on a wall of the box of area $A$. Here $A = a^2$. If we use the wall at $x = 0$ we have been considering, then

$$ P = \dfrac{N \langle F_x \rangle}{a^2} $$ {eq:2.6} n=6

because we have $N$ particles hitting the wall. Hence:

$$ P = \dfrac{N m \langle v_x^2 \rangle}{a^3} $$ {eq:2.7} n=7

from our study of the Maxwell-Boltzmann distribution, we found that:

$$ \langle v_x ^2 \rangle = \dfrac{k_B T}{m} $$ {eq:2.8} n=8

Hence, since $a^3 = V$:

$$ \begin{split}P &= \dfrac{N k_B T}{V} \\ &= \dfrac{n R T}{V}  \end{split} $$ {eq:2.9} n=9

which is the ideal gas law. It relates the pressure, volume, and temperature of an ideal gas and is referred to as an equation of state. An equation of state is a relation between variables and describes the state of matter under a set of given physical conditions. One way to visualize any equation of state is to plot *isotherms*, which are graphs of $P$ vs. $V$ at fixed values of $T$ . For the ideal-gas equation of state, some of the isotherms are shown in the figure below (left panel): If we plot $P$ vs. $T$ at fixed volume (called the *isochores*), we obtain the plot in the right panel. What is important to note, here, is that an ideal gas can exist *only* as a gas. It is not possible for an ideal gas to condense into some kind of “ideal liquid”. In other words, a phase transition from gas to liquid can be modeled only if interparticle interactions are properly accounted for.

> FIGURE {fig:16.1.1} src=media/61237-Tuckerman_Screenshot_2-.png width=417px
> alt: Two diagrams depicting thermodynamic processes: left shows isotherms (T1, T2, T3) in a P-V graph; right illustrates lines (P1, P2, P3) in a similar context.
> caption: (Left) Pressure vs. volume for different temperatures (isotherms of the ideal-gas equation of state. (Right) Pressure vs. temperature for different densities $\rho = N/V$.

We can rearrange the ideal gas equation of state to put all the constants and variables on one side:

$$ \dfrac{P V}{n R T} = 1 = Z $$ {eq:2.11} n=10

$Z$ is called the *compressibility* of the gas. In an ideal gas, if we compress the gas by increasing $P$ , the volume decreases as well so as to keep $Z =1$. For a real gas, $Z$, therefore, gives us a measure of how much the gas deviates from ideal-gas behavior.

> FIGURE {fig:16.1.2} src=media/58236-CNX_Chem_09_06_ZvsPgraph.jpg width=560
> alt: Graph depicting multiple curves representing different gases (N₂, CH₄, H₂, CO₂) over a range of pressures (0-1600).
> caption: A graph of the compressibility factor (Z) vs. pressure shows that gases can exhibit significant deviations from the behavior predicted by the ideal gas law. from Openstax (CC-BY)

Figure 16.1.2 shows a plot of $Z$ vs. $P$ for several real gases and for an ideal gas. The plot shows that for sufficiently low pressures (hence, low densities), each gas approaches ideal-gas behavior, as expected.

## Extensive and Intensive Properties in Thermodynamics

Before we discuss ensembles and how we construct them, we need to introduce an important distinction between different types of thermodynamic properties that are used to characterize the ensemble. This distinction is *extensive* and *intensive* properties.

Thermodynamics always divides the universe into a *system* and its *surroundings* with a *boundary* between them. The unity of all three of these is the thermodynamic *universe*.

![Diagram of a system with a labeled boundary, surrounded by the surrounding area, shown against a blue background.](media/417800-System-Surrounding-Boundary.png)

Now suppose we allow the system to grow in such a way that both the number of particles and the volume grow with the ratio $N/V$ remaining constant. Any property that increases as we grow the system in this way is called an *extensive* property. Any property that remains the same as we grow the system in this way is called *intensive*.

The ideal gas equation of state can be written in an extensive form:

$$ \begin{split} P V &= n R T \\ P \bar{V} &= R T \\ P &= \rho R T  \end{split} $$ {eq:2.10} n=11

where $\bar{V} = V/n$ is called the molar volume and $\rho = N/V$ is called density. Unlike $V$ , which increases as the number of moles increases (an *extensive* quantity, $\bar{V}$ and $\rho$ do not exhibit this dependence and, therefore, are called *intensive*. Compressibility can also be written in an intensive form:

$$ \begin{split} Z &= \dfrac{PV}{nRT} \\ &= \dfrac{P\bar{V}}{RT} \\ &= \dfrac{P}{\rho RT} \end{split} $$

Some examples of intensive and extensive properties include:

- Extensive: number of particles ($N$), moles ($n$), volume ($V$), mass ($m$), energy, free energy
- Intensive: pressure ($P$), density ($\rho$), molar heat capacity ($C$), temperature ($T$)

## Contributors and Attributions {section:attributions}

- [Mark Tuckerman ](http://chemistry.fas.nyu.edu/object/marketuckerman.html)([New York University](http://chemistry.fas.nyu.edu/page/home))
- Jerry LaRue (Chapman University)
