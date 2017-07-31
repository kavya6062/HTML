/** Data types in Javascript 
 * Number
 * String
 * Boolean
 * null
 * undefined
 * ***/

var a=10;
console.log(typeof a);

var b = "10";
console.log(typeof b, a==b , a===b );
//== checks only value. But === checks only number

var c = parseInt(b) ;  // parseFloat used to conver string to float value.
console.log(typeof c);


var str = "Welcome to Javascript programming";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.split(" "));

function checkPalindrome(value){
  return value.toUpperCase() === value.split("").reverse().join("").toUpperCase(); 
}

console.log("The String is ", checkPalindrome("Liril"));





