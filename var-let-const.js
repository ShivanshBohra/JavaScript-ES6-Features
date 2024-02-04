// 1. Function Scope and Block Scope:
var compName = "Test";
compName = "Main1";  // Values can be changed over time

let x = 123;
const y = 12; // Value cannot be changed over time

// Here, var compName has function scope, while let x and const y have block scope. let allows reassignment, while const does not.

// 2. Using var inside a function:
function test(){
    if(3>2){
        var x = 12;
        console.log("Value of x:" +x);
    }
    console.log("value of x: " +x); // in var, it still works
}
test();
//The variable x declared using var is hoisted to the function scope, and changes made inside the if block affect the entire function scope. This is one of the reasons why using var can lead to unexpected behavior in large applications.


//3. Using let outside a block:
let n = 123;
console.log(n);  // 123
n = 124;
console.log(n);  // 124
//let allows reassignment, and it respects block scope.

//4. Using const:
const m = 123;
console.log(m);  // 123
// m = 124;       // TypeError: Assignment to constant variable.
// console.log(m); // This would result in an error.

//const creates a constant variable, and once assigned, its value cannot be changed.