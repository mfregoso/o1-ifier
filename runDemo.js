const data = require("./demo/testData"),
  o1ifier = require("./src/o1ifier"),
  get = require("./src/propGetter");

const o1ifiedData = o1ifier(data, "id"); // build an object that is indexed by value of "id"

const desiredIDs = [1, 2, 6, 7, "undefined", null];

for (let id of desiredIDs) {
  let o1Lookup = o1ifiedData[id];
  let val = get(o1Lookup, "value")
  
  if (val !== undefined) console.log(`ID ${id} = ${val}`)
}