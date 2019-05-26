const getPathArr = require("./getPathArr");

const propGetter = (obj, path, defaultValue) => {
  if (typeof obj !== "object" || typeof path !== "string") return defaultValue;

  const keys = getPathArr(path);
  const lastKeyIndex = keys.length - 1;
  let currObj = obj;

  for (let i = 0; i <= lastKeyIndex; i++) {
    const keyName = keys[i];
    const thisValue = currObj[keyName];
    if (i !== lastKeyIndex && typeof thisValue === "object") {
      currObj = thisValue;
    } else if (thisValue === undefined) {
      return defaultValue;
    }
    if (i === lastKeyIndex && thisValue !== undefined) {
      return thisValue;
    }
  }

  return defaultValue;
}

module.exports = propGetter;
