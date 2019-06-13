const get = require("./get");

const o1ifier = (objsArr, keyName) => {
  if (!Array.isArray(objsArr)) throw new Error("Not an array");

  const index = {};

  for (let i = 0; i < objsArr.length; i++) {
    const obj = objsArr[i];
    const keyValue = get(obj, keyName);
    
    if (keyValue !== undefined) {
      if (index[keyValue] === undefined) {
        index[keyValue] = obj;
      }
    }
  }

  const getItem = (key) => {
    return index[key];
  }

  return getItem;
};

module.exports = o1ifier;
