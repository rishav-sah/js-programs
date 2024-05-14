//  Implement a function that takes a string as input and returns the reverse of the string.

const someString = "I Love JavaScript";
let stringReversed = "";

function charReverse(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    stringReversed += element;
  };
  return stringReversed;
};

console.log(charReverse(someString));