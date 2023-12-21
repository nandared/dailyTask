const inventory = require("./inventory");

function getCar(inventory) {
  for (i = 0; i < inventory.length; i++) {
    if (inventory[i].car_make === "BMW" || inventory[i].car_make === "Audi") {
      console.log(inventory[i]);
    }
  }
}

module.exports = getCar;
