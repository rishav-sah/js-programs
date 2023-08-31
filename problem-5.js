function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target number, return its index.
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half of the remaining array.
    } else {
      right = mid - 1; // Target is in the left half of the remaining array.
    }
  }

  return -1; // Target number not found in the array.
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetNumber = 7;
const result = binarySearch(sortedArray, targetNumber);

if (result !== -1) {
  console.log(`Target ${targetNumber} found at index ${result}`);
} else {
  console.log(`Target ${targetNumber} not found in the array`);
}
