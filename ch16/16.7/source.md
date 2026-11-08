<!-- LibreTexts page 13662: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/16:_The_Properties_of_Gases/16.07:_Van_der_Waals_Constants_in_Terms_of_Molecular_Parameters -->
# Van der Waals Constants in Terms of Molecular Parameters

The van der Waals equation can be written as:

$$ P=\frac{RT}{\bar{V}-b}-\frac{a}{\bar{V}^2} $$

Using the binomial expansion:

$$ \frac{1}{1-x}=1+x+x^2+\cdots $$

We can write the van der Waals equation of state as:

$$ \begin{split}P&=\frac{RT}{\bar{V}}\left[1+\frac{b}{\bar{V}}+\frac{b^2}{\bar{V}^2}+\cdots\right]-\frac{a}{\bar{V}^2}\\&= \frac{RT}{\bar{V}}+(RTb-a)\frac{1}{\bar{V}^2}+\frac{RTb^2}{\bar{V}^3}+\cdot\end{split} $$

Rearranging in terms of compressibility, $Z$:

$$ Z = \frac{P\bar{V}}{RT} = 1+\left(b-\frac{a}{RT}\right)\frac{1}{\bar{V}}+\frac{b^2}{\bar{V}^2}+\cdots $$

Comparing to the Viral equation of state, we can see that the second Viral coefficient is related to the van der Waals coefficients:

$$ B_{2V}(T)=b-\frac{a}{RT} $$

Using a combination of the hard sphere model and the Lennard-Jones potential, we obtain:

$$ u(r) = \begin{cases} \infty & r \leq \sigma \\ -\dfrac{C_6}{r^6} & r > \sigma \end{cases} $$ {eq:1} n=1

We can write the second Virial coefficient as

$$ B_2(T) = \dfrac{2}{3} \pi N_0 \sigma^3 \left[ 1 - \dfrac{C_6}{3 k_B T \sigma^6} \right] $$ {eq:2} n=2

Let us introduce to simplifying variables

$$ \begin{align} b &= \dfrac{2}{3} \pi N_0 \sigma^3 \\ a &= \dfrac{2 \pi N_0^2 C_6}{9 \sigma^3} \end{align} $$ n=3

In which the second Virial coefficient becomes:

$$ B_2(T) = b - \dfrac{a}{RT} $$ {eq:4} n=4

From these equations, we can see that $a$ is directly proportional to $c_6$, the intermolecular attraction between particles with a force proportional to $r^{-6}$. Likewise, $b$ is equivalent to four times the volume of the particle. In other words, the van der Waals equations assumes the hard sphere model at small distances and weak interactions (attractive forces) at larger distances.
