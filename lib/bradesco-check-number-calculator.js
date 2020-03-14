
module.exports = class BradescoCheckNumberCalculator {
  calculateBranchNumber(branchNumber) {
    const numbers = branchNumber.split('');
    let sumSequence = 0;
    let sequence = 0;
    for (let i = 0; i < numbers.length; i++) {
      sequence = 5 - i;
      sumSequence += (parseInt(numbers[i]) * sequence);
    }
    return this.branchNumberModule(sumSequence);
  }

  branchNumberModule(sumSequence) {
    const result = 11 - (sumSequence % 11);
    if (result === 10) {
      return 'P';
    } else {
      if (result === 11) {
        return '0';
      } else {
        return result.toString();
      }
    }
  }

  calculateAccountNumber(accountNumber) {
    const numbers = accountNumber.split('');
    let sumSequence = 0;
    for (let i = 0; i < numbers.length; i++) {
      const number = parseInt(numbers[i]);
      sumSequence += this.multiplyAccordingWeight(number, i);
    }
    return this.accountNumberModule(sumSequence);
  }

  multiplyAccordingWeight(number, i) {
    const weight = [2, 7, 6, 5, 4, 3, 2];
    return number * weight[i];
  }

  accountNumberModule(sumSequence) {
    const result = sumSequence % 11;
    if (result === 0) {
      return '0';
    } else if (result === 1) {
      return 'P';
    } else {
      return (11 - result).toString();
    }
  }
};
