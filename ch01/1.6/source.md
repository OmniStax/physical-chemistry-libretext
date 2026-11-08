<!-- LibreTexts page 13386: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/01:_The_Dawn_of_the_Quantum_Theory/1.06:_Matter_Has_Wavelike_Properties -->
# Matter Has Wavelike Properties

## Learning Objectives {section:objectives}

- To introduce the wave-particle duality of light extends to matter
- To describe how matter (e.g., electrons and protons) can exhibit wavelike properties, e.g., interference and diffraction patterns
- To use algebra to find the de Broglie wavelength or momentum of a particle when either one of these quantities is given

The next real advance in understanding the atom came from an unlikely quarter - a student prince in Paris. Prince Louis de Broglie was a member of an illustrious family, prominent in politics and the military since the 1600's. Louis began his university studies with history, but his elder brother Maurice studied x-rays in his own laboratory, and Louis became interested in physics. After World War I, de Broglie focused his attention on Einstein's two major achievements, the theory of special relativity and the quantization of light waves. He wondered if there could be some connection between them. Perhaps the quantum of radiation really should be thought of as a particle. De Broglie suggested that if waves (photons) could behave as particles, as demonstrated by the photoelectric effect, then the converse, namely that particles could behave as waves, should be true. He associated a wavelength $\lambda$ to a particle with momentum $p$ using Planck's constant as the constant of proportionality:

$$ \lambda =\dfrac{h}{p} $$ {eq:1.6.1} n=1

which is called the {term:de Broglie wavelength}. The fact that particles can behave as waves but also as particles, depending on which experiment you perform on them, is known as the {term:wave-particle duality}.

:::note [note] Deriving the de Broglie Wavelength

From the discussion of the photoelectric effect, we have the first part of the particle-wave duality, namely, that electromagnetic waves can behave like particles. These particles are known as *photons*, and they move at the speed of light. Any particle that moves at or near the speed of light has kinetic energy given by Einstein's [special theory of relatively](https://phys.libretexts.org/TextBooks_and_TextMaps/Relativity/Book%3A_Special_Relativity_(Crowell)). In general, a particle of mass $m$ and momentum $p$ has an energy

$$ E=\sqrt{p^2 c^2+m^2 c^4} $$ {eq:1.6.2} n=2

Note that if $p=0$, this reduces to the famous rest-energy expression $E=mc^2$. However, photons are massless particles (technically rest-massless) that always have a finite momentum $p$. In this case, Equation [ref:eq:1.6.2] becomes

$$ E=pc. $$

From Planck's hypothesis, one quantum of electromagnetic radiation has energy $E=h\nu$. Thus, equating these two expressions for the kinetic energy of a photon, we have

$$ h\nu =\dfrac{hc}{\lambda}=pc $$ {eq:1.6.4} n=3

Solving for the wavelength $\lambda$ gives Equation [ref:eq:1.6.1]:

$$ \lambda=\dfrac{h}{p}= \dfrac{h}{mv} $$

where $v$ is the velocity of the particle. Hence, de Broglie argued that if particles can behave as waves, then a relationship like this, which pertains particularly to waves, should also apply to particles.
:::

Equation [ref:eq:1.6.1] allows us to associate a wavelength $\lambda$ to a particle with momentum $p$. As the momentum increases, the wavelength decreases. In both cases, this means the energy becomes larger. i.e., short wavelengths *and* high momenta correspond to high energies.

> It is a common feature of quantum mechanics that particles and waves with short wavelengths correspond to high energies and vice versa.

Having decided that the photon might well be a particle with a rest mass, even if very small, it dawned on de Broglie that in other respects it might not be too different from other particles, especially the very light electron. In particular, maybe the electron also had an associated wave. The obvious objection was that if the electron was wavelike, why had no diffraction or interference effects been observed? But there was an answer. If de Broglie's relation between momentum and wavelength also held for electrons, the wavelength was sufficiently short that these effects would be easy to miss. As de Broglie himself pointed out, the wave nature of light is not very evident in everyday life. As the next section will demonstrate, the validity of de Broglie’s proposal was confirmed by electron diffraction experiments of G.P. Thomson in 1926 and of C. Davisson and L. H. Germer in 1927. In these experiments it was found that electrons were scattered from atoms in a crystal and that these scattered electrons produced an interference pattern. These diffraction patterns are characteristic of wave-like behavior and are exhibited by both electrons (i.e., matter) and electromagnetic radiation (i.e., light).

:::example {ex:1.6.1} Electron Waves

Calculate the de Broglie wavelength for an electron with a kinetic energy of 1000 eV.

**Solution**

To calculate the de Broglie wavelength (Equation [ref:eq:1.6.1]), the momentum of the particle must be established and requires knowledge of both the mass and velocity of the particle. The mass of an electron is $9.109383 \times 10^{−28}\; g$ and the velocity is obtained from the given kinetic energy of 1000 eV:

$$ \begin{align*} KE &= \dfrac{mv^2}{2} \\[4pt] &= \dfrac{p^2}{2m} = 1000 \;eV \end{align*} $$

Solve for momentum

$$ p = \sqrt{2 m KE} $$

convert to SI units

$$ p = \sqrt{(1000 \; \cancel{eV}) \left( \dfrac{1.6 \times 10^{-19} \; J}{1\; \cancel{ eV}} \right) (2) (9.109383 \times 10^{-31}\; kg)} $$

expanding definition of joule into base SI units and cancel

$$ \begin{align*} p &= \sqrt{(3.1 \times 10^{-16} \;kg \cdot m^2/s^2 ) (9.109383 \times 10^{-31}\; kg)} \\[4pt] &= \sqrt{ 2.9 \times 10^{-40 }\, kg^2 \;m^2/s^2 } \\[4pt] &= 1.7 \times 10^{-23} kg \cdot m/s \end{align*} $$

Now substitute the momentum into the equation for de Broglie's wavelength (Equation [ref:eq:1.6.1]) with Planck's constant ($h = 6.626069 \times 10^{−34}\;J \cdot s$). After expanding units in Plank's constant

$$ \begin{align*} \lambda &=\dfrac{h}{p} \\[4pt] &= \dfrac{6.626069 \times 10^{−34}\;kg \cdot m^2/s}{1.7 \times 10^{-23} kg \cdot m/s} \\[4pt] &= 3.87 \times 10^{-11}\; m \\[4pt] &=38.9\; pm \end{align*} $$
:::

:::exercise {exr:1.6.1} Baseball Waves

Calculate the de Broglie wavelength for a fast ball thrown at 100 miles per hour and weighing 4 ounces. Comment on whether the wave properties of baseballs could be experimentally observed.

**Answer**

Following the unit conversions below, a 4 oz baseball has a mass of 0.11 kg. The velocity of a fast ball thrown at 100 miles per hour in m/s is 44.7 m/s.

$$ m = \left(4 \; \cancel{oz}\right)\left(\frac{0.0283 \; kg}{1 \; \cancel{oz}}\right) = 0.11 kg $$

$$ v = \left(\frac{100 \; \cancel{mi}}{\cancel{hr}}\right) \left(\frac{1609.34 \; m}{\cancel{mi}}\right) \left( \frac{1 \; \cancel{hr}}{3600 \; s}\right) = 44.7 \; m/s $$

The de Broglie wavelength of this fast ball is:

$$ \lambda = \frac{h}{mv} = \frac{6.626069 \times 10^{-34}\;kg \cdot m^2/s}{(0.11 \; kg)(44.7 \;m/s)} = 1.3 \times 10^{-34} m $$
:::

:::exercise {exr:1.6.2} Electrons vs. Protons

If an electron and a proton have the same velocity, which would have the longer de Broglie wavelength?

a. The electron
b. The proton
c. They would have the same wavelength

**Answer**

Equation [ref:eq:1.6.1] shows that the de Broglie wavelength of a particle's matter wave is inversely proportional to its momentum (mass times velocity). Therefore the smaller mass particle will have a smaller momentum and longer wavelength. The electron is the lightest and will have the longest wavelength.
:::

This was the prince's Ph.D. thesis, presented in 1924. His thesis advisor was somewhat taken aback, and was not sure if this was sound work. He asked de Broglie for an extra copy of the thesis, which he sent to Einstein. Einstein wrote shortly afterwards: *"I believe it is a first feeble ray of light on this worst of our physics enigmas*" and the prince got his Ph.D.
