function sortCarModelsAlphabetically(inventory) {
  const sortModels = [];

  for (let i = 0; i < inventory.length - 1; i++) {
    sortModels.push(inventory[i].car_model);
  }

  return sortModels.sort();
}

module.exports = sortCarModelsAlphabetically;
