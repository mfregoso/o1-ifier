const getKeysArr = require("./getPathArr");

const propGetter = (obj, path, defaultValue) => {
  const keys = getKeysArr(path);
  if (!keys.length || typeof obj !== "object") return defaultValue;
  let currVal = obj;
  let idx = 0;

  while (currVal && idx < keys.length) {
    currVal = currVal[keys[idx]];
    idx++;
  }
  
  if (currVal === undefined) currVal = defaultValue;
  return idx === keys.length ? currVal : defaultValue;
}

module.exports = propGetter;
