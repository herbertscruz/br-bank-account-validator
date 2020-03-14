
const CommonBankAccountValidator = require(
  './common-bank-account-validator',
);
const BradescoCheckNumberCalculator = require(
  './bradesco-check-number-calculator',
);

module.exports = class BradescoValidator
  extends CommonBankAccountValidator {
  constructor() {
    super();
    this._calculator = new BradescoCheckNumberCalculator();
  }

  branchCheckNumberMatch(branchNumber, branchCheckNumber) {
    branchNumber = branchNumber || '';
    branchCheckNumber = branchCheckNumber || '0';
    const calculated = this._calculator.calculateBranchNumber(branchNumber);
    branchCheckNumber = branchCheckNumber.toUpperCase();
    if (branchCheckNumber === '0') {
      return calculated === branchCheckNumber || calculated === 'P';
    }
    return calculated === branchCheckNumber;
  }

  accountCheckNumberMatch(branchNumber, accountNumber, accountCheckNumber) {
    branchNumber = branchNumber || '';
    accountNumber = accountNumber || '';
    accountCheckNumber = accountCheckNumber || '';
    const calculated = this._calculator.calculateAccountNumber(accountNumber);
    accountCheckNumber = accountCheckNumber.toUpperCase();
    if (accountCheckNumber === '0') {
      return calculated === accountCheckNumber || calculated === 'P';
    }
    return calculated === accountCheckNumber;
  }

  branchCheckNumberLength() {
    return 1;
  }

  accountNumberLength() {
    return 7;
  }
};
