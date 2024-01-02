function reduce(elements, cb, startingValue) {
          let acc = startingValue !== undefined ? startingValue : elements[0];
          const startIndex = startingValue !== undefined ? 0 : 1;
        
          for (let i = startIndex; i < elements.length; i++) {
            acc = cb(acc, elements[i]);
          }
        
          return acc;
        }
        module.exports = reduce;