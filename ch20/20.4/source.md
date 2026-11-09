<!-- LibreTexts page 13718: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20:_Entropy_and_The_Second_Law_of_Thermodynamics/20.04:_The_Second_Law_of_Thermodynamics -->
# The Second Law of Thermodynamics

## Spontaneity of an isolated system

:::note [emphasis]

An {term:isolated system} is a little more than just adiabatic. In the latter heat cannot get in or out. In an isolated system *nothing* gets in or out, neither heat nor mass nor even any radiation, such as light. The isolated system is like a little universe all to itself.
:::

Let us consider a zero law process. We have two identical blocks of metal, say aluminum. They are each at thermal equilibrium, but at different temperatures. They are brought into contact with each other but isolated from the rest of the universe.

![Diagram showing two sections labeled TA (gray) and TB (white) with a double-headed arrow indicating a heat transfer, q.](media/401986-Isolated_System.png)

- *{term:Zeroth law}*: *Heat will flow from hot to cold*
- *{term:First law}*: *There is no change in total energy*

so:

$$ dU_A= -dU_B $$

There is also no work so:

$$ dU_A = \delta q_A + 0 $$

Because U is a state function this makes $q$ a state function as well, otherwise this equality does not hold. As there is only one term on the right there is only one path (along q). So we could write:

$$ dU_A = dq_A $$

This implies that we do not need to worry about reversible and irreversible paths as there is only one path. Since:

$$ dS = \dfrac{\delta q_{rev}}{T} $$

In this particular case:

$$ TdS = \delta q_{rev} = dU $$

Thus we get:

$$ dS = \dfrac{dU_A}{T_A} + \dfrac{dU_B}{T_B} = \dfrac{dU_A}{T_A} - \dfrac{dU_A}{T_B} = dU_A \left( \dfrac{1}{T_A} - \dfrac{1}{T_B} \right) $$

Clearly as long as the two temperatures are not the same $dS$ is not zero and entropy is not conserved. Instead it is {term:increasing}. Over time, the temperatures will become the same (if the blocks are identical, the final temperature is the average of $T_A$ and $T_B$) and the entropy will reach a maximum.

![A simple black outline of a bat silhouette.](media/401987-Entropy.png)

For our two identical blocks of metal (with same heat capacity, $C_V$), we can, in fact, derive that the entropy change:

$$ \Delta S = C_V \ln \left[\dfrac{T_A^2 + T_B^2}{4T_AT_B}\right]. $$

This is indeed a positive quantity. In general, we can say for an isolated system:

$$ dS \ge 0 $$

Thus if we are dealing with a spontaneous (and isolated) process $dS >0$ and *{term:entropy is being produced}*. This gives us a *{term:criterion for spontaneity}*.

## Entropy exchange of an open system

In an isolated system $dS$ represents the produced entropy $dS_{prod}$ and this is a good criterion for spontaneity. Of course the requirement that the system is isolated is very restrictive and makes the criterion as good as useless... What happens in a system that can exchange heat with the rest of the universe? We do have entropy changes in that case, but part of them may have nothing to do with production, because we also have to consider the heat that is exchanged.

$$ dS = dS_{prod} + dS_{exchange} $$

If the process is reversible (that is completely non-spontaneous) we are dealing with $\delta q_{rev}$ so that $dS_{exchange} = \delta q_{rev} /T$, but that is also what $dS_{tot}$ is equal to (by definition). This leaves no room for entropy production.

So we have:

Isolated: $dS = dS_{prod} + 0$

Reversible $dS = 0 + \delta q_{rev}/T$

Notice that this demonstrates that for non-isolated systems entropy change is *not* a good criterion for spontaneity at all... In the case the heat exchange is *{term:irreversible}* *part* of the entropy is entropy production by the system:

Irreversible: $dS = dS_{prod} + \delta q_{irrev}/T$

$dS > \delta q_{irrev}/T$ in this case.

Generalizing the isolated, irreversible and reversible cases we may say:

$$ dS \ge \dfrac{δq}{T} $$

This is the *{term:Clausius inequality}*.
