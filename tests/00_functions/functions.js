/* eslint-disable consistent-return */
function max(num1 = 0, num2 = 0, num3 = 0) {
  if(num1 >= num2 && num1 >= num3){
    maxNum = num1
  }else if(num2 >= num1 && num2 >= num3){
    maxNum = num2
  }else{
    maxNum = num3
  }
  return maxNum
}

function addUnknown(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0) {
  sum = num1 + num2 + num3 + num4 + num5
  return sum
}

function evenOrOdd(num) {
  if(num % 2 === 0){
    evenOrOddNum = "even"
  }else{
    evenOrOddNum = "odd"
  }
  return evenOrOddNum
}

function operator(num1 = 0, num2 = 0, num3 = 0) {
  if(num1 + num2 === num3){
    operatorSign = "plus"
  }else if(num1 - num2 === num3){
    operatorSign = "minus"
  }else if(num1 * num2 === num3){
    operatorSign = "multiply"
  }else if(num1 / num2 === num3){
    operatorSign = "divide"
  }else{
    operatorSign = "null"
  }
  return operatorSign
}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
