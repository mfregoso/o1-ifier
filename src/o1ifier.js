const get = require("./get");

const o1ifier = (objsArr, keyPathName) => {
  if (!Array.isArray(objsArr)) throw new Error("Not an array");

  const o1indexer = (o1index, obj) => {
    const keyValue = get(obj, keyPathName);
    if (keyValue !== undefined) {
      if (o1index[keyValue] === undefined) {
        o1index[keyValue] = obj;
      }
    }
    return o1index;
  };

  const o1index = objsArr.reduce(o1indexer, {});

  const o1lookup = (key) => {
    return o1index[key];
  }

  return o1lookup;
};

module.exports = o1ifier;
