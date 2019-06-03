const students = require("./demo/allStudents"),
  rsvpStudents = require("./demo/rsvpStudents"),
  o1ifier = require("./src/o1ifier"),
  get = require("./src/get"),
  extractPathKeys = require("./src/extractPathKeys");

const getStudentById = o1ifier(students, "id"); // returns a function that retrieve the value of a given key from its internal index

const ONLookUpSteps = () => {
  let steps = 0;
  for (let rsvpStu of rsvpStudents) {
    for (let stu of students) {
      steps++;
      if (rsvpStu.studentId === stu.id) {
        let oNLookUp = stu;
        break;
      }
    }
  }

  return steps;
}

const O1LookUpSteps = () => {
  let steps = 0;
  for (let id of rsvpStudents) {
    steps++;
    let o1Lookup = getStudentById(id.studentId);
  }

  return steps + students.length;
}

console.log("Naive Look Up Steps: " + ONLookUpSteps());
console.log("O1-ified Look Up Steps: " + O1LookUpSteps());
console.log("Example of getStudentById(3333): " + getStudentById(3333).name);

const arr = {
  "tt": [
    0,
    1,
    {
      hi: {
        nested: "awesome"
      }
    }
  ],
  "..b.": "hello777777",
  a: [
    0,
    [0, 1, "X", 3]
  ],
  "": 344,
};

console.log(get(arr, "tt[2].hi.nested.nonexistent", {}));
console.log(get(arr, "['..b.']"));
console.log(get(arr, "a[1][2][0]"));
console.log(get(arr, "['']"));
console.log("Key Names Test:")
console.log(extractPathKeys("hello.coo.pp[077][189]['y...o'].jljkk."))
console.log(extractPathKeys("a['fff'][3]['tyy'][1]"));