<!-- LibreTexts page 14489: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22:_Helmholtz_and_Gibbs_Energies/22.02:_Gibbs_Energy_Determines_the_Direction_of_Spontaneity_at_Constant_Pressure_and_Temperature -->
# Gibbs Energy Determines the Direction of Spontaneity at Constant Pressure and Temperature

The Helmholtz energy $A$ is developed for isochoric changes and as we have often said before it is much easier to deal with isobaric ones where $P=$ constant. We can therefore repeat the above treatment for the enthalpy and introduce another state function the Gibbs energy

$$ \begin{align*} G &≡ H -TS \\[4pt] &= U + PV - TS \\[4pt] &= A + PV \end{align*} $$

If we take both $T$ and $P$ constant we get

$$ \begin{align*} dU-TdS + PdV &\le 0 \\[4pt]  dG &\le 0 \end{align*} $$

$G$ either decreases (spontaneously) or is constant (at equilibrium). Calculating the state function between two end points we get:

$$ ΔG = ΔH - TΔS ≤ 0 (T,P\text{ constant}) $$

This quantity is key to the question of spontaneity under the conditions we usually work under. If for a process $\Delta G$ is positive it does not occur spontaneous and can only be made to occur if it is 'pumped', i.e. coupled with a process that has a negative $\Delta G$. The latter is spontaneous.

:::note [emphasis]

If $\Delta G=0$ then the system is as *{term:equilibrium}*.
:::

## Direction of the spontaneous change

Because the $\Delta S$ term contains the temperature $T$ as coefficient the spontaneous direction of a process, e.g. a chemical reaction can {term:change} with temperature depending on the values of the enthalpy and the entropy change $\Delta H$ and $\Delta S$. This is true for the melting process, e.g. for water below 0<sup>o</sup>C we get water=>ice, above this temperature ice melts to water, but it also goes for chemical reactions.

:::example {ex:?} Example

Consider

$$ \ce{NH3(g) + HCl(g) <=> NH4Cl(s)} $$

$\Delta_r H$ at 298K / 1 bar is -176.2 kJ. The change in entropy is -0.285 kJ/K so that at 298K $\Delta G$ is -91.21 kJ. Clearly this is a reaction that will proceed to the depletion of whatever is the limiting reagent on the left.

However at 618 K this is a different story. Above this temperature $\Delta G$ is positive! (assuming enthalpy and entropy have remained the same, which is almost but not completely true) The reaction will not proceed. Instead the *reverse* reaction would proceed spontaneously. The salt on the right would decompose in the two gases -base and acid- on the left.
:::

## Meaning of the $\Delta G$ term

As we have seen, $\Delta A$ can be related to the maximal amount of work that a system can perform at constant $V$ and $T$. We can hold an analogous argument for $\Delta G$ except that $V$ is not constant so that we have to consider volume work (zero at constant volume) .

$$ dG = d(U+PV-TS) = dU -TdS - SdT - PdV +VdP $$

As $dU = TdS + δw_{rev}$

$$ dG = δw_{rev} -SdT + VdP + PdV $$

As the later term is $-δw_{volume}$

$$ dG = δw_{rev} -SdT + VdP - δw_{volume} $$

At constant $T$ and $P$ the two middle terms drop out

$$ dG = δw_{rev} - δw_{volume} = δw_{other useful work} $$

:::note [note] Note

$\Delta G$ stands for the (maximal) reversible, isobaric isothermal non-$PV$ work that a certain spontaneous change can perform. The volume work may not be zero, but is corrected for.
:::

## Natural variables of G

Because $G ≡ H-TS$, we can write

$$ \begin{align*} dG &= dH -TdS -SdT \\[4pt] &= TdS +VdP -TdS -SdT \\[4pt] &= VdP - SdT \end{align*} $$

The natural variables of $G$ are pressure $P$ and temperature $T$. This is what makes this function the most useful of the four $U$, $H$, $A$, and $G$: these are the natural variables of most of your laboratory experiments!

## Summary

We now have developed the basic set of concepts and functions that together form the framework of thermodynamics. Let's summarize four very basic state functions:

> TABLE {tab:1} cols=2

| state function | natural variables |
| --- | --- |
| $dU = -PdV + TdS$ | $U(V,S)$ |
| $dH = +VdP + TdS$ | $H(P,S)$ |
| $dA = -PdV - SdT$ | $A(V,T)$ |
| $dG = +VdP - SdT$ | $G(P,T)$ |

Note:

1. The replacement of $δq$ by $TdS$ was based on *reversible* heat. This means that in the irreversible case the expressions for dU and dH become inequalities
2. We only include *volume* work in the above expressions. If other work (elastic, electrical e.g.) is involved extra terms need to be added: $dU = TdS - PdV + xdX$ etc.

We are now ready to begin applying thermodynamics to a number of very diverse situations, but we will first develop some useful partial differential machinery.
