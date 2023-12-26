const items = require("./arrayItems");
const reduce = require("./reduce");

const sum = reduce(items, (acc, item) => acc + item, 0);
console.log(sum);
