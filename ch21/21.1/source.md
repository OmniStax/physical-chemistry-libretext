<!-- LibreTexts page 14476: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/21:_Entropy_and_the_Third_Law_of_Thermodynamics/21.01:_Entropy_Increases_with_Increasing_Temperature -->
# Entropy Increases with Increasing Temperature

## Learning Objectives {section:objectives}

- Define entropy and its relation to energy flow.

## Entropy versus temperature

We can put together the first and the second law for a reversible process with no other work than volume ($PV$) work and obtain:

$$ dU= δq_{rev} + δw_{rev} $$

Entropy is the dispersal of energy and is related to heat:

$$ δq_{rev}= TdS $$

Work is related to the change in volume:

$$ δw_{rev}= -PdV $$

Plugging these into our expression for $dU$ for reversible changes:

$$ dU= TdS -PdV $$

We no longer have any path functions in the expression, as $U$, $S$ and $V$ are *{term:all state functions}*. This means this expression must be an exact differential. We can generalize the expression to hold for irreversible processes, but then the expression becomes an inequality:

$$ dU≤ TdS - PdV $$

This equality expresses $U$ as a function of two variables, entropy and volume: $U(S,V)$. $S$ and $V$ are the *{term:natural variables}* of $U$.

### Entropy and heat capacity

At constant volume, $dU$ becomes:

$$ dU=TdS $$

Recall that internal energy is related to constant volume heat capacity, $C_V$:

$$ C_V=\left(\frac{dU}{dT}\right)_V $$

Combining these two expressions, we obtain:

$$ dS=\frac{C_V}{T}dT $$

Integrating:

$$ \Delta S=\int_{T_1}^{T_2}{\frac{C_V(T)}{T}dT} $$

If we know how $C_V$ changes with temperature, we can calculate the change in entropy, $\Delta S$. Since heat capacity is always a positive value, entropy must increase as the temperature increases. There is nothing to stop us from expressing $U$ in *{term:other}* variables, e.g. $T$ and $V$. In fact, we can derive some interesting relationships if we do.

:::example {ex:21.1.1}

1. Write $U$ as a function of $T$ and $V$.
2. Write $U$ as a function of its natural variables.
3. Rearrange (2) to find an expression for $dS$.
4. Substitute (1) into (3) and rearrange. This is the definition of $C_V$.
5. Write out $S$ as a function of $T$ and $V$.
:::

We can also derive an expression for the change in entropy as a function of constant pressure heat capacity, $C_P$. To start, we need to change from internal energy, $U$, to enthalpy, $H$:

$$ \begin{align*} H &= U + PV \\[4pt] dH &= dU +d(PV) \\[4pt] &= dU + PdV + VdP \end{align*} $$

For reversible processes:

$$ \begin{align*} dH &= dU + PdV + VdP \\[4pt] &= TdS -PdV + PdV + VP \\[4pt] &= TdS + VdP\end{align*} $$

The natural variables of the enthalpy are $S$ and $P$ (not: $V$). A similar derivation as above shows that the temperature change of entropy is related to the constant pressure heat capacity:

$$ dH=TdS+VdP $$

At constant pressure:

$$ dH=TdS+VdP $$

Recall that:

$$ C_P=\frac{dH}{dT} $$

Combining, we obtain:

$$ dS=\frac{C_P}{T}dT $$

Integrating:

$$ \Delta S=\int_{T_1}^{T_2}{\frac{C_P(T)}{T}dT} $$

This means that if we know the heat capacities as a function of temperature we can calculate how the entropy changes with temperature. Usually it is easier to obtain data under constant $P$ conditions than for constant $V$, so that the route with $C_p$ is the more common one.
