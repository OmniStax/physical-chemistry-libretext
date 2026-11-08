<!-- LibreTexts page 13684: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17:_Boltzmann_Factor_and_Partition_Functions/17.05:_Pressure_can_be_Expressed_in_Terms_of_the_Canonical_Partition_Function -->
# Pressure can be Expressed in Terms of the Canonical Partition Function

Pressure can also be derived from the canonical partition function. The average pressure is the sum of the probability times the pressure:

$$ \langle P \rangle = \sum_i{P_i(N,V,T)P_i(N,V)} $$

The pressure of a macroscopic system is:

$$ P(N,V) = -\left(\dfrac{\partial E_i}{\partial V}\right)_N $$

So we can write the average pressure as:

$$ \begin{split} \langle P \rangle &= \sum_i{P_i(N,V,\beta)\left(-\dfrac{\partial E_i}{\partial V}\right)_N} \\ &= \sum_i{\left(-\dfrac{\partial E_i}{\partial V}\right)_N\dfrac{e^{-E_i(N,V)/kT}}{Q(N,V,T)}} \end{split} $$

In a few steps we can show that the temperature can be expressed in terms of the partition function:

$$ Q(N,V,T) = \sum_i{e^{-E_i(N,V)/kT}} $$

Writing in terms of $\beta$ instead of temperature:

$$ Q(N,V,\beta) = \sum_i{e^{-\beta E_i(N,V)}} $$

The derivative of the partition function with respect to volume is:

$$ \left(\dfrac{\partial Q}{\partial V}\right)_{N,\beta} = -\beta \sum_i{\left(\dfrac{\partial E_i}{\partial V}\right)_{N}e^{-\beta E_i(N,V)}} $$

The average pressure can then be written as:

$$ \langle P \rangle = \dfrac{kT}{Q(N,V,\beta}\left(\dfrac{\partial Q}{\partial V}\right)_{N,\beta} $$

Which shows that the pressure can be expressed solely terms of the partition function:

$$ \langle P \rangle = kT\left(\dfrac{\partial \ln{Q}}{\partial V}\right)_{N,\beta} $$

We can use this result to derive the ideal gas law. For $N$ particles of an ideal gas:

$$ Q(N,V,\beta) = \dfrac{[q(V,\beta)]^N}{N!} $$

where:

$$ q(V,\beta) = \left(\dfrac{2\pi m}{h^2\beta}\right)^{3/2}V $$

is the translational partition function. The utility of expressing the pressure as a logarithm is clear from the fact that we can write:

$$ \begin{split} \ln{Q} &= N\ln{q}-\ln{N!} \\ &= -\dfrac{3N}{2}\ln{\left(\dfrac{2\pi m}{h^2\beta}\right)}+N\ln{V}-\ln{N!} \end{split} $$

We have used the property of logarithms that $\ln{(AB)} = \ln{(A)} + \ln{(B)}$ and $\ln{(X^Y)} = Y\ln{(X)}$. Only one term in the ln $Q$ depends on $V$. Taking the derivative of $N\ln{V}$ with respect to $V$ gives:

$$ \left(\dfrac{\partial \ln{Q}}{\partial V}\right)_{N,\beta} = \dfrac{N}{V} $$

Substituting this into the above equation for the pressure gives:

$$ P = \dfrac{NkT}{V} $$

which is the ideal gas law. Recall that $Nk = nR$ where $N$ is the number of molecules and $n$ is the number of moles. $R$ is the universal gas constant (8.314 J/mol-K) which is nothing more than $k$ multiplied by Avagadro’s number. $N_Ak = R$ converts the constant from a "per molecule" to a "per mole" basis.

## Gas Compressed by a Piston

> FIGURE {fig:17.5.1} src=media/61536-Tuckerman_Screenshot_3-1.png width=276
> alt: Diagram showing a rectangular area with scattered points inside, labeled with axes z and dz.
> caption: Illustration of a thought experiment in which a system is compressed via a piston pushed into the system along the positive $z$ axis.

Let us consider a simple thought experiment, which is illustrated in the figure above: A system of $N$ particles is compressed by a piston pushing in the positive $z$ direction. Since this is a classical thought experiment, we think in terms of forces. The piston exerts a constant force of magnitude $F$ on the system. The direction of the force is purely in the positive $z$ direction, so that we can write the force vector $\bf{F}$ as $\bf{F} = \begin{pmatrix} 0, 0, F \end{pmatrix}$. At equilibrium (the piston is not moving), the system exerts an equal and opposite force on the piston of the form $\begin{pmatrix} 0, 0, -F \end{pmatrix}$. If the energy of the system is $E$, then the force exerted by the system on the piston will be given by the negative change in $E$ with respect to $z$:

$$ -F = -\dfrac{dE}{dz} $$ {eq:Eq3.29} n=1

or:

$$ F = \dfrac{dE}{dz} $$ {eq:Eq3.30} n=2

The force exerted by the system on the piston is manifest as an observable pressure $P$ equal to the force $F$ divided by the area $A$ of the piston, $P=F/A$. Given this, the observed pressure is just:

$$ P = \dfrac{dE}{Adz} $$ {eq:Eq3.31} n=3

Since the volume decreases when the system is compressed, we see that $Adz = -dV$. Hence, we can write the pressure as $P = -dE/dV$.

Of course, the relation $P = -dE/dV$ is a thermodynamic one, but we need a function of $x$ that we can average over the ensemble. The most natural choice is:

$$ p(x) = -\dfrac{d \mathcal{E} (x)}{dV} $$ {eq:Eq3.32} n=4

so that $P = \langle p(x) \rangle$. Setting up the average, we obtain:

$$ \begin{align} P &= -\dfrac{C_N}{Q(N, V, T)} \int \dfrac{\partial \mathcal{E}}{\partial V} e^{-\beta \mathcal{E} (x)} \\ &= \dfrac{C_N}{Q(N, V, T)} \dfrac{1}{\beta} \int \dfrac{\partial}{\partial V} e^{-\beta \mathcal{E} (x)} \\ &= \dfrac{kT}{Q(N, V, T} \dfrac{\partial}{\partial V} C_N \int e^{-\beta \mathcal{E} (x)} \\ &= kT \left( \dfrac{\partial \: \text{ln} \: Q(N, V, T)}{\partial V} \right) \end{align} $$ n=5

## Ideal Gas in the Canonical Ensemble

Recall that the mechanical energy for an ideal gas is:

$$ \mathcal{E} (x) = \sum_{i=1}^N \dfrac{\textbf{p}_i^2}{2m} $$ {eq:Eq3.36} n=6

where all particles are identical and have mass $m$. Thus, the expression for the canonical partition function $Q(N, V, T)$ is:

$$ Q(N, V, T) = \dfrac{1}{N!h^{3N}} \int dx \: e^{-\beta \sum_{i=1}^N \textbf{p}_i^2/2m} $$

Note that this can be expressed as:

$$ Q(N, V, T) = \dfrac{1}{N!h^{3N}}V^N \left[ \int dp \: e^{-\beta p^2/2m} \right]^{3N} $$

Evaluating the Gaussian integral gives us the final result immediately:

$$ Q(N, V, T) = \dfrac{1}{N!} \left[ \dfrac{V}{h^3} \left( \dfrac{2 \pi m}{\beta} \right)^{3/2} \right]^N $$

The expressions for the energy:

$$ E = -\dfrac{\partial}{\partial \beta} \: \text{ln} \: Q(N, V, T) $$

which gives:

$$ E = \dfrac{3}{2}NkT = \dfrac{3}{2}nRT $$ {eq:Eq3.37} n=7

and pressure:

$$ P = kT \left( \dfrac{\partial \: \text{ln} \: Q(N, V, T)}{\partial V} \right) $$

giving:

$$ P = \dfrac{NkT}{V} = \dfrac{nRT}{V} $$ {eq:Eq3.38} n=8

which is the ideal gas law.
