// Arrow functions provide a more concise syntax for writing function expressions. 
// They don’t require the function keyword, the return keyword, or curly brackets1

// 1. we cannot use new keyword in this.


//ES5
function fun_name(){}

//ES6
// argument =>expression //If single line expression
// (arg1,arg2) => expression

// (arguments) =>{
//     //if two or more expressions use return and {}
//     return test
// }


//ES5
function square(x){
    return x*x
}
console.log(square(5))

//ES6
const squareA =(x) => x*x;
console.log(square(3));

let a=[3254,35566,6787]
a.forEach(e => console.log(e))

