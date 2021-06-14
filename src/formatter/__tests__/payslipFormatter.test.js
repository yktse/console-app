const { format } = require('../payslipFormatter');

describe('payslipFormatter', () => {
  it('should retrun correct payslip', () => {
    const calculation = {
      grossMonthlyIncome: '1666.67',
      monthlyIncomeTax: '0.00',
      netMonthlyIncome: '1666.67',
    };

    expect(format('name', calculation)).toMatchInlineSnapshot(`
      "Monthly Payslip for : 'name'
      Gross Monthly Income : $1666.67
      Monthly Income Tax : $0.00
      Net Monthly Income : $1666.67"
    `);
  });
});
