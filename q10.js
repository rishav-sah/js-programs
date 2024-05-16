// Implement a function that takes two arrays of numbers as input and returns a new array with the unique numbers from both arrays. The order of the numbers in the new array should be the same as in the input arrays.

function findUniqueNumbers(arr1, arr2) {
  const result = [];

  function addUniqueItems(items) {
    for (const item of items) {
      if (!result.includes(item)) {
        result.push(item)
      }
    }
  }

  addUniqueItems(arr1);
  addUniqueItems(arr2);

  return result;
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

console.log(findUniqueNumbers(array1, array2));