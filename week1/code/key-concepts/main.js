/*
 *	Examples/Assignments of some key concepts of JS based on
 *	http://www.hunlock.com/blogs/Functional_Javascript
 *	http://eloquentjavascript.net/chapter6.html
 */


/*
 *   Assignment: primitive and referenced vars
 */

var iValue = 20; // primitive value
var iCurrentValue = iValue;

console.log('iValue: ' + iValue);
console.log('iCurrentValue: ' + iCurrentValue);

iValue = iValue + 20;
console.log('iValue added with 20:');
console.log('iValue: ' + iValue);
console.log('iCurrentValue: ' + iCurrentValue);

var oAccount = {amount: 40}; //referenced vars
var oNewAccount = oAccount;

console.log('oAccount: ' + oAccount.amount);
console.log('oNewAccount: ' + oNewAccount.amount);

oAccount.amount = oAccount.amount + 50;
console.log('oAccount added with 30:');
console.log('oAccount: ' + oAccount.amount);
console.log('oNewAccount: ' + oNewAccount.amount);


/*
 *   Assignment: amount function with multiple parameters
 */


// function amount() {
//   var result = 0,
//       i = 0,
//       len = arguments.length;
//   while (i < len) {
//     result += arguments[i];
//     i++;
//   }
//   return result;
// }

// console.log(amount(1, 2)); // 3
// console.log(amount(3, 4, 5, 6)); // 18
// console.log(amount(50)); // 50
// console.log(amount()); // 0

/*
 *   Assignment: simple functional programming
 */

// function alertArray(array) {
//   for (var i = 0; i < array.length; i++) {
//     alert(array[i]);
//   }
// }

// alertArray([1,2,3,4]);

// function forEach(array, action) {
//   for (var i = 0; i < array.length; i++) {
//     action(array[i]);
//   }
// }

// forEach(["Wampeter", "Foma", "Granfalloon"], alert);
