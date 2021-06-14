const TaxBracket = require('../model/taxBracket');
const Big = require('big.js');
const taxTable = require('./taxTable.json');

const taxRates = taxTable.taxRates.map(
  (x) => new TaxBracket(x.min, x.max, x.rate)
);

const calculateTax = (salary) => {
  const taxes = taxRates
    .filter((x) => salary.toNumber() >= x.min.toNumber())
    .map((taxRate) => calculatTaxPerBracket(salary, taxRate));

  return taxes.reduce((sum, tax) => sum.plus(tax), Big(0));
};

const calculatTaxPerBracket = (salary, taxRate) => {
  if (salary.toNumber() > taxRate.max.toNumber()) {
    return taxRate.max.minus(taxRate.min).plus(Big(1)).times(taxRate.rate);
  } else {
    return salary.minus(taxRate.min).plus(Big(1)).times(taxRate.rate);
  }
};

module.exports = { calculateTax };
