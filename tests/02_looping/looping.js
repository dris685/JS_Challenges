/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  factorialResult = 1
  for(i = num; i >= 1; i--){
      factorialResult = factorialResult * i
  }
  return factorialResult
}

function stringReverse(str) {
  strReverse = ""
  for(i = str.length-1; i >= 0; i--){
      strReverse = strReverse + str.charAt(i)
  }
  return strReverse
}

function slicer(str, startIdx = 0, endIdx = str.length - 1) {
  sliceStr = ""
  for(i = startIdx; i <= endIdx; i++){
      sliceStr = sliceStr + str.charAt(i)
  }
  return sliceStr
}

function addTheEvens(num) {
  sumEven = 0
    if(num % 2 != 0){
        for(i = num-1; i >= 0; i = i-2){
            sumEven = sumEven + i
        }
    }else{
        for(i = num; i >= 0; i = i-2){
            sumEven = sumEven + i
        }
    }
    return sumEven
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
