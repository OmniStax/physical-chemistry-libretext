<!-- LibreTexts page 13434: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/07:_Approximation_Methods/7.01:_The_Variational_Method_Approximation -->
# The Variational Method Approximation

## Learning Objectives {section:objectives}

- Appreciate the complexity of solving muliti-electron atoms
- Characterize multi-electron interactions within shielding and penetration concepts
- Use the variational method as an approximation to study insolvable problems
- User variational method to evaluate the effective nuclear charge for a specific atom

In this section we introduce the powerful and versatile variational method and use it to improve the approximate solutions we found for the helium atom using the independent electron approximation.

## The True (Experimentally Determined) Energy of the Helium Atom

The helium atom has two electrons bound to a nucleus with charge $Z = 2$. The *successive* removal of the two electrons can be considered stepwise:

$$ \ce{He} \xrightarrow {\textit{I}_1} \ce{He}^+ + e^-\xrightarrow {\textit{I}_2}\ce{He}^{++}+2e^- $$ {eq:7.1.1} n=1

The *first ionization energy* $I_1$ is the minimum energy required to remove the first electron from helium gas and is experimentally determined:

$$ \begin{align*} \textit{I}_1=-\textit{E}_{1\textit{s}}(\ce{He}) = 24.59\;eV \end{align*} $$

While the second ionization energy, $I_2$ can be experimentally determined, it can also be calculated exactly from the hydrogen atom solutions since $\ce{He^{+}}$ is a hydrogen-like ion with $Z=2$. Hence, we have

$$ \begin{align*} \textit{I}_2 &=-\textit{E}_{ 1\textit{s}}(\ce{He}^+) \\[4pt] &=\dfrac{Z^2}{2n^2} \\[4pt] &=54.42\mbox{ eV} \end{align*} $$

The energy of the three separated particles on the right side of Equation [ref:eq:7.1.1] is zero (by definition). Therefore the ground-state energy of helium atom is given by

$$ \begin{align*} E_{true}&=-(\textit{I}_1+\textit{I}_2) \\[4pt] &=-79.02\mbox{ eV}.\end{align*} $$

which can be expressed in terms of the {term:*Rydberg*} constant ($R_H=13.6 \; eV$) that also describes the lowest energy of the hydrogen atom

$$ E_{true} = -5.8066\,R_H $$

We will attempt to reproduce this {term:true value}, as close as possible, by different theoretical approaches (all approximations).

## The "Ignorance is Bliss" Approximation

The Hamiltonian for the Helium atom is:

$$ \hat{H} = -\dfrac{\hbar^2}{2m_e}\nabla_{el_{1}}^2 -\dfrac{\hbar^2}{2m_e}\nabla_{el_{2}}^2 - \dfrac {Ze^2}{4\pi\epsilon_0 r_1} - \dfrac {Ze^2}{4\pi\epsilon_0 r_2} + \cancel{ \dfrac {e^2}{4\pi \epsilon_0 r_{12}} } $$ {eq:7.1.3} n=2

If we simply *ignore* the electron-electron repulsion term, then Equation [ref:eq:7.1.3] can be simplified to

$$ \begin{align} \hat{H} & \approx -\dfrac{\hbar^2}{2m_e}\nabla_{el_{1}}^2 - \dfrac {Ze^2}{4\pi\epsilon_0 r_1} - \dfrac{\hbar^2}{2m_e}\nabla_{el_{2}}^2 - \dfrac {Ze^2}{4\pi\epsilon_0 r_2}  \\[4pt] &\approx h_1(r_1) + h_2(r_2)  \end{align} $$ {eq:7.1.3B} n=3 {eq:7.1.3C} n=3

where $h_1$ and $h_2$ are one electron Hamiltonians for electron 1 and 2, respectively, and are just the hydrogen-like Hamiltonians. The approximation in Equation [ref:eq:7.1.3C] is convenient since electron 1 is *separable* from electron 2, so that the two-electron wavefunction is approximated as a product to two one-electron wavefunctions:

$$ \Psi_{total} = \psi_{el_{1}}\psi_{el_{2}} $$ {eq:7.1.4a} n=4

or in braket notation

$$ | \Psi_{total} \rangle = \hat{H} | \psi_{el_1} \psi_{el_2} \rangle $$ {eq:7.1.4b} n=5

With some operator algebra, something important arises - the one electron energies are {term:additive}:

$$ \begin{align*} \hat{H} \Psi_{total} &= (\hat{H}_{el_1} + \hat{H}_{el_2}) \psi_{n\ {el_1}} \psi_{n\ {el_2}} = (E_{n_1} + E_{n_2}) \psi_{n\ {el_1}} \psi_{n\ {el_2}} \end{align*} $$

or in bra-ket notation

$$ \begin{align*} \hat{H} | \Psi_{total} \rangle &= \hat{H} | \psi_{el_1} \psi_{el_2} \rangle \\[4pt] &= (E_{n_1} + E_{n_2}) | \psi_{1} \psi_{2} \rangle \end{align*} $$

The energy for a ground state Helium atom (both electrons in lowest state) is then

$$ \begin{align*} E_{He_{1s}} &= \underset{\text{energy of single electron in helium}}{E_{n_1}} + \underset{\text{energy of single electron in helium}}{E_{n_2}} \\[4pt] &= -R_H\left(\dfrac{Z^2}{1}\right) -R_H \left(\dfrac{Z^2}{1}\right) \\[4pt] &= -8R_H \end{align*} $$

This approximation significantly overestimates the true energy of the helium atom $E_{He_{1s}} = -5.8066\,R$. This is a poor approximation and we need to address electron-electron repulsion properly (or better at least).

## Shielding and Penetration

One way to take electron-electron repulsion into account is to modify the form of the wavefunction. A logical modification is to change the nuclear charge, $Z$, in the wavefunctions to an effective nuclear charge ($Z_{eff}$), from +2 to a smaller value. The rationale for making this modification is that one electron partially shields the nuclear charge from the other electron, as shown in Figure 7.1.1.

> FIGURE {fig:7.1.1} src=media/346364-Shielding_effect.svg width=581px
> alt: Diagram illustrating light interaction with a central sphere, showing arrows indicating light pathways and reflections.
> caption: Electron-electron shielding leading to a reduced effective nuclear charge. The attractive force of the nucleus on the outer electron is partially countered by the repulsive force between inner electrons and the outer electron. (CC BY-SA; Ümit Kaya via LibreTexts)

A region of negative charge density between one of the electrons and the +2 nucleus makes the potential energy between them more positive (decreases the attraction between them). We can effect this change mathematically by using $\zeta < 2$ in the wavefunction expression. If the shielding were complete, then $Z_{eff}$ would equal 1. If there is no shielding, then $Z_{eff}= 2$. So a way to take into account the electron-electron interaction is by saying it produces a shielding effect. The shielding is not zero, and it is not complete, so the effective nuclear charge varies between one and two.

In general, a theory should be able to make predictions in advance of knowledge of the experimental result. Consequently, a principle and method for choosing the best value for $Z_{eff}$ or any other adjustable parameter that is to be optimized in a calculation is needed. The Variational Principle provides the required criterion and method and says that the best value for any variable parameter in an approximate wavefunction is the value that gives the {term:lowest energy for the ground state}; i.e., the value that minimizes the energy. The variational method is the procedure that is used to find the lowest energy and the best values for the variable parameters.

## A Better Approximation: The Variational Method

The variational method is one way of finding approximations to the lowest energy eigenstate or ground state, and some excited states. This allows calculating approximate wavefunctions and is the variational principle. The method consists in choosing a "trial wavefunction" depending on one or more parameters, and finding the values of these parameters for which the expectation value of the energy is the lowest possible. The wavefunction obtained by fixing the parameters to such values is then an approximation to the ground state wavefunction, and the expectation value of the energy in that state is an {term:upper bound} to the ground state energy.

The variational principle means that the expectation value for the binding energy obtained using an approximate wavefunction and the exact Hamiltonian operator will be higher than or equal to the true energy for the system. This idea is really powerful. When implemented, it permits us to find the best approximate wavefunction from a given wavefunction that contains one or more adjustable parameters, called a {term:trial wavefunction}. A mathematical statement of the variational principle is

$$ E_{trial} \ge E_{true} $$ {eq:7.1.7} n=6

where

$$ \begin{align} E_{trial} &= \dfrac{ \langle \psi _{trial}| \hat {H} | \psi _{trial} \rangle}{\langle \psi _{trial} | \psi _{trial} \rangle} \\[4pt] &= \dfrac {\displaystyle \int \psi _{trial} ^* \hat {H} \psi _{trial} d \tau}{\displaystyle \int \psi _{trial} ^* \psi _{trial} d\tau }  \end{align} $$ {eq:7.1.8} n=7

Equation [ref:eq:7.1.7] is called the variational theorem and states that for a time-independent Hamiltonian operator, any trial wavefunction will have an variational energy (i.e., expectation value) that is {term:greater than or equal} to the true ground state wavefunction corresponding to the given Hamiltonian (Equation [ref:eq:7.1.7]). Because of this, the variational energy is an upper bound to the true ground state energy of a given molecule. The general approach of this method consists in choosing a "trial wavefunction" depending on one or more parameters, and finding the values of these parameters for which the expectation value of the energy is the lowest possible (Figure 7.1.2).

> FIGURE {fig:7.1.2} src=media/87522-Variational_Method_Flow_Chart.jpg width=378.991px
> alt: Flowchart illustrating a process with boxes labeled "Define Your Mission," "Evaluate Alternatives," "Develop Measurements," and more, concluding with assessments labeled "Good" and "Not Good."
> caption: Simplified algorithmic flowchart of the Variational Method approximation

> The variational energy $E_{trial}$ is only equal to the true energy $E_{true}$ when the the corresponding trial wavefunction $\psi_{trial}$ is equal to the true wavefunction $\psi_{true}$.

## Application to the Helium atom Ground State

Often the expectation values (numerator) and normalization integrals (denominator) in Equation [ref:eq:7.1.8] can be evaluated analytically. For the case of the He atom, let's consider the trial wavefunction as the product wavefunction given by Equation [ref:eq:7-13] (this is called the {term:orbital approximation}),

$$ \psi (r_1 , r_2) \approx \varphi (r_1) \varphi (r_2) $$ {eq:7-13} n=8

The adjustable or variable parameter in the trial wavefunction is the effective nuclear charge $\zeta$, and the Hamiltonian is the complete form given below (Note: quantum calculations typically refer to effective nuclear charge as $\zeta$ rather than $Z_{eff}$ as we used previously).

$$ \hat {H} = -\dfrac {\hbar ^2}{2m} \nabla^2_1 - \dfrac {\zeta e^2}{4 \pi \epsilon _0 r_1} - \dfrac {\hbar ^2}{2m} \nabla ^2_2 - \dfrac {\zeta e^2}{4 \pi \epsilon _0 r_2} + \dfrac {e^2}{4 \pi \epsilon _0 r_{12}} $$ {eq:9-9} n=9

the adjustable or variable parameter in the trial wavefunction is the effective nuclear charge $\zeta$ (would be equal to $\zeta=2$ if fully unshielded), and the Hamiltonian is the complete form. When the expectation value for the trial energy (Equation [ref:eq:7.1.8]) is evaluated for helium, the result is a variational energy that depends on the adjustable parameter, $\zeta$.

$$ E_{trial} (\zeta) = \dfrac {\mu e^4}{4 \epsilon ^2_0 h} \left ( \zeta ^2 - \dfrac {27}{8} \zeta \right ) $$ {eq:7.1.9} n=10

This function is plotted in Figure 7.1.3 as a function of $\zeta$. According to the variational principle (Equation [ref:eq:7.1.7]), the minimum value of the energy on this graph is the best approximation of the true energy of the system, and the associated value of $\zeta$ is the best value for the adjustable parameter.

> FIGURE {fig:7.1.3} src=media/51423-minimizeE.gif width=445
> alt: Graph of a quadratic function, showing a downward curve in red with axes labeled for x and y values.
> caption: Graph of trial energies for helium atom as a function of the adjustable parameter $\zeta$ in Equation [ref:eq:7.1.9] that represents the effective nuclear charge felt by the electrons.

Using the mathematical function for the energy of a system, the minimum energy with respect to the adjustable parameter can be found by taking the derivative of the energy with respect to that parameter, setting the resulting expression equal to zero, and solving for the parameter, in this case $\zeta$. This is a standard method in calculus for finding[ maxima and minima](https://math.libretexts.org/TextMaps/Calculus/Book%3A_Calculus_(Apex)/3%3A_The_Graphical_Behavior_of_Functions/3.1%3A_Extreme_Values).

:::exercise {exr:7.1.1}

Find the value for $\zeta$ that minimizes the helium binding energy for the product trial wavefunction in Equation [ref:eq:7-13] with the Hamiltonian in Equation [ref:eq:9-9]. and compare the binding energy to the experimental value. What is the percent error in the calculated value?

**Solution**

The variational method requires following the workflow in Figure 7.1.2.

- Step 1: Define the Hamiltonian - This is given by Equation [ref:eq:9-9].
- Step 2: Define the trial wavefunction as a function of at least one parameter - This is given by Equation [ref:eq:7-13].
- Step 3: Evaluate variational energy ($E_{trial}$ integral (Equation [ref:eq:7.1.8]) - This procedure was already above in Equation [ref:eq:7.1.9].
- Step 4: Minimize the variational energy as a function of the parameter(s) - Following the standard approach to find [extrema in calculus](https://math.libretexts.org/Bookshelves/Calculus/Book%3A_Calculus_(OpenStax)/04%3A_Applications_of_Derivatives/4.03%3A_Maxima_and_Minima), evaluate the derivative of $E_{trial}$ with respect to $\zeta$ and set to zero:
   
   $$ \dfrac{dE_{trial}}{d\zeta} = \dfrac {\mu e^4}{4 \epsilon ^2_0 h} \left ( 2 \zeta - \dfrac {27}{8} \right ) =0 $$
   
   then find solve for the roots of this polynomial
   
   $$ 2 \zeta - \dfrac {27}{8}=0 $$
   
   or
   
   $$ \zeta = \dfrac {27}{16} \approx 1.6875 $$
- Step 5-6: The question does not ask for the optimized wavefunction (Step 5) or to compare the result with the true value to evaluate the quality of the approximation (Step 6). We can skip these steps.
:::

From Exercise 7.1.1, the $\zeta = 1.6875$ and the approximate energy we calculate using this approximation method, E<sub>approx</sub> = -77.483 eV. Table 7.1.1 show that a substantial improvement in the accuracy of the computed binding energy is obtained by using shielding to account for the electron-electron interaction. Including the effect of electron shielding in the wavefunction reduces the error in the binding energy to about 2%. This idea is very simple, elegant, and significant.

> TABLE {tab:1} cols=2
> caption: Table 7.1.1: Comparison of the results of three approximation methods to experiment.

| Method | He binding energy (eV) |
| --- | --- |
| "Ignorance is Bliss" Approximation (neglect repulsion between electrons) | -108.8 |
| Variational method with variable effective charge | -77.483 |
| Experimental | -79.0 |

The improvement we have seen in the total energy calculations using a variable parameter $\zeta$ indicates that an important contribution of electron-electron interaction or repulsion to the total binding energy arises from the fact that each electron shields the nuclear charge from the other electron. It is reasonable to assume the electrons are independent; i.e., that they move independently, but the shielding must be taken into account in order to fine-tune the wavefunctions. The inclusion of optimizable parameters in the wavefunction allows us to develop a clear physical image of the consequences of our variation calculation. Calculating energies correctly is important, and it is also important to be able to visualize electron densities for multi-electron systems. In the next two sections, we take a temporary break from our consideration of approximation methods in order to examine multi-electron wavefunctions more closely.
