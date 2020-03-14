
module.exports = class BancoDoBrasilCheckNumberCalculator {
  calculateBranchNumber(branchNumber) {
    const numbers = branchNumber.split('');
    let sumSequence = 0;
    let sequence = 0;
    for (let i = 0; i < numbers.length; i++) {
      sequence = 5 - i;
      sumSequence += (parseInt(numbers[i]) * sequence);
    }
    return this.module(sumSequence);
  }

  calculateAccountNumber(accountNumber) {
    const numbers = accountNumber.split('');
    let sumSequence = 0;
    let sequence = 0;
    for (let i = 0; i < numbers.length; i++) {
      sequence = 9 - i;
      sumSequence += (parseInt(numbers[i]) * sequence);
    }
    return this.module(sumSequence);
  }

  module(sumSequence) {
    const result = 11 - (sumSequence % 11);
    if (result === 10) {
      return 'X';
    } else if (result === 11) {
      return '0';
    } else {
      return result.toString();
    }
  }
};
