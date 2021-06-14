const format = (name, payslip) => {
  const printPayslip =
    `Monthly Payslip for : '${name}'\n` +
    `Gross Monthly Income : $${payslip.grossMonthlyIncome}\n` +
    `Monthly Income Tax : $${payslip.monthlyIncomeTax}\n` +
    `Net Monthly Income : $${payslip.netMonthlyIncome}`;

  return printPayslip;
};

module.exports = { format };
