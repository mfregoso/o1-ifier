const getKeysArr = require("./getPathArr");

const propGetter = (obj, path, defaultValue) => {
  if (typeof obj !== "object" || typeof path !== "string") return defaultValue;

  const keys = getKeysArr(path);
  let currVal = obj;
  let idx = 0;

  while (currVal && idx < keys.length) { // skips 0 and "" //PREV: typeof currVal === "object"
    currVal = currVal[keys[idx]];
    idx++;
  }
  
  if (currVal === undefined) currVal = defaultValue;
  return idx === keys.length ? currVal : defaultValue;
}

module.exports = propGetter;
