<!-- LibreTexts page 14501: Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/23:_Phase_Equilibria/23.05:_Chemical_Potential_Can_be_Evaluated_From_a_Partition_Function -->
# Chemical Potential Can be Evaluated From a Partition Function

The chemical potential can be given in terms of a partition function. Internal energy can be defined as:

$$ U=RT^2\left(\frac{\partial \ln Q}{\partial T}\right)_{n,V} $$

And entropy can be defined as:

$$ S=RT\left(\frac{\partial \ln Q}{\partial T}\right)_{n,V} + R\ln Q $$

We know that Helmholtz energy is:

$$ A=U-TS $$

Using our two equations above, we obtain:

$$ A=-RT\ln Q $$

Now, let's change gears a bit to show how Helmholtz energy is related to chemical potential. The total differential for Helmholtz energy is:

$$ dA = \left(\frac{\partial A}{\partial T}\right)_{n,V} + \left(\frac{\partial A}{\partial V}\right)_{n,T} + \left(\frac{\partial A}{\partial n}\right)_{V,T} $$

And the fundamental equation is:

$$ dA = -SdT-PdV+\left(\frac{\partial A}{\partial n}\right)_{V,T}dn $$

Using the relationship between Helmholtz energy and Gibbs energy:

$$ G=A+PV $$

We obtain:

$$ \begin{split}dG &= dA+d(PV) \\ &= -SdT+VdP+\left(\frac{\partial A}{\partial n}\right)_{V,T}dn\end{split} $$

We know that the change in Gibbs energy is:

$$ \begin{split}dG &= -SdT+VdP+\left(\frac{\partial G}{\partial n}\right)_{P,T}dn \\ &= -SdT+VdP+\mu dn \end{split} $$

Inspecting these equations, we see that:

$$ \mu = \left(\frac{\partial G}{\partial n}\right)_{P,T} = \left(\frac{\partial A}{\partial n}\right)_{V,T} $$

This shows us that, as long as the natural variables for each thermodynamic potential are held constant, the partial derivatives of Gibbs energy and Helmholtz energy with respect to the number of moles, $n$ are equal to the chemical potential. We can now plug in our expression above for Helmholtz energy in terms of the partition function:

$$ \mu = -RT\left(\frac{\partial \ln Q}{\partial n}\right)_{V,T} $$

We now have chemical potential written in terms of the partition function, $Q$.
