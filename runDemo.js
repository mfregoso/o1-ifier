const data = require("./demo/testData"),
  o1ifier = require("./src/o1ifier");

const o1ifiedData = o1ifier(data, "id"); // build an object that is indexed by value of "id"

const desiredIDs = [1, 2, 6, 7, "undefined", null]; // 

const ONLookUpSteps = () => {
  let steps = 0;

  for (let desiredID of desiredIDs) {
    for (let item of data) {
      steps++;
      if (desiredID === item.id) {
        let oNLookUp = item;
      }
    }
  }

  return steps;
}

const O1LookUpSteps = () => {
  let steps = 0;

  for (let id of desiredIDs) {
    steps++;
    let o1Lookup = o1ifiedData[id];
  }

  return steps + data.length;
}

console.log("Naive Look Up Steps: " + ONLookUpSteps());
console.log("O1-ified Look Up Steps: " + O1LookUpSteps());