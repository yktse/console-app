const Big = require('big.js');

class TaxBracket {
  constructor(min, max, rate) {
    this.min = Big(min);
    // max can be null
    if (max) {
      this.max = Big(max);
    } else {
      this.max = Big(Number.MAX_SAFE_INTEGER);
    }
    this.rate = Big(rate);
  }
}

module.exports = TaxBracket;
