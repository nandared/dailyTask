const items = require("./arrayItems");
const each = require("./each");

const resultEach = each(items, (item, index) => {
  console.log(`Item at index ${index}: ${item}`);

  return item * 1;
});

console.log(resultEach);
