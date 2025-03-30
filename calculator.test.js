const calculator = require('./calculator');

describe('Calculator', () => {
  // Test suite for basic operations
  describe('Basic Operations', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 2 to equal 3', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('multiplies 3 * 4 to equal 12', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('divides 10 / 2 to equal 5', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
    });
  });

  
  describe('Calculate Function', () => {
    test('correctly calculates addition', () => {
      expect(calculator.calculate('add', 5, 3)).toBe(8);
    });

    test('correctly calculates subtraction', () => {
      expect(calculator.calculate('subtract', 5, 3)).toBe(2);
    });

    test('throws error for invalid operation', () => {
      expect(() => calculator.calculate('power', 2, 3)).toThrow('Invalid operation');
    });
  });
});

// Demonstrate mocking
describe('Mocking Examples', () => {
  test('mock the add function', () => {
    const mockAdd = jest.fn(() => 42);
    calculator.add = mockAdd;
    
    const result = calculator.add(2, 2);
    
    expect(mockAdd).toHaveBeenCalledWith(2, 2);
    expect(result).toBe(42);
  });
});