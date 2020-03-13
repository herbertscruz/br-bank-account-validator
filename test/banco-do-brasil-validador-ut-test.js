
const assert = require('chai').assert;
const bankAccount = require('./bank-accounts.json');
const BancoDoBrasilValidator = require(
  '../lib/banco-do-brasil-validador',
);

/**
 * Unit Tests
 */
describe('lib/banco-do-brasil-validador.js', () => {
  const validator = new BancoDoBrasilValidator();

  describe('bankNumberIsValid', () => {
    it('should return true', async () => {
      const result = validator.bankNumberIsValid(
        bankAccount.bancoDoBrasil.bankNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.bankNumberIsValid(
        'xptoabc',
      );
      assert.equal(result, false);
    });
  });

  describe('branchNumberIsValid', () => {
    it('should return true', async () => {
      const result = validator.branchNumberIsValid(
        bankAccount.bancoDoBrasil.branchNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.branchNumberIsValid(
        'xptoabc',
      );
      assert.equal(result, false);
    });
  });

  describe('branchCheckNumberIsValid', () => {
    it('should return true', async () => {
      const result = validator.branchCheckNumberIsValid(
        bankAccount.bancoDoBrasil.branchCheckNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.branchCheckNumberIsValid(
        'xp',
      );
      assert.equal(result, false);
    });
  });

  describe('accountNumberIsValid', () => {
    it('should return true', async () => {
      const result = validator.accountNumberIsValid(
        bankAccount.bancoDoBrasil.accountNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.accountNumberIsValid(
        'xptoabc',
      );
      assert.equal(result, false);
    });
  });

  describe('accountCheckNumberIsValid', () => {
    it('should return true', async () => {
      const result = validator.accountCheckNumberIsValid(
        bankAccount.bancoDoBrasil.accountCheckNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.accountCheckNumberIsValid(
        'xp',
      );
      assert.equal(result, false);
    });
  });

  describe('branchCheckNumberMatch', () => {
    it('should return true', async () => {
      const result = validator.branchCheckNumberMatch(
        bankAccount.bancoDoBrasil.branchNumber,
        bankAccount.bancoDoBrasil.branchCheckNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.branchCheckNumberMatch(
        'xptoabc',
        'xp',
      );
      assert.equal(result, false);
    });
  });

  describe('accountCheckNumberMatch', () => {
    it('should return true', async () => {
      const result = validator.accountCheckNumberMatch(
        bankAccount.bancoDoBrasil.accountNumber,
        bankAccount.bancoDoBrasil.accountCheckNumber,
      );
      assert.equal(result, true);
    });

    it('should return false', async () => {
      const result = validator.accountCheckNumberIsValid(
        'xptoabc',
        'xp',
      );
      assert.equal(result, false);
    });
  });
});
