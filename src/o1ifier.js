const propGetter = require("./propGetter");

const o1ifier = (objsArr, keyName) => {
  const index = {};
  if (Array.isArray(objsArr)) {
    for (const obj of objsArr) {
      const keyValue = propGetter(obj, keyName);
      if (keyValue !== undefined) index[keyValue] = obj;
    }
  }
  return index;
};

module.exports = o1ifier;
