const propGetter = (obj, path, defaultValue) => {
  if (!obj || !path || typeof obj !== "object" && typeof path !== "string") return undefined;

  const keys = path.split(".");
  const lastKeyIndex = keys.length - 1;
  let currObj = obj;

  for (let i = 0; i <= lastKeyIndex; i++) {
    const keyName = keys[i];
    const thisValue = currObj[keyName];
    if (i !== lastKeyIndex && typeof thisValue === "object") {
      currObj = thisValue;
    } else if (thisValue === undefined) {
      return undefined;
    }
    if (i === lastKeyIndex && thisValue !== undefined) {
      return thisValue;
    }
  }

  return defaultValue;
}

module.exports = propGetter;
