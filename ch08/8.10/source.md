<!-- LibreTexts page 13448: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08:_Multielectron_Atoms/8.10:_Hund's_Rules_Determine_the_Term_Symbols_of_the_Ground_Electronic_States -->
# Hund's Rules Determine the Term Symbols of the Ground Electronic States

## Learning Objectives {section:objectives}

- Define Hund three rules
- Use Hunds three rules to predict the lowest energy configuration and term symbols for multi-electron systems

The Aufbau section discussed how that electrons fill the lowest energy orbitals first, and then move up to higher energy orbitals only after the lower energy orbitals are full. However, there a problem with this rule. Certainly, 1s orbitals should be filled before 2s orbitals, because the 1s orbitals have a lower value of n, and thus a lower energy. What about the three different 2p orbitals? In what order should they be filled? The answer to this question involves Hund's rule, which make a lot more sense in the context of generated term symbols that are used to combine the various $L$ and $S$ values represent vector additions of possible microstates.

## Hund’s Rules

1. State with the largest value of $S$ is most stable and stability decreases with decreasing $S$.
2. For states with same values of $S$, the state with the largest value of $L$ is the most stable.
3. If states have same values of $L$ and $S$ then, for a subshell that is less than half filled, state with smallest $J$ is most stable; for subshells that are more than half filled, state with largest value of $J$ is most stable.

:::example {ex:8.10.1}

Rank these terms associated with an electronic configuration of an atom based on energy (via Hund's rules):

$^3D$, $^3P$, $^3S$, $^1D$, $^1P$, $^1S$
:::

### Hund's First Rule (Maximize Spin Multiplicity)

According to the first rule, electrons always enter an empty orbital before they pair up. Electrons are negatively charged and, as a result, they repel each other. Electrons tend to minimize repulsion by occupying their own orbitals, rather than sharing an orbital with another electron. Furthermore, quantum-mechanical calculations have shown that the electrons in singly occupied orbitals are less effectively screened or shielded from the nucleus.

> FIGURE {fig:8.10.1} src=media/141705-153676776143840322.jpg
> alt: 153676776143840322.jpg
> caption: Origin of Hund's First Rule. Hund's first rule is that for a given electron configuration, a state in which the spins are unpaired has lower total energy than one in which the spins are paired.

There's a Coulomb repulsion between two electrons to put them in the same orbital (a spin pairing energy often discussed in Crystal Field Theory). However, there's also a quantum mechanical effect. The *exchange energy* (which is favorable) increases with the number of possible exchanges between electrons with the same spin and energy. In transitioning from the top state to the middle state of Figure 8.10.1, we remove the Coulomb repulsion between electrons in the same orbital. Moreover, In transitioning from the middle state to the bottom state (most stable state predicted by Hund's first rule), we *gain* the *exchange energy*, because these two electrons are indistinguishable.

### Hund's Second Rule (Maximize Orbital Angular Multiplicity)

What matters is the total (scalar) angular momentum, not the direction. The negative and positive signs refer only to the direction of the angular momentum, not the magnitude. The direction is furthermore arbitrary (except in, say, a magnetic or electric field). So is the spin direction, incidentally. By convention we usually draw the first electron in each orbital as "up" (positive spin). However we could just as easily draw it "down". It makes no difference - in the absence of an external EM field, the energy is the same, if only because molecules/atoms are rotating with respect to the lab frame anyway. "Up" and "down", in other words, is artificial. What matters is the *relative* momentum vectors of the various electrons in the system, and hence their sum total.

### Hund's Third Rule (Minimize less than half filled or maximize greater than half filled shells)

A long time ago someone offering a reasonably simple explanation related to the fact that when the shell is more than half full, it's easier to visualize the system as an interaction between the spin and orbital momenta of holes rather than electrons, in which case the energetic stabilization term is reversed in sign. This would be because the spin angular momentum of a single hole would be opposite in sign compared to the spin angular momentum of a single electron. Taking as an example - the three p-orbitals. A situation with 1 electron and 5 electrons are functionally similar, except that one has a single electron and one has a single hole. All things being equal, the total spin angular momentum of the 1 electron system would be opposite in sign to whatever the total spin angular momentum of the 5 electron system is. So the expectations for Hund's rules would be switched. You can kind of see this if you draw out all the microstates of the 1-electron and 5-electron configurations: the everything is pretty much changed in sign in the latter case.

:::example {ex:8.10.2}

What terms and levels can arise from an atom with the ground-state configuration of $1s^22s^22p^6 3s^2 3p^6 4s^2 4p^1 3d^1$? Which is the most stable (lowest in energy) state?

**Solution**

Possible states include:

$^1F_3$, $^1D_2$, $^1P_1$, $^3F_4$, $^3F_3$, $^3F_2$, $^3D_3$, $^3D_2$, $^3D_1$, $^3P_2$, $^3P_1$, $^3P_0$.

There are two unpaired electrons in this system from the electron configuration.

- Rule 1 predicts that the ground state will be a triplet with $S=1$ so $2S+1=3$. So the ground state is from this more narrowed list: $^3F_4$, $^3F_3$, $^3F_2$, $^3D_3$, $^3D_2$, $^3D_1$, $^3P_2$, $^3P_1$, $^3P_0$.
- Rule 2 predicts a $F$ state since that is the highest multiplicity with $L= 3$: So the ground state is from this more narrowed list: $^3F_4$, $^3F_3$, $^3F_2$
- Rule 3 predicts the lowest $J$ term since the d shell is less than half full. That is the $J=2$ state.

Therefore for this system, the atom will have a ground-state structure of

$^3F_2$
:::

:::example {ex:8.10.3} Titanium cation

The ground configuration of a $\ce{Ti^{2+}}$ ion is $[Ar]3d^2$. What is the term of lowest energy state?

**Solution**

- Rule 1: two unpaired electrons ⇒ highest S = 1 ⇒ 2S + 1 = 3
- Rule 2: two in d in parallel spin ⇒ highest L = 1 + 2 = 3 ⇒ 3F
- Rule 3:.L = 3, S = 1 ⇒ J = 4, 3, 2; less than half-filled ⇒ $^3F_2$
:::

:::exercise {exr:8.10.3}

What is the term of lowest energy state for the following atoms and ions.

- $\ce{C}$: $[He]2s^2 2p^2$
- $\ce{N}$: $[He]2s^2 2p^3$
- $\ce{O}$: $[He]2s^2 2p^4$
- $\ce{Cr^{3+}}$: $[Ar]3d^3$
- $\ce{Mn^{3+}}$: $[Ar]3d^4$
- $\ce{Fe^{3+}}$: $[Ar]3d^5$

**Answer**

$^3P_0$, $^4S_{3/2}$, $^3P_2$, $^4F_{3/2}$, $^5D_0$, and $^6S_{5/2}$, respectively.
:::
