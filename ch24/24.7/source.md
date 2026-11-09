<!-- LibreTexts page 14509: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24:_Solutions_I_-_Volatile_Solutes/24.07:_Activities_of_Nonideal_Solutions -->
# Activities of Nonideal Solutions

The bulk of the discussion in this chapter dealt with ideal solutions. However, real solutions will deviate from this kind of behavior. So much as in the case of gases, where fugacity was introduced to allow us to use the ideal models, {term:activity} is used to allow for the deviation of real solutes from limiting ideal behavior. The activity of a solute is related to its concentration by

$$ a_B=\gamma \dfrac{m_B}{m^o} $$

where $\gamma$ is the {term:activity coefficient}, $m_B$ is the molaliy of the solute, and $m^o$ is unit molality. The activity coefficient is unitless in this definition, and so the activity itself is also unitless. Furthermore, the activity coefficient approaches unity as the molality of the solute approaches zero, insuring that dilute solutions behave ideally. The use of activity to describe the solute allows us to use the simple model for chemical potential by inserting the activity of a solute in place of its mole fraction:

$$ \mu_B =\mu_B^o + RT \ln a_B $$

The problem that then remains is the measurement of the activity coefficients themselves, which may depend on temperature, pressure, and even concentration.

## Activity Coefficients for Ionic Solutes

For an ionic substance that dissociates upon dissolving

$$ MX(s) \rightarrow M^+(aq) + X^-(aq) $$

the chemical potential of the cation can be denoted $\mu_+$ and that of the anion as $\mu_-$. For a solution, the total molar Gibbs function of the solutes is given by

$$ G = \mu_+ + \mu_- $$

where

$$ \mu = \mu^* + RT \ln a $$

where \(\mu^*\) denotes the chemical potential of an ideal solution, and $a$ is the activity of the solute. Substituting his into the above relationship yields

$$ G = \mu^*_+ + RT \ln a_+ + \mu_-^* + RT \ln a_- $$

Using a molal definition for the activity coefficient

$$ a_i = \gamma_im_i $$

The expression for the total molar Gibbs function of the solutes becomes

$$ G = \mu_+^* + RT \ln \gamma_+ m_+ + \mu_-^* + RT \ln \gamma_- m_- $$

This expression can be rearranged to yield

$$ G = \mu_+^* + \mu_-^* + RT \ln m_+m_- + RT \ln \gamma_+\gamma _- $$

where all of the deviation from ideal behavior comes from the last term. Unfortunately, it impossible to experimentally deconvolute the term into the specific contributions of the two ions. So instead, we use a geometric average to define the {term:mean activity coefficient}, $\gamma _\pm$.

$$ \gamma_{\pm} = \sqrt{\gamma_+\gamma_-} $$

For a substance that dissociates according to the general process

$$ M_xX_y(s) \rightarrow x M^{y+} (aq) + yX^{x-} (aq) $$

the expression for the mean activity coefficient is given by

$$ \gamma _{\pm} = (\gamma_+^x \gamma_-^y)^{1/x+y} $$

### Debeye-Hückel Law

In 1923, Debeye and Hückel (Debye & Hückel, 1923) suggested a means of calculating the mean activity coefficients from experimental data. Briefly, they suggest that

$$ \log _{10} \gamma_{\pm} = \dfrac{1.824 \times 10^6}{(\epsilon T)^{3/2}} |z_++z_- | \sqrt{I} $$

where $\epsilon$ is the dielectric constant of the solvent, $T$ is the temperature in K, $z_+$ and $z_-$ are the charges on the ions, and $I$ is the {term:ionic strength} of the solution. $I$ is given by

$$ I = \dfrac{1}{2} \dfrac{m_+ z_+^2 + m_-z_-^2}{m^o} $$

For a solution in water at 25 <sup>o</sup>C,

As seen before activities are a way to account for deviation from ideal behavior while still keeping the formulism for the ideal case intact. For example in a ideal solution we have:

$$ μ^{sln} = μ^* + RT \ln x_i $$

is replaced by

$$ μ^{sln} = μ^* + RT \ln a_i $$

The relationship between $a_i$ and $x_i$ is often written using an activity coefficient $γ$:

$$ a_i= γ_ix_i $$

## Raoult versus Henry

Implicitly we have made use of Raoult's law here because we originally used

$$ x_i = \dfrac{P_i}{P^*_i} $$

In the case of a solvent this makes sense because Raoult's law is still valid in the limiting case, but for the solute it would make more sense to use Henry's law as a basis for the definition of activity:

$$ a_{solute,H} ≡ \dfrac{P_{solute}}{K_{x,H}} $$

This does mean that the $μ^*$ now becomes a $μ^{*Henry}$ because the extrapolation of the Henry law all the way to the other side of the diagram where $x_{solute}=1$ points to a point that is not the equilibrium vapor pressure of this component. In fact it represents a virtual state of the system that cannot be realized. This however does not affect the usefulness of the convention.

## Various concentration units

The subscript X was added to the K value because we are still using mole fractions. However Henry's law is often used with other concentration measures. The most important are:

- molarity
- molality
- mole fraction

Both the numerical values and the dimensions of K will differ depending on which concentration measure is used. In addition the pressure units can differ. For example for oxygen in water we have:

K<sub>x,H</sub>= 4.259 10<sup>4</sup> atm

K<sub>cp</sub><sub>,H</sub>= 1.3 10<sup>-3</sup> mol/lit.atm

K<sub>pc,H</sub>= 769.23 lit.atm/mol

As you can see K<sub>cp</sub><sub>,H</sub> is simply 1/K<sub>pc,H</sub>, both conventions are used..

Note that in this case a choice based on Raoult is really not feasible. At room temperature we are far above the critical point of oxygen which make the equilibrium vapor pressure a non-existent entity. Returning to activities we could use each of the versions of K as a basis for the activity definition. This means that when using activities it must be specified what scale we are using. Activities and Henry coefficients of dissolved gases in water (both fresh and salt) are quite important in geochemistry, environmental chemistry etc.

## Non-volatile solutes

A special case arises if the vapor pressure of a solute is negligible. For example if we dissolve sucrose in water. In that case we can still use the Henry based definition

$$ a_{solute,H} ≡ \dfrac{P_{solute}}{K_{x,H}} $$

Even though both $K$ and $P$ will be exceedingly small their ratio is still finite. However how do we determine either?

The answer lies in the solvent. Even if the vapor pressure of sucrose is immeasurably small, the water vapor pressure above the solution can be measured. The Gibbs-Duhem equation can then be used to translate one into the other. We can use Raoult Law to define the activity of the solvent:

$$ a_1 = \dfrac{P_1}{P^*_1} $$

We can measure the pressures as a function of the solute concentrations. At low concentrations

$$ \ln a_1 \ln x-1 ≈ -x-2 $$

At higher concentrations we will get deviations, we can write:

$$ \ln \dfrac{P_1}{P^*_1}=\ln a_1 ≈ -x_2φ $$

The 'fudge factor' $φ$ is known as the *osmotic coefficient* and can thus be determined as a function of the solute concentration from the pressure data. What we are really interested in is $a_2$, not $a_1$:

$$ a_2= γ_2x_2 $$

Using Gibbs-Duhem we can convert $φ$ into $γ_2$. Usually this is done in terms of molalities rather than mole fractions and it leads to this integral:

$$ \ln γ_{2,m} = φ – 1 + \int_{m'=0}^m \dfrac{φ – 1}{m'} dm' $$
