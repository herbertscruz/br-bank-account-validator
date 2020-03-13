
const http = require('http');
const BancoDoBrasilValidator = require(
  './lib/banco-do-brasil-validador',
);
// const BradescoValidator = require('./lib/bradesco-validator');
// const ItauValidator = require('./lib/itau-validator');
// const SantanderValidator = require('./lib/santander-validator');
// const CitibankValidator = require('./lib/citibank-validator');
// const HSBCValidator = require('./lib/hsbc-validator');
// const BanrisulValidator = require('./lib/banrisul-validator');
const GenericBankAccountValidator = require(
  './lib/generic-bank-account-validator',
);

const Validator = function(bankId) {
  const validators = {
    '001': BancoDoBrasilValidator,
    // '237': BradescoValidator,
    // '341': ItauValidator,
    // '033': SantanderValidator,
    // '745': CitibankValidator,
    // '399': HSBCValidator,
    // '041': BanrisulValidator,
  };

  if (validators[bankId]) return validators[bankId];
  return GenericBankAccountValidator;
};

module.exports = function validate(
  bankId, branchNumber, branchCheckNumber,
  accountNumber, accountCheckNumber,
) {
  const errors = [];
  let description;
  const genericValidator = new GenericBankAccountValidator();
  const validator = new Validator(bankId);

  if (!genericValidator.bankIdIsValid(bankId)) {
    description = genericValidator.branchIdMsgError();
    errors.push({description, code: 'INVALID_BANK_NUMBER'});
  }

  if (!validator.branchNumberIsValid(branchNumber)) {
    description = validator.branchNumberMsgError();
    errors.push({description, code: 'INVALID_BRANCH_NUMBER'});
  }

  if (!validator.branchCheckNumberIsValid(branchCheckNumber)) {
    description = validator.branchCheckNumberMsgError();
    errors.push({description, code: 'INVALID_BRANCH_CHECK_NUMBER'});
  }

  if (!validator.accountNumberIsValid(accountNumber)) {
    description = validator.accountNumberMsgError();
    errors.push({description, code: 'INVALID_ACCOUNT_NUMBER'});
  }

  if (!validator.accountCheckNumberIsValid(accountCheckNumber)) {
    description = validator.accountCheckNumberMsgError();
    errors.push({description, code: 'INVALID_ACCOUNT_CHECK_NUMBER'});
  }

  if (
    validator.branchNumberIsValid(branchNumber) &&
    validator.branchCheckNumberIsValid(branchCheckNumber)
  ) {
    if (!validator.branchCheckNumberMatch(branchNumber, branchCheckNumber)) {
      description = 'The branch check number does not match ' +
        'the completed branch number';
      errors.push({description, code: 'BRANCH_CHECK_NUMBER_DONT_MATCH'});
    }
  }

  if (
    validator.accountNumberIsValid(accountNumber) &&
    validator.accountCheckNumberIsValid(accountCheckNumber)
  ) {
    if (!validator.accountCheckNumberMatch(accountNumber, accountCheckNumber)) {
      description = 'The account check number does not match ' +
        'the completed branch/account number';
      errors.push({description, code: 'ACCOUNT_CHECK_NUMBER_DONT_MATCH'});
    }
  }

  if (errors.length > 0) {
    const status = 412;
    const error = new Error();
    error.name = http.STATUS_CODES[status];
    error.status = status;
    error.message = 'The `bank account` is not valid.';
    error.details = errors;
  }
};
