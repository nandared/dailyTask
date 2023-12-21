const inventory = require("./inventory");
const findCarById = require("./problem-1");
const car = findCarById(inventory, 33);

if (car) {
  console.log(
    `My car id is: ${car.id}, my car make is: ${car.car_make}, my car model is: ${car.car_model}`
  );
} else {
  console.log("Car not found in the inventory.");
}
