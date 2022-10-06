class Factorial:
   def fact(self, n):
      if n == 1 or n == 0:
         return 1
      else: 
         return (n * self.fact(n - 1))

#TODO jaxon implement this so it works in the driver the same way as factorial
#it might be helpfull to look up the recursive definition of the fibonacci sequence
class Fibonacci:
   pass

#write a method in this class that returns the sum of elements in the array (or list as you call it)
#it sums the array recursively by adding the first element to the function call of the array without the first element
class ArraySummer:
   pass