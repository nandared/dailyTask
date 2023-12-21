const inventory = require("./inventory");
const getLastCar = require("./problem-2");

const lastCar = getLastCar(inventory);

console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
