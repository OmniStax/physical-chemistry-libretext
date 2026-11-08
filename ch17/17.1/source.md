<!-- LibreTexts page 2405: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17:_Boltzmann_Factor_and_Partition_Functions/17.01:_The_Boltzmann_Factor_is_used_to_Approximate_the_Fraction_of_Particles_in_a_Large_System -->
# The Boltzmann Factor is used to Approximate the Fraction of Particles in a Large System

Statistical Mechanics provides the connection between microscopic motion of individual atoms of matter and macroscopically observable properties such as temperature, pressure, entropy, free energy, heat capacity, chemical potential, viscosity, spectra, reaction rates, etc.

### The Microscopic Laws of Motion

Consider a system of $N$ classical particles. The particles are confined to a particular region of space by a container of volume $V$. In classical mechanics, the state of each particle is specified by giving its position and its velocity, i.e., by telling where it is and where it is going. The position of particle $i$ is simply a vector of three coordinates $r_i = \begin{pmatrix} x_i, y_i, z_i \end{pmatrix}$, and its velocity $\textbf{v}_i$ is also a vector $\begin{pmatrix}v_{x_i}, v_{y_i}, v_{z_i} \end{pmatrix}$ of the three velocity components. Thus, if we specify, at any instant in time, these six numbers, we know everything there is to know about the state of particle $i$.

The particles in our system have a finite kinetic energy and are therefore in constant motion, driven by the forces they exert on each other (and any external forces which may be present). At a given instant in time $t$, the Cartesian positions of the particles are $\textbf{r}_1(t), \ldots, \textbf{r}_N(t)$, and the velocities at $t$ are related to the positions by differentiation:

$$ \textbf{v}_i(t) = \dfrac{d \textbf{r}_i}{dt} = \dot{\textbf{r}}_i $$ {eq:2.12} n=1

In order to determine the positions and velocities as function of time, we need the classical laws of motion, particularly, Newton’s second law. Newton’s second law states that the particles move under the action of the forces the particles exert on each other and under any forces present due to external fields. Let these forces be denoted $\textbf{F}_1, \textbf{F}_2, \ldots, \textbf{F}_N$ . Note that these forces are functions of the particle positions:

$$ \textbf{F}_i = \textbf{F}_i(\textbf{r}_1, \ldots, \textbf{r}_N) $$ {eq:2.13} n=2

which is known as a force field (because it is a function of positions). Given these forces, the time evolution of the positions of the particles is then given by Newton’s second law of motion:

$$ m_i \ddot{\textbf{r}}_i = \textbf{F}_i (\textbf{r}_1, \ldots, \textbf{r}_N) $$

where $\textbf{F}_1, \ldots, \textbf{F}_N$ are the forces on each of the $N$ particles due to all the other particles in the system. The notation $\ddot{\textbf{r}}_i = d^2 \textbf{r}_i/dt^2$.

$N$ Newton’s equations of motion constitute a set of $3N$ coupled second order differential equations. In order to solve these, it is necessary to specify a set of appropriate initial conditions on the coordinates and their first time derivatives, $\begin{Bmatrix} \textbf{r}_1(0), \ldots, \textbf{r}_N(0), \dot{\textbf{r}}_1(0), \ldots, \dot{\textbf{r}}_N(0) \end{Bmatrix}$. Then, the solution of Newton’s equations gives the complete set of coordinates and velocities for all time $t$.

## The Ensemble Concept (Heuristic Definition)

For a typical macroscopic system, the total number of particles is $N \sim 10^{23}$. Since an essentially infinite amount of precision is needed in order to specify the initial conditions (due to exponentially rapid growth of errors in this specification), the amount of information required to specify a trajectory is essentially infinite. Even if we content ourselves with quadrupole precision, however, the amount of memory needed to hold just one phase space point would be about $128$ bytes $= \: 2^7 \sim 10^2$ bytes for each number or $10^2 \times 6 \times 10^{23} \sim 10^{17}$ gigabytes which is also $10^2$ yottabytes! The largest computers we have today have perhaps $10^6$ gigabytes of memory, so we are off by $11$ orders of magnitude just to specify $1$ classical state.

Fortunately, we do not need all of this detail. There are enormous numbers of microscopic states that give rise to the same macroscopic observable. Let us again return to the connection between temperature and kinetic energy:

$$ \dfrac{3}{2} NkT = \sum_{i=1}^N \dfrac{1}{2}m_i \textbf{v}_i^2 $$ {eq:2.14} n=3

which can be solved to give:

$$ T = \dfrac{2}{3k} \left( \dfrac{1}{N} \sum_{i=1}^N \dfrac{1}{2}m_i \textbf{v}_i^2 \right) $$ {eq:2.15} n=4

Here we see that $T$ is related to the average kinetic energy of all of the particles. We can imagine many ways of choosing the particle velocities so that we obtain the same average. One is to take a set of velocities and simply assign them in different ways to the $N$ particles, which can be done in $N!$ ways. Apart from this, there will be many different choices of the velocities, themselves, all of which give the same average.

Since, from the point of view of macroscopic properties, precise microscopic details are largely unimportant, we might imagine employing a construct known as the *ensemble concept* in which a large number of systems with different microscopic characteristics but similar macroscopic characteristics is used to “wash out” the microscopic details via an averaging procedure. This is an idea developed by individuals such as Gibbs, Maxwell, and Boltzmann.

Consider a large number of systems each described by the same set of microscopic forces and sharing a common set of macroscopic thermodynamic variables (e.g. the same total energy, number of moles, and volume). Each system is assumed to evolve under the microscopic laws of motion from a different initial condition so that the time evolution of each system will be different from all the others. Such a collection of systems is called an *ensemble*. The ensemble concept then states that macroscopic observables can be calculated by performing averages over the systems in the ensemble. For many properties, such as temperature and pressure, which are time-independent, the fact that the systems are evolving in time will not affect their values, and we may perform averages at a particular instant in time.

The questions that naturally arise are:

1. How do we construct an ensemble?
2. How do we perform averages over an ensemble?
3. How do we determine which thermodynamic properties characterize an ensemble?
4. How many different types of ensembles can we construct, and what distinguishes them?

These questions will be addresses in the sections ahead.

## Thermal energy

A confined monatomic gas can be seen as a box with a whole bunch of atoms in it. Each of these particles can be in one of the states given by the last formula. If all of them have large $n$ values there is obviously a lot of kinetic energy in the system. The lowest energy is when all atoms have 1,1,1 as quantum numbers. Boltzmann realized that this should relate to temperature. When we add energy to the system (by heating it up without changing the volume of the box), the temperature goes up. At higher temperatures we would expect higher quantum numbers, and at lower $T$, lower ones. But how exactly are the atoms distributed over the various states?

This is a good example of a problem involving a discrete probability distribution. The probability that a certain level (e.g., $n = ( n_1,n_2,n_3)$ with energy $E_i$) is occupied should be a function of temperature: $P_i(T)$. Boltzmann postulated that you could look at temperature as a form of energy. The thermal energy of a system is directly proportional to an absolute temperature.

$$ E_{thermal} = k T $$

The proportionality constant $k$ (or $k_B$) is named after him: the Boltzmann constant. It plays a central role in all statistical thermodynamics. The Boltzmann factor is used to approximate the fraction of particles in a large system. The Boltzmann factor is given by:

$$ e^{-\beta E_i} $$ {eq:17.1} n=5

where:

- $E_i$ is the energy in the state $i$,
- $T$ is the kelvin temperature, and
- $k$ is Boltzmann constant.

As the following section demonstrates, the term $\beta$ in Equation [ref:eq:17.1] is expressed as:

$$ \beta=\frac{1}{k T} $$

The rates of many physical processes are also determined by the Boltzmann factor. For a random particle, its thermal energy of a particle is a small multiple of the energy $k T$. An increase in temperature results in more particles crossing the energy barrier characteristic of activation processes. If this is to occur, particles need to carry sufficient energy. This energy is needed for the particles to successfully cross the energy barrier and is usually called activation energy. The fraction of molecules that have sufficient energy to escape the original material surface is approximately proportional to the Boltzmann factor.

## References

1. Hakala, R.W. (1961). A new derivation of the Boltzmann distribution law. Journal of Chemical Education. {term:doi:} 10.1021/ed038p33.
2. Claudio Fazio, Onofrio R Battaglia, Ivan Guastella. (2012).Two experiments to approach the Boltzmann factor: chemical reaction and viscous flow. *European Journal of Physics*, *33, 2, 359.*doi:10.1088/0143-0807/33/2/359.

## Problems

1. How are temperature and the average energy per particle for a system related?
2. What does the Boltzmann factor tell you? Why is it important?
3. When is it possible for particles to get extra energy?
4. Give three examples of activation processes.
5. What do "separate arrangements" mean? What are the differences between these arrangements?
