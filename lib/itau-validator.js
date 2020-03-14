
const CommonBankAccountValidator = require(
  './common-bank-account-validator',
);
const ItauCheckNumberCalculator = require(
  './banco-do-brasil-check-number-calculator',
);

module.exports = class ItauValidator
  extends CommonBankAccountValidator {
  constructor() {
    super();
    this._calculator = new ItauCheckNumberCalculator();
  }

  branchCheckNumberIsValid(branchCheckNumber) {
    return !branchCheckNumber;
  }

  accountNumberIsValid(accountNumber) {
    accountNumber = accountNumber || '';
    const length = this.accountNumberLength();
    return accountNumber.length == length &&
      super.accountNumberIsValid(accountNumber);
  }

  accountCheckNumberMatch(branchNumber, accountNumber, accountCheckNumber) {
    branchNumber = branchNumber || '';
    accountNumber = accountNumber || '';
    accountCheckNumber = accountCheckNumber || '';
    const calculated = this._calculator.calculateAccountNumber(
      branchNumber, accountNumber,
    );
    return calculated === accountCheckNumber;
  }

  branchNumberLength() {
    return;
  }

  branchCheckNumberLength() {
    return;
  }

  accountNumberLength() {
    return 5;
  }

  accountCheckNumberLength() {
    return;
  }
};
