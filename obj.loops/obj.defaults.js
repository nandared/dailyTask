function defaults(obj, defaultProps) {
  for (let key in defaultProps) {
    obj[key] = defaultProps[key];
  }
  return obj;
}

module.exports = defaults;
