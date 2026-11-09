<!-- LibreTexts page 13701: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19:_The_First_Law_of_Thermodynamics/19.03:_Work_and_Heat_are_not_State_Functions -->
# Work and Heat are not State Functions

## Heat and work are path functions

Heat ($q$) and work ($w$) are path functions, not state functions:

1. They are path dependent.
2. They are energy transfer → they are not intrinsic to the system.

:::note [definition] Path Functons

Functions that depend on the path taken, such as work ($w$) and heat ($q$), are referred to as {term:path functions}.
:::

## Reversible versus irreversible

Let's consider a piston that is being compressed at constant temperature (isothermal) to half of its initial volume:

1. Start with cylinder 1 liter, both external and internal pressure 1 bar.
2. *{term:Peg}* the piston in a fixed position.
3. Put cylinder in a pressure chamber with $P_{ext}=2$ bar.
4. Suddenly pull the peg.

> IMAGE {img:1} src=media/402588-Piston_Compression.png width=350px
> alt: Diagram showing a process flow with labeled blocks in varying colors, including red and grey, representing steps or actions.

The piston will shoot down till the internal and external pressures balance out again and the volume is 1/2 L. Notice that the external pressure was *{term:maintained}* constant at 2 bar during the peg-pulling and that the internal and external pressures were *{term:not}* balanced at all time. In a $P-V$ diagram of an ideal gas, $P$ is a hyperbolic function of $V$ under constant temperature (isothermal), but this refers to the *internal* pressure of the gas. It is the external one that counts when computing work and they are not necessarily the same. As long as $P_{external}$ is constant, work is represented by a rectangle.

> IMAGE {img:2} src=media/402589-Thermodynamic_Irreversible_Compression.png
> alt: Graph illustrating a Pressure (P) vs. Volume (V) plot, showing curves and two points labeled 1 and 2, with external pressure marked.

The amount of work being done is equal to the shaded region and in equation:

$$ w=-\int^{V_2}_{V_1}{PdV}=-P_{ext}(V_2-V_1)=-P\Delta V $$

This represents the maximum amount of work that can be done for an isothermal compression. Work is being done on the system, so the overall work being done is positive. Let's repeat the experiment, but this time the piston will compress reversibly over infinitesimally small steps where the $P_{ext}=P_{system}$:

> IMAGE {img:3} src=media/402590-Thermodynamic_Reversible_Compression.png
> alt: Graph depicting pressure (P) vs. volume (V) with a curve and shaded area representing work done, labeled points 1 and 2.

For an ideal gas, the amount of work being done along the reversible compression is:

$$ w=-\int^{V_2}_{V_1}{PdV}=-nRT\int^{V_2}_{V_1}{\frac{1}{V}}=-nRT\ln{\left(\frac{V_2}{V_1}\right)} $$

The amount of work being done to the two systems are not the same in the two diagrams (see the gray areas). Work is not a state, but a path function, as it depends on the path taken. You may say, what's the big difference. In both cases, the system is compressed from state 1 to state 2. The key is the word *{term:suddenly}*. By pegging the position in place for the first compression, we have created a situation where the external pressure is higher than the internal pressure ($P_{ext}>P$). Because work is done suddenly by pulling the peg out, the internal pressure is struggling to catch up with the external one. During the second compression, we have $P_{ext}=P$ at all times. It's a bit like falling off a cliff versus gently sliding down a hill. Path one is called an irreversible path, the second a reversible path.

:::note [note] Reversible vs. Irreversible Processes

A reversible path is a path that follows a series of states at rest (i.e., the forces are allowed to balance at all times). In an irreversible one the forces only balance at the very end of the process.
:::

Notice that less work is being done on the reversible isothermal compression than the one-step irreversible isothermal compression. In fact, the minimum amount of work that can be done during a compression always occurs along the reversible path.

### Isothermal Expansion

Let's consider a piston that is being expanded at constant temperature (isothermal) to twice of its initial volume:

1. Start with cylinder 1 liter in a pressure chamber with both an external and internal pressure of 2 bar.
2. *{term:Peg}* the piston in a fixed position.
3. Take the cylinder out of the pressure chamber with P<sub>ext</sub>= 1 bar.
4. Suddenly pull the peg.

> IMAGE {img:4} src=media/402591-Piston_Expansion.png width=350px
> alt: A diagram showing a black background with gray and red horizontal bars, depicting a model or process.

The piston will shoot up till the internal and external pressures balance out again and the volume is 2 L. Notice that the external pressure was *{term:maintained}* constant at 1 bar during the peg-pulling and that the internal and external pressures were *{term:not}* balanced at all time.

> IMAGE {img:5} src=media/402592-Thermodynamic_Irreversible_Expansion.png
> alt: Graph showing a pressure-volume (P-V) curve with two points labeled 1 and 2, and an external pressure line (P_ext).

The amount of irreversible work being done is again equal to the shaded region and the equation:

$$ w=-P\Delta V=-P_{ext}(V_2-V_1)=-P\Delta V $$

This represents the minimum amount of work that can be done for an isothermal expansion. Work is being done on the system, so the overall work being done is negative. Let's repeat the experiment, but this time the piston will compress reversibly over infinitesimally small steps where the $P_{ext}=P_{system}$:

> IMAGE {img:6} src=media/402593-Thermodynamic_Reversible_Expansion.png
> alt: Graph showing pressure (P) vs. volume (V) with a curved line indicating a relationship, labeled points 1 and 2.

Notice that not only is more work is being done than the one-step irreversible isothermal expansion, but it is the same amount of work being done as the reversible isothermal compression. This is the maximum amount of work that can be done during an expansion.
