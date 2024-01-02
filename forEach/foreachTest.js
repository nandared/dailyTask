const arr =require('./array');
const each =require('./foreach');

function callback(arr, index) {
          console.log(`Element at index ${index}: ${arr}`);
        }
        each(arr, callback);