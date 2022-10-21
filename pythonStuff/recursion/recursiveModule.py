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
   def summ(self, arr):
      if len(arr) == 1:
         return arr[0]
      else:
         m = (len(arr) - 1)//2
         left_arr = self.copy_arr(arr, 0, m)
         right_arr = self.copy_arr(arr, m, (len(arr) - 1))
         return self.summ(left_arr) + self.summ(right_arr)

   def copy_arr(self, array, start, end):
      to_return = []
      for i in range(start, end):
         to_return.append(array[i])
      return to_return
