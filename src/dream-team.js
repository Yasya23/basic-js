const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) return false;
  const teamName = members
    .map((member) => {
      if (typeof member === 'string') {
        let checkMember = member.replace(/\s/g, '');
        return checkMember[0].toUpperCase();
      }
    })
    .sort((a, b) => (b > a ? -1 : 1))
    .join('');
  return teamName;
}

module.exports = {
  createDreamTeam,
};
