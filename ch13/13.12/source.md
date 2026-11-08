<!-- LibreTexts page 13675: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13:_Molecular_Spectroscopy/13.12:_The_Selection_Rule_for_the_Rigid_Rotor -->
# The Selection Rule for the Rigid Rotor

A {term:selection rule} describes how the probability of transitioning from one level to another cannot be {term:zero}. It has two sub-pieces: a {term:gross selection rule} and a {term:specific selection rule}. A gross selection rule illustrates characteristic requirements for atoms or molecules to display a spectrum of a given kind, such as an IR spectroscopy or a microwave spectroscopy. Once the atom or molecules follow the gross selection rule, the specific selection rule must be applied to the atom or molecules to determine whether a certain transition in quantum number may happen or not.

Selection rules specify the possible transitions among quantum levels due to absorption or emission of electromagnetic radiation. Incident electromagnetic radiation presents an oscillating electric field $E_0\cos(\omega t)$ that interacts with a transition dipole. The dipole operator is $\mu = e \cdot r$ where $r$ is a vector pointing in a direction of space.

A dipole moment of a given state is

$$ \mu_z=\int\Psi_1 \,^{*}\mu_z\Psi_1\,d\tau $$

A transition dipole moment is a transient dipolar polarization created by an interaction of electromagnetic radiation with a molecule

$$ (\mu_z)_{12}=\int\Psi_1 \,^{*}\mu_z\Psi_2\,d\tau $$

In an experiment we present an electric field along the z axis (in the laboratory frame) and we may consider specifically the interaction between the transition dipole along the x, y, or z axis of the molecule with this radiation. If $\mu_z$ is zero then a transition is forbidden. The selection rule is a statement of when $\mu_z$ is non-zero.

> The selection rule is a statement of when $\mu_z$ is non-zero.

## Rotational transitions

We can use the definition of the transition moment and the spherical harmonics to derive selection rules for a rigid rotator. Once again we assume that radiation is along the z axis.

$$ (\mu_z)_{J,M,{J}',{M}'}=\int_{0}^{2\pi } \int_{0}^{\pi }Y_{J'}^{M'}(\theta,\phi )\mu_zY_{J}^{M}(\theta,\phi)\sin\theta\,d\phi,d\theta $$

Notice that m must be non-zero in order for the transition moment to be non-zero. This proves that a molecule must have a permanent dipole moment in order to have a rotational spectrum. The spherical harmonics can be written as

$$ Y_{J}^{M}(\theta,\phi)=N_{\,JM}P_{J}^{|M|}(\cos\theta)e^{iM\phi} $$

where $N_{JM}$ is a normalization constant. Using the standard substitution of $x = \cos q$ we can express the rotational transition moment as

$$ (\mu_z)_{J,M,{J}',{M}'}=\mu\,N_{\,JM}N_{\,J'M'}\int_{0}^{2 \pi }e^{I(M-M')\phi}\,d\phi\int_{-1}^{1}P_{J'}^{|M'|}(x)P_{J}^{|M|}(x)dx $$

The integral over f is zero unless M = M' so $\Delta M =$ 0 is part of the rigid rotator selection rule. Integration over $\phi$ for $M = M'$ gives $2\pi$ so we have

$$ (\mu_z)_{J,M,{J}',{M}'}=2\pi \mu\,N_{\,JM}N_{\,J'M'}\int_{-1}^{1}P_{J'}^{|M'|}(x)P_{J}^{|M|}(x)dx $$

We can evaluate this integral using the identity

$$ (2J+1)x\,P_{J}^{|M]}(x)=(J-|M|+1)P_{J+1}^{|M|}(x)+(J-|M|)P_{J-1}^{|M|}(x) $$

Substituting into the integral one obtains an integral which will vanish unless $J' = J + 1$ or $J' = J - 1$.

$$ \int_{-1}^{1}P_{J'}^{|M'|}(x)\Biggr(\frac{(J-|M|+1)}{(2J+1)}P_{J+1}^{|M|}(x)+\frac{(J-|M|)}{(2J+1)}P_{J-1}^{|M|}(x)\Biggr)dx $$

This leads to the selection rule $\Delta J = \pm 1$ for absorptive rotational transitions. Keep in mind the physical interpretation of the quantum numbers $J$ and $M$ as the total angular momentum and z-component of angular momentum, respectively. As stated above in the section on electronic transitions, these selection rules also apply to the orbital angular momentum ($\Delta{l} = \pm 1$, $\Delta{m} = 0$).
