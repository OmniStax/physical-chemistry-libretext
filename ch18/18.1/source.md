<!-- LibreTexts page 13691: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18:_Partition_Functions_and_Ideal_Gases/18.01:_Translational_Partition_Functions_of_Monotonic_Gases -->
# Translational Partition Functions of Monotonic Gases

Let us consider the translational partition function of a monatomic gas particle confined to a cubic box of length $L$. The particle inside the box has translational energy levels given by:

$$ E_\text{trans}= \dfrac{h^2 \left(n_x^2+ n_y^2+ n_z^2 \right)}{8 mL^2} $$

where $n_x$, $n_y$ and $n_z$ are the quantum numbers in the three directions. The translational partition function is given by:

$$ q_\text{trans} = \sum_i e^{−\epsilon_i/kT} $$

which is the product of translational partition functions in the three dimensions. We can write the translation partition function as the product of the translation partition function for each direction:

$$ \begin{align} q_\text{trans} &= q_{x} q_{y} q_{z}  \\[4pt] &= \sum_{n_x=1}^{\infty} e^{−\epsilon_x/kT} \sum_{n_y=1}^{\infty} e^{−\epsilon_y/kT} \sum_{n_z=1}^{\infty} e^{−\epsilon_z/kT}  \end{align} $$ {eq:times1} n=1 {eq:sum1} n=1

Since the levels are very closely spaced (continuous), we can replace each sum in Equation [ref:eq:sum1] with an integral. For example:

$$ \begin{align} q_{x} &= \sum_{n_x=1}^{\infty} e^{−\epsilon_x/kT} \\[4pt] &\approx \int_{n_x=1}^{\infty} e^{−\epsilon_x/kT}  \end{align} $$ {eq:int1} n=2

and after substituting the energy for the relevant dimension:

$$ \epsilon_x = \dfrac{h^2 n_x^2}{8mL^2} $$

we can extend the lower limit of integration in the approximation of Equation [ref:eq:int1]:

$$ q_x= \int_{1}^{\infty} e^{− \frac{h^2 n_x^2}{8mL^2 kT}} \approx \int_{0}^{\infty} e^{− \frac{h^2 n_x^2}{8mL^2 kT}} $$

We then use the following solved Gaussian integral:

$$ \int_o^{\infty} e^{-an^2} dn = \sqrt{\dfrac{\pi}{4a}} $$

with the following substitution:

$$ a = \dfrac{h^2}{8mL^2 kT} $$

we get:

$$ q_x= \dfrac{1}{2} \sqrt{\dfrac{π}{a}} = \dfrac{1}{2} \sqrt{\dfrac{π 8m kT }{ h^2 }} L $$

or more commonly presented as:

$$ q_x = \dfrac{L}{\Lambda} $$

where $\Lambda$ is the {term:de Broglie wavelength} and is given by

$$ \Lambda = \dfrac{h}{\sqrt{2 π 8m kT}} $$

Multiplying the expressions for $q_x$, $q_y$ and $q_z$ (Equation [ref:eq:times1]) and using $V$ as the volume of the box $L^3$, we arrive at:

$$ q_\text{trans} = \left( \dfrac{\sqrt{2 π 8m kT}} {h} \right)^{3/2} V = \dfrac{ V}{\Lambda^3} $$ {eq:parttransation} n=3

This is usually a very large number (10<sup>20</sup>) for volumes of 1 cm<sup>3</sup><sup> </sup>for small molecular masses. This means that such a large number of translational states are accessible and available for occupation by the molecules of a gas. This result is very similar to the result of the classical kinetic gas theory that said that the observed energy of an ideal gas is:

$$ U=\dfrac{3}{2} nRT $$

We postulate therefore that the observed energy of a macroscopic system should equal the statistical average over the partition function as shown above. In other words: if you know the particles your system is composed of and their energy states you can use statistics to calculate what you should observe on the whole ensemble.

:::example {ex:?} Example

Calculate the translational partition function of an $I_2$ molecule at 300K. Assume V to be 1 liter.

**Solution**

Mass of $I_2$ is $2 \times 127 \times 1.6606 \times 10^{-27} kg$

$$ \begin{align*} 2πmkT &= 2 \times 3.1415 \times (2 \times 127 \times 1.6606 \times 10^{-27}\, kg) \times 1.3807 \times 10^{-23} \, J/K \times 300 K \\[4pt] &= 1.0969 \times 10^{-44}\; J\, kg \end{align*} $$

$$ \begin{align*} Λ &= \dfrac{h}{\sqrt{2 π m kT}} \\[4pt] &= \dfrac{6.6262 \times 10^{-34}\;J\, s}{ \sqrt{1.0969 \times 10^{-44}\, J \, kg}} = 6.326 \times 10^{-12}\;m \end{align*} $$

The via Equation [ref:eq:parttransation]

$$ q_\text{trans}= \dfrac{V}{Λ^3}= \dfrac{1000 \times 10^{-6} m^3}{(6.326 \times 10^{-12} \; m)^3}= 3.95 \times 10^{30} $$

This means that $3.95 \times 10^{30}$ quantum states are thermally accessible to the molecular system
:::

## Contributors and Attributions {section:attributions}

- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
