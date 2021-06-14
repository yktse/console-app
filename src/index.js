#!/usr/bin/env node

const { payslipFormatter } = require('./formatter/payslipFormatter');
const { validate } = require('./validation/validator');

const TaxCalculator = require('./calculation/taxCalculator');
const taxTable = require('./calculation/taxTable.json');
const PayslipCalculator = require('./calculation/payslipCalculator');

const taxCalculator = new TaxCalculator(taxTable);
const payslipCalculator = new PayslipCalculator(taxCalculator);

try {
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    throw new Error(
      'Invalid number of arguments: Usage GenerateMonthlyPayslip <employee name> <annual salary>'
    );
  }

  const [name, salary] = args;
  validate(name, salary);

  const payslip = payslipCalculator.calculatePayslip(salary);
  const result = payslipFormatter(name, payslip);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
