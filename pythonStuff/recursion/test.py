


def copy_arr(array, start, end):
      to_return = []
      if end == 0:
         to_return.append(array[0])
      else:
         for i in range(start, end):
            to_return.append(array[i])
      return to_return

print(copy_arr([0, 1, 2, 3, 4, 5, 6, 7], 0, 0)[0])
