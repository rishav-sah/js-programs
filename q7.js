// Write a function that takes a sentence as input and returns the word count. A word is defined as a sequence of non-space characters.

function getWordCount(sentence) {
  // removes leading and trailing white spaces
  sentence = sentence.trim();

  // If the sentence is empty return
  if (sentence === "") return 0;

  // Split the sentence into words using a space as a delimiter
  let words = sentence.split(" ");

  // returns the number of words
  return words.length;
}

// Example Usage
let sentence = "Sun rises from east";

console.log("Word Count:", getWordCount(sentence));