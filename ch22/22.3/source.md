<!-- LibreTexts page 14490: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22:_Helmholtz_and_Gibbs_Energies/22.03:_The_Maxwell_Relations -->
# The Maxwell Relations

Modeling the dependence of the Gibbs and Helmholtz functions behave with varying temperature, pressure, and volume is fundamentally useful. But in order to do that, a little bit more development is necessary. To see the power and utility of these functions, it is useful to combine the First and Second Laws into a single mathematical statement. In order to do that, one notes that since

$$ dS = \dfrac{dq}{T} $$

for a reversible change, it follows that

$$ dq= TdS $$

And since

$$ dw = TdS - pdV $$

for a reversible expansion in which only p-V works is done, it also follows that (since $dU=dq+dw$):

$$ dU = TdS - pdV $$ {eq:1} n=1

This is an extraordinarily powerful result. This differential for $dU$ can be used to simplify the differentials for $H$, $A$, and $G$. But even more useful are the constraints it places on the variables $T$, $S$, $p$, and $V$ due to the mathematics of exact differentials!

## Maxwell Relations

The above result suggests that the natural variables of internal energy are $S$ and $V$ (or the function can be considered as $U(S, V)$). So the total differential ($dU$) in Equation [ref:eq:1] can be expressed:

$$ dU = \left( \dfrac{\partial U}{\partial S} \right)_V dS + \left( \dfrac{\partial U}{\partial V} \right)_S dV $$ {eq:2} n=2

Also, by inspection (comparing the two expressions for $dU$ in Equations [ref:eq:1] and [ref:eq:2]) it is apparent that:

$$ \left( \dfrac{\partial U}{\partial S} \right)_V = T $$ {eq:eq5A} n=3

and

$$ \left( \dfrac{\partial U}{\partial V} \right)_S = -p $$ {eq:eq5B} n=4

But the value does not stop there! Since $dU$ is an exact differential, the Euler relation must hold that

$$ \left[ \dfrac{\partial}{\partial V} \left( \dfrac{\partial U}{\partial S} \right)_V \right]_S= \left[ \dfrac{\partial}{\partial S} \left( \dfrac{\partial U}{\partial V} \right)_S \right]_V $$

By substituting Equations [ref:eq:eq5A] and [ref:eq:eq5B], we see that

$$ \left[ \dfrac{\partial}{\partial V} \left( T \right)_V \right]_S= \left[ \dfrac{\partial}{\partial S} \left( -p \right)_S \right]_V $$

or

$$ \left( \dfrac{\partial T}{\partial V} \right)_S = - \left( \dfrac{\partial p}{\partial S} \right)_V $$

This is an example of a {term:Maxwell Relation}. These are very powerful relationship that allows one to substitute partial derivatives when one is more convenient (perhaps it can be expressed entirely in terms of $\alpha$ and/or $\kappa_T$ for example.)

A similar result can be derived based on the definition of $H$.

$$ H \equiv U +pV $$

Differentiating (and using the chain rule on $d(pV)$) yields

$$ dH = dU +pdV + Vdp $$

Making the substitution using the combined first and second laws ($dU = TdS – pdV$) for a reversible change involving on expansion (p-V) work

$$ dH = TdS – \cancel{pdV} + \cancel{pdV} + Vdp $$

This expression can be simplified by canceling the $pdV$ terms.

$$ dH = TdS + Vdp $$ {eq:eq2A} n=5

And much as in the case of internal energy, this suggests that the natural variables of $H$ are $S$ and $p$. Or

$$ dH = \left( \dfrac{\partial H}{\partial S} \right)_p dS + \left( \dfrac{\partial H}{\partial p} \right)_S dV $$ {eq:eq2B} n=6

Comparing Equations [ref:eq:eq2A] and [ref:eq:eq2B] show that

$$ \left( \dfrac{\partial H}{\partial S} \right)_p= T $$ {eq:eq6A} n=7

and

$$ \left( \dfrac{\partial H}{\partial p} \right)_S = V $$ {eq:eq6B} n=8

It is worth noting at this point that both Equation [ref:eq:eq5A]

$$ \left( \dfrac{\partial U}{\partial S} \right)_V $$

and Equation [ref:eq:eq6A]

$$ \left( \dfrac{\partial H}{\partial S} \right)_p $$

are equal to $T$. So they are equation to each other

$$ \left( \dfrac{\partial U}{\partial S} \right)_V = \left( \dfrac{\partial H}{\partial S} \right)_p $$

Moreover, the Euler Relation must also hold

$$ \left[ \dfrac{\partial}{\partial p} \left( \dfrac{\partial H}{\partial S} \right)_p \right]_S= \left[ \dfrac{\partial}{\partial S} \left( \dfrac{\partial H}{\partial p} \right)_S \right]_p $$

so

$$ \left( \dfrac{\partial T}{\partial p} \right)_S = \left( \dfrac{\partial V}{\partial S} \right)_p $$

This is the Maxwell relation on $H$. Maxwell relations can also be developed based on $A$ and $G$. The results of those derivations are summarized in Table 22.3.1.

> TABLE {tab:1} cols=4
> caption: Table 22.3.1: Maxwell Relations

| Function | Differential | Natural Variables | Maxwell Relation |
| --- | --- | --- | --- |
| $U$ | $dU = TdS - pdV$ | $S, \,V$ | $\left( \dfrac{\partial T}{\partial V} \right)_S = - \left( \dfrac{\partial p}{\partial S} \right)_V$ |
| $H$ | $dH = TdS + Vdp$ | $S, \,p$ | $\left( \dfrac{\partial T}{\partial p} \right)_S = \left( \dfrac{\partial V}{\partial S} \right)_p$ |
| $A$ | $dA = -pdV - SdT$ | $V, \,T$ | $\left( \dfrac{\partial p}{\partial T} \right)_V = \left( \dfrac{\partial S}{\partial V} \right)_T$ |
| $G$ | $dG = Vdp - SdT$ | $p, \,T$ | $\left( \dfrac{\partial V}{\partial T} \right)_p = - \left( \dfrac{\partial S}{\partial p} \right)_T$ |

The Maxwell relations are extraordinarily useful in deriving the dependence of thermodynamic variables on the state variables of $p$, $T$, and $V$.

:::example {ex:22.3.1}

Show that

$$ \left( \dfrac{\partial V}{\partial T} \right)_p = T\dfrac{\alpha}{\kappa_T} - p $$

**Solution**

Start with the combined first and second laws:

$$ dU = TdS - pdV $$

Divide both sides by $dV$ and constraint to constant $T$:

$$ \left.\dfrac{dU}{dV}\right|_{T} = \left.\dfrac{TdS}{dV}\right|_{T} - p \left.\dfrac{dV}{dV} \right|_{T} $$

Noting that

$$ \left.\dfrac{dU}{dV}\right|_{T} =\left( \dfrac{\partial U}{\partial V} \right)_T $$

$$ \left.\dfrac{TdS}{dV}\right|_{T} = \left( \dfrac{\partial S}{\partial V} \right)_T $$

$$ \left.\dfrac{dV}{dV} \right|_{T} = 1 $$

The result is

$$ \left( \dfrac{\partial U}{\partial V} \right)_T = T \left( \dfrac{\partial S}{\partial V} \right)_T -p $$

Now, employ the Maxwell relation on $A$ (Table 6.2.1)

$$ \left( \dfrac{\partial p}{\partial T} \right)_V = \left( \dfrac{\partial S}{\partial V} \right)_T $$

to get

$$ \left( \dfrac{\partial U}{\partial V} \right)_T = T \left( \dfrac{\partial p}{\partial T} \right)_V -p $$

and since

$$ \left( \dfrac{\partial p}{\partial T} \right)_V = \dfrac{\alpha}{\kappa_T} $$

It is apparent that

$$ \left( \dfrac{\partial V}{\partial T} \right)_p = T\dfrac{\alpha}{\kappa_T} - p $$

*Note*: How cool is that? This result was given without proof in Chapter 4, but can now be proven analytically using the Maxwell Relations!
:::
