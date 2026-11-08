<!-- LibreTexts page 13695: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18:_Partition_Functions_and_Ideal_Gases/18.05:_Most_Molecules_are_Rotationally_Excited_at_Ordinary_Temperatures -->
# Most Molecules are Rotationally Excited at Ordinary Temperatures

The rotational quantum number is $J$ and the energy of the rotations is:

$$ E(J)= \tilde{B} J(J+1) $$

Where $\tilde{B}$ is in units of cm<sup>-1</sup> and is equivalent to:

$$ \frac{h}{8\pi^2Ic} $$

Where $c$ is the speed of light in units of cm<sup>-1</sup>. However, with the exception of the ground state (i.e., $J=0$), multiple eigenstates exist for a given value of $J$. This is a form of {term:degeneracy}, ($g$), and the number of levels per energy goes as 1, 3, 5, 7, 9 etc or:

$$ g(J)=2J+1 $$

Therefore, the summation to find the partition function $q_\text{rot}(T)$ contains an extra factor $g=2J+1$. This factor is mathematically very handy, because it is the derivative of:

$$ g(J)=J(J+1) $$

This makes it possible to change variables to $X=J(J+1)$ and the integration becomes very easy. Notice that just like in the translation partition function, we approximate the summation with an integral. However, because we are dealing with far fewer levels, this is less justified in the rotational case. How justified it is depends on the gas and the temperature we consider. Roughly speaking we should be at a temperature $T>> Θ_\text{rot}$.

:::exercise {exr:18.5.1}

Look at table 18.2. When do we need to actually work out the (discrete) summation instead of making a (continuous) integration out of it?

**Answer**

Only for the lightest gases like $\ce{He}$ and $\ce{H2}$ do we need to worry and then only at pretty low cryogenic circumstances. At room temperature, we can take the rotational levels as a continuous set and use an integral. Notice that the vibrational $Θ$ values are much larger! At $T=300\,\text{K}$, usually only a single level is occupied and we are in the discrete limit. On the surface of the sun that would be a different matter of course.
:::

The rotational constant $B$ is directly linked to the moment of inertia:

$$ I = μr^2 $$

Where $μ$ is the reduced mass of the molecule:

$$ \dfrac{1}{μ} = \dfrac{1}{m_1} + \dfrac{1}{m_2} $$

and $r$ is the bond length. Again we can scale the behavior of different systems to one and the same picture by introducing a characteristic temperature:

$$ \Theta_{rot} = \dfrac{hb}{k} = \dfrac{\hbar^2}{2Ik_b} $$

As we did for the translations, we can calculate the moment $\langle \epsilon \rangle$. For vibrations we get a relatively complicated function of temperature. However, for rotations, the moment is simply equal to $NkT$ and this means that the rotational contribution to the molar $C_v$ of a diatomic is simply $R$. As the vibrational and electronic contributions to the heat capacity are typically negligible at room temperature, we get:

- monatomic gas
   
   $$ C_v= C_v^{trans} = \dfrac{3}{2} nR $$
- diatomic
   
   $$ \begin{align} C_v &= C_v^{trans}+C_v^{rot} \\[4pt] &= \dfrac{3}{2} nR + nR \\[4pt] &= \dfrac{5}{2}nR \end{align} $$ n=1

Rotational energies are less than vibrational and electronic energies and, at room temperature, many rotational states will be populated.

> IMAGE {img:1} src=media/411207-Rotational_Populations.png width=550px
> alt: Bar graph with varying heights, displaying data distribution with taller bars on the left and shorter bars on the right.
> caption: The normalized rotational population of HCl at room temperature.
