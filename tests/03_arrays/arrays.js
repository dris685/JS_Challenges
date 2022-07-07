/* eslint-disable no-unused-vars */
function multiply(arr) {
  flatArray = arr.flat(Infinity)
  multiplyResult = 1
  for(i = 0; i < flatArray.length; i++){
      multiplyResult = multiplyResult * flatArray[i]
  }
  return multiplyResult
}

function includesCopy(arr, searchValue) {
  isInclude = false
  for(i = 0; i < arr.length; i++){
      if(searchValue === arr[i]){
          isInclude = true
          break;
      }
  }
  return isInclude
}

function camelCase(str) {
  capStr = ""
  capChar = ""
  sliceStr = ""
  if(str.charAt(str.length-1) === "!"){
      sliceStr = str.slice(0,str.length-1)
      newStr = sliceStr.charAt(0).toLowerCase()
      for(i = 1; i < sliceStr.length; i++){
          if(sliceStr.charAt(i) === " "){
              capChar = sliceStr.charAt(i+1).toUpperCase()
              newStr = newStr + capChar
          }else if(sliceStr.charAt(i-1) !== " " && sliceStr.charAt(i) !== " "){
              capStr = sliceStr.charAt(i)
              newStr = newStr + capStr
          }
      }
  }else{
      newStr = str.charAt(0).toLowerCase()
      for(i = 1; i < str.length; i++){
          if(str.charAt(i) === " "){
              capChar =str.charAt(i+1).toUpperCase()
              newStr = newStr + capChar
          }else if(str.charAt(i-1) !== " " && str.charAt(i) !== " "){
              capStr = str.charAt(i)
              newStr = newStr + capStr
          }
      }
  }
  return newStr
}

function inventory(arr) {
  if(typeof(arr[0]) === "string"){
      console.log(`The ${arr[1][0]} ${arr[0]} is ${arr[1][1]} dollars.`)
  }else{
      for(i = 0; i < arr.length; i++){
          console.log(`The ${arr[i][1][0]} ${arr[i][0]} is ${arr[i][1][1]} dollars.`)
      }
  }
}

function joiner() {
    return arr.join(str)
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
