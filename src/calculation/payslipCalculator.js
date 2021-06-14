const Big = require('big.js');
const Payslip = require('../model/payslip');

const NUMBER_OF_MONTHS = Big(12);

class PayslipCalculator {
  constructor(taxCalculator) {
    this.taxCalculator = taxCalculator;
  }

  calculatePayslip(salary) {
    const bigSalary = Big(salary);
    return new Payslip({
      grossMonthlyIncome: this._grossMonthlyIncome(bigSalary).toFixed(2),
      monthlyIncomeTax: this._monthlyIncomeTax(bigSalary).toFixed(2),
      netMonthlyIncome: this._netMonthlyIncome(bigSalary).toFixed(2),
    });
  }

  _grossMonthlyIncome = (salary) => {
    return salary.div(NUMBER_OF_MONTHS);
  };

  _monthlyIncomeTax = (salary) => {
    return this.taxCalculator.calculateTax(salary).div(NUMBER_OF_MONTHS);
  };

  _netMonthlyIncome = (salary) => {
    return this._grossMonthlyIncome(salary).minus(
      this._monthlyIncomeTax(salary)
    );
  };
}

module.exports = PayslipCalculator;
