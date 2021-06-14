const TaxBracket = require('../model/taxBracket');
const Big = require('big.js');

class TaxCalculator {
  constructor(taxTable) {
    this.taxTable = taxTable.taxRates.map(
      (x) => new TaxBracket(x.min, x.max, x.rate)
    );
  }

  calculateTax(salary) {
    const taxes = this.taxTable
      .filter((x) => salary.toNumber() >= x.min.toNumber())
      .map((taxRate) => this._calculatTaxPerBracket(salary, taxRate));

    return taxes.reduce((sum, tax) => sum.plus(tax), Big(0));
  }

  _calculatTaxPerBracket(salary, taxRate) {
    if (salary.toNumber() > taxRate.max.toNumber()) {
      return taxRate.max.minus(taxRate.min).plus(Big(1)).times(taxRate.rate);
    } else {
      return salary.minus(taxRate.min).plus(Big(1)).times(taxRate.rate);
    }
  }
}

module.exports = TaxCalculator;
