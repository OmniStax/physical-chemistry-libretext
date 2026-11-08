<!-- LibreTexts page 433848: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/12:_Group_Theory_-_The_Exploitation_of_Symmetry/12.11:_Reducible_Representations_are_Comprised_of_Irreducible_Representations -->
# Reducible Representations are Comprised of Irreducible Representations

As we saw in the previous section, the complete motion (translations, rotations, and vibrations) of ammonia (NH<sub>3</sub>) can be represented by the following reducible representation:

> TABLE {tab:1} cols=4

| $C_{3v}$ | $E$ | $2C_3$ | $3\sigma_v$ |
| --- | --- | --- | --- |
| $\Gamma$ | $12$ | $0$ | $2$ |

We want to relate the reducible form representation to the irreducible representation. To do this, we use the tabular method. First, create a new table:

> TABLE {tab:2} cols=4

| $C_{3v}$ | $E$ | $2C_3$ | $3\sigma_v$ |
| --- | --- | --- | --- |
| $\Gamma$ | $12$ | $0$ | $2$ |
| $A_1$ |  |  |  |
| $A_2$ |  |  |  |
| $E$ |  |  |  |

We will need the $C_{3v}$ character table for ammonia:

> TABLE {tab:3} cols=3

| $C_{3v}$ | $C_{3}$ | $C_{s}$ |
| --- | --- | --- |
| $A_1$ | $A$ | $A'$ |
| $A_2$ | $A$ | $A"$ |
| $E$ | $E$ | $A'+A"$ |

Fill in each number in our table by using the following equation:

$$ g_c \chi_i X_r $$

> TABLE {tab:4} cols=2

| $g_e$ | Number of operations (order) in the class |
| --- | --- |
| $\chi_i$ | Character of the irreducible representation from the character table |
| $\chi_r$ | Character of the reducible representation from $\Gamma$ |

For example, the top-left value would be:

$$ 1\times 1\times 12=12 $$

Where:

- $1$ is the number of operations in the $E$ class
- $1$ is the character of the irreducible representation
- 9 is the character of the reducible representation

The table becomes:

> TABLE {tab:5} cols=4

| $C_{3v}$ | $E$ | $2C_3$ | $3\sigma_v$ |
| --- | --- | --- | --- |
| $\Gamma$ | $12$ | $0$ | $2$ |
| $A_1$ | $12$ | $0$ | $6$ |
| $A_2$ | $12$ | $0$ | $-6$ |
| $E$ | $24$ | $0$ | $0$ |

Sum up each row:

> TABLE {tab:6} cols=5

| $C_{3v}$ | $E$ | $2C_3$ | $3\sigma_v$ | $\sum$ |
| --- | --- | --- | --- | --- |
| $\Gamma$ | $12$ | $0$ | $2$ |  |
| $A_1$ | $12$ | $0$ | $6$ | $18$ |
| $A_2$ | $12$ | $0$ | $-6$ | $6$ |
| $E$ | $24$ | $0$ | $0$ | $24$ |

Now divide the summed values by the order of the group to obtain the number of times the irreducible representation appears ($n_i$). Ammonia has order $h=6$:

> TABLE {tab:7} cols=6

| $C_{3v}$ | $E$ | $2C_3$ | $3\sigma_v$ | $\sum$ | $n_i=\frac{\sum}{h}$ |
| --- | --- | --- | --- | --- | --- |
| $\Gamma$ | $12$ | $0$ | $2$ |  |  |
| $A_1$ | $12$ | $0$ | $6$ | $18$ | $3$ |
| $A_2$ | $12$ | $0$ | $-6$ | $6$ | $1$ |
| $E$ | $24$ | $0$ | $0$ | $24$ | $4$ |

The reducible representation can be broken down to its irreducible forms:

$$ \Gamma=3 A_1+A_2+4 E $$

Now that we have the irreducible representations for the motion of ammonia, we can determine which are associated with rotations, vibrations, and translations. To start, we turn to the $C_{3v}$ character table:

> TABLE {tab:8} cols=6

| $C_{3v}$ | E | 2C<sub>3</sub> | 3σ<sub>v</sub> |  |  |
| --- | --- | --- | --- | --- | --- |
| A<sub>1</sub> | 1 | 1 | 1 | z | x<sup>2</sup>+y<sup>2</sup>, z<sup>2</sup> |
| A<sub>2</sub> | 1 | 1 | -1 | R<sub>z</sub> |  |
| E | 2 | -1 | 0 | (R<sub>x</sub>, R<sub>y</sub>), (x,y) | (xz, yz) (x<sup>2</sup>-y<sup>2</sup>, xy) |

The first column to the right of the characters includes to the terms $x$, $y$, $z$, $R_x$, $R_y$, and $R_z$. The rows with $x$, $y$, and $z$ represent the irreducible representations for the translational modes in those directions:

$$ \Gamma_\text{trans} = A_1 + E $$

The rows with $R_x$, $R_y$, and $R_z$ represent the irreducible representations for the rotational modes about those axes:

$$ \Gamma_\text{rot} = A_2 + E $$

We can subtract the translational and rotational irreducible representations from our \Gamma to get the irreducible representations for the normal vibrational modes:

$$ \Gamma_\text{vib} = \Gamma - \Gamma_\text{trans} -\Gamma_\text{rot} $$

Doing this, we obtains:

$$ \Gamma_\text{vib} = 2 A_1 + 2 E $$
