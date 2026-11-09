<!-- LibreTexts page 14525: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26:_Chemical_Equilibrium/26.04:_Gibbs_Energy_of_a_Reaction_vs._Extent_of_Reaction_is_a_Minimum_at_Equilibrium -->
# Gibbs Energy of a Reaction vs. Extent of Reaction is a Minimum at Equilibrium

As discussed in [Section 26.4](page:14522), we defined the extent of the reaction ($\xi$) as a quantitative measure of how far along the reaction has evolved. For simple reactions like $\ce{A <=> B}$, the extent of reaction is easy to define and is simply the number of moles of $\ce{A}$ that has been converted to $\ce{B}$. Since $d\xi$ has the same value as $dn$, we can write that

$$ \begin{align*} dG &= \mu_A dn_A + \mu_B dn_B \\[4pt] &= -\mu_A d\xi + \mu_B d\xi. \end{align*} $$

The minus sign comes from the fact that when the reaction goes in the left to right direction, the amount of $\ce{A}$ is decreasing, while the amount of $\ce{B}$ is increasing. Looking at these equations, it is reasonable to suggest that:

$$ \left(\frac{\partial G}{\partial \xi}\right)_{P T}=\mu_{B}-\mu_{A} $$

This is the slope of the free energy with respect to the extent of the reaction. This relationship will have a region where the sign is negative, one point where the value is zero and a region where the value is positive (Figure 26.4.1). If we look at a plot of $G$ as a function of $\xi$, we can see that the point where is the minimum of the curve:

$$ \left(\frac{\partial G}{\partial \xi}\right)_{PT}=0 $$

This is the point where $\mu_A$ and $\mu_B$ are the same. On one side of the minimum, the slope is negative and on the other side, the slope is positive. In both cases, the reaction is spontaneous (i.e, $dG < 0$) as long as the reaction is evolving towards the minimum, which will be called the {term:equilibrium position}. Hence, all reactions spontaneously move towards equilibrium; the immediate question is what value of $\xi$ corresponds to the equilibrium position of a reaction?

> FIGURE {fig:26.4.1} src=media/404307-reactive_gibbs_energy.svg width=710px
> alt: Graph depicting Gibbs energy (G) versus extent of reaction (ξ), showing regions of ΔG < 0, ΔG = 0, and ΔG > 0.
> caption: Reactive Gibbs Energy and Equilibria. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)

:::note [note] Terminology

- A reaction for which $Δ_rG < 0$ is called {term:exergonic}.
- A reaction for which $Δ_r G > 0$ is called {term:endergonic}.
- $Δ_r G < 0$, the forward reaction is spontaneous.
- $Δ_r G > 0$, the reverse reaction is spontaneous.
- $Δ_r G = 0$, the reaction is at equilibrium.
:::

## Ideal Gas Equilibrium

To understand how we can find the minimum and what the Gibbs free energy of a reaction depends on, let's first start with a reaction that converts one ideal gas into another.

$$ \ce{A<=>B} $$

Let's assume the reaction enthalpy is zero and hence the only thing that determines what the ratio of product to reactant should be is the entropy term (the mixing term), which is the most favorable when the mixture is half and half.

$$ \Delta G_{\text {mix }}=n R T\left(\chi_{A} \ln \chi_{A}+ \chi_{B} \ln \chi_{B}\right) $$ {eq:Smixing} n=1

Remember that the Gibbs free energy of mixing is not a molar quantity and depends on $n$ (unlike the reaction Gibbs free energy). Also, the Gibbs free energy of mixing is defined relative to pure $\ce{A}$ and $\ce{B}$. The free energy of mixing in Equation [ref:eq:Smixing] is at a minimum when the amounts of $\ce{A}$ equal $\ce{B}$.

Thus, if we have a reaction $\ce{A<=>B}$ and there is no enthalpy term (and no change in the inherent entropy of A vs. B), we would expect the system to have the minimum Gibbs free energy when the mole fraction of $\ce{A}$ and $\ce{B}$ are each 0.5.

:::note [note] Think about it

If $\ce{A}$ can form $\ce{B}$ and $\ce{B}$ can form $\ce{A}$ and there is no other forces involved (no heat/enthalpy) that would favor one product over the other, probability would just state that eventually you will have statistically the same amount of both A and B present -- this is the lowest free energy state. (This, of course, will not be true if the enthalpy for the reaction is not zero or if $\ce{A}$ and $\ce{B}$ have different inherent entropies). Usually there are additional terms for the reaction.
:::

Lets work through this for an ideal gas reaction:

$$ \begin{align*} \Delta_{r} G &=\mu_{B}-\mu_{A} \\[4pt] &=\mu_{B}^{o}+R T \ln \dfrac{P_{B}}{P^{\theta}}-\mu_{A}^{o}-R T \ln \dfrac{P_{A}}{P^{\theta}} \\[4pt] &=\mu_{B}^{o}-\mu_{A}^{o}+R T \ln \dfrac{P_{B}}{P_{A}} \end{align*} $$

What we normally do at this point is to give the first two terms a special name. Since it is the difference between the chemical potentials at standard conditions, we refer to it as the Gibbs free energy of reaction at standard conditions or the {term:standard Gibbs free energy of reaction}.

$$ \begin{align} \Delta_{r} G^{o} &= \mu_B^{o}-\mu_A^{o} \nonumber \\[4pt] \Delta_r G &= \Delta_{r} G^{o} + R T \ln \dfrac{P_{B}}{P_{A}}  \end{align} $$ {eq:eq30} n=2

There are two parts to Equation [ref:eq:eq30]. The first term ($\Delta_{r} G^{o}$) is the Gibbs free energy for converting one mole of $\ce{A}$ to $\ce{B}$ under standard conditions (1 bar of both $\ce{A}$ and $\ce{B}$). The second term is the mixing term that is minimized when the amounts of A and B are equal to one another (Figure 26.4.2). The first term you look up in a reference book and is specific for a specific reaction. The second term is calculated knowing the partial pressures of $\ce{A}$ and $\ce{B}$ in the gas.

> FIGURE {fig:26.4.2} src=media/404308-GE-ne.svg
> alt: Gibbs energy vs. extent of reaction graph showing curves for 'without mixing' and 'including mixing' with annotations.
> caption: Molecular interpretation of the minimum in the reaction Gibbs energy Gibbs energy of the system decreases as the reaction progress Gibbs energy of a system consisting of different portions of reactants and products. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)

Now the minimum absolute Gibbs free energy will occur at the bottom of the curve where the slope is zero. Thus, the lowest free energy will occur when the reaction free energy (i.e., the slope of that curve in Figure 26.4.1) is equal to zero. The chemical potentials of $\ce{A}$ and $\ce{B}$ are equal.

$$ \mu_A = \mu_B $$

At this point, the reaction will neither go forwards or backwards and we call this equilibrium. Hence, at equilibrium:

$$ \begin{align*} \Delta_{r} G &=\Delta_{r} G^{o}+R T \ln \dfrac{P_{B}}{P_{A}} \\[4pt] &=0 \end{align*} $$

and the specific ratio of $P_A$ and $P_B$ necessary to ensure $\Delta_{r} G=0$ is characteristic of the reaction and is called the {term:equilibrium constant} for that reaction.

$$ K_{e q}=\dfrac{P_{B}}{P_{A}} $$

We can now relate thermodynamic quantities to concentrations of molecules at equilibrium. We can also see that at equilibrium:

$$ \begin{aligned} &0=\Delta_{r}G^{o}+R T \ln K_{e q} \\[4pt] &\Delta_{r} G^{o}=-R T \ln K_{e q} \\[4pt] &K_{eq}=e^{-\dfrac{\Delta_{r} G^{o}}{R T}} \end{aligned} $$
