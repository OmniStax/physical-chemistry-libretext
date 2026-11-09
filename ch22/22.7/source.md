<!-- LibreTexts page 14494: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22:_Helmholtz_and_Gibbs_Energies/22.07:_The_Gibbs-Helmholtz_Equation -->
# The Gibbs-Helmholtz Equation

### Ideal gas

For a mole of ideal gas we can use the gas law to integrate volume over pressure and we get

$$ ΔG_{molar} = RT \ln \left(\dfrac{P_2}{P_1}\right) $$

It is customary to identify one of the pressures (P<sub>1</sub>} with the *standard state* of {term:1 bar} and use the plimsoll to indicate the fact that we are referring to a standard state by writing:

$$ G_{molar}(P) = G^o_{molar} + RT \ln \left(\dfrac{P}{1}\right)=G^o_{molar} + RT \ln[P] $$

The fact that we are making the function intensive (per mole) is usually indicated by putting a bar over the $G$ symbol, although this is often omitted for G<sup>~~o~~</sup><sub>molar</sub>

### Solids

For solids the volume does not change very much with pressure (the *isothermal compressibility* $κ$ is small), so can assume it more or less constant:

$$ G(P_{final})=G(P_{initial})+ \int VdP \text{(from init to final)} ≈ G(P_{initial})+ V \int dP \text{(from init to final)}=G(P_{initial})+ VΔP $$

## The Gibbs-Helmholtz Expression

$$ \frac { G } { T } = \frac { H } { T } - S $$

Take the derivative under constant pressure of each side to get

$$ \left( \frac { \partial G / T } { \partial T } \right) _ { P } = - \frac { H } { T ^ { 2 } } + \frac { 1 } { T } \left( \frac { \partial H } { \partial T } \right) _ { P } - \left( \frac { \partial S } { \partial T } \right) _ { P } $$

We make use of the relationship between $C_p$ and $H$ and $C_p$ and $S$

$$ \begin{align} \left( \frac { \partial G / T } { \partial T } \right) _ { P } &= - \frac { H } { T ^ { 2 } } + \cancel{ \frac { C _ { P } } { T }} - \cancel{\frac { C _ { P } } { T }} \\ &= - \frac { H } { T ^ { 2 } } \end{align} $$ n=1

We said before that $S$ is a first order derivative of $G$. As you can see from this derivation the enthalpy $H$ is also a first order derivative, albeit not of $G$ itself, but of $G/T$.

$$ \left( \frac { \partial \Delta G / T } { \partial T } \right) _ { P } = - \frac { \triangle H } { T ^ { 2 } } $$

The last step in the derivation simply takes the step before twice -say for the $G$ and $H$ at the begin and end of a *process*- and subtracts the two identical equations leading to a $Δ$ symbol. In this differential form the Gibbs-Helmholtz equation can be applied to any process.

## Gibbs Energy as a Function of Temperature

If heat capacities are know from 0 K we could determine both enthalpy and entropy by integration:

$$ S(T) = S(0) + \int_0^T \dfrac{C_p}{T} dT $$

$$ H(T) = H(0) + \int_0^T C_p\; dT $$

As we have seen we must be careful at phase transitions such as melting or vaporization. At these points the curves are *discontinuous* and the derivative $C_p$ is undefined.

$$ H ( T ) = H ( 0 ) + \int_0^{T_{fus}} C_p(T)_{solid} dT + \Delta H_{fus} + \int_{T_{fus}}^{T_{boil}} C_p(T)_{liquid} dT + \Delta H_{vap} + etc. $$ {eq:Hcurve} n=2

$$ \begin{align} S ( T ) &= S ( 0 ) + \int_0^{T_{fus}} \dfrac{C_p(T)_{solid}}{T} dT + \Delta S_{fus} + \int_{T_{fus}}^{T_{boil}} \dfrac{C_p(T)_{liquid}}{T} dT + \Delta S_{vap} + etc. \\[4pt] &= S(0) + \int_0^{T_{fus}} \dfrac{C_p(T)_{solid}}{T} dT + \dfrac{\Delta H_{fus}}{T_{fus}} + \int_{T_{fus}}^{T_{boil}} \dfrac{C_p(T)_{liquid}}{T} dT + \dfrac{\Delta H_{vap}}{T_{boil}} + etc.   \end{align} $$ {eq:Scurve} n=3

with $H(T=0)= \text{undefined}$ and $S(T=0)=0$ from the third law of thermodynamics.

:::note [emphasis]

We also discussed the fact that the third law allows us to define $S(0)$ as zero in most cases. For the enthalpy we cannot do that so that our curve is with respect to an undefined zero point. We really should plot $H(T) - H(0)$ and leave $H(0)$ undefined.
:::

Because the Gibbs free energy $G= H-TS$ we can also construct a curve for $G$ as a function of temperature, simply by combining the $H$ and the $S$ curves (Equations [ref:eq:Hcurve] and [ref:eq:Scurve]):

$$ G(T) = H(T) - TS(T) $$

Interestingly, if we do so, the {term:discontinuties} at the phase transition points will {term:drop out} for $G$ because at these points $Δ_{trs}H = T_{trs}Δ_{trs}S$. Therefore, $G$ is {term:always} continuous.

The $H(0)$ problem does not disappear so that once again our curve is subject to an arbitrary offset in the y-direction. The best thing we can do is plot the quantity $G(T) - H(0)$ and leave the offset $H(0)$ undefined.

We have seen above that the derivative of $G$ with temperature is $-S$. As entropy is always positive, this means that the G-curve is always *descending* with temperature. It also means that although the curve is *continuous* even at the phase transitions, the slope of the G curve is not, because the derivative $-S$ makes a jump there. Fig. 22.7 in the book shows an example of such a curve for benzene. Note the kinks in the curve at the mp and the boiling point.
