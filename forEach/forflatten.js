function flatten(elements) {
          const result = [];
        
          function flattenHelper(arr) {
            for (let i = 0; i < arr.length; i++) {
              if (Array.isArray(arr[i])) {
                flattenHelper(arr[i]);
              } else {
                result.push(arr[i]);
              }
            }
          }
        
          flattenHelper(elements);
          return result;
        }

        module.exports = flatten;