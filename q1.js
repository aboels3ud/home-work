// ===== Session 03 - Exercise 1 =====
// Write a function that takes a name and returns a greeting

function greet(name) {
  return `Hello, ${name}! Welcome to Web Development!`;
}

function greetWithTitle(name, title) {
  return `Hello, ${title} ${name}! Good to have you here.`;
}

// Test
console.log(greet("Ahmed"));
console.log(greet("Sara"));
console.log(greetWithTitle("Mohamed", "Mr."));
