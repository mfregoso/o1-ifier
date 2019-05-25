const propGetter = require("./propGetter");

const o1ifier = (objsArr, keyName) => {
  const index = {};
  if (Array.isArray(objsArr) && propGetter(objsArr[0], keyName) !== undefined) {
    for (const obj of objsArr) {
      const keyValue = propGetter(obj, keyName);
      index[keyValue] = obj;
    }
  }
  return index;
};

module.exports = o1ifier;
