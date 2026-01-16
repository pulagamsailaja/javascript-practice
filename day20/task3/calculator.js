// Named exports for all calculator operations
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

// Bonus: Power function
export function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Export calculator version as a constant
export const VERSION = "1.0.0";

// Default export - a calculator object with all methods
const calculator = {
    add,
    subtract,
    multiply,
    divide,
    power,
    version: VERSION,
    
    // Helper method to perform any operation
    calculate(operation, a, b) {
        switch(operation) {
            case '+':
                return this.add(a, b);
            case '-':
                return this.subtract(a, b);
            case '*':
                return this.multiply(a, b);
            case '/':
                return this.divide(a, b);
            case '^':
                return this.power(a, b);
            default:
                return "Invalid operation";
        }
    }
};

export default calculator;