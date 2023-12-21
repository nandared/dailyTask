const testObject = require("./testObject");
const defaults = require("./obj.defaults");

const resultDefaults = defaults(testObject);
console.log(resultDefaults);
