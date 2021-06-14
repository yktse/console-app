const Big = require('big.js');
const Payslip = require('../model/payslip');
const { calculateTax } = require('./taxCalculator');

const NUMBER_OF_MONTHS = Big(12);

const calculatePayslip = (salary) => {
  const bigSalary = Big(salary);
  return new Payslip({
    grossMonthlyIncome: grossMonthlyIncome(bigSalary).toFixed(2),
    monthlyIncomeTax: monthlyIncomeTax(bigSalary).toFixed(2),
    netMonthlyIncome: netMonthlyIncome(bigSalary).toFixed(2),
  });
};

const grossMonthlyIncome = (salary) => {
  return salary.div(NUMBER_OF_MONTHS);
};

const monthlyIncomeTax = (salary) => {
  return calculateTax(salary).div(NUMBER_OF_MONTHS);
};

const netMonthlyIncome = (salary) => {
  return grossMonthlyIncome(salary).minus(monthlyIncomeTax(salary));
};

module.exports = { calculatePayslip };
