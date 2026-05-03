// ===== Session 03 - Exercise 2 =====
// Write a function to calculate the area of shapes

function circleArea(radius) {
  return Math.PI * radius * radius;
}

function rectangleArea(width, height) {
  return width * height;
}

function triangleArea(base, height) {
  return 0.5 * base * height;
}

// Test
console.log("Circle area (r=5):", circleArea(5).toFixed(2));
console.log("Rectangle area (4x6):", rectangleArea(4, 6));
console.log("Triangle area (base=3, h=8):", triangleArea(3, 8));
