const extractPathKeys = require("./extractPathKeys");

const get = (obj, path, defaultValue) => {
  const keys = extractPathKeys(path);
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

module.exports = get;
