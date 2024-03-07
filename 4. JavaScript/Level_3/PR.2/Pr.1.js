// Method: 1

let start = ["january","july","march","august"];

console.log(`Start Array: [${start}]`);
start[0] = "july";
start[1] = "june";

console.log('----------');
console.log(`Final Array: [${start}]`);

console.log("=================================");
// Method : 2

let start1 = ["january","july","march","august"];
console.log(`Start Array: [${start1}]`);
start1.shift()
start1.shift()
start1.unshift("june")
start1.unshift("july")
console.log('----------');
console.log(`Final Array: [${start1}]`);