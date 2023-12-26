const nestedArray = [1, [2], [[3]], [[[4]]]];
const flatten = require("./flatten");

const flattenedArray = flatten(nestedArray);
console.log(flattenedArray);
