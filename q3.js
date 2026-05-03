// ===== Session 03 - Exercise 3 =====
// Write a function to check if a number is even or odd
// and return the sum of numbers from 1 to n

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return `${num} is Even`;
  } else {
    return `${num} is Odd`;
  }
}

function sumUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Test
console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));
console.log("Sum from 1 to 10:", sumUpTo(10));
console.log("Sum from 1 to 100:", sumUpTo(100));
