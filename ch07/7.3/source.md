<!-- LibreTexts page 13436: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/07:_Approximation_Methods/7.03:_Trial_Functions_Can_Be_Linear_Combinations_of_Functions_That_Also_Contain_Variational_Parameters -->
# Trial Functions Can Be Linear Combinations of Functions That Also Contain Variational Parameters

## Learning Objectives {section:objectives}

- Demonstrate that variational problems can include changing parameters within the elements (normal variational method) and changing coefficients of a basis set (linear variational method)

An alternative approach to the general problem of introducing variational parameters into wavefunctions is the construction of a wavefunction as a linear combination of other functions each with one or multiple parameters that can be varied

For hydrogen, the radial function decays, or decreases in amplitude, exponentially as the distance from the nucleus increases. For helium and other multi-electron atoms, the radial dependence of the total probability density does not fall off as a simple exponential with increasing distance from the nucleus as it does for hydrogen. More complex single-electron functions therefore are needed in order to model the effects of electron-electron interactions on the total radial distribution function. One way to obtain more appropriate single-electron functions is to use a sum of exponential functions in place of the hydrogenic spin-orbitals.

An example of such a wavefunction created from a sum or linear combination of exponential functions is written as

$$ \varphi _{1s} (r_1) = \sum _j c_j e^{-\zeta _j r_j / a_o} $$ {eq:9-37} n=1

The linear combination permits weighing of the different exponentials through the adjustable coefficients ($c_j$) for each term in the sum. Each exponential term has a different rate of decay through the zeta-parameter $\zeta _j$. The exponential functions in Equation [ref:eq:9-37] are called {term:basis functions}. Basis functions are the functions used in linear combinations to produce the single-electron orbitals that in turn combine to create the product multi-electron wavefunctions. Originally the most popular basis functions used were the STO’s, but today STO’s are not used in most quantum chemistry calculations. However, they are often the functions to which more computationally efficient basis functions are fitted.

Physically, the $\zeta _j$ parameters account for the effective nuclear charge (often denoted with $Z_{eff}$). The use of several zeta values in the linear combination essentially allows the effective nuclear charge to vary with the distance of an electron from the nucleus. This variation makes sense physically. When an electron is close to the nucleus, the effective nuclear charge should be close to the actual nuclear charge. When the electron is far from the nucleus, the effective nuclear charge should be much smaller. See Slater's rules for a rule-of-thumb approach to evaluate $Z_{eff}$ values.

A term in Equation [ref:eq:9-37] with a small $\zeta$ will decay slowly with distance from the nucleus. A term with a large $\zeta$ will decay rapidly with distance and not contribute at large distances. The need for such a linear combination of exponentials is a consequence of the electron-electron repulsion and its effect of screening the nucleus for each electron due to the presence of the other electrons.

:::exercise {exr:7.3.1}

Make plots of $\varphi$ in Equation [ref:eq:9-37] using three equally weighted terms with $\zeta$ = 1.0, 2.0, and 5.0. Also plot each term separately.
:::

Computational procedures in which an exponential parameter like $\zeta$ is varied are more precisely called the Nonlinear Variational Method because the variational parameter is part of the wavefunction and the change in the function and energy caused by a change in the parameter is not linear. The optimum values for the zeta parameters in any particular calculation are determined by doing a variational calculation for each orbital to minimize the ground-state energy. When this calculation involves a nonlinear variational calculation for the zetas, it requires a large amount of computer time. The use of the variational method to find values for the coefficients, $\{c_j\}$, in the linear combination given by Equation [ref:eq:9-37] above is called the Linear Variational Method because the single-electron function whose energy is to be minimized (in this case $\varphi _{1s}$) depends linearly on the coefficients. Although the idea is the same, it usually is much easier to implement the linear variational method in practice.

Nonlinear variational calculations are extremely costly in terms of computer time because each time a zeta parameter is changed, all of the integrals need to be recalculated. In the linear variation, where only the coefficients in a linear combination are varied, the basis functions and the integrals do not change. Consequently, an optimum set of zeta parameters were chosen from variational calculations on many small multi-electron systems, and these values, which are given in Table 7.3.1, generally can be used in the STOs for other and larger systems.

> TABLE {tab:1} cols=3
> caption: Table 7.3.1: Orbital Exponents for Slater Orbitals

| {term:Atom} | $\zeta _{1s}$ | $\zeta _{2s,2p}$ |
| --- | --- | --- |
| H | 1.24 | - |
| He | 1.69 | - |
| Li | 2.69 | 0.80 |
| Be | 3.68 | 1.15 |
| B | 4.68 | 1.50 |
| C | 5.67 | 1.72 |
| N | 6.67 | 1.95 |
| O | 7.66 | 2.25 |
| F | 8.56 | 2.55 |
| Ne | 9.64 | 2.88 |

:::exercise {exr:7.3.2}

Compare the value $\zeta _{1s}$ = 1.24 in Table 7.3.1 for hydrogen with the value you obtained in Exercise 7.3.1. and comment on possible reasons for any difference. Why are the zeta values larger for 1s than for 2s and 2p orbitals? Why do the $\zeta _{1s}$ values increase by essentially one unit for each element from He to Ne while the increase for the $\zeta _{2s, 2p}$ values is much smaller?

**Answer**

ζ values represent the rate of decay in the radial function of an orbital. ζ values are larger for 1s than 2s and 2p orbitals because 1s orbitals have a smaller radial function. As a result, 1s orbitals decrease faster in radial function as you move further from the nucleus, and have a larger ζ value to represent this faster decay. The ζ values for 1s increase essentially by one unit for each element from He to Ne because the 1s orbital is closest to the nucleus, and experiences the greatest effects from change in electronegativity as nuclear density increases from He to Ne. This increase in electronegativity causes the radial function to decay more and more rapidly as atomic number/nucleus density increase. The 2s and 2p orbitals don't experience as great a change in radial function decay rate because they are shielded by the 1s orbital.
:::

The discussion above gives us some new ideas about how to write flexible, useful single-electron wavefunctions that can be used to construct multi-electron wavefunctions for variational calculations. Single-electron functions built from the basis function approach are flexible because they have several adjustable parameters, and useful because the adjustable parameters still have clear physical interpretations. Such functions will be needed in the Hartree-Fock method discussed elsewhere.
