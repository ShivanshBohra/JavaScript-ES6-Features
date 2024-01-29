
//looping over the arrays we use for-of loop
let numbers =[1,2,3,4];
for(let number in numbers){
    console.log(number);
}

//looping over the objects we use for-in loop
let obj = {
    name: "Leela",
    age: 20
};
for(let prop in obj){
    console.log(obj);
    console.log("Values:" +obj[prop]);
    console.log ("key: " +prop);
}