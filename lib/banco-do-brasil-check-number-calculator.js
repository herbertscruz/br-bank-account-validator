
module.exports = class BancoDoBrasilCheckNumberCalculator {
  calculateAccount(accountNumber) {
    const numbers = accountNumber.split('');
    let sumSequence = 0;
    let sequence = 0;
    for (let i = 0; i < numbers.length; i++) {
      sequence = 9 - i;
      sumSequence += (parseInt(numbers[i]) * sequence);
    }
    return this.module(sumSequence);
  }

  calculateAgency(agencyNumber) {
    const numbers = agencyNumber.split('');
    let sumSequence = 0;
    let sequence = 0;
    for (let i = 0; i < numbers.length; i++) {
      sequence = 5 - i;
      sumSequence += (parseInt(numbers[i]) * sequence);
    }
    return this.module(sumSequence);
  }

  module(sumSequence) {
    const result = 11 - (sumSequence % 11);
    if (result === 10) {
      return 'X';
    } else {
      if (result === 11) {
        return '0';
      } else {
        return result.toString();
      }
    }
  }
};
