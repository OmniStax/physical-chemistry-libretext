<!-- LibreTexts page 550567: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/12:_Group_Theory_-_The_Exploitation_of_Symmetry/12.S:_Group_Theory_-_The_Exploitation_of_Symmetry_(Summary) -->
# Group Theory - The Exploitation of Symmetry (Summary)

## Learning Objectives {section:objectives}

By the end of this chapter, you should know the following:

- The four defining properties of a mathematical group
- What the elements, classes, and order of a group are
- What a Cayley table is
- What a representation is
- What a character table is
- The great orthogonality theorem
- The vanishing integral rule
- The difference between a reducible representation and an irreducible representation
- What a symmetry element a
- The implications for the solutions to the Schrödinger equation when the Hamiltonian is invariant under symmetry operations
- What a point group is
- The effect of SALCs on the molecular Hamiltonian matrix

Skill goals (what you should be able to do/calculate):

- Determine whether a set constitutes a group
- Given a partial character table, how to complete it
- How to calculate a group multiplication table
- How to determine the dimensionality of a representation
- How to decompose an arbitrary representation into its irreducible components
- How to determine the point group of a molecule
- How to compute symmetry-adapted linear combinations (SALCs)

In this chapter, we will discuss how to make use of the symmetry of molecules to simplify quantum-mechanical calculations. In essence, symmetry can give a quick answer to the question: “Is this integral zero or nonzero?” Many times, quite a large number of integrals turn out to be zero, so screening those out not only provides for faster computer calculations, but it also helps our qualitative understanding of which quantum-mechanical interactions are important in a molecule and which are not. And as we will discuss further in the next chapter, symmetry allows us to determine which spectroscopic transitions are allowed and which are forbidden for a molecule.

The formal mathematics of symmetry arise from the properties of mathematical structures called groups, and so we must learn about group theory in order to make use of symmetry. Group theory is a type of abstract algebra, and many, many theorems can be proved about the relationships that come out of objects in groups. We do not have time to derive and prove all of the relationships we will make use of. They are all very simple and straightforward, though clever, and are actually very beautiful, mathematically speaking. Most groups we’ll be interested in for molecular applications contain just a handful of elements (usually less than 20), and the calculations involving these elements boil down to basic arithmetic on integers. However, there are two challenges people face when trying to learn and understand group theory:

In chemistry courses, we use what are called spatial point groups, which are groups of operations in three-dimensional space (rotations, reflections, inversions). Typically, people who do not have great spatial intuition struggle with “seeing” the symmetry operations, and this creates a problem with understanding the basic properties of groups. We will attempt to get around this by introducing the principles of group theory with permutation groups, which are much easier to visualize and manipulate.

Mathematically, the notation gets very complex, because mathematicians like to make their equations very general. There will be a ton of summations over various indices, and terms with multiple subscripts and superscripts. It is very important not to get overwhelmed by the notation. Almost every equation turns out to be extremely simple to use.
