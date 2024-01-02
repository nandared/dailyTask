const arr = require('./array');
const flatten = require('./forflatten');

const nestedArray = [1, [2], [[3]], [[[4]]]];

const flattenedArray = flatten(nestedArray);
console.log(flattenedArray); 