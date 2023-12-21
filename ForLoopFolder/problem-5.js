function getYear(inventory, year) {
  for (i = 0; i < inventory.length; i++) {
    if (inventory[i].car_year >= year) {
      console.log(inventory[i].car_year);
    }
  }
}
module.exports = getYear;
