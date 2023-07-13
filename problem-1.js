// Write a function that takes an array of numbers as input and returns the sum of all the positive numbers in the array.

const listOfNumbers = [10, -20, 40, 50];
let sumOfNumbers = 0;

function sumOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      const element = arr[i];
      sumOfNumbers += element;
    }
  };
  return sumOfNumbers;
};

console.log(sumOfArray(listOfNumbers));