
module.exports = class ItauCheckNumberCalculator {
  calculateBranchNumber(branchNumber) {
    return true;
  }

  calculateAccountNumber(branchNumber, accountNumber) {
    const numbers = (branchNumber + accountNumber).split('');
    let sumSequence = 0;
    let sequence = 0;
    for (let i = 0; i < numbers.length; i++) {
      const number = parseInt(numbers[i]);
      sequence = this.multiplyAccordingParity(number, i);
      sequence = this.adjustAccordingLength(sequence);
      sumSequence += sequence;
    }
    return this.module(sumSequence);
  }

  multiplyAccordingParity(number, index) {
    return number * (index % 2 === 0 ? 2 : 1);
  }

  adjustAccordingLength(sequence) {
    if (sequence > 9) {
      const numbers = sequence.toString().split('');
      sequence = 0;
      for (let i = 0; i < numbers.length; i++) {
        sequence += parseInt(numbers[i]);
      }
    }
    return sequence;
  }

  module(sumSequence) {
    const result = sumSequence % 10;
    if (result === 0) {
      return '0';
    } else {
      return (10 - result).toString();
    }
  }
};
