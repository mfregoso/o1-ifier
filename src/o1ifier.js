const get = require("./get");

const o1ifier = (objsArr, keyName) => {
  if (!Array.isArray(objsArr)) throw new Error("Not an array");

  let hasMap = true;
  try {new Map()}
  catch(e) {hasMap = false;}

  const index = hasMap ? new Map() : {};

  for (let i = 0; i < objsArr.length; i++) {
    const obj = objsArr[i];
    const keyValue = get(obj, keyName);
    
    if (keyValue !== undefined) {
      if (hasMap && !index.has(keyValue)) {
        index.set(keyValue, obj);
      } else if (!hasMap && index[keyValue] === undefined) {
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
