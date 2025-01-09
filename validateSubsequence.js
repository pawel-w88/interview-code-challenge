const isValidSubsequence = (array, sequence) => {
  let arrIndex = 0;
  let seqIndex = 0;
  while (seqIndex < sequence.length && arrIndex < array.length) {
    if (sequence[seqIndex] === array[arrIndex]) {
      seqIndex++; // Znaleziono pasujący element, idziemy do następnego w 'sequence'
    }
    arrIndex++; // Przesuwamy indeks w 'array', szukając pasującego elementu
  }
  return seqIndex === sequence.length // Sprawdzamy, czy przeszliśmy całą 'sequence'
};

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // true
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10, -1])); // false
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, -1, 10])); // true
console.log(isValidSubsequence([1, 2, 3, 4], [1, 3, 2])); // false
console.log(isValidSubsequence([1, 2, 3, 4], [1, 2, 3, 4])); // true
console.log(isValidSubsequence([1, 2, 3, 4], [2, 4])); // true
console.log(isValidSubsequence([], [1, 2])); // false
console.log(isValidSubsequence([1, 2], [])); // true
