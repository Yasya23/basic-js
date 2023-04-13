const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  const arrFromString = str.split('');
  let el = null;
  let count = 0;
  let res = [];
  const loop = arrFromString.forEach((key, index) => {
    if (index === 0) {
      el = key;
    }
    if (el === key) {
      count += 1;
    } else {
      res.push(count !== 1 ? count + el : el);
      console.log(res);
      count = 1;
      el = key;
    }
  });
  res.push(count !== 1 ? count + el : el);
  return res.join('');
}

module.exports = {
  encodeLine,
};
