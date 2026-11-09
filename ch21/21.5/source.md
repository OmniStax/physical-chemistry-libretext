<!-- LibreTexts page 14482: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/21:_Entropy_and_the_Third_Law_of_Thermodynamics/21.05:_Practical_Absolute_Entropies_Can_Be_Determined_Calorimetrically -->
# Practical Absolute Entropies Can Be Determined Calorimetrically

Practical absolute entropies can also be determined experimentally using calorimetry, based on the Third Law of Thermodynamics. The Third Law states that a perfect crystalline substance has zero entropy at absolute zero (0 K). From this reference point, the entropy at any higher temperature can be obtained by measuring the heat capacity of the substance as it is warmed from 0 K up to the temperature of interest (often 298 K for standard entropies).

From section [21.1](page:14476), we learned that the entropy at constant pressure changes with temperature by:

$$ \Delta S=\int_{T_1}^{T_2}{\frac{C_P(T)}{T}dT} $$ {eq:1} n=1

where $C_p$​ is the molar heat capacity at constant pressure.

Equation [ref:eq:1] accounts for the continuous increase in entropy as the substance absorbs heat with rising temperature but does not address the increase in entropy if the substances undergoes a phase transition. From section [21.3](page:14479), we learned that the entropy of a phase transition (e.g., melting or vaporization) is:

$$ \Delta S_{trs}=\frac{\Delta H_{trs}}{T_{trs}} $$ {eq:2} n=2

Note that third law of thermodynamics can be used to set the entropy at absolute zero ($T_1=0 K$) to zero in the integral in Equation [ref:eq:1] and the expression in Equation [ref:eq:2] applies to all possible phase transitions. These aspects combined with Equations [ref:eq:1] and [ref:eq:2] results in an expression for the absolute entropy of a substance at temperature $T$:

$$ S(T)=\int_0^T \frac{C_p(T)}{T} d T+\sum \frac{\Delta H_{\text {trs}}}{T_{\text {trs}}} $$ {eq:3} n=3

The summation term adds contributions from multiple possible phase transitions, where entropy changes abruptly due to latent heats ($ΔH$) at specific transition temperatures.

The values of $C_p$, $\Delta H_{\text {trs}}$, and $T$ can be experimentally determined using calorimetry. We can calculate the practical absolute entropy of a substance for any temperature.

:::example {ex:21.5.1}

What is the absolute entropy of $\ce{CO2}$ gas at 300 K?

**Solution**

The entropy of $\ce{CO2}$ gas at 300 K can be calculated by:

$$ S(T)=\int_{0 K}^{T_{sub}}{\frac{C_P(T)}{T}dT}+\frac{\Delta H_{sub}}{T_{sub}}+\int_{T_{sub}}^{300\text{ K}}{\frac{C_P^g(T)}{T}dT} $$

where the temperature of sublimation ($T_{sub}$) is 194.7 K.

> FIGURE {fig:21.5.1} src=media/399491-Absolute_entropy_of_CO2-removebg-preview.png
> alt: Graph showing entropy (J/(mol·K)) vs. temperature (°C), with a distinct increase after 200°C.
> caption: The molar entropy of CO<sub>2</sub> from 0 K to 300 K.
:::
