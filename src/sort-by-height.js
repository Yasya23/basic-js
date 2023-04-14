const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const element = -1;
  const indexes = [];
  arr.forEach((el, index) => {
    if (el === element) indexes.push(index);
  });

  const array = arr.filter((el) => el !== element).sort((a, b) => a - b);
  indexes.forEach((index) => array.splice(index, 0, element));
  return array;
}

module.exports = {
  sortByHeight,
};
