<!-- LibreTexts page 13451: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09:_Chemical_Bonding_in_Diatomic_Molecules/9.01:_The_Born-Oppenheimer_Approximation_Simplifies_the_Schrodinger_Equation_for_Molecules -->
# The Born-Oppenheimer Approximation Simplifies the Schrödinger Equation for Molecules

## Learning Objectives {section:objectives}

- Understand the need to introduce an approximation like the Born-Oppenheimer approximation to solve multi-electron systems
- Understand the basis of parameterization involved in using the Born-Oppenheimer approximation

Using quantum mechanics to predict the chemical bonding patterns, optimal geometries, and physical and chemical properties of molecules is a large and active field of research known as *molecular quantum mechanics* or more commonly as *quantum chemistry*. The density functional theory referred to in the previous lecture, for which the chemistry Nobel prize was given in 1998, has had a tremendous impact in quantum chemistry, with some of the papers in this subject having acquired some 10,000 citations each since their publication. In fact, the 1998 chemistry Nobel prize was shared between Walter Kohn, one of the inventors of density functional theory and John Pople, the developer of a commonly used quantum chemistry software package.

Quantum chemistry calculations allow the geometries of molecules to be computed as well as a wide range of properties. Quantum chemistry can also be used in a novel way, in which the electrons are treated using quantum mechanics but the nuclei are treated as classical particles. We use quantum mechanics to calculate the internuclear forces but then use these forces in Newton's Second Law to study the motion of the nuclei during chemical reactions. This gives us a microscopic window into the specific motions, the complex dance, executed by the nuclei during a simple or complex chemical process.

The methods of quantum chemistry have become very sophisticated, and there are various software packages that can be downloaded for carrying out the calculations of quantum chemistry. It should be noted that these packages use a series of approximations to solve the Schrödinger equation because for all but the simplest of molecules, exact solutions are not available. We will discuss some of these methods, but first we need to introduce some of the underlying theory.

## The Born-Oppenheimer Approximation

The Born-Oppenheimer approximation is one of the basic concepts underlying the description of the quantum states of molecules. This approximation makes it possible to separate the motion of the nuclei and the motion of the electrons. This is not a new idea for us. We already made use of this approximation in the particle-in-a-box model when we explained the electronic absorption spectra of cyanine dyes without considering the motion of the nuclei. Then we discussed the translational, rotational and vibrational motion of the nuclei without including the motion of the electrons. In this chapter we will examine more closely the significance and consequences of this important approximation. Note, in this discussion nuclear refers to the atomic nuclei as parts of molecules not to the internal structure of the nucleus.

The Born-Oppenheimer approximation neglects the motion of the atomic nuclei when describing the electrons in a molecule. The physical basis for the Born-Oppenheimer approximation is the fact that the mass of an atomic nucleus in a molecule is much larger than the mass of an electron (more than 1000 times). Because of this difference, the nuclei move much more slowly than the electrons. In addition, due to their opposite charges, there is a mutual attractive force of $Ze^2/r^2$ acting on an atomic nucleus and an electron. This force causes both particles to be accelerated. Since the magnitude of the acceleration is inversely proportional to the mass, a = F/m, the acceleration of the electrons is large and the acceleration of the atomic nuclei is small; the difference is a factor of more than 2000. Consequently, the electrons are moving and responding to forces very quickly, and the nuclei are not. You can imagine running a 100-yard dash against someone whose acceleration is a 2000 times greater than yours. That person could literally run circles around you.

:::example {ex:9.1.1} Coupled Oscillators with Dissimilar Masses

If two particles interact in some way, and one is much heavier than the other, the light particle will move essentially as a "slave'' of the heavy particle. That is, it will simply follow the heavy particle wherever it goes, *and*, it will move rapidly in response to the heavy particle motion. As an illustration of this phenomenon, consider the simple mechanical system pictured below:

> IMAGE {img:1} src=media/199783-597px-Coupled_Harmonic_Oscillator.svg.png
> alt: Diagram showing two masses, m1 and m2, connected by a spring, with a vertical support on the left.
> caption: (CC BY-SA 3.0 Unported; Jim.belk via [Wikipedia](https://en.Wikipedia.org/wiki/File:Coupled_Harmonic_Oscillator.svg)).
:::

Considering this as a classical system, we expect that the motion will be dominated by the large heavy particle ($m_1$), which is attached to a fixed wall by a spring. The small, light particle ($m_2$, which is attached to the heavy particle by a spring will simply follow the heavy particle and execute rapid oscillations around it.

So a good approximation is to describe the electronic states of a molecule by thinking that the nuclei are not moving, i.e. that they are stationary. The nuclei, however, can be stationary at different positions so the electronic wavefunction can depend on the positions of the nuclei even though their motion is neglected.

Now we look at the mathematics to see what is done in solving the Schrödinger equation after making the Born-Oppenheimer approximation. For a diatomic molecule as an example, the Hamiltonian operator is grouped into three terms

$$ \hat {H} (r, R) = \hat {T}_{nuc} (R) + \dfrac {e^2}{4\pi \epsilon _0} \dfrac {Z_A Z_B}{R} + \hat {H} _{elec} (r,R) $$ {eq:9.1.1} n=1

where

$$ \hat{T}_{nuc} (R) = -\dfrac {\hbar^2}{2m_A} \nabla ^2_A - \dfrac {\hbar ^2}{2m_B} \nabla ^2_B $$ {eq:9.1.2} n=2

and

$$ \hat {H} _{elec} (\vec{r}, \vec{R}) = \dfrac {- \hbar ^2}{2m} \sum \limits _i \nabla ^2_i + \dfrac {e^2}{4 \pi \epsilon _0} \left ( -\sum \limits _i \dfrac {Z_A}{r_{Ai}} - \sum \limits _i \dfrac {Z_B}{r_{Bi}} + \dfrac {1}{2} \sum \limits _i \sum \limits _{j \ne i} \dfrac {1}{r_{ij}}\right ) $$ {eq:9.1.3} n=3

In Equation [ref:eq:9.1.1], the first term represents the kinetic energy of the nuclei, the second term represents the Coulomb repulsion of the two nuclei, and the third term represents the contribution to the energy from the electrons, which consists of their kinetic energy, mutual repulsion for each other, and attraction for the nuclei. $\vec{r}$ and $\vec{R}$ are vectors specifying the positions of all the electrons and all the nuclei, respectively.

:::exercise {exr:9.1.1}

Define all the symbols in Equations [ref:eq:9.1.1] through [ref:eq:9.1.3].

**Answer**

$$ \begin{align*} \hat{H}(r,R) &= \underbrace{\hat{T}_{nuc}(R)}_\text{Kinetic Energy Term for nuclei} + \underbrace{\frac{e^2}{4\pi\epsilon_o}\frac{Z_AZ_B}{R}}_\text{Repulsion Term for nuclei} + \underbrace{\hat{H}_{elec}(r,R)}_\text{Hamiltonian for electrons}\\ \hat{T}_{nuc}(R) &= \underbrace{\frac{\hslash^2}{2m_A}\nabla^2_A}_\text{Kinetic Energy Term for nuclei A} - \underbrace{\frac{\hslash^2}{2m_b}\nabla^2_B}_\text{Kinetic Energy Term for nuclei B}\\ \hat{H}_{elec}(\vec{r},\vec{R}) &= \underbrace{\frac{-\hslash^2}{2m}\sum_{i}\nabla_i^2}_\text{Kinetic Energy Term for electrons} + \frac{e^2}{4\pi\epsilon_o}\left(-\underbrace{\sum_{i}\frac{Z_A}{r_{Ai}}}_\text{Attraction Term between nuclei A and electron i} - \underbrace{\sum_{i}\frac{Z_B}{R_{Bi}}}_\text{Attraction Term between nuclei B and electron i} + \underbrace{\frac{1}{2}\sum_{i}\sum_{j \neq i}\frac{1}{r_{ij}}}_\text{Repulsion Term between electrons}\right) \end{align*} $$

where, $Z_x$is the charge of particle x, $m_x$ is the mass of particle x and $r_{xz}$ is the distance between particle x and z.
:::

:::exercise {exr:9.1.2}

Explain why the factor of 1/2 appears in the last term in Equation [ref:eq:9.1.3].

**Answer**

The 1/2 term is there to make sure we do not double count the potential energies via the two summations. Otherwise, we would independently add the potential energy of electron 1 with electron 2 and the potential energy of electron 2 with electron 1. These are the same and hence one has to be removed.
:::

The Born-Oppenheimer approximation says that the nuclear kinetic energy terms in the complete Hamiltonian, Equation [ref:eq:9.1.1], can be neglected in solving for the electronic wavefunctions and energies. Consequently, the electronic wavefunction $\varphi _e (r,R)$ is found as a solution to the electronic Schrödinger equation

$$ \hat {H} _{elec} (r, R) \varphi _e (r, R) = E_e (R) \varphi _e (r, R) $$ {eq:9.1.4} n=4

Even though the nuclear kinetic energy terms are neglected, the Born-Oppenheimer approximation still takes into account the variation in the positions of the nuclei in determining the electronic energy and the resulting electronic wavefunction depends upon the nuclear positions, $R$. As a result of the Born-Oppenheimer approximation, the molecular wavefunction can be written as a product

$$ \psi _{ne} (r, R) = X_{ne} (R) \varphi _e (r, R) $$ {eq:9.1.5} n=5

This product wavefunction is called the Born-Oppenheimer wavefunction. The function $X_{ne} (R)$ is the vibrational wavefunction, which is a function of the nuclear coordinates $R$ and depends upon both the vibrational and electronic quantum numbers or states, n and e, respectively. The electronic function, $\varphi _e (r, R)$, is a function of both the nuclear and electronic coordinates, but only depends upon the electronic quantum number or electronic state, e. Translational and rotational motion is not included here. The translational and rotational wavefunctions simply multiply the vibrational and electronic functions in Equation [ref:eq:9.1.5] to give the complete molecular wavefunction when the translational and rotational motions are not coupled to the vibrational and electronic motion.

In the *Crude Born-Oppenheimer Approximation*, $R$ is set equal to $R_o$, the equilibrium separation of the nuclei, and the electronic wavefunctions are taken to be the same for all positions of the nuclei (i.e., the nuclei never move). The electronic energy, $E_e (R)$, in Equation [ref:eq:9.1.4] combines with the repulsive Coulomb energy of the two nuclei, to form the potential energy function that controls the nuclear motion as shown in Figure 9.1.1.

$$ V_e (R) = E_e (R) + \dfrac {e^2}{4\pi \epsilon _0} \dfrac {Z_A Z_B}{R} $$ {eq:9.1.6} n=6

Consequently the Schrödinger equation for the vibrational motion is

$$ ( \hat {T} _{nuc} (R) + V (R) ) X_{ne} (R) = E_{ne} X_{ne} (R) $$ {eq:9.1.7} n=7

## Potential Energy Curves and Surfaces

Previously, the potential energy was approximated as a harmonic potential or Morse potential depending on the displacement, $R$, of the nuclei from their equilibrium positions.

> FIGURE {fig:9.1.1} src=media/141706-imageedit_9_2284491475.gif
> alt: Graph showing the relationship between interlaminar separation (x-axis) and shear stress (y-axis) with a red curve.
> caption: The potential energy function for a diatomic molecule.

In practice the electronic Schrödinger equation is solved using approximations at particular values of $R$ to obtain the wavefunctions $\varphi _e (r,R)$ and potential energies $V_e (R)$. The potential energies can be graphed as illustrated in Figure 9.1.1.

The graph in Figure 9.1.1 is the energy of a diatomic molecule as a function of internuclear separation, which serves as the potential energy function for the nuclei. When R is very large there are two atoms that are weakly interacting. As $R$ becomes smaller, the interaction becomes stronger, the energy becomes a large negative value, and we say a bond is formed between the atoms. At very small values of $R$, the internuclear repulsion is very large so the energy is large and positive. This energy function controls the motion of the nuclei. Previously, we approximated this function by a harmonic potential to obtain the description of vibrational motion in terms of the harmonic oscillator model. Other approximate functional forms could be used as well, e.g. the Morse potential. The equilibrium position of the nuclei is where this function is a minimum, i.e. at $R = R_0$. If we obtain the wavefunction at $R = R_0$ and use this function for all values of $R$, we have employed the *Crude Born-Oppenheimer* approximation.

:::exercise {exr:9.1.3}

Relate Equation [ref:eq:9.1.7] to the one previously used in our description of molecular vibrations in terms of the harmonic oscillator model.
:::

While the potential energy function, $V_e (R)$, for a diatomic molecule is a 1-D curve (Figure 9.1.1), molecules with more than two atoms will have multi-dimensional {term:potential energy surfaces} with 3N-6 (or 3N-5 for linear molecule) dimensions for the number of internal degrees of freedom.

> FIGURE {fig:9.1.2} src=media/57780-600px-Potential_Energy_Surface_for_Water.png width=447
> alt: 3D graph illustrating energy as a function of the H-O-H bond angle and distance, highlighting a specific bond angle of 194.5°.
> caption: The potential energy surface for a water molecule: Shows the energy minimum corresponding to optimized molecular structure for water- O-H bond length of 0.0958 nm and H-O-H bond angle of 104.5°. from Wikipeda (AimNature)

The potential energy surface concept can be used to theoretically explore properties of structures composed of atoms, for example, finding the minimum energy shape of a molecule or computing the rates of a chemical reaction. Qualitatively the reaction coordinate diagrams (one-dimensional slices through the potential energy surfaces) have numerous applications. Chemists use reaction coordinate diagrams as both an analytical and pedagogical aid for rationalizing and illustrating kinetic and thermodynamic events. The purpose of energy profiles and surfaces is to provide a qualitative representation of how potential energy varies with molecular motion for a given reaction or process.

:::exercise {exr:9.1.4}

Explain the difference between the Born-Oppenheimer approximation and the Crude Born-Oppenheimer approximation.
:::

## Summary

In this section we started with the Schrödinger equation for a diatomic molecule and separated it into two equations, an electronic Schrödinger equation and a nuclear Schrödinger equation. In order to make the separation, we had to make an approximation. We had to neglect the effect of the nuclear kinetic energy on the electrons. The fact that this assumption works can be traced to the fact that the nuclear masses are much larger than the electron mass. We then used the solution of the electronic Schrödinger equation to provide the potential energy function for the nuclear motion. The solution to the nuclear Schrödinger equation provides the vibrational wavefunctions and energies.

## Contributors and Attributions {section:attributions}

David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("[Quantum States of Atoms and Molecules](http://pubs.acs.org/doi/abs/10.1021/ed082p1880.2)")
