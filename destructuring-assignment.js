// Destructuring in JavaScript is a powerful feature introduced in ES6 
// that provides a concise and expressive way to extract values from arrays and objects into distinct variables. 
// With destructuring, you can assign multiple values to variables simultaneously, simplify function arguments,
//  and avoid nested object access.

//ES5
let myarr = [22,55]
let x = myarr[0]
let y = myarr[1]

//ES6
let myarr1=[22,55]
let [x1,y1] = myarr1;
console.log(x1);
console.log(y1);


let obj = {
    name: 'javaScript', dbName: 'Mongodb'
}
let {name,dbName} = obj;
console.log(name);
console.log(dbName);
