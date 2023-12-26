function map(item, cb) {
  const result = [];
  for (let i = 0; i < item.length; i++) {
    result.push(cb(item[i], i));
  }
  return result;
}

module.exports = map;
