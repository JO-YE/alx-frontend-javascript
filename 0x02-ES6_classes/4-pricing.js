import Currency from './3-currency';

export default class Pricing {
  constructor(amount = 0, currency = null) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set code(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set name(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Not Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount = 0, convertionRate = 0) {
    return amount * convertionRate;
  }
}
