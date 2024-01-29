// we can pass dynamic values in backtick.

let x = 12;
let y = 45;


//ES5
console.log("Month number should be"
                + " between 1 and 12");

//ES6
let str = `value of ${x}`
console.log(str);