const twoNumberSum = (array, target) => {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
  
    while (left < right) {
      const currentSum = array[left] + array[right];
      if (currentSum === target) {
        return [array[left], array[right]];
      } else if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      }
    }
    return []; // Zwracamy pustą tablicę, jeśli nie znaleziono pary
  };
  
  console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [-1, 11]
  console.log(twoNumberSum([4, 6, 1, -3], 3)); // [-3, 6]
  console.log(twoNumberSum([1,2,3,4,5],10)) // []
  console.log(twoNumberSum([1,2,3,4,5],11)) // []