<!-- LibreTexts page 550564: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04:_Postulates_and_Principles_of_Quantum_Mechanics/4.S:_Postulates_and_Principles_of_Quantum_Mechanics_(Summary) -->
# Postulates and Principles of Quantum Mechanics (Summary)

1. The state of a quantum system is completely specified by its wavefunction $\ket{\psi}$.
2. To every observable quantity in classical mechanics, there exists a {term:Hermitian quantum mechanical operator. For example:} kinetic energy in Classical Mechanics is
   
   $$ \text{kinetic energy} = \dfrac{p^2}{2m} \tag{classical mechanics} $$
   
   and in Quantum Mechanics is
   
   $$ \text{kinetic energy} = \dfrac{\hat{p}^2}{2m} = -\frac{\hbar}{2m}\nabla^2. \tag{quantum mechanics} $$
3. Observable quantities in quantum mechanics are eigenvalues of their corresponding operators: $\op{A}\ket{\phi_n} = A_n\ket{\phi_n}$.
4. The set of eigenfunctions of an operator are orthogonal: $\braket{\phi_n}{\phi_m} = \delta_{nm}$. The Kronecker delta $\delta_{nm}$ is 1 if $n = m$, and zero otherwise. As a secondary point, the set of all eigenfunctions of an operator form a complete set. So if $\ket{\phi_n}$ ($n = 0$, 1, 2 $\ldots$) are the set of eigenfunctions of an operator $\op{A}$, then any other state in the same space can be expressed as a linear combination of these functions:
   
   $$ \ket{\psi} = \sum_n c_n\ket{\phi_n}, $$
   
   where $c_n$ are complex numbers (the exact values are $c_n = \braket{\phi_n}{\psi}$, as you can see by applying a projection operator on $\ket{\psi}$).
5. If two operators do not commute, then their corresponding observables cannot be measured simultaneously to arbitrary precision. The most famous example is position and momentum:
   
   $$ [\op{x},\op{p}_x] = \op{x}\op{p}_x - \op{p}_x\op{x} = i\hbar, $$
   
   and as a result
   
   $$ \Delta p_x \Delta x \geq \hbar/2. $$
