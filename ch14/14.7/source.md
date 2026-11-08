<!-- LibreTexts page 13642: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/14:_Nuclear_Magnetic_Resonance_Spectroscopy/14.07:_Spin-Spin_Coupling_Between_Chemically_Equivalent_Protons_is_Not_Observed -->
# Spin-Spin Coupling Between Chemically Equivalent Protons is Not Observed

When doing NMR spectroscopy, it is an observed fact that equivalent hydrogens do not split one another. Why don't equivalent hydrogens split each other's signals? For example, why is the NMR spectrum for ethane a singlet instead of a quartet or even a dodecuplet (due to the hydrogens on the same carbon)? What is so special about hydrogens being equivalent to one another that causes no splitting to be observed?

Finding the states between which transitions occur

The Hamiltonian for two coupled spins is

$$ \hat{H} = \omega_1\hat{I}_{\!1z} + \omega_2\hat{I}_{\!2z} + \dfrac{2\pi J_{12}}{\hbar}(\hat{\vec{I}_{\!1}}\cdot\hat{\vec{I}_{\!2}}) $$ {eq:1} n=1

where $\omega_1$ and $\omega_2$ are the Larmor frequencies<sup>[2]</sup> of the two nuclei and $J_{12}$ is the coupling constant (in Hz) between the two nuclei. (The factor of $2\pi/\hbar$ is simply there to bring it into energy units.) $\hat{I}_{\!i}$ is the operator for the spin angular momentum of nucleus $i$ and $\hat{I}_{\!iz}$ is the operator for its projection along the $z$-axis.

However, in NMR, it is customary to work in frequency units instead of energy units. Since $E = h\nu$, we simply need to divide through by $h$. Bearing in mind that $\omega = 2\pi\nu$ and $h = 2\pi\hbar$, we get:

$$ \hat{H}_\text{freq} = \dfrac{\nu_1}{\hbar}\hat{I}_{\!1z} + \dfrac{\nu_2}{\hbar}\hat{I}_{\!2z} + \dfrac{J_{12}}{\hbar^2}(\hat{\vec{I}_{\!1}}\cdot\hat{\vec{I}_{\!2}}) $$ {eq:2} n=2

On top of that, to make the math easier, it is also quite common to set $\hbar = 1$. Therefore, we have

$$ \hat{H}_\text{freq} = \nu_1\hat{I}_{\!1z} + \nu_2\hat{I}_{\!2z} + J_{12}(\hat{\vec{I}_{\!1}}\cdot\hat{\vec{I}_{\!2}}) $$ {eq:3} n=3

We will deal with two spin-$1/2$ nuclei here, where $|\alpha\rangle$ and $|\beta\rangle$ represent the "up" and "down" spins (recall we set $\hbar = 1$ so it doesn't appear in the eigenvalues):

$$ \begin{align*} \hat{I}_{\!iz}|\alpha_i\rangle &= \dfrac{1}{2}|\alpha_i\rangle & \hat{I}_{\!iz}|\beta_i\rangle &= -\dfrac{1}{2}|\beta_i\rangle & (i = 1,2)  \end{align*} $$

Furthermore since we are dealing with equivalent nuclei we can simply set $\nu_1 = \nu_2 = \nu$ and drop the subscript in $J_{12}$ just to make it a bit cleaner:

$$ \hat{H} = \nu(\hat{I}_{\!1z} + \hat{I}_{\!2z}) + J(\hat{\vec{I}_{\!1}}\cdot\hat{\vec{I}_{\!2}}) $$ {eq:5} n=4

Now, we need to find the eigenstates and eigenvalues of $\hat{H}$. To do so, we will adopt the basis set of product functions $(|\alpha_1\alpha_2\rangle, |\alpha_1\beta_2\rangle, |\beta_1\alpha_2\rangle, |\beta_1\beta_2\rangle)$. From equation $(4)$ we have

$$ \begin{align*} \hat{I}_{\!1z}|\alpha_1\alpha_2\rangle &= \dfrac{1}{2}|\alpha_1\alpha_2\rangle & \hat{I}_{\!2z}|\alpha_1\alpha_2\rangle &= \dfrac{1}{2}|\alpha_1\alpha_2\rangle  \\ \hat{I}_{\!1z}|\alpha_1\beta_2\rangle &= \dfrac{1}{2}|\alpha_1\beta_2\rangle & \hat{I}_{\!2z}|\alpha_1\beta_2\rangle &= -\dfrac{1}{2}|\alpha_1\beta_2\rangle  \\ \hat{I}_{\!1z}|\beta_1\alpha_2\rangle &= -\dfrac{1}{2}|\beta_1\alpha_2\rangle & \hat{I}_{\!2z}|\beta_1\alpha_2\rangle &= \dfrac{1}{2}|\beta_1\alpha_2\rangle  \\ \hat{I}_{\!1z}|\beta_1\beta_2\rangle &= -\dfrac{1}{2}|\beta_1\beta_2\rangle & \hat{I}_{\!2z}|\beta_1\beta_2\rangle &= -\dfrac{1}{2}|\beta_1\beta_2\rangle  \end{align*} $$

The action of the scalar product $\hat{\vec{I}_{\!1}}\cdot\hat{\vec{I}_{\!2}}$ is more complicated. We need to introduce the *shift operators* (or *ladder operators*).

$$ \begin{align*} \hat{I}_{\!i+} &= \hat{I}_{\!ix} + \mathrm{i}\hat{I}_{\!iy} & \hat{I}_{\!i-} &= \hat{I}_{\!ix} - \mathrm{i}\hat{I}_{\!iy}  \end{align*} $$

from which we can obtain

$$ \begin{align*} \hat{I}_{\!ix} &= \dfrac{\hat{I}_{\!i+} + \hat{I}_{\!i-}}{2} & \hat{I}_{\!iy} &= \dfrac{\hat{I}_{\!i+} - \hat{I}_{\!i-}}{2\mathrm{i}}  \end{align*} $$

So, finally, we can write

$$ \begin{align*} \hat{\vec{I}_{\!1}}\cdot\hat{\vec{I}_{\!2}} &= \hat{I}_{\!1x}\hat{I}_{\!2x} + \hat{I}_{\!1y}\hat{I}_{\!2y} + \hat{I}_{\!1z}\hat{I}_{\!2z}  \\ &= \dfrac{\hat{I}_{\!1+}\hat{I}_{\!2-} + \hat{I}_{\!1-}\hat{I}_{\!2+}}{2} + \hat{I}_{\!1z}\hat{I}_{\!2z}  \end{align*} $$

where in going from $(12)$ to $(13)$ one simply substitutes in $(11)$ and does a fair bit of algebraic manipulation. The action of the shift operators are

$$ \begin{align*} \hat{I}_{\!i+}|\alpha_i\rangle &= 0 & \hat{I}_{\!i+}|\beta_i\rangle &= |\alpha_i\rangle \tag{14} \\ \hat{I}_{\!i-}|\alpha_i\rangle &= |\beta_i\rangle & \hat{I}_{\!i-}|\beta_i\rangle &= 0 \tag{14} \\ \end{align*} $$

This allows you to work out the effect of $\hat{\vec{I}_{\!1}}\cdot\hat{\vec{I}_{\!2}}$ on our basis states. The actual math is left to the reader and I will simply quote the results:

$$ \begin{align*} \hat{H}|\alpha_1\alpha_2\rangle &= \left(\nu + \dfrac{J}{4}\right)|\alpha_1\alpha_2\rangle  \\ \hat{H}|\alpha_1\beta_2\rangle &= -\dfrac{J}{4}|\alpha_1\beta_2\rangle + \dfrac{J}{2}|\beta_1\alpha_2\rangle  \\ \hat{H}|\beta_1\alpha_2\rangle &= \dfrac{J}{2}|\alpha_1\beta_2\rangle - \dfrac{J}{4}|\beta_1\alpha_2\rangle  \\ \hat{H}|\beta_1\beta_2\rangle &= \left(-\nu + \dfrac{J}{4}\right)|\beta_1\beta_2\rangle  \\ \end{align*} $$

Therefore in this basis the Hamiltonian matrix is

$$ \mathbf{H} = \begin{pmatrix} \nu + J/4 & 0 & 0 & 0 \\ 0 & -J/4 & J/2 & 0 \\ 0 & J/2 & -J/4 & 0 \\ 0 & 0 & 0 & -\nu + J/4 \end{pmatrix} $$ {eq:19} n=5

Finding the eigenvectors and eigenvalues of this matrix is again left to the reader (it is not a difficult task) and they are (eigenvalues denoted $E_i$)

$$ \begin{align*} |1\rangle &= |\alpha_1\alpha_2\rangle & E_1 &= \nu + \dfrac{J}{4}  \\ |2\rangle &= \dfrac{1}{\sqrt{2}}(|\alpha_1\beta_2\rangle + |\beta_1\alpha_2\rangle) & E_2 &= \dfrac{J}{4}  \\ |3\rangle &= \dfrac{1}{\sqrt{2}}(|\alpha_1\beta_2\rangle - |\beta_1\alpha_2\rangle) & E_3 &= -\dfrac{3J}{4}  \\ |4\rangle &= |\beta_1\beta_2\rangle & E_4 &= -\nu + \dfrac{J}{4}  \\ \end{align*} $$

The form of the eigenstates should be familiar: they are simply the triplet and singlet states of two spin-$1/2$ particles. These states arise from the coupling of two sources of angular momenta, $I_1$ and $I_2$, to form one overall angular momentum denoted $I$.

$$ \vec{I} = \vec{I}_{\!1} + \vec{I}_{\!2} $$ {eq:24} n=6

The allowed values of $I$ are determined by the {term:Clebsch-Gordan series}:

$$ I = I_1 + I_2, I_1 + I_2 - 1, \cdots, |I_1 - I_2| $$ {eq:25} n=7

Since $I_1 = I_2 = 1/2$, $I$ can take the values $1$ and $0$. The values of $M_I$, the projection of the total angular momentum along the $z$-axis, are as usual

$$ M_I = I, I-1, \cdots, -I $$ {eq:26} n=8

so the states with $I = 1$ ("triplet") have $M_I = 1, 0, -1$ and the state with $I = 0$ ("singlet") has $M_I = 0$. One can use more quantum mechanics to work out which state is associated with which quantum numbers, but I will not do it here. They are:

$$ \begin{array}{ccc} \hline \text{State} & I & M_I \\ \hline |1\rangle & 1 & 1 \\ |2\rangle & 1 & 0 \\ |3\rangle & 0 & 0 \\ |4\rangle & 1 & -1 \\ \hline \end{array} $$

## Selection rules

We have four different states, which leads to ${4\choose 2} = 6$ different possible transitions. However, not all of these transitions are allowed.

The intensity of the transition is proportional to the square of the matrix element $\langle \psi_\mathrm{f} | \hat{H'} | \psi_\mathrm{i} \rangle$ (the so-called "transition dipole moment"), where $\hat{H'}$ is the Hamiltonian for the process that induces the transition. In the case of NMR transitions, the transition arises due to a magnetic field aligned along the $x$-axis.<sup>[3]</sup> The corresponding Hamiltonian is therefore

$$ \hat{H'} = \omega'(\hat{I}_{\!1x} + \hat{I}_{\!2x}) = \omega'\hat{I}_{\!x} $$ {eq:27} n=9

Exactly what $\omega'$ represents is not important here because we are only really concerned about whether the transition dipole moment is zero or not.<sup>[4]</sup> Making use of the relations established in equations [ref:eq:10] and [ref:eq:11],<sup>[5]</sup> one can find that the selection rules are

$$ \Delta I = 0; \Delta M_I = \pm 1 $$ {eq:28} n=10

which means that the allowed transitions are $|4\rangle \leftrightarrow |2\rangle$ and $|2\rangle \leftrightarrow |1\rangle$. Transitions to and from the singlet state $|3\rangle$ are forbidden. The energies of the transitions are

$$ \begin{align*} E_{4\leftrightarrow2} &= \dfrac{J}{4} - \left(-\nu + \dfrac{J}{4}\right) = \nu  \\ E_{2\leftrightarrow1} &= \left(\nu + \dfrac{J}{4}\right) - \dfrac{J}{4} = \nu  \\ \end{align*} $$

i.e. the two transitions are degenerate and only one line in the spectrum at frequency $\nu$ is observed. This is exactly what is depicted in the diagrams posted in the other answers.

> the two transitions are degenerate and only one line in the spectrum at frequency $\nu$ is observed.

## Notes and references

<sup>[1]</sup> I am assuming the reader has some knowledge of the quantum mechanical treatment of angular momentum, which is a topic that is treated thoroughly in most quantum mechanics textbooks. See, for example, chapter 4 of Atkins's *Molecular Quantum Mechanics* (5th ed.).

<sup>[2]</sup> The Larmor frequency is given by $\omega = -\gamma B_0$, where $\gamma$ is the magnetogyric ratio of the nucleus in question and $B_0$ is the strength of the external magnetic field. It represents the frequency with which a magnetic moment precesses about a magnetic field. See any textbook on magnetism for further details.

<sup>[3]</sup> I am glossing over some details here. The so-called magnetic field in the $x$-axis is a component of the radiofrequency pulse applied in the $xy$-plane. If you are interested please consult a textbook on the vector model of NMR. In particular I recommend Keeler's *Understanding NMR Spectroscopy* (2nd ed.).

<sup>[4]</sup> It is related to the strength of the magnetic field in the $x$-axis, $B_1$, by $w' = |\gamma|B_1$. The usual symbol is $\omega_1$, but I chose not to use this here to avoid potential confusion. Again, please consult a textbook on the vector model of NMR if you wish to find out more.

<sup>[5]</sup> A full proof can be found in *J. Chem. Educ.* {term:1982,} *59* (10), 819. There is also some discussion of the selection rules in Gunther's *NMR Spectroscopy* (3rd ed.), p 156 onwards.

:::note [note] Note

The first important point to note is that *magnetically* equivalent nuclei do in fact couple to each other, however no splitting is *observed* in the spectrum. The second point is that *chemically equivalent, but magnetically non-equivalent*, nuclei couple to each other, and this coupling *is* observable in the NMR spectrum.

Spin coupling comes from a magnetic interaction between nuclear spins transmitted through the bonding electrons. Signals observed in the NMR spectrum are a transition between energy levels of allowed spin states. When two nuclei 'couple', the energy levels are stabilised or destabilsed slightly based on the relative orientations of the nuclear moments, so that (for a doublet) one transition is now δ+J/2, and the other transition is δ-J/2. These two transitions constitute the two lines of the doublet signal. When two equivalent nuclei couple, transitions between energy levels do not change because the interactions between the nuclear moments are the same, as are all other contributing factors such as the Fermi contact. As long as the transitions remain the same, all possible transitions will be equivalent.

The diagram below hopefully explains it a little clearer. The middle energy levels are for two non-coupled spins. Spin A (shown in red) has two possible transitions, both of which are equivalent. When the two spins are coupled, the energy levels are stabilised/destabilised as shown on the right. The transitions for spin A are now no longer equivalent, and they will appear as two lines (doublet). On the left, the equivalent nuclei have an overall change in energy level, but the transition between the levels remains the same, hence the observed line is still a singlet.

[![Diagram illustrating forces and supports acting on a structure, with labeled arrows indicating direction and magnitude.](media/344398-LCkBM.png)](https://i.stack.imgur.com/LCkBM.png)
:::

When there are two distinct nuclei (The AX case) and there is spin-spin interaction ($J$ coupling) between them (in addition to chemical shift) then fine structure can be observed in the nmr spectrum. The first diagram shows the energy levels and how they interact. Note how the $J$ coupling moves the levels up and down in addition to chemical shift.

[![Diagram illustrating energy level splitting in a half spin 1/2 model, showing magnetic energy transitions and spin states.](media/344400-xeaC4.png)](https://i.stack.imgur.com/xeaC4.png)

Now there are selection rules that allow the radio frequency radiation to couple different levels together and so produce a spectrum. The rule is that the $m_z$ quantum number (variously called magnetic, or azimuthal or projection quantum number) has to change by $+1$ or $-1$. This means that in the first diagram only levels in which one alpha changes to beta or vice versa, as shown by the vertical arrows, are allowed transitions. (The selection rule occurs because the photon (even if at radio frequency) has one unit of angular momentum and total angular momentum is conserved.)

In the equivalent nuclei case (called A2) the interaction between spins is still present but because of the magnetically identical nuclei the spin states are not either symmetrical or anti symmetrical to exchange of nuclei and a linear combination has to be made. This is shown on the left of the figure below. The reason that the splitting in energy levels is not observed is that selection rules make the transitions unobservable

[![Diagram illustrating energy transitions in quantum interactions, highlighting various states and transitions in a schematic format.](media/344399-htKbC.png)](https://i.stack.imgur.com/htKbC.png)

:::note [note] Advanced: Liouville–von Neumann Equation

An alternative answer using the product operator formalism:

The fundamental equation describing NMR quantum mechanically (neglecting relaxation) is the {term:Liouville–von Neumann Equation} (in frequency units, i.e. setting $\hbar = 1$):

$$ \dfrac{\mathrm d}{\mathrm dt}\hat{\rho}=-\mathrm i[\hat{H},\hat{\rho}] $$

For a 2-spin system with identical chemical shifts and a coupling

$$ \hat{H}=\Omega\hat{I}_{\!1z}+\Omega\hat{I}_{\!2z}+J(\vec{\hat{I}}_{\!1}\cdot\vec{\hat{I}}_{\!2}) $$

After a 90 degree pulse on both nuclei the density matrix $\hat{\rho}$ is of the form $\hat{I}_{\!1\chi} + \hat{I}_{\!2\chi}$, where $\chi = x$ or $y$. Now it is a bit lengthy but easy to show that

$$ [\hat{I}_{\!1\chi}+\hat{I}_{\!2\chi},J(\vec{\hat{I}}_{\!1}\cdot\vec{\hat{I}}_{\!2})]=0, \quad \text{with } \chi=x,y,z $$

meaning that the coupling Hamiltonian does not influence the signal after a 90 degree pulse, as $[\hat{H}_\text{coupling},\hat{\rho}] = 0$.
:::
