const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const array = [...arr];
  let isRemoved = false;
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  if (array.includes(discardNext)) {
    const index = array.indexOf(discardNext);
    checkNextElemens =
      arr[index + 2] === doublePrev || arr[index + 2] === discardPrev;
    if (checkNextElemens) isRemoved = true;
    array.splice(index, 2);
  }
  if (array.includes(discardPrev)) {
    const index = array.indexOf(discardPrev);
    index === 0 || isRemoved
      ? array.splice(index, 1)
      : array.splice(index - 1, 2);
  }
  if (array.includes(doubleNext)) {
    const index = array.indexOf(doubleNext);
    index === array.length - 1
      ? array.splice(index, 1)
      : (array[index] = arr[index + 1]);
  }
  if (array.includes(doublePrev)) {
    const index = array.indexOf(doublePrev);
    isRemoved || index === 0
      ? array.splice(index, 1)
      : (array[index] = arr[index - 1]);
  }
  return array;
}

module.exports = {
  transform,
};
