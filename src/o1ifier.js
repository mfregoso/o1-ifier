const get = require("./get");

const o1ifier = (objsArr, keyName) => {
  if (!Array.isArray(objsArr)) throw new Error("Not an array");

  let hasMap = true;
  try {new Map()}
  catch(e) {hasMap = false;}

  const index = hasMap ? new Map() : {};

  for (const obj of objsArr) {
    const keyValue = get(obj, keyName);
    if (keyValue !== undefined) {
      if (hasMap && !index.has(keyValue)) {
        index.set(keyValue, obj);
      } else {
        index[keyValue] = obj;
      }
    }
  }

  const getItem = (key) => {
    if (hasMap) return index.get(key);
    return index[key];
  }

  return getItem;
};

module.exports = o1ifier;
