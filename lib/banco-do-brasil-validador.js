
const CommonBankAccountValidator = require(
  './common-bank-account-Validator',
);
const BancoDoBrasilCheckNumberCalculator = require(
  './banco-do-brasil-check-number-calculator',
);

module.exports = class BancoDoBrasilValidator {
  constructor() {
    this._common = new CommonBankAccountValidator();
    this._calculator = new BancoDoBrasilCheckNumberCalculator();
  }

  branchNumberIsValid(branchNumber) {
    return this._common.branchNumberIsValid(branchNumber);
  }

  branchCheckNumberIsValid(branchCheckNumber) {
    return branchCheckNumber.length == this.branchCheckNumberLength() &&
      this._common.branchCheckNumberIsValid(branchCheckNumber);
  }

  accountNumberIsValid(accountNumber) {
    return accountNumber.length == this.accountNumberLength() &&
      this._common.accountNumberIsValid(accountNumber);
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

  branchNumberMsgError() {
    return this._common.branchNumberMsgError();
  }

  branchCheckNumberMsgError() {
    return this._common.branchCheckNumberMsgError(
      this.branchCheckNumberLength(),
    );
  }

  accountNumberMsgError() {
    return this._common.accountNumberMsgError(
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
