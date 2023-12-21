function mapObject(obj, cb) {
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = cb(obj[key]);
    }
  }
  return result;
}

module.exports = mapObject;
