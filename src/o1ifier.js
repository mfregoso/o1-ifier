const propGetter = require("./propGetter");

const o1ifier = (objsArr, keyName) => {
  const index = {};
  if (objsArr.length && typeof (keyName) === "string" && propGetter(objsArr[0], keyName)) {
    for (const obj of objsArr) {
      const keyValue = propGetter(obj, keyName);
      index[keyValue] = obj;
    }
  }
  return index;
};

module.exports = o1ifier;
