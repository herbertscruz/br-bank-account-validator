
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

  branchCheckNumberMatch(branchNumber, branchCheckNumber) {
    branchNumber = branchNumber || '';
    branchCheckNumber = branchCheckNumber || '';
    const calculated = this._calculator.calculateBranchNumber(branchNumber);
    return calculated === branchCheckNumber.toUpperCase();
  }

  accountCheckNumberMatch(branchNumber, accountNumber, accountCheckNumber) {
    branchNumber = branchNumber || '';
    accountNumber = accountNumber || '';
    accountCheckNumber = accountCheckNumber || '';
    const calculated = this._calculator.calculateAccountNumber(accountNumber);
    return calculated === accountCheckNumber.toUpperCase();
  }

  branchCheckNumberLength() {
    return 1;
  }
};
