// Import the named exports
import { add, subtract } from './math.js';

// Test the functions and log results
console.log("=== Task 1: Named Exports ===");
console.log("5 + 3 =", add(5, 3));           // 8
console.log("10 - 4 =", subtract(10, 4));    // 6
console.log("100 + 50 =", add(100, 50));     // 150
console.log("50 - 25 =", subtract(50, 25));  // 25