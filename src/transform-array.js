const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray()) throw new Error();

  let newArr = arr.concat();
  for (let i = 0; i < newArr.length; i++) {
    for (let i = 0; i < newArr.length; i++) {
      if (
        newArr[i - 1] === "--discard-next" &&
        newArr[i + 1] === "--discard-prev"
      ) {
        newArr.splice(i - 1, 3);
        continue;
      }
      if (
        newArr[i - 1] === "--double-next" &&
        newArr[i + 1] === "--double-prev"
      ) {
        newArr.splice(i + 1, 1, newArr[i]);
        newArr.splice(i - 1, 1, newArr[i]);
        continue;
      }
      if (
        newArr[i - 1] === "--discard-next" &&
        newArr[i + 1] === "---double-prev"
      ) {
        newArr.splice(i + 1, 1);
        newArr.splice(i - 1, 1);
        continue;
      }
      if (
        newArr[i - 1] === "--double-next" &&
        newArr[i + 1] === "--discard-prev"
      ) {
        newArr.splice(i + 1, 1);
        newArr.splice(i - 1, 1);
        continue;
      }
    }
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === "--double-next") newArr.splice(i, 1, newArr[i + 1]);
      if (newArr[i] === "---double-prev") newArr.splice(i, 1, newArr[i - 1]);
      if (newArr[i] === "--discard-next") newArr.splice(i, 2);
      if (newArr[i] === "--discard-prev") {
        newArr.splice(i, 1);
        newArr.splice(i - 1, 1);
      }
    }
  }
  return newArr;
};
