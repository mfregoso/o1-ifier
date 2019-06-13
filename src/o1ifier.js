const get = require("./get");

const o1ifier = (objsArr, keyPathName, overwrite) => {
  if (!Array.isArray(objsArr)) throw new Error("Not an array");

  const o1indexer = (o1index, obj, idx) => {
    const keyValue = get(obj, keyPathName);
    if (keyValue !== undefined) {
      const o1Obj = {key: keyValue, obj, idx};
      if (o1index[keyValue] === undefined) {
        o1index[keyValue] = [o1Obj];
      } else if (get(o1index[keyValue][0], "key") !== keyValue && get(o1index[keyValue][1], "key") !== keyValue) {
        o1index[keyValue].push(o1Obj);
      } else if (overwrite) {
        const store = o1index[keyValue];
        for (let i = 0; i < store.length; i++) {
          if (store[i].key === keyValue) store[i].obj = obj;
        }
      }
    }
    return o1index;
  };

  const o1index = objsArr.reduce(o1indexer, {});

  const o1lookup = (key) => {
    const store = o1index[key];
    if (Array.isArray(store)) {
      for (let i = 0; i < store.length; i++) {
        if (store[i].key === key) return store[i].obj;
      }
    }
  }

  return o1lookup;
};

module.exports = o1ifier;
