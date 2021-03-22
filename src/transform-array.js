const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr === undefined || arr.length === 0) {
    return 0;
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") i++;
    if (arr[i] === "--discard-prev") {
      newArr.pop();
      i++;
    }

    if (arr[i] === "--double-next") {
      newArr.push(arr[i + 1]);

      continue;
    }
    if (arr[i] === "--double-prev") {
      newArr.push(arr[i - 1]);
      continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
};
