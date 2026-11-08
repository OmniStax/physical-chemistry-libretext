<!-- LibreTexts page 13409: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04:_Postulates_and_Principles_of_Quantum_Mechanics/4.04:_The_Time-Dependent_Schrodinger_Equation -->
# The Time-Dependent Schrödinger Equation

## Learning Objectives {section:objectives}

- Recognize the differences between the time-dependent and the time-independent Schrödinger equations
- To distinguish between stationary and non-stationary wavefunctions

There are two "flavors" of Schrödinger equations: the time-dependent and the time-independent versions. While the time-dependent Schrödinger equation predicts that wavefunctions can form standing waves (called stationary states), that if classified and understood, then it becomes easier to solve the time-dependent Schrödinger equation for any state. Stationary states can also be described by the time-independent Schrödinger equation (used only when the Hamiltonian is not explicitly time dependent). However, it should be noted that the solutions to the time-independent Schrödinger equation still have time dependencies.

## Time-Dependent Wavefunctions

Recall that the time-independent Schrödinger equation

$$ \hat{H}\psi (x)=E\psi (x) $$ {eq:4.4.1} n=1

yields the allowed energies and corresponding wavefunctions. However, it does not tell us how the system evolves in time. It would seem that something is missing, since, after all, classical mechanics tells us how the positions and velocities of a classical system evolve in time. The time dependence is given by solving Newton's second law

$$ m\dfrac{d^2 x}{dt^2}=F(x) $$ {eq:4.4.2} n=2

But where is $t$ in quantum mechanics? First of all, what is it that must evolve in time? The answer is that the wavefunction (and associated probability density) must evolve. Suppose, therefore, that we prepare a system at $t=0$ according to a particular probability density $p(x,0)$ related to an amplitude $\Psi (x,0)$ by

$$ p(x,0) =|\Psi (x,0)|^2 $$ {eq:4.4.3} n=3

How will this initial amplitude $\Psi (x,0)$ look at time $t$ later? Note, by the way, that $\Psi (x,0)$ does *not* necessarily need to be one of the eigenstates $\psi_n (x)$. To address this, we refer to the time-dependent Schrödinger equation that tells us how $\Psi (x,t)$ will evolve starting from the initial condition $\Psi (x,0)$:

$$ \hat{H}\Psi (x,t)=i\hbar\dfrac{\partial}{\partial t}\Psi (x,t) $$ {eq:4.4.4} n=4

It is important to know how it works physically and when it is sufficient to work with the time-independent version of the Schrödinger equation (Equation [ref:eq:4.4.1]).

:::note [note] Postulate V

The time dependence of wavefunctions is governed by the Time-Dependent Schrödinger Equation (Equation [ref:eq:4.4.4]).
:::

## Stationary States

Suppose that we are lucky enough to choose

$$ \Psi (x,0) =\psi_n (x) $$

with corresponding probability density

$$ p(x,0) =|\psi_n (x)|^2 $$ {eq:4.4.5} n=5

We will show that

$$ \Psi (x,t) =\psi_n (x)e^{-iE_n t/\hbar} $$ {eq:4.4.5A} n=6

From the time-dependent Schrödinger equation

$$ \begin{align*}\dfrac{d\Psi}{dt} &= \psi_n (x) \left ( \dfrac{-iE_n}{\hbar} \right ) e^{-iE_n t/\hbar} \\[4pt] i\hbar \dfrac{d\Psi }{dt} &= E_n \psi_n (x) e^{-iE_n t/\hbar} \end{align*} $$

Similarly

$$ \begin{align*} \hat{H}\Psi (x,t) &=e^{-iE_n t/\hbar}\hat{H}\psi_n (x) \\[4pt] &=e^{-iE_n t/\hbar}E_n \psi_n (x)  \end{align*} $$

Hence $\psi_n (x) exp(-iE_n t/\hbar)$ satisfies the Time-Dependent Schrödinger Equation (Equation [ref:eq:4.4.4]).

Consider the probability density for this wavefunction: $p(x,t)=|\Psi (x,t)|^2$

$$ \begin{align*}p(x,t) &= \left [ \psi_n (x) e^{iE_n t/\hbar} \right ] \left [ \psi_n (x)e^{-iE_n t/\hbar} \right ] \\[4pt] &= \psi_{n}^{2}(x)e^{iE_n t/\hbar}e^{-iE_n t/\hbar}\\[4pt] &= |\psi_n (x)|^2 =p(x,0)\end{align*} $$

the probability does not change in time and for this reason, $\psi_n (x)$ is called a *stationary state*. In such a state, the energy remains {term:fixed} at the well-defined value $E_n$.

## Nonstationary States

Suppose, however, that we had chosen $\Psi (x,0)$ to be some arbitrary linear combination of the two lowest energy states:

$$ \Psi (x,0) =a\psi_1 (x)+b\psi_2 (x) $$ {eq:4.4.9} n=7

for example

$$ \Psi (x,0) =\dfrac{1}{\sqrt{2}}[\psi_1 (x)+\psi_2 (x)] $$ {eq:4.4.10} n=8

as in the previous example. Then, the probability density at time $t$

$$ p(x,t) = |\Psi (x,t)|^2 \neq p(x,0) $$ {eq:4.4.11} n=9

For such a mixture to be possible, there must be sufficient energy in the system that there is some probability of measuring the particle to be in its excited state.

Finally, suppose we start with a state

$$ \Psi (x,0)=\dfrac{1}{\sqrt{2}} [\psi_1 (x) + \psi_2 (x)] $$

and we let this state evolve in time. At any point in time, the state $\Psi (x,t)$ will be some mixture of $\psi_1 (x)$ and $\psi_2 (x)$, and this mixture changes with time. Now, at some specific instance in time $t$, we measure the energy and obtain a value $E_1$. What is the state of the system *just after* the measurement is made? Once we make the measurement, then we know with 100% certainty that the energy is $E_1$. From the above discussion, there is only one possibility for the state of the system, and that has to be the wavefunction $\psi_1 (x)$, since in this state we know with 100% certainty that the energy is $E_1$. Hence, just after the measurement, the state *must be* $\psi_1 (x)$, which means that because of the measurement, any further dependence on $\psi_2 (x)$ drops out, and for all time thereafter, there is *no* dependence on $\psi_2 (x)$. Consequently, any subsequent measurement of the energy would yield the value $E_1$ with 100% certainty. This discontinuous change in the quantum state of the system as a result of the measurement is known as the {term:collapse of the wavefunction}. The idea that the evolution of a system can change as a result of a measurement is one of the topics that is currently debated among quantum theorists.

:::note [note] The Quantum Observer Effect

The fact that measuring a quantum system changes its time evolution means that the experimenter is now coupled to the quantum system. This {term:observer effect} means that the act of observing will influence the phenomenon being observed. In classical mechanics, this coupling does not exist. A classical system will evolve according to Newton's laws of motion independent of whether or not we observe it. This is not true for quantum systems. The very act of observing the system changes how it evolves in time.

Put another way, by simply observing a system, we change it!
:::
