const items = require("./arrayItems");
const filter = require("./filter");

const filteredItems = filter(items, (item) => item > 3);
console.log(filteredItems);
