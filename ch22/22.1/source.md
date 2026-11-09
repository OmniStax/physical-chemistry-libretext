<!-- LibreTexts page 14488: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22:_Helmholtz_and_Gibbs_Energies/22.01:_Helmholtz_Energy -->
# Helmholtz Energy

We have answered the question: what is entropy, but we still do not have a general criterion for spontaneity, just one that works in an isolated system. We will consider what happens when we hold volume and temperature constant. As discussed previously, the expression for the change in internal energy:

$$ dU = TdS -PdV $$

is only valid for *reversible* changes. Let us consider a spontaneous change. If we assume constant volume, the $-PdV$ work term drops out. From the *Clausius inequality* $dS>\dfrac{δq}{T}$ we get:

$$ \underset{ \text{constant V} }{dU \le TdS } $$

$$ \underset{ \text{constant V} }{ dU-TdS \le 0 } $$

Consider a new state function, {term:Helmholtz energy}, {term:A}:

$$ A ≡ U -TS $$

$$ dA = dU -TdS - SdT $$ {eq:diff1} n=1

If we also set $T$ constant, we see that Equation [ref:eq:diff1] becomes

$$ \underset{ \text{constant V and T} }{ dA=dU-TdS \le 0 } $$

This means that the Helmholtz energy, $A$, is a *{term:decreasing quantity}* for spontaneous processes (regardless of isolation!) when $T$ and $V$ are held constant. $A$ becomes constant once a reversible equilibrium is reached.

:::example {ex:22.1.1} What A stands for

A good example is the case of the mixing of two gases. Let's assume isothermal conditions and keep the total volume constant. For this process, $\Delta U$ is zero (isothermal, ideal) but the

$$ \Delta S_{molar} = -y_1R\ln y_1-y_2 R \ln y_2 $$

This means that

$$ \Delta A_{molar} = RT (y_1\ln y_1+y_2\ln y_2). $$

This is a negative quantity because the mole ratios are smaller than unity. So yes this spontaneous process has a negative $\Delta A$. If we look at $\Delta A = \Delta U - T\Delta S$ we should see that the latter term is the same thing as $-q_{rev}$ So we have :

$$ \Delta A = \Delta U - q_{rev} = w_{rev} $$

This is however the *maximal work that a system is able to produce* and so the Helmholtz energy is a direct measure of how much work one can get out of a system. $A$ is therefore often called the Helmholtz *{term:free}* energy. Interestingly this work {term:cannot} be volume work as volume is constant. so it stands for the maximal *{term:other}* work (e.g. electrical work) that can be obtained under the unlikely condition that volume is constant.
:::

## Natural variables of A

Because $A≡ U-TS$ we can write

$$ \begin{align*} dA &= dU -TdS -SdT \\[4pt] &= TdS -PdV -TdS -SdT \\[4pt] &= -PdV - SdT \end{align*} $$

The natural variables of $A$ are volume $V$ and temperature $T$.
