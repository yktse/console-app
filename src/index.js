#!/usr/bin/env node

const { format } = require('./formatter/payslipFormatter');
const { validate } = require('./validation/validator');

const { calculatePayslip } = require('./calculation/payslipCalculator');

try {
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    throw new Error(
      'Invalid number of arguments: Usage GenerateMonthlyPayslip <employee name> <annual salary>'
    );
  }

  const [name, salary] = args;
  validate(name, salary);

  const payslip = calculatePayslip(salary);
  const result = format(name, payslip);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
