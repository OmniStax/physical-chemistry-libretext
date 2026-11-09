<!-- LibreTexts page 13708: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19:_The_First_Law_of_Thermodynamics/19.10:_Relative_Enthalpies_Can_Be_Determined_from_Heat_Capacity_Data_and_Heats_of_Transition -->
# Relative Enthalpies Can Be Determined from Heat Capacity Data and Heats of Transition

It should be stressed that there {term:are no absolute enthalpies}. All that is properly defined are differences in enthalpy ΔH and these are only defined for *{term:processes}*

:::note [note] When dealing with enthalpies

{term:Define the Process}
:::

For example for the process of:

Process 1: *{term:heating ice from -20<sup>o</sup>C to -0<sup>o</sup>C}*

We could write ΔH<sub>1</sub> = ∫ C<sub>P,ice</sub>. dT from T=253K to T=273K = H(273) -H(253). But before moving beyond the melting point first a different process needs to take place, that of

Process 2: *{term:melting}*

This gives us Δ<sub>fus</sub>H = H<sub>liquid</sub> - H<sub>solid</sub> (both at 273K!). When we heat the liquid water further to say +20<sup>o</sup>C we would have to integrate over the heat capacity of the liquid.

Process 3: *{term:heating water from 0<sup>o</sup>C to +20<sup>o</sup>C}*

We could write

$$ ΔH_3 = \int C_{P,water} dT $$

from T=273K to T=293K = H(293)-H(273).

The total change in enthalpy between -20 and +20 would be the sum of the three enthalpy changes.

$$ ΔH_{total process} = ΔH_1 + Δ_{fus}H + ΔH_3 $$

Of course we could consider doing the same calculation for any temperature between -20 and +20 and summarize all our results in a graph. The three processes can thus schematically be shown in Figure 19.10.1.

> FIGURE {fig:19.10.1} src=media/87321-CH431_Image100.gif width=574px
> alt: Graph showing the relationship between temperature (x-axis) and energy (y-axis), with a noticeable increase at higher temperatures.
> caption: Schematic enthalpy function showing the jump at the melting point

Notice that the slopes (i.e. the heat capacities!) before and after the melting point differ. The slope for the liquid is a little steeper because the liquid has more degrees of freedom and therefore the heat capacity of the liquid tends to be higher than of the solid. In the figure the enthlapy curves are shown as straight lines. This would be the case if the heat capacities are *constant* over the temperature interval. Although C<sub>p</sub> is typically a 'slow' or 'weak' function of temperature it usually does change a bit, which means that the straight lines for H become curves.

> Although C<sub>p</sub> is typically a 'slow' or 'weak' function of temperature and is well approximated as a constant.

Notice that for process two, the temperature is constant, that means that $ΔT$ or $dT$ is zero, but ΔH is finite, consequently ΔH/ΔT is infinitly large. Taking the limit for ΔT going to zero, we get a derivative:

$$ \left( \dfrac{\partial H}{ \partial T} \right)_p = C_p $$

This derivative, the heat capacity must undergo a singularity: the slope is infinitely large (i.e, the $H$ curve goes straight up). When there are more phase transitions, more discontinuities in $H$ and singularities in $C_p$ result (Figure 19.10.1). Note that $H(T)-H(0)$, not $H(T)$ is plotted to avoid the question what the absolute enthalpy is.

:::note [note] Scanning calorimetry

There is technique that allows us to measure the heat capacity as a function of temperature fairly directly. It is called Differential Scanning Calorimetry (DSC). You put a sample in a little pan and put the pan plus an empty reference pan in the calorimeter. The instrument heats up both pans with a constant heating rate. Both pans get hotter by *{term:conduction}*, but the heat capacity of the filled pan is obviously bigger. This means that the heat flow into the sample pan must be a bit bigger than into the empty one. This differential heat flow induces a tiny temperature difference ΔT between the two pans that can be measured. This temperature difference is proportional to the heat flow difference which is proportional to the heat capacity difference.

$$ ΔT ~ ΔΦ ~ Δ_{between pans}C_p = C_p^{sample} \,(if the pans cancel) $$

However, there are number of serious broadening issues with the technique. If you melt something you will never get to see the infinite singularity of the heat capacity. Instead it broadens out into a peak. If you integrate the peak you get the Δ<sub>fusion</sub>H and the onset is calibrated to give you the melting point.

> IMAGE {img:1} src=media/87323-DSC.gif width=464
> alt: Graph showing an integrated area under a peak, labeled with temperature (T) and phase states: solid and lipid.
> caption: The ideal heat capacity signal and its broadened DSC signal

It is even possible to heat the sample with a rate that fluctuates with a little sine wave. This "Modulated DSC" version can even give you the (small) difference in $C_p$ before and after the melting event.
:::
