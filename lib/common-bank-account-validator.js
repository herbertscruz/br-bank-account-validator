
module.exports = class CommonBankAccountValidator {
  bankNumberIsValid(bankNumber) {
    return /^([0-9A-Za-x]{3,5})$/.test(bankNumber);
  }

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

  branchCheckNumberMatch(branchNumber, branchCheckNumber) {
    return this.branchNumberIsValid(branchNumber) &&
      this.branchCheckNumberIsValid(branchCheckNumber);
  }

  accountCheckNumberMatch(accountNumber, accountCheckNumber) {
    return this.accountNumberIsValid(accountNumber) &&
      this.accountCheckNumberIsValid(accountCheckNumber);
  }

  bankNumberError() {
    return {
      code: 'INVALID_BANK_NUMBER',
      description: 'Invalid bank',
    };
  }

  branchNumberError() {
    const length = this.branchNumberLength();
    return {
      code: 'INVALID_BRANCH_NUMBER',
      description: `The branch number must contain ${length} ` +
      'numbers. Complete with leading zeros if necessary.',
    };
  }

  branchCheckNumberError() {
    const length = this.branchCheckNumberLength();
    let description;
    if (length === undefined || length === 0) {
      description = 'The branch check number must be empty';
    } else if (length === 1) {
      description = 'The branch check number must contain 1 digit';
    } else {
      description = `The branch check number must contain ${length} ` +
        'numbers. Complete with leading zeros if necessary.';
    }
    return {code: 'INVALID_BRANCH_CHECK_NUMBER', description};
  }

  accountNumberError() {
    const length = this.accountNumberLength();
    return {
      code: 'INVALID_ACCOUNT_NUMBER',
      description: `The account number must contain ${length} ` +
        'numbers. Complete with leading zeros if necessary.',
    };
  }

  accountCheckNumberError() {
    const length = this.accountCheckNumberLength();
    let description;
    if (length === undefined || length === 0) {
      description = 'The account check number must be empty';
    } else if (length === 1) {
      description = 'The account check number must contain 1 digit';
    } else {
      description = `The account check number must contain ${length} ` +
        'numbers. Complete with leading zeros if necessary.';
    }
    return {code: 'INVALID_ACCOUNT_CHECK_NUMBER', description};
  }

  branchCheckNumberMatchError() {
    return {
      code: 'BRANCH_CHECK_NUMBER_DONT_MATCH',
      description: 'The branch check number does not match ' +
        'the completed branch number',
    };
  }

  accountCheckNumberMatchError() {
    return {
      code: 'ACCOUNT_CHECK_NUMBER_DONT_MATCH',
      description: 'The account check number does not match ' +
        'the completed branch/account number',
    };
  }

  branchNumberLength() {
    return 4;
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
