def test_factorial(start_range, end_range):
   from recursiveModule import Factorial
   factInstance = Factorial()
   print("Testing the factorial function from " + str(start_range) + " to " + str(end_range - 1))
   for number in range(start_range, end_range):
      print("\tThe factorial of " +  str(number) + "= " + str(factInstance.fact(number)))

def test_fibonacci():
   pass

def test_sum():
   pass

#executed lines start here
test_factorial(0, 6)
#executed lines end here