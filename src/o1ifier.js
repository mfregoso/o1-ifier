const get = require("./get");

const o1ifier = (objsArr, keyName) => {
  const index = {};
  if (Array.isArray(objsArr)) {
    for (const obj of objsArr) {
      const keyValue = get(obj, keyName);
      if (keyValue !== undefined) index[keyValue] = obj;
    }
  }
  return index;
};

module.exports = o1ifier;
module.exports.get = get;
