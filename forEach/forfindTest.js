const arr =require('./array');
const find =require('./forfind');

function isEven(num) {
          return num % 2 === 0;
        }
        
        const firstEven = find(arr, isEven);
        console.log(firstEven);