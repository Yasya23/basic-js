const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = n.toString().split('');
  let arr = [];
  for (let i = 0; i < number.length; i++) {
    let copyArray = [...number];
    copyArray.splice(i, 1);
    arr.push(copyArray.join(''));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};
