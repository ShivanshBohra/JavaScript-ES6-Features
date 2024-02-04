// Default Parameters: ES6 allows function parameters to have default values.
const sum = (x, y) => x + y;
let s = sum(2, 3); // Okay if we pass values
console.log(s); // Output: 5

/*But what if we do not pass values while calling?
In that case, we can use default parameters*/

const sum1 = (x = 3, y = 5) => x + y;
let s1 = sum1(); // Using default values
console.log(s1); // Output: 8

console.log(sum1(45, 24)); // Output: 69

// If no values are passed, it gives NaN (Not a Number)
// NaN represents a value that is not a valid number.

let result = sum1(undefined, 10); // Using default for x
console.log(result); // Output: 13


//In the sum1 function, default values are specified for both x and y. If you don't pass arguments when calling the function, it uses the default values. If you provide arguments, those values override the defaults.

// Note that if you explicitly pass undefined for a parameter, the default value will be used. In the last example (sum1(undefined, 10)), the default value for x is used, and the result is 3 + 10 = 13.