const fizzBuzz = n => {
    if (typeof n !== 'number' || isNaN(n)) return null;
    if (n % 15 === 0) return 'FizzBuzz';
    if (n % 5 === 0) return 'Buzz';
    if (n % 3 === 0) return 'Fizz';
    return n;
};

console.log(fizzBuzz(15));  // 'FizzBuzz'
console.log(fizzBuzz(5));   // 'Buzz'
console.log(fizzBuzz(35));  // 'Buzz'
console.log(fizzBuzz(115)); // 'Buzz'
console.log(fizzBuzz(3));   // 'Fizz'
console.log(fizzBuzz(65));  // 'Buzz'
console.log(fizzBuzz(""));  // null
console.log(fizzBuzz("abc")); // null
console.log(fizzBuzz(NaN));  // null

const fizzBuzzRange = n => {
    if (typeof n !== 'number' || isNaN(n)) return null;
    return Array.from({ length: n }, (_, i) => fizzBuzz(i + 1));
};

console.log(fizzBuzzRange(15)); 
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

