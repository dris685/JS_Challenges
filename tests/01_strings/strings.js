/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
    isInclude = false
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === letter){
            isInclude = true
        }
    }
    return isInclude

    // ANOTHER SOLUTION
    // if(str.includes(letter)){
    //     isInclude = true
    // }else{
    //     isInclude = false
    // }
    // return isInclude
}

function isPalindrome(str) {
    isStringPalindrome = true
    for(i = 0; i < str.length/2; i++){
        if(str.charAt(i) !== str.charAt(str.length-1-i)){
            isStringPalindrome = false
        }
    }
    return isStringPalindrome

    // ANOTHER SOLUTION
    // reverseString = ""
    // for(i = str.length-1; i>=0; i--){
    //     reverseString = reverseString + str.charAt(i)
    // }
    // if(str === reverseString){
    //     isStringPalindrome = true
    // }else{
    //     isStringPalindrome = false
    // }
    // return isStringPalindrome
}

function cap(str, letter) {
    charUpperCase = ""
    for(i = 0; i < str.length; i++){
        if(str.charAt(i) === letter){
            charUpperCase = str.charAt(i+1).toUpperCase()
            break;
        }else{
            charUpperCase = "sorry not found"
        }
    }
    return charUpperCase
}

function firstCharacter(str1, str2) {
    isFirstCharTheSame = "false"
    if(str1.charAt(0) === str2.charAt(0) || str1.charAt(0).toLowerCase() === str2.charAt(0).toLowerCase()){
        isFirstCharTheSame = true
    }else{
        isFirstCharTheSame = false
    }
    return isFirstCharTheSame
}

module.exports = { cap, firstCharacter };
