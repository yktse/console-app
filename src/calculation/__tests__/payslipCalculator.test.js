const { calculatePayslip } = require('../payslipCalculator');

describe('PayslipCalculator', () => {
  it('should return 1666.67 for grossMonthlyIncome, 0 monthlyIncomeTax and 1666.67 for netMonthlyIncomeTax if salary is less than 20000', () => {
    const result = calculatePayslip(20000);
    expect(result).toMatchObject({
      grossMonthlyIncome: '1666.67',
      monthlyIncomeTax: '0.00',
      netMonthlyIncome: '1666.67',
    });
  });

  it('should return 5000 dollars for grossMonthlyIncome, 500 monthlyIncomeTax and 4500 netMonthlyIncomeTax if salary is 60000', () => {
    const result = calculatePayslip(60000);
    expect(result).toMatchObject = {
      grossMonthlyIncome: '5000.00',
      monthlyIncomeTax: '500.00',
      netMonthlyIncome: '4500.00',
    };
  });

  it('should return 6666.67 dollars for grossMonthlyIncome, 833.33 monthlyIncomeTax and 5833.34 netMonthlyIncomeTax if salary is 80000', () => {
    const result = calculatePayslip(80000);

    expect(result).toMatchObject = {
      grossMonthlyIncome: '6666.67',
      monthlyIncomeTax: '833.33',
      netMonthlyIncome: '5833.34',
    };
  });
});
