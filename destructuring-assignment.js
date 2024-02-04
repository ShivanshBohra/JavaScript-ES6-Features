// Destructuring in JavaScript (ES6):
// Destructuring is a powerful feature introduced in ES6 that provides 
// a concise and expressive way to extract values from arrays and objects 
// into distinct variables. It allows for assigning multiple values to 
// variables simultaneously, simplifying function arguments,
//  and avoiding nested object access.


// Array Destructuring:
//ES5
let myarr = [22, 55];
let x = myarr[0];
let y = myarr[1];


//ES6
let myarr1 = [22, 55];
let [x1, y1] = myarr1;
console.log(x1); // Output: 22
console.log(y1); // Output: 55

let[, , firstMaountain] = ['Everest','Fish Tail', 'Annapurna'];
console.log(firstMaountain);


// Object Destructuring:
let obj = {
    name: 'JavaScript',
    dbName: 'MongoDB'
};

let { name, dbName } = obj;
console.log(name); // Output: JavaScript
console.log(dbName); // Output: MongoDB


// Improved Code using Destructuring:
let uniStudent = student =>{
    console.log(`${student.name} from ${student.university}`)
}
uniStudent({
    name :'Ryan',
    university : 'University of Sydney'
})

// Improved version using destructuring
let uniStudent1 = ({ name, university }) => {
    console.log(`${name} from ${university}`);
};

uniStudent1({
    name: 'Ryan',
    university: 'University of Sydney'
});

//Destructuring simplifies the function argument, making the code more concise and readable. It directly extracts the name and university properties from the student object passed to uniStudent. This feature enhances code clarity
//  and reduces the need for explicit property access within the function body.