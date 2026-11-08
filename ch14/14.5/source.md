<!-- LibreTexts page 13640: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/14:_Nuclear_Magnetic_Resonance_Spectroscopy/14.05:_Chemical_Shifts_Depend_upon_the_Chemical_Environment_of_the_Nucleus -->
# Chemical Shifts Depend upon the Chemical Environment of the Nucleus

The chemical shift in NMR is extremely important, as it gives vital information about the local structure surrounding the nucleus of interest. For a majority of scientists, the chemical shift is used exlusivley to determine structure, especially in organic systems. Additional information may be gained by examining the anisotropy of the chemical shift. This section will be devoted to looking at chemical shift from a mathematical standpoint including a full treatment of the chemical shift tensor and the relation to the NMR lineshape.

## The Chemical Shift

The local magnetic field is the field felt by a particular nucleus, where the applied field $B$ induces currents in the electrons surrounding the nucleus give rise to a shielding. The shielding constant is $\sigma$. The local magnetic field is reduced by shielding by a factor $1 - σ$.

$$ B_{loc} = B + δB = (1 – σ)B $$

The chemical shift is the difference between the resonance frequency of a nucleus and that of a standard.

The Larmor frequency of a shielded nucleus is:

$$ ν_L = \dfrac{γB_{loc} }{2π} $$

Chemical shifts are reported on the $\delta$-scale.

$$ δ = \dfrac{ ν – ν_0}{ν_0} \times 10^6 $$

The resonance frequency of the standard is $ν_0$.

The shielding constant is the sum of three contributions.

$$ σ = σ(local) + σ(molecule) + σ(solvent) $$

The local contribution is due to electrons on the atom that contains the nucleus. The molecular contribution is from the rest of the molecule. The solvent contribution is from surrounding solvent molecules.

## The Local Contribution

The local contribution is a sum of both diamagnetic $σ_d$ and paramagnetic $σ_p$ parts. The diamagnetic part arises from circulation of the electrons in response to $B$. The Lamb formula gives the magnitude of $σ_d$,

$$ σ_d = \dfrac{e^2 µ_0}{3m_e } \int _o^∞ ρ(r)r \,dr $$

where $ρ$ is the electron probability density $|Ψ^2|$. $σ_d$ is inversely proportional to the {term:Bohr radius}. The magnetic moment of a current loop is proportional to $a_o^2$ and the magnetic field generated at the nucleus is proportional $\frac{1}{a_o^3}$.

## The Molecular Contribution

The applied magnetic field generates currents in neighboring groups proportional to the magnetic susceptibility $\chi$ of a group. The induced magnetic moment gives rise to a magnetic field that is inversely proportional to the cube of the distance from the nucleus.
