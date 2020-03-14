
module.exports = class GenericBankAccountValidator {
  bankIdIsValid(bankId) {
    return /^([0-9A-Za-x]{3,5})$/.test(bankId);
  }

  branchNumberIsValid(branchNumber) {
    return /^[0-9]{1,5}$/.test(branchNumber) && parseInt(branchNumber) > 0;
  }

  branchCheckNumberIsValid(branchCheckNumber) {
    return /^[a-zA-Z0-9]{0,2}$/.test(branchCheckNumber);
  }

  accountNumberIsValid(accountNumber) {
    return /^[0-9]{1,12}$/.test(accountNumber) && parseInt(accountNumber) > 0;
  }

  accountCheckNumberIsValid(accountCheckNumber) {
    return /^[a-zA-Z0-9]{0,2}$/.test(accountCheckNumber);
  }

  branchCheckNumberMatch(branchNumber, branchCheckNumber) {
    return true;
  }

  accountCheckNumberMatch(branchNumber, accountNumber, accountCheckNumber) {
    return true;
  }

  branchIdMsgError(bankId) {
    return 'Invalid bank';
  }

  branchNumberMsgError(length) {
    return 'Invalid branch number';
  }

  branchCheckNumberMsgError() {
    return 'Invalid branch check number';
  }

  accountNumberMsgError(length) {
    return 'Invalid account';
  }
};
