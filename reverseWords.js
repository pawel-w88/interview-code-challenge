const reverseWords = (str) =>
  str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
    
    const str = reverseWords("Hello World");
    console.log(str) // "olleH dlroW"
