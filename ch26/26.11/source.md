<!-- LibreTexts page 14532: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26:_Chemical_Equilibrium/26.11:_Thermodynamic_Equilibrium_Constants_Are_Expressed_in_Terms_of_Activities -->
# Thermodynamic Equilibrium Constants Are Expressed in Terms of Activities

The above is a general principle that can be extended to other concentration units and to liquid solutions, ideal or not. In non-ideal systems we could replace

μ<sub>i</sub>= μ<sub>i</sub><sup>~~o~~</sup>+RTln P<sub>i</sub>/P<sub>i</sub><sup>~~o~~</sup>

by:

μ<sub>i</sub>= μ<sub>i</sub><sup>~~o~~</sup>+RTln a<sub>i</sub>

and follow the same procedure as above. In stead of an expression for K involving pressures or concentrations it now read in *{term:activities}*:

K=[a<sub>eq,Y</sub><sup>v<sub>Y</sub></sup>a<sub>eq,Z</sub><sup>v<sub>Z</sub></sup> /a<sub>eq,A</sub><sup>v<sub>A</sub></sup>a<sub>eq,B</sub><sup>v<sub>B</sub></sup>]

For each species we could write the activity as:

a<sub>i</sub> = γ<sub>i</sub>c<sub>i</sub>/c<sub>i</sub><sup>~~o~~</sup>

Here c<sub>i</sub><sup>~~o~~</sup> is unity in whatever concentration measure we wish to choose. Again its function is to cancel the dimension of c<sub>i</sub>.

With this split in three factors we can write K as three factors as well:

K =K<sub>γ</sub>K<sub>c</sub>/K<sub>~~o~~</sub>

K<sub>γ</sub>=[γ <sub>eq,Y</sub><sup>v<sub>Y</sub></sup>γ <sub>eq,Z</sub><sup>v<sub>Z</sub></sup> /γ<sub>eq,A</sub><sup>v<sub>A</sub></sup>γ<sub>eq,B</sub><sup>v<sub>B</sub></sup>] K<sub>c</sub>=[c<sub>eq,Y</sub><sup>v<sub>Y</sub></sup>c<sub>eq,Z</sub><sup>v<sub>Z</sub></sup> /c<sub>eq,A</sub><sup>v<sub>A</sub></sup>c<sub>eq,B</sub><sup>v<sub>B</sub></sup>]

K<sub>c</sub><sub>~~o~~</sub>=[c<sub>~~o~~</sub><sup>v<sub>Y</sub></sup>c<sub>~~o~~</sub><sup>v<sub>Z</sub></sup> /c<sub>~~o~~</sub><sup>v<sub>A</sub></sup>c<sub>~~o~~</sub><sup>v<sub>B</sub></sup>]

The last factor is unity, it cancels the dimensions of K<sub>c</sub> and is often *omitted*. The factor K<sub>γ</sub> is unity *if the solution is ideal*. Obviously, for ionic solutions that is seldom the case.

## activities of pure condensed phases

Sometimes one of the reactants or products is a pure solid (precipitate) or liquid (more solvent e.g.). What activity should we assign in such a case?

We start by choosing a suitable standard state, say the pure compound at 1 bar and temperature of interest, we then have:

μ = μ<sup>~~o~~</sup>

but also:

μ = μ<sup>~~o~~</sup> +RTlna

So a=1 at standard conditions

Any change can be written as

dμ = RTdlna

We can study the pressure dependence by considering:

∂ μ /∂P |<sub>T</sub> = V<sub>partial molar</sub> ( V<sub>bar</sub>)

For a solid or liquid V<sub>bar</sub> is a relatively small and constant value. Thus we can write:

dμ = V<sub>bar</sub>dP

RTdlna = V<sub>bar</sub>dP

dlna = V<sub>bar</sub>dP/RT

Upon integration to a different pressure P' we find

lna' = (P'-1) V<sub>bar</sub>/RT

> TABLE {tab:1} cols=1

| {term:S&McQ}<br> 1083 |
| --- |

Example 26-12 shows that for graphite the activity is only 1.01 at 100 bars, so the activity is *not* very pressure dependent. Mostly if pure condensed compounds are involved in reactions the activity can taken as {term:unity}.

This is also in line with what we said previously about the solvent following Raoult's law. In the limit of the solvent going to pure solvent we have that its P goes to P*. As the activity is defined as P/P* this converges to unity. If a reaction produces more solvent molecules we can usually consider their activity equal to one in very good approximation for dilute solutions, even if they are already non-ideal.

The fact that a=1 for pure condensed phases has an important consequence for reactions (in general: processes) that only involve such phases. If all activities are unity, Q=1 and lnQ=0 which means that Δ<sub>r</sub>G = Δ<sub>r</sub>G<sup>~~o~~</sup> + 0. Thus Δ<sub>r</sub>G can only be zero -i.e. an equilibrium achieved- *{term:if}* Δ<sub>r</sub>G<sup>~~o~~</sup> happens to be zero, which is generally not the case. In fact there can only be an equilbrium at one specific temperature:

Δ<sub>r</sub>G<sup>~~o~~</sup> = 0

Δ<sub>r</sub>H<sup>~~o~~</sup>-TΔ<sub>r</sub>S<sup>~~o~~</sup>

T<sub>equilibrium</sub>= Δ<sub>r</sub>H<sup>~~o~~</sup>/Δ<sub>r</sub>S<sup>~~o~~</sup>

If the process is the transformation from a solid to a liquid this is the well-known *melting point*. At temperature other than 0<sup>o</sup>C only one phase can exist: either ice or water. If the other is present, that is an unstable condition and it will transform *entirely* to the stable form. In other words the process will go to completion, *not* equilbirium. Only *at* 0<sup>o</sup>C can the two coexist in equilibrium. This holds for all melting points but it also holds for e.g. a solid-solid chemical reactions only producing, say, another solid.

Another way of expressing the above is to say that in order to have equilibrium at a *series* of temperatures, one needs at least one species involved for which activity depends on composition, e.g. a dilute solute or a gas.
