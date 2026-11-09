<!-- LibreTexts page 14515: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/25:_Solutions_II_-_Nonvolatile_Solutes/25.03:_Colligative_Properties_Depend_only_on_Number_Density -->
# Colligative Properties Depend only on Number Density

Colligative properties are properties that depend on the *number* of particles rather than their total mass. This implies that these properties can be used to measure molar mass. Colligative properties include:

- melting point depression
- boiling point elevation
- osmotic pressure

## Melting Point Depression

When we freeze a dilute solution the resulting frozen solvent is often quite a bit purer than the original solution. Let us consider this problem and make the following rather opposite assumptions about the solvent component:

1. In the liquid state it can be considered to follow Raoult's law over a sufficient concentration range
2. In the solid state, the solubility is nil

Under these two assumptions, we can consider the thermodynamic potentials of the solvent component (1) at the freezing point. They should be equal once equilibrium has been reached:

$$ μ_1^s = μ_1^{sln} $$

$$ μ_1^s = μ_1^{liq*} + RT\ln\, a_1 $$

$$ \dfrac{μ_1^s - μ_1^{liq*} }{RT}=\ln \, a_1 $$

$$ \dfrac{-Δμ_1}{RT}=\ln \,a_1 $$

We can now apply *Gibbs-Helmholtz relations* by differentiation with respect to temperature:

$$ \dfrac{\partial}{\partial\;T} \dfrac{Δμ_1}{T} = \dfrac{- Δ_{fus}H_{molar,1}}{T^2} $$

$$ \dfrac{\partial [\ln\,a_1}{\partial T} = \dfrac{Δ_{fus}H_{molar,1}}{RT^2} $$

This means that we can actually use the quantity $Δ_{fus}H_{molar,1}/RT^2$ to determine activities by integration, but usually Raoult Law is assumed valid:

$$ \ln a_1 \ln x_1 ≈ -x_2 $$

If we integrate $Δ_{fus}H_{molar,1}/RT^2$ from the melting point of the pure solvent $T_m^*$ to the actual melting point of the solution $T_m$ we get:

$$ -x_2 = \dfrac{Δ_{fus}H_{molar,1}}{R} \left( \dfrac{1}{T_m^*}- \dfrac{1}{T_m} \right) = \dfrac{Δ_{fus}H_{molar,1}}{R} \left( \dfrac{T_m- T_m^*}{T_m^* T_m} \right) ≈ \dfrac{Δ_{fus}H_{molar,1}}{R} \left(\dfrac{ -ΔT}{T_m^{*2}} \right) $$

This is often rewritten in terms of molality as:

$$ ΔT = K_f.m $$

If K<sub>f</sub> is known for the solvent we can add a number of grams of an unknown compound to the solvent measure the temperature depression, this tells us the molality. From molality and weight we can then calculate molar mass. Boiling point elevation is quite similar.
