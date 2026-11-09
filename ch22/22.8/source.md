<!-- LibreTexts page 14495: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22:_Helmholtz_and_Gibbs_Energies/22.08:_Fugacity_Measures_Nonideality_of_a_Gas -->
# Fugacity Measures Nonideality of a Gas

We have seen that, for a closed system, the Gibbs energy is related to pressure and temperature as follows:

$$ dG =VdP - SdT $$

For a constant temperature process:

$$ dG = VdP $$ {eq:16.16} n=1

Equation [ref:eq:16.16] can be evaluated for an ideal gas:

$$ d\bar{G} =\dfrac{RT}{P} dP $$

At constant temperature, $T$:

$$ d\bar{G} = RT\;d\ln P $$

This expression by itself is strictly applicable to ideal gases. However, Lewis, in 1905, suggested extending the applicability of this expression to all substances by defining a new thermodynamic property called {term:fugacity}, $f$, such that:

$$ d\bar{G} = RT\;d\ln f $$

This definition implies that for ideal gases, $f$ must be equal to $P$. For non ideal gases, $f$ is not equal to $P$. The ratio between fugacity and pressure is:

$$ \phi = \frac{f}{P} $$

where $\phi$ is the fugacity coefficient. The fugacity coefficient takes a value of unity when the substance behaves like an ideal gas. Therefore, the fugacity coefficient is also regarded as a *measure of non-ideality*; the closer the value of the fugacity coefficient is to unity, the closer we are to the ideal state. In the zero-pressure limit, fugacity approaches ideal gas behavior:

$$ \lim_{P\rightarrow0}{d\bar{G} = RT\;d\ln P} $$

For mixtures, this expression is written as:

$$ d\bar{G}_i = RT\;d\ln f_i $$

where $\bar{G}_i$ and $f_i$ are the partial molar Gibbs energy and fugacity of the i-th component, respectively. Fugacity can be readily related to chemical potential because of the one-to-one relationship of Gibbs energy to chemical potential, which we have discussed previously. Therefore, the definition of fugacity in terms of chemical potential becomes:

$$ d\bar{\mu}_i = RT\;d\ln f_i $$

Even though the concept of thermodynamic equilibrium is given in terms of chemical potentials, the above definitions allow us to restate the same principle in terms of fugacity. To do this, previous expressions can be integrated to obtain:

$$ \bar{\mu} = \bar{\mu}^\circ + RT\ln\frac{f}{P^\circ} $$

At equilibrium:

$$ 0 = \bar{\mu}^\circ + RT\ln\frac{f}{P^\circ} $$

$$ \bar{\mu}^\circ = - RT\ln\frac{f}{P^\circ} $$
