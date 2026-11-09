<!-- LibreTexts page 14492: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22:_Helmholtz_and_Gibbs_Energies/22.05:_Thermodynamic_Functions_have_Natural_Variables -->
# Thermodynamic Functions have Natural Variables

The fundamental thermodynamic equations follow from five primary thermodynamic definitions and describe internal energy, enthalpy, Helmholtz energy, and Gibbs energy in terms of their natural variables. Here they will be presented in their differential forms.

## Introduction

The fundamental thermodynamic equations describe the thermodynamic quantities U, H, G, and A in terms of their natural variables. The term "natural variable" simply denotes a variable that is one of the convenient variables to describe U, H, G, or A. When considered as a whole, the four fundamental equations demonstrate how four important thermodynamic quantities depend on variables that can be controlled and measured experimentally. Thus, they are essentially equations of state, and using the fundamental equations, experimental data can be used to determine sought-after quantities like $G$ or $H$.

## First Law of Thermodynamics

The first law of thermodynamics is represented below in its differential form

$$ dU = đq+đw $$

where

- $U$ is the internal energy of the system,
- $q$ is heat flow of the system, and
- $w$ is the work of the system.

The "đ" symbol represent {term:inexact differentials} and indicates that both $q$ and $w$ are path functions. Recall that $U$ is a state function. The first law states that internal energy changes occur only as a result of heat flow and work done.

It is assumed that w refers only to PV work, where

$$ w = -\int{pdV} $$

The fundamental thermodynamic equation for internal energy follows directly from the first law and the principle of Clausius:

$$ dU = đq + đw $$

$$ dS = \dfrac{\delta q_{rev}}{T} $$

we have

$$ dU = TdS + \delta w $$

Since only $PV$ work is performed,

$$ dU = TdS - pdV $$ {eq:DefU} n=1

The above equation is the fundamental equation for $U$ with natural variables of entropy $S$ and volume$V$.

### Principle of Clausius

The *Principle of Clausius* states that the entropy change of a system is equal to the ratio of heat flow in a reversible process to the temperature at which the process occurs. Mathematically this is written as

$$ dS = \dfrac{\delta q_{rev}}{T} $$

where

- $S$ is the entropy of the system,
- $q_{rev}$ is the heat flow of a reversible process, and
- $T$ is the temperature in Kelvin.

## Enthalpy

Mathematically, enthalpy is defined as

$$ H = U + pV $$ {eq:DefEnth} n=2

where $H$ is enthalpy of the system, $p$ is pressure, and $V$ is volume. The fundamental thermodynamic equation for enthalpy follows directly from it deffinition (Equation [ref:eq:DefEnth]) and the fundamental equation for internal energy (Equation [ref:eq:DefU]) :

$$ \begin{align*} dH &= dU + d(pV) \\[4pt] &= dU + pdV + VdP \\[4pt]  dU &= TdS - pdV \\[4pt]  dH &= TdS - pdV + pdV + Vdp \\[4pt]  dH &= TdS + Vdp \end{align*} $$

The above equation is the fundamental equation for $H$. The natural variables of enthalpy are $S$ and $p$, entropy and pressure.

## Gibbs Energy

The mathematical description of Gibbs energy is as follows

$$ \begin{align} G &= U + pV - TS \nonumber \\[4pt] &= H - TS  \end{align} $$ {eq:Defgibbs} n=3

where $G$ is the Gibbs energy of the system. The fundamental thermodynamic equation for Gibbs Energy follows directly from its definition [ref:eq:Defgibbs] and the fundamental equation for enthalpy [ref:eq:DefEnth]:

$$ \begin{align*} dG &= dH - d(TS) \\[4pt] & dH - TdS - SdT \end{align*} $$

Since

$$ \begin{align} dH &= TdS + VdP \nonumber \\[4pt]  dG &= TdS + VdP - TdS - SdT \nonumber \\[4pt]  &= VdP - SdT  \end{align} $$ {eq:EqGibbs1} n=4

The above equation is the fundamental equation for $G$. The natural variables of Gibbs energy are $P$ and $T$.

## Helmholtz Energy

Mathematically, Helmholtz energy is defined as

$$ A = U - TS $$ {eq:DefHelm} n=5

where $A$ is the Helmholtz energy of the system, which is often written as the symbol $F$. The fundamental thermodynamic equation for Helmholtz energy follows directly from its definition (Equation [ref:eq:DefHelm]) and the fundamental equation for internal energy (Equation [ref:eq:DefU]):

$$ \begin{align*} dA &= dU - d(TS) \\[4pt] &= dU - TdS - SdT \end{align*} $$

Since

$$ \begin{align} dU &= TdS - pdV \nonumber \\[4pt]  dA &= TdS - pdV -TdS - SdT \nonumber \\[4pt] &= -pdV - SdT  \end{align} $$ {eq:EqHelm1} n=6

Equation [ref:eq:EqHelm1] is the fundamental equation for $A$ with natural variables of $V$ and $T$. For the definitions to hold, it is assumed that {term:only} PV work is done and that {term:only reversible} processes are used. These assumptions are required for the first law and the principle of Clausius to remain valid. Also, these equations do not account include n, the number of moles, as a variable. When $n$ is included, the equations appear different, but the essence of their meaning is captured without including the n-dependence.

## Chemical Potential

The fundamental equations derived above were not dependent on changes in the amounts of species in the system. Below the n-dependent forms are presented<sup>1</sup><sup>,4</sup>.

$$ dU = TdS - PdV + \sum_{i=1}^{N}\mu_idn_i $$

$$ dH = TdS + VdP + \sum_{i=1}^{N}\mu_idn_i $$

$$ dG = -SdT + Vdp + \sum_{i=1}^{N}\mu_idn_i $$

$$ dA = -SdT - PdV + \sum_{i=1}^{N}\mu_idn_i $$

where μ<sub>i</sub> is the chemical potential of species i and dn<sub>i</sub><sub> </sub>is the change in number of moles of substance i.

## Importance/Relevance of Fundamental Equations

The differential fundamental equations describe U, H, G, and A in terms of their natural variables. The natural variables become useful in understanding not only how thermodynamic quantities are related to each other, but also in analyzing relationships between measurable quantities (i.e. P, V, T) in order to learn about the thermodynamics of a system. Below is a table summarizing the natural variables for U, H, G, and A:

> TABLE {tab:1} cols=2

| {term:Thermodynamic Quantity} | {term:Natural Variables} |
| --- | --- |
| U (internal energy) | S, V |
| H (enthalpy) | S, P |
| G (Gibbs energy) | T, P |
| A (Helmholtz energy) | T, V |

## Maxwell Relations

The fundamental thermodynamic equations are the means by which the Maxwell relations are derived<sup>1</sup><sup>,4</sup>. The Maxwell Relations can, in turn, be used to group thermodynamic functions and relations into more general "families"<sup>2,3</sup>.

As we said dA is an {term:exact differential}. Let's write is out in its natural variables (Equation [ref:eq:EqHelm1]) and take a cross derivative. The dA expression in natural variables is

$$ dA = \left( \dfrac{\partial A}{\partial V} \right)_T dV + \left( \dfrac{\partial A}{\partial T} \right) _V dT $$

The partial derivatives of A of first order can already be quite interesting we see e.g. in step 2 that the first partial of A versus V (at T constant) is the negative of the pressure.

$$ \left( \dfrac{\partial A}{\partial V} \right)_T = -P $$

Likewise we find the (isochoric) slope with temperature gives us the negative of the entropy. Thus entropy is one of the *{term:first order derivatives}* of A.

$$ \left( \dfrac{\partial A}{\partial T} \right) _V = -S $$

When we apply a cross derivative

$$ \left( \dfrac{\partial^2 A}{\partial V \partial T} \right) = \left( \dfrac{\partial (-S)}{\partial V} \right) _T + \left( \dfrac{\partial (-P)}{\partial T} \right) _V $$

we get what is known as a *{term:Maxwell relation}*:

$$ \left( \dfrac{\partial P}{\partial T} \right) _V = \left( \dfrac{\partial S}{\partial V} \right) _T $$

:::exercise {exr:?} Exercise

What does Equation three mean for the heat capacity? answer
:::

A similar treatment of dG (Equation [ref:eq:EqGibbs1] gives:

$$ \left( \dfrac{\partial G}{\partial T} \right) _P = -S $$

$$ \left( \dfrac{\partial G}{\partial P} \right) _T = V $$

and another Maxwell relation

$$ - \left( \dfrac{\partial S}{\partial P} \right) _T = \left( \dfrac{\partial V}{\partial T} \right) _P $$

:::exercise {exr:22.5.1}

If the assumptions made in the derivations above were not made, what would effect would that have? Try to think of examples were these assumptions would be violated. Could the definitions, principles, and laws used to derive the fundamental equations still be used? Why or why not?

**Answer**

If it was not assumed that PV-work was the only work done, then the work term in the second law of thermodynamics equation would include other terms (e.g. for electrical work, mechanical work). If reversible processes were not assumed, the Principle of Clausius could not be used. One example of such situations could the movement of charged particles towards a region of like charge (electrical work) or an irreversible process like combustion of hydrocarbons or friction.
:::

:::exercise {exr:22.5.2}

For what kind of system does the number of moles not change? This said, do the fundamental equations without n-dependence apply to a wide range of processes and systems?

**Answer**

In general, a closed system of non-reacting components would fit this description. For example, the number of moles would not change for a closed system in which a gas is sealed (to prevent leaks) in a container and allowed to expand/is contracted.
:::

:::exercise {exr:22.5.3}

Derive the Maxwell Relations.

**Answer**

See the Maxwell Relations section.
:::

:::exercise {exr:22.5.4}

1. Derive the expression

$$ \left (\dfrac{\partial H}{\partial P} \right)_{T,n} = -T \left(\dfrac{\partial V}{\partial T} \right)_{P,n} +V $$

Then apply this equation to an ideal gas. Does the result seem reasonable?

**Answer**

$(\dfrac{\partial H}{\partial P})_{T,n} = 0$ for an ideal gas. Since there are no interactions between ideal gas molecules, changing the pressure will not involve the formation or breaking of any intermolecular interactions or bonds.
:::

:::exercise {exr:22.5.5}

Using the definition of Gibbs energy and the conditions observed at phase equilibria, derive the Clapeyron equation.

**Answer**

See the third outside link.
:::

## References

1. DOI: 10.1063/1.1749582
2. DOI: 10.1063/1.1749549
3. DOI:10.1103/PhysRev.3.273
4. *A Treatise on Physical Chemistry,* 3rd ed.; Taylor, H. S. and Glasstone, S., Eds.; D. Van Nostrand Company: New York, 1942; Vol. 1; p 454-485.
