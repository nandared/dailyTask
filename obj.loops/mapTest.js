const testObject = require("./testObject");
const maps = require("./obj.map");

function transformValue(keys) {
  return keys;
}
const resultMap = maps(testObject, transformValue);
console.log(resultMap);
