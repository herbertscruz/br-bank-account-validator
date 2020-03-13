
const CommonBankAccountValidator = require(
  './common-bank-account-Validator',
);
const BancoDoBrasilCheckNumberCalculator = require(
  './banco-do-brasil-check-number-calculator',
);

module.exports = class BancoDoBrasilValidator
  extends CommonBankAccountValidator {
  constructor() {
    this._calculator = new BancoDoBrasilCheckNumberCalculator();
  }

  branchCheckNumberIsValid(branchCheckNumber) {
    return branchCheckNumber.length == this.branchCheckNumberLength() &&
      super.branchCheckNumberIsValid(branchCheckNumber);
  }

  accountNumberIsValid(accountNumber) {
    return accountNumber.length == this.accountNumberLength() &&
      super.accountNumberIsValid(accountNumber);
  }

  accountCheckNumberIsValid(accountCheckNumber) {
    return this._common.accountCheckNumberIsValid(accountCheckNumber);
  }

  branchCheckNumberMatch(branchNumber, branchCheckNumber) {
    const calculated = this._calculator.calculateAgency(branchNumber);
    return calculated === branchCheckNumber.toUpperCase();
  }

  accountCheckNumberMatch(accountNumber, accountCheckNumber) {
    const calculated = this._calculator.calculateAccount(accountNumber);
    return calculated === accountCheckNumber.toUpperCase();
  }

  branchCheckNumberMsgError() {
    return super.branchCheckNumberMsgError(
      this.branchCheckNumberLength(),
    );
  }

  accountNumberMsgError() {
    return super.accountNumberMsgError(
      this.accountNumberLength(),
    );
  }

  branchCheckNumberLength() {
    return 1;
  }

  accountNumberLength() {
    return 8;
  }
};
