<!-- LibreTexts page 14499: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/23:_Phase_Equilibria/23.03:_The_Chemical_Potentials_of_a_Pure_Substance_in_Two_Phases_in_Equilibrium -->
# The Chemical Potentials of a Pure Substance in Two Phases in Equilibrium

## Chemical Potential of Two Phases in Equilibrium

Equilibrium between two phases, e.g. water ice ($ice$) and liquid water ($water$), is at constant $T$ and $P$. Therefore:

$$ dG = \cancel{-SdT + VdP} +μ_{ice}dn_{ice}+μ_{water}dn_{water} $$

There is a relationship between the amount of ice and water:

$$ dn_{ice} = -dn_{water} $$

From this, we get:

$$ 0 = [μ_{ice}-μ_{water}]dn_{water} = \Delta \mu\; dn_{water} $$

As $dn_{water}$ is not zero, this means that $\Delta \mu$ must be zero! This must hold true for any set of points where ice and water are in equilibrium. The statement is not just for liquid and solid water, but for any two phases in equilibrium. That is, any two phases in equilbrium will always have the same chemical potential.

## The Clapeyron Equation

That is the almost vertical line in the diagram. Its points are not at the same $P$ and $T$, but we can find out where they should be by considering the thermodynamic potential $\mu$ as a *function* of $T$ and $P$:

$$ dμ = \left(\dfrac{∂μ}{∂P}\right)_TdT + \left(\dfrac{∂μ}{∂T}\right)_PdP $$

Because $\mu= \left(\frac{\partial G}{\partial n}\right)_{T,P} = \bar{G}$, it is not hard to identify the partial derivatives:

$$ \left(\dfrac{∂μ}{∂P}\right) = \left(\dfrac{∂\bar{G}}{∂P}\right) = \bar{V} $$

$$ \left(\dfrac{∂μ}{∂T}\right) = \left(\dfrac{∂\bar{G}}{∂T}\right) = -\bar{S} $$

This is true for both water and ice, or any two phases in equilibrium. As the $Δμ=0$, we can equate the $dμ$ expressions for both water and ice:

$$ \left(\dfrac{∂μ_{ice}}{∂P}\right)_TdT + \left(\dfrac{∂μ_{ice}}{∂T}\right)_P dP=\left(\dfrac{∂μ_{water}}{∂P}\right)_TdT + \left(\dfrac{∂μ_{water}}{∂T}\right)_PdP $$

Rearranging and identifying the partials gives:

$$ \bar{V}_{ice}dP -\bar{S}_{ice}dT= \bar{V}_{water}dP -\bar{S}_{water}dT $$

Solving for $dP/dT$ we get:

$$ \dfrac{dP}{dT} = \dfrac{Δ\bar{S}}{Δ\bar{V}} $$

As $\Delta \bar{G}= \Delta \bar{H}-T\Delta \bar{S} = 0$, we have:

$$ Δ\bar{S} = \dfrac{Δ\bar{H}}{T_m} $$

So:

$$ \dfrac{dP}{dT} = \dfrac{Δ\bar{H}}{TΔ\bar{V}} $$

This expression should be valid for all points along a phase boundary, such as the melt line. In fact, it tells use that the phase boundary is {term:defined} by $\Delta\bar{H}/T\Delta\bar{V}$. For water and ice, we immediately see why the melt line runs a little to the left: exceptionally $\Delta\bar{V}$ is negative for ice, because water is actually a little denser that ice.

The above expression(s) are named after *{term:Clapeyron.}* The values of $\Delta\bar{H}$ and $\Delta\bar{V}$ do not change much with pressure and can often be considered *constants* for the melting line. When gases are involved that is not really true.
