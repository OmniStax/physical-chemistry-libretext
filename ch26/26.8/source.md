<!-- LibreTexts page 14529: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26:_Chemical_Equilibrium/26.08:_Equilibrium_Constants_in_Terms_of_Partition_Functions -->
# Equilibrium Constants in Terms of Partition Functions

Consider the general gas phase chemical reaction represented by

$$ {\ce {\nu_{A}A + \nu_{B}B <=>\nu_{C}C + \nu_{D}D}} $$ {eq:eq1} n=1

where A, B, C and D are the reactants and products of the reaction, and $\nu _{A}$ is the stoichiometric coefficient of chemical A, $\nu _{B}$ is the stoichiometric coefficient of chemical B, and so on. Each of the gases involved in the reaction will eventually reach an equilibrium concentration when the forward and reverse reaction rates become equal. The distribution of reactants to products at the equilibrium point is represented by the equilibrium constant ($K_{c}$):

$$ K_{c}=\dfrac {[C]^{\nu _{C}}[D]^{\nu _{D}}}{[A]^{\nu _{A}}[B]^{\nu _{B}}} $$

If the system is not at equilibrium, a shift in the number of reactants and products will occur to lower the overall energy of the system. The difference in the energy of the system at this non-equilibrated point and the energy of the system at equilibrium for any particular species is termed chemical potential. When both temperature and volume are constant for both points aforementioned, the chemical potential $\mu$ of species $i$ is expressed by the equation

$$ \mu _{i}={\left({\dfrac {\partial A}{\partial N_{i}}}\right)}_{T,V,N_{j\neq 1}} $$ {eq:chempot} n=2

where $A$ is the Helmholtz energy, and $N_{i}$ is the number of molecules of species i. The Helmholtz energy can be determined as a function of the total partition function, $Q$:

$$ A=-k_{B}T\ln Q $$

where $k_{B}$ is the Boltzmann constant and $T$ is the temperature of the system. The total partition function is given by

$$ Q={\dfrac {q_{i}(V,T)^{Ni}}{N_{i}!}} $$

where $q_{i}$ is the molecular partition function of chemical species $i$. Substituting the molecular partition function into the equation for Helmholtz energy yields:

$$ A=-k_{B}T\ln \left({\dfrac {q_{i}(V,T)^{N_i}}{N_{i}!}}\right) $$

and then further substituting this equation into the definition of chemical potential (Equation [ref:eq:chempot]) yields:

$$ \mu _{i}={\left({\dfrac {\partial -k_{B}T\ln \left({\dfrac {q_{i}(V,T)^{Ni}}{N_{i}!}}\right)}{\partial N_{i}}}\right)}_{T,V,N_{j\neq 1}} $$

rearranging this equation the following derivative can be set-up:

$$ \mu _{i}=-k_{B}T{\left[{\left({\dfrac {\partial {N_i}\ln \left({q_{i}(V,T)}\right)}{\partial N_{i}}}\right)}-{\left({\dfrac {\partial \ln \left({N_{i}!}\right)}{\partial N_{i}}}\right)}\right]}_{T,V,N_{j\neq 1}} $$

From this point [Sterling's approximation](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Thermodynamics_and_Chemical_Equilibrium_(Ellgen)/19%3A_The_Distribution_of_Outcomes_for_Multiple_Trials/19.04%3A_Stirling's_Approximation)

$$ \ln {N!}=N\ln N-N $$

can be substituted into the derivative to yield:

$$ \mu _{i}=-k_{B}T{\left[{\left({\dfrac {\partial {N_i}\ln \left({q_{i}(V,T)}\right)}{\partial N_{i}}}\right)}-{\left({\dfrac {\partial \left({N_{i}\ln N_{i}-N_{i}}\right)}{\partial N_{i}}}\right)}\right]}_{T,V,N_{j\neq 1}} $$

From here the derivative can be rearranged and solved:

$$ \begin{align} \mu_{i} &=-k_{B} T\left[\ln \left(q_{i}(V, T)\right) \dfrac{\partial N_{i}}{\partial N_{i}}+N_{i} \dfrac{\partial \ln \left(q_{i}(V, T)\right)}{\partial N_{i}}-\ln \left(N_{i}\right) \dfrac{\partial N_{i}}{\partial N_{i}}-N_{i} \dfrac{\partial \ln \left(N_{i}\right)}{\partial N_{i}}+\dfrac{\partial N_{i}}{\partial N_{i}}\right]_{T, V, N_{j \neq 1}} \nonumber \\[4pt] &=-k_{B}T{\left({\ln {\left({q_{i}(V,T)}\right)}}+{0}-{\ln \left({N_{i}}\right)}-{N_{i}{\dfrac {1}{N_{i}}}}+{1}\right)} \nonumber\\[4pt] &=-k_{B}T{\left({\ln {\left({q_{i}(V,T)}\right)}}-{\ln \left({N_{i}}\right)}\right)} \nonumber \\[4pt] &=-k_{B}T\ln \left({\dfrac {q_{i}(V,T)}{N_{i}}}\right) \end{align} $$ {eq:chempot2} n=3

A variable, $\lambda$, is then defined such that $dN_{j}=\nu _{j}d\lambda$, where $j$ = A, B, C or D and $\nu _{j}$ is taken to be positive for products and negative for reactants. A change in $\lambda$ therefore corresponds to a change in the concentrations of the reactants and products. Thus, at equilibrium,

$$ \left({\dfrac {\partial A}{\partial \lambda }}\right)_{T,V}=0 $$

[![undefined](https://upload.wikimedia.org/wikipedia/commons/4/48/Helmholtz_Energy_with_respect_to_Equilibrium_Shifts.jpg)](https://commons.wikimedia.org/wiki/File:Helmholtz_Energy_with_respect_to_Equilibrium_Shifts.jpg)

Helmholtz Energy with respect to Equilibrium Shifts

From Classical thermodynamics, the total differential of $A$ is:

$$ dA=-SdT-pdV+\sum _{j}\mu _{j}dN_{j} $$

For a reaction at a fixed volume and temperature (such as in the canonical ensemble), $dT$ and $dV$ equal 0. Therefore,

$$ \begin{align*} dA &=\sum _{j}\mu _{j}dN_{j} \\[4pt] &=\sum _{j}\mu _{j}\nu _{j}d\lambda \\[4pt] &=d\lambda \sum _{j}\mu _{j}\nu _{j}\end{align*} $$

with

$$ \sum _{j}\mu _{j}\nu _{j}=0 $$

Substituting the expanded form of chemical potential (Equation [ref:eq:chempot2]):

$$ \begin{align*} -k_{B}T\sum _{j}\ln \left({\dfrac {q_{i}}{N_{i}}}\right)\nu _{j} &=0 \\[4pt] \sum _{j}\ln \left({\dfrac {q_{i}}{N_{i}}}\right)\nu _{j} &=0 \\[4pt] \sum _{j}\nu _{j}[\ln(q_{j})-\ln(N_{j})]&=0\end{align*} $$

For the reaction in Equation [ref:eq:eq1]:

$$ [\nu _{C}\ln(q_{C})-\nu _{C}\ln(N_{C})]+[\nu _{D}\ln(q_{D})-\nu _{D}\ln(N_{D})]-[\nu _{A}\ln(q_{A})-\nu _{A}\ln(N_{A})]-[\nu _{B}\ln(q_{B})-\nu _{B}\ln(N_{B})]=0 $$

This equation simplifies to

$$ {\dfrac {(q_{C})^{\nu _{C}}(q_{D})^{\nu _{D}}}{(q_{A})^{\nu _{A}}(q_{B})^{\nu _{B}}}}={\dfrac {(N_{C})^{\nu _{C}}(N_{D})^{\nu _{D}}}{(N_{A})^{\nu _{A}}(N_{B})^{\nu _{B}}}} $$

By dividing all terms by volume, and noting the relationship $\dfrac {N_{A}}{V}=\dfrac {\#molecules}{volume}=\rho _{A}=[A]$ where $\rho$ is referred to a number density, the following equation is obtained:

$$ K_{c}={\dfrac {\rho _{C}^{\nu _{C}}\rho _{D}^{\nu _{D}}}{\rho _{A}^{\nu _{A}}\rho _{B}^{\nu _{B}}}}={\dfrac {(q_{C}/V)^{\nu _{C}}(q_{D}/V)^{\nu _{D}}}{(q_{A}/V)^{\nu _{A}}(q_{B}/V)^{\nu _{B}}}} $$ {eq:Kc} n=4

Hence, knowledge of the molecular partition function for all species in the reaction will ensure the calculation of the equilibrium constant.

:::example {ex:26.8.1} Reacting Diatomic Molecules

Calculate the equilibrium constant ($K_c$) for the reaction of $\ce {H2 (g)}$ and $\ce {Cl2 (g)}$ at 650 K.

$$ \ce {H2 (g) + Cl2 (g) <=> 2HCl (g)} $$

**Solution**

We will use Equation [ref:eq:Kc] that uses Molecular Partition Functions to evaluate $K_c$.

$$ K_{c}(T)=\dfrac{\left(\dfrac{q_{\mathrm{HCl}}}{V}\right)^{2}}{\left(\dfrac{q_{\mathrm{H}_{2}}}{V}\right)\left(\dfrac{q_{\mathrm{Cl}_{2}}}{V}\right)} $$ {eq:eqA} n=5

This equation is expanded into the rotational, vibrational, translational and electronic molecular partition functions of each species.

$$ K_c(T) = \dfrac{\left(\dfrac{q_{\text {trans } \mathrm{HCl}} q_{rot\mathrm{HCl}} q_{vib \mathrm{HCl}} q_{elec \mathrm{HCl}}}{V}\right)^{2}}{\left(\dfrac{q_{\text {trans} \mathrm{H}_{2}} q_{\text {rot } \mathrm{H}_{2}} q_{vib \mathrm{H}_{2}} q_{elec \mathrm{H}_{2}}}{V}\right) \left(\dfrac{q_{\text {trans} \mathrm{Cl}_{2}} q_{\text {rot } \mathrm{Cl}_{2}} q_{vib \mathrm{Cl}_{2}} q_{elec \mathrm{Cl}_{2}}}{V}\right)} $$

A simple problem solving strategy for finding equilibrium constants via statistical mechanics is to separate the equation into the molecular partition functions of each of the reactant and product species, solve for each one, and recombine them to arrive at a final answer (e.g., for $\ce{HCl}$.

$$ \dfrac{q_{\mathrm{HCl}}}{V} =\underbrace{\left(\dfrac{2 \pi m k_{B} T}{h^{2}}\right)^{3 / 2}}_{\text{translation}} \times \underbrace{\dfrac{2 k_{B} T \mu r_{e}^{2}}{\sigma \hbar^{2}}}_{\text{rotation}} \times \underbrace{\dfrac{1}{1-\exp \left(\dfrac{-h \nu}{k_{B} T}\right)}}_{\text{vibration}} \times \underbrace{g_{1} \exp \left(\dfrac{D_{0}}{k_{B} T}\right)}_{\text{electronic}} $$

To simplify the calculations of molecular partition functions, the characteristic temperature of rotation ($\Theta _{r}$) and vibration ($\Theta _{\nu }$) are used.

$$ \frac{q_{\mathrm{HCl}}}{V} =\left(\frac{2 \pi m k_{B} T}{h^{2}}\right)^{3 / 2} \times \frac{T}{\sigma \Theta_{r}} \times \frac{1}{1-\exp \left(\frac{-\Theta_{\nu}}{T}\right)} \times g_{1} \exp \left(\dfrac{D_{0}}{R T} \right) $$ {eq:eqB} n=6

These values are constants that incorporate the physical constants found in the rotational and vibrational partition functions of the molecules. Tabulated values of $\Theta _{r}$ and $\Theta _{\nu }$ for select molecules can be found [here](https://en.wikibooks.org/wiki/Statistical_Thermodynamics_and_Rate_Theories/Data).

> TABLE {tab:1} cols=4

| Species | $\Theta_{\nu}$ (K) | $\Theta_{r}$ (K) | $D_{0}$ (kJ mol<sup>-1</sup>) |
| --- | --- | --- | --- |
| $\ce {Cl2 (g)}$ | 6125 | 0.351 | 239.0 |
| $\ce {H2 (g)}$ | 808 | 87.6 | 431.9 |
| $\ce {HCl (g)}$ | 4303 | 15.2 | 427.7 |

We need to evaluate Equation [ref:eq:eqB] for each species then then evaluate Equation [ref:eq:eqA] directly.

For $\ce{HCl}$:

$$ \frac{q_{\mathrm{HCl}}}{V}=\left(\frac{2 \pi\left(2.1957 \times 10^{-24} \mathrm{~kg}\right)\left(1.38065 \times 10^{-23} \mathrm{J K}^{-1}\right)(650 K)}{\left(6.62607 \times 10^{-34} \mathrm{Js}\right)^{2}}\right)^{3 / 2} \times \frac{650 \mathrm{~K}}{(1)(15.2 \mathrm{~K})} \times \frac{1}{1-\exp \left(\dfrac{-4303 \mathrm{~K}}{650 \mathrm{~K}}\right)} \times(1) \exp \left(\dfrac{427,700 \mathrm{ J mol}^{-1}}{\left(8.3145\, \mathrm{J\,K\,mol}{}^{-1}\right)(650 \mathrm{~K})}\right) $$

$$ \frac{q_{\mathrm{HCl}}}{V}=\left(1.4975 \times 10^{35} \mathrm{~m}^{-3}\right)(42.76)(1.0013)\left(2.3419 \times 10^{34}\right) $$

For $\ce{H2}$:

$$ \frac{q_{\mathrm{H}_{2}}}{V} =\left(\frac{2 \pi\left(1.2140 \times 10^{-25} \mathrm{~kg}\right)\left(1.38065 \times 10^{-23} \mathrm{JK}^{-1}\right)(650 \mathrm{~K})}{\left(6.62607 \times 10^{-34} \mathrm{Js}\right)^{2}}\right)^{3 / 2} \times \dfrac{650 \mathrm{~K}}{(2)(87.6 \mathrm{~K})} \times \frac{1}{1-\exp \left(\dfrac{-808 \mathrm{~K}}{650 \mathrm{~K}}\right)} \times(1) \exp \left(\dfrac{431,900 \mathrm{J mol}^{-1}}{\left(8.3145 \mathrm{~J ~K mol}^{-1}\right)(650 \mathrm{~K})}\right) $$

$$ \frac{q_{\mathrm{H}_{2}}}{V}=\left(1.9468 \times 10^{33} \mathrm{~m}^{-3}\right)(3.71)(1.41)\left(5.0942 \times 10^{34}\right) $$

For $\ce{Cl2}$:

$$ \dfrac{q_{\mathrm{Cl}_{2}}}{V} =\left(\frac{2 \pi\left(4.2700 \times 10^{-24} \mathrm{~kg}\right)\left(1.38065 \times 10^{-23} \mathrm{JK}^{-1}\right)(650 K)}{\left(6.62607 \times 10^{-34} \mathrm{Js}^{2}\right.}\right)^{3 / 2} \times \frac{650 \mathrm{~K}}{(2)(0.351 \mathrm{~K})} \times \frac{1}{1-\exp \left(\dfrac{-6125 \mathrm{~K}}{650 \mathrm{~K}}\right)} \times(1) \exp \left(\dfrac{239,000 \mathrm{Jmol}^{-1}}{\left(8.3145 \mathrm{~J~K~mol}^{-1}\right)(650 \mathrm{~K})}\right) $$

$$ \frac{q_{\mathrm{Cl}_{2}}}{V}=\left(5.4839 \times 10^{35} \mathrm{~m}^{-3}\right)(925.9)(1.00)\left(1.606 \times 10^{19}\right) $$

Combining the terms from each species, the following expression is obtained:

$$ \begin{align*} K_{c} &=\frac{\left(1.9468 \times 10^{33} \mathrm{~m}^{-3}\right)^{2}}{\left(1.9468 \times 10^{33} \mathrm{~m}^{-3}\right)\left(5.4839 \times 10^{35} \mathrm{~m}^{-3}\right)} \times \frac{(42.76)^{2}}{(3.71)(925.9)} \times \frac{(1.0013)^{2}}{(1.41)(1.00)} \times \frac{\left(2.3419 \times 10^{34}\right)^{2}}{\left(1.606 \times 10^{19}\right)\left(5.0942 \times 10^{34}\right)} \\[4pt] &=(0.003550)(0.1333)(0.711)\left(6.7037 \times 10^{14}\right) \\[4pt] & =\left(2.26 \times 10^{11}\right) \end{align*} $$

At 650 K, the reaction between $\ce {H2 (g)}$ and $\ce{Cl2(g)}$ proceeds spontaneously towards the products. From a statistical mechanics point of view, the product $\ce{HCl(g)}$ molecule has more states accessible to it than the reactant species. The spontaneity of this reaction is largely due to the electronic partition function: two very strong H—Cl bonds are formed at the expense of a very strong H—H bond and a relatively weak Cl—Cl bond.
:::
