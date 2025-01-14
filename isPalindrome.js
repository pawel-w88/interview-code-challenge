// const isPalindrome = (str) => {
//     let reversedStr = str.split('').reverse().join('');
//     if (reversedStr === str) return true; 
//     return false; 
// };

const isPalindrome = (str) => str === str.split('').reverse().join('');
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
