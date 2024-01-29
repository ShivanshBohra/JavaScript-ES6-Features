let student = {
    name: "peter",
    city: "lucknow",
    display:function(){
        console.log(this.name+""+this.city)
    }
};
console.log(student)

// let name1 = "Ram",
// city1 = "lucknow";
// let student1 = {
// name1:name1,
// city1:city1,
// }
// console.log(student1);


//No need to assign name1:name1,city1:city1
let name1 = "Ram",
city1 = "lucknow";
let active = "Bohra"
let student1 = {
name1,
city1,
[active]:true,
display1(){
    console.log(this.name1)
    console.log(this.city1)
}
};
console.log(student1);
student1.display1();

// ------
function createObject(a,b,c)
{
    return {a,b,c}
}
let obj1 = createObject(11,22,44);
console.log(obj1);