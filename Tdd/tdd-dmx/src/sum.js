'use strict';

function sum(a, b){
  return a+b;
}


// export default sum; //why this formulate evalute failure? Complain "TypeError: sum is not a function"
module.exports = sum;
