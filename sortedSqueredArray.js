const sortedSqueredArray = (array) => {
    let squeredArray = array.map((el) => el ** 2).sort((a, b) => a - b)
    return squeredArray
} 
console.log(sortedSqueredArray([-4, -1, 0, 3, 10])) 