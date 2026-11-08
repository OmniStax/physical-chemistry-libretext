<!-- LibreTexts page 13696: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18:_Partition_Functions_and_Ideal_Gases/18.06:_Rotational_Partition_Functions_of_Diatomic_Gases_Contain_a_Symmetry_Number -->
# Rotational Partition Functions of Diatomic Gases Contain a Symmetry Number

The rotational energy levels of a {term:diatomic molecule} are given by:

$$ E_\text{rot}(J) = \tilde{B} J (J + 1) $$ {eq:Eq0} n=1

where:

$$ \tilde{B} = \dfrac{h}{8 π^2 I c} $$

Here, $\tilde{B}$ is the rotational constant expressed in cm<sup>-1</sup>. The rotational energy levels are given by:

$$ E_j = \dfrac{J(J+1) h^2}{8 \pi I} $$

where $I$ is the moment of inertia of the molecule given by $μr^2$ for a diatomic, and $μ$ is the reduced mass, and $r$ the bond length (assuming rigid rotor approximation). The energies can be also expressed in terms of the rotational temperature, $Θ_\text{rot}$, defined as:

$$ Θ_\text{rot} = \dfrac{r^2}{8 \pi^2 I k} $$ {eq:3.12} n=2

The interpretation of $θ_\text{rot}$ is as an estimate of the temperature at which thermal energy ($\approx kT$) is comparable to the spacing between rotational energy levels. At about this temperature the population of excited rotational levels becomes important. See Table 1.

> TABLE {tab:1} cols=10
> caption: Table 1: Select Rotational Temperatures. In each case the value refers to the most common isotopic species.

| Molecule | $H_2$ | $N_2$ | $O_2$ | $F_2$ | $HF$ | $HCl$ | $CO_2$ | $HBr$ | $CO$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\Theta_\text{rot}$ | 87.6 | 2.88 | 2.08 | 1.27 | 30.2 | 15.2 | 0.561 | 12.2 | 2.78 |

In the summation for the expression for rotational partition function ($q_\text{rot}$), Equation [ref:eq:3.13], we can do an explicit summation:

$$ q_\text{rot} = \sum_{j=0} (2J+1) e^{-E_J/ k T} $$ {eq:3.13} n=3

if only a finite number of terms contribute. The factor $(2J+1)$ for each term in the expansion accounts for the degeneracy of a rotational state $J$. For each allowed energy $E_J$ from Equation [ref:eq:Eq0] there are $(2 J + 1)$ eigenstates. The Boltzmann factor must be multiplied by $(2J+ 1)$ to properly account for the degeneracy these states:

$$ (2J+ 1)e^{ -E_J / k T} $$

If the rotational energy levels are lying very close to one another, we can integrate similar to what we did for $q_{trans}$ previously to get:

$$ q_\text{rot} = \int _0 ^{\infty} (2J+1) R^{-\tilde{B} J (J+1) / k T} dJ $$

This integration can easily be done by substituting $x = J ( J+1)$ and $dx = (2J + 1) dJ$:

$$ q_\text{rot} = \dfrac{kT}{\tilde{B}} $$ {eq:3.15} n=4

For a homonuclear diatomic molecule, rotating the molecule by 180° brings the molecule into a configuration which is *indistinguishable* from the original configuration. This leads to an overcounting of the accessible states. To correct for this, we divide the partition function by $σ$, which is called the {term:symmetry number} and is equal to the distinct number of ways by which a molecule can be brought into identical configurations by rotations. The rotational partition function becomes:

$$ q_\text{rot}= \dfrac{kT}{\tilde{B} σ} $$ {eq:3.16} n=5

or commonly expressed in terms of $Θ_\text{rot}$:

$$ q_\text{rot}= \dfrac{T}{ Θ_\text{rot} σ} $$ {eq:3.17} n=6

:::example {ex:18.6.1}

What is the rotational partition function of $H_2$ at 300 K?

**Solution**

The value of $\tilde{B}$ for $H_2$ is 60.864 cm<sup>-1</sup>. The value of $k T$ in cm<sup>-1</sup> can be obtained by dividing it by $hc$, i.e., which is $kT/hc = 209.7\; cm^{-1}$ at 300 K. $σ = 2$ for a homonuclear molecule. Therefore from Equation [ref:eq:3.16],

$$ \begin{align*} q_\text{rot} &= \dfrac{kT}{\tilde{B} σ} \\[4pt] &= \dfrac{209.7 \;cm^{-1} }{(2) (60.864\; cm^{-1})} \\[4pt] &= 1.723 \end{align*} $$

Since the rotational frequency of $H_2$ is quite large, only the first few rotational states are accessible at 300 K
:::

## Contributors and Attributions {section:attributions}

- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
