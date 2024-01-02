const arr = require('./array');
const filter =require('./forfilter');

function isEven(num) {
          return num % 2 === 0;
        }
        
        const evenNumbers = filter(arr, isEven);
        console.log(evenNumbers);