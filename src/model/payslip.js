class Payslip {
  constructor({ grossMonthlyIncome, monthlyIncomeTax, netMonthlyIncome }) {
    this.grossMonthlyIncome = grossMonthlyIncome;
    this.monthlyIncomeTax = monthlyIncomeTax;
    this.netMonthlyIncome = netMonthlyIncome;
  }
}

module.exports = Payslip;
