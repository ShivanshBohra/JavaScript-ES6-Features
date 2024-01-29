// Default Parameters: ES6 allows function parameters to have default values.
const sum = (x,y) => x+y;
let s = sum(2,3); // is ok if we pass values
console.log(s);

/*But what if we not passed values while calling
that time we use default parameters*/

const sum1 = (x = 3, y = 5) => x+y;
let s1 = sum1();
console.log(s1); 
console.log(sum(45,24))

//if not pass any value it give NAN
// NAN : Not A Number: It represents a value that is not a valid number.
