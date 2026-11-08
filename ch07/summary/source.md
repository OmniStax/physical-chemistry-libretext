<!-- LibreTexts page 550558: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/07:_Approximation_Methods/7.S:_Approximation_Methods_(Summary) -->
# Approximation Methods (Summary)

There are very few chemical systems for which the Schrödinger equation can be solved exactly, so most of the time approximations must be made. The most common approximation is the Born-Oppenheimer approximation, which says that the motion of the electrons is fast compared to the motion of the nuclei. Under the Born-Oppenheimer approximation, nuclear coordinates are held fixed and the electron system is solved exactly (one-electron systems) or approximately (multi-electron systems), and then the nuclear coordinates are systematically varied and the electronic system recalculated. In this manner, a {term:potential energy surface} (PES) is created, giving the potential energy of the system as a function of the nuclear coordinates, and the PES can be used to solve the vibrational and rotational parts of the molecular wavefunction. The Born-Oppenheimer approximation is specific for molecules; the approximation methods that follow are general for quantum mechanics.

## Variational principle

The variational principle states that for a given operator, the expectation value of that operator with any normalized function will be greater than or equal to the lowest eigenvalue of that operator. For a molecular Hamiltonian, that means that the energy calculated with an arbitrary wavefunction will provide an upper bound for the ground state energy of the molecule. In equation form, the variational principle states that if $\ket{\psi}$ is a trial function, then

$$ E = \frac{\bra{\psi}\op{H}\ket{\psi}}{\braket{\psi}{\psi}},\quad E \geq E_0, $$ {eq:chap:intro:eq:var} n=1

where $E$ is the energy associated with the trial function $\ket{\psi}$, and $E_0$ is the actual lowest eigenvalue of $\op{H}$. The trial function may have adjustable parameters which can be varied to minimize the calculated energy and therefore improve the estimate; this is usually done using specialized software packages.

A special type of linear variational calculation is called the Rayleigh–Ritz method. In this method, the trial function is simply a linear combination of orthogonal basis functions

$$ \ket{\psi} = \sum_n c_n\ket{\phi_n}. $$

The solution to this problem involves calculating the $c_n$ coefficients that minimize the variational energy. After some calculus, it can be shown that this is essentially an eigenvalue problem, and that the values of the coefficients can be obtained by solving the secular determinant

$$ \left| \begin{array}{cccc} \bra{\phi_0}\op{H}\ket{\phi_0} - E\braket{\phi_0}{\phi_0} & \bra{\phi_0}\op{H}\ket{\phi_1} - E\braket{\phi_0}{\phi_1} & \cdots & \bra{\phi_0}\op{H}\ket{\phi_n} - E\braket{\phi_0}{\phi_n} \\[4pt] \bra{\phi_1}\op{H}\ket{\phi_0} - E\braket{\phi_1}{\phi_0} & \bra{\phi_1}\op{H}\ket{\phi_1} - E\braket{\phi_1}{\phi_1} & \cdots & \bra{\phi_1}\op{H}\ket{\phi_n} - E\braket{\phi_1}{\phi_n} \\[4pt] \vdots & \vdots & \ddots & \vdots \\[4pt] \bra{\phi_n}\op{H}\ket{\phi_0} - E\braket{\phi_n}{\phi_0} & \bra{\phi_1}\op{H}\ket{\phi_1} - E\braket{\phi_n}{\phi_1} & \cdots & \bra{\phi_n}\op{H}\ket{\phi_n} - E\braket{\phi_n}{\phi_n} \end{array} \right| = 0 $$

Note that if the basis functions $\ket{\phi_n}$ are normalized, then $\braket{\phi_n}{\phi_m} = \delta_{nm}$, and the equation simplifies to

$$ \left| \begin{array}{cccc} \bra{\phi_0}\op{H}\ket{\phi_0} - E & \bra{\phi_0}\op{H}\ket{\phi_1} & \cdots & \bra{\phi_0}\op{H}\ket{\phi_n} \\[4pt] \bra{\phi_1}\op{H}\ket{\phi_0} & \bra{\phi_1}\op{H}\ket{\phi_1} - E & \cdots & \bra{\phi_1}\op{H}\ket{\phi_n} \\[4pt] \vdots & \vdots & \ddots & \vdots \\[4pt] \bra{\phi_n}\op{H}\ket{\phi_0} & \bra{\phi_1}\op{H}\ket{\phi_1} & \cdots & \bra{\phi_n}\op{H}\ket{\phi_n} - E \end{array} \right| = 0 $$

This equation will result in $n$ values for $E$, and for each value $E_k$, there will be a set of $n$ coefficients $c_k$ that give rise to that energy. If you take this argument further, you’ll see that this is the general matrix formalism of quantum mechanics: wavefunctions $\ket{\psi}$ can be represented by vectors of coefficients $c_n$ in the space of orthogonal unit vectors $\ket{\phi_n}$, and operators become matrices whose elements are the integrals $\bra{\phi_n}\op{A}\ket{\phi_m}$.

$$ \ket{\psi} = \left( \begin{array}{c} c_0 \\[4pt] c_1 \\[4pt] \vdots \\[4pt] c_n \end{array}\right), \quad \bra{\psi} = \left( \begin{array}{cccc} c_0^* & c_1^* & \cdots & c_n^* \end{array}\right)\textrm{, and } \op{H} = \left( \begin{array}{cccc} \bra{\phi_0}\op{H}\ket{\phi_0} & \bra{\phi_0}\op{H}\ket{\phi_1} & \cdots & \bra{\phi_0}\op{H}\ket{\phi_n} \\[4pt] \bra{\phi_1}\op{H}\ket{\phi_0} & \bra{\phi_1}\op{H}\ket{\phi_1} & \cdots & \bra{\phi_1}\op{H}\ket{\phi_n} \\[4pt] \vdots & \vdots & \ddots & \vdots \\[4pt] \bra{\phi_n}\op{H}\ket{\phi_0} & \bra{\phi_1}\op{H}\ket{\phi_1} & \cdots & \bra{\phi_n}\op{H}\ket{\phi_n} \end{array} \right) $$

Solving for the $c_n$ coefficients that minimize the energy is equivalent to diagonalizing $\op{H}$ in this vector space; the eigenvalues are the energies and the eigenvectors are the coefficients on each basis function that make up the corresponding wavefunction. One can, for instance, estimate the ground state energy and wavefunction of a harmonic oscillator by using a trial function which is a linear combination of particle in a box wavefunctions.

## Perturbation Theory

To use perturbation theory effectively, the problem must be expressed in terms of a separate problem that can be solved exactly together with a small correction term. That is, if $\op{H}$ is the problem, then we must be able to express it as

$$ \op{H} = \op{H}_0 + \op{V} $$

where the eigenvalues and eigenfunctions of $\op{H}_0$ are known, and $\op{V}$ is relatively small. If we do this, then the eigenvalues $\epsilon_n$ and eigenfunctions $\ket{\Psi_n}$ can be expressed as

$$ \epsilon_n = \epsilon_n^{(0)} + \epsilon_n^{(1)} + \epsilon_n^{(2)} + \ldots, \quad \ket{\Psi_n} = \ket{\psi_n^{(0)}} + \ket{\psi_n^{(1)}} + \ket{\psi_n^{(2)}} + \ldots $$

where the superscripts indicate the “order” of the approximation. You can think of this as similar to a type of expansion like a Taylor series.

The zeroth order terms in each of these equations are the eigenvalues $E_n$ and eigenfunctions $\ket{\phi_n}$ of $\op{H}_0$, which are known exactly. It can be shown that the first order terms are

$$ \epsilon_n^{(1)} = \bra{\phi_n}\op{V}\ket{\phi_n} $$

and

$$ \ket{\psi_n^{(1)}} = \sum_{k \neq n} -\frac{\bra{\phi_k}\op{V}{\ket{\phi_n}}}{E_k - E_n}\ket{\phi_k}. $$

In this way, we can use the solutions to exactly-solvable problems and correct them for small perturbations. This is a second reason we spent so much time deriving the solutions to the model systems above; not only do the systems give us a mental picture of what’s going on, they also provide a starting point for performing more accurate calculations while still maintaining the same qualitative physical picture. Perhaps the most common example of the use of perturbation theory is to calculate energies of anharmonic oscillators. Recall our earlier Taylor expansion of an arbitrary potential near the minimum, Equation [ref:eq:chap:intro:eq:taylorpotential]. If we truncate the series at the fourth term instead of the third, we see that the Hamiltonian becomes

$$ \op{H} = -\frac{\hbar^2}{2\mu}\nabla^2 + \frac{1}{2}kx^2 + \frac{1}{6}\gamma x^3, $$

where $\gamma$ is the third derivative of the potential at the minimum. This problem can be treated with perturbation theory if we let

$$ \op{H_0} = -\frac{\hbar^2}{2\mu}\nabla^2 + \frac{1}{2}kx^2\textrm{, and }\op{V} = \frac{1}{6}\gamma x^3. $$
