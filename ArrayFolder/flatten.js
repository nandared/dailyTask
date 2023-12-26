function flatten(elements) {
  let flattened = [];

  function flattenHelper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenHelper(arr[i]);
      } else {
        flattened.push(arr[i]);
      }
    }
  }

  flattenHelper(elements);
  return flattened;
}

module.exports = flatten;
