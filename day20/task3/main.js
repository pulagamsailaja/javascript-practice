// Import individual functions
import { add, subtract, multiply, divide, power, VERSION } from './calculator.js';

console.log("=== Task 3: Mini Calculator ===");
console.log("Calculator Version:", VERSION);
console.log("");

// Addition
console.log("--- Addition ---");
console.log("5 + 3 =", add(5, 3));
console.log("100 + 200 =", add(100, 200));

// Subtraction
console.log("\n--- Subtraction ---");
console.log("10 - 4 =", subtract(10, 4));
console.log("50 - 25 =", subtract(50, 25));

// Multiplication
console.log("\n--- Multiplication ---");
console.log("6 * 7 =", multiply(6, 7));
console.log("12 * 5 =", multiply(12, 5));

// Division
console.log("\n--- Division ---");
console.log("20 / 4 =", divide(20, 4));
console.log("100 / 10 =", divide(100, 10));
console.log("10 / 0 =", divide(10, 0)); // Error handling

// Power (Bonus)
console.log("\n--- Power (Bonus) ---");
console.log("2 ^ 3 =", power(2, 3));
console.log("5 ^ 2 =", power(5, 2));

// Complex calculation example
console.log("\n--- Complex Calculation ---");
const result = add(multiply(5, 3), subtract(20, 5));
console.log("(5 * 3) + (20 - 5) =", result); // 30