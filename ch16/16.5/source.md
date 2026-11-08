<!-- LibreTexts page 13660: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/16:_The_Properties_of_Gases/16.05:_The_Second_Virial_Coefficient -->
# The Second Virial Coefficient

The second virial coefficient describes the contribution of the pair-wise potential to the pressure of the gas. The third virial coefficient depends on interactions between three molecules, and so on and so forth.

## Introduction

As the density is increased the interactions between gas molecules become non-negligible. Deviations from the ideal gas law have been described in a large number of equations of state. The *virial equation of state* expresses the deviation from ideality in terms of a power series in the density:

$$ \dfrac{P}{kT} = \rho + B_2(T)\rho^2 + B_3(T)\rho^3 + ... $$

- $B_2(T)$ is the second virial coefficient,
- $B_3(T)$ is called the third virial coefficient, etc.

The j<sup>th</sup> virial coefficient can be calculated in terms of the interaction of j molecules in a volume $V$. The second and third virial coefficients give most of the deviation from ideal ($P/rkT$) up to 100 atm.

The {term:second virial coefficient} is usually written as $B$ or as $B_2$. The second virial coefficient represents the initial departure from ideal-gas behavior. The second virial coefficient, in three dimensions, is given by:

$$ B_{2}(T)= - \dfrac{1}{2} \int \left( \exp\left(-\dfrac{\Phi_{12}({\mathbf r})}{k_BT}\right) -1 \right) 4 \pi r^2 dr $$

where $\Phi_{12}({\mathbf r})$ is the intermolecular pair potential, $T$ is the temperature, and $k_B$ is the Boltzmann constant. Notice that the expression within the parenthesis of the integral is the *Mayer f-function*. In practice, the integral is often *very hard* to integrate analytically for anything other than, say, the hard sphere model, thus one numerically evaluates:

$$ B_{2}(T)= - \dfrac{1}{2} \int \left( \left\langle \exp\left(-\dfrac{\Phi_{12}({\mathbf r})}{k_BT}\right)\right\rangle -1 \right) 4 \pi r^2 dr $$

calculating:

$$ \left\langle \exp\left(-\dfrac{\Phi_{12}({\mathbf r})}{k_BT}\right)\right\rangle $$

for each $r$ using the numerical integration scheme proposed by Harold Conroy <sup>[1]</sup><sup>[2]</sup>.

## Calculation of virial coefficients

The configuration integrals for $Z_1$, $Z_2$, and $Z_3$ are:

- $Z_1 = \int dr_1 = V$
- $Z_2 = \int e^{-U_2/kT}dr_1\;dr_2$
- $Z_3 = \int e^{-U_3/kT}dr_1\;dr_2\;dr_3$

The series method allows the calculation of a number of virial coefficients. Recall that the second and third virial coefficient can account for the properties of gases up to hundreds of atmospheres. We will discuss the calculation of the second virial coefficient for a monatomic gas to illustrate the procedure. To calculate $B_2(T)$ we need $U_2$. For monatomic particles it is reasonable to assume that the potential depends only on the separation of the two particles so $U_2 = u(r_{12})$, where $r_{12} = |r_2 - r_1|$. Using a change of variables we can write this integral $r_{12} = r_2 - r_1$ and after integration over $r_1$ we can transform variables from $dr_{12}$ to $4\pi r^2dr$. The result is:

$$ B_2(T) = -2 \pi \int [ e^{-\beta u(r)} - 1 ] r^2 \; dr $$

This expression can be used to obtain parameters from experiment. The second virial coefficient is tabulated for a number of gases. For a hard-sphere potential there is an infinite repulsive wall at a particle radius $\sigma$. There is no attractive part.

$$ \begin{align*} B_2(T) &= -2 \pi \int_0^{\sigma} [ - 1 ] r^2 \; dr \\[4pt] &= \dfrac{2 \pi \sigma^3}{3} \end{align*} $$

The Lennard-Jones potential cannot be calculated analytically, but the integral can be computed numerically. The second virial coefficient was a useful starting point for obtaining Lennard-Jones parameters that were used in simulations.

## Isihara-Hadwiger Formula

The Isihara-Hadwiger formula was discovered simultaneously and independently by Isihara and the Swiss mathematician Hadwiger in 1950. The second virial coefficient for any hard convex body is given by the exact relation:

$$ B_2=RS+V $$

or:

$$ \dfrac{B_2}{V}=1+3 \alpha $$

where:

$$ \alpha = \dfrac{RS}{3V} $$

where $V$ is the volume, $S$, the surface area, and $R$ the mean radius of curvature.

## Hard spheres

For the hard sphere model one has:<sup>[9]</sup>

$$ B_{2}(T)= - \dfrac{1}{2} \int_0^\sigma \left(\langle 0\rangle -1 \right) 4 \pi r^2 dr $$

leading to

$$ B_{2}= \dfrac{2\pi\sigma^3}{3} $$

Note that $B_{2}$ for the hard sphere is independent of temperature.

## Van der Waals equation of state

For the Van der Waals equation of state one has:

$$ B_{2}(T)= b -\dfrac{a}{RT} $$

## Excluded volume

The second virial coefficient can be computed from the expression:

$$ B_{2}= \dfrac{1}{2} \iint v_{\mathrm {excluded}} (\Omega,\Omega') f(\Omega) f(\Omega')~ {\mathrm d}\Omega {\mathrm d}\Omega' $$

where $v_{\mathrm {excluded}}$ is the excluded volume.

## References

1. Reid, B. P. J. Chem. Educ. 1996, 73, 612-615.
2. Harold Conroy "Molecular Schrödinger Equation. VIII. A New Method for the Evaluation of Multidimensional Integrals", Journal of Chemical Physics {term:47} pp. 5307 (1967)
3. I. Nezbeda, J. Kolafa and S. Labík "The spherical harmonic expansion coefficients and multidimensional integrals in theories of liquids", Czechoslovak Journal of Physics {term:39} pp. 65-79 (1989)
4. Akira Isihara "Determination of Molecular Shape by Osmotic Measurement", Journal of Chemical Physics {term:18} pp. 1446-1449 (1950)
5. Akira Isihara and Tsuyoshi Hayashida "Theory of High Polymer Solutions. I. Second Virial Coefficient for Rigid Ovaloids Model", Journal of the Physical Society of Japan {term:6} pp. 40-45 (1951)
6. Akira Isihara and Tsuyoshi Hayashida "Theory of High Polymer Solutions. II. Special Forms of Second Osmotic Coefficient", Journal of the Physical Society of Japan {term:6} pp. 46-50 (1951)
7. H. Hadwiger "Einige Anwendungen eines Funkticnalsatzes fur konvexe Körper in der räumichen Integralgeometrie" Mh. Math. {term:54} pp. 345- (1950)
8. H. Hadwiger "Der kinetische Radius nichtkugelförmiger Moleküle" Experientia {term:7} pp. 395-398 (1951)
9. H. Hadwiger "Altes und Neues über Konvexe Körper" Birkäuser Verlag (1955)
10. Donald A. McQuarrie "Statistical Mechanics", University Science Books (2000) ISBN 978-1-891389-15-3 Eq. 12-40
11. I. Amdur and E. A. Mason "Properties of Gases at Very High Temperatures", Physics of Fluids {term:1} pp. 370-383 (1958)

## Related reading

- W. H. Stockmayer "Second Virial Coefficients of Polar Gases", Journal of Chemical Physics {term:9} pp. 398- (1941)
- G. A. Vliegenthart and H. N. W. Lekkerkerker "Predicting the gas–liquid critical point from the second virial coefficient", Journal of Chemical Physics {term:112} pp. 5364-5369 (2000)
