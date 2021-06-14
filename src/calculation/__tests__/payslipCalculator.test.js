const PayslipCalculator = require('../payslipCalculator');
const TaxCalculator = require('../taxCalculator');
const taxTable = require('../taxTable.json');

describe('PayslipCalculator', () => {
  it('will return 1666.67 for grossMonthlyIncome, 0 monthlyIncomeTax and 1666.67 for netMonthlyIncomeTax if salary is less than 20000', () => {
    const calculator = new PayslipCalculator(new TaxCalculator(taxTable));
    const result = calculator.calculatePayslip(20000);

    expect(result).toMatchObject({
      grossMonthlyIncome: '1666.67',
      monthlyIncomeTax: '0.00',
      netMonthlyIncome: '1666.67',
    });
  });

  it('will return 5000 dollars for grossMonthlyIncome, 500 monthlyIncomeTax and 4500 netMonthlyIncomeTax if salary is 60000', () => {
    const calculator = new PayslipCalculator(new TaxCalculator(taxTable));
    const result = calculator.calculatePayslip(60000);
    expect(result).toMatchObject = {
      grossMonthlyIncome: '5000.00',
      monthlyIncomeTax: '500.00',
      netMonthlyIncome: '4500.00',
    };
  });

  it('will return 6666.67 dollars for grossMonthlyIncome, 833.33 monthlyIncomeTax and 5833.34 netMonthlyIncomeTax if salary is 80000', () => {
    const calculator = new PayslipCalculator(new TaxCalculator(taxTable));
    const result = calculator.calculatePayslip(80000);

    expect(result).toMatchObject = {
      grossMonthlyIncome: '6666.67',
      monthlyIncomeTax: '833.33',
      netMonthlyIncome: '5833.34',
    };
  });
});
