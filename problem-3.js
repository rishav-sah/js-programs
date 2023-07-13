// Write a function that takes an array of strings as input and returns a new array with the lengths of the strings.

const listOfStrings = ["React", "Angular", "Vue", "Next"];
let listOfStringsLength = [];

function getStringLengths(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].length;
    listOfStringsLength.push(element);
  }
  return listOfStringsLength;
};

console.log(getStringLengths(listOfStrings));