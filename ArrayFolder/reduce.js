function reduce(elements, cb, startingValue) {
  let acc = startingValue !== null ? startingValue : elements[0];
  const startTest = startingValue !== null ? 0 : 1;

  for (let i = startTest; i < elements.length; i++) {
    acc = cb(acc, elements[i]);
  }

  return acc;
}

module.exports = reduce;
