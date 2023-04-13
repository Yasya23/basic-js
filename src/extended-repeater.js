const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, option) {
  const {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|',
  } = option;
  const additionString = addition === null ? 'null' : addition;
  const additionsGroup = new Array(additionRepeatTimes)
    .fill(additionString)
    .join(additionSeparator);
  const string = str + additionsGroup;
  const result = new Array(repeatTimes).fill(string).join(separator);
  return result;
}

module.exports = {
  repeater,
};
