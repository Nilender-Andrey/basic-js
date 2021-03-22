const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, variableDepth = 0, depth = 0) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        variableDepth = this.calculateDepth(arr[i]);
        if (depth < variableDepth) depth = variableDepth;
      }
      return depth + 1;
    } else return 0;
  }
};
