const { payslipFormatter } = require("../payslipFormatter");

describe("payslipFormatter", () => {
  it("will should retrun correct payslip", () => {
    const calculation = {
      grossMonthlyIncome: "1666.67",
      monthlyIncomeTax: "0.00",
      netMonthlyIncome: "1666.67",
    };

    const payslip =
      `Monthly Payslip for : 'name'\n` +
      `Gross Monthly Income : $1666.67\n` +
      `Monthly Income Tax : $0.00\n` +
      `Net Monthly Income : $1666.67`;

    expect(payslipFormatter("name", calculation)).toBe(payslip);
  });
});
