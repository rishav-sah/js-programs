// Implement a function that takes a number as input and returns true if the number is prime, and false otherwise.

function isPrime(number) {
  // Numbers less than 2 are not prime
  if (number < 2) return false;

  // Check for divisibility from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      // If the number is divisible by any other number, it's not prime
      return false;
    }
  }

  // If the loop didn't find any divisors, the number is prime
  return true;
};


console.log(isPrime(9));