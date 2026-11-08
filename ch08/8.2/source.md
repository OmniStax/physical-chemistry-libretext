<!-- LibreTexts page 13440: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08:_Multielectron_Atoms/8.02:_Perturbation_Theory_and_the_Variational_Method_for_Helium -->
# Perturbation Theory and the Variational Method for Helium

## Learning Objectives {section:objectives}

- Demonstrate that both perturbation theory and variational methods can be used to solve the electron structure of the helium atom.

Both perturbation theory and variation method (especially the linear variational method) provide good results in approximating the energy and wavefunctions of multi-electron atoms. Below we address both approximations with respect to the helium atom.

## Perturbation Theory of the Helium Atom

We use perturbation theory to approach the analytically unsolvable helium atom Schrödinger equation by focusing on the Coulomb repulsion term that makes it different from the simplified Schrödinger equation that we have just solved analytically. The electron-electron repulsion term is conceptualized as a correction, or perturbation, to the Hamiltonian that can be solved exactly, which is called a {term:zero-order Hamiltonian}. The perturbation term corrects the previous Hamiltonian to make it fit the new problem. In this way the Hamiltonian is built as a sum of terms, and each term is given a name. For example, we call the simplified or starting Hamiltonian, $\hat {H} ^0$, the zero order term, and the correction term $\hat {H} ^1$.

$$ \hat {H} = \hat {H} ^0 + \hat {H} ^1 $$ {eq:9-17} n=1

The Hamilonian for the helium atom (in atomic units) is:

$$ \begin{align} \hat {H} ^0 &= \underbrace{-\dfrac {1}{2} \nabla ^2_1 - \dfrac {2}{r_1}}_{\text{H atom Hamiltonian}} - \underbrace{\dfrac {1}{2} \nabla ^2_2 - \dfrac {2}{r_2}}_{\text{H atom Hamiltonian}}  \\[4pt] \hat {H} ^1 &= \dfrac {1}{r_{12}} = \dfrac{1}{|r_1-r_2|}  \end{align} $$ {eq:9-18} n=2 {eq:9-19} n=2

The expression for the first-order correction to the energy is

$$ \begin{align} E^1 &= \langle \psi ^{0} | \hat {H} ^1 | \psi ^{0} \rangle \nonumber \\[4pt] &= \int \psi ^{0*} \hat {H} ^1 \psi ^0 \,d\tau \nonumber \end{align} $$

Equation [ref:eq:9-28] is a general expression for the first-order perturbation energy, which provides an improvement or correction to the zero-order energy we already obtained. Hence, $E^1$ is the average interaction energy of the two electrons calculated using wavefunctions that assume there is no interaction.

The solution to $\hat{H}^{0}$ (Equation [ref:eq:9-18]) is the product of two single-electron hydrogen wavefunctions (scaled by the increased nuclear charge) since $\hat{H}^{0}$ can be separated into independent functions of each electron (i.e., [Separation of Variables](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Mathematical_Methods_in_Chemistry_(Levitus)/12%3A_Partial_Differential_Equations/12.02%3A_The_Method_of_Separation_of_Variables)).

$$ | \psi ^{0} \rangle = | \varphi _{1s} (r_1) \varphi _{1s} (r_2) \rangle $$

So the integral in Equation [ref:eq:9-28] is

$$ E^1 = \iint \varphi _{1s} (r_1) \varphi _{1s} (r_2) \dfrac {1}{r_{12}} \varphi _{1s} (r_1) \varphi _{1s} (r_2)\, d\tau _1 d\tau _2 $$ {eq:9-29} n=3

where the double integration symbol represents integration over all the spherical polar coordinates of both electrons $r_1, \theta _1, \varphi _1 , r_2 , \theta _2 , \varphi _2$. The evaluation of these six integrals is lengthy. When the integrals are done, the result is $E^1$ = +34.0 eV so that the total energy calculated using our second approximation method, first-order perturbation theory, is

$$ E_{approx2} = E^0 + E^1 = - 74.8 eV $$ {eq:9-30} n=4

The new approximate value for the binding energy represents a substantial (~30%) improvement over the zero-order energy:

$$ E^{0} = \dfrac{2}{n^2} + \dfrac{2}{n^2} = 4\, \underbrace{E_h}_{hartrees} = 108.8\, eV $$

so the interaction of the two electrons is an important part of the total energy of the helium atom. We can continue with perturbation theory and find the additional corrections, $E^2$, $E^3$, etc. For example,

$$ E^0 + E^1 + E^2 = -79.2\, eV. $$

So with two corrections to the energy, the calculated result is within 0.3% of the experimental value of -79.01 eV. It takes thirteenth-order perturbation theory (adding $E^1$ through $E^{13}$ to $E^0$) to compute an energy for helium that agrees with experiment to within the experimental uncertainty. Interestingly, while we have improved the calculated energy so that it is much closer to the experimental value, we learn nothing new about the helium atom wavefunction by applying the first-order perturbation theory to the energy above. He need to expand the wavefunctions to first order perturbation theory, which requires more effort. Below, we will employ the variational method approximation to modify zero-order wavefunctions to address one of the ways that electrons are expected to interact with each other.

:::note [note] The Hartree Unit of Energy

The hartree is the atomic unit of energy (named after the British physicist Douglas Hartree) and is defined as

$$ E_h=2R_Hhc $$

where $R_H$ is the Rydberg constant, $h$ is the Planck constant and $c$ is the speed of light.

$$ \begin{align} E_h &= 4.359 \times 10^{−18} \,J \nonumber \\[4pt] &= 27.21\, eV. \nonumber \end{align} $$

The hartree is usually used as a unit of energy in atomic physics and computational chemistry. As discussed before for hydrogen emission, IR, and microwave spectroscopies, experimental measurements prefer the electronvolt ($eV$) or the wavenumber ($cm^{−1}$).
:::

## Variational Method Applied to the Helium Method

As discussed in Section 6.7, because of the electron-electron interactions, the Schrödinger's Equation cannot be solved exactly for the helium atom or more complicated atomic or ionic species. However, the ground-state energy of the helium atom can be estimated using approximate methods. One of these is the variational method which requires the minimizing of the following variational integral.

$$ \begin{align} E_{trial} &= \dfrac{\langle \psi_{trial}| \hat{H} | \psi_{trial} \rangle }{\langle \psi_{trial}| \psi_{trial} \rangle} \\[4pt] &= \dfrac{\displaystyle \int_0^{\infty} \psi_{trial}^* \hat{H} \psi_{trial} d\tau}{\displaystyle \int_0^{\infty} \psi_{trial}^2 \, d\tau}  \end{align} $$ {eq:7.3.1b} n=5 {eq:7.3.1a} n=5

The five trial wavefunctions discussions below are equally "valid" trial wavefunctions that describe the probability of finding each electron (technically the wavefunction squared). What separates the "poor" approximations from the "good" approximation is whether the trial wavefunction predicts experimental results. Consequently, for all the approximations used for the rest of this TextMap, it is important to compare the theoretical results to the "true" (i.e., experimental) results. No matter how complicated an approximation is, it is only as good as the accuracy of its predicted values to experimental values.

### Trial Wavefunction #1: Simple Orbital Approximation with One Parameter

As is clear from Equation [ref:eq:7.3.1b], the variational method approximation requires that a trial wavefunction with one or more adjustable parameters be chosen. A logical first choice for such a multi-electron wavefunction would be to assume that the electrons in the helium atom occupy two identical, but scaled, hydrogen 1s orbitals.

$$ \begin{align} | \psi (1,2) \rangle_{trial} &= \phi (1) \phi (2) \\[4pt] &= \exp\left[- \alpha (r_1 +r_2)\right]  \end{align} $$ {eq:7.3.2} n=6

The variational energy obtained after minimizing Equation [ref:eq:7.3.1a] after substituting the trial wavefunction (Equation [ref:eq:7.3.2]) by varying $\alpha$ is

$$ E_{trial} = -2.84766 \;E_h $$

and the experimentally determined ground-state energy for the helium atom is the sum of first and second ionization energies

$$ E_{\exp}= I_1 +I_2 = -2.90372 \;E_h $$ {eq:exp} n=7

The deviation of energy for the optimized trial wavefunction from the experimental value is

$$ \begin{align} \left| \dfrac{E_{trial}(\alpha)-E_{\exp}}{E_{\exp}} \right| &= \left| \dfrac{-2.84766 \;E_h + 2.90372 \;E_h}{-2.90372 \;E_h} \right| \\[4pt] &= 1.93 \%  \end{align} $$ {eq:trial1} n=8

The value of -2.8477 hartrees is within 2% of the known ground-state energy of the helium atom. The error in the calculation is attributed to the fact that the wavefunction is based on the orbital approximation and, therefore, does not adequately take electron-electron interactions into account. In other words, this wavefunction gives the electrons too much independence, given that they have like charges and tend to avoid one another.

### Trial Wavefunction #2: Orbital Approximation with Two Parameters

Some electron-electron interactions can be built into the multi-electron wavefunction by assuming that each electron is in an orbital which is a linear combination of two different and scaled hydrogen 1s orbitals.

$$ \phi(r_1) = \exp(- \alpha r_1) + \exp(- \beta r_1) $$ {eq:7.3.3} n=9

Under the orbital approximation this assumption gives a trial wavefunction of the form

$$ \begin{align} | \psi (1,2) \rangle_{trial} &= \phi (1) \phi (2)  \\[4pt] &= {\exp(- \alpha r_1 )\exp(- \alpha r_2)}+\exp(- \alpha r_1 )\exp(- \beta r_2)+\exp(- \beta r_1 )\exp(- \alpha r_2 )+\exp(- \beta r_1 )\exp(- \beta r_2 )  \end{align} $$ {eq:7.3.4a} n=10 {eq:7.3.4b} n=10

Inspection of this trial wavefunction indicates that 50% of the time the electrons are in different orbitals, while for the first trial wavefunction the electrons were in the same orbital 100% of the time. Notice the enormous increase in the complexity of the variational expression for the energy for this trial wavefunction (Equation [ref:eq:7.3.1a]). However, the calculation is very similar to that using the previous trial wavefunction. The differences are that in this case the expression for the energy is more complex and that it is being minimized simultaneously with respect to two parameters ($\alpha$ and $\beta$) rather than just one ($\alpha$).

The variational energy obtained after minimizing Equation [ref:eq:7.3.1a] after substituting the trial wavefunction (Equation [ref:eq:7.3.4b]) by varying $\alpha$ and $\beta$ is

$$ E_{trial} =-2.86035 \;E_h $$

The deviation of energy for the optimized trial wavefunction from the experimental value (Equation [ref:eq:exp]) is

$$ \begin{align} \left| \dfrac{E_{trial}(\alpha, \beta)-E_{\exp}}{E_{\exp}} \right| &= \left| \dfrac{-2.86035 \;E_h + 2.90372 \;E_h}{-2.90372 \;E_h} \right| \\[4pt] &= 1.49 \%  \end{align} $$ {eq:trial2} n=11

Clearly introducing some electron-electron interactions into the trial wavefunction has improved the agreement between theory and experiment (Equation [ref:eq:trial1] vs. [ref:eq:trial2]).

### Trial Wavefunction #3: Orbital Approximation with Two Parameters

The extent of electron-electron interactions can be increased further by eliminating the first and last term in the second trial wavefunction (Equation [ref:eq:7.3.4b]). This yields a multi-electron wavefunction of the form,

$$ | \psi (1,2) \rangle_{trial} = \exp(- \alpha r_1 )\exp(- \beta r_2 ) + \exp(- \beta r_1 )\exp(- \alpha r_2 ) $$ {eq:7.3.5} n=12

This trial wavefunction places the electrons in different scaled hydrogen 1s orbitals 100% of the time this adds further improvement in the agreement with the literature value of the ground-state energy is obtained. The variational energy obtained after minimizing Equation [ref:eq:7.3.1a] after substituting the trial wavefunction (Equation [ref:eq:7.3.5]) by varying $\alpha$ and $\beta$ is

$$ E_{trial} = -2.87566 \;E_h $$

The deviation of energy for the optimized trial wavefunction from the experimental value (Equation [ref:eq:exp]) is

$$ \begin{align} \left| \dfrac{ E_{trial} (\alpha,\beta)-E_{\exp}}{E_{\exp}} \right| &= \left| \dfrac{-2.87566 \;E_h + 2.90372 \;E_h}{-2.90372 \;E_h} \right| \\[4pt] &= 0.97 \% \end{align} $$ {eq:trial3} n=13

This result is within 1% of the actual ground-state energy of the helium atom.

### Trial Wavefunction #4: Approximation with Two Parameters

The third trial wavefunction, however, still rests on the orbital approximation and, therefore, does not treat electron-electron interactions adequately. Hylleraas took the calculation a step further by introducing electron-electron interactions directly into the first trial wavefunction by adding a term, $r_{12}$, involving the inter-electron separation.

$$ | \psi_{trial} (1,2) \rangle = \left(\exp[- \alpha ( r_1 + r_2 )]\right) \left(1 + \beta r_{12} \right) $$ {eq:7.3.6} n=14

In the trial multi-electron wavefunction of Equation [ref:eq:7.3.6], if the electrons are far apart, then $r_{12}$ is large and the magnitude of the wavefunction increases to favor that configuration. The variational energy obtained after minimizing Equation [ref:eq:7.3.1a] after substituting the trial wavefunction (Equation [ref:eq:7.3.6]) by varying $\alpha$ and $\beta$ is

$$ E_{trial} = - 2.89112\; E_h $$

The deviation of energy for the optimized trial wavefunction from the experimental value (Equation [ref:eq:exp]) is

$$ \begin{align} \left| \dfrac{ E_{trial} (\alpha,\beta)-E_{\exp}}{E_{\exp}} \right| &= \left| \dfrac{- 2.89112 \;E_h + 2.90372 \;E_h}{-2.90372 \;E_h} \right| \\[4pt] &= 0.43 \%  \end{align} $$ {eq:trial4} n=15

This modification of the trial wavefunction has further improved the agreement between theory and experiment to within 0.5%.

### Fifth Trial Wavefunction #5: Approximation with Three Parameters

Chandrasakar brought about further improvement by adding Hylleraas's $r_{12}$ term to the third trial wavefunction (Equation [ref:eq:7.3.5]) as shown here.

$$ | \psi (1,2) \rangle_{trial} = \left[\exp(- \alpha r_1 )\exp(- \beta r_2 ) + \exp(- \beta r_1 )\exp(- \alpha r_2 ) \right][1 + \gamma r _{12} ] $$ {eq:7.3.7} n=16

Chandrasakar's three parameter wavefunction gives rise to a fairly complicated variational expression for ground-state energy. The variational energy obtained after minimizing Equation [ref:eq:7.3.1a] after substituting the trial wavefunction (Equation [ref:eq:7.3.7]) by varying $\alpha$, $\beta$ and $\gamma$ is

$$ E_{trial} = -2.90143 \;E_h $$

The deviation of energy for the optimized trial wavefunction from the experimental value (Equation [ref:eq:exp]) is

$$ \begin{align} \left| \dfrac{ E_{trial} (\alpha, \beta, \gamma)-E_{\exp}}{E_{\exp}} \right| &= \left| \dfrac{-2.90143 + 2.90372 \;E_h}{-2.90372 \;E_h} \right| \\[4pt] &= 0.0789 \%  \end{align} $$ {eq:trial5} n=17

Chandrasakar's wavefunction gives a result for helium that is within 0.07% of the experimental value for the ground-state energy.

## Summary

The purpose of this section is to examine five trial wavefunctions for the helium atom used within the Perturbation Theory and Variational method approximation. For the Variational method approximation, the calculations begin with an uncorrelated wavefunction in which both electrons are placed in a hydrogenic orbital with scale factor $\alpha$. The next four trial functions use several methods to increase the amount of electron-electron interactions in the wavefunction. As the summary of results that is appended shows this gives increasingly more favorable agreement with the experimentally determined value for the ground-state energy of the species under study. The detailed calculations show that the reason for this improved agreement with experiment is due to a reduction in electron-electron repulsion.

Five variational method calculations that have been outlined above for the helium atom ($Z=2$) can be repeated for two-electron atoms (e.g., $\ce{H^-}$, $\ce{Li^+}$, $\ce{Be^{2+}}$, etc). The hydride anion is a particularly interesting case because the first two trial wavefunctions do not predict a stable ion (i.e., they are poor approximations). This indicates that electron-electron interactions is an especially important issue for atoms and ions with small nuclear charge.
