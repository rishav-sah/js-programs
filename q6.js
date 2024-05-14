// Implement a function that takes an array of numbers and returns a new array with only the unique numbers from the original array. The order of the numbers in the new array should be the same as in the original array.

function getUniqueNumbers(arr) {
  return arr.filter((item, index) => arr.indexOf(item) == index);
}

console.log(getUniqueNumbers([1, 3, 3, 2, 2, 5]))