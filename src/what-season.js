const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (
    isNaN(Date.parse(date)) ||
    Object.getOwnPropertyNames(date).length !== 0
  ) {
    throw new Error('Invalid date!');
  }
  const month = date.getMonth();
  const winter = [11, 0, 1];
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const autumn = [8, 9, 10];
  const season = winter.includes(month)
    ? 'winter'
    : spring.includes(month)
    ? 'spring'
    : summer.includes(month)
    ? 'summer'
    : autumn.includes(month)
    ? 'autumn'
    : null;
  return season;
}

module.exports = {
  getSeason,
};
