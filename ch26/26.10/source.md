<!-- LibreTexts page 14531: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26:_Chemical_Equilibrium/26.10:_Real_Gases_Are_Expressed_in_Terms_of_Partial_Fugacities -->
# Real Gases Are Expressed in Terms of Partial Fugacities

The relationship for chemical potential

$$ \mu = \mu^o + RT \ln \left( \dfrac{p}{p^o} \right) $$

was derived assuming {term:ideal gas} behavior. But for real gases that deviate widely from ideal behavior, the expression has only limited applicability. In order to use the simple expression on real gases, a “fudge” factor is introduced called {term:fugacity}. Using fugacity instead of pressure, the chemical potential expression becomes

$$ \mu = \mu^o + RT \ln \left( \dfrac{f}{f^o} \right) $$

where $f$ is the fugacity. Fugacity is related to pressure, but contains all of the deviations from ideality within it. To see how it is related to pressure, consider that a change in chemical potential for a single component system can be expressed as

$$ d\mu - Vdp - SdT $$

and so

$$ \left(\dfrac{\partial \mu}{\partial p} \right)_T = V $$ {eq:eq3} n=1

Differentiating the expression for chemical potential above with respect to pressure at constant volume results in

$$ \left(\dfrac{\partial \mu}{\partial p} \right)_T = \left \{  \dfrac{\partial}{\partial p} \left[ \mu^o + RT  \ln \left( \dfrac{f}{f^o} \right) \right] \right \} $$

which simplifies to

$$ \left(\dfrac{\partial \mu}{\partial p} \right)_T =  RT  \left[ \dfrac{\partial \ln (f)}{\partial p} \right]_T = V $$

Multiplying both sides by $p/RT$ gives

$$ \left[ \dfrac{\partial \ln (f)}{\partial p} \right]_T = \dfrac{pV}{RT} =Z $$

where $Z$ is the compression factor as discussed previously. Now, we can use the expression above to obtain the {term:fugacity coefficient} $\gamma$, as defined by

$$ f= \gamma p $$

Taking the natural logarithm of both sides yields

$$ \ln f= \ln \gamma + \ln p $$

or

$$ \ln \gamma = \ln f - \ln p $$

Using some calculus and substitutions from above,

$$ \int \left(\dfrac{\partial \ln \gamma}{\partial p} \right)_T  dp = \int \left(\dfrac{\partial \ln f}{\partial p} - \dfrac{\partial \ln p }{\partial p} \right)_T  dp $$

$$ = \int \left(\dfrac{Z}{\partial p} - \dfrac{1}{\partial p} \right)_T dp $$

Finally, integrating from $0$ to $p$ yields

$$ \ln \gamma = \int_0^{p} \left( \dfrac{ Z-1}{p}\right)_T dp $$

If the gas behaves ideally, $\gamma = 1$. In general, this will be the limiting value as $p \rightarrow 0$ since all gases behave ideal as the pressure approaches 0. The advantage to using the fugacity in this manner is that it allows one to use the expression

$$ \mu = \mu^o + RT \ln \left( \dfrac{f}{f^o}\right) $$

to calculate the chemical potential, insuring that Equation [ref:eq:eq3] holds even for gases that deviate from ideal behavior!
