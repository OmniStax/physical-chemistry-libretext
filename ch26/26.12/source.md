<!-- LibreTexts page 14533: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26:_Chemical_Equilibrium/26.12:_Activities_are_Important_for_Ionic_Species -->
# Activities are Important for Ionic Species

### Weak electrolytes

We have seen that strong electrolytes are non-ideal even at tiny concentrations and that even the Debye-Hückel theory only allowed us to work at very small concentrations of strong electrolytes. The same problems are encountered with weak electrolytes but they are compounded by the equilibrium that is inherent to their solutions. Take acetic acid as in household vinegar:

$$ HAc + H_2O \rightleftharpoons Ac^- + H_3O^+ $$

We can write the equilibrium constant as:

$$ K = \dfrac{a_{Ac^-} a_{H_3O^+}}{a_{HAc}a_{H_2O}} $$

As

$$ a_{H2O}=1 $$

$$ K = \dfrac{a_{Ac-} a_{H_3O^+}}{a_{HAc}} $$

At an initial concentration of say 0.1 mol/l the activity coefficient for HAc (being a *neutral* species) is essentially one, but for the other species we should write:

$$ (a_{Ac^-} a_{H_3O^+})= [Ac^-][H_3O^+]γ_±^2 $$

The value of $γ_±^2$ is *not* unity and this will affect the equilibrium. In first approximation we will ignore that fact and write:

$$ K = \dfrac{ [Ac^-][H_3O^+]}{[HAc]} = 1.74 \times 10^{-5} $$

(We can either write [mol.l] as dimensions or drop them, depending on whether we are talking about K or K<sub>c</sub>)

At equilibrium we would get:

$$ K = \dfrac{x^2}{0.1-x} =1.74 \times 10^{-5} $$

which yields

$$ x=1.31 \times 10^{-3} mol/l $$

We can now use Debye-Hückel theory to estimate the means ionic activity coefficient but the concentrations are already to high for that. Instead we will use one of its extensions:

$$ \ln γ_± = - 1.173|z_+z_-| \dfrac{\sqrt{I}}{1+\sqrt{I}} $$

The ionic strength is ½ ([Ac<sup>-</sup>]+[H<sub>3</sub>O<sup>+</sup>]) =x

Although we do not know x precisely the value we have is at least a starting point. We can use it to calculate a first approximation for γ<sub>±</sub><sup>2</sup>. We find a value of 0.921. We then divide the value of K by this value and recalculate x. It changes from x=1.31 10<sup>-3</sup> mol/l to x=1.365 10<sup>-3</sup> mol/l. Now we can repeat this process until the value of x does not change appreciably anymore (*converges*). This process is called *{term:iteration}*. The final value is about x=1.37 10<sup>-3</sup> mol/l.

As can be seen the non-ideality does change the values from the ones you would have calculated before entering this course, but the difference is not staggering, at least if no other solutes are present.

> TABLE {tab:1} cols=1

| *Question*: does the equilibrium change if we add 0.5 mol/l NaCl to the solution? |
| --- |

## Solubility products

For solubility products the differences can be more important. Take BaF<sub>2</sub> in water K= 1.7 10<sup>-6</sup>.

$$ K = γ_±^3 [Ba^{2+}][F^-]2 $$

Let's start by assuming ideality and say that γ<sub>±</sub><sup>3</sup>=1 and say that :[Ba<sup>2+</sup>]=x

$$ [F^-]=2x $$

Thus K= x (4x<sup>2</sup>) so x= 7.52 10<sup>-3</sup> mol/lit

The ionic strength is

$$ I = \dfrac{1}{2}(+2)^2x+(-1)^2x = 3x $$

The extended Debye-Hückel theory gives γ<sub>±</sub> =0.736 this raises x to 0.0102. Repeating the process a few times we find x=0.011. This means an increase of about 30% due to non-ideal behavior for this sparingly soluble salt. Again the presence of other solutes may induce larger effects because they add to the ionic strength.

:::exercise {exr:?} Exercise

Even pure water contains OH<sup>-</sup> and H<sub>3</sub>O<sup>+</sup> ions. The K for this equilibrium is 10<sup>-14</sup>. How does the pH change if we add 0.5 m/lit of a strong electrolyte M<sup>2+</sup> X<sup>2-</sup>? CH 431/Lecture 17/answer2
:::
