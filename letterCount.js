const letterCount = (str) => {
  let volwes = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (volwes.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(letterCount("hello"));
