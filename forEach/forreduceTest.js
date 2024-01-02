const arr = require('./array');
const reduce = require('./forreduce');

function add(accumulator, currentValue) {
          return accumulator + currentValue;
        }
        
        const sum = reduce(arr, add, 0);
        console.log(sum); 
