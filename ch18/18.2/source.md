<!-- LibreTexts page 13692: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18:_Partition_Functions_and_Ideal_Gases/18.02:_Most_Atoms_are_in_the_Ground_Electronic_State -->
# Most Atoms are in the Ground Electronic State

Writing the electronic energies as $E_1, E_2 ,E_3, ...$ with corresponding degeneracies $g_1, g_2, g_3, \ldots$. The electronic partition function is then given by the following summation:

$$ q_{el}(T) = g_1 e^{-E_1/kT} + g_2 e^{-E_2/kT} + g_3 e^{-E_3/kT} + \ldots $$ {eq:Q1} n=1

Usually, the differences in electronic energies are significantly greater than thermal energy $kT$:

$$ k T \ll E_1 < E_2 < E_3 $$

If we treat the lowest energy electronic state $E_1$ as the reference value of zero of energy, the electronic partition function (Equation [ref:eq:Q1]) can be approximated as:

$$ q_{elec}(T) = g_1 + g_2 e^{-E_2/kT} + g_3 e^{-E_3/kT} + \ldots $$ {eq:3.24} n=2

Typically electronic states are tens of thousands of wave numbers above the ground state. For example, the first excited electronic state of nitric oxide (NO) is ~40,000 cm<sup>-1</sup>. Using this value:

$$ \frac{E_2}{kT} = \frac{40000\text{ cm}^{-1}}{kT} = \frac{10^4\text{ K}}{T} $$

That means, that even at 1,000 K, the value of the second term in {\reference{3.24}} is:

$$ g_2 e^{-10} = g_2 4.5\times 10^{-5} $$

The result is that the higher electronic states are not accessible under ordinary temperatures. There are some cases, however, where the first excited state lies much closer to the ground state, but these are the exception rather than the rule.

:::example {ex:18.2.1}

Find the electronic partition of $\ce{H_2}$ at 300 K.

**Solution**

The lowest electronic energy level of $\ce{H_2}$ is near $- 32\; eV$ and the next level is about $5\; eV$ higher. Taking -32 eV as the zero (or reference value of energy), then

$$ q_{el} = e_0 + e^{-5 eV/ kT} + ... $$

At 300 K, T = 0.02\; eV and

$$ \begin{align*} q_{el} &= 1 + e^{-200} +... \\[4pt] &\approx 1.0 \end{align*} $$

Where all terms other than the first are essentially 0. This implies that $q_{el} = 1$.
:::

The physical meaning of the result from Example 18.2.1 is that only the ground electronic state is generally thermally accessible at room temperature.

## Contributors and Attributions {section:attributions}

- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
