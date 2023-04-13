const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let dom = '';
  const arr = domains.map((domain) => domain.split('.').reverse()).flat();
  const keyArray = Array.from(new Set(arr));
  keyArray.forEach((key) => {
    dom += `.${key}`;
    result[dom] = arr.filter((el) => el === key).length;
  });
  return result;
}

module.exports = {
  getDNSStats,
};
