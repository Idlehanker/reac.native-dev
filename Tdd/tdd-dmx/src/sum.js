'use strict';

function sum(a, b){
  return a+b;
}

function forEach(items, callback){
  for(let index = 0; index < items.length; index++){
    callback(items[index]);
  }
}
// export default sum; //why this formulate evalute failure? Complain "TypeError: sum is not a function"
module.exports = {
  sum,
  forEach,
};
