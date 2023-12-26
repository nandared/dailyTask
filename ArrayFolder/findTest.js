const items = require("./arrayItems");
const find = require("./find");

const resultItem = find(items, (item) => item === 3);
console.log(resultItem);
