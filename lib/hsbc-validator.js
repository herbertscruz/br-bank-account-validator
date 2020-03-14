
const CommonBankAccountValidator = require(
  './common-bank-account-validator',
);

module.exports = class HSBCValidator
  extends CommonBankAccountValidator {
  constructor() {
    super();
  }

  bankNumberIsValid(bankNumber) {
  }

  branchNumberIsValid(branchNumber) {
  }

  branchCheckNumberIsValid(branchCheckNumber) {
  }

  accountNumberIsValid(accountNumber) {
  }

  accountCheckNumberIsValid(accountCheckNumber) {
  }

  branchCheckNumberMatch(branchNumber, branchCheckNumber) {
  }

  accountCheckNumberMatch(branchNumber, accountNumber, accountCheckNumber) {
  }

  bankNumberError() {
  }

  branchNumberError() {
  }

  branchCheckNumberError() {
  }

  accountNumberError() {
  }

  accountCheckNumberError() {
  }

  branchCheckNumberMatchError() {
  }

  accountCheckNumberMatchError() {
  }

  branchNumberLength() {
    return;
  }

  branchCheckNumberLength() {
    return;
  }

  accountNumberLength() {
    return;
  }

  accountCheckNumberLength() {
    return;
  }
};
