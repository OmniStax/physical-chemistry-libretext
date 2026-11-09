<!-- LibreTexts page 13717: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20:_Entropy_and_The_Second_Law_of_Thermodynamics/20.03:_Unlike_heat_Entropy_is_a_State_Function -->
# Unlike heat, Entropy is a State Function

## Circular integrals

Because entropy is a state function, it integrates to zero over any circular path going back to initial conditions, just like $U$ and $H$:

$$ \oint dS =0 $$

$$ \oint dH =0 $$

$$ \oint dU =0 $$

As discussed previously, we can use this fact to revisit the isotherm + isochore + adiabat circular path (Figure 20.3.1).

> FIGURE {fig:20.3.1} src=media/347606-20.3.1.svg width=456px
> alt: Graph showing pressure (P) vs. volume (V) with three curves labeled A, B, and C, depicting different thermodynamic processes.
> caption: A: isothermal expansion, B:adiabat, C:isochore (CC BY-NC; Ümit Kaya via LibreTexts)

{term:Along adiabat B and isochore C:}

- There is no heat transfer along adiabat B:

$$ q_{rev,B} = 0 $$

- There is no work along isochore C:

$$ \delta w=0 $$

- But the temperature changes from $T_2$ back to $T_1$. This requires heat:

$$ q_{rev,C}=C_V\Delta T $$

{term:Along the isotherm A:}

- We have seen that

$$ q_{rev,A} = nRT \ln \dfrac{V_2}{V_1} $$

The quantities q<sub>rev</sub><sub>,A</sub>, q<sub>rev</sub><sub>,B</sub>, and q<sub>rev</sub><sub>,C</sub> are *{term:not}* the same, which once again underlines that heat is a path function. How about entropy?

First, consider the combined paths of B and C:

$$ q_{rev,B+C} = \int _{T_2}^{T_1} C_v dT $$

$$ \int dS_{B+C} = \int \dfrac{dq_{rev,B+C}}{T} = \int _{T_2}^{T_1} \dfrac{C_v}{T} dT $$

We had seen this integral before from Section 19-6, albeit from $T_1$ to $T_2$:

$$ \Delta S_{B+C} = nR\ln \dfrac{V_2}{V_1} $$ {eq:19.21} n=1

(Notice sign in Equation [ref:eq:19.21] is positive)

Along the isotherm A:

$$ q_{rev,A} = nRT \ln\frac{V_2}{V_1} $$

$T$ is a constant so we can just divide $q_{rec,A}$ by $T$ to get $\Delta S_A$:

$$ \Delta S_A = nR\ln \dfrac{V_2}{V_1} $$

We took two different paths to get start and end at the same points. Both paths had the same change in entropy. Clearly entropy is a *state function* while $q_{rev}$ is not.
