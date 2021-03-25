const CustomError = require("../extensions/custom-error");

const chainMaker = {
  step: [],

  getLength() {
    return this.step.length;
  },
  addLink(value) {
    this.step.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (!isFinite(position) || !Number.isInteger(position)) {
      this.step = [];
      throw new Error();
    }
    this.step.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.step.reverse();

    return this;
  },
  finishChain() {
    let finish = this.step.join("~~");
    this.step = [];

    return finish;
  },
};

module.exports = chainMaker;
