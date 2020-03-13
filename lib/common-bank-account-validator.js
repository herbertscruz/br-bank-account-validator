
module.exports = class CommonBankAccountValidator {
  branchNumberIsValid(branchNumber) {
    return /^(?!0000)([0-9]{4})$/.test(branchNumber);
  }

  branchCheckNumberIsValid(branchCheckNumber) {
    return /^[a-zA-Z0-9]{0,1}$/.test(branchCheckNumber);
  }

  accountNumberIsValid(accountNumber) {
    return /^[0-9]{1,12}$/.test(accountNumber) &&
      parseInt(accountNumber) > 0;
  }

  accountCheckNumberIsValid(accountCheckNumber) {
    return /^[a-zA-Z0-9]{1}$/.test(accountCheckNumber);
  }

  branchNumberMsgError(length) {
    if (length === undefined) {
      length = this.branchNumberLength();
    }
    return `The branch number must contain ${length} numbers. ` +
      'Complete with leading zeros if necessary.';
  }

  branchCheckNumberMsgError(length) {
    if (length === undefined || length === 0) {
      return 'The branch check number must be empty';
    } else if (length === 1) {
      return 'The branch check number must contain 1 digit';
    } else {
      return `The branch check number must contain ${length} numbers.` +
        'Complete with leading zeros if necessary.';
    }
  }

  accountNumberMsgError(length) {
    return `The account number must contain ${length} numbers.` +
      'Complete with leading zeros if necessary.';
  }

  branchNumberLength() {
    return 4;
  }
};
