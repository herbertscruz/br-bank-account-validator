
module.exports = class CommonBankAccountValidator {
  bankNumberIsValid(bankNumber) {
    bankNumber = bankNumber || '';
    const length = this.bankNumberLength();
    if (length > 0) {
      if (bankNumber.length !== length) return false;
    }
    return /^(?!000)([0-9]{3})$/.test(bankNumber);
  }

  branchNumberIsValid(branchNumber) {
    branchNumber = branchNumber || '';
    const length = this.branchNumberLength();
    if (length > 0) {
      if (branchNumber.length !== length) return false;
    }
    return /^(?!0000)([0-9]{4})$/.test(branchNumber);
  }

  branchCheckNumberIsValid(branchCheckNumber) {
    branchCheckNumber = branchCheckNumber || '0';
    const length = this.branchCheckNumberLength();
    if (length > 0) {
      if (branchCheckNumber.length !== length) return false;
    }
    return /^[a-zA-Z0-9]{0,1}$/.test(branchCheckNumber);
  }

  accountNumberIsValid(accountNumber) {
    accountNumber = accountNumber || '';
    const length = this.accountNumberLength();
    if (length > 0) {
      if (accountNumber.length !== length) return false;
    }
    return /^[0-9]{1,12}$/.test(accountNumber);
  }

  accountCheckNumberIsValid(accountCheckNumber) {
    accountCheckNumber = accountCheckNumber || '';
    const length = this.accountCheckNumberLength();
    if (length > 0) {
      if (accountCheckNumber.length !== length) return false;
    }
    return /^[a-zA-Z0-9]{1}$/.test(accountCheckNumber);
  }

  branchCheckNumberMatch(branchNumber, branchCheckNumber) {
    return this.branchNumberIsValid(branchNumber) &&
      this.branchCheckNumberIsValid(branchCheckNumber);
  }

  accountCheckNumberMatch(branchNumber, accountNumber, accountCheckNumber) {
    return this.branchNumberIsValid(branchNumber) &&
      this.accountNumberIsValid(accountNumber) &&
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
    if (!length) {
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
    if (!length) {
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

  bankNumberLength() {
    return 3;
  }

  branchNumberLength() {
    return 4;
  }

  branchCheckNumberLength() {
    return;
  }

  accountNumberLength() {
    return 8;
  }

  accountCheckNumberLength() {
    return 1;
  }
};
