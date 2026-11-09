<!-- LibreTexts page 13704: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19:_The_First_Law_of_Thermodynamics/19.06:_The_Temperature_of_a_Gas_Decreases_in_a_Reversible_Adiabatic_Expansion -->
# The Temperature of a Gas Decreases in a Reversible Adiabatic Expansion

We can make the same argument for the heat along C. If we do the three processes A and B+C only to a tiny extent we can write:

![Image:CH431_Image65.gif](/wikis.lib.ncsu.edu/images/b/b1/CH431_Image65.gif)

And now we can integrate from $V_1$ to $V_2$ over the reversible adiabatic work along B and from $T_1$ to $T_2$ for the reversible isochoric heat along C. To separate the variables we do need to bring the temperature to the right side of the equation.:

![Image:CH431_Image66.gif](/wikis.lib.ncsu.edu/images/c/c9/CH431_Image66.gif)

The latter expression is valid for a reversible adiabatic expansion of a monatomic ideal gas (say Argon) because we used the $C_v$ expression for such a system. We can use the gas law $PV=nRT$ to translate this expression in one that relates pressure and volume see Eq 19.23

We can mathematically show that the temperature of a gas decreases during an adiabatic expansion. Assuming an ideal gas, the internal energy along an adiabatic path is:

$$ \begin{split} d\bar{U}&= \delta q+\delta w \\ &= 0-Pd\bar{V}\\ &= -Pd\bar{V} \end{split} $$

The constant volume heat capacity is defined as:

$$ {\bar{C}}_V=\left(\frac{\partial\bar{U}}{\partial T}\right)_V $$

We can rewrite this for internal energy:

$$ d\bar{U}={\bar{C}}_VdT $$

Combining these two expressions for internal energy, we obtain:

$$ {\bar{C}}_VdT=-Pd\bar{V} $$

Using the ideal gas law for pressure of an ideal gas:

$$ {\bar{C}}_VdT=-\frac{RT}{\bar{V}}d\bar{V} $$

Separating variables:

$$ \frac{\bar{C}_V}{T}dT=-\frac{R}{\bar{V}}d\bar{V} $$

This is an expression for an ideal path along a reversible, adiabatic path that relates temperature to volume. To find our path along a PV surface for an ideal gas, we can start in TV surface and convert to a PV surface. Let's go from ($T_1,V_1$) to ($T_2,V_2$).

$$ \int_{T1}^{T_2}{\frac{\bar{C}_V}{T}dT=-\int_{\bar{V}_1}^{\bar{V}_2}{\frac{R}{\bar{V}}d\bar{V}}} $$

$$ \bar{C}_V\ln{\left(\frac{T_2}{T_1}\right)}=-R\ln{\left(\frac{{\bar{V}}_2}{{\bar{V}}_1}\right)}=R\ln{\left(\frac{{\bar{V}}_1}{{\bar{V}}_2}\right)} $$

$$ \ln{\left(\frac{T_2}{T_1}\right)}=\frac{R}{\bar{C}_V}\ln{\left(\frac{\bar{V}_1}{\bar{V}_2}\right)} $$

$$ \left(\frac{T_2}{T_1}\right)=\left(\frac{\bar{V}_1}{\bar{V}_2}\right)^{\frac{R}{\bar{C}_V}} $$

We know that:

$$ R={\bar{C}}_P-{\bar{C}}_V $$

$$ \frac{R}{\bar{C}_V}=\frac{\bar{C}_P-\bar{C}_V}{\bar{C}_V}=\frac{\bar{C}_P}{\bar{C}_V}-1 $$

$$ \frac{R}{{\bar{C}}_V}=\gamma-1 $$

Therefore:

$$ \left(\frac{T_2}{T_1}\right)=\left(\frac{\bar{V}_1}{\bar{V}_2}\right)^{\gamma-1} $$

This expression shows that volume and temperature are inversely related. That is, as the volume increase from $V_1$ to $V_2$, the temperature must decrease from $T_1$ to $T_2$.
