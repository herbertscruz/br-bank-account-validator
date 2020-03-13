
const CommonBankAccountValidator = require(
  './common-bank-account-validator',
);
const BancoDoBrasilCheckNumberCalculator = require(
  './banco-do-brasil-check-number-calculator',
);

module.exports = class BancoDoBrasilValidator
  extends CommonBankAccountValidator {
  constructor() {
    super();
    this._calculator = new BancoDoBrasilCheckNumberCalculator();
  }

  branchCheckNumberIsValid(branchCheckNumber) {
    const length = this.branchCheckNumberLength();
    return branchCheckNumber.length == length &&
      super.branchCheckNumberIsValid(branchCheckNumber);
  }

  accountNumberIsValid(accountNumber) {
    const length = this.accountNumberLength();
    return accountNumber.length == length &&
      super.accountNumberIsValid(accountNumber);
  }

  branchCheckNumberMatch(branchNumber, branchCheckNumber) {
    const calculated = this._calculator.calculateBranchNumber(branchNumber);
    return calculated === branchCheckNumber.toUpperCase();
  }

  accountCheckNumberMatch(accountNumber, accountCheckNumber) {
    const calculated = this._calculator.calculateAccountNumber(accountNumber);
    return calculated === accountCheckNumber.toUpperCase();
  }

  branchNumberLength() {
    return;
  }

  branchCheckNumberLength() {
    return 1;
  }

  accountNumberLength() {
    return 8;
  }

  accountCheckNumberLength() {
    return;
  }
};
