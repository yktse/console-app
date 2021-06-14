const Big = require('big.js');
const { calculateTax } = require('../taxCalculator');

describe('TaxCalculator', () => {
  test.each([
    { salary: 19999, expectedTax: 0 },
    { salary: 20000, expectedTax: 0 },
    { salary: 40001, expectedTax: 2000.2 },
    { salary: 60000, expectedTax: 6000 },
    { salary: 200000, expectedTax: 48000 },
  ])('should calculate tax if salary is "%s"', (x) => {
    expect(calculateTax(Big(x.salary))).toEqual(Big(x.expectedTax));
  });
});
