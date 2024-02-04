//Template strings are better alternative to string concatenation.
// we can pass dynamic values in backtick.

let x = 12;
let y = 45;


//ES5
console.log("The sum of " + x + " and " + y + " is " + (x + y));
console.log("Month number should be \
                  between 1 and 12");
//In this ES5 example, we are using the + operator for string concatenation. Notice how we need to use multiple + operators to combine strings and variables.

//ES6
console.log(`The sum of ${x} and ${y} is ${x + y}`);
console.log(`Month number should be 
between 1 and 12`);

// In this ES6 example, we use backticks () to create template strings. The ${}` syntax allows us to directly embed variables and expressions within the string, making the code more concise and readable.