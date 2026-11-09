<!-- LibreTexts page 14517: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/25:_Solutions_II_-_Nonvolatile_Solutes/25.05:_Electrolytes_Solutions_are_Nonideal_at_Low_Concentrations -->
# Electrolytes Solutions are Nonideal at Low Concentrations

A solution with a strong electrolyte, such as NaCl in water, is perhaps one of the most obvious systems to consider but, unfortunately, is also one of the more difficult ones. The reason is that the electrolyte produces two *{term:charged}* solutes, Na<sup>+</sup> and Cl<sup>+</sup> (both in hydrated form), in solution. We need to consider the dissociation process and stoichiometry as we are bringing more than one solute species into solution. We also need to consider electrostatic interactions between solutes. The charges introduce a strong interaction that falls off with r<sup>-1</sup>, as opposed to ~r<sup>-6</sup> if only neutral species are present. This causes a very serious divergence from ideality even at very low concentrations. Consider a salt going into solution:

$$ C_{ν_+}A_{ν_-} \rightarrow ν_+C^{z+} + ν_-A^{z-} $$ {eq:Eq1} n=1

where $ν_+$ and $ν_-$ are the *{term:stoichiometric coefficients}* and $z_+$ and $z_-$ are the formal charges of the cation and anion, respectively. As we shall see, the stoichiometric coefficients involved in the dissociation process are important for a proper description of the thermodynamics of strong electrolytes. Charge neutrality demands:

$$ ν_+z_+ + ν_- z_- = 0 $$ {eq:Eq2} n=2

## Thermodynamic potentials versus the dissociation

For the salt, we can write:

$$ μ_2 =μ_2^o + RT \ln a_2 $$ {eq:Eq3} n=3

However, we need to take into account the dissociation of the salt. To do so, we write:

$$ μ_2 = ν_+μ_+ + ν_-μ_- $$ {eq:Eq4} n=4

This implies:

$$ μ_2^o = ν_+μ_+^o + ν_-μ_-^o $$ {eq:Eq5} n=5

where

$$ μ_+ =μ_-^o + RT\ln a_+ $$ {eq:Eq6} n=6

$$ μ_- =μ_-^o + RT\ln a_- $$ {eq:Eq7} n=7

Usually Henry's law is taken as standard state for both type of ions. However, we cannot measure the activities of the ions separately as it is impossible to add one without adding the other. Nevertheless, we can derive a useful formalism that takes into account the dissociation process. If we substitute the last two equations in the ones above we get:

$$ ν_+\ln a_+ + ν_- \ln a_-=\ln a_2 $$ {eq:Eq8} n=8

Taking the exponent of either side of Equation [ref:eq:Eq8], we get:

$$ a_2 =a_+^{ν_+}a_-^{ ν-} $$ {eq:Eq9} n=9

Notice that the stoichiometric coefficients (Equation [ref:eq:Eq1]) are *exponents* in Equation [ref:eq:Eq9]. We now introduce the sum of the stoichiometric coefficients:

$$ ν_+ + ν_- = ν $$ {eq:Eq10} n=10

and *define* the *{term:mean ionic activity}* $a_±$ as:

$$ a_±^ ν ≡ a_2 =a_+^{ν+}a_-^{ ν-} $$

:::note [note] Note

The mean ionic activity $a_\pm$ and the activity of the salt are closely related but the relationship involves *exponents* due to stoichiometric coefficients involved in the dissociation process. For example:

- For Na<sub>1</sub>Cl<sub>1</sub>: ν= 1+1 = {term:2}: a<sub>±</sub> <sup> {term:2} </sup>= a<sub>NaCl</sub>
- For Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>: ν= 2+3 = {term:5}: a<sub>±</sub> <sup> {term:5} </sup>= a<sub>Al<sub>2</sub></sub><sub>(SO<sub>4</sub>)<sub>3</sub></sub>
:::

## Activity coefficients

All this remains a formality unless we find a way to relate it back to the concentration of the salt. Usually *molality* is used as a convenient concentration measure rather than molarity because we are dealing with pretty strong deviations from ideal behavior and that implies that volume may not be an additive quantity. Molality does not involve volume in contrast to molarity. Working with molalities, we can define activity coefficients for both ions, even though we have no hope to determine them separately:

$$ a_+ =γ_+ m_+ $$ {eq:Eq11} n=11

$$ a_- =γ_- m_- $$ {eq:Eq12} n=12

Stoichiometry dictates the molalities of the individual ions must be related to the *{term:molality of the salt}* $m$ by:

$$ m_-=ν_-m $$ {eq:Eq13} n=13

$$ m_+=ν_+m $$ {eq:Eq14} n=14

:::note [note] Note

We cannot measure the activities of the ions separately because it is impossible to add one without adding the other
:::

Analogous to the mean ionic activity, we can define a {term:mean ionic molality} as:

$$ m_{\pm}^ν ≡ m_+^{ν+}m_-^{ ν-} $$ {eq:Eq15} n=15

We can do the same for the {term:mean ionic activity coefficient}:

$$ γ_{\pm}^ν = γ_+^{ν+}γ_-^{ν-} $$ {eq:Eq16} n=16

Using this definitions we can rewrite:

$$ a_2=a_{\pm}^ν=a_+^{ν+}a_-^{ν-} $$ {eq:Eq17} n=17

as:

$$ a_2=a_{\pm}^ ν =γ_{\pm}^ ν m_{\pm}^ ν $$ {eq:Eq18} n=18

:::note [note] Note

Note that when preparing a salt solution of molality $m$, we should *{term:substitute}:*

$$ m_-=ν_-m $$

$$ m_+=ν_+m $$

into:

$$ m_±^ν ≡ m_+^{ν+}m_-^{ ν-} $$
:::

:::example {ex:25.5.1} Aluminum Sulfate

For Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> we get:

- ν= 2+3 = {term:5}
- a<sub>±</sub> <sup> {term:5} </sup>= a<sub>Al<sub>2</sub></sub><sub>(SO<sub>4</sub>)<sub>3</sub></sub>
- m<sub>-</sub>=3m
- m<sub>+</sub>=2m

So:

m<sub>±</sub> <sup> ν </sup>=m<sub>+</sub><sup>ν<sub>+</sub></sup>m<sub>-</sub><sup> ν<sub>-</sub></sup>=(2m)<sup>2</sup>(3m)<sup>3</sup>={term:108}m<sup>{term:5}</sup>

a<sub>Al<sub>2</sub></sub><sub>(SO<sub>4</sub>)<sub>3</sub></sub>= a<sub>±</sub> <sup> {term:5} </sup> ={term:108}m<sup>{term:5}</sup>γ<sub>±</sub><sup>5</sup>

As you can see the stoichiometry enter *both* into the exponents *and* into the calculation of the molality. Notice that the activity of the salt now goes as the fifth power of its overall molality (on top of the dependency of γ<sub>±</sub> of exp(√m) as shown below).
:::

## Measuring mean ionic activity coefficients

In contrast to the individual coefficients, the *{term:mean ionic activity coefficient}* $γ_{\pm}$ is a quantity that *{term:can be determined}*. In fact we can use the same Gibbs-Duhem trick we did for the sucrose problem to do so. We simply measure the water vapor pressure above the salt solution and use:

$$ \ln γ_{\pm} = φ -1 + \int_{m'=0}^m [ φ -1 ]m' \,dm' $$

The fact that the salt itself has a negligible vapor pressure does not matter. Particularly for ions with high charges, the deviations from ideality are very strong even at tiny concentrations. Admittedly doing these vapor pressure measurements in pretty tedious, there are some other procedures involving electrochemical potentials. However, they too are tedious.
