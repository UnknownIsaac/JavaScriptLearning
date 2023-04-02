// Reversing string exercise

// the split() function is used to convert the string into an 
// array of individual characters, the reverse() function is 
// used to reverse the order of the characters in the array, and
// the join() function is used to convert the array back into a 
// string. The resulting string is the reversed version of the original string.

function reverseString(str) {
let splitString = str.split("");
let stringArray = splitString.reverse();
let joinArray = stringArray.join("");
return joinArray
}

console.log(reverseString("hello"))