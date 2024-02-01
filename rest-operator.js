// Rest Operator: The rest operator puts the rest of some specific user-supplied values into a JavaScript array. 
// It’s typically used in the receiving location to capture multiple elements.
let myarr1 = [1,2,3,66,77,88,99,0,11];
let [x,y,...rest] = myarr1;
console.log(x);
console.log(y);
console.log(rest);
// -----------------------------------

function myBio(firstName, lastName, ...otherInfo){
    return otherInfo;
}
myData = myBio("Shiavnsh", "Bohra",24, "Narnaul", "Male")
console.log(myData);