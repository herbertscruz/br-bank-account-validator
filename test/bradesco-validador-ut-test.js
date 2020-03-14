
const assert = require('chai').assert;
const bankAccount = require('./bank-accounts.json');
const BradescoValidator = require(
  '../lib/bradesco-validator',
);

/**
 * Unit Tests
 */
describe('lib/bradesco-validador.js', () => {
  const validator = new BradescoValidator();

  describe('bankNumberIsValid', () => {
    it('should return true', async () => {
      const result = validator.bankNumberIsValid(
        bankAccount.bradesco.bankNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.bankNumberIsValid(
        bankAccount.bancoDoBrasil.bankNumber + '0',
      );
      assert.equal(result, false);
    });
  });

  describe('branchNumberIsValid', () => {
    it('should return true', async () => {
      const result = validator.branchNumberIsValid(
        bankAccount.bradesco.branchNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.branchNumberIsValid(
        bankAccount.bancoDoBrasil.branchNumber + '0',
      );
      assert.equal(result, false);
    });
  });

  describe('branchCheckNumberIsValid', () => {
    it('should return true', async () => {
      const result = validator.branchCheckNumberIsValid(
        bankAccount.bradesco.branchCheckNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.branchCheckNumberIsValid(
        bankAccount.bancoDoBrasil.branchCheckNumber + '0',
      );
      assert.equal(result, false);
    });
  });

  describe('accountNumberIsValid', () => {
    it('should return true', async () => {
      const result = validator.accountNumberIsValid(
        bankAccount.bradesco.accountNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.accountNumberIsValid(
        bankAccount.bancoDoBrasil.accountNumber,
      );
      assert.equal(result, false);
    });
  });

  describe('accountCheckNumberIsValid', () => {
    it('should return true', async () => {
      const result = validator.accountCheckNumberIsValid(
        bankAccount.bradesco.accountCheckNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.accountCheckNumberIsValid(
        bankAccount.bancoDoBrasil.accountCheckNumber + '0',
      );
      assert.equal(result, false);
    });
  });

  describe('branchCheckNumberMatch', () => {
    it('should return true', async () => {
      const result = validator.branchCheckNumberMatch(
        bankAccount.bradesco.branchNumber,
        bankAccount.bradesco.branchCheckNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.branchCheckNumberMatch(
        bankAccount.bancoDoBrasil.branchNumber,
        bankAccount.bancoDoBrasil.branchCheckNumber + '0',
      );
      assert.equal(result, false);
    });
  });

  describe('accountCheckNumberMatch', () => {
    it('should return true', async () => {
      const result = validator.accountCheckNumberMatch(
        bankAccount.bradesco.branchNumber,
        bankAccount.bradesco.accountNumber,
        bankAccount.bradesco.accountCheckNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.accountCheckNumberIsValid(
        bankAccount.bancoDoBrasil.branchNumber,
        bankAccount.bancoDoBrasil.accountNumber,
        bankAccount.bancoDoBrasil.accountCheckNumber,
      );
      assert.equal(result, false);
    });
  });
});
