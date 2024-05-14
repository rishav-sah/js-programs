// Implement a function that takes an array of numbers and returns the second smallest number in the array.

let numbers = [5, 2, 3, 9, 6, 3, 4];
console.log(findSecondSmallestNumber(numbers));

function findSecondSmallestNumber(numbers) {

  if (numbers.length < 2) {
    throw new Error("Array should have at least two numbers");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      secondSmallest = smallest;
      smallest = numbers[i];
    } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
      secondSmallest = numbers[i];
    };
  };

  return secondSmallest == Infinity ? undefined : secondSmallest;
};