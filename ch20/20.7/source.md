<!-- LibreTexts page 13721: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20:_Entropy_and_The_Second_Law_of_Thermodynamics/20.07:_Thermodynamics_Provides_Insight_into_the_Conversion_of_Heat_into_Work -->
# Thermodynamics Provides Insight into the Conversion of Heat into Work

Heat and work are both forms of transferring energy, and under the right circumstance, one form may be transformed into the other. However, the second law of thermodynamics puts a limitation on this. To go from work to heat is called dissipation and there is no limitation on this at all. In fact it was through dissipation (by friction) that we discovered that heat and work were both forms of energy. There is, however, a limitation on converting heat to work.

## The Carnot Cycle

Let's consider a circular, reversible path of an ideal gas on a PV diagram in Figure 20.7.1:

> FIGURE {fig:20.7.1} src=media/402075-Carnot_Cycle.png
> alt: Graph illustrating a pressure-volume relationship with labeled processes: adiabatic heating, isothermal expansion, adiabatic cooling, and isothermal compression.
> caption: A circular, reversible path of a Carnot cycle as an ideal gas on a PV diagram. (CC BY 4.0; Jerry LaRue via LibreTexts)

This cycle forms the 4-stage Carnot cycle heat engine. A heat engine converts heat energy into work. The cycle consists of:

1. Isothermal expansion at the hot temperature, $T_h$:
   
   $$ \Delta U_1=w_1+q_h=0 $$
2. Adiabatic cooling from $T_h$ to $T_c$:
   
   $$ \Delta U_2=w_2 $$
3. Isothermal compression at the cold temperature, $T_c$:
   
   $$ \Delta U_3=w_3+q_c=0 $$
4. Adiabatic heating from $T_c$ to $T_h$:
   
   $$ \Delta U_4=w_4 $$

The total four-step process produces work because $w_{hot} > w_{cold}$. The work is the integral under the upper isotherm minus the one under the lower curve, i.e. the surface *area in between*.

:::note [note] Sadi Carnot

Sadi Carnot was a French engineer at the beginning of the 19th century. He considered a cyclic process involving a cylinder filled with gas. This cycle the Carnot cycle contributed greatly to the development of thermodynamics and the improvement of the steam engine. Carnot demonstrated that the cold temperature on the right is as important as the heat source on the left in defining the possible efficiency of a heat engine

> FIGURE {fig:20.7.2} src=media/99717-ezgif-82d8796a155543.gif
> alt: Diagram of three locks with colored lines and multiple rods, illustrating a mechanism or system.
> caption: Animation of a typical vertical triple-expansion engine. (CC SA-BY 2.5; [Emoscopes](https://commons.wikimedia.org/wiki/User:Emoscopes))
:::

## Efficiency

Of course we spend good money on the fuel to start the cycle by heating things up. So how much work do we get for the heat we put in? In other words, we want to know how efficient our heat engine is. The efficiency, $\eta$ of a heat engine is:

$$ \eta=\frac{|w_\text{cycle}|}{q_h}=\frac{q_h+q_c}{q_h}=1+\frac{q_c}{q_h} $$

To get the work of the cycle, we can make use of internal energy as a state function. As the path is circular the circular integrals for $U$ is zero:

$$ \begin{align*} \oint{dU} &= \Delta U_{\text{cycle}} \\[4pt] &=\sum{\Delta U_i} \\[4pt] &=w_1+q_h+w_2+w_3+q_c+w_4 \\[4pt] &=0 \end{align*} $$

Rearranging:

$$ \begin{align*} q_h + q_c &=-w_1-w_2-w_3-w_4 \\[4pt] &=-w_\text{cycle} \end{align*} $$

An ideal engine would take $q_h\rightarrow q_c$ with 100% efficiency. The work of the cycle will be equivalent to the heat transfer. For ideal gases:

1. $w_1=-RT_h\ln{\left(\frac{V_B}{V_A}\right)}=-q_h$
2. $dU=\delta w=\bar{C}_VdT\rightarrow w_2={\bar{C}}_V\left(T_c-T_h\right)$
3. $w_3=-RT_c\ln{\left(\frac{V_D}{V_C}\right)}=-q_c$
4. $w_4={\bar{C}}_V\left(T_h-T_c\right)$

Finding an expression for $w_\text{cycle}$:

$$ \begin{split} w_\text{cycle} &= -RT_h\ln{\left(\frac{V_B}{V_A}\right)}+{\bar{C}}_V\left(T_c-T_h\right)-RT_c\ln{\left(\frac{V_D}{V_C}\right)}+{\bar{C}}_V\left(T_h-T_c\right) \\ &= -RT_h\ln{\left(\frac{V_B}{V_A}\right)}-RT_c\ln{\left(\frac{V_D}{V_C}\right)}= -R(T_h-T_c)\ln{\left(\frac{V_B}{V_A}\right)} \end{split} $$

We have an expression for work, so we can evaluate the efficiency, $\eta$. The efficiency of the Carnot engine is:

$$ \eta=\frac{|w_\text{cycle}|}{q_h}=\frac{R\left(T_h-T_c\right)\ln{\left(\frac{V_B}{V_A}\right)}}{RT_h\ln{\left(\frac{V_B}{V_A}\right)}}=\frac{T_h-T_c}{T_h}=1-\frac{T_c}{T_h} $$

Paths (2) and (4) are adiabats, so we can also use entropy, $S$, to get the same solution:

$$ \oint{dS}= \frac{q_h}{T_h}+\frac{q_c}{T_c}=0 $$

Therefore:

$$ \dfrac{q_c}{q_h} = -\dfrac{T_c}{T_h} $$

And we get that:

$$ η= 1+ \dfrac{q_c}{q_h} = 1-\dfrac{T_c}{T_h} $$ {eq:eff} n=1

As you see we can only get full efficiency if $T_{cold}$ is 0 K, which is never (i.e., we always waste energy). Another implication is that if $T_c = T_h$ then {term:no work} can be obtained, no matter how much energy is available in the from of heat. Or in other words, if one dissipates work into heat isothermally, *none* of it can be retrieved. Equation [ref:eq:eff] is not very forgiving at all. Just imaging that you have a heat source of say 400 K (a superheated pool of water, e.g. a geyser) and you are dumping in the river at room temperature 300 K. The best efficiency you'll ever get is:

$$ η= 1-\dfrac{300}{400}= 24\% $$

Sadly, you'd be dumping three quarters of your energy as heat in the river (and that is best case scenario as there are always more losses, e.g. due to friction). The arrow saying $Q_C$ in Figure 20.7.3 should then be three times as fat as the one that says $w$.

> FIGURE {fig:20.7.3} src=media/99715-CH431_carnot-engine.jpg width=680px
> alt: Schematic diagram showing a working body with two heat sources, labeled "Hot" and "Cold," and energy flow indicators.
> caption: Carnot engine diagram (modern) - where an amount of heat Q<sub>H</sub> flows from a high temperature T<sub>H</sub>furnace through the fluid of the "working body" (working substance) and the remaining heat Q<sub>C</sub> flows into the cold sink T<sub>C</sub>, thus forcing the working substance to do mechanical work W on the surroundings, via cycles of contractions and expansions. (Public Domain; Eric Gaba)

## Heat pumps

So getting our work from heat is hard and always less than 100% successful. The other way around should be easy. After all, we can dissipate work into heat freely even under isothermal conditions!

What happens if we let the heat engine run backwards? Consider reversing all the flows in the above diagram. Obviously we must *put in work* to make the cycle run in reverse. The heat will now flow from cold to hot, say from your cold garden into your nice and warm apartment. The amount of heat you get in your humble abode will be the sum of all the work (say 100 Joules) you dissipate *plus* the heat you pumped out of the garden (say 300 Joules). Thus if you are willing to pay for the energy you dissipate (100 Joules), you may well end up with a total of 400 Joules of heat in your apartment! Obviously if it is heat you after this is a better deal than just dissipating the work in your apartment (by burning some oil). Then you'd only get 100 J for your precious buck.

Dissipating it as electrical heating is even worse because you would

1. first burn (a lot more!) oil to generate heat
2. use this heat to produce electrical work at great expense because a lot of the heats gets dumped at the low temperature side (the river or so)
3. dissipate the work again in your apartment (without using it to pump any heat out of the garden)

Refrigerators are also heat pumps. They heat the kitchen by pumping heat from its innards to the kitchen. If I keep the door open, however, all it does is dissipate precious electrical work, because the pumped heat will flow back into its innards and spoil the milk.

## Stirling Engine

Let's consider another type of heat engine, the Stirling engine. The Stirling engine uses a circular reversible path in an ideal PV diagram in Figure 20.7.4:

> FIGURE {fig:20.7.4} src=media/402128-Stirling_Engine.png
> alt: Graph displaying pressure versus volume with labeled isothermal processes: heating, expansion, cooling, and compression.
> caption: an ideal PV diagram of the Stirling engine. (CC BY 4.0; Jerry LaRue via LibreTexts)

The path consists of four steps:

1. *Isothermal* expansion at the hot temperature $T_h$:
   
   $$ q_1=q_h =-w $$
   
   and we get work {term:out} (i.e., negative work):
   
   $$ w_h =-RT_h \ln \left( \dfrac{V_B}{V_A} \right) $$
2. *Isochoric* heating from $T_c$ to $T_h$ (with constant $C_V$):
   
   $$ q_2= \dfrac{C_V}{ΔT} $$ {eq:q2} n=2
3. *Isothermal* compression at the cold temperature $T_c$:
   
   $$ q_3=q_c =-w $$
   
   and we must put work {term:in} (i.e., positive work):
   
   $$ w_c =-RT_c \ln \left( \dfrac{V_D}{V_C}\right)=RT_c \ln \left( \dfrac{V_B}{V_A} \right) $$
4. *Isochoric* cooling from $T_h$ to $T_c$ (with constant $C_V$):
   
   $$ q_4= -\dfrac{C_V}{ΔT} $$ {eq:q4} n=3

Notice that this gray area *vanishes* if $T_{h}= T_{c}$. Obviously how cold the cold side is of great importance! The amount of work is also equal to the difference in the heat picked up at high temperature $q_h$ and dumped at low temperature $q_{c}$. The isochoric heats cancel. The problem is that $q_{c}$ is only zero if the cold temperature is 0 K. That means that we can never get all the heat we pick up at high temperatures to come out as work.
