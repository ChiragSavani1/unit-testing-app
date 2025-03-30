// Simple calculator module
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    },
    // A more complex function that uses other functions
    calculate: (operation, a, b) => {
      switch (operation) {
        case 'add':
          return calculator.add(a, b);
        case 'subtract':
          return calculator.subtract(a, b);
        case 'multiply':
          return calculator.multiply(a, b);
        case 'divide':
          return calculator.divide(a, b);
        default:
          throw new Error('Invalid operation');
      }
    }
  };
  
  module.exports = calculator;