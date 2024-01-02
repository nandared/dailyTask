const arr =require('./array');
const map =require('./formap');


function double(arr) {
  return arr * 2;
}

const doubledArray = map(arr, double);
console.log(doubledArray); 