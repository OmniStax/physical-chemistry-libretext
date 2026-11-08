<!-- LibreTexts page 13698: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18:_Partition_Functions_and_Ideal_Gases/18.08:_Rotational_Partition_Functions_of_Polyatomic_Molecules_Depend_on_the_Sphar_of_the_Molecule -->
# Rotational Partition Functions of Polyatomic Molecules Depend on the Sphar of the Molecule

For a polyatomic molecule containing $N$ atoms, the total number of degrees of freedom is $3N$. Out of these, three degrees of freedom are taken up for the translational motion of the molecule as a whole. For nonlinear molecules, there are three rotational degrees of freedom and the $3N – 6$ vibrational degrees. For linear molecules, the rotational motion along the molecular axis is quantum mechanically not meaningful as the rotated configuration is indistinguishable from the original configuration. Therefore, linear molecules have two rotational degrees of freedom and $3N – 5$ vibrational degrees of freedom.

To investigate the rotational motion, we need to fix the center of mass of the molecule and calculate the three principal moments of inertia $I_A$, $I_B$, and $I_C$ of the ellipsoid of inertia. The center of mass is defined as the point for which the following identities hold:

$$ \sum_i m_i x_i = \sum_i m_i y_i = \sum_i m_i z_i $$

The inertia products are defined by:

$$ I_{xx} = \sum_i m_i \left(y_i^2+ z^2_i\right) $$

$$ I_{xy} = \sum_i m_i \left(x_i y_i\right) $$

The other components $I_{yy}$, $I_{xz}$,.. are defined analogously. To find the direction cosines $\alpha_i, \beta_o, \gamma_i$ of the three principle moments of inertia, we need to solve the following matrix equations:

$$ \alpha (I_{xx} - \eta) - \beta I_{xy} - \gamma I_{xz} =0 $$

$$ \alpha I_{xy} - \beta (I_{yy} - \eta) - \gamma I_{yz} = 0 $$

$$ -\alpha I_{xz} - \beta I_{yz} + \gamma (I_{zz} - \eta ) =0 $$

If the off diagonal terms $I_{xy}$ are zero in the above equations, then the $x$, $y$, $z$ axis will be the principal axis. The energy of a rotor with the three moments of inertia $I_A$, $I_B$. and $I_C$ is given by:

$$ \begin{align*} \epsilon &= \dfrac{1}{2} I_A \omega_A^2 + \dfrac{1}{2} I_B \omega_B^2 + \dfrac{1}{2} I_C \omega_C^2 \\[4pt] &= \dfrac{L_A^2}{2I_A} + \dfrac{L_B^2}{2I_B} + \dfrac{L_C^2}{2I_C} \end{align*} $$

Each of the rotational degrees of freedom will have a characteristic rotational temperature in terms of the moment of inertia:

$$ \Theta_{rot,i} = \frac{hbar^2}{2I_ik} \qquad i=A,B,C $$

There are many different shapes of molecules and these shapes affect the rotational behavior of the molecules. Molecules are therefore classified according to symmetry into different groups called tops. The three different tops are:

$$ \text{Spherical top} \qquad \Theta_{rot,A} = \Theta_{rot,B} = \Theta_{rot,C} $$

$$ \text{Symmetric top} \qquad \Theta_{rot,A} = \Theta_{rot,B} \neq \Theta_{rot,C} $$

$$ \text{Asymmetric top} \qquad \Theta_{rot,A} \neq \Theta_{rot,B} \neq \Theta_{rot,C} $$

## Spherical Tops

The spherical top can be solved exactly to give:

$$ E_J = \frac{J(J+1)\hbar^2}{2I} $$

$$ g_J = (2J+1^2) \qquad J=0,1,2,\ldots $$

The rotational partition function is:

$$ \begin{split} q_\text{rot} &= \sum_{J=0}^\infty (2J+1)^2 e^{\hbar^2J(J+1)/2IkT} \\ &= \sum_{J=0}^\infty (2J+1)^2 e^{\Theta_\text{rot}J(J+1)/T} \end{split} $$

For almost all spherical top molecules:

$$ \Theta_\text{rot} \gg T $$

Therefore, we can convert the sum to an integral:

$$ q_\text{rot} = \frac{1}{\sigma}\int_{0}^\infty (2J+1)^2 e^{\Theta_\text{rot}J(J+1)/T} $$

where we have now included the symmetry term, $\sigma$. Solving for this integral, we get:

$$ q_\text{rot} = \frac{\pi^{1/2}}{\sigma}\left(\frac{T}{q_\text{rot}}\right)^{3/2} $$

## Symmetric Tops

Here, $\omega_A$, $\omega_B$, and $\omega_C$ are the three angular speeds and $L_A$, $L_B$, and $L_C$ are the three angular momenta. For a symmetric top molecule such as ammonia, or chloromethane, two components of the moments of inertia are equal, i.e., $I_B = I_C$. The rotational energy levels of such a molecule are specified by two quantum numbers $J$ and $K$. The total angular momentum is determined by $J$ and the component of this angular momentum along the unique molecular axis is determined by $K$. The energy levels are given by:

$$ \epsilon_{J,K} = \tilde{B} J(J+1) + (\tilde{A} - \tilde{B}) K^2 $$

with rotational constants in units of wavenumbers:

$$ \tilde{B} = \dfrac{h}{8\pi^2 c I_B} $$

and:

$$ \tilde{A} = \dfrac{h}{8\pi^2 c I_A} $$

where

- $J$ takes on values $0,1,2,.... \infty$ and
- $K = -J, -J + 1, - J + 2,...0, 1, 2,...J$.

The rotational partition function is given by:

$$ q_{rot} = \dfrac{1}{\sigma} \sum_{J=0}^{\infty} (2J+1) e^{-\tilde{B} J(J+1)/kT} \sum_{K=-J}^{J} (2J+1) e^{\tilde{A} - \tilde{B} )K^2/kT} $$

This can be converted to an integral and the result is:

$$ q_{rot} = \dfrac{ \sqrt{\pi}}{\sigma} \left( \dfrac{8 \pi I_B kT}{h^2} \right) \left( \dfrac{8 \pi I_A kT}{h^2} \right)^{1/2} $$

## Asymmetric Tops

For asymmetric tops, the expressions for rotational energies are more complex and the conversions to integrations are not easy. One can actually calculate the sum of terms using a computer. An intuitive answer can be obtained by integrating over the angular momenta $L_A$, $L_B$ and $L_C$ as:

$$ \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{H(p,q)/kT} \,dL_A \,dL_B \,dL_C = \sqrt{ 2\pi I_A kT} \sqrt{ 2\pi I_B kT} \sqrt{ 2\pi I_C kT} $$

And then multiplying by a factor of $8 π^2 /σ h^3$, we get the rotational partition function. The factor of $8π^2$ accounts for the angular integration. For any axis chosen in a molecule, a complete rotation contributes a factor of $2π$. Integration over all possible orientations of this axis contribute another factor of $4π$. The factor of $h^3$ is for the conversion from the classical phase space to the quantum mechanical phase space.

:::note [note] Symmetry Number

As discussed [previously](page:13698), the {term:symmetry number} $σ$ corrects for overcounting of rotational configurations. If the molecule has no center of symmetry (e.g. $\ce{HCN}$) $\sigma = 1$ whereas if the molecule has a center of symmetry (e.g. $\ce{CO2}$) then $\sigma = 2$.
:::

The final result is:

$$ q_{rot} = \dfrac{\pi^2}{\sigma} \sqrt{\dfrac{8 \pi I_A kT}{h^2}} \sqrt{\dfrac{8 \pi I_B kT}{h^2}} \sqrt{\dfrac{8 \pi I_C kT}{h^2}} $$ {eq:big0} n=1

:::note [note] Classical Derivation (Optional)

We can explicitly obtain the classical rotational partition function of an asymmetric top by writing the classical expression for the rotational energy in terms of the Euler angles. The orientation of a rigid rotor can be specified by there Euler angles $θ$, $φ$, and $ψ$ with the ranges of angles $0$ to $π$, $0$ to $2π$ and $0$ to $2π$ respectively. The rotational Hamiltonian for the kinetic energy can be written in terms of the angles and their conjugate momenta ( $p_{\theta}$, $p_{\phi}$, $p_{\psi}$)

$$ H = \dfrac{\sin^2 \psi}{2I_A} \left( p_{\theta} - \dfrac{\cos \psi}{\sin \theta \sin \psi} ( p_{\phi} - \cos \theta p_{\psi} ) \right)^2 $$

$$ + \dfrac{\cos^2 \psi}{2I_B} \left( p_{\theta} - \dfrac{\sin \psi}{\cos \theta \cos \psi} ( p_{\phi} - \cos \theta p_{\psi} ) \right)^2 + \dfrac{1}{2I_C} p_{\psi}^2 $$

The classical rotational partition function is given by

$$ q_{rot} = \int_{-\infty}^ {\infty} \int_{-\infty}^ {\infty} \int_{-\infty}^ {\infty} \int_{0}^ {\pi} \int_{0}^ {2\pi} \int_{0}^ {2\pi} \dfrac{1}{h^3} e ^{-H(p,q)/kT} dp_{\theta}\, dp_{\phi} \, dp_{\psi} \,d \theta \,d \phi \,d \psi $$

The integrations can be simplified by rewriting $H(p,q) / kT$ as

$$ \dfrac{H}{kT} = \dfrac{1}{2I_AkT} \left( \dfrac{\sin^2 \psi}{I_A} + \dfrac{\cos^2 \psi}{I_B} \right) \left( p_{\theta} + \left( \dfrac{1}{I_B} - \dfrac{1}{I_A} \right) \dfrac{\sin \psi \cos \psi}{\sin \theta \left(\dfrac{\sin^ \psi}{I_A} + \dfrac{\cos^2 \psi}{I_B} \right) } (p_{\phi} - \cos \theta p_{\psi}) \right)^2 $$

$$ + \dfrac{1}{2 kT I_AI_B \sin^2 \theta} \left( \dfrac{1}{\sin \theta \left(\dfrac{\sin^ \psi}{I_A} + \dfrac{\cos^2 \psi}{I_B} \right) } (p_{\phi} - \cos \theta p_{\psi}) \right)^2 + \dfrac{1}{2KT I_c} p^2_{\psi} $$

Using the following integral,

$$ \int_{-\infty}^ {\infty} e^{-a(x+b)^2} dx = \int_{-\infty}^{\infty} e ^{-ax^2} dx = \sqrt{\dfrac{\pi}{a}} $$

Integration over $p_θ$ gives using the above expression

$$ \sqrt{ 2 \pi kT} \left( \dfrac{\sin^2 \psi}{I_A} + \dfrac{\cos^2 \psi}{I_B} \right)^{-1/2} $$ {eq:SA1} n=2

Integration over $p_φ$ gives the factor,

$$ \sqrt{ 2 \pi kT I_AI_B} \sin \theta \left( \dfrac{\sin^2 \psi}{I_A} + \dfrac{\cos^2 \psi}{I_B} \right)^{1/2} $$

This cancels partly the second square root in Equation [ref:eq:SA1]. Integration over $p_ψ$ gives the factor

$$ \sqrt{2 \pi k T I_c} $$

Integration over $θ$, $φ$ and $ψ$ gives a factor of $8 π^ 2$.

$$ \int _0^{\pi} \sin \theta \,d\theta =2 $$

$$ \int_0^{2\pi} d\phi = 2 \pi $$

$$ \int_0^{2\pi} d \psi = 2\pi $$

Combining all the integrals, we finally get Equation [ref:eq:big0] after reintroduced the symmetry number $σ$ as before with diatomic molecular rotation.
:::

We can simplify calculations by defining {term:characteristic rotational temperatures} for each axis of rotational:

$$ \Theta _A = \dfrac{h^2}{8 \pi^2 I_A k} $$

$$ \Theta _B = \dfrac{h^2}{8 \pi^2 I_B k} $$

$$ \Theta_C = \dfrac{h^2}{8 \pi^2 I_C k} $$

The polyatomic rotational partition function expressed in Equation [ref:eq:big0] can then be re-expressed as:

$$ q_{rot} = \dfrac{\sqrt{\pi}}{\sigma}\sqrt{\dfrac{T^3}{ \Theta_A \Theta_B \Theta_C }} $$ {eq:RotQ1} n=3

or alternatively:

$$ \ln q_{rot} = \dfrac{1}{2} \ln \dfrac{\pi T}{ \Theta_A \Theta_B \Theta_C \sigma^2} $$

:::example {ex:?} Example: Nitrogen Dioxide

The three characteristic rotational temperatures for $\ce{NO_2}$ are $111.5\, K$, $0.624\, K$ and $0.590\, K$. Calculate the rotational partition function at 300 K.

**Solution**

The rotational temperature is given by Equation [ref:eq:RotQ1]:

$$ q_{rot} = \dfrac{\sqrt{\pi}}{\sigma} \sqrt{\dfrac{T^3}{ \Theta_A \Theta_B \Theta_C }} $$

The rotational partition function becomes,

$$ q_{rot} = \dfrac{1.772}{2} \sqrt{\dfrac{300\; K}{ (11.5\; K)(0.624\,K) ( 22.55\;K)}} = 2242.4 $$
:::

## Thermodynamics Properties

The molar thermodynamic functions can be readily calculated including average rotation energy and molar heat capacity:

$$ E_{rot} = \dfrac{3}{2} RT $$

and:

$$ \bar{C_V}= \dfrac{3}{2} R $$

Improvements over the classical approximation for the rotational partition function derived above have been obtained. One of the improved versions (with no derivation) is:

$$ q_{rot} = q_{rot}^0 \left[ 1+ \dfrac{h^2}{96 \pi^2 kT} \left( \dfrac{2}{I_A} + \dfrac{2}{I_C} + \dfrac{2}{I_C} + \dfrac{I_C}{I_BI_B} - \dfrac{I_A}{I_BI_C} - \dfrac{I_B}{I_AI_C} \right) \right] $$

where $q_{rot}^0$ is the classical approximation in Equation [ref:eq:big0].

Comparing this result with the vibrational partition function calculation before ($q_{vib} = 1.0035$), give the implication that while multiple rotational states are accessible at room temperature, very few vibrational states (other than the ground vibrational state) are accessible.

## Contributors and Attributions {section:attributions}

- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
