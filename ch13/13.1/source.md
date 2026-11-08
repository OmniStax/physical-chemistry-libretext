<!-- LibreTexts page 2398: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13:_Molecular_Spectroscopy/13.01:_The_Electromagnetic_Spectrum -->
# The Electromagnetic Spectrum

An important aspect of studying Physical Chemistry is to be able to recognize the interaction of molecules to the surroundings. Molecular Spectroscopy provides a clear image of how diatomic and polyatomic molecules interact by looking at the Frequency, Wavelength, Wave number, Energy, and molecular process. We will also be able to see the absorption properties of molecules in various regions from the electromagnetic spectrum.

## Electromagnetic Radiation

Electromagnetic radiation—light—is a form of energy whose behavior is described by the properties of both waves and particles. Some properties of electromagnetic radiation, such as its refraction when it passes from one medium to another are explained best by describing light as a wave. Other properties, such as absorption and emission, are better described by treating light as a particle. The exact nature of electromagnetic radiation remains unclear, as it has since the development of quantum mechanics in the first quarter of the 20<sup>th</sup> century. Nevertheless, the dual models of wave and particle behavior provide a useful description for electromagnetic radiation.

Electromagnetic radiation consists of oscillating electric and magnetic fields that propagate through space along a linear path and with a constant velocity. In a vacuum electromagnetic radiation travels at the speed of light, $c$, which is $2.997 92 \times 10^8\, m/s$. When electromagnetic radiation moves through a medium other than a vacuum its velocity, $v$, is less than the speed of light in a vacuum. The difference between $v$ and $c$ is sufficiently small (<0.1%) that the speed of light to three significant figures, $3.00 \times 10^8\, m/s$, is accurate enough for most purposes.

The oscillations in the electric and magnetic fields are perpendicular to each other, and to the direction of the wave’s propagation. Figure 13.1.1 shows an example of plane-polarized electromagnetic radiation, consisting of a single oscillating electric field and a single oscillating magnetic field.

> FIGURE {fig:13.1.1} src=media/12686-Figure10.02.jpg width=403.991px
> alt: Diagram illustrating an electromagnetic wave, showing the electric field oscillating perpendicular to the direction of propagation.
> caption: Plane-polarized electromagnetic radiation showing the oscillating electric field in red and the oscillating magnetic field in blue. The radiation’s amplitude, A, and its wavelength, λ, are shown. Normally, electromagnetic radiation is unpolarized, with oscillating electric and magnetic fields present in all possible planes perpendicular to the direction of propagation.

An electromagnetic wave is characterized by several fundamental properties, including its velocity, amplitude, frequency, phase angle, polarization, and direction of propagation.<sup>2</sup> For example, the amplitude of the oscillating electric field at any point along the propagating wave is

$$ A_\ce{t} = A_\ce{e}\sin(2πνt + \phi) $$

where $A_t$ is the magnitude of the electric field at time $t$, $A_e$ is the electric field’s maximum {term:amplitude}, $\nu$ is the wave’s {term:frequency}—the number of oscillations in the electric field per unit time—and $\phi$ is a {term:phase angle}, which accounts for the fact that $A_t$ need not have a value of zero at $t = 0$. The identical equation for the magnetic field is

$$ A_\ce{t} =A_\ce{m}\sin(2πνt + \phi) $$

where $A_m$ is the magnetic field’s maximum amplitude.

The frequency and wavelength of electromagnetic radiation vary over many orders of magnitude. For convenience, we divide electromagnetic radiation into different regions—the {term:electromagnetic spectrum}—based on the type of atomic or molecular transition that gives rise to the absorption or emission of photons (Figure 13.1.2). The boundaries between the regions of the electromagnetic spectrum are not rigid, and overlap between spectral regions is possible.

> FIGURE {fig:13.1.2} src=media/411190-Figure10.03.jpg width=891px
> alt: Diagram illustrating the electromagnetic spectrum, highlighting wavelengths and specific atomic and molecular transitions.
> caption: The electromagnetic spectrum showing the boundaries between different regions and the type of atomic or molecular transition responsible for the change in energy. The colored inset shows the visible spectrum. Source: modified from Zedh (www.commons.Wikipedia.org).

## Other Units

Other properties also are useful for characterizing the wave behavior of electromagnetic radiation. The {term:wavelength}, λ, is defined as the distance between successive maxima (Figure 13.1.1). For ultraviolet and visible electromagnetic radiation the wavelength is usually expressed in nanometers (1 nm = 10<sup>–9</sup> m), and for infrared radiation it is given in microns (1 μm = 10<sup>–6</sup> m). The relationship between wavelength and frequency is

$$ λ = \dfrac{c}{ν} $$

Another unit useful unit is the {term:wavenumber}, $\tilde{ν}$, which is the reciprocal of wavelength

$$ \tilde{ν} = \dfrac{1}{λ} $$

Wavenumbers are frequently used to characterize infrared radiation, with the units given in cm<sup>–1</sup>.

:::example {ex:13.1.1}

In 1817, Josef Fraunhofer studied the spectrum of solar radiation, observing a continuous spectrum with numerous dark lines. Fraunhofer labeled the most prominent of the dark lines with letters. In 1859, Gustav Kirchhoff showed that the D line in the sun’s spectrum was due to the absorption of solar radiation by sodium atoms. The wavelength of the sodium D line is 589 nm. What are the frequency and the wavenumber for this line?

**Solution**

The frequency and wavenumber of the sodium D line are

$$ ν = \dfrac{c}{λ} = \mathrm{\dfrac{3.00×10^8\: m/s}{589×10^{−9}\: m} = 5.09×10^{14}\: s^{−1}} $$

$$ \tilde{ν} = \dfrac{1}{λ} = \mathrm{\dfrac{1}{589×10^{−9}\: m} × \dfrac{1\: m}{100\: cm} = 1.70×10^4\: cm^{−1}} $$
:::

:::exercise {exr:13.1.1}

Another historically important series of spectral lines is the Balmer series of emission lines form hydrogen. One of the lines has a wavelength of 656.3 nm. What are the frequency and the wavenumber for this line?
:::

Above, we defined several characteristic properties of electromagnetic radiation, including its energy, velocity, amplitude, frequency, phase angle, polarization, and direction of propagation. A spectroscopic measurement is possible only if the photon’s interaction with the sample leads to a change in one or more of these characteristic properties. We can divide spectroscopy into two broad classes of techniques. In one class of techniques there is a transfer of energy between the photon and the sample. Table 13.1.1 provides a list of several representative examples.

> TABLE {tab:1} cols=3 irregular
> caption: Table 13.1.1: Examples of Spectroscopic Techniques Involving an Exchange of Energy Between a Photon and the Sample

| Type of Energy Transfer | Region of Electromagnetic Spectrum | Spectroscopic Technique |
| absorption | γ-ray | Mossbauer spectroscopy |
|  | X-ray | X-ray absorption spectroscopy |
|  | UV/Vis | UV/Vis spectroscopy<br>atomic absorption spectroscopy |
|  | IR | infrared spectroscopy<br>raman spectroscopy |
|  | Microwave | microwave spectroscopy |
|  | Radio wave | electron spin resonance spectroscopy<br>nuclear magnetic resonance spectroscopy |
| emission (thermal excitation) | UV/Vis | atomic emission spectroscopy |
| photoluminescence | X-ray | X-ray fluorescence |
|  | UV/Vis | fluorescence spectroscopy<br>phosphorescence spectroscopy<br>atomic fluorescence spectroscopy |
| chemiluminescence | UV/Vis | chemiluminescence spectroscopy |

Electromagnetic spectrum provides clearly information of molecules if they are rotational transitions, vibrational transitions, or electronic transitions. A molecule or a set of molecules can be read by the absorption of microwave radiation which provides transitions between rotational energy levels. In addition, if the molecules absorbs infrared radiation provides the transitions between vibrational levels follows by transitions between rotational energy levels. Finally, when molecules absorbs visible and ultraviolet radiation gives transitions between electronic energy levels follows by simultaneous transitions between vibrational and rotational levels.

When given the energy level of the molecules along with wavelength, we can easily figure the frequency of the molecules where they fall in the electromagnetic spectrum regions:

$$ \Delta E=E_u-E_l=h \nu $$

The above equation describes the energy change between upper state and lower state of energy.

- Frequency falls between 10<sup>9</sup> - 10<sup>11</sup> which is in the microwave range correlates to the rotation of polyatomic molecules.
- Frequency falls between 10<sup>11</sup> - 10<sup>13</sup> which is in the far infrared range correlates to the rotation of small molecules.
- Frequency falls between 10<sup>13</sup> - 10<sup>14</sup> which is in the infrared range correlates to the vibrations of flexible bonds.
- Frequency falls between 10<sup>14</sup> - 10<sup>16</sup> which is in the visible and ultraviolet range correlates to the electronic transitions.

The powerful technique of figuring out the the frequency of the molecules can help us determine the bond length, temperature, probability distribution as you will learn later on from the degree of freedoms and how the process is undergo in specific a reaction.
