const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let sum = depth;
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        const arraySum = this.calculateDepth(el, depth + 1);
        if (arraySum > sum) sum = arraySum;
      }
    });
    return sum;
  }
}

module.exports = {
  DepthCalculator,
};
