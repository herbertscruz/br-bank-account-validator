
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

const Validator = function(bankNumber) {
  const validators = {
    '001': BancoDoBrasilValidator,
    // '237': BradescoValidator,
    // '341': ItauValidator,
    // '033': SantanderValidator,
    // '745': CitibankValidator,
    // '399': HSBCValidator,
    // '041': BanrisulValidator,
  };

  if (validators[bankNumber]) return validators[bankNumber];
  return GenericBankAccountValidator;
};

module.exports = function validate(
  bankNumber, branchNumber, branchCheckNumber,
  accountNumber, accountCheckNumber,
) {
  const validator = new Validator(bankNumber);
  const errors = [];

  if (!validator.bankNumberIsValid(bankNumber)) {
    errors.push(validator.bankNumberError());
  }

  if (!validator.branchNumberIsValid(branchNumber)) {
    errors.push(validator.branchNumberError());
  }

  if (!validator.branchCheckNumberIsValid(branchCheckNumber)) {
    errors.push(validator.branchCheckNumberError());
  }

  if (!validator.accountNumberIsValid(accountNumber)) {
    errors.push(validator.accountNumberError());
  }

  if (!validator.accountCheckNumberIsValid(accountCheckNumber)) {
    errors.push(validator.accountCheckNumberError());
  }

  if (!validator.branchCheckNumberMatch(branchNumber, branchCheckNumber)) {
    errors.push(validator.branchCheckNumberMatchError());
  }

  if (!validator.accountCheckNumberMatch(accountNumber, accountCheckNumber)) {
    errors.push(validator.accountCheckNumberMatchError());
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
