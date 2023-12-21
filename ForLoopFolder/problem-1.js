const findCarById = (inventory, id) => {
  return inventory[id - 1];
};

module.exports = findCarById;
