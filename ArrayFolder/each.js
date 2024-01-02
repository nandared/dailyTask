function each(items, cb) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(cb(items[i], i));
  }
  return result;

}

module.exports = each;
