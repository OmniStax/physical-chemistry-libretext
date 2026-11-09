<!-- LibreTexts page 13715: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20:_Entropy_and_The_Second_Law_of_Thermodynamics/20.02:_Nonequilibrium_Isolated_Systems_Evolve_in_a_Direction_That_Increases_Their_Energy_Dispersal -->
# Nonequilibrium Isolated Systems Evolve in a Direction That Increases Their Energy Dispersal

In spontaneous processes for an isolated system, there is a competition between minimizing the energy of the system and increasing the dispersal of energy within the system. If energy is constant, then the system will evolve to maximize energy dispersal. If energy dispersal is not a factor, the system will evolve to minimize its energy. We already have a quantitative basis for the energy of a system and we need to do the same for energy dispersal. Suppose we have a small reversible change $dU$ in the energy of an ideal gas. We know that $U$ only depends on temperature:

$$ dU = C_vdT $$

We also know that any reversible work would be volume work.

$$ δw_{rev} = -PdV $$

This means that we can write:

$$ \begin{align*} δq_{rev} &= dU - δw_{rev} \\[4pt] &= C_vdT + PdV \end{align*} $$

Let us examine if this represents an {term:exact differential}. If $\delta q$ were an exact differential, we could write the total differential:

$$ \delta q_{rev} =\left(\frac{\partial q}{dT}\right)_V dT + \left(\frac{\partial q}{dV}\right)_T dV $$

And the following would be true:

$$ \frac{\partial^2 q_{rev}}{\partial T\partial V}=\frac{\partial^2 q_{rev}}{\partial V\partial T} $$

From our equation above, we know that:

$$ \frac{\partial q_{rev}}{\partial T}=C_V $$

$$ \frac{\partial q_{rev}}{\partial V}=P $$

Therefore, the following should be true:

$$ \frac{\partial C_V}{\partial V}=\frac{\partial P}{\partial T} $$

However,

$$ \dfrac{\partial C_v}{\partial V}=0 $$

Because $C_v$ does not depend on volume (only $T$, just like $U$: it is its derivative). And:

$$ \dfrac{\partial P}{\partial T} = \dfrac{\partial nRT}{\partial T} = \dfrac{nR}{V} $$

Which is not zero!! Clearly, $δq_{rev}$ is {term:not a state function}, but look what happens if we multiply everything with an 'integration factor' $1/T$:

$$ \dfrac{δq_{rev}}{T} = \dfrac{C_v}{T}dT + \dfrac{P}{T}dV $$

$$ \dfrac{\partial C_v/T}{\partial V} = 0 $$

Because $\dfrac{C_v}{T}$ does not depend on volume. However,

$$ \dfrac{\partial (P/T)}{\partial T} = \dfrac{\partial (nR/V)}{\partial T} = 0 $$

*{term:Thus}*, the quantity $dS = \dfrac{δq_{rev}}{T}$ is an exact differential, so $S$ is a state function and it is called {term:entropy}. Entropy is the dispersal of energy, or equivalently, the measure of the number of possible microstates of a system.
