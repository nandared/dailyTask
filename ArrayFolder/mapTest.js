const items = require("./arrayItems");
const map = require("./map");

const resultMapped = map(items, (item) => {
  return item * 2;
});

console.log(resultMapped);
