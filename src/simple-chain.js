const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    value === undefined
      ? this.links.push('(  )')
      : this.links.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    const checkPosition =
      position <= 0 ||
      position > this.links.length ||
      typeof position !== 'number';
    if (checkPosition) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    const chain = this.links.join('~~');
    this.links = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
